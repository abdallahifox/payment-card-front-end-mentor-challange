
import * as element from './virabales'


export function holder() {
   element.holder.addEventListener('input',(e)=> {
      let value = e.target.value
 
      element.username.innerHTML = value.toUpperCase()

     if(value.length <=0 || value === ""){
         element.holder.classList.add('error')
         element.error.innerHTML = "Please Enter a Valid Email"
     }else {
      element.holder.classList.remove('error')
      element.error.innerHTML = ""
     }
   })
}


export function number() {
   element.number.addEventListener('input',(e)=> {
      let formNumValue = e.target.value;
      let formNumFormat = formNumValue.replace(/[^0-9]/g, "");
      let formNumMatch = formNumValue.match(/\w{1,4}/g);

      if (formNumMatch !== null) {
         formNumFormat = formNumMatch.join(" ");
       }


       if (formNumValue !== formNumFormat) {
         element.number.value = formNumFormat;
       }

       if (formNumValue.length !== 19) {
         element.number.classList.add('error')
         element.errorNumber.innerHTML = "Please Enter a Valid Card number"
       }else {
         element.number.classList.remove('error')
         element.errorNumber.innerHTML = ""
         return;
       }

       element.cardnumber.innerHTML = formNumValue

   })
}


export function month() {
  element.month.addEventListener('input', (e) =>{
    let formMonthInput = e.target.value
    let formMonthFormat = formMonthInput.match(/^[0-9]*$/g); 

    if(formMonthInput !== formMonthFormat){
      element.month.classList.add('error')
      element.errorMonth.innerHTML = "Please Enter a Valid Month"
    }

    if(formMonthInput.length === 2){
      element.month.classList.remove('error')
      element.errorMonth.innerHTML = ""
    }


    if(formMonthInput >= 12) {
      formMonthInput = 12
    } 

    element.expire.innerHTML = formMonthInput

  })
}



export function year() {
  element.year.addEventListener('input', (e) =>{
    let formYearInput = e.target.value
    let formYearFormat = formYearInput.match(/^[0-9]*$/g); 

    if(formYearInput !== formYearFormat){
      element.year.classList.add('error')
      element.errorYear.innerHTML = "Please Enter a Valid Year"
    }

    if(formYearInput.length === 2){
      element.year.classList.remove('error')
      element.errorYear.innerHTML = ""
    }


    if(formYearInput >= 50) {
      formYearInput = 50
    }

    element.expireYear.innerHTML = formYearInput

  })
}


export function cvc(){
  element.cvc.addEventListener('input', (e) =>{
    let formCVCInput = e.target.value
    let formCVCFormat = formCVCInput.match(/^[0-9]*$/g); 

    if(formCVCInput !== formCVCFormat){
      element.cvc.classList.add('error')
      element.errorCVC.innerHTML = "Please Enter a Valid CVC"
    }

    if(formCVCInput.length === 3){
      element.cvc.classList.remove('error')
      element.errorCVC.innerHTML = ""
    }


    element.cvc.innerHTML = formCVCInput

  })
}



holder()
number()
month()
year()
cvc()