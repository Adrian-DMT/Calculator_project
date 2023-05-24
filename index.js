let display = document.getElementById("display")
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let operators = ['+', '-', 'x', '÷']
let singleOperand = ['LOG', 'LN', 'SIN', 'COS', 'TAN', '1/x', 'x2', '√x']
let preview = 0
op = undefined
let current = 0
let key = ''
let result = 0

function calc(id) {

    key = document.getElementById(id).value

    if (key == 'On/Off') {
        if (!display.value) {
            display.value = '0'
            current = 0
            preview = 0
        } else {
            display.value = ''
        }
    }

    if (key == 'CE/C') {
        if (display.value) {
            display.value = '0'
            current = 0
            preview = 0
        }
    }

    // toggle sign
    if (key == '+/-') {

        if (nums.includes(display.value[0]) && display.value[0] != '0') {
            display.value = '-' + display.value
        } else if (display.value[0] == '-') {
            arr = display.value.split('')
            arr.shift()
            console.log(arr)
            display.value = arr.join('')
        } else if (display.value == '0') {
            console.log('ok')
            display.value = '-'
        }
    }
    // floating point
    if (key == '.' && display.value.indexOf('.') == -1) {
        display.value += key
    }

    // PI value
    if (key == 'π') {
        display.value = '3.141592654'
    }

    insertNum()

    if (operators.includes(key)) {
        preview = parseFloat(display.value)
        op = key
        console.log(preview)
    }

    if (display.value && key == '=') {
        current = parseFloat(display.value)
        display.value = operations(preview, current, op)

    }
    console.log(preview, current)
    if (singleOperand.includes(key)) {
        preview = parseFloat(display.value)
        display.value = operations(preview, 0, key)
    }
}


function insertNum() {
    if (display.value) {
        // inserts numbers
        if (nums.includes(key)) {
            if (preview) {

                if (display.value == preview) {
                    display.value = ''
                }
                if (display.value == '') {
                    display.value = key
                } else {
                    display.value += key
                }
                // current = parseFloat(display.value)
            } else {
                if (display.value == '0') {
                    display.value = key
                } else {
                    display.value += key
                }
            }

        }
    }

}


function operations(a, b, key) {
    console.log('in function a=', a, b, key)
    if (isNaN(a) || isNaN(b)) return
    switch (key) {
        case '+':
            res = a + b
            break;
        case '-':
            res = a - b
            break;
        case 'x':
            res = a * b
            break;
        case '÷':
            res = a / b
            break;
        case '√x':
            res = Math.sqrt(a)
            break;
        case 'LOG':
            res = Math.log10(a)
            break;
        case 'LN':
            res = Math.log(a)
            break;
        case 'SIN':
            radians = a * Math.PI / 180
            res = Math.sin(radians)
            break;
        case 'COS':
            radians = a * Math.PI / 180
            res = Math.cos(radians)
            break;
        case 'TAN':
            radians = a * Math.PI / 180
            res = Math.tan(radians)
            break;
        case '1/x':
            res = 1 / a
            break;
        case 'x2':
            res = Math.pow(a, 2)
            break;

        default:
            return
            break;
    }
    console.log('res =', res)
    preview = res
    op = undefined
    current = ''
    return res
}
//'LOG', 'LN', 'SIN', 'COS', 'TAN', '1/x', 'x2', '√x'



