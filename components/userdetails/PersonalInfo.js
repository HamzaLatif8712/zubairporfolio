import React from 'react'

const PersonalInfo = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    🚀 WordPress & Server Solutions Expert
                </h1>

                <p className="text-center text-lg mb-8">
                    Fast Migrations, Server Setup & Troubleshooting
                </p>

                <p className="mb-10 text-gray-600 text-center">
                    Need quick and reliable technical solutions for your website, hosting, or e-mail systems? I specialize in:
                </p>

                <div className="space-y-8">

                    {/* Service Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 WordPress Migration & Troubleshooting</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Secure, zero-downtime migrations between hosts</li>
                            <li>WordPress cloning, staging & backups</li>
                            <li>Fixing errors, broken themes, and plugin conflicts</li>
                            <li>Optimizing site speed & performance</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 E-Mail Setup & Google Workspace Migration</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Google Workspace (Gmail for Business) setup & migration</li>
                            <li>Transferring e-mails between hosts without losing data</li>
                            <li>SMTP, IMAP, MX records & SPF/DKIM authentication</li>
                            <li>Outlook, Zoho Mail, cPanel & business e-mail configurations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 Server Setup & Optimization</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Setting up VPS, Dedicated & Cloud Servers (AWS, DigitalOcean, Linode, etc.)</li>
                            <li>Apache, Nginx, LiteSpeed, PHP & MySQL configurations</li>
                            <li>Fixing slow servers, high CPU usage & security issues</li>
                            <li>cPanel, Plesk, CyberPanel & DirectAdmin management</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 Domain & DNS Management</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Domain transfers, DNS setup & troubleshooting</li>
                            <li>Configuring SSL, CDN, custom name servers & redirections</li>
                            <li>Website & e-mail domain authentication (SPF, DKIM, DMARC)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 Platform Integrations & Website Solutions</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Connecting websites with Shopify, Wix, Squarespace, HubSpot</li>
                            <li>WordPress development & customization</li>
                            <li>Fixing website migration issues, database errors & site crashes</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-600">🔹 Experience</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>10+ Years of Experience | Quick Turnaround | Stress-Free Solutions</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
