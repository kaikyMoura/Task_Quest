import { ReactNode } from "react"
import styles from "./styles.module.scss"

const IconWrapper = (props: {
    children: ReactNode,
    className: string,
    switchConfig: () => void,
}) => {

    return (
        <div
            onClick={props.switchConfig}
            className={`${styles.iconWrapper} ${props.className}`}
        >
            {props.children}
        </div>
    );
}

export default IconWrapper;