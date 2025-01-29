import { login } from "@/api/services/userService"
import Button from "@/components/Button"
import Card from "@/components/Card"
import Input from "@/components/Input"
import { useLoadingContext } from "@/contexts/LoadingContextProvider"
import { User } from "@/model/User"
import { useRouter } from "next/router"
import { SetStateAction, useState } from "react"
import { FaTrophy } from "react-icons/fa6"
import styles from "./styles.module.scss"
import { useAuthContext } from "@/contexts/AuthContextProvider"

const Login = () => {
    const router = useRouter()
    const { setLoading } = useLoadingContext()
    const { setIsAuthenticated } = useAuthContext()

    const [email, setEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const doLogin = async () => {
        const user: User = {
            email: email,
            user_password: userPassword
        }

        const response = await login(user)

        setLoading(true)
        if (response.success === true) {
            setLoading(false)
            router.replace("/home")
        }
        else {
            setLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className="flex items-center gap-2 ml-4 relative top-2">
                <FaTrophy fontSize={30} />
                <h2 className="font-bold text-xl">Task Quest</h2>
            </div>
            <Card className="mt-10" pages={1}>
                <h2 className="font-semibold text-3xl">Login</h2>
                <div className="mt-2">
                    {/* <p>User name</p>
                    <Input placeholder={"User name"} type={"text"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setUserName(e.target.value)} value={userName} /> */}
                    <p>Email</p>
                    <Input placeholder={"Your email address"} type={"text"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setEmail(e.target.value)} value={email} />
                    <p>Password</p>
                    <Input placeholder={"Your account password"} type={"password"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                        setUserPassword(e.target.value)} value={userPassword} />
                    <div>
                        <Button className="mt-2" type={"primary"} text={"Join now"} width={350} height={40} action={doLogin} />
                    </div>
                    <div className="mt-4 flex">
                        <p className="font-medium">Forgot your password ?</p>
                        <u className="font-medium cursor-pointer ml-2">click here</u>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Login;