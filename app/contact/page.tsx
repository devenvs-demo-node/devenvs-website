import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us | DevEnvs",
  description: "Get in touch with the DevEnvs team. We're here to help with your ephemeral environment needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Have questions about DevEnvs? We're here to help you accelerate your development workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#5E5AFF]/20 via-black to-black p-8 border border-white/10 overflow-hidden">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Glow effect */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5E5AFF]/20 rounded-full blur-3xl opacity-30"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:hello@devenvs.io" className="text-[#5E5AFF] hover:underline">
                        hello@devenvs.io
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-zinc-400">San Francisco, CA</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Follow Us</h3>
                      <div className="flex gap-4 mt-2">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                <h2 className="text-2xl font-bold mb-4">Prefer email?</h2>
                <p className="text-zinc-400 mb-3">
                  Reach out to us directly at{" "}
                  <a href="mailto:hello@devenvs.io" className="text-[#5E5AFF] hover:underline">
                    hello@devenvs.io
                  </a>
                </p>
                <p className="text-zinc-400">Our team will get back to you within 24 hours during business days.</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
