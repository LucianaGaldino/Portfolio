const graduationDate = new Date('2026-12-31T23:59:59');

const translations = {
  en: {
    role: 'SUPPORT ANALYST | FULL STACK C#',
    intro: 'Building robust solutions with <span class="highlight">C# & Cloud</span>...',
    countTitle: 'TIME LEFT TO GRADUATE',
    months: 'MONTHS',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MINUTES',
    about: 'ABOUT ME',
    aboutText: 'Full Stack developer focused on C# and cloud computing solutions. I specialize in building robust APIs, managing databases, and implementing cloud infrastructure with AWS. My approach combines technical excellence with a focus on operational efficiency and system reliability. I enjoy creating well-architected applications that solve real-world problems while maintaining clean code practices.',
    projectAdminTitle: 'RESTful Product Management API',
    projectAdmin: '<strong>C# ASP.NET Core | MySQL | LINQ</strong> - A scalable API following clean architecture principles with layered architecture, CRUD operations, and comprehensive Swagger documentation. Built with modern best practices for enterprise-level applications.',
    projectDescription: 'Enterprise-grade backend project emphasizing clean architecture, comprehensive data flow, and service-oriented design patterns.',
    projectPinkParkingTitle: 'Digital Filing System',
    projectPinkParkingDesc: '<strong>Digital Filing System</strong> is an administrative platform designed to streamline document management and internal workflows. Reduces paper usage while improving organization, practicality, and operational efficiency.',
    projectThirdTitle: 'Cloud Infrastructure & Automation',
    projectThirdDesc: '<strong>AWS | Virtualization</strong> - Configuration of virtual machines and automated environments for optimized workflows. Implementation of logical infrastructure and intelligent automation for operational efficiency.',
    projectFourthTitle: 'B2B Support Platform',
    projectFourthDesc: '<strong>Hardware Support & Network Management</strong> - Specialized B2B platform focused on hardware support, network troubleshooting, and process improvement. Service desk management with performance monitoring capabilities.',
    projectLabel: 'PROJECT',
    projects: 'PROJECTS',
    skills: 'SKILLS',
    learning: 'LEARNING',
    contact: 'CONTACT',
    quizTitle: 'Quiz: Front-end or Back-end?',
    quizResultBtn: 'See Result',
    quizResetBtn: 'Reset',
    quizCloseBtn: 'Close',
    resultFrontTitle: 'Front-end Developer',
    resultBackTitle: 'Back-end Developer',
    resultFullStackTitle: 'Full Stack',
    resultFrontDesc: 'You enjoy interfaces, design and visual experiences.',
    resultBackDesc: 'You prefer logic, data and building the structure behind applications.',
    resultFullStackDesc: 'You have a balance between front-end and back-end — Full Stack is for you!',
    quizOpenAria: 'Open quiz',
    quizClosePanelAria: 'Close quiz',
    quoteTitle: 'DAILY QUOTE',
    getQuote: 'GET QUOTE',
    quoteError: 'Failed to load quote. Please try again.',
    quoteLoading: 'Loading...',
    phone: 'PHONE',
    contactPhone: '(37) 99109-2231',
    contactEmail: 'galdinol558@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn'
  },
  pt: {
    role: 'ANALISTA DE SUPORTE | FULL STACK C#',
    intro: 'Construindo soluções robustas com <span class="highlight">C# & Cloud</span>...',
    countTitle: 'TEMPO ATÉ A FORMAÇÃO',
    months: 'MESES',
    days: 'DIAS',
    hours: 'HORAS',
    minutes: 'MINUTOS',
    about: 'SOBRE MIM',
    aboutText: 'Desenvolvedora Full Stack com especialização em C# e computação em nuvem. Tenho experiência em desenvolvimento de APIs robustas, gerenciamento de bases de dados e implementação de infraestrutura em nuvem com AWS. Minha abordagem combina excelência técnica com foco em eficiência operacional e confiabilidade de sistemas. Gosto de criar aplicações bem arquitetadas que resolvem problemas reais mantendo práticas de código limpo.',
    projectAdminTitle: 'API de Gestão de Produtos RESTful',
    projectAdmin: '<strong>C# ASP.NET Core | MySQL | LINQ</strong> - Uma API escalável seguindo princípios de arquitetura limpa com arquitetura em camadas, operações CRUD e documentação completa com Swagger. Construída com práticas modernas para aplicações de nível empresarial.',
    projectDescription: 'Projeto backend de nível empresarial com ênfase em arquitetura limpa, fluxo abrangente de dados e padrões de design orientados a serviços.',
    projectPinkParkingTitle: 'Sistema Digital de Arquivos',
    projectPinkParkingDesc: '<strong>Sistema Digital de Arquivos</strong> é uma plataforma administrativa desenvolvida para otimizar a gestão de documentos e fluxos de trabalho internos. Reduz o uso de papel enquanto proporciona organização, praticidade e eficiência operacional.',
    projectThirdTitle: 'Infraestrutura em Nuvem & Automação',
    projectThirdDesc: '<strong>AWS | Virtualização</strong> - Configuração de máquinas virtuais e ambientes automatizados para fluxos de trabalho otimizados. Implementação de infraestrutura lógica e automação inteligente para eficiência operacional.',
    projectFourthTitle: 'Plataforma de Suporte B2B',
    projectFourthDesc: '<strong>Suporte a Hardware & Gerenciamento de Redes</strong> - Plataforma B2B especializada em suporte a hardware, resolução de problemas de rede e melhoria de processos. Service desk com capacidades de monitoramento de desempenho.',
    projectLabel: 'PROJETO',
    projects: 'PROJETOS',
    skills: 'HABILIDADES',
    learning: 'APRENDENDO',
    contact: 'CONTATO',
    quizTitle: 'Quiz: Front-end ou Back-end?',
    quizResultBtn: 'Ver Resultado',
    quizResetBtn: 'Reiniciar',
    quizCloseBtn: 'Fechar',
    resultFrontTitle: 'Desenvolvedor Front-end',
    resultBackTitle: 'Desenvolvedor Back-end',
    resultFullStackTitle: 'Full Stack',
    resultFrontDesc: 'Você tem perfil voltado para interfaces, design e experiências visuais.',
    resultBackDesc: 'Você gosta de lógica, dados e construir a estrutura por trás das aplicações.',
    resultFullStackDesc: 'Você tem equilíbrio entre front-end e back-end — Full Stack é para você!',
    quizOpenAria: 'Abrir quiz',
    quizClosePanelAria: 'Fechar quiz',
    quoteTitle: 'FRASE DO DIA',
    getQuote: 'OBTER FRASE',
    quoteError: 'Falha ao carregar a frase. Tente novamente.',
    quoteLoading: 'Carregando...',
    phone: 'TELEFONE',
    contactPhone: '(37) 99109-2231',
    contactEmail: 'galdinol558@gmail.com',
    github: 'GitHub',
    linkedin: 'LinkedIn'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[lang][key];
  });

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  if (typeof window.updateQuizLanguage === 'function') {
    window.updateQuizLanguage(lang);
  }
}

/* ===== Funcionalidade da API de Frases ===== */
async function fetchQuote() {
  // Seleciona os elementos do HTML que serão alterados
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteStatus = document.getElementById('quoteStatus');
  const quoteBtn = document.querySelector('.quote-btn');

  // Evita erros caso algum campo esteja vazio
  if (!quoteText || !quoteAuthor || !quoteStatus || !quoteBtn) return;

  const lang = document.documentElement.lang || 'en';
  const translation = translations[lang] || translations.en;

  // Atualiza o conteúdo sem precisar recarregar a página
  quoteStatus.textContent = translation.quoteLoading;
  quoteStatus.classList.remove('error');
  quoteStatus.classList.add('loading');
  quoteBtn.disabled = true;

  // Busca a frase motivacional do dia
  try {
    // URL da API utilizada para obter a frase do dia
    // Realiza a requisição para a API
    const response = await fetch('https://dummyjson.com/quotes/random', { cache: 'no-store' });

    // Verifica se a resposta foi retornada com sucesso
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Converte os dados recebidos para JSON
    const data = await response.json();

    // Armazena o resultado da API em uma variável
    // Organiza os dados recebidos para facilitar a exibição
    const quote = data.quote || data.text || '';
    const author = data.author || 'Unknown';

    // Verifica se os dados foram recebidos corretamente
    if (!quote) {
      throw new Error('Quote payload missing');
    }

    // Obtém a frase motivacional retornada pela API
    quoteText.textContent = `"${quote}"`;
    quoteAuthor.textContent = `— ${author}`;

    // Exibe a frase na tela para o usuário
    quoteStatus.textContent = '';
    quoteStatus.classList.remove('loading', 'error');
    // Retorna os dados para serem utilizados em outras funções
    return { quote, author };
  } catch (error) {
    // Caso ocorra algum erro, exibe a mensagem no console
    console.error('Error fetching quote:', error);
    try {
      // Faz a requisição para a API informada
      const response = await fetch('https://zenquotes.io/api/today');

      // Verifica se a resposta foi recebida com sucesso
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Converte a resposta para formato JSON
      const data = await response.json();
      const quote = data[0] || {};
      const text = quote.q || '';
      const authorRaw = quote.a || 'Anonymous';
      const author = authorRaw.replace(/,\s*$/g, '');

      quoteText.textContent = `"${text}"`;
      quoteAuthor.textContent = `— ${author}`;
      quoteStatus.textContent = '';
      quoteStatus.classList.remove('loading', 'error');
      // Exibe a frase na tela para o usuário
      return { quote: text, author };
    } catch (fallbackError) {
      console.error('Error fetching fallback quote:', fallbackError);
      quoteStatus.textContent = translation.quoteError;
      quoteStatus.classList.add('error');
      quoteStatus.classList.remove('loading');
      quoteText.textContent = translation.quoteError;
      quoteAuthor.textContent = '';
      // Retorna null para indicar que a requisição falhou
      return null;
    }
  } finally {
    quoteBtn.disabled = false;
  }
}

function openQuote() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  // Chama a função responsável por buscar os dados
  fetchQuote();
}

function closeQuote() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

window.openQuote = openQuote;
window.closeQuote = closeQuote;
window.fetchQuote = fetchQuote;

function attachQuoteEventHandlers() {
  const quoteOpenButton = document.getElementById('quoteBtn');
  const quoteActionButton = document.querySelector('.quote-btn');

  if (quoteOpenButton) {
    quoteOpenButton.addEventListener('click', openQuote);
  }

  if (quoteActionButton) {
    quoteActionButton.addEventListener('click', fetchQuote);
  }
}

// Executa a função quando a página for carregada
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', attachQuoteEventHandlers);
} else {
  attachQuoteEventHandlers();
}

const projects = {
  items: [
    {
      image: '../img/admin.png',
      titleKey: 'projectAdminTitle',
      descriptionKey: 'projectAdmin'
    },
    {
      image: '../img/projeto2.png',
      titleKey: 'projectPinkParkingTitle',
      descriptionKey: 'projectPinkParkingDesc'
    },
    {
      image: '../img/fundo.png',
      titleKey: 'projectThirdTitle',
      descriptionKey: 'projectThirdDesc'
    },
    {
      image: '../img/fundo.png',
      titleKey: 'projectFourthTitle',
      descriptionKey: 'projectFourthDesc'
    }
  ]
};

let currentProjectIndex = 0;

const skillsData = {
  skillsList: [
    'C#',
    'ASP.NET Core',
    'MySQL',
    'LINQ & Entity Framework',
    'REST APIs',
    'Git & GitHub',
    'AWS'
  ],
  learningList: [
    'Cloud Computing & Infrastructure',
    'Microservices Architecture',
    'Docker & Containerization',
    'Advanced AWS Services',
    'System Design Patterns'
  ]
};

let currentSkillsIndex = 0;

function openAbout() {
  const modal = document.getElementById('aboutModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeAbout() {
  const modal = document.getElementById('aboutModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function openProjects() {
  const modal = document.getElementById('projectsModal');
  if (!modal) return;
  currentProjectIndex = 0;
  renderProject();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjects() {
  const modal = document.getElementById('projectsModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function renderProject() {
  const project = projects.items[currentProjectIndex];
  const lang = document.documentElement.lang || 'en';
  const translation = translations[lang] || translations.en;

  document.getElementById('projectImage').style.backgroundImage = `url('${project.image}')`;
  document.getElementById('projectTitle').textContent = project.titleKey
    ? translation[project.titleKey]
    : `${translation.projectLabel} ${String(currentProjectIndex + 1).padStart(2, '0')}`;
  document.querySelector('.project-description').innerHTML = translation[project.descriptionKey];
  document.getElementById('projectCounter').textContent = `${currentProjectIndex + 1} / ${projects.items.length}`;
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.items.length) % projects.items.length;
  renderProject();
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.items.length;
  renderProject();
}

function openSkills() {
  const modal = document.getElementById('skillsModal');
  if (!modal) return;
  currentSkillsIndex = 0;
  renderSkills();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeSkills() {
  const modal = document.getElementById('skillsModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function openContact() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeContact() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

window.openContact = openContact;
window.closeContact = closeContact;

function renderSkills() {
  const lang = document.documentElement.lang || 'en';
  const translation = translations[lang] || translations.en;
  
  // Determina qual lista deve ser exibida
  const isSkills = currentSkillsIndex === 0;
  const items = isSkills ? skillsData.skillsList : skillsData.learningList;
  const titleKey = isSkills ? 'skills' : 'learning';
  
  // Atualiza o título
  const titleElement = document.getElementById('skillsTitle');
  titleElement.textContent = translation[titleKey];
  
  // Renderiza a lista
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = '';
  
  items.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

function prevSkills() {
  currentSkillsIndex = (currentSkillsIndex - 1 + 2) % 2;
  renderSkills();
}

function nextSkills() {
  currentSkillsIndex = (currentSkillsIndex + 1) % 2;
  renderSkills();
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const difference = graduationDate - now;

  if (difference <= 0) {
    document.getElementById('months').textContent = '00';
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    return;
  }

  const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  document.getElementById('months').textContent = pad(months);
  document.getElementById('days').textContent = pad(days);
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ===== Quiz logic (Front-end / Back-end) ===== */
(function(){
  const quizQuestions = {
    en: [
      { q: '1. What seems more fun?', A: 'Create beautiful interactive screens', B: 'Solve logic and make systems work' },
      { q: '2. You prefer:', A: 'Working with design, animations and user experience', B: 'Working with data, APIs and features' },
      { q: '3. When you visit a website, what catches your attention most?', A: 'The visual style and interface', B: 'How everything works behind the scenes' },
      { q: '4. Which sentence fits you best?', A: '“I want to make everything prettier and more intuitive.”', B: '“I want to make everything work perfectly.”' },
      { q: '5. You like more:', A: 'HTML, CSS and JavaScript', B: 'Python, databases and servers' },
      { q: '6. Which task seems more interesting?', A: 'Creating animations and modern pages', B: 'Building systems, authentication and APIs' }
    ],
    pt: [
      { q: '1. O que parece mais divertido?', A: 'Criar telas bonitas e interativas', B: 'Resolver lógica e fazer sistemas funcionarem' },
      { q: '2. Você prefere:', A: 'Trabalhar com design, animações e experiência do usuário', B: 'Trabalhar com dados, APIs e funcionalidades' },
      { q: '3. Quando entra em um site, o que mais chama sua atenção?', A: 'O visual e a interface', B: 'Como tudo funciona por trás' },
      { q: '4. Qual dessas frases mais combina com você?', A: '“Quero deixar tudo mais bonito e intuitivo.”', B: '“Quero fazer tudo funcionar perfeitamente.”' },
      { q: '5. Você gosta mais de:', A: 'HTML, CSS e JavaScript', B: 'Python, bancos de dados e servidores' },
      { q: '6. Qual tarefa parece mais interessante?', A: 'Criar animações e páginas modernas', B: 'Construir sistemas, autenticação e APIs' }
    ]
  };

  let questions = quizQuestions.en;
  const quizPanel = document.getElementById('quizPanel');
  const gameBtn = document.getElementById('gameBtn');
  const closeQuiz = document.getElementById('closeQuiz');
  const qContainer = quizPanel ? quizPanel.querySelector('.questions') : null;
  const resultBtn = document.getElementById('resultBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultCard = document.getElementById('resultCard');
  const resultTitle = document.getElementById('resultTitle');
  const resultDesc = document.getElementById('resultDesc');
  const closeResult = document.getElementById('closeResult');
  const quizTitle = quizPanel ? quizPanel.querySelector('.quiz-header h2') : null;
  const contactNav = document.getElementById('contactNav');
  const closeContactBtn = document.getElementById('closeContactBtn');

  let answers = Array(questions.length).fill(null);
  let populated = false;

  function getCurrentLanguage(){
    return document.documentElement.lang === 'pt' ? 'pt' : 'en';
  }

  function getTranslation(){
    const lang = getCurrentLanguage();
    return translations[lang] || translations.en;
  }

  function setQuizLanguage(lang){
    questions = quizQuestions[lang] || quizQuestions.en;
    answers = Array(questions.length).fill(null);
    const translation = getTranslation();
    if(resultBtn) {
      resultBtn.textContent = translation.quizResultBtn;
      resultBtn.disabled = true;
      resultBtn.classList.add('disabled');
      resultBtn.setAttribute('aria-disabled', 'true');
    }
    if(resetBtn) resetBtn.textContent = translation.quizResetBtn;
    if(closeResult) closeResult.textContent = translation.quizCloseBtn;
    if(gameBtn) gameBtn.setAttribute('aria-label', translation.quizOpenAria);
    if(closeQuiz) closeQuiz.setAttribute('aria-label', translation.quizClosePanelAria);
    if(quizTitle) quizTitle.textContent = translation.quizTitle;
    populated = false;
    if(quizPanel && quizPanel.getAttribute('aria-hidden') === 'false') {
      populateQuestions();
    } else if(qContainer) {
      qContainer.innerHTML = '';
    }
  }

  window.updateQuizLanguage = function(lang){
    setQuizLanguage(lang);
  };

  function populateQuestions(){
    if(!qContainer) return;
    qContainer.innerHTML = '';
    questions.forEach((item, idx) =>{
      const section = document.createElement('section');
      section.className = 'question';
      section.dataset.index = idx;

      const h3 = document.createElement('h3'); h3.textContent = item.q;
      const opts = document.createElement('div'); opts.className = 'options';

      const btnA = document.createElement('button');
      btnA.type = 'button'; btnA.className = 'option'; btnA.dataset.value = 'A'; btnA.innerHTML = `A) ${item.A}`;
      const btnB = document.createElement('button');
      btnB.type = 'button'; btnB.className = 'option'; btnB.dataset.value = 'B'; btnB.innerHTML = `B) ${item.B}`;

      if(answers[idx] === 'A') btnA.classList.add('selected');
      if(answers[idx] === 'B') btnB.classList.add('selected');

      [btnA, btnB].forEach(btn => {
        btn.addEventListener('click', ()=> selectOption(idx, btn));
        btn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });
      });

      opts.appendChild(btnA); opts.appendChild(btnB);
      section.appendChild(h3); section.appendChild(opts);
      qContainer.appendChild(section);
    });
    populated = true;
  }

  function selectOption(index, btn){
    const section = qContainer.querySelector(`.question[data-index="${index}"]`);
    if(!section) return;
    section.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    btn.classList.add('selected');
    answers[index] = btn.dataset.value;
    updateResultButton();
  }

  function updateResultButton(){
    const ready = answers.every(a => a === 'A' || a === 'B');
    if(!resultBtn) return;
    resultBtn.disabled = !ready;
    resultBtn.classList.toggle('disabled', !ready);
    resultBtn.setAttribute('aria-disabled', (!ready).toString());
  }

  function computeResult(){
    const countA = answers.filter(a=>a==='A').length;
    const countB = answers.filter(a=>a==='B').length;
    const translation = getTranslation();
    let title = '';
    let desc = '';
    if(countA > countB){ title = translation.resultFrontTitle; desc = translation.resultFrontDesc; }
    else if(countB > countA){ title = translation.resultBackTitle; desc = translation.resultBackDesc; }
    else { title = translation.resultFullStackTitle; desc = translation.resultFullStackDesc; }
    resultTitle.textContent = title;
    resultDesc.textContent = desc;
    resultCard.classList.add('show'); resultCard.setAttribute('aria-hidden','false');
  }

  function resetQuiz(){
    answers = Array(questions.length).fill(null);
    qContainer && qContainer.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
    updateResultButton();
    resultCard.classList.remove('show'); resultCard.setAttribute('aria-hidden','true');
  }

  function openPanel(){
    if(!populated) populateQuestions();
    quizPanel && quizPanel.setAttribute('aria-hidden','false');
  }
  function closePanel(){ quizPanel && quizPanel.setAttribute('aria-hidden','true'); }

  if(gameBtn) gameBtn.addEventListener('click', ()=>{
    const hidden = quizPanel.getAttribute('aria-hidden') === 'true';
    if(hidden) openPanel(); else closePanel();
  });

  if(contactNav) contactNav.addEventListener('click', openContact);
  if(closeContactBtn) closeContactBtn.addEventListener('click', closeContact);
  if(closeQuiz) closeQuiz.addEventListener('click', closePanel);
  if(resultBtn) resultBtn.addEventListener('click', (e)=>{
    resultBtn.classList.add('btn-click');
    setTimeout(()=> resultBtn.classList.remove('btn-click'), 180);

    const ready = answers.every(a => a === 'A' || a === 'B');
    if(!ready){
      quizPanel.classList.add('shake');
      setTimeout(()=> quizPanel.classList.remove('shake'), 380);
      return;
    }
    computeResult();
  });
  if(resetBtn) resetBtn.addEventListener('click', (e)=>{
    resetBtn.classList.add('btn-click');
    setTimeout(()=> resetBtn.classList.remove('btn-click'), 180);
    resetQuiz();
  });
  if(closeResult) closeResult.addEventListener('click', ()=>{ resultCard.classList.remove('show'); resultCard.setAttribute('aria-hidden','true'); });

  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ closePanel(); resultCard.classList.remove('show'); resultCard.setAttribute('aria-hidden','true'); } });

  setQuizLanguage(getCurrentLanguage());
})();

/* ===== UI Interaction Enhancements ===== */
function enhanceInteractions() {
  const hoverTargets = document.querySelectorAll('.nav-card, .project-nav, .skills-nav, .game-btn, .quote-float-btn, .quote-btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => el.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => el.classList.remove('is-hover'));
    el.addEventListener('focus', () => el.classList.add('is-hover'));
    el.addEventListener('blur', () => el.classList.remove('is-hover'));
  });

  // Garante que o nav de contato/botão abra sempre o modal de contato
  const contactNav = document.getElementById('contactNav');
  if (contactNav) {
    contactNav.removeEventListener('click', openContact);
    contactNav.addEventListener('click', openContact);
  }

  // Garante que o botão flutuante de frase abra o modal de frase
  const qFloat = document.getElementById('quoteBtn');
  if (qFloat) {
    qFloat.removeEventListener('click', openQuote);
    qFloat.addEventListener('click', openQuote);
  }

  // Também conecta o botão de ação no modal de frase (caso não tenha sido conectado)
  const qAction = document.querySelector('.quote-btn');
  if (qAction) {
    qAction.removeEventListener('click', fetchQuote);
    qAction.addEventListener('click', fetchQuote);
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', enhanceInteractions);
} else {
  enhanceInteractions();
}
