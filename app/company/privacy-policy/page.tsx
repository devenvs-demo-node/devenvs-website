import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Privacy Policy | Coming Soon | DevEnvs",
  description: "Our privacy policy page is coming soon. Stay tuned for information on how we handle your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <ComingSoon
      title="Privacy Policy Coming Soon"
      description="We're finalizing our privacy policy to ensure transparency about how we handle your data. Subscribe to get notified when we launch."
      path="/company/privacy-policy"
    />
  )
}
