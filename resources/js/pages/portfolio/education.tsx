import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Overview', href: '/dashboard' },
    { title: 'Education', href: '/dashboard/portfolio/education' },
];

type LevelBase = { school: string; period: string };
type LevelWithStrand = LevelBase & { strand: string };
type CollegeLevel = { degree: string; institution: string; period: string; strand: string };

type EducationPayload = {
    elementary: LevelBase;
    high_school: LevelBase;
    senior_high: LevelWithStrand;
    college: CollegeLevel;
};

export default function PortfolioEducationEdit({
    elementary,
    high_school,
    senior_high,
    college,
}: EducationPayload) {
    const status = (usePage().props.flash as { status?: string } | undefined)?.status;
    const { data, setData, put, processing, errors } = useForm<EducationPayload>({
        elementary: {
            school: elementary?.school ?? '',
            period: elementary?.period ?? '',
        },
        high_school: {
            school: high_school?.school ?? '',
            period: high_school?.period ?? '',
        },
        senior_high: {
            school: senior_high?.school ?? '',
            period: senior_high?.period ?? '',
            strand: senior_high?.strand ?? '',
        },
        college: {
            degree: college?.degree ?? '',
            institution: college?.institution ?? '',
            period: college?.period ?? '',
            strand: college?.strand ?? '',
        },
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Education – Portfolio" />
            <div className="flex min-h-0 flex-1 flex-col p-4 md:p-6">
                <div className="flex shrink-0 items-center justify-between gap-4 pb-3">
                    {status ? (
                        <p className="min-w-0 flex-1 rounded-lg bg-green-50 p-2 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
                            {status}
                        </p>
                    ) : (
                        <div />
                    )}
                    <div className="flex shrink-0 gap-2">
                        <Button type="submit" form="education-form" disabled={processing}>
                            {processing ? 'Saving…' : 'Save'}
                        </Button>
                        <Button type="button" variant="outline" asChild>
                            <Link href="/dashboard">Back to Overview</Link>
                        </Button>
                    </div>
                </div>

                <form
                    id="education-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        put('/dashboard/portfolio/education');
                    }}
                    className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-auto lg:grid-cols-2 lg:grid-rows-[1fr_1fr]"
                >
                    <Card className="flex min-h-0 flex-col overflow-hidden lg:overflow-auto">
                        <CardHeader className="shrink-0 py-2">
                            <CardTitle className="text-sm">Elementary</CardTitle>
                            <CardDescription className="text-xs">School & period</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                            <div className="space-y-1">
                                <Label htmlFor="elementary.school" className="text-xs">School</Label>
                                <Input
                                    id="elementary.school"
                                    value={data.elementary.school}
                                    onChange={(e) => setData('elementary', { ...data.elementary, school: e.target.value })}
                                    placeholder="e.g. Hinoba-an Central School"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['elementary.school']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="elementary.period" className="text-xs">Period</Label>
                                <Input
                                    id="elementary.period"
                                    value={data.elementary.period}
                                    onChange={(e) => setData('elementary', { ...data.elementary, period: e.target.value })}
                                    placeholder="e.g. 2008 - 2014"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['elementary.period']} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex min-h-0 flex-col overflow-hidden lg:overflow-auto">
                        <CardHeader className="shrink-0 py-2">
                            <CardTitle className="text-sm">High School</CardTitle>
                            <CardDescription className="text-xs">School & period</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                            <div className="space-y-1">
                                <Label htmlFor="high_school.school" className="text-xs">School</Label>
                                <Input
                                    id="high_school.school"
                                    value={data.high_school.school}
                                    onChange={(e) => setData('high_school', { ...data.high_school, school: e.target.value })}
                                    placeholder="e.g. Hinoba-an National High School"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['high_school.school']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="high_school.period" className="text-xs">Period</Label>
                                <Input
                                    id="high_school.period"
                                    value={data.high_school.period}
                                    onChange={(e) => setData('high_school', { ...data.high_school, period: e.target.value })}
                                    placeholder="e.g. 2014 - 2018"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['high_school.period']} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex min-h-0 flex-col overflow-hidden lg:overflow-auto">
                        <CardHeader className="shrink-0 py-2">
                            <CardTitle className="text-sm">Senior High School</CardTitle>
                            <CardDescription className="text-xs">School, period & strand</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                            <div className="space-y-1">
                                <Label htmlFor="senior_high.school" className="text-xs">School</Label>
                                <Input
                                    id="senior_high.school"
                                    value={data.senior_high.school}
                                    onChange={(e) => setData('senior_high', { ...data.senior_high, school: e.target.value })}
                                    placeholder="e.g. PUP"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['senior_high.school']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="senior_high.period" className="text-xs">Period</Label>
                                <Input
                                    id="senior_high.period"
                                    value={data.senior_high.period}
                                    onChange={(e) => setData('senior_high', { ...data.senior_high, period: e.target.value })}
                                    placeholder="e.g. 2020 - 2022"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['senior_high.period']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="senior_high.strand" className="text-xs">Strand / Description</Label>
                                <Input
                                    id="senior_high.strand"
                                    value={data.senior_high.strand}
                                    onChange={(e) => setData('senior_high', { ...data.senior_high, strand: e.target.value })}
                                    placeholder="e.g. STEM, HUMSS"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['senior_high.strand']} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex min-h-0 flex-col overflow-hidden lg:overflow-auto">
                        <CardHeader className="shrink-0 py-2">
                            <CardTitle className="text-sm">College</CardTitle>
                            <CardDescription className="text-xs">Degree, institution, period & strand</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                            <div className="space-y-1">
                                <Label htmlFor="college.degree" className="text-xs">Degree / Program</Label>
                                <Input
                                    id="college.degree"
                                    value={data.college.degree}
                                    onChange={(e) => setData('college', { ...data.college, degree: e.target.value })}
                                    placeholder="e.g. BS Information Technology"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['college.degree']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="college.institution" className="text-xs">Institution</Label>
                                <Input
                                    id="college.institution"
                                    value={data.college.institution}
                                    onChange={(e) => setData('college', { ...data.college, institution: e.target.value })}
                                    placeholder="e.g. PUP"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['college.institution']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="college.period" className="text-xs">Period</Label>
                                <Input
                                    id="college.period"
                                    value={data.college.period}
                                    onChange={(e) => setData('college', { ...data.college, period: e.target.value })}
                                    placeholder="e.g. 2022 - 2027"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['college.period']} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="college.strand" className="text-xs">Strand / Description</Label>
                                <Input
                                    id="college.strand"
                                    value={data.college.strand}
                                    onChange={(e) => setData('college', { ...data.college, strand: e.target.value })}
                                    placeholder="e.g. Web Dev & UI/UX"
                                    className="h-8 text-sm"
                                />
                                <InputError message={errors['college.strand']} />
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
