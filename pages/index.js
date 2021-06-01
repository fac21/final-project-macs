import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <nav>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </nav>
      <div>{/* <img src=biglogo></img> */}</div>
      <div>
        <section>
          <Link href="/profiles">
            <a>Profiles</a>
          </Link>
        </section>
        {/* <section>
          Events
        </section> */}
      </div>
    </Layout>
  );
}