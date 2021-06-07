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
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  > * {
      margin: 1rem 0;
  }
`;