import styled from "styled-components";
import { useState, useContext } from "react";
import { postLogin } from "../../services/drivenPlus";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Driven from "../../assets/images/Driven.png";
import UserContext from "../../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { purchaseData, setPurchaseData } = useContext(UserContext);
  const { cardName, setCardName } = useContext(UserContext);
  const navigate = useNavigate();
  

  function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      email,
      password,
    };

    postLogin(body)
      .then((response) => {
        const authJSON = JSON.stringify(response.data);
        localStorage.setItem("drivenPlus", authJSON);
        if (response.data.membership === null) {
          //console.log(response.data.membership);
          navigate("/subscriptions");
        } else {
          setPurchaseData(response.data.membership);
          setCardName(response.data.name);
          navigate("/home");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("E-mail ou senha incorretos. Tente novamente.");
      });
  }

  return (
    <Content>
      <div>
        {" "}
        <img src={Driven} />
      </div>

      <form onSubmit={handleForm}>
        <input
          name="email"
          placeholder="email"
          type="email"
          value={email}
          disabled={loading ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        <input
          name="password"
          placeholder="senha"
          type="password"
          value={password}
          disabled={loading === false ? false : true}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        <button disabled={loading === false ? false : true} type="submit">
          {loading ? (
            <ThreeDots
              width="100%"
              color="#FFFFFF"
              aling="center"
              height={10}
            />
          ) : (
            "Entrar"
          )}
        </button>

        <span onClick={() => navigate("/sign-up")}>
          Não possui uma conta? Cadastre-se
        </span>
      </form>
    </Content>
  );
}

const Content = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }

    position: fixed;
    /* top: 0; */
    left: 0;
    width: 100%;
    height: 100%;

    background: #0e0e13;

    form {
      position: relative;
      top: 50vw;
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
      /* flex-direction: row; */
      justify-content: center;
      align-items: center;
      /* padding: 18px 122px; */
      /* gap: 10px; */

      position: relative;
      width: 299px;
      height: 52px;
      left: 0;
      /* top: 0; */
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
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-decoration-line: underline;
      color: #d5d5d5;
    }

    div {
      width: 300px;
      height: 50px;
      margin: 0 auto;
      position: relative;
      top: 40vw;
      left: 0;
    }
  }
`;
