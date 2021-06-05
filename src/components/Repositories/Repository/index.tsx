import Link from 'next/link'
import { AiOutlineStar as Star } from 'react-icons/ai'
import { VscRepoForked as Fork } from 'react-icons/vsc'

import styles from './repository.module.scss'

interface RepositoryProps {
    tecnologyColor?: string;
}

export default function Repository({ tecnologyColor = '#007acc' }: RepositoryProps) {
    return (
        <div className={styles.repository}>
            <div>
                <div>
                    <h3><Link href="javascript:"><a> frontend-challenge</a></Link></h3>
                    <p>Forked from FotonTech/frontend-challenge</p>
                </div>
                <section>
                    <div className={styles.tecnology}>
                        <span style={{ background: tecnologyColor }}></span>
                        <p>Typescript</p>
                    </div>
                    <div className={styles.stars}>
                        <Star className={styles.icon} />
                        <p>2</p>
                    </div>
                    <div className={styles.forks}>
                        <Fork className={styles.icon} />
                        <p>2</p>
                    </div>
                    <div className={styles.date}>
                        <p>Updated on 9 Apr</p>
                    </div>
                </section>
            </div>
            {/* graph */}
        </div>
    )
}