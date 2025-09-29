import Image from "next/image";

export default function PaymentMethods() {
  const methods = [0, 1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center mt-4 w-full">
      {methods.map((i) => (
        <div key={i} className="w-10 h-6 relative filter grayscale">
          <Image
            src={`/payment-methods/payment-method-${i}.png`}
            alt={`Payment method ${i}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}