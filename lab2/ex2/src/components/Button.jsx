import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  border: none;
  padding: 10px 39px;
  border-radius: 20px;
  background-color: ${(props) => props.test ? "#551fcc" : "#cbd6d2" }; 
  color: ${(props) => props.test ? "white" : "black"};
  font-weight: ${(props) => props.test ? "400":"100"}; 
`;

// const value = "Sign Up";
function Button({value}) {
    return (
        value==="Sign Up" ? <StyleButton test>{value}</StyleButton> : <StyleButton>{value}</StyleButton>)
     ;
}

export default Button;
