"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

// Import the Firebase app instance
import { app } from "./firebase-config";

// Import Realtime Database functions
import { getDatabase, ref, push } from "firebase/database";

// Get the database instance
const db = getDatabase(app); // Moved outside the component if app is initialized once

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      isValid = false
    }

    // Basic email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       // A simple regex is generally more robust than just checking for @ and .
      newErrors.email = "Email is invalid"
      isValid = false
    }


    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for the field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log("Form validation failed"); // Optional: Log validation failure
      return
    }

    setIsSubmitting(true)

    try {
      // Create a reference to the 'contactSubmissions' node
      const contactSubmissionsRef = ref(db, 'contactSubmissions');

      // Add the form data to the database using push()
      // This automatically creates a unique key for each submission
      await push(contactSubmissionsRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        timestamp: Date.now(), // Add a timestamp
      });

      console.log("Form data successfully pushed to Realtime Database!");

      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({ // Also clear errors
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form to Firebase:", error);
      // Optionally, set a submission error state to show the user
      // setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="bg-[#5E5AFF]/20 p-4 rounded-full mb-4">
            <CheckCircle2 className="h-12 w-12 text-[#5E5AFF]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank you for reaching out!</h3>
          <p className="text-zinc-400 mb-6 max-w-md">
            We've received your message and will get back to you as soon as possible.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-[#5E5AFF] hover:bg-[#4A46FF] text-white">
            Send another message
          </Button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`bg-white/5 border ${
                    errors.firstName ? "border-red-500" : "border-white/10"
                  } focus:border-[#5E5AFF] text-white`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`bg-white/5 border ${
                    errors.lastName ? "border-red-500" : "border-white/10"
                  } focus:border-[#5E5AFF] text-white`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@company.com"
                className={`bg-white/5 border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } focus:border-[#5E5AFF] text-white`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project and how we can help..."
                className={`min-h-[150px] bg-white/5 border ${
                  errors.message ? "border-red-500" : "border-white/10"
                } focus:border-[#5E5AFF] text-white`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5E5AFF] hover:bg-[#4A46FF] text-white h-12"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <p className="text-xs text-zinc-500 text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-zinc-400 hover:text-white underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      )}
    </div>
  )
}
