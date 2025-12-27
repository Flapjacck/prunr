import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";

function Auth() {
    return (
        <>
            <h1 className="text-3xl font-bold">*This is the Auth Page*</h1>
            <br />
            <Login />
            <SignUp />
        </>
    );
}

export default Auth;