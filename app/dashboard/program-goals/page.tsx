import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramGoals from "@/components/program-goals"

export const metadata: Metadata = {
  title: "Program Goals & Investment | Education Dashboard",
  description: "Track program goals, investments and coverage metrics",
}

export default function ProgramGoalsPage() {
  return (
    <DashboardLayout>
      <ProgramGoals />
    </DashboardLayout>
  )
}

