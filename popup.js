// Function to play the notification sound
function playNotificationSound() {
  var audio = document.getElementById("notificationSound");
  if (audio) {
    audio.play();
  }
}

document.getElementById("openTabsButton").addEventListener("click", function () {
  var url = 'https://chat.openai.com/g/g-mlCY3phIA-docsgpt'; // Replace with your desired URL
  //var url = 'https://www.google.com'; // Replace with your desired URL
  var numberOfTabs = 100;
  var interval = 2000; // 2 seconds (in milliseconds)

  for (var i = numberOfTabs; i >= 0; i--) {
    setTimeout(function () {
      window.open(url, '_blank');
    }, i * interval); // Delay each tab open by 'i * interval' milliseconds
  }

  // Play the notification sound once all tabs are opened
  setTimeout(playNotificationSound, (numberOfTabs + 1) * interval); // Add some extra time for the last tab
});
