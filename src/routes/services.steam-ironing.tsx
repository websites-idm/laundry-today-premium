import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/steam-ironing")({
  head: () => ({
    meta: [
      { title: "Steam Ironing Service | Laundry Today" },
      { name: "description", content: "Professional vacuum-press formal clothes steam ironing." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="steam-ironing" />
});
