import Overview from "@/components/overview"
import ProgramData from "@/components/program-data"
import DistrictBlockwise from "@/components/district-blockwise"
import SparkMonitoring from "@/components/spark-monitoring"

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <DistrictBlockwise />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ProgramData />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <SparkMonitoring />
      </div>
    </div>
  )
}

