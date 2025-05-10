import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Blog | Coming Soon | DevEnvs",
  description: "Our blog page is coming soon. Stay tuned for insights, tutorials, and news about DevEnvs.",
}

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog Coming Soon"
      description="We're preparing insightful articles about ephemeral environments and development best practices. Subscribe to get notified when we launch."
      path="/resources/blog"
    />
  )
}
