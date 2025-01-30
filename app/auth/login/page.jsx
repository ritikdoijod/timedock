import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  return (
    <div className="page flex justify-center items-center">
      <div className="card">
        <header className="mb-8">
          <h1 className="">Login</h1>
        </header>
        <div>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input type="password" />
                <Link
                  href="/forgot-password"
                  className="mt-2 text-right text-gray-400 text-xs"
                >
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="mt-4">
                Login
              </button>
            </div>
          </form>
          <Separator>Or</Separator>
          <footer>
            <p>
              Don't have an account? <Link href="/auth/signup">Sign up</Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
