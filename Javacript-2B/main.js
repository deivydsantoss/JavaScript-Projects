
function numPar() {
    for (let num = 0; num <= 10; num++) {
        let num = parseInt(prompt("Digite um numero "))
        if (num%2 ==0){
            alert("Par " + num)
        }
        else if(num!=0){
            alert("Impar " + num)
        }
        
    }
}



function tabuadaNum(){
    for(let i= 0;i<=10; i++){
        alert(num + " x " + i + " = "+ num*i)
    }
}

function calcularImc() {
    for (let i = 0; i <= 5; i++) {
        let alt =parseFloat(prompt("Digite sua altura:"));
        let peso =parseFloat(prompt("Digite seu peso:"));
    
        imc = peso/(alt*alt);
        if(imc <15){
            alert("Está abaixo do peso ideal");
    
        } else if (imc >15){
            alert("Está no peso ideal");
    
        }
        
    }
}

function calcularVenda() {
    for (let i = 0; i <=3; i++) {
        let quant_produto = parseInt(prompt("Digite a quantidade do produto:"));
        let valor_produto = parseInt(prompt("Digite o valor do produto:"));
        
        venda = quant_produto*valor_produto

        alert("o total foi "+ venda);
    }
}


let op = parseInt(prompt("Digite o que deseja:\n1-Calcular IMC(5 pessoas) \n2-Calcular Venda(3 produtos) \n3-Tabuada \n4-Descobrir se num é par"));

switch (op) {
    case 1:
        calcularImc();
        break;
    case 2:
        calcularVenda();
        break;
    case 3:
        tabuadaNum();
        break;
    case 4:
        numPar();
        break;
    default:
        alert("digite 1 ou 2");
        break;
}

