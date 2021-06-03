import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
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
  );
}

const S = {};

S.Header = styled.header`
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

