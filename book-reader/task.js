const listFonts = Array.from(document.querySelectorAll('.font-size'))
const listFontsColor = Array.from(document.querySelectorAll('.book__control_color .color'))
const listBgColor = Array.from(document.querySelectorAll('.book__control_background .color'))

const bookContent = document.querySelector('.book__content')

let indexRemove = 1;
let indexReText = 0;
let indexReBg = 2;
let oldClass, newClass = '';
let oldClassText, newClassText = '';
let oldClassBg, newClassBg = '';

// Простой уровень сложности
// listFonts.forEach((tab, index) => {
//     tab.onclick = () => {
//         listFonts[indexRemove].classList.remove('font-size_active')
//         indexRemove = index;
//         listFonts[index].classList.add('font-size_active')
//         let dataSize = listFonts[index].getAttribute('data-size');

//         // Вариант 1
//         let fontBig = 'book__content font-size_big'
//         let fontSmall = 'book__content font-size_small'
//         let fontNormal = 'book__content'
//         dataSize === 'big' ? bookContent.className = fontBig : dataSize === 'small' ? bookContent.className = fontSmall : bookContent.className = fontNormal

//         // Вариант 2
//         // if (dataSize === 'big') {
//         //     bookContent.className = 'book__content font-size_big'
//         // } else if (dataSize === 'small') {
//         //     bookContent.className = 'book__content font-size_small'
//         // } else {
//         //     bookContent.className = 'book__content'
//         // };
//     }
// });

// Повышенный уровень сложности(не обязательно)

listFonts.forEach((tab, index) => {
    tab.onclick = () => {
        if (oldClass !== '') {
            bookContent.classList.remove(oldClass)
        };
        listFonts[indexRemove].classList.remove('font-size_active')
        indexRemove = index;
        listFonts[index].classList.add('font-size_active')
        let dataSize = listFonts[index].getAttribute('data-size');

        if (dataSize === 'big') {
            newClass = 'font-size_big'
            bookContent.classList.add(newClass)
        };
        if (dataSize === 'small') {
            newClass = 'font-size_small';
            bookContent.classList.add(newClass)
        };
        oldClass = newClass
    }
});

listFontsColor.forEach((tab, index) => {
    tab.onclick = () => {
        if (oldClassText !== '') {
            bookContent.classList.remove(oldClassText)
        };
        listFontsColor[indexReText].classList.remove('color_active')
        indexReText = index;
        listFontsColor[index].classList.add('color_active')
        let dataSize = listFontsColor[index].getAttribute('data-text-color');
        if (dataSize === 'black') {
            newClassText = 'book_color-black'
            bookContent.classList.add(newClassText)
        };
        if (dataSize === 'gray') {
            newClassText = 'book_color-gray';
            bookContent.classList.add(newClassText)
        };
        if (dataSize === 'whitesmoke') {
            newClassText = 'book_color-whitesmoke'
            bookContent.classList.add(newClassText)
        };
        oldClassText = newClassText
    }
});

listBgColor.forEach((tab, index) => {
    tab.onclick = () => {
        if (oldClassBg !== '') {
            bookContent.classList.remove(oldClassBg)
        };
        listBgColor[indexReBg].classList.remove('color_active')
        indexReBg = index;
        listBgColor[index].classList.add('color_active')
        let dataSize = listBgColor[index].getAttribute('data-bg-color');
        if (dataSize === 'black') {
            newClassBg = 'book_bg-black'
            bookContent.classList.add(newClassBg)
        };
        if (dataSize === 'gray') {
            newClassBg = 'book_bg-gray';
            bookContent.classList.add(newClassBg)
        };
        if (dataSize === 'white') {
            newClassBg = 'book_bg-white';
            bookContent.classList.add(newClassBg)
        };
        oldClassBg = newClassBg
    }
});