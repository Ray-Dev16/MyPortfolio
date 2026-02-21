import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PortfolioSectionEdit({
    key: sectionKey,
    title,
    content,
    updateUrl,
}: {
    key: string;
    title: string;
    content: string;
    updateUrl?: string;
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const { data, setData, put, processing, errors } = useForm({ content: content ?? '' });
    const saveUrl = updateUrl ?? `/dashboard/portfolio/sections/${sectionKey}`;
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Overview', href: '/dashboard' },
        { title, href: `/dashboard/portfolio/sections/${sectionKey}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${title} – Portfolio`} />
            <div className="mx-auto max-w-2xl space-y-8 p-4 md:p-6">
                {status && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </div>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <CardDescription>
                            This text appears on your public portfolio. You can use multiple paragraphs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                put(saveUrl);
                            }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <Label htmlFor="content" className="sr-only">
                                    {title}
                                </Label>
                                <textarea
                                    id="content"
                                    rows={14}
                                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm leading-relaxed ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Write your content here…"
                                />
                                <InputError message={errors.content} />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Saving…' : 'Save'}
                                </Button>
                                <Button type="button" variant="outline" asChild>
                                    <Link href="/dashboard">Back to Overview</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
