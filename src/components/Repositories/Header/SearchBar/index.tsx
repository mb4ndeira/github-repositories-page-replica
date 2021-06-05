import styles from './search-bar.module.scss'

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Find a repository..." />
        </div >
    )
}