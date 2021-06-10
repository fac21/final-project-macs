import styled from "styled-components";
import Link from "next/link";

export default function Miniprofile(props) {
  return (
    <>
      <S.section style={{background: `hsla(${Math.floor(Math.random() * 360)}deg, 38%, 56%, 0.5)`}}>
        <img src="https://images.pexels.com/photos/2846602/pexels-photo-2846602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
        <div>
          <S.Headline></S.Headline>
          <img src={props.image} alt="avatar" width={30} height={30} />
          <h2>{props.name}</h2>
          <h4>{props.gender}</h4>
          <p><em>Language, Language, Language, Language, Language</em></p>
          <Link href={"/profiles/" + props.name}>
            <a>
              <button><u>view profile</u></button>
            </a>
          </Link>
        </div>
      </S.section>
    </>
  );
}

const S = {};

S.section = styled.section`
overflow: hidden;
position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
   width: 180px;
   height: 100%;
  /* background: linear-gradient(to right, rgba(0, 0, 0, 0) 28%, rgba(79,108,162, 0.9) 28%, rgba(18,20,46, 0.6) 100%); */
border: 1px solid gray;
border-radius: 25px;
font-size: 0.7rem;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
    z-index: 1;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  > div > * {
    margin: 0.5rem 0;
  }

  button {
    padding: .5rem 1rem;
    background: transparent;
    border-radius: 50px;
    border: 2px solid white;
    transition: background .2s, color .2s;
    cursor: pointer;
    &:hover {
      background: white;
      color: black;
    }
  }
`;

S.Headline = styled.div`
position: absolute;
top: -0.5rem;
width: 100%;
height: 50px;
background-color: #FFFCF980;
`
