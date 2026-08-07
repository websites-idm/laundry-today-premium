import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/commercial-laundry")({
  head: () => ({
    meta: [
      { title: "Commercial Laundry Service | Laundry Today" },
      { name: "description", content: "High-capacity contract washing and ironing for hotels, spas, gyms and hospitals." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="commercial-laundry" />
});
