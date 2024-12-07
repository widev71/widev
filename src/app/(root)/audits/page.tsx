import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import PageSpeed from "./PageSpeed";

export const metadata: Metadata = {
  title: "Audits | Made Wijaya",
  description:
    "Explore real-time performance reports for wijayadev.vercel.app, powered by the Pagespeed API",
};

export default function Audits() {
  return (
    <div className="p-8">
      <PageTitle title="Audits" description="Real-time performance report." />
      <PageSpeed />
    </div>
  );
}
