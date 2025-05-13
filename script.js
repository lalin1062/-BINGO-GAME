function generateBingo() {
    const board = document.getElementById("bingo-board");
    board.innerHTML = "";
    const numbers = [];
    while (numbers.length < 25) {
        const num = Math.floor(Math.random() * 1000) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.forEach(n => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = n;
        cell.onclick = () => {
            cell.classList.toggle("marked");
        };
        board.appendChild(cell);
    });
}
generateBingo();
