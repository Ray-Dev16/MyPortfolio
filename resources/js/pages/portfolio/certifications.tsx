import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pencil, Trash2, ImagePlus } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Certifications', href: '/dashboard/portfolio/certifications' },
];

type Certification = {
    id: number;
    name: string;
    issuer: string;
    year: string | null;
    image_path: string | null;
    image_url: string | null;
    sort_order: number;
};

export default function PortfolioCertifications({
    certifications,
}: {
    certifications: Certification[];
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newOpen, setNewOpen] = useState(false);
    const addFileRef = useRef<HTMLInputElement>(null);
    const editFileRef = useRef<HTMLInputElement>(null);

    const addForm = useForm({ name: '', issuer: '', year: '', image: null as File | null });
    const editForm = useForm({
        name: '',
        issuer: '',
        year: '',
        image: null as File | null,
        _method: undefined as string | undefined,
    });

    const addPreview = useMemo(
        () => (addForm.data.image ? URL.createObjectURL(addForm.data.image) : null),
        [addForm.data.image],
    );
    const editPreview = useMemo(
        () => (editForm.data.image ? URL.createObjectURL(editForm.data.image) : null),
        [editForm.data.image],
    );
    useEffect(() => () => {
        if (addPreview) URL.revokeObjectURL(addPreview);
        if (editPreview) URL.revokeObjectURL(editPreview);
    }, [addPreview, editPreview]);

    const startEdit = (c: Certification) => {
        setEditingId(c.id);
        editForm.setData({
            name: c.name,
            issuer: c.issuer,
            year: c.year ?? '',
            image: null,
            _method: undefined,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Certifications – Portfolio" />
            <div className="space-y-6 p-4">
                {status && (
                    <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Certifications</h1>
                    <Button onClick={() => setNewOpen(!newOpen)} variant="outline">
                        {newOpen ? 'Cancel' : 'Add certification'}
                    </Button>
                </div>

                {newOpen && (
                    <Card>
                        <CardHeader>
                            <CardTitle>New certification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addForm.post('/dashboard/portfolio/certifications', {
                                        forceFormData: true,
                                        onSuccess: () => {
                                            addForm.reset();
                                            addForm.setData('image', null);
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="space-y-4"
                            >
                                <div className="grid gap-2">
                                    <Label>Image (badge / certificate)</Label>
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
                                        <div className="flex size-20 shrink-0 overflow-hidden rounded-lg border bg-muted">
                                            {addPreview ? (
                                                <img src={addPreview} alt="" className="size-full object-cover" />
                                            ) : (
                                                <div className="flex size-full items-center justify-center">
                                                    <ImagePlus className="size-8 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="button" variant="outline" size="sm" onClick={() => addFileRef.current?.click()}>
                                                Choose image
                                            </Button>
                                            {addForm.data.image && (
                                                <Button type="button" variant="ghost" size="sm" onClick={() => addForm.setData('image', null)}>
                                                    Remove
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">JPEG, PNG, WebP or GIF. Max 2MB.</p>
                                    <InputError message={addForm.errors.image} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Name</Label>
                                    <Input
                                        value={addForm.data.name}
                                        onChange={(e) => addForm.setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={addForm.errors.name} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Issuer</Label>
                                    <Input
                                        value={addForm.data.issuer}
                                        onChange={(e) => addForm.setData('issuer', e.target.value)}
                                    />
                                    <InputError message={addForm.errors.issuer} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Year</Label>
                                    <Input
                                        value={addForm.data.year}
                                        onChange={(e) => addForm.setData('year', e.target.value)}
                                    />
                                    <InputError message={addForm.errors.year} />
                                </div>
                                <Button type="submit" disabled={addForm.processing}>
                                    Add
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-3">
                    {certifications.map((c) => (
                        <Card key={c.id}>
                            <CardContent className="pt-6">
                                {editingId === c.id ? (
                                    <form
                                        onSubmit={(ev) => {
                                            ev.preventDefault();
                                            if (editForm.data.image instanceof File) {
                                                editForm.setData('_method', 'put');
                                                editForm.post(`/dashboard/portfolio/certifications/${c.id}`, {
                                                    forceFormData: true,
                                                    onSuccess: () => {
                                                        setEditingId(null);
                                                        editForm.setData({ image: null, _method: undefined });
                                                    },
                                                });
                                            } else {
                                                editForm.put(`/dashboard/portfolio/certifications/${c.id}`, {
                                                    onSuccess: () => setEditingId(null),
                                                });
                                            }
                                        }}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-2">
                                            <Label>Image (badge / certificate)</Label>
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
                                                <div className="flex size-20 shrink-0 overflow-hidden rounded-lg border bg-muted">
                                                    {editPreview ? (
                                                        <img src={editPreview} alt="" className="size-full object-cover" />
                                                    ) : c.image_url ? (
                                                        <img src={c.image_url} alt="" className="size-full object-cover" />
                                                    ) : (
                                                        <div className="flex size-full items-center justify-center">
                                                            <ImagePlus className="size-8 text-muted-foreground" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button type="button" variant="outline" size="sm" onClick={() => editFileRef.current?.click()}>
                                                        Change image
                                                    </Button>
                                                    {editForm.data.image && (
                                                        <Button type="button" variant="ghost" size="sm" onClick={() => editForm.setData('image', null)}>
                                                            Cancel change
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-xs text-muted-foreground">JPEG, PNG, WebP or GIF. Max 2MB.</p>
                                            <InputError message={editForm.errors.image} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Name</Label>
                                            <Input
                                                value={editForm.data.name}
                                                onChange={(ev) => editForm.setData('name', ev.target.value)}
                                                required
                                            />
                                            <InputError message={editForm.errors.name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Issuer</Label>
                                            <Input
                                                value={editForm.data.issuer}
                                                onChange={(ev) => editForm.setData('issuer', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.issuer} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Year</Label>
                                            <Input
                                                value={editForm.data.year}
                                                onChange={(ev) => editForm.setData('year', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.year} />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="submit" disabled={editForm.processing}>
                                                Save
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setEditingId(null)}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex min-w-0 flex-1 items-center gap-4">
                                            {c.image_url ? (
                                                <div className="size-12 shrink-0 overflow-hidden rounded-lg border bg-muted">
                                                    <img src={c.image_url} alt="" className="size-full object-cover" />
                                                </div>
                                            ) : null}
                                            <div className="min-w-0">
                                                <p className="font-medium">{c.name}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {c.issuer} {c.year ? `• ${c.year}` : ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 gap-2">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => startEdit(c)}
                                                aria-label="Edit"
                                            >
                                                <Pencil className="size-4" />
                                            </Button>
                                            <Link
                                                href={`/dashboard/portfolio/certifications/${c.id}`}
                                                method="delete"
                                                as="button"
                                                className="inline-flex size-9 items-center justify-center rounded-md border border-input bg-background text-destructive hover:bg-destructive/10"
                                                preserveScroll
                                            >
                                                <Trash2 className="size-4" />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Button variant="outline" asChild>
                    <Link href="/dashboard">Back to Overview</Link>
                </Button>
            </div>
        </AppLayout>
    );
}
