let display = document.querySelector('#display');
let allBtns = document.querySelectorAll('.btns');

allBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // console.log(btn.value);
        if (btn.value == 'AC') {
            display.value = "";
        } else
            if (btn.value == 'Del') {
                display.value = display.value.substr(0, display.value.length - 1)
            } else
                if (btn.value == '=') {
                    try {
                        let total = eval(display.value)   // caluclate the input
                        display.value = total;

                        // if (Number.isInteger(total)) {
                        //     display.value = total
                        // } else {
                        //     display.value = total.toFixed(2)  // 2 values after decimal point
                        // }
                    } catch {
                        alert("Invalid Input")
                        display.value = "";
                    }
                } else {
                    display.value += btn.value;
                }
    })
})