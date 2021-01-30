import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SacolaLinha = (props) => {    
    const dispatch = useDispatch();
    const qtd = useSelector((state) => state.qtdReducer)
    const sacola = useSelector((state) => state.sacolaReducer)

    function remove() {
        dispatch({type: "REMOVER",value: props.index});
        dispatch({type: "SPLICE",value: props.index});
        localStorage.setItem("sacola", JSON.stringify(sacola));
        localStorage.setItem("qtd", JSON.stringify(qtd));
    }
    function somar() {
        dispatch({type: "SOMAR",value: props.index});
        dispatch({type: "ATUALIZAR",value: [props.index,qtd[props.index]]});
        localStorage.setItem("sacola", JSON.stringify(sacola));
        localStorage.setItem("qtd", JSON.stringify(qtd));
    }
    function subtrair() {
        if(props.qtd > 1) {
            dispatch({type: "SUBTRAIR",value: props.index});
            dispatch({type: "ATUALIZAR",value: [props.index,qtd[props.index]]});
            localStorage.setItem("sacola", JSON.stringify(sacola));
            localStorage.setItem("qtd", JSON.stringify(qtd));
        }
    }
    return(
        <div className="row border-bottom border-secondary py-3">
            <div className="col-2 text-center hpx-50">
                <img className="h-100" src={props.img} alt={props.categoria}/>
            </div>
            <div className="col-3">
                <p>{props.descricao}</p>
            </div>
            <div className="col-2 text-center d-flex flex-column justify-content-around">
                <div className="d-flex">
                    <button type="button" className="btn btn-secondary" onClick={subtrair}>-</button>
                    <input className="form-control mx-1" type="number" value={props.qtd} disabled/>
                    <button type="button" className="btn btn-secondary" onClick={somar}>+</button>
                </div>
                <button className="btn btn-danger" onClick={remove}>Remover</button>
            </div>
            <div className="col-3">
                <p>de R$ {props.precoAntigo.toFixed(2).toString().replace(".", ",")}</p>
                <h4>por R$ {props.preco.toFixed(2).toString().replace(".", ",")}</h4>
            </div>
            <div className="col-2">
                <h4>R$ {(props.total).toFixed(2).toString().replace(".", ",")}</h4>
            </div>
        </div>
    )
}

export default SacolaLinha;