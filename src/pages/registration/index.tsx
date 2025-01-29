import { createUser } from "@/api/services/userService";
import AvatarEditor from "@/components/AvatarEditor";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import { useLoadingContext } from "@/contexts/LoadingProvider";
import { User } from "@/model/User";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa6";
import { genConfig, NiceAvatarProps } from "react-nice-avatar";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const Signup = () => {
    const router = useRouter()
    const { setLoading } = useLoadingContext()

    const [avatarConfig, setAvatarConfig] = useState<NiceAvatarProps>(genConfig())

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [pages, setPages] = useState(0)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setPages(2)
        }
        else {
            setPages(1)
        }
    }, [avatarConfig])


    const signup = async () => {
        if (email !== repeatEmail) {

        }
        const user: User = {
            user_name: userName,
            email: email,
            user_password: userPassword,
            user_avatar_options: avatarConfig
        }

        const response = await createUser(user)
        setLoading(true)
        if (response.success === true) {
            setLoading(false)
            router.replace("")
        }
        else {
            setLoading(false)
        }
    }

    const avatarConfigUpdate = (type: string, value: string | boolean | undefined) => {
        setAvatarConfig((prev) => ({ ...prev, [type]: value }));
        console.log(avatarConfig)
    }

    return (
        <>
            <div className={`${styles.container} flex flex-col`}>
                <div className="flex items-center gap-2 mt-2 ml-2 absolute">
                    <FaTrophy fontSize={30} />
                    <h2 className="font-bold text-xl">Task Quest</h2>
                </div>
                <Card className="mt-6 lg:flex justify-center" pages={pages}>
                    <div>
                        <h1 className="-mt-6 flex justify-center font-bold text-2xl">Create you account</h1>
                        <AvatarEditor avatarConfig={avatarConfig} updateConfig={avatarConfigUpdate} />
                    </div>
                    <div>
                        <p>User name</p>
                        <Input placeholder={"User name"} type={"text"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                            setUserName(e.target.value)} value={userName} />
                        <p>Email</p>
                        <Input placeholder={"Your email address"} type={"text"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                            setEmail(e.target.value)} value={email} />
                        <p>Repeat email</p>
                        <Input placeholder={"Confirm your email adress"} type={"text"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                            setRepeatEmail(e.target.value)} value={repeatEmail} />
                        <p>Password</p>
                        <Input placeholder={"Your account password"} type={"password"} onChange={(e: { target: { value: SetStateAction<string> } }) =>
                            setUserPassword(e.target.value)} value={userPassword} />
                        <p>Confirm password</p>
                        <Input placeholder={"Confirm your password"} type={"password"} />
                        <div className="flex gap-4 mb-4">
                            <input type="checkbox" />
                            <p>I accept the TaskQuest Terms and Privacy Policy</p>
                        </div>
                        <div >
                            <Button className="!w-full" type={"primary"} text={"Join now"} height={50} action={signup} />
                        </div>
                        <div className="mt-4 flex">
                            <p className="font-medium">Already have a account ?</p>
                            <Link className="ml-2" href={"/login"}>
                                <u className="font-medium cursor-pointer ml-2">click here</u>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Signup;