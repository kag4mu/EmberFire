const login = document.querySelector('.login1')
const password = document.querySelector('.parol1')
const error = document.querySelector('.authError')

let data = [['alex', 'qwerty'], ['slava', '1231234'], ['123', '123']]

const button = document.querySelector('.voity')
button.addEventListener('click', () => {
    let flag = 0
    data.forEach(element => {
        if (login.value == element[0] && password.value == element[1]){
            flag++
        }
    });
    if (flag == 1){
        button.href = "glavnaya.html"
    }
    else{
        error.style.visibility = 'visible'
    }
})