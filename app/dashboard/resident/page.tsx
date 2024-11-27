// ./dashboard/page.tsx Scoped Layouts


import styles from '../components/requestDash.module.css'
import Link from 'next/link'


const ABOUT_TEXT = {
    title: "Resident DashBoard",
    subtitle: "Here",
}

export default function AboutPage() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{ABOUT_TEXT.title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{ABOUT_TEXT.subtitle}</h3>
            </main>
        </Link>
    )
}