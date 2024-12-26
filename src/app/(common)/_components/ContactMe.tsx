/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/form/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary "
    >
      <div className="container mx-auto md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Get in Touch
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              I'd love to hear from you. Please fill out the form below or use
              the contact information provided.
            </p>
            <Card className=" bg-[#745FC9] border-none text-white">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-gray-200">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>souravehalder925@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+88 (013) 076-28955</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Barishal, Bangladesh</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
