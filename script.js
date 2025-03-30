function openModal(imgElement) {
    // Creazione della finestra modale
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

    // Creazione dell'immagine ingrandita
    var modalImg = document.createElement('img');
    modalImg.src = imgElement.src;
    modalImg.style.width = '90vw'; // Larghezza adattabile
    modalImg.style.height = 'auto'; // Mantiene le proporzioni
    modalImg.style.maxHeight = '90vh'; // Non supera l'altezza dello schermo
    modalImg.style.borderRadius = '10px';
    modalImg.style.boxShadow = '0px 0px 15px rgba(255,255,255,0.5)';
    modalImg.style.objectFit = 'contain';

    // Chiudere la modale al tocco su mobile o clic su desktop
    modal.addEventListener('click', function () {
        document.body.removeChild(modal);
    });

    // Aggiunta dell'immagine alla finestra modale
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
}
