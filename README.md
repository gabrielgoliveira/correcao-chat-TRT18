# Configurando o Script no Chat TRT18

# Sobre o Script

O Script em questão tem o intuito de atualizar a página do chat TRT18 em um intervalo de tempo predefinido e também emite um alerta sonoro quando entra um novo chat.

# Instalando a extensão Tampermonkey

O Tampermonkey é uma extensão que executa scripts do usuário.

- Baixar a extensão Tampermonkey (Disponível para o Chrome/Firefox)
    - Link Chrome : [Clique Aqui](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pt-BR)
    - Link Firefox : [Clique Aqui](https://addons.mozilla.org/pt-BR/firefox/addon/tampermonkey/)

- Após instalar a extensão é necessário configurar o Script.

# Configurando o Script

## Passo 1

Clicar no ícone da extensão e selecionar a opção **Adicionar Novo Script**

![img/passo_1.png]
(img/passo_1.png)

## Passo 2

Na janela em questão, copiar o Script do github [(Link)](https://github.com/gabrielgoliveira/correcao-chat-TRT18/blob/master/up-chat-trt18.js) , voltar para o tampermonkey e então apague todo o código que está sendo exibido e cole o meu código do Github. Após isso clique em Arquivo → Salvar ou (Ctrl + s).

![img/passo_2.png]
(img/passo_2.png)

## Passo 3

Na aba "Userscripts instalados", verifique se o script está ativado.

![img/passo_3.png]
(img/passo_3.png)

## Passo 4

Pronto o script já está configurado e vai ser carregado somente no chat, pois as configurações estão no cabeçalho do Script;