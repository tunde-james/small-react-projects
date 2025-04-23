import { useEffect, useCallback } from 'react';
import { useState } from 'react';

const RandomColorGenerator = () => {
  const [colorFormat, setColorFormat] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = useCallback(() => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback(() => {
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const blue = randomColorUtility(256);

    setColor(`rgb(${red},${green},${blue})`);
  }, []);

  useEffect(() => {
    colorFormat === 'rgb'
      ? handleCreateRandomRgbColor()
      : handleCreateRandomHexColor();
  }, [colorFormat, handleCreateRandomRgbColor, handleCreateRandomHexColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <button onClick={() => setColorFormat('hex')}>Create Hex Color</button>
      <button onClick={() => setColorFormat('rgb')}>Create RGB Color</button>
      <button
        onClick={
          colorFormat === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '20px',
          alignItems: 'center',
          color: 'white',
          fontSize: '60px',
          marginBlockStart: '50px',
        }}
      >
        <h3>{colorFormat === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
