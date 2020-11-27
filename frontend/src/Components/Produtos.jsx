import React from "react";

const Produtos = () =>{
    const [produtos,setProdutos] = React.useState([]);

    function shadow(event) {
        const img = event.target
        console.log(img)
         
    }

    React.useEffect(async () => {
        const url = "http://localhost/Storm-Eletro/backend/";
        const response = await fetch(url);
        setProdutos(await response.json());
    }, [])

    return(
        <main className="container-fluid">
        <h2>Produtos</h2>
        <hr/>
        <div className="d-flex">
            <aside className="categorias">
                <h3>Categorias</h3>
                <ul className="list-group ml-2">
                    <li className="list-item list-group-item-action" id="produto" onclick="selecionar(`produto`)">Todos</li>
                    {produtos.map((produto) => {
                        return(
                            <li key={produto.id} className="list-item list-group-item-action" id={produto.categoria.replace(' ','')} onclick="selecionar(`<?php echo str_replace(' ', '', $categoria) ?>`)">{produto.categoria}</li>
                        )
                    })}
                </ul>
            </aside>
            <div className="container row mx-auto">
                {produtos.map((produto) => {
                    return(
                        <div key={produto.id} className={"produto " + produto.categoria.replace(' ','') + "col-sm-12 col-lg-4 card align-items-center border-secondary"}  onClick={shadow}>
                            <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-100 mx-auto" src={produto.img} alt={produto.categoria}/> </div>
                            <div className="card-body">
                                <p className="card-text"> {produto.descricao} </p>
                                <del className="card-title preçoAntigo">R$ {produto.preco_antigo}</del>
                                <p className="card-title preçoAtual text-danger font-weight-bold text-monospace">R$ {produto.preco}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
                
        </div>
       
    </main>
    )
}

export default Produtos;