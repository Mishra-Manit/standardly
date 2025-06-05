"use server"

import { z } from "zod"

const schema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email")

    if (!email) {
      return { success: false, message: "Email is required" }
    }

    const result = schema.safeParse({ email })

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message }
    }

    // Simulate successful signup (no actual storage)
    const count = await getWaitlistCount()

    return {
      success: true,
      message: "You have been added to the waitlist!",
      count: count + 1,
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function getWaitlistCount() {
  // Return a simulated count
  return Math.floor(Math.random() * 50) + 150
}
