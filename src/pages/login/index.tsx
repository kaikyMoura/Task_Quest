import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import styles from "./styles.module.scss"
import AvatarEditor from "@/components/AvatarEditor";
import { useEffect, useState } from "react";

const Login = () => {
    const [pages, setPages] = useState(0)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setPages(2)
        }
        else {
            setPages(1)
        }
    }, [])

    return (
        <>
            <div className={`${styles.container} flex flex-col lg: mt-16 sm: mt-4`}>
                <Card className="mt-6 lg:flex justify-center " pages={pages}>
                    <div>
                        <AvatarEditor />
                    </div>
                    <div>
                        <p>Full name</p>
                        <Input placeholder={"full name"} type={"text"} />
                        <p>Email</p>
                        <Input placeholder={"Your email address"} type={"text"} />
                        <p>Full name</p>
                        <Input placeholder={"Choose a unique username"} type={"text"} />
                        <p>Password</p>
                        <Input placeholder={"Your account password"} type={"text"} />
                        <p>Confirm password</p>
                        <Input placeholder={"Confirm your password"} type={"text"} />
                        <div className="flex gap-4 mb-4">
                            <input type="checkbox" />
                            <p>I accept the TaskQuest Terms and Privacy Policy</p>
                        </div>
                        <div >
                            <Button className="!w-full" type={"primary"} text={"Join now"} height={50} />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Login;