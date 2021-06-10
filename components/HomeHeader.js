import Link from "next/link";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/client";

export default function HomeHeader(props) {
  const [session, loading] = useSession();
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  //console.log("header", props);
  return (
    <>
      {!session && (
        <>
          <S.Header>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/api/auth/signin">
              <a>Log In</a>
            </Link>
          </S.Header>
          <S.hr />
        </>
      )}
      {session && (
        <>
          Hello {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
}

const S = {};

S.Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
  background: linear-gradient(
    to left,
    rgba(75, 131, 156, 0.8),
    rgba(116, 191, 195, 0.9)
  );
  > * {
    margin: 0 1rem 0 0;
  }
`;

S.hr = styled.hr`
  margin: 0;
  opacity: 0.3;
  border: 0;
  height: 0.05rem;
  background-color: #74bfc3;
`;
