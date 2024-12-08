import Link from "next/link";
import logoImg from '../../assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="A food plate" />
            Next level food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Food community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}