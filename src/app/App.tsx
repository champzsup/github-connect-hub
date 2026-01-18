import { FileText, Download, Check, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
const getDownloadUrl = (platform: 'windows' | 'macos') => `${API_BASE_URL}/download/${platform}`;

export default function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  useEffect(() => {
    if (isUpdating && progress < 100) {
      const timer = setTimeout(() => {
        const increment = Math.random() * 15 + 5;
        setProgress(prev => Math.min(prev + increment, 100));
      }, 300);
      return () => clearTimeout(timer);
    } else if (progress >= 100 && isUpdating) {
      setUpdateComplete(true);
    }
  }, [isUpdating, progress]);

  const handleUpdate = () => {
    setIsUpdating(true);
    setProgress(0);
    setUpdateComplete(false);
  };

  const features = [
    { icon: Shield, text: "Enhanced security and performance" },
    { icon: Zap, text: "Faster PDF rendering engine" },
    { icon: Sparkles, text: "Modern UI improvements" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-orange-500/10 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-orange-500 to-rose-500 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Update Available
            </h1>
            <p className="text-white/90 text-sm">
              PDF Reader v3.2.1 is ready to install
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress */}
            {isUpdating && (
              <div className="space-y-3 py-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">
                    {updateComplete ? "Complete!" : "Downloading..."}
                  </span>
                  <span className="text-orange-500 font-semibold">
                    {Math.round(progress)}%
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                {updateComplete && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <Check className="w-4 h-4" />
                    <span>Update installed successfully</span>
                  </div>
                )}
              </div>
            )}

            {/* Download Buttons */}
            <div className="space-y-3">
              <a
                href={getDownloadUrl('windows')}
                download
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
              <a
                href={getDownloadUrl('macos')}
                download
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all"
              >
                <Download className="w-5 h-5" />
                Download for macOS
              </a>
            </div>

            {/* Footer */}
            <p className="text-center text-gray-400 text-xs">
              ~125 MB • Version 3.2.1 • Required for security compliance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
