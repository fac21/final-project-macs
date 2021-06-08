import styled from "styled-components";
import Link from "next/link";

export default function Miniprofile(props) {
  return (
    <>
      <Link href={"/profiles/" + props.name}>
        <a>
          <img src={props.image} alt="avator" width={30} height={30} />
          <h2>{props.name}</h2>
          <p>{props.gender}</p>
        </a>
      </Link>
    </>
  );
}
