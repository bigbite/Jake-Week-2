//dropdown variables
const dropDownBtns = document.querySelectorAll('.dropdown-btn');
const dropDownContentSamaritans = document.querySelector('#dropdown-content-samaritans');
const dropDownContentMind = document.querySelector('#dropdown-content-mind');
const dropDownContentShout = document.querySelector('#dropdown-content-shout');

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
