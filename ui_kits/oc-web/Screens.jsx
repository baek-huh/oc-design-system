const DS = window.OCDesignSystem_0d42ed || {};
const Pick = ({ n, ...p }) => { const C = DS[n]; return C ? <C {...p} /> : <span style={{ color: 'var(--red-500)', font: '500 10px var(--font-mono)' }}>[{n}?]</span>; };

const NAV = [
  { key: 'download', label: '다운받은 책', top: 106 },
  { key: 'ocPDF', label: 'OC PDF', top: 154 },
  { key: 'quiz', label: '내 문제은행', top: 202 },
  { key: 'note', label: '내 오답노트', top: 254 },
  { key: 'scheduler', label: '스케줄러', top: 306 },
  { key: 'myPage', label: '마이페이지', top: 358 },
];

function SideNav({ active, onPick }) {
  const flags = Object.fromEntries(NAV.map(n => [n.key, n.key === active]));
  return (
    <aside style={{ width: 'fit-content', flexShrink: 0, position: 'relative' }}>
      <Pick n="LeftNavigationOC" state="expandable" {...flags} />
      {NAV.map(n => (
        <button key={n.key} aria-label={n.label} onClick={() => onPick(n.key)}
          style={{ position: 'absolute', left: 12, right: 12, top: n.top, height: 48, background: 'transparent', border: 0, cursor: 'pointer' }} />
      ))}
    </aside>
  );
}

function Toolbar({ onUpload, query, setQuery }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Pick n="Tab" type="text" size="md" tabType="fixed - 3tabs" />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Pick n="Search" size="md" state={query ? 'active' : 'default'} text1={query || '책 제목을 검색하세요'} />
        <div onClick={onUpload} style={{ cursor: 'pointer' }}>
          <Pick n="Button" theme="primary" style2="fill" size="md" text1="PDF 업로드" />
        </div>
      </div>
    </div>
  );
}

function FileTable({ rows, onDelete }) {
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 12, boxShadow: 'inset 0 0 0 1px var(--border)', overflow: 'hidden' }}>
      <Pick n="HeaderRow" sideLine={false} style={{ width: '100%' }} />
      {rows.map((r, i) => (
        <div key={r} style={{ position: 'relative' }} onClick={() => onDelete(r)} title="클릭하면 삭제">
          <Pick n="BodyRow" state="default" style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  );
}

function EmptyView({ onUpload }) {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 80 }}>
      <div onClick={onUpload} style={{ cursor: 'pointer' }}><Pick n="EmptyStates" visual="icon" button={true} header={true} /></div>
    </div>
  );
}

function UploadPopup({ onClose, onDone }) {
  const [state, setState] = React.useState('default');
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--surface)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, width: 480 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ font: '700 20px/28px var(--font-sans)', color: 'var(--text)' }}>PDF 업로드</div>
          <div onClick={onClose} style={{ cursor: 'pointer' }}><Pick n="IconButtonGhost" size="sm" /></div>
        </div>
        <div onClick={() => { setState('loading'); setTimeout(onDone, 900); }} style={{ cursor: 'pointer' }}>
          <Pick n="DropField" state={state} style={{ width: '100%' }} />
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <div onClick={onClose} style={{ cursor: 'pointer' }}><Pick n="Button" theme="secondary" style2="light" size="lg" text1="취소" /></div>
          <div onClick={() => { setState('loading'); setTimeout(onDone, 900); }} style={{ cursor: 'pointer' }}><Pick n="Button" theme="primary" style2="fill" size="lg" text1="업로드" /></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SideNav, Toolbar, FileTable, EmptyView, UploadPopup, Pick, NAV });
