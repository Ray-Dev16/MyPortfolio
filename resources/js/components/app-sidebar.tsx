import { Link } from '@inertiajs/react';
import {
    BookOpen,
    Briefcase,
    CheckCircle,
    Folder,
    GraduationCap,
    Info,
    LayoutGrid,
    LayoutGridIcon,
    Mail,
    MessageCircle,
    Settings,
    User,
} from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import { dashboard } from '@/routes';

const overviewNavItems: NavItem[] = [
    { title: 'Overview', href: dashboard(), icon: LayoutGrid },
];

const portfolioNavItems: NavItem[] = [
    { title: 'Profile', href: '/dashboard/portfolio/profile', icon: User },
    { title: 'About Me', href: '/dashboard/portfolio/sections/about', icon: Info },
    { title: 'Education', href: '/dashboard/portfolio/education', icon: GraduationCap },
    { title: 'Experience', href: '/dashboard/portfolio/experiences', icon: Briefcase },
    { title: 'Projects', href: '/dashboard/portfolio/projects', icon: LayoutGridIcon },
    { title: 'Tech Stack', href: '/dashboard/portfolio/skills', icon: Settings },
    { title: 'Certifications', href: '/dashboard/portfolio/certifications', icon: CheckCircle },
    { title: 'Recommendations', href: '/dashboard/portfolio/recommendations', icon: MessageCircle },
    { title: 'Beyond the Screen', href: '/dashboard/portfolio/sections/beyond_screen', icon: BookOpen },
    { title: 'Contact / CTA', href: '/dashboard/portfolio/sections/contact_intro', icon: Mail },
];

function NavGroup({ label, items }: { label: string; items: NavItem[] }) {
    const { isCurrentUrl } = useCurrentUrl();
    return (
        <SidebarGroup>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={isCurrentUrl(item.href)}
                                tooltip={{ children: item.title }}
                            >
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon className="size-4 shrink-0" />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavGroup label="Overview" items={overviewNavItems} />
                <NavGroup label="Portfolio" items={portfolioNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
