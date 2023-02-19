// Get the video player element
const video = document.querySelector('video');

// Create a function to calculate the estimated end time
function calculateEndTime() {
  // Get the current time and duration of the video
  const currentTime = video.currentTime;
  const duration = video.duration;

  // Calculate the remaining time in the video
  const remainingTime = duration - currentTime;

  // Create a new Date object with the current time
  const currentTimeDate = new Date();

  // Add the remaining time in milliseconds to the current time
  currentTimeDate.setSeconds(currentTimeDate.getSeconds() + remainingTime);

  // Format the date as a string in the format "hh:mm:ss"
  const endTimeString = currentTimeDate.toLocaleTimeString('en-US', {hour12: false});

  return endTimeString;
}

let endTimeElement;

function updateSeekBar() {
  // Get the seek bar element
  const seekBar = document.querySelector('.ytp-progress-bar-container');

  // If the end time element already exists, update its text content and return
  if (endTimeElement) {
    endTimeElement.textContent = `Ends at ${calculateEndTime()}`;
    return;
  }

  // Create a new span element to hold the estimated end time
  endTimeElement = document.createElement('span');
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



// Call the updateSeekBar function every second
setInterval(updateSeekBar, 1000);
