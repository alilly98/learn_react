import React from "react";
import styled from "styled-components";
import Input from "./input";
import Button from "./Button";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
const ContainerForm = styled.div`
  background-color: white !important;
  width: 300px;
  height: 400px;
  /* font-weight: lighter; */
`;
const FooterForm = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;
const test = [
  {
    type: "text",
    placeholder: "Name",
    icon: <PersonOutlineIcon />,
  },
  {
    type: "text",
    placeholder: "Email",
    icon: <EmailIcon />,
  },
  {
    type: "password",
    placeholder: "Password",
    icon: <LockOpenIcon />,
  },
];

const test2=["Sign Up","Sign In"]

function Form() {
  return (
    <ContainerForm>
      <h2 style={{ color: "#551fcc", textAlign: "center", marginTop: "20px" }}>
        Sign up
      </h2>
      <p
        style={{
          margin: "10px auto",
          color: "#551fcc",
          width: "30px",
          height: "2px",
          background: "#551fcc",
          marginBottom: "20px",
        }}
      ></p>
      <form action="">
        {test.map((item) => (
          <Input
            type={item.type}
            placeholder={item.placeholder}
            icon={item.icon}
          />
        ))}
        <p style={{ margin: "0px 20px" }}>
          lost password? <a href="$">Click heres !</a>{" "}
        </p>
        <FooterForm>
         {test2.map((item)=><Button value={item}></Button>)}
        </FooterForm>
      </form>
    </ContainerForm>
  );
}

export default Form;
