import {accordeon} from './accordeon.js'

document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const burgerMenuButton = document.querySelector('.burger__toggle')

  burgerMenuButton.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.classList.toggle('change')
    document.querySelector('.burger__menu').classList.toggle('open')
  })


  const teamAcc = document.querySelectorAll(".team__title"),
  menuAcc = document.querySelectorAll(".menu-acco__trigger")

  accordeon(teamAcc, 'team__accordeon--open')
  accordeon(menuAcc, 'menu-acco__content--open')

  const form = document.querySelector('#order-form')

  const regExpName = /^[a-zA-Z0-9_-\s]{3,50}$/
  const regExpPhone = /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/


  const validateElem = (elem) => {
    
    switch(elem.name) {
      case 'name':
        if(!regExpName.test(elem.value) && elem.value !== '') {
          elem.classList.add('input-error')
          elem.nextElementSibling.textContent = "the name is incorrect, at least 3 characters"
        } else {
          elem.nextElementSibling.textContent = ""
          elem.classList.remove('input-error')
        }
        break
      case 'phone':
        if(!regExpPhone.test(elem.value) && elem.value !== '') {
          elem.classList.add('input-error')
          elem.nextElementSibling.textContent = "the phone number is incorrect"
        } else {
          elem.nextElementSibling.textContent = ""
          elem.classList.remove('input-error')
        }
        break
      case 'street':
        if(!regExpName.test(elem.value) && elem.value !== '') {
          elem.classList.add('input-error')
          elem.nextElementSibling.textContent = "only the street name, without the use of symbols"
        } else {
          elem.nextElementSibling.textContent = ""
          elem.classList.remove('input-error')
        }
        break
    }

  }

  for(let elem of form.elements) {
    if(elem.classList.contains('order__form-input') && elem.tagName !== 'BUTTON') {
      elem.addEventListener('blur', () => validateElem(elem))
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    for(let elem of form.elements) {
      if(elem.classList.contains('order__form-input') && elem.tagName !== 'BUTTON') {
        if(!(elem.name === 'comment')) {
          if(elem.value === '') {
            elem.nextElementSibling.textContent = "can't be empty"
          } else {
            elem.nextElementSibling.textContent = ""
          }
        }
      }
    }

  })


  const burgerMenu = document.querySelectorAll('.nav__burger>ul>li>a') 
  burgerMenu.forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelector('.burger__menu').classList.remove('open')
    })
  })
})