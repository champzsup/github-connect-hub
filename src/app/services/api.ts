// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Types
export type Platform = 'windows' | 'macos';

export interface VersionInfo {
  version: string;
  releaseDate: string;
  changelog: string[];
}

export interface DownloadInfo {
  platform: Platform;
  fileSize: string;
  installerType: string;
  checksum: string;
  compatibility: string;
}

export interface AppInfo {
  name: string;
  subtitle: string;
  publisher: string;
  currentVersion: VersionInfo;
  downloads: Record<Platform, DownloadInfo>;
}

// API Endpoints
export const endpoints = {
  download: (platform: Platform) => `${API_BASE_URL}/download/${platform}`,
  version: () => `${API_BASE_URL}/version`,
  changelog: () => `${API_BASE_URL}/changelog`,
  checksum: (platform: Platform) => `${API_BASE_URL}/checksum/${platform}`,
} as const;

// API Functions
export const api = {
  /**
   * Get the download URL for a specific platform
   */
  getDownloadUrl: (platform: Platform): string => {
    return endpoints.download(platform);
  },

  /**
   * Fetch version information from the API
   */
  fetchVersionInfo: async (): Promise<VersionInfo> => {
    const response = await fetch(endpoints.version());
    if (!response.ok) {
      throw new Error(`Failed to fetch version info: ${response.statusText}`);
    }
    return response.json();
  },

  /**
   * Fetch changelog from the API
   */
  fetchChangelog: async (): Promise<string[]> => {
    const response = await fetch(endpoints.changelog());
    if (!response.ok) {
      throw new Error(`Failed to fetch changelog: ${response.statusText}`);
    }
    return response.json();
  },

  /**
   * Fetch checksum for a specific platform download
   */
  fetchChecksum: async (platform: Platform): Promise<string> => {
    const response = await fetch(endpoints.checksum(platform));
    if (!response.ok) {
      throw new Error(`Failed to fetch checksum: ${response.statusText}`);
    }
    const data = await response.json();
    return data.checksum;
  },

  /**
   * Trigger file download for a specific platform
   */
  downloadFile: (platform: Platform): void => {
    const link = document.createElement('a');
    link.href = endpoints.download(platform);
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
};

// Static App Data (can be replaced with API calls)
export const appInfo: AppInfo = {
  name: 'PDF Reader',
  subtitle: 'Secure PDF Viewing & Annotation',
  publisher: 'DocuView Inc.',
  currentVersion: {
    version: 'v4.2.1',
    releaseDate: 'January 15, 2026',
    changelog: [
      'Improved performance and faster PDF loading',
      'Enhanced security fixes and vulnerability patches',
      'Better PDF rendering with high-DPI support',
      'Bug fixes and stability improvements',
    ],
  },
  downloads: {
    windows: {
      platform: 'windows',
      fileSize: '125.4 MB',
      installerType: 'Windows Installer (.msi)',
      checksum: 'a7f3b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
      compatibility: 'Compatible with Windows 10/11 • 64-bit required',
    },
    macos: {
      platform: 'macos',
      fileSize: '118.2 MB',
      installerType: 'macOS Package (.pkg)',
      checksum: 'b8g4c3d5e6f7g8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3',
      compatibility: 'Compatible with macOS 12 Monterey and later',
    },
  },
};

export default api;
