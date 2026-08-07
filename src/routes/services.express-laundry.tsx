import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/express-laundry")({
  head: () => ({
    meta: [
      { title: "Express Laundry Service | Laundry Today" },
      { name: "description", content: "Fast-tracked 12 to 24-hour turnaround doorstep laundry pickup." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="express-laundry" />
});
