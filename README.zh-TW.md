# Project Insanity - K.H. Strategy

[ [English](README.md) ]

> **最後更新：** 2025 年 12 月 8 日

**Project Insanity** 是一個進階的單頁應用程式 (SPA) 作品集網站，旨在展示軟體工程紀律與商業策略洞察的融合。

與使用靜態模板展示所有案例研究的傳統作品集不同，本專案採用 **動態佈局引擎 (Dynamic Layout Engine)**。此引擎能即時在架構上重新排列使用者介面與內容呈現，以符合所選產業或專案類型的特定心智模型（例如：「視覺設計師」的個人檔案看起來像創意代理商網站，而「SaaS」的個人檔案看起來像軟體產品著陸頁）。

## 🚀 主要功能

*   **動態佈局引擎**：根據所選內容類別即時切換 React 元件與 CSS 框架。
*   **多產業模擬**：支援 5 個不同類別，每個類別有 5 個獨特的子主題（共 25 種變化）：
    *   **Portfolio (作品集)**：個人品牌（視覺、工程、攝影）。
    *   **E-Commerce (電子商務)**：零售佈局（時尚、科技、食品、訂閱制）。
    *   **Corporate (企業)**：B2B 與服務業佈局（法律、製造、醫療）。
    *   **Content/News (內容/新聞)**：編輯佈局（雜誌、食譜、旅遊）。
    *   **Software/SaaS (軟體/SaaS)**：以轉換為導向的佈局（免費增值、企業級、行動 App）。
*   **雙語支援 (i18n)**：完整支援英文與繁體中文 (TW)，透過自訂 React hook 管理。
*   **深色模式**：系統感知深色模式，具備手動切換功能，與 Tailwind CSS 完全整合。
*   **原子設計系統 (Atomic Design System)**：組織化的元件架構以利擴展：
    *   **Atoms (原子)**：基本建構單元（按鈕、輸入框、徽章）。
    *   **Molecules (分子)**：功能群組（卡片、選擇器、選單）。
    *   **Organisms (組織)**：複雜 UI 區塊（頁首、主題瀏覽器頁首）。
    *   **Layouts (佈局)**：全頁概念模板。

## 🛠 技術堆疊

*   **前端**：React 19, TypeScript
*   **樣式**：Tailwind CSS (Runtime/CDN for speed, Configurable)
*   **路由**：React Router DOM v6
*   **建置工具**：Vite
*   **圖示**：Heroicons / 自訂 SVG

## 📂 專案結構

```
src/
├── components/
│   ├── atoms/          # 最小單元 (Button, Badge, Input, ScrollToTopButton)
│   ├── molecules/      # 複合元件 (PortfolioCard, FeatureCard, ExplorerSelectors)
│   ├── organisms/      # 複雜區塊 (ThemeExplorerHeader)
│   ├── layouts/        # 特定產業頁面模板 ("引擎"核心)
│   └── utilities/      # 渲染邏輯 (PortfolioLayoutRenderer)
├── core/
│   ├── data/           # 主題與翻譯的 JSON/TS 設定檔
│   ├── hooks/          # 自訂 Hooks (useThemeSwitcher, useLanguage, useDarkMode)
│   └── types/          # TypeScript 介面 (ISubThemeDetail, IContentFocus)
├── sections/           # 著陸頁特定區塊 (Hero, About, Contact)
└── pages/              # 路由視圖 (ThemeExplorer)
```

## 🧠 "Project Insanity" 引擎

核心邏輯位於 `src/components/utilities/PortfolioLayoutRenderer.tsx` 與 `src/core/hooks/useThemeSwitcher.ts`。

1.  **資料定義**：主題定義於 `src/core/data/*.ts`。每個主題物件包含：
    *   `id`：唯一識別碼。
    *   `layoutComponent`：參考特定 React 元件的字串（例如 `'WaterfallGridLayout'`）。
    *   `contentFocus`：控制功能旗標的設定物件（例如 `displayCodeBlocks`、`showPlanComparison`）。
2.  **狀態管理**：`useThemeSwitcher` 使用 URL slug 和內部狀態來管理當前類別與子主題狀態。
3.  **渲染**：`PortfolioLayoutRenderer` 接收當前主題物件，將 `layoutComponent` 字串映射至實際的 import，並使用特定資料進行渲染。

### 資料結構範例

```typescript
{
    "id": "SoftwareEngineer",
    "layoutComponent": "StandardDividedLayout", // 映射至 <StandardDividedLayout />
    "contentFocus": {
        "title": "Technical Projects",
        "displayCodeBlocks": true, // 在佈局中切換程式碼區塊顯示
        "metadataPriority": ["Stack", "Solution"]
    }
}
```

## 📦 安裝與設定

1.  **複製儲存庫**
    ```bash
    git clone https://github.com/your-username/project-insanity.git
    ```

2.  **安裝依賴**
    ```bash
    npm install
    ```

3.  **執行開發伺服器**
    ```bash
    npm run dev
    ```

4.  **建置生產版本**
    ```bash
    npm run build
    ```

## 🎨 新增佈局

1.  在 `src/components/layouts/MyNewLayout.tsx` 建立新元件。
2.  定義介面 `interface LayoutProps { theme: ISubThemeDetail; }`。
3.  在 `src/components/utilities/PortfolioLayoutRenderer.tsx` 匯入該元件。
4.  在 switch 陳述式中新增案例：
    ```typescript
    case 'MyNewLayout': return MyNewLayout;
    ```
5.  在 `src/core/data/*.ts` 中新增一個參照 `'MyNewLayout'` 的主題項目。

## 📄 授權

本專案之原始碼採用 [MIT License](LICENSE) 授權。

內容、設計與創意資產採用 [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/) (CC BY-NC-ND 4.0) 授權。