import { Head, Link } from '@inertiajs/react';
import { Monitor, Database, Wrench, ArrowLeft } from 'lucide-react';

type TechStackPayload = {
    frontend: string[];
    backend: string[];
    tools: string[];
};

type Profile = {
    name: string;
    footer_text: string;
};

const CATEGORIES: { key: keyof TechStackPayload; title: string; icon: typeof Monitor }[] = [
    { key: 'frontend', title: 'Frontend', icon: Monitor },
    { key: 'backend', title: 'Backend & Database', icon: Database },
    { key: 'tools', title: 'Tools & Specialized', icon: Wrench },
];

export default function FullTechStack({
    profile,
    techStack,
}: {
    profile: Profile;
    techStack: TechStackPayload;
}) {
    return (
        <>
            <Head title="Full Tech Stack">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            <div
                className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] font-sans antialiased"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
                <main className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        Full Tech Stack
                    </h1>
                    <p className="mt-2 text-[#706f6c] dark:text-[#A1A09A]">
                        Comprehensive list of tools and technologies I use.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                        {CATEGORIES.map(({ key, title, icon: Icon }) => {
                            const items = techStack[key] ?? [];
                            if (items.length === 0) return null;
                            return (
                                <div
                                    key={key}
                                    className="overflow-hidden rounded-xl border border-[#e8e8e6] bg-white p-6 shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]"
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="flex size-10 items-center justify-center rounded-lg border border-[#e8e8e6] bg-[#f8f8f6] dark:border-[#3E3E3A] dark:bg-[#262625]">
                                            <Icon className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                        </span>
                                        <h2 className="text-lg font-semibold">{title}</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((name) => (
                                            <span
                                                key={name}
                                                className="rounded-full border border-[#e8e8e6] bg-[#f8f8f6] px-3 py-1 text-sm text-[#1b1b18] dark:border-[#3E3E3A] dark:bg-transparent dark:text-[#EDEDEC]"
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>

                <footer className="border-t border-[#e8e8e6] py-8 dark:border-[#3E3E3A]">
                    <p className="text-center text-sm text-[#706f6c] dark:text-[#A1A09A]">
                        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
                    </p>
                    {profile.footer_text && (
                        <p className="mt-1 text-center text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            {profile.footer_text}
                        </p>
                    )}
                </footer>
            </div>
        </>
    );
}
