function downloadFiles(fileUrls) {
  // Map each file URL to a download promise
  const downloadPromises = fileUrls.map(url => downloadFile(url));

  // Use Promise.all() to wait for all download promises to resolve
  return Promise.all(downloadPromises);
}

// Function to download a file using a promise
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(`Failed to download file: ${xhr.statusText}`);
      }
    };
    xhr.onerror = function () {
      reject('Network error occurred while trying to download the file');
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}

// Example usage:
const fileUrls = [
  'https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp',
  'https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp',
  'https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp'
];

downloadFiles(fileUrls)
  .then(blobs => {
    // Handle downloaded files
    blobs.forEach((blob, index) => {
      // Use the downloaded blob, for example:
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `downloaded_file_${index + 1}.txt`;
      link.click();
    });
  })
  .catch(error => {
    // Handle any errors that occur during the download
    console.error(error);
  });
