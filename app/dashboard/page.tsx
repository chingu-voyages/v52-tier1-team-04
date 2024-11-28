
// Main dashboard
// app/dashboard/page.tsx

import styles from 'app/styles/adminDash.module.css'
import Link from 'next/link'


const DASHBOARD_TEXT = {
    title: "Choose Your Dashboard",
    subtitle: "About Subtitle",
}

export default function Dashboard() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{DASHBOARD_TEXT
                    .title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{DASHBOARD_TEXT
                    .subtitle}</h3>

                <div className={styles['flex-container']}>
                    <div> <a href={"app/dashboard/admin/page"} />Admin</div>
                    <div> <a href={"app/dashboard/resident/page"} />Resident</div>
                </div>
            </main>
        </Link>
    )
}