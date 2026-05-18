import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "20px" }}>
          Counter App
        </h2>

        <h1
          style={{
            fontSize: "50px",
            color: "#007bff",
            marginBottom: "25px",
          }}
        >
          {count}
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
              cursor: "pointer",
              flex: 1,
            }}
          >
            Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#dc3545",
              color: "white",
              cursor: "pointer",
              flex: 1,
            }}
          >
            Decrement
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#6c757d",
            color: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        <footer
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          Created by Rajnish Singh Chouhan
        </footer>
      </div>
    </div>
  );
}

export default Counter;