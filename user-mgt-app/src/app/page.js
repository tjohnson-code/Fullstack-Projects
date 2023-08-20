import AuthForm from "@/app/components/AuthForm";

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">User Management App</h1>
        <p>Create a profile, login, manage, and add an avatar!</p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  );
}
