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
import { useEffect, useState } from "react";
import { getPricePerIP } from "@/config/pricing";
import PaymentMethods from "@/components/all-products/PaymentMethods";

export default function Services() {
  const [quantity, setQuantity] = useState(100);
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(3);
  const [location, setLocation] = useState("United Kingdom");
  const [total, setTotal] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const pricePerIP = getPricePerIP(quantity);

  useEffect(() => {
    let newTotal = quantity * pricePerIP * subscriptionPeriod;
    let discount = 0;

    if (subscriptionPeriod === 12) {
      newTotal = newTotal * 0.8;
    }

    setTotal(newTotal);
    setDiscountPercentage(discount);
  }, [quantity, pricePerIP, subscriptionPeriod]);

  return (
    <div className="flex flex-col gap-6">
      <Button
        className="w-fit"
        icon={<ChevronLeftIcon />}
        label="Back to all"
      />
      <div className="content-grid">
        <div className="flex flex-col gap-6">
          <Card>
            <ProductHeader />
            <div className="flex flex-col gap-8">
              <IpSelector value={quantity} onValueChange={setQuantity} />
              <SubscriptionSelector
                value={subscriptionPeriod}
                onValueChange={setSubscriptionPeriod}
              />
              <LocationSelector value={location} onValueChange={setLocation} />
            </div>
          </Card>

          <Card>
            <Plans />
          </Card>
        </div>

        <div>
          <Card>
            <OrderSummary
              quantity={quantity}
              location={location}
              pricePerIP={pricePerIP}
              subscriptionPeriod={subscriptionPeriod}
              total={total}
            />
          </Card>
          <Button
            className="primary-btn mt-4 w-full"
            label="Continue to checkout"
            disabled={quantity < 10 || quantity > 1000}
          />
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
}
