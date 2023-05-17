// 1189 capítulos na Bíblia
// 365 dias no ano

var cap = 0;
var lei = 0;
var capAno = 0;
var res = 0;
var cap1 = 0;
const capBiblia = 1189;
const dias = 365;

cap = document.querySelector('input#fcap');

function capitulos() {
    
    cap1 = parseInt(document.querySelector('input#fcap').value);
    

    capAno = dias * cap1;

    lei = capAno / capBiblia;
    // lei = Math.round(lei) - Arredondamento para o inteiro mais próximo
    lei = lei.toFixed(1);

    res = document.getElementById('res');
    res.innerHTML = `O número de vezes que você irá ler a Bíblia no ano é: ${lei}`;

    cap.value = '';
}

