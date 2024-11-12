
import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const BadgeTry = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [shape, setShape] = useState('square');
  const [isDragging, setIsDragging] = useState(false);
  const badgeRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDownload = async () => {
    if (!badgeRef.current) return;

    try {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      // Set canvas size to match badge size
      canvas.width = 512; // Fixed size for better quality
      canvas.height = 512;

      // Draw background color
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);

      if (uploadedImage) {
        // Create new image for uploaded content
        const userImage = new Image();
        userImage.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
          userImage.onload = resolve;
          userImage.onerror = reject;
          userImage.src = uploadedImage;
        });

        // Calculate dimensions to maintain aspect ratio and cover the badge
        const scale = Math.max(
          canvas.width / userImage.width,
          canvas.height / userImage.height
        );
        const x = (canvas.width - userImage.width * scale) / 2;
        const y = (canvas.height - userImage.height * scale) / 2;

        // Draw uploaded image with cover behavior
        context.drawImage(
          userImage,
          x,
          y,
          userImage.width * scale,
          userImage.height * scale
        );

        // Create new image for badge template
        const template = new Image();
        template.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
          template.onload = resolve;
          template.onerror = reject;
          template.src = '/badge1.png';
        });

        // Draw badge template on top
        context.drawImage(template, 0, 0, canvas.width, canvas.height);

        // Apply shape mask if circle
        if (shape === 'circle') {
          context.globalCompositeOperation = 'destination-in';
          context.beginPath();
          context.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
            0,
            Math.PI * 2
          );
          context.fill();
          context.globalCompositeOperation = 'source-over';
        }
      }

      // Download the final canvas
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'my-badge.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch (error) {
      console.error('Error generating badge:', error);
    }
  };

  return (
    <div className="p-16 -my-8 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#EFEFEF] font-sans flex flex-col items-center justify-center text-black border-2 border-black rounded-[80px] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-[600px] h-[380px]">
        <div
          ref={badgeRef}
          className={`w-64 h-64 relative ${
            shape === 'circle' ? 'rounded-full' : 'rounded-lg'
          } overflow-hidden bg-white`}
        >
          {uploadedImage ? (
            <div className="absolute inset-0">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
              Upload an image to preview
            </div>
          )}
          
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/badge1.png"
              alt="Badge Template"
              className="w-full h-full object-contain"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="flex font-semibold font-sans gap-4 mt-4">
          <button
            onClick={() => setShape('square')}
            className={`flex-1 w-[280px] py-2 px-4 rounded-md ${
              shape === 'square' ? 'bg-[#F9ab00] text-black border-2 border-black rounded-[50px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-gray-200 rounded-[50px] text-black'
            }`}
          >
            Square Badge
          </button>
          <button
            onClick={() => setShape('circle')}
            className={`flex-1 py-2 px-4 rounded-md ${
              shape === 'circle' ? 'bg-[#F9ab00] text-black border-2 border-black rounded-[50px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-gray-200 rounded-[50px] text-black'
            }`}
          >
            Circle Badge
          </button>
        </div>
      </div>

      <div className="bg-[#EFEFEF] font-sans text-black border-2 border-black rounded-[50px] p-6 mt-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-[600px] h-[140px]">
        <div className="flex justify-between items-center h-full">
          <div
            className={`relative flex-1 mr-4 border-2 border-dashed rounded-3xl p-2 transition-all duration-200 ease-in-out cursor-pointer h-[80px] ${
              isDragging ? 'border-black bg-gray-100' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={triggerFileInput}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            
            <div className="flex items-center gap-4 h-full">
              <div className="p-3 bg-white rounded-full shadow-md ml-4">
                {uploadedImage ? (
                  <ImageIcon className="w-6 h-6 text-black" />
                ) : (
                  <Upload className="w-6 h-6 text-black" />
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium">
                  {uploadedImage ? 'Image uploaded!' : 'Drop your image here'}
                </p>
                <p className="text-xs text-gray-500">
                  {uploadedImage ? 'Click to change image' : 'or click to browse'}
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleDownload}
            className="w-auto py-2 px-4 bg-[#F9ab00] text-black border-2 border-black rounded-[50px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-custom-peach flex items-center gap-2"
            disabled={!uploadedImage}
          >
            <span>{uploadedImage ? 'Download Badge' : 'Upload an image first'}</span>
            {uploadedImage && <ImageIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BadgeTry;