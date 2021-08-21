const main = document.querySelector(".main")

/* main.style.cssText = "height: 300px; width: 500px; border: 2px solid black;"
 */

function colorChange () {
    main.addEventListener('mouseenter', () => {
        main.style.backgroundColor = "teal";
        main.style.transition = "all 0s";
    })

    main.addEventListener('mouseleave', () => {
        main.style.backgroundColor = "orange";
        main.style.transition = "all 5s";
    })
};

for (let i = 256; i > 0; i--) {
    const square = document.createElement("div");
    square.classList.add("squares", "bd");
    main.appendChild(square);
}

const squares = document.querySelectorAll('.squares');

squares.forEach(a => {
    a.addEventListener('mouseenter', () => {
        a.style.backgroundColor = "aqua";
        a.style.transition = "all 0s";
    })

    a.addEventListener('mouseleave', () => {
        a.style.backgroundColor = "white";
        a.style.transition = "all 5s";
    })
})



/* function enableBackgroundColor() {
    let z = 0;
    let i = 0;
    let interval = setInterval(() => {
        if (z === 256) {return clearInterval(interval)};
        if (main.children[i].style.backgroundColor === '') {
            let x = Math.floor(Math.random() * 257);
            let y = Math.floor(Math.random() * 257);
            let z = Math.floor(Math.random() * 257);
            main.children[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`};
            i++;
            z++;
    }, 100)
} */
    
  
// enableBackgroundColor();

