function selecionar(categoria){
    let produtos = document.getElementsByClassName("produto");
    for (let i = 0; i < produtos.length; i++) {
        if(categoria == `todos`){
            produtos[i].style.display="inline-block";
        } else if(categoria != produtos[i].classList[1]){
            produtos[i].style.display="none";
        } else  {
            produtos[i].style.display="inline-block";
        }   
    }  
}

function aumentaImg(imagem) {
    let img = imagem;
    img.style.width = "90%";
    // if(img.style.width == "45%"){
    //     img.style.width = "90%";
    // }//  else {
    //      img.style.width = "45%";
    //  }
}

function diminuiImg(imagem){
    let img = imagem;
    img.style.width = "45%";
}

function quantidadeItens(categoria2) {
    let categoria = document.getElementById(categoria2);
    let quantidade = document.getElementsByClassName(categoria2);
    categoria.innerHTML +=` (${quantidade.length})`;
}

quantidadeItens(`produto`);quantidadeItens(`geladeira`);quantidadeItens(`fogao`);
quantidadeItens(`maquinaLavar`);quantidadeItens(`lavaLouças`);