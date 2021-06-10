import Link from "next/link";
import { useEffect } from "react";
import Header from "../components/HomeHeader";
import Layout from "../components/Layout";
import styled from "styled-components";
import Logo from "../components/Logo"
import Footer from "../components/Footer"

export default function Home(props) {

  return (
    <>
      <Header updateFormData={props.updateFormData} />
      <Layout>
      <S.div>
      <Logo size={"12"} bg={"#12142e"}/>
      <h2>Connecta</h2>
      </S.div>
        <S.section>
          <Link href="/profiles">
            <S.a  className="background-image"/>
          </Link>
          <Link href="/profiles">

          <aside>
            <h2>Profiles</h2>
            <p>
              See who else is here and practice your language skills with them!
            </p>
          </aside>
          </Link>

          {/* <Link href="/events">
            <a>
              <h2>Events</h2>
              See what's hip 'n' happenin' nearby!
            </a>
          </Link> */}
        </S.section>
        {/* <section>
          Events
        </section> */}
        <Footer/>
      </Layout>
    </>
  );
}

const S = {};

S.a = styled.a`
  background-image: url("Profiles.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0.8;
  margin: 0;
  /* border: outset #74bfc3; */
  border-radius: 1rem ;
  transform: scale(1);
  transition: filter .5s, transform .5s;
`;

S.section = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0 0.5rem;
  width: 300px;
  height: 220px;
  border-radius: 1rem;
  > aside {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    z-index: 2;
    user-select: none;
  }
  > aside > h2 {
    color: #fcf7f8;
    font-size: 2rem;
    margin: 0;
    width: 300px;
  }
  > aside > p {
    color: #fcf7f8;
    width: 300px;
    margin-top: 0.4rem;
    padding: 0 0.8rem;
    font-weight: 200;
  }

  &:hover {
    .background-image {
      filter: brightness(.8) blur(2px);
      transform: scale(1.05);
    }
  }

`;

S.div = styled.div`
margin-top: 1rem;
position: relative;
> h2 {
  font-family: 'Lobster', cursive;
  position: absolute;
  font-size: 3rem;
  top: 1.5rem;
  left: 0.5rem;
  opacity: 0.9;
  text-shadow: 2px 5px 5px #12142e;
}
`;

S.Contact = styled.button`
background-color: #4b839c;
`