import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { BrandLogo } from "@/components/auth/BrandLogo";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata = {
  title: "Login - Campus Mitra Smart College OS",
  description: "Sign in to Campus Mitra with your Google account.",
};

interface LoginPageProps {
  searchParams: Promise<{
    error?: string;
    callbackUrl?: string;
  }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  // Check server-side session: redirect authenticated users away from /login
  const session = await auth();
  const params = await searchParams;

  if (session?.user) {
    const isNewUser = (session.user as any)?.isNewUser;
    if (isNewUser) {
      redirect("/onboarding");
    } else {
      redirect(params.callbackUrl || "/dashboard");
    }
  }

  const errorParam = params.error || null;
  const callbackUrl = params.callbackUrl || "/dashboard";

  return (
    <main className="min-h-screen w-full bg-[#0E1017] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-[#7C83FF]/20 selection:text-[#7C83FF]">
      {/* Brand Logo Header */}
      <BrandLogo />

      {/* Centered Auth Card */}
      <div className="z-10 flex items-center justify-center w-full">
        <AuthCard initialError={errorParam} callbackUrl={callbackUrl} />
      </div>
    </main>
  );
}
