"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Please share at least 10 characters.")
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      toast.success("Message sent. We’ll reply soon.");
      reset();
    }, 600);
  };

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-4xl font-semibold">Contact us</h1>
      <p className="text-muted-foreground mt-2">We usually respond within one business day.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
        <label className="text-sm font-medium">Name</label>
        <Input aria-label="Your name" placeholder="Your name" {...register("name")} />
        {formState.errors.name && <p className="text-sm text-red-500">{formState.errors.name.message}</p>}

        <label className="text-sm font-medium mt-2">Email</label>
        <Input aria-label="Your email" placeholder="you@example.com" type="email" {...register("email")} />
        {formState.errors.email && <p className="text-sm text-red-500">{formState.errors.email.message}</p>}

        <label className="text-sm font-medium mt-2">Message</label>
        <Textarea aria-label="Your message" placeholder="How can we help?" rows={6} {...register("message")} />
        {formState.errors.message && <p className="text-sm text-red-500">{formState.errors.message.message}</p>}

        <Button className="mt-4" disabled={formState.isSubmitting} type="submit">
          {formState.isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </form>
    </div>
  );
}
