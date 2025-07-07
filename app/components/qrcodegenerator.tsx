import React, { useState, useEffect } from 'react';
import { Copy, ExternalLink, Download } from 'lucide-react';

export default function QRCodeGenerator() {
  const [qrText, setQrText] = useState('https://maharerait.maharashtra.gov.in/public/project/view/54260');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [projectId, setProjectId] = useState('P52100079313');
  const [copied, setCopied] = useState(false);

  // Generate QR code using QR Server API (free service)
interface GenerateQRCodeFn {
    (text: string): void;
}

const generateQRCode: GenerateQRCodeFn = (text) => {
    const size = '200x200';
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(text)}`;
    setQrCodeUrl(qrUrl);
};

  useEffect(() => {
    generateQRCode(qrText);
  }, [qrText]);

  const handleQRClick = () => {
    window.open(qrText, '_blank');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `${projectId}-qr-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
   
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#172747] text-white p-6 text-center">
            <h1 className="text-2xl font-bold">Saheel Trendy Vesta QR Codes</h1>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Side - QR Code */}
              <div className="text-center">
                <div className="inline-block border-2 border-gray-300 p-4 rounded-lg mb-4">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code" 
                    className="w-48 h-48 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleQRClick}
                  />
                </div>
                <div className="text-xl font-mono font-bold text-gray-800 mb-4">
                  {projectId}
                </div>
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={handleQRClick}
                    className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-1 px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Details</h2>
                  <p className="text-gray-600 leading-relaxed">
                     Details are available at{' '}
                    <a 
                      href="https://maharera.mahaonline.gov.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://maharera.mahaonline.gov.in
                    </a>
                    {' '}under registered projects.
                  </p>
                </div>

                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-[#172747] mb-2">How to Use:</h4>
                  <ul className="text-sm text-[#172747] space-y-1">
                    <li>• Scan QR code with your phone</li>
                    <li>• Click QR code to open link</li>
                    <li>• Use buttons to copy/download</li>
                  </ul>
                </div>

               
              </div>
              
            </div>
           
          </div>
          
        </div>
        
      </div>
   
  );
}