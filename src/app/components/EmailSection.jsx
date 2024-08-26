"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
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
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link className="bg-[#B3B3B3] w-fit h-fit rounded-md border-4 border-[#B3B3B3] hover:border-[#333] hover:bg-[#333] mr-2" href="https://github.com/alim-99">
            <Image src="/images/github.svg" width={30} height={30} alt="Github Icon" />
          </Link>
          <Link className="bg-[#B3B3B3] w-fit h-fit rounded-md border-4 border-[#B3B3B3] hover:border-[#0a66c2] hover:bg-[#0a66c2] mr-2" href="https://www.linkedin.com/in/ali-mohamed-96a768252/">
            <Image src="/images/linkedin.svg" width={30} height={30} alt="Linkedin Icon" />
          </Link>
          <Link className="bg-[#B3B3B3] w-fit h-fit rounded-md border-4 border-[#B3B3B3] hover:border-[#c13584] hover:bg-[#c13584] mr-2" href="https://www.instagram.com/a.l.i__66/">
            <Image src="/images/instagram.svg" width={30} height={30} alt="Instagram Icon" />
          </Link>
          <Link className="bg-[#B3B3B3] w-fit h-fit rounded-md border-4 border-[#B3B3B3] hover:border-[#657786] hover:bg-[#657786] mr-2" href="https://x.com/alim16097side">
            <Image src="/images/twitter-alt.svg" width={30} height={30} alt="Twitter Icon" />
          </Link>
          <Link className="bg-[#B3B3B3] w-fit h-fit rounded-md border-4 border-[#B3B3B3] hover:border-[#1877f2] hover:bg-[#1877f2]" href="lhttps://www.facebook.com/profile.php?id=100062057802054">
            <Image src="/images/facebook.svg" width={30} height={30} alt="Twitter Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="ali@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] resize-none placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;