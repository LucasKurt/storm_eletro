import React from "react";
import {Link} from 'react-router-dom';

const CardItem = (props) => {
    function shadow(event) {
        const img = event.target;
        if (img.classList[7] === "border-0" && img.classList[8] !== "shadow-lg") {
            img.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.classList[7] === "border-0" && img.parentElement.classList[8] !== "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.parentElement.classList[7] === "border-0" && img.parentElement.parentElement.classList[8] !== "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',true);
        }
    }

    function shadowless(event) {
        const img = event.target;
        if (img.classList[8] === "shadow-lg") {
            img.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.classList[8] === "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.parentElement.classList[8] === "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',false);
        } 
         
    }

    return(
        <Link className={props.cat_id + " col-sm-12 col-lg-4 card align-items-center p-5 t-none border-0"} to={() => "/Produto/" + props.descricao} onMouseEnter={shadow} onMouseLeave={shadowless}>
            <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-75 mx-auto" src={props.img} alt={props.categoria}/></div>
            <div className="card-body">
                <p className="card-text"> {props.descricao} </p>
                <del className="card-title">R$ {props.precoAntigo}</del>
                <p className="card-title preçoAtual text-danger font-weight-bold text-monospace">R$ {props.preco}</p>
            </div>
        </Link>
    )
}

export default CardItem