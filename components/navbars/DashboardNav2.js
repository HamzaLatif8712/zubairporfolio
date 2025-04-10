"use client"
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Link } from '@mui/material';
import Image from 'next/image';

const DashboardNav2 = () => {

    const pathName = usePathname();

    const [hoverColor, setHoverColor] = useState("");

    const links = [
        {
            id: 1,
            name: "Personal Info",
            href: "/",
            // selected: "/svgIcons/selectdDashboardIcon.svg",
            // uneselected: "/svgIcons/unSelectedDashboardIcon.svg",
        },
        {
            id: 2,
            name: "My Skills & Tools",
            href: "/Skills&Tools",
            // selected: "/svgIcons/selectedAgentXIcon.svg",
            // uneselected: "/svgIcons/agentXIcon.svg",
        },
        {
            id: 3,
            name: "My Projects",
            href: "/MyProjects",
            // selected: "/svgIcons/selectedLeadsIcon.svg",
            // uneselected: "/svgIcons/unSelectedLeadsIcon.svg",
        },
        {
            id: 4,
            name: "Certifications & Courses",
            href: "/Certifications&Courses",
            // selected: "/svgIcons/selectedPiplineIcon.svg",
            // uneselected: "/svgIcons/unSelectedPipelineIcon.svg",
        },
        {
            id: 5,
            name: "Client Reviews",
            href: "/ClientReviews",
            // selected: "/svgIcons/selectedCallIcon.svg",
            // uneselected: "/svgIcons/unSelectedCallIcon.svg",
        },
    ];

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className='flex flex-row items-center gap-4'>
                <Image
                    alt='profile'
                    className='rounded-full'
                    style={{
                        // borderRadius: "50%",
                        objectFit: "cover",
                        height: "60px",
                        width: "60px",
                    }}
                    height={40}
                    width={80}
                    src={"/assets/profile1.jpg"}
                />
                <div style={{ fontSize: 22, fontWeight: "700" }}>
                    Zubair
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                {links.map((item) => (
                    <div key={item.id}>
                        <Link
                            onMouseEnter={() => setHoverColor(item.id)}
                            onMouseLeave={() => setHoverColor("")}
                            className='hover:bg-blue-500 px-2 py-1 rounded-full'
                            sx={{
                                cursor: "pointer", textDecoration: "none",
                                color: pathName === item.href ? "white" : hoverColor === item.id ? "white" : "black",
                                backgroundColor: pathName === item.href ? "#3B82F6" : "",
                                fontSize: 16, fontWeight: "500"
                            }}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default DashboardNav2
