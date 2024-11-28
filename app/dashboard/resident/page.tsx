// 'app/dashboard/resident/page.tsx' Scoped Layouts


import styles from 'app/styles/requestDash.module.css'
import Link from 'next/link'


const ABOUT_TEXT = {
    title: "Resident Dashboard",
    subtitle: "Here",
}

export default function ResidentDashboardPage() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{ABOUT_TEXT.title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{ABOUT_TEXT.subtitle}</h3>
                <button>
                    <a href={"app/dashboard/admin/requests/page"} />Route to Request Page
                </button>

            </main>
        </Link>
    )
}