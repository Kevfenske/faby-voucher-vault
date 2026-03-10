import { useState } from "react";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [redeemed, setRedeemed] = useState({});
  const [copiedNotice, setCopiedNotice] = useState("");

  const groupLink =
    "https://chat.whatsapp.com/CpmBDcETTLq2RwSnU7cjc0?mode=gi_t";

  const vouchers = [
    {
      title: "Test Voucher",
      icon: "🧪",
      unlimited: true,
      description:
        "Use this first to see how redemption works before using the real vouchers.",
    },
    {
      title: "Babysitting Night",
      icon: "👩‍👧‍👧",
      description:
        "A completely free evening of babysitting so you can go out and enjoy some adult time.",
    },
    {
      title: "DIY Day",
      icon: "🛠️",
      description:
        "One full day of enthusiastic help with painting, fixing, assembling furniture, or organising chaos.",
    },
    {
      title: "Fancy Dinner",
      icon: "🍱",
      description:
        "A proper fancy dinner with great food, good atmosphere and zero dishes for you.",
    },
    {
      title: "Homemade Take-Out",
      icon: "🥡",
      description:
        "Your favourite takeaway, but homemade and delivered with love.",
    },
    {
      title: "Emergency Wine Night",
      icon: "🍷",
      description:
        "Wine, snacks and a judgement-free rant session whenever needed.",
    },
    {
      title: "Lazy Sunday Brunch",
      icon: "🥐",
      description:
        "A slow relaxed brunch with good coffee and absolutely no rush.",
    },
    {
      title: "On-Call Tech Support",
      icon: "💻",
      description:
        "Help when technology refuses to cooperate and you need backup.",
    },
    {
      title: "Mini Adventure Day",
      icon: "🚗",
      description:
        "A surprise outing, market wander, café stop or spontaneous trip.",
    },
    {
      title: "One Free Moan Session",
      icon: "🗣️",
      description:
        "A full uninterrupted complaining session with emotional support included.",
    },
    {
      title: "No-Questions-Asked Chocolate Delivery",
      icon: "🍫",
      description:
        "Chocolate delivered when morale is low. Explanations not required.",
    },
    {
      title: "Laundry Rescue Token",
      icon: "🧺",
      description:
        "Redeem when laundry chaos has reached unacceptable levels.",
    },
    {
      title: "Child-Free Coffee Escape",
      icon: "☕",
      description:
        "A peaceful coffee outing where nobody interrupts you mid-sentence.",
    },
  ];

  const playVaultSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      const makeTone = (frequency, start, duration, type, gainValue) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, start);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(start);
        osc.stop(start + duration);
      };

      makeTone(220, now, 0.08, "square", 0.08);
      makeTone(330, now + 0.03, 0.1, "triangle", 0.05);
      makeTone(660, now + 0.12, 0.18, "triangle", 0.05);
      makeTone(880, now + 0.22, 0.25, "triangle", 0.04);
    } catch (e) {}
  };

  const triggerCelebrate = () => {
    setCelebrating(true);
    setTimeout(() => setCelebrating(false), 1800);
  };

  const redeemVoucher = async (voucher) => {
    if (!voucher.unlimited && redeemed[voucher.title]) return;

    if (!voucher.unlimited) {
      setRedeemed((prev) => ({ ...prev, [voucher.title]: true }));
    }

    triggerCelebrate();
    playVaultSound();

    const message = `Hi Kevin & Marta, I would like to redeem: ${voucher.title}`;

    try {
      await navigator.clipboard.writeText(message);
      setCopiedNotice(`Copied message for: ${voucher.title}`);
    } catch (e) {
      setCopiedNotice(`Please copy manually: ${message}`);
    }

    setTimeout(() => setCopiedNotice(""), 3500);

    setTimeout(() => {
      window.open(groupLink, "_blank");
    }, 450);
  };

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
          padding: "24px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #f7f1e6 0%, #e8decd 100%)",
            padding: "72px 32px",
            borderRadius: "22px",
            border: "6px solid #d9c08a",
            boxShadow: "0 35px 80px rgba(0,0,0,0.35)",
            textAlign: "center",
            maxWidth: "760px",
            width: "100%",
            position: "relative",
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
              fontSize: "clamp(40px, 7vw, 58px)",
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
              fontSize: "clamp(20px, 4vw, 24px)",
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
            onClick={() => {
              playVaultSound();
              setOpened(true);
            }}
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
        padding: "24px",
        fontFamily: "Georgia, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {celebrating && (
        <>
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "fixed",
                top: `${10 + (i % 6) * 8}%`,
                left: `${8 + i * 3.5}%`,
                fontSize: "30px",
                pointerEvents: "none",
                zIndex: 999,
                animation: `fall-${i} 1.6s ease-out forwards`,
              }}
            >
              {i % 4 === 0 ? "🎉" : i % 4 === 1 ? "✨" : i % 4 === 2 ? "🎊" : "⭐"}
            </div>
          ))}

          <style>{`
            ${Array.from({ length: 24 })
              .map(
                (_, i) => `
              @keyframes fall-${i} {
                0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(420px) rotate(${180 + i * 20}deg); opacity: 0; }
              }
            `
              )
              .join("\n")}
          `}</style>
        </>
      )}

      {copiedNotice && (
        <div
          style={{
            position: "fixed",
            top: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1f352b",
            color: "#f7f1e6",
            padding: "12px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            zIndex: 1000,
            boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
          }}
        >
          {copiedNotice}
        </div>
      )}

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#1f352b",
            marginBottom: "10px",
            fontSize: "clamp(34px, 6vw, 46px)",
          }}
        >
          Vouchers for Faby
        </h1>

        <p
          style={{
            color: "#5a5a52",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "28px",
            maxWidth: "760px",
          }}
        >
          Tap <strong>Redeem</strong> to copy your redemption message and open
          the voucher WhatsApp group. Paste the copied message into the group.
          The test voucher can be used as many times as you like. The other
          vouchers will be marked as used once redeemed.
        </p>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {vouchers.map((voucher) => {
            const isRedeemed = !voucher.unlimited && !!redeemed[voucher.title];

            return (
              <div
                key={voucher.title}
                style={{
                  background: isRedeemed ? "#f3eee5" : "white",
                  border: "1px solid #d9c08a",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  color: "#2f4a3d",
                  display: "grid",
                  gridTemplateColumns: "84px 1fr auto",
                  gap: "18px",
                  alignItems: "center",
                  opacity: isRedeemed ? 0.8 : 1,
                  position: "relative",
                }}
              >
                {isRedeemed && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "#d9c08a",
                      color: "#1f352b",
                      fontSize: "12px",
                      fontWeight: "bold",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    }}
                  >
                    Redeemed ✓
                  </div>
                )}

                <div
                  style={{
                    width: "84px",
                    height: "84px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 30% 30%, #f7e7ba 0%, #d9c08a 60%, #b89b5d 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "34px",
                    boxShadow:
                      "inset 0 2px 3px rgba(255,255,255,0.45), 0 4px 10px rgba(0,0,0,0.12)",
                    border: "2px solid rgba(184,155,93,0.55)",
                    margin: "0 auto",
                  }}
                >
                  {voucher.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                      color: "#1f352b",
                    }}
                  >
                    {voucher.title}
                  </div>

                  <div
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.5",
                      color: "#5a5a52",
                      maxWidth: "560px",
                    }}
                  >
                    {voucher.description}
                  </div>
                </div>

                <button
                  onClick={() => redeemVoucher(voucher)}
                  disabled={isRedeemed}
                  style={{
                    padding: "12px 20px",
                    fontSize: "16px",
                    background: isRedeemed ? "#c8c2b6" : "#d9c08a",
                    color: "#1f352b",
                    border: "none",
                    borderRadius: "10px",
                    cursor: isRedeemed ? "default" : "pointer",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    minWidth: "110px",
                  }}
                >
                  {isRedeemed ? "Used" : "Redeem"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}