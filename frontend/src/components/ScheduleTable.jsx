import "../styles/ScheduleTable.css";

const SCHEDULE = [
  { slot: "Morning", time: "8:00 AM – 11:00 AM", availability: "Available" },
  { slot: "Afternoon", time: "1:00 PM – 4:00 PM", availability: "Available" },
  { slot: "Evening", time: "5:00 PM – 8:00 PM", availability: "Limited" },
  { slot: "Night", time: "8:30 PM – 10:30 PM", availability: "Available" },
  { slot: "Night", time: "11:00 PM – 1:30 AM", availability: "Available" },
];

export default function ScheduleTable() {
  return (
    <div className="schedule-table__wrap">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time Slot</th>
            <th>Hours (PKT)</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {SCHEDULE.map((row, index) => (
            <tr key={`${row.slot}-${index}`}>
              <td data-label="Slot">{row.slot}</td>
              <td data-label="Hours">{row.time}</td>
              <td data-label="Availability">
                <span
                  className={`schedule-table__badge ${
                    row.availability === "Limited" ? "schedule-table__badge--limited" : ""
                  }`}
                >
                  {row.availability}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}