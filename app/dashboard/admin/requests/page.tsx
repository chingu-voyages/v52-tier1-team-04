

// Admin views

import styles from 'app/styles/adminDash.module.css'
import Link from 'next/link'


const ABOUT_TEXT = {
    title: "Admin Dashboard",
    subtitle: "Here",
}

export default function AdminDashboardPage() {
    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <h1 className={`globalTitle ${styles.textHeading}`}>{ABOUT_TEXT.title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{ABOUT_TEXT.subtitle}</h3>

                <p>solar energy, radiation from the Sun capable of producing heat, causing chemical reactions, or generating electricity. The total amount of solar energy incident on Earth is vastly in excess of the world’s current and anticipated energy requirements. If suitably harnessed, this highly diffused source has the potential to satisfy all future energy needs. In the 21st century solar energy has become increasingly attractive as a renewable energy source because of its inexhaustible supply and its nonpolluting character, in stark contrast to the finite fossil fuels coal, petroleum, and natural gas. See also solar power.</p>
                <div>
                    <button>
                        <a href={"app/dashboard/admin/requests/page"} />Route to Request Page
                    </button>

                    <input type='text' placeholder='Enter your Admin number here' />
                </div>

            </main>
        </Link>
    )
}
