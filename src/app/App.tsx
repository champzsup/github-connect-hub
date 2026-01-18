import { FileText, Download, Check, Shield, Zap, Bug, Monitor, Apple, Lock, ExternalLink, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
const getDownloadUrl = (platform: 'windows' | 'macos') => `${API_BASE_URL}/download/${platform}`;

export default function App() {
  const [activeTab, setActiveTab] = useState<'windows' | 'macos'>('windows');
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: "Improved performance and faster PDF loading" },
    { icon: Shield, text: "Enhanced security fixes and vulnerability patches" },
    { icon: FileText, text: "Better PDF rendering with high-DPI support" },
    { icon: Bug, text: "Bug fixes and stability improvements" },
  ];

  const footerLinks = [
    { text: "Release Notes", href: "#" },
    { text: "System Requirements", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Support", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-sm">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">PDF Reader</h1>
            <p className="text-xs text-gray-500">Secure PDF Viewing & Annotation</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Update Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Update Header */}
          <div className="p-6 pb-4 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    Update Available
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  PDF Reader – Latest Update Available
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="font-mono">v4.2.1</span>
                  <span>•</span>
                  <span>Released January 15, 2026</span>
                </div>
              </div>
              
              {/* Animated Update Indicator */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <motion.div
                  animate={{ 
                    rotate: isAnimating ? 360 : 0,
                  }}
                  transition={{ 
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-blue-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Download className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-4">What's New</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Tabs */}
          <div className="p-6 bg-gray-50">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('windows')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'windows'
                    ? 'bg-white shadow-sm text-gray-900 border border-gray-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Monitor className="w-4 h-4" />
                Windows
              </button>
              <button
                onClick={() => setActiveTab('macos')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'macos'
                    ? 'bg-white shadow-sm text-gray-900 border border-gray-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Apple className="w-4 h-4" />
                macOS
              </button>
            </div>

            {/* Download Button */}
            <a
              href={getDownloadUrl(activeTab)}
              download
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md group"
            >
              <Download className="w-5 h-5" />
              Download for {activeTab === 'windows' ? 'Windows' : 'macOS'}
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <p className="text-center text-xs text-gray-500 mt-3">
              {activeTab === 'windows' 
                ? 'Compatible with Windows 10/11 • 64-bit required'
                : 'Compatible with macOS 12 Monterey and later'
              }
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-600" />
            Download Information
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">File Size</span>
                <span className="text-gray-900 font-medium">
                  {activeTab === 'windows' ? '125.4 MB' : '118.2 MB'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Installer Type</span>
                <span className="text-gray-900 font-medium">
                  {activeTab === 'windows' ? 'Windows Installer (.msi)' : 'macOS Package (.pkg)'}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <span className="text-gray-500 block mb-1">SHA-256 Checksum</span>
                <code className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700 font-mono break-all">
                  {activeTab === 'windows' 
                    ? 'a7f3b2c4d5e6f7a8b9c0d1e2f3a4b5c6...'
                    : 'b8g4c3d5e6f7g8a9b0c1d2e3f4a5b6c7...'
                  }
                </code>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Digitally signed by <strong className="text-gray-700">DocuView Inc.</strong> – Official installer</span>
          </div>
        </div>

        {/* Animated PDF Preview */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex items-center justify-center">
          <motion.div 
            className="relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-24 h-32 bg-white rounded-lg shadow-lg border border-gray-200 relative overflow-hidden">
              {/* Page fold */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100 rounded-bl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-l border-b border-gray-200 rounded-bl-lg bg-gradient-to-br from-gray-50 to-gray-100" />
              
              {/* Content lines */}
              <div className="p-3 pt-8 space-y-2">
                <motion.div 
                  className="h-1.5 bg-gray-200 rounded-full"
                  animate={{ width: ['60%', '80%', '60%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="h-1.5 bg-gray-100 rounded-full w-full" />
                <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
                <div className="h-1.5 bg-gray-100 rounded-full w-5/6" />
                <div className="h-1.5 bg-gray-100 rounded-full w-2/3" />
              </div>
              
              {/* PDF icon */}
              <div className="absolute bottom-2 right-2">
                <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white">PDF</span>
                </div>
              </div>
            </div>
            
            {/* Update badge */}
            <motion.div 
              className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Check className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                >
                  {link.text}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              © 2026 DocuView Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
