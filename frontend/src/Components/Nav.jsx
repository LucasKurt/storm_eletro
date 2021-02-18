import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-justified">
            <Link className="navbar-brand" to="/"><img className="w-50" src="/img/logo.png" alt="Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav px-5 text-nowrap">
                    <Link className="nav-item nav-link" to="/Produtos">Produtos</Link>
                    <Link className="nav-item nav-link" to="/NossasLojas">Nossas Lojas</Link>
                    <Link className="nav-item nav-link" to="/Contatos">Contatos</Link>
                    <Link className="nav-item nav-link" to="/Sacola">Sacola</Link>
                </div>
            </div>            
        </nav>
    )
}

export default Nav;