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
    "Child-Free Coffee Escape",
  ];

  if (!opened) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.15)), url('/damask-gold.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "30px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #f7f1e6 0%, #e8decd 100%)",
            padding: "80px 90px",
            borderRadius: "22px",
            border: "6px solid #d9c08a",
            boxShadow: "0 35px 80px rgba(0,0,0,0.35)",
            textAlign: "center",
            maxWidth: "760px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              right: "14px",
              bottom: "14px",
              border: "1px solid rgba(217,192,138,0.8)",
              borderRadius: "14px",
              pointerEvents: "none",
            }}
          />

          <img
            src="/ornament.png"
            alt=""
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              width: "95px",
              opacity: 0.55,
            }}
          />

          <img
            src="/ornament.png"
            alt=""
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "95px",
              opacity: 0.55,
              transform: "scaleX(-1)",
            }}
          />

          <img
            src="/ornament.png"
            alt=""
            style={{
              position: "absolute",
              bottom: "14px",
              left: "14px",
              width: "95px",
              opacity: 0.55,
              transform: "scaleY(-1)",
            }}
          />

          <img
            src="/ornament.png"
            alt=""
            style={{
              position: "absolute",
              bottom: "14px",
              right: "14px",
              width: "95px",
              opacity: 0.55,
              transform: "scale(-1, -1)",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "34px",
              color: "#8b6f3d",
              fontSize: "14px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#d9c08a",
                marginRight: "15px",
                maxWidth: "120px",
              }}
            />
            Friendship Voucher Collection
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "#d9c08a",
                marginLeft: "15px",
                maxWidth: "120px",
              }}
            />
          </div>

          <h1
            style={{
              color: "#1f352b",
              fontSize: "58px",
              lineHeight: "1.08",
              marginBottom: "20px",
              marginTop: 0,
            }}
          >
            Faby Blum’s
            <br />
            Voucher Vault
          </h1>

          <p
            style={{
              color: "#2f4a3d",
              fontSize: "24px",
              marginBottom: "18px",
            }}
          >
            From Kevin & Marta
          </p>

          <p
            style={{
              color: "#5a5a52",
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "520px",
              margin: "0 auto 36px auto",
            }}
          >
            A curated collection of redeemable treats, rescue missions, and
            friendship favours made especially for you.
          </p>

          <button
            onClick={() => setOpened(true)}
            style={{
              padding: "16px 38px",
              fontSize: "20px",
              background: "#d9c08a",
              color: "#1f352b",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          >
            Open Vault
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f1e6",
        padding: "40px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#1f352b",
            marginBottom: "30px",
          }}
        >
          Vouchers for Faby
        </h1>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {vouchers.map((voucher) => (
            <div
              key={voucher}
              style={{
                background: "white",
                border: "1px solid #d9c08a",
                borderRadius: "14px",
                padding: "18px 22px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                fontSize: "20px",
                color: "#2f4a3d",
              }}
            >
              {voucher}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}