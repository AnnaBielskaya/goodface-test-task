import IpSelector from "@/components/all-products/IpSelector";
import LocationSelector from "@/components/all-products/LocationSelector";
import { ProductHeader } from "@/components/all-products/ProductHeader";
import SubscriptionSelector from "@/components/all-products/SubscriptionSelector";
import { Card } from "@/ui/Card";

export default function Home() {
  return (
    <Card>
      <ProductHeader/>
      <IpSelector/>
      <SubscriptionSelector/>
      <LocationSelector/>
    </Card>
  );
}