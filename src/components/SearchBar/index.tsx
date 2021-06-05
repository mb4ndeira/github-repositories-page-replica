import styles from './search-bar.module.scss'

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <span >/</span>
        </div >
    )
}