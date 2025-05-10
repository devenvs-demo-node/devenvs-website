import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Careers | Coming Soon | DevEnvs",
  description: "Our careers page is coming soon. Stay tuned for job opportunities at DevEnvs.",
}

export default function CareersPage() {
  return (
    <ComingSoon
      title="Careers Coming Soon"
      description="Subscribe to get notified when we launch our careers page."
      path="/company/careers"
    />
  )
}
