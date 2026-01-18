// Configuration
const CONFIG = {
    // Set your download URL here - this is where the installer file is hosted
    downloadUrl: '', // Example: 'https://yourserver.com/pdf-reader-installer.exe'
    simulateDownload: true // Set to false when you have a real download URL
};

// DOM Elements
const updateBtn = document.getElementById('updateBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const progressSection = document.getElementById('progressSection');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');
const progressStatus = document.getElementById('progressStatus');
const successMessage = document.getElementById('successMessage');
const downloadUrlInput = document.getElementById('downloadUrl');

// State
let isUpdating = false;
let progress = 0;
let updateComplete = false;

// Initialize download URL from input or config
if (downloadUrlInput) {
    downloadUrlInput.value = CONFIG.downloadUrl;
    
    // Update config when URL changes
    downloadUrlInput.addEventListener('input', (e) => {
        CONFIG.downloadUrl = e.target.value;
        CONFIG.simulateDownload = !e.target.value; // Auto-detect if we should simulate
    });
}

// Update button click handler
updateBtn.addEventListener('click', () => {
    if (updateComplete) {
        restartApplication();
    } else if (!isUpdating) {
        startUpdate();
    }
});

// Start update process
function startUpdate() {
    isUpdating = true;
    progress = 0;
    updateComplete = false;
    
    // Show progress section
    progressSection.style.display = 'block';
    successMessage.style.display = 'none';
    
    // Disable buttons
    updateBtn.disabled = true;
    learnMoreBtn.disabled = true;
    
    // Update button text
    updateBtn.innerHTML = `
        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
        </svg>
        Updating...
    `;
    
    if (CONFIG.simulateDownload) {
        // Simulate download progress
        simulateProgress();
    } else {
        // Real download
        initiateRealDownload();
    }
}

// Simulate download progress
function simulateProgress() {
    const interval = setInterval(() => {
        if (progress < 100) {
            // Simulate varying download speeds
            const increment = Math.random() * 15 + 5;
            progress = Math.min(progress + increment, 100);
            updateProgressUI();
        } else {
            clearInterval(interval);
            completeUpdate();
        }
    }, 300);
}

// Initiate real file download
function initiateRealDownload() {
    if (!CONFIG.downloadUrl) {
        alert('Please configure the download URL in the Configuration section.');
        resetUpdateState();
        return;
    }

    // Create a hidden iframe or anchor to trigger download
    const link = document.createElement('a');
    link.href = CONFIG.downloadUrl;
    link.download = CONFIG.downloadUrl.split('/').pop() || 'pdf-reader-installer.exe';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Since we can't track real download progress in browser,
    // simulate progress or just show completion message
    simulateProgress();
}

// Update progress UI
function updateProgressUI() {
    const roundedProgress = Math.round(progress);
    progressBar.style.width = `${roundedProgress}%`;
    progressPercent.textContent = `${roundedProgress}%`;
    
    // Update status text based on progress
    if (progress < 30) {
        progressStatus.textContent = 'Downloading update...';
    } else if (progress < 70) {
        progressStatus.textContent = 'Extracting files...';
    } else if (progress < 100) {
        progressStatus.textContent = 'Installing update...';
    }
}

// Complete update
function completeUpdate() {
    updateComplete = true;
    progressStatus.textContent = 'Update Complete!';
    successMessage.style.display = 'block';
    
    // Update button
    updateBtn.disabled = false;
    updateBtn.innerHTML = `
        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
        </svg>
        Restart Now
    `;
    
    // Re-enable learn more button
    learnMoreBtn.disabled = false;
}

// Restart application (or show instructions)
function restartApplication() {
    alert('Please close this window and restart the PDF Reader application to apply the update.');
    // In a real application, this might trigger an actual restart
    // For now, just reset the state
    setTimeout(() => {
        resetUpdateState();
        progressSection.style.display = 'none';
    }, 2000);
}

// Reset update state
function resetUpdateState() {
    isUpdating = false;
    progress = 0;
    updateComplete = false;
    
    updateBtn.disabled = false;
    learnMoreBtn.disabled = false;
    
    updateBtn.innerHTML = `
        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Update Now
    `;
    
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';
}

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !isUpdating) {
        updateBtn.click();
    }
});

console.log('PDF Reader Update Page Loaded');
console.log('To configure the download URL, expand the Configuration section or edit CONFIG.downloadUrl in script.js');
