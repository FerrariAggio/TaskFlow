# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução

TaskFlow é um gerenciador de tarefas desenvolvido para ajudar os usuários a organizarem melhor seu tempo e aumentarem a produtividade, seja no contexto acadêmico ou profissional. Projetado para atender a diferentes perfis — desde estudantes até profissionais de pequenas empresas — o sistema oferece uma interface amigável, intuitiva e responsiva, acessível a todos os níveis de familiaridade com tecnologia. Seu layout foi pensado para facilitar a navegação e proporcionar uma experiência de uso fluida.

TaskFlow foi idealizado como uma solução escalável e leve, permitindo tanto o uso individual quanto colaborativo em pequenos times, com o objetivo de ser uma ferramenta útil em diferentes dispositivos e contextos. Combinando tecnologia e usabilidade, o TaskFlow propõe uma alternativa prática para quem deseja transformar suas rotinas com mais organização e clareza.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas

Persona 1
<img src="/assets/wad/persona-1.png">

---

Persona 2
<img src="/assets/wad/persona-2.png">

### 2.2. User Stories

| ID   | User Story                                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| US01 | Como estudante universitária, quero atribuir níveis de prioridade às minhas tarefas, para que eu consiga organizar melhor meu tempo entre faculdade e estágio. |
| US02 | Como profissional autônomo, quero visualizar todas as minhas tarefas na ordem semanal, para que eu possa planejar minha rotina de forma mais eficiente.        |
| US03 | Como profissional autônomo, quero atribuir categorias às minhas tarefa, para poder separa-las em suas respectivas áreas.                                       |
| US04 | Como usuário do sistema, quero vizualizar prazos importantes ao entrar na plataforma, para que eu não perca datas de entrega ou compromissos.                  |

### Análise INVEST – US01

| Critério             | Justificativa                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **I – Independente** | A funcionalidade de atribuir prioridade pode ser desenvolvida de maneira independente, sem depender de outras features como categorias ou organização cronológica. |
| **N – Negociável**   | A forma de priorização (por cores, níveis, tags etc.) pode ser ajustada conforme as necessidades do projeto e feedback dos usuários.                               |
| **V – Valiosa**      | Entrega valor direto ao usuário, permitindo melhor gestão do tempo e definição de foco nas atividades mais importantes.                                            |
| **E – Estimável**    | É possível estimar com clareza o esforço necessário para implementá-la, com base na lógica e interface envolvidas.                                                 |
| **S – Pequena**      | A implementação pode ser dividida em partes menores como: criação do campo de prioridade, lógica de ordenação e exibição no front-end.                             |
| **T – Testável**     | Pode ser testada verificando se os níveis de prioridade são atribuídos corretamente e afetam a visualização e organização das tarefas.                             |

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

Modelagem conceitual do banco de dados
<img src="/assets/wad/db_diagram.png">

A imagem acima representa o modelo relacional do banco de dados utilizado no projeto TaskFlow, que representa as entidades principais do sistema de gerenciamento de tarefas e as relações entre elas.

O modelo é composto por cinco tabelas principais:

1. **User:** Contém os dados dos usuários que utilizarão o sistema. Cada usuário pode cadastrar múltiplas tarefas.

   Campos principais:

   - id: identificador único do usuário
   - name: nome do usuário
   - surname: sobrenome do usuário
   - email: email de login do usuário
   - password: senha de acesso do usuário

2. **Task:** Tabela central do sistema, armazena as tarefas cadastradas pelos usuários. Cada tarefa está vinculada a um único usuário e possui relacionamentos com status, prioridade e categoria.

   Campos principais:

   - id: identificador único de cada tarefa
   - title: título da tarefa
   - description: descrição de o que deve ser feito
   - conclusion_date: data limite para execução da tarefa
   - user_id: id do usuário o qual está conectado à tarefa, atua como um chave estrangeira
   - category_id: id da categoria atribuida à tarefa, atua como um chave estrangeira
   - status_id: id do status atribuido à tarefa, atua como um chave estrangeira
   - priority_id: id da prioridade atribuida à tarefa, atua como um chave estrangeira`

3. **Status:** Representa o estado atual de uma tarefa (por exemplo: "pendente", "em andamento", "concluída").

   Campos principais:

   - id: identificador único de cada status
   - name: nome do status

4. **Priority:** Define o nível de prioridade de uma tarefa (como "baixa", "média", "alta").

   Campos principais:

   - id: identificador único de cada prioridade
   - name: nome da prioridade

5. **Category:** Agrupa tarefas por categorias definidas (por exemplo: "faculdade", "trabalho", "pessoal").

   Campos principais:

   - id: identificador único de cada categoria
   - name: nome da categoria

**Relações:**

Um usuário (User) pode ter várias tarefas (Task) – relação 1:N.

Cada tarefa pertence a exatamente uma categoria (Category) – relação N:1.

Cada tarefa possui exatamente um status (Status) – relação N:1.

Cada tarefa tem uma prioridade associada (Priority) – relação N:1.

**Modelagem Física do Banco de Dados**

A modelagem física desse banco de dados se encontra no seguinte caminho de arquivos `/scripts/init.slq`. Para acessar diretamente <a href="/scripts/init.sql">Clique aqui!</a>

### 3.1.1 BD e Models (Semana 5)

Na arquitetura MVC da aplicação TaskFlow, os models atuam como a camada responsável por interagir diretamente com o banco de dados. Eles possuem métodos que são acionados pelos controllers para executarem comandos SQL e então realizar operações como inserção, atualização, remoção e consulta de registros. A aplicação possui dois models, sendo eles `userModel` e `taskModel`.

O `userModel` é responsável por executar todas as operações relacionadas aos usuários no banco de dados. Ele contém funções específicas, tais como:

criarUser(data): Recebe os dados de um novo usuário e executa uma query INSERT para armazená-lo na tabela User.

listarUser(): Executa uma query SELECT para retornar todos os registros da tabela User.

obterUser(id): Recebe o parâmetro id e executa uma query SELECT filtrando o usuário específico.

atualizarUser(id, data): Recebe um id e os novos dados para atualizar o registro correspondente usando uma query UPDATE.

deletarUser(id): Recebe o id e executa uma query DELETE para remover o usuário do banco.

O `taskModel` é responsável por executar todas as operações relacionadas às tarefas no banco de dados. Ele contém funções específicas, tais como:

criarTask(data): Recebe os dados de uma nova tarefa e executa uma query INSERT na tabela Task.

listarTask(): Executa uma query SELECT para retornar todas as tarefas cadastradas.

obterTask(id): Recebe o parâmetro id e executa uma query SELECT filtrando uma tarefa específica.

atualizarTask(id, data): Recebe um id e os novos dados para atualizar a tarefa correspondente via query UPDATE.

deletarTask(id): Recebe o id e executa uma query DELETE para excluir a tarefa do banco.

### 3.2. Arquitetura (Semana 5)

<img src="/assets/wad/diagrama-mvc.png">

Na aplicação TaskFlow, estruturada em arquitetura MVC (Model-View-Controller), o fluxo de dados inicia quando o usuário interage com a interface (View), como ao realizar login, cadastrar-se ou gerenciar tarefas. A View envia essas requisições ao Controller, que processa e valida as informações, acionando o Model correspondente para executar operações no banco de dados (PostgreSQL), como consultas, inserções ou atualizações.

O Model realiza a manipulação direta dos dados e retorna o resultado ao Controller, que então prepara e envia a resposta para a View, atualizando a interface do usuário. Essa separação de responsabilidades permite uma organização mais clara do sistema, facilitando sua manutenção, escalabilidade e reuso de componentes.

### 3.3. Wireframes (Semana 03)

**Tela 1: Login**

<img src="/assets/wad/login_taskflow.png">

**Tela 2: Cadastro**

<img src="/assets/wad/cadastro_taskflow.png">

**Tela 3: Início**

<img src="/assets/wad/inicio_taskflow.png">

**Tela 4: Criação e Edição de Tarefas**

<img src="/assets/wad/criar_taskflow.png">

**Tela 5: Visualização de Tarefa**

<img src="/assets/wad/view_taskflow.png">

**Tela 6: Visualização de Calendário**

<img src="/assets/wad/calendario_taskflow.png">

**Descrição dos wireframes**

1. `Tela de Login:` A primeira interface exibida ao usuário. Nela, o sistema exibe uma mensagem de boas-vindas e solicita que o usuário faça o login utilizando suas credenciais. Há também um botão destacado ("Criar conta") que leva o usuário para a tela de cadastro, caso ainda não possua uma conta.

2. `Tela de Cadastro:` Esta tela serve para o registro de novos usuários. Apresenta um formulário simples com campos para preenchimento de dados essenciais, como nome, e-mail e senha. Um botão de ação azul permite concluir o cadastro e prosseguir diretamente para a Tela Inicial do sistema.

3. `Tela Inicial:` A tela central do TaskFlow, onde o usuário gerencia suas tarefas. A interface é organizada no estilo kanban, separando tarefas em duas colunas: To do (a fazer), Doing (em andamento). Na lateral direita, há uma área de notificações, onde são exibidas tarefas com prazo próximo do vencimento. Clicar em uma notificação (vermelho) leva o usuário à Tela de Visualização da Tarefa. Além de outros elementos como um menu lateral à esquerda com botões de atalho para navegação entre telas, botão para criar uma nova tarefa e acesso ao calendário mensal, que exibe as tarefas por data.

4. `Tela de Criação/Edição de Tarefa:`Esta interface permite criar ou editar uma tarefa existente. É composta por um campo de título, campo de data de conclusão, campo de descrição. Além de Três seletores para definir a categoria da task, sua prioridade e seu status (To do / Doing / Done), incluindo também um botão (azul) que salva a tarefa e retorna o usuário à Tela Inicial.

5. `Tela de Visualização da Tarefa:` Tela dedicada a exibir todos os detalhes de uma tarefa específica, exibindo os seguintes elementos: Título, Data de conclusão, Descrição, Categoria, Prioridade, status.Contendo dois botões de ação: editar tarefa (azul), que leva à tela de edição e concluir tarefa (verde), que atualiza o status para "Done".

6. `Tela de Calendário:` Calendário mensal com visualização clara das tarefas em seus respectivos dias. Cada tarefa é representada por uma cor distinta, conforme sua categoria, facilitando a identificação rápida de compromissos. Ao clicar em uma tarefa dentro do calendário o usuário é levado à Tela de Visualização da Tarefa.

### 3.4. Guia de estilos (Semana 05)

**Guia de estilos**

<img src="/assets/wad/guia-de-estilos.png">

**Layout da página**

<img src="/assets/wad/layout-alta.png">

Todas esses protótipos de telas e o guias de estilos foram feitos por meio do Figma, estando disponível para visualização no seguinte link: [Figma](https://www.figma.com/design/c518pdwfAtSeeCML8O8cVd/TaskFlow?node-id=0-1&p=f&t=fEW9VrGZuktYMp9v-0)

### 3.5. Protótipo de alta fidelidade (Semana 05)

**Tela 1: Login**

<img src="/assets/wad/login-alta.png">

**Tela 2: Cadastro**

<img src="/assets/wad/cadastro-alta.png">

**Tela 3: Início**

<img src="/assets/wad/cadastro-alta.png">

**Tela 4: Criação e Edição de Tarefas**

<img src="/assets/wad/novaTarefa-alta.png">

**Tela 5: Visualização de Tarefa**

<img src="/assets/wad/detalhes-alta.png">

**Tela 6: Lista de tarefas**

<img src="/assets/wad/listaTarefas-alta.png">

### 3.6. WebAPI e endpoints (Semana 05)

Endpoints são pontos de entrada ou saída em uma aplicação web, utilizados para comunicação entre o cliente (como navegadores, aplicativos) e o servidor. Cada endpoint corresponde a uma rota que executa uma ação específica no sistema, como buscar dados, criar registros, atualizar ou excluir informações. Eles são fundamentais no desenvolvimento de APIs (Interfaces de Programação de Aplicações), permitindo que diferentes sistemas troquem informações de forma estruturada e segura.

| Método | Rota   | Descrição                             | Controller                     |
| ------ | ------ | ------------------------------------- | ------------------------------ |
| GET    | `/`    | Lista todos os usuários               | `userController.listarUser`    |
| GET    | `/:id` | Obtém detalhes de um usuário pelo ID  | `userController.obterUser`     |
| POST   | `/`    | Cria um novo usuário                  | `userController.criarUser`     |
| PUT    | `/:id` | Atualiza um usuário existente pelo ID | `userController.atualizarUser` |
| DELETE | `/:id` | Deleta um usuário pelo ID             | `userController.deletarUser`   |

| Método | Rota        | Descrição                    | Controller                     |
| ------ | ----------- | ---------------------------- | ------------------------------ |
| POST   | `/task`     | Cria uma nova tarefa         | `TaskController.criarTask`     |
| GET    | `/task`     | Lista todas as tarefas       | `TaskController.listarTask`    |
| GET    | `/task/:id` | Obtém detalhes de uma tarefa | `TaskController.obterTask`     |
| PUT    | `/task/:id` | Atualiza uma tarefa pelo ID  | `TaskController.atualizarTask` |
| DELETE | `/task/:id` | Deleta uma tarefa pelo ID    | `TaskController.deletarTask`   |

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---

---
