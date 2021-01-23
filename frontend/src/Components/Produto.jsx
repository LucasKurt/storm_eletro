import React from "react";
import { Link, useParams } from 'react-router-dom';

const Produto = () => {
    let { id } = useParams();

    const [produtos,setProdutos] = React.useState([]);
    let sacola = JSON.parse(localStorage.getItem('sacola'));

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost/Storm-Eletro/backend/";
            const response = await fetch(url);
            setProdutos(await response.json());
        } fetchData();
    }, [])

    const produto = {};
    for (const element of produtos) {
        let img;        
        if (element.img.indexOf('http') !== -1) {
            img = element.img;
        } else {
            img = "/img/produtos/" + element.img;
        }
        if (element.descricao === id) {
            produto["id"] = element.id;
            produto["cat_id"] = element.cat_id;
            produto["categoria"] = element.categoria;
            produto["descricao"] = element.descricao;
            produto["img"] = img;
            produto["preco_antigo"] = element.preco_antigo;
            produto["preco"] = element.preco;
        }        
    }
    
    function add() {
        let validation = true;
        const obj = {};
        obj['id'] = produto["id"];
        obj['qtd'] = 1;
        if (sacola === null){
            sacola = [];
            sacola.push(obj);   
        } else {
            sacola.map(element => {
                if(element.id === obj.id) {
                    element.qtd++;
                    validation = false;
                }
            })
            validation && sacola.push(obj);  
        }
        localStorage.setItem('sacola', JSON.stringify(sacola));
    }
    
    return(
        <main className="container-fluid">            
            <h2>{produto["descricao"]}</h2>
            <hr/>
            <div className="row container-fluid">
                <div className="col-2 invisible">
                    <div className="row container-fluid border border-primary">
                        <div className="col border border-secondary">
                            a
                        </div>
                    </div>
                    <div className="row container-fluid border border-primary">
                        <div className="col border border-secondary">
                            a
                        </div>
                    </div>
                    <div className="row container-fluid border border-primary">
                        <div className="col border border-secondary">
                            a
                        </div>
                    </div>
                    <div className="row container-fluid border border-primary">
                        <div className="col border border-secondary">
                            a
                        </div>
                    </div>
                </div>
                <div className="col-5 d-flex align-itens-center justify-content-center">
                    <div className="m-3">
                        <img className="w-100" src={produto.img} alt="produto.descricao"/>
                    </div>
                </div>
                <div className="col-5">
                    <p><img className="estrela" src="/img/estrelas/3 estrelas.jpg" alt="3 estrelas"/> <Link className="text-body" to="#">Avalie o produto</Link></p>
                    <p className="text-muted mx-0">de R$ {produto["preco_antigo"]}</p>
                    <h4 className="mx-0"><small>por R$ </small>{produto["preco"]} <small>à vista <span className="text-success">(5% de desconto)</span></small></h4>
                    <p className="mx-0">ou R$ {(produto["preco"]/0.95).toFixed(2)} em 12x de R$ {(produto["preco"]/(0.95*12)).toFixed(2)} sem juros</p>
                    <Link type="button" className="btn btn-success btn-block mt-5" to="/Sacola" onClick={add}>Adicionar à sacola</Link>
                </div>
            </div>   
        </main>
    )
}

export default Produto;