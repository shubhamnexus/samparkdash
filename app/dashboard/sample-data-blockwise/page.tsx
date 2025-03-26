import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import SampleDataBlockwise from "@/components/sample-data-blockwise"

export const metadata: Metadata = {
  title: "Program Data - Blockwise | Education Dashboard",
  description: "View program implementation statistics by block",
}

export default function SampleDataBlockwisePage() {
  return (
    <DashboardLayout>
      <SampleDataBlockwise />
    </DashboardLayout>
  )
} 