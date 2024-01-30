'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	async function handleSubmit(e: any) {
		e.preventDefault();

		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (res.ok) {
				router.push('/dashboard');
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Navbar />

			<main className="py-4">
				<div className="container">
					<h2 className="text-5xl text-center font-bold mb-4 text-green-500">Login</h2>

					<div className="card mx-auto max-w-md space-y-4">
						<Image
							className="mx-auto"
							src="/images/login-image.svg"
							alt="girl standing by big laptop"
							width={200}
							height={200}
						/>

						<p className="text-center text-gray-500">
							Login to gain access to your account and start managing your expenses today!
						</p>

						<form className="" onSubmit={handleSubmit}>
							<div className="grid gap-0.5 mb-2">
								<label htmlFor="email" className="block mb-2">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="border p-2 w-full"
									defaultValue={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="grid gap-0.5">
								<label htmlFor="password" className="block mb-2">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									className="border p-2 w-full"
									defaultValue={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div>
								<button
									type="submit"
									className="btn btn-primary w-full mt-4"
									disabled={email === '' || password === ''}
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};
export default Page;
