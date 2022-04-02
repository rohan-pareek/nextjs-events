import Link from 'next/link';
import css from '../../styles/button.module.css';

function Button({ href, children }) {
    return (
        <Link href={href}>
            <a className={css.btn}>
                {children}
            </a>
        </Link>
    )
}

export default Button;
