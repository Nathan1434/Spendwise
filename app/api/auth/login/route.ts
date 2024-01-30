export async function POST(request: Request) {
	const body = await request.json();
	const { email, password } = body;

	if (!email || !password) {
		return new Response('Missing fields', { status: 400 });
	}

	return new Response('Login successful', { status: 200 });
}
