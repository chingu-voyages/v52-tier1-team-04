// app/scheduling/page.tsx

import styles from 'app/styles/adminDash.module.css'
import Link from 'next/link'


const SCHEDULING_TEXT = {
    title: "Choose Your Time",
    subtitle: "Buttons are Below to Press and Schedule",
}

export default function Scheduling() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />

                <h1 className={`globalTitle ${styles.textHeading}`}>{SCHEDULING_TEXT
                    .title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{SCHEDULING_TEXT
                    .subtitle}</h3>

                <div className={styles['flex-container']}>
                    <div> <a href={"app/dashboard/admin/page"} />Admin</div>
                    <div> <a href={"app/dashboard/resident/page"} />Resident</div>
                </div>
            </main>
        </Link>
    )
}
