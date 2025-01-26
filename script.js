<script>
    // Toggle Gallery Visibility
    function toggleGallery() {
        const gallery = document.getElementById('gallery');
        if (gallery.style.display === 'flex') {
            gallery.style.display = 'none';
        } else {
            gallery.style.display = 'flex';
        }
    }

    // Lightbox Functionality
    document.addEventListener('DOMContentLoaded', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.createElement('img');
        const galleryImages = document.querySelectorAll('#gallery img');
        const closeBtn = document.getElementById('lightbox-close');

        lightbox.appendChild(lightboxImage);

        galleryImages.forEach((img) => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImage.src = img.src;
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    });
</script>

