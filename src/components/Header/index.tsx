import React from 'react'

import { BiChevronDown as DownIcon } from 'react-icons/bi'

import SearchBar from '../SearchBar'

import styles from './header.module.scss'

interface HeaderProps {
    keyPressed?: string;
}

export default function Header({ keyPressed }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div>
                <img src="/images/github-logo.png" alt="none" />
                <span>Why Github? <DownIcon className={styles.icon} /></span>
                <span>Team</span>
                <span>Enterprise</span>
                <span>Marketplace</span>
                <span>Pricing <DownIcon className={styles.icon} /></span>
            </div>
            <div>
                {keyPressed === '/' ?
                    <SearchBar active={true} />
                    :
                    <SearchBar active={false} />
                }
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </header>
    )
}