// API Configuration
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Types
export type Platform = 'windows' | 'macos';

// API Endpoints
export const endpoints = {
  download: (os: Platform) => `${API_BASE_URL}/download/${os}`,
};

// Get direct download URL (for <a href> usage)
export function getDownloadUrl(os: Platform): string {
  return endpoints.download(os);
}

// Programmatic download (fetches binary and triggers download)
export async function downloadApp(os: Platform): Promise<void> {
  const response = await fetch(endpoints.download(os));

  if (!response.ok) {
    throw new Error('Download failed');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = os === 'windows' ? 'PDFReader-Setup.exe' : 'PDFReader.dmg';

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

// App metadata (static - not from API)
export const appInfo = {
  name: 'PDF Reader',
  version: 'v4.2.1',
  releaseDate: 'January 15, 2026',
  fileSize: {
    windows: '45.2 MB',
    macos: '52.8 MB',
  },
  features: [
    'Enhanced security and performance improvements',
    'Improved compatibility with modern PDF formats',
    'Bug fixes and stability enhancements',
  ],
};
