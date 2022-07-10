// header open downbar Fn

const headerBtn = document.querySelector('#menu__place-btn')
const headerList = document.querySelector('#menu__place')
const headerBtnText = document.querySelector('#selected')

headerBtn.addEventListener('click', () => {
    headerList.classList.toggle('active')
    headerBtnText.classList.toggle('active')
})

// header select place Fn

const headerListItems = document.querySelectorAll('#menu__place ul li')

headerListItems.forEach(element => {
    element.addEventListener('click', (event) => {
        headerBtnText.innerHTML = event.target.innerHTML
    })
})

// Account section

// Sign In Fn

const userDate = {
    email: 'userEmail@mail.com',
    password: '12345678',
    login: 'Admin'
}

const usersDate = [userDate] 

const emailInput = document.querySelector('#exampleInputEmail1')
const passwordInput = document.querySelector('#exampleInputPassword1')

const accountBtn = document.querySelector('#signIn')

const headerAcc = document.querySelectorAll('.user')

// Error varable
const errorMassage = document.querySelector('.error')

accountBtn.addEventListener('click', () => {
    let numbers = 0

    while (numbers < usersDate.length) {
        if (usersDate[numbers].email === emailInput.value && usersDate[numbers].password === passwordInput.value) {
            headerAcc.forEach(element => {
                element.innerHTML = userDate.login
                element.setAttribute('data-bs-target', 'null')
            })
            errorMassage.classList.toggle('active')
            document.querySelector('#accountWindow').style.display = 'none'
            document.querySelector('.modal-backdrop').remove()
        } else {
            errorMassage.classList.add('active')
            emailInput.value = ''
            passwordInput.value = ''
        }
        numbers += 1
    }
})

// Header footer

const btnOther = document.querySelector('#other-btn')
const otherList = document.querySelector('.menu__other')

btnOther.addEventListener('click', () => {
    otherList.classList.toggle('active')
    btnOther.classList.toggle('active')
})

// burger Fn

const burger = document.querySelector('#burger')
const burgerMenu = document.querySelector('#burger-menu')

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    burger.classList.toggle('active')
})

// filter Fn

const tags = document.querySelectorAll('.general__item')

tags.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.parentElement.classList.toggle('active')
    })
})

const useFilter = document.querySelector('#use-filter')
const useRemove = document.querySelector('#remove-filter')

useFilter.addEventListener('click', (event) => {
    const activeTags = document.querySelectorAll('.general__item.active p')
    const activeTagsArr = Array.from(activeTags)
    const activeTagsValye = activeTagsArr.map(needElement => {
        console.log(needElement.innerHTML);
    })
})