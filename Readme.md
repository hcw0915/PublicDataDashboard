# Public Data Dashboard

![image](https://github.com/hcw0915/PublicDataDashboard/blob/main/md_asset/Demo1.gif)

### Requirements:

- ✅ React
- ✅ GitHub upload - [Github Repo](https://github.com/hcw0915/PublicDataDashboard)
- ✅ live Demo / Deployment - [Vercel links](https://public-data-dashboard.vercel.app/)
- ✅ Airbnb coding style `>>` Although I did install the eslint (airbnb) but still need time to learn more about it.
- ✅ Submit button: All fields must be selected, otherwise, the button should be disabled
- ✅ The selection menus for "縣/市" and "區", need to use autocomplete selector to help users quickly find the desired option
- ✅ The selection menu for "區" is disabled until "縣/市" is selected When the selection for "縣/市" changes, the value for "區" should be cleared
- ✅ Router `>>` `http:localhost:5173/` , `http:localhost:5173/110/臺北市/松山區`

### Addition:

- ❌ Typescript `>>` Just start learning Typescript about a week, it isn't enough to use it in this project.

---

### 專案內容

利用政府開放資料平台 API，製作不同「人口數、戶數性別」等等的查詢簡易面板，主要使用:

🌋 React
🌋 React Router V6 `>>` 建立路由
🌋 Material UI `>>` 初判樣式，應以 `MUI` 為主要設計來源。
🌋 HighCharts `>>` 推薦套件。

---

過程中遇到幾個思考點、問題點:

⁉️ 1. 過去大多都以 `Eslint-Standard` 為主要 coding style，還是花一小部份時間實踐適應。

⁉️ 2. 資料夾結構，雖專案較小，但最後還是選擇建立 `index.js` 做 `import/export` 彙整，進行初步分類。

⁉️ 3. 依個人彙整並在專案內盡可能遵循以下原則:

- 盡可能把 `業務邏輯` 與 `UI介面區分`。
- 盡可能避免 `components` 在 `return` 內進行 `邏輯運算`。
- 在渲染陣列元素較少的情形下，`減少遍歷` 優先於 `代碼長度`。
- 階段邏輯結束後，確認邏輯內 `useCallback/useMemo` 優化可能。

⁉️ 4. 需求閱讀上誤解，對於內文提到的`autocomplete selector`，一開始使用 `Select` 去做，但後來發現`MUI` 提供了`<Autocomplete/>` 所以有再調整了一下。 => 增加了套件運用知識。

⁉️ 5. 圖表套件 `HighCharts` 過去看過，但此次為第一次使用，過程中遇到因 `RWD`，需設置不同寬度，若以 `百分比%` 界定寬度的話，易有 **圖表抖動** 的情況，此情況後續設定確切像素值後獲得改善。

---

### 心得

前一週，剛對於狀態管理、資料夾結構上有新的概念，雖然這次題目是偏小的專案，但是我覺得非常適合練習(上述第三點)，雖然對於狀態管理上並沒有過多區分，但是也算是在實務中將學習到的一些小技巧與以前沒有注意的事情，做一個練習。

過去對於 `RWD` 經驗累積較少，透過此專案 UI 的運用，也更熟悉套件的使用方式，蠻有趣的。
