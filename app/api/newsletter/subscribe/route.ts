import { NextResponse } from 'next/server';

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';
const FORM_ID = process.env.CONVERTKIT_FORM_ID ?? '53cf0f9d74';

export async function POST(request: Request) {
    const apiKey = process.env.CONVERTKIT_API_KEY;
    if (!apiKey?.trim()) {
        return NextResponse.json(
            { error: 'Newsletter is not configured.' },
            { status: 503 },
        );
    }

    let body: { email?: string };
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body.' },
            { status: 400 },
        );
    }

    const email = typeof body.email === 'string' ? body.email.trim() : '';
    if (!email) {
        return NextResponse.json(
            { error: 'Email is required.' },
            { status: 400 },
        );
    }

    const res = await fetch(
        `${CONVERTKIT_API_URL}/forms/${FORM_ID}/subscribe`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: apiKey.trim(),
                email,
            }),
        },
    );

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        return NextResponse.json(
            { error: data.message ?? 'Subscription failed.' },
            { status: res.status >= 500 ? 503 : 400 },
        );
    }

    return NextResponse.json({ success: true });
}
