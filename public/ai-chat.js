// Simple AI Chat Popup (frontend only, demo)
document.getElementById('ai-chat-btn').onclick = function() {
  document.querySelector('.ai-chat-window').style.display = 'flex';
};
document.getElementById('ai-close').onclick = function() {
  document.querySelector('.ai-chat-window').style.display = 'none';
};
document.getElementById('ai-send').onclick = sendAIMessage;
document.getElementById('ai-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') sendAIMessage();
});
function sendAIMessage() {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;
  addAIMessage('You', msg);
  input.value = '';
  // Demo AI response (replace with real AI API if needed)
  setTimeout(() => {
    addAIMessage('AI', aiDemoResponse(msg));
  }, 700);
}
function addAIMessage(sender, text) {
  const box = document.getElementById('ai-messages');
  const div = document.createElement('div');
  div.innerHTML = `<b>${sender}:</b> ${text}`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
function aiDemoResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('buy')) return 'To buy an ID, click the Buy button in the marketplace.';
  if (msg.includes('sell')) return 'To sell your ID, fill the Sell form and submit.';
  if (msg.includes('payment')) return 'All payments are secure and fast!';
  if (msg.includes('support')) return 'For support, use WhatsApp or this chat.';
  if (msg.includes('free fire')) return 'Free Fire Max is the ultimate battle royale experience!';
  return 'Sorry, I am a demo AI. For more help, contact support!';
}
