import { IconButtonOutline } from './IconButtonOutline.jsx';
import { IconIcArrowLeft } from './IconIcArrowLeft.jsx';
import { IconIcArrowRight } from './IconIcArrowRight.jsx';
import { IconIcArrowUp } from './IconIcArrowUp.jsx';
import { IconIcBook } from './IconIcBook.jsx';
import { IconIcCalendar } from './IconIcCalendar.jsx';
import { IconIcNote } from './IconIcNote.jsx';
import { IconIcPencil } from './IconIcPencil.jsx';
import { IconIcUser } from './IconIcUser.jsx';
import { ItemBanner } from './ItemBanner.jsx';
import { ItemMenu } from './ItemMenu.jsx';
import { ItemMenuIcon } from './ItemMenuIcon.jsx';

// figma node: 2080:7124 Left Navigation/OC (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "download=" + __venc(p.download) + '|' + "ocPDF=" + __venc(p.ocPDF) + '|' + "quiz=" + __venc(p.quiz) + '|' + "note=" + __venc(p.note) + '|' + "scheduler=" + __venc(p.scheduler) + '|' + "myPage=" + __venc(p.myPage);

export function LeftNavigationOC(_p = {}) {
  const props = { ..._p, state: _p.state ?? "expandable", download: _p.download ?? false, ocPDF: _p.ocPDF ?? false, quiz: _p.quiz ?? false, note: _p.note ?? false, scheduler: _p.scheduler ?? false, myPage: _p.myPage ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(217,217,217)",
        borderTop: "1px solid rgb(0,0,0)",
        borderRight: "1px solid rgb(0,0,0)",
        borderBottom: "1px solid rgb(0,0,0)",
        borderLeft: "1px solid rgb(0,0,0)",
      }} />
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          icon1={<IconIcBook fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          icon2={<IconIcArrowUp small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"다운받은 책"}
          type={"child"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <div style={{
          position: "relative",
          width: 216,
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "13px 12px 13px 48px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(97,97,97)",
              flexShrink: 0,
            }}>OC PDF</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(217,217,217)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 6px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "rgb(97,97,97)",
              flexShrink: 0,
            }}>Beta</span>
          </div>
        </div>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          icon1={<IconIcBook fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          icon2={<IconIcArrowUp small={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"다운받은 책"}
          type={"child"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <div style={{
          position: "relative",
          width: 216,
          borderRadius: 4,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "13px 12px 13px 48px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              color: "rgb(97,97,97)",
              flexShrink: 0,
            }}>OC PDF</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(217,217,217)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 6px 4px 6px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 10,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "14px",
              color: "rgb(97,97,97)",
              flexShrink: 0,
            }}>Beta</span>
          </div>
        </div>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 240,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 188, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowLeft small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 책장"}
          type={"parent"}
          state={"default"}
          disclosure={true}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 문제은행"}
          icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"내 오답노트"}
          icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"스케줄러"}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"default"}
          disclosure={false}
          badge={false}
          tag={false}
        />
        <ItemMenu
          style={{ position: "relative", width: 216, flexShrink: 0 }}
          text1={"마이페이지"}
          icon1={<IconIcUser fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          type={"parent"}
          state={"hover/focus"}
          disclosure={false}
          badge={false}
          tag={false}
        />
      </div>
      <ItemBanner
        style={{
          position: "absolute",
          left: 12,
          top: 589,
          width: 216,
        }}
        image={false}
        type={"default"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(217,217,217)",
        borderTop: "1px solid rgb(0,0,0)",
        borderRight: "1px solid rgb(0,0,0)",
        borderBottom: "1px solid rgb(0,0,0)",
        borderLeft: "1px solid rgb(0,0,0)",
      }} />
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <ItemMenuIcon state={"hover/focus"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
      </div>
      <IconButtonOutline
        style={{ position: "absolute", left: 14, top: 665 }}
        icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
        state={"default"}
        size={"md"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <ItemMenuIcon state={"hover/focus"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
      </div>
      <IconButtonOutline
        style={{ position: "absolute", left: 14, top: 665 }}
        icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
        state={"default"}
        size={"md"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 14, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcPencil fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"hover/focus"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 14, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcNote fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"hover/focus"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 14, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcCalendar fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"hover/focus"}
          dotBadge={false}
        />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 68,
      height: 729,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 68,
        height: 729,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(238,238,238)",
        borderRight: "1px solid rgb(238,238,238)",
        borderBottom: "1px solid rgb(238,238,238)",
        borderLeft: "1px solid rgb(238,238,238)",
      }} />
      <div style={{ position: "absolute", left: 14, top: 665 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcArrowRight small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      <div style={{
        position: "absolute",
        left: 12,
        top: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <ItemMenuIcon state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <ItemMenuIcon icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <ItemMenuIcon icon1={<IconIcNote fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} dotBadge={false} />}</div>
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcCalendar fill={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"hover/focus"}
          dotBadge={false}
        />
        <ItemMenuIcon
          style={{ position: "relative", flexShrink: 0 }}
          icon1={<IconIcUser fill={false} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
          state={"default"}
          dotBadge={false}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Expandable, Download=True, OC PDF=False, Quiz=False, Note=False, Scheduler=False, My page=False
    "state=expandable|download=true|ocPDF=false|quiz=false|note=false|scheduler=false|myPage=false": __body0,
    // figma: State=Expandable, Download=False, OC PDF=True, Quiz=False, Note=False, Scheduler=False, My page=False
    "state=expandable|download=false|ocPDF=true|quiz=false|note=false|scheduler=false|myPage=false": __body1,
    // figma: State=Expandable, Download=False, OC PDF=False, Quiz=True, Note=False, Scheduler=False, My page=False
    "state=expandable|download=false|ocPDF=false|quiz=true|note=false|scheduler=false|myPage=false": __body2,
    // figma: State=Expandable, Download=False, OC PDF=False, Quiz=False, Note=True, Scheduler=False, My page=False
    "state=expandable|download=false|ocPDF=false|quiz=false|note=true|scheduler=false|myPage=false": __body3,
    // figma: State=Expandable, Download=False, OC PDF=False, Quiz=False, Note=False, Scheduler=True, My page=False
    "state=expandable|download=false|ocPDF=false|quiz=false|note=false|scheduler=true|myPage=false": __body4,
    // figma: State=Expandable, Download=False, OC PDF=False, Quiz=False, Note=False, Scheduler=False, My page=True
    "state=expandable|download=false|ocPDF=false|quiz=false|note=false|scheduler=false|myPage=true": __body5,
    // figma: State=Compact, Download=True, OC PDF=False, Quiz=False, Note=False, Scheduler=False, My page=False
    "state=compact|download=true|ocPDF=false|quiz=false|note=false|scheduler=false|myPage=false": __body6,
    // figma: State=Compact, Download=False, OC PDF=True, Quiz=False, Note=False, Scheduler=False, My page=False
    "state=compact|download=false|ocPDF=true|quiz=false|note=false|scheduler=false|myPage=false": __body7,
    // figma: State=Compact, Download=False, OC PDF=False, Quiz=True, Note=False, Scheduler=False, My page=False
    "state=compact|download=false|ocPDF=false|quiz=true|note=false|scheduler=false|myPage=false": __body8,
    // figma: State=Compact, Download=False, OC PDF=False, Quiz=False, Note=True, Scheduler=False, My page=False
    "state=compact|download=false|ocPDF=false|quiz=false|note=true|scheduler=false|myPage=false": __body9,
    // figma: State=Compact, Download=False, OC PDF=False, Quiz=False, Note=False, Scheduler=False, My page=True
    "state=compact|download=false|ocPDF=false|quiz=false|note=false|scheduler=false|myPage=true": __body10,
    // figma: State=Compact, Download=False, OC PDF=False, Quiz=False, Note=False, Scheduler=True, My page=False
    "state=compact|download=false|ocPDF=false|quiz=false|note=false|scheduler=true|myPage=false": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default LeftNavigationOC;
