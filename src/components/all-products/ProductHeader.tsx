import Image from "next/image";

export function ProductHeader() {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/services/all-products-logo.svg"
        alt="All products logo"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-h4 font-sans text-grey-800">Datacenter Proxies</h1>
        <p className="text-body2 text-grey-500">
          High-speed, reliable proxies sourced from data centers, ideal for
          managing high-volume, concurrent requests.
        </p>
      </div>
    </div>
  );
}
