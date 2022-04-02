import Link from "next/link";
import css from '../../styles/main-header.module.css';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <Link href="/">NextJS Events</Link>
            </div>
            <nav className={css.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
