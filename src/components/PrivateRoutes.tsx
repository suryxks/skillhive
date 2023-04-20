import { useRouter } from "next/router"
import { getUser } from "@/utils/userUtils";
export const PrivateRoutes = ({ children }) => {
    const router = useRouter();
    if (typeof window !== undefined) {
        return <div>Loading....</div>
    } else {
        const user = getUser();
        if (!user) {
            router.push('/Login')
        }
        return <>{children}</>
    }


}