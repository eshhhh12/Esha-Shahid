import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormData) => {
    // For now, we'll use mailto until user confirms preferred method
    const subject = encodeURIComponent("Portfolio Contact Form");
    const body = encodeURIComponent(`
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;

    toast({
      title: "Message Ready!",
      description: "Opening your email client to send the message.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-[#402014]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Get in Touch
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-200" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#0d0c00] hover:bg-[#440000] text-white"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}