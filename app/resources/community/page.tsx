import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Community | Coming Soon | DevEnvs",
  description: "Our community page is coming soon. Stay tuned for ways to connect with other DevEnvs users.",
}

export default function CommunityPage() {
  return (
    <ComingSoon
      title="Community Coming Soon"
      description="We're building a space for DevEnvs users to connect, share, and learn together. Subscribe to get notified when we launch."
      path="/resources/community"
    />
  )
}
