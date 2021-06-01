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
  );
}
