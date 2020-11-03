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
        <title>Contato - Full Stack Eletro</title>
    </head>
    <body>
        <!-- menu -->
        <?php require_once('./arquivos externos/HTML/nav.html') ?>
        <main>
            <h2>Contato</h2>
            <hr>
            <Table style="width: 100%;text-align: center;">
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
            <form action="" method="post">
                <label for="nome">Nome:</label>
                <input type="text" id="name" name="nome" placeholder="Digite aqui seu nome."><br>
                <label for="msg">Mensagem:</label><br>
                <textarea name="msg" id="msg" cols="90" rows="5" placeholder="Deixe aqui sua mensagem"></textarea><br>
                <input type="submit" value="Enviar">
            </form>
            <br>
            <hr>
            <?php
                $sql = "SELECT * FROM comentarios";
                $result = $conn->query($sql);
                while ($rows = $result->fetch_assoc()) {
                    echo "Data: ", $rows['data'], "<br>"; 
                    echo "Cliente: ", $rows['nome'], "<br>"; 
                    echo "Mensagem: ", $rows['msg'], "<br>";
                    echo  "<hr>";
                }
            ?>
        </main>
        <footer class="rodape">
            <h4>Formas de Pagamento:</h4>
            <img src="./img/Cartoes.jpeg" alt="formas de pagamento"><br>
            &copy; 2020 Full Stack Eletro, todos os direitos reservados.
        </footer>
    </body>
</html>