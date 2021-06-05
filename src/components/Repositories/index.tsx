import React, { useState, useEffect } from 'react'

import Header from './Header'
import RepositoryItem from './Repository'

import styles from './repositories.module.scss'

interface IRepository {
    id: number;
    name: string;
    language: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
}

export default function Repositories() {
    const [repositories, setRepositories] = useState<IRepository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/mb4ndeira/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <div className={styles.repositories}>
            <Header />
            {repositories.map(repository => <RepositoryItem
                key={repository.id}
                repositoryData={repository}
            />)}
        </div >
    )
}