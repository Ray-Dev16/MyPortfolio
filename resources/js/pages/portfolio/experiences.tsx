import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Experience', href: '/dashboard/portfolio/experiences' },
];

type Experience = { id: number; title: string; company: string; period: string; sort_order: number };

export default function PortfolioExperiences({
    experiences,
}: {
    experiences: Experience[];
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newOpen, setNewOpen] = useState(false);

    const addForm = useForm({ title: '', company: '', period: '' });
    const editForm = useForm({ title: '', company: '', period: '' });

    const startEdit = (e: Experience) => {
        setEditingId(e.id);
        editForm.setData({ title: e.title, company: e.company, period: e.period });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Experience – Portfolio" />
            <div className="space-y-6 p-4">
                {status && (
                    <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Experience</h1>
                    <Button onClick={() => setNewOpen(!newOpen)} variant="outline">
                        {newOpen ? 'Cancel' : 'Add experience'}
                    </Button>
                </div>

                {newOpen && (
                    <Card>
                        <CardHeader>
                            <CardTitle>New experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addForm.post('/dashboard/portfolio/experiences', {
                                        onSuccess: () => {
                                            addForm.reset();
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="space-y-4"
                            >
                                <div className="grid gap-2">
                                    <Label>Title</Label>
                                    <Input
                                        value={addForm.data.title}
                                        onChange={(e) => addForm.setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={addForm.errors.title} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Company</Label>
                                    <Input
                                        value={addForm.data.company}
                                        onChange={(e) => addForm.setData('company', e.target.value)}
                                    />
                                    <InputError message={addForm.errors.company} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Period</Label>
                                    <Input
                                        value={addForm.data.period}
                                        onChange={(e) => addForm.setData('period', e.target.value)}
                                        placeholder="e.g. 2024 - Present"
                                    />
                                    <InputError message={addForm.errors.period} />
                                </div>
                                <Button type="submit" disabled={addForm.processing}>
                                    Add
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-3">
                    {experiences.map((e) => (
                        <Card key={e.id}>
                            <CardContent className="pt-6">
                                {editingId === e.id ? (
                                    <form
                                        onSubmit={(ev) => {
                                            ev.preventDefault();
                                            editForm.put(`/dashboard/portfolio/experiences/${e.id}`, {
                                                onSuccess: () => setEditingId(null),
                                            });
                                        }}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-2">
                                            <Label>Title</Label>
                                            <Input
                                                value={editForm.data.title}
                                                onChange={(ev) =>
                                                    editForm.setData('title', ev.target.value)}
                                                required
                                            />
                                            <InputError message={editForm.errors.title} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Company</Label>
                                            <Input
                                                value={editForm.data.company}
                                                onChange={(ev) =>
                                                    editForm.setData('company', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.company} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Period</Label>
                                            <Input
                                                value={editForm.data.period}
                                                onChange={(ev) =>
                                                    editForm.setData('period', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.period} />
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
                                            <p className="font-medium">{e.title}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {e.company} — {e.period}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => startEdit(e)}
                                                aria-label="Edit"
                                            >
                                                <Pencil className="size-4" />
                                            </Button>
                                            <Link
                                                href={`/dashboard/portfolio/experiences/${e.id}`}
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
