import ComingSoon from "@/components/coming-soon"

export const metadata = {
  title: "API Reference | Coming Soon | DevEnvs",
  description: "Our API reference page is coming soon. Stay tuned for detailed API documentation.",
}

export default function ApiReferencePage() {
  return (
    <ComingSoon
      title="API Reference Coming Soon"
      description="We're documenting our APIs to help you integrate with DevEnvs. Subscribe to get notified when we launch."
      path="/resources/api-reference"
    />
  )
}
