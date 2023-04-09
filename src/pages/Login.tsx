import { AppBar,AuthForm } from "@/components"
export default function Login() {


    return (<div>
        <AppBar isLoggedIn={false} />
        <AuthForm pageName='Login'/>
    </div>)
}