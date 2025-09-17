import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Kambaz</h1>
      <p>Welcome to Kambaz - Learning Management System</p>
      <Link href="/Account/Signin">
        Enter Kambaz
      </Link>
      <br />
      <Link href="/Labs">
        View Lab Exercises
      </Link>
    </div>
  );
}