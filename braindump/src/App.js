import React from "react";
import "./App.css";
import MyResponsiveAreaBump from "./MyResponsiveAreaBump";

function App() {
  const data = [
    {
      id: "JavaScript",
      data: [
        {
          x: 2000,
          y: 23,
        },
        {
          x: 2001,
          y: 28,
        },
        {
          x: 2002,
          y: 10,
        },
        {
          x: 2003,
          y: 28,
        },
        {
          x: 2004,
          y: 26,
        },
        {
          x: 2005,
          y: 20,
        },
      ],
    },
    {
      id: "ReasonML",
      data: [
        {
          x: 2000,
          y: 23,
        },
        {
          x: 2001,
          y: 10,
        },
        {
          x: 2002,
          y: 13,
        },
        {
          x: 2003,
          y: 22,
        },
        {
          x: 2004,
          y: 18,
        },
        {
          x: 2005,
          y: 10,
        },
      ],
    },
    {
      id: "TypeScript",
      data: [
        {
          x: 2000,
          y: 16,
        },
        {
          x: 2001,
          y: 22,
        },
        {
          x: 2002,
          y: 28,
        },
        {
          x: 2003,
          y: 21,
        },
        {
          x: 2004,
          y: 15,
        },
        {
          x: 2005,
          y: 26,
        },
      ],
    },
    {
      id: "Elm",
      data: [
        {
          x: 2000,
          y: 23,
        },
        {
          x: 2001,
          y: 11,
        },
        {
          x: 2002,
          y: 30,
        },
        {
          x: 2003,
          y: 20,
        },
        {
          x: 2004,
          y: 17,
        },
        {
          x: 2005,
          y: 19,
        },
      ],
    },
    {
      id: "CoffeeScript",
      data: [
        {
          x: 2000,
          y: 20,
        },
        {
          x: 2001,
          y: 20,
        },
        {
          x: 2002,
          y: 13,
        },
        {
          x: 2003,
          y: 28,
        },
        {
          x: 2004,
          y: 22,
        },
        {
          x: 2005,
          y: 13,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Area Bump Chart Example</h1>
      </header>
      <main>
        <MyResponsiveAreaBump data={data} />
      </main>
    </div>
  );
}

export default App;
