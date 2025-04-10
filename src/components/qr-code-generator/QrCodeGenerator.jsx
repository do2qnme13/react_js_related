import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
    const [qrCode, setQrcode] = useState("");
    const inpuRef = useRef(null);

    const handleGenerateQrCode = () => {
        setQrcode(inpuRef.current.value);
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    type="text"
                    name="qr-code"
                    placeholder="Enter Text Here"
                    ref={inpuRef}
                />
                <button onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#ffff"
                />
            </div>
        </div>
    );
}
