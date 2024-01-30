import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
	return (
		<nav className="py-4 flex items-center justify-between container">
			<Link href="/">
				<Logo />
			</Link>

			<div className="flex items-center gap-4">
				<Link href="/login" className="btn btn-primary">
					Login
				</Link>
				<Link href="/register" className="text-green-500 btn btn-outline">
					Register
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
