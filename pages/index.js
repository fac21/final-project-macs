import Link from "next/link";
import Header from "../components/HomeHeader";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <div>{/* <img src=biglogo></img> */}</div>
        <div>
          <section>
            <Link href="/profiles">
              <a>
                <h2>Profiles</h2>
                See who else is here and connect with them!
              </a>
            </Link>
          </section>
          {/* <section>
          Events
        </section> */}
        </div>
        <div>Contact Us</div>
      </Layout>
    </>
  );
}
