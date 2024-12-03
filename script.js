let paragraphCount = 0;

const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const container = document.getElementById('container');

addButton.addEventListener('click', function() {
    const text = inputField.value.trim();

    if (text !== "") {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = text;
        container.appendChild(newParagraph);
        paragraphCount++;
        alert(`${paragraphCount} linha(s) foram adicionadas.`);
        inputField.value = "";
    } else {
        alert("Por favor, digite um texto.");
    }
});
