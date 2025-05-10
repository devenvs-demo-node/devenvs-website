import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Pricing | Coming Soon | DevEnvs",
  description: "Our pricing page is coming soon. Stay tuned for updates on our plans and pricing options.",
}

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing Coming Soon"
      description="We're finalizing our pricing plans to provide you with the best value. Subscribe to get notified when we launch."
      path="/pricing"
    />
  )
}
