import IpSelector from "@/components/all-products/IpSelector";
import { ProductHeader } from "@/components/all-products/ProductHeader";
import { Card } from "@/ui/Card";

export default function Home() {
  return (
    <Card>
      <ProductHeader/>
      <IpSelector/>
    </Card>
  );
}