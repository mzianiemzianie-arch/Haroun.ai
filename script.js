async function sendMessage() {
    const message = document.getElementById("message").value;
    if (!message) return;
    document.getElementById("chatbox").innerHTML += `<p><b>أنت:</b> ${message}</p>`;
    document.getElementById("message").value = "";

    const response = await fetch("https://your-backend-url.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    document.getElementById("chatbox").innerHTML += `<p><b>Haroun AI:</b> ${data.answer}</p>`;
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}
