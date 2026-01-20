function AlterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)


    if (acao == '-' && qtd.innerHTML <= 0) {
        alert('Atenção a quantidade não pode ser menor que zero.')
    }

    else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valor_Total = qtd.innerHTML * somenteNumeros(valor.innerHTML)
        total.innerHTML = formatarValor(valor_Total)
        soma()
    }

    function soma(){
        let soma = 0

        for (let i = 0;i < 3;i++){
            let numero = somenteNumeros(document.getElementById('total_'+(i+1)).innerHTML)
            soma += Number(numero)
        }
        document.getElementById('Subtotal').innerHTML = formatarValor(soma)
    }
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR')
}