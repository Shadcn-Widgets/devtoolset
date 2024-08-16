import React from 'react'; // 确保导入 React
import { ChangelogSection } from '@/components/ChangelogSection';
import { getUpdateLogs } from "@/lib/data";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export async function generateMetadata() {
    return {
        title: 'Updatelog',
        description: 'Stay up to date with the latest updates in DevToolset.net',
    }
}

export default async function UpdatelogPage() {
    const updateLogs = getUpdateLogs();
    const currentLocale = 'en';
    console.log(updateLogs[currentLocale])
    return (
        <div className="container mx-auto py-12 space-y-16 min-h-screen">
            <section className="text-center space-y-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Updatelog</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
                    <span className="text-primary">Updatelog</span>
                </h1>
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Stay up to date with the latest updates in DevToolset.net</h2>
            </section>
            <div className="flex flex-col items-center justify-center w-full">
            <ChangelogSection
                items={updateLogs[currentLocale]}
                className="w-full lg:w-1/2 px-6"
            />
            </div>

        </div>
    );
}
