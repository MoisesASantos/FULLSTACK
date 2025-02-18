const app =  document.getElementById("app")

const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
    }
}

const startApp = () => {
    const content = `
      <form id="form">
        <input type="email" placeholder="E-mail" required>
        <input type="text" placeholder="telefone" required>
        <button>
            Enviar
        </button>
    </form>
    `
    app.innerHTML = content;
    formAction()
}

startApp()