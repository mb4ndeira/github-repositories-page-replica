import styles from './repositories.module.scss'

import Header from './Header'
import Repository from './Repository'

export default function Repositories() {
    return (
        <div className={styles.repositories}>
            <Header />
            <Repository />
        </div >
    )
}