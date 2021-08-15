const main = document.querySelector(".main")

for (let i = 256; i > 0; i--) {
    const square = document.createElement("div");
    square.classList.add("squares", "bd");
    main.appendChild(square);
}