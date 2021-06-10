import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <S.Footer>
        <div>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </div>
      </S.Footer>
    </>
  );
}

const S = {};

S.Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 30%;
  > * {
    margin: 0;
  }
`;
