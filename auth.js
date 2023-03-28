const login = document.querySelector('.login1')
const password = document.querySelector('.parol1')
const error = document.querySelector('.authError')

const button = document.querySelector('.voity')



async function auth(){
    let response = await fetch('https://api.baserow.io/api/database/rows/table/152130/?user_field_names=true', {
        headers:{
            Authorization: 'Token v1hcfl8ldK6GuvpNzlPXcQBEO91TeGjn'
        }
    })
    let contentJson = await response.json()
    let count = contentJson.count

    button.addEventListener('click', () => {
        let flag = 0
        for (let i = 0; i < count; i++){
            if (login.value == contentJson.results[i].Login && password.value == contentJson.results[i].Password){
                flag++
                break
            }
        }
        if (flag == 1){
            button.href = "glavnaya.html"
        }
        else{
            error.style.visibility = 'visible'
        }
    })
}

auth()