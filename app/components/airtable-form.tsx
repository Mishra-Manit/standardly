"use client"

export function AirtableForm() {
  return (
    <div className="w-full max-w-2xl">
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/apptofdCJpHeYbp7W/pagOEiIiWNXEmhKnD/form?backgroundColor=transparent"
        frameBorder="0"
        width="100%"
        height="1350"
        style={{ background: "transparent" }}
        title="Airtable Form"
      ></iframe>
    </div>
  )
} 