import styled from "styled-components";

export default function Miniprofile(props) {
  return (
    <>
      <Link href={"/profiles/" + props.name} name={props.name}>
        <a>
          <h2>{props.name}</h2>
          <p>{props.gender}</p>
        </a>
      </Link>
    </>
  );
}
