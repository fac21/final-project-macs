import Link from "next/link";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/client";

export default function HomeHeader(props) {
  const [session, loading] = useSession();
  if (loading) {
    return <p>Loading...</p>;
  }
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
  // return (
  //   <S.Header>
  //     <Link href="/signup">
  //       <a>Sign Up</a>
  //     </Link>
  //     <Link href="/api/auth/signin">
  //       <a>Log In</a>
  //     </Link>
  //   </S.Header>
  // );
}

const S = {};

S.Header = styled.header`
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
  > * {
    margin: 0 1rem 0 0;
  }
`;
