// header open downbar Fn

const selectPlaceBtn = document.querySelector('#menu__place-btn')
const placesList = document.querySelector('#menu__place')
const selectPlaceBtnText = document.querySelector('#selected')

selectPlaceBtn.addEventListener('click', () => {
    placesList.classList.toggle('active')
    selectPlaceBtnText.classList.toggle('active')
})

// header select place Fn

const placesListItems = document.querySelectorAll('#menu__place ul li')

placesListItems.forEach(element => {
    element.addEventListener('click', event => {
        selectPlaceBtnText.innerHTML = event.target.innerHTML
    })
})

// Account section

// Sign In Fn

const userInfo = {
    email: 'userEmail@mail.com',
    password: '12345678',
    login: 'Admin'
}

const usersDate = [userInfo] 

const emailInput = document.querySelector('#exampleInputEmail1')
const passwordInput = document.querySelector('#exampleInputPassword1')

const accountBtn = document.querySelector('#signIn-Btn')

const signInBtn = document.querySelectorAll('.user')

// Error varable
const errorMassage = document.querySelector('.error')

accountBtn.addEventListener('click', () => {
    let number = 0

    document.querySelector('body').style.overflow = 'auto'

    while (number < usersDate.length) {
        if (usersDate[number].email === emailInput.value && usersDate[number].password === passwordInput.value) {
            signInBtn.forEach(element => {
                element.innerHTML = userInfo.login
                element.setAttribute('data-bs-target', 'null')
            })
            errorMassage.classList.toggle('active')
            document.querySelector('#signIn').style.display = 'none'
            document.querySelector('.modal-backdrop').remove()
        } else {
            errorMassage.classList.add('active')
            emailInput.value = ''
            passwordInput.value = ''
        }
        number += 1
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
    document.querySelector('body').classList.toggle('lock')
})

// filter Fn

const tagsFilter = document.querySelectorAll('.general__item')

tagsFilter.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.parentElement.classList.toggle('active')
    })
})

const useFilter = document.querySelector('#use-filter')
const useRemoveFilter = document.querySelector('#remove-filter')

const errorFilterWindow = document.querySelector('#error-filter')

useFilter.addEventListener('click', () => {
    errorFilterWindow.style.transform = 'translateY(0)'

    setTimeout(() => {
        errorFilterWindow.style.transform = 'translateY(-100%)'
    }, 5000)
})

const errorClose = document.querySelector('#error-close')

errorClose.addEventListener('click', () => {
    errorFilterWindow.style.transform = 'translateY(-100%)'
})

const closeFilter = document.querySelector('#close-filter')

closeFilter.addEventListener('click', () => {
    errorFilterWindow.style.transform = 'translateY(-100%)'
})

useRemoveFilter.addEventListener('click', () => {
    const tagsFilterActive = document.querySelectorAll('.general__item.active')
    tagsFilterActive.forEach(element => {
        element.classList.remove('active')
    })
})

// Product modal Fn

const productBtn = document.querySelectorAll('.select-btn')
const productWindow = document.querySelector('#product-modal')

const getElementProduct = (e) => {
    console.log(e.querySelector('.card-img-top'));
}

productBtn.forEach(element => {
    element.addEventListener('click', () => {

        const productMark = element.parentElement.parentElement.parentElement.getAttribute('data-mark')
        const productModalBody = document.querySelector('.product-modal__body')

        if (productMark != null) {
            productModalBody.classList.remove('none-after')
            productModalBody.setAttribute('data-mark', productMark)   
        } else {
            productModalBody.classList.add('none-after')
        }

        const porductImg = element.parentElement.parentElement.parentElement.querySelector('.card-img-top').getAttribute('src')
        productWindow.querySelector('#product-img').setAttribute('src', porductImg)

        const productTitle = element.parentElement.parentElement.querySelector('.card-title')
        const productWindowTitle = document.querySelector('.product-modal__title')

        productWindowTitle.innerHTML = productTitle.innerHTML

        productWindow.style.transform = 'translateY(0)'
        productWindow.querySelector('.modal-dialog').style.transform = 'translateY(0)'

        const productPrice = element.parentElement.querySelector('.price')
        const itogprice = Number(productPrice.innerHTML.replace('от', '').replace('₽', ''))

        const itogPriceHtml = document.querySelector('.product-modal__itog span')

        itogPriceHtml.innerHTML = itogprice
    })
})

// select preprave Fn

const prepraveItems = document.querySelectorAll('.preprave__item')

prepraveItems.forEach((value) => {
    value.addEventListener('click', (event) => {
        value.querySelector('.preprave__img').classList.toggle('active')
        value.querySelector('.preprave__name').classList.toggle('active')

        const valueImg = value.querySelector('.preprave__img').querySelector('img').getAttribute('src')

        const itogPriceHtml = document.querySelector('.product-modal__itog span')
        const weight = document.querySelector('.weight span')
        
        if (valueImg != `${valueImg.replace('-desible.svg', '')}-desible.svg`) {
            const valueImgNewValue = valueImg + '-desible.svg'
            value.querySelector('.preprave__img').querySelector('img').setAttribute('src', valueImgNewValue)
            
            itogPriceHtml.innerHTML = Number(itogPriceHtml.innerHTML) - 30
            weight.innerHTML = Number(weight.innerHTML) - 15
        } else {
            const valueImgNewValue = valueImg.replace('-desible.svg', '')
            value.querySelector('.preprave__img').querySelector('img').setAttribute('src', valueImgNewValue)
            
            itogPriceHtml.innerHTML = Number(itogPriceHtml.innerHTML) + 30
            weight.innerHTML = Number(weight.innerHTML) + 15
        }

    })
})

const prepraveAddItems = document.querySelectorAll('.preprave-add__item')

prepraveAddItems.forEach((value) => {
    value.addEventListener('click', () => {
        const gotElement = value.querySelector('div')
        gotElement.classList.toggle('active')

        const itogPriceHtml = document.querySelector('.product-modal__itog span')
        const weight = document.querySelector('.weight span')

        if (value.querySelector('.preprave-add__img').classList.value != 'preprave-add__img preprave__img border active') {
            weight.innerHTML = Number(weight.innerHTML) - 10
            itogPriceHtml.innerHTML = Number(itogPriceHtml.innerHTML) - 59
        } else {
            itogPriceHtml.innerHTML = Number(itogPriceHtml.innerHTML) + 59
            weight.innerHTML = Number(weight.innerHTML) + 10
        }
    })

})

// parameters Fn

const parameters =  document.querySelectorAll('.parameters__option')
const weight = document.querySelector('.weight span')

parameters.forEach(elementOne => {
    elementOne.addEventListener('click', (event) => {
        parameters.forEach(element => {
            element.classList.remove('active')
        })
        
        elementOne.classList.add('active')

        const nameElement = elementOne.querySelector('p')

        if (nameElement.innerHTML === 'Тонкое') {
            weight.innerHTML = Number(weight.innerHTML) - 30
        } else if (nameElement.innerHTML === 'Традиционное') {
            weight.innerHTML = Number(weight.innerHTML) + 30
        }
    })
})

const sizeOptions = document.querySelectorAll('.size__option')

sizeOptions.forEach((elementOne) => {
    elementOne.addEventListener('click', event => {
        sizeOptions.forEach(elementTwo => {
            elementTwo.classList.remove('active')
        })

        elementOne.classList.add('active')
    })
})

const closeProductWindow = document.querySelector('#closeProduct')

closeProductWindow.addEventListener('click', () => {
    setTimeout(() => {
        productWindow.style.transform = 'translateY(-100%)' 
    }, 300)
    productWindow.querySelector('.modal-dialog').style.transform = 'translateY(130%)'    

    prepraveAddItems.forEach((value) => {
        value.querySelector('.preprave-add__img').classList.remove('active')
    })


    prepraveItems.forEach((value) => {
        value.querySelector('.preprave__img').classList.remove('active')

        const valueImg = value.querySelector('.preprave__img').querySelector('img').getAttribute('src')
        const valueImgNewValue = valueImg.replace('-desible.svg', '')
            value.querySelector('.preprave__img').querySelector('img').setAttribute('src', valueImgNewValue)
    })
})