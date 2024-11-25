// Page Component ./about/page.tsx   

import styles from '../components/about.module.css'
import Link from 'next/link'


const ABOUT_TEXT = {
    title: "Title",
    subtitle: "Subtitle",
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