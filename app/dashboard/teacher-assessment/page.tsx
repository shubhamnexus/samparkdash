import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import TeacherAssessment from "@/components/teacher-assessment"

export const metadata: Metadata = {
  title: "Teacher Assessment | Education Dashboard",
  description: "Assess teacher performance and engagement",
}

export default function TeacherAssessmentPage() {
  return (
    <DashboardLayout>
      <TeacherAssessment />
    </DashboardLayout>
  )
}

