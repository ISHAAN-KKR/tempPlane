import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { ComparisonTable } from "@/components/comparison-table";

export default function PricingPage() {
  return (
    <div className="container py-12 space-y-12">
      <Pricing />
      <ComparisonTable />
      <FAQ />
    </div>
  );
}
