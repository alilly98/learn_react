import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
   background-color: #cbd6d2 ;
   border: 2px;
   margin: 10px 20px;
   padding: 10px;
   display: flex ;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit
`;
/* const test = <PersonOutlineIcon /> */
function input({type,placeholder,icon}) {
  return (
    <ContainerInput>
      <label>
        {icon}
      </label>
      <Input type={type} placeholder={placeholder} />
    </ContainerInput>
  );
}
export default input;
