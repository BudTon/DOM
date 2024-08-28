const requiredBlock = document.querySelectorAll('.reveal')

function isVisible(block) {
    const { top, bottom } = block.getBoundingClientRect()
    if (bottom < 0) {
        block.classList.remove('reveal_active');
        return 
    }

    if (top > window.innerHeight) {
        block.classList.remove('reveal_active');
        return 
    }
    block.classList.add('reveal_active');
    return
}

setInterval(() => {
    requiredBlock.forEach((block) => { 
        isVisible(block)})
}, 1000)