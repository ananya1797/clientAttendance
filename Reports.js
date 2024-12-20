// import React, { useState } from "react";

// // Utility to parse CSV data into a JavaScript object
// const parseCSV = (csvText) => {
//   const rows = csvText.split("\n");
//   const headers = rows[0].split(",");
//   return rows.slice(1).map((row) => {
//     const values = row.split(",");
//     return headers.reduce((acc, header, index) => {
//       acc[header.trim()] = values[index]?.trim();
//       return acc;
//     }, {});
//   });
// };

// const Reports = () => {
//   const [date, setDate] = useState(""); // State to hold the selected date
//   const [tableData, setTableData] = useState([]); // State to hold parsed table data
//   const [error, setError] = useState(""); // State to hold errors

//   // Function to fetch and parse the CSV file
//   const fetchCSVFile = async () => {
//     try {
//       setError(""); // Clear previous errors
  
//       if (!date) {
//         setError("Please enter a valid date.");
//         return;
//       }
  
//       const fileName = `Attendance_${date}.csv`;
//       const filePath = `/Attendance/${fileName}`;
  
//       console.log("Attempting to fetch:", filePath);
  
//       const fileResponse = await fetch(`/Attendance/Attendance_${date}.csv`);


  
//       if (!fileResponse.ok) {
//         throw new Error(`File not found: ${fileName} (${fileResponse.status})`);
//       }
  
//       const fileText = await fileResponse.text();
//       console.log("CSV Content Retrieved:", fileText);
  
//       const parsedData = parseCSV(fileText);
//       console.log("Parsed Data:", parsedData);
  
//       setTableData(parsedData);
//     } catch (error) {
//       console.error("Error fetching or parsing the file:", error);
//       setError(error.message || "An unexpected error occurred.");
//       setTableData([]);
//     }
//   };
  
//   return (
//     <div className="container mt-5">
//       <h2>Teacher Portal - Attendance Reports</h2>

//       {/* Input Field for Date */}
//       <div className="mb-3">
//         <label htmlFor="dateInput" className="form-label">
//           Enter Date (format: YYYY-MM-DD):
//         </label>
//         <input
//           type="date"
//           id="dateInput"
//           className="form-control"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>

//       {/* Fetch Attendance Button */}
//       <button className="btn btn-primary" onClick={fetchCSVFile}>
//         Fetch Attendance
//       </button>

//       {/* Error Message */}
//       {error && <p className="text-danger mt-3">{error}</p>}

//       {/* Attendance Data Table */}
//       {tableData.length > 0 && (
//         <div className="mt-5">
//           <h4>Attendance Data for {date}</h4>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 {Object.keys(tableData[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, idx) => (
//                     <td key={idx}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reports;
// import React, { useState } from "react";

// // Utility to parse CSV data into a JavaScript object
// const parseCSV = (csvText) => {
//   const rows = csvText.split("\n");
//   const headers = rows[0].split(",");
//   return rows.slice(1).map((row) => {
//     const values = row.split(",");
//     return headers.reduce((acc, header, index) => {
//       acc[header.trim()] = values[index]?.trim();
//       return acc;
//     }, {});
//   });
// };

// const Reports = () => {
//   const [date, setDate] = useState(""); // State to hold the selected date
//   const [tableData, setTableData] = useState([]); // State to hold parsed table data
//   const [error, setError] = useState(""); // State to hold errors

//   // Function to validate and format the input date
//   const formatDate = (inputDate) => {
//     const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/; // Pattern for dd/mm/yyyy
//     const match = inputDate.match(datePattern);
//     if (!match) {
//       throw new Error("Invalid date format. Please use dd/mm/yyyy.");
//     }
//     const [, day, month, year] = match;
//     return `${year}-${month}-${day}`; // Convert to yyyy-mm-dd format
//   };

//   // Function to fetch and parse the CSV file
//   const fetchCSVFile = async () => {
//     try {
//       setError(""); // Clear previous errors
  
//       if (!date) {
//         setError("Please enter a valid date.");
//         return;
//       }
  
//       let formattedDate;
//       try {
//         formattedDate = formatDate(date);
//       } catch (err) {
//         setError(err.message);
//         return;
//       }
  
//       const fileName = `Attendance_${formattedDate}.csv`;
//       const filePath = `/Attendance/${fileName}`;
  
//       console.log("Attempting to fetch:", filePath);
  
//       const fileResponse = await fetch(filePath);
  
//       if (!fileResponse.ok) {
//         throw new Error(`File not found: ${fileName} (${fileResponse.status})`);
//       }
  
//       const fileText = await fileResponse.text();
//       console.log("CSV Content Retrieved:", fileText);
  
//       const parsedData = parseCSV(fileText);
//       console.log("Parsed Data:", parsedData);
  
//       setTableData(parsedData);
//     } catch (error) {
//       console.error("Error fetching or parsing the file:", error);
//       setError(error.message || "An unexpected error occurred.");
//       setTableData([]);
//     }
//   };
  
//   return (
//     <div className="container mt-5">
//       <h2>Teacher Portal - Attendance Reports</h2>

//       {/* Input Field for Date */}
//       <div className="mb-3">
//         <label htmlFor="dateInput" className="form-label">
//           Enter Date (format: dd/mm/yyyy):
//         </label>
//         <input
//           type="text"
//           id="dateInput"
//           className="form-control"
//           placeholder="dd/mm/yyyy"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>

//       {/* Fetch Attendance Button */}
//       <button className="btn btn-primary" onClick={fetchCSVFile}>
//         Fetch Attendance
//       </button>

//       {/* Error Message */}
//       {error && <p className="text-danger mt-3">{error}</p>}

//       {/* Attendance Data Table */}
//       {tableData.length > 0 && (
//         <div className="mt-5">
//           <h4>Attendance Data for {date}</h4>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 {Object.keys(tableData[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, idx) => (
//                     <td key={idx}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reports;

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAttendanceFiles();
  }, []);

  const loadAttendanceFiles = async () => {
    try {
      // List of CSV files to process
      const csvFiles = ["attendance1.csv", "attendance2.csv"]; // Update file names here
      const allAttendanceData = [];

      for (const file of csvFiles) {
        const data = await fetchCsvData(`/attendance/${file}`);
        allAttendanceData.push(...data);
      }

      const processedData = processAttendanceData(allAttendanceData);
      setAttendanceData(processedData);
      generateChartData(processedData);
    } catch (err) {
      setError("Error loading attendance files. Ensure files are in the public/attendance folder.");
    }
  };

  const fetchCsvData = (filePath) => {
    return new Promise((resolve, reject) => {
      Papa.parse(filePath, {
        download: true,
        header: true,
        complete: (result) => resolve(result.data),
        error: (err) => reject(err),
      });
    });
  };

  const processAttendanceData = (data) => {
    const studentAttendance = {};

    data.forEach((record) => {
      const { usn, date } = record;
      if (!studentAttendance[usn]) {
        studentAttendance[usn] = { total: 0, daysPresent: new Set() };
      }
      studentAttendance[usn].total += 1;
      studentAttendance[usn].daysPresent.add(date);
    });

    return Object.entries(studentAttendance).map(([usn, { total, daysPresent }]) => ({
      usn,
      percentage: ((daysPresent.size / total) * 100).toFixed(2),
    }));
  };

  const generateChartData = (data) => {
    const labels = data.map((item) => item.usn); // USNs
    const percentages = data.map((item) => parseFloat(item.percentage)); // Attendance percentages

    const chartConfig = {
      labels,
      datasets: [
        {
          label: "Attendance Percentage",
          data: percentages,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    setChartData(chartConfig);
  };

  return (
    <div className="container mt-5">
      <h2>Attendance Reports</h2>
      {error && <p className="text-danger">{error}</p>}
      {chartData ? (
        <div className="mt-5">
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      ) : (
        <p>Loading attendance data...</p>
      )}
    </div>
  );
};

export default Reports;