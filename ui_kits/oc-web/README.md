# OC web UI kit

Click-through recreation of the OC web library view, composed only from design-system components (`window.OCDesignSystem_0d42ed`).

- `index.html` — Header → LeftNavigationOC → Breadcrumb / Tab / Search / Button → HeaderRow + BodyRow table → PaginationDefault. Upload opens a popup with DropField; deleting a row or finishing an upload shows Toast. "복습 문항 노트" shows EmptyStates.
- `Screens.jsx` — SideNav, Toolbar, FileTable, EmptyView, UploadPopup.

The Figma file has no full product screens, only component sheets, so this layout follows the left-navigation + header components as drawn. The page arrangement around them is an assumption.
