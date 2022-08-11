import styled from "styled-components";
import Plans from "./Plans";

export default function Subscriptions() {
  return (
    <Content>
      <Title>Escolha seu Plano</Title>
      <Plans />
    </Content>
  );
}

const Content = styled.div`
  @media (max-width: 414px) {
    * {
      box-sizing: border-box;
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: #0e0e13;
    /* background: white; */
  }
`;
const Title = styled.div`
  position: relative;
  top: 30px;
  left: 0;
  display: flex;
  justify-content: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #ffffff;
`;
