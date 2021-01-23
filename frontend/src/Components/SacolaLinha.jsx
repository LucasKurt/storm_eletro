import React from "react";

const SacolaLinha = (props) => {
    return(
        <div className="row border-bottom border-secondary py-3">
            <div className="col-2 text-center">
                <img className="w-100" src={props.img} alt={props.categoria}/>
            </div>
            <div className="col-6">
                <p>{props.descricao}</p>
            </div>
            <div className="col-2 text-center">
                <input className="form-control" type="number" value={props.qtd}/>
            </div>
            <div className="col-2">
                <p>de R$ {props.precoAntigo}</p>
                <h4>por RS {props.preco}</h4>
            </div>
        </div>
    )
}

export default SacolaLinha;