/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { toast } from "@/hooks/use-toast"
import { useAddContact } from "@/hooks/contactClient.hooks"
import { AtSign, Send, User, FileText } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const ContactForm = () => {
  const { mutate: addContact, isPending, isSuccess } = useAddContact()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addContact(values)

    if (isSuccess) {
      form.reset()
      toast({
        title: "Message sent successfully",
        description: "Thank you for contacting me",
      })
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
        <p className="text-white/70">Fill out the form below and I'll get back to you as soon as possible.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <User className="h-4 w-4" />
                      </div>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-white/5 border-white/10 focus:border-primary/50 pl-10 text-white placeholder:text-white/40"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <AtSign className="h-4 w-4" />
                      </div>
                      <Input
                        placeholder="Your email"
                        {...field}
                        className="bg-white/5 border-white/10 focus:border-primary/50 pl-10 text-white placeholder:text-white/40"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Subject</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <FileText className="h-4 w-4" />
                    </div>
                    <Input
                      placeholder="Your subject"
                      {...field}
                      className="bg-white/5 border-white/10 focus:border-primary/50 pl-10 text-white placeholder:text-white/40"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[120px] text-white placeholder:text-white/40"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8 py-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm

