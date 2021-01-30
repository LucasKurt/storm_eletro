import React from "react";

import CardItem from '../Components/CardItem'

const Produtos = () =>{
    const [produtos,setProdutos] = React.useState([]);
    const [filtroId,setFiltro] = React.useState('0');

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost/Storm-Eletro/backend/";
            const response = await fetch(url);
            setProdutos(await response.json());
        } fetchData();
    }, [])

    const categoriasPoluidas = produtos.map(categoria => {
        const obj = { };
        obj.cat_id = categoria.cat_id; 
        obj.categoria = categoria.categoria; 
        return obj;
    });

    const categorias = [...new Set(categoriasPoluidas.map(JSON.stringify))].map(JSON.parse);

    function totalProdutos(cat_id){
        let count = 0;
        for (const i of produtos) {
            if(i.cat_id === cat_id) {
                ++count;
            }
        }
        return count;
    }

    function filtro(event){
        let lista = event.target.id;
        setFiltro(lista);
    }

    return(
        <main className="container-fluid">
            <h2>Produtos</h2>
            <hr/>
            <div className="d-flex">
                <aside className="categorias">
                    <h3>Categorias</h3>
                    <ul className="list-group ml-2">
                        <li id={0} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                            Todos
                            <span className="badge badge-primary badge-pill">{produtos.length}</span>
                        </li>
                        {categorias.map((categoria) => {
                            return(
                                <li key={categoria.cat_id} id={categoria.cat_id} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                                    {categoria.categoria}
                                    <span className="badge badge-primary badge-pill">{totalProdutos(categoria.cat_id)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
                <div className="container row mx-auto">
                    {produtos.map((produto) => {
                        let img;
                        if (produto.img.indexOf('http') !== -1) {
                            img = produto.img;
                        } else {
                            img = "/img/produtos/" + produto.img;
                        }
                        if (filtroId === '0') {
                            return(
                                <CardItem
                                    key={produto.id}
                                    cat_id={produto.cat_id}
                                    img={img}
                                    categoria={produto.categoria}
                                    descricao={produto.descricao}
                                    precoAntigo={produto.preco_antigo}
                                    preco={produto.preco}
                                />
                            )
                        } else if(produto.cat_id.toString() === filtroId){
                            return(
                                <CardItem
                                    key={produto.id}
                                    cat_id={produto.cat_id}
                                    img={img}
                                    categoria={produto.categoria}
                                    descricao={produto.descricao}
                                    precoAntigo={produto.preco_antigo}
                                    preco={produto.preco}
                                />
                            )
                        } else {
                            return ""
                        }
                    })}
                </div>                    
            </div>       
        </main>
    )
}

export default Produtos;