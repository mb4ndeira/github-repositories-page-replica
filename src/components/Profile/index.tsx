import Link from 'next/link'
import { BsPeople as People } from 'react-icons/bs'
import { AiOutlineStar as Star } from 'react-icons/ai'
import { VscDebugStackframeDot as Dot, VscLocation as Marker } from 'react-icons/vsc'
import { FiMail as Mail } from 'react-icons/fi'
import { HiLink as Chain } from 'react-icons/hi'

import styles from './profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.profile}>
            <img src="https://avatars.githubusercontent.com/u/57063223?v=4" alt="avatar" />
            <div>
                <h1>Matheus Bandeira</h1>
                <h2>mb4ndeira</h2>
            </div>
            <button>Edit Profile</button>
            <div>
                <span><People className={styles.icon} /><p>18</p><p>followers</p></span>
                <Dot className={styles.icon} />
                <span><p>74</p><p>following</p></span>
                <Dot className={styles.icon} />
                <span><Star className={styles.icon} /><p>28</p></span>
            </div>
            <div>
                <div>
                    <span><Marker /><p>Brazil, Rs</p></span>
                    <span>
                        <Mail />
                        <Link href="mailto:mbandeira.cs@gmail.com"><a>mbandeira.cs@gmail.com</a></Link>
                    </span>
                    <span><Chain /><Link href="https://www.linkedin.com/in/mb4ndeira/"><a>https://www.linkedin.com/in/mb4ndeira/</a></Link></span>
                </div>
            </div>
        </div >
    )
}