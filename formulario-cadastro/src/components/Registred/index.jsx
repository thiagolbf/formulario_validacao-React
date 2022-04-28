import "./style.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Registred() {
  const history = useHistory();
  const params = useParams();

  function newRegister() {
    history.push("/");
  }

  console.log(params.name);

  return (
    <div className="registredContainer">
      <p>Bem vindo, {params.name}</p>

      <button onClick={() => newRegister()}> Voltar </button>
    </div>
  );
}

export default Registred;
