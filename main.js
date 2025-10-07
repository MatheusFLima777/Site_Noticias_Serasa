const iconeMenu = document.querySelector('.icone-menu');
const menuAtivo = document.querySelector('.menu-mobile');

iconeMenu.addEventListener('click', () => {
  menuAtivo.classList.toggle('menu-ativo');

  console.log('Clickei no botao');
});

let form = document.getElementById("meu-formulario");

async function handleSubmit(event) {
  event.preventDefault();
  let statusOk = document.getElementById("status-formulario-ok");
  let statusNotOk = document.getElementById("status-formulario-not-ok");

  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    statusOk.innerHTML = "Sucesso! Obrigado por enviar!";
    form.reset()
  }).catch(error => {
    statusNotOk.innerHTML = "Ops! Houve um erro ao enviar seu formulario. Revise as informacoes e envie novamente"
  });
}
form.addEventListener("submit", handleSubmit)
