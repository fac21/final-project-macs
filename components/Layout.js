import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name="description" content="Language Exchange Homepage" />
      </Head>
      {home ? (
        <div></div>
      ) : (
        <header>
          <Link href="/">
            <a>{/* <img  src="/logo.png" alt="logo"></img> */}</a>
          </Link>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
