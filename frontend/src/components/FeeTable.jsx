import fees from "../data/fees";
import "../styles/FeeTable.css";

export default function FeeTable() {
  return (
    <div className="fee-table__wrap">
      <table className="fee-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Classes / Week</th>
            <th>Class Duration</th>
            <th>Monthly Fee</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((row) => (
            <tr key={row.id}>
              <td data-label="Course">{row.course}</td>
              <td data-label="Classes / Week">{row.classesPerWeek}</td>
              <td data-label="Duration">{row.duration}</td>
              <td data-label="Fee" className="fee-table__price">{row.monthlyFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}