import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Get Started | Coming Soon | DevEnvs",
  description: "Our registration page is coming soon. Stay tuned to get started with DevEnvs.",
}

export default function GetStartedPage() {
  return (
    <ComingSoon
      title="Get Started Coming Soon"
      description="We're putting the finishing touches on our onboarding process. Subscribe to get notified when you can start creating ephemeral environments with DevEnvs."
      path="/get-started"
    />
  )
}
