import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DevEnvsLogo } from "@/components/devenvs-logo"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <DevEnvsLogo />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#product" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="#resources" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            Log in
          </Button>
          <Button className="bg-[#5E5AFF] hover:bg-[#4A46FF] text-white">Sign up</Button>
        </div>
      </div>
    </header>
  )
}
