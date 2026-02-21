import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Pencil, Trash2, ImagePlus, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Projects', href: '/dashboard/portfolio/projects' },
];

type Project = {
    id: number;
    title: string;
    description: string | null;
    action_label: string | null;
    url: string | null;
    image_path: string | null;
    image_url: string | null;
};

export default function PortfolioProjects({ projects }: { projects: Project[] }) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newOpen, setNewOpen] = useState(false);
    const addFileRef = useRef<HTMLInputElement>(null);
    const editFileRef = useRef<HTMLInputElement>(null);

    const addForm = useForm({
        title: '',
        description: '',
        action_label: '',
        url: '',
        image: null as File | null,
    });
    const editForm = useForm({
        title: '',
        description: '',
        action_label: '',
        url: '',
        image: null as File | null,
        _method: undefined as string | undefined,
    });

    const startEdit = (p: Project) => {
        setEditingId(p.id);
        editForm.setData({
            title: p.title,
            description: p.description ?? '',
            action_label: p.action_label ?? '',
            url: p.url ?? '',
            image: null,
            _method: undefined,
        });
    };

    const addFormPreview = useMemo(
        () => (addForm.data.image ? URL.createObjectURL(addForm.data.image) : null),
        [addForm.data.image],
    );
    const editFormPreview = useMemo(
        () => (editForm.data.image ? URL.createObjectURL(editForm.data.image) : null),
        [editForm.data.image],
    );
    useEffect(() => () => {
        if (addFormPreview) URL.revokeObjectURL(addFormPreview);
        if (editFormPreview) URL.revokeObjectURL(editFormPreview);
    }, [addFormPreview, editFormPreview]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Projects – Portfolio" />
            <div className="space-y-8 p-4 md:p-6 lg:max-w-4xl">
                {status && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </div>
                )}

                <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
                        <p className="text-sm text-muted-foreground">
                            Add or edit projects and upload a cover photo for each.
                        </p>
                    </div>
                    <Button
                        onClick={() => {
                            setNewOpen(!newOpen);
                            if (newOpen) addForm.reset();
                        }}
                        variant={newOpen ? 'ghost' : 'default'}
                    >
                        {newOpen ? 'Cancel' : 'Add project'}
                    </Button>
                </header>

                {newOpen && (
                    <Card className="border-2 border-dashed">
                        <CardHeader>
                            <CardTitle className="text-lg">New project</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addForm.post('/dashboard/portfolio/projects', {
                                        forceFormData: true,
                                        onSuccess: () => {
                                            addForm.reset();
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="space-y-6"
                            >
                                <div className="space-y-4">
                                    <Label>Cover photo (optional)</Label>
                                    <input
                                        ref={addFileRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp,image/gif"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) addForm.setData('image', file);
                                        }}
                                    />
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={cn(
                                                'flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed bg-muted/50',
                                                addFormPreview && 'border-solid border-primary/30',
                                            )}
                                        >
                                            {addFormPreview ? (
                                                <img
                                                    src={addFormPreview}
                                                    alt="Preview"
                                                    className="size-full object-cover"
                                                />
                                            ) : (
                                                <ImagePlus className="size-8 text-muted-foreground" />
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => addFileRef.current?.click()}
                                            >
                                                Choose image
                                            </Button>
                                            {addForm.data.image && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => addForm.setData('image', null)}
                                                >
                                                    <X className="size-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        JPEG, PNG, WebP or GIF. Max 2MB.
                                    </p>
                                    <InputError message={addForm.errors.image} />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Title</Label>
                                        <Input
                                            value={addForm.data.title}
                                            onChange={(e) =>
                                                addForm.setData('title', e.target.value)}
                                            required
                                            placeholder="Project name"
                                        />
                                        <InputError message={addForm.errors.title} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>URL</Label>
                                        <Input
                                            type="url"
                                            value={addForm.data.url}
                                            onChange={(e) =>
                                                addForm.setData('url', e.target.value)}
                                            placeholder="https://..."
                                        />
                                        <InputError message={addForm.errors.url} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <textarea
                                        className="min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        value={addForm.data.description}
                                        onChange={(e) =>
                                            addForm.setData('description', e.target.value)}
                                        placeholder="Short description of the project"
                                    />
                                    <InputError message={addForm.errors.description} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Button / link label</Label>
                                    <Input
                                        value={addForm.data.action_label}
                                        onChange={(e) =>
                                            addForm.setData('action_label', e.target.value)}
                                        placeholder="View Case Study or domain.com"
                                    />
                                    <InputError message={addForm.errors.action_label} />
                                </div>
                                <Button type="submit" disabled={addForm.processing}>
                                    {addForm.processing ? 'Adding…' : 'Add project'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-4">
                    <h2 className="text-sm font-medium text-muted-foreground">
                        Your projects ({projects.length})
                    </h2>
                    <div className="space-y-4">
                        {projects.map((p) => (
                            <Card key={p.id} className="overflow-hidden">
                                <CardContent className="p-0">
                                    {editingId === p.id ? (
                                        <form
                                            onSubmit={(ev) => {
                                                ev.preventDefault();
                                                editForm.setData('_method', 'put');
                                                editForm.post(`/dashboard/portfolio/projects/${p.id}`, {
                                                    forceFormData: true,
                                                    onSuccess: () => {
                                                        setEditingId(null);
                                                        editForm.setData({ image: null, _method: undefined });
                                                    },
                                                });
                                            }}
                                            className="p-6 space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <Label>Cover photo</Label>
                                                <input
                                                    ref={editFileRef}
                                                    type="file"
                                                    accept="image/jpeg,image/png,image/webp,image/gif"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) editForm.setData('image', file);
                                                    }}
                                                />
                                                <div className="flex items-center gap-4">
                                                    <div className="flex size-28 shrink-0 overflow-hidden rounded-lg border bg-muted">
                                                        {editFormPreview ? (
                                                            <img
                                                                src={editFormPreview}
                                                                alt="New preview"
                                                                className="size-full object-cover"
                                                            />
                                                        ) : p.image_url ? (
                                                            <img
                                                                src={p.image_url}
                                                                alt=""
                                                                className="size-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex size-full items-center justify-center">
                                                                <ImagePlus className="size-10 text-muted-foreground" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() =>
                                                                editFileRef.current?.click()}
                                                        >
                                                            Change photo
                                                        </Button>
                                                        {editForm.data.image && (
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() =>
                                                                    editForm.setData('image', null)}
                                                            >
                                                                Cancel change
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    JPEG, PNG, WebP or GIF. Max 2MB.
                                                </p>
                                                <InputError message={editForm.errors.image} />
                                            </div>

                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label>Title</Label>
                                                    <Input
                                                        value={editForm.data.title}
                                                        onChange={(ev) =>
                                                            editForm.setData('title', ev.target.value)}
                                                        required
                                                    />
                                                    <InputError message={editForm.errors.title} />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>URL</Label>
                                                    <Input
                                                        type="url"
                                                        value={editForm.data.url}
                                                        onChange={(ev) =>
                                                            editForm.setData('url', ev.target.value)}
                                                    />
                                                    <InputError message={editForm.errors.url} />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Description</Label>
                                                <textarea
                                                    className="min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                    value={editForm.data.description}
                                                    onChange={(ev) =>
                                                        editForm.setData(
                                                            'description',
                                                            ev.target.value,
                                                        )}
                                                />
                                                <InputError message={editForm.errors.description} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Button / link label</Label>
                                                <Input
                                                    value={editForm.data.action_label}
                                                    onChange={(ev) =>
                                                        editForm.setData(
                                                            'action_label',
                                                            ev.target.value,
                                                        )}
                                                />
                                                <InputError message={editForm.errors.action_label} />
                                            </div>
                                            <div className="flex gap-3">
                                                <Button type="submit" disabled={editForm.processing}>
                                                    {editForm.processing ? 'Saving…' : 'Save'}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => {
                                                        setEditingId(null);
                                                        editForm.setData('image', null);
                                                    }}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="relative h-36 w-full shrink-0 overflow-hidden bg-muted sm:h-auto sm:w-40">
                                                {p.image_url ? (
                                                    <img
                                                        src={p.image_url}
                                                        alt=""
                                                        className="size-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex size-full items-center justify-center">
                                                        <ImagePlus className="size-12 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
                                                <div className="min-w-0">
                                                    <p className="font-semibold">{p.title}</p>
                                                    <p className="mt-0.5 text-sm text-muted-foreground line-clamp-2">
                                                        {p.description || '—'}
                                                    </p>
                                                    <p className="mt-1 text-xs text-muted-foreground">
                                                        {p.action_label || p.url || '—'}
                                                    </p>
                                                </div>
                                                <div className="flex shrink-0 gap-2">
                                                    <Button
                                                        size="icon"
                                                        variant="outline"
                                                        onClick={() => startEdit(p)}
                                                        aria-label="Edit"
                                                    >
                                                        <Pencil className="size-4" />
                                                    </Button>
                                                    <Link
                                                        href={`/dashboard/portfolio/projects/${p.id}`}
                                                        method="delete"
                                                        as="button"
                                                        className="inline-flex size-9 items-center justify-center rounded-md border border-input bg-background text-destructive hover:bg-destructive/10"
                                                        preserveScroll
                                                    >
                                                        <Trash2 className="size-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <Button variant="outline" asChild>
                    <Link href="/dashboard">Back to Overview</Link>
                </Button>
            </div>
        </AppLayout>
    );
}
