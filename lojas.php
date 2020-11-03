<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./arquivos externos/CSS/estilo.css" type="text/css">
        <title>Nossas Lojas - Full Stack Eletro</title>
    </head>
    <body>
        <!-- menu -->
        <?php require_once('./arquivos externos/HTML/nav.html') ?>
        <main>
            <h2>Nossas Lojas</h2>
            <hr>
            <table style="width: 100%;">
                <tr>
                    <td style="text-align: left;">
                        <h3>Rio de Janeiro</h3>
                        <p> 
                            Avenida Presidente Vargas,5000<br>
                            10º andar<br>
                            Centro<br>
                            (21) 3333-3333
                        </p>
                    </td>
                    <td>
                        <h3>São Paulo</h3>
                        <p> 
                            Avenida Paulista,985<br>
                            3º andar<br>
                            Jardins<br>
                            (11) 4444-4444
                        </p>
                    </td>
                    <td>
                        <h3>Santa Catarina</h3>
                        <p> 
                            Rua Major Ávila,370<br>
                            Vila Mariana<br>
                            (47) 5555-5555
                        </p>
                    </td>
                </tr>
            </table>
        </main>
        <footer class="rodape">
            <h4>Formas de Pagamento:</h4>
            <img src="./img/Cartoes.jpeg" alt="formas de pagamento"><br>
            &copy; 2020 Full Stack Eletro, todos os direitos reservados.
        </footer>
    </body>
</html>