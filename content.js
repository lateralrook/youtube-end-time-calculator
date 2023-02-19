// Add an event listener for the load event
window.addEventListener('load', function() {
  // Define the updateSeekBar function
  function updateSeekBar() {
    // Get the seek bar element
    const seekBar = document.querySelector('.ytp-progress-bar-container');

    // Remove any existing end time element
    const existingEndTimeElement = document.querySelector('#estimated-end-time');
    if (existingEndTimeElement) {
      existingEndTimeElement.remove();
    }

    // Create a new span element to hold the estimated end time
    const endTimeElement = document.createElement('span');
    endTimeElement.id = 'estimated-end-time';
    endTimeElement.style.position = 'absolute';
    endTimeElement.style.left = '0';
    endTimeElement.style.bottom = '30px';
    endTimeElement.style.margin = '0 0 0 10px';
    endTimeElement.style.fontSize = '12px';
    endTimeElement.style.color = '#fff';
    endTimeElement.style.padding = '3px 5px';
    endTimeElement.style.borderRadius = '3px';
    endTimeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Calculate the estimated end time
    const estimatedEndTime = calculateEndTime();

    // Set the text content of the span element to the estimated end time
    endTimeElement.textContent = `Ends at ${estimatedEndTime}`;

    // Add the span element to the seek bar
    seekBar.appendChild(endTimeElement);
  }

  // Add event listeners for various video events
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.addEventListener('loadedmetadata', updateSeekBar);
    videoPlayer.addEventListener('seeking', updateSeekBar);
    videoPlayer.addEventListener('timeupdate', updateSeekBar);
  }
});

// Define the calculateEndTime function
function calculateEndTime() {
  // Get the video player element
  const videoPlayer = document.querySelector('video');

  // Get the video duration and current time
  const duration = videoPlayer.duration;
  const currentTime = videoPlayer.currentTime;

  // Calculate the estimated end time
  const estimatedEndTime = new Date(Date.now() + (duration - currentTime) * 1000).toLocaleTimeString();

  return estimatedEndTime;
}
