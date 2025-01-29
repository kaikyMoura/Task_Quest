import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './styles.module.scss';

interface InputProps {
    onClick?: MouseEventHandler<HTMLInputElement> | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    label?: string;
    value?: string | undefined;
    placeholder: string;
    type: "text" | "password" | "email" | "number" | "file";
    maxLength?: number;
    accept?: string
}

const Input = ({ onClick, onChange, type, label, placeholder, value, maxLength, accept }: InputProps) => {
    const [changeIcon, setChangeIcon] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
    let icon
    if (type === "password") {
        icon = <FaEye fontSize={22} />;
    } else {
        icon = null;
    }

    const handleIconChange = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (changeIcon == false) {
            setShowPassword(true)
            setChangeIcon(true)
        }
        else {
            setShowPassword(false)
            setChangeIcon(false)
        }
    }

    return (
        <>
            <div className={`${styles.inputButton}`}>
                <label>{label}</label>
                <input className={`${styles.input}`} type={type === "password" && showPassword ? "text" : type}
                    onClick={onClick} placeholder={placeholder} onChange={onChange} value={value} maxLength={maxLength} accept={accept} />
                {type === "password" && (
                    <>
                        {!changeIcon ?
                            <button className='' onClick={handleIconChange}>
                                <i>{icon}</i>
                            </button>
                            :
                            <button className='mr-2' onClick={handleIconChange}>
                                <i>{icon = <FaEyeSlash fontSize={22} />}</i>
                            </button>
                        }
                    </>
                )}
            </div >
        </>
    )
}

export default Input;