import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

function QRcodegenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("https://github.com/naimak659");

  const generateCode = () => {
    setQrCode(input);
    // setInput("");
  };

  useEffect(() => {
    generateCode();
  }, [qrCode, input]);

  return (
    <>
      <div className="bg-gray-950 h-screen border-t-2 border-gray-800 grid place-items-center py-32">
        <h1 className="font-semibold">QR Code Generator</h1>
        <div
          className="flex justify-between items-center my-4 bg-white w-1/2 px-3 py-4 rounded-sm
        "
        >
          <input
            className="text-black px-1 w-full py-2 focus:rounded focus:outline-purple-500 "
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Enter Your text/Link"
          />
          {/* <button
            // onClick={generateCode}
            className="bg-slate-900 ml-4 px-1 py-2 rounded-lg
          "
          > 
            Generate
          </button> */}
        </div>
        <div className="bg-white p-2">
          <QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
}

export default QRcodegenerator;
