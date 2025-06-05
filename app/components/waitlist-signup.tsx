"use client"

import { useState, useEffect } from "react"
import { getWaitlistCount } from "../actions/waitlist"
import { Avatar } from "./avatar"
import { WaitlistForm } from "./waitlist-form"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(0)

  useEffect(() => {
    getWaitlistCount().then((count) => setWaitlistCount(count + 100))
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  return (
    <div className="w-full max-w-xl mx-auto p-8 text-center">
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
          Join Our Product Launch Waitlist
        </h2>
      </div>
      <div>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Be part of something truly extraordinary. Join thousands of others already gaining early access to our
          revolutionary new product.
        </p>
      </div>
      <div className="w-full">
        <WaitlistForm onSuccess={handleSuccess} />
      </div>
      <div>
        <div className="flex items-center justify-center mt-8">
          <div className="flex -space-x-2 mr-4">
            <Avatar initials="JD" index={0} />
            <Avatar initials="AS" index={1} />
            <Avatar initials="MK" index={2} />
          </div>
          <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
        </div>
      </div>
    </div>
  )
}
