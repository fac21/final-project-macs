import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
background-color: aliceblue;
display: flex;
flex-direction: row;
padding: 1rem;
`;

const Main = styled.main`
background-color: yellowgreen;
display: flex;
padding: 1rem;
`;

export default function Layout({ children, home }) {

  return (
    <div>
      <Head>
        <meta name="description" content="Language Exchange Homepage" />
      </Head>
      {home ? (
        <Header>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </Header>
      ) : (
        <Header>
          <Link href="/">
            <a>{/* <img  src="/logo.png" alt="logo"></img> */}</a>
          </Link>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </Header>
      )}
      <Main>{children}</Main>
    </div>
  );
}
