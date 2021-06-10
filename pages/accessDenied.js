import Header from "../components/HomeHeader";
import Layout from "../components/Layout";
import styled from "styled-components";
import Logo from "../components/Logo"
import AccessDeniedHeader from "../components/AccessDeniedHeader"

export default function AccessDenied() {

    return (
        <>
        <AccessDeniedHeader/>
        <Layout>
        <S.div>
      <Logo size={"12"} bg={"#12142e"}/>
      <h2>Oops</h2>
      </S.div>
      <br/>
        You need access to view this page, please log in!
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