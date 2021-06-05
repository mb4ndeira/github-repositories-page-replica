import { RiBookOpenLine as OpenBook } from 'react-icons/ri'
import { BiBookBookmark as Book } from 'react-icons/bi'
import { ImStatsBars as Stats } from 'react-icons/im'
import { HiOutlineCube as Cube } from 'react-icons/hi'

import styles from './profile-nav.module.scss'

export default function ProfileNav() {
    return (
        <div className={styles.profileNav}>
            <div>
                <div>
                    <OpenBook />
                    <p>Overview</p>
                </div>
                <div className={styles.active}>
                    <Book />
                    <p>Repositories</p>
                    <span><p>24</p></span>
                </div>
                <div>
                    <Stats />
                    <p>Projects</p>
                </div>
                <div>
                    <Cube />
                    <p>Packages</p>
                </div>
            </div>
        </div >
    )
}