# POC-TypeScript

Meu primeiro projeto em TS é uma lista de tarefas domésticas, que permite criar uma nova tarefa, marcá-la como concluída, deletá-la e retornar uma lista com todas as tarefas e o número de tarefas pendentes ;) 

Somente back-end. Desenvolvido em camadas e com deploy de banco.

### Rotas

* POST("/tasks") - adiciona uma nova tarefa a partir de um body no formato {"responsable": "Dayane", "description": "Aspirar a casa"};
* GET("/tasks") - retorna todas as tarefas e uma mensagem com o número de tarefas pendentes;
* PATCH("/tasks/:id") - necessita do id da tarefa para atualizar seu status (de "concluded": "false" para "true");
* DELETE("/tasks/:id") - necessita do id da tarefa para excluí-la.

### How to run

1. Clonar este repositório;
2. Instalar todas as dependências: npm i;
3. Rodar o servidor: npx nodemon src/index.ts.
