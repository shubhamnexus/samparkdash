import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import SampleDataDistrictwise from "@/components/sample-data-districtwise"

export const metadata: Metadata = {
  title: "Program Data - Districtwise | Education Dashboard",
  description: "View program implementation statistics by district",
}

export default function SampleDataDistrictwisePage() {
  return (
    <DashboardLayout>
      <SampleDataDistrictwise />
    </DashboardLayout>
  )
} 