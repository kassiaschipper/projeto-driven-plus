import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import User from "../../assets/images/User.png";
import { useNavigate } from "react-router-dom";
import { deletePlan } from "../../services/drivenPlus";

export default function Home() {
  const { purchaseData, setPurchaseData } = useContext(UserContext);
  const { cardName, setCardName } = useContext(UserContext);
  const navigate = useNavigate();

  //console.log(cardName);
  //console.log(purchaseData)
  
  function planDelete() {
    deletePlan()
      .then(() => {
        navigate("/subscriptions");
      })
      .catch(() => alert("Erro ao deletar, tente novamente."));
  }
  return (
    <Content>
      <LogoWrapper>
        <img src={purchaseData.image} />
      </LogoWrapper>
      <ProfileWrapper>
        <img src={User} />
      </ProfileWrapper>
      <Title>
        <p>Olá, {cardName}</p>
      </Title>
      <Button>
        {purchaseData.perks.map((value) => (
          <a href={value.link} target="_blank">
            {" "}
            <button key={value.id}>{value.title}</button>
          </a>
        ))}
      </Button>

      <Footer>
        <ChangeButton>
          <button onClick={() => navigate("/subscriptions")}>
            Mudar Plano
          </button>
        </ChangeButton>
        <CancelButton>
          <button onClick={() => planDelete()}>Cancelar Plano</button>
        </CancelButton>
      </Footer>
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
`;

const LogoWrapper = styled.div`
  position: fixed;
  top: 32px;
  left: 38px;

  img {
    width: 50.13px;
    height: 51px;
  }
`;
const ProfileWrapper = styled.div`
  position: fixed;
  top: 22px;
  right: 23px;
  img {
    width: 34px;
    height: 33px;
  }
`;
const Title = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
`;

const Button = styled.div`
  position: fixed;
  width: 100%;
  bottom: 50%;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 299px;
    height: 52px;

    background: #ff4791;
    border-radius: 8px;

    margin-bottom: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 03%;
  justify-content: space-between;
`;
const ChangeButton = styled.div`
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    width: 299px;
    height: 52px;
    left: 38px;
    top: 543px;

    background: #ff4791;
    border-radius: 8px;
  }
`;

const CancelButton = styled.div`
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
    width: 299px;
    height: 52px;
    left: 38px;
    top: 603px;

    background: #ff4747;
    border-radius: 8px;
  }
`;
