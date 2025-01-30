import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  return (
    <div className="page flex justify-center items-center">
      <div className="card">
        <header className="mb-8">
          <h1 className="">Sign up</h1>
        </header>
        <div>
          <form action="http://localhost:5000/auth/signup" method="post">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input type="password" />
              </div>
              <button type="submit" className="mt-4">
                Sign up
              </button>
            </div>
          </form>
          <Separator>Or</Separator>
          <footer>
            <p>
              Already have an account? <Link href="/auth/login">Login</Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
