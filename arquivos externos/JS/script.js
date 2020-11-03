function selecionar(categoria){
    let produtos = document.getElementsByClassName("produto");
    for (let i = 0; i < produtos.length; i++) {
        if(categoria == `produto`){
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
    if (img.style.width != "90%") {
        img.style.width = "90%";
    } else {
        img.style.width = "45%";  
    }
}

function quantidadeItens(categoria2) {
    let categoria = document.getElementById(categoria2);
    let quantidade = document.getElementsByClassName(categoria2);
    categoria.innerHTML +=` (${quantidade.length})`;
}