import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import styles from "./styles.module.scss"
import ChooseAvatar from "@/components/ProfileAvatar";

const Login = () => {
    return (
        <>
            <div className={`${styles.div} relative flex gap-8 justify-center mt-4`}>
                <Card>
                    <div>
                        <ChooseAvatar />
                    </div>
                </Card>
                <Card>
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
                    <div className="flex gap-4">
                        <input type="checkbox" />
                        <p>I accept the TaskQuest Terms and Privacy Policy</p>
                    </div>
                    <Button type={"primary"} text={"Join now"} width={350} height={40} />
                </Card>
            </div>
        </>
    )
}

export default Login;