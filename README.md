# EsShoopingBootWeb

Com o propósito de unir conhecimentos, elaborei um exemplo prático usando spring boot, angular 4 e elasticsearch para 
simular um ecommerce demonstrando assim os principais conceitos e diferenças para desenvolvedores acostuamdos com banco
de dados relacionais a entender os pontos fortes envolvidos no modelo NoSQL voltado para busca.

Esse exemplo será também utilizado para elaboração de um treinamento online e presencial para quem estiver interessado 
em aprofundar seus conhecimentos e trocar figurinhas.

## Pré-requisitos

[Link](requisitos.md)

## Parte 1 - criando o esqueleto com angular-cli

Edite o arquivo .angular-cli.json e adicione as entradas ao array styles:

```javascript
"styles":[
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "../node_modules/bootstrap/dist/css/bootstrap-theme.css",
  "../node_modules/primeng/resources/primeng.css",
  "../node_modules/primeng/resources/themes/bootstrap/theme.css",
  "../node_modules/font-awesome/css/font-awesome.css"
  ]
```

Crie os componentes da aplicação:

```bash
# ng g component itens
# ng g component menu
# ng g component menu-lat
# ng g component thumbnail
```

Crie o serviço que iremos ter com o backend

```bash
# ng g service services/shopping
```

Adicione o serviço recém criado como provieder no arquivo app.module.ts:

```javascript
providers: [ShoppingService]
```

## Parte 2 - codificação inicial dos componentes

[Link](parte2.md)

## Parte 3 - contactando o backend

[Link](parte3.md)

## Parte 4 - dando funcionalidade aos nossos controles com databind

[Link](parte4.md)

## Parte 5 - adicionando navegabilidade

[Link](parte5.md)

## Parte 6 - realizando a carga dos dados

[Link](https://github.com/lsegala/es-shopping-boot-api)

## Parte 7 - paginando os resultados

[Link](parte7.md)

## Parte 8 - além da busca

[Link](parte8.md)
