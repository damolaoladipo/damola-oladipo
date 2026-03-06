import Essays from "@/components/sections/essays";

export default function EssaysPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  return <Essays searchParams={searchParams} />;
}
