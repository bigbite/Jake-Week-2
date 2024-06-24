//dropdown variables
const dropDownBtns = document.querySelectorAll('.dropdown-btn');
const dropDownContentSamaritans = document.querySelector('#dropdown-content-samaritans');
const dropDownContentMind = document.querySelector('#dropdown-content-mind');
const dropDownContentShout = document.querySelector('#dropdown-content-shout');
/*
changed the functionality of the javascript to incorporate a drop down arrow easier
but also to clean up the css classes slightly

dropDownBtns.forEach(function (dropDownBtn) {
  dropDownBtn.addEventListener('click', function () {
    if (dropDownBtn.classList.contains('dropdown-btn-samaritans')) {
      dropDownContentSamaritans.classList.toggle('dropdown-content-hide');
    } else if (dropDownBtn.classList.contains('dropdown-btn-mind')) {
      dropDownContentMind.classList.toggle('dropdown-content-hide');
    } else if (dropDownBtn.classList.contains('dropdown-btn-shout')) {
      dropDownContentShout.classList.toggle('dropdown-content-hide');
    }
  });
});
*/

function handleDropdownClick(dropDownContent) {
  if (dropDownContent.classList.contains('dropdown-content-show')) {
    dropDownContent.classList.add('dropdown-content-hide');
    dropDownContent.classList.remove('dropdown-content-show');
  } else {
    dropDownContent.classList.remove('dropdown-content-hide');
    dropDownContent.classList.add('dropdown-content-show');
  }
}

dropDownBtns.forEach(function (dropDownBtn) {
  dropDownBtn.addEventListener('click', function () {
    if (dropDownBtn.classList.contains('dropdown-btn-samaritans')) {
      handleDropdownClick(dropDownContentSamaritans);
    } else if (dropDownBtn.classList.contains('dropdown-btn-mind')) {
      handleDropdownClick(dropDownContentMind);
    } else if (dropDownBtn.classList.contains('dropdown-btn-shout')) {
      handleDropdownClick(dropDownContentShout);
    }
  });
});
