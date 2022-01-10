

// let box = document.querySelector("#app")

// console.log();

// for (let index = 0; index < 366; index++) {

//     const div = document.createElement("div");
//     div.classList.add('box')

//     box.appendChild(div);
// }

let boxes = document.querySelectorAll(".box")

boxes.forEach((e) => {
    e.addEventListener('click', (x) => {
        e.classList.toggle('green')
    })
});


document.querySelector("#submit").addEventListener("click", (e) => {
    let arr = [];


    for (const box of boxes) {

        if (box.classList.contains('green')) {
            arr.push(1);
        } else {
            arr.push(0);
        }
    }



    console.log(arr);

})

