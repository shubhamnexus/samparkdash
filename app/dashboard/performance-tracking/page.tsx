import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import PerformanceTracking from "@/components/performance-tracking"

export const metadata: Metadata = {
  title: "Performance Tracking | Education Dashboard",
  description: "Track top performing schools and teachers",
}

export default function PerformanceTrackingPage() {
  return (
    <DashboardLayout>
      <PerformanceTracking />
    </DashboardLayout>
  )
}

