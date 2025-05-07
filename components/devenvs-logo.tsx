import { cn } from "@/lib/utils"

interface DevEnvsLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function DevEnvsLogo({ className, size = "md" }: DevEnvsLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 32 32"
        className={cn(sizeClasses[size], className)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#5E5AFF" />
        <path d="M8 8L16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24L8 24L8 8Z" fill="white" />
        <path d="M12 12L16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20L12 20L12 12Z" fill="#5E5AFF" />
      </svg>
      <span className="font-bold text-xl tracking-tight">DevEnvs</span>
    </div>
  )
}
