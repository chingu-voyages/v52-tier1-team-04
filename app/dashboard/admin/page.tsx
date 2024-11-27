// app/dashboard/admin/page.tsx Scoped Layouts - Route: /admin

import styles from '../components/adminDash.module.css'
import Link from 'next/link'


const ABOUT_TEXT = {
    title: "About title",
    subtitle: "About Subtitle",
}

export default function AboutPage() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{ABOUT_TEXT.title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{ABOUT_TEXT.subtitle}</h3>

                <div className={styles['flex-container']}>
                    <div>Containers</div>
                    <div>Containers</div>
                </div>
            </main>
        </Link>
    )
}