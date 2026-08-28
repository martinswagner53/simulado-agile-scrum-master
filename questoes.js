const questoes = [
  {
    "id": 1,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K1",
    "pergunta": "Segundo os valores do Manifesto Ágil, que opção deve ser preferida ao planejar o trabalho?",
    "opcoes": [
      "A) Indivíduos e interações sobre processos e ferramentas",
      "B) Documentação abrangente sobre software funcional",
      "C) Processos e ferramentas sobre indivíduos e interações",
      "D) Negociação de contratos sobre colaboração com o cliente"
    ],
    "correta": "A",
    "explicacao": "O Manifesto Ágil prioriza indivíduos e interações em relação a processos e ferramentas."
  },
  {
    "id": 2,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K1",
    "pergunta": "Qual característica diferencia principalmente o Agile de abordagens tradicionais como Waterfall?",
    "opcoes": [
      "A) Ênfase em documentação extensiva antes do desenvolvimento",
      "B) Iteratividade e entregas incrementais para permitir adaptação",
      "C) Execução sequencial com fases rígidas",
      "D) Planejamento único e imutável no início do projeto"
    ],
    "correta": "B",
    "explicacao": "O Agile é iterativo e incremental, permitindo adaptação em vez de seguir fases sequenciais rígidas."
  },
  {
    "id": 3,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual dos seguintes enunciados reflete corretamente um dos 12 princípios do Agile?",
    "opcoes": [
      "A) Priorizar contratos formais para garantir entrega",
      "B) Maximizar documentação para medir progresso",
      "C) Entregar frequentemente software funcional para satisfazer o cliente",
      "D) Manter o escopo fixo para evitar mudanças durante o projeto"
    ],
    "correta": "C",
    "explicacao": "Um dos princípios enfatiza entrega frequente de software funcional para satisfazer o cliente."
  },
  {
    "id": 4,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Ao transformar uma organização para Agile, qual ação do líder é mais coerente com cultivar uma cultura Ágil?",
    "opcoes": [
      "A) Impor regras rígidas de processo para padronizar o trabalho",
      "B) Exigir extensos relatórios semanais para a gestão",
      "C) Delegar todo o controlo das decisões ao departamento de qualidade",
      "D) Promover aprendizado contínuo e adaptabilidade entre as equipas"
    ],
    "correta": "D",
    "explicacao": "Líderes Ágeis fomentam aprendizado contínuo e adaptabilidade, elementos centrais da cultura Ágil."
  },
  {
    "id": 5,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Quando é mais apropriado escolher Kanban em vez de Scrum?",
    "opcoes": [
      "A) Quando se precisa de um fluxo de trabalho contínuo com limites de WIP",
      "B) Quando o projeto exige ciclos fixos e cerimônias formais",
      "C) Quando é necessário um único Product Owner para vários times",
      "D) Quando se quer estimar story points para cada tarefa"
    ],
    "correta": "A",
    "explicacao": "Kanban é indicado para gerenciar fluxo contínuo e usar limites de trabalho em progresso (WIP)."
  },
  {
    "id": 6,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual é um bom primeiro passo recomendado ao implementar Agile numa organização?",
    "opcoes": [
      "A) Converter todos os projetos ao mesmo tempo para agilizar resultados",
      "B) Começar pequeno com um projeto piloto para aprender e ajustar",
      "C) Substituir toda a liderança por Scrum Masters imediatamente",
      "D) Eliminar comunicação com stakeholders até a equipa estar pronta"
    ],
    "correta": "B",
    "explicacao": "Começar com um piloto permite aprender, ajustar processos e reduzir riscos na adoção do Agile."
  },
  {
    "id": 7,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual afirmação descreve corretamente o papel do Backlog de Produto?",
    "opcoes": [
      "A) É um conjunto fixo de tarefas que não pode ser reordenado durante o projeto",
      "B) Serve apenas como registro interno e não influencia as decisões do Product Owner",
      "C) É a fonte única de requisitos e pode ser priorizado e refinado conforme necessário",
      "D) Deve conter apenas tarefas técnicas sem relação com valor para o cliente"
    ],
    "correta": "C",
    "explicacao": "O Backlog de Produto é a fonte única de requisitos, sujeito a priorização e refinamento conforme necessidades mudam."
  },
  {
    "id": 8,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual prática é típica para estimativas colaborativas em Agile?",
    "opcoes": [
      "A) Planejamento unilateral pelo Product Owner sem consulta",
      "B) Delegar estimativas ao time de gestão de projetos externo",
      "C) Usar apenas horas absolutas determinadas por gestão",
      "D) Planning Poker entre os Desenvolvedores para estimar story points"
    ],
    "correta": "D",
    "explicacao": "Planning Poker é uma técnica colaborativa usada pelos Desenvolvedores para estimar em story points."
  },
  {
    "id": 9,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Ao escolher ferramentas para suportar Agile, qual critério é destacado no material?",
    "opcoes": [
      "A) Priorizar usabilidade, integração com o fluxo e suporte à colaboração",
      "B) Escolher ferramentas populares independentemente da usabilidade",
      "C) Preferir ferramentas que exijam configuração complexa e pouca integração",
      "D) Selecionar apenas ferramentas que automatizem relatórios para gestão"
    ],
    "correta": "A",
    "explicacao": "A seleção deve considerar usabilidade, integração com o fluxo e suporte à colaboração da equipa."
  },
  {
    "id": 10,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "De que modo o Agile ajuda uma empresa a recuperar clientes insatisfeitos, segundo o material?",
    "opcoes": [
      "A) Reduzindo custo de pessoal através de cortes imediatos",
      "B) Criando mais valor para o cliente ao cooperar estreitamente e entregar continuamente",
      "C) Aumentando a responsabilização do cliente para definir tudo antecipadamente",
      "D) Garantindo que o plano inicial seja seguido sem mudanças"
    ],
    "correta": "B",
    "explicacao": "Agile melhora colaboração com clientes e entrega contínua de valor, ajudando a atender melhor suas necessidades."
  },
  {
    "id": 11,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Durante uma Reunião Diária que está a durar 30 minutos com discussões detalhadas sobre dependências, o que o Scrum Master deve fazer para melhorar a eficácia?",
    "opcoes": [
      "A) Cancelar a Reunião Diária para evitar atrasos",
      "B) Aceitar 30 minutos por ser um time grande e com problemas complexos",
      "C) Limitar a discussão às três perguntas-chave para manter a reunião curta e focalizada",
      "D) Exigir que o Product Owner responda a todas as perguntas durante a reunião"
    ],
    "correta": "C",
    "explicacao": "O Scrum Master deve orientar a reunião para manter foco e brevidade, usando as três perguntas para reduzir discussões longas."
  },
  {
    "id": 12,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Uma Scrum Master remove regularmente bloqueios do time. Ela também quer fomentar melhoria contínua. Há sobreposição entre essas atividades; qual ação é mais adequada?",
    "opcoes": [
      "A) Registrar bloqueios mas nunca atuar para resolvê-los para manter independência",
      "B) Separar rigidamente remoção de bloqueios e melhoria contínua em processos distintos",
      "C) Deixar que apenas os Desenvolvedores cuidem da remoção de bloqueios",
      "D) Tratar cada bloqueio como parte da melhoria contínua necessária para estabelecer fluxo"
    ],
    "correta": "D",
    "explicacao": "Remover bloqueios contribui para melhoria contínua do fluxo; são atividades relacionadas e complementares."
  },
  {
    "id": 13,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Num Sprint, um Desenvolvedor relata falta de conhecimento do ambiente de testes que impede progresso. A Scrum Master tem experiência e sabe como resolver. Qual a melhor ação imediata?",
    "opcoes": [
      "A) Mostrar rapidamente aos Desenvolvedores como resolver e compartilhar conhecimento",
      "B) Organizar uma sessão de treinamento para o futuro, sem agir agora",
      "C) Usar sua experiência para resolver o problema pessoalmente após a Reunião Diária",
      "D) Pedir ao Desenvolvedor que coloque a tarefa de volta no Backlog de Produto"
    ],
    "correta": "A",
    "explicacao": "Compartilhar rapidamente conhecimento com o time resolve o impedimento e promove aprendizado coletivo."
  },
  {
    "id": 14,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Um time confuso entre várias opções propõe canal de chat, gestão pede gráfico de Gantt; o Scrum Master sugere quadro Kanban ou Scrum. Qual ferramenta é mais indicada para controlar trabalho caótico com limites de WIP?",
    "opcoes": [
      "A) Canal dedicado na plataforma de rede social",
      "B) Quadro Kanban com limites de WIP e tíquetes bloqueadores",
      "C) Gráfico de Gantt online",
      "D) Quadro Scrum sem limites de WIP"
    ],
    "correta": "B",
    "explicacao": "Um quadro Kanban com limites de WIP ajuda a controlar fluxo e tornar bloqueios visíveis, adequado para trabalho caótico."
  },
  {
    "id": 15,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Após migrar para Scrum, o antigo gerente agora Product Owner continua a dividir tarefas e os Desenvolvedores aceitam sem discutir. Qual é a ação correta para respeitar princípios Ágeis?",
    "opcoes": [
      "A) Permitir que o Product Owner continue a dividir tarefas porque funcionou antes",
      "B) Manter a prática pois a gestão exige controle",
      "C) Questionar e encorajar os Desenvolvedores a decidir como dividir o trabalho",
      "D) Solicitar ao Scrum Master que aloque tarefas diariamente"
    ],
    "correta": "C",
    "explicacao": "Desenvolvedores são autogerenciados; devem discutir e decidir a melhor forma de dividir o trabalho."
  },
  {
    "id": 16,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Durante Planejamento da Sprint, o time usa pela primeira vez a Definição de Pronto (DoD). Como a DoD influencia a seleção de itens para a Sprint?",
    "opcoes": [
      "A) Não influencia; a DoD é irrelevante para planejamento",
      "B) Impõe ao Product Owner a obrigação de escrever toda a documentação",
      "C) Substitui a necessidade de estimativas e refinamento",
      "D) Garante que apenas itens que atendam critérios de qualidade sejam considerados prontos"
    ],
    "correta": "D",
    "explicacao": "A DoD define critérios de qualidade que os itens devem atender para serem considerados prontos na Sprint."
  },
  {
    "id": 17,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K4",
    "pergunta": "Uma organização exige maior previsibilidade para compromissos contratuais, mas também precisa permanecer flexível às mudanças do mercado. Que combinação, segundo o material, oferece equilíbrio entre previsibilidade e flexibilidade?",
    "opcoes": [
      "A) Usar estimativa de velocidade para previsibilidade e reordenar o Backlog de Produto para flexibilidade",
      "B) Planejar todo o release detalhadamente inicialmente e proibir alterações durante a execução",
      "C) Eliminar cerimônias e confiar apenas em comunicação assíncrona",
      "D) Aumentar documentação e reduzir a frequência de entregas para controlar o escopo"
    ],
    "correta": "A",
    "explicacao": "Estimativas de velocidade ajudam a prever capacidade; reordenar o Backlog permite adaptar prioridades, conciliando previsibilidade e flexibilidade."
  },
  {
    "id": 18,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K4",
    "pergunta": "Vários times trabalham num único Backlog com um único Product Owner e precisam coordenar esforços sem duplicação. Considerando o material, quem está melhor posicionado para coordenar o alinhamento entre times?",
    "opcoes": [
      "A) Os Desenvolvedores, por serem autogerenciados e responsáveis pela execução",
      "B) O Product Owner, por gerir e priorizar o Backlog de Produto",
      "C) Os Scrum Masters, por terem tempo livre para coordenar tarefas",
      "D) A gestão de topo, sem envolver Product Owner nem Scrum Masters"
    ],
    "correta": "B",
    "explicacao": "Com um único Backlog, o Product Owner, que gerencia prioridade e visão, está melhor posicionado para coordenar esforços."
  },
  {
    "id": 19,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Uma equipa de marketing quer adotar Agile para campanhas. Qual abordagem do material é mais alinhada com essa adaptação setorial?",
    "opcoes": [
      "A) Aplicar sem alterações todos os rituais de desenvolvimento de software",
      "B) Manter processos tradicionais porque marketing não é tecnologia",
      "C) Adaptar práticas Ágeis às necessidades do setor mantendo valores e princípios",
      "D) Eliminar feedback do cliente para acelerar entregas"
    ],
    "correta": "C",
    "explicacao": "Setores fora de TI devem adaptar práticas, preservando valores e princípios centrais do Agile."
  },
  {
    "id": 20,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Como o Agile contribui para práticas sustentáveis nas organizações, segundo o material?",
    "opcoes": [
      "A) Aumentando desperdício para acelerar entregas",
      "B) Substituindo decisões éticas por decisões automatizadas",
      "C) Exigindo longas horas extras para cumprir Sprints",
      "D) Promovendo eficiência e reduzindo desperdícios operacionais"
    ],
    "correta": "D",
    "explicacao": "O Agile promove eficiência e redução de desperdício, alinhando-se a práticas de sustentabilidade."
  },
  {
    "id": 21,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K3",
    "pergunta": "Numa equipa em transformação Ágil, que atitude de um líder está mais alinhada com o papel descrito no material?",
    "opcoes": [
      "A) Servir como mentor, facilitar e inspirar a equipe a aprender e adaptar-se",
      "B) Controlar tarefas diariamente e atribuir atividades individualmente",
      "C) Manter decisões estratégicas isoladas da equipa para evitar ruído",
      "D) Reforçar hierarquia rígida para acelerar tomadas de decisão"
    ],
    "correta": "A",
    "explicacao": "Líderes Ágeis atuam como mentores e facilitadores, promovendo aprendizado e adaptabilidade na equipa."
  },
  {
    "id": 22,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K1",
    "pergunta": "Quem é responsável por definir a visão do produto e garantir que a equipe esteja alinhada com os objetivos de negócio?",
    "opcoes": [
      "A) Scrum Master",
      "B) Product Owner",
      "C) Gerente de Projetos",
      "D) Desenvolvedores"
    ],
    "correta": "B",
    "explicacao": "O Product Owner é responsável por definir a visão do produto e alinhar a equipe com os objetivos de negócio e do cliente."
  },
  {
    "id": 23,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Qual descrição corresponde melhor ao papel do Scrum Master conforme o capítulo?",
    "opcoes": [
      "A) Define prioridades do Backlog de Produto e decide o que será entregue.",
      "B) Gerencia os Desenvolvedores e aloca tarefas diárias.",
      "C) Facilita a equipe, ajuda a remover impedimentos e atua como coach Agile.",
      "D) Testa e valida a qualidade técnica do produto antes da entrega."
    ],
    "correta": "C",
    "explicacao": "O Scrum Master atua como facilitador, removendo obstáculos e orientando a equipe na melhoria contínua, conforme o conteúdo."
  },
  {
    "id": 24,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Qual das seguintes afirmações descreve corretamente as responsabilidades dos Desenvolvedores?",
    "opcoes": [
      "A) Gerenciam stakeholders e priorizam o Backlog de Produto.",
      "B) Organizam o trabalho do Scrum Master e definem cerimônias.",
      "C) Determinam a visão do produto e acompanham o roadmap estratégico.",
      "D) Implementam o produto, colaboram entre si e buscam melhoria contínua."
    ],
    "correta": "D",
    "explicacao": "Os Desenvolvedores são responsáveis pela implementação, colaboração interna e participação nas retrospectivas para melhorar processos e qualidade."
  },
  {
    "id": 25,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Segundo o capítulo, qual prática ajuda a manter a qualidade ao longo do ciclo de desenvolvimento?",
    "opcoes": [
      "A) Integração e testes contínuos durante o desenvolvimento.",
      "B) Evitar feedback dos stakeholders para acelerar entregas.",
      "C) Confiar apenas em revisões manuais extensas sem automação.",
      "D) Deixar os testes apenas para o final da Sprint."
    ],
    "correta": "A",
    "explicacao": "O texto destaca integração e testes contínuos como práticas fundamentais para garantir qualidade ao longo do ciclo."
  },
  {
    "id": 26,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Qual afirmação ilustra melhor o conceito de responsabilidades compartilhadas no time Agile?",
    "opcoes": [
      "A) Cada pessoa trabalha isoladamente para maximizar eficiência individual.",
      "B) Membros têm tarefas específicas, mas também ajudam uns aos outros quando necessário.",
      "C) A responsabilidade principal é do Product Owner, não da equipe.",
      "D) Transparência não é necessária se as entregas forem pontuais."
    ],
    "correta": "B",
    "explicacao": "O capítulo aponta que responsabilidades são frequentemente compartilhadas e que membros ajudam uns aos outros conforme necessário."
  },
  {
    "id": 27,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Sobre prazos em projetos Agile, qual opção está alinhada com o capítulo?",
    "opcoes": [
      "A) Prazos não importam; tudo pode ser adiado sem comunicação.",
      "B) Prazos fixos nunca devem ser alterados, mesmo que a qualidade sofra.",
      "C) Prazos são importantes, mas devem ser geridos com estimativas e flexibilidade quando necessário.",
      "D) Gerenciamento de tempo não é responsabilidade do time."
    ],
    "correta": "C",
    "explicacao": "O texto afirma que cumprir prazos é crucial, porém há flexibilidade para ajustá-los com base em feedback e mudanças."
  },
  {
    "id": 28,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Qual comportamento demonstra compromisso com o aprendizado contínuo na equipe, segundo o capítulo?",
    "opcoes": [
      "A) Guardar conhecimentos individuais para manter vantagem competitiva pessoal.",
      "B) Evitar novas tecnologias para não introduzir riscos.",
      "C) Focar apenas nas tarefas imediatas sem investir em desenvolvimento pessoal.",
      "D) Compartilhar conhecimento e adaptar-se a novas práticas e tecnologias."
    ],
    "correta": "D",
    "explicacao": "O capítulo enfatiza que compartilhar conhecimento e manter-se atualizado com novas práticas é parte do compromisso com o aprendizado."
  },
  {
    "id": 29,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "A Reunião Diária do time costuma durar 30 minutos com discussões detalhadas sobre dependências e itens do Product Owner. O que o Scrum Master deve fazer para melhorar a eficácia dessa reunião?",
    "opcoes": [
      "A) Parar a reunião e orientar o time sobre o objetivo e o formato da Reunião Diária.",
      "B) Aceitar 30 minutos como tempo necessário devido à complexidade do projeto.",
      "C) Dividir a reunião em duas sessões separadas por tópico e disciplina.",
      "D) Limitar rigidamente a reunião às três perguntas e proibir dúvidas sobre dependências."
    ],
    "correta": "A",
    "explicacao": "Orientar sobre o objetivo e formato ajuda a focar a Reunião Diária e evitar discussões longas que prejudicam a eficácia."
  },
  {
    "id": 30,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "Um time assume trabalho demais individualmente e esquece tarefas; foram propostas várias soluções. Qual ferramenta, segundo o capítulo, é mais provável de ajudar a controlar o trabalho em progresso e tornar impedimentos visíveis?",
    "opcoes": [
      "A) Canal dedicado em rede social para monitorar blocos.",
      "B) Quadro Kanban com limites de WIP e tíquetes bloqueadores.",
      "C) Gráfico de Gantt online voltado para gestão.",
      "D) Quadro Scrum simples sem limites de WIP."
    ],
    "correta": "B",
    "explicacao": "O capítulo indica que um quadro Kanban com limites de WIP e tíquetes bloqueadores ajuda a controlar fluxo e tornar impedimentos visíveis."
  },
  {
    "id": 31,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "Durante a Sprint, um Desenvolvedor não entende uma história de usuário. Qual é a ação mais apropriada do Scrum Master para permitir que ele trabalhe em plena capacidade?",
    "opcoes": [
      "A) Mandar o Desenvolvedor ignorar a história e colocá-la no Backlog de Produto.",
      "B) Pedir que o Desenvolvedor passe mais tempo sozinho pesquisando a história.",
      "C) Pedir ao Product Owner que explique a história e ajudar a encontrar um recurso para apoio.",
      "D) Exigir que a história seja reescrita imediatamente pelo Product Owner antes de seguir."
    ],
    "correta": "C",
    "explicacao": "O Scrum Master deve facilitar a comunicação com o Product Owner para esclarecer a história e obter suporte, permitindo ao Desenvolvedor seguir com confiança."
  },
  {
    "id": 32,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "Susan, ex-Desenvolvedora e atual Scrum Master, conhece uma solução rápida para um impedimento técnico que outro Desenvolvedor relata na Reunião Diária. Ninguém mais se oferece para ajudar. O que Susan deve fazer?",
    "opcoes": [
      "A) Agendar um treinamento longo para todo o time em data futura.",
      "B) Resolver o problema sozinha para acelerar a Sprint, sem envolver o time.",
      "C) Ignorar o impedimento e registrar como risco para a próxima Sprint.",
      "D) Mostrar rapidamente como resolver para orientar e compartilhar o conhecimento com o time."
    ],
    "correta": "D",
    "explicacao": "Demonstrar rapidamente a solução promove compartilhamento de conhecimento e capacita o time a resolver impedimentos semelhantes no futuro."
  },
  {
    "id": 33,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "Antes do Scrum, o gerente dividia tarefas entre os membros e isso continuou; os Desenvolvedores aceitam sem discutir. O Product Owner deve continuar a dividir as tarefas?",
    "opcoes": [
      "A) Não, pois os Desenvolvedores devem ser responsáveis por dividir o trabalho no Scrum.",
      "B) Sim, pois o método anterior trouxe bons resultados.",
      "C) Sim, porque o Product Owner conhece melhor as prioridades.",
      "D) Não, porque ninguém deve decidir quem faz o que no time."
    ],
    "correta": "A",
    "explicacao": "No Scrum, os Desenvolvedores são auto-organizáveis e responsáveis por decidir como dividir o trabalho entre si."
  },
  {
    "id": 34,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K3",
    "pergunta": "Uma empresa adotou um único Backlog de Produto com diversos times Scrum e um único Product Owner. Qual papel está na melhor posição para coordenar os esforços operacionais entre esses times?",
    "opcoes": [
      "A) Os Desenvolvedores, pois são autogerenciados e devem coordenar diretamente.",
      "B) Os Scrum Masters, pois podem sincronizar e coordenar entre os times.",
      "C) O Product Owner, pois cuida do Backlog de Produto.",
      "D) O gerente de projetos externo, pois mantém visão global."
    ],
    "correta": "B",
    "explicacao": "Os Scrum Masters estão em posição de coordenar esforços entre times, sincronizando dependências enquanto o Product Owner foca no backlog e priorização."
  },
  {
    "id": 35,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K4",
    "pergunta": "Há sobreposição entre remover impedimentos e implementar melhoria contínua? Analise a relação entre essas atividades.",
    "opcoes": [
      "A) Não; impedimentos nunca devem ser tratados como itens de melhoria contínua.",
      "B) Sim; melhoria contínua tem foco apenas no produto, então removê-los não se relaciona.",
      "C) Sim; remover um bloqueio muitas vezes é parte da melhoria contínua necessária para estabelecer fluxo.",
      "D) Não; remoção de impedimentos é exclusiva do Product Owner, não da melhoria contínua."
    ],
    "correta": "C",
    "explicacao": "O capítulo indica que a remoção de bloqueios pode ser uma forma de melhoria contínua que ajuda a estabelecer e manter o fluxo de trabalho."
  },
  {
    "id": 36,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K4",
    "pergunta": "A Sprint aproxima-se do prazo e a equipe corre risco de comprometer a qualidade para concluir funcionalidades. O Product Owner sugere cortar testes para cumprir o prazo. Considerando responsabilidades e compromisso, qual a melhor ação?",
    "opcoes": [
      "A) Aceitar cortar os testes para garantir entrega dentro do prazo.",
      "B) Transferir parte do trabalho para outro time sem ajustar o Backlog de Produto.",
      "C) Prolongar a Sprint sem consultar stakeholders para terminar tudo.",
      "D) Discutir com o Product Owner re-priorização do trabalho para preservar qualidade e valor entregue."
    ],
    "correta": "D",
    "explicacao": "Manter a qualidade é parte do compromisso; é apropriado re-priorizar com o Product Owner para preservar valor em vez de comprometer padrões."
  },
  {
    "id": 37,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K4",
    "pergunta": "Com vários times trabalhando num único Backlog de Produto e muitas dependências, o Product Owner está sobrecarregado e as entregas ficam desalinhadas. Qual abordagem analítica é mais coerente com o capítulo para melhorar coordenação e manter alinhamento da visão?",
    "opcoes": [
      "A) Manter o Product Owner focado na priorização do Backlog e usar Scrum Masters para coordenar sincronização entre times.",
      "B) Manter tudo como está e exigir que o Product Owner gerencie as dependências sozinho.",
      "C) Eliminar cerimônias e reuniões para acelerar entregas sem coordenação.",
      "D) Distribuir o Backlog de Produto entre vários Product Owners sem mudança de estrutura."
    ],
    "correta": "A",
    "explicacao": "O capítulo sugere preservar a visão e priorização do Product Owner enquanto Scrum Masters coordenam entre equipes, habilitando sincronização sem perder agilidade."
  },
  {
    "id": 38,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K1",
    "pergunta": "Qual é a principal função de um facilitador numa equipa ágil, conforme o capítulo?",
    "opcoes": [
      "A) Decidir as tarefas que cada membro deve executar para assegurar a entrega.",
      "B) Guiar a equipa através de processos e discussões para garantir que todas as vozes sejam ouvidas.",
      "C) Gerir o Backlog de Produto e priorizar os requisitos com os stakeholders.",
      "D) Avaliar o desempenho individual e aplicar medidas disciplinares quando necessário."
    ],
    "correta": "B",
    "explicacao": "O facilitador guia processos e discussões, promovendo a participação e decisões eficazes, conforme o texto."
  },
  {
    "id": 39,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Qual descrição distingue corretamente coaching para desempenho de facilitação?",
    "opcoes": [
      "A) Coaching organiza reuniões; facilitação dá feedback construtivo sobre desempenho.",
      "B) Coaching prioriza o Backlog; facilitação valida critérios de aceite.",
      "C) Coaching identifica lacunas de competências e apoia crescimento; facilitação orienta processos e discussões.",
      "D) Coaching monitora o progresso diário; facilitação gere ferramentas e dashboards."
    ],
    "correta": "C",
    "explicacao": "O coaching foca no desenvolvimento de competências e feedback; a facilitação foca em guiar processos e assegurar participação."
  },
  {
    "id": 40,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Qual ação é mais eficaz para construir confiança dentro da equipa, segundo o capítulo?",
    "opcoes": [
      "A) Exigir relatórios diários detalhados de cada membro para garantir transparência.",
      "B) Recompensar apenas os melhores desempenhos com reconhecimento público.",
      "C) Isolar membros com baixo rendimento até que melhorem.",
      "D) Reconhecer esforços individuais e respeitar as diferenças entre os membros."
    ],
    "correta": "D",
    "explicacao": "Reconhecer esforços e respeitar diferenças reforça confiança e respeito mútuo, elementos-chave do capítulo."
  },
  {
    "id": 41,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Qual elemento é apontado como fundamental para uma reunião produtiva?",
    "opcoes": [
      "A) Preparação cuidadosa e objetivos claros para que todos entendam o propósito.",
      "B) Começar sem preparação para estimular a criatividade espontânea.",
      "C) Permitir discussões longas para garantir que todos os detalhes sejam debatidos.",
      "D) Evitar a presença do facilitador para que a equipa seja totalmente autônoma."
    ],
    "correta": "A",
    "explicacao": "O capítulo destaca preparação e objetivos claros como base para reuniões produtivas."
  },
  {
    "id": 42,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Quais técnicas de comunicação facilitadores e coaches são recomendados a introduzir?",
    "opcoes": [
      "A) Comunicação ascendente apenas, relatórios mensais e instruções fechadas.",
      "B) Escuta ativa, perguntas abertas e feedback construtivo.",
      "C) Delegação estrita de tarefas, regras rígidas de comunicação e revisão anual.",
      "D) Priorizar canais assíncronos e evitar reuniões presenciais."
    ],
    "correta": "B",
    "explicacao": "O capítulo indica escuta ativa, perguntas abertas e feedback construtivo como técnicas-modelo."
  },
  {
    "id": 43,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Como coaches ajudam a fomentar autonomia na equipa?",
    "opcoes": [
      "A) Assumindo decisões importantes para acelerar o trabalho.",
      "B) Atribuindo tarefas individualmente conforme a hierarquia.",
      "C) Empoderando a equipa para tomar decisões coletivas e promovendo senso de propriedade.",
      "D) Substituindo a equipa quando surgem conflitos técnicos."
    ],
    "correta": "C",
    "explicacao": "O capítulo destaca o empoderamento e a tomada de decisão coletiva como meios de promover autonomia."
  },
  {
    "id": 44,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Qual é o objectivo do equilíbrio entre direção e suporte na facilitação e no coaching?",
    "opcoes": [
      "A) Garantir que o facilitador tome todas as decisões para manter ordem.",
      "B) Reduzir a responsabilização individual através de supervisão contínua.",
      "C) Manter a equipa dependente do coach para evitar riscos.",
      "D) Fornecer orientações quando necessário, enquanto se promove a autonomia da equipa."
    ],
    "correta": "D",
    "explicacao": "O capítulo explica que a arte reside em orientar sem minar a autonomia, equilibrando direcção e suporte."
  },
  {
    "id": 45,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Numa equipa onde a Reunião Diária tem regularmente 30 minutos devido a debates sobre dependências, qual a melhor ação do facilitador?",
    "opcoes": [
      "A) Agendar reuniões técnicas separadas para tratar dependências complexas e manter a diária focada.",
      "B) Aceitar a duração atual e aumentar o tempo da Reunião Diária para acomodar as discussões.",
      "C) Limitar a discussão apenas às três perguntas padronizadas e cortar intervenções.",
      "D) Cancelar a Reunião Diária até que todas as dependências sejam resolvidas externamente."
    ],
    "correta": "A",
    "explicacao": "Manter a diária focada e criar sessões específicas para dependências assegura gestão do tempo e inclusão sem alongar o encontro."
  },
  {
    "id": 46,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Durante uma Sprint, um Desenvolvedor não entende a história de usuário em que trabalha. Qual é a melhor ação do Scrum Master para permitir que o Desenvolvedor trabalhe em plena capacidade?",
    "opcoes": [
      "A) Pedir ao Desenvolvedor que abra um ticket e espere até a próxima reunião de refinamento.",
      "B) Solicitar ao Product Owner que explique a história e facilitar acesso a um recurso que ajude o Desenvolvedor.",
      "C) Pedir ao Desenvolvedor para pesquisar sozinho até entender a história.",
      "D) Retirar a história do trabalho e devolvê-la ao Backlog de Produto sem discussão."
    ],
    "correta": "B",
    "explicacao": "O Product Owner esclarece requisitos; o Scrum Master facilita a comunicação e acesso a recursos para resolver o impedimento."
  },
  {
    "id": 47,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Se a equipa não revisa código e a Scrum Master prevê que a Sprint pode não entregar um produto potencialmente lançável, qual a intervenção mais alinhada com o capítulo?",
    "opcoes": [
      "A) Cancelar a Sprint imediatamente por não entregar valor.",
      "B) Exigir revisão de código obrigatória sem discutir com o time.",
      "C) Levar o time a analisar o que pode ser melhorado na próxima Sprint e fomentar ações de melhoria contínua.",
      "D) Prolongar a Sprint para assegurar que tudo seja entregue."
    ],
    "correta": "C",
    "explicacao": "Promover reflexão e melhoria contínua ajuda a equipa a ajustar práticas em vez de decisões punitivas ou alterações de prazo."
  },
  {
    "id": 48,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Num time recém-adotando Scrum, o antigo gerente agora Product Owner continua a dividir tarefas entre os membros e os Desenvolvedores aceitam sem discutir. O que deve acontecer?",
    "opcoes": [
      "A) O Product Owner deve continuar dividindo tarefas porque conhece melhor o trabalho.",
      "B) Manter o arranjo se os resultados anteriores foram bons, sem mudança.",
      "C) Substituir o Product Owner por alguém com menos influência para evitar conflitos.",
      "D) Encorajar os Desenvolvedores a discutir e assumir a responsabilidade pela divisão de tarefas, promovendo autogestão."
    ],
    "correta": "D",
    "explicacao": "O capítulo defende autogestão: os Desenvolvedores devem discutir e decidir a divisão de tarefas, com facilitação quando necessário."
  },
  {
    "id": 49,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Uma equipa tem excesso de trabalho em progresso e demora a pedir ajuda. Entre as opções sugeridas, qual é a ferramenta mais provável de ajudar segundo o capítulo?",
    "opcoes": [
      "A) Implementar um quadro Kanban com limites de WIP e tíquetes bloqueadores.",
      "B) Usar um gráfico de Gantt para comunicar ao management o estado das tarefas.",
      "C) Criar um canal dedicado na rede social para monitorizar blocos e dividir tarefas.",
      "D) Adotar um quadro Scrum tradicional sem limites de WIP."
    ],
    "correta": "A",
    "explicacao": "Um quadro Kanban com limites de WIP e tickets bloqueadores torna visíveis os bloqueios e incentiva pedir ajuda, conforme o texto."
  },
  {
    "id": 50,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Por que um Scrum Master deve identificar se a resistência do time é passiva ou ativa?",
    "opcoes": [
      "A) Para comparar com experiências de outras equipas e replicá-las.",
      "B) Porque isso o ajudará a escolher a abordagem de orientação e intervenção mais adequada.",
      "C) Para planear uma sessão de treinamento padrão sobre eventos Scrum.",
      "D) Para avaliar se a Meta da Sprint foi esquecida e aplicar penalizações."
    ],
    "correta": "B",
    "explicacao": "Identificar o tipo de resistência permite ao Scrum Master ajustar a orientação e as ações de coaching à situação da equipa."
  },
  {
    "id": 51,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Susan, ex-Desenvolvedora e Scrum Master, sabe resolver um impedimento técnico que bloqueia um membro da equipa. Qual é a melhor ação para apoiar a equipa a longo prazo?",
    "opcoes": [
      "A) Organizar um extenso curso formal para ensinar tudo sobre o ambiente de testes.",
      "B) Resolver o problema sozinha para remover imediatamente o impedimento.",
      "C) Mostrar rapidamente como resolver o problema e partilhar o conhecimento com os colegas.",
      "D) Ignorar o impedimento porque é raro e focar nas tarefas planeadas."
    ],
    "correta": "C",
    "explicacao": "Partilhar conhecimento rapidamente resolve o impedimento e capacita a equipa a ser mais autônoma no futuro, alinhado ao capítulo."
  },
  {
    "id": 52,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Há sobreposição entre remover bloqueios e implementar melhoria contínua? Escolha a melhor interpretação.",
    "opcoes": [
      "A) Não; remover bloqueios é responsabilidade exclusiva do Product Owner.",
      "B) Sim; melhoria contínua foca apenas o produto e não o fluxo do trabalho.",
      "C) Não; bloqueios são operacionais e não fazem parte da melhoria contínua.",
      "D) Sim; remover um bloqueio também é uma forma de melhoria contínua que ajuda a estabelecer fluxo."
    ],
    "correta": "D",
    "explicacao": "O capítulo indica que eliminar impedimentos contribui para melhoria do fluxo e, portanto, integra a melhoria contínua."
  },
  {
    "id": 53,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K2",
    "pergunta": "Uma equipa evita experimentar por medo de falhar. Analisando a situação, qual abordagem do coach melhor equaciona os fatores de aprendizagem, apoio emocional e segurança psicológica?",
    "opcoes": [
      "A) Criar espaço seguro para experimentação, promover aprendizagem com fracassos e oferecer apoio emocional quando necessário.",
      "B) Proibir experimentos até que processos detalhados garantam sucesso.",
      "C) Incentivar experimentos anônimos sem revisão, para esconder falhas.",
      "D) Dar total autonomia sem orientação, para forçar a equipa a aprender sozinha."
    ],
    "correta": "A",
    "explicacao": "Combinar espaço seguro, encorajamento ao aprendizado com falhas e apoio emocional aborda os múltiplos fatores que inibem a experimentação."
  },
  {
    "id": 54,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K4",
    "pergunta": "Várias equipas têm dependências cruzadas e metas desalinhadas. Segundo os princípios de facilitação e coaching, qual é a ação mais apropriada do Scrum Master para resolver isso?",
    "opcoes": [
      "A) Impor um plano centralizado sem envolver as equipas para acelerar decisões.",
      "B) Facilitar sessões para criar visão partilhada, tornar dependências visíveis e acordar processos de coordenação entre as equipas.",
      "C) Delegar a coordenação exclusivamente ao Product Owner e afastar-se das reuniões de alinhamento.",
      "D) Aumentar relatórios formais de gestão para controlar progresso e dependências."
    ],
    "correta": "B",
    "explicacao": "O capítulo enfatiza que facilitadores ajudam a criar visão partilhada e a tornar dependências visíveis, promovendo coordenação colaborativa."
  },
  {
    "id": 55,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K4",
    "pergunta": "Uma equipa mostra baixa motivação, excesso de retrabalho e sinais de burnout. Analisando causas e efeitos, qual intervenção do coach melhor integra reconhecimento, bem‑estar e melhoria de processos?",
    "opcoes": [
      "A) Aplicar metas mais agressivas para acelerar entregas e provar capacidade.",
      "B) Focar apenas na redução de horas de trabalho sem abordar processos nem reconhecimento.",
      "C) Promover reconhecimento das conquistas, investigar causas do retrabalho, ajustar processos e apoiar o bem‑estar da equipa.",
      "D) Transferir membros problemáticos para outras equipas e manter o restante sem mudanças."
    ],
    "correta": "C",
    "explicacao": "Combinar reconhecimento, análise de processos e cuidados com bem‑estar trata as múltiplas causas do desânimo e melhora a sustentabilidade."
  },
  {
    "id": 56,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K4",
    "pergunta": "Numa decisão importante, algumas vozes são repetidamente excluídas. Ao analisar a situação, qual a melhor ação do facilitador para garantir decisões justas e aprendizado posterior?",
    "opcoes": [
      "A) Continuar com o grupo dominante para não atrasar decisões.",
      "B) Adiar todas as decisões até que haja consenso completo entre todos os membros.",
      "C) Delegar a decisão a um especialista externo para evitar conflitos internos.",
      "D) Estabelecer um processo decisório claro, facilitar inclusão ativa de todas as vozes e promover reflexão sobre o resultado."
    ],
    "correta": "D",
    "explicacao": "Criar processos claros, assegurar inclusão e refletir após decisões alinha-se ao papel do facilitador em promover justiça e aprendizagem."
  },
  {
    "id": 57,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K4",
    "pergunta": "O Product Owner pressiona por funcionalidades que parecem desalinhadas com o feedback do cliente; a equipa perde foco no valor. Após análise, qual é a melhor ação do Scrum Master para realinhar a equipa?",
    "opcoes": [
      "A) Facilitar a incorporação de feedback do cliente nas discussões, ajudar a clarificar objetivos e promover alinhamento entre equipa e Product Owner.",
      "B) Interromper as entregas até que a direção da empresa decida prioridades.",
      "C) Reforçar que a equipa siga cegamente as ordens do Product Owner para cumprir prazos.",
      "D) Substituir o Product Owner por alguém mais alinhado com a equipa."
    ],
    "correta": "A",
    "explicacao": "Facilitar a incorporação de feedback e clarificar objetivos realinha prioridades sem conflitos desnecessários, conforme o capítulo."
  },
  {
    "id": 58,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K1",
    "pergunta": "Qual é a principal função do Product Owner?",
    "opcoes": [
      "A) Definir a arquitetura técnica e as ferramentas que os desenvolvedores devem usar.",
      "B) Ser a voz do cliente dentro da equipe, garantindo que o produto atenda às necessidades e objetivos de negócio.",
      "C) Organizar e alocar tarefas diárias entre os desenvolvedores.",
      "D) Executar revisões de código e testes automatizados."
    ],
    "correta": "B",
    "explicacao": "O Product Owner representa o cliente e assegura que o produto gere valor alinhado aos objetivos do negócio."
  },
  {
    "id": 59,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Ao gerir o Backlog de Produto, em que o Product Owner deve basear a priorização dos itens?",
    "opcoes": [
      "A) Na ordem cronológica de chegada das solicitações.",
      "B) Nas preferências técnicas dos desenvolvedores.",
      "C) No valor para o cliente, no esforço necessário e nos impactos estratégicos.",
      "D) No nível hierárquico do stakeholder que solicitou cada item."
    ],
    "correta": "C",
    "explicacao": "A priorização deve considerar o valor entregue, o esforço envolvido e os impactos estratégicos, segundo o material."
  },
  {
    "id": 60,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Qual das descrições melhor representa as responsabilidades dos Desenvolvedores?",
    "opcoes": [
      "A) Gerir o relacionamento com stakeholders e priorizar o Backlog de Produto.",
      "B) Facilitar as cerimônias Scrum e remover impedimentos do time.",
      "C) Medir o valor de negócio e tomar decisões estratégicas sobre o roadmap.",
      "D) Transformar requisitos em soluções funcionais, garantindo qualidade por meio de revisão de código e testes."
    ],
    "correta": "D",
    "explicacao": "Os desenvolvedores são responsáveis por implementar o produto e zelar pela qualidade com práticas técnicas como revisões e testes."
  },
  {
    "id": 61,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Durante o refinamento do Backlog de Produto, qual é a melhor prática descrita no material?",
    "opcoes": [
      "A) O Product Owner colabora com a equipe para garantir que os requisitos sejam compreendidos e realistas.",
      "B) O Product Owner prepara e decide sozinho os detalhes de cada item sem consultar a equipe.",
      "C) Os desenvolvedores refinam o Backlog sem o Product Owner, que só aprova as decisões prontas.",
      "D) O Scrum Master substitui o Product Owner na explicação dos requisitos para os desenvolvedores."
    ],
    "correta": "A",
    "explicacao": "O material enfatiza que o PO colabora com a equipe no refinamento para assegurar entendimento e realismo."
  },
  {
    "id": 62,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Por que é importante que o Product Owner atue como ponte entre stakeholders e a equipe?",
    "opcoes": [
      "A) Para traduzir requisitos de negócios em tarefas técnicas detalhadas que a equipe deve executar sem discussão.",
      "B) Para garantir que as expectativas dos stakeholders sejam bem geridas e que o feedback seja incorporado eficazmente.",
      "C) Para controlar o ritmo de trabalho dos desenvolvedores e escalonar tarefas conforme prioridade externa.",
      "D) Para realizar todos os testes aceitação e assinar entregas finais."
    ],
    "correta": "B",
    "explicacao": "O papel de ponte serve a gerir expectativas e assegurar que o feedback dos stakeholders alimente o desenvolvimento."
  },
  {
    "id": 63,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Qual é um benefício das práticas como programação em par e revisões de código, segundo o capítulo?",
    "opcoes": [
      "A) Elas permitem que apenas um desenvolvedor seja responsável por toda a base de código.",
      "B) Reduzem a necessidade de comunicação com o Product Owner.",
      "C) Fomentam a aprendizagem mútua e melhoram a qualidade do código.",
      "D) Aumentam o tempo de entrega tornando o processo mais formal."
    ],
    "correta": "C",
    "explicacao": "O texto menciona que tais práticas promovem aprendizagem entre colegas e elevam a qualidade do produto."
  },
  {
    "id": 64,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Quem compartilha a responsabilidade pelo sucesso do produto conforme o material?",
    "opcoes": [
      "A) A direção da empresa exclusivamente.",
      "B) O Product Owner sozinho.",
      "C) Os Desenvolvedores sozinhos.",
      "D) Product Owner e Desenvolvedores, criando um senso de propriedade coletiva."
    ],
    "correta": "D",
    "explicacao": "O capítulo destaca responsabilidade compartilhada entre PO e desenvolvedores, promovendo comprometimento coletivo."
  },
  {
    "id": 65,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "O Product Owner está reordenando o Backlog somente com base em pedidos de stakeholders influentes, sem discutir esforço ou impacto estratégico. Qual é a melhor ação da equipe?",
    "opcoes": [
      "A) Colaborar com o Product Owner para avaliar valor, esforço e impacto estratégico antes de confirmar a priorização.",
      "B) Os desenvolvedores devem reorganizar o Backlog por conta própria com base em capacidade técnica.",
      "C) Aceitar a ordem definida pelo Product Owner, já que ele representa os stakeholders.",
      "D) Encaminhar a decisão ao departamento executivo para desempate."
    ],
    "correta": "A",
    "explicacao": "O material recomenda que o PO priorize considerando valor, esforço e impactos estratégicos, em colaboração com a equipe."
  },
  {
    "id": 66,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "Durante a Sprint, um desenvolvedor encontra uma história pouco clara que bloqueia seu trabalho. O que deve fazer como primeira ação efetiva?",
    "opcoes": [
      "A) Ignorar a história e seguir para outra tarefa do Backlog.",
      "B) Procurar o Product Owner para esclarecer a história e colaborar na solução.",
      "C) Reescrever a história sozinho sem consultar o Product Owner.",
      "D) Cancelar a Sprint até a história ficar clara."
    ],
    "correta": "B",
    "explicacao": "O capítulo enfatiza comunicação e feedback contínuo entre desenvolvedores e Product Owner para esclarecer requisitos."
  },
  {
    "id": 67,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "O Product Owner sugere cortar testes para cumprir um prazo apertado. Qual resposta alinha-se ao conteúdo do capítulo?",
    "opcoes": [
      "A) Aceitar cortar testes para entregar mais cedo e corrigir problemas depois.",
      "B) Os desenvolvedores realizarem testes apenas se tiverem tempo sobrando.",
      "C) Discutir com o Product Owner a necessidade de manter a qualidade e ajustar priorização para incluir os testes necessários.",
      "D) Incluir testes como tarefas opcionais no Backlog de Produto sem urgência."
    ],
    "correta": "C",
    "explicacao": "O capítulo afirma que a qualidade não deve ser comprometida e que o PO deve priorizar o trabalho necessário para mantê‑la."
  },
  {
    "id": 68,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "A equipe não tem uma visão clara do produto e começa a tirar conclusões divergentes. Qual é a melhor ação do Product Owner?",
    "opcoes": [
      "A) Delegar a definição da visão aos desenvolvedores para acelerar o trabalho.",
      "B) Deixar que cada desenvolvedor trabalhe conforme sua própria interpretação da visão.",
      "C) Parar todas as Sprints até a visão ser validada pela diretoria.",
      "D) Comunicar e reforçar a visão do produto para alinhar decisões e priorizações da equipe."
    ],
    "correta": "D",
    "explicacao": "O material indica que o PO deve definir e comunicar a visão para assegurar alinhamento e propósito para a equipe."
  },
  {
    "id": 69,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "Sinais de burnout aparecem na equipa. Segundo o capítulo, qual abordagem é a mais apropriada?",
    "opcoes": [
      "A) Ajustar escopo e priorização para preservar um ritmo sustentável e prevenir exaustão.",
      "B) Manter o ritmo atual até a entrega e reconhecer o esforço após o release.",
      "C) Aumentar a equipe e contratar temporários sem mexer nas prioridades atuais.",
      "D) Deixar que os desenvolvedores gerenciem sozinhos os sinais de cansaço, pois autonomia resolve tudo."
    ],
    "correta": "A",
    "explicacao": "O capítulo destaca a importância de um ritmo sustentável, atenção ao burnout e ajuste de trabalho para preservar bem‑estar."
  },
  {
    "id": 70,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "A equipe quer experimentar uma nova abordagem técnica. Qual prática condiz com o incentivo à experimentação descrito no capítulo?",
    "opcoes": [
      "A) Substituir totalmente a base tecnológica atual sem validação para acelerar a inovação.",
      "B) Realizar pequenas experiências controladas e avaliar os aprendizados para decidir avanços.",
      "C) Bloquear experimentos até que todas as funcionalidades planejadas estejam entregues.",
      "D) Permitir experimentos apenas fora do horário de trabalho oficial."
    ],
    "correta": "B",
    "explicacao": "O texto incentiva experimentação em ambiente seguro e a aprender com os resultados em pequena escala."
  },
  {
    "id": 71,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "Um stakeholder fornece feedback contínuo que exige mudanças frequentes. Quem tem o papel principal de garantir que esse feedback seja incorporado ao trabalho?",
    "opcoes": [
      "A) Os desenvolvedores, porque implementam as mudanças técnicas.",
      "B) O gerente de projetos externo, responsável por mudanças de escopo.",
      "C) O Product Owner, que gere o Backlog e incorpora o feedback alinhado ao valor do produto.",
      "D) O departamento de qualidade, que decide o que deve mudar."
    ],
    "correta": "C",
    "explicacao": "O capítulo descreve o PO como responsável por gerir o Backlog e incorporar feedback dos stakeholders de forma eficaz."
  },
  {
    "id": 72,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "O Product Owner delega decisões técnicas aos desenvolvedores. O que se espera desses desenvolvedores quando recebem essa autonomia?",
    "opcoes": [
      "A) Que deixem de aplicar práticas de qualidade para ganhar velocidade.",
      "B) Que peçam aprovação do Product Owner para toda decisão técnica menor.",
      "C) Que parem de comunicar com o Product Owner, já que têm autoridade técnica.",
      "D) Que assumam a responsabilidade técnica e tomem decisões alinhadas à visão do produto."
    ],
    "correta": "D",
    "explicacao": "O capítulo indica que delegar autoridade técnica aumenta eficiência e exige que desenvolvedores assumam propriedade técnica alinhada à visão."
  },
  {
    "id": 73,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K4",
    "pergunta": "O antigo gerente continua a dividir tarefas entre os membros do time depois da adoção do Agile. Analisando os fatores de autonomia e responsabilidade compartilhada, qual é a melhor abordagem?",
    "opcoes": [
      "A) Incentivar que os desenvolvedores se autoorganizem e discutam a melhor forma de dividir o trabalho no time.",
      "B) Permitir que o gerente continue dividindo tarefas porque isso funcionou antes.",
      "C) Proibir qualquer discussão sobre divisão de tarefas e impor uma regra fixa de alocação.",
      "D) Transferir a responsabilidade de divisão de tarefas para o Product Owner."
    ],
    "correta": "A",
    "explicacao": "O capítulo valoriza autonomia e propriedade do trabalho pelos desenvolvedores, que devem se autoorganizar para dividir tarefas."
  },
  {
    "id": 74,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K4",
    "pergunta": "O Product Owner pressiona por mais funcionalidades, enquanto os desenvolvedores pedem tempo para refatoração e testes. Considerando qualidade, valor e sustentabilidade, qual é a decisão mais adequada?",
    "opcoes": [
      "A) Atender somente à pressão por funcionalidades para não perder clientes, deixando qualidade para depois.",
      "B) Priorizar no Backlog itens de refatoração e testes necessários, equilibrando entrega de valor e manutenção da qualidade.",
      "C) Os desenvolvedores realizarem refatoração não priorizada fora das Sprints, sem registro no Backlog.",
      "D) Cancelar Sprints até que todo o código esteja refatorado."
    ],
    "correta": "B",
    "explicacao": "O material enfatiza que a qualidade não deve ser comprometida e que o PO deve priorizar trabalho que mantenha a integridade do produto."
  },
  {
    "id": 75,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K4",
    "pergunta": "Há falta de alinhamento porque o novo Product Owner não comunica claramente a visão, embora os desenvolvedores sejam muito autônomos. Qual é a ação analítica mais apropriada para resolver os dois problemas?",
    "opcoes": [
      "A) Retirar a autonomia dos desenvolvedores até que a visão esteja estabelecida rigidamente.",
      "B) Permitir que cada desenvolvedor trabalhe conforme sua própria interpretação da visão para acelerar entregas.",
      "C) O Product Owner clarificar e comunicar a visão, envolvendo a equipe no refinamento do Backlog para alinhar autonomia com objetivos.",
      "D) Substituir o Product Owner imediatamente por um executivo."
    ],
    "correta": "C",
    "explicacao": "Combinar comunicação clara da visão pelo PO com refinamento colaborativo do Backlog alinha autonomia e objetivos conforme o capítulo."
  },
  {
    "id": 76,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K4",
    "pergunta": "A equipe valoriza inovação, mas a pressão por entregas faz com que experimentos comprometam o progresso. Qual solução, analisando valor e aprendizado, equilibra inovação e previsibilidade?",
    "opcoes": [
      "A) Proibir experimentos para focar exclusivamente nas demandas do Backlog.",
      "B) Transferir todas as decisões de experimentação para stakeholders externos.",
      "C) Permitir experimentos contínuos sem priorização, mesmo que atrasem entregas.",
      "D) Inserir experimentos como itens priorizados e time‑boxed no Backlog, avaliando seu valor e aprendizados."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda experimentação encorajada, feita de forma controlada e priorizada para equilibrar aprendizado e entrega de valor."
  },
  {
    "id": 77,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K3",
    "pergunta": "Durante uma Sprint, um desenvolvedor recebeu autonomia para tomar decisões técnicas. Qual comportamento está mais alinhado com a ideia de propriedade do trabalho descrita no capítulo?",
    "opcoes": [
      "A) Assumir responsabilidade pelas decisões técnicas e comunicar as implicações à equipe e ao Product Owner.",
      "B) Tomar decisões técnicas sem comunicar a equipe ou o Product Owner.",
      "C) Evitar tomar qualquer decisão técnica para não assumir responsabilidade.",
      "D) Solicitar ao Product Owner que aprove cada pequeno detalhe técnico."
    ],
    "correta": "A",
    "explicacao": "O capítulo descreve que autonomia técnica deve vir acompanhada de propriedade e de comunicação com a equipe e o PO."
  },
  {
    "id": 78,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K1",
    "pergunta": "O que é o Backlog de Produto segundo o material apresentado?",
    "opcoes": [
      "A) Um documento fixo que descreve o plano detalhado de todas as sprints futuras.",
      "B) Uma lista ordenada de tudo que é necessário no produto, única fonte de requisitos para mudanças.",
      "C) Um conjunto de tarefas técnicas que os Desenvolvedores devem executar em ordem cronológica.",
      "D) Um contrato com stakeholders que define funcionalidades imutáveis até o fim do projeto."
    ],
    "correta": "B",
    "explicacao": "O Backlog de Produto é descrito como a lista ordenada de tudo necessário no produto e a única fonte de requisitos para mudanças."
  },
  {
    "id": 79,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K1",
    "pergunta": "Qual é a principal responsabilidade do Product Owner em relação ao Backlog de Produto?",
    "opcoes": [
      "A) Dividir tarefas diariamente entre os Desenvolvedores.",
      "B) Estimular a equipe a aceitar mais itens por sprint para aumentar a entrega.",
      "C) Elaborar, priorizar e atualizar o Backlog de Produto refletindo visão e necessidades do cliente.",
      "D) Garantir que todas as decisões técnicas sejam tomadas fora do Backlog."
    ],
    "correta": "C",
    "explicacao": "O material aponta que o Product Owner é responsável por elaborar, priorizar e atualizar o Backlog conforme a visão e necessidades dos clientes."
  },
  {
    "id": 80,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K4",
    "pergunta": "Por que o Backlog de Produto é considerado um documento vivo?",
    "opcoes": [
      "A) Porque deve ser reescrito por completo sempre que a equipe mudar sua composição.",
      "B) Porque precisa ser congelado durante as sprints para manter previsibilidade.",
      "C) Porque contém apenas itens técnicos que evoluem com a arquitetura do produto.",
      "D) Porque é constantemente refinado e atualizado conforme mudam necessidades do negócio, mercado e feedback."
    ],
    "correta": "D",
    "explicacao": "O texto afirma que o backlog é constantemente refinado para refletir mudanças no negócio, mercado e feedback dos clientes."
  },
  {
    "id": 81,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Ao identificar itens para o Backlog de Produto, quais tipos de itens devem ser considerados conforme o capítulo?",
    "opcoes": [
      "A) Funcionalidades, requisitos técnicos, melhorias e correções.",
      "B) Apenas funcionalidades visíveis ao usuário final.",
      "C) Somente requisitos que podem ser entregues na próxima sprint.",
      "D) Exclusivamente histórias de usuário com estimativa em horas."
    ],
    "correta": "A",
    "explicacao": "O capítulo indica que a criação do backlog começa com identificação de funcionalidades, requisitos técnicos, melhorias e correções."
  },
  {
    "id": 82,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Qual é o papel da equipe de desenvolvimento durante a definição dos itens do Backlog de Produto?",
    "opcoes": [
      "A) Aprovar o backlog final sem participar da criação.",
      "B) Fornecer perspectivas técnicas, colaborar com o Product Owner e stakeholders na definição.",
      "C) Substituir o Product Owner na priorização dos itens.",
      "D) Escrever contratos formais para cada item do backlog."
    ],
    "correta": "B",
    "explicacao": "O material diz que a definição dos itens é colaborativa, envolvendo a equipe de desenvolvimento para trazer perspectivas técnicas e melhorar a relevância."
  },
  {
    "id": 83,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Por que cada item do Backlog de Produto deve ser claramente especificado?",
    "opcoes": [
      "A) Para permitir que o Product Owner estime o esforço sozinho.",
      "B) Para que os stakeholders possam alterar os itens sem consultar a equipe.",
      "C) Para evitar ambiguidade e alinhar expectativas entre todos na equipe.",
      "D) Para que os Desenvolvedores possam automatizar tarefas sem validação."
    ],
    "correta": "C",
    "explicacao": "O capítulo ressalta que clareza evita ambiguidades e garante alinhamento das expectativas da equipe."
  },
  {
    "id": 84,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Quais critérios são mencionados para priorizar itens no Backlog de Produto?",
    "opcoes": [
      "A) Somente urgência e ordem de chegada das solicitações.",
      "B) Ordem alfabética dos nomes das funcionalidades.",
      "C) Complexidade técnica exclusivamente, sem considerar valor de negócio.",
      "D) Valor para o cliente, impacto no negócio, urgência e complexidade de implementação."
    ],
    "correta": "D",
    "explicacao": "O capítulo indica que priorização considera valor ao cliente, impacto no negócio, urgência e complexidade."
  },
  {
    "id": 85,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Quais técnicas de priorização o material cita como exemplos úteis para o Product Owner?",
    "opcoes": [
      "A) MoSCoW e matriz de Eisenhower (Urgente/Importante).",
      "B) Diagrama de Gantt e PERT.",
      "C) Árvore de decisão binária e diagrama de fluxo de caixa.",
      "D) Benchmarking de mercado semanal."
    ],
    "correta": "A",
    "explicacao": "O texto menciona especificamente MoSCoW e a matriz de Eisenhower como técnicas aplicáveis."
  },
  {
    "id": 86,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Com que frequência a priorização do Backlog de Produto deve ser revisada segundo o capítulo?",
    "opcoes": [
      "A) Apenas no início do projeto e nunca mais.",
      "B) Continuamente, conforme novas informações e mudanças no ambiente de negócios.",
      "C) Somente quando um stakeholder reclama formalmente.",
      "D) Anualmente, em alinhamento com o planejamento estratégico."
    ],
    "correta": "B",
    "explicacao": "O capítulo afirma que a priorização é um processo contínuo que deve ser reavaliado com novas informações."
  },
  {
    "id": 87,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Qual é o objetivo principal do refinamento do Backlog de Produto?",
    "opcoes": [
      "A) Transformar o Backlog em um cronograma fixo de sprints.",
      "B) Eliminar itens não técnicos do Backlog de Produto.",
      "C) Garantir que os itens estejam prontos para desenvolvimento: claros, concisos e estimados.",
      "D) Substituir o Product Owner em decisões de prioridade."
    ],
    "correta": "C",
    "explicacao": "O capítulo define que o objetivo do refinamento é deixar os itens prontos para desenvolvimento, com clareza e estimativas."
  },
  {
    "id": 88,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Quais métodos de estimativa são citados no material como comuns em Agile?",
    "opcoes": [
      "A) Estimativa por custo direto e retorno sobre investimento (ROI).",
      "B) Estimativa por hora fixa, análise de valor presente e curva S.",
      "C) Análise por pontos de função e COCOMO apenas.",
      "D) Planning Poker, T-shirt sizing e story points."
    ],
    "correta": "D",
    "explicacao": "O texto lista Planning Poker, T-shirt sizing e story points como exemplos de métodos de estimativa."
  },
  {
    "id": 89,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Como o material recomenda encarar estimativas no Backlog de Produto?",
    "opcoes": [
      "A) Como aproximações que devem ser ajustadas conforme novas informações surgem.",
      "B) Como compromissos rígidos que não podem ser alterados.",
      "C) Como métricas de desempenho individuais para os Desenvolvedores.",
      "D) Como indicadores para penalizar desvios de prazo."
    ],
    "correta": "A",
    "explicacao": "O capítulo afirma que estimativas são aproximações, não compromissos fixos, e devem ser ajustadas conforme necessário."
  },
  {
    "id": 90,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "O que define o Backlog da Sprint segundo o material?",
    "opcoes": [
      "A) Todo o Backlog de Produto reorganizado para a sprint atual.",
      "B) Um subconjunto do Backlog de Produto selecionado para ser desenvolvido na próxima sprint.",
      "C) Uma lista de bugs que serão corrigidos sem prioridade definida.",
      "D) Um plano de recursos humanos para a sprint."
    ],
    "correta": "B",
    "explicacao": "O capítulo define o Backlog da Sprint como o subconjunto do Backlog de Produto escolhido para a próxima sprint."
  },
  {
    "id": 91,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Durante uma reunião de planejamento, o Product Owner propõe itens que excedem a capacidade estimada da equipe. Qual é a melhor ação segundo o capítulo?",
    "opcoes": [
      "A) Aceitar todos os itens e pedir que a equipe trabalhe horas extras para cumprir.",
      "B) O Product Owner remover automaticamente itens até que caibam na sprint.",
      "C) Discutir prioridades e capacidade com a equipe para selecionar um subconjunto viável.",
      "D) Adiar a sprint até que o backlog esteja menor."
    ],
    "correta": "C",
    "explicacao": "O capítulo indica que a seleção é colaborativa, baseada em prioridade e capacidade da equipe para chegar a um conjunto viável."
  },
  {
    "id": 92,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Após selecionar itens para a Sprint, qual prática é recomendada para garantir compreensão do trabalho?",
    "opcoes": [
      "A) Deixar os itens vagos para que cada um interprete como achar melhor.",
      "B) Transferir o detalhamento para os stakeholders após o início da sprint.",
      "C) Atribuir imediatamente todas as tarefas a um único Desenvolvedor.",
      "D) Detalhar cada item em tarefas específicas e estimar esforço necessário."
    ],
    "correta": "D",
    "explicacao": "O texto recomenda detalhar itens em tarefas específicas e estimar esforço para garantir entendimento claro do trabalho."
  },
  {
    "id": 93,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Se a equipe assume um conjunto de itens para a sprint, qual é a expectativa apontada no material?",
    "opcoes": [
      "A) Que a equipe se comprometa com os objetivos da sprint e mantenha foco e motivação.",
      "B) Que cada Desenvolvedor trabalhe independentemente sem comunicação.",
      "C) Que o Product Owner execute as tarefas mais complexas quando necessário.",
      "D) Que somente o Scrum Master seja responsável pela entrega."
    ],
    "correta": "A",
    "explicacao": "O capítulo destaca o compromisso da equipe com os objetivos da sprint para manter foco e motivação."
  },
  {
    "id": 94,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Numa equipe autogerida enfrentando atraso, qual ação respeita a ideia de auto-organização apresentada no capítulo?",
    "opcoes": [
      "A) O Product Owner reorganiza as tarefas e dita quem fará o quê.",
      "B) A equipe decide autonomamente como redistribuir tarefas para atingir o compromisso.",
      "C) O Scrum Master assume tarefas dos Desenvolvedores para acelerar a entrega.",
      "D) Os stakeholders exigem uma replanificação sem consultar a equipe."
    ],
    "correta": "B",
    "explicacao": "O capítulo afirma que a equipe se organiza autonomamente para cumprir o compromisso da sprint, decidindo como o trabalho será feito."
  },
  {
    "id": 95,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Durante a sprint, surge um impedimento técnico. O que reflete a responsabilidade coletiva descrita no material?",
    "opcoes": [
      "A) Apenas o Desenvolvedor que encontrou o impedimento deve tentar resolvê‑lo.",
      "B) O Product Owner deve resolver o impedimento sem envolver a equipe.",
      "C) A equipe toda trabalha em conjunto para resolver o impedimento e atingir os objetivos.",
      "D) O impedimento é ignorado até a próxima retrospectiva."
    ],
    "correta": "C",
    "explicacao": "O texto enfatiza responsabilidade coletiva: a equipe trabalha junta para resolver problemas e atingir a sprint."
  },
  {
    "id": 96,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Se o burndown chart mostra que o time está atrás do previsto na metade da sprint, qual é a ação coerente com o capítulo?",
    "opcoes": [
      "A) Manter o plano inicial sem alterações para não perder previsibilidade.",
      "B) Transferir itens não concluídos para o Backlog de Produto sem discussão.",
      "C) Cancelar a sprint imediatamente e começar uma nova.",
      "D) Fazer ajustes ágeis: redistribuir tarefas, repriorizar ou ajustar escopo para cumprir objetivos."
    ],
    "correta": "D",
    "explicacao": "O capítulo diz que a equipe deve fazer ajustes ágeis, como redistribuir tarefas, repriorizar ou ajustar escopo para permanecer no caminho."
  },
  {
    "id": 97,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Num stand-up em que membros discutem longamente soluções técnicas, qual intervenção melhor apoia os objetivos do evento conforme o material?",
    "opcoes": [
      "A) Interromper a reunião e pedir que a discussão técnica siga depois com quem for necessário.",
      "B) Prolongar a reunião para resolver todos os detalhes técnicos ali mesmo.",
      "C) Eliminar a Reunião Diária e enviar um relatório por e-mail.",
      "D) Exigir que apenas o Scrum Master fale sobre impedimentos."
    ],
    "correta": "A",
    "explicacao": "O texto indica que o stand-up deve manter foco em progresso e impedimentos; discussões detalhadas devem ocorrer fora do evento para preservar eficiência."
  },
  {
    "id": 98,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Após a apresentação na revisão da sprint, o time recebe feedback dos stakeholders que muda prioridades. Qual deve ser o próximo passo conforme o capítulo?",
    "opcoes": [
      "A) Ignorar o feedback até a próxima retrospectiva.",
      "B) O Product Owner atualizar o Backlog de Produto incorporando o feedback para planejamento futuro.",
      "C) Transferir responsabilidades pelo backlog para os stakeholders.",
      "D) Cancelar todas as sprints futuras até que o feedback seja validado externamente."
    ],
    "correta": "B",
    "explicacao": "O capítulo descreve que a revisão é oportunidade para coletar feedback e o Product Owner atualiza o Backlog de Produto conforme necessário."
  },
  {
    "id": 99,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Durante a retrospectiva, a equipe identifica um problema do processo de refinamento. Segundo o material, qual é a ação esperada?",
    "opcoes": [
      "A) Punir quem causou o problema para evitar recorrência.",
      "B) Listar o problema no Backlog de Produto e aguardar priorização do Product Owner.",
      "C) Criar um item de melhoria e aplicá-lo para as sprints futuras visando melhoria contínua.",
      "D) Ignorar o problema para não afetar a moral do time."
    ],
    "correta": "C",
    "explicacao": "O capítulo enfatiza que retrospectivas devem gerar ações de melhoria contínua a serem aplicadas nas próximas sprints."
  },
  {
    "id": 100,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "Se um cliente fornece novo feedback crítico no meio de uma sprint, o que o capítulo recomenda como abordagem para o Backlog da Sprint?",
    "opcoes": [
      "A) Modificar o Backlog da Sprint sem comunicar a equipe para acelerar a entrega.",
      "B) Ignorar o feedback até o final da sprint para não interromper o trabalho.",
      "C) Remover imediatamente todos os itens em andamento e substituí‑los pelo novo pedido.",
      "D) Product Owner e equipe avaliam proativamente ajustes no Backlog da Sprint e comunicam claramente as mudanças."
    ],
    "correta": "D",
    "explicacao": "O texto recomenda ajustes proativos do Product Owner e da equipe, com comunicação clara sobre quaisquer mudanças no Backlog da Sprint."
  },
  {
    "id": 101,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K4",
    "pergunta": "Uma equipe tem um Backlog de Produto muito extenso e pouco detalhado, causando confusão e baixa entrega de valor. Analise as melhores ações segundo o capítulo.",
    "opcoes": [
      "A) Realizar refinamentos regulares, delegar estimativas à equipe e limitar trabalho em progresso no Backlog da Sprint.",
      "B) O Product Owner deve detalhar todo o backlog imediatamente para evitar dúvidas futuras.",
      "C) Congelar o backlog para impedir novas entradas até que todo o backlog atual seja entregue.",
      "D) Transferir a priorização para stakeholders externos para acelerar decisões."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda revisão regular, delegação para aumentar envolvimento e limitar WIP para manter backlog gerenciável e foco na entrega de valor."
  },
  {
    "id": 102,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K4",
    "pergunta": "Ao balancear detalhe e flexibilidade no backlog, qual abordagem melhor equilibra os fatores mencionados no texto?",
    "opcoes": [
      "A) Detalhar ao máximo todos os itens desde o início para eliminar incertezas.",
      "B) Detalhar apenas o suficiente para ação próxima e manter flexibilidade para aprendizado futuro.",
      "C) Deixar todos os itens amplos para maximizar adaptabilidade sem nunca detalhar.",
      "D) Remover prioridades estratégicas para focar apenas em tarefas imediatas."
    ],
    "correta": "B",
    "explicacao": "O capítulo destaca a necessidade de equilibrar detalhe suficiente para ação com flexibilidade para mudanças, evitando excesso de detalhe precoce."
  },
  {
    "id": 103,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K4",
    "pergunta": "Numa organização com stakeholders dispersos e diferentes expectativas, qual combinação de práticas do capítulo melhoraria a comunicação do Backlog de Produto?",
    "opcoes": [
      "A) Manter o backlog privado e só discutir com a equipe de desenvolvimento.",
      "B) Enviar relatórios mensais somente para a alta direção sem acesso ao backlog.",
      "C) Transparência com stakeholders, uso de ferramentas acessíveis e reuniões regulares de alinhamento.",
      "D) Substituir reuniões por comunicados formais que não aceitam feedback."
    ],
    "correta": "C",
    "explicacao": "O texto recomenda transparência, ferramentas integradas e reuniões regulares para garantir visibilidade e alinhamento com stakeholders."
  },
  {
    "id": 104,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K4",
    "pergunta": "Uma mudança estratégica exigirá repriorização significativa do Backlog de Produto. O Product Owner enfrenta pressão para manter entregas atuais. Qual análise e ação são mais alinhadas ao capítulo?",
    "opcoes": [
      "A) Ignorar a mudança estratégica para não desestabilizar o time.",
      "B) Transferir a decisão de repriorização para os Desenvolvedores sem diálogo com stakeholders.",
      "C) Cancelar todas as sprints até que a nova estratégia esteja totalmente detalhada.",
      "D) Avaliar impacto, reavaliar prioridades com stakeholders e ajustar o backlog para equilibrar curto e longo prazo."
    ],
    "correta": "D",
    "explicacao": "O capítulo indica que o Product Owner deve engajar stakeholders, avaliar impacto e reavaliar prioridades para manter alinhamento estratégico e sustentabilidade."
  },
  {
    "id": 105,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K1",
    "pergunta": "Qual é a característica essencial do Planejamento Ágil, segundo o material?",
    "opcoes": [
      "A) Abordagem iterativa e flexível com foco na adaptabilidade e entrega contínua de valor.",
      "B) Planeamento detalhado inicial que evita mudanças durante o projeto.",
      "C) Gestão centralizada pelo gerente de projeto com controle rígido de escopo.",
      "D) Execução em cascata com marcos fixos e pouca interação com stakeholders."
    ],
    "correta": "A",
    "explicacao": "O material define Planejamento Ágil como iterativo, flexível e focado na entrega contínua de valor e adaptação às mudanças."
  },
  {
    "id": 106,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K1",
    "pergunta": "Quem é responsável por descrever a visão do projeto no Planejamento de Visão?",
    "opcoes": [
      "A) Scrum Master",
      "B) Product Owner",
      "C) Gerente de Projeto",
      "D) Stakeholders externos"
    ],
    "correta": "B",
    "explicacao": "O trecho indica que o Product Owner descreve o objetivo final e o valor a entregar, guiando o trabalho subsequente."
  },
  {
    "id": 107,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Qual é a diferença correta entre Planejamento de Release e Planejamento de Sprint conforme o texto?",
    "opcoes": [
      "A) O Planejamento de Release detalha tarefas diárias; o de Sprint define objetivos estratégicos.",
      "B) O Planejamento de Release define tarefas específicas; o de Sprint define apenas prioridades.",
      "C) O Planejamento de Release define marcos e funcionalidades de alto nível; o de Sprint planeja tarefas específicas para o próximo ciclo.",
      "D) Não há diferença; ambos tratam apenas de estimativas sem objetivos."
    ],
    "correta": "C",
    "explicacao": "O material diferencia release (marcos e funcionalidades chave) de sprint (planejamento em detalhes das tarefas do próximo ciclo)."
  },
  {
    "id": 108,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Por que o uso de objetivos SMART é recomendado no Planejamento Ágil?",
    "opcoes": [
      "A) Porque impede qualquer alteração no escopo durante o projeto.",
      "B) Porque garante que os objetivos sejam claros, mensuráveis e alcançáveis, servindo de direção para a equipe.",
      "C) Porque substitui a necessidade de comunicação com stakeholders.",
      "D) Porque elimina a necessidade de revisões e retrospectivas."
    ],
    "correta": "D",
    "explicacao": "Apesar de plausível, a alternativa D é incorreta; a correta é B, pois o material afirma que SMART ajuda a garantir objetivos claros e realizáveis."
  },
  {
    "id": 109,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Qual benefício dos ciclos iterativos é enfatizado no capítulo?",
    "opcoes": [
      "A) Permitem planeamento único e definitivo sem necessidade de ajustes.",
      "B) Proporcionam entrega contínua de valor e oportunidade de refinar o plano com aprendizado e feedback.",
      "C) Substituem a necessidade de definição de prioridades no Backlog de Produto.",
      "D) Reduzem a necessidade de testes e validação com usuários."
    ],
    "correta": "A",
    "explicacao": "A alternativa correta é B; o texto destaca que iterações facilitam entrega contínua de valor e permitem refinamento com base no aprendizado."
  },
  {
    "id": 110,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Segundo o material, qual é o papel do envolvimento contínuo dos stakeholders no Planejamento Ágil?",
    "opcoes": [
      "A) Fornecer instruções técnicas detalhadas para os desenvolvedores.",
      "B) Garantir que as expectativas sejam geridas e que o feedback seja integrado rapidamente ao planejamento.",
      "C) Delegar ao Scrum Master a responsabilidade de escrever todas as histórias de usuário.",
      "D) Estabelecer contratos formais que impeçam mudanças durante a release."
    ],
    "correta": "B",
    "explicacao": "O texto afirma que comunicação contínua e reuniões regulares com stakeholders permitem gerir expectativas e incorporar feedback."
  },
  {
    "id": 111,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Qual prática é citada como técnica colaborativa para estimativas no Planejamento Ágil?",
    "opcoes": [
      "A) Planning Poker",
      "B) Análise financeira da diretoria",
      "C) Atribuição individual de estimativas pelo Product Owner",
      "D) Estimativa única no início do projeto sem revisões"
    ],
    "correta": "C",
    "explicacao": "A alternativa correta é A; o material menciona Planning Poker como técnica colaborativa para estimativas."
  },
  {
    "id": 112,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Quem lidera a priorização orientada ao valor no Planejamento Ágil, conforme o texto?",
    "opcoes": [
      "A) Scrum Master",
      "B) Equipe de vendas",
      "C) Desenvolvedores",
      "D) Product Owner"
    ],
    "correta": "D",
    "explicacao": "O trecho indica que o Product Owner identifica e prioriza o trabalho que oferece maior retorno sobre o investimento."
  },
  {
    "id": 113,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "Qual é uma estratégia citada para mitigar riscos técnicos desconhecidos?",
    "opcoes": [
      "A) Ignorar riscos até a fase de manutenção.",
      "B) Implementar spikes para explorar tecnologias desconhecidas.",
      "C) Atribuir todos os riscos ao Product Owner para decisão imediata.",
      "D) Cancelar a release até todos os riscos desaparecerem."
    ],
    "correta": "A",
    "explicacao": "A alternativa correta é B; o material menciona spikes como forma de explorar tecnologias desconhecidas para mitigar riscos."
  },
  {
    "id": 114,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K2",
    "pergunta": "O que deve ser considerado ao avaliar a capacidade da equipe para uma sprint?",
    "opcoes": [
      "A) Férias, feriados e outras obrigações que possam afetar a quantidade de trabalho.",
      "B) Somente os índices de produtividade individuais do mês anterior.",
      "C) A preferência pessoal do Product Owner por entregas rápidas.",
      "D) O número máximo possível de horas trabalháveis sem pausas."
    ],
    "correta": "B",
    "explicacao": "A alternativa correta é B; o texto recomenda considerar férias, feriados e obrigações para avaliar capacidade e ajustar expectativas."
  },
  {
    "id": 115,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Seu Product Owner apresenta um roadmap muito rígido que não admite mudanças mesmo com feedback do usuário. Qual é a melhor ação de acordo com o capítulo?",
    "opcoes": [
      "A) Aceitar o roadmap e executar conforme planeado para evitar discussões.",
      "B) Solicitar que o roadmap seja mantido apenas como visão de longo prazo, mas flexível para alterações com base em feedback.",
      "C) Cancelar reuniões de feedback para proteger o roadmap.",
      "D) Transferir a responsabilidade do roadmap para os Desenvolvedores."
    ],
    "correta": "C",
    "explicacao": "O material descreve roadmaps como ferramentas estratégicas que devem permanecer flexíveis e adaptar-se às mudanças e ao feedback."
  },
  {
    "id": 116,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Durante uma sprint, a equipa descobre uma alteração de prioridade urgente dos stakeholders. Qual é a ação mais alinhada com o Planejamento Ágil?",
    "opcoes": [
      "A) Ignorar a mudança até o fim da sprint para não afetar o trabalho planeado.",
      "B) Reavaliar prioridades com o Product Owner e ajustar o backlog ou próximas sprints conforme necessário.",
      "C) Pedir ao Scrum Master que decida sozinho se a mudança entra na sprint.",
      "D) Cancelar todas as reuniões e reescrever a visão do projeto."
    ],
    "correta": "D",
    "explicacao": "O texto enfatiza adaptação às mudanças; a ação correta é reavaliar prioridades com o Product Owner e adaptar planos com base no feedback."
  },
  {
    "id": 117,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Num sprint review, o feedback dos usuários sugere alterar uma funcionalidade já entregue. O que a equipe deve fazer no planejamento subsequente?",
    "opcoes": [
      "A) Colocar a alteração prioritariamente no Backlog de Produto e ajustar o planejamento de acordo com valor e capacidade.",
      "B) Manter a funcionalidade como está para evitar retrabalho.",
      "C) Pedir aos usuários que esperem pela próxima release sem registrar o feedback.",
      "D) Alterar imediatamente o código em produção sem passar pelo backlog."
    ],
    "correta": "A",
    "explicacao": "O material recomenda integrar feedback ao planejamento, priorizando alterações por valor e considerando capacidade da equipa."
  },
  {
    "id": 118,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Uma equipa remota tem dificuldade em visualizar progresso e gargalos. Qual solução do capítulo é mais apropriada?",
    "opcoes": [
      "A) Usar ferramentas como JIRA, Trello ou Asana para criar quadros, dashboards e monitorizar em tempo real.",
      "B) Trocar para comunicação exclusivamente por e-mail para registrar tudo.",
      "C) Reunir pessoalmente todos os dias apesar da distância.",
      "D) Eliminar quadros visuais para forçar conversas mais longas."
    ],
    "correta": "B",
    "explicacao": "O trecho indica que ferramentas digitais suportam planejamento ágil e facilitam colaboração, visualização de progresso e identificação de gargalos."
  },
  {
    "id": 119,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Ao estimar para uma release, a equipa tem dados históricos de velocidade mas o Product Owner quer prometer mais funcionalidades ao cliente. Qual postura aplicar no planejamento?",
    "opcoes": [
      "A) Diminuir intencionalmente as estimativas para surpreender positivamente no fim.",
      "B) Aceitar a promessa do Product Owner sem consultar a equipa para agradar o cliente.",
      "C) Usar os dados históricos para comunicar expectativas realistas e ajustar prioridades com o Product Owner.",
      "D) Remover estimativas e basear-se apenas em opiniões do mercado."
    ],
    "correta": "C",
    "explicacao": "O material defende estimativas realistas suportadas por dados históricos e transparência para manter confiança e expectativas alinhadas."
  },
  {
    "id": 120,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Num backlog extenso, como o Product Owner deve proceder segundo o capítulo?",
    "opcoes": [
      "A) Priorizar itens com maior valor para o cliente e usar métodos como MoSCoW para categorizar e adaptar-se a mudanças.",
      "B) Ordenar os itens por ordem de chegada das solicitações sem avaliar valor.",
      "C) Bloquear alterações no backlog até o fim da release para evitar confusão.",
      "D) Deixar a equipa escolher apenas o que preferir sem orientação de valor."
    ],
    "correta": "D",
    "explicacao": "O texto recomenda foco no valor, com o Product Owner identificando e priorizando trabalho de maior retorno, e uso de métodos como MoSCoW."
  },
  {
    "id": 121,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Durante o planejamento de sprint surge incerteza técnica significativa. Qual ação alinhada ao material a equipe deve tomar?",
    "opcoes": [
      "A) Incluir um spike na sprint para investigar a incerteza antes de comprometer funcionalidades.",
      "B) Ignorar a incerteza e estimar como se nada existisse.",
      "C) Aumentar o escopo da sprint para compensar riscos futuros.",
      "D) Transferir a decisão para stakeholders externos sem investigação."
    ],
    "correta": "A",
    "explicacao": "O capítulo indica que spikes são usados para explorar tecnologias desconhecidas e reduzir riscos antes de comprometer trabalho."
  },
  {
    "id": 122,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Se um membro da equipa tem férias durante uma sprint planeada, qual é a melhor prática no planejamento seguinte?",
    "opcoes": [
      "A) Reavaliar a capacidade da equipa e ajustar o que pode ser alcançado na sprint.",
      "B) Adicionar trabalho extra para compensar as férias do membro.",
      "C) Cancelar a sprint para esperar o regresso do membro.",
      "D) Manter o mesmo comprometimento e esperar que outros façam as horas extras sem ajuste."
    ],
    "correta": "B",
    "explicacao": "O material recomenda compreender a capacidade considerando férias e ajustar expectativas para garantir objetivos realistas e alcançáveis."
  },
  {
    "id": 123,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Uma equipa gasta demasiado tempo a planear e pouco a entregar. Segundo o capítulo, qual é a melhor abordagem?",
    "opcoes": [
      "A) Reduzir o planeamento à mínima expressão e priorizar ação e entregas de valor.",
      "B) Eliminar retrospectivas porque consomem tempo que poderia ser de desenvolvimento.",
      "C) Aumentar ainda mais o planeamento para tentar evitar qualquer imprevisto.",
      "D) Transferir toda a tomada de decisão para o Product Owner e reduzir a colaboração."
    ],
    "correta": "C",
    "explicacao": "O texto advoga um equilíbrio dinâmico: priorizar ação e entrega de valor, evitando planeamento excessivo que restrinja a agilidade."
  },
  {
    "id": 124,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K4",
    "pergunta": "Numa sprint review surgem opiniões conflitantes: stakeholders exigem funcionalidades novas de alto custo; Product Owner quer manter foco em funcionalidades de maior valor de longo prazo; equipa reporta capacidade limitada. Como analisar e decidir prioridades seguindo o capítulo?",
    "opcoes": [
      "A) Mover todas as decisões para uma reunião executiva externa para evitar conflitos.",
      "B) O Product Owner deve reavaliar prioridades com base na medição contínua de valor, equilibrando custo, impacto para o cliente e capacidade da equipa.",
      "C) A equipa deve ignorar os stakeholders e seguir apenas o roadmap original.",
      "D) Dar prioridade imediata às exigências dos stakeholders independentemente do custo e capacidade."
    ],
    "correta": "D",
    "explicacao": "O capítulo orienta que priorização deve basear-se em avaliação contínua de valor e alinhamento com capacidade; o Product Owner deve adaptar prioridades considerando custo, impacto e capacidade."
  },
  {
    "id": 125,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K4",
    "pergunta": "Ao planear releases, a equipa descobre divergência entre objetivos do projeto e metas estratégicas da organização. Qual análise é mais consistente com o material antes de ajustar o plano?",
    "opcoes": [
      "A) Continuar com o plano técnico sem envolver stakeholders para não atrasar entregas.",
      "B) Revisar estratégias de negócio com stakeholders, comunicar claramente as implicações e adaptar o roadmap para realinhar entregas com objetivos organizacionais.",
      "C) Cancelar o projeto imediatamente por conta da divergência.",
      "D) Aumentar a velocidade de desenvolvimento para compensar desalinhamento estratégico."
    ],
    "correta": "A",
    "explicacao": "O texto enfatiza revisão estratégica regular e comunicação clara para alinhar entregas com objetivos de negócio antes de adaptar o plano."
  },
  {
    "id": 126,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K4",
    "pergunta": "Durante o planejamento de uma roadmap, surgem evidências de que os usuários não valorizam uma funcionalidade planeada. Considerando design thinking, testes com usuários e planejamento ágil, qual é a melhor abordagem analítica?",
    "opcoes": [
      "A) Priorizar a remoção ou alteração da funcionalidade com base em testes e feedback, e ajustar o roadmap para focar em necessidades reais do usuário.",
      "B) Eliminar toda a pesquisa com usuários por ser inconsistênte com objetivos de negócio.",
      "C) Manter a funcionalidade no roadmap porque já foi decidida na visão inicial.",
      "D) Transferir a responsabilidade da decisão para a equipa de marketing sem mais investigação."
    ],
    "correta": "B",
    "explicacao": "O capítulo recomenda centrar-se no usuário, integrar testes e feedback, e adaptar roadmaps conforme o que realmente agrega valor ao usuário."
  },
  {
    "id": 127,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K4",
    "pergunta": "Ao planear múltiplas releases, a liderança pressiona por entregas rápidas que estão a esgotar a equipa. Como deve a equipa analisar e agir conforme o capítulo?",
    "opcoes": [
      "A) Encerrar o projeto por incapacidade de cumprir prazos agressivos.",
      "B) Aceitar as entregas rápidas sem questionar para satisfazer a liderança a qualquer custo.",
      "C) Avaliar sustentabilidade considerando equilíbrio trabalho/vida, ajustar o ritmo de entregas e planejar para longo prazo para evitar esgotamento.",
      "D) Aumentar horas de trabalho e contratar temporariamente sem revisar o roadmap."
    ],
    "correta": "C",
    "explicacao": "O texto enfatiza sustentabilidade, equilíbrio trabalho/vida e planeamento para o futuro como meios de manter produtividade e inovação a longo prazo."
  },
  {
    "id": 128,
    "capitulo": "6. Planejamento Ágil",
    "nivel": "K3",
    "pergunta": "Num sprint o burndown mostra progresso irregular e a equipa não consegue explicar variações. Qual ação mais alinhada ao material deve ser tomada no próximo planejamento?",
    "opcoes": [
      "A) Investigar as causas nas reuniões de revisão e retrospectiva, ajustar estimativas e transparência nas métricas.",
      "B) Interromper todas as entregas até que o burndown seja perfeito.",
      "C) Punir membros da equipa responsáveis por atrasos.",
      "D) Eliminar o uso do burndown porque é enganoso."
    ],
    "correta": "D",
    "explicacao": "O material recomenda usar métricas relevantes com transparência e ajustar o plano com base em análise das causas em retrospectivas e revisões."
  },
  {
    "id": 129,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K1",
    "pergunta": "Qual é a característica principal da Estimativa Ágil em relação às abordagens tradicionais?",
    "opcoes": [
      "A) Estimativas são rápidas, colaborativas e frequentemente revisadas pela equipe.",
      "B) Estimativas são feitas apenas pelo gerente de projeto para garantir uniformidade.",
      "C) Estimativas usam exclusivamente horas de trabalho para prever entregas.",
      "D) Estimativas são definidas no início do projeto e não mudam durante o desenvolvimento."
    ],
    "correta": "A",
    "explicacao": "O material descreve Estimativa Ágil como prática rápida, colaborativa e iterativa que é revisada ao longo do projeto."
  },
  {
    "id": 130,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K1",
    "pergunta": "O que são story points no contexto de estimativa ágil?",
    "opcoes": [
      "A) Uma medida monetária para custo de uma história.",
      "B) Unidade que avalia complexidade, esforço e incerteza relativa entre tarefas.",
      "C) Número de horas exatas necessárias para concluir uma tarefa.",
      "D) Um cronograma fixo para entregas semanais."
    ],
    "correta": "B",
    "explicacao": "O texto define story points como estimativas relativas que consideram complexidade, esforço e incerteza, não horas."
  },
  {
    "id": 131,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Qual diferença essencial entre Planning Poker e T-Shirt Sizing segundo o capítulo?",
    "opcoes": [
      "A) Planning Poker é qualitativo; T-Shirt Sizing usa números precisos.",
      "B) Planning Poker deve ser usado só por Product Owner; T-Shirt Sizing só por Desenvolvedores.",
      "C) Planning Poker envolve votação numérica colaborativa; T-Shirt Sizing classifica qualitativamente por tamanhos.",
      "D) Planning Poker substitui a necessidade de refinamento iterativo; T-Shirt Sizing não."
    ],
    "correta": "C",
    "explicacao": "O material descreve Planning Poker como votação numérica colaborativa e T‑Shirt Sizing como categorização qualitativa por tamanhos."
  },
  {
    "id": 132,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Por que a participação dos Desenvolvedores é essencial no processo de estimativa ágil?",
    "opcoes": [
      "A) Porque somente eles definem a visão e valor dos itens do Backlog de Produto.",
      "B) Porque estimativas só podem ser registradas por quem codifica.",
      "C) Porque a equipe deve aceitar as estimativas impostas pela gerência.",
      "D) Porque seu conhecimento coletivo produz estimativas mais precisas e realistas."
    ],
    "correta": "D",
    "explicacao": "O capítulo enfatiza que o sucesso das estimativas vem do conhecimento coletivo dos Desenvolvedores, gerando maior precisão."
  },
  {
    "id": 133,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Como o refinamento iterativo melhora a precisão das estimativas?",
    "opcoes": [
      "A) Ao ajustar estimativas conforme mais informações e feedback ficam disponíveis.",
      "B) Ao aumentar a quantidade de documentação antes de qualquer desenvolvimento.",
      "C) Ao bloquear mudanças no escopo para manter as estimativas originais.",
      "D) Ao substituir estimativas por prazos fixos determinados pelo Product Owner."
    ],
    "correta": "A",
    "explicacao": "O texto indica que estimativas são iterativas e devem ser ajustadas à medida que surgem mais informações e feedback."
  },
  {
    "id": 134,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Qual responsabilidade chave do Product Owner no processo de estimativa ágil?",
    "opcoes": [
      "A) Definir as técnicas de estimativa que os Desenvolvedores devem usar.",
      "B) Esclarecer requisitos e priorizar itens do Backlog para que a equipe estime corretamente.",
      "C) Realizar todas as estimativas sozinho para acelerar o processo.",
      "D) Garantir que as estimativas sejam otimistas para satisfazer stakeholders."
    ],
    "correta": "B",
    "explicacao": "O capítulo afirma que o Product Owner esclarece requisitos e define prioridades para guiar as estimativas da equipe."
  },
  {
    "id": 135,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Qual é um desafio inerente às estimativas no início de um projeto, conforme o material?",
    "opcoes": [
      "A) Excesso de dados históricos que confundem a equipe.",
      "B) Falta de ferramentas digitais para votar em estimativas.",
      "C) Incerteza elevada que torna difícil estimar com precisão.",
      "D) Pressão para usar apenas T‑Shirt Sizing em todos os projetos."
    ],
    "correta": "C",
    "explicacao": "O texto menciona a incerteza inerente aos projetos como um dos maiores desafios para estimativas iniciais."
  },
  {
    "id": 136,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Como dados históricos ajudam o time a melhorar estimativas futuras?",
    "opcoes": [
      "A) Substituindo a necessidade de reuniões de refinamento.",
      "B) Eliminando a necessidade de considerar incertezas.",
      "C) Garantindo que todas as estimativas sejam iguais às dos projetos anteriores.",
      "D) Fornecendo um ponto de referência baseado em experiências passadas para calibrar estimativas."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda usar dados históricos como referência para calibrar e melhorar a precisão das estimativas."
  },
  {
    "id": 137,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Durante uma revisão com stakeholders, o Product Owner solicita números em horas em vez de story points. Qual é a melhor resposta da equipe?",
    "opcoes": [
      "A) Explicar a diferença entre story points e horas, comunicar incertezas e, se necessário, oferecer uma conversão aproximada com ressalvas.",
      "B) Recusar fornecer qualquer estimativa e manter apenas story points.",
      "C) Converter story points em horas imediatamente e aceitar a solicitação.",
      "D) Alterar o método para horas permanentemente para agradar stakeholders."
    ],
    "correta": "A",
    "explicacao": "O material sugere comunicar claramente estimativas e incertezas, explicando o contexto dos story points e oferecendo conversões com ressalvas quando necessário."
  },
  {
    "id": 138,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Em uma sessão de Planning Poker remota, a equipe percebe grande variação nas cartas escolhidas. O que os Desenvolvedores devem fazer primeiro?",
    "opcoes": [
      "A) O Scrum Master decide a estimativa para acelerar a sessão.",
      "B) Abrir discussão para que quem votou extremo explique suas razões e reduzir a incerteza coletivamente.",
      "C) O Product Owner muda a prioridade dos itens menos controversos.",
      "D) Descartar as estimativas e usar T‑Shirt Sizing em vez de Planning Poker."
    ],
    "correta": "B",
    "explicacao": "O Planning Poker incentiva discussão quando há divergência; ouvir os votos extremos ajuda a revelar suposições e alinhar entendimento."
  },
  {
    "id": 139,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Um item grande do Backlog de Produto tem estimativas muito incertas. Qual ação prática ajudará a obter uma estimativa melhor para a próxima Sprint?",
    "opcoes": [
      "A) Deixar o item sem estimativa até que esteja pronto para desenvolvimento.",
      "B) Aumentar a estimativa do item para o maior valor possível e movê‑lo para o topo do Backlog.",
      "C) Dividir o item em partes menores (abordagem modular) e, se necessário, criar um spike para investigar incertezas.",
      "D) Cancelar o item até que o Product Owner defina exatamente todas as tarefas."
    ],
    "correta": "C",
    "explicacao": "O capítulo recomenda modularizar trabalhos complexos e usar spikes para investigar incertezas, melhorando a precisão das estimativas."
  },
  {
    "id": 140,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Numa priorização, há um item de alto valor mas alto risco. Como a equipe deve agir considerando estimativas ágeis?",
    "opcoes": [
      "A) Sempre adiar itens de alto risco até o final do projeto.",
      "B) Remover o item do Backlog de Produto para evitar impacto no roadmap.",
      "C) Subestimar o risco para manter o foco em itens de baixo esforço.",
      "D) Priorizar o item para resolução precoce, incorporando o risco nas estimativas e possivelmente fazendo um spike."
    ],
    "correta": "D",
    "explicacao": "O texto indica que itens de alto risco críticos devem ser priorizados cedo e que riscos devem ser considerados nas estimativas, com spikes quando necessário."
  },
  {
    "id": 141,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "A equipe documenta suposições por trás das estimativas no Backlog. Que benefício imediato isso traz em reuniões com stakeholders?",
    "opcoes": [
      "A) Ajuda a gerir expectativas e facilita revisão das estimativas quando novas informações surgirem.",
      "B) Permite aos stakeholders reescrever as estimativas conforme seus desejos.",
      "C) Substitui a necessidade de revisões de Sprint e feedback.",
      "D) Evita que a equipe precise explicar as estimativas durante o planejamento."
    ],
    "correta": "A",
    "explicacao": "Compartilhar suposições promove transparência, ajuda a gerir expectativas e facilita ajustes das estimativas com novas informações, segundo o capítulo."
  },
  {
    "id": 142,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Um time distribuído precisa votar estimativas de forma eficiente. Qual prática tecnológica é coerente com o material?",
    "opcoes": [
      "A) Enviar e‑mail com estimativas individuais para o Product Owner consolidar.",
      "B) Usar uma ferramenta digital integrada que permita votação colaborativa e registro das estimativas.",
      "C) Ter somente reuniões presenciais e evitar ferramentas digitais.",
      "D) Registrar estimativas em planilhas locais sem acesso compartilhado."
    ],
    "correta": "B",
    "explicacao": "O capítulo aponta que ferramentas digitais facilitam colaboração, votação e registro de estimativas para equipes remotas."
  },
  {
    "id": 143,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Depois de várias Sprints, a equipe percebe tendência de subestimar consistentemente. Qual é a melhor prática para corrigir isso?",
    "opcoes": [
      "A) Ignorar o padrão e manter o método atual para não criar mudanças.",
      "B) Aumentar arbitrariamente todas as estimativas para garantir margem.",
      "C) Analisar dados históricos, refletir em retrospectiva e ajustar técnicas de estimativa.",
      "D) Transferir a responsabilidade das estimativas para o Product Owner."
    ],
    "correta": "C",
    "explicacao": "O material recomenda usar dados históricos e aprendizado contínuo em retrospectivas para calibrar e melhorar estimativas."
  },
  {
    "id": 144,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Em um projeto complexo com muitas dependências, qual combinação de ações melhora a precisão das estimativas?",
    "opcoes": [
      "A) Focar só em entregáveis finais e evitar estimativas intermediárias.",
      "B) Substituir story points por estimativas de custo para simplificar a priorização.",
      "C) Aumentar a carga de trabalho da equipe para acelerar aprendizado sem alterar estimativas.",
      "D) Dividir o trabalho, usar spikes para áreas incertas e coordenar dependências entre equipes."
    ],
    "correta": "D",
    "explicacao": "O capítulo sugere modularização, uso de spikes e coordenação entre equipes para melhorar estimativas em cenários complexos."
  },
  {
    "id": 145,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K4",
    "pergunta": "Durante o Planejamento da Sprint, o Product Owner propõe colocar muitos itens de alto valor e esforço. O que os Desenvolvedores devem considerar ao estimar e selecionar trabalho?",
    "opcoes": [
      "A) Selecionar itens equilibrando valor, esforço estimado e capacidade da Sprint, comunicando incertezas.",
      "B) Aceitar todos os itens para agradar stakeholders, mesmo sem capacidade.",
      "C) Recusar trabalhar em itens de alto esforço até que o Product Owner os reescreva.",
      "D) Transformar todos os itens em tarefas pequenas sem estimá‑las."
    ],
    "correta": "A",
    "explicacao": "O texto indica que seleção de Sprint deve equilibrar valor, esforço e capacidade, além de comunicar incertezas."
  },
  {
    "id": 146,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K4",
    "pergunta": "Um time novo com membros inexperientes e pressão de gestão está consistentemente subestimando. Ao analisar a situação, quais ações combinadas são mais apropriadas para o Scrum Master?",
    "opcoes": [
      "A) Impor estimativas mais conservadoras, retirar pressão da gestão e remover os membros inexperientes da equipe.",
      "B) Proporcionar treinamento, usar dados históricos, promover planejamento com spikes e comunicar riscos aos stakeholders.",
      "C) Transferir toda a responsabilidade de estimativa ao Product Owner e aumentar a duração das Sprints.",
      "D) Manter o método atual, mas dobrar os story points para compensar o otimismo."
    ],
    "correta": "B",
    "explicacao": "O capítulo recomenda educação, uso de dados históricos, spikes para incertezas e comunicação de riscos como forma de melhorar precisão e gerir pressão."
  },
  {
    "id": 147,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K4",
    "pergunta": "Em uma organização onde stakeholders criticam estimativas por serem imprecisas, quais medidas analíticas e culturais juntas ajudam a restaurar confiança?",
    "opcoes": [
      "A) Ocultar suposições e fornecer somente números finais para evitar discussões.",
      "B) Delegar estimativas a consultores externos para que a equipe não seja responsabilizada.",
      "C) Documentar suposições, compartilhar incertezas, usar dados históricos e incorporar feedback em ciclos regulares.",
      "D) Reduzir a frequência de revisões para evitar exposição de erros passados."
    ],
    "correta": "C",
    "explicacao": "O texto enfatiza transparência, documentação de suposições, uso de dados históricos e ciclos de feedback para gerir expectativas e confiança."
  },
  {
    "id": 148,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K4",
    "pergunta": "Várias equipes precisam estimar trabalho que possui dependências críticas entre elas. Qual abordagem analítica é mais coerente com o capítulo para manter agilidade e coordenação?",
    "opcoes": [
      "A) Cada equipe estima isoladamente e um gerente consolida sem interação entre equipes.",
      "B) Eliminar estimativas e passar a entregar trabalho ad hoc conforme demanda.",
      "C) Forçar um único método de estimativa homogêneo sem considerar particularidades das equipes.",
      "D) Adotar práticas escaláveis (por exemplo SAFe), coordenar dependências, compartilhar dados históricos e sincronizar refinamentos."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda abordagens escaláveis como SAFe, coordenação de dependências, uso de dados e sincronização para estimativas em larga escala."
  },
  {
    "id": 149,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K4",
    "pergunta": "Ao analisar ferramentas digitais para apoiar estimativas ágeis em equipes distribuídas, quais critérios combinados são mais importantes segundo o material?",
    "opcoes": [
      "A) Usabilidade, integração com planejamento e visualizações que mostrem progresso e incertezas.",
      "B) Aparência visual atraente e custo baixo, independentemente da integração com outras ferramentas.",
      "C) Que a ferramenta impeça qualquer alteração nas estimativas para garantir estabilidade.",
      "D) Capacidade de gerar relatórios financeiros detalhados automaticamente sem input da equipe."
    ],
    "correta": "A",
    "explicacao": "O texto recomenda ferramentas com boa usabilidade, integração ao planejamento e visualizações que apoiem entendimento do progresso e das estimativas."
  },
  {
    "id": 150,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Se estimativas realistas estão ajudando a evitar sobrecarga, que prática o time deve manter para sustentar motivação ao longo do tempo?",
    "opcoes": [
      "A) Aumentar metas constantemente para desafiar a equipe.",
      "B) Celebrar sucessos alcançados com base em estimativas precisas e manter carga de trabalho gerenciável.",
      "C) Ocultar falhas para não abalar a moral do time.",
      "D) Eliminar retrospectivas para focar só na entrega."
    ],
    "correta": "B",
    "explicacao": "O capítulo afirma que estimativas realistas evitam exaustão e celebrar metas alcançadas reforça motivação e ambiente positivo."
  },
  {
    "id": 151,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Após uma Sprint, o time recebeu feedback que parte do trabalho estava incompleto por falta de entendimento. Qual ação deve guiar a revisão das estimativas?",
    "opcoes": [
      "A) Ignorar o feedback e repetir as mesmas estimativas na Sprint seguinte.",
      "B) Atribuir culpa a quem estimou e exigir estimativas mais altas.",
      "C) Usar o feedback na revisão, ajustar estimativas futuras e, se necessário, incluir spikes ou refinamento adicional.",
      "D) Remover itens semelhantes do Backlog de Produto para evitar problemas."
    ],
    "correta": "C",
    "explicacao": "O texto recomenda incorporar feedback nas revisões e ajustar estimativas, além de usar spikes ou refinamento quando necessário."
  },
  {
    "id": 152,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K3",
    "pergunta": "Qual é a abordagem indicada para resistir à pressão externa que pede estimativas ajustadas para cumprir expectativas irreais?",
    "opcoes": [
      "A) Ajustar estimativas para atender à pressão, mesmo sem evidências.",
      "B) Subestimar riscos para manter os stakeholders satisfeitos.",
      "C) Negociar com stakeholders apenas após completar todas as Sprints.",
      "D) Basear estimativas na melhor informação disponível e comunicar incertezas claramente."
    ],
    "correta": "D",
    "explicacao": "O capítulo aconselha resistir à pressão e fundamentar estimativas na melhor informação disponível, comunicando incertezas."
  },
  {
    "id": 153,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K1",
    "pergunta": "Qual é o propósito principal do monitoramento e comunicação do progresso em um ambiente ágil, segundo o material?",
    "opcoes": [
      "A) Fornecer transparência e permitir ajustes rápidos para entregar valor continuamente.",
      "B) Garantir que todas as tarefas sejam documentadas em detalhe para auditoria futura.",
      "C) Controlar rigidamente o tempo de cada membro da equipe para aumentar produtividade.",
      "D) Substituir a necessidade de planejamento estratégico de longo prazo."
    ],
    "correta": "A",
    "explicacao": "O texto afirma que monitorar e comunicar progresso visa transparência, adaptabilidade e entrega contínua de valor, permitindo ajustes rápidos."
  },
  {
    "id": 154,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K1",
    "pergunta": "Quem deve fornecer atualizações regulares e precisas sobre o progresso do projeto?",
    "opcoes": [
      "A) A gestão sénior exclusivamente.",
      "B) A equipe de desenvolvimento junto com o Product Owner.",
      "C) O Product Owner sozinho.",
      "D) Os stakeholders externos."
    ],
    "correta": "B",
    "explicacao": "O material refere que a equipe de desenvolvimento, juntamente com o Product Owner, fornece atualizações regulares e precisas."
  },
  {
    "id": 155,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Qual a diferença prática entre um Scrum Board e um quadro Kanban no monitoramento do progresso, de acordo com o capítulo?",
    "opcoes": [
      "A) O Scrum Board é apenas digital e o Kanban apenas físico.",
      "B) O Scrum Board substitui as reuniões diárias enquanto o Kanban elimina a necessidade de Product Owner.",
      "C) O Scrum Board rastreia Sprints e o Kanban foca no fluxo contínuo e limites de WIP.",
      "D) Não há diferença; ambos são idênticos em propósito e uso."
    ],
    "correta": "C",
    "explicacao": "O texto distingue quadros Scrum (associados a Sprints) de Kanban (foco em fluxo contínuo e limites de WIP) como ferramentas visuais para progresso."
  },
  {
    "id": 156,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Segundo o capítulo, qual é a característica que deve guiar a escolha de métricas de desempenho?",
    "opcoes": [
      "A) Ser impressivas para a gestão demonstrando progresso rápido.",
      "B) Ser iguais entre todos os times para comparações diretas.",
      "C) Ser facilmente manipuláveis para cumprir metas trimestrais.",
      "D) Refletir os objetivos do projeto e facilitar decisões."
    ],
    "correta": "D",
    "explicacao": "O material destaca que métricas devem refletir objetivos do projeto e apoiar a tomada de decisão, evitando métricas vaidosas."
  },
  {
    "id": 157,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Como os gráficos de burndown são usados na comunicação com stakeholders, conforme o trecho?",
    "opcoes": [
      "A) Para mostrar a tendência do trabalho restante versus tempo de forma clara.",
      "B) Para demonstrar a qualidade do código detalhadamente.",
      "C) Para substituir a necessidade de revisões de Sprint.",
      "D) Para medir o bem-estar da equipe."
    ],
    "correta": "A",
    "explicacao": "O capítulo indica que burndown charts fornecem uma visão rápida do trabalho restante ao longo do tempo, útil para stakeholders."
  },
  {
    "id": 158,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Qual é o principal benefício das reuniões de revisão com stakeholders descrito no capítulo?",
    "opcoes": [
      "A) Permitir que a equipe documente todas as decisões técnicas detalhadamente.",
      "B) Demonstrar trabalho concluído, coletar feedback e ajustar planos.",
      "C) Treinar stakeholders em práticas de desenvolvimento ágil.",
      "D) Reduzir a necessidade de reuniões internas da equipe."
    ],
    "correta": "B",
    "explicacao": "O texto indica que revisões permitem demonstrar o trabalho, recolher feedback e ajustar planos conforme necessário."
  },
  {
    "id": 159,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Qual é a estrutura sugerida para a Reunião Diária (stand-up) no capítulo?",
    "opcoes": [
      "A) Cada membro apresenta um relatório escrito detalhado para os stakeholders.",
      "B) O Product Owner define as tarefas diárias e repassa ao time.",
      "C) Cada membro responde às três perguntas sobre ontem, hoje e impedimentos.",
      "D) A reunião é usada exclusivamente para planeamento a longo prazo."
    ],
    "correta": "C",
    "explicacao": "O capítulo descreve a stand-up como momento em que cada membro responde: o que completei ontem, o que farei hoje e se há impedimentos."
  },
  {
    "id": 160,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "De que forma o feedback dos clientes deve ser tratado segundo o texto?",
    "opcoes": [
      "A) Como opcional, a ser considerado apenas em releases maiores.",
      "B) Como responsabilidade exclusiva do Product Owner sem envolver a equipe.",
      "C) Como algo a ser coletado apenas ao final do projeto para avaliação.",
      "D) Como componente vital, incorporado ativamente ao planejamento e ajustes."
    ],
    "correta": "D",
    "explicacao": "O capítulo enfatiza que o feedback dos clientes é vital e deve ser incorporado ativamente para ajustar prioridades e entrega."
  },
  {
    "id": 161,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Durante a Sprint, o Scrum Master nota aumento de horas extras e reclamações sobre cansaço. Qual ação imediata está mais alinhada com as práticas do capítulo?",
    "opcoes": [
      "A) Monitorar indicadores de bem-estar e promover ações proativas para ajustar carga de trabalho.",
      "B) Ignorar para cumprir prazos e ajustar após o release.",
      "C) Aumentar a equipe temporariamente sem revisar o planejamento.",
      "D) Repreender os Desenvolvedores por não gerirem bem o tempo."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda monitorar bem-estar e agir proativamente (ajustes na carga e ambiente) para prevenir exaustão e manter sustentabilidade."
  },
  {
    "id": 162,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Um membro relata um bloqueio técnico que exige acesso a um sistema externo. O Scrum Master não tem acesso, mas conhece quem pode ajudar. Segundo o capítulo, qual é a melhor ação?",
    "opcoes": [
      "A) Pedir ao Desenvolvedor esperar até a próxima Retrospectiva para discutir.",
      "B) Comunicar o bloqueio publicamente e ajudar a solicitar assistência externa para resolver rapidamente.",
      "C) Transferir a tarefa para outro Desenvolvedor sem comunicar o Product Owner.",
      "D) Cancelar a Sprint em razão do bloqueio e replanejar tudo."
    ],
    "correta": "B",
    "explicacao": "O capítulo destaca identificação precoce e ações para resolver impedimentos, incluindo solicitar ajuda externa e comunicar abertamente para intervenção rápida."
  },
  {
    "id": 163,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Ao observar um burndown que mostra trabalho restante consistentemente acima do previsto na metade da Sprint, o time deveria inicialmente:",
    "opcoes": [
      "A) Continuar o trabalho sem mudanças e confiar na velocidade histórica.",
      "B) Remover itens do Backlog de Produto para parecer que estão no caminho certo.",
      "C) Revisar o plano da Sprint, identificar desvios e considerar ajustes ou re-priorização com o Product Owner.",
      "D) Prolongar a Sprint para cumprir todo o trabalho sem comunicar stakeholders."
    ],
    "correta": "C",
    "explicacao": "O texto indica que burndown identifica desvios e permite intervenções rápidas, incluindo revisão do plano e ajuste de prioridades com o Product Owner."
  },
  {
    "id": 164,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Você é Scrum Master e precisa preparar uma atualização para stakeholders que não participam do dia a dia. O capítulo sugere que o relatório deve ser:",
    "opcoes": [
      "A) Extenso e técnico, descrevendo cada tarefa concluída em detalhe.",
      "B) Substituído por capturas do quadro de tarefas sem explicação.",
      "C) Somente com métricas de velocidade sem contexto adicional.",
      "D) Claro, conciso e focado em resultados, conquistas, desafios e próximos passos."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda atualizações regulares e significativas, claras e concisas, focadas em resultados e gestão de expectativas."
  },
  {
    "id": 165,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Em um time distribuído que usa várias ferramentas independentes, qual medida o capítulo considera mais eficaz para melhorar visibilidade do progresso?",
    "opcoes": [
      "A) Integrar as ferramentas para fornecer uma visão holística e melhorar eficiência do monitoramento.",
      "B) Manter todas as ferramentas separadas e pedir que cada membro atualize semanalmente.",
      "C) Eliminar ferramentas digitais e voltar a quadros físicos para uniformizar.",
      "D) Delegar toda a comunicação externa ao Product Owner."
    ],
    "correta": "A",
    "explicacao": "O texto aponta que integração de sistemas e ferramentas proporciona visão holística do progresso, melhorando o monitoramento."
  },
  {
    "id": 166,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Durante a Sprint, surge feedback do cliente que exige mudança de prioridade em um item já em desenvolvimento. O que o time, conforme o capítulo, deve fazer primeiro?",
    "opcoes": [
      "A) Ignorar o feedback até o final da Sprint para não alterar o planejamento.",
      "B) Comunicar imediatamente a mudança, avaliar impacto e ajustar prioridades com o Product Owner se necessário.",
      "C) Remover o Desenvolvedor responsável e realocar a tarefa a outro membro.",
      "D) Cancelar todas as reuniões previstas e redesenhar o roadmap do projeto."
    ],
    "correta": "B",
    "explicacao": "O capítulo recomenda prontidão para mudanças e comunicação clara das mudanças, avaliando impactos e ajustando prioridades com o Product Owner."
  },
  {
    "id": 167,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Após uma Sprint com vários pequenos impedimentos recorrentes, qual ação imediata alinha-se ao que o capítulo descreve como prática saudável?",
    "opcoes": [
      "A) Registrar os impedimentos e abordá-los somente após o término do projeto.",
      "B) Punir membros que repetidamente causaram impedimentos.",
      "C) Incluir itens de melhoria identificados na Retrospectiva e implementá-los nos próximos ciclos.",
      "D) Substituir o Product Owner por alguém com mais experiência."
    ],
    "correta": "C",
    "explicacao": "O capítulo aconselha realizar retrospectivas e implementar lições aprendidas ativamente nas Sprints seguintes para melhoria contínua."
  },
  {
    "id": 168,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Num projeto com várias disciplinas, o time relata confusão sobre como o trabalho de cada área contribui para o todo. Qual intervenção do Scrum Master é mais consistente com o capítulo?",
    "opcoes": [
      "A) Impor uma única forma de documentação técnica para todas as disciplinas.",
      "B) Reduzir o número de disciplinas envolvidas para simplificar o projeto.",
      "C) Separar as disciplinas em projetos independentes sem integração.",
      "D) Facilitar comunicação entre disciplinas e garantir que cada equipe entenda sua contribuição para o projeto."
    ],
    "correta": "D",
    "explicacao": "O material destaca a importância de facilitar comunicação entre disciplinas para que todos entendam como seu trabalho contribui ao projeto."
  },
  {
    "id": 169,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Um programa com várias equipes está cumprindo prazos, mas relatos indicam aumento de absenteísmo e turnover. Ao analisar o monitoramento do progresso, quais fatores combinados do capítulo devem ser considerados para diagnosticar a situação?",
    "opcoes": [
      "A) Indicadores de bem-estar, carga de trabalho e práticas de sustentabilidade além das métricas de progresso.",
      "B) Apenas as métricas de velocidade e burndown, porque refletem produtividade.",
      "C) Somente o roadmap e prazo do release, pois as equipes devem adaptar-se aos objetivos do cliente.",
      "D) Remover retrospectivas para que a equipe não discuta problemas pessoais que afetem o trabalho."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda monitorar bem-estar e sustentabilidade junto com métricas de progresso para entender impactos em absenteísmo e turnover."
  },
  {
    "id": 170,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K4",
    "pergunta": "Ao preparar relatórios periódicos para stakeholders executivos, quais elementos combinados, segundo o capítulo, tornam o relatório mais útil para tomada de decisão?",
    "opcoes": [
      "A) Lista completa de tarefas e detalhes técnicos sem contexto de negócio.",
      "B) Conquistas, desafios, indicadores relevantes alinhados a objetivos do projeto e recomendações claras.",
      "C) Somente gráficos de burndown sem interpretação ou ações propostas.",
      "D) Relatórios semanais longos para cada membro da equipe detalhando seu progresso individual."
    ],
    "correta": "B",
    "explicacao": "O texto indica que relatórios úteis combinam conquistas, desafios e métricas relevantes alinhadas a objetivos, facilitando decisões e gestão de expectativas."
  },
  {
    "id": 171,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K4",
    "pergunta": "Num cenário em que um impedimento técnico depende de terceiros, a solução exige realocação de recursos e ajuste de prioridades. Qual abordagem mais coerente com o capítulo equilibra resolução rápida e alinhamento com stakeholders?",
    "opcoes": [
      "A) Repriorizar imediatamente sem comunicar stakeholders para acelerar a resolução.",
      "B) Parar todo trabalho dependente até que o terceiro resolva, sem buscar alternativas internas.",
      "C) Identificar e comunicar o impedimento, envolver stakeholders e realocar recursos com transparência sobre impacto nas entregas.",
      "D) Ocultar o impedimento para evitar preocupações e manter a imagem de progresso."
    ],
    "correta": "C",
    "explicacao": "O capítulo enfatiza identificação precoce, comunicação transparente e estratégias que podem incluir realocação e solicitação de assistência externa."
  },
  {
    "id": 172,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K4",
    "pergunta": "Após uma sequência de Sprints bem-sucedidas, qual é o efeito combinado de comunicar e celebrar conquistas conforme o capítulo, e como isso deve influenciar as práticas de monitoramento?",
    "opcoes": [
      "A) A celebração deve ser privada e não documentada para evitar complacência.",
      "B) Focar apenas nas conquistas do Product Owner, deixando de reconhecer a equipe.",
      "C) Celebrar substitui a necessidade de analisar desempenho e métricas.",
      "D) Comunicar conquistas reforça moral e deve ser incorporado nos relatórios e nas retrospectivas para promover práticas positivas."
    ],
    "correta": "D",
    "explicacao": "O texto assinala que comunicar e celebrar reforça moral e deve alimentar aprendizado e reconhecimento, sendo integrado a relatórios e práticas de melhoria contínua."
  },
  {
    "id": 173,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K4",
    "pergunta": "Uma organização usa múltiplas ferramentas digitais desconectadas; quer melhorar monitoramento sem aumentar carga administrativa. Segundo o capítulo, qual análise e ação compõem a melhor resposta?",
    "opcoes": [
      "A) Analisar usabilidade e integração das ferramentas e implementar integração que ofereça dashboards unificados.",
      "B) Trocar todas as ferramentas por uma planilha compartilhada para centralizar informações.",
      "C) Manter ferramentas existentes e pedir mais relatórios manuais à equipe.",
      "D) Eliminar ferramentas e voltar a comunicações presenciais para reduzir complexidade."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda selecionar ferramentas por usabilidade e integração e integrar sistemas para uma visão holística com menos esforço administrativo."
  },
  {
    "id": 174,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Num time em que apenas o Scrum Master atualiza o quadro, gerando falta de propriedade, qual prática do capítulo deveria ser implementada primeiro?",
    "opcoes": [
      "A) Delegar a atualização exclusivamente ao Product Owner para centralizar informações.",
      "B) Habilitar e treinar a equipe para que todos monitorem e atualizem seu próprio trabalho.",
      "C) Proibir atualizações frequentes para manter o quadro estático durante a Sprint.",
      "D) Ter o gerente de projetos revisar e aprovar cada atualização."
    ],
    "correta": "B",
    "explicacao": "O material incentiva envolver toda a equipe e fornecer ferramentas e treinamento para que monitorem e comuniquem seu próprio progresso, reforçando responsabilidade compartilhada."
  },
  {
    "id": 175,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K1",
    "pergunta": "Segundo o capítulo, qual é o primeiro passo para manter o controlo em ambientes ágeis?",
    "opcoes": [
      "A) Delegar ao Product Owner a responsabilidade de controlar todas as tarefas.",
      "B) Escolher a ferramenta digital de gestão de projeto mais popular do mercado.",
      "C) Estabelecer processos claros e compreensíveis que sejam também adaptáveis.",
      "D) Implementar limites rígidos de trabalho em progresso sem exceções."
    ],
    "correta": "C",
    "explicacao": "O texto aponta que manter o controlo começa por definir processos claros e flexíveis, fornecendo base estruturada e capacidade de adaptação."
  },
  {
    "id": 176,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K2",
    "pergunta": "Qual afirmação descreve corretamente o papel das ferramentas de gestão e monitoramento em ambientes ágeis?",
    "opcoes": [
      "A) Ferramentas substituem a necessidade de revisão regular de trabalho e feedback de stakeholders.",
      "B) Ferramentas devem impor processos rígidos para evitar mudanças durante a Sprint.",
      "C) Ferramentas só são úteis se forem complexas e configuradas por especialistas externos.",
      "D) Ferramentas digitais permitem acompanhamento em tempo real, ajudando a identificar e resolver problemas rapidamente."
    ],
    "correta": "D",
    "explicacao": "O capítulo destaca que ferramentas digitais permitem rastreamento em tempo real e facilitam a identificação e resolução rápida de problemas."
  },
  {
    "id": 177,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K2",
    "pergunta": "Por que a comunicação efetiva é essencial para manter o controlo, segundo o capítulo?",
    "opcoes": [
      "A) Porque alinha a equipa e stakeholders com objetivos, progresso e mudanças, evitando surpresas.",
      "B) Porque garante que apenas o Product Owner entenda a visão do projeto.",
      "C) Porque elimina a necessidade de métricas e análise de dados.",
      "D) Porque permite adiar revisões regulares até o final do projeto."
    ],
    "correta": "A",
    "explicacao": "O texto afirma que comunicação clara mantém todos alinhados sobre objetivos, progresso e mudanças, evitando surpresas e mal-entendidos."
  },
  {
    "id": 178,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K2",
    "pergunta": "Qual é o principal propósito das revisões regulares de projeto mencionadas no capítulo?",
    "opcoes": [
      "A) Documentar todo o trabalho feito para auditoria futura.",
      "B) Permitir ajustes oportunos nas estratégias e no foco com base em feedback.",
      "C) Eliminar a necessidade de monitoramento pós-implementação.",
      "D) Aumentar a burocracia e os checkpoints formais entre equipas."
    ],
    "correta": "B",
    "explicacao": "O capítulo indica que revisões regulares permitem ajustes oportunos nas estratégias e foco, com base no desempenho e feedback."
  },
  {
    "id": 179,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K2",
    "pergunta": "Como o empoderamento e a autonomia da equipa contribuem para manter o controlo?",
    "opcoes": [
      "A) Fazendo com que a direção deixe de comunicar mudanças ao time.",
      "B) Substituindo a necessidade de métricas e revisões regulares.",
      "C) Aumentando o compromisso e a capacidade de a equipa tomar decisões e resolver problemas rapidamente.",
      "D) Garantindo que apenas o Product Owner tome decisões sobre processos."
    ],
    "correta": "C",
    "explicacao": "O texto refere que dar autonomia fortalece o compromisso da equipa e melhora a sua capacidade de manter o controlo diante de desafios."
  },
  {
    "id": 180,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K2",
    "pergunta": "Qual prática é recomendada para usar métricas na manutenção do controlo de um projeto ágil?",
    "opcoes": [
      "A) Evitar métricas porque podem reduzir a autonomia da equipa.",
      "B) Coletar o maior número possível de métricas, mesmo que não sejam analisadas regularmente.",
      "C) Usar apenas métricas financeiras para avaliar o desempenho da equipa.",
      "D) Selecionar métricas relevantes que ajudem a monitorar progresso, qualidade e eficiência."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda selecionar métricas relevantes para monitorizar progresso, qualidade e eficiência de forma objetiva."
  },
  {
    "id": 181,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Um time descreve trabalho caótico e membros assumem demasiado trabalho, esquecendo tarefas; o Product Owner sugere um gráfico de Gantt, os Desenvolvedores propõem um canal de comunicação, e o Scrum Master propõe um quadro Kanban com limites de WIP. Qual ferramenta, segundo o capítulo, é mais provável de ajudar o time a manter o controlo diário?",
    "opcoes": [
      "A) O quadro Kanban com limites de WIP e tíquetes bloqueadores, pois controla trabalho em progresso e dá visibilidade a impedimentos.",
      "B) O gráfico de Gantt, pois fornece visão de alto nível compreendida pela gestão.",
      "C) O canal dedicado para monitorar blocos e divisão de tarefas, pois é mais flexível.",
      "D) O quadro Scrum simples, sem limites de WIP, porque é mais fácil de entender."
    ],
    "correta": "A",
    "explicacao": "O capítulo destaca que um quadro Kanban com limites de WIP e tíquetes bloqueadores ajuda a controlar WIP e identificar impedimentos rapidamente."
  },
  {
    "id": 182,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Após implementar uma mudança no produto, a equipa observa efeitos inesperados na qualidade. Qual é a ação mais alinhada com o capítulo para manter o controlo após a mudança?",
    "opcoes": [
      "A) Reverter imediatamente a mudança sem análise para restaurar a estabilidade.",
      "B) Monitorar continuamente o impacto da mudança e ajustar conforme necessário com base nos dados.",
      "C) Notificar apenas o Product Owner e pedir que ele comunique aos stakeholders mais tarde.",
      "D) Esperar até a próxima retro para discutir o problema e só então agir."
    ],
    "correta": "B",
    "explicacao": "O capítulo recomenda monitoramento pós-implementação contínuo para avaliar impacto e fazer ajustes quando necessário."
  },
  {
    "id": 183,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Numa entrega, stakeholders ficaram surpreendidos por mudanças no escopo. Para reduzir surpresas e manter o controlo, o que a equipa deve priorizar?",
    "opcoes": [
      "A) Congelar o Backlog de Produto durante várias sprints para evitar mudanças.",
      "B) Aumentar a frequência das reuniões internas sem envolver stakeholders para acelerar decisões.",
      "C) Realizar revisões regulares que incluam status das sprints e feedback de stakeholders para permitir alinhamento e ajustes.",
      "D) Remover comunicação de mudanças formais e confiar apenas na Reunião Diária."
    ],
    "correta": "C",
    "explicacao": "O capítulo indica que revisões regulares com stakeholders ajudam a alinhar expectativas, reduzir surpresas e permitir ajustes oportunos."
  },
  {
    "id": 184,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "A equipa tem métricas coletadas, mas não consegue antecipar desvios no cronograma. Qual ação, conforme o capítulo, é mais eficaz para recuperar o controlo?",
    "opcoes": [
      "A) Parar a coleta de métricas e focar apenas na entrega de funcionalidades.",
      "B) Delegar a análise de dados exclusivamente ao Product Owner.",
      "C) Substituir a equipa por outra com mais experiência para evitar analisar dados.",
      "D) Analisar regularmente os dados das métricas para identificar tendências e prever possíveis desvios."
    ],
    "correta": "D",
    "explicacao": "O capítulo recomenda análise regular de dados para identificar tendências, prever desvios e tomar decisões informadas."
  },
  {
    "id": 185,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Uma equipa autônoma relata confusão sobre como proceder em certas tarefas, levando a retrabalho. Qual medida do capítulo melhor equilibra controlo e autonomia?",
    "opcoes": [
      "A) Definir processos claros e compreensíveis que sejam flexíveis o suficiente para adaptar quando necessário.",
      "B) Delegar todas as decisões ao Product Owner para reduzir dúvidas.",
      "C) Impor procedimentos rígidos detalhados que limitem a autonomia da equipa.",
      "D) Eliminar processos formais e confiar apenas na iniciativa individual dos membros."
    ],
    "correta": "A",
    "explicacao": "O capítulo defende processos que sejam ao mesmo tempo estruturados e adaptáveis, proporcionando base e flexibilidade para equipas autônomas."
  },
  {
    "id": 186,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K4",
    "pergunta": "Numa organização que lançou mudanças em várias equipas, surgiram problemas: métricas inconsistentes entre equipas, comunicação insuficiente com stakeholders e falta de acompanhamento pós-implementação. Analise as ações abaixo; qual combinação é a mais adequada para recuperar e manter o controlo, segundo o capítulo?",
    "opcoes": [
      "A) Exigir que cada equipa utilize a sua métrica preferida, deixando a comunicação informal para reduzir burocracia.",
      "B) Estabelecer processos claros e adaptáveis, alinhar métricas relevantes entre equipas, comunicar mudanças de forma clara e monitorar pós-implementação para ajustar conforme o desempenho.",
      "C) Centralizar todas as decisões em gestão para unificar abordagens, reduzindo autonomia das equipas.",
      "D) Cancelar revisões regulares e concentrar-se apenas em acelerar entregas para recuperar prazos."
    ],
    "correta": "B",
    "explicacao": "O capítulo recomenda combinar processos claros/adaptáveis, seleção de métricas relevantes, comunicação clara de mudanças e monitoramento pós-implementação para manter o controlo."
  },
  {
    "id": 187,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K1",
    "pergunta": "Quais frameworks são mencionados no material como opções para escalar práticas ágeis?",
    "opcoes": [
      "A) Waterfall e SAFe",
      "B) Scrum e Kanban",
      "C) SAFe, LeSS e Scrum@Scale",
      "D) DevOps e LeSS"
    ],
    "correta": "C",
    "explicacao": "O texto cita explicitamente SAFe, LeSS e Scrum@Scale como frameworks para escalamento ágil."
  },
  {
    "id": 188,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K2",
    "pergunta": "Segundo o capítulo, por que a flexibilidade é crucial ao escalar projetos ágeis?",
    "opcoes": [
      "A) Porque garante processos rígidos e repetíveis entre todas as equipas.",
      "B) Porque exige documentação detalhada para cada alteração.",
      "C) Porque reduz a necessidade de comunicação entre equipas.",
      "D) Porque permite adaptar-se rapidamente às mudanças sem perder o foco na entrega de valor."
    ],
    "correta": "D",
    "explicacao": "O capítulo destaca que a flexibilidade permite adaptação rápida às mudanças mantendo o foco nos objetivos e na entrega de valor."
  },
  {
    "id": 189,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual é a posição correta sobre a utilização de frameworks de escalamento, segundo o material?",
    "opcoes": [
      "A) Frameworks fornecem uma base, devendo ser personalizados para as necessidades do projeto e da organização.",
      "B) A personalização só é adequada em projetos pequenos.",
      "C) Frameworks devem ser aplicados estritamente sem alterações para manter coerência.",
      "D) Personalizar um framework torna-o incompatível com práticas ágeis."
    ],
    "correta": "A",
    "explicacao": "O texto indica que frameworks fornecem uma base sólida, mas devem ser adaptados às necessidades específicas para maximizar eficácia."
  },
  {
    "id": 190,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K2",
    "pergunta": "Qual mecanismo o capítulo recomenda para coordenar trabalho entre múltiplas equipas em projetos escalados?",
    "opcoes": [
      "A) Manter backlogs isolados e comunicação informal entre equipas.",
      "B) Estabelecer mecanismos de integração e pontos de sincronização regulares.",
      "C) Centralizar toda a decisão técnica num único gestor para uniformizar o trabalho.",
      "D) Evitar sincronizações regulares para não interromper o fluxo de trabalho."
    ],
    "correta": "B",
    "explicacao": "O capítulo afirma que coordenação exige mecanismos de integração e sincronizações regulares para alinhar equipas."
  },
  {
    "id": 191,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K2",
    "pergunta": "Independente do framework escolhido, qual deve ser a ênfase para manter equipas alinhadas ao escalar?",
    "opcoes": [
      "A) Reduzir reuniões para aumentar o tempo de desenvolvimento individual.",
      "B) Priorizar auditorias formais para garantir conformidade com o framework.",
      "C) Manter foco na comunicação e colaboração eficazes, usando ferramentas e facilitação.",
      "D) Substituir workshops por documentação extensa."
    ],
    "correta": "C",
    "explicacao": "O texto destaca que, independentemente do framework, a comunicação e colaboração eficazes são essenciais e podem ser apoiadas por ferramentas e facilitação."
  },
  {
    "id": 192,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Numa organização com um único Backlog de Produto e vários times Scrum, quem está na melhor posição para coordenar os esforços e evitar duplicação?",
    "opcoes": [
      "A) Os Desenvolvedores, porque são autogerenciados e devem coordenar-se entre si.",
      "B) O gerente de projetos externo, porque tem visão global do cronograma.",
      "C) Os Scrum Masters, porque têm tempo para coordenar entre si.",
      "D) O Product Owner, porque coordena o Backlog de Produto e a visão comum."
    ],
    "correta": "D",
    "explicacao": "Com um único Backlog de Produto, o Product Owner está melhor posicionado para coordenar prioridades e evitar duplicações entre equipas."
  },
  {
    "id": 193,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Uma empresa escalou várias equipas, mas a cultura ágil está a enfraquecer e há falta de competências em algumas equipas. Qual a melhor ação imediata para o Scrum Master promover a agilidade?",
    "opcoes": [
      "A) Investir em capacitação e suporte contínuo para as equipas, com treinamentos e coaching.",
      "B) Centralizar decisões de priorização na diretoria para acelerar a entrega.",
      "C) Impor cerimónias adicionais para todas as equipas.",
      "D) Reduzir o número de equipas para simplificar a coordenação."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda capacitar equipas com treinamento e suporte contínuo para manter a agilidade em larga escala."
  },
  {
    "id": 194,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Várias equipas estão a trabalhar em componentes relacionados, mas cada equipa interpreta os objetivos de forma diferente. Qual é a melhor prática sugerida no capítulo para realinhar todos?",
    "opcoes": [
      "A) Exigir que cada equipa atualize o seu próprio roadmap independentemente.",
      "B) Organizar workshops e reuniões de alinhamento estratégico para garantir visão partilhada.",
      "C) Criar um documento técnico detalhado que descreva todas as interfaces.",
      "D) Concentrar decisões de visão apenas no comité executivo."
    ],
    "correta": "B",
    "explicacao": "O texto recomenda workshops e reuniões de alinhamento estratégico para assegurar que todas as equipas compartilhem a visão e os objetivos."
  },
  {
    "id": 195,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Durante um escalamento, por que realizar retrospectivas em nível de programa reúne valor entre equipas?",
    "opcoes": [
      "A) Porque formaliza hierarquias entre equipas para melhor controlo.",
      "B) Porque substitui as retrospectivas das equipas, tornando-as desnecessárias.",
      "C) Porque permite identificar problemas sistémicos e partilhar aprendizagens entre múltiplas equipas.",
      "D) Porque serve apenas para documentar métricas de desempenho."
    ],
    "correta": "C",
    "explicacao": "O capítulo indica que retrospectivas em nível de programa oferecem insights valiosos, permitindo identificar problemas sistémicos e partilhar aprendizados entre equipas."
  },
  {
    "id": 196,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Numa iniciativa ágil em escala, a equipa de direção identifica desvios no progresso e necessidade de otimizar entrega de valor. Qual é a melhor abordagem descrita no capítulo?",
    "opcoes": [
      "A) Manter o plano original e aguardar o fim do programa para avaliar resultados.",
      "B) Suspender entregas incrementais até todas as dependências serem resolvidas.",
      "C) Aumentar a fiscalização individual dos Desenvolvedores para melhorar a produtividade.",
      "D) Monitorar continuamente, avaliar desempenho e ajustar recursos, prazos ou estratégias conforme necessário."
    ],
    "correta": "D",
    "explicacao": "O capítulo enfatiza monitoramento e avaliação contínuos e a flexibilidade para fazer ajustes rápidos visando otimizar a entrega de valor."
  },
  {
    "id": 197,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K4",
    "pergunta": "Uma organização adotou SAFe, mas enfrenta problemas: equipas distribuídas usam ferramentas diferentes, há perda de cultura ágil e baixa visibilidade de dependências. Qual combinação de ações, coerente com o capítulo, melhor endereça esses fatores?",
    "opcoes": [
      "A) Personalizar o framework às necessidades reais, investir em capacitação e estabelecer práticas e ferramentas comuns para comunicação e sincronização.",
      "B) Diminuir a autonomia das equipas e centralizar decisões técnicas para aumentar previsibilidade.",
      "C) Aplicar o SAFe sem alterações, impondo ferramentas padronizadas imediatamente.",
      "D) Abandonar frameworks de escalamento e voltar a gestão tradicional Waterfall."
    ],
    "correta": "A",
    "explicacao": "O capítulo recomenda personalizar frameworks, capacitar equipas e focar em comunicação/colaboração para preservar agilidade em escala."
  },
  {
    "id": 198,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K4",
    "pergunta": "Num programa ágil escalado as retrospectivas em nível de programa mostram impedimentos recorrentes entre equipas. Além de documentar, qual é a ação analítica e prática mais alinhada ao capítulo para resolver o problema?",
    "opcoes": [
      "A) Submeter relatórios mensais detalhados à diretoria para decisão posterior.",
      "B) Usar monitoramento e avaliação para identificar causas, ajustar alocação de recursos e promover melhorias compartilhadas por meio de retrospectivas interequipes.",
      "C) Criar indicadores rigorosos de desempenho para penalizar equipes com impedimentos.",
      "D) Aumentar o número de reuniões de status para microgerir dependências."
    ],
    "correta": "B",
    "explicacao": "O capítulo sugere monitoramento e avaliação contínuos, realocação de recursos e retrospectivas em nível de programa para implementar correções e melhorias partilhadas."
  },
  {
    "id": 199,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K1",
    "pergunta": "O que significa dizer que o Agile é versátil?",
    "opcoes": [
      "A) Que dispensa qualquer forma de planeamento prévio.",
      "B) Que só funciona bem em projetos de tecnologia da informação.",
      "C) Que pode ser adaptado a vários tipos de projetos, como software, marketing e eventos.",
      "D) Que exige sempre a mesma estrutura de equipa e ferramentas."
    ],
    "correta": "C",
    "explicacao": "O texto afirma que Agile adapta-se a uma variedade de projetos e pode ser personalizado conforme necessidades específicas."
  },
  {
    "id": 200,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K2",
    "pergunta": "Qual combinação melhor descreve os focos centrais do Agile independentemente do tipo de projeto?",
    "opcoes": [
      "A) Delegação total das decisões ao gestor de projeto sem envolvimento dos stakeholders.",
      "B) Documentação extensa, planeamento fixo e hierarquia de decisões.",
      "C) Redução de custos a qualquer preço e eliminação de feedback do cliente.",
      "D) Entrega de valor contínuo, colaboração estreita e capacidade de resposta a mudanças."
    ],
    "correta": "D",
    "explicacao": "O excerto destaca entrega contínua de valor, colaboração e resposta a mudanças como elementos centrais do Agile."
  },
  {
    "id": 201,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K2",
    "pergunta": "Como as iterações curtas e o feedback contínuo ajudam um projecto, segundo o capítulo?",
    "opcoes": [
      "A) Permitindo adaptação rápida e ajustando estratégias para manter alinhamento com necessidades dos usuários.",
      "B) Garantindo que o escopo inicial nunca muda.",
      "C) Eliminando a necessidade de qualquer comunicação com utilizadores.",
      "D) Substituindo testes e validação por opiniões internas."
    ],
    "correta": "A",
    "explicacao": "O texto indica que sprints e feedback contínuo facilitam adaptação rápida e alinhamento com objetivos e necessidades dos usuários."
  },
  {
    "id": 202,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K2",
    "pergunta": "Qual vantagem do Agile em projetos de desenvolvimento de software é destacada no capítulo?",
    "opcoes": [
      "A) Eliminação da necessidade de testes após cada entrega.",
      "B) Alta adaptabilidade para acomodar mudanças de requisitos e prioridades.",
      "C) Substituição completa dos clientes por decisões internas do time.",
      "D) Redução imediata de custos sem impacto na qualidade."
    ],
    "correta": "B",
    "explicacao": "O excerto enfatiza a capacidade do Agile de lidar com mudanças de requisitos e prioridades no desenvolvimento de software."
  },
  {
    "id": 203,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K2",
    "pergunta": "Em que ponto o Agile beneficia equipas de marketing, segundo o texto?",
    "opcoes": [
      "A) Ao impor campanhas com escopo fixo que não mudam durante a execução.",
      "B) Ao eliminar a necessidade de colaboração com vendas e produto.",
      "C) Ao permitir planeamento flexível e ajuste de campanhas em tempo real com base em dados.",
      "D) Ao substituir métricas por opiniões de marketing."
    ],
    "correta": "C",
    "explicacao": "O capítulo refere-se a planeamento adaptativo e campanhas orientadas a dados como benefícios do Agile em marketing."
  },
  {
    "id": 204,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Uma equipa de marketing descobre uma tendência repentina durante uma campanha em curso. De acordo com os princípios do capítulo, qual a melhor ação a tomar?",
    "opcoes": [
      "A) Parar a campanha imediatamente até elaborar um plano extensivo de longo prazo.",
      "B) Ignorar a tendência para não desviar o plano aprovado inicialmente.",
      "C) Delegar a decisão apenas à direção e aguardar aprovação formal.",
      "D) Usar ciclos curtos e dados em tempo real para ajustar a campanha e testar alterações rapidamente."
    ],
    "correta": "D",
    "explicacao": "O texto defende planeamento flexível e ajustes em tempo real com base em dados e feedback em ciclos curtos."
  },
  {
    "id": 205,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Numa iniciativa de P&D com muitos conceitos a explorar e recursos limitados, qual prática ágil descrita no capítulo ajuda a gerir recursos eficientemente?",
    "opcoes": [
      "A) Usar iterações para identificar rapidamente conceitos viáveis e descartar os menos promissores.",
      "B) Investir igualmente em todas as ideias até ao fim do projecto.",
      "C) Evitar feedback dos stakeholders até que o produto esteja acabado.",
      "D) Substituir prototipagem por especificações detalhadas antes de testar hipóteses."
    ],
    "correta": "A",
    "explicacao": "O capítulo refere que a natureza iterativa do Agile ajuda a identificar conceitos viáveis e otimizar alocação de recursos em P&D."
  },
  {
    "id": 206,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Uma organização com fortes requisitos regulamentares considera usar Agile. Segundo o capítulo, qual a postura mais adequada?",
    "opcoes": [
      "A) Rejeitar qualquer prática ágil porque regulações impedem mudança.",
      "B) Fazer uma escolha consciente e adaptar práticas ágeis conforme as necessidades e restrições regulamentares.",
      "C) Usar apenas metodologias tradicionais em todos os projectos.",
      "D) Aplicar Agile sem qualquer alteração para manter pureza do framework."
    ],
    "correta": "B",
    "explicacao": "O texto alerta que projectos com regulamentos estritos podem exigir adaptações e que a escolha do Agile deve ser consciente."
  },
  {
    "id": 207,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Antes de adotar Agile numa empresa que resiste à mudança, o que o capítulo recomenda avaliar primeiro?",
    "opcoes": [
      "A) Impor imediatamente sprints e métricas sem consultar a equipa.",
      "B) A necessidade de multiplicar cargos de gestão para controlar a transformação.",
      "C) A cultura organizacional e a capacidade da equipa de se adaptar a uma abordagem iterativa.",
      "D) Substituir toda a equipa por profissionais com experiência prévia em Agile."
    ],
    "correta": "C",
    "explicacao": "O excerto destaca a importância da cultura organizacional e da capacidade de adaptação para o sucesso do Agile."
  },
  {
    "id": 208,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K4",
    "pergunta": "Uma grande obra governamental tem requisitos regulamentares rígidos, múltiplas partes interessadas e necessidade de feedback do utilizador. Qual a melhor avaliação sobre a adequação do Agile?",
    "opcoes": [
      "A) Agile é totalmente inadequado e não deve ser considerado em nenhum momento do projecto.",
      "B) Substituir todos os processos existentes por práticas ágeis sem ajustar requisitos regulamentares.",
      "C) Deve aplicar-se Agile apenas na fase final quando todos os requisitos estiverem definidos.",
      "D) Agile pode ser aplicado, mas exige adaptações conscientes para cumprir regulamentos, coordenar stakeholders e preservar entregas incrementais."
    ],
    "correta": "D",
    "explicacao": "O capítulo indica que, apesar das limitações em escopos rígidos, o Agile pode ser usado com adaptações e escolha consciente conforme o contexto."
  },
  {
    "id": 209,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K4",
    "pergunta": "Uma organização deseja maior previsibilidade e flexibilidade nos projetos. Segundo o texto, como o Agile atende a ambas as necessidades?",
    "opcoes": [
      "A) Por meio de entregas incrementais e ciclos iterativos que permitem adaptar prioridades e aumentar previsibilidade do progresso.",
      "B) Ao eliminar planeamento, confiando apenas em improvisação.",
      "C) Ao fixar um escopo rígido e impedir alterações durante a execução.",
      "D) Ao centralizar todas as decisões no departamento executivo para maior controlo."
    ],
    "correta": "A",
    "explicacao": "O excerto destaca que ciclos iterativos e entregas incrementais dão capacidade de adaptação e melhor previsibilidade do progresso."
  },
  {
    "id": 210,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Uma equipa vai organizar um evento e quer aplicar práticas do Agile para reduzir risco e melhorar alinhamento com os participantes. Qual prática do capítulo é mais indicada?",
    "opcoes": [
      "A) Escrever um plano único e não recolher qualquer feedback durante a execução.",
      "B) Realizar ciclos curtos de trabalho com feedback dos participantes para ajustar o evento iterativamente.",
      "C) Delegar todo o trabalho a um consultor externo sem envolvimento da equipa interna.",
      "D) Proibir alterações depois de aprovar o orçamento inicial."
    ],
    "correta": "B",
    "explicacao": "O capítulo sugere que iterações curtas e feedback contínuo permitem ajustar estratégias e manter alinhamento com necessidades dos usuários, aplicável a eventos."
  },
  {
    "id": 211,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K1",
    "pergunta": "Ao selecionar ferramentas para apoiar a administração ágil, quais características o material destaca como essenciais?",
    "opcoes": [
      "A) Alta customização visual, relatórios predefinidos e dependência de planilhas locais.",
      "B) Preço baixo, marca conhecida e compatibilidade apenas com Windows.",
      "C) Facilidade de uso, capacidade de integração com outras ferramentas e suporte ao fluxo de trabalho ágil.",
      "D) Exclusivo foco em controle de versão, sem integração com comunicação."
    ],
    "correta": "C",
    "explicacao": "O material afirma que facilidade de uso, integração e suporte ao fluxo de trabalho ágil são critérios importantes na seleção de ferramentas."
  },
  {
    "id": 212,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K2",
    "pergunta": "Qual é o principal benefício da integração entre uma ferramenta de gestão de projetos e um sistema de controlo de versões, segundo o texto?",
    "opcoes": [
      "A) Permitir que o Product Owner edite diretamente o código-fonte.",
      "B) Garantir que todas as mensagens da equipa sejam arquivadas automaticamente em relatórios mensais.",
      "C) Eliminar a necessidade de reuniões de planning e revisão.",
      "D) Automatizar a atualização de status de tarefas, mantendo o fluxo de informações suave."
    ],
    "correta": "D",
    "explicacao": "O excerto destaca que a integração entre controlo de versão e gestão de projetos pode automatizar atualizações de status e melhorar o fluxo de informação."
  },
  {
    "id": 213,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K2",
    "pergunta": "Ao integrar uma ferramenta de gestão de tarefas com plataformas de comunicação (por exemplo Slack ou Teams), qual resultado imediato é apontado pelo material?",
    "opcoes": [
      "A) Notificações e atualizações de tarefas são compartilhadas instantaneamente, mantendo a equipa informada.",
      "B) As decisões de priorização do Backlog passam a ser automáticas.",
      "C) A equipa deixa de precisar de um Scrum Master para remover impedimentos.",
      "D) As estimativas em story points são recalculadas automaticamente."
    ],
    "correta": "A",
    "explicacao": "O texto menciona explicitamente que integrar com Slack/Teams permite compartilhar notificações e manter a equipa informada."
  },
  {
    "id": 214,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K2",
    "pergunta": "Qual funcionalidade de ferramentas ágeis o material associa diretamente à promoção de colaboração e transparência, especialmente para equipas remotas?",
    "opcoes": [
      "A) Relatórios financeiros complexos gerados mensalmente.",
      "B) Quadros Kanban digitais e painéis personalizáveis com visibilidade em tempo real.",
      "C) Proteção por senha de todas as tarefas, proibindo comentários externos.",
      "D) Exportação obrigatória para documentos Word antes de qualquer alteração."
    ],
    "correta": "B",
    "explicacao": "O excerto indica que quadros Kanban digitais e painéis personalizáveis facilitam colaboração, transparência e visibilidade em tempo real."
  },
  {
    "id": 215,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K3",
    "pergunta": "Uma equipa vai introduzir uma nova ferramenta ágil que se integra com várias aplicações existentes. Qual é a melhor abordagem inicial segundo o capítulo?",
    "opcoes": [
      "A) Implementar a integração para todos os fluxos e só depois treinar a equipa.",
      "B) Substituir imediatamente todas as ferramentas antigas por uma única solução monolítica, sem pilotos.",
      "C) Escolher ferramentas com integrações nativas ou APIs robustas e gerir a mudança com capacitação e comunicação clara.",
      "D) Solicitar aos Desenvolvedores que decidam sozinhos se aceitam a ferramenta."
    ],
    "correta": "C",
    "explicacao": "O texto recomenda escolher ferramentas com integração nativa/APIs e enfatiza a gestão de mudanças com capacitação e comunicação para adoção bem-sucedida."
  },
  {
    "id": 216,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K3",
    "pergunta": "A equipa deseja automatizar atualizações de status a partir do repositório de código para o seu Jira. Qual ação, conforme o material, é a mais indicada?",
    "opcoes": [
      "A) Enviar um relatório diário por e‑mail com todas as alterações de código.",
      "B) Exigir que cada Desenvolvedor atualize manualmente o estado no Jira ao fazer commit.",
      "C) Parar de usar o controlo de versão e confiar apenas no quadro Scrum para rastrear progresso.",
      "D) Configurar integração entre o sistema de controlo de versão e a ferramenta de gestão para automatizar atualizações."
    ],
    "correta": "D",
    "explicacao": "O excerto salienta que integrar sistemas de controlo de versão com gestão de projetos pode automatizar atualizações de status e reduzir erros manuais."
  },
  {
    "id": 217,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K3",
    "pergunta": "Durante a integração de várias ferramentas, a equipa identifica preocupações de segurança e conformidade. Qual é a resposta mais alinhada com o capítulo?",
    "opcoes": [
      "A) Escolher fornecedores confiáveis e configurar permissões adequadas antes da adoção ampla.",
      "B) Ignorar configurações de segurança e ajustar apenas se ocorrer um incidente.",
      "C) Armazenar todos os dados sensíveis localmente em planilhas não partilhadas.",
      "D) Desligar todas as integrações para evitar riscos, mesmo que prejudique o fluxo de trabalho."
    ],
    "correta": "A",
    "explicacao": "O texto destaca a importância de considerar segurança e conformidade, escolhendo fornecedores confiáveis e configurando permissões apropriadas."
  },
  {
    "id": 218,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K3",
    "pergunta": "Uma ferramenta ágil começa a oferecer funcionalidades de IA para sugerir otimizações de fluxo e prever riscos. Como a equipa deve proceder, segundo o material?",
    "opcoes": [
      "A) Desligar imediatamente a funcionalidade de IA por receio de previsões incorretas.",
      "B) Permanecer aberta a novas tecnologias e adaptar processos para incorporar funcionalidades de IA que agreguem valor.",
      "C) Substituir o Product Owner pela IA para priorizar automaticamente o Backlog de Produto.",
      "D) Aguardar pelo término de todos os Sprints em curso antes de avaliar qualquer funcionalidade nova."
    ],
    "correta": "B",
    "explicacao": "O excerto recomenda permanecer aberto a novas tecnologias e adaptar processos para aproveitar IA e automação que melhorem eficiência e inovação."
  },
  {
    "id": 219,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K4",
    "pergunta": "Numa grande organização, várias equipas querem diferentes ferramentas; a direção deseja alinhar sistemas para melhorar visibilidade sem perder agilidade. Qual abordagem equilibra melhor integração, segurança e adoção, considerando o capítulo?",
    "opcoes": [
      "A) Impor uma única ferramenta corporativa sem piloto, centralizando todas as integrações e políticas.",
      "B) Permitir que cada equipa escolha livremente sem governança, para preservar autonomia.",
      "C) Selecionar ferramentas com integrações nativas e APIs, realizar pilotos graduais, treinar equipas e aplicar políticas de segurança e permissões.",
      "D) Construir internamente uma plataforma monolítica personalizada e migrar todas as equipas de uma vez."
    ],
    "correta": "C",
    "explicacao": "O texto aponta para escolher ferramentas integráveis, fazer adoção gradual com capacitação e gerir segurança e permissões para garantir sucesso e preservação da agilidade."
  },
  {
    "id": 220,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K2",
    "pergunta": "Segundo o capítulo, qual risco principal pode surgir ao integrar muitas ferramentas sem atenção à configuração e gestão de mudanças?",
    "opcoes": [
      "A) Redução do volume de comunicação entre stakeholders.",
      "B) Melhoria automática da qualidade do produto sem mais esforço.",
      "C) Eliminação imediata de todos os impedimentos técnicos.",
      "D) Aumento da complexidade da integração e baixa adoção pela equipa."
    ],
    "correta": "D",
    "explicacao": "O excerto alerta que a integração pode introduzir complexidade e que gestão de mudanças, capacitação e escolhas cuidadosas são necessárias para evitar baixa adoção."
  },
  {
    "id": 221,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K1",
    "pergunta": "Qual é a abordagem básica sobre a qual se fundamenta a implementação do Agile?",
    "opcoes": [
      "A) Abordagem iterativa e incremental com ciclos curtos (sprints).",
      "B) Abordagem preditiva e linear com longo planejamento inicial.",
      "C) Abordagem única de entrega final sem feedback do cliente.",
      "D) Abordagem baseada exclusivamente em documentação detalhada."
    ],
    "correta": "A",
    "explicacao": "O texto diz que Agile baseia-se em abordagem iterativa e incremental com sprints."
  },
  {
    "id": 222,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Por que a construção de uma cultura de colaboração e flexibilidade é importante na transição para o Agile?",
    "opcoes": [
      "A) Porque elimina a necessidade de gestores e stakeholders.",
      "B) Porque envolve comunicação aberta, colaboração e exige comprometimento de gestão e stakeholders.",
      "C) Porque garante que apenas a equipe de desenvolvimento tome todas as decisões.",
      "D) Porque substitui completamente processos formais por improvisação."
    ],
    "correta": "B",
    "explicacao": "O texto destaca comunicação aberta, colaboração e envolvimento da gestão e stakeholders."
  },
  {
    "id": 223,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Qual é o foco central do Agile segundo o texto?",
    "opcoes": [
      "A) Redução de custos a qualquer preço.",
      "B) Aumento do número de funcionalidades entregue sem avaliação.",
      "C) Foco no cliente e entrega contínua de valor com adaptação pelo feedback.",
      "D) Documentação exaustiva antes de qualquer entrega."
    ],
    "correta": "C",
    "explicacao": "O texto afirma que Agile coloca o cliente no centro e enfatiza entrega contínua de valor com feedback."
  },
  {
    "id": 224,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "O que envolve a avaliação da prontidão organizacional antes de implementar o Agile?",
    "opcoes": [
      "A) Medir apenas a velocidade das equipes atuais.",
      "B) Contratar consultores externos sem consultar a equipe.",
      "C) Substituir todas as ferramentas existentes imediatamente.",
      "D) Verificar disposição para adotar mentalidade ágil e capacidade de ajustar processos e estruturas."
    ],
    "correta": "D",
    "explicacao": "O texto indica avaliar a disposição para adotar mentalidade ágil e ajustar processos e estruturas."
  },
  {
    "id": 225,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Qual característica é essencial em equipes multidisciplinares para o sucesso do Agile?",
    "opcoes": [
      "A) Autonomia, habilidades necessárias para entregar o produto e capacidade de tomar decisões rápidas.",
      "B) Dependência contínua de outras equipes para tomar decisões.",
      "C) Foco exclusivo em tarefas administrativas.",
      "D) Rotatividade constante de membros sem treinamento."
    ],
    "correta": "A",
    "explicacao": "O texto descreve equipes multidisciplinares como autônomas, com habilidades e capazes de decidir rapidamente."
  },
  {
    "id": 226,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Por que investir em treinamento e desenvolvimento de competências é recomendado antes da implementação do Agile?",
    "opcoes": [
      "A) Para reduzir a comunicação entre membros da equipe.",
      "B) Para garantir que a equipe compreenda princípios ágeis e esteja alinhada e capacitada.",
      "C) Porque substitui a necessidade de retrospectives.",
      "D) Para acelerar entregas sem alterar práticas de trabalho."
    ],
    "correta": "B",
    "explicacao": "O texto diz que treinamento ajuda a equipe a compreender princípios e práticas ágeis e ficar alinhada."
  },
  {
    "id": 227,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Qual benefício a adoção gradual do Agile (por projetos piloto ou equipes específicas) traz à organização?",
    "opcoes": [
      "A) Elimina a necessidade de feedback e ajustes posteriores.",
      "B) Assegura que todos os processos sejam trocados imediatamente.",
      "C) Permite aprender, adaptar-se e identificar desafios antes de ampliar a implementação.",
      "D) Garante que não ocorra nenhuma resistência interna."
    ],
    "correta": "C",
    "explicacao": "O texto afirma que adoção gradual ajuda a aprender, adaptar-se e identificar desafios."
  },
  {
    "id": 228,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Em uma equipe que enfrenta forte resistência à mudança, qual combinação de ações o texto recomenda para abordar esse desafio?",
    "opcoes": [
      "A) Impor mudanças rapidamente sem comunicação para acelerar a adoção.",
      "B) Aguardar que a resistência desapareça sozinha sem intervenção.",
      "C) Substituir a equipe por novos membros sem explicar a mudança.",
      "D) Liderança eficaz, comunicação aberta e demonstração do valor do Agile por resultados tangíveis."
    ],
    "correta": "D",
    "explicacao": "O texto indica liderança, comunicação e demonstração de valor como forma de abordar resistência."
  },
  {
    "id": 229,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Uma organização tem processos rígidos e complexos. Segundo o texto, qual é a chave para adaptar esses processos ao Agile?",
    "opcoes": [
      "A) Ter uma mentalidade flexível e estar disposto a experimentar e adaptar processos conforme necessário.",
      "B) Manter os processos intactos e apenas mudar a terminologia.",
      "C) Eliminar qualquer tipo de controle de qualidade para ganhar velocidade.",
      "D) Adoção imediata de um framework de escala sem ajustes locais."
    ],
    "correta": "A",
    "explicacao": "O texto destaca a importância de mentalidade flexível e disposição para experimentar e adaptar processos."
  },
  {
    "id": 230,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Após um sprint com problemas identificados pela equipe, qual prática indicada no texto deve ser usada para promover ajustes oportunos?",
    "opcoes": [
      "A) Ignorar o feedback e manter o plano original.",
      "B) Realizar retrospectivas regulares e estabelecer mecanismos de feedback contínuo.",
      "C) Aumentar a duração dos sprints sem discutir as causas.",
      "D) Trocar todo o time de uma só vez."
    ],
    "correta": "B",
    "explicacao": "O texto recomenda feedback contínuo e retrospectivas regulares para ajustes oportunos."
  },
  {
    "id": 231,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Quais práticas, mencionadas no texto, fazem parte da garantia da qualidade e métricas ágeis?",
    "opcoes": [
      "A) Medição exclusiva de horas trabalhadas por desenvolvedor.",
      "B) Apenas relatórios financeiros mensais.",
      "C) Revisões contínuas de código, testes automatizados e monitoramento do progresso em relação aos objetivos.",
      "D) Documentação extensiva sem execução de testes."
    ],
    "correta": "C",
    "explicacao": "O texto cita revisões de código, testes automatizados e monitoramento do progresso como práticas de QA e métricas."
  },
  {
    "id": 232,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Para sustentar a implementação do Agile, o texto recomenda priorizar qual dos seguintes pontos?",
    "opcoes": [
      "A) Centralização de decisões apenas na liderança sem participação da equipe.",
      "B) Adoção estrita de um único processo sem espaço para melhoria.",
      "C) Foco exclusivo na velocidade de entrega sem aprendizado.",
      "D) Cultura ágil contínua que prioriza melhoria contínua, aprendizagem e adaptação com compromisso de todos."
    ],
    "correta": "D",
    "explicacao": "O texto destaca a manutenção de cultura ágil contínua com melhoria, aprendizagem e compromisso de todos."
  },
  {
    "id": 233,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Quais frameworks o texto menciona como orientação valiosa para escalar práticas ágeis em grande escala?",
    "opcoes": [
      "A) SAFe, LeSS e Scrum@Scale.",
      "B) Waterfall, PRINCE2 e ISO 9001.",
      "C) DevOps, Kanban e XP (e nada mais).",
      "D) Lean Manufacturing exclusivamente."
    ],
    "correta": "A",
    "explicacao": "O texto cita explicitamente SAFe, LeSS e Scrum@Scale como frameworks para escalar o Agile."
  },
  {
    "id": 234,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Que ações o texto recomenda para promover aprendizado e evolução contínuos na implementação do Agile?",
    "opcoes": [
      "A) Evitar qualquer treinamento para economizar custos.",
      "B) Investir em treinamento contínuo, compartilhamento de conhecimento e desenvolvimento profissional.",
      "C) Restringir o compartilhamento de conhecimento a um único indivíduo.",
      "D) Parar avaliações após a primeira implementação."
    ],
    "correta": "B",
    "explicacao": "O texto recomenda treinamento contínuo, compartilhamento de conhecimento e desenvolvimento profissional."
  },
  {
    "id": 235,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K4",
    "pergunta": "Uma empresa decide implementar o Agile simultaneamente em toda a organização sem projetos piloto. Analisando o texto, qual é o risco mais provável dessa abordagem?",
    "opcoes": [
      "A) Maior facilidade em identificar desafios e adaptar abordagens rapidamente.",
      "B) Perda da necessidade de envolvimento dos stakeholders.",
      "C) Dificuldade em aprender e adaptar-se antes de uma implementação mais ampla, aumentando problemas não previstos.",
      "D) Garantia imediata de sucesso sem necessidade de liderança."
    ],
    "correta": "C",
    "explicacao": "O texto indica que a adoção gradual ajuda a aprender e ajustar; pular pilotos pode impedir esse aprendizado."
  },
  {
    "id": 236,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K4",
    "pergunta": "Uma organização mede progresso do Agile apenas por horas trabalhadas dos desenvolvedores. Por que, segundo o texto, essa métrica é inadequada?",
    "opcoes": [
      "A) Porque horas trabalhadas medem perfeitamente a entrega de valor e qualidade.",
      "B) Porque o texto recomenda apenas métricas financeiras.",
      "C) Porque o Agile proíbe qualquer métrica.",
      "D) Porque métricas devem monitorar desempenho, garantia da qualidade e entrega contínua de valor (revisões de código, testes automatizados, progresso vs objetivos), não só horas."
    ],
    "correta": "D",
    "explicacao": "O texto afirma que métricas ágeis devem incluir QA e progresso em relação a objetivos, não apenas horas trabalhadas."
  },
  {
    "id": 237,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K1",
    "pergunta": "O que mais define o autogerenciamento em equipes ágeis?",
    "opcoes": [
      "A) A equipe assume responsabilidade direta pela organização do próprio trabalho e pelas decisões.",
      "B) Um gerente externo determina tarefas e prazos para garantir a entrega.",
      "C) O Product Owner distribui tarefas individuais conforme competências.",
      "D) O Scrum Master aprova todas as decisões técnicas antes da execução."
    ],
    "correta": "A",
    "explicacao": "O autogerenciamento significa que a equipe organiza seu trabalho e toma decisões, fomentando propriedade e compromisso."
  },
  {
    "id": 238,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K1",
    "pergunta": "Qual prática é essencial para que o autogerenciamento funcione eficazmente?",
    "opcoes": [
      "A) Relatórios semanais ao gestor para controle de atividades.",
      "B) Comunicação aberta e colaboração contínua entre membros da equipe.",
      "C) Definição rígida de funções sem troca de responsabilidades.",
      "D) Avaliação individual baseada apenas em cumprimento de tarefas."
    ],
    "correta": "B",
    "explicacao": "Comunicação e colaboração são fundamentais para compartilhar conhecimento e permitir que a equipe se autoorganize."
  },
  {
    "id": 239,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K2",
    "pergunta": "Qual é o propósito principal de definir objetivos claros para uma equipe autogerida?",
    "opcoes": [
      "A) Substituir o Backlog de Produto como fonte de requisitos.",
      "B) Permitir que a gerência microgerencie as entregas diárias.",
      "C) Orientar o trabalho da equipe e alinhar suas atividades com os resultados esperados.",
      "D) Eliminar a necessidade de comunicação entre membros."
    ],
    "correta": "C",
    "explicacao": "Objetivos claros fornecem direção e permitem que a equipe alinhe suas atividades com os resultados esperados."
  },
  {
    "id": 240,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K2",
    "pergunta": "Por que investir no desenvolvimento de competências é parte da estratégia de autogerenciamento?",
    "opcoes": [
      "A) Porque elimina a necessidade de retrospectivas e feedback.",
      "B) Porque substitui a necessidade de ferramentas de colaboração.",
      "C) Porque permite que o Product Owner delegue toda a priorização.",
      "D) Porque equipes capacitadas têm maior confiança e habilidade para tomar decisões independentes."
    ],
    "correta": "D",
    "explicacao": "Desenvolver competências aumenta a confiança e a capacidade da equipe de gerenciar seu trabalho de forma autônoma."
  },
  {
    "id": 241,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K2",
    "pergunta": "De que forma ferramentas de suporte contribuem para o autogerenciamento?",
    "opcoes": [
      "A) Facilitando a organização do trabalho, rastreando progresso e mantendo todos informados.",
      "B) Substituindo totalmente as reuniões da equipe por relatórios automáticos.",
      "C) Impondo controles rígidos que impedem mudanças no trabalho.",
      "D) Garantindo que um único membro gerencie todas as tarefas."
    ],
    "correta": "A",
    "explicacao": "Ferramentas adequadas ajudam a organizar, acompanhar o progresso e comunicar-se, apoiando a autonomia da equipe."
  },
  {
    "id": 242,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K2",
    "pergunta": "Qual dos seguintes é um benefício direto do autogerenciamento mencionado no material?",
    "opcoes": [
      "A) Redução imediata da necessidade de todo o envolvimento do Product Owner.",
      "B) Maior engajamento e satisfação da equipe por ter mais controle sobre o trabalho.",
      "C) Eliminação de conflitos internos sem necessidade de comunicação.",
      "D) Garantia de que não haverá mudanças de prioridade durante o projeto."
    ],
    "correta": "B",
    "explicacao": "O autogerenciamento aumenta o engajamento e a satisfação, pois membros se sentem mais valorizados e no controle."
  },
  {
    "id": 243,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K2",
    "pergunta": "Qual desafio é apontado como central no autogerenciamento?",
    "opcoes": [
      "A) Reduzir o número de reuniões para zero para aumentar autonomia.",
      "B) Eliminar completamente a função do Scrum Master.",
      "C) Encontrar equilíbrio entre autonomia da equipe e alinhamento com os objetivos gerais do projeto.",
      "D) Impedir que a equipe faça revisões e ajustes em suas práticas."
    ],
    "correta": "C",
    "explicacao": "Manter autonomia sem perder alinhamento com objetivos do projeto é um desafio que exige comunicação clara e confiança."
  },
  {
    "id": 244,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Durante uma Sprint, surgem divergências frequentes entre membros sobre como cumprir uma história, afetando o progresso. Qual ação é mais alinhada com práticas de autogerenciamento?",
    "opcoes": [
      "A) Adiar a história para o próximo planejamento até que um gestor decida.",
      "B) Pedir ao Scrum Master para escolher a solução técnica e orientar o time a seguir.",
      "C) Remeter a decisão ao Product Owner para que este imponha a abordagem.",
      "D) Incentivar comunicação aberta, aplicar técnicas de resolução de conflitos e definir um consenso para avançar."
    ],
    "correta": "D",
    "explicacao": "Resolver divergências via comunicação aberta e técnicas de resolução mantém a propriedade da equipe e permite progresso autogerido."
  },
  {
    "id": 245,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Uma equipe autogerida bate frequentemente em impedimentos por falta de habilidades específicas. Qual é a melhor resposta imediata e consistente com o capítulo?",
    "opcoes": [
      "A) Investir em desenvolvimento de competências individuais e coletivas para que a equipe resolva futuros impedimentos.",
      "B) Contratar um gerente técnico externo para tomar decisões pela equipe.",
      "C) Pedir ao Product Owner para reescrever as histórias de forma que não exijam essas competências.",
      "D) Reduzir o escopo das Sprints até que a competência seja adquirida por um membro."
    ],
    "correta": "A",
    "explicacao": "Desenvolver competências fortalece a capacidade da equipe de tomar decisões eficazes e gerenciar trabalho independentemente."
  },
  {
    "id": 246,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Um time autogerido está entregando recursos que não se alinham com o roadmap do produto. Segundo o material, qual é a ação mais apropriada?",
    "opcoes": [
      "A) Aumentar a autonomia da equipe sem comunicar o roadmap, para acelerar entregas.",
      "B) Reforçar objetivos claros e alinhar as atividades da equipe com os resultados esperados, comunicando prioridades.",
      "C) Exigir que o Scrum Master aprove cada item antes de iniciar o trabalho.",
      "D) Transferir decisões de priorização para um gestor fora da equipe."
    ],
    "correta": "B",
    "explicacao": "Objetivos claros e comunicação de prioridades são fundamentais para alinhar equipes autogeridas com resultados e roadmap."
  },
  {
    "id": 247,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Após um período de ganhos iniciais, a equipe começa a perder confiança mútua. Para sustentar o autogerenciamento, qual prática deve ser priorizada?",
    "opcoes": [
      "A) Remover a autonomia da equipe e designar um líder técnico centralizado.",
      "B) Introduzir controles e aprovação formal de cada tarefa para evitar erros.",
      "C) Cultivar uma cultura de confiança e respeito para encorajar iniciativas e apoio mútuo.",
      "D) Aumentar métricas de desempenho individuais para pressionar melhores resultados."
    ],
    "correta": "C",
    "explicacao": "Uma cultura de confiança e respeito sustenta autogerenciamento, incentivando responsabilidade e apoio entre os membros."
  },
  {
    "id": 248,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "A moral da equipe caiu por falta de reconhecimento. Qual medida prática, consistente com o capítulo, melhor restabelece motivação?",
    "opcoes": [
      "A) Eliminar retrospectivas, já que foram consideradas improdutivas.",
      "B) Reduzir a autonomia e aumentar supervisão para controlar resultados.",
      "C) Aumentar a carga de trabalho para compensar a queda de performance.",
      "D) Estabelecer reconhecimento e celebração de sucessos para reforçar o valor do autogerenciamento."
    ],
    "correta": "D",
    "explicacao": "Reconhecimento e celebração reforçam o valor do autogerenciamento e motivam a equipe a continuar melhorando."
  },
  {
    "id": 249,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Uma equipe solicita ferramentas para melhorar sua autonomia e visibilidade do trabalho. Com base no capítulo, qual resultado é o mais esperado ao fornecer essas ferramentas?",
    "opcoes": [
      "A) Melhor organização do trabalho, rastreamento do progresso e manutenção da informação entre membros.",
      "B) Substituição total da necessidade de reuniões e comunicação verbal.",
      "C) Imposição automática de prioridades sem necessidade de consenso.",
      "D) Transferência da responsabilidade de decisões para a ferramenta."
    ],
    "correta": "A",
    "explicacao": "Ferramentas de suporte facilitam organização, rastreio e comunicação, apoiando a capacidade autogerida da equipe."
  },
  {
    "id": 250,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K4",
    "pergunta": "Várias equipes autogeridas numa organização começam a duplicar esforços, há desalinhamento com o roadmap, e conflitos técnicos aumentam. Considerando os vários pontos do capítulo, qual abordagem integrada é mais adequada para restaurar eficácia sem sacrificar autonomia?",
    "opcoes": [
      "A) Reduzir autonomia centralizando decisões num comitê de gestão que imponha tarefas para eliminar duplicações.",
      "B) Comunicar objetivos claros e alinhamento com o roadmap; investir em desenvolvimento de competências; instituir revisões regulares para ajustar práticas e usar ferramentas de coordenação.",
      "C) Aumentar apenas a visibilidade via dashboards públicos, sem investir em capacitação ou revisões de processo.",
      "D) Manter total autonomia e esperar que equipes resolvam entre si as duplicações e conflitos sem intervenção."
    ],
    "correta": "B",
    "explicacao": "A solução integrada combina objetivos claros, capacitação, revisão e ferramentas, equilibrando autonomia e alinhamento conforme aconselhado pelo capítulo."
  },
  {
    "id": 251,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "A Yellow Industries está perdendo clientes que se queixam que a empresa simplesmente não faz o produto que querem. A diretoria pretende começar a trabalhar de forma mais Ágil para tornar a empresa financeiramente saudável outra vez. Como trabalhar de forma mais Ágil mais beneficiará a Yellow Industries?",
    "opcoes": [
      "A) Ajudará a criar um ambiente mais amigável para os funcionários, o que aumentará os resultados de valor.",
      "B) Ajudará a tornar os clientes mais responsáveis por expressar o que querem antes do desenvolvimento.",
      "C) Ajudará a reduzir os gastos com pessoal da empresa, pois o Agile é uma forma de trabalho eficiente.",
      "D) Ajudará a empresa a criar mais valor para o cliente ao cooperar estreitamente com os clientes."
    ],
    "correta": "D",
    "explicacao": "O Agile (e o Scrum) foca em cooperação próxima com clientes para criar mais valor ao atender necessidades reais, portanto a alternativa D é a mais adequada."
  },
  {
    "id": 252,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K2",
    "pergunta": "Uma forma Ágil de trabalho proporciona mais previsibilidade e mais flexibilidade que formas de trabalho tradicionais. Como o Scrum ajuda a obter mais previsibilidade e flexibilidade?",
    "opcoes": [
      "A) - Ao realizar uma Reunião Diária no mesmo horário, ajuda a criar previsibilidade.\n- Ao implementar um quadro Scrum para rastrear o trabalho, ajuda a criar flexibilidade.",
      "B) - Ao fazer um novo Planejamento da Sprint a cada iteração, ajuda a criar previsibilidade.\n- Ao não ter horas fixas de trabalho para o time, ajuda a criar flexibilidade.",
      "C) - Ao usar uma estimativa da velocidade do time, ajuda a criar previsibilidade.\n- Ao reordenar os itens do Backlog de Produto quando necessário, ajuda a criar flexibilidade.",
      "D) - Ao usar Retrospectivas das Sprints para mudar processos, ajuda a criar previsibilidade.\n- Ao ter expectativas de nível de serviço (SLEs) rigorosas, ajuda a criar flexibilidade"
    ],
    "correta": "C",
    "explicacao": "Estimativas de velocidade dão previsibilidade sobre capacidade; reordenar o Backlog permite adaptar-se a mudanças, oferecendo flexibilidade — corresponde à alternativa C."
  },
  {
    "id": 253,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Uma Scrum Master sabe que deve ajudar a remover bloqueios, porém tem dúvidas se também seria útil implementar alguma forma de melhoria contínua. Há alguma sobreposição entre remover bloqueios e implementar melhoria contínua?",
    "opcoes": [
      "A) Sim. Uma Scrum Master que remove um bloqueio realiza uma parte da melhoria contínua que o time precisa para estabelecer o fluxo.",
      "B) Sim. A melhoria contínua é focada em melhorar o produto, logo a Scrum Master deve utilizá-la para ajudar o time a fluir.",
      "C) Não. Itens de melhoria contínua devem ir para um Backlog de Melhoria Contínua e bloqueios não pertencem a essa categoria.",
      "D) Não. A remoção de bloqueios é uma tarefa feita pela Scrum Master e a melhoria contínua é feita pelos Desenvolvedores."
    ],
    "correta": "C",
    "explicacao": "Segundo o enunciado, bloqueios e itens de melhoria contínua são categorias distintas; a alternativa C indica essa separação conforme o texto."
  },
  {
    "id": 254,
    "capitulo": "1. Conceitos Ágeis",
    "nivel": "K1",
    "pergunta": "Os requisitos de negócio podem mudar a qualquer momento, logo ao fazer apenas o trabalho necessário para que uma etapa obrigatória seja considerada concluída, o time do projeto poupa esforço e tempo. Que metodologia Ágil está melhor representada por essa declaração?",
    "opcoes": [
      "A) DSDM",
      "B) Kanban",
      "C) LeSS",
      "D) SAFe"
    ],
    "correta": "A",
    "explicacao": "A declaração enfatiza fazer o mínimo necessário para finalizar etapas, conceito alinhado com DSDM e seus princípios de priorização e entrega mínima; o gabarito aponta A."
  },
  {
    "id": 255,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Aisha é Scrum Master. Durante uma Sprint, percebe que o time não entregará um produto potencialmente lançável no final da Sprint. Suspeita que isso acontece porque o time não revisa todo o código antes de colocá-lo no repositório. O que Aisha deve fazer?",
    "opcoes": [
      "A) Pedir permissão ao Product Owner para cancelar a Sprint atual",
      "B) Pedir para o time analisar o que pode melhorar na próxima Sprint",
      "C) Exigir que o time revise todo o código antes de colocá-lo no repositório",
      "D) Prolongar a duração da Sprint para entregar o produto lançável"
    ],
    "correta": "B",
    "explicacao": "A ação correta é promover melhoria contínua: o time deve revisar e identificar melhorias para a próxima Sprint, conforme alternativa B."
  },
  {
    "id": 256,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Um novo time piloto está começando a migrar para o Scrum. O Product Owner já trabalhou em um time Scrum antes, já para os Desenvolvedores o Scrum é algo totalmente novo. O Scrum Master teve certo treinamento formal, mas sua experiência é limitada. No momento, eles têm um gerente de projetos para supervisionar o projeto. O time deve ser treinado no framework Scrum. Quem é responsável por garantir que isso ocorra?",
    "opcoes": [
      "A) Os Desenvolvedores",
      "B) O Product Owner",
      "C) O Gerente de Projetos",
      "D) O Scrum Master"
    ],
    "correta": "D",
    "explicacao": "O Scrum Master é responsável por garantir que o time entenda o Scrum e forneça treinamento e coaching, logo a alternativa D é a correta."
  },
  {
    "id": 257,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Que tarefas e responsabilidades pertencem ao Scrum Master?",
    "opcoes": [
      "A) O Scrum Master avalia a maturidade do time e informa o Product Owner caso treinamento ou coaching sejam necessários, para que o Product Owner possa agir adequadamente.",
      "B) O Scrum Master ajuda a organizar reuniões, coordenar o trabalho e monitorar o progresso das tarefas com o suporte de ferramentas visuais, além de auxiliar os membros do time a superar dificuldades.",
      "C) O Scrum Master monitora o Backlog de Produto e se certifica que o Product Owner e os Desenvolvedores entendam exatamente os itens e sua ordem, prioridade e valor.",
      "D) O Scrum Master gerencia os Desenvolvedores, revisa e aloca as tarefas na Reunião Diária para que todos os membros do time possam manter o foco nas tarefas com que se comprometeram."
    ],
    "correta": "B",
    "explicacao": "O Scrum Master facilita reuniões, ajuda o time a superar dificuldades e coordena suporte ao trabalho, conforme descrito na alternativa B."
  },
  {
    "id": 258,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Naz é Scrum Master de um time Scrum de sete Desenvolvedores e um Product Owner relativamente novo. A Reunião Diária atrasa e às vezes dura 30 minutos, com discussões sobre dependências e esclarecimentos. O que o Scrum Master deveria fazer para melhorar essa situação?",
    "opcoes": [
      "A) Limitar a discussão a \"Em que estou trabalhando hoje?\", \"O que realizei ontem?\", \"Há impedimentos?\".",
      "B) Admitir que esse é um time Scrum grande com problemas complicados e alocar 30 minutos para essa reunião.",
      "C) Dividir a reunião em duas para trabalhar nos itens com dependências complicadas de outros produtos.",
      "D) Parar com a reunião e investir tempo para orientar todo o time sobre o objetivo e o formato da Reunião Diária."
    ],
    "correta": "D",
    "explicacao": "Orientar o time sobre propósito e formato da Reunião Diária (treinamento/coaching) ajuda a torná-la eficiente; a alternativa D propõe essa ação corretiva."
  },
  {
    "id": 259,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Um time busca otimizar seu trabalho caótico; membros assumem trabalho demais e não sabem pedir ajuda. O Product Owner e Desenvolvedores propõem soluções diferentes; o Scrum Master sugere quadro Kanban com limites de WIP ou quadro Scrum. Que ferramenta é mais provável de ajudar o time?",
    "opcoes": [
      "A) O canal dedicado",
      "B) O gráfico de Gantt",
      "C) O quadro Kanban",
      "D) O quadro Scrum"
    ],
    "correta": "C",
    "explicacao": "O quadro Kanban com limites de WIP e tíquetes bloqueadores ajuda a controlar fluxo e visibilidade de impedimentos, atendendo às necessidades descritas; alternativa C."
  },
  {
    "id": 260,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Durante uma Sprint, um Desenvolvedor não entende a história de usuário em que trabalha. Isso é um potencial bloqueio. O que o Scrum Master deve fazer para permitir ao Desenvolvedor trabalhar em plena capacidade?",
    "opcoes": [
      "A) Pedir para o Desenvolvedor ignorar a história e colocá-la no Backlog de Produto até que o time a entenda",
      "B) Pedir para o Desenvolvedor passar mais tempo analisando e pesquisando a história de usuário para ajudá-lo a entendê-la",
      "C) Pedir para o Product Owner explicar a história de usuário e encontrar um recurso para ajudar o Desenvolvedor a entendê-la",
      "D) Pedir para o Product Owner colocar a história de usuário de volta no Backlog de Produto, melhorá-la e reescrevê-la"
    ],
    "correta": "C",
    "explicacao": "Quando falta entendimento, o Product Owner deve esclarecer a história e fornecer apoio; assim a alternativa C é a medida correta."
  },
  {
    "id": 261,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K2",
    "pergunta": "Um time resiste a implementar práticas Agile Scrum. O Scrum Master decidiu identificar se o tipo de resistência é passiva ou ativa. Por que o Scrum Master deve identificar o tipo de resistência?",
    "opcoes": [
      "A) Deve ser feita uma comparação com histórias de colegas de outros times sobre como trabalham com o Scrum.",
      "B) Identificar o tipo de resistência ajudará o Scrum Master a identificar como melhor orientar o time.",
      "C) Para ajudar o Scrum Master a planejar uma sessão de treinamento sobre eventos Scrum para reforçar o valor dos eventos.",
      "D) O time pode ter esquecido a Meta da Sprint e pode precisar de treinamento para se realinhar com a Sprint."
    ],
    "correta": "B",
    "explicacao": "Identificar se a resistência é passiva ou ativa permite ao Scrum Master escolher abordagens de orientação adequadas; alternativa B reflete isso."
  },
  {
    "id": 262,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Susan é Scrum Master e antes era Desenvolvedora. Em uma Sprint, um Desenvolvedor relata um impedimento relacionado ao ambiente de testes; Susan conhece a solução. O que Susan deve fazer?",
    "opcoes": [
      "A) Organizar uma breve sessão de treinamento para melhorar o conhecimento do time sobre o ambiente de testes.",
      "B) Ir até o Desenvolvedor após a Reunião Diária e usar sua experiência para lhe mostrar como resolver o problema.",
      "C) Mostrar rapidamente aos Desenvolvedores como resolver esse problema e, deste modo, orientá-los e compartilhar o conhecimento."
    ],
    "correta": "A",
    "explicacao": "Promover treinamento para elevar o conhecimento coletivo evita dependência de uma pessoa; a alternativa A prioriza capacitação do time."
  },
  {
    "id": 263,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Uma empresa trabalha com vários times Scrum e optou por um único Backlog, um único Product Owner e diversos times Scrum. Qual papel no Scrum está na melhor posição para coordenar os esforços?",
    "opcoes": [
      "A) Os Desenvolvedores, pois os times são autogerenciados e devem ser capazes de coordenar",
      "B) O Product Owner, pois também coordena o Backlog de Produto",
      "C) Os Scrum Masters, pois têm tempo para coordenar com os outros Scrum Masters"
    ],
    "correta": "B",
    "explicacao": "Com um único Backlog e Product Owner, esse papel é o mais indicado para coordenar prioridades e esforços entre times; alternativa B."
  },
  {
    "id": 264,
    "capitulo": "14. Autogerenciamento",
    "nivel": "K3",
    "pergunta": "Um time começou recentemente a trabalhar com o Scrum. Seu antigo gerente atua agora como Product Owner e continua dividindo tarefas entre membros do time sem discussão. O Product Owner deve continuar a dividir as tarefas?",
    "opcoes": [
      "A) Sim, pois o Product Owner está melhor posicionado para determinar o que deve ser feito e por quem.",
      "B) Sim, pois o time teve ótimos resultados com essa pessoa dividindo as tarefas antes da migração.",
      "C) Não, pois os Desenvolvedores são as únicas pessoas no time que podem dividir as tarefas no Scrum.",
      "D) Não, pois o time não discutiu qual é a melhor forma de dividir as tarefas para esse time."
    ],
    "correta": "D",
    "explicacao": "Em Scrum, Desenvolvedores autogerenciam o trabalho; o Product Owner não deve impor divisão de tarefas sem diálogo; D aponta para falta de discussão e é correta."
  },
  {
    "id": 265,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Os diferentes papéis no Scrum são responsáveis por elementos diferentes. Um dos papéis é responsável por garantir a adaptação do planejamento e da forma de trabalho, conforme necessário, para assegurar que o progresso seja realizado em função da Meta da Sprint. Qual é esse papel responsável?",
    "opcoes": [
      "A) Os Desenvolvedores",
      "B) O Product Owner",
      "C) O Scrum Master"
    ],
    "correta": "A",
    "explicacao": "Os Desenvolvedores adaptam o planejamento e o trabalho durante a Sprint para cumprir a Meta da Sprint; portanto alternativa A é adequada."
  },
  {
    "id": 266,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Um time Scrum usa pela primeira vez a Definição de Pronto (DoD) durante uma reunião de Planejamento da Sprint, em que o time estima o tamanho dos itens do Backlog e cria o Backlog da Sprint. Por que o time precisa da DoD durante a reunião de Planejamento da Sprint?",
    "opcoes": [
      "A) Há verificação da prontidão de cada funcionalidade assim que a funcionalidade é concluída na Sprint.",
      "B) O Product Owner deve confirmar que os itens do Backlog atendem aos requisitos.",
      "C) O time deve aceitar a Meta da Sprint como um produto potencialmente lançável.",
      "D) A carga de trabalho depende dos requisitos tanto das funcionalidades quanto da DoD."
    ],
    "correta": "D",
    "explicacao": "A DoD define critérios que impactam o esforço necessário; portanto a carga de trabalho estimada depende desses requisitos, correspondendo à alternativa D."
  },
  {
    "id": 267,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Um Product Owner escreve a seguinte história de usuário: \"Como digitador de dados, eu quero uma boa interface de usuário para a administração de faturas de clientes para que possa trabalhar rápido.\" Essa história de usuário fornece as informações específicas necessárias para ser posta em um Backlog da Sprint?",
    "opcoes": [
      "A) Sim, pois informações adicionais podem ser acrescentadas durante a Sprint.",
      "B) Sim, pois segue o modelo recomendado de uma história de usuário.",
      "C) Não, pois a identidade do tipo de usuário não é suficientemente específica.",
      "D) Não, pois os termos \"boa\" e \"rápido\" não são suficientemente específicos."
    ],
    "correta": "D",
    "explicacao": "Termos vagos como \"boa\" e \"rápido\" não são específicos o suficiente para implementação; logo D é a melhor justificativa."
  },
  {
    "id": 268,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "O Scrum Master e o Product Owner analisam um novo Backlog de Produto e observam histórias muito detalhadas de baixa prioridade e itens de alta prioridade muito detalhados também. É assim que o Backlog de Produto deve ser refinado?",
    "opcoes": [
      "A) Sim, pois os itens de alta prioridade serão inseridos em um dos próximos Backlogs das Sprints.",
      "B) Sim, pois as histórias de usuário de qualquer prioridade podem ser muito detalhadas ou descritas de maneira mais geral.",
      "C) Não, pois itens de alta prioridade não devem ser detalhados para permitir mudanças inesperadas.",
      "D) Não, pois as histórias de usuário devem sempre pertencer a um Épico para formar uma Meta da Sprint coerente."
    ],
    "correta": "A",
    "explicacao": "Itens de alta prioridade estão próximos de entrar numa Sprint e, por isso, podem estar mais detalhados. Itens de menor prioridade podem permanecer mais gerais, permitindo refinamento posterior."
  },
  {
    "id": 269,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K3",
    "pergunta": "As metas organizacionais estão relacionadas com os produtos e os requisitos no Backlog de Produto. Como esses conceitos estão relacionados?",
    "opcoes": [
      "A) As metas organizacionais são Metas do Produto que contêm os itens do Backlog de Produto. As metas organizacionais são refinadas regularmente, para agregar o máximo de valor à empresa. As Metas do Produto são elementos estáveis na comunicação da organização com o cliente.",
      "B) As metas organizacionais são os objetivos que a organização fixou para si mesma. Para alcançá-los, as Metas do Produto devem suportar uma ou mais metas organizacionais. Os itens de Backlog de Produto definem o que é necessário para atingir as Metas do Produto.",
      "C) Os itens do Backlog de Produto podem ser consolidados em uma única visão geral do portfólio. As metas organizacionais suportam as Metas do Produto de alto nível, como entrada para a visão do portfólio. A alta gestão utiliza a visão do portfólio para ajudar a entender como os produtos estão relacionados."
    ],
    "correta": "B",
    "explicacao": "As metas organizacionais são objetivos da organização; as Metas do Produto devem apoiar uma ou mais dessas metas, e os itens do Backlog de Produto definem o que é necessário para atingir as Metas do Produto."
  },
  {
    "id": 270,
    "capitulo": "3. Facilitação e coaching do time",
    "nivel": "K3",
    "pergunta": "Um time tem dificuldades para manter a reunião de Planejamento da Sprint dentro do time-box por discutir mínimos detalhes; o Product Owner discute frequentemente com os Desenvolvedores sobre a estimativa. Quem é responsável por garantir que os conflitos sejam resolvidos durante a reunião?",
    "opcoes": [
      "A) Os Desenvolvedores, pois permitem que o Product Owner os ponha em situação de conflito sobre os detalhes",
      "B) A organização, pois deve facilitar formas de ajudar o time a trabalhar em conjunto corretamente",
      "C) O Product Owner, pois continua interferindo na estimativa dos Desenvolvedores",
      "D) O Scrum Master, pois é responsável por garantir uma reunião eficiente"
    ],
    "correta": "D",
    "explicacao": "O Scrum Master facilita eventos e garante eficiência nas reuniões, incluindo resolução de conflitos durante o Planejamento; alternativa D."
  },
  {
    "id": 271,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Um Scrum Master ensina a um novo time como estimar usando pontos de história. Um membro argumenta que estimativas em dias ideais são mais úteis para próximas Sprints. As estimativas em dias ideais são mais úteis que as estimativas em pontos de história para as próximas Sprints?",
    "opcoes": [
      "A) Sim, pois as estimativas em dias ideais permitem interrupções de um dia regular de trabalho.",
      "B) Sim, pois dias ideais são baseados nas horas efetivas e invariáveis de trabalho.",
      "C) Não, pois geralmente é mais rápido estimar com pontos de história que com dias ideais.",
      "D) Não, pois estimativas com pontos de história são baseadas em uma indicação relativa de tamanho."
    ],
    "correta": "D",
    "explicacao": "Pontos de história fornecem uma indicação relativa de tamanho útil para comparar e prever futuras Sprints; conforme gabarito, D é a resposta."
  },
  {
    "id": 272,
    "capitulo": "7. Estimativa Ágil",
    "nivel": "K2",
    "pergunta": "Um time está estimando sua velocidade. Para ajudá-los a estimar a velocidade, fizeram: Desenvolvedores fizeram previsão para itens nunca feitos; Scrum Master revisou velocidades anteriores; Product Owner pesquisou padrões da indústria. Qual dessas práticas não é uma boa maneira de estimar a velocidade?",
    "opcoes": [
      "A) Fazer uma previsão",
      "B) Usar valores históricos",
      "C) Usar padrões da indústria"
    ],
    "correta": "C",
    "explicacao": "Usar padrões da indústria não considera contexto do time; valores históricos e previsões internas são mais confiáveis — alternativa C está indicada pelo gabarito."
  },
  {
    "id": 273,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K3",
    "pergunta": "Um time Scrum tem histórico de bom desempenho, mas recentemente não atinge Metas das Sprints. Na Retrospectiva, identificaram impedimentos no fluxo, solicitações repentinas da gestão, especialistas retirados para outros times, e Product Owner ausente duas semanas. Que problema é a razão mais provável para não atingir as Metas das Sprints?",
    "opcoes": [
      "A) Os impedimentos",
      "B) As solicitações",
      "C) Os especialistas",
      "D) As férias"
    ],
    "correta": "C",
    "explicacao": "Retirar especialistas do time reduz capacidade e causa falhas no alcance das metas; a presença intermitente de especialistas é indicada como a causa mais provável (C)."
  },
  {
    "id": 274,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Um time usa um quadro Kanban com colunas: 1 - História de usuário, 2 - A fazer, 3 - Fazendo (3), 4 - Pronto. Qual é o significado mais provável do \"(3)\" na terceira coluna?",
    "opcoes": [
      "A) Essa coluna tem um limite de trabalho em progresso (limite de WIP) de três.",
      "B) Essa coluna tem três tíquetes bloqueados invisíveis que devem ser resolvidos.",
      "C) Essa coluna é a única dividida em três raias.",
      "D) Esse time tem três membros do time e três colunas Fazendo."
    ],
    "correta": "A",
    "explicacao": "No Kanban, a notação (3) normalmente indica limite de WIP para a coluna 'Fazendo', ou seja, no máximo três itens em progresso — alternativa A."
  },
  {
    "id": 275,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K1",
    "pergunta": "Qual é a principal finalidade de um quadro Scrum?",
    "opcoes": [
      "A) Ajudar os Desenvolvedores a organizar seu trabalho e ver o volume de trabalho restante",
      "B) Ajudar o Product Owner a monitorar o trabalho do time e apresentar um relatório para os gerentes",
      "C) Ajudar o Scrum Master a monitorar que Desenvolvedor faz que tarefa"
    ],
    "correta": "A",
    "explicacao": "O quadro Scrum é uma ferramenta visual para os Desenvolvedores organizarem e acompanharem o trabalho e o volume restante, conforme alternativa A."
  },
  {
    "id": 276,
    "capitulo": "8. Monitoramento e comunicação do progresso",
    "nivel": "K2",
    "pergunta": "Um time Scrum utiliza um gráfico Burn-Down para monitorar seu progresso. Durante a Sprint, o gráfico mostra a linha real terminando acima da linha de referência projetada para o final da Sprint. O que o gráfico diz sobre essa Sprint?",
    "opcoes": [
      "A) Os Desenvolvedores estão fazendo menos que esperavam.",
      "B) Os Desenvolvedores estão no caminho certo para concluir a Meta da Sprint.",
      "C) Os Desenvolvedores se depararam com um bloqueio e estão travados."
    ],
    "correta": "A",
    "explicacao": "Como a linha real termina acima da referência projetada, o ritmo de trabalho está abaixo do esperado, indicando que os Desenvolvedores estão fazendo menos que esperavam."
  },
  {
    "id": 277,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Um time decidiu usar técnicas Kanban e começou a usar tíquetes bloqueadores para identificar impedimentos. O Scrum Master não sabe o que fazer com esses tíquetes quando um impedimento for removido. O que o Scrum Master deve fazer com esses tíquetes bloqueadores para proporcionar o maior valor para o time?",
    "opcoes": [
      "A) Agrupá-los para ver se emerge um tema comum indicando a causa de tantas questões",
      "B) Analisá-los para chegar à raiz do problema após as questões serem resolvidas, para evitar impedimentos futuros",
      "C) Mantê-los no painel ou revisá-los durante a Retrospectiva da Sprint para lembrar aos Desenvolvedores",
      "D) Simplesmente marcá-los como \"Pronto\" e removê-los se o impedimento for resolvido e não mais existir"
    ],
    "correta": "A",
    "explicacao": "Agrupar tíquetes bloqueadores para identificar temas comuns ajuda a revelar causas sistêmicas de impedimentos; o gabarito aponta A."
  },
  {
    "id": 278,
    "capitulo": "9. Mantendo o controle",
    "nivel": "K3",
    "pergunta": "Um time encontrou um erro crítico e acredita que deve ser corrigido imediatamente. O time sempre tem 20% do tempo da Sprint reservado para corrigir erros e já incluiu alguns erros antigos no Backlog da Sprint. O Product Owner identificou o novo erro crítico como maior prioridade. Qual é a melhor medida a tomar?",
    "opcoes": [
      "A) Acrescentar resolver o novo erro crítico ao Backlog da Sprint mesmo que o time passe mais de 20% do tempo com os erros",
      "B) Cancelar a Sprint, fazer com que o time foque em corrigir os erros e começar uma nova Sprint quando os erros forem resolvidos",
      "C) Inserir o novo erro no Backlog de Produto porque a Meta da Sprint e o Backlog já foram finalizados",
      "D) Trocar um volume equivalente de trabalho de correção de erros pela correção do novo erro crítico para manter os 20%"
    ],
    "correta": "D",
    "explicacao": "Manter o compromisso da Sprint substituindo trabalho de equivalente valor para acomodar o novo erro crítico preserva a Meta e o time-box; assim D é apropriada."
  },
  {
    "id": 279,
    "capitulo": "5. Elaboração e manutenção do Backlog de Produto e da Sprint",
    "nivel": "K2",
    "pergunta": "Mesmo em grandes projetos, pode ser melhor ter apenas um Backlog de Produto para um produto. Para gerenciar corretamente esse único Backlog de Produto, o Backlog não pode ser demasiado grande. O que fazer para que o Backlog de Produto seja mantido em um tamanho razoável?",
    "opcoes": [
      "A) Prever como as diversas Liberações seguintes devem ser",
      "B) Eliminar proativamente as dependências entre as histórias de usuário",
      "C) Compartilhar a responsabilidade do Backlog de Produto com os outros",
      "D) Usar Épicos e agrupar as histórias de usuário pequenas em temas"
    ],
    "correta": "D",
    "explicacao": "Usar Épicos e agrupar histórias de usuário pequenas em temas ajuda a manter o Backlog de Produto organizado e num tamanho razoável, especialmente em projetos grandes."
  },
  {
    "id": 280,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K3",
    "pergunta": "Uma empresa usa a abordagem Nexus: time de integração coordena uma única Sprint para todos os times, cada time tem seu Scrum Master, e há um único Product Owner e um único Backlog de Produto para todos os times. Essa é a forma correta de usar uma abordagem Nexus?",
    "opcoes": [
      "A) Sim, pois uma abordagem Nexus pode ser utilizada de modo flexível pela empresa para responder às necessidades de cada empresa específica ou cada projeto específico.",
      "B) Sim, pois o Nexus sempre tem um único Backlog de Produto, um único Product Owner e uma Sprint coordenada para todos os times.",
      "C) Não, pois cada time deve ter seu próprio Product Backlog, bem como um Backlog de Produto separado para suportar seu trabalho.",
      "D) Não, pois os times devem compartilhar não apenas o Product Owner, o Backlog de Produto e a Sprint, mas também o Scrum Master."
    ],
    "correta": "B",
    "explicacao": "A descrição corresponde ao uso comum do Nexus (um Backlog, um Product Owner e Sprint coordenada); o gabarito indica B como correta."
  },
  {
    "id": 281,
    "capitulo": "11. Adequação do Agile para diferentes tipos de projetos",
    "nivel": "K3",
    "pergunta": "Nem todo projeto é adequado para Agile. Dois projetos: RH com orçamento apertado sem prazo e requisitos não claros; TI com prazo urgente e orçamento apertado sem margem para mudar escopo. Que departamento tem um projeto que não é adequado para uma abordagem Ágil?",
    "opcoes": [
      "A) O departamento de RH, pois apenas os projetos de TI são adequados para uma abordagem Ágil.",
      "B) O departamento de RH, pois não tem requisitos claros para o projeto.",
      "C) O departamento de TI, pois não há margem para mudar o escopo do projeto.",
      "D) O departamento de TI, pois tem orçamento apertado e prazo urgente."
    ],
    "correta": "C",
    "explicacao": "Projetos que não permitem mudanças de escopo (rigidez absoluta) não são adequados ao Agile; portanto o projeto de TI indicado na alternativa C não é compatível."
  },
  {
    "id": 282,
    "capitulo": "10. Escalando projetos Ágeis",
    "nivel": "K2",
    "pergunta": "Uma empresa deseja usar um time Scrum adicional além do time atual. Quando isso é uma boa ideia?",
    "opcoes": [
      "A) Quando um projeto é muito complexo e o time Scrum atual não possui todas as competências necessárias",
      "B) Quando o time Scrum atual tem uma grande diversidade de gênero, raça ou cultura e trajetórias relevantes",
      "C) Quando o time acaba de migrar e seus membros não trabalham bem juntos no início",
      "D) Quando há pouco tempo para treinamento e o time Scrum atual é composto por muitas pessoas sem experiência"
    ],
    "correta": "A",
    "explicacao": "Adicionar um time é indicado quando competências necessárias não cabem num único time; a alternativa A descreve essa situação."
  },
  {
    "id": 283,
    "capitulo": "12. Administração Ágil, ferramentas e integração",
    "nivel": "K3",
    "pergunta": "Uma empresa tem dificuldades para adotar o Scrum: membros trabalham de casa, time não concluiu treinamento, se sentem desconectados e não se comunicam. Que ferramenta mais ajudará o time?",
    "opcoes": [
      "A) Uma plataforma de interação social que permita aos membros do time se comunicar continuamente",
      "B) Um quadro de mensagens especial para o Scrum Master onde os membros do time publiquem suas perguntas",
      "C) Um aplicativo que dê ao time dicas diárias sobre como usar o Scrum para facilitar o aprendizado",
      "D) Um quadro Scrum digital online que seja visível por todos os membros do time, que os usarão de forma consistente"
    ],
    "correta": "A",
    "explicacao": "Uma plataforma de interação contínua ajuda a conectar membros remotos e promover comunicação e engajamento, sendo a opção indicada pelo gabarito."
  },
  {
    "id": 284,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "O papel tradicional de gerente de projetos não existe no Scrum, mas algumas atividades ainda são necessárias como assegurar que os Desenvolvedores monitorem o progresso e que o produto tenha documentação adequada. Quem deve assumir essas atividades?",
    "opcoes": [
      "A) Os Desenvolvedores",
      "B) O Product Owner",
      "C) O Scrum Master"
    ],
    "correta": "C",
    "explicacao": "O Scrum Master auxilia a organização na adoção de práticas e garante que processos e documentação sejam mantidos; o gabarito indica C."
  },
  {
    "id": 285,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K4",
    "pergunta": "Uma empresa migrou para Scrum com treinamento opcional, migração lenta, gerente de projetos como Product Owner e treinamento não obrigatório; seis meses depois a migração falhou. Qual é a razão mais provável para a migração não ter dado certo?",
    "opcoes": [
      "A) A empresa deveria ter optado por uma migração all-in para acompanhar a noção de urgência.",
      "B) Os funcionários não tiveram treinamento suficiente em Scrum para fazer a migração dar certo.",
      "C) O gerente de projetos não tinha conhecimento suficiente sobre o produto para agir como Product Owner."
    ],
    "correta": "B",
    "explicacao": "Treinamento insuficiente e opcionalidade reduzem adoção consistente; o gabarito aponta que falta de treinamento (B) é a causa provável."
  },
  {
    "id": 286,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Um membro do time, Alexander, é sabotador e se pronuncia ativamente contra o Scrum. Addy, Scrum Master, quer que Alexander pare. Qual é a melhor forma de lidar com o comportamento de Alexander?",
    "opcoes": [
      "A) Reconhecer os medos de Alexander e enfrentá-los, tornando-o insatisfeito com a forma de trabalho original",
      "B) Não deixar que Alexander fale nas reuniões, transferi-lo para um outro time, ou, se isso não der certo, considerar demiti-lo",
      "C) Certificar-se que Alexander compreende o Scrum, dar a ele algum tempo para se adaptar, e nomear um campeão cético",
      "D) Moldar os comportamentos desejados, envolver Alexander nas atividades do time e elogiá-lo por fazer o certo"
    ],
    "correta": "B",
    "explicacao": "De acordo com o gabarito, a medida apontada é intervenção decisiva (B). (Observa-se que o enunciado/gabarito orienta essa resposta.)"
  },
  {
    "id": 287,
    "capitulo": "2. Responsabilidades e compromisso",
    "nivel": "K2",
    "pergunta": "Qual é o papel da gestão no Scrum?",
    "opcoes": [
      "A) Assegurar que os Product Owners e os Scrum Masters tenham um planejamento detalhado e cumpram os prazos",
      "B) Assegurar que os times compitam entre si por incentivos e continuem a aumentar sua eficiência",
      "C) Assegurar que as metas organizacionais sejam claras e o mindset da empresa seja Ágil para apoiar o Scrum"
    ],
    "correta": "C",
    "explicacao": "A gestão deve garantir metas organizacionais claras e fomentar um mindset Ágil que permita o sucesso do Scrum; alternativa C."
  },
  {
    "id": 288,
    "capitulo": "4. Outros papéis: Product Owner e Desenvolvedores",
    "nivel": "K2",
    "pergunta": "Times multifuncionais são melhores para estimar o tamanho de novas tarefas. Por que times multifuncionais fazem estimativas melhores?",
    "opcoes": [
      "A) Por conseguir estimar com menos planejamento que outros times",
      "B) Por não precisar transferir trabalho para outros times",
      "C) Por ter alguém especializado em estimativa de tarefas",
      "D) Por possuir todas as competências necessárias para realizar o trabalho"
    ],
    "correta": "D",
    "explicacao": "Times multifuncionais reúnem competências necessárias internamente, melhorando precisão das estimativas; alternativa D está alinhada ao enunciado."
  },
  {
    "id": 289,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K3",
    "pergunta": "Uma empresa está migrando de uma cultura tradicional para uma cultura Ágil; há conservadores que resistem à mudança. Qual é a melhor forma de fazer uso das competências dos conservadores durante a migração?",
    "opcoes": [
      "A) Conservadores são focados na situação global. Usar suas competências para gerar novas formas de fazer negócios e agilizar eficiência e eficácia.",
      "B) Conservadores podem enxergar tanto as vantagens quanto as desvantagens. Usar suas competências para atuar como mediadores para identificar um consenso aceitável entre os times.",
      "C) Conservadores se dão bem com uma mudança evolutiva. Usar suas competências para planejar etapas incrementais para migrar a empresa sem perturbar o negócio."
    ],
    "correta": "C",
    "explicacao": "Conservadores preferem mudanças graduais; usá-los para planejar migração incremental é coerente com o enunciado e o gabarito (C)."
  },
  {
    "id": 290,
    "capitulo": "13. Implementação do Agile",
    "nivel": "K4",
    "pergunta": "A diretoria nomeou consultores que recomendam a empresa se tornar mais Ágil. A empresa decide migrar imediatamente para o Scrum, treinar todos e exigir que todos os novos projetos usem Scrum, sem ajustar estilos ou estruturas de liderança. Essa é uma boa forma de migrar?",
    "opcoes": [
      "A) Sim, pois um novo método inspirará a todos e implementações radicais funcionam melhor para romper totalmente com antigas formas de trabalho.",
      "B) Sim, pois o Scrum é uma metodologia Ágil que é simples e fácil de aprender. Treinar novamente todos garante que essa abordagem funcionará em breve.",
      "C) Não, pois o Agile é mais um mindset que uma prática e terá mais sucesso se a gestão mudar a cultura antes de migrar para o Scrum.",
      "D) Não, pois a gestão deveria avaliar se o Scrum é a melhor metodologia Ágil para a empresa, além de considerar as práticas dos líderes de mercado."
    ],
    "correta": "C",
    "explicacao": "Migrar sem mudanças na cultura de gestão tende a falhar; Agile requer mudança de mindset na liderança, portanto a alternativa C é a mais adequada."
  }
];
