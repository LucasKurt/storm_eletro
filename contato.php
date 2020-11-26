<?php 
    require_once('arquivos externos\PHP\bd_connect.php');

    if (isset($_POST['nome']) && isset($_POST['msg'])) {
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];
        
        if ($nome != "" && $msg != "") {
            $sql = "INSERT INTO comentarios (nome,msg) VALUES ('$nome','$msg')";
            $conn->query($sql);
        }
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./arquivos externos/CSS/estilo.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="shortcut icon" sizes="57x57" href="./img/favicon.ico">
        <title>Contato - Full Stack Eletro</title>
    </head>
    <body>
        <!-- menu -->
        <?php require_once('./arquivos externos/HTML/nav.html') ?>
        <main class="container-fluid">
            <h2>Contato</h2>
            <hr>
            <Table  style="width: 100%;text-align: center;">
                <tr>
                    <td style="width: 50%;">
                        <img src="./img/email-logo.png" width="25">
                        contato@fullstackeletro.com
                    </td>
                    <td>
                        <img src="./img/whats-logo.jpg" width="25">
                        (11)99999-9999
                    </td>
                </tr>
            </Table>
            <br><br>
            <form class="form-group" action="" method="post">
                <label for="nome">Nome:</label>
                <input class="form-control" type="text" id="name" name="nome" placeholder="Digite aqui seu nome."><br>
                <label for="msg">Mensagem:</label><br>
                <textarea class="form-control" name="msg" id="msg" cols="90" rows="5" placeholder="Deixe aqui sua mensagem"></textarea><br>
                <button class="btn btn-outline-secondary btn-lg" type="submit">Enviar</button>
            </form>
            <br>
            <table class="table table-striped table-sm table-responsive-sm">
                <caption>Mensagens</caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Data</th>
                        <th scope="col">Mensagem</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $sql = "SELECT * FROM comentarios";
                        $result = $conn->query($sql);
                        while ($rows = $result->fetch_assoc()) {?>
                            <tr>
                                <th scope="row"><?php echo $rows['id'] ?></th>
                                <td><?php echo $rows['nome']?></td>
                                <td><?php echo $rows['data']?></td>
                                <td><?php echo $rows['msg']?></td>
                            </tr><?php
                        }
                    ?>
                </tbody>    
            </table>
        </main>
        <?php require_once('arquivos externos\HTML\footer.html') ?>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </body>
</html>