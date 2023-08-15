chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  let newFilename;

  // Depending on the file type, you can change the directory
  if (
    downloadItem.filename.endsWith(".jpg") ||
    downloadItem.filename.endsWith(".png")
  ) {
    newFilename = "images/" + downloadItem.filename;
  } else if (downloadItem.filename.endsWith(".mp3")) {
    newFilename = "music/" + downloadItem.filename;
  } else {
    newFilename = downloadItem.filename; // Default path for other file types
  }

  suggest({
    filename: newFilename,
  });
});
