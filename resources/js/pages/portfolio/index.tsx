import { Head, Link } from '@inertiajs/react';
import {
    User,
    Info,
    GraduationCap,
    Briefcase,
    LayoutGrid,
    Settings,
    CheckCircle,
    MessageCircle,
    BookOpen,
    Mail,
    ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const iconMap = {
    user: User,
    info: Info,
    graduation: GraduationCap,
    briefcase: Briefcase,
    'layout-grid': LayoutGrid,
    settings: Settings,
    'check-circle': CheckCircle,
    'message-circle': MessageCircle,
    'book-open': BookOpen,
    mail: Mail,
};

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: dashboard().url },
    { title: 'Portfolio', href: '/dashboard/portfolio' },
];

export default function PortfolioIndex({
    cards,
}: {
    cards: Array<{ title: string; description: string; url: string; icon: string }>;
}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Portfolio – Edit cards" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <header className="mb-2">
                    <h1 className="text-xl font-semibold tracking-tight">Portfolio</h1>
                    <p className="text-sm text-muted-foreground">
                        Edit the sections and cards that appear on your public portfolio.
                    </p>
                </header>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => {
                        const Icon = iconMap[card.icon as keyof typeof iconMap] ?? LayoutGrid;
                        return (
                            <Link key={card.title} href={card.url}>
                                <Card className="h-full transition hover:border-primary/50 hover:shadow-md">
                                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                                            <Icon className="size-5 text-muted-foreground" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <CardTitle className="flex items-center justify-between gap-2 text-base">
                                                {card.title}
                                                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm text-muted-foreground">
                                            {card.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
