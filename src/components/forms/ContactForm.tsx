"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  message: z.string().min(10),
})

type ContactFormValues = z.infer<typeof contactSchema>

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  })

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur"
    >
      <input
        {...register("name")}
        placeholder="Full name"
        className="w-full rounded-[18px] border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
      {errors.name && <p className="text-xs text-primary">{errors.name.message}</p>}
      <input
        {...register("phone")}
        placeholder="Phone"
        className="w-full rounded-[18px] border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
      {errors.phone && <p className="text-xs text-primary">{errors.phone.message}</p>}
      <textarea
        {...register("message")}
        rows={4}
        placeholder="How can we help you?"
        className="w-full rounded-[18px] border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
      {errors.message && <p className="text-xs text-primary">{errors.message.message}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[24px] bg-gradient-to-r from-primary to-[#1ec06a] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : isSubmitSuccessful ? "Message sent" : "Send message"}
      </button>
    </form>
  )
}
