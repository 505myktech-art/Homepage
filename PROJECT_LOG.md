# MYK Tech 網站工作紀錄

## 2026-07-16｜首頁 Hero 懸浮卡片移除

- 移除人物主視覺上的無人機與 AI 實作懸浮卡片。
- 原設計意圖是把真實證據帶入首屏，但實際閱讀容易被誤認為絕對定位錯位或畫面 Bug。
- Hero 改為保留完整人物與工作桌構圖；案例證據繼續由下方 Selected Evidence 呈現。
- 已同步 `X:\myk-tech`；內網首頁與 CSS 回應 HTTP 200，懸浮卡片 HTML 與相關 CSS 均已移除。

## 2026-07-16｜全站 UI/UX 第二輪整理與 HTML5 收斂

- Home 與內頁的垂直留白重新校準；首頁高度由約 5104px 收斂至 4448px，保留 Editorial 節奏但不再以空白延長頁面。
- 新增 `about-career-studio-v2.webp`：About Hero 改為能承接 Infrastructure、資料保護、備份與系統規劃脈絡的紫髮專業角色情境圖。
- About Experience 改為職涯路徑與經歷內容雙欄；工業建模區加入無人機平台、MT-15 支架、商業展示貨架三個真實案例入口。
- 新增 `services-studio-overview-v2.webp`：Services Index 用一張工作室總覽圖整合六類服務與親和角色語言。
- 六個 Service Detail 各自使用對應角色圖作為 Hero；Digital Marketing 另外保留兩張可愛小人輔助圖，其餘服務移除重複中段人物大圖。
- Works 移除 Hero／Gallery 重複圖，壓縮 Result 與 Concept Visual 的冗長高度；內容不足處仍保留明顯施工 Review Marker。
- 取消全站禁用右鍵與文字選取；一般文字及 `kai.chen@myktech.com.tw` 可正常選取，只保留圖片防拖曳。
- 舊 Next／Vinext 程式、設定與建置產物封存至 `_archive/next-vinext-20260716/`；正式流程改為純 HTML5 產生、預覽、驗證與 GitHub Pages 部署結構。
- 建立 `scripts/verify-static-site.mjs` 與 `scripts/serve-static.mjs`；17 個 HTML5 頁面、內部連結、圖片、Metadata、Heading 與重複 ID 均納入自動檢查。
- In-app Browser 驗收 1440×900 與 390×844：Home、About、Services、IT Consulting、Digital Marketing、Retail Display、Contact 均無水平溢位；lazy-load 圖片捲入視窗後全部正常，Console 0 error／0 warning。
- 本輪僅修改目前專案工作區，未發布或同步到 `X:\myk-tech`。

## 2026-07-15｜服務角色插圖與版面節奏

- Digital Marketing 延續既有可愛小人，不改成二次元美少女。
- IT Consulting、Software & Tools、AI Integration、System Planning、Industrial 3D Modeling 新增五張專業成人角色情境圖。
- 五位角色統一使用低飽和深紫髮，但保留不同髮型；畫面都在實際操作服務方法，不使用無意義擺拍。
- 情境圖放在「解決方案」之後；單張圖使用滿寬構圖，先用具體場景承接文字，再進入優勢與工作方式。
- 服務頁 Hero 仍保留原有材質與工程感，角色插圖負責補足人味與可讀性，兩者不互相取代。
- AI 圖以圖下說明揭露用途，不在圖片上疊加小標籤，也不描述為客戶成果。
- Edge 驗收 Services Index 與六個服務頁的 1440×900、390×844：無水平溢位、圖片載入失敗或情境圖缺漏。
- 五個專業服務各有 1 張情境圖；Digital Marketing 保留 2 張可愛小人情境圖。
- `npm.cmd run generate:pages`、`npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build` 全部通過。
- 已同步至 `X:\myk-tech`；17 個頁面路由與 5 張新圖片在 `4432` 站點均回應 HTTP 200。

### Digital Marketing 角色補充

- 保留既有 Hero 與兩張可愛小人情境圖，不替換原有素材。
- 在行銷服務情境最後追加紫髮專業企劃與三個小人共同安排內容、排程與活動網頁的滿寬插圖。
- 角色系列負責連結全站品牌形象，小人仍保留行銷頁原有的可愛與親和力。
- Edge 驗收 1440×900 與 390×844：行銷頁共 3 張情境圖，無破圖或水平溢位。
- `generate:pages`、lint、typecheck、build 全部通過。

## 2026-07-15｜首頁 Hero 角色化

- 首頁右側 Hero 由抽象石材材質圖換成紫髮專業角色形象圖。
- 畫面同時呈現系統路徑、軟體工作卡與工業零件量測，讓入口直接說明 MYK Tech 的跨域工作內容。
- 保留原本不對稱 Editorial Hero、品牌藝術字、格線、FIG 編號與動畫，只更換封面視覺與無障礙說明。
- 三張 Selected Works 仍使用真實案例素材，不以角色插圖取代作品證據。
- Edge 驗收 1440×900 與 390×844：人物臉部、雙手、游標卡尺、零件與系統工作桌均維持有效構圖，無破圖或水平溢位。
- lint、typecheck、build 全部通過。

## 2026-07-16 — 全站敘事與服務差異化改版

- 首頁重建為中文主張、四個 Practice、Selected Evidence、工作方法與聯絡結論，真實案例與可辨識服務入口進入首屏。
- Services Index 重組為四個工作領域；六個服務頁各自採用診斷、架構、Build、人工控制、實體驗證或內容節奏等不同敘事。
- 新增 `service-system-architecture-v2.webp` 與 `service-ai-workflow-v2.webp`，3D Hero 使用真實無人機成品，行銷保留可愛小人語言。
- Works、About、Contact 與手機長標題同步調整；一般文字、Email 與右鍵仍可正常使用。
- 手機 Menu 加入隱藏焦點與 Escape 關閉支援；保留 reduced-motion、skip link、alt 與 lazy loading。
- Browser 驗收 1920、1440、1024、390px 主要路由；本輪未移除施工 Review Marker，也未發布或同步正式站。

## 2026-07-16 — 內網伺服器作為預設驗收環境

- 使用者確認不希望開發電腦預設啟動臨時 Web Server。
- 後續預設由 `X:\myk-tech` 提供網站檔案，透過 `http://192.168.10.100:802/myk-tech/` 驗收。
- 本機 Preview 僅限明確要求的隔離測試，使用完畢需立即關閉。
- 新版已完整鏡像同步至 `X:\myk-tech`；來源與目標 67 個檔案逐檔 SHA-256 一致，無額外殘留。
- nginx 上 17 個網站路由全部回應 HTTP 200，遠端首頁 Hash 與目標 `index.html` 一致。

## 2026-07-14｜HTML5 第一版

- 完成 Header、Editorial Hero、Brand Statement、Selected Works、Services、Contact 與 Footer。
- 完成桌面、平板與手機 Responsive。
- 使用 Vanilla JavaScript 實作捲動 Header、手機選單與 Intersection Observer Reveal。
- 支援 semantic HTML、skip link、alt text、lazy loading 與 `prefers-reduced-motion`。
- 加入閱讀防誤操作：停用文字選取、圖片拖曳及右鍵選單。
- 整合 MYK Tech 官方 Logo 公開用副本。
- 靜態版部署至 `X:\myk-tech`；舊版 Next/Vinext 封存於 `_archive/next-vinext-20260714`。

## 2026-07-14｜真實作品整合

- Selected Works 由抽象 placeholder 改為三個可追溯作品：
  1. Custom UAV Platform（2025）
  2. Retail Display System / MORE1GUY（2024）
  3. AI Visual Archive（2026）
- 無人機首頁圖取自實際組裝成品照片，只做裁切、低彩度與重新輸出，不使用生成式重製結果。
- MORE1GUY 案確認包含完整 SolidWorks 組合、零件、工程圖 PDF、包裝材質與展示架渲染。
- MT-15 置中行車紀錄鏡頭支架另存公開用裁切副本，留待後續 Projects 頁。
- 所有公開照片副本重新輸出以移除 GPS／EXIF；原始 ZIP、OneDrive 與 SolidWorks 專案未修改。
- 更新 Open Graph 圖片、Selected Works 文案、作品卡 Alt text 與外部 Gallery 連結。

## 2026-07-14｜驗收結果

- 靜態 HTML、CSS、JavaScript 與三張首頁作品圖由 `4432` 實際請求，全部回應 HTTP 200。
- Browser 驗收 1440px、1024px、390px：無水平溢位；圖片正常載入；桌面與手機構圖正常。
- 手機 Menu 開啟、關閉、Works 定位與 `aria-expanded` 狀態同步正常。
- Browser console：0 errors、0 warnings。

## 2026-07-14｜作品比例與 AI 定位修正

- Selected Works 由刻意落差較大的 Editorial 拼版改為三張等寬、統一 `4:3` 的作品目錄。
- 三張卡片統一圖片比例、Metadata 結構與最小高度，降低視覺混亂並明確呈現同等案例權重。
- 無人機案例依使用者確認，改用由真實成品照整理的 Editorial 公開版。
- 第三張由「AI 視覺創作檔案」改為「AI 實作與數位創作」。
- AI 案例連結由單一 Gallery 改為 Kai AI Workshop 首頁 `https://505kaichen-dev.github.io/`。
- AI 封面改用公開網站實際首頁畫面，呈現技術筆記、網頁工具、Windows 軟體與互動學習，不再以單張生成圖代表整體能力。
- Browser 驗收 1440px：三張卡寬度均為 336px、圖片均為 336×252、Metadata 均為 154px。
- Browser 驗收 1024px：三張卡寬度均為 268px，中文標題均維持單行，無水平溢位。
- Browser 驗收 390px：三張卡與圖片等寬堆疊，圖片均維持 `4:3`，無水平溢位。
- AI 案例公開連結確認指向 Kai AI Workshop 首頁；Browser console 0 errors、0 warnings。
- 公開作品 JPG 僅含 JPEG 尺寸資訊，無 GPS／拍攝時間等 EXIF 欄位。
- `npm.cmd run lint`：通過。
- `npx.cmd tsc --noEmit`：通過。
- `npm.cmd run build`：通過。此指令驗證早期 Vinext 程式；正式部署來源仍為免建置的 `site/`。

## 2026-07-14｜中文資訊階級與可讀性調整

- 全站改為中文主導、英文輔助；MYK Tech 品牌名稱與 Editorial 英文保留。
- Navigation 加入清楚的中文名稱，英文縮為次要標示。
- Hero 放大中文公司名稱、定位與品牌句，第一屏直接說明工作室性質。
- Brand Statement 補充 IT、軟體、AI、系統規劃與 3D 設計等實際工作範圍。
- Selected Works 改為中文主標、英文副標，並放大類型、年份與案例按鈕。
- Services 改為中文服務名稱，加入英文副標，說明文字提升至 15–16px。
- Contact 改為「開始一個專案」與「聯絡洽談」中文主導。
- 提升全站正文、Eyebrow、Footer 與手機版字級，避免 9–11px 中文承載主要資訊。
- Browser 重新驗收 1440px、1024px、390px：均無水平溢位；中文斷行與作品構圖正常。
- 手機版 Hero 中文定位改為上下排列，選單文字改為「選單／關閉」。
- 中文可讀字級確認：正文 16px、作品標題 23–26px、服務標題 22px、服務說明 15px。
- Browser console：0 errors、0 warnings。

## 2026-07-14｜Navigation 與 Contact 構圖調整

- 桌面 Navigation 中文主項目由 13px 放大至 16px，編號與英文副標同步微調；捲動後縮為 14px，維持低調的 Header 狀態變化。
- Contact 區段由接近滿版高度縮短為較集中的 Editorial 構圖，章節標示、主標與聯絡資訊建立更明確的視覺關係。
- Contact 左右欄比例重新分配，右側信箱區加寬並提升字級；手機版同步縮短不必要的上下空白。
- 正式聯絡信箱更新為 `kai.chen@myktech.com.tw`，Contact 與 Footer 均使用可直接開啟郵件程式的 `mailto:` 連結。
- 各 Section 加入固定 Header 的 Anchor Offset，避免由 Navigation 跳轉時章節標題被遮住。
- Browser 驗收 1440px、1024px、390px：Navigation、Contact 與信箱均無水平溢位；Contact 桌面高度約 648px，手機高度約 688px。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。

## 2026-07-15｜圖片角落標籤移除

- 移除 Service 圖片上的 `AI SERVICE VISUAL` 小標籤。
- 同步移除 Works 圖片上的 `REAL PROJECT MATERIAL` 與 `AI CONCEPT VISUAL` 小標籤。
- 真實素材與 AI 情境圖的性質改由圖下 caption 與段落說明表達，不再遮擋圖片。
- 抽查社群行銷、無人機與 AI 實作正式頁面，均無殘留 Overlay Label 且回應 HTTP 200。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。

## 2026-07-15｜服務頁定位修正與社群行銷公開

- 修正 Service Detail 的資訊邏輯：服務與顧問頁不再強制展示 `Related Works` 或客戶成果。
- 六個公開服務統一改為「問題、解決方案、服務界線、合作優勢、工作方式、Contact」結構。
- Works 只保留已獲准或可確認公開的實際作品，不把客戶案例當成每項服務的必要證明。
- 原 Digital Marketing 預留頁正式改為「社群經營與活動網頁」，移除 `noindex` 並加入 Services Index 與 Home。
- 公開範圍包含社群主題與內容排程、貼文文案與視覺規劃、發文與基本互動、活動網頁及 Landing Page。
- 明確註記不承諾觸及、粉絲數或轉換等無法預先保證的結果。
- 使用 Imagegen 新增社群內容月曆、社群小編流程與活動網頁三張可愛服務情境圖；全部標示為 AI 情境示意，不代表客戶成果。
- Edge 驗收六個 Service Detail 的 1440×900 與 390×844：每頁均有 4 個問題、4 個優勢、4 段流程，無水平溢位或圖片載入失敗。
- 正式站 17 個 HTML 路由全部回應 HTTP 200；社群行銷頁確認無 `noindex`，Services 內已無 `Related Works` 或案例待補區塊。
- 待補 Review Marker 由 8 頁降為 5 頁，只保留在四個 Works 與 Insights。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
- 已同步至 `X:\myk-tech`；本機與正式站 17 個 HTML 路由均為 HTTP 200，兩張新服務視覺亦為 HTTP 200。
- 抽查 Services Index、IT Consulting、Industrial 3D Modeling、CSS 與新圖片，來源和正式站 Hash 一致。

## 2026-07-15｜待補內容 Review Marker

- 原有 Placeholder 太接近正式品牌風格，改為刻意突兀的挖土機施工圖。
- 所有待補區塊加入黃黑施工紋、大驚嘆號、「待補內容」與 `REVIEW PLACEHOLDER` 標籤。
- 實際待補項目仍使用 HTML 中文說明，不將生成文字寫入圖片。
- Review Marker 僅用於網站建置與內容審查，正式公開前應整組移除。
- 手機版改為高辨識黃黑框線、上方施工圖與下方說明卡，並加入固定 Header 的 Anchor Offset。
- 8 個待補頁面均已產生 Review Marker；抽查案例、服務、Insights 與圖片全部回應 HTTP 200。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
- 已同步至 `X:\myk-tech`；正式站 17 個 HTML 路由全部回應 HTTP 200，四張新增概念圖亦全部回應 HTTP 200。
- 抽查 CSS、無人機案例 HTML 與概念圖，來源和正式站 SHA-256 Hash 一致。

## 2026-07-15｜待補內容架構視覺化

- 新增共用 `content-under-construction.jpg`，以紙材、圖紙、未完成黑色模組與黃銅量具表達內容建制狀態。
- 圖片不內嵌文字；各頁以 HTML 疊加中文標題與實際待補項目，避免生成文字錯誤並保留維護彈性。
- 四個 Project Detail 分別預留模型資料、成品照片、列印細節與 AI 案例索引位置。
- 六個 Service Detail 預留適用情境、承接界線與相關案例位置；Digital Marketing 維持 `noindex`。
- Insights 預留 MYK Tech 文章與實作分類索引位置。
- 共 11 個頁面使用同一張壓縮圖，瀏覽器只需快取一次。
- Edge 驗收 Project Placeholder 的 1440×900 與 390×844：無水平溢位、圖片載入失敗或文字遮蔽。
- 已同步至 `X:\myk-tech`；抽查案例、服務、Insights 與 Placeholder 圖片全部回應 HTTP 200，來源與正式站 Hash 一致。

## 2026-07-15｜完整 Service Detail UI/UX

- Services Index 加入 Infrastructure 主視覺，避免入口頁只有大型文字與卡片。
- 五個公開 Service Detail 全部擴充為 Hero 視覺、4 個適用情境、交付內容、承接界線、4 段工作方式、相關案例／內容整理中與 Contact CTA。
- IT Consulting 與 System Planning 使用新生成的 Infrastructure／資料保護概念視覺。
- Software & Tools 與 AI Integration 使用新生成的模組化工作流程概念視覺。
- Industrial 3D Modeling 使用 MT-15 工程概念圖，並連結無人機、MT-15 與展示貨架三個實際案例。
- Software & Tools、AI Integration 連結既有 AI 實作案例；IT Consulting、System Planning 相關案例仍明確標示整理中。
- Digital Marketing 維持 `noindex`，只呈現服務尚在確認的完整視覺狀態，不虛構交付內容。
- Edge 驗收 Services Index、五個公開服務、Digital Marketing 與 Insights 的 1440×900、390×844：無水平溢位或圖片載入失敗。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
- 正式站首頁與 CSS 回應 HTTP 200，線上 HTML 已確認包含正式信箱。

## 2026-07-14｜大型藝術字 SVG 固定化

- Hero、Brand Statement、Selected Works、Services 與 Contact 的大型藝術排版改為 SVG Path，不再依賴訪客裝置上的 Georgia 或中文字型。
- 一般 Navigation、內文、作品資料、服務說明、信箱與 Footer 維持真正的 HTML 文字，保留可維護性與 Responsive。
- 每組藝術字均保留 `.sr-only` 語意文字，SVG 作為視覺呈現並設定為輔助科技忽略。
- 使用 OFL 授權的 Cormorant 與 Noto Sans Traditional Chinese 產生外框；公開頁面不載入或嵌入字型檔。
- 新增可重複執行的 `scripts/generate-display-art.mjs` 與 `npm.cmd run generate:display-art`，並記錄字型來源。
- 轉檔過程改用 `fontkit`，避免 variable font 經舊轉換器產生 `NaN` 與缺字；最終五個 SVG 已掃描確認無無效座標。
- Browser 驗收桌面 Hero、Brand Statement、Works、Services、Contact：字形完整、比例正常，無水平溢位。
- Edge 實際驗收 1024×768 與 390×844：無水平溢位；手機版五組 SVG 寬度均受內容區限制，Contact 維持約 681px 高。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
- 正式站 HTML、CSS 與五個 SVG 均已同步；五個 SVG 線上請求全部回應 HTTP 200，正式 HTML 已確認引用新資產。

## 2026-07-15｜多頁式 HTML5 架構重建

- 網站由單頁 Anchor 結構改為多頁式 HTML5 架構；Home 保留現有視覺語言，Navigation、作品卡與服務名稱改連真正內頁。
- 建立 About、Works、4 個 Project Detail、Services、5 個公開 Service Detail、Insights、Contact、404 與 robots.txt，共 17 個 HTML 頁面。
- Home 不加入 Latest Insights；Insights 保留為獨立內容入口。
- About 加入軍方 SI、傳統產業 SI、Data Protection／Backup、醫療集團 IT 規劃與金融系統 Infrastructure 的實際經歷脈絡。
- 3D 能力明確定位為工業工具、零件、支架與機構建模，不使用藝術建模敘事。
- Digital Marketing 建立預留頁面，但因承接範圍與案例尚未確認，設定 `noindex` 且不列入公開 Services。
- 使用 Imagegen 產生無人物、無辦公室 Stock Photo 語彙的 About Infrastructure 抽象品牌圖；網站使用壓縮 JPG，原始 PNG 保存於 `source/assets/`。
- 新增 `content/*.json`、`scripts/generate-static-pages.mjs`、`docs/SITE_ARCHITECTURE.md`、`docs/CONTENT_INVENTORY.md` 與根目錄 `WORK_PROGRESS.md`。
- Browser 驗收 1440×900；Edge 驗收 390×844 的 Home、About、Works、Project Detail、Services、Service Detail、Insights 與 Contact，全部無水平溢位。
- 本機 17 個路由全部回應 HTTP 200；靜態連結檢查 17 個 HTML，0 broken local references。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
- 正式站首頁、主要內頁、CSS 與 About 圖片共 19 個請求全部回應 HTTP 200；抽查來源與 `X:\myk-tech` Hash 全部一致。

## 2026-07-15｜Phase 2 案例深化

- 四個 Project Detail 加入工作過程、實際素材 Gallery 與概念視覺區。
- 真實照片、render、公開網站畫面標示為 `REAL PROJECT MATERIAL`；AI 圖標示為 `AI CONCEPT VISUAL`。
- 新增四張配合案例語境的 AI 輔助圖，分別補充無人機結構、壓克力展示架製作、MT-15 置中支架與 AI 工具工作流程。
- AI 圖僅作流程與設計語境補充，頁面明文說明不作為實際交付成果證據。
- 案例資料模型加入 `process`、`realImages` 與 `conceptImage`，未來可由 `content/projects.json` 集中更新。
- 建立 `docs/PHASE2_INPUT_NEEDED.md`，集中記錄後續需要補充的文字、規格、照片與公開界線。
- Edge 實際驗收四個案例頁的 1440×900 與 390×844：均無水平溢位、圖片載入失敗或 Gallery 結構缺漏。
- 每個案例均有 4 個 Process Steps；無人機 Gallery 有 3 項，其餘案例各有 2 項。
- `npm.cmd run lint`、`npx.cmd tsc --noEmit`、`npm.cmd run build`：全部通過。
