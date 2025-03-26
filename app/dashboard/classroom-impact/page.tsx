import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ClassroomImpact from "@/components/classroom-impact"

export const metadata: Metadata = {
  title: "Classroom Impact | Education Dashboard",
  description: "Measure the impact of the program in classrooms",
}

export default function ClassroomImpactPage() {
  return (
    <DashboardLayout>
      <ClassroomImpact />
    </DashboardLayout>
  )
}

