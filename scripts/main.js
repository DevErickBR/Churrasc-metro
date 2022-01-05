const adultos = document.getElementById('adultos');
const criancas = document.getElementById('criancas');
const duracao = document.getElementById('tempo');
const btnCalcular = document.getElementById('btnCalcular');
var r = null

function calcular(){
    if(duracao.value == "" || duracao.value <=0){
        alert('Por favor, Insira a quantidade de duração do churrasco.')
        } else if(duracao.value >=6){
            let carne = 650;
            let cerveja = 2000;
            let bebida = 1500;
            let resultadoCarne = (adultos.value * carne) + (criancas.value * carne / 2 );
            let resultadoCerveja = (adultos.value * cerveja);
            let resultadoBebida = (adultos.value * bebida) + (criancas.value * bebida / 2);
            r = "<h2>Para seu churrasco será necessário: </h2>" + "🥩 | "  + resultadoCarne/1000 + " Kg de carne" + "<br>" + "🍺 | " + Math.ceil(resultadoCerveja/355) +" Latas de Cerveja" + "<br>" + "🧃 | " + Math.ceil(resultadoBebida/1000) + " Garrafas de 1L de Refrigerante";
        } else {
            let carne = 400;
            let cerveja = 1200;
            let bebida = 1000;

            let resultadoCarne = (adultos.value * carne) + ( criancas.value * carne / 2);
            let resultadoCerveja = (adultos.value * cerveja)
            let resultadoBebida = (adultos.value * bebida) + (criancas.value * (bebida / 2));
            r = "<h2>Para seu churrasco será necessário: </h2>" + "🥩 | "  + resultadoCarne/1000 + " Kg de carne" + "<br>" + "🍺 | " + Math.ceil(resultadoCerveja/355) +" Latas de Cerveja" + "<br>" + "🧃 | " + Math.ceil(resultadoBebida/1000) + " Garrafas de 1L de Refrigerante";
        }

        let p = document.getElementById('resultado')
        p.innerHTML = r
        console.log(r)
}

btnCalcular.setAttribute('onclick', 'calcular()')



