import Link from 'next/link';
import { useRouter } from 'next/router';
import { Alink, Nav } from './styles';

export default function Navbar() {
    const router = useRouter();
    return (
        <Nav>
            <ul>
                <li>
                    <Link href='/'><Alink tab={router.pathname === '/'}>Home</Alink></Link>
                </li>
                <li>
                    <Link href='/about'><Alink tab={router.pathname === '/about'}>About</Alink></Link>
                </li>
            </ul>
        </Nav>
    )
}
