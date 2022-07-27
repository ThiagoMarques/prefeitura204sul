<?php
header('Content-Type: text/html; charset=UTF-8');
/* Recuperar os Dados do Formulário de Envio*/
$txtNome = $_POST['name'];
$txtAssunto = 'Contato por meio do site da Prefeitura da 204 sul';
$txtEmail = $_POST['email'];
$txtMensagem = $_POST['message'];

/* Montar o corpo do email*/
// $corpoMensagem = "<b>Nome:</b> ".$txtNome." <br><b>Assunto:</b> ".$txtAssunto."<br><b>Mensagem:</b> ".$txtMensagem;
$corpoMensagem =
    '<b>Nome:</b> ' .
    $txtNome .
    '<br><b>E-mail:</b> ' .
    $txtEmail .
    '<br><b>Mensagem:</b> ' .
    $txtMensagem;

/* Extender a classe do phpmailer para envio do email*/
require_once 'PHPMailer/class.phpmailer.php';
require_once '/home/storage/1/6a/c9/prefeitura204sul1/config/config.php';

/* Definir Usuário e Senha do Gmail de onde partirá os emails*/

function smtpmailer($para, $de, $nomeDestinatario, $assunto, $corpo)
{
    global $error;
    $mail = new PHPMailer();
    /* Montando o Email*/
    $mail->IsSMTP(); /* Ativar SMTP*/
    $mail->SMTPDebug = 1; /* Debugar: 1 = erros e mensagens, 2 = mensagens apenas*/
    $mail->SMTPAuth = true; /* Autenticação ativada */
    $mail->SMTPSecure = 'ssl'; /* TLS REQUERIDO pelo GMail*/
    $mail->Host = 'email-ssl.com.br'; /* SMTP utilizado*/
    $mail->Port = 465; /* A porta 465 deverá estar aberta em seu servidor*/
    $mail->Username = GUSER;
    $mail->Password = GPWD;
    $mail->SetFrom($de, $nomeDestinatario);
    $mail->Subject = $assunto;
    $mail->Body = $corpo;
    $mail->AddAddress($para);
    $mail->IsHTML(true);

    /* Função Responsável por Enviar o Email*/
    if (!$mail->Send()) {
        $error =
            "<font color='red'><b>Mail error: </b></font>" . $mail->ErrorInfo;
        return false;
    } else {
        $error =
            "<font color='blue'><b>Mensagem enviada com Sucesso!</b></font>";
        return true;
    }
}

/* Passagem dos parametros: email do Destinatário, email do remetende, nome do remetente, assunto, mensagem do email.*/
if (
    smtpmailer(
        'faleconosco@prefeitura204sul.org.br',
        'faleconosco@prefeitura204sul.org.br',
        $txtNome,
        $txtAssunto,
        $corpoMensagem
    )
) {
    echo '<script type="text/javascript">';
    echo ' alert("Mensagem enviada!")';
    echo '</script>';
    $script = "<script>
        window.location = 'https://prefeitura204sul.org.br/contato.php';</script>";
    echo $script;
}
if (!empty($error)) {
    echo $error;
}
?>
