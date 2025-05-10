import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Integrations | Coming Soon | DevEnvs",
  description:
    "Our integrations page is coming soon. Stay tuned for updates on how DevEnvs connects with your favorite tools.",
}

export default function IntegrationsPage() {
  return (
    <ComingSoon
      title="Integrations Coming Soon"
      description="We're working on integrations with your favorite development tools and platforms. Subscribe to get notified when we launch."
      path="/integrations"
    />
  )
}
