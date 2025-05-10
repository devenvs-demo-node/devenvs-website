import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "Product | Coming Soon | DevEnvs",
  description: "Our product page is coming soon. Stay tuned for updates on our ephemeral development environments.",
}

export default function ProductPage() {
  return (
    <ComingSoon
      title="Product Coming Soon"
      description="We're working on showcasing our ephemeral development environment platform. Subscribe to get notified when we launch."
      path="/product"
    />
  )
}
