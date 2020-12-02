import React from "react";

const Contatos = () => {
    const [comentarios,setComentarios] = React.useState([]);
    const [render,setRender] = React.useState(false)
    const [msg,setMsg] = React.useState(false);
    const [show,setShow] = React.useState(false);
    const [btn,setBtn] = React.useState('Ver Mensagens');

    React.useEffect(async () =>{
        const url = "http://localhost/Storm-Eletro/backend/comments.php";
        const response = await fetch(url);
        setComentarios(await response.json());
    },[render])

    function registerComment(event) {
        event.preventDefault();

        let formData = new FormData(event.target);
        const url = "http://localhost/Storm-Eletro/backend/register_comment.php";

        fetch(url,{
            method: "POST",
            body: formData
        }).then(response => response.json()).then(dados => {
            setRender(!render)
            setMsg(dados)

            setTimeout(() => {
                setMsg(false)
            }, 1000);
        })
    }
    
    function showTable() {
        setShow(!show);
        if (show) {
            setBtn('Ver Mensagens');
        } else {
            setBtn('Ocultar Mensagens');
        }
    }

    return(
        <main className="container-fluid">
            <h2>Contato</h2>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col text-center"> 
                        <img src="./img/email-logo.png" alt="email-logo" className="w-5"/>
                        <span> contato@fullstackeletro.com</span>
                    </div>
                    <div className="col text-center">
                        <img src="./img/whats-logo.jpg" alt="whats-logo" className="w-5"/>
                        <span> (11)99999-9999</span>
                    </div>
                </div>
            </div>
            <br/><br/>
            <form onSubmit={registerComment}>
                <label htmlFor="nome">Nome:</label>
                <input className="form-control" type="text" id="name" name="nome" placeholder="Digite aqui seu nome."/><br/>
                <label htmlFor="msg">Mensagem:</label><br/>
                <textarea className="form-control" name="msg" id="msg" cols="90" rows="5" placeholder="Deixe aqui sua mensagem"></textarea><br/>
                <button className="btn btn-outline-secondary btn-lg" type="submit">Enviar</button>
                <button className="btn btn-outline-secondary btn-lg ml-5" type="button" onClick={showTable}>{btn}</button>
            </form>

            {msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                Cadastro efetuado com sucesso!
            </div>}
            
            {show && <table className="table table-striped table-sm table-responsive-sm">
                <caption>Mensagens</caption>
                <thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Data</th>
                        <th scope="col">Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    {comentarios.map(comentario =>{
                        return(
                            <tr key={comentario.id}>
                                <td>{comentario.nome}</td>
                                <td>{comentario.data}</td>
                                <td>{comentario.msg}</td>
                            </tr>
                        )
                    })}
                </tbody>    
            </table>}
        </main>
    )
}

export default Contatos;