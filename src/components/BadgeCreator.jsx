import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const TEMPLATES = [
  {
    id: 'template1',
    name: 'Tech Vibes',
    preview: '/badge-blue.png',
    template: '/badge-blue.png',
    bgColor: 'bg-sky-100'
  },
  {
    id: 'template2',
    name: 'Gearing Up',
    preview: '/badge-green.png',
    template: '/badge-green.png',
    bgColor: 'bg-green-100'
  },
  {
    id: 'template3',
    name: 'Innovation',
    preview: '/badge-multicolor.png',
    template: '/badge-multicolor.png',
    bgColor: 'bg-gradient-to-r from-yellow-100 via-green-100 to-pink-100'
  },
  {
    id: 'template4',
    name: 'Connect',
    preview: '/badge-red.png',
    template: '/badge-red.png',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'template5',
    name: 'Developer',
    preview: '/badge-yellow.png',
    template: '/badge-yellow.png',
    bgColor: 'bg-orange-100'
  }
];

const BadgeCreator = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0]);
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
      
      canvas.width = 512;
      canvas.height = 512;

      // Draw background
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw uploaded image if exists
      if (uploadedImage) {
        const userImage = new Image();
        userImage.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
          userImage.onload = resolve;
          userImage.onerror = reject;
          userImage.src = uploadedImage;
        });

        const scale = Math.max(
          canvas.width / userImage.width,
          canvas.height / userImage.height
        );
        const x = (canvas.width - userImage.width * scale) / 2;
        const y = (canvas.height - userImage.height * scale) / 2;

        context.drawImage(
          userImage,
          x,
          y,
          userImage.width * scale,
          userImage.height * scale
        );
      }

      // Draw selected template overlay
      const template = new Image();
      template.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        template.onload = resolve;
        template.onerror = reject;
        template.src = selectedTemplate.template;
      });

      context.drawImage(template, 0, 0, canvas.width, canvas.height);

      // Download the final canvas
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `devfest-badge-${selectedTemplate.id}.png`;
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
      <div className="bg-[#EFEFEF] font-sans flex flex-col items-center justify-center text-black border-2 border-black rounded-[80px] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-[600px] h-[420px]">
        {/* Main Badge Preview */}
        <div
          ref={badgeRef}
          className="w-64 h-64 relative rounded-lg overflow-hidden bg-white"
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
              src={selectedTemplate.template}
              alt="Badge Template"
              className="w-full h-full object-contain"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Template Selection */}
        <div className="flex gap-4 mt-6 w-full justify-center">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className={`relative bg-white w-16 h-16 mx-2 rounded-lg overflow-hidden transition-all ${
                selectedTemplate.id === template.id
                  ? 'ring-2 ring-black ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
              }`}
            >
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Upload Section */}
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

export default BadgeCreator;

