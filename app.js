let basedCurrency = "RUB";
let targetCurrency = "USD";
let amount = 0;

let btn = document.querySelectorAll(".based button");
let btn2 = document.querySelectorAll(".target button");
let targetInput = document.querySelector('.target input[type="text"]')
btn.forEach(element => {
    element.addEventListener("click", () => {
        basedCurrency = element.innerText;
        fetchConversation()
        // inputInfo();
    });
});

btn2.forEach(element => {
    element.addEventListener("click", () => {
        targetCurrency = element.innerText;
        fetchConversation()
    });
});

// function inputInfo() {
    const inputElement = document.querySelector('.based input[type="text"]');
    inputElement.addEventListener('keyup', function () {
        const enteredText = inputElement.value;
        const isValidInput = /^\d+$/.test(enteredText);
        if (isValidInput) {
            amount = enteredText; 
        }
        fetchConversation()
    });
// }

function fetchConversation(){
    fetch(`https://v6.exchangerate-api.com/v6/bffaad88efdb5772c72c2c43/pair/${basedCurrency}/${targetCurrency}/${amount}`)
    .then(response => response.json())
    .then(data => {
        targetInput.value = data.conversion_result;
        console.log(data.conversion_result);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}




 
