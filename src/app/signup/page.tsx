import { redirect } from "next/navigation";

export default function SignupPage() {
  // Google OAuth handles both login and registration. Redirect /signup to /login.
  redirect("/login");
}
