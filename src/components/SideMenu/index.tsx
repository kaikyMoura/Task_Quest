import { useRouter } from 'next/router'
import { FaCalendarAlt, FaHome, FaThList } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { IoPersonCircle, IoPersonCircleOutline } from 'react-icons/io5'
import styles from './styles.module.scss'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import React from 'react'

const SideMenu = (props: {
    items: {
        name: string, link: string, icon: any, tooltip?: string,
        subMenuItems?: { name: string, link: string, icon: any, tooltip?: string }[]
    }[],
}) => {
    const router = useRouter()
    // const pageActive: any = items.find(item => router.pathname === item.link)

    return (
        <>
            <div className={styles.sideContainer}>
                <div className={`${styles.sidemenu} flex justify-center items-center`}>
                    <ul className='flex flex-col items-center gap-8'>
                        {props.items && props.items.map((item, index) => (
                            <React.Fragment key={index}>

                                <li className={`cursor-pointer ${router.pathname == item.link ? styles.selected : ""}`}>
                                    <Link className={`flex ${styles.item}`} href={item.link}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={item.tooltip}>
                                        {item.icon}
                                    </Link>

                                </li>

                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default SideMenu;