 function goHome(){
            location.href="index.html";
        }
  
        function checkAndDisableButton() {
            const btn = document.getElementById("makePurchase");
            const totalPrices = parseFloat(document.getElementById("totalPrice").innerText);
    
            if (totalPrices === 0) {
                btn.disabled = true;
                btn.style.background="gray"
            } else {
                btn.disabled = false;
                btn.style.background="#E527B2"
            }
        }


function total(event){
  
    const product=event.childNodes[3].childNodes[3].innerText
  const totalId=document.getElementById("totalPrice")
  const total=document.getElementById("total")
  let totalPrice=totalId.innerText
    console.log(totalPrice)
    const price= event.childNodes[3].childNodes[5].innerText.split(" ")[0];
    console.log(price)
    const sum=parseFloat(totalPrice)+parseFloat(price)
    const sumDecimal=sum.toFixed(2)
    totalId.innerText = sumDecimal
    total.innerText = sumDecimal
   
    productEntry(product)
    checkAndDisableButton()
    discBtnDisabled()

}
function productEntry(product){
  
    const entry=document.getElementById("entyData")
    const count = entry.childElementCount;
    const li=document.createElement("li")
    li.innerHTML =`${count+1}. ${product}`;
    entry.appendChild(li)
}
function discount(){
   const btn = document.getElementById("btn")
    const totalPrice=document.getElementById("totalPrice").innerText
    const totalPriceValue=parseFloat(totalPrice)
    const inputDisc=document.getElementById("discInput")
    const inputValue=inputDisc.value 
    
 
        if(inputValue==="SELL200"&& totalPriceValue>=200){
           const saving=((totalPriceValue*20)/100).toFixed(2)
           const remain= totalPriceValue- saving
           setValue("disc",saving)
           setValue("total",remain)
      
        
           
        }
   
    }

    function discBtnDisabled (){
        const totalPrice=document.getElementById("totalPrice").innerText
        const totalPriceValue=parseFloat(totalPrice)
      
        const btn = document.getElementById("btn")
     
        if (totalPriceValue<200){
         btn.disabled = true;
         btn.style.background="gray"

        }

       else{
          
            btn.disabled =false;
            btn.style.background="#E527B2"
       }
       
    }
    
    window.onload = function () {
        discBtnDisabled()
        checkAndDisableButton();
    };

  