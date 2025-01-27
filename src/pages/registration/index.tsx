import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import styles from "./styles.module.scss"
import AvatarEditor from "@/components/AvatarEditor";
import { SetStateAction, useEffect, useState } from "react";
import { useLoadingContext } from "@/contexts/LoadingProvider";
import { FaTrophy } from "react-icons/fa6";
import { User } from "@/model/User";
import { createUser } from "@/api/services/userService";
import image from "next/image";
import { genConfig, NiceAvatarProps } from "react-nice-avatar";

const Signup = () => {
    const { isLoading, setLoading } = useLoadingContext()

    const [avatarConfig, setAvatarConfig] = useState<NiceAvatarProps>(genConfig())

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    console.log(isLoading)

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

        await createUser(user)
    }

    const avatarConfigUpdate = (type: string, value: any) => {
        setAvatarConfig((prev) => ({ ...prev, [type]: value }));
        console.log(avatarConfig)
    }

    return (
        <>
            <div className={`${styles.container} flex flex-col`}>
                <div className="flex items-center gap-2 mt-10 absolute ml-16">
                    <FaTrophy fontSize={30} />
                    <h2 className="font-bold text-xl">Task Quest</h2>
                </div>
                <Card className="mt-6 lg:flex justify-center " pages={pages}>
                    <div>
                        <AvatarEditor avatarConfig={avatarConfig} updateConfig={avatarConfigUpdate} />
                    </div>
                    <div>
                        <h1></h1>
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
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Signup;