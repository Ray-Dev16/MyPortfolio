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
    { title: 'Recommendations', href: '/dashboard/portfolio/recommendations' },
];

type Recommendation = {
    id: number;
    quote: string;
    author: string;
    sort_order: number;
};

export default function PortfolioRecommendations({
    recommendations,
}: {
    recommendations: Recommendation[];
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newOpen, setNewOpen] = useState(false);

    const addForm = useForm({ quote: '', author: '' });
    const editForm = useForm({ quote: '', author: '' });

    const startEdit = (r: Recommendation) => {
        setEditingId(r.id);
        editForm.setData({ quote: r.quote, author: r.author });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Recommendations – Portfolio" />
            <div className="space-y-6 p-4">
                {status && (
                    <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Recommendations</h1>
                    <Button onClick={() => setNewOpen(!newOpen)} variant="outline">
                        {newOpen ? 'Cancel' : 'Add recommendation'}
                    </Button>
                </div>

                {newOpen && (
                    <Card>
                        <CardHeader>
                            <CardTitle>New recommendation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addForm.post('/dashboard/portfolio/recommendations', {
                                        onSuccess: () => {
                                            addForm.reset();
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="space-y-4"
                            >
                                <div className="grid gap-2">
                                    <Label>Quote</Label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        value={addForm.data.quote}
                                        onChange={(e) =>
                                            addForm.setData('quote', e.target.value)}
                                        required
                                    />
                                    <InputError message={addForm.errors.quote} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Author</Label>
                                    <Input
                                        value={addForm.data.author}
                                        onChange={(e) =>
                                            addForm.setData('author', e.target.value)}
                                    />
                                    <InputError message={addForm.errors.author} />
                                </div>
                                <Button type="submit" disabled={addForm.processing}>
                                    Add
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-3">
                    {recommendations.map((r) => (
                        <Card key={r.id}>
                            <CardContent className="pt-6">
                                {editingId === r.id ? (
                                    <form
                                        onSubmit={(ev) => {
                                            ev.preventDefault();
                                            editForm.put(
                                                `/dashboard/portfolio/recommendations/${r.id}`,
                                                { onSuccess: () => setEditingId(null) },
                                            );
                                        }}
                                        className="space-y-4"
                                    >
                                        <div className="grid gap-2">
                                            <Label>Quote</Label>
                                            <textarea
                                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                value={editForm.data.quote}
                                                onChange={(ev) =>
                                                    editForm.setData('quote', ev.target.value)}
                                                required
                                            />
                                            <InputError message={editForm.errors.quote} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Author</Label>
                                            <Input
                                                value={editForm.data.author}
                                                onChange={(ev) =>
                                                    editForm.setData('author', ev.target.value)}
                                            />
                                            <InputError message={editForm.errors.author} />
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
                                            <p className="italic">&ldquo;{r.quote}&rdquo;</p>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                — {r.author || 'Anonymous'}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                onClick={() => startEdit(r)}
                                                aria-label="Edit"
                                            >
                                                <Pencil className="size-4" />
                                            </Button>
                                            <Link
                                                href={`/dashboard/portfolio/recommendations/${r.id}`}
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
