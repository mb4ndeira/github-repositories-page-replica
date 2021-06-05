import Link from 'next/link'
import { AiOutlineStar as Star } from 'react-icons/ai'
import { VscRepoForked as Fork } from 'react-icons/vsc'

import styles from './repository.module.scss'

interface IRepositoryData {
    name: string;
    language: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

interface RepositoryProps {
    tecnologyColor?: string;
    repositoryData: IRepositoryData;
}

export default function Repository({ tecnologyColor = '#007acc', repositoryData }: RepositoryProps) {
    const {
        name,
        language,
        description,
        stargazers_count: stars,
        forks_count: forks,
        updated_at: date
    } = repositoryData

    return (
        <div className={styles.repository}>
            <div>
                <div>
                    <h3><Link href="javascript:"><a>{name}</a></Link></h3>
                    <p>{description}</p>
                </div>
                <section>
                    <div className={styles.tecnology}>
                        <span style={{ background: tecnologyColor }}></span>
                        <p>{language}</p>
                    </div>
                    <div className={styles.stars}>
                        <Star className={styles.icon} />
                        <p>{stars}</p>
                    </div>
                    <div className={styles.forks}>
                        <Fork className={styles.icon} />
                        <p>{forks}</p>
                    </div>
                    <div className={styles.date}>
                        <p>{date}</p>
                    </div>
                </section>
            </div>
            {/* graph */}
        </div>
    )
}