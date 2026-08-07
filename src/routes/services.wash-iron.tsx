import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/wash-iron")({
  head: () => ({
    meta: [
      { title: "Wash & Iron Service | Laundry Today" },
      { name: "description", content: "Professional wash, dry and steam iron service for formal and daily wear." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="wash-iron" />
});
