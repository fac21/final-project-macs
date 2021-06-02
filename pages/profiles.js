import Layout from "../components/Layout";
import { getProfiles } from "/database/model.js";

export default function Profiles({ props }) {
  console.log("Profiles Props", props);
  return (
    <Layout>
      <p>{profilesInfo(props)}</p>
    </Layout>
  );
}

function profilesInfo({ props }) {
  console.log("props", props);
  let profiles = props.profiles;
  //an array of objects
  console.log("profilesInfo", profiles);
  return profiles.map((user) => {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.gender}</p>
      </div>
    );
  });
}

export async function getServerSideProps() {
  let profiles = await getProfiles();
  profiles = JSON.stringify(profiles);
  console.log("getserversideProps profiles", profiles);
  return { props: { profiles} };
}
