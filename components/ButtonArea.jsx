import { Button } from './Button.jsx';

// figma node: 7514:27548 ButtonArea (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fullWidth=" + __venc(p.fullWidth) + '|' + "button=" + __venc(p.button);

export function ButtonArea(_p = {}) {
  const props = { ..._p, fullWidth: _p.fullWidth ?? true, button: _p.button ?? "single" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Button
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        showPrefixes={false}
        showSuffixes={false}
        text1={"버튼"}
        state={"default"}
        size={"md"}
        theme={"primary"}
        style2={"fill"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 61, flexShrink: 0 }}>{props.icon1 ?? <Button showPrefixes={false} showSuffixes={false} text1={"버튼"} state={"default"} size={"md"} theme={"primary"} style2={"fill"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 360,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "20px 20px 20px 20px",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 61,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Button showPrefixes={false} showSuffixes={false} text1={"버튼"} state={"default"} size={"md"} theme={"secondary"} style2={"light"} />}</div>
      <div style={{
          position: "relative",
          width: 61,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} text1={"버튼"} state={"default"} size={"md"} theme={"primary"} style2={"fill"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 360,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Button
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        showPrefixes={false}
        showSuffixes={false}
        text1={"버튼"}
        state={"default"}
        size={"md"}
        theme={"secondary"}
        style2={"light"}
      />
      <Button
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        showPrefixes={false}
        showSuffixes={false}
        text1={"버튼"}
        state={"default"}
        size={"md"}
        theme={"primary"}
        style2={"fill"}
      />
    </div>
  );
  const __impls = {
    // figma: FullWidth=True, Button=Single
    "fullWidth=true|button=single": __body0,
    // figma: FullWidth=False, Button=Single
    "fullWidth=false|button=single": __body1,
    // figma: FullWidth=False, Button=Multi
    "fullWidth=false|button=multi": __body2,
    // figma: FullWidth=True, Button=Multi
    "fullWidth=true|button=multi": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonArea;
