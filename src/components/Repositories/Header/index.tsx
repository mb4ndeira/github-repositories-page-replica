import { BiCaretDown as Down } from 'react-icons/bi'

import SearchBar from './SearchBar'

import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <SearchBar />
            <div>
                <span>
                    <p>Type</p>
                    <Down />
                </span>
                <span>
                    <p>Language</p>
                    <Down />
                </span>
                <span>
                    <p>Sort</p>
                    <Down />
                </span>
            </div>
        </header>
    )
}