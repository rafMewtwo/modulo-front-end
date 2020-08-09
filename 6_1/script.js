const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const elementoEstados = document.getElementById('estado');
for (let i in estados) {
  const estado = document.createElement('option');
  estado.value = estados[i];
  estado.innerText = estados[i];
  elementoEstados.appendChild(estado);
}

const elemButton = document.getElementById('enviar');
elemButton.addEventListener('click', function (event) {
  event.preventDefault();
  alert("bbmp");
  const nome = document.getElementById('nome').value;
  console.log(nome);

});