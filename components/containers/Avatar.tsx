import { IAvatar } from "@/utils/interfaces";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "h-48 w-48 pr-10"
      )}
      {...props}
    />
  );
}

export const Avatar = (data: IAvatar) => {
  const { large, className, ...props } = data;
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={"images/damola.svg"}
        alt="Damola Oladipo"
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "object-cover items-start",
          large ? "h-48 w-48" : "h-48 w-48"
        )}
        width={100}
        height={100}
        priority
      />
    </Link>
  );
};


