import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
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

    const addForm = useForm({ name: '', issuer: '', year: '' });
    const editForm = useForm({ name: '', issuer: '', year: '' });

    const startEdit = (c: Certification) => {
        setEditingId(c.id);
        editForm.setData({
            name: c.name,
            issuer: c.issuer,
            year: c.year ?? '',
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
                                        onSuccess: () => {
                                            addForm.reset();
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="space-y-4"
                            >
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
                                            editForm.put(
                                                `/dashboard/portfolio/certifications/${c.id}`,
                                                { onSuccess: () => setEditingId(null) },
                                            );
                                        }}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-2">
                                            <Label>Name</Label>
                                            <Input
                                                value={editForm.data.name}
                                                onChange={(ev) =>
                                                    editForm.setData('name', ev.target.value)}
                                                required
                                            />
                                            <InputError message={editForm.errors.name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Issuer</Label>
                                            <Input
                                                value={editForm.data.issuer}
                                                onChange={(ev) =>
                                                    editForm.setData('issuer', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.issuer} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Year</Label>
                                            <Input
                                                value={editForm.data.year}
                                                onChange={(ev) =>
                                                    editForm.setData('year', ev.target.value)}
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
                                        <div>
                                            <p className="font-medium">{c.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {c.issuer} {c.year ? `• ${c.year}` : ''}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
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
