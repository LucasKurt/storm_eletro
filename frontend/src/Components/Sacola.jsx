import React from "react";
import SacolaLinha from "./SacolaLinha";
import {Link } from 'react-router-dom';

const Sacola = () =>{
    const [produtos,setProdutos] = React.useState([]);
    let sacola = JSON.parse(localStorage.getItem('sacola'));

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost:3333/produtos";
            const response = await fetch(url);
            setProdutos(await response.json());
        } fetchData();
    }, [])

    if (sacola !== null){
        sacola = sacola.sort((a,b) => a.id - b.id);
        return(
            <main className="container">
                <div className="row mt-5 bg-light font-weight-bold border-bottom border-secondary">
                    <div className="col-2 text-center"></div>
                    <div className="col-6"></div>
                    <div className="col-2 text-center">Quantidade</div>
                    <div className="col-2">Preço</div>
                </div>
                {produtos.map(produto => {                    
                    let img;
                    if (produto.img.indexOf('http') !== -1) {
                        img = produto.img;
                    } else {
                        img = "/img/produtos/" + produto.img;
                    }
                    return(
                        sacola.map(s => {
                            console.log(produtos)
                            if (produto.id === s.id) {
                                return(
                                    <SacolaLinha 
                                        key={produto.id}
                                        img={img}
                                        categoria={produto.categoria}
                                        descricao={produto.descricao}
                                        qtd={s.qtd}
                                        precoAntigo={produto.preco_antigo}
                                        preco={produto.preco} 
                                    />
                                )
                            }
                        })
                    )
                })}
                
            </main>
        )
    } else {
        return(
            <main className="container">
                nada por aqui.
            </main>
        )
    }
}

export default Sacola;
 