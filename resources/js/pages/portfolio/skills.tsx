import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
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
    { title: 'Tech Stack', href: '/dashboard/portfolio/skills' },
];

type Skill = { id: number; category: string; name: string; sort_order: number };

const CATEGORIES = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend & Database' },
    { key: 'tools', label: 'Tools & Specialized' },
] as const;

export default function PortfolioSkills({
    skills,
}: {
    skills: { frontend: Skill[]; backend: Skill[]; tools: Skill[] };
}) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const [newOpen, setNewOpen] = useState(false);
    const addForm = useForm({ category: 'frontend' as const, name: '' });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Tech Stack – Portfolio" />
            <div className="space-y-6 p-4">
                {status && (
                    <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        {status}
                    </p>
                )}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Tech Stack</h1>
                    <Button onClick={() => setNewOpen(!newOpen)} variant="outline">
                        {newOpen ? 'Cancel' : 'Add skill'}
                    </Button>
                </div>

                {newOpen && (
                    <Card>
                        <CardHeader>
                            <CardTitle>New skill</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addForm.post('/dashboard/portfolio/skills', {
                                        onSuccess: () => {
                                            addForm.setData('name', '');
                                            setNewOpen(false);
                                        },
                                    });
                                }}
                                className="flex flex-wrap items-end gap-4"
                            >
                                <div className="grid gap-2">
                                    <Label>Category</Label>
                                    <select
                                        className="flex h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm"
                                        value={addForm.data.category}
                                        onChange={(e) =>
                                            addForm.setData(
                                                'category',
                                                e.target.value as 'frontend' | 'backend' | 'tools',
                                            )}
                                    >
                                        {CATEGORIES.map((c) => (
                                            <option key={c.key} value={c.key}>
                                                {c.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid gap-2">
                                    <Label>Name</Label>
                                    <Input
                                        value={addForm.data.name}
                                        onChange={(e) => addForm.setData('name', e.target.value)}
                                        placeholder="e.g. React"
                                        required
                                    />
                                    <InputError message={addForm.errors.name} />
                                </div>
                                <Button type="submit" disabled={addForm.processing}>
                                    Add
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CATEGORIES.map(({ key, label }) => (
                        <Card key={key}>
                            <CardHeader>
                                <CardTitle className="text-base">{label}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <ul className="space-y-2">
                                    {(skills[key] ?? []).map((s) => (
                                        <li
                                            key={s.id}
                                            className="flex items-center justify-between gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm"
                                        >
                                            <span>{s.name}</span>
                                            <Link
                                                href={`/dashboard/portfolio/skills/${s.id}`}
                                                method="delete"
                                                as="button"
                                                className="text-destructive hover:underline"
                                                preserveScroll
                                            >
                                                <Trash2 className="size-4" />
                                            </Link>
                                        </li>
                                    ))}
                                    {(skills[key] ?? []).length === 0 && (
                                        <li className="text-sm text-muted-foreground">
                                            No skills yet.
                                        </li>
                                    )}
                                </ul>
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
