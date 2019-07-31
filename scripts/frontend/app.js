const CHAT_ENDPOINT = "scripts/backend/chat/v2/chat.php";

function load(loggedIn) {
    view("app");
    if (loggedIn) {
        view("home");
        transition("home", IN);
    } else {
        transition("nologin", IN);
    }
}

function loadChatList() {
    api(CHAT_ENDPOINT, "chat", "list", {}, (success, result, error) => {
    }, accounts_fill());
}