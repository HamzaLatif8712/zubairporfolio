"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DashboardNav = () => {
    const [activeSection, setActiveSection] = useState('personal-info');

    const links = [
        { id: 1, name: "Personal Info", sectionId: "personal-info" },
        { id: 2, name: "My Skills & Tools", sectionId: "skills-tools" },
        { id: 3, name: "My Projects", sectionId: "projects" },
        { id: 4, name: "Certifications & Courses", sectionId: "certifications" },
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
                    <div>
                        Fontend Developer
                    </div>
                    <div>
                        Zubair
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-4">
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
