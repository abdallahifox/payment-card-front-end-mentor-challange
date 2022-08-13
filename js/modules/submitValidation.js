import * as element from './virabales'

const added = document.getElementById('added')
const thankYou = document.getElementById('thankYou')
const form = document.getElementById('form')
const continuee = document.getElementById('continue')



continuee.addEventListener('click', ()=>{
    setTimeout(()=>{
        form.style.display = "block",
        thankYou.style.display = "none"
    },300)

})


added.addEventListener('click', (e)=>{
    e.preventDefault()


        
    let dataCollected = [{
        userName:element.holder.value,
        cardNumber:element.number.value,
        date:{
            monthDate:element.month.value,
            yearDate:element.year.value,
        },
        cvc:cvc.value,
    }]

    // checking for blank before submit

    if(element.holder.value === ""){
        element.error.innerHTML = "cant be blank";
        return;
    } else if (element.number.value === "") {
        element.errorNumber.innerHTML = "cant be blank";
        return;
    } else if (element.month.value === "") {
        element.errorNumber.innerHTML = "cant be blank";
        return;
    }else if (element.year.value === "") {
        element.errorYear.innerHTML = "cant be blank";
        return;
    }else if (element.cvc.value === "") {
        element.errorCVC.innerHTML = "cant be blank";
        return;
    }


    
    setTimeout(()=>{
        form.style.display = "none",
        thankYou.style.display = "block"
    },300)

    console.log(dataCollected)
    reset()

})

function reset(){
    holder.value='',
    number.value= '',
    month.value='',
    year.value='',
    cvc.value=''
}



