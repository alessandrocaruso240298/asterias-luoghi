function openModal(imgElement) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.onclick = function() {
      document.body.removeChild(modal);
    };

    var modalImg = document.createElement('img');
    modalImg.src = imgElement.src;
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';

    modal.appendChild(modalImg);
    document.body.appendChild(modal);
  }
