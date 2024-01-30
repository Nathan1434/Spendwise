import Logo from '@/components/Logo';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid grid-cols-8 h-screen">
			<aside className="col-span-2">
				<nav className="p-6 flex flex-col items-center">
					<Logo />
				</nav>
			</aside>

			<main className="col-span-6 bg-gray-50 p-10 overflow-y-auto">
				<div className="flex flex-col h-full">
					<div className="container bg-white rounded-lg p-8 grow">{children}</div>
				</div>
			</main>
		</div>
	);
};
export default layout;
