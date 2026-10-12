// figma node: 6898:997 Item/Empty States (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "case=" + __venc(p.case);

export function ItemEmptyStates(_p = {}) {
  const props = { ..._p, case: _p.case ?? "empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 144,
      position: "relative",
      color: "var(--color-white)",
      ...props.style,
    }}>
      <svg width={78.990} height={69.130} viewBox="0 0 78.990 69.130" fill="none" style={{
        position: "absolute",
        left: 33,
        top: 37,
        width: 78.99,
        height: 69.13,
      }}>
        <path d={"M 7.89 58.02 C 8.02 57.68 7.94 57.3 7.7 57.04 C 2.88 51.75 0 45.12 0 37.91 C 0 20.67 16.44 6.69 36.73 6.69 C 57.01 6.69 73.46 20.67 73.46 37.91 C 73.46 55.15 57.02 69.13 36.73 69.13 C 29.56 69.13 22.88 67.38 17.22 64.36 C 16.98 64.23 16.69 64.21 16.44 64.31 L 5.57 68.49 C 4.8 68.79 4.05 68.03 4.34 67.26 L 7.89 58.02 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 71.1 51.33 C 70.97 50.99 71.05 50.61 71.29 50.35 C 76.11 45.07 78.99 38.43 78.99 31.23 C 78.99 13.98 62.54 0 42.26 0 C 21.98 0 5.54 13.98 5.54 31.22 C 5.54 48.46 21.98 62.44 42.27 62.44 C 49.44 62.44 56.12 60.69 61.78 57.67 C 62.02 57.54 62.31 57.52 62.56 57.62 L 73.43 61.8 C 74.2 62.1 74.95 61.34 74.66 60.57 L 71.11 51.33 L 71.1 51.33 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 28.22 36.35 C 30.788 36.35 32.87 34.268 32.87 31.7 C 32.87 29.132 30.788 27.05 28.22 27.05 C 25.652 27.05 23.57 29.132 23.57 31.7 C 23.57 34.268 25.652 36.35 28.22 36.35 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 42.26 36.35 C 44.828 36.35 46.91 34.268 46.91 31.7 C 46.91 29.132 44.828 27.05 42.26 27.05 C 39.692 27.05 37.61 29.132 37.61 31.7 C 37.61 34.268 39.692 36.35 42.26 36.35 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 56.31 36.35 C 58.878 36.35 60.96 34.268 60.96 31.7 C 60.96 29.132 58.878 27.05 56.31 27.05 C 53.742 27.05 51.66 29.132 51.66 31.7 C 51.66 34.268 53.742 36.35 56.31 36.35 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 144,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={78.313} height={69.335} viewBox="0 0 78.313 69.335" fill="none" style={{
        position: "absolute",
        left: 32.003,
        top: 36.995,
        width: 78.313,
        height: 69.335,
      }}>
        <path d={"M 34.247 2.835 L 0.767 60.835 C -1.413 64.615 1.317 69.335 5.677 69.335 L 72.637 69.335 C 76.997 69.335 79.727 64.615 77.547 60.835 L 44.067 2.835 C 41.887 -0.945 36.427 -0.945 34.247 2.835 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 39.157 49.675 C 36.667 49.675 34.657 47.665 34.657 45.175 L 34.657 25.335 C 34.657 22.845 36.667 20.835 39.157 20.835 C 41.647 20.835 43.657 22.845 43.657 25.335 L 43.657 45.175 C 43.657 47.665 41.647 49.675 39.157 49.675 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 39.157 62.425 C 37.977 62.425 36.817 61.945 35.977 61.105 C 35.767 60.895 35.577 60.665 35.417 60.425 C 35.257 60.175 35.117 59.915 35.007 59.645 C 34.887 59.375 34.807 59.095 34.747 58.805 C 34.687 58.515 34.657 58.215 34.657 57.925 C 34.657 57.635 34.687 57.335 34.747 57.045 C 34.807 56.755 34.887 56.475 35.007 56.205 C 35.117 55.935 35.257 55.665 35.417 55.425 C 35.577 55.175 35.767 54.945 35.977 54.745 C 36.187 54.535 36.417 54.345 36.657 54.185 C 36.907 54.025 37.167 53.885 37.437 53.765 C 37.707 53.655 37.987 53.575 38.277 53.515 C 38.857 53.395 39.457 53.395 40.037 53.515 C 40.327 53.575 40.607 53.655 40.877 53.765 C 41.147 53.885 41.407 54.025 41.657 54.185 C 41.897 54.345 42.137 54.535 42.337 54.745 C 43.177 55.575 43.657 56.735 43.657 57.925 C 43.657 59.115 43.177 60.265 42.337 61.105 C 42.137 61.315 41.897 61.505 41.657 61.665 C 41.407 61.825 41.147 61.965 40.877 62.075 C 40.607 62.195 40.327 62.275 40.037 62.335 C 39.747 62.395 39.447 62.425 39.157 62.425 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 144,
      position: "relative",
      color: "rgb(233,241,255)",
      ...props.style,
    }}>
      <svg width={85} height={68.790} viewBox="0 0 85 68.790" fill="none" style={{
        position: "absolute",
        left: 29,
        top: 37,
        width: 85,
        height: 68.79,
      }}>
        <path d={"M 3 3.59 L 6.64 3.59 L 6.64 52.53 C 6.64 52.53 26.376 52.661 38.855 63 L 46.143 63 C 58.615 52.661 78.36 52.53 78.36 52.53 L 78.36 3.59 L 82 3.59 C 83.66 3.59 85 4.93 85 6.59 L 85 63.59 C 85 65.25 83.66 66.59 82 66.59 L 49.03 66.59 L 49.03 66.75 C 49.03 67.88 46.11 68.79 42.5 68.79 C 38.89 68.79 35.97 67.88 35.97 66.75 L 35.97 66.59 L 3 66.59 C 1.34 66.59 0 65.25 0 63.59 L 0 6.59 C 0 4.93 1.34 3.59 3 3.59 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 59.52 3.59 C 47.78 8.44 42.5 16.49 42.5 16.49 L 42.5 66.59 C 54.28 52.69 78.36 52.53 78.36 52.53 L 78.36 0 C 70.82 0 64.57 1.5 59.52 3.59 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 25.48 3.59 C 20.43 1.5 14.18 0 6.64 0 L 6.64 52.52 C 6.64 52.52 30.73 52.68 42.5 66.58 L 42.5 16.48 C 42.5 16.48 37.22 8.43 25.48 3.58 L 25.48 3.59 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 144,
      height: 144,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg width={70} height={70} viewBox="0 0 70 70" fill="none" style={{
        position: "absolute",
        left: 37,
        top: 37,
        width: 70,
        height: 70,
      }}>
        <path d={"M 35 70 C 54.33 70 70 54.33 70 35 C 70 15.67 54.33 0 35 0 C 15.67 0 0 15.67 0 35 C 0 54.33 15.67 70 35 70 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 49.456 25.143 C 51.244 26.87 51.293 29.719 49.567 31.506 L 37.054 44.46 L 37.041 44.473 C 34.861 46.693 31.303 46.888 28.902 44.818 L 28.893 44.81 L 20.713 37.72 C 18.835 36.093 18.632 33.251 20.26 31.373 C 21.887 29.495 24.729 29.292 26.607 30.919 L 32.601 36.115 L 43.093 25.253 C 44.82 23.466 47.669 23.417 49.456 25.143 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Case=Empty
    "case=empty": __body0,
    // figma: Case=Error
    "case=error": __body1,
    // figma: Case=Loading
    "case=loading": __body2,
    // figma: Case=Done
    "case=done": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemEmptyStates;
