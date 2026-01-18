import { FileWarning, Download, RefreshCw } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { useState, useEffect } from "react";

export default function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  useEffect(() => {
    if (isUpdating && progress < 100) {
      const timer = setTimeout(() => {
        // Simulate download progress with varying speeds
        const increment = Math.random() * 15 + 5;
        setProgress(prev => Math.min(prev + increment, 100));
      }, 300);
      return () => clearTimeout(timer);
    } else if (progress >= 100 && isUpdating) {
      setUpdateComplete(true);
    }
  }, [isUpdating, progress]);

  const handleUpdate = () => {
    // In a real application, this would trigger the update process
    setIsUpdating(true);
    setProgress(0);
    setUpdateComplete(false);
    console.log("Update initiated");
  };

  const handleLearnMore = () => {
    // Navigate to update documentation
    console.log("Learn more clicked");
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-6">
              <FileWarning className="size-12 text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-slate-900">
              Update Required
            </h1>
            <p className="text-slate-600 max-w-md mx-auto">
              A new version of PDF Reader is available. Please update to the latest version to continue opening and viewing PDF files.
            </p>
          </div>

          {/* Features list */}
          <div className="w-full max-w-md bg-slate-50 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              What's new in this update:
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-start gap-3">
                <RefreshCw className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Enhanced security and performance improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCw className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Improved compatibility with modern PDF formats</span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCw className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Bug fixes and stability enhancements</span>
              </li>
            </ul>
          </div>

          {/* Progress Indicator */}
          {isUpdating && (
            <div className="w-full max-w-md space-y-3 py-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700">
                  {updateComplete ? "Update Complete!" : "Downloading update..."}
                </span>
                <span className="text-slate-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              {updateComplete && (
                <p className="text-green-600 text-sm">
                  Update successfully installed. Please restart the application.
                </p>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-2">
            <Button 
              onClick={handleUpdate}
              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              size="lg"
              disabled={isUpdating}
            >
              <Download className="size-5 mr-2" />
              {isUpdating ? (updateComplete ? "Restart Now" : "Updating...") : "Update Now"}
            </Button>
            <Button 
              onClick={handleLearnMore}
              variant="outline"
              className="flex-1"
              size="lg"
              disabled={isUpdating && !updateComplete}
            >
              Learn More
            </Button>
          </div>

          {/* Footer note */}
          <p className="text-slate-500 text-sm pt-4">
            This update is required to maintain security and compatibility standards.
          </p>
        </div>
      </Card>
    </div>
  );
}