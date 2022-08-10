import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/drivenPlus";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    const body = {
      email,
      name,
      cpf,
      password,
    };

    postSignUp(body)
      .then((response) => {
        setLoading(true);
        // navigate("/");
        console.log(response.data)
        alert("cadastro realizado")
      })
      .catch((err) => {
        setLoading(false);
        alert("Erro ao enviar os dados!");
      });
  }
  return (
    <Content>
      <div>
        {" "}
        <form onSubmit={handleForm}>
          <input
            name="name"
            placeholder="nome"
            type="text"
            value={name}
            disabled={loading ? true : false}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>

          <input
            name="cpf"
            placeholder="CPF"
            type="text"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            value={cpf}
            disabled={loading ? true : false}
            onChange={(e) => setCpf(e.target.value)}
            required
          ></input>

          <input
            name="email"
            placeholder="email"
            type="email"
            value={email}
            disabled={loading ? true : false}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></input>

          <input
            name="password"
            placeholder="senha"
            type="password"
            value={password}
            disabled={loading ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <button type="submit">
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} aling="center" />
            ) : (
              "Cadastrar"
            )}
          </button>
          <span onClick={() => navigate("/")}>Já possuí uma conta? Entre</span>
        </form>
      </div>
    </Content>
  );
}

const Content = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }

    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #0e0e13;

    form {
      position: relative;
      top:30vw;

      display: flex;
      flex-direction: column;
      height: 100%;
    }
    input {
      width: 299px;
      height: 52px;
      margin-bottom: 6px;
      color: #ff4791;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      padding-left: 10px;
      margin: 15px auto;
    }
    input::placeholder {
      color: #7e7e7e;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 18px 122px;
      gap: 10px;

      position: relative;
      width: 299px;
      height: 52px;
      left: 0;
      top: 0;
      margin: 10px auto;

      background: #ff4791;
      border-radius: 8px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;

      color: #ffffff;
    }
    span {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 13.976px;
      line-height: 17px;
      text-align: center;
      text-decoration-line: underline;

      color: #52b6ff;
    }
  }
`;
