"use client"

import { useState } from "react"

interface RegionData {
  name: string
  coverage: number
}

interface IndiaMapProps {
  onStateClick?: (state: string) => void
}

export default function IndiaMap({ onStateClick }: IndiaMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null)

  // Example data - replace with actual data
  const regions: RegionData[] = [
    { name: "North India", coverage: 85 },
    { name: "South India", coverage: 92 },
    { name: "East India", coverage: 78 },
    { name: "West India", coverage: 88 },
    { name: "Central India", coverage: 75 },
  ]

  const getCoverageColor = (coverage: number): string => {
    if (coverage >= 90) return "#FF4500" // Bright Orange
    if (coverage >= 80) return "#FF6347" // Tomato Orange
    if (coverage >= 70) return "#FF7F50" // Coral Orange
    if (coverage >= 60) return "#FFA07A" // Light Salmon
    if (coverage >= 50) return "#FFB6C1" // Light Pink Orange
    return "#FFC0CB" // Pink Orange
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1e1e1e] rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-[#333333] dark:text-white">
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
          <img 
            src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/avd0t9uaf-removebg-preview_1d9eebab-9c91-400e-8c0f-1779b07fabc4.png" 
            alt="India Coverage Map"
            className="w-[300px] md:w-[400px] h-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => onStateClick?.(hoveredRegion?.name || "")}
          />
          {hoveredRegion && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 text-white p-3 rounded-lg">
              <p className="font-semibold">{hoveredRegion.name}</p>
              <p>Coverage: {hoveredRegion.coverage}%</p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-[#333333] dark:text-white mb-2"></h3>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FF4500" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">90%+</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FF6347" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">80-90%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FF7F50" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">70-80%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFA07A" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">60-70%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFB6C1" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">50-60%</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFC0CB" }}></div>
            <span className="text-sm text-[#666666] dark:text-[#999999]">&lt;50%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

