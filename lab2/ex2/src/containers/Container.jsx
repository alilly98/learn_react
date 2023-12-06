import React from "react";
import Form from "../components/Form";
import Logo from "../components/Logo";

import styled from "styled-components";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Container() {
  const Background = styled.div`
    width : 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
   padding-top: 20vh;
  `;
  return (<Background>
   <Logo></Logo>
   <Form></Form>
  </Background>);
}

export default Container;
