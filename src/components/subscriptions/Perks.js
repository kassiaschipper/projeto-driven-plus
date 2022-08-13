import styled from "styled-components";

export default function Perks({ perks }) {
  return (
    <>
      {perks.map((value, index) => (
        <PerksWrapper key={value.id}>
          <li>
            {index+1}. {value.title}
          </li>
        </PerksWrapper>
      ))}
    </>
  );
}

const PerksWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  li {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
`;
