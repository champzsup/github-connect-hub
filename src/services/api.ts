export async function downloadApp(os: 'windows' | 'macos'): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/download/${os}`);

  if (!response.ok) {
    throw new Error('Download failed');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = os === 'windows'
    ? 'app-windows.exe'
    : 'app-macos.dmg';

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}
