import { FileWarning, Download, RefreshCw, ArrowLeft, Monitor,  Apple  } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { useState, useEffect } from "react";

type View = "update" | "platform" | "install";
type Platform = "windows" | "macos" | null;

export default function App() {
  const [view, setView] = useState<View>("update");
  const [platform, setPlatform] = useState<Platform>(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [updateComplete, setUpdateComplete] = useState(false);

  // ---------------- Update simulation ----------------
  useEffect(() => {
    if (isUpdating && progress < 100) {
      const timer = setTimeout(() => {
        const increment = Math.random() * 15 + 5;
        setProgress((prev: number) => Math.min(prev + increment, 100));

      }, 300);

      return () => clearTimeout(timer);
    }

    if (isUpdating && progress >= 100) {
      setUpdateComplete(true);
      setIsUpdating(false);
    }
  }, [isUpdating, progress]);

  const startUpdate = (selectedPlatform: Platform) => {
    setPlatform(selectedPlatform);
    setView("update");
    setProgress(0);
    setUpdateComplete(false);
    setIsUpdating(true);

    console.log(`Starting download for ${selectedPlatform}`);
  };

  // ------------------------------------------------------------------
  // PLATFORM SELECTION PAGE
  // ------------------------------------------------------------------
  if (view === "platform") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <Card className="max-w-lg w-full p-8 shadow-xl text-center space-y-6">
          <Button
            variant="ghost"
            className="absolute left-4 top-4"
            onClick={() => setView("update")}
          >
            <ArrowLeft className="size-4 mr-2" />
            Back
          </Button>

          <h1 className="text-slate-900">Choose your platform</h1>
          <p className="text-slate-600">
            Select the operating system you want to download PDF Reader for.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <Button
              size="lg"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-400/90 to-red-400/90 text-white hover:from-orange-500 hover:to-red-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out"
              onClick={() => startUpdate("windows")}
            >
              <Monitor className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              Download for Windows
            </Button>

            <Button
              size="lg"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-400/90 to-red-400/90 text-white hover:from-orange-500 hover:to-red-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out"
              onClick={() => startUpdate("macos")}
            >
              <Apple className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              Download for macOS
            </Button>
          </div>       
        </Card>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // INSTALL GUIDE PAGE (unchanged conceptually)
  // ------------------------------------------------------------------
  if (view === "install") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <Card className="max-w-3xl w-full p-8 shadow-xl space-y-6">
          <Button variant="ghost" onClick={() => setView("update")}>
            <ArrowLeft className="size-4 mr-2" />
            Back to Update Page
          </Button>

          <h1>Installation Guide</h1>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Download the installer</li>
            <li>Open your Downloads folder</li>
            <li>Run the installer</li>
            <li>Follow the setup wizard</li>
            <li>Restart if prompted</li>
          </ol>
        </Card>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // UPDATE PAGE (NOW PROPERLY CENTERED)
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-6">
              <FileWarning className="size-12 text-white" />
            </div>
          </div>

          <h1 className="text-slate-900">Update Required</h1>
          <p className="text-slate-600 max-w-md">
            A new version of PDF Reader is available. Please update to continue.
          </p>

          {/* Features */}
          <div className="w-full max-w-md bg-slate-50 rounded-lg p-6 space-y-3">
            {[
              "Enhanced security and performance improvements",
              "Improved compatibility with modern PDF formats",
              "Bug fixes and stability enhancements"
            ].map(text => (
              <div key={text} className="flex gap-3">
                <RefreshCw className="size-5 text-orange-500 mt-0.5" />
                <span className="text-slate-600">{text}</span>
              </div>
            ))}
          </div>

          {/* Progress */}
          {(isUpdating || updateComplete) && (
            <div className="w-full max-w-md space-y-2">
              <div className="flex justify-between text-sm">
                <span>{updateComplete ? "Update Complete!" : "Downloading..."}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
              {updateComplete && (
                <p className="text-green-600 text-sm">
                  Restart the application to finish updating.
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Button
              size="lg"
              className="flex-1 bg-gradient-to-r from-orange-400/100 to-red-400/100 hover:from-orange-500 hover:to-red-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => setView("platform")}
              disabled={isUpdating}
            >
              <Download className="size-5 mr-2" />
              {updateComplete ? "Restart Now" : "Update Now"}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="flex-1"
              onClick={() => setView("install")}
              disabled={isUpdating}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
