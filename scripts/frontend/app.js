const CHAT_ENDPOINT = "scripts/backend/chat/v2/chat.php";

let chat = null;
let refreshInterval = null;

function load(loggedIn) {
    view("app");
    if (loggedIn) {
        view("home");
        transition("home", IN, loadChatList);
    } else {
        transition("nologin", IN);
    }
}

function loadChatList() {
    api(CHAT_ENDPOINT, "chat", "list", {}, (success, result, error) => {
        if (success) {
            clear("chatlist");
            for (let i = 0; i < result.length; i++) {
                let button = make("button", "Chat with " + result[i]);
                button.onclick = () => {
                    chat = result[i];
                    clearInterval(refreshInterval);
                    setInterval(loadChat, 5000);
                    loadChat(() => page("home", "chat"));
                };
                get("chatlist").appendChild(button);
            }
        }
    }, accounts_fill());
}

function loadChat(callback = null) {
    api(CHAT_ENDPOINT, "chat", "read", {user: chat}, (success, result, error) => {
        if (success) {
            clear("messages");
            for (let i = 0; i < result.length; i++) {
                get("messages").appendChild(make("p", result[i]));
            }
        }
        if (callback !== null) callback();
    }, accounts_fill());
}

function yeet() {
    api(CHAT_ENDPOINT, "chat", "write", {user: chat, content: get("input").value}, (success, result, error) => {
        if (success) {
            get("input").value = "";
        }
    }, accounts_fill());
}