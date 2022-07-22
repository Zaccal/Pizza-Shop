// elementary loading Fn

const loading = document.querySelector('#loading')

setTimeout(() => {
    loading.style.opacity = '0';
    setTimeout(() => {
        loading.style.display = 'none';
    }, 500)
}, 1500)

//  The header footer add style fixed Fn

const headerFooter = document.querySelector('.header__footer')
const headerBurgerMenu = document.querySelector('#burger-menu')

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    
    if (scrollPosition > 53.45000076293945) {
        headerFooter.classList.add('active')
        headerBurgerMenu.style.top = '8%'
    } else {
        headerFooter.classList.remove('active')
        headerBurgerMenu.style.top = 'initial'
    }
})

// place select downbar Fn

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

class newUser {
    constructor (email, password, login) {
        this.email = email
        this.password = password
        this.login = login
    }
}

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

const userDropMenuFn = () => {
    const dropMenuBtn = document.querySelector('.dropmenu')
    const dropMenut = document.querySelector('.account-dropdown-menu')

    dropMenuBtn.addEventListener('click', () => {
        dropMenut.classList.toggle('d-none')
    })
}

const userDropMenuAdd = () => {
    const userContainer = document.querySelector('.part-right')
    const dropMenu = `
    <ul class="account-dropdown-menu d-none pb-2 pt-2">
        <li class="border-bottom"><a class="dropdown-item" href="#">100 бонусов</a></li>
        <li><a class="dropdown-item mt-1" href="#">История заказов</a></li>
        <li><a class="dropdown-item mt-1" href="#">Настройки</a></li>
        <li class="border-top" id="leaveAccount"><a class="dropdown-item text-muted" href="#">Выход из аккаунта</a></li>
    </ul>
    `

    userContainer.insertAdjacentHTML('beforeend', dropMenu)

    const  userBtn = document.querySelector('#userBtn')

    userBtn.classList.add('dropmenu')

    // Leave with the account function
    const leaveaAccountBtn = document.querySelector('#leaveAccount')

    leaveaAccountBtn.addEventListener('click', () => {
        document.querySelector('.account-dropdown-menu').remove()

        userBtn.innerHTML = 'Войти в аккаунт'
        userBtn.setAttribute('data-bs-target', '#signIn')

        document.querySelector('.error').classList.remove('active')
    })
}

// TODO: Зделай фнкцию выход ищ аккаунта (выход из аккаунта, 2 кнопки используи forEach)

// Dropmenu account options

const userDropMenuFnMobile = () => {
    const userDropmenuContainer = document.querySelector('#accountMenuMobile')
    userDropmenuContainer.classList.add('border-top')
    const dropMenuMobile = `
    <div class="container-xl">
        <ul class="burger-menu__item-list" id="accountDropmenuMobile">
            <li class="pb-3 pt-3"><a href="#" class="burger-menu__link">История заказов</a></li>
            <li class="pb-3"><a href="#" class="burger-menu__link">Настройки</a></li>
            <li class="pb-3" id="leaveAccountMobile"><a href="#" class="burger-menu__link text-muted">Выход из аккаунта</a></li>
        </ul>
    </div>
    `

    userDropmenuContainer.insertAdjacentHTML('beforeend', dropMenuMobile)

    document.querySelector('#accountMenuMobile').classList.add('border-top')

    document.querySelector('#mobileAccountBtns').insertAdjacentHTML('beforeend', '<p class="text-main">100 бонусов</p>')

    // Leave with the account function
    const leaveaAccountBtn = document.querySelector('#leaveAccountMobile')

    leaveaAccountBtn.addEventListener('click', event => {
        event.preventDefault()

        document.querySelector('#accountMenuMobile .container-xl').remove()
        document.querySelector('#accountMenuMobile').classList.remove('border-top')

        document.querySelector('#mobileAccountBtns p').remove()
        document.querySelector('#signInMobile').innerHTML = 'Войти в аккаунт'
        document.querySelector('.burger-menu__item').setAttribute('data-bs-target', '#signIn')
    
        document.querySelector('.error').classList.remove('active')
    })
}

document.querySelector('#signInMobile').addEventListener('click', event => {
    event.preventDefault()
})

// Error varable
const errorMassage = document.querySelector('.error')

accountBtn.addEventListener('click', () => {
    let number = 0

    document.querySelector('body').style.overflow = 'auto'


    while (number < usersDate.length) {
        if (usersDate[number].email === emailInput.value && usersDate[number].password === passwordInput.value) {
            signInBtn.forEach(element => {
                element.innerHTML = usersDate[number].login
                element.setAttribute('data-bs-target', 'null')
            })
            errorMassage.classList.toggle('active')
            document.querySelector('#signIn').style.display = 'none'
            document.querySelector('.modal-backdrop').remove()
                        
            userDropMenuAdd()
            userDropMenuFn()

            // For mobile version
            userDropMenuFnMobile()

            document.querySelector('.burger-menu__item').setAttribute('data-bs-target', 'null')

        } else {
            errorMassage.classList.add('active')
        }
        number += 1
    }
})

// remove modal signIn when you click register btn

const signUpBtn = document.querySelector('#signUp')
const signInWindow = document.querySelector('#signIn')

signUpBtn.addEventListener('click', () => {
    const modalBg = document.querySelector('.modal-backdrop')
    signInWindow.classList.remove('show')
    signInWindow.style.display = 'none'
    modalBg.remove()

    document.querySelector('.signIn-modal').style.display = 'block'
    setTimeout(() => {
        document.querySelector('.signIn-modal .modal-dialog').style.transform = 'translateY(0)'
    }, 200)
})

document.querySelector('#signIn-closeBtn').addEventListener('click', () => {
    document.querySelector('.signIn-modal .modal-dialog').style.transform = 'translateY(-120%)'

    setTimeout(() => {
        document.querySelector('.signIn-modal').style.display = 'none'
    }, 400)

    document.querySelector('body').classList.remove('modal-open')
    document.querySelector('body').style.overflow = 'auto'
})

// Register Fn

const signUpReg = document.querySelector('#sign-Btn')

signUpReg.addEventListener('click', () => {
    const regInputLogin = document.querySelector('#exampleInputLogin1').value
    const regInputEmail = document.querySelector('#exampleInputEmail2').value
    const regInputPassword = document.querySelector('#exampleInputPassword2').value
    const regInputRepeatPassword = document.querySelector('#exampleInputPassword3').value
    
    const wellDoneAlert = document.querySelector('#wellDone')

    document.querySelector('#wellDone-closeBtn').addEventListener('click', () => {
        wellDoneAlert.style.transform = 'translateY(-120%)'
    })

    // Checking value password Fn
    const checkPasswords = () => {
        if (regInputPassword === regInputRepeatPassword && regInputLogin.length > 5) {
            const error2 =document.querySelector('.error2')
            const error3 =document.querySelector('.error3')

            if (error2.className !== 'error2 d-none') {
                error2.classList.add('d-none')
            } else if (error3.className !== 'error3 d-none') {
                error3.classList.add('d-none')
            }
    
            const createdUser = new newUser(regInputEmail, regInputPassword, regInputLogin)
            usersDate.push(createdUser)

            wellDoneAlert.style.transform = 'translateY(0)'

            setTimeout(() => {
                wellDoneAlert.style.transform = 'translateY(-120%)'
            }, 6000)
    
            document.querySelector('.signIn-modal .modal-dialog').style.transform = 'translateY(-120%)'

            setTimeout(() => {
                document.querySelector('.signIn-modal').style.display = 'none'
            }, 400)
        }
    }


    // Checking conditions register 

    if (regInputPassword.length < 8) {
        document.querySelector('.error2').classList.remove('d-none')
        document.querySelector('.error3').classList.add('d-none')
        
        throw new Error('Error password must be at least 8 characters')
    } else if (regInputPassword != regInputRepeatPassword) {
        document.querySelector('.error3').classList.remove('d-none')
        document.querySelector('.error2').classList.add('d-none')

        throw new Error('Error password is not coincide')
    }  else {
        checkPasswords()
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

        // Here checks, has or has not tag new or hit,
        if (productMark != null) { // if it has add tag in window 
            productModalBody.classList.remove('none-after')
            productModalBody.setAttribute('data-mark', productMark)   
        } else { // if it has not then it remove tag hit or new
            productModalBody.classList.add('none-after')
        }

        // It adds in window with product, img from card
        const porductImg = element.parentElement.parentElement.parentElement.querySelector('.card-img-top').getAttribute('src')
        productWindow.querySelector('#product-img').setAttribute('src', porductImg)

        // It adds in window with product in title name from card 
        const productTitle = element.parentElement.parentElement.querySelector('.card-title')
        const productWindowTitle = document.querySelector('.product-modal__title')

        productWindowTitle.innerHTML = productTitle.innerHTML

        // It adds in window with product, animate show
        productWindow.style.transform = 'translateY(0)'
        productWindow.querySelector('.modal-dialog').style.transform = 'translateY(0)'

        // It adds in window with product price from card price
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
        
        // It checks, when you click in button priprave change img
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

    // If preprave or others in window product has settings, then it function return settings in default 

    prepraveItems.forEach((value) => {
        value.querySelector('.preprave__img').classList.remove('active')

        const valueImg = value.querySelector('.preprave__img').querySelector('img').getAttribute('src')
        const valueImgNewValue = valueImg.replace('-desible.svg', '')
            value.querySelector('.preprave__img').querySelector('img').setAttribute('src', valueImgNewValue)
    })

    document.querySelector('.weight span').innerHTML = 400
})

// Product functions mobile version 
const productItogPriceWindow = document.querySelector('div.product-modal__footer:nth-child(3) > div:nth-child(1) > h5:nth-child(1) > span:nth-child(1)')

const productBtnMobile = document.querySelectorAll('.select-btn')

productBtnMobile.forEach(button => {
    button.addEventListener('click', (event) => {
        const productPrice = event.target.parentElement.querySelector('.price').innerHTML.replace('от', '').replace('₽', '')

        productItogPriceWindow.innerHTML = productPrice
    })
})


// Product functions mobile version (Preprave Fn)

const prepraves = document.querySelectorAll('.preprave__item div')
const weightProduct = document.querySelector('.weight span')

prepraves.forEach(preprave => {
    preprave.addEventListener('click', () => {
        const prepraveActive = preprave.querySelector('img').getAttribute('src')

        // If i click in button which remove preprave, it remove 30 in itog price  
        if (prepraveActive != `${prepraveActive.replace('-desible.svg', '')}-desible.svg`) {
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) - 30   
        } 
        
        // If i again click in button which remove preprave and turn off, it return 30 in itog price  
        else {
            const productItogPriceWindow = document.querySelector('div.product-modal__footer:nth-child(3) > div:nth-child(1) > h5:nth-child(1) > span:nth-child(1)')
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) + 30   
        }
    })
})


// Product parameters mobile version function

const options = document.querySelectorAll('.parameters__option')

options.forEach(option => {
    option.addEventListener('click', () => {
        const optionValue = option.querySelector('p').innerHTML

        if (optionValue === 'Тонкое') {
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) + 30
        } else {
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) - 30
        }
    })
})

// Add other preprave in product function mobile version

const components = document.querySelectorAll('.preprave-add__img')

components.forEach(component => {
    component.addEventListener('click', () => {
        if (component.className != 'preprave-add__img preprave__img border active') {
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) + 59
        } else {
            productItogPriceWindow.innerHTML = Number(productItogPriceWindow.innerHTML) - 59
        }
    })
})

// Add  in basket a product Fn

const addProductBtn = document.querySelector('.product-modal__btn')
const basketModal = document.querySelector('.order__products')

class ProductInfo {
    constructor  (img, name, type, size, price) {
        this.img = img
        this.name = name
        this.type = type
        this.size = size
        this.price = price
    }
}

addProductBtn.addEventListener('click', (event) => {
    const productImg = document.querySelector('#product-img').getAttribute('src')
    const productName = document.querySelector('.product-modal__title')
    const productType = document.querySelector('.parameters__option.active p')
    const productSize = document.querySelector('.size__option.active p')
    const productPrice = document.querySelector('.product-modal__itog span')

    const ProductOfmodal = new ProductInfo(productImg, productName.innerHTML, productType.innerHTML, productSize.innerHTML, productPrice.innerHTML)

    const productForBasket = `
    <div class="order__products">
        <div class="border rounded pt-2 pb-2 ps-3 pe-3 d-flex justify-content-between align-items-center">
            <img src="${ProductOfmodal.img}" alt="pizza-img" class="order__product-img" style="margin-right: 12px;">
            <div class="">
                <h5 class="order__product-name fw-bold mb-1">${ProductOfmodal.name}</h5>
                <p>${ProductOfmodal.type} тесто, ${ProductOfmodal.size}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="order__number rounded">
                    <span class="orderMinus text-main">-</span>
                    <span class="orderNumber text-main">1</span>
                    <span class="orderPlus text-main">+</span>
                </div>
                <p class="order__price text-main"><span class="text-main">${ProductOfmodal.price}</span> ₽</p>
                </div>
            </div>
        </div>
    </div>
    ` 

    basketModal.insertAdjacentHTML('afterbegin', productForBasket)

    // Add price in the basket icon Fn
    const productPriceAll = document.querySelectorAll('.order__price span')
    const prices = Array.from(productPriceAll).map(price => Number(price.innerHTML))

    const sumWithInitial = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const basketPrice = document.querySelector('.basket__price')
    basketPrice.innerHTML = sumWithInitial + ' ₽'

    const itogPriceInModal = document.querySelector('#order__itog-price')

    itogPriceInModal.innerHTML = sumWithInitial

    // Alert added in the basket
    const alertAdded = document.querySelector('.added')
    alertAdded.classList.remove('d-none')
    setTimeout(() => alertAdded.style.opacity = '1', 100)

    setTimeout(() => {
        alertAdded.style.opacity = '0'
        setTimeout(() => alertAdded.classList.add('d-none'))
    }, 5000)

    // number products the Fn

    const numberProducts = document.querySelector('.orderNumber')

    document.querySelector('.orderPlus').addEventListener('click', () => {
        numberProducts.innerHTML = Number(numberProducts.innerHTML) + 1
    })

    document.querySelector('.orderMinus').addEventListener('click', () => {
        if (numberProducts.innerHTML != '1') {
            numberProducts.innerHTML = Number(numberProducts.innerHTML) - 1
        } else {
            console.error('Sorry, number products can not be negative number');
        }
    })

    // Modal close FN
    setTimeout(() => {
        productWindow.style.transform = 'translateY(-100%)' 
    }, 300)
    productWindow.querySelector('.modal-dialog').style.transform = 'translateY(130%)'    

    prepraveAddItems.forEach((value) => {
        value.querySelector('.preprave-add__img').classList.remove('active')
    })

    // If preprave or others in window product has settings, then it function return settings in default 

    prepraveItems.forEach((value) => {
        value.querySelector('.preprave__img').classList.remove('active')

        const valueImg = value.querySelector('.preprave__img').querySelector('img').getAttribute('src')
        const valueImgNewValue = valueImg.replace('-desible.svg', '')
            value.querySelector('.preprave__img').querySelector('img').setAttribute('src', valueImgNewValue)
    })

    document.querySelector('.weight span').innerHTML = 400
})

// View more 

const btnForViewMore = document.querySelector('.view-more')
const textHidden = document.querySelector('.about__info') 

btnForViewMore.addEventListener('click', event => {
    event.preventDefault()
    textHidden.classList.toggle('hidden')
})