import React from "react"

interface ProgramInfoProps {
  // Add your props here as needed
}

const ProgramInfo: React.FC<ProgramInfoProps> = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Program Information</h2>
      <div className="grid gap-4">
        {/* Add your program information content here */}
        <p>Program details will be displayed here.</p>
      </div>
    </div>
  )
}

export default ProgramInfo 