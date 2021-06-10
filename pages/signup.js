import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
import Logo from "../components/Logo";
import styled from "styled-components";
import { parseCookies } from "../lib/parseCookies";
import {
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  PageFive,
} from "../components/SignUpPages";

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
      };
      const handleEmailChange = (event) => {
        updateFormData({ email: event.target.value });
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
        <div>
          <form>
            <h3>Page {getPageNum + 1} of 5</h3>
            {renderFormPage(
              getPageNum,
              props.formData,
              props.updateFormData,
              setPageNum
            )}
          </form>
        </div>
      </Layout>
    </>
  );
}

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