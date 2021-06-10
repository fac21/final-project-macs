import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <>
    <S.Header>
      <Link href="/">
        <a>{/* <img  src="/logo.png" alt="logo"></img> */}</a>
      </Link>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </S.Header>
              <S.hr/>
              </>

  );
}

const S = {};

S.Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background: linear-gradient(to left, rgba(75,131,156,0.8), rgba(116,191,195,0.9));
  > * {
    margin: 0 1rem 0 0;
  }
`;

S.hr = styled.hr`
margin: 0;
opacity: 0.3;
border: 0;
height: 0.05rem;
background-color: #12142E;
`
