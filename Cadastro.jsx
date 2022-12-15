import {} from "react-router-dom";
export function Cadastro (){
const handleSubmit =(e) =>{
  e.preventDefault();
  console.log("submit");
}
  return (
    <div id="login">
     <h1 className="title"> Cadastro de Motorista</h1>
  <form className="form" onSubmit={handleSubmit}>
      <div className="field">
          <label htmlFor="CPF">CPF</label>
        <input type="CPF" placeholder="DIGITE SEU CPF" name="CPF" id="CPF"/>
      </div>
      <div className="field">
          <label htmlFor="password">Senha</label>
        <input type="password" placeholder="******" name="password" id="password"/>
      </div>
      <div className="actions">
        <button type="submit">Cadastrar</button>
      </div>
  </form>
     </div>





  );
};