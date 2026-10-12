import { BoxButtonSecondary } from './BoxButtonSecondary.jsx';
import { ItemCalendarHeader } from './ItemCalendarHeader.jsx';
import { ItemCell } from './ItemCell.jsx';

// figma node: 5331:2083 Calendar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Calendar(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 1px 3px rgba(0,0,0,0.08), 0px 0px 24px 0px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemCalendarHeader
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        calendarHeader={"yyyy.mm"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}>{props.icon1 ?? <ItemCell type={"text"} accent={true} disabled={false} focus={false} focusLeft={false} focusCenter={false} focusRight={false} />}</div>
          <div style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}>{props.icon2 ?? <ItemCell type={"text"} accent={false} disabled={false} focus={false} focusLeft={false} focusCenter={false} focusRight={false} />}</div>
          <div style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}>{props.icon3 ?? <ItemCell text1={"화"} type={"text"} accent={false} disabled={false} focus={false} focusLeft={false} focusCenter={false} focusRight={false} />}</div>
          <div style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}>{props.icon4 ?? <ItemCell text1={"수"} type={"text"} accent={false} disabled={false} focus={false} focusLeft={false} focusCenter={false} focusRight={false} />}</div>
          <ItemCell
            style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}
            text1={"목"}
            type={"text"}
            accent={false}
            disabled={false}
            focus={false}
            focusLeft={false}
            focusCenter={false}
            focusRight={false}
          />
          <ItemCell
            style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}
            text1={"금"}
            type={"text"}
            accent={false}
            disabled={false}
            focus={false}
            focusLeft={false}
            focusCenter={false}
            focusRight={false}
          />
          <ItemCell
            style={{
              position: "relative",
              width: 42,
              height: 42,
              flexShrink: 0,
            }}
            text1={"토"}
            type={"text"}
            accent={true}
            disabled={false}
            focus={false}
            focusLeft={false}
            focusCenter={false}
            focusRight={false}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"26"}
              type={"number"}
              accent={true}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"27"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"28"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"29"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"30"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"1"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"2"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"3"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"4"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"5"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"6"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"7"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"8"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"9"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"10"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"11"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"12"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"13"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"14"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"15"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"16"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"17"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"18"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"19"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"20"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"21"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"22"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"23"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"24"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"25"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"26"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"27"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"28"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"29"}
              type={"number"}
              accent={false}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"30"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"31"}
              type={"number"}
              accent={true}
              disabled={false}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"1"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"2"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"3"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"4"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"5"}
              type={"number"}
              accent={false}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
            <ItemCell
              style={{
                position: "relative",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
              text1={"6"}
              type={"number"}
              accent={true}
              disabled={true}
              focus={false}
              focusLeft={false}
              focusCenter={false}
              focusRight={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 1px 3px rgba(0,0,0,0.08), 0px 0px 24px 0px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemCalendarHeader
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        calendarHeader={"yyyy"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          alignContent: "space-between",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"1월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"2월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"3월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"4월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"5월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"6월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"7월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"8월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"9월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"10월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"11월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
          <BoxButtonSecondary
            style={{ position: "relative", width: 92, flexShrink: 0 }}
            text1={"12월"}
            state={"default"}
            size={"md"}
            icon={"none"}
          />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=MonthSet
    "state=monthset": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Calendar;
