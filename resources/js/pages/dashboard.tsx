import { Head, Link } from '@inertiajs/react';
import {
    Briefcase,
    ExternalLink,
    LayoutGrid,
    MessageCircle,
    Award,
  PenLine,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: dashboard().url },
];

type Overview = {
    profileName: string;
    projectsCount: number;
    experiencesCount: number;
    certificationsCount: number;
    recommendationsCount: number;
};

const statCards: Array<{
    key: keyof Overview;
    label: string;
    icon: typeof Briefcase;
    href: string;
}> = [
    { key: 'projectsCount', label: 'Projects', icon: LayoutGrid, href: '/dashboard/portfolio/projects' },
    { key: 'experiencesCount', label: 'Experience', icon: Briefcase, href: '/dashboard/portfolio/experiences' },
    { key: 'certificationsCount', label: 'Certifications', icon: Award, href: '/dashboard/portfolio/certifications' },
    { key: 'recommendationsCount', label: 'Recommendations', icon: MessageCircle, href: '/dashboard/portfolio/recommendations' },
];

export default function Dashboard({
    overview = {
        profileName: 'Portfolio',
        projectsCount: 0,
        experiencesCount: 0,
        certificationsCount: 0,
        recommendationsCount: 0,
    },
}: {
    overview?: Overview;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Overview" />
            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                {/* Welcome */}
                <section className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Welcome back{overview.profileName ? `, ${overview.profileName.split(' ')[0]}` : ''}
                    </h1>
                    <p className="text-muted-foreground">
                        Here’s a quick overview of your portfolio. Use the sidebar to edit any section.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Changes you save here are saved to your portfolio and appear on your landing page automatically—refresh your portfolio to see updates.
                    </p>
                </section>

                {/* Stats */}
                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {statCards.map(({ key, label, icon: Icon, href }) => (
                        <Link key={key} href={href}>
                            <Card className="h-full transition-colors hover:bg-muted/50">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        {label}
                                    </CardTitle>
                                    <Icon className="size-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-semibold tabular-nums">
                                        {overview[key] ?? 0}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Edit in sidebar →
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </section>

                {/* View site + quick actions */}
                <section className="grid gap-4 md:grid-cols-2">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ExternalLink className="size-5" />
                                View your portfolio
                            </CardTitle>
                            <CardDescription>
                                See how your portfolio looks to visitors.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild variant="default">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    Open public site
                                    <ExternalLink className="ml-2 size-4" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <PenLine className="size-5" />
                                Quick edit
                            </CardTitle>
                            <CardDescription>
                                Jump to Profile or Projects from the sidebar.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/dashboard/portfolio/profile">Profile</Link>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/dashboard/portfolio/projects">Projects</Link>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/dashboard/portfolio/experiences">Experience</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
