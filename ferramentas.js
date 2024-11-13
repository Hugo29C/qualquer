function clearDisplay() {
    document.getElementById("display").value = "";
}

function addToDisplay(value) {
    document.getElementById('display').value += value;

}

function calculateResult() {
    let display = document.getElementById("display").value;
    try {
        if (display.includes('%')) {
            let [num, percent] = display.split('%');
            document.getElementById('display').value = (parseFloat(num) * parseFloat(percent)) / 100;
        } else {
            document.getElementById('display').value = eval(display);
        }
     } catch (e) {
        document.getElementById('display').value = 'Erro';
     }
}