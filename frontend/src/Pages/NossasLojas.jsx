import React from "react";

const NossasLojas = () => {
    return(
        <main className="container-fluid">
        <h2>Nossas Lojas</h2>
        <hr/>
        <div className="container">
            <table className="table table-striped table-dark table-sm table-responsive-sm">
                <thead>
                    <tr>
                    <th scope="col">Estado</th>
                    <th scope="col">Rio de Janeiro</th>
                    <th scope="col">São Paulo</th>
                    <th scope="col">Santa Catarina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Endereço</th>
                        <td>Avenida Presidente Vargas,5000</td>
                        <td>Avenida Paulista,985</td>
                        <td>@Rua Major Ávila,370</td>
                    </tr>
                    <tr>
                        <th scope="row">Complemento</th>
                        <td>10º andar</td>
                        <td>3º andar</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <th scope="row">Bairro</th>
                        <td>Centro</td>
                        <td>Jardins</td>
                        <td>Vila Mariana</td>
                    </tr>
                    <tr>
                        <th scope="row">Telefone</th>
                        <td>(21) 3333-3333</td>
                        <td>(11) 4444-4444</td>
                        <td>(47) 5555-5555</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    )
}

export default NossasLojas;