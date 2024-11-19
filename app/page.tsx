// Page Component ./app/page.tsx   
// equivalent to "/"

// import 'app/global.css'
import styles from './components/home.module.css'
import Link from 'next/link'

const HOME_TEXT = {
    title: "Solar Panel Planning",
    subtitle: "Find Us, Install with Us, Maintain it with Us",
    formPlaceholder: "Enter your email",
};

export default function PageHome() {

    return (
        <Link href="/dashboard" prefetch={true}>
            <main>
                <div className={styles.shape} />
                {/* global className with module-specific template literals */}
                <h1 className={`globalTitle ${styles.textHeading}`}>{HOME_TEXT.title}</h1>
                <h3 className={`globalSubtitle ${styles.textSubheading}`}>{HOME_TEXT.subtitle}</h3>

                <input type="text" placeholder={HOME_TEXT.formPlaceholder} />
            </main>
        </Link>
    )
}