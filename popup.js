document.addEventListener("DOMContentLoaded", function() {
    const showAlertButton = document.getElementById("showAlert");
    const popup = document.getElementById("pop");
    const countdownDisplay = document.getElementById("countdownDisplay");
    let countdownInterval;
    let seconds = 0;
  
    showAlertButton.addEventListener("click", function() {      
      clearInterval(countdownInterval);
  
      popup.style.display = "none";
      countdownDisplay.style.display = "block";
      const mins = document.getElementById("mins").value;
      const c = mins * 60 * 1000;
      seconds = 0;
  
    //   countdownInterval = setInterval(function() {
    //     seconds++;
    //     if (seconds * 1000 >= c) {
    //       popup.style.display = "block";
    //       countdownDisplay.style.display = "none";
    //       clearInterval(countdownInterval);
    //     }
    //     countdownDisplay.textContent = `Seconds: ${seconds}`;
    //   }, 1000);

      countdownInterval = setInterval(function() {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        if (seconds * 1000 >= c) {
          popup.style.display = "block";
          countdownDisplay.style.display = "none";
          clearInterval(countdownInterval);
        }
      
        countdownDisplay.textContent = `Time: ${minutes} min ${remainingSeconds} sec`;
        
      }, 1000);
  
      setTimeout(function() {
        alert("Time is up! Set again?");
        clearInterval(countdownInterval);
      }, c);

    
    });
  });
  