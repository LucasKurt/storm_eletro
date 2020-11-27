import React from "react";

const Contatos = () => {
    return(
        <main className="container-fluid">
            <h2>Contato</h2>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col text-center"> 
                        <img src="./img/email-logo.png" className="w-5"/>
                        <span> contato@fullstackeletro.com</span>
                    </div>
                    <div className="col text-center">
                        <img src="./img/whats-logo.jpg" className="w-5"/>
                        <span> (11)99999-9999</span>
                    </div>
                </div>
            </div>
            <br/><br/>
            <form className="form-group" action="" method="post">
                <label for="nome">Nome:</label>
                <input className="form-control" type="text" id="name" name="nome" placeholder="Digite aqui seu nome."/><br/>
                <label for="msg">Mensagem:</label><br/>
                <textarea className="form-control" name="msg" id="msg" cols="90" rows="5" placeholder="Deixe aqui sua mensagem"></textarea><br/>
                <button className="btn btn-outline-secondary btn-lg" type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default Contatos;