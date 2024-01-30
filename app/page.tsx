import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<Navbar />

			<main>
				<section className="container py-20 grid md:grid-cols-2 gap-6">
					<div className="">
						<h1 className="text-6xl text-balance font-bold mb-8 leading-tight">
							SpendWise is not just an <span className="text-green-500">app</span>, it's your financial{' '}
							<span className="text-green-500">ally</span>
						</h1>

						<p className="max-w-prose mb-4 leading-relaxed">
							Start making wiser spending decisions today with SpendWise - because financial well-being
							begins with smart choices. Embark on a journey to a more financially conscious and empowered
							you!
						</p>

						<Link href="/login" className="btn btn-primary mt-4">
							Get Started
						</Link>
					</div>

					<div>
						<img src="/images/hero-bg.jpg" alt="" className="size-full object-cover object-right" />
					</div>
				</section>
			</main>
		</>
	);
};
export default Home;
