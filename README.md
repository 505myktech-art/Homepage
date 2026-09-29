# MYK Tech 官方網站（HTML5）

可直接放入一般 Web Server 或 GitHub Pages 的多頁式 HTML5 靜態網站。`site/` 成品不需要 Node.js 或 Runtime Framework。

## 啟動與部署

- 預設不在開發電腦啟動臨時 Web Server。
- 目前內網部署目錄：`X:\myk-tech`
- 目前主要內網驗收網址：`http://192.168.10.100:802/myk-tech/`
- 本機 Preview 只有在明確要求隔離測試時才啟動，使用完畢需立即關閉。
- GitHub Pages：將 `site/` 內容放到 repository 發布根目錄即可。

## 專案結構

- `index.html`：語意化頁面結構、SEO、品牌與作品文案。
- `about/`：公司定位、IT Infrastructure 經歷與工業建模方向。
- `works/`：作品總覽與四個 Project Detail 頁面。
- `services/`：服務總覽、五個公開服務頁與一個 `noindex` 預留頁。
- `insights/`：獨立的實作內容入口；不顯示於 Home 區段。
- `contact/`：聯絡方式與需求準備說明。
- `css/site.css`：完整視覺、Responsive、Hover 與 reduced-motion。
- `css/pages.css`：多頁式內頁共用版型。
- `js/site.js`：Header、手機選單、Reveal 動畫及閱讀防誤操作。
- `images/`：Logo、Hero、公開用作品圖片與固定字形的 SVG Display Artwork。

## 替換內容

- 導覽、品牌敘述、Selected Works、Services、Contact：編輯 `index.html`。
- 色彩、排版、卡片比例與 Responsive：編輯 `css/site.css`。
- 聯絡信箱：目前為 `kai.chen@myktech.com.tw`，位於 Contact 與 Footer。
- GitHub Pages 正式網址確定後，補上 canonical URL 與絕對 Open Graph URL。

## Display Artwork

- `images/type/`：Hero、Brand Statement、Works、Services、Contact 的 SVG 外框藝術字，不依賴訪客系統字型。
- HTML 仍保留 `.sr-only` 語意文字，供 SEO 與螢幕閱讀器使用。
- 一般導覽、說明、作品資料與聯絡資訊仍使用真正的 HTML 文字。
- 若要更換大型藝術字內容，在專案根目錄執行 `npm.cmd run generate:display-art`；字型來源與授權記錄於 `images/type/ATTRIBUTION.md`。
- SVG 已經是可直接部署的成品；一般預覽與 GitHub Pages 發布不需要執行 Node.js。

## Selected Works 圖片

- `work-uav-platform-editorial.jpg`：依真實成品照製作的 Editorial 公開版，經使用者確認採用。
- `work-retail-display.jpg`：MORE1GUY 展示貨架原始渲染的公開副本。
- `work-ai-practice.jpg`：Kai AI Workshop 公開網站首頁的實際畫面，呈現 AI 網站、工具、內容與互動專案。
- `work-mt15-camera-mount.jpg`：MT-15 實車安裝照的去時間戳裁切副本，保留供後續 Projects 頁使用，目前未在首頁顯示。

## 2026-07-16 情境圖

- `about-career-studio-v2.webp`：About Hero，呈現 Infrastructure、資料保護與系統規劃的長期專業脈絡。
- `services-studio-overview-v2.webp`：Services Index Hero，將六種服務整合在同一個工作室場景。
- `service-system-architecture-v2.webp`：System Planning 與首頁 Infrastructure Practice 的架構／資料保護專屬視覺。
- `service-ai-workflow-v2.webp`：AI Integration 與首頁 Digital Product Practice 的輸入、人工確認與輸出流程視覺。
- 六張 `service-*-anime.jpg` 保留於各服務中段的 Working Scene；Service Hero 改用該服務的流程、系統、真實零件或行銷內容視覺。

## 2026-07-16 改版結構

- Home：中文主張 → 四個 Practice → Selected Evidence → Approach → Contact。
- Services：四個 Practice 入口，向下連結六個不同內容順序的 Service Detail。
- Works：先以真實成品與公開實作建立證據，再進入案例內容與 AI 語境補充。
- About：專業經歷與工業建模分開呈現，避免把 3D 誤解為藝術建模。
- Contact：以可討論的四個領域與直接 Email 作為全站結論。

原始 ZIP、OneDrive 模型與照片均未修改。

## 內容與頁面產生

- `../content/site.json`：品牌、公司、Navigation 與聯絡資料。
- `../content/about.json`：About 經歷與定位。
- `../content/projects.json`：作品與案例頁資料。
- `../content/services.json`：公開服務與預留服務資料。
- `../scripts/generate-static-pages.mjs`：產生所有內頁；不覆蓋 Home。
- `../WORK_PROGRESS.md`：跨工作階段持續更新的進度表。

修改集中資料後執行：

```powershell
npm.cmd run generate:pages
```
