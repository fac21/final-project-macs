import Link from "next/link";
export default function LandingPage() {
  return (
    <div className="header">
      <Link href="/">
        <a className="logo"></a>
      </Link>
      <a href="#" className="btn-signin">
        Sign in
      </a>
    </div>
  );
}
