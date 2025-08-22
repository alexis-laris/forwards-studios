import React from "react";

export default function WhatsappButton() {
    const phoneNumber = "+5213121252527";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <>
            <style>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #25D366;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          cursor: pointer;
          z-index: 9999;
          transition: background-color 0.3s ease;
        }

        .whatsapp-btn:hover {
          background-color: #1ebe57;
        }

        .whatsapp-btn img {
          width: 32px;
          height: 32px;
        }

        @media (max-width: 640px) {
          .whatsapp-btn {
            width: 50px;
            height: 50px;
            bottom: 15px;
            left: 15px;
          }

          .whatsapp-btn img {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat WhatsApp"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    loading="lazy"
                    decoding="async"
                />
            </a>
        </>
    );
}
