function multiplicar(){
let n1 = document.getElementById('txt_n1').value
let n2 = document.getElementById('txt_n2').value
let resultado = n1 *n2
document.getElementById('span_resultado').innerText = resultado
}

function dividir(){
    let n1 = document.getElementById('txt_n1').value
    let n2 = document.getElementById('txt_n2').value
    let resultado = n1 /n2
    document.getElementById('span_resultado').innerText = resultado
    }

function somar(){
    let n1 = document.getElementById('txt_n1').value
    let n2 = document.getElementById('txt_n2').value
    let resultado = parseInt (n1) + parseInt(n2)
    document.getElementById('span_resultado').innerText = resultado
        }

function subtrair(){
    let n1 = document.getElementById('txt_n1').value
    let n2 = document.getElementById('txt_n2').value
    let resultado = n1-n2
    document.getElementById('span_resultado').innerText = resultado
            }