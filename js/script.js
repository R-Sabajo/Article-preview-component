const shareButton = document.getElementById('share_icon');
const shareButtonClose = document.getElementById('share_icon_close');
const socialElement = document.getElementById('social');

// Function to show the social media icons & the share close button
shareButton.addEventListener('click', e => {
  socialElement.classList.remove('hidden');
  socialElement.classList.remove('hide');
  socialElement.classList.add('show');
  socialElement.classList.add('visible');

  shareButtonClose.classList.add('visible');
});

// Function to hide the social media icons & the share close button
shareButtonClose.addEventListener('click', e => {
  socialElement.classList.add('hide');
  socialElement.classList.remove('show');
  socialElement.classList.remove('visible');

  shareButtonClose.classList.remove('visible');
});
