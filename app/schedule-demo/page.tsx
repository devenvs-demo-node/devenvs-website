import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Schedule a Demo | Coming Soon | DevEnvs",
  description: "Our demo scheduling page is coming soon. Stay tuned to book a personalized demo of DevEnvs.",
}

export default function ScheduleDemoPage() {
  return (
    <ComingSoon
      title="Demo Scheduling Coming Soon"
      description="We're setting up our demo scheduling system. Subscribe to get notified when you can book a personalized walkthrough of DevEnvs."
      path="/schedule-demo"
    />
  )
}
