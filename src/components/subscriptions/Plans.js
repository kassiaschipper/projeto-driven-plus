import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getListPlans } from "../../services/drivenPlus";



export default function Plans() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    listPlans();
  }, []);

  function listPlans() {
    getListPlans()
      .then((response) => {
        setPlans(response.data);
     })
      .catch((err) => {
        alert("Erro ao listar planos");
        navigate("/");
      });
  }

   return (
    <>
      {" "}
      <PlansWrapper>
        {plans.map((value) => (
          <PlanWrapper key={value.id} onClick={()=> navigate(`/subscriptions/${value.id}`)}>
            <img src={value.image} />
            <div >{value.price.replace(".", ",")}</div>
          </PlanWrapper>
        ))}
       </PlansWrapper>
    </>
  );
}

const PlansWrapper = styled.div`
  color: black;
  font-size: 70px;
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
   margin-top: 25%;
   overflow-y: scroll;
`;
const PlanWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  width: 290px;
  height: 180px;
  display: flex;
  justify-content: space-around;

  margin: 0 auto 05% auto;
  color: #ffffff;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
`;
