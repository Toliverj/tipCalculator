        const price = document.getElementById('price');
        const people = document.getElementById('people');
        const calculate = document.getElementById('calcBtn');
        const result = document.getElementById('tipAmount');
        const radioBtn = document.getElementsByName('optradio');
        
        

calculate.addEventListener("click", () => {

        
    result.innerHTML = '';
    
    for(let i = 0; i < radioBtn.length; i++)
        {
            if(radioBtn[i].checked)
                {
                
                    if(radioBtn[i].value == .30)
                        {
                             result.append("Tip: $" + (parseFloat(radioBtn[i].value) + parseFloat(price.value) * parseFloat(people.value)).toFixed(2));         
                        }
                    else if(radioBtn[i].value == .10)
                        {
                            result.append("Tip: $" + (parseFloat(radioBtn[i].value) + parseFloat(price.value) * parseFloat(people.value)).toFixed(2));    
                        }
                    else if(radioBtn[i].value == .15)
                        {
                            result.append("Tip: $" + (parseFloat(radioBtn[i].value) + parseFloat(price.value) * parseFloat(people.value)).toFixed(2));    
                        }
                    else if(radioBtn[i].value == .20)
                        {
                            result.append("Tip: $" + (parseFloat(radioBtn[i].value) + parseFloat(price.value) * parseFloat(people.value)).toFixed(2));    
                        }               
    
                }
        }
   
});