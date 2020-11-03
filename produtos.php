<?php 
    require_once('arquivos externos\PHP\bd_connect.php');
    $sql = "select * from produtos";
    $result_div = $conn->query($sql);
    $result_ul = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./arquivos externos/CSS/estilo.css" type="text/css">
        <title>Produtos - Full Stack Eletro</title>
    </head>
    <body>
        <!-- menu -->
        <?php require_once('./arquivos externos/HTML/nav.html') ?>
        <main>
            <h2>Produtos</h2>
            <hr>
            <div class="principal">
                <aside class="categorias">
                    <h3>Categorias</h3>
                    <ul>
                        <li id="produto" onclick="selecionar(`produto`)">Todos</li>
                        <?php
                            while ($rows2 = $result_ul->fetch_assoc()) {
                                $categorias[] = $rows2['categoria'];
                                $categorias = array_unique($categorias);
                            }
                            foreach ($categorias as $categoria) { ?>
                                <li id="<?php echo str_replace(' ', '', $categoria); ?>" onclick="selecionar(`<?php echo str_replace(' ', '', $categoria) ?>`)"><?php echo $categoria ?></li><?php
                            }
                            unset($categoria);      
                        ?>
                    </ul>
                </aside>
                <div class="container">
                    <?php 
                        while ($rows = $result_div->fetch_assoc()) { ?>
                            <div class="produto <?php echo str_replace(' ', '', $rows['categoria']); ?>">
                                <img src="<?php echo $rows['img']; ?>" alt="<?php echo $rows['categoria']; ?>" onclick="aumentaImg(this)"><br>
                                <p><?php echo $rows['descricao']; ?></p><hr>
                                <p class="preçoAntigo">R$ <?php echo number_format($rows['preco_antigo'],2, ',', '.'); ?></p>
                                <p class="preçoAtual">R$ <?php echo number_format($rows['preco'],2, ',', '.'); ?></p>
                                <br><br>
                            </div><?php
                        }
                    ?>
                </div>
            </div>
        </main>
        <footer>
            <h4>Formas de Pagamento:</h4>
            <img src="./img/Cartoes.jpeg" alt="formas de pagamento"><br>
            &copy; 2020 Full Stack Eletro, todos os direitos reservados.
        </footer>
        <script src="./arquivos externos/JS/script.js"></script>
        <script>
            quantidadeItens(`produto`);
            <?php foreach ($categorias as $categoria) { ?>
                quantidadeItens(`<?php echo str_replace(' ', '', $categoria); ?>`);<?php
            }?>
        </script>    
    </body>
</html>