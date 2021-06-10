import Link from "next/link";
import styled from "styled-components";
import { signOut, useSession } from "next-auth/client";

export default function AccessDeniedHeader(props) {
  // const [session, loading] = useSession();
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  //console.log("header", props);
  return (

        <>
          <S.Header>
            
          <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/api/auth/signin">
              <a>Log In</a>
            </Link>
            </div>
          </S.Header>
          <S.hr />
        </>
  );
}

const S = {};

S.Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(
    to left,
    rgba(75, 131, 156, 0.8),
    rgba(116, 191, 195, 0.9)
  );
  > * > * {
    margin: 0 1rem 0 1rem;
  }
`;

S.hr = styled.hr`
  margin: 0;
  opacity: 0.3;
  border: 0;
  height: 0.05rem;
  background-color: #74bfc3;
`;
