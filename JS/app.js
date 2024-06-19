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
dropDownBtns.forEach(function (dropDownBtn) {
  dropDownBtn.addEventListener('click', function () {
    if (dropDownBtn.classList.contains('dropdown-btn-samaritans')) {
      if (dropDownContentSamaritans.classList.contains('dropdown-content-show')) {
        dropDownContentSamaritans.classList.add('dropdown-content-hide');
        dropDownContentSamaritans.classList.remove('dropdown-content-show');
      } else {
        dropDownContentSamaritans.classList.remove('dropdown-content-hide');
        dropDownContentSamaritans.classList.add('dropdown-content-show');
      }
    } else if (dropDownBtn.classList.contains('dropdown-btn-mind')) {
      if (dropDownContentMind.classList.contains('dropdown-content-show')) {
        dropDownContentMind.classList.add('dropdown-content-hide');
        dropDownContentMind.classList.remove('dropdown-content-show');
      } else {
        dropDownContentMind.classList.remove('dropdown-content-hide');
        dropDownContentMind.classList.add('dropdown-content-show');
      }
    } else if (dropDownBtn.classList.contains('dropdown-btn-shout')) {
      if (dropDownContentShout.classList.contains('dropdown-content-show')) {
        dropDownContentShout.classList.add('dropdown-content-hide');
        dropDownContentShout.classList.remove('dropdown-content-show');
      } else {
        dropDownContentShout.classList.remove('dropdown-content-hide');
        dropDownContentShout.classList.add('dropdown-content-show');
      }
    }
  });
});
