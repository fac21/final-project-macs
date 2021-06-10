import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
import Logo from "../components/Logo";
import styled from "styled-components";
// import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";
// import Head from "next/head";
import {
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  PageFive,
} from "../components/SignUpPages";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

function renderFormPage(formPage, formData, updateFormData, setPageNum) {
  const incrementPage = (e) => {
    e.preventDefault();
    setPageNum((currentPage) => Math.min(currentPage + 1, 4));
    return;
  };
  const decrementPage = (e) => {
    e.preventDefault();
    setPageNum((currentPage) => Math.max(currentPage - 1, 0));
    return;
  };

  switch (formPage) {
    case 0:
      const handleNameChange = (event) => {
        updateFormData({ name: event.target.value });
        console.log(formData);
      };
      const handleEmailChange = (event) => {
        updateFormData({ email: event.target.value });
        console.log(formData);
      };
      return (
        <PageOne
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          incrementPage={incrementPage}
        />
      );

    case 1:
      const handleGenderChange = (event) => {
        updateFormData({ gender: event.target.value });
        console.log(formData);
      };
      return (
        <PageTwo
          handleGenderChange={handleGenderChange}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      );

    case 2:
      const handleGenderPreference = (event) => {
        const checkedValue = event.target.value;
        if (formData.connections.has(event.target.value)) {
          updateFormData(formData.connections.delete(checkedValue));
        } else {
          updateFormData(formData.connections.add(checkedValue));
        }
        console.log(formData);
      };
      return (
        <PageThree
          handleGenderPreference={handleGenderPreference}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      );

    case 3:
      const handleLanguages = (event) => {
        const checkedValue = event.target.value;
        if (formData.languages.has(event.target.value)) {
          updateFormData(formData.languages.delete(checkedValue));
        } else {
          updateFormData(formData.languages.add(checkedValue));
        }
        console.log(formData);
      };
      return (
        <PageFour
          handleLanguages={handleLanguages}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      );

    case 4:
      const handleKindAgreement = (event) => {
        updateFormData({ kindAgreement: event.target.value });
        console.log(formData);
      };
      return (
        <PageFive
          handleKindAgreement={handleKindAgreement}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
          formData={formData}
        />
      );

    default:
      break;
  }
}

export default function Signup(props) {
  const [getPageNum, setPageNum] = useState(0);
  
  return (
    <>
      <Header />
      <S.div>
      <Logo size={"5"} />
      <h2>Sign Up</h2>
      </S.div>
      <Layout>
        <S.FormContainer>
          <S.Form>
            <h3>Page {getPageNum + 1} of 5</h3>
            {renderFormPage(
              getPageNum,
              props.formData,
              props.updateFormData,
              setPageNum
            )}
          </S.Form>
        </S.FormContainer>
      </Layout>
    </>
  );
}

// Signup.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialRememberValue: cookies.rememberMe,
//   };
// };

const S = {}

S.div = styled.div`
margin: 2rem 0 0 1.5rem;
position: relative;
> h2 {
  font-family: 'Lobster', cursive;
  position: absolute;
  font-size: 2rem;
  top: 0;
  left: 1rem;
}
`;

S.FormContainer = styled.div`
width: 100%;
`

S.Form = styled.form`
font-size: 1.2rem;
min-width: 300px;
max-width: 500px;
margin: 0 0 0 12%;
> * > button {
  margin: 1rem 0.5rem 0 0;
}
> * {
  display: flex;
  margin-top: 0.5rem;
}
`