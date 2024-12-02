
// app/dashboard/page.tsx

import styles from 'app/styles/adminDash.module.css'
import Link from 'next/link'


const ADMIN_TEXT = {
    title: "Admin",
    subtitle: "About Subtitle",
}

export default function AdminPage() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{ADMIN_TEXT
            .title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{ADMIN_TEXT
            .subtitle}</h3>

                <div className={styles['flex-container']}>
                    <div>Containers</div>
                    <div>Containers</div>
                </div>
            </main>
        </Link>
    )
}