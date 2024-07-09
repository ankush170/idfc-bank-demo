import React from 'react';

interface ImageDisplayProps {
  src: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src }) => (
  <img src={src} alt="Investment Information" className="max-w-full h-auto" />
);

export default ImageDisplay;