

boxElement = document.querySelector('.box')

boxElement.classList.add('red')

setInterval(()=> {
    boxElement.classList.toggle('red')
}, 1000)

console.log(boxElement.classList)