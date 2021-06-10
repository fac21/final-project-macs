import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
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
        const checkedValue = event.target.value
        if (formData.connections.has(event.target.value)) {
          updateFormData(formData.connections.delete(checkedValue))
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
        const checkedValue = event.target.value
        if (formData.languages.has(event.target.value)) {
          updateFormData(formData.languages.delete(checkedValue))
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
      <Layout>
        <div>
          <h1> Sign Up</h1>
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

// Signup.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     initialRememberValue: cookies.rememberMe,
//   };
// };
