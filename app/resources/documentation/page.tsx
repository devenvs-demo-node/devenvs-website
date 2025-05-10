import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Documentation | Coming Soon | DevEnvs",
  description: "Our documentation page is coming soon. Stay tuned for comprehensive guides on using DevEnvs.",
}

export default function DocumentationPage() {
  return (
    <ComingSoon
      title="Documentation Coming Soon"
      description="We're writing comprehensive guides to help you get the most out of DevEnvs. Subscribe to get notified when we launch."
      path="/resources/documentation"
    />
  )
}
