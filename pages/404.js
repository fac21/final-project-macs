import Link from "next/link"
import Header from "../components/HomeHeader";
import Layout from "../components/Layout";
import styled from "styled-components";
import Logo from "../components/Logo"
import AccessDeniedHeader from "../components/AccessDeniedHeader"

export default function notFound() {

    return (
        <>
        <AccessDeniedHeader/>
        <Layout>
        <S.div>
      <Logo size={"12"} bg={"#12142e"}/>
      <h2>Oops</h2>
      </S.div>
      <br/>
        <h4>404 ERROR:</h4>
        <br/>
        We can't find this page, please turn back!
        </Layout>
        
        </>
    )
}

const S = {}

S.div = styled.div`
margin-top: 1rem;
position: relative;
> h2 {
  font-family: 'Lobster', cursive;
  position: absolute;
  font-size: 3rem;
  top: 1.5rem;
  left: 2.8rem;
  opacity: 0.9;
  text-shadow: 2px 5px 5px #12142e;
}
`;

