// app/components/common/navbar.tsx

import styles from 'app/styles/navBar.module.css'
import Link from "next/link";


const NAV_LINKS = [
    { href: "/about", label: "About" },
    { href: "/resident", label: "Resident" },
    { href: "/adminDash", label: "Admin" },
    { href: "/scheduling", label: "Scheduling" },
    { href: "/dashboard", label: "Dashboards" },
    { href: "/page", label: "Home" },

    { href: "/documentation", label: "documentation" },
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