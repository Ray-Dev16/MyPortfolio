import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { ImagePlus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Profile', href: '/dashboard/portfolio/profile' },
];

type ProfilePayload = Record<string, string | null> & { avatar_url?: string | null };

export default function PortfolioProfileEdit({
    profile,
}: {
    profile: ProfilePayload;
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const avatarInputRef = useRef<HTMLInputElement>(null);
    const { data, setData, put, processing, errors } = useForm({
        name: profile.name ?? '',
        location: profile.location ?? '',
        tagline: profile.tagline ?? '',
        avatar_path: profile.avatar_path ?? '',
        avatar: null as File | null,
        email: profile.email ?? '',
        schedule_url: profile.schedule_url ?? '',
        community_url: profile.community_url ?? '',
        facebook_url: profile.facebook_url ?? '',
        github_url: profile.github_url ?? '',
        footer_text: profile.footer_text ?? '',
        chat_label: profile.chat_label ?? '',
    });
    const avatarPreview = useMemo(
        () => (data.avatar ? URL.createObjectURL(data.avatar) : null),
        [data.avatar],
    );
    useEffect(() => () => {
        if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    }, [avatarPreview]);

    const avatarUrl = avatarPreview ?? profile.avatar_url ?? null;
    const [avatarLoadError, setAvatarLoadError] = useState(false);
    useEffect(() => {
        setAvatarLoadError(false);
    }, [avatarUrl]);
    const showAvatarImage = avatarUrl && !avatarLoadError;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit profile – Portfolio" />
            <div className="flex min-h-0 flex-1 flex-col p-4 md:p-6">
                <div className="flex shrink-0 items-center justify-between gap-4 pb-4">
                    {status ? (
                        <div className="min-w-0 flex-1 rounded-lg border border-green-200 bg-green-50 py-2 px-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
                            {status}
                        </div>
                    ) : (
                        <div />
                    )}
                    <div className="flex shrink-0 gap-2">
                        <Button
                            type="submit"
                            form="profile-form"
                            disabled={processing}
                        >
                            {processing ? 'Saving…' : 'Save profile'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/dashboard">Back to Overview</Link>
                        </Button>
                    </div>
                </div>

                <form
                    id="profile-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (data.avatar instanceof File) {
                            router.post('/dashboard/portfolio/profile', {
                                ...data,
                                _method: 'put',
                                avatar: data.avatar,
                            } as Record<string, unknown>, {
                                forceFormData: true,
                                onSuccess: () => setData('avatar', null),
                            });
                        } else {
                            put('/dashboard/portfolio/profile');
                        }
                    }}
                    className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-auto lg:grid-cols-2 lg:grid-rows-[1fr_auto]"
                >
                    <Card className="flex min-h-0 flex-col lg:overflow-auto">
                        <CardHeader className="shrink-0 py-3">
                            <CardTitle className="text-base">Basic info</CardTitle>
                            <CardDescription className="text-xs">
                                Name, location, and tagline shown on your portfolio.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 pb-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="name" className="text-xs">Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    className="h-9"
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="location" className="text-xs">Location</Label>
                                <Input
                                    id="location"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    placeholder="City, Country"
                                    className="h-9"
                                />
                                <InputError message={errors.location} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="tagline" className="text-xs">Tagline</Label>
                                <Input
                                    id="tagline"
                                    value={data.tagline}
                                    onChange={(e) => setData('tagline', e.target.value)}
                                    placeholder="e.g. Aspiring Full-Stack Developer | UI/UX & SEO"
                                    className="h-9"
                                />
                                <InputError message={errors.tagline} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex min-h-0 flex-col lg:overflow-auto">
                        <CardHeader className="shrink-0 py-3">
                            <CardTitle className="text-base">Contact & links</CardTitle>
                            <CardDescription className="text-xs">
                                Email and URLs for profile buttons and social links.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 pb-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-xs">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    className="h-9"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-xs">Profile image</Label>
                                <input
                                    ref={avatarInputRef}
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp,image/gif"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setData('avatar', file);
                                    }}
                                />
                                <div className="flex items-center gap-4">
                                    <div className="flex size-20 shrink-0 overflow-hidden rounded-full border border-[#e8e8e6] bg-[#f0f0ee] dark:border-[#3E3E3A] dark:bg-[#262625]">
                                        {showAvatarImage ? (
                                            <img
                                                src={avatarUrl ?? ''}
                                                alt="Profile"
                                                className="size-full object-cover"
                                                onLoad={() => setAvatarLoadError(false)}
                                                onError={() => setAvatarLoadError(true)}
                                            />
                                        ) : (
                                            <div className="flex size-full items-center justify-center">
                                                <ImagePlus className="size-8 text-[#a1a09a] dark:text-[#706f6c]" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => avatarInputRef.current?.click()}
                                        >
                                            {avatarUrl ? 'Change image' : 'Choose image'}
                                        </Button>
                                        {data.avatar && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setData('avatar', null)}
                                            >
                                                Cancel
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    JPEG, PNG, WebP or GIF. Max 2MB.
                                </p>
                                <InputError message={errors.avatar_path ?? errors.avatar} />
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <Label htmlFor="schedule_url" className="text-xs">Schedule URL</Label>
                                    <Input
                                        id="schedule_url"
                                        type="url"
                                        value={data.schedule_url}
                                        onChange={(e) => setData('schedule_url', e.target.value)}
                                        placeholder="https://..."
                                        className="h-9"
                                    />
                                    <InputError message={errors.schedule_url} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="community_url" className="text-xs">Community URL</Label>
                                    <Input
                                        id="community_url"
                                        type="url"
                                        value={data.community_url}
                                        onChange={(e) => setData('community_url', e.target.value)}
                                        placeholder="https://..."
                                        className="h-9"
                                    />
                                    <InputError message={errors.community_url} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="facebook_url" className="text-xs">Facebook</Label>
                                    <Input
                                        id="facebook_url"
                                        type="url"
                                        value={data.facebook_url}
                                        onChange={(e) => setData('facebook_url', e.target.value)}
                                        placeholder="https://facebook.com/..."
                                        className="h-9"
                                    />
                                    <InputError message={errors.facebook_url} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="github_url" className="text-xs">GitHub</Label>
                                    <Input
                                        id="github_url"
                                        type="url"
                                        value={data.github_url}
                                        onChange={(e) => setData('github_url', e.target.value)}
                                        placeholder="https://github.com/..."
                                        className="h-9"
                                    />
                                    <InputError message={errors.github_url} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex min-h-0 flex-col lg:col-span-2 lg:flex-row lg:items-start lg:gap-6">
                        <CardHeader className="shrink-0 py-3 lg:min-w-[200px]">
                            <CardTitle className="text-base">Footer & CTA</CardTitle>
                            <CardDescription className="text-xs">
                                Footer text and chat button label.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid shrink-0 gap-4 py-3 sm:grid-cols-2 lg:flex-1">
                            <div className="space-y-1.5">
                                <Label htmlFor="footer_text" className="text-xs">Footer text</Label>
                                <Input
                                    id="footer_text"
                                    value={data.footer_text}
                                    onChange={(e) => setData('footer_text', e.target.value)}
                                    placeholder="e.g. Developed in San Juan City, Philippines"
                                    className="h-9"
                                />
                                <InputError message={errors.footer_text} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="chat_label" className="text-xs">Chat button label</Label>
                                <Input
                                    id="chat_label"
                                    value={data.chat_label}
                                    onChange={(e) => setData('chat_label', e.target.value)}
                                    placeholder="e.g. Chat with Ren"
                                    className="h-9"
                                />
                                <InputError message={errors.chat_label} />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
