import Link from "next/link";
import styled from "styled-components";
import { signOut, useSession } from "next-auth/client";
// import { getUserId } from "../database/model";

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

// export async function getServerSideProps() {
//   let userInfo = await getUser(email);
//   console.log(userInfo);
//   return { props: { userInfo.id } };
// }
