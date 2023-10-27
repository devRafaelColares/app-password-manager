function Form() {
  return (
    <form action="">
      <label htmlFor="nome-do-serviço">
        Nome do serviço
        <input
          type="text"
          id="nome-do-serviço"
          name="nome-do-serviço"
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          id="login"
          name="login"
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          type="password"
          id="senha"
          name="senha"
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          type="text"
          id="url"
          name="url"
        />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
