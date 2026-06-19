
import {
 
  FiSearch,
  FiBookmark,
  FiFileText,
  FiCreditCard,
  FiSettings,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";
import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft, Bell,Briefcase, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export async function DashboardDrawer() {

    const user = await getUserSession()

    const recruiterNavLinks = [
        { icon: House, href: "/dashboard/recruter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruter/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/recruter/jobs/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/recruter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];
     
     const seekerNavLinks = [
  { icon:FiSearch,  href: "/dashboard/seeker", label: "Dashboard" },
  { icon: FiSearch, href: "/dashboard/seeker/jobs", label: "Jobs" },
  { icon: FiBookmark, href: "/dashboard/seeker/saved-jobs", label: "Saved Jobs" },
  { icon: FiFileText, href: "/dashboard/seeker/applications", label: "Applications" },
  { icon: FiCreditCard, href: "/dashboard/seeker/billing", label: "Billing" },
  { icon: FiSettings, href: "/settings", label: "Settings" },
];

const adminNavLinks = [
  { icon: FiSearch, href: "/dashboard/admin", label: "Dashboard" },
  { icon: FiUsers, href: "/dashboard/admin/users", label: "Users" },
  { icon: FiBriefcase, href: "/dashboard/admin/companies", label: "Companies" },
  { icon: FiBriefcase, href: "/dashboard/admin/jobs", label: "Jobs" },
  { icon: FiCreditCard, href: "/dashboard/admin/payments", label: "Payments" },
  { icon: FiSettings, href: "/dashboard/admin/settings", label: "Settings" },
];

    const  navLinksMap = {
        seeker: seekerNavLinks,
        recruter: recruiterNavLinks,
        admin : adminNavLinks
    }

    const navItems = navLinksMap[user?.role || 'seeker']
    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item,index) => (
            <Link
                key={index}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}