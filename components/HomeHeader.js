import Link from "next/link";
import styled from "styled-components";

export default function HomeHeader() {
  return (
    <S.Header>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
      <Link href="/api/auth/signin">
        <a>Log In</a>
      </Link>
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
