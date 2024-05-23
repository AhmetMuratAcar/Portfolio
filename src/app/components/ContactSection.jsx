"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

    return (
        <section
            id="Contact"
            className="bg-[#EFF8FF]"
            style={{
                width: '100vw'
            }}
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-24 pb-12">
                <h2 className="text-5xl font-bold text-center">Let's Connect</h2>
                <div className="flex flex-col md:flex-row md:items-stretch justify-between items-start gap-12">
                    <div className="flex-1 px-4 md:px-0">
                        <p className="text-lg lg:text-xl text-gray-600 mt-12 max-w-md mb-5">
                            I am always open to new opportunities and connections. Whether you want to talk shop or just
                            want to say hi, my inbox is always open! <br /> <br />
                            Email: <a href="mailto:muratacar.dev@gmail.com" className="text-blue-500 hover:text-blue-700">muratacar.dev@gmail.com</a> <br />
                            Timezone: PST
                        </p>

                        {/* Social links */}
                        <div className="socials flex flex-row gap-6">
                            <Link href="https://github.com/AhmetMuratAcar" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/github-mark.png"
                                    alt="Github Icon"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/ahmetmuratacar/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/linkedin-logo.png"
                                    alt="Linkedin Icon"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 px-4 md:px-0 mt-10 w-full">
                        {emailSubmitted ? (
                            <p className="text-green-500 text-sm">
                                Email sent successfully!
                            </p>
                        ) : (
                            <form className="flex flex-col" onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 font-medium text-black"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        id="email"
                                        required
                                        className="bg-[#3A4150] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="yourEmail@domain.com"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block mb-2 font-medium text-black"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="text"
                                        id="subject"
                                        required
                                        className="bg-[#3A4150] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Urgent Question"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 font-medium text-black"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="6"
                                        className="bg-[#3A4150] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Do they go number 2 in the stillsuits on Arrakis?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-3 rounded-lg self-end"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
