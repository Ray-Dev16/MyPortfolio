import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Calendar, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Contact / CTA', href: '/dashboard/portfolio/contact-cta' },
];

export default function PortfolioContactCtaEdit({
    contact_intro,
    email,
    schedule_url,
    community_url,
}: {
    contact_intro: string;
    email: string;
    schedule_url: string;
    community_url: string;
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const { data, setData, put, processing, errors } = useForm({
        contact_intro: contact_intro ?? '',
        email: email ?? '',
        schedule_url: schedule_url ?? '',
        community_url: community_url ?? '',
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Contact / CTA – Portfolio" />
            <div className="mx-auto max-w-2xl space-y-6 p-4 md:p-6">
                {status && (
                    <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </p>
                )}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        put('/dashboard/portfolio/contact-cta');
                    }}
                    className="space-y-6"
                >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h1 className="text-xl font-semibold">Contact & CTA</h1>
                        <div className="flex gap-2">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Saving…' : 'Save'}
                            </Button>
                            <Button type="button" variant="outline" asChild>
                                <Link href="/dashboard">Back to Overview</Link>
                            </Button>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Intro text</CardTitle>
                            <CardDescription className="text-xs">
                                Paragraph under &quot;Let&apos;s work together.&quot; on your portfolio.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <textarea
                                rows={4}
                                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={data.contact_intro}
                                onChange={(e) => setData('contact_intro', e.target.value)}
                                placeholder="e.g. Available for UI/UX and WordPress freelance projects…"
                            />
                            <InputError message={errors.contact_intro} />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Get in touch</CardTitle>
                            <CardDescription className="text-xs">
                                Contact cards shown on your portfolio. Labels (Email, Let&apos;s talk, Community) are fixed; edit the values below.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 dark:border-[#3E3E3A] dark:bg-[#1f1f1e]">
                                    <Mail className="size-5 shrink-0 text-muted-foreground" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</p>
                                        <Input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="your@email.com"
                                            className="mt-0.5 h-8 border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
                                            required
                                        />
                                    </div>
                                </div>
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 dark:border-[#3E3E3A] dark:bg-[#1f1f1e]">
                                    <Calendar className="size-5 shrink-0 text-muted-foreground" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Let&apos;s talk</p>
                                        <p className="text-xs text-muted-foreground">Schedule a Call</p>
                                        <Input
                                            type="url"
                                            value={data.schedule_url}
                                            onChange={(e) => setData('schedule_url', e.target.value)}
                                            placeholder="https://calendly.com/..."
                                            className="mt-0.5 h-8 border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
                                        />
                                    </div>
                                </div>
                                <InputError message={errors.schedule_url} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3 rounded-lg border border-[#e8e8e6] bg-[#fafaf9] px-4 py-3 dark:border-[#3E3E3A] dark:bg-[#1f1f1e]">
                                    <Users className="size-5 shrink-0 text-muted-foreground" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Community</p>
                                        <p className="text-xs text-muted-foreground">Join Discussion</p>
                                        <Input
                                            type="url"
                                            value={data.community_url}
                                            onChange={(e) => setData('community_url', e.target.value)}
                                            placeholder="https://..."
                                            className="mt-0.5 h-8 border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
                                        />
                                    </div>
                                </div>
                                <InputError message={errors.community_url} />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
