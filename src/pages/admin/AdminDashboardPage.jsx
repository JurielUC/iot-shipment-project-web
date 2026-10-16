import {
    BarChart3,
    BookOpen,
    CalendarDays,
    GraduationCap,
    UserRoundCog,
    Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import AdminLayout from "@/layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import adminService from "@/services/adminService";

import ToastAlert from "@/utils/toastAlert";
import NoRecordsFound from "@/components/common/NoRecordsFound";
import Loader from "@/components/common/Loader";
import appDetails from "@/utils/appDetails";
import QuickCard from "@/components/common/QuickCard";
import adminDashboardResponse from "@/data/mock/adminDashboardResponse";

const iconMap = {
    Users,
    UserRoundCog,
    GraduationCap,
    BookOpen,
};

function AdminDashboardPage() {
    let navigate = useNavigate();

    const [stats, setStats] = useState(adminDashboardResponse.data.stats);
    const [recentActivities, setRecentActivies] = useState(adminDashboardResponse.data.recent_activities);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // adminService.getAdminDashboard().then((res) => {
        //     const status = res.data.status;

        //     if (status === 'Success') {
        //         const data = res.data.data;

        //         setLoading(false);

        //         if (data) {
        //             setStats(data.stats);
        //             setRecentActivies(data.recent_activities);
        //         }
        //     } else {
        //         ToastAlert({ type: "defaultError" });
        //     }
        // }).catch(() => {
        //     ToastAlert({ type: "defaultError" });
        // });

        setLoading(false);
    }, [])

    return (
        <>
            <Helmet>
                <title>Dashboard | {appDetails().admin_metatitle}</title>
            </Helmet>
            <AdminLayout>
                <div className="space-y-6">
                    <section className="rounded-3xl bg-gradient-to-br from-primary via-green-700 to-green-600 p-6 text-primary-foreground shadow-sm sm:p-8">
                        <p className="text-sm font-medium text-white/80">Admin Overview</p>

                        <h1 className="mt-2 text-2xl text-white font-bold sm:text-3xl">
                            Welcome back, Administrator
                        </h1>

                        <p className="mt-2 text-sm text-white/80 sm:text-base">
                            {appDetails().description}
                        </p>
                    </section>

                    {loading ?
                        <>
                            <Loader variant="section" title="Loading dashboard..." />
                        </>
                        :
                        <>
                            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {stats.map((item) => {
                                    const Icon = iconMap[item.icon];

                                    return (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-sm text-muted-foreground">
                                                        {item.title}
                                                    </p>

                                                    <h3 className="mt-3 text-4xl font-bold text-primary">
                                                        {item.value}
                                                    </h3>
                                                </div>

                                                <div className="rounded-xl bg-accent p-3 text-primary">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>

                            <section className="grid gap-6 xl:grid-cols-2">
                                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-card-foreground">
                                                Quick Management
                                            </h2>

                                            <p className="text-sm text-muted-foreground">
                                                Common administrative modules
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-accent p-3 text-primary">
                                            <BarChart3 className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <QuickCard
                                            icon={Users}
                                            title="Users"
                                            text="Manage accounts"
                                            onClick={() => navigate(`/admin/users`)}
                                        />
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold text-card-foreground">
                                                Recent Activities
                                            </h2>

                                            <p className="text-sm text-muted-foreground">
                                                Latest system updates
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-accent p-3 text-primary">
                                            <CalendarDays className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {recentActivities.length > 0 ?
                                            <>
                                                {recentActivities.map((activity, index) => (
                                                    <div key={index} className="rounded-xl bg-muted p-4">
                                                        <p className="text-sm font-medium text-foreground">
                                                            {activity.description}
                                                        </p>

                                                        <p className="mt-1 text-xs text-muted-foreground">
                                                            {activity.time}
                                                        </p>
                                                    </div>
                                                ))}
                                            </>
                                            :
                                            <>
                                                <NoRecordsFound title="No Activities Found" />
                                            </>
                                        }
                                    </div>
                                </div>
                            </section>
                        </>
                    }
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminDashboardPage;