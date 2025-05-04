import { Link } from "react-router-dom"
import s from "./Header.module.scss"

function Header() {
    return <header className={s.verev}>
        <h3>logo</h3>
        <nav>
            <Link className={s.link} to="/">Home</Link>
            <Link className={s.link} to="/portfolio">portfolio</Link>
        </nav>
    </header>
}

export default Header
