import React from "react";

const Produtos = () =>{
    const [produtos,setProdutos] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost/Storm-Eletro/backend/";
        const response = await fetch(url);
        setProdutos(await response.json());
    }, [])

    console.log(produtos);

    const [categorias,setCategorias] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://localhost/Storm-Eletro/backend/categorias.php";
        const response = await fetch(url);
        setCategorias(await response.json());
    },[])

    function shadow(event) {
        const img = event.target;
        if (img.className == "col-sm-12 col-lg-4 card align-items-center p-5 border-0") {
            img.className = "col-sm-12 col-lg-4 card align-items-center p-5 border-0 shadow"
        }     
    }

    function shadowless(event) {
        const img = event.target;
        if (img.className == "col-sm-12 col-lg-4 card align-items-center p-5 border-0 shadow") {
            img.className = "col-sm-12 col-lg-4 card align-items-center p-5 border-0"
        } 
         
    }
    
    let total = 0;

    return(
        <main className="container-fluid">
        <h2>Produtos</h2>
        <hr/>
        <div className="d-flex">
            <aside className="categorias">
                <h3>Categorias</h3>
                <ul className="list-group ml-2">
                    {categorias.map((categoria) => {
                        total += parseInt(categoria.qtd)
                    })}
                    <li className="list-item list-group-item-action d-flex justify-content-between align-items-center">
                        Todos
                        <span className="badge badge-primary badge-pill">{total}</span>
                    </li>
                    {categorias.map((categoria) => {
                        total = total + categoria.qtd; 
                        return(
                            <li key={categoria.cat_id} className="list-item list-group-item-action d-flex justify-content-between align-items-center">
                                {categoria.categoria}
                                <span className="badge badge-primary badge-pill">{categoria.qtd}</span>
                            </li>
                        )
                    })}
                </ul>
            </aside>
            <div className="container row mx-auto">
                {produtos.map((produto) => {
                    return(
                        <div key={produto.id} id={produto.id} className={"col-sm-12 col-lg-4 card align-items-center p-5 border-0"} onMouseEnter={shadow} onMouseLeave={shadowless}>
                            <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-75 mx-auto" src={produto.img} alt={produto.categoria}/> </div>
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