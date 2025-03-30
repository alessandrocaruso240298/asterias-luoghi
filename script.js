function openModal(imgElement) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    var modalImg = document.createElement('img');
    modalImg.src = imgElement.src;
    modalImg.style.width = '90vw';
    modalImg.style.height = 'auto';
    modalImg.style.maxHeight = '90vh';
    modalImg.style.borderRadius = '10px';
    modalImg.style.boxShadow = '0px 0px 15px rgba(255,255,255,0.5)';
    modalImg.style.objectFit = 'contain';

    modal.addEventListener('click', function () {
        document.body.removeChild(modal);
    });

    modal.appendChild(modalImg);
    document.body.appendChild(modal);
}
