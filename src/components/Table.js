import React from "react";
import "../scss/Table.scss";

export default function Table(props) {
  let resultsTable = props.data.map((result, index) => (
    <tr key={index}>
      <td>{result.readAt.substr(0, 10)}</td>
      <td>{result.kWh}</td>
      <td>{result.u}</td>
      <td>{result.i}</td>
      <td>{result.p}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Usage (kWh)</th>
          <th>Voltage (V)</th>
          <th>Current (A)</th>
          <th>Power (W)</th>
        </tr>
      </thead>
      <tbody>{resultsTable}</tbody>
    </table>
  );
}
