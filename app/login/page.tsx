'use client';

import Logo from '@/components/Logo';
import { useState } from 'react';

const Page = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(e: any) {
		e.preventDefault();

		console.log(email, password);
	}

	return (
		<>
			<header className="py-4 flex items-center justify-center">
				<a href="/">
					<Logo />
				</a>
			</header>

			<main>
				<div className="grid md:grid-cols-2">
					<div>
						<img src="" alt="girl saving money" className="w-full h-full" />
					</div>

					<div>
						<h2 className="text-3xl font-semibold mb-4">Login</h2>
						<p>Login to gain access to your account and start managing your expenses today!</p>

						<form className="mt-8" onSubmit={handleSubmit}>
							<div>
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
							<div>
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
									className="bg-blue-500 text-white px-4 py-2 w-full rounded"
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
