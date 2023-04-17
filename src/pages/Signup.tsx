import { AppBar,AuthForm } from "@/components"
export default function Signup() {


    return (<div>
        <AppBar isLoggedIn={false} />
        <AuthForm pageName="Signup"/>
    </div>)
}