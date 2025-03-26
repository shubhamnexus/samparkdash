import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramDataBlockwise from "@/components/program-data-blockwise"

export const metadata: Metadata = {
  title: "Program Data Blockwise | Education Dashboard",
  description: "View program implementation statistics by block",
}

export default function ProgramDataBlockwisePage() {
  return (
    <DashboardLayout>
      <ProgramDataBlockwise />
    </DashboardLayout>
  )
} 