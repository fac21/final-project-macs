import Header from "../components/Header";
import Layout from "../components/Layout";
import { getProfiles } from "/database/model.js";
import Miniprofile from "../components/MiniProfile";
import Link from "next/link";
import User from "./profiles/[user]";
import { getSession } from "next-auth/client";
import Logo from "../components/Logo";
import styled from "styled-components";

export default function Profiles(props) {
  return (
    <>
      <Header />
      <S.div>
        <Logo size={"5"} />
        <h2>Profiles</h2>
      </S.div>
      <Layout>
        <S.section>{profilesInfo(props)}</S.section>
      </Layout>
    </>
  );
}

function profilesInfo(props) {
  let profiles = props.profiles;
  profiles = JSON.parse(profiles);
  //an array of objects
  return profiles.map((user) => {
    return (
      <Miniprofile name={user.name} src={user.image} gender={user.gender} />
    );
  });
}

export async function getServerSideProps(context) {
  let sessionInfo = await getSession(context);
  let email = sessionInfo.user.email;
  let profiles = await getProfiles(email);
  profiles = JSON.stringify(profiles);
  return { props: { profiles } };
}

const S = {};

S.section = styled.section`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

S.div = styled.div`
  margin: 2rem 0 0 1.5rem;
  position: relative;
  > h2 {
    font-family: "Lobster", cursive;
    position: absolute;
    font-size: 2rem;
    top: 0;
    left: 1rem;
  }
`;
