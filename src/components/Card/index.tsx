import { PropsWithChildren } from 'react';
import styles from './styles.module.scss'

const Card = ({ children }:PropsWithChildren) => {

    return (
        <>
            <div className={styles.cardContainer}>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Card;