import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import SchoolInformation from "@/components/school-information"

export const metadata: Metadata = {
  title: "School Information | Education Dashboard",
  description: "Track school data and performance metrics",
}

export default function SchoolInformationPage() {
  return (
    <DashboardLayout className="w-full p-0 m-0">
      <SchoolInformation />
    </DashboardLayout>
  )
}

