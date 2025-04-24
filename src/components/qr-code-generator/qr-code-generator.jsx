import { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [qrCode, setQRCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerateQRCode = () => {
    setQRCode(input);
    setInput('');
  };

  return (
    <div>
      <h1>QR Code Generator</h1>

      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your code here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
