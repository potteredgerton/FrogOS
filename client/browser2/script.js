// JavaScript function to open a tab and display the content
function openTab(event, tabName) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  if (event) {
    event.currentTarget.className += ' active';
  }
}

// JavaScript function to open a new tab
function openNewTab(url) {
  // Create a new tab content element
  let newTab = document.createElement('div');
  newTab.id = 'newTab';
  newTab.className = 'tabcontent';

  // Create an iframe to display the website in the new tab
  let iframe = document.createElement('iframe');
  iframe.src = url;

  // Append the iframe to the new tab content element
  newTab.appendChild(iframe);

  // Append the new tab content element to the page
  document.body.appendChild(newTab);

  // Create a new tab button
  let newTabButton = document.createElement('button');
  newTabButton.className = 'tablinks';
  newTabButton.innerHTML = 'New Tab';
  newTabButton.onclick = function() {
    openTab(event, 'newTab');
  };

  // Append the new tab button to the tab bar
  document.getElementsByClassName('tab')[0].appendChild(newTabButton);

  // Open the new tab
  openTab(event, 'newTab');
}
