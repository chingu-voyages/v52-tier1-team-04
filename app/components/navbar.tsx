//Component 'app/components/navbar.tsx'

import styles from 'app/components/navBar.module.css'
import Link from "next/link";


const NAV_LINKS = [
    { href: "/about", label: "About" },
    { href: "/residentDash", label: "Resident" },
    { href: "/adminDash", label: "Admin" },
    { href: "/page", label: "Home" },
]

export default function NavBar() {
    return (
        <nav aria-label="Primary navigation" className={styles.nav}>
            <ul className={styles.navList}>
                {NAV_LINKS.map(({ href, label }) => (
                    <li key={href} className={styles.navItem}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
}