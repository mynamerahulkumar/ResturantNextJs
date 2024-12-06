import Link from "next/link";
import logoImg from '../../assets/logo.png';
export default function MainHeader(){
    return(
        <header>
            <Link href="/">
            <img src={logoImg.src} alt="A food plate" />
            Next level food
            </Link>
            <nav>
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