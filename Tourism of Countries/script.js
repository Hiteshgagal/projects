let next = document.querySelector('.next')
let pre = document.querySelector('.pre')
next.addEventListener('click', function(){
    let item = document.querySelectorAll('.item')
    document.querySelector('.slide').append(item[0])
})
pre.addEventListener('click', function(){
    let item = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(item[item.length - 1])
})