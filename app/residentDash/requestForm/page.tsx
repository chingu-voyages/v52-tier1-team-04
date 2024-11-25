//Page Component './dashBoard/requestForm/page.tsx'

import styles from './components/request.module.css'
import Link from 'next/link'

const REQUEST_TEXT = {
    title: "Resident Title",
    subtitle: "Resident Subtitle",
};

export default function FormPage() {
    return (
        <div>
            <h1 className={`globalTitle ${styles.textHeading}`}>{REQUEST_TEXT.title}</h1>
            <h3 className={`globalSubtitle ${styles.textSubheading}`}>{REQUEST_TEXT.title}</h3>
            <form action="submit">Residents may request services and times here</form>
        </div>
    )
}

