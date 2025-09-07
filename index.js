let count = 0;
const countSpan = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
});
