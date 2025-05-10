import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Changelog | Coming Soon | DevEnvs",
  description: "Our changelog page is coming soon. Stay tuned for updates on our latest features and improvements.",
}

export default function ChangelogPage() {
  return (
    <ComingSoon
      title="Changelog Coming Soon"
      description="We're preparing to share our development journey and product updates. Subscribe to get notified when we launch."
      path="/changelog"
    />
  )
}
