import React from "react";

const Contatos = () => {
    const [comentarios,setComentarios] = React.useState([]);
    const [imput,setImput] = React.useState({nome:'',msg:''});
    const [render,setRender] = React.useState(false)
    const [msg,setMsg] = React.useState(false);
    const [show,setShow] = React.useState(false);
    const [btn,setBtn] = React.useState('Ver Mensagens');

    React.useEffect(() =>{
        async function fetchData(){
            const url = "http://localhost:3333/comentarios";
            const response = await fetch(url);
            setComentarios(await response.json());
        }fetchData()
    },[render])

    function registerComment(event) {
        event.preventDefault();
        
        //let formData = new FormData(event.target);
        let formData = {
            nome: imput.nome,
            msg: imput.msg,
        }

        const url = "http://localhost:3333/comentarios";

        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(formData)
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

    async function clear() {
        //setImput({...imput,nome: '',mensagem: ''})
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
                <input className="form-control" type="text" id="nome" name="nome" value={imput.nome} placeholder="Digite aqui seu nome." onChange={event => setImput({...imput,nome: event.target.value})}/><br/>
                <label htmlFor="msg">Mensagem:</label><br/>
                <textarea className="form-control" name="msg" id="msg" cols="90" rows="5" value={imput.msg} placeholder="Deixe aqui sua mensagem" onChange={event => setImput({...imput,msg: event.target.value})}></textarea><br/>
                <button className="btn btn-outline-secondary btn-lg" type="submit" onClick={clear}>Enviar</button>
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
                                <td>{comentario.databr}</td>
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