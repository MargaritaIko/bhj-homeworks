const editor = document.getElementById("editor");
const reset = document.getElementById("resetBtn");
const text = localStorage.getItem("textEditor");

window.addEventListener("load", function() {
  editor.value = text;
});

window.addEventListener('input', (e) => localStorage.setItem('text', e.target.value));
clearEditor.addEventListener('click', () => {
  editor.value = '';
  localStorage.text = '';
});