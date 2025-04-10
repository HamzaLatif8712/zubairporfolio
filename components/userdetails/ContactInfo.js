import Image from 'next/image'
import React from 'react'

const ContactInfo = () => {

    const socialLinks = [
        { id: 1, linkName: "Fiver", href: "https://www.fiverr.com/zubairhn", socialLogo: "/assets/fiver.jpg" },
        { id: 2, linkName: "People Per Hour", href: "https://www.peopleperhour.com/freelancer/technology-programming/zubair-hussain-driving-business-growth-with-cost-ywwajan", socialLogo: "/assets/pph.jpg" },
        { id: 3, linkName: "UpWork", href: "https://www.upwork.com/freelancers/~0157b6c7b47ba90357", socialLogo: "/assets/upwork.jpg" },
        // { id: 4, linkName: "WhatsApp", href: "" },
    ]

    //code for social link connection
    const handleSocialConnection = (item) => {
        // console.log("Social link is", item);
        window.open(item.href, "_blank")
    }

    //global style
    const styles = {
        socialLinkName: {
            fontWeight: "500",
            fontSize: 16
        }
    }

    return (
        <div className='w-6/12'>
            <div style={{ fontWeight: "800", fontSize: 22 }}>
                Social Contacts
            </div>
            <div>
                {
                    socialLinks.map((item) => (
                        <div key={item.id} className='flex flex-row items-center justify-between pt-4'>
                            <div className='flex flex-row items-center gap-2'>
                                <Image alt='img' className='rounded-md' height={30} width={30} src={item.socialLogo} />
                                <div style={styles.socialLinkName}>
                                    {item.linkName}
                                </div>
                            </div>
                            <div>
                                <button
                                    className='px-2 py-1 rounded-4xl cursor-pointer'
                                    style={{ ...styles.socialLinkName, backgroundColor: "#2880FF", color: "white" }}
                                    onClick={() => { handleSocialConnection(item) }}
                                >
                                    Connect
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div
                    className='mt-8'
                    style={{ fontWeight: "800", fontSize: 22 }}>
                    For direct approach
                </div>
                <div className='flex flex-row items-center justify-between pt-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <Image alt='img' className='rounded-md' height={30} width={30} src={"/assets/call.jpg"} />
                        <div style={styles.socialLinkName}>
                            +971 52 641 8106
                        </div>
                    </div>
                    <div>
                        <a href="tel:+971526418106"
                            className='px-2 py-1 rounded-4xl cursor-pointer'
                            style={{ ...styles.socialLinkName, backgroundColor: "#2880FF", color: "white" }}>
                            Call Now
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between pt-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <Image alt='img' className='rounded-md' height={30} width={30} src={"/assets/gmail.png"} />
                        <div style={styles.socialLinkName}>
                            hamza1958712@gmail.com
                        </div>
                        {/*<a
                            className="text-blue-500 font-semibold hover:underline"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamza1958712@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            hamza1958712@gmail.com
            </a>*/}
                    </div>
                    <div>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hamza1958712@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-2 py-1 rounded-4xl cursor-pointer'
                            style={{ ...styles.socialLinkName, backgroundColor: "#2880FF", color: "white" }}>
                            Send Mail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
