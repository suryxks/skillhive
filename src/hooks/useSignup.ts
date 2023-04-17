import { useMutation,useQueryClient } from "@tanstack/react-query";
import { loginService, signupService } from "@/services";
import { saveUser } from "@/utils/userUtils";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
export const useSignup = ()=>{
    const queryClient = useQueryClient();
    const router = useRouter();
    const { setAuth } = useAuth();
    return useMutation({
        mutationFn: ( credentials :{email:string,password:string,firstName?:string,lastName?:string}) => {
            return loginService(credentials)
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            saveUser(data.user);
            queryClient.setQueryData(['user', data.user.id], data.user);
            setAuth({
                user: data.user,
                token: data.token,
                isAuthenticated:true,
            })
            router.push('/')
        }
    })
    
}