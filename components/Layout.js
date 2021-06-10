import styled from "styled-components";

export default function Layout({children}) {
  return (
    <>
    <S.Main>{children}</S.Main>
    </>
  );
}

const S = {}

S.Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
  > * {
      margin: 3.5rem 0 0 0;
  }
`;