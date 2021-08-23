const main = document.querySelector(".main");

const button = document.querySelector("button");

let gridValue;

let totalSquares;

/* main.style.cssText = "height: 300px; width: 500px; border: 2px solid black;"
 */

for (let i = 256; i > 0; i--) {
    const square = document.createElement("div");
    square.classList.add("squares");
    main.appendChild(square);
}

let squares = document.querySelectorAll('.squares');

button.addEventListener("click", () => {
    squares.forEach(a => {
        a.style.backgroundColor = "white"
    })

    gridValue = prompt("How big of a grid?") * 1;

    if (gridValue <= 100) {
        totalSquares = gridValue * gridValue;
    
        main.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;

        main.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`;

        for (let i = totalSquares; i > 0; i--) {
            const square = document.createElement("div");
            square.classList.add("squares");
            main.appendChild(square);
        }
    
        squares = document.querySelectorAll('.squares');

        squares.forEach(a => {
            a.addEventListener('mouseenter', () => {
                a.style.backgroundColor = "aqua"; //bc;
                a.style.transition = "all 0s";
            })
        
            a.addEventListener('click', () => {
                a.style.backgroundColor = "white";
            })
        
             /* a.addEventListener('mouseleave', () => {
                a.style.backgroundColor = "white";
                a.style.transition = "all 5s";
            }) */
        })
    } else {alert("enter a number less than 100! Press button again")}
    
})

squares.forEach(a => {
    a.addEventListener('mouseenter', () => {
        a.style.backgroundColor = "aqua"; //bc;
        a.style.transition = "all 0s";
    })

    a.addEventListener('click', () => {
        a.style.backgroundColor = "white";
    })

     /* a.addEventListener('mouseleave', () => {
        a.style.backgroundColor = "white";
        a.style.transition = "all 5s";
    }) */
})

/* let bc;

setInterval(() => {
    let x = Math.floor(Math.random() * 257);
    let y = Math.floor(Math.random() * 257);
    let z = Math.floor(Math.random() * 257);
    return bc = `rgb(${x} ${y} ${z})`;
}, 2000)
 */


/* function enableBackgroundColor() {
    let z = 0;
    let i = 0;
    let interval = setInterval(() => {
        if (z === 256) {return clearInterval(interval)};
        if (main.children[i].style.backgroundColor === '') {
            
            main.children[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`};
            i++;
            z++;
    }, 100)
} */
    
  
// enableBackgroundColor();

