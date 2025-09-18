import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Kambaz - Learning Management System</h1>
      <p>My name is Ankita Das</p>
      <Link href="/Account/Signin">
        Enter Kambaz
      </Link>
      <br />
      <Link href="/Labs">
        View Lab Exercises
      </Link>
      <br />
      <Link href="https://github.com/AnkitaDas1999/kanbaz-next-js-app/tree/A1" target="_blank">
        Source Code Repository - GitHub
      </Link>
    </div>
  );
}