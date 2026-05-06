// Dados do usuário
const dadosUsuario = {
    nome: "Luciana Galdino",
    cargo: "Support Analyst | Full Stack C#",
    formacao: {
        instituicao: "Proz",
        anoConclusao: 2026
    },
    skills: [
        { nome: "Cloud AWS", nivel: 90 },
        { nome: "C#/.NET", nivel: 85 },
        { nome: "PHP/React", nivel: 80 },
        { nome: "Redes", nivel: 85 },
        { nome: "n8n/Automação", nivel: 95 }
    ]
};

// Função para obter o status de formação
function getStatusFormatura(anoConclusao) {
    const anoAtual = new Date().getFullYear();
    return anoAtual >= anoConclusao ? "EM FORMAÇÃO NO CURSO DE DESENVOLVIMENTO DE SISTEMAS" : "Estudante de Dev de Sistemas (Previsão 2026)";
}

// Função para obter a cor baseada no nível
function getCorNivel(nivel) {
    if (nivel > 85) return "#2E8B57"; // Verde Esmeralda
    if (nivel >= 70) return "#87CEEB"; // Azul Sky
    return "#FFD700"; // Dourado
}

// Renderização das experiências
function renderExperiencias() {
    const container = document.getElementById('experiencia-container');
    const experiencias = [
        {
            titulo: "One Soluções",
            descricao: "Atendimento ao cliente, suporte técnico e desenvolvimento de soluções internas"
        },
        {
            titulo: "Projetos Independentes",
            descricao: "Automação com n8n, APIs REST e agentes de IA para fluxos de atendimento e gestão de sistemas"
        }
    ];
    experiencias.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `
            <h3>${exp.titulo}</h3>
            <p>${exp.descricao}</p>
        `;
        container.appendChild(card);
    });
}

// Renderização das skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    dadosUsuario.skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${skill.nome}</h3>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${skill.nivel}%; background-color: ${getCorNivel(skill.nivel)};"></div>
            </div>
            <p>${skill.nivel}%</p>
        `;
        container.appendChild(card);
    });
}

// Renderização dos projetos
function renderProjetos() {
    const container = document.getElementById('projetos-container');
    const projetos = [
        {
            titulo: "Divmed Sistema de Gestão",
            descricao: "Bubble.io"
        },
        {
            titulo: "Agente de IA para Fluxos de Atendimento",
            descricao: "Python/FastAPI"
        }
    ];
    projetos.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        card.innerHTML = `
            <h3>${proj.titulo}</h3>
            <p>${proj.descricao}</p>
        `;
        container.appendChild(card);
    });
}

// Intersection Observer para animações de slide-in
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nome').textContent = dadosUsuario.nome;
    document.getElementById('cargo').textContent = dadosUsuario.cargo;
    document.getElementById('status-formatura').textContent = getStatusFormatura(dadosUsuario.formacao.anoConclusao);
    renderExperiencias();
    renderSkills();
    renderProjetos();
    setupIntersectionObserver();
});