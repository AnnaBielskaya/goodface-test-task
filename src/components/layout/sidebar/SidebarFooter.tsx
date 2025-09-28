import Image from "next/image";

export default function SidebarFooter() {
  return (
    <div className="flex items-center justify-between p-3 pl-4 border-t border-grey-200">
      <div className="flex flex-col">
        <span className="text-subtitle2 text-grey-800">
          Henry Smith
        </span>
        <span className="text-body2 text-grey-800">
          henry.smith@gmail.com
        </span>
      </div>
      <button className="p-1 cursor-pointer">
        <Image
          src="/icons/dots-vertical.svg"
          alt="More options"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
