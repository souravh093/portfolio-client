/* eslint-disable react/no-unescaped-entities */

import ContactForm from "@/components/form/ContactForm";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary via-secondary to-secondary/90 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/80 mb-4">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Let's Talk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Feel free to reach out through the form or contact
            information below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-3 rounded-xl transition-colors hover:bg-white/5">
                  <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email Address</p>
                    <a
                      href="mailto:souravehalder925@gmail.com"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      souravehalder925@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-3 rounded-xl transition-colors hover:bg-white/5">
                  <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone Number</p>
                    <a
                      href="tel:+8801307628955"
                      className="text-white font-medium hover:text-primary transition-colors"
                    >
                      +88 (013) 076-28955
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-3 rounded-xl transition-colors hover:bg-white/5">
                  <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white font-medium">
                      Barishal, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/70 mb-4">
                  Connect with me on social media
                </p>
                <div className="flex gap-3">
                  {/* Social media icons - you can replace these with your actual social links */}
                  <a
                    href="#"
                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
