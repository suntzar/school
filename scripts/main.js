// ===================================================================================
// VARIÁVEIS GLOBAIS E INICIALIZAÇÃO
// ===================================================================================
let students = [];
let studentModal, deleteModal;
let searchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
    studentModal = new bootstrap.Modal(document.getElementById('studentModal'));
    deleteModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderStudentList();
    });
    
    setupThemeSwitcher();
    loadFromLocalStorage();
    renderStudentList();
    feather.replace();
});


// ===================================================================================
// LÓGICA DO TEMA (CLARO/ESCURO)
// ===================================================================================
function setupThemeSwitcher() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;
    const moonIcon = themeSwitcher.querySelector('.icon-moon');
    const sunIcon = themeSwitcher.querySelector('.icon-sun');

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    html.setAttribute('data-bs-theme', savedTheme);
    moonIcon.style.display = savedTheme === 'dark' ? 'none' : 'block';
    sunIcon.style.display = savedTheme === 'dark' ? 'block' : 'none';

    themeSwitcher.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
        sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
        feather.replace(); // Recarrega os ícones para garantir a visibilidade correta
    });
}


// ===================================================================================
// GERENCIAMENTO DE DADOS (LocalStorage, Upload, Download)
// ===================================================================================
function saveToLocalStorage() { try { localStorage.setItem('studentDatabase', JSON.stringify(students)); console.log('Dados salvos no LocalStorage.'); } catch (error) { console.error('Erro ao salvar no LocalStorage:', error); alert('Não foi possível salvar os dados. O armazenamento pode estar cheio.'); } }
function loadFromLocalStorage() { const data = localStorage.getItem('studentDatabase'); if (data) { try { students = JSON.parse(data); console.log('Dados carregados do LocalStorage.'); } catch (error) { console.error('Erro ao ler dados do LocalStorage:', error); students = []; } } }
function triggerFileUpload() { document.getElementById('jsonFileInput').click(); }

function handleFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data)) { students = data; saveAndRender(); alert(`${students.length} alunos carregados com sucesso!`); } 
            else { alert('Erro: O arquivo JSON não contém um array de alunos válido.'); }
        } catch (error) { alert('Erro ao processar o arquivo. Verifique se é um JSON válido.'); console.error(error); }
    };
    reader.readAsText(file);
    event.target.value = null;
}

function downloadJSON() {
    if (students.length === 0) { alert('Não há dados para baixar.'); return; }
    const dataStr = JSON.stringify(students, null, 4);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'database_alunos.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ===================================================================================
// RENDERIZAÇÃO DA LISTA DE ALUNOS
// ===================================================================================
function getStatusBadge(status) {
    status = status || 'Ativo';
    const statusColors = { 'Ativo': 'bg-success', 'Transferido': 'bg-warning text-dark', 'Inativo': 'bg-secondary', };
    const colorClass = statusColors[status] || 'bg-light text-dark';
    return `<span class="badge ${colorClass}">${status}</span>`;
}

function highlightText(text, term) {
    if (!term || !text) return text || '';
    const regex = new RegExp(`(${term.replace(/[-\/\^$*+?.()|[\]{}]/g, '\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function renderStudentList() {
    const container = document.getElementById('student-list-container');
    const placeholder = document.getElementById('placeholder');
    container.innerHTML = '';
    
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const filteredStudents = normalizedSearchTerm ? students.filter(student => {
        return (student.nome && student.nome.toLowerCase().includes(normalizedSearchTerm)) ||
               (student.cpf && student.cpf.toLowerCase().includes(normalizedSearchTerm)) ||
               (student.mae && student.mae.toLowerCase().includes(normalizedSearchTerm)) ||
               (student.pai && student.pai.toLowerCase().includes(normalizedSearchTerm));
    }) : students;

    if (filteredStudents.length === 0) {
        placeholder.style.display = 'block';
        if (searchTerm) {
            placeholder.innerHTML = `<i data-feather="search" style="width: 3rem; height: 3rem; color: var(--secondary-pastel);"></i><br><br>Nenhum resultado encontrado para "<strong>${searchTerm}</strong>".`;
        } else {
            placeholder.innerHTML = `<i data-feather="users" style="width: 3rem; height: 3rem; color: var(--secondary-pastel);"></i><br><br>Nenhum aluno na lista. Utilize os botões acima para carregar ou adicionar.`;
        }
        feather.replace();
        return;
    }
    
    placeholder.style.display = 'none';

    const groupedData = filteredStudents.reduce((acc, student, index) => {
        const studentWithOriginalIndex = { ...student, originalIndex: students.indexOf(student) };
        const groupKey = `${student.turma || 'Sem Turma'} - ${student.turno || 'Sem Turno'}`;
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(studentWithOriginalIndex);
        return acc;
    }, {});

    const sortedGroups = Object.keys(groupedData).sort();

    sortedGroups.forEach(groupKey => {
        const groupTitle = document.createElement('h4');
        groupTitle.className = 'turma-title';
        groupTitle.textContent = groupKey;
        container.appendChild(groupTitle);

        groupedData[groupKey].sort((a, b) => a.nome.localeCompare(b.nome));

        groupedData[groupKey].forEach(student => {
            const card = document.createElement('div');
            card.className = 'card student-card mb-3';
            card.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
                        <div>
                            <h5 class="card-title">${highlightText(student.nome, searchTerm)} ${getStatusBadge(student.status)}</h5>
                        </div>
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="openStudentModal(${student.originalIndex})"> <i data-feather="edit-2"></i> </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="confirmDelete(${student.originalIndex})"> <i data-feather="trash-2"></i> </button>
                        </div>
                    </div>
                    <hr>
                    <p class="card-text"><strong>CPF:</strong> ${highlightText(student.cpf, searchTerm)}</p>
                    <p class="card-text"><strong>Nascimento:</strong> ${student.nascimento || '---'}</p>
                    <p class="card-text"><strong>Mãe:</strong> ${highlightText(student.mae, searchTerm)}</p>
                    <p class="card-text"><strong>Pai:</strong> ${highlightText(student.pai, searchTerm)}</p>
                    <p class="card-text"><strong>Telefone:</strong> ${student.telefone && student.telefone.length ? student.telefone.join(', ') : '---'}</p>
                    <p class="card-text"><strong>Endereço:</strong> ${student.endereco || '---'}</p>
                    <p class="card-text"><strong>Cor/Raça:</strong> ${student.cor || '---'}</p>
                </div>
            `;
            container.appendChild(card);
        });
    });

    feather.replace();
}


// ===================================================================================
// LÓGICA DO MODAL E CRUD (Create, Read, Update, Delete)
// ===================================================================================
function openStudentModal(index = null) {
    const form = document.getElementById('studentForm');
    form.reset();
    const modalTitle = document.getElementById('studentModalLabel');
    const studentIndexInput = document.getElementById('studentIndex');

    if (index !== null) {
        modalTitle.textContent = 'Editar Dados do Aluno';
        const student = students[index];
        studentIndexInput.value = index;
        document.getElementById('nome').value = student.nome;
        document.getElementById('cpf').value = student.cpf || '';
        document.getElementById('status').value = student.status || 'Ativo';
        document.getElementById('turma').value = student.turma;
        document.getElementById('turno').value = student.turno || '';
        document.getElementById('nascimento').value = student.nascimento || '';
        document.getElementById('mae').value = student.mae || '';
        document.getElementById('pai').value = student.pai || '';
        document.getElementById('telefone').value = student.telefone ? student.telefone.join(', ') : '';
        document.getElementById('endereco').value = student.endereco || '';
        document.getElementById('cor').value = student.cor || '';
    } else {
        modalTitle.textContent = 'Adicionar Novo Aluno';
        studentIndexInput.value = '';
        document.getElementById('status').value = 'Ativo';
    }
    studentModal.show();
}

function saveStudent() {
    const index = document.getElementById('studentIndex').value;
    const telefones = document.getElementById('telefone').value.split(',').map(t => t.trim()).filter(t => t);
    const studentData = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        status: document.getElementById('status').value,
        turma: document.getElementById('turma').value,
        turno: document.getElementById('turno').value,
        nascimento: document.getElementById('nascimento').value,
        mae: document.getElementById('mae').value,
        pai: document.getElementById('pai').value,
        telefone: telefones,
        endereco: document.getElementById('endereco').value,
        cor: document.getElementById('cor').value,
    };

    if (!studentData.nome || !studentData.turma) { alert('Os campos "Nome Completo" e "Turma" são obrigatórios.'); return; }
    if (index !== '') { students[index] = studentData; } 
    else { students.push(studentData); }

    saveAndRender();
    studentModal.hide();
}

function confirmDelete(index) {
    const student = students[index];
    document.getElementById('studentNameToDelete').textContent = student.nome;
    const confirmBtn = document.getElementById('confirmDeleteBtn');
    const newConfirmBtn = confirmBtn.cloneNode(true);
    newConfirmBtn.addEventListener('click', () => { deleteStudent(index); deleteModal.hide(); });
    confirmBtn.replaceWith(newConfirmBtn);
    deleteModal.show();
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    saveToLocalStorage();
    renderStudentList();
}
