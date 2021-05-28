const shareButton = document.getElementById('share_icon');
const shareButtonClose = document.getElementById('share_icon_close');
const socialElement = document.getElementById('social');

shareButton.addEventListener('click', e => {
  socialElement.classList.remove('hidden');
  socialElement.classList.remove('hide');
  socialElement.classList.add('show');
  socialElement.classList.add('visible');

  shareButtonClose.classList.add('visible');
});

shareButtonClose.addEventListener('click', e => {
  socialElement.classList.add('hide');
  socialElement.classList.remove('show');
  socialElement.classList.remove('visible');

  shareButtonClose.classList.remove('visible');
});
