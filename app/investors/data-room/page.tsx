import type { Metadata } from "next";
import { DataRoomGate } from "@/components/sections/DataRoomGate";

export const metadata: Metadata = {
  title: "Investor data room",
  robots: { index: false, follow: false },
};

export default function DataRoomPage() {
  return <DataRoomGate />;
}
