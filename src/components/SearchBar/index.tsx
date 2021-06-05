import React, { useState, useRef, useEffect } from 'react';

import styles from './search-bar.module.scss'

interface SearchBarProps {
    active?: boolean;
}

export default function SearchBar({ active }: SearchBarProps) {
    const [isActive, setIsActive] = useState(active)

    const input = useRef(null)

    useEffect(() => {
        setIsActive(active)
        if (!isActive) return

        input.current.focus()
    }, [active])

    return (
        <div className={styles.searchBar}>
            <input
                type="text" placeholder="Search"
                onFocus={() => { if (!active) setIsActive(true) }}
                onBlur={() => setIsActive(false)}
                ref={input}
            />
            {!isActive &&
                <span onClick={() => input.current?.focus()}>
                    <p>/</p>
                </span>
            }
        </div >
    )
}