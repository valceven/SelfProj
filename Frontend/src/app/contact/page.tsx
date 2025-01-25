import React from 'react'
import ContactFormik from "../../components/forms/ContactForm"

const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center bg-accent2 min-h-screen px-4 lg:px-32 py-8 space-y-8 lg:space-y-0 lg:space-x-4">

        {/* Left Section */}
        <div className="flex flex-col items-start justify-start w-full lg:w-2/3 lg:h-3/4 space-y-8">
          <div>
            <h1 className="text-slate-800 font-bold text-3xl lg:text-5xl">
              Contact Us
            </h1>
          </div>

          <div className="space-y-1 text-sm lg:text-base">
            <p>Email, call, or complete the form to learn how</p>
            <p>Ribeval can assist you with your request.</p>
            <br />
            <p>ribevalceven@gmail.com</p>
            <br />
            <p>+639912935111 | +639976277284</p>
            <br />
            <p className="font-bold underline underline-offset-2">Customer Support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Support */}
            <div>
              <p className="font-bold">Customer Support</p>
              <br />
              <div className="text-sm">
                <p>Our support team is available</p>
                <p>around the clock to address any</p>
                <p>concerns or queries you may have.</p>
              </div>
            </div>

            {/* Feedback and Suggestions */}
            <div>
              <p className="font-bold">Feedback and Suggestions</p>
              <br />
              <div className="text-sm">
                <p>We value your feedback and are</p>
                <p>open to constructive criticism to</p>
                <p>improve our services.</p>
              </div>
            </div>

            {/* Media Inquiries */}
            <div>
              <p className="font-bold">Media Inquiries</p>
              <br />
              <div className="text-sm">
                <p>For media-related questions or</p>
                <p>press inquiries, please contact us</p>
                <p>at ribevalgoods@facebook.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 px-4 lg:px-5">
          <ContactFormik />
        </div>
      </div>
    </>
  )
}

export default Contact;
