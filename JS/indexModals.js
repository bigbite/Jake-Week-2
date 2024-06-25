const modalBtns = document.querySelectorAll('.benefits-modal-btn');
const modalCloseBtns = document.querySelectorAll('.benefits-modal-close-btn');
const modalBackground = document.getElementById('modal-container');
const modalStigma = document.getElementById('modal-stigma');
const modalWellbeing = document.getElementById('modal-wellbeing');
const modalSupport = document.getElementById('modal-support');

function handleModalDisplay(modalContent) {
  if (modalContent.classList.contains('benefits-modal-hide')) {
    modalContent.classList.remove('benefits-modal-hide');
    modalContent.classList.add('benefits-modal-show');
    modalBackground.classList.add('benefits-modal-container-show');
    modalBackground.classList.remove('benefits-modal-container-hide');
  } else {
    modalContent.classList.add('benefits-modal-hide');
    modalContent.classList.remove('benefits-modal-show');
    modalBackground.classList.add('benefits-modal-container-hide');
    modalBackground.classList.remove('benefits-modal-container-show');
  }
}

modalBtns.forEach(function (modalBtn) {
  modalBtn.addEventListener('click', function () {
    if (modalBtn.classList.contains('modal-stigma')) {
      handleModalDisplay(modalStigma);
    } else if (modalBtn.classList.contains('modal-wellbeing')) {
      handleModalDisplay(modalWellbeing);
    } else {
      handleModalDisplay(modalSupport);
    }
  });
});

modalCloseBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener('click', function () {
    if (closeBtn.classList.contains('close-modal-stigma')) {
      handleModalDisplay(modalStigma);
    } else if (closeBtn.classList.contains('close-modal-wellbeing')) {
      handleModalDisplay(modalWellbeing);
    } else {
      handleModalDisplay(modalSupport);
    }
  });
});
