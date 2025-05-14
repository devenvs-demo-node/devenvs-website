import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Features | Coming Soon | DevEnvs",
  description: "Our features page is coming soon. Stay tuned for updates on what DevEnvs can do for you.",
}

export default function FeaturesPage() {
  return (
    <ComingSoon
      title="Features Coming Soon"
      description="We're preparing a detailed breakdown of all the powerful features DevEnvs offers. Subscribe to get notified when we launch."
      path="/features"
    />
  )
}
