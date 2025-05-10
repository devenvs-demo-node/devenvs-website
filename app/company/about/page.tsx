import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "About | Coming Soon | DevEnvs",
  description: "Our about page is coming soon. Stay tuned to learn more about DevEnvs and our mission.",
}

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Us Coming Soon"
      description="We're excited to share our story, mission, and the team behind DevEnvs. Subscribe to get notified when we launch."
      path="/company/about"
    />
  )
}
