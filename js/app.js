
import './modules/virabales'
import './modules/validations'
import './modules/submitValidation'

const wrapper = document.getElementById('wrapper')
const tablateView = document.getElementById('tablate')
document.addEventListener('resize', checkResize())

function checkResize(){
    let x = window.innerWidth

    if(x > 650){
        wrapper.style.display = "none"
        tablateView.style.display = "flex"
    }

    if(x > 1024) {
        wrapper.style.display = "flex"
        tablateView.style.display = "none"
    }
}