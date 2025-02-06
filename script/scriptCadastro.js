// scriptCadastro.js

// Mostrar/ocultar campo "Outro" para o tipo de pet
const tipoSelect = document.getElementById('tipo');
const outroTipoPetGroup = document.getElementById('outroTipoPetGroup');

tipoSelect.addEventListener('change', () => {
    if (tipoSelect.value === 'Outro') {
        outroTipoPetGroup.style.display = 'block';
    } else {
        outroTipoPetGroup.style.display = 'none';
    }
});

// Mostrar/ocultar campo "Outro" de vacina
const vacinaOutroCheckbox = document.getElementById('vacinaOutro');
const outroVacinaGroup = document.getElementById('outroVacinaGroup');

vacinaOutroCheckbox.addEventListener('change', () => {
    outroVacinaGroup.style.display = vacinaOutroCheckbox.checked ? 'block' : 'none';
});
