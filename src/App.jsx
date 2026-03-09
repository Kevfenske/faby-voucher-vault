import { useState } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);

  const vouchers = [
    "Babysitting Night",
    "DIY Day",
    "Fancy Dinner",
    "Homemade Take-Out",
    "Emergency Wine Night",
    "Lazy Sunday Brunch",
    "On-Call Tech Support",
    "Mini Adventure Day",
    "One Free Moan Session",
    "No-Questions-Asked Chocolate Delivery",
    "Laundry Rescue Token",
    "Child-Free Coffee Escape"
  ];

  if (!opened) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#7a1e2c",
        color: "white",
        flexDirection: "column",
        fontFamily: "sans-serif"
      }}>
        <h1>Faby Blum’s Voucher Vault</h1>
        <p>From Kevin & Marta</p>
        <button
          onClick={() => setOpened(true)}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            background: "#d9c08a",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Open Vault
        </button>
      </div>
    );
  }

  return (
    <div style={{padding:"40px",fontFamily:"sans-serif"}}>
      <h1>Vouchers for Faby</h1>
      <ul>
        {vouchers.map(v => (
          <li key={v} style={{margin:"10px 0"}}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}