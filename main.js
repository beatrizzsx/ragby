function criarCartao(pergunta, resposta) {
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('article')
    cartao.classList = 'cartao'
 
    cartao.innerHTML = `
    
    <div class="cartao--conteudo">
                    <div class="cartao--pergunta"><p>qual o tamanho da bola de rugby</p></div>
                    <div class="cartao--resposta"><p>28 centímetros de longo, 77 centímetros de perímetro, 66 centímetros em sua circunferência e um peso de 400 gramas.</p></div>
                </div>
    
    `
 
    conteudo.appendChild(cartao)
 }
 
 criarCartao(1,2)