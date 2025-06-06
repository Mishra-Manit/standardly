"use client"

export function AirtableForm() {
  return (
    <div className="w-full max-w-2xl relative">
      <div 
        className="overflow-y-scroll -webkit-overflow-scrolling-touch"
        style={{ 
          height: "100vh",
          maxHeight: "1350px",
          position: "relative"
        }}
      >
        <iframe
          className="airtable-embed absolute top-0 left-0 w-full h-full"
          src="https://airtable.com/embed/apptofdCJpHeYbp7W/pagOEiIiWNXEmhKnD/form?backgroundColor=transparent"
          frameBorder="0"
          style={{ 
            background: "transparent",
            border: "none"
          }}
          title="Airtable Form"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
} 