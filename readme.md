# OC Design System

Design system for **OC**, a Korean study product: users find and download workbooks (책 찾기, 내 책), open their own PDFs (내 PDF), join classes (내 클래스), solve problems with a pencil kit and quiz/listening tools, and review mistakes (내 문제은행 → 내가 푼 문제, 복습 문항 노트). It ships as a **web app** (Header + left navigation, PC/tablet) and a **mobile app** (Top Bar + Bottom Navigation: 내 콘텐츠 / 스캐너 / 내 클래스). Two audience tracks appear in the header goal switcher: `초/중/고/n수` (K-12 / retake) and `취업/자격증` (jobs / certificates). The footer names the operator as (주)OC.

## Sources
- Figma: **"🚧 Design System 2.0.fig"** (Design Core, 24.09, status "In Progress"), mounted read-only. 49 pages: Foundation (Screen-Layout, Icons, Color, Typography, Shadows) and ~40 component pages (Avatar → audio-player).
- No codebase or live URL was provided.

## Index
- `styles.css` — global entry (imports only).
- `tokens/fonts.css` (Pretendard + Roboto Mono @font-face), `components/fig-tokens.css` (all 225 Figma Variables, light + dark), `tokens/semantic.css` (aliases, radii, shadows), `tokens/base.css`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadows, logo).
- `components/` — 150 materialized components (+ 58 single-icon components) with `.d.ts` / `.prompt.md`, and `*.card.html` previews. `components/icons/` — `Icon` wrapper + `icon-data.js` (229 glyphs).
- `components/assets/`, `components/fig-assets.css` — bitmaps used by components.
- `assets/oc-logo.svg` — placeholder OC mark (replace with the final logo).
- `ui_kits/oc-web/` — web library view click-through.
- `SKILL.md` — Agent Skill entry.

## CONTENT FUNDAMENTALS
- **Language:** Korean first. English only for technical/brand labels ("Beta", "N" new-badge, "PDF", "Doc", "Library").
- **Tone:** friendly polite informal ending **-해요체**: "-가 저장되었어요", "OC팀에게 들려주세요 🙌🏻". Instructions use polite request **-해주세요 / -하세요**: "업로드할 이미지 또는 PDF를 첨부해주세요. 최대 10MB까지 첨부할 수 있습니다.", "설명을 입력하세요".
- **Address:** the user is implied, never "당신". The brand refers to itself as **OC팀**; users are **OC 사용자** (OC 라운지).
- **Labels:** short nouns: 버튼, 취소, 메뉴, 탭 메뉴, 레이블, 보조텍스트, 상태 태그, 공부 계획. Placeholders say 플레이스홀더; help text sits under fields ("헬프 텍스트가 이곳에 표기됩니다.").
- **Numbers & dates:** `2023.12`, `00 : 00`, `1.0x`, `1 / 3`, `000/000` counters, `6.0mm` pen widths.
- **Emoji:** rare and functional only: the banner 🙌🏻 and Toast leading glyph ✅. They are not used as decoration in UI chrome.

## VISUAL FOUNDATIONS
- **Color:** one strong primary, **blue-500 `rgb(34,119,255)`** (#2277FF), with 25–900 ramps. Neutrals are the cool **slate** ramp (text `slate-900 rgb(21,24,30)`, secondary `slate-600`, sub `slate-500 rgb(113,118,128)`, border `slate-200 rgb(219,222,227)`, surface-sub `slate-50 rgb(248,249,251)`). Many component literals use the material-style grays `rgb(33,33,33)`, `rgb(97,97,97)`, `rgb(158,158,158)`, `rgb(189,189,189)`, `rgb(238,238,238)`. Error is red-500 `rgb(239,83,80)` and `rgb(255,66,66)`. Green, yellow, purple and cobalt appear only in tags, state tags, categories and `bg` tiles.
- **Themes:** semantic tokens (`--text`, `--surface`, `--border`, `--divide`…) have Light and Dark modes. Dark lives under `[data-theme="dark"]` / `.dark`.
- **Type:** **Pretendard** everywhere (Regular 400 most common; Medium 500 for labels; SemiBold 600 / Bold 700 for titles). Common sizes are 12 / 14 / 16 / 20. Body2 is 14/20. The scale runs 10–48 (72 on cover art only). Line-height tokens use a 4px leading grid (12–52) with a 140% base. **Roboto Mono** is for code/tokens. The `--typeface-base` token names **imweb Sans**, which is used on only 4 layers.
- **Spacing:** 4-based `--space-*` (4, 8, 10, 12, 16, 24, 28, 32, 40, 48, 64, 80, 112, 128); 10 is a deliberate off-grid step.
- **Radii:** 8 is base (buttons, inputs, menus), 12 large (cards, popovers), 16–20 for sheets/popups, `9999` pills (chips, badges, switch, toggles). Context menu is 4.
- **Shadows:** almost flat. Separation comes from 1px borders (`inset 0 0 0 1px rgb(219,222,227)`). Elevation is reserved for floating layers: **popover** `0 0 1px rgba(75,81,91,.2), 0 0 0 1px rgba(75,81,91,.03), 0 10px 14px rgba(75,81,91,.06), 0 14px 32px rgba(75,81,91,.12)`, a tighter tooltip variant, and the context-menu `0 0 6px 2px rgba(0,0,0,.1), 0 0 2px rgba(0,0,0,.2)`. The Shadows page also names pageLeft / pageRight / layer tokens for the PDF viewer.
- **Cards & surfaces:** white on `slate-50`/`bg rgb(237,240,244)` page, 1px slate border, radius 8–12, no shadow. No left-accent borders and no gradients except a table "Gradieny" scroll fade.
- **States:** Figma variants define default / hover / pressed / focused / disabled. Hover and pressed step darker on the ramp (blue-500 → 600 → 700). Light-style buttons use blue-50 fill. Disabled uses `slate-300` text on `slate-100`. Focus draws a ring around the button. Nav selection uses a `slate-50` / blue-50 pill fill.
- **Imagery:** the file has almost no photos, only an avatar placeholder bitmap and thumbnails at fixed ratios (1:1, 4:3, 3:2, 16:9, 5:4, 1.414:1 for A-series pages).
- **Motion:** none is specified in the file. Use short opacity and position fades (≈150–200ms ease-out) for toasts, popovers and sheets.
- **Layout:** web uses a fixed Header with the OC logo and goal switcher, plus a fixed ~330px left navigation with an OC 라운지 banner at its foot. Mobile uses a Top Bar and Bottom Navigation (3/4/5 items). The Screen-Layout page defines mobile/tablet/pc Device frames and a Dim Area of `rgba(0,0,0,.5)`-style overlays.

## ICONOGRAPHY
- Custom **icon/ic-*** set (~90 families, 229 glyphs) drawn on a 24px artboard. Most have `fill=false` (line, ~1.5px stroke look) and `fill=true` (solid) variants. Arrows have `small` variants, and there are special sets: score (correct/wrong/wait/no-gauge), status, caret up/down, spinner, progress-gradient.
- Shipped as path data in `components/icons/icon-data.js` and rendered with `<Icon name="IconIcHomeFillFalse" size={24}/>`. Glyphs paint with `currentColor`. Individual `IconIc*` components also exist where the materializer pulled them in as dependencies.
- No icon font and no emoji icons. The left-nav `item-icon` set uses small multicolor glyphs (search, blue book, pencil-note, user), and its vectors partially failed to extract (see caveats).
- Logo: `assets/oc-logo.svg` (`oc-logo-fin`, "OC" placeholder wordmark, blue-500), also available as the `OCLogoFin` component.

## Components
Built from the Figma component sets (variant axes become props; text layers become `text1…`, nested slots become `icon1…`):
AudioPlayer, Avatar, BadgeDot, BadgeIcon, BadgeNumber, Bg, Blank, BodyRow, BodyTable, BottomNavigation, BottomNavigationMobile, BottomSheet, BoxButtonError, BoxButtonOutline, BoxButtonOutlineError, BoxButtonPrimaryDefaultLargeNone, BoxButtonPrimaryDefaultMediumNone, BoxButtonPrimaryDefaultSmallNone, BoxButtonPrimaryDefaultXSmallNone, BoxButtonSecondary, Breadcrumb, Button, ButtonArea, ButtonGroup, Calendar, Callout, Caption, Category, CheckCheckBox, CheckListCheckBox, CheckListRadio, CheckRadio, Chip, ChipWeb, Close, Column, ComboBox, ContextMenu, Device, Dialog, DimArea, Disclosure, Disclosure2, Divider, DropField, DropFieldFile, DropFieldFileItem, DropFieldLoad, EmptyStates, Event, Footer, Header, HeaderRow, HeaderTable, IconArrowRightSmallLine, IconButton, IconButtonError, IconButtonGhost, IconButtonOutline, IconButtonSecondary, InteractionKit, ItemAction, ItemBanner, ItemBody, ItemBodyCell, ItemBottomNavigation, ItemBottomSheetTitle, ItemBundleFinder, ItemButtonSegment, ItemCalendarHeader, ItemCaption, ItemCell, ItemCheckBox, ItemColor, ItemContextMenu, ItemEmptyStates, ItemEraser, ItemEraserOption, ItemGoal, ItemHeaderCell, ItemIcon, ItemIconContextMenu, ItemIconMenu, ItemMarker, ItemMarkerOption, ItemMenu, ItemMenu2, ItemMenu3, ItemMenu4, ItemMenuIcon, ItemMenuTextField, ItemNumber, ItemPaginationBtn, ItemPen, ItemPenOption, ItemProfileLabel, ItemRadio, ItemTab, ItemTool, ItemUndoRedo, Label, LeftNavigationOC, Menu, NumberBadgeSmall2, PaginationDefault, PaginationExtra, PencilKit, PinnedColumns, Popover, PopoverHeaderLeftButton, PopoverHeaderRightButton, PopoverListItem, PopoverListItemDefault, PopoverListPrefixes, PopoverListSuffixes, Popup, PopupTitle, Prefixes, Prefixes2, Prefixes3, Profile, ProgressIndicatorTracker, ProgressIndicators, Search, SelectFields, SelectListItem, SelectListPrefixes, SelectListSuffixes, SelectOptionList, OCLogoFin, StateTag, StateTagAccentSmall, Suffixes, Suffixes2, Suffixes3, Switch, Tab, Tag, TagAccentSmall, TagDefaultSmallFalse, TagDefaultSmallNone, TagGrayMediumFalseLight, TagWarningSmall, TextAreaField, TextField, Thumbnail, Toast, ToolTip, TopBar, TutorialPopup.

Scheduler, pulldown, popover & navigation parts: TextButtonError, TextButtonPrimary, TextButtonSecondary, Thumnail, TopNavigation, PulldownFields, PulldownOptionList, Screenshot, SelectListItemSearch, Spinner, State, StatusBarIPad, TabWeb, Title, ItemWeek, LeftNavigation, Month, PopoverArrow, PulldownListPrefixes, PulldownListSuffixes, PulldownListItem, PopoverHeader, ItemSectionTitle, ItemWeek2, ItemTime2, ItemDate2, ItemCustomTableOfContents, ItemDate, ItemDay, ItemHandle, ItemPlan, ItemTag, ItemTime.

Standalone variant symbols: AudioPlayerDarkCompactPause, AudioPlayerDarkCompactPlay, AudioPlayerDarkSinglePause, AudioPlayerDarkSinglePlay, AudioPlayerLightCompactPause, AudioPlayerLightCompactPlay, AudioPlayerLightSinglePause, AudioPlayerLightSinglePlay, AudioPlayerLightTotalPause, AudioPlayerLightTotalPlay, BottomSheetMoDefault, BottomSheetMoFrame2, BottomSheetMoFrame3, BoxButtonPrimaryDefaultLargeRight, BoxButtonPrimaryDefaultMediumRight, BoxButtonPrimaryDefaultSmallRight, BoxButtonPrimaryDefaultXLargeNone, BoxButtonPrimaryDefaultXLargeRight, BoxButtonPrimaryDefaultXSmallRight, BoxButtonPrimaryDefaultXsmallNone, BoxButtonPrimaryDisabledXSmallLeft, BoxButtonPrimaryDisabledXSmallNone, BoxButtonPrimaryDisabledXSmallRight, BoxButtonPrimaryHoverXSmallLeft, BoxButtonPrimaryHoverXSmallNone, BoxButtonPrimaryHoverXSmallRight, BoxButtonPrimaryPressedXSmallLeft, BoxButtonPrimaryPressedXSmallNone, BoxButtonPrimaryPressedXSmallRight, IconDocumentLine, KeyValueTable, Pointer, StateTagDefaultSmall, StatetagDefaultMedium, TagWarningLarge.

Single-icon components (one per icon/ic-* family): IconIcAddNote, IconIcAddPageBack, IconIcAddPageFront, IconIcAi, IconIcAlarm, IconIcArrowDiagonal, IconIcArrowDown, IconIcArrowLeft, IconIcArrowLeftRight, IconIcArrowReduce, IconIcArrowRight, IconIcArrowRightCircle, IconIcArrowUp, IconIcArrowUpDown, IconIcArrowUpLimit, IconIcBook, IconIcBookOpen, IconIcBookmark, IconIcBundleDefinition, IconIcCalendar, IconIcCamera, IconIcCaret, IconIcChatBubble, IconIcChatBubbleDots, IconIcCheck, IconIcCheckCircle, IconIcCheckDashCircle, IconIcCircleEmpty, IconIcClip, IconIcClock, IconIcCoin, IconIcCompass, IconIcCopy, IconIcCoupon, IconIcCrop, IconIcDelete, IconIcDelivery, IconIcDocument, IconIcDocumentWriting, IconIcDotsSixHorizontal, IconIcDotsSixVertical, IconIcDownload, IconIcDrawerLeft, IconIcDrawerRight, IconIcEdit, IconIcEmail, IconIcEnter, IconIcEqual, IconIcEraser, IconIcExclamationCircle, IconIcExport, IconIcEye, IconIcEyeOff, IconIcFastForward10seconds, IconIcFilter, IconIcFolder, IconIcGoal, IconIcGraphBarUp, IconIcHeadphone, IconIcHeart, IconIcHistory, IconIcHome, IconIcIcloud, IconIcIcloudCheck, IconIcIcloudSlash, IconIcIdea, IconIcImage, IconIcInfoCircle, IconIcLasso, IconIcLightDarkMode, IconIcLightning, IconIcLineThree, IconIcLink, IconIcList, IconIcLock, IconIcMarker, IconIcMic, IconIcMinus, IconIcMinusCircle, IconIcMobile, IconIcMoreHorizontal, IconIcMoreVertical, IconIcNote, IconIcNumberList, IconIcOpen, IconIcOut, IconIcPause, IconIcPc, IconIcPen, IconIcPencil, IconIcPin, IconIcPlay, IconIcPlayCircle, IconIcPlayPause, IconIcPlus, IconIcPlusCircle, IconIcPost, IconIcProgressGradient, IconIcQuestionCircle, IconIcRedo, IconIcRefresh, IconIcReview, IconIcRewind10seconds, IconIcRocket, IconIcRotation, IconIcSave, IconIcScan, IconIcScore, IconIcSearch, IconIcServiceCenter, IconIcSetting, IconIcShare, IconIcShoppingBag, IconIcShuffle, IconIcSound, IconIcSoundMute, IconIcSoundVolume, IconIcSpinner, IconIcStar, IconIcStatus, IconIcStop, IconIcStopCircle, IconIcStore, IconIcSync, IconIcTableHorizontal, IconIcTableVertical, IconIcTablet, IconIcThumbDown, IconIcThumbUp, IconIcTile, IconIcUndo, IconIcUnlink, IconIcUnlock, IconIcUser, IconIcUserBlocked, IconIcUserCheck, IconIcUserPlus, IconIcWarningTriangle, IconIcX, IconIcXCircle, IconIcZoomIn.

Plus `Icon` (components/icons).

### Intentional additions
- `Icon`: generic wrapper over the full icon/ic-* set so consumers don't import 229 separate components.

### Intentionally skipped (and why)
- **All `icon/ic-*` families** are built as individual `IconIc*` components (listed above) and also as data: every variant lives in `components/icons/icon-data.js` and renders through `<Icon name="…">` (see `components/icons/Icon.d.ts` for the full name list, e.g. `IconIcAddNoteFillFalse`, `IconIcAddPageBackFillTrue`, `IconIcAiFillFalse`, `IconIcBookOpenFillFalse`, `IconIcBookmarkFillTrue`).
- **~590 remaining standalone symbols** (all the kit counts as unbuilt after every component set above). They follow these name patterns, and each one is exactly one variant of a built component:
  - `button/<state>/<size>/<theme>/<style>` → `<Button state size theme style2>`
  - `icon-button/…` → `<IconButton …>`
  - `BoxButton/<Type>/<State>/<Size>/<Icon>` → `BoxButton*` with `state` / `size` / `icon`
  - `Tag/<Color>/<Size>/…` and `StateTag/…` → `<Tag>` / `<StateTag>`
  - remaining `AudioPlayer/…`, `BottomSheet(Mo)/…` frames → `<AudioPlayer>` / `<BottomSheet>`

  Building each one would add hundreds of duplicate files to every consumer's bundle; Button.jsx alone is already 729 KB. A sample of 35 was materialized (the AudioPlayer/*, BottomSheet(Mo)/* and BoxButton/Primary/* symbols listed above) so the pattern is visible.
- **Documentation frames** (Cover, Foundation-*, Components-* showcase frames, `Pagination`, `Item/Pagination`, `Progress Indicator`, `popover_setting`, `Select`, `SmallDropField`) are spec sheets, not components.
- **imweb Sans** (`--typeface-base`) has no font file in the source. The token still points at it, and its fallback stack renders until the font is uploaded.

### Not built / caveats
- The kit reports 951 "families", but 833 of those are standalone symbols that are single variants of sets already built (e.g. `BoxButton/Primary/Default/Large/None`, `AudioPlayer/Dark/Compact/Play`, `button/action/large/primary/fill`). Only the few of these that components depend on were materialized.
- Second same-named sets collapsed into one: **Divider** (2-hierarchy set), **BoxButton/Outline** (48-variant set), **disclosure/Disclosure** (built as Disclosure + Disclosure2).
- The file defines **0 text styles**. Typography comes only from Typography Token variables.
