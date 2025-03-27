import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramDataDistrictBlockwise from "@/components/program-data-district-blockwise"

export const metadata: Metadata = {
  title: "District | Blockwise | Education Dashboard",
  description: "View program implementation statistics by district and block",
}

export default function ProgramDataDistrictBlockwisePage() {
  return (
    <DashboardLayout>
      <ProgramDataDistrictBlockwise />
    </DashboardLayout>
  )
} 