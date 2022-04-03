import Link from 'next/link';
import css from '../../styles/button.module.css';

function Button({ href, children, onClick }) {

    if (href) {

        return (
            <Link href={href}>
                <a className={css.btn}>
                    {children}
                </a>
            </Link>
        )

    }
    else {
        return <button className={css.btn} onClick={onClick}>{children}</button>
    }
}

export default Button;
