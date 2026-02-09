"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const YEARS = Array.from({ length: 26 }, (_, index) => (2025 - index).toString())
const MAKES = ["Chevrolet", "Ford", "Toyota", "Honda", "Dodge", "Nissan", "Jeep", "BMW", "Mercedes", "Other"]
const MODELS = ["Silverado", "F-150", "Camry", "Accord", "Ram 1500", "Altima", "Wrangler", "X5", "C-Class", "Other"]

const quoteSchema = z.object({
  name: z.string().min(2, "Please share your name so we can confirm pickup."),
  phone: z.string().min(7, "We need a valid phone number to text your arrival window."),
  year: z.string().min(1, "Select the vehicle year to get a precise offer."),
  make: z.string().min(1, "Select the make of your vehicle."),
  model: z.string().min(1, "Select the model or choose Other and describe it."),
  condition: z.string().min(3, "Describe the condition of your vehicle."),
  location: z.string().min(3, "Where should we meet you in the Phoenix area?"),
  photo: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files) return true
        return files instanceof FileList ? files.length <= 2 : true
      },
      "Upload 0-2 photos (max) for faster appraisal."
    ),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

export const QuoteForm = () => {
  const [status, setStatus] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
  })

  const photoErrorMessage = errors.photo?.message as string | undefined

  const onSubmit = async (data: QuoteFormValues) => {
    setStatus("Sending your request…")
    await new Promise((resolve) => setTimeout(resolve, 800))
    setStatus("Quote request received. We will text you a pickup ETA shortly.")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-6">
      <p className="text-sm text-neutral-gray">
        Share your info and we’ll text/call back with the best offer. No pushy sales—just transparent cash in
        Phoenix.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white">
          Name
          <input
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Jordan"
            {...register("name")}
          />
          {errors.name && <span className="text-xs text-primary">{errors.name.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-white">
          Phone
          <input
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="602-555-1234"
            {...register("phone")}
          />
          {errors.phone && <span className="text-xs text-primary">{errors.phone.message}</span>}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm text-white">
          Year
          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue=""
            {...register("year")}
          >
            <option value="" disabled>
              Select year
            </option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.year && <span className="text-xs text-primary">{errors.year.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-white">
          Make
          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue=""
            {...register("make")}
          >
            <option value="" disabled>
              Select make
            </option>
            {MAKES.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          {errors.make && <span className="text-xs text-primary">{errors.make.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-white">
          Model
          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            defaultValue=""
            {...register("model")}
          >
            <option value="" disabled>
              Select model
            </option>
            {MODELS.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          {errors.model && <span className="text-xs text-primary">{errors.model.message}</span>}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-white">
        Condition notes
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Not running/is parked on my lot"
          {...register("condition")}
        />
        {errors.condition && <span className="text-xs text-primary">{errors.condition.message}</span>}
      </label>
      <label className="flex flex-col gap-2 text-sm text-white">
        Location
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tempe, AZ 85281"
          {...register("location")}
        />
        {errors.location && <span className="text-xs text-primary">{errors.location.message}</span>}
      </label>
      <label className="flex flex-col gap-2 text-sm text-white">
        Photo upload (optional)
        <input
          type="file"
          accept="image/*"
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("photo")}
        />
        {photoErrorMessage && <span className="text-xs text-primary">{photoErrorMessage}</span>}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Send my quote"}
      </button>
      {status && <p className="text-xs text-neutral-gray">{status}</p>}
    </form>
  )
}
