'use client'

import * as React from 'react'
import Link from 'next/link'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Home, Library, Settings, ChevronDown } from 'lucide-react'
import logo from '../../../../public/images/cardimh.png'
import { MdOutlineHome } from 'react-icons/md'
import { Input } from '@/components/ui/input'
import { InputInline } from '@/components/core/InputInline/InputInline'
import { FaRegUser } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaNetworkWired } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'

export default function SideBarNavigation() {
    const [settingsOpen, setSettingsOpen] = React.useState(false)

    const menu = [
        { title: 'Home', url: '/', icon: <FaHome size={20} className="text-purple-600" /> },
        { title: 'Serviços', url: '/catalog', icon: <FaNetworkWired size={20} className="text-purple-600" /> },
        {
            title: 'Cadastro de Usuario',
            url: '/catalog',
            icon: <FaRegUser size={20} className="text-purple-600" />,
        },
    ]

    return (
        <div id="Sidebar">
            <Sidebar className="bg-color-wood p-4 shadow-2xl">
                <SidebarContent>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <img src={logo.src} width={18} />
                            <SidebarGroupLabel className="text-lg font-bold text-white">
                                Code Creative
                            </SidebarGroupLabel>
                        </div>
                        <div>
                            <InputInline />
                        </div>
                    </div>
                    <SidebarGroup>
                        <SidebarGroupContent className="py-4">
                            <SidebarMenu className="flex gap-3">
                                {menu.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <SidebarMenuItem key={item.title} className="flex items-center gap-2">
                                            {item.icon}
                                            <SidebarMenuButton className="py-7 hover:bg-color-purble">
                                                <Link href={item.url} className="flex items-center gap-2">
                                                    <span className="text-base font-normal text-white">
                                                        {item.title}
                                                    </span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}

                                {/* Menu com submenu */}
                                <SidebarMenuItem className="py-24">
                                    <SidebarMenuButton
                                        onClick={() => setSettingsOpen(!settingsOpen)}
                                        className="flex items-center justify-between hover:bg-color-purble">
                                        <div className="flex items-center gap-2">
                                            <CiSettings size={30} color="#7039b7" />

                                            <span className="font-bold text-white">Configuraçao</span>
                                        </div>
                                        <ChevronDown
                                            className={`ml-auto transition-transform ${
                                                settingsOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </SidebarMenuButton>

                                    {settingsOpen && (
                                        <SidebarMenu className="ml-4">
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Link
                                                        href="/settings/profile"
                                                        className="text-md flex items-center gap-2 font-bold text-white">
                                                        Perfil
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton>
                                                    <Link
                                                        href="/settings/account"
                                                        className="text-md flex items-center gap-2 font-bold text-white">
                                                        Conta
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenu>
                                    )}
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </div>
    )
}
