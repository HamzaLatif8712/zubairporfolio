"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, MenuItem } from '@mui/material';

const DashboardNav = () => {
    const [activeSection, setActiveSection] = useState('personal-info');

    const links = [
        { id: 1, name: "Personal Info", sectionId: "personal-info" },
        { id: 2, name: "My Skills & Tools", sectionId: "skills-tools" },
        // { id: 3, name: "My Projects", sectionId: "projects" },
        // { id: 4, name: "Certifications & Courses", sectionId: "certifications" },
        { id: 5, name: "Client Reviews", sectionId: "reviews" },
        { id: 6, name: "Contact Info", sectionId: "contact-info" }
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            links.forEach(link => {
                const section = document.getElementById(link.sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(link.sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //code for menu item
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className='flex flex-row items-center gap-4 ms-2'>
                <Image
                    alt='profile'
                    className='rounded-full'
                    style={{ objectFit: "cover", height: "60px", width: "60px" }}
                    height={40}
                    width={80}
                    src={"/assets/profile1.jpg"}
                />
                <div style={{ fontSize: 22, fontWeight: "700" }}>
                    <div className='md:flex hidden'>
                        WordPress & Server Solutions Expert
                    </div>
                    <div className='md:hidden'>
                        WordPress & Server Expert
                    </div>
                    <div>
                        Zubair
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <button
                    className='cursor-pointer'
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Image alt='menu' height={40} width={40} src={"/assets/list.png"} />
                </button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >

                    {
                        links.map((item) => (
                            <MenuItem
                                key={item.id}
                                onClick={() => {
                                    scrollToSection(item.sectionId);
                                    handleClose()
                                }}
                                className={`cursor-pointer py-1 rounded-full `}
                                //${activeSection === item.sectionId ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}
                                style={{
                                    backgroundColor: activeSection === item.sectionId ? "#3B82F6" : "",
                                    color: activeSection === item.sectionId ? "#ffffff" : "",
                                    borderRadius: 20,
                                    marginBottom: 5,
                                    fontWeight: "500"
                                }}
                            >
                                {item.name}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </div>

            {/* Code for nav for large screen */}
            <div className="flex flex-row items-center gap-4 md:flex hidden">
                {links.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => scrollToSection(item.sectionId)}
                        className={`cursor-pointer px-2 py-1 rounded-full ${activeSection === item.sectionId ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardNav;
