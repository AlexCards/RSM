document.addEventListener("DOMContentLoaded", () => {
  fencer = text => {
    let i = 0;
    let fance = String();
    for (word of text) {
      i % 2 === 0 ? (fance += word.toUpperCase()) : (fance += word);
      i++;
    }
    alert(fance);
  };

  let text = prompt("Введите текст: ");

  fencer(text);
});
