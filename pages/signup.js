import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";
import Head from "next/head";

function renderFormPage(formPage, formData, updateFormData, setPageNum) {
  
  const incrementPage = (e) => {
    e.preventDefault();
    setPageNum((currentPage) => currentPage + 1);
    return;
  };
  const decrementPage = (e) => {
    e.preventDefault();
    setPageNum((currentPage) => currentPage - 1)
    return;
  };

  switch (formPage) {
    case 0:
      const handleNameChange = (event) => {
        updateFormData({ name: event.target.value})
        console.log(formData)
      };      
      const handleEmailChange = (event) => {
        updateFormData({ email: event.target.value})
        console.log(formData)
      };
      return (
        <>
          <h2>Please enter your details</h2>
          <label htmlFor="name">
            Name
            <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" onChange={handleNameChange} type="text" required />
          <label htmlFor="email">
            Email address
            <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" onChange={handleEmailChange} type="email" required />
          <button onClick={decrementPage}>Previous</button>
          <button onClick={incrementPage}>Next</button>
        </>
      );

    case 1:
      const handleGenderChange = (event) => {
        updateFormData({ gender: event.target.value})
        console.log(formData)
      };      
      return (
        <>
          <h2>How do you identify?</h2>
          <label htmlFor="gender">
            <span aria-hidden="true">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            onChange={handleGenderChange}
            aria-describedby="genderedRequirements"
            required
          >
            <option value="woman">Woman</option>
            <option value="man">Man</option>
            <option value="nb">Non-binary / Other</option>
            <option value="not_specified">Prefer not to say</option>
          </select>
                    <button onClick={decrementPage}>Previous</button>
          <button onClick={incrementPage}>Next</button>
        </>
      );

    case 2:
      const handleGenderPreference = (event) => {
        updateFormData({ connections: event.target.value })
        console.log(formData)
      };      
      return (
        <>
          <h2>Who would you like to connect with?</h2>
(please tick all that apply)
          <label htmlFor="genderPreference">
            <span aria-hidden="true">*</span>
          </label>
          <select
            id="genderPreference"
            name="genderPreference"
            onChange={handleGenderPreference}
            aria-describedby="genderPreference"
            size="3"
            multiple
            required
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="nb">Non-binary / Other</option>
          </select>
                    <button onClick={decrementPage}>Previous</button>
          <button onClick={incrementPage}>Next</button>
        </>
      );

    case 3:
      const handleLanguages = (event) => {
        updateFormData({ languages: event.target.value})
        console.log(formData)
      };      
      return (
        <>
          <h2>What languages do you speak?</h2>
          <label htmlFor="languagesSpoken">
            <span aria-hidden="true">*</span>
          </label>
          <input
            id="languagesSpoken"
            name="languagesSpoken"
            type="text"
            onChange={handleLanguages}
            aria-describedby="languagesSpoken"
            required
          />
                    <button onClick={decrementPage}>Previous</button>
          <button onClick={incrementPage}>Next</button>
        </>
      );

    case 4:
      const handleKindAgreement = (event) => {
        updateFormData({ kindAgreement: event.target.value})
        console.log(formData)
      };      
      return (
        <>
          <h2>I agree to be kind</h2>

          <label htmlFor="kindAgreement">
            <span aria-hidden="true">*</span>
          </label>
          <input
            id="kindAgreement"
            name="kindAgreement"
            type="checkbox"
            onChange={handleKindAgreement}
            aria-describedby="kindAgreement"
            required
          />
                    <button onClick={decrementPage}>Previous</button>
          <button>Submit</button>
        </>
      );

    default:
      break;
  }
}

export default function Signup(props) {

  const [getPageNum, setPageNum] = useState(0);

  return (
    <Layout>
      <div>
        <Head>
          <title>Title</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1> Sign Up</h1>
        <form>
          <h3>Page {getPageNum + 1} of 5</h3>
          {renderFormPage(getPageNum, props.formData, props.updateFormData, setPageNum)}
        </form>
      </div>
    </Layout>
  );
}

Signup.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.rememberMe,
  };
};