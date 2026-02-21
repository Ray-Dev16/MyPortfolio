import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { ImagePlus } from 'lucide-react';
import { useRef } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const BEYOND_SCREEN_IMAGE_COUNT = 4;

export default function PortfolioSectionEdit({
    sectionKey,
    title,
    content,
    updateUrl,
    images: initialImages = [],
}: {
    sectionKey: string;
    title: string;
    content: string;
    updateUrl?: string;
    images?: string[];
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const isBeyondScreen = sectionKey === 'beyond_screen';
    const { data, setData, put, processing, errors } = useForm({
        content: content ?? '',
        ...(isBeyondScreen && {
            images: Array.from({ length: BEYOND_SCREEN_IMAGE_COUNT }, (_, i) =>
                initialImages[i] ? null : (null as File | null),
            ) as (File | null)[],
        }),
    });
    const saveUrl = updateUrl ?? `/dashboard/portfolio/sections/${sectionKey}`;
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Overview', href: '/dashboard' },
        { title, href: `/dashboard/portfolio/sections/${sectionKey}` },
    ];
    const imageInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const hasImageFiles = isBeyondScreen && (data as { images?: (File | null)[] }).images?.some((f) => f instanceof File);
    const formData = data as { content: string; images?: (File | null)[] };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isBeyondScreen && hasImageFiles) {
            const payload: Record<string, unknown> = { content: formData.content, _method: 'put' };
            formData.images?.forEach((file, i) => {
                if (file instanceof File) payload[`images[${i}]`] = file;
            });
            router.post(saveUrl, payload, {
                forceFormData: true,
                onSuccess: () => {
                    setData(
                        'images' as keyof typeof data,
                        Array(BEYOND_SCREEN_IMAGE_COUNT).fill(null),
                    );
                },
            });
        } else {
            put(saveUrl);
        }
    };

    const textareaRows = isBeyondScreen ? 5 : 14;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${title} – Portfolio`} />
            <div className="mx-auto max-w-2xl space-y-6 p-4 md:p-6">
                {status && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </div>
                )}

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{title}</CardTitle>
                        <CardDescription>
                            This text appears on your public portfolio.
                            {isBeyondScreen && ' Add up to 4 images for the gallery.'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="content" className="sr-only">
                                    {title}
                                </Label>
                                <textarea
                                    id="content"
                                    rows={textareaRows}
                                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm leading-relaxed ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Write your content here…"
                                />
                                <InputError message={errors.content} />
                            </div>

                            {isBeyondScreen && (
                                <div className="space-y-2">
                                    <Label>Gallery images (optional)</Label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {Array.from({ length: BEYOND_SCREEN_IMAGE_COUNT }, (_, i) => {
                                            const file = formData.images?.[i];
                                            const existingUrl = initialImages[i];
                                            const previewUrl =
                                                file instanceof File ? URL.createObjectURL(file) : existingUrl ?? null;
                                            return (
                                                <div key={i} className="relative">
                                                    <label
                                                        htmlFor={`image-${i}`}
                                                        className="flex aspect-4/3 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-input bg-muted/30 transition hover:bg-muted/50"
                                                    >
                                                        <input
                                                            ref={(el) => {
                                                                imageInputRefs.current[i] = el;
                                                            }}
                                                            id={`image-${i}`}
                                                            type="file"
                                                            accept="image/*"
                                                            className="sr-only"
                                                            onChange={(e) => {
                                                                const f = e.target.files?.[0];
                                                                const next = [...(formData.images ?? [])];
                                                                next[i] = f ?? null;
                                                                setData('images' as keyof typeof data, next);
                                                            }}
                                                        />
                                                        {previewUrl ? (
                                                            <img
                                                                src={previewUrl}
                                                                alt=""
                                                                className="size-full object-cover"
                                                            />
                                                        ) : (
                                                            <>
                                                                <ImagePlus className="size-8 text-muted-foreground" />
                                                                <span className="mt-1 text-xs text-muted-foreground">
                                                                    Add
                                                                </span>
                                                            </>
                                                        )}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

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
