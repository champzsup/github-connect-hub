import React from 'react';
import { AlertCircle, Download, RefreshCw, Moon, Sun, Loader2, ChevronRight, CheckCircle, X } from 'lucide-react';

type Page = 'loading' | 'update' | 'installation' | 'checking';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>('loading');
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(true);
  const [showOutdatedDialog, setShowOutdatedDialog] = React.useState(false);

  // Auto-navigate from loading to update page after 7 seconds
  React.useEffect(() => {
    if (currentPage === 'loading') {
      const timer = setTimeout(() => {
        setCurrentPage('update'); 
      }, 7000);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // Handle checking page timer
  React.useEffect(() => {
    if (currentPage === 'checking') {
      setIsChecking(true);
      setShowOutdatedDialog(false);
      const timer = setTimeout(() => {
        setIsChecking(false);
        setShowOutdatedDialog(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const goToInstallation = () => {
    setCurrentPage('installation');
  };

  const goToUpdate = () => {
    setCurrentPage('update');
  };

  const checkForUpdate = () => {
    setCurrentPage('checking');
  };


  // Theme classes
  const bgClass = isDarkMode ? 'bg-[#1f1f1f]' : 'bg-white';
  const textClass = isDarkMode ? 'text-[#ffffff]' : 'text-[#252423]';
  const textSecondaryClass = isDarkMode ? 'text-[#D1D1D1]' : 'text-[#605E5C]';
  const headerBgClass = isDarkMode ? 'bg-[#2d2d30]' : 'bg-[#464775]';
  const footerBgClass = isDarkMode ? 'bg-[#252526]' : 'bg-[#F3F2F1]';
  const cardBgClass = isDarkMode ? 'bg-[#2d2d30]' : 'bg-[#F3F2F1]';
  const borderClass = isDarkMode ? 'border-[#3e3e42]' : 'border-[#EDEBE9]';
  const alertBgClass = isDarkMode ? 'bg-[#433519]' : 'bg-[#FFF4CE]';
  const alertBorderClass = isDarkMode ? 'border-[#5c4a1f]' : 'border-[#F9E9B1]';

  return (
    <div className={`min-h-screen ${bgClass} flex flex-col transition-colors duration-300`}>
      {/* Theme Toggle Button - Fixed Position */}
      <button
        onClick={toggleTheme}
        className={`fixed top-20 right-6 z-50 p-3 rounded-full ${cardBgClass} shadow-sm hover:shadow-md transition-all`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? ( 
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-[#6264A7]" />
        )}
      </button>

      {/* Header */}
      <header className={`${headerBgClass} px-6 py-4`}>
        <div className="flex items-center gap-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" stroke-width="1" opacity="0.9333333333333333" d="M 37.5 8 L 41 9 L 42 12.5 L 41 15 L 37.5 16 L 35 15 L 34 11.5 L 35 9 L 37.5 8 Z"/>
          <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" stroke-width="1" opacity="0.9333333333333333" d="M 5.5 14 L 12 14.5 L 4 21.5 Q 2.5 15.5 5.5 14 Z"/>
          <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" stroke-width="1" opacity="0.9333333333333333" d="M 24.5 20 L 25 32.5 L 24 32.5 L 24.5 20 Z"/>
          <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" stroke-width="1" opacity="0.9333333333333333" d="M 34.5 20 L 42.5 20 L 44 21.5 Q 46.1 31.6 41.5 35 L 36.5 36 L 35 34.5 L 35 21.5 L 34.5 20 Z"/>

          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 21.5 5 L 19.5 8 L 21.5 5 Z"/>
          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 28.5 5 L 30.5 8 L 28.5 5 Z"/>
          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 30.5 14 L 28.5 17 L 30.5 14 Z"/>
          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 41.5 14 L 40.5 16 L 41.5 14 Z"/>
          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 34.5 35 L 35 37.5 L 33 41 L 27.5 43 L 27.5 42 L 29.5 42 L 34 37.5 L 34.5 35 Z"/>
          <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" stroke-width="1" opacity="0.3568627450980392" d="M 16.5 38 Q 17.9 42.1 23 42.5 L 20.5 43 L 16.5 38 Z"/>

          <path fill="rgb(73,80,184)" stroke="rgb(73,80,184)" stroke-width="1" opacity="0.6862745098039216" d="M 35.5 8 L 37 8.5 L 35 9 L 34.5 11 L 34 9.5 L 35.5 8 Z"/>

          <path fill="rgb(74,82,184)" stroke="rgb(74,82,184)" stroke-width="1" opacity="1" d="M 12.5 14 L 22.5 14 L 24 15.5 L 24 19.5 L 15.5 29 L 15 21 Q 19.1 22.3 18 19 L 9.5 19 L 9 21 L 13 21 L 13 28.5 L 14 29.5 L 9.5 34 Q 5 35 4 32.5 L 4 22.5 L 12.5 14 Z"/>
          <path fill="rgb(74,82,184)" stroke="rgb(74,82,184)" stroke-width="1" opacity="1" d="M 16.5 34 L 22 34.5 L 16.5 35 L 16.5 34 Z"/>

          <path fill="rgb(64,71,176)" stroke="rgb(64,71,176)" stroke-width="1" opacity="1" d="M 23.5 20 L 24 32.5 L 22.5 34 L 10.5 34 L 14.5 29 Q 16.8 29.8 16 27.5 L 23.5 20 Z"/>

          <path fill="rgb(245,246,251)" stroke="rgb(245,246,251)" stroke-width="1" opacity="1" d="M 10 19 L 17.5 19 L 18 21 L 15 21 L 15 28.5 L 13 29 L 13 21.5 L 10 21 L 10 19 Z"/>

          <path fill="rgb(122,130,233)" stroke="rgb(122,130,233)" stroke-width="1" opacity="0.9921568627450981" d="M 22.5 5 Q 29.8 3.8 31 8.5 Q 32.3 15.8 27.5 17 Q 23.1 18.5 24 15.5 Q 22.8 13 19 14 Q 17.5 6.8 22.5 5 Z"/>
          <path fill="rgb(122,130,233)" stroke="rgb(122,130,233)" stroke-width="1" opacity="0.9921568627450981" d="M 25 20 L 33.5 20 L 35 21.5 Q 37.8 37.3 29.5 42 L 23.5 43 L 16 37.5 L 16 35 L 23.5 35 L 24 33.5 L 25 32.5 L 25 20 Z"/>
        </svg>


          <span className="text-white font-semibold">Microsoft Teams</span>
        </div>
      </header>

      {/* Loading Page */}
      {currentPage === 'loading' && (
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="mb-8">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                {/* Background */}
                <rect
                  width="80"
                  height="80"
                  rx="6"
                  fill={isDarkMode ? "#6264A7" : "#464775"}
                />

                {/* Centered icon */}
                <g transform="translate(16 14) scale(1.1)">
                  <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" strokeWidth="1" opacity="0.9333333333333333" d="M 37.5 8 L 41 9 L 42 12.5 L 41 15 L 37.5 16 L 35 15 L 34 11.5 L 35 9 L 37.5 8 Z"/>
                  <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" strokeWidth="1" opacity="0.9333333333333333" d="M 5.5 14 L 12 14.5 L 4 21.5 Q 2.5 15.5 5.5 14 Z"/>
                  <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" strokeWidth="1" opacity="0.9333333333333333" d="M 24.5 20 L 25 32.5 L 24 32.5 L 24.5 20 Z"/>
                  <path fill="rgb(82,91,198)" stroke="rgb(82,91,198)" strokeWidth="1" opacity="0.9333333333333333" d="M 34.5 20 L 42.5 20 L 44 21.5 Q 46.1 31.6 41.5 35 L 36.5 36 L 35 34.5 L 35 21.5 L 34.5 20 Z"/>

                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 21.5 5 L 19.5 8 L 21.5 5 Z"/>
                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 28.5 5 L 30.5 8 L 28.5 5 Z"/>
                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 30.5 14 L 28.5 17 L 30.5 14 Z"/>
                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 41.5 14 L 40.5 16 L 41.5 14 Z"/>
                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 34.5 35 L 35 37.5 L 33 41 L 27.5 43 L 27.5 42 L 29.5 42 L 34 37.5 L 34.5 35 Z"/>
                  <path fill="rgb(116,136,234)" stroke="rgb(116,136,234)" strokeWidth="1" opacity="0.3568627450980392" d="M 16.5 38 Q 17.9 42.1 23 42.5 L 20.5 43 L 16.5 38 Z"/>

                  <path fill="rgb(73,80,184)" stroke="rgb(73,80,184)" strokeWidth="1" opacity="0.6862745098039216" d="M 35.5 8 L 37 8.5 L 35 9 L 34.5 11 L 34 9.5 L 35.5 8 Z"/>

                  <path fill="rgb(74,82,184)" stroke="rgb(74,82,184)" strokeWidth="1" opacity="1" d="M 12.5 14 L 22.5 14 L 24 15.5 L 24 19.5 L 15.5 29 L 15 21 Q 19.1 22.3 18 19 L 9.5 19 L 9 21 L 13 21 L 13 28.5 L 14 29.5 L 9.5 34 Q 5 35 4 32.5 L 4 22.5 L 12.5 14 Z"/>
                  <path fill="rgb(74,82,184)" stroke="rgb(74,82,184)" strokeWidth="1" opacity="1" d="M 16.5 34 L 22 34.5 L 16.5 35 L 16.5 34 Z"/>

                  <path fill="rgb(64,71,176)" stroke="rgb(64,71,176)" strokeWidth="1" opacity="1" d="M 23.5 20 L 24 32.5 L 22.5 34 L 10.5 34 L 14.5 29 Q 16.8 29.8 16 27.5 L 23.5 20 Z"/>

                  <path fill="rgb(245,246,251)" stroke="rgb(245,246,251)" strokeWidth="1" opacity="1" d="M 10 19 L 17.5 19 L 18 21 L 15 21 L 15 28.5 L 13 29 L 13 21.5 L 10 21 L 10 19 Z"/>

                  <path fill="rgb(122,130,233)" stroke="rgb(122,130,233)" strokeWidth="1" opacity="0.9921568627450981" d="M 22.5 5 Q 29.8 3.8 31 8.5 Q 32.3 15.8 27.5 17 Q 23.1 18.5 24 15.5 Q 22.8 13 19 14 Q 17.5 6.8 22.5 5 Z"/>
                  <path fill="rgb(122,130,233)" stroke="rgb(122,130,233)" strokeWidth="1" opacity="0.9921568627450981" d="M 25 20 L 33.5 20 L 35 21.5 Q 37.8 37.3 29.5 42 L 23.5 43 L 16 37.5 L 16 35 L 23.5 35 L 24 33.5 L 25 32.5 L 25 20 Z"/>
                </g>
              </svg>
            </div>
            
            <h1 className={`text-2xl mb-6 ${textClass}`}>
              Connecting to your meeting...
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Loader2 className={`w-6 h-6 animate-spin ${isDarkMode ? 'text-[#6264A7]' : 'text-[#464775]'}`} />
              <span className={textSecondaryClass}>Please wait</span>
            </div>
            
            {/* Loading bar */}
            <div className={`w-64 h-1 mx-auto ${isDarkMode ? 'bg-[#3e3e42]' : 'bg-[#EDEBE9]'} rounded-full overflow-hidden`}>
              <div className="h-full bg-[#6264A7] animate-[loading_7s_ease-in-out] rounded-full"></div>
            </div>
          </div>
        </main>
      )}

      {/* Update Required Page */}
      {currentPage === 'update' && (
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-xl w-full">
            <div className="text-center mb-8">
              {/* Alert Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${cardBgClass} rounded-full mb-6 opacity-60`}>
                <AlertCircle className="w-8 h-8 text-[#D13438]" />
              </div>

              {/* Main Message */}
              <h1 className={`text-3xl mb-4 ${textClass}`}>
                Update required
              </h1>
              
              <p className={`${textSecondaryClass} mb-6 text-lg`}>
                Your version of Microsoft Teams is out of date. Please update to the latest version to join this meeting.
              </p>

              <div className={`${alertBgClass} border ${alertBorderClass} rounded px-4 py-3 mb-8 text-left`}>
                <p className={`text-sm ${textClass}`}>
                  <strong>Meeting in progress:</strong> You need to update Teams to join this ongoing meeting. The update will only take a few moments.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={goToInstallation}
                className="w-full bg-[#6264A7] hover:bg-[#5558a0] text-white py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-5 h-5" />
                Update Microsoft Teams
              </button>
              
              <button 
                onClick={checkForUpdate}
                className="w-full bg-transparent hover:bg-[#6264a71a] text-[#6264A7] py-3 px-6 rounded border border-[#6264A7] flex items-center justify-center gap-2 transition-colors">
                <RefreshCw className="w-5 h-5" />
                Check for updates
              </button>
            </div>

            {/* Additional Information */}
            <div className={`mt-8 pt-8 border-t ${borderClass}`}>
              <div className={`space-y-4 text-sm ${textSecondaryClass}`}>
                <div>
                  <h3 className={`font-semibold ${textClass} mb-2`}>Why do I need to update?</h3>
                  <p>
                    The meeting organizer is using features that require the latest version of Teams. Updating ensures you have access to all features and the best meeting experience.
                  </p>
                </div>
                
                <div>
                  <h3 className={`font-semibold ${textClass} mb-2`}>What's new in this version?</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Enhanced video and audio quality</li>
                    <li>Improved meeting reliability</li>
                    <li>New collaboration features</li>
                    <li>Security and performance updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center">
              <a href="#" className="text-sm text-[#6264A7] hover:underline">
                Need help updating?
              </a>
              <span className={`${isDarkMode ? 'text-[#6e6e6e]' : 'text-[#C8C6C4]'} mx-2`}>|</span>
              <a href="#" className="text-sm text-[#6264A7] hover:underline">
                Contact support
              </a>
            </div>
          </div>
        </main>
      )}

      {/* Installation Procedures Page */}
      {currentPage === 'installation' && (
        <main className="flex-1 px-4 py-12 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={goToUpdate}
              className="text-[#6264A7] hover:underline mb-6 flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to update page
            </button>

            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${cardBgClass} rounded-full mb-6`}>
                <Download className="w-8 h-8 text-[#6264A7]" />
              </div>
              <h1 className={`text-3xl mb-4 ${textClass}`}>
                Installation Guide
              </h1>
              <p className={textSecondaryClass}>
                Follow these steps to update Microsoft Teams and join your meeting
              </p>
            </div>

            {/* Installation Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Close Microsoft Teams
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      Make sure Teams is completely closed before updating. Right-click the Teams icon in your system tray and select "Quit".
                    </p>
                    <div className={`${isDarkMode ? 'bg-[#1f1f1f]' : 'bg-white'} border ${borderClass} rounded p-3 text-sm font-mono`}>
                      <p className={textSecondaryClass}>💡 Tip: Press <kbd className={`${cardBgClass} px-2 py-1 rounded`}>Ctrl + Q</kbd> to quit Teams quickly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Download the latest version for Windows
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      Click the button below to download the latest Microsoft Teams installer.
                    </p>
                    <button className="bg-[#6264A7] hover:bg-[#5558a0] text-white py-2 px-4 rounded flex items-center gap-2 transition-colors">
                      <Download className="w-4 h-4" />
                      Download Teams Installer for Windows
                    </button>
                    <p className={`${textSecondaryClass} text-sm mt-2`}>
                      File size: ~125 MB | Version: 25306.804
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Download the latest version for macos
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      Click the button below to download the latest Microsoft Teams installer.
                    </p>
                    <button className="bg-[#6264A7] hover:bg-[#5558a0] text-white py-2 px-4 rounded flex items-center gap-2 transition-colors">
                      <Download className="w-4 h-4" />
                      Download Teams Installer for MacOS
                    </button>
                    <p className={`${textSecondaryClass} text-sm mt-2`}>
                      File size: ~125 MB | Version: 25306.804
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Run the installer
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      Locate the downloaded file in your Downloads folder and double-click to run it.
                    </p>
                    <ul className={`${textSecondaryClass} space-y-2 text-sm`}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>The installer will automatically detect your current version</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Your settings and chat history will be preserved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No need to sign in again after update</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Wait for installation to complete
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      The update process typically takes 2-3 minutes. You'll see a progress bar during installation.
                    </p>
                    <div className={`${alertBgClass} border ${alertBorderClass} rounded px-3 py-2 text-sm`}>
                      <p className={textClass}>
                        ⚠️ <strong>Important:</strong> Don't close the installer window until the process is complete.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className={`${cardBgClass} rounded-lg p-6 border ${borderClass}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6264A7] text-white rounded-full flex items-center justify-center font-semibold">
                      6
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${textClass}`}>
                      Launch Teams and join your meeting
                    </h3>
                    <p className={`${textSecondaryClass} mb-3`}>
                      Once the installation is complete, Teams will automatically launch. You can now join your meeting.
                    </p>
                    <div className={`${isDarkMode ? 'bg-[#1f1f1f]' : 'bg-white'} border ${borderClass} rounded p-3`}>
                      <p className={`text-sm ${textSecondaryClass} mb-2`}>
                        <strong className={textClass}>Need the meeting link again?</strong>
                      </p>
                      <p className={`text-sm ${textSecondaryClass}`}>
                        Check your email invitation or calendar for the Teams meeting link.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting Section */}
            <div className={`mt-12 border-t ${borderClass} pt-8`}>
              <h2 className={`text-2xl font-semibold mb-6 ${textClass}`}>
                Troubleshooting
              </h2>
              
              <div className="space-y-4">
                <details className={`${cardBgClass} rounded-lg border ${borderClass} overflow-hidden`}>
                  <summary className={`cursor-pointer p-4 font-semibold ${textClass} hover:bg-opacity-80`}>
                    Installation failed or won't start
                  </summary>
                  <div className={`px-4 pb-4 ${textSecondaryClass} text-sm`}>
                    <p className="mb-2">Try these solutions:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Restart your computer and try again</li>
                      <li>Check if you have administrator rights</li>
                      <li>Temporarily disable antivirus software</li>
                      <li>Clear your Downloads folder and download again</li>
                    </ul>
                  </div>
                </details>

                <details className={`${cardBgClass} rounded-lg border ${borderClass} overflow-hidden`}>
                  <summary className={`cursor-pointer p-4 font-semibold ${textClass} hover:bg-opacity-80`}>
                    Teams won't open after update
                  </summary>
                  <div className={`px-4 pb-4 ${textSecondaryClass} text-sm`}>
                    <p className="mb-2">Follow these steps:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Restart your computer</li>
                      <li>Check Task Manager to ensure Teams isn't running in background</li>
                      <li>Clear Teams cache from %appdata%\Microsoft\Teams</li>
                      <li>Reinstall Teams if the problem persists</li>
                    </ul>
                  </div>
                </details>

                <details className={`${cardBgClass} rounded-lg border ${borderClass} overflow-hidden`}>
                  <summary className={`cursor-pointer p-4 font-semibold ${textClass} hover:bg-opacity-80`}>
                    Still getting "update required" message
                  </summary>
                  <div className={`px-4 pb-4 ${textSecondaryClass} text-sm`}>
                    <p className="mb-2">This might help:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Verify you downloaded the correct version (desktop, not web)</li>
                      <li>Check your version in Teams: Settings → About</li>
                      <li>Clear browser cache if using Teams web app</li>
                      <li>Contact your IT administrator</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-8 text-center">
              <p className={textSecondaryClass}>
                Still need help?
              </p>
              <div className="flex items-center justify-center gap-4 mt-3">
                <a href="#" className="text-[#6264A7] hover:underline">
                  Contact IT Support
                </a>
                <span className={isDarkMode ? 'text-[#6e6e6e]' : 'text-[#C8C6C4]'}>•</span>
                <a href="#" className="text-[#6264A7] hover:underline">
                  Visit Help Center
                </a>
                <span className={isDarkMode ? 'text-[#6e6e6e]' : 'text-[#C8C6C4]'}>•</span>
                <a href="#" className="text-[#6264A7] hover:underline">
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Checking for Updates Page */}
      {currentPage === 'checking' && (
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Spinning icon */}
            <div className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${isDarkMode ? 'border-[#6264A7]/20' : 'border-[#464775]/20'}`}>
              <RefreshCw 
                className={`h-8 w-8 ${isDarkMode ? 'text-[#6264A7]' : 'text-[#464775]'} ${isChecking ? 'animate-spin' : ''}`} 
              />
            </div>

            {/* Title */}
            <h1 className={`text-2xl font-semibold ${textClass}`}>
              {isChecking ? "Checking for updates..." : "Check complete"}
            </h1>

            {/* Subtitle */}
            <p className={`max-w-md text-sm ${textSecondaryClass}`}>
              {isChecking 
                ? "Please wait while we check for the latest version of Microsoft Teams."
                : "We found an update available for Microsoft Teams."
              }
            </p>
          </div>

          {/* Outdated Dialog */}
          {showOutdatedDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className={`${cardBgClass} rounded-lg p-6 max-w-md mx-4 shadow-xl border ${borderClass}`}>
                <div className="flex justify-end mb-2">
                  <button 
                    onClick={goToUpdate}
                    className={`p-1 rounded hover:${isDarkMode ? 'bg-[#3e3e42]' : 'bg-[#EDEBE9]'}`}
                  >
                    <X className={`w-5 h-5 ${textSecondaryClass}`} />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D13438]/20">
                    <AlertCircle className="h-7 w-7 text-[#D13438]" />
                  </div>
                  <h2 className={`text-xl font-semibold ${textClass}`}>Your Teams is out of date</h2>
                  <p className={`text-sm ${textSecondaryClass}`}>
                    A new version of Microsoft Teams is available. Please download the latest version to continue using all features.
                  </p>
                  <button 
                    onClick={goToInstallation}
                    className="mt-4 bg-[#6264A7] hover:bg-[#5558a0] text-white py-2 px-4 rounded flex items-center gap-2 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download Latest Teams
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className={`${footerBgClass} px-6 py-4 text-center`}>
        <p className={`text-xs ${textSecondaryClass}`}>
          © 2026 Microsoft Corporation. All rights reserved.
        </p>
      </footer>

      {/* Custom CSS for loading animation */}
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}