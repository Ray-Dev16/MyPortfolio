import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

type Project = {
    id: number;
    title: string;
    description: string;
    action: string;
    href: string;
    image: string | null;
};

type Profile = {
    name: string;
    footer_text: string;
};

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

type Pagination = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
};

export default function SelectedProjects({
    profile,
    projects,
    pagination,
}: {
    profile: Profile;
    projects: Project[];
    pagination: Pagination;
}) {
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
    const hideImage = (id: number) => setImageErrors((prev) => new Set(prev).add(id));

    const goToPage = (url: string | null) => {
        if (url) router.get(url);
    };

    const links = pagination.links ?? [];
    const prevLink = links[0]?.url ? links[0] : null;
    const nextLink = links.length > 1 ? links[links.length - 1] : null;
    const pageLinks = links.length > 2 ? links.slice(1, -1) : [];

    return (
        <>
            <Head title="Selected Projects">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            <div
                className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] font-sans antialiased"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
                <main className="mx-auto max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]"
                    >
                        <ArrowLeft className="size-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        Selected Projects
                    </h1>
                    <p className="mt-2 text-[#706f6c] dark:text-[#A1A09A]">
                        A detailed gallery of my work in UI/UX, SEO, and Development.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {projects.map((proj) => (
                            <a
                                key={proj.id}
                                href={proj.href}
                                target={proj.href.startsWith('http') ? '_blank' : undefined}
                                rel={proj.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group overflow-hidden rounded-xl border border-[#19140014] bg-white shadow-sm transition hover:border-[#19140035] dark:border-[#3E3E3A] dark:bg-[#161615] dark:hover:border-[#62605b]"
                            >
                                <div className="relative aspect-video bg-[#e8e8e6] dark:bg-[#262625]">
                                    {proj.image && !imageErrors.has(proj.id) ? (
                                        <img
                                            src={proj.image}
                                            alt=""
                                            className="size-full object-cover"
                                            onError={() => hideImage(proj.id)}
                                        />
                                    ) : (
                                        <div className="flex size-full items-center justify-center">
                                            <LayoutGrid className="size-12 text-[#a1a09a] dark:text-[#706f6c]" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="font-semibold text-[#1b1b18] group-hover:underline dark:text-[#EDEDEC]">
                                        {proj.title}
                                    </p>
                                    <p className="mt-1 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        {proj.description}
                                    </p>
                                    <span className="mt-3 inline-block rounded-full bg-[#e8e8e6] px-3 py-1 text-xs dark:bg-[#262625]">
                                        {proj.action}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {pagination.last_page > 1 && (
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => goToPage(prevLink?.url ?? null)}
                                disabled={!prevLink}
                                className="inline-flex items-center gap-1 rounded-lg border border-[#e8e8e6] bg-white px-3 py-2 text-sm disabled:opacity-50 dark:border-[#3E3E3A] dark:bg-[#161615]"
                            >
                                <ChevronLeft className="size-4" />
                                Prev
                            </button>
                            {pageLinks.map((link, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => goToPage(link.url)}
                                    className={link.active
                                        ? 'rounded-lg bg-[#1b1b18] px-3 py-2 text-sm font-medium text-white dark:bg-[#EDEDEC] dark:text-[#1b1b18]'
                                        : 'rounded-lg border border-[#e8e8e6] bg-white px-3 py-2 text-sm dark:border-[#3E3E3A] dark:bg-[#161615]'}
                                >
                                    {typeof link.label === 'string' ? link.label.replace(/^&laquo;\s*|\s*&raquo;$/g, '') : link.label}
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={() => goToPage(nextLink?.url ?? null)}
                                disabled={!nextLink}
                                className="inline-flex items-center gap-1 rounded-lg border border-[#e8e8e6] bg-white px-3 py-2 text-sm disabled:opacity-50 dark:border-[#3E3E3A] dark:bg-[#161615]"
                            >
                                Next
                                <ChevronRight className="size-4" />
                            </button>
                        </div>
                    )}
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
