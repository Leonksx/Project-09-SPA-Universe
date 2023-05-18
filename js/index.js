import { Router } from './router.js'

const router = new Router()
router.add('/', "pages/home.html")
router.add("/exploracao", "pages/exploracao.html")
router.add("/oUniverso", "pages/oUniverso.html")
router.add(404, "pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const btHome = document.querySelector('.btHome')
const btUniverse = document.querySelector('.btUniverse')
const btExploracao = document.querySelector('.btExploracao')
const bgBody = document.querySelector('.body')

btHome.addEventListener('click', bgHome)
function bgHome() {
    bgBody.classList.add('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.remove('bgExploracao')
    btHome.classList.add('textcolor')
    btExploracao.classList.remove('textcolor')
    btUniverse.classList.remove('textcolor')
}
btUniverse.addEventListener('click', bgUniverse)
function bgUniverse() {
    bgBody.classList.remove('bgHome')
    bgBody.classList.add('bgUniverse')
    bgBody.classList.remove('bgExploracao')
    btHome.classList.remove('textcolor')
    btExploracao.classList.remove('textcolor')
    btUniverse.classList.add('textcolor')
}
btExploracao.addEventListener('click', bgExploracao)
function bgExploracao() {
    bgBody.classList.remove('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.add('bgExploracao')
    btHome.classList.remove('textcolor')
    btExploracao.classList.add('textcolor')
    btUniverse.classList.remove('textcolor')
}


