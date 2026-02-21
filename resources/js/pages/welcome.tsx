import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import {
    MapPin,
    Calendar,
    Mail,
    Users,
    Info,
    GraduationCap,
    Briefcase,
    LayoutGrid,
    ChevronRight,
    Settings,
    CheckCircle,
    BookOpen,
    MessageCircle,
    ArrowUp,
    Linkedin,
    Github,
    Sun,
    Moon,
} from 'lucide-react';
import { dashboard } from '@/routes';
import { useAppearance } from '@/hooks/use-appearance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type PortfolioProfile = {
    name: string;
    location: string;
    tagline: string;
    avatar_path: string | null;
    email: string;
    schedule_url: string | null;
    community_url: string | null;
    linkedin_url: string | null;
    github_url: string | null;
    footer_text: string;
    chat_label: string;
};
type EducationLevelBase = { school: string; period: string };
type EducationLevelWithStrand = EducationLevelBase & { strand: string };
type EducationCollege = { degree: string; institution: string; period: string; strand: string };
type PortfolioEducation = {
    elementary?: EducationLevelBase;
    high_school?: EducationLevelBase;
    senior_high?: EducationLevelWithStrand;
    college?: EducationCollege;
};
type PortfolioExperience = { id: number; title: string; company: string; period: string };
type PortfolioProject = { id: number; title: string; description: string; action: string; href: string; image: string | null };
type PortfolioCert = { id: number; name: string; issuer: string; year: string; image: string | null };
type PortfolioRec = { id: number; quote: string; author: string };
type PortfolioTechStack = { frontend: string[]; backend: string[]; tools: string[] };

type Portfolio = {
    profile: PortfolioProfile;
    about: string;
    education: PortfolioEducation;
    beyond_screen: string;
    contact_intro: string;
    experiences: PortfolioExperience[];
    projects: PortfolioProject[];
    certifications: PortfolioCert[];
    recommendations: PortfolioRec[];
    techStack: PortfolioTechStack;
};

const defaultTechStack: PortfolioTechStack = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Tailwind CSS', 'Vite', 'Figma'],
    backend: ['PHP', 'Laravel', 'Python', 'Node.js', 'MySQL', 'PostgreSQL', 'Supabase'],
    tools: ['Git & GitHub', 'WordPress', 'SEO Optimization', 'Google Analytics'],
};

export default function Welcome({
    canRegister = true,
    portfolio,
}: {
    canRegister?: boolean;
    portfolio?: Portfolio;
}) {
    const { auth } = usePage().props;
    const p = portfolio ?? (null as unknown as Portfolio);
    const profile = p?.profile ?? {
        name: 'Renielyn Lenon',
        location: 'San Juan City, Metro Manila, Philippines',
        tagline: 'Aspiring Full-Stack Developer | Student Freelancer | UI/UX & SEO',
        avatar_path: null,
        email: 'rblenon18@gmail.com',
        schedule_url: null,
        community_url: null,
        linkedin_url: null,
        github_url: null,
        footer_text: 'Developed in San Juan City, Metro Manila, Philippines',
        chat_label: 'Chat with Ren',
    };
    const about = p?.about ?? 'From Civil Engineering to IT, I blend structural precision with digital innovation. As a student freelancer, I\'ve always tried to bridge academic theory with real-world execution, using my background in Marketing Analysis to create high-impact experiences. Today, I am an Aspiring Full-Stack Developer and UI/UX Designer combining expertise in WordPress, SEO, and Data Analytics to build meaningful connections between brands and their audience.';
    const education = p?.education ?? {
        college: { degree: 'BS Information Technology', institution: 'Polytechnic University of the Philippines', period: '2022 - 2027', strand: '' },
    };
    const beyondScreen = p?.beyond_screen ?? 'When I step away from the tech world, I focus on Muay Thai, the gym, dance, and travel to fuel my creativity and well-being, ensuring I return to my projects with fresh energy and perspective.';
    const contactIntro = p?.contact_intro ?? 'Available for UI/UX and WordPress freelance projects, with added support in SEO, Google Search Console (GSC), Google My Business (GMB), and email campaigns.';
    const experiences = p?.experiences ?? [
        { id: 1, title: 'WordPress Designer/Developer & SEO Specialist', company: 'Freelance', period: '2024 - Present' },
        { id: 2, title: 'Marketing Analyst', company: 'JG Superstore', period: '2023' },
        { id: 3, title: 'Content Associate', company: 'JG Superstore', period: '2023' },
        { id: 4, title: 'Technical Support Representative', company: 'ASUS Startek', period: '2022' },
    ];
    const projects = p?.projects ?? [
        { id: 1, title: 'PawsitiveCare', description: 'Secure multi-role pet care management via Laravel.', action: 'View Case Study', href: '#', image: null },
        { id: 2, title: 'Mr. Beans Coffee Co.', description: 'E-commerce Coffee Store - UI/UX, WordPress & SEO Optimization', action: 'mrbeans.online', href: 'https://mrbeans.online', image: null },
        { id: 3, title: 'KodeCraze', description: 'Tech Trends & AI Platform - Founder/Content Strategy.', action: 'kodecraze.com', href: 'https://kodecraze.com', image: null },
        { id: 4, title: 'OneClique Studio', description: 'Multimedia Team - UI/UX, WordPress & SEO Optimization', action: 'onecliquestudio.com', href: 'https://onecliquestudio.com', image: null },
    ];
    const certifications = p?.certifications ?? [
        { id: 1, name: 'Associate Data Analyst', issuer: 'DataCamp', year: '2025', image: null },
        { id: 2, name: 'Intermediate SQL', issuer: 'DataCamp', year: '2025', image: null },
        { id: 3, name: 'Intermediate Python', issuer: 'DataCamp', year: '2025', image: null },
    ];
    const recommendations = p?.recommendations ?? [
        { id: 1, quote: '"She have a better taste design and good at details."', author: 'Roy M.' },
        { id: 2, quote: '"Highly professional and delivered on time."', author: 'Client' },
    ];
    const techStack = p?.techStack ?? defaultTechStack;
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const [recIndex, setRecIndex] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const isDark = resolvedAppearance === 'dark';

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>
            <div
                className={cn(
                    'min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]',
                    'font-sans antialiased',
                )}
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
                {/* Top bar — Dashboard link when logged in */}
                <header className="sticky top-0 z-30 border-b border-[#19140014] bg-[#FDFDFC]/95 px-4 py-2.5 backdrop-blur dark:border-[#3E3E3A] dark:bg-[#0a0a0a]/95 lg:px-8">
                    <nav className="mx-auto flex max-w-5xl items-center justify-end">
                        {auth.user && (
                            <Link
                                href={dashboard()}
                                className="text-sm text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]"
                            >
                                Dashboard
                            </Link>
                        )}
                    </nav>
                </header>

                <main className="mx-auto max-w-5xl px-4 py-8 lg:px-8 lg:py-12">
                    {/* Profile header */}
                    <section className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                        <Avatar className="h-24 w-24 shrink-0 rounded-full border-2 border-[#e3e3e0] dark:border-[#3E3E3A] sm:h-28 sm:w-28">
                            <AvatarImage src={profile.avatar_path ?? undefined} alt="Profile" />
                            <AvatarFallback className="bg-[#e8e8e6] text-lg font-medium text-[#1b1b18] dark:bg-[#262625] dark:text-[#EDEDEC]">
                                {profile.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                        {profile.name}
                                    </h1>
                                    <span className="text-[#2563eb]" aria-hidden>
                                        ✓
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
                                    className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[#e8e8e6] bg-[#f8f8f6] text-[#706f6c] transition hover:border-[#dbdbd7] hover:text-[#1b1b18] dark:border-[#3E3E3A] dark:bg-[#262625] dark:text-[#A1A09A] dark:hover:border-[#62605b] dark:hover:text-[#EDEDEC]"
                                    aria-label="Toggle theme"
                                >
                                    {isDark ? (
                                        <Sun className="size-5" />
                                    ) : (
                                        <Moon className="size-5" />
                                    )}
                                </button>
                            </div>
                            <p className="mt-1 flex items-center gap-1.5 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                <MapPin className="size-4 shrink-0" />
                                {profile.location}
                            </p>
                            <p className="mt-2 text-sm text-[#1b1b18] dark:text-[#EDEDEC]">
                                {profile.tagline}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <Button
                                    variant="default"
                                    size="default"
                                    className="rounded-lg bg-[#1b1b18] text-white hover:bg-[#333] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-white"
                                    asChild
                                >
                                    <a href={profile.schedule_url ?? '#contact'}>
                                        <Calendar className="size-4" />
                                        Schedule a Call
                                    </a>
                                </Button>
                                <Button variant="outline" size="default" className="rounded-lg" asChild>
                                    <a href={`mailto:${profile.email}`}>
                                        <Mail className="size-4" />
                                        Send Email
                                    </a>
                                </Button>
                                <Button variant="outline" size="default" className="rounded-lg" asChild>
                                    <a href={profile.community_url ?? '#community'}>
                                        <Users className="size-4" />
                                        Join My Community
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Two-column: About + Education | Experience + Projects */}
                    <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                                <Info className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                <CardTitle className="text-base font-semibold">About Me</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm leading-relaxed text-[#1b1b18] dark:text-[#EDEDEC]">
                                    {about}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                                <Briefcase className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                <CardTitle className="text-base font-semibold">Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <ul className="space-y-2 text-sm text-[#1b1b18] dark:text-[#EDEDEC]">
                                    {experiences.map((e) => (
                                        <li key={e.id}>
                                            <span className="font-medium">{e.title}</span>
                                            {e.company && ` (${e.company})`} — {e.period}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                                <GraduationCap className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                <CardTitle className="text-base font-semibold">Education</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-0">
                                {education.elementary && (education.elementary.school || education.elementary.period) && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">Elementary</p>
                                        <p className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">{education.elementary.school}</p>
                                        {education.elementary.period && <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">{education.elementary.period}</p>}
                                    </div>
                                )}
                                {education.high_school && (education.high_school.school || education.high_school.period) && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">High School</p>
                                        <p className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">{education.high_school.school}</p>
                                        {education.high_school.period && <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">{education.high_school.period}</p>}
                                    </div>
                                )}
                                {education.senior_high && (education.senior_high.school || education.senior_high.period || education.senior_high.strand) && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">Senior High School</p>
                                        <p className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">{education.senior_high.school}</p>
                                        {education.senior_high.strand && <p className="text-sm text-[#1b1b18] dark:text-[#EDEDEC]">{education.senior_high.strand}</p>}
                                        {education.senior_high.period && <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">{education.senior_high.period}</p>}
                                    </div>
                                )}
                                {education.college && (education.college.degree || education.college.institution || education.college.period) && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">College</p>
                                        <p className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">{education.college.degree}</p>
                                        <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">{education.college.institution}</p>
                                        {education.college.strand && <p className="text-sm text-[#1b1b18] dark:text-[#EDEDEC]">{education.college.strand}</p>}
                                        {education.college.period && <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">{education.college.period}</p>}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                    <LayoutGrid className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                    Projects
                                </CardTitle>
                                <Link
                                    href="#projects"
                                    className="text-sm font-medium text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]"
                                >
                                    View All <ChevronRight className="inline size-4" />
                                </Link>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {projects.slice(0, 2).map((proj) => (
                                        <a
                                            key={proj.id}
                                            href={proj.href}
                                            target={proj.href.startsWith('http') ? '_blank' : undefined}
                                            rel={proj.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="group rounded-lg border border-[#19140014] bg-[#FDFDFC] p-3 transition hover:border-[#19140035] dark:border-[#3E3E3A] dark:bg-[#0a0a0a] dark:hover:border-[#62605b]"
                                        >
                                            <p className="font-medium text-[#1b1b18] group-hover:underline dark:text-[#EDEDEC]">
                                                {proj.title}
                                            </p>
                                            <p className="mt-1 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                                {proj.description}
                                            </p>
                                            <span className="mt-2 inline-block rounded-full bg-[#e8e8e6] px-2 py-0.5 text-xs dark:bg-[#262625]">
                                                {proj.action}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Tech Stack + Certifications | Projects grid + Recommendations */}
                    <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
                        <div className="flex flex-col gap-6">
                            <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                        <Settings className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                        Tech Stack
                                    </CardTitle>
                                    <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        View All <ChevronRight className="inline size-4" />
                                    </span>
                                </CardHeader>
                                <CardContent className="space-y-4 pt-0">
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#706f6c] dark:text-[#A1A09A]">
                                            Frontend
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {techStack.frontend.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-[#e8e8e6] px-3 py-1 text-xs text-[#1b1b18] dark:bg-[#262625] dark:text-[#EDEDEC]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#706f6c] dark:text-[#A1A09A]">
                                            Backend & Database
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {techStack.backend.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-[#e8e8e6] px-3 py-1 text-xs text-[#1b1b18] dark:bg-[#262625] dark:text-[#EDEDEC]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#706f6c] dark:text-[#A1A09A]">
                                            Tools & Specialized
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {techStack.tools.map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-full bg-[#e8e8e6] px-3 py-1 text-xs text-[#1b1b18] dark:bg-[#262625] dark:text-[#EDEDEC]"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                        <CheckCircle className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                        Certifications
                                    </CardTitle>
                                    <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        View All <ChevronRight className="inline size-4" />
                                    </span>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    {certifications.map((c) => (
                                        <div
                                            key={c.id}
                                            className="flex items-center gap-3 rounded-lg bg-[#e8e8e6] px-3 py-2 dark:bg-[#262625]"
                                        >
                                            {c.image && (
                                                <div className="size-10 shrink-0 overflow-hidden rounded-md bg-white dark:bg-[#1f1f1e]">
                                                    <img src={c.image} alt="" className="size-full object-cover" />
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    {c.name}
                                                </p>
                                                <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                                    {c.issuer} {c.year ? `• ${c.year}` : ''}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Card id="projects" className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                        <LayoutGrid className="size-5 text-[#706f6c] dark:text-[#A1A09A]" />
                                        Projects
                                    </CardTitle>
                                    <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        View All <ChevronRight className="inline size-4" />
                                    </span>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {projects.map((proj) => (
                                            <a
                                                key={proj.id}
                                                href={proj.href}
                                                target={proj.href.startsWith('http') ? '_blank' : undefined}
                                                rel={proj.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="group overflow-hidden rounded-xl border border-[#19140014] bg-[#FDFDFC] shadow-sm transition hover:border-[#19140035] dark:border-[#3E3E3A] dark:bg-[#0a0a0a] dark:hover:border-[#62605b]"
                                            >
                                                <div className="aspect-video bg-[#e8e8e6] dark:bg-[#262625]">
                                                    {proj.image && (
                                                        <img
                                                            src={proj.image}
                                                            alt=""
                                                            className="size-full object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <div className="p-3">
                                                    <p className="font-medium text-[#1b1b18] group-hover:underline dark:text-[#EDEDEC]">
                                                        {proj.title}
                                                    </p>
                                                    <p className="mt-1 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                                        {proj.description}
                                                    </p>
                                                    <span className="mt-2 inline-block rounded-full bg-[#e8e8e6] px-2 py-0.5 text-xs dark:bg-[#262625]">
                                                        {proj.action}
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden rounded-xl border-[#19140014] bg-white shadow-sm dark:border-[#3E3E3A] dark:bg-[#161615]">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base font-semibold">
                                        Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    {recommendations.length > 0 && (
                                        <>
                                            <blockquote className="italic text-[#1b1b18] dark:text-[#EDEDEC]">
                                                {recommendations[recIndex % recommendations.length].quote}
                                            </blockquote>
                                            <p className="mt-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                                — {recommendations[recIndex % recommendations.length].author}
                                            </p>
                                        </>
                                    )}
                                    <div className="mt-3 flex gap-2">
                                        {recommendations.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setRecIndex(i)}
                                                className={cn(
                                                    'size-2 rounded-full transition',
                                                    i === recIndex
                                                        ? 'bg-[#1b1b18] dark:bg-[#EDEDEC]'
                                                        : 'bg-[#e8e8e6] dark:bg-[#3E3E3A]',
                                                )}
                                                aria-label={`Go to recommendation ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Beyond the Screen + Let's work together */}
                    <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
                        {/* Beyond the Screen — white card, book icon, text, image gallery */}
                        <div className="overflow-hidden rounded-xl border border-[#e8e8e6] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615] dark:shadow-none">
                            <div className="flex flex-row items-center gap-2 border-b border-[#f0f0ee] px-6 py-4 dark:border-[#262625]">
                                <span className="flex size-9 items-center justify-center rounded-md border border-[#e8e8e6] bg-[#f8f8f6] dark:border-[#3E3E3A] dark:bg-[#262625]">
                                    <BookOpen className="size-4 text-[#706f6c] dark:text-[#A1A09A]" />
                                </span>
                                <h2 className="text-lg font-semibold tracking-tight text-[#1b1b18] dark:text-[#EDEDEC]">
                                    Beyond the Screen
                                </h2>
                            </div>
                            <div className="px-6 py-5">
                                <p className="text-sm leading-relaxed text-[#1b1b18] dark:text-[#EDEDEC]">
                                    {beyondScreen}
                                </p>
                                <div className="mt-4 flex gap-3">
                                    <div className="aspect-4/3 w-24 shrink-0 overflow-hidden rounded-lg border border-[#e8e8e6] bg-[#f0f0ee] dark:border-[#3E3E3A] dark:bg-[#262625]" />
                                    <div className="aspect-4/3 w-24 shrink-0 overflow-hidden rounded-lg border border-[#e8e8e6] bg-[#f0f0ee] dark:border-[#3E3E3A] dark:bg-[#262625]" />
                                </div>
                            </div>
                        </div>

                        {/* Let's work together — two-column: intro + FOLLOW ME | GET IN TOUCH + contact cards */}
                        <div
                            id="contact"
                            className="overflow-hidden rounded-xl border border-[#e8e8e6] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615] dark:shadow-none"
                        >
                            <div className="grid gap-6 p-6 lg:grid-cols-2 lg:gap-8 lg:p-8">
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-[#1b1b18] dark:text-[#EDEDEC]">
                                        Let's work <span className="font-semibold text-[#706f6c] dark:text-[#A1A09A]">together.</span>
                                    </h2>
                                    <p className="mt-4 text-sm leading-relaxed text-[#1b1b18] dark:text-[#EDEDEC]">
                                        {contactIntro}
                                    </p>
                                    <p className="mt-6 text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">
                                        Follow me
                                    </p>
                                    <div className="mt-2 flex gap-2">
                                        {profile.linkedin_url && (
                                            <a
                                                href={profile.linkedin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex size-10 items-center justify-center rounded-lg border border-[#e8e8e6] bg-white text-[#1b1b18] transition hover:border-[#dbdbd7] hover:bg-[#f8f8f6] dark:border-[#3E3E3A] dark:bg-[#262625] dark:text-[#EDEDEC] dark:hover:border-[#62605b] dark:hover:bg-[#2e2e2d]"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="size-5" />
                                            </a>
                                        )}
                                        {profile.github_url && (
                                            <a
                                                href={profile.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex size-10 items-center justify-center rounded-lg border border-[#e8e8e6] bg-white text-[#1b1b18] transition hover:border-[#dbdbd7] hover:bg-[#f8f8f6] dark:border-[#3E3E3A] dark:bg-[#262625] dark:text-[#EDEDEC] dark:hover:border-[#62605b] dark:hover:bg-[#2e2e2d]"
                                                aria-label="GitHub"
                                            >
                                                <Github className="size-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">
                                        Get in touch
                                    </p>
                                    <div className="mt-3 flex flex-col gap-3">
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 transition hover:border-[#dbdbd7] dark:border-[#3E3E3A] dark:bg-[#1f1f1e] dark:hover:border-[#62605b]"
                                        >
                                            <Mail className="size-5 shrink-0 text-[#706f6c] dark:text-[#A1A09A]" />
                                            <div className="min-w-0">
                                                <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">
                                                    Email
                                                </p>
                                                <p className="mt-0.5 truncate text-sm font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    {profile.email}
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href={profile.schedule_url ?? '#'}
                                            className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 transition hover:border-[#dbdbd7] dark:border-[#3E3E3A] dark:bg-[#1f1f1e] dark:hover:border-[#62605b]"
                                        >
                                            <Calendar className="size-5 shrink-0 text-[#706f6c] dark:text-[#A1A09A]" />
                                            <div className="min-w-0">
                                                <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">
                                                    Let's talk
                                                </p>
                                                <p className="mt-0.5 text-sm font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    Schedule a Call
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            id="community"
                                            href={profile.community_url ?? '#'}
                                            className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 transition hover:border-[#dbdbd7] dark:border-[#3E3E3A] dark:bg-[#1f1f1e] dark:hover:border-[#62605b]"
                                        >
                                            <Users className="size-5 shrink-0 text-[#706f6c] dark:text-[#A1A09A]" />
                                            <div className="min-w-0">
                                                <p className="text-xs font-medium uppercase tracking-wider text-[#706f6c] dark:text-[#A1A09A]">
                                                    Community
                                                </p>
                                                <p className="mt-0.5 text-sm font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    Join Discussion
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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

                {/* Floating actions */}
                <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
                    {showScrollTop && (
                        <Button
                            size="icon"
                            variant="default"
                            className="size-12 rounded-full bg-[#1b1b18] shadow-lg dark:bg-[#EDEDEC] dark:text-[#1b1b18]"
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="size-5" />
                        </Button>
                    )}
                    <Button
                        size="default"
                        className="rounded-full bg-[#1b1b18] px-4 py-3 dark:bg-[#EDEDEC] dark:text-[#1b1b18]"
                        asChild
                    >
                        <a href={`mailto:${profile.email}`}>
                            <MessageCircle className="size-4" />
                            {profile.chat_label}
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
}
