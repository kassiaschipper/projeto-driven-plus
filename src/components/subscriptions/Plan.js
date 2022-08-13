import styled from "styled-components";
import { useState, useEffect } from "react";
import { getPlan } from "../../services/drivenPlus";
import { useParams, useNavigate } from "react-router-dom";
import Perks from "./Perks";
import { Circles } from "react-loader-spinner";
import Arrow from "../../assets/images/Arrow.png";
import PerksList from "../../assets/images/PerksList.png";
import Price from "../../assets/images/Price.png";

export default function Plan() {
  const { planId } = useParams();
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPlanById();
  }, []);

  function getPlanById() {
    getPlan(planId)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.perks);
        setLoading(false);
        setPlan(response.data);
      })
      .catch((err) => {
        alert("Erro ao selecionar plano");
        setLoading(false);
      });
  }

  function handleForm() {
    alert("só vai");
  }

  return (
    <Content>
      {loading ? (
        <Circles width="100%" color="#ff4791" height={1000} aling="center" />
      ) : (
        <InfoPlanWrapper>
          <p onClick={() => navigate("/subscriptions")}>
            <img src={Arrow} />
          </p>
          <LogoWrapper>
            <img src={plan.image} />
            <div>{plan.name}</div>
          </LogoWrapper>
          {plan.perks ? (
            <>
              <BenefitsWrapper>
                <img src={PerksList} />
                <h3>Benefícios:</h3>
              </BenefitsWrapper>{" "}
              <ul>
                <Perks perks={plan.perks} />
              </ul>
            </>
          ) : (
            ""
          )}
          <PriceWrapper>
            <img src={Price} />
            <h3>Preço:</h3>
          </PriceWrapper>
          <span>R$ {plan.price.replace(".", ",")} cobrados mensalmente </span>
        </InfoPlanWrapper>
      )}

      <form onSubmit={handleForm}>
        <input
          name="cardName"
          placeholder="Nome impresso no cartão"
          type="text"
          value={cardName}
          disabled={loading ? true : false}
          onChange={(e) => setCardName(e.target.value)}
          required
        ></input>

        <input
          name="cardNumber"
          placeholder="Digitos do cartão"
          type="text"
          value={cardNumber}
          maxLength="16"
          disabled={loading ? true : false}
          onChange={(e) =>
            setCardNumber(
              e.target
                .valuereplace(/\D/g, "")
                .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
                .substring(0, 19)
            )
          }
          required
        ></input>

        <input
          name="securityNumber"
          placeholder="Código de segurança"
          type="text"
          value={securityNumber}
          maxLength="3"
          disabled={loading ? true : false}
          onChange={(e) =>
            setSecurityNumber(
              e.target.value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d{4})/, "$1/$2")
                .substring(0, 7)
            )
          }
          required
        ></input>
        <input
          name="expirationDate"
          placeholder="Validade"
          type="date"
          value={expirationDate}
          disabled={loading ? true : false}
          onChange={(e) =>
            setExpirationDate(
              e.target.value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d{4})/, "$1/$2")
                .substring(0, 7)
            )
          }
          required
        ></input>
      </form>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0e0e13;
  p {
    position: fixed;
    top: 24px;
    left: 22px;
  }
`;
const InfoPlanWrapper = styled.div`
  position: relative;
  left: 0;
  top: 29%;
  bottom: 65%;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: white;

  ul {
    margin-top: 10px;
    margin-left: 12%;
    margin-bottom: 12px;
    width: 300px;
    height: 05vw;
    display: flex;
    flex-wrap: wrap;
  }

  span {
    position: relative;
    top: 60px;
    left: 12%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 95px;
  position: relative;
  bottom: 100px;
  margin: 0 auto;

  img {
    width: 150px;
    margin: 10px auto;
  }
`;
const BenefitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-left: 12%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
  img {
    width: 12px;
    height: 16px;
  }
`;
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 70px;
  left: 12%;
  width: 17%;
  height: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  img {
    width: 12px;
    height: 16px;
  }
`;
