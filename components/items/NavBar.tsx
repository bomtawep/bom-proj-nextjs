import React from "react";
import navbar from '@/components/styles/navbar.module.css'
import { MenuItems } from '@/types/menuItems'
import Link from "next/link";
import { Search } from "./Search";
import { HeartIcon } from "@/components/icons/HeardIcon";
import {Button} from "@nextui-org/react";

export const NavigationBar = (
    { menuItems }: { menuItems: MenuItems[] }
) => {
    return (
        <nav className={"sticky top-0 z-50 flex justify-between bg-gradient-to-b from-[#2CC2E4] to-[#4ADAF0] p-4 rounded-b-xl"}>
            <Button isIconOnly className={"bg-white"} aria-label="Like">
                <HeartIcon />
            </Button>
            <ul className={"flex gap-2"}>
                {menuItems.map((item: MenuItems, index: number) => (
                    <li key={index} className={"bg-white rounded-full px-5 py-2 hover:scale-110 m-1 font-family: ui-sans-serif"}>
                        <Link href={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Search />
        </nav>
    );
}