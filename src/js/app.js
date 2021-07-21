import '../scss/app.scss';
import 'bootstrap'
import { fetchData } from './data'
import { resData } from './data'

const btn = document.querySelector('.search__btn')
const input = document.querySelector('.search__input')
const field = document.querySelector('.field__body')

const data = fetchData()


function searchInsert() {
    const value = input.value
    let result = resData.data.filter((el) => el.title.startsWith(value))
    result.map((item) => {
        field.insertAdjacentHTML('beforeend',
            `<div>${item.title}</div>`
        )
    })
}

btn.onclick = function () {
    searchInsert()
}
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        searchInsert()
    }
})
