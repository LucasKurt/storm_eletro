import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SacolaItem from "../Components/SacolaItem";

const Sacola = () =>{
    const [produtos,setProdutos] = React.useState([]);
    const sacola = useSelector((state) => state.sacolaReducer);
    let subtotal = 0;

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost:3333/produtos";
            const response = await fetch(url);
            setProdutos(await response.json());
        } fetchData();
    }, [])
    if (sacola[0] !== undefined) {
        return(
            <main className="container">
                <div className="row mt-5 bg-light font-weight-bold border-bottom border-secondary">
                    <div className="col-2 text-center">Produto</div>
                    <div className="col-3">Descrição do produto</div>
                    <div className="col-2 text-center">Quantidade</div>
                    <div className="col-3">Preço</div>
                    <div className="col-2">Total</div>
                </div>
                {produtos.map(produto => {                    
                    let img;
                    if (produto.img.indexOf('http') !== -1) {
                        img = produto.img;
                    } else {
                        img = "/img/produtos/" + produto.img;
                    }
                    return(
                        sacola.map((item,index) => {
                            if (produto.id === item.id) {
                                subtotal += (produto.preco*item.qtd)
                                return(                                
                                    <SacolaItem 
                                        key={index}
                                        index={index}
                                        img={img}
                                        categoria={produto.categoria}
                                        descricao={produto.descricao}
                                        qtd={item.qtd}
                                        precoAntigo={produto.preco_antigo}
                                        preco={produto.preco}
                                        total={produto.preco*item.qtd} 
                                    />
                                )
                            } else {
                                return ""
                            }
                        })
                    )
                })}
                <div className="row py-3 bg-light font-weight-bold border-bottom border-secondary">
                    <div className="col-2 text-center"></div>
                    <div className="col-3">Subtotal R$ {subtotal.toFixed(2).toString().replace(".", ",")}</div>
                    <div className="col-2 text-center"></div>
                    <div className="col-3">
                        <Link to="/produtos" className="btn btn-block btn-primary" role="button">Continuar Comprando</Link>
                        <Link className="btn btn-block btn-success" role="button">Finalizar Compra</Link>
                    </div>
                    <div className="col-2"></div>                    
                </div>               
            </main>
        )
    } else {
        return(
            <main className="container-fluid">
                <div className="jumbotron">
                    <h1 className="display-4">Sua sacola esta vazia!</h1>
                    <hr className="my-4"/>
                    <p>Clique no botão abaixo para adicionar mais produtos</p>
                    <Link className="btn btn-primary btn-lg" to="/Produtos" role="button">Clique aqui!</Link>
                </div>
            </main>       
        ) 
    }
}

export default Sacola;
 