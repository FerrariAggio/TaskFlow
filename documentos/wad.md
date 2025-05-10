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

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03)

**Tela 1: Login**
<img src="/assets/wad/login_taskflow.png">

**Tela 2: Cadastro**
<img src="/assets/wad/cadastro_taskflow.png">

**Tela 3: Início**
<img src="/assets/wad/inicio_taskflow.png">

**Tela 4: Criação e Edição de Tarefas**
<img src="/assets/wad/criaTask_taskflow.png">

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

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

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
