<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./arquivos externos/CSS/estilo.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="shortcut icon" sizes="57x57" href="./img/favicon.ico">
        <title>Nossas Lojas - Full Stack Eletro</title>
    </head>
    <body>
        <!-- menu -->
        <?php require_once('./arquivos externos/HTML/nav.html') ?>
        <main class="container-fluid">
            <h2>Nossas Lojas</h2>
            <hr>
            <div class="container">
                <table class="table table-striped table-dark table-sm table-responsive-sm">
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
        <?php require_once('arquivos externos\HTML\footer.html') ?>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>