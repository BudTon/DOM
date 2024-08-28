const rotatorCaseList = document.querySelectorAll('.rotator__case')
const p = document.querySelector('p')
let endlessLoop;

// Вариант 1

// function rotatorCase(block, index) {
//     if (index > 0) {
//         block.previousElementSibling.classList.remove('rotator__case_active');
//     }
//     block.classList.add('rotator__case_active');
//     return
// }

// endlessLoop = setTimeout(function loop() {
//     rotatorCaseList.forEach(function (block, index) {
//         setTimeout(function () {
//             rotatorCase(block, index);            
//         }, index * 1000);
//         block.classList.remove('rotator__case_active');
//     });
//     endlessLoop = setTimeout(loop, rotatorCaseList.length * 1000)
// }, 0)

// Вариант 2

let rotatorTime = 0;


rotatorCaseList.forEach((block) => {
    rotatorTime += Number(block.dataset.speed)
});

function rotatorCase(block, index) {
    if (index > 0) {
        block.previousElementSibling.classList.remove('rotator__case_active');
    }
    block.classList.add('rotator__case_active');
    p.style.color = `${block.dataset.color}`

    return
}

endlessLoop = setTimeout(function loop() {
    let speed = - Number(rotatorCaseList[0].dataset.speed);
    rotatorCaseList.forEach(function (block, index) {
        setTimeout(function () {
            rotatorCase(block, index);
            
        }, speed += Number(block.dataset.speed));
        block.classList.remove('rotator__case_active');
    });
    endlessLoop = setTimeout(loop, rotatorTime)
}, 0)

