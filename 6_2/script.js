const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const elementoEstados = document.getElementById('estado');
for (let i in estados) {
  const estado = document.createElement('option');
  estado.value = estados[i];
  estado.innerText = estados[i];
  elementoEstados.appendChild(estado);
}


window.onload = function() {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
      console.log(date);
    }
  });

  new window.JustValidate('.lecture-form', {
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: 'O campo email é obrigatório',
        email: 'O email digitado não é válido'
      },
    },
  
    submitHandler: function (form, values) {
      console.log(form, values);
    },
  });
}
