import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import SparkMonitoring from "@/components/spark-monitoring"

export const metadata: Metadata = {
  title: "Spark Monitoring | Education Dashboard",
  description: "Monitor Spark activities and performance",
}

export default function SparkMonitoringPage() {
  return (
    <DashboardLayout>
      <SparkMonitoring />
    </DashboardLayout>
  )
}

