// ==================== 辦公室點餐助手設定檔 ====================
// 您可以自由修改此檔案中的參數，不需要重新部署網頁 (liff_app.html)！
const CONFIG = {
    // 1. 您的 LINE LIFF ID (例如: "2010151157-g6292b67")
    LIFF_ID: "2010150112-ejdkGN7h",
    
    // 2. 您的 Google Apps Script 網頁應用程式正式 URL (必須以 /exec 結尾)
    GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycby0RUpBLGfUobevnMEOaMbpB8wBoww9Nu5rJbAEjxL29V6rU7PbL961oPd2iKoVOYXP/exec",

    // 3. 團長預設收款資訊 (抽離至設定檔，不需在 HTML 中硬編碼)
    LEADER_BANK_CODE: "012",             // 台北富邦銀行
    LEADER_ACCOUNT: "0081680005617649",    // 團長預設收款帳號 (14碼)
    
    // 4. 合法管理員/團長的 LINE User ID 
    // 當 LIFF 登入者的 ID 與此相符，才會顯示「團長主控台」頁籤。
    // (您可以先從試算表的 SystemLogs 裡，找到您發送「開團」訊息時的 From: Uxxxxxxxx 亂碼並填入此處)
    LEADER_LINE_ID: "U7f4094a8f5497bfda6f47044a9e2686d" 
};
