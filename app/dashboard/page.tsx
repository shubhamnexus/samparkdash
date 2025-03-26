import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import Overview from "@/components/overview"

export const metadata: Metadata = {
  title: "Education Program Dashboard",
  description: "Comprehensive view of education program metrics and performance",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  )
}

