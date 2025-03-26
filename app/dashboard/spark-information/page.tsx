import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import SparkInformation from "@/components/spark-information"

export const metadata: Metadata = {
  title: "Spark Information | Education Dashboard",
  description: "View detailed information about Sparks",
}

export default function SparkInformationPage() {
  return (
    <DashboardLayout>
      <SparkInformation />
    </DashboardLayout>
  )
}

