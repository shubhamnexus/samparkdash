import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramDataDistrictwise from "@/components/program-data-districtwise"

export const metadata: Metadata = {
  title: "Program Data Districtwise | Education Dashboard",
  description: "View program implementation statistics by district",
}

export default function ProgramDataDistrictwisePage() {
  return (
    <DashboardLayout>
      <ProgramDataDistrictwise />
    </DashboardLayout>
  )
} 