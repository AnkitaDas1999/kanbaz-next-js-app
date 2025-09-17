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
    </div>
  );
}