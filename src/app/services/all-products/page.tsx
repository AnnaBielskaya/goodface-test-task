import IpSelector from "@/components/all-products/IpSelector";
import LocationSelector from "@/components/all-products/LocationSelector";
import Plans from "@/components/all-products/Plans";
import { ProductHeader } from "@/components/all-products/ProductHeader";
import SubscriptionSelector from "@/components/all-products/SubscriptionSelector";
import { Card } from "@/ui/Card";
import OrderSummary from "@/components/all-products/OrderSummary";
import { Button } from "@/ui/Button";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";

export default function Services() {
  return (
    <div className="flex flex-col gap-6">
      <Button className="w-fit" icon={<ChevronLeftIcon/>} label="Back to all" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <ProductHeader />
            <div className="flex flex-col gap-8">
              <IpSelector />
              <SubscriptionSelector />
              <LocationSelector />
            </div>
          </Card>

          <Card>
            <Plans />
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <OrderSummary />
          </Card>
          <Button className="mt-4 w-full" label="Checkout"/>
        </div>
      </div>
    </div>
  );
}
