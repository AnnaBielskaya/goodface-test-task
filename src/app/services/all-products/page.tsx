import IpSelector from "@/components/all-products/IpSelector";
import LocationSelector from "@/components/all-products/LocationSelector";
import Plans from "@/components/all-products/Plans";
import { ProductHeader } from "@/components/all-products/ProductHeader";
import SubscriptionSelector from "@/components/all-products/SubscriptionSelector";
import { Card } from "@/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <ProductHeader />
          <IpSelector />
          <SubscriptionSelector />
          <LocationSelector />
        </Card>

        <Card>
          <Plans />
        </Card>
      </div>
      <div>
        <Card>
          <h3>Order summary</h3>
        </Card>
      </div>
    </div>
  );
}
