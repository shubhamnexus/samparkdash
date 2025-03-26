import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramInfo from "@/components/program-info"

export const metadata: Metadata = {
  title: "Program Info | Education Dashboard",
  description: "View program information and history",
}

export default function ProgramInfoPage() {
  return (
    <DashboardLayout>
      <ProgramInfo />
    </DashboardLayout>
  )
}

