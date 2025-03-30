// Substitua pelo ID da sua planilha e chave de API
const SPREADSHEET_ID = 'SUA_PLANILHA_ID';
const API_KEY = 'SUA_CHAVE_DE_API';
const RANGE = 'A1:D10'; // Ajuste o intervalo conforme necessário

// URL da API do Google Sheets
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

// Função para buscar os dados da API e exibi-los
async function fetchGoogleSheetData() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        if (data.values) {
            displayData(data.values);
        } else {
            console.error('Nenhum dado encontrado:', data);
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

// Função para exibir os dados na página
function displayData(values) {
    const table = document.createElement('table');
    table.border = '1';
    values.forEach(row => {
        let tr = document.createElement('tr');
        row.forEach(cell => {
            let td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    document.body.appendChild(table);
}

// Chamar a função ao carregar a página
window.onload = fetchGoogleSheetData;
