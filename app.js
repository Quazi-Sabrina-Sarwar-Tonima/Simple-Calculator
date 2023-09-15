let input = document.getElementById('inputClass');
let buttons = document.querySelectorAll('button');

let string = "";
let array = Array.from(buttons);
// Define callback functions for different operations
function handleEquals() {
    string = eval(string);
    input.value = string;
}

function handleClear() {
    string = "";
    input.value = string;
}
function handleDelete() {
    string = string.substring(0, string.length-1);
    input.value = string;
}

function handlePi() {
    string += Math.PI;
    input.value = string;
}
array.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                handleEquals();
                break;
            
            case 'AC':
                handleClear();
                break;    
            case 'DEL':
                handleDelete();
                break;
            case 'π':
                handlePi();
                break;
            default:
                string += e.target.innerHTML;
                input.value = string;
                break;
        }
    });
});
