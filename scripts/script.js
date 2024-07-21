const $ = document

let passwordElem = $.getElementById('passwordElem')
let btnIcon = $.getElementById('btnIcon')

btnIcon.addEventListener('click' , () => {
    if(passwordElem.type == 'password'){
        passwordElem.type = 'text'
        btnIcon.src = './image/eye-open.png'
    }else{
        passwordElem.type = 'password'
        btnIcon.src = './image/eye-close.png'
    }
})