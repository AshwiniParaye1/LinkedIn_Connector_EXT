// Define a function named connect
function connect() {
  // Get all the button elements on the page that have a <span> child element
  const buttons = document.querySelectorAll("button span")
  console.log("=====", buttons)
  
  // Loop through each button
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    
    // If the button has the text "Connect" in its <span> child element
    if (button.innerText === "Connect") {
      // Click the button to open the modal dialog to send a connection request
      button.click()
      
      // Set a timer to wait 2 seconds before looking for the "Send" button in the modal dialog
      setTimeout(() => {
        // Get all the elements with the class name "artdeco-button__text" on the page
        const modal = document.getElementsByClassName("artdeco-button__text")
        
        // Loop through each element with the class name "artdeco-button__text"
        for (let j = 0; j < modal.length; j++) {
          const element = modal[j]
          console.log("=====", element.innerText)
          
          // If the element has the text "Send"
          if (element.innerText === "Send") {
            // Click the "Send" button to send the connection request
            element.click()
            console.log("Request sent")
          }
        }
      }, 2000)
    }
  }
}

// Set an interval to run the connect function every 5 seconds
setInterval(connect, 5000)
