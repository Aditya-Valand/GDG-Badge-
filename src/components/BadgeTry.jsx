import React, { useState, useRef } from 'react';
import { Share2, Download, Upload } from 'lucide-react';
import html2canvas from 'html2canvas';

const BadgeTry = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [shape, setShape] = useState('square');
  const badgeRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!badgeRef.current) return;

    try {
      const canvas = await html2canvas(badgeRef.current, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas to Blob conversion failed');
          return;
        }

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

  const sampleBadges = ['/api/placeholder/64/64', '/api/placeholder/64/64', '/api/placeholder/64/64'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05] p-6">
        <h1 className="text-4xl font-bold text-white text-center">
          Badge Creator
          <span className="ml-2 text-2xl bg-white/20 px-3 py-1 rounded-full">2024</span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Controls */}
          <div className="bg-white p-6 rounded-xl shadow-lg transition-shadow hover:shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Badge</h2>
            
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center transition-colors hover:border-[#4285F4]">
                <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <span className="text-sm text-gray-600">Drop your image here, or click to select</span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Shape Selection */}
              <div className="flex gap-4 p-1 bg-gray-50 rounded-lg">
                <button
                  onClick={() => setShape('square')}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 ${
                    shape === 'square'
                      ? 'bg-white text-[#4285F4] shadow-md'
                      : 'hover:bg-white/50'
                  }`}
                >
                  Square
                </button>
                <button
                  onClick={() => setShape('circle')}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 ${
                    shape === 'circle'
                      ? 'bg-white text-[#4285F4] shadow-md'
                      : 'hover:bg-white/50'
                  }`}
                >
                  Circle
                </button>
              </div>

              {/* Sample Badges */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Sample Badges</h3>
                <div className="flex gap-4 justify-center">
                  {sampleBadges.map((badge, index) => (
                    <div key={index} className="w-16 h-16 rounded-lg shadow-sm overflow-hidden">
                      <img 
                        src={badge} 
                        alt={`Sample badge ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handleDownload}
                  className="flex-1 py-3 px-4 bg-[#4285F4] text-white rounded-lg hover:bg-[#3367D6] transition-colors flex items-center justify-center gap-2"
                  disabled={!uploadedImage}
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Preview</h2>
            
            <div className="relative">
              <div className="mx-auto w-72 h-72 bg-gray-100 rounded-xl p-4 shadow-inner">
                <div 
                  ref={badgeRef}
                  className={`w-full h-full relative transition-all duration-300
                    ${shape === 'circle' ? 'rounded-full' : 'rounded-lg'}
                    overflow-hidden shadow-lg`}
                >
                  {uploadedImage ? (
                    <div className="absolute inset-0">
                      <img
                        src={uploadedImage}
                        alt="Background"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                      Upload an image to preview
                    </div>
                  )}
                  
                  <div className="absolute inset-0">
                    <img
                      src="/badge1.png"
                      alt="Badge Template"
                      className="w-full h-full object-contain pointer-events-none"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeTry;