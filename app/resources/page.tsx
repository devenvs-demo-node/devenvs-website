import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Resources | Coming Soon | DevEnvs",
  description: "Our resources page is coming soon. Stay tuned for updates on guides, tutorials, and more.",
}

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resources Coming Soon"
      description="We're preparing helpful resources to help you get the most out of DevEnvs. Subscribe to get notified when we launch."
      path="/resources"
    />
  )
}
