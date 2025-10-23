// filepath: c:\Users\Cesar\Documents\CLASES EMH\CICLO II\Sesion 12\Ejercicio\main.js

document.addEventListener('DOMContentLoaded', () => {
    const subjectForm = document.getElementById('subject-form');
    const subjectTable = document.getElementById('subject-table-body');
    const subjects = JSON.parse(localStorage.getItem('subjects')) || [];

    function renderSubjects() {
        subjectTable.innerHTML = '';
        subjects.forEach((subject, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${subject.name}</td>
                <td>${subject.code}</td>
                <td>
                    <button onclick="editSubject(${index})">Edit</button>
                    <button onclick="deleteSubject(${index})">Delete</button>
                </td>
            `;
            subjectTable.appendChild(row);
        });
    }

    function addSubject(event) {
        event.preventDefault();
        const name = document.getElementById('subject-name').value;
        const code = document.getElementById('subject-code').value;

        if (name && code) {
            subjects.push({ name, code });
            localStorage.setItem('subjects', JSON.stringify(subjects));
            subjectForm.reset();
            renderSubjects();
        }
    }

    window.editSubject = (index) => {
        const subject = subjects[index];
        document.getElementById('subject-name').value = subject.name;
        document.getElementById('subject-code').value = subject.code;
        document.getElementById('subject-index').value = index;
    };

    window.deleteSubject = (index) => {
        subjects.splice(index, 1);
        localStorage.setItem('subjects', JSON.stringify(subjects));
        renderSubjects();
    };

    subjectForm.addEventListener('submit', addSubject);
    renderSubjects();
});