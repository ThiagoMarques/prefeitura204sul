<?php require 'includes/header.php'; ?>
<body id="top">
    <main>
    <?php require 'includes/navbar.php'; ?>
        <section class="" id="contact">
            <div class="container">
                <h2 class="mb-lg-5">Contato</h2>
                <div class="row">
                    <form id="contactform" class="" action="mail/contatoemail.php" name="contactform" method="POST">
                        <div class="form-row-cont"
                            style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                            <div class="form-group col-lg-6 col-md-8 col-12 mb-3">
                                <label class="mb-1" for="name">Nome</label>
                                <input id="name" name="name" type="text" class="form-control"
                                    placeholder="Digite seu nome">
                            </div>
                            <div class="form-group col-lg-6 col-md-8 col-12 mb-3">
                                <label class="mb-1" for="email">E-mail</label>
                                <input id="email" name="email" type="email" class="form-control"
                                    placeholder="Digite seu e-mail">
                            </div>
                            <div class="form-group col-lg-6 col-md-8 col-12">
                                <label class="mb-1" for="message">Mensagem</label>
                                <textarea id="message" name="message" class="form-control" placeholder="Digite sua mensagem"
                                    rows="4"></textarea>
                            </div>
                            <button type="submit" value="SEND" id="submit" style="width: 20em;"
                                class="btn mt-4 btn-cont btn-block">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <?php require 'includes/footer.php'; ?>
    <!-- JAVASCRIPT FILES -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/menu.js"></script>

</body>

</html>