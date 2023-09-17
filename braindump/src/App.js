import React from "react";
import "./App.css";

import MyResponsiveLine from "./Responsiveline"; // Import your MyResponsiveLine component

function App() {
  // Sample data for the line chart
  const data = [
    {
      id: "Flashbacks",
      color: "hsl(9, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 67,
        },
        {
          x: "2",
          y: 177,
        },
        {
          x: "3",
          y: 266,
        },
        {
          x: "4",
          y: 285,
        },
        {
          x: "5",
          y: 84,
        },
        {
          x: "6",
          y: 133,
        },
        {
          x: "7",
          y: 181,
        },
        {
          x: "8",
          y: 237,
        },
        {
          x: "9",
          y: 95,
        },
        {
          x: "10",
          y: 140,
        },
        {
          x: "11",
          y: 77,
        },
        {
          x: "12",
          y: 152,
        },
      ],
    },
    {
      id: "Nightmares",
      color: "hsl(319, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 67,
        },
        {
          x: "2",
          y: 177,
        },
        {
          x: "3",
          y: 266,
        },
        {
          x: "4",
          y: 215,
        },
        {
          x: "5",
          y: 84,
        },
        {
          x: "6",
          y: 133,
        },
        {
          x: "7",
          y: 181,
        },
        {
          x: "8",
          y: 237,
        },
        {
          x: "9",
          y: 95,
        },
        {
          x: "10",
          y: 140,
        },
        {
          x: "11",
          y: 73,
        },
        {
          x: "12",
          y: 152,
        },
      ],
    },
    {
      id: "Isolation",
      color: "hsl(266, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 67,
        },
        {
          x: "2",
          y: 173,
        },
        {
          x: "3",
          y: 266,
        },
        {
          x: "4",
          y: 285,
        },
        {
          x: "5",
          y: 84,
        },
        {
          x: "6",
          y: 113,
        },
        {
          x: "7",
          y: 181,
        },
        {
          x: "8",
          y: 237,
        },
        {
          x: "9",
          y: 95,
        },
        {
          x: "10",
          y: 110,
        },
        {
          x: "11",
          y: 79,
        },
        {
          x: "12",
          y: 112,
        },
      ],
    },
    {
      id: "No_in_person_contact",
      color: "hsl(67, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 67,
        },
        {
          x: "2",
          y: 147,
        },
        {
          x: "3",
          y: 366,
        },
        {
          x: "4",
          y: 285,
        },
        {
          x: "5",
          y: 64,
        },
        {
          x: "6",
          y: 133,
        },
        {
          x: "7",
          y: 141,
        },
        {
          x: "8",
          y: 237,
        },
        {
          x: "9",
          y: 95,
        },
        {
          x: "10",
          y: 130,
        },
        {
          x: "11",
          y: 77,
        },
        {
          x: "12",
          y: 152,
        },
      ],
    },
    {
      id: "Restless",
      color: "hsl(343, 70%, 50%)",
      data: [
        {
          x: "1",
          y: 67,
        },
        {
          x: "2",
          y: 177,
        },
        {
          x: "3",
          y: 226,
        },
        {
          x: "4",
          y: 255,
        },
        {
          x: "5",
          y: 84,
        },
        {
          x: "6",
          y: 123,
        },
        {
          x: "7",
          y: 181,
        },
        {
          x: "8",
          y: 267,
        },
        {
          x: "9",
          y: 95,
        },
        {
          x: "10",
          y: 130,
        },
        {
          x: "11",
          y: 77,
        },
        {
          x: "12",
          y: 152,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Line Chart Example</h1>
      </header>
      <main>
        <div className="chart-container">
          {/* Use the MyResponsiveLine component with your data */}
          <MyResponsiveLine data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;

// import MyResponsiveAreaBump from "./MyResponsiveAreaBump";

// function App() {
//   const data = [
//     {
//       id: "Flashbacks",
//       data: [
//         {
//           x: 20,
//           y: 23,
//         },
//         {
//           x: 21,
//           y: 28,
//         },
//         {
//           x: 22,
//           y: 10,
//         },
//         {
//           x: 23,
//           y: 28,
//         },
//         {
//           x: 24,
//           y: 26,
//         },
//         {
//           x: 25,
//           y: 20,
//         },
//       ],
//     },
//     {
//       id: "Nightmares",
//       data: [
//         {
//           x: 20,
//           y: 23,
//         },
//         {
//           x: 21,
//           y: 10,
//         },
//         {
//           x: 22,
//           y: 13,
//         },
//         {
//           x: 23,
//           y: 22,
//         },
//         {
//           x: 24,
//           y: 18,
//         },
//         {
//           x: 25,
//           y: 10,
//         },
//       ],
//     },
//     {
//       id: "Excercise",
//       data: [
//         {
//           x: 20,
//           y: 16,
//         },
//         {
//           x: 21,
//           y: 22,
//         },
//         {
//           x: 22,
//           y: 28,
//         },
//         {
//           x: 23,
//           y: 21,
//         },
//         {
//           x: 24,
//           y: 15,
//         },
//         {
//           x: 25,
//           y: 26,
//         },
//       ],
//     },
//     {
//       id: "Positive_socialising",
//       data: [
//         {
//           x: 20,
//           y: 23,
//         },
//         {
//           x: 21,
//           y: 11,
//         },
//         {
//           x: 22,
//           y: 30,
//         },
//         {
//           x: 23,
//           y: 20,
//         },
//         {
//           x: 24,
//           y: 17,
//         },
//         {
//           x: 25,
//           y: 19,
//         },
//       ],
//     },
//     {
//       id: "Isolation",
//       data: [
//         {
//           x: 20,
//           y: 20,
//         },
//         {
//           x: 21,
//           y: 20,
//         },
//         {
//           x: 22,
//           y: 13,
//         },
//         {
//           x: 23,
//           y: 28,
//         },
//         {
//           x: 24,
//           y: 22,
//         },
//         {
//           x: 25,
//           y: 13,
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Area Bump Chart Example</h1>
//       </header>
//       <main>
//         <MyResponsiveAreaBump data={data} />
//       </main>
//     </div>
//   );
// }

// export default App;
