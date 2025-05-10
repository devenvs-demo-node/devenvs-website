import Link from "next/link"
import { DevEnvsLogo } from "@/components/devenvs-logo"
import { Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <DevEnvsLogo />
            <p className="text-zinc-400 text-sm max-w-xs">
              Create, test, and destroy development environments on demand.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/documentation"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/api-reference"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/community" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/company/privacy-policy"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} DevEnvs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/company/privacy-policy" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/company/privacy-policy" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/company/privacy-policy" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
