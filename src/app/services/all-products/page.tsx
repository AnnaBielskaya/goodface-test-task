"use client";

import IpSelector from "@/components/all-products/IpSelector";
import LocationSelector from "@/components/all-products/LocationSelector";
import Plans from "@/components/all-products/Plans";
import { ProductHeader } from "@/components/all-products/ProductHeader";
import SubscriptionSelector from "@/components/all-products/SubscriptionSelector";
import { Card } from "@/ui/Card";
import OrderSummary from "@/components/all-products/OrderSummary";
import { Button } from "@/ui/Button";
import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { useState } from "react";

export default function Services() {
  const [quantity, setQuantity] = useState(10);
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(3);  
  const [location, setLocation] = useState("United Kingdom");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <Button
        className="w-fit"
        icon={<ChevronLeftIcon />}
        label="Back to all"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card>
            <ProductHeader />
            <div className="flex flex-col gap-8">
              <IpSelector  
                value={quantity} 
                onValueChange={setQuantity} />
              <SubscriptionSelector
                value={subscriptionPeriod}
                onValueChange={setSubscriptionPeriod}
              />
              <LocationSelector 
                value={location} 
                onValueChange={setLocation} 
              />
            </div>
          </Card>

          <Card>
            <Plans />
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <OrderSummary
              quantity={quantity}
              location={location}
              pricePerIP={0}
              subscriptionPeriod={subscriptionPeriod}
              total={0}
            />
          </Card>
          <Button
            className="primary-btn mt-4 w-full"
            label="Continue to checkout"
          />
        </div>
      </div>
    </div>
  );
}