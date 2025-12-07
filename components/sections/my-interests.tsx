"use client"

import { Card } from '@/components/ui/card'
import * as React from 'react'
import {
    GithubLogoIcon,
    BrainIcon,
    CpuIcon,
    GlobeIcon,
    ShieldCheckIcon,
    LinkSimpleIcon
} from "@phosphor-icons/react"

import { DotIcon } from 'lucide-react'

export default function MyInterests() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex mt-0 items-center text-sm text-neutral-700 dark:text-neutral-400">
                        <DotIcon className="h-10 w-10 -ml-3" /> Where you will find me
                    </div>
                    <div>
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">I love user problems and technical challenges</h2>
                        <p className="text-muted-foreground mt-3 text-lg">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <IntegrationCard
                            title="Open Source Softwares"
                            description="I believe in the power of shared knowledge. I'm passionate about contributing to OSS products.">
                            <GithubLogoIcon size={40} color="#a3f443" />

                        </IntegrationCard>

                        <IntegrationCard
                            title="AI-Assisted Learning"
                            description="I love exploring how AI/ML can be used to create personalized and engaging educational tools.">
                            <BrainIcon size={40} color="#a3f443" />

                        </IntegrationCard>

                        <IntegrationCard
                            title="Machine Learning"
                            description="Products that use natural language generation and understanding to sovle customer problems.">
                            <CpuIcon size={40} color="#a3f443" />

                        </IntegrationCard>

                        <IntegrationCard
                            title="Media and Internet Literacy"
                            description="Contribute to tools that help people navigate the digital space critically and safely.">
                            <GlobeIcon size={40} color="#a3f443"/>

                        </IntegrationCard>

                        <IntegrationCard
                            title="Redemptive Technologies"
                            description="ABuild systems that are beyound-ethical, and designed to improve rather than exploit.">
                            <ShieldCheckIcon size={40} color="#a3f443"/>

                        </IntegrationCard>

                        <IntegrationCard
                            title="Blockchaain Technologies"
                            description="Build products that leverages decentralized systems for a more transparent abd secure planet.">
                            <LinkSimpleIcon size={40} color="#a3f443"/>

                        </IntegrationCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card
            // variant="default"
            className="p-6">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="mt-6 space-y-1.5">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                </div>
            </div>
        </Card>
    )
}
