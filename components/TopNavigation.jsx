import { BoxButtonOutline } from './BoxButtonOutline.jsx';
import { Divider } from './Divider.jsx';
import { IconButtonGhost } from './IconButtonGhost.jsx';
import { IconIcAlarm } from './IconIcAlarm.jsx';
import { IconIcChatBubbleDots } from './IconIcChatBubbleDots.jsx';
import { IconIcGraphBarUp } from './IconIcGraphBarUp.jsx';
import { IconIcLineThree } from './IconIcLineThree.jsx';

// figma node: 1798:5420 Top Navigation (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "domain=" + __venc(p.domain) + '|' + "login=" + __venc(p.login) + '|' + "desktop=" + __venc(p.desktop);

export function TopNavigation(_p = {}) {
  const props = { ..._p, domain: _p.domain ?? "converter", login: _p.login ?? true, desktop: _p.desktop ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1919.999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      padding: "17px 32px 17px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 215.999,
        height: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 123.607,
          height: 20,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 123.607,
            height: 20,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 2.069,
              width: 9.348,
              height: 17.931,
              overflow: "hidden",
            }}>
              <svg width={9.348} height={17.931} viewBox="0 0 9.348 17.931" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 9.348,
                height: 17.931,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 9.348 3.321 L 6.704 3.321 L 6.704 0 L 2.645 0 L 2.645 3.321 L 0 3.321 L 0 7.305 L 2.645 7.305 L 2.645 17.931 L 6.704 17.931 L 6.704 7.305 L 9.348 7.305 L 9.348 3.321 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 38.778,
              top: 0,
              width: 84.829,
              height: 20,
              overflow: "hidden",
            }}>
              <svg width={12.691} height={15.333} viewBox="0 0 12.691 15.333" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 4.667,
                width: 12.691,
                height: 15.333,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 6.276 0 C 2.838 0 0.092 1.798 0.092 4.645 C 0.092 7.617 2.215 8.691 5.446 9.215 C 7.776 9.59 8.699 10.039 8.699 10.738 C 8.699 11.413 7.73 11.937 6.415 11.937 C 5.122 11.937 4.107 10.949 3.969 10 L 0 10 C 0.138 13.072 2.815 15.333 6.345 15.333 C 9.783 15.333 12.691 13.485 12.691 10.489 C 12.691 7.966 11.26 6.543 7.268 5.894 C 4.961 5.494 4.061 5.144 4.061 4.42 C 4.061 3.771 4.961 3.296 6.207 3.296 C 7.407 3.296 8.353 3.746 8.491 4.645 L 12.46 4.645 C 12.299 1.748 9.645 0 6.276 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={9.351} height={18} viewBox="0 0 9.351 18" fill="none" style={{
                position: "absolute",
                left: 13.358,
                top: 2,
                width: 9.351,
                height: 18,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 9.351 3.333 L 6.705 3.333 L 6.705 0 L 2.646 0 L 2.646 3.333 L 0 3.333 L 0 7.333 L 2.646 7.333 L 2.646 18 L 6.705 18 L 6.705 7.333 L 9.351 7.333 L 9.351 3.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={14.695} height={20} viewBox="0 0 14.695 20" fill="none" style={{
                position: "absolute",
                left: 24.047,
                top: 0,
                width: 14.695,
                height: 20,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 8.058 20 C 11.97 20 14.695 16.979 14.695 12.81 C 14.695 8.642 11.97 5.621 8.058 5.621 C 6.264 5.621 4.96 6.253 4.145 7.354 L 4.145 0 L 0 0 L 0 20 L 4.145 20 L 4.145 18.669 C 4.96 19.77 6.264 20 8.058 20 Z M 7.406 16.44 C 5.38 16.44 4.075 14.918 4.075 12.81 C 4.075 10.703 5.38 9.18 7.406 9.18 C 9.385 9.18 10.643 10.703 10.643 12.81 C 10.643 14.918 9.385 16.44 7.406 16.44 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={14.695} height={14.667} viewBox="0 0 14.695 14.667" fill="none" style={{
                position: "absolute",
                left: 39.408,
                top: 5.334,
                width: 14.695,
                height: 14.667,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 6.637 14.667 C 8.43 14.667 9.734 14.457 10.549 13.335 L 10.549 14.667 L 14.695 14.667 L 14.695 0.334 L 10.549 0.334 L 10.549 1.768 C 9.734 0.645 8.43 0 6.637 0 C 2.725 0 0 3.081 0 7.333 C 0 11.585 2.725 14.667 6.637 14.667 Z M 7.289 11.036 C 5.31 11.036 4.052 9.483 4.052 7.333 C 4.052 5.183 5.31 3.631 7.289 3.631 C 9.315 3.631 10.619 5.183 10.619 7.333 C 10.619 9.483 9.315 11.036 7.289 11.036 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={13.995} height={14.667} viewBox="0 0 13.995 14.667" fill="none" style={{
                position: "absolute",
                left: 55.471,
                top: 5.334,
                width: 13.995,
                height: 14.667,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 0 14.667 L 4.363 14.667 L 4.363 7.309 C 4.363 5.084 5.392 3.74 7.108 3.74 C 8.75 3.74 9.632 4.938 9.632 7.113 L 9.632 14.667 L 13.995 14.667 L 13.995 6.38 C 13.995 2.42 11.716 0 8.382 0 C 6.544 0 5.221 0.189 4.363 1.338 L 4.363 0.342 L 0 0.342 L 0 14.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={14.027} height={20} viewBox="0 0 14.027 20" fill="none" style={{
                position: "absolute",
                left: 70.802,
                top: 0,
                width: 14.027,
                height: 20,
                color: "rgb(34,34,34)",
              }}>
                <path d={"M 9.241 20 L 14.027 20 L 8.44 12 L 13.744 6.048 L 9.076 6.048 L 4.196 11.738 L 4.196 0 L 0 0 L 0 20 L 4.196 20 L 4.196 16.786 L 5.87 14.881 L 9.241 20 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <svg width={26.660} height={14.483} viewBox="0 0 26.660 14.483" fill="none" style={{
              position: "absolute",
              left: 10.733,
              top: 5.517,
              width: 26.66,
              height: 14.483,
              color: "rgb(32,112,240)",
            }}>
              <path d={"M 26.66 10.533 L 24.043 14.483 L 0 14.483 L 2.617 10.533 L 26.66 10.533 Z M 8.525 5.266 L 5.908 9.216 L 0 9.216 L 2.617 5.266 L 8.525 5.266 Z M 26.66 5.266 L 24.043 9.216 L 9.085 9.216 L 11.702 5.266 L 26.66 5.266 Z M 26.66 0 L 24.043 3.95 L 0 3.95 L 2.617 0 L 26.66 0 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 133.595,
          top: 0,
          width: 82.405,
          height: 20,
          overflow: "hidden",
        }}>
          <svg width={82.405} height={20} viewBox="0 0 82.405 20" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 82.405,
            height: 20,
            color: "rgb(238,238,238)",
          }}>
            <path d={"M 0 2 C 0 0.895 0.894 0 1.998 0 L 80.407 0 C 81.51 0 82.405 0.895 82.405 2 L 82.405 18 C 82.405 19.105 81.51 20 80.407 20 L 1.998 20 C 0.894 20 0 19.105 0 18 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={69.404} height={10.535} viewBox="0 0 69.404 10.535" fill="none" style={{
            position: "absolute",
            left: 6.644,
            top: 4.856,
            width: 69.404,
            height: 10.535,
            color: "rgb(34,34,34)",
          }}>
            <path d={"M 6.93 3.837 L 9.363 3.837 C 9.109 1.395 7.291 0 4.837 0 C 2.107 0 0 1.883 0 5.268 C 0 8.638 2.065 10.535 4.837 10.535 C 7.609 10.535 9.172 8.652 9.363 6.825 L 6.93 6.811 C 6.747 7.816 5.983 8.411 4.88 8.411 C 3.409 8.411 2.461 7.335 2.461 5.268 C 2.461 3.271 3.387 2.117 4.894 2.124 C 6.039 2.117 6.796 2.782 6.93 3.837 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 14.314 10.535 C 16.718 10.535 18.175 8.942 18.175 6.57 C 18.175 4.198 16.718 2.605 14.314 2.605 C 11.916 2.605 10.452 4.198 10.452 6.57 C 10.452 8.942 11.916 10.535 14.314 10.535 Z M 12.885 6.556 C 12.878 5.275 13.387 4.383 14.328 4.375 C 15.24 4.383 15.749 5.275 15.742 6.556 C 15.749 7.845 15.24 8.73 14.328 8.737 C 13.387 8.73 12.878 7.845 12.885 6.556 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 21.796 5.99 C 21.796 5.098 22.319 4.567 23.111 4.56 C 23.903 4.567 24.37 5.083 24.37 5.947 L 24.37 10.394 L 26.746 10.394 L 26.746 5.494 C 26.753 3.752 25.706 2.605 24.087 2.605 C 22.955 2.605 22.1 3.179 21.753 4.106 L 21.668 4.106 L 21.668 2.705 L 19.405 2.705 L 19.405 10.394 L 21.796 10.394 L 21.796 5.99 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 35.359 2.705 L 32.842 2.705 L 31.399 8.043 L 31.314 8.043 L 29.858 2.705 L 27.354 2.705 L 29.985 10.394 L 32.715 10.394 L 35.359 2.705 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 39.603 10.535 C 41.59 10.535 42.905 9.572 43.195 8.071 L 40.975 8.071 C 40.784 8.524 40.296 8.808 39.645 8.808 C 38.676 8.808 38.082 8.163 38.075 7.179 L 38.075 7.137 L 43.223 7.137 L 43.223 6.528 C 43.223 3.979 41.675 2.605 39.518 2.605 C 37.212 2.605 35.727 4.198 35.727 6.584 C 35.727 9.034 37.198 10.535 39.603 10.535 Z M 38.075 5.735 C 38.11 4.942 38.733 4.333 39.574 4.333 C 40.395 4.333 40.989 4.914 41.003 5.735 L 38.075 5.735 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 44.454 10.394 L 46.844 10.394 L 46.844 6.188 C 46.837 5.26 47.495 4.637 48.386 4.645 C 48.676 4.637 49.107 4.687 49.334 4.758 L 49.334 2.676 C 49.136 2.634 48.874 2.598 48.655 2.591 C 47.806 2.598 47.127 3.087 46.844 4.092 L 46.773 4.092 L 46.773 2.705 L 44.454 2.705 L 44.454 10.394 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 54.949 2.705 L 53.548 2.705 L 53.548 0.864 L 51.172 0.864 L 51.172 2.705 L 50.14 2.705 L 50.14 4.46 L 51.172 4.46 L 51.172 8.255 C 51.158 9.806 52.169 10.5 53.86 10.507 C 54.418 10.5 54.814 10.457 55.048 10.422 L 55.048 8.595 C 54.779 8.616 54.397 8.638 54.199 8.624 C 53.796 8.616 53.555 8.468 53.548 7.986 L 53.548 4.46 L 54.949 4.46 L 54.949 2.705 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 59.673 10.535 C 61.66 10.535 62.975 9.572 63.265 8.071 L 61.045 8.071 C 60.854 8.524 60.366 8.808 59.715 8.808 C 58.746 8.808 58.152 8.163 58.145 7.179 L 58.145 7.137 L 63.293 7.137 L 63.293 6.528 C 63.293 3.979 61.745 2.605 59.588 2.605 C 57.282 2.605 55.797 4.198 55.797 6.584 C 55.797 9.034 57.268 10.535 59.673 10.535 Z M 58.145 5.735 C 58.18 4.942 58.803 4.333 59.644 4.333 C 60.465 4.333 61.059 4.914 61.073 5.735 L 58.145 5.735 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 64.524 10.394 L 66.914 10.394 L 66.914 6.188 C 66.907 5.26 67.565 4.637 68.456 4.645 C 68.746 4.637 69.177 4.687 69.404 4.758 L 69.404 2.676 C 69.206 2.634 68.944 2.598 68.725 2.591 C 67.876 2.598 67.197 3.087 66.914 4.092 L 66.844 4.092 L 66.844 2.705 L 64.524 2.705 L 64.524 10.394 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconButtonGhost icon1={<IconIcChatBubbleDots fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <IconButtonGhost icon1={<IconIcGraphBarUp fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "pre-wrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{"이이름"}{" | "}{"작업자"}</span>
        <div style={{
            position: "relative",
            width: 66,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <BoxButtonOutline text1={"로그아웃"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1920,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "17px 32px 17px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 162,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 97,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 97,
            height: 20,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 97,
              height: 20,
              clipPath: "inset(0px 0px 0px 0px)",
            }}>
              <div style={{
                position: "absolute",
                left: 0.597,
                top: 0,
                width: 96.403,
                height: 20,
                overflow: "hidden",
              }}>
                <svg width={29.916} height={20} viewBox="0 0 29.916 20" fill="none" style={{
                  position: "absolute",
                  left: 66.487,
                  top: 0,
                  width: 29.916,
                  height: 20,
                  color: "rgb(238,238,238)",
                }}>
                  <path d={"M 26.29 0 L 3.626 0 C 1.623 0 0 1.628 0 3.636 L 0 16.364 C 0 18.372 1.623 20 3.626 20 L 26.29 20 C 28.292 20 29.916 18.372 29.916 16.364 L 29.916 3.636 C 29.916 1.628 28.292 0 26.29 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={17.618} height={6.534} viewBox="0 0 17.618 6.534" fill="none" style={{
                  position: "absolute",
                  left: 72.681,
                  top: 7.209,
                  width: 17.618,
                  height: 6.534,
                  color: "rgb(97,97,97)",
                }}>
                  <path d={"M 0 6.428 L 2.452 6.428 C 3.948 6.428 4.621 5.682 4.621 4.696 C 4.621 3.702 3.931 3.143 3.293 3.107 L 3.293 3.045 C 3.882 2.894 4.373 2.49 4.373 1.687 C 4.373 0.732 3.714 0 2.346 0 L 0 0 L 0 6.428 Z M 0.974 5.593 L 0.974 3.542 L 2.399 3.542 C 3.169 3.542 3.656 4.035 3.656 4.652 C 3.656 5.185 3.284 5.589 2.364 5.593 L 0.974 5.593 Z M 0.974 2.779 L 0.974 0.835 L 2.284 0.835 C 3.05 0.835 3.417 1.234 3.417 1.767 C 3.417 2.384 2.913 2.774 2.266 2.779 L 0.974 2.779 Z M 7.658 6.525 C 8.716 6.525 9.455 6.001 9.667 5.22 L 8.711 5.22 C 8.552 5.513 8.202 5.744 7.667 5.744 C 6.879 5.744 6.339 5.225 6.312 4.306 L 9.729 4.306 L 9.729 3.968 C 9.729 2.224 8.689 1.545 7.596 1.545 C 6.255 1.545 5.369 2.566 5.374 4.048 C 5.369 5.544 6.241 6.525 7.658 6.525 Z M 6.317 3.596 C 6.356 2.916 6.848 2.322 7.605 2.326 C 8.326 2.322 8.8 2.863 8.8 3.596 L 6.317 3.596 Z M 12.917 1.607 L 11.934 1.607 L 11.934 0.453 L 10.995 0.453 L 10.995 1.607 L 10.287 1.607 L 10.287 2.361 L 10.995 2.361 L 10.995 5.202 C 10.987 6.081 11.655 6.49 12.394 6.49 C 12.655 6.49 12.859 6.472 12.987 6.454 L 12.987 5.629 C 12.854 5.642 12.646 5.655 12.509 5.655 C 12.204 5.651 11.938 5.553 11.934 5.007 L 11.934 2.361 L 12.917 2.361 L 12.917 1.607 Z M 13.616 5.069 C 13.611 6.01 14.324 6.534 15.236 6.534 C 16.033 6.534 16.475 6.13 16.661 5.771 L 16.697 5.771 L 16.697 6.428 L 17.618 6.428 L 17.618 3.223 C 17.613 1.824 16.498 1.545 15.732 1.545 C 14.594 1.545 13.851 2.122 13.766 2.921 L 14.705 2.921 C 14.802 2.566 15.139 2.308 15.696 2.308 C 16.338 2.308 16.675 2.623 16.67 3.169 L 16.675 3.556 C 16.453 3.564 15.732 3.604 15.413 3.622 C 14.545 3.684 13.611 3.968 13.616 5.069 Z M 14.537 5.078 C 14.537 4.603 14.926 4.368 15.546 4.323 C 15.772 4.31 16.458 4.261 16.675 4.248 L 16.679 4.687 C 16.679 5.26 16.219 5.775 15.448 5.779 C 14.917 5.775 14.537 5.54 14.537 5.078 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <svg width={59.129} height={18.070} viewBox="0 0 59.129 18.070" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 1.085,
                  width: 59.129,
                  height: 18.07,
                  color: "rgb(34,119,255)",
                }}>
                  <path d={"M 24.598 17.822 C 26.201 17.822 27.366 17.259 28.094 16.278 L 28.094 17.53 L 31.799 17.53 L 31.799 5.301 L 28.094 5.301 L 28.094 6.553 C 27.366 5.572 26.201 5.009 24.598 5.009 C 21.102 5.009 18.667 7.701 18.667 11.415 C 18.667 15.13 21.102 17.822 24.598 17.822 Z M 25.181 14.65 C 23.412 14.65 22.288 13.294 22.288 11.415 C 22.288 9.537 23.412 8.181 25.181 8.181 C 26.991 8.181 28.157 9.537 28.157 11.415 C 28.157 13.294 26.991 14.65 25.181 14.65 Z M 39.485 5.009 C 36.384 5.009 33.908 6.511 33.908 8.89 C 33.908 11.374 35.822 12.271 38.736 12.709 C 40.838 13.022 41.67 13.398 41.67 13.982 C 41.67 14.546 40.796 14.984 39.61 14.984 C 38.445 14.984 37.529 14.462 37.404 13.669 L 33.825 13.669 C 33.949 16.236 36.363 17.822 39.547 17.822 C 42.648 17.822 45.27 16.278 45.27 13.774 C 45.27 11.666 43.98 10.476 40.38 9.934 C 38.299 9.6 37.487 9.308 37.487 8.702 C 37.487 8.16 38.299 7.763 39.423 7.763 C 40.505 7.763 41.358 8.222 41.483 8.974 L 45.062 8.974 C 44.917 6.553 42.523 5.009 39.485 5.009 Z M 47.246 17.53 L 50.95 17.53 L 50.95 11.248 C 50.95 9.349 51.824 8.202 53.281 8.202 C 54.675 8.202 55.425 9.224 55.425 11.082 L 55.425 17.53 L 59.129 17.53 L 59.129 10.455 C 59.129 7.075 57.193 5.009 54.363 5.009 C 52.802 5.009 51.679 5.572 50.95 6.553 L 50.95 0 L 47.246 0 L 47.246 17.53 Z M 5.66 5.009 C 2.56 5.009 0.083 6.511 0.083 8.89 C 0.083 11.374 1.998 12.271 4.911 12.709 C 7.013 13.022 7.846 13.398 7.846 13.982 C 7.846 14.546 6.972 14.984 5.785 14.984 C 4.62 14.984 3.704 14.462 3.579 13.669 L 0 13.669 C 0.125 16.236 2.539 17.822 5.723 17.822 C 8.824 17.822 11.446 16.278 11.446 13.774 C 11.446 11.666 10.156 10.476 6.555 9.934 C 4.474 9.6 3.663 9.308 3.663 8.702 C 3.663 8.16 4.474 7.763 5.598 7.763 C 6.68 7.763 7.533 8.222 7.658 8.974 L 11.238 8.974 C 11.092 6.553 8.699 5.009 5.66 5.009 Z M 18.938 0.332 L 15.216 0.332 L 12.095 18.07 L 15.816 18.07 L 18.938 0.332 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            transform: "matrix(0,-1,1,0,109,20)",
            transformOrigin: "0 0",
          }}>{props.icon1 ?? <Divider hierarchy={"hierarchy-1"} margin={"0px"} />}</div>
        <div className="fig-asset-61f904f65c801dd5" style={{
          position: "relative",
          width: 40,
          height: 20,
          flexShrink: 0,
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <IconButtonGhost icon1={<IconIcAlarm fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "pre-wrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{"이이름"}{" | "}{"작업자"}</span>
        <div style={{
            position: "relative",
            width: 66,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <BoxButtonOutline text1={"로그아웃"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1920,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 32px 14px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(33,33,33)",
      ...props.style,
    }}>
      <svg width={140} height={20} viewBox="0 0 140 20" fill="none" style={{
        position: "relative",
        width: 140,
        height: 20,
        flexShrink: 0,
      }}>
        <path d={"M 37.368 0 L 33.187 0 L 29.68 19.871 L 33.861 19.871 L 37.368 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 6.359 5.646 C 9.773 5.646 12.462 7.376 12.625 10.088 L 8.604 10.088 C 8.464 9.246 7.505 8.732 6.289 8.732 C 5.027 8.732 4.115 9.176 4.115 9.784 C 4.115 10.462 5.027 10.789 7.365 11.163 C 11.409 11.771 12.859 13.103 12.859 15.465 C 12.859 18.27 9.913 20 6.43 20 C 2.852 20 0.14 18.223 0 15.348 L 4.021 15.348 C 4.162 16.236 5.19 16.821 6.5 16.821 C 7.832 16.821 8.814 16.33 8.814 15.698 C 8.814 15.044 7.879 14.623 5.518 14.272 C 2.244 13.781 0.094 12.776 0.094 9.994 C 0.094 7.329 2.876 5.646 6.359 5.646 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 21.882 5.646 C 26.114 5.646 29.153 8.662 29.153 12.823 C 29.153 16.984 26.114 20 21.882 20 C 17.65 20 14.611 16.984 14.611 12.823 C 14.611 8.662 17.65 5.646 21.882 5.646 Z M 21.882 9.199 C 19.918 9.199 18.632 10.719 18.632 12.823 C 18.632 14.927 19.918 16.446 21.882 16.446 C 23.846 16.446 25.132 14.927 25.132 12.823 C 25.132 10.719 23.846 9.199 21.882 9.199 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 60.045 20 C 55.86 20 52.914 17.008 52.914 12.823 C 52.914 8.662 55.86 5.646 60.045 5.646 C 64.23 5.646 67.176 8.638 67.176 12.823 C 67.176 13.22 67.153 13.665 67.082 14.156 L 57.052 14.156 C 57.38 15.745 58.479 16.657 60.045 16.657 C 61.237 16.657 62.219 16.236 62.57 15.582 L 66.755 15.582 C 66.054 18.2 63.365 20 60.045 20 Z M 57.029 11.467 L 63.108 11.467 C 62.757 9.831 61.682 8.942 60.045 8.942 C 58.408 8.942 57.38 9.831 57.029 11.467 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 48.496 5.973 L 52.705 5.973 L 47.444 19.673 L 43.119 19.673 L 37.858 5.973 L 42.371 5.973 L 45.434 14.904 L 48.496 5.973 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 132.679 19.976 C 128.383 19.976 125.359 16.904 125.359 12.608 C 125.359 8.336 128.383 5.24 132.679 5.24 C 136.976 5.24 140 8.312 140 12.608 C 140 13.016 139.976 13.472 139.904 13.976 L 129.607 13.976 C 129.943 15.608 131.071 16.544 132.679 16.544 C 133.903 16.544 134.911 16.112 135.272 15.44 L 139.568 15.44 C 138.848 18.128 136.088 19.976 132.679 19.976 Z M 129.583 11.216 L 135.824 11.216 C 135.464 9.536 134.359 8.624 132.679 8.624 C 130.999 8.624 129.943 9.536 129.583 11.216 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 114.693 19.64 L 114.693 5.576 L 118.965 5.576 L 118.965 7.016 C 119.805 5.888 121.101 5.24 122.901 5.24 C 123.693 5.24 124.197 5.288 124.75 5.48 L 124.798 9.488 C 124.197 9.176 123.453 9.008 122.613 9.008 C 120.333 9.008 118.965 10.304 118.965 12.44 L 118.965 19.64 L 114.693 19.64 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 104.965 5.24 C 109.309 5.24 112.429 8.336 112.429 12.608 C 112.429 16.88 109.309 19.976 104.965 19.976 C 100.62 19.976 97.5 16.88 97.5 12.608 C 97.5 8.336 100.62 5.24 104.965 5.24 Z M 104.965 8.888 C 102.948 8.888 101.628 10.448 101.628 12.608 C 101.628 14.768 102.948 16.328 104.965 16.328 C 106.981 16.328 108.301 14.768 108.301 12.608 C 108.301 10.448 106.981 8.888 104.965 8.888 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 96.763 5.576 L 96.763 9.248 L 93.979 9.248 L 93.979 19.64 L 89.707 19.64 L 89.707 9.248 L 86.922 9.248 L 86.922 5.576 L 89.707 5.576 L 89.707 1.4 L 93.979 1.4 L 93.979 5.576 L 96.763 5.576 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 79.336 5.24 C 82.84 5.24 85.601 7.016 85.769 9.8 L 81.64 9.8 C 81.496 8.936 80.512 8.408 79.264 8.408 C 77.968 8.408 77.032 8.864 77.032 9.488 C 77.032 10.184 77.968 10.52 80.368 10.904 C 84.52 11.528 86.009 12.896 86.009 15.32 C 86.009 18.2 82.984 19.976 79.408 19.976 C 75.736 19.976 72.951 18.152 72.807 15.2 L 76.936 15.2 C 77.08 16.112 78.136 16.712 79.48 16.712 C 80.848 16.712 81.856 16.208 81.856 15.56 C 81.856 14.888 80.896 14.456 78.472 14.096 C 75.111 13.592 72.903 12.56 72.903 9.704 C 72.903 6.968 75.76 5.24 79.336 5.24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "고객센터"}</span>
        <div style={{
            position: "relative",
            width: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <BoxButtonOutline text1={"로그인"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1920,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 32px 14px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(33,33,33)",
      ...props.style,
    }}>
      <svg width={140} height={20} viewBox="0 0 140 20" fill="none" style={{
        position: "relative",
        width: 140,
        height: 20,
        flexShrink: 0,
      }}>
        <path d={"M 37.368 0 L 33.187 0 L 29.68 19.871 L 33.861 19.871 L 37.368 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 6.359 5.646 C 9.773 5.646 12.462 7.376 12.625 10.088 L 8.604 10.088 C 8.464 9.246 7.505 8.732 6.289 8.732 C 5.027 8.732 4.115 9.176 4.115 9.784 C 4.115 10.462 5.027 10.789 7.365 11.163 C 11.409 11.771 12.859 13.103 12.859 15.465 C 12.859 18.27 9.913 20 6.43 20 C 2.852 20 0.14 18.223 0 15.348 L 4.021 15.348 C 4.162 16.236 5.19 16.821 6.5 16.821 C 7.832 16.821 8.814 16.33 8.814 15.698 C 8.814 15.044 7.879 14.623 5.518 14.272 C 2.244 13.781 0.094 12.776 0.094 9.994 C 0.094 7.329 2.876 5.646 6.359 5.646 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 21.882 5.646 C 26.114 5.646 29.153 8.662 29.153 12.823 C 29.153 16.984 26.114 20 21.882 20 C 17.65 20 14.611 16.984 14.611 12.823 C 14.611 8.662 17.65 5.646 21.882 5.646 Z M 21.882 9.199 C 19.918 9.199 18.632 10.719 18.632 12.823 C 18.632 14.927 19.918 16.446 21.882 16.446 C 23.846 16.446 25.132 14.927 25.132 12.823 C 25.132 10.719 23.846 9.199 21.882 9.199 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 60.045 20 C 55.86 20 52.914 17.008 52.914 12.823 C 52.914 8.662 55.86 5.646 60.045 5.646 C 64.23 5.646 67.176 8.638 67.176 12.823 C 67.176 13.22 67.153 13.665 67.082 14.156 L 57.052 14.156 C 57.38 15.745 58.479 16.657 60.045 16.657 C 61.237 16.657 62.219 16.236 62.57 15.582 L 66.755 15.582 C 66.054 18.2 63.365 20 60.045 20 Z M 57.029 11.467 L 63.108 11.467 C 62.757 9.831 61.682 8.942 60.045 8.942 C 58.408 8.942 57.38 9.831 57.029 11.467 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 48.496 5.973 L 52.705 5.973 L 47.444 19.673 L 43.119 19.673 L 37.858 5.973 L 42.371 5.973 L 45.434 14.904 L 48.496 5.973 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 132.679 19.976 C 128.383 19.976 125.359 16.904 125.359 12.608 C 125.359 8.336 128.383 5.24 132.679 5.24 C 136.976 5.24 140 8.312 140 12.608 C 140 13.016 139.976 13.472 139.904 13.976 L 129.607 13.976 C 129.943 15.608 131.071 16.544 132.679 16.544 C 133.903 16.544 134.911 16.112 135.272 15.44 L 139.568 15.44 C 138.848 18.128 136.088 19.976 132.679 19.976 Z M 129.583 11.216 L 135.824 11.216 C 135.464 9.536 134.359 8.624 132.679 8.624 C 130.999 8.624 129.943 9.536 129.583 11.216 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 114.693 19.64 L 114.693 5.576 L 118.965 5.576 L 118.965 7.016 C 119.805 5.888 121.101 5.24 122.901 5.24 C 123.693 5.24 124.197 5.288 124.75 5.48 L 124.798 9.488 C 124.197 9.176 123.453 9.008 122.613 9.008 C 120.333 9.008 118.965 10.304 118.965 12.44 L 118.965 19.64 L 114.693 19.64 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 104.965 5.24 C 109.309 5.24 112.429 8.336 112.429 12.608 C 112.429 16.88 109.309 19.976 104.965 19.976 C 100.62 19.976 97.5 16.88 97.5 12.608 C 97.5 8.336 100.62 5.24 104.965 5.24 Z M 104.965 8.888 C 102.948 8.888 101.628 10.448 101.628 12.608 C 101.628 14.768 102.948 16.328 104.965 16.328 C 106.981 16.328 108.301 14.768 108.301 12.608 C 108.301 10.448 106.981 8.888 104.965 8.888 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 96.763 5.576 L 96.763 9.248 L 93.979 9.248 L 93.979 19.64 L 89.707 19.64 L 89.707 9.248 L 86.922 9.248 L 86.922 5.576 L 89.707 5.576 L 89.707 1.4 L 93.979 1.4 L 93.979 5.576 L 96.763 5.576 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 79.336 5.24 C 82.84 5.24 85.601 7.016 85.769 9.8 L 81.64 9.8 C 81.496 8.936 80.512 8.408 79.264 8.408 C 77.968 8.408 77.032 8.864 77.032 9.488 C 77.032 10.184 77.968 10.52 80.368 10.904 C 84.52 11.528 86.009 12.896 86.009 15.32 C 86.009 18.2 82.984 19.976 79.408 19.976 C 75.736 19.976 72.951 18.152 72.807 15.2 L 76.936 15.2 C 77.08 16.112 78.136 16.712 79.48 16.712 C 80.848 16.712 81.856 16.208 81.856 15.56 C 81.856 14.888 80.896 14.456 78.472 14.096 C 75.111 13.592 72.903 12.56 72.903 9.704 C 72.903 6.968 75.76 5.24 79.336 5.24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text1 ?? "고객센터"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text2 ?? "주문내역"}</span>
        <div style={{
            position: "relative",
            width: 66,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <BoxButtonOutline text1={"로그아웃"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 20px 14px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(33,33,33)",
      ...props.style,
    }}>
      <svg width={140} height={20} viewBox="0 0 140 20" fill="none" style={{
        position: "relative",
        width: 140,
        height: 20,
        flexShrink: 0,
      }}>
        <path d={"M 37.368 0 L 33.187 0 L 29.68 19.871 L 33.861 19.871 L 37.368 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 6.359 5.646 C 9.773 5.646 12.462 7.376 12.625 10.088 L 8.604 10.088 C 8.464 9.246 7.505 8.732 6.289 8.732 C 5.027 8.732 4.115 9.176 4.115 9.784 C 4.115 10.462 5.027 10.789 7.365 11.163 C 11.409 11.771 12.859 13.103 12.859 15.465 C 12.859 18.27 9.913 20 6.43 20 C 2.852 20 0.14 18.223 0 15.348 L 4.021 15.348 C 4.162 16.236 5.19 16.821 6.5 16.821 C 7.832 16.821 8.814 16.33 8.814 15.698 C 8.814 15.044 7.879 14.623 5.518 14.272 C 2.244 13.781 0.094 12.776 0.094 9.994 C 0.094 7.329 2.876 5.646 6.359 5.646 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 21.882 5.646 C 26.114 5.646 29.153 8.662 29.153 12.823 C 29.153 16.984 26.114 20 21.882 20 C 17.65 20 14.611 16.984 14.611 12.823 C 14.611 8.662 17.65 5.646 21.882 5.646 Z M 21.882 9.199 C 19.918 9.199 18.632 10.719 18.632 12.823 C 18.632 14.927 19.918 16.446 21.882 16.446 C 23.846 16.446 25.132 14.927 25.132 12.823 C 25.132 10.719 23.846 9.199 21.882 9.199 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 60.045 20 C 55.86 20 52.914 17.008 52.914 12.823 C 52.914 8.662 55.86 5.646 60.045 5.646 C 64.23 5.646 67.176 8.638 67.176 12.823 C 67.176 13.22 67.153 13.665 67.082 14.156 L 57.052 14.156 C 57.38 15.745 58.479 16.657 60.045 16.657 C 61.237 16.657 62.219 16.236 62.57 15.582 L 66.755 15.582 C 66.054 18.2 63.365 20 60.045 20 Z M 57.029 11.467 L 63.108 11.467 C 62.757 9.831 61.682 8.942 60.045 8.942 C 58.408 8.942 57.38 9.831 57.029 11.467 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 48.496 5.973 L 52.705 5.973 L 47.444 19.673 L 43.119 19.673 L 37.858 5.973 L 42.371 5.973 L 45.434 14.904 L 48.496 5.973 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 132.679 19.976 C 128.383 19.976 125.359 16.904 125.359 12.608 C 125.359 8.336 128.383 5.24 132.679 5.24 C 136.976 5.24 140 8.312 140 12.608 C 140 13.016 139.976 13.472 139.904 13.976 L 129.607 13.976 C 129.943 15.608 131.071 16.544 132.679 16.544 C 133.903 16.544 134.911 16.112 135.272 15.44 L 139.568 15.44 C 138.848 18.128 136.088 19.976 132.679 19.976 Z M 129.583 11.216 L 135.824 11.216 C 135.464 9.536 134.359 8.624 132.679 8.624 C 130.999 8.624 129.943 9.536 129.583 11.216 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 114.693 19.64 L 114.693 5.576 L 118.965 5.576 L 118.965 7.016 C 119.805 5.888 121.101 5.24 122.901 5.24 C 123.693 5.24 124.197 5.288 124.75 5.48 L 124.798 9.488 C 124.197 9.176 123.453 9.008 122.613 9.008 C 120.333 9.008 118.965 10.304 118.965 12.44 L 118.965 19.64 L 114.693 19.64 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 104.965 5.24 C 109.309 5.24 112.429 8.336 112.429 12.608 C 112.429 16.88 109.309 19.976 104.965 19.976 C 100.62 19.976 97.5 16.88 97.5 12.608 C 97.5 8.336 100.62 5.24 104.965 5.24 Z M 104.965 8.888 C 102.948 8.888 101.628 10.448 101.628 12.608 C 101.628 14.768 102.948 16.328 104.965 16.328 C 106.981 16.328 108.301 14.768 108.301 12.608 C 108.301 10.448 106.981 8.888 104.965 8.888 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 96.763 5.576 L 96.763 9.248 L 93.979 9.248 L 93.979 19.64 L 89.707 19.64 L 89.707 9.248 L 86.922 9.248 L 86.922 5.576 L 89.707 5.576 L 89.707 1.4 L 93.979 1.4 L 93.979 5.576 L 96.763 5.576 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 79.336 5.24 C 82.84 5.24 85.601 7.016 85.769 9.8 L 81.64 9.8 C 81.496 8.936 80.512 8.408 79.264 8.408 C 77.968 8.408 77.032 8.864 77.032 9.488 C 77.032 10.184 77.968 10.52 80.368 10.904 C 84.52 11.528 86.009 12.896 86.009 15.32 C 86.009 18.2 82.984 19.976 79.408 19.976 C 75.736 19.976 72.951 18.152 72.807 15.2 L 76.936 15.2 C 77.08 16.112 78.136 16.712 79.48 16.712 C 80.848 16.712 81.856 16.208 81.856 15.56 C 81.856 14.888 80.896 14.456 78.472 14.096 C 75.111 13.592 72.903 12.56 72.903 9.704 C 72.903 6.968 75.76 5.24 79.336 5.24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconButtonGhost icon1={<IconIcLineThree style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 1920,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "17px 32px 17px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 97,
        height: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 97,
          height: 20,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 97,
            height: 20,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <div style={{
              position: "absolute",
              left: 0.597,
              top: 0,
              width: 96.403,
              height: 20,
              overflow: "hidden",
            }}>
              <svg width={29.916} height={20} viewBox="0 0 29.916 20" fill="none" style={{
                position: "absolute",
                left: 66.487,
                top: 0,
                width: 29.916,
                height: 20,
                color: "rgb(238,238,238)",
              }}>
                <path d={"M 26.29 0 L 3.626 0 C 1.623 0 0 1.628 0 3.636 L 0 16.364 C 0 18.372 1.623 20 3.626 20 L 26.29 20 C 28.292 20 29.916 18.372 29.916 16.364 L 29.916 3.636 C 29.916 1.628 28.292 0 26.29 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={17.618} height={6.534} viewBox="0 0 17.618 6.534" fill="none" style={{
                position: "absolute",
                left: 72.681,
                top: 7.209,
                width: 17.618,
                height: 6.534,
                color: "rgb(97,97,97)",
              }}>
                <path d={"M 0 6.428 L 2.452 6.428 C 3.948 6.428 4.621 5.682 4.621 4.696 C 4.621 3.702 3.931 3.143 3.293 3.107 L 3.293 3.045 C 3.882 2.894 4.373 2.49 4.373 1.687 C 4.373 0.732 3.714 0 2.346 0 L 0 0 L 0 6.428 Z M 0.974 5.593 L 0.974 3.542 L 2.399 3.542 C 3.169 3.542 3.656 4.035 3.656 4.652 C 3.656 5.185 3.284 5.589 2.364 5.593 L 0.974 5.593 Z M 0.974 2.779 L 0.974 0.835 L 2.284 0.835 C 3.05 0.835 3.417 1.234 3.417 1.767 C 3.417 2.384 2.913 2.774 2.266 2.779 L 0.974 2.779 Z M 7.658 6.525 C 8.716 6.525 9.455 6.001 9.667 5.22 L 8.711 5.22 C 8.552 5.513 8.202 5.744 7.667 5.744 C 6.879 5.744 6.339 5.225 6.312 4.306 L 9.729 4.306 L 9.729 3.968 C 9.729 2.224 8.689 1.545 7.596 1.545 C 6.255 1.545 5.369 2.566 5.374 4.048 C 5.369 5.544 6.241 6.525 7.658 6.525 Z M 6.317 3.596 C 6.356 2.916 6.848 2.322 7.605 2.326 C 8.326 2.322 8.8 2.863 8.8 3.596 L 6.317 3.596 Z M 12.917 1.607 L 11.934 1.607 L 11.934 0.453 L 10.995 0.453 L 10.995 1.607 L 10.287 1.607 L 10.287 2.361 L 10.995 2.361 L 10.995 5.202 C 10.987 6.081 11.655 6.49 12.394 6.49 C 12.655 6.49 12.859 6.472 12.987 6.454 L 12.987 5.629 C 12.854 5.642 12.646 5.655 12.509 5.655 C 12.204 5.651 11.938 5.553 11.934 5.007 L 11.934 2.361 L 12.917 2.361 L 12.917 1.607 Z M 13.616 5.069 C 13.611 6.01 14.324 6.534 15.236 6.534 C 16.033 6.534 16.475 6.13 16.661 5.771 L 16.697 5.771 L 16.697 6.428 L 17.618 6.428 L 17.618 3.223 C 17.613 1.824 16.498 1.545 15.732 1.545 C 14.594 1.545 13.851 2.122 13.766 2.921 L 14.705 2.921 C 14.802 2.566 15.139 2.308 15.696 2.308 C 16.338 2.308 16.675 2.623 16.67 3.169 L 16.675 3.556 C 16.453 3.564 15.732 3.604 15.413 3.622 C 14.545 3.684 13.611 3.968 13.616 5.069 Z M 14.537 5.078 C 14.537 4.603 14.926 4.368 15.546 4.323 C 15.772 4.31 16.458 4.261 16.675 4.248 L 16.679 4.687 C 16.679 5.26 16.219 5.775 15.448 5.779 C 14.917 5.775 14.537 5.54 14.537 5.078 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={59.129} height={18.070} viewBox="0 0 59.129 18.070" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 1.085,
                width: 59.129,
                height: 18.07,
                color: "rgb(34,119,255)",
              }}>
                <path d={"M 24.598 17.822 C 26.201 17.822 27.366 17.259 28.094 16.278 L 28.094 17.53 L 31.799 17.53 L 31.799 5.301 L 28.094 5.301 L 28.094 6.553 C 27.366 5.572 26.201 5.009 24.598 5.009 C 21.102 5.009 18.667 7.701 18.667 11.415 C 18.667 15.13 21.102 17.822 24.598 17.822 Z M 25.181 14.65 C 23.412 14.65 22.288 13.294 22.288 11.415 C 22.288 9.537 23.412 8.181 25.181 8.181 C 26.991 8.181 28.157 9.537 28.157 11.415 C 28.157 13.294 26.991 14.65 25.181 14.65 Z M 39.485 5.009 C 36.384 5.009 33.908 6.511 33.908 8.89 C 33.908 11.374 35.822 12.271 38.736 12.709 C 40.838 13.022 41.67 13.398 41.67 13.982 C 41.67 14.546 40.796 14.984 39.61 14.984 C 38.445 14.984 37.529 14.462 37.404 13.669 L 33.825 13.669 C 33.949 16.236 36.363 17.822 39.547 17.822 C 42.648 17.822 45.27 16.278 45.27 13.774 C 45.27 11.666 43.98 10.476 40.38 9.934 C 38.299 9.6 37.487 9.308 37.487 8.702 C 37.487 8.16 38.299 7.763 39.423 7.763 C 40.505 7.763 41.358 8.222 41.483 8.974 L 45.062 8.974 C 44.917 6.553 42.523 5.009 39.485 5.009 Z M 47.246 17.53 L 50.95 17.53 L 50.95 11.248 C 50.95 9.349 51.824 8.202 53.281 8.202 C 54.675 8.202 55.425 9.224 55.425 11.082 L 55.425 17.53 L 59.129 17.53 L 59.129 10.455 C 59.129 7.075 57.193 5.009 54.363 5.009 C 52.802 5.009 51.679 5.572 50.95 6.553 L 50.95 0 L 47.246 0 L 47.246 17.53 Z M 5.66 5.009 C 2.56 5.009 0.083 6.511 0.083 8.89 C 0.083 11.374 1.998 12.271 4.911 12.709 C 7.013 13.022 7.846 13.398 7.846 13.982 C 7.846 14.546 6.972 14.984 5.785 14.984 C 4.62 14.984 3.704 14.462 3.579 13.669 L 0 13.669 C 0.125 16.236 2.539 17.822 5.723 17.822 C 8.824 17.822 11.446 16.278 11.446 13.774 C 11.446 11.666 10.156 10.476 6.555 9.934 C 4.474 9.6 3.663 9.308 3.663 8.702 C 3.663 8.16 4.474 7.763 5.598 7.763 C 6.68 7.763 7.533 8.222 7.658 8.974 L 11.238 8.974 C 11.092 6.553 8.699 5.009 5.66 5.009 Z M 18.938 0.332 L 15.216 0.332 L 12.095 18.07 L 15.816 18.07 L 18.938 0.332 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconButtonGhost icon1={<IconIcAlarm fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "pre-wrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{"이이름"}{" | "}{"작업자"}</span>
        <div style={{
            position: "relative",
            width: 66,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <BoxButtonOutline text1={"로그아웃"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 1919.999,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(238,238,238)",
      borderRight: "1px solid rgb(238,238,238)",
      borderBottom: "1px solid rgb(238,238,238)",
      borderLeft: "1px solid rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      padding: "17px 32px 17px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(34,119,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 67,
        height: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={66.957} height={19.938} viewBox="0 0 66.957 19.938" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 66.957,
          height: 19.938,
        }}>
          <path d={"M 37.246 0 L 33.079 0 L 29.583 19.81 L 33.75 19.81 L 37.246 0 Z M 6.339 5.629 C 9.741 5.629 12.421 7.353 12.584 10.057 L 8.576 10.057 C 8.436 9.218 7.481 8.705 6.269 8.705 C 5.01 8.705 4.101 9.148 4.101 9.754 C 4.101 10.43 5.01 10.756 7.341 11.129 C 11.372 11.735 12.817 13.063 12.817 15.417 C 12.817 18.214 9.881 19.938 6.409 19.938 C 2.843 19.938 0.14 18.167 0 15.3 L 4.008 15.3 C 4.148 16.186 5.173 16.769 6.478 16.769 C 7.807 16.769 8.786 16.279 8.786 15.65 C 8.786 14.997 7.853 14.578 5.5 14.228 C 2.237 13.739 0.093 12.737 0.093 9.963 C 0.093 7.307 2.866 5.629 6.339 5.629 Z M 21.811 5.629 C 26.029 5.629 29.058 8.635 29.058 12.783 C 29.058 16.932 26.029 19.938 21.811 19.938 C 17.593 19.938 14.563 16.932 14.563 12.783 C 14.563 8.635 17.593 5.629 21.811 5.629 Z M 21.811 9.171 C 19.853 9.171 18.572 10.686 18.572 12.783 C 18.572 14.881 19.853 16.396 21.811 16.396 C 23.768 16.396 25.05 14.881 25.05 12.783 C 25.05 10.686 23.768 9.171 21.811 9.171 Z M 48.338 5.955 L 52.533 5.955 L 47.29 19.612 L 42.978 19.612 L 37.735 5.955 L 42.233 5.955 L 45.286 14.858 L 48.338 5.955 Z M 59.849 19.938 C 55.678 19.938 52.742 16.955 52.742 12.783 C 52.742 8.635 55.678 5.629 59.849 5.629 C 64.021 5.629 66.957 8.612 66.957 12.783 C 66.957 13.18 66.934 13.622 66.864 14.112 L 56.866 14.112 C 57.193 15.697 58.288 16.606 59.849 16.606 C 61.038 16.606 62.017 16.186 62.366 15.534 L 66.537 15.534 C 65.838 18.144 63.158 19.938 59.849 19.938 Z M 56.843 11.432 L 62.902 11.432 C 62.553 9.8 61.481 8.915 59.849 8.915 C 58.218 8.915 57.193 9.8 56.843 11.432 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <IconButtonGhost icon1={<IconIcChatBubbleDots fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <IconButtonGhost icon1={<IconIcGraphBarUp fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} state={"default"} size={"sm"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "pre-wrap",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{"이이름"}{" | "}{"작업자"}</span>
        <div style={{
            position: "relative",
            width: 66,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <BoxButtonOutline text1={"로그아웃"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Domain=Converter, Login=True, Desktop=True
    "domain=converter|login=true|desktop=true": __body0,
    // figma: Domain=Slash_Partner, Login=True, Desktop=True
    "domain=slash_partner|login=true|desktop=true": __body1,
    // figma: Domain=Store, Login=False, Desktop=True
    "domain=store|login=false|desktop=true": __body2,
    // figma: Domain=Store, Login=True, Desktop=True
    "domain=store|login=true|desktop=true": __body3,
    // figma: Domain=Store, Login=False, Desktop=False
    "domain=store|login=false|desktop=false": __body4,
    // figma: Domain=Slash, Login=True, Desktop=True
    "domain=slash|login=true|desktop=true": __body5,
    // figma: Domain=OC, Login=True, Desktop=True
    "domain=oc|login=true|desktop=true": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TopNavigation;
