'use client';

import { useState } from 'react';
import { EnvelopeSimple } from '@phosphor-icons/react';

const API_SUBSCRIBE = '/api/newsletter/subscribe';

function BoxIllustration() {
    return (
        <svg
            width="96"
            height="96"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-800 dark:text-neutral-200 flex-shrink-0 hidden sm:block"
        >
            {/* Box body */}
            <rect
                x="10"
                y="30"
                width="38"
                height="26"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            {/* Box top left flap */}
            <path
                d="M10 30 L18 20 L32 20 L32 30"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
            />
            {/* Box top right flap */}
            <path
                d="M48 30 L40 20 L32 20 L32 30"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
            />
            {/* Vertical ribbon */}
            <line
                x1="29"
                y1="20"
                x2="29"
                y2="56"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            {/* Horizontal ribbon */}
            <line
                x1="10"
                y1="30"
                x2="48"
                y2="30"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            {/* Sparkle top-right */}
            <path
                d="M52 10 L53.2 7 L54.4 10 L57.4 11.2 L54.4 12.4 L53.2 15.4 L52 12.4 L49 11.2 Z"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
            />
            {/* Small dot sparkles */}
            <circle cx="6" cy="18" r="1.5" fill="currentColor" />
            <circle cx="56" cy="24" r="1.2" fill="currentColor" />
            <circle cx="58" cy="34" r="1" fill="currentColor" />
            <circle cx="4" cy="34" r="1" fill="currentColor" />
        </svg>
    );
}

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email.trim()) return;
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(API_SUBSCRIBE, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(
                    (data.error as string) ||
                        'Something went wrong. Please try again.',
                );
                return;
            }
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-12 md:py-20 lg:py-24">
            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-6 sm:px-10 md:px-14 py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                {/* Left: illustration + copy */}
                <div className="flex items-center gap-5 sm:gap-7 flex-1 min-w-0">
                    <BoxIllustration />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                            Our Newsletter
                        </h2>
                        <p className="text-lg md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            Subscribe now so you don&apos;t miss any of the
                            latest updates, and you&apos;ll also receive a 20%
                            discount code.
                        </p>
                    </div>
                </div>

                {/* Right: form */}
                <div className="flex flex-col gap-2 w-full md:w-[400px] flex-shrink-0">
                    <label className="text-sm text-neutral-500 dark:text-neutral-400">
                        Subscribe Newsletter{' '}
                        <span className="text-red-500">*</span>
                    </label>

                    {submitted ? (
                        <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100 py-3">
                            You&apos;re subscribed. Talk soon.
                        </p>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-2 sm:gap-0"
                        >
                            <div className="flex flex-1 items-center border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 px-4 gap-2.5">
                                <EnvelopeSimple
                                    size={17}
                                    className="text-neutral-400 flex-shrink-0"
                                />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError(null);
                                    }}
                                    placeholder="Introduce your email"
                                    className="flex-1 h-12 text-sm bg-transparent outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                                    disabled={loading}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto h-12 px-7 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-80 transition-opacity flex-shrink-0 disabled:opacity-60"
                            >
                                {loading ? 'Subscribing…' : 'Subscribe'}
                            </button>
                        </form>
                    )}
                    {error && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                            {error}
                        </p>
                    )}

                    {!submitted && (
                        <p className="text-xs text-neutral-400 dark:text-neutral-500">
                            Agree Terms and Conditions
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
