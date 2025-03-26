import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramMonitoring from "@/components/program-monitoring"

export const metadata: Metadata = {
  title: "Program Monitoring | Education Dashboard",
  description: "Monitor program governance and compliance",
}

export default function ProgramMonitoringPage() {
  return (
    <DashboardLayout>
      <ProgramMonitoring />
    </DashboardLayout>
  )
}

