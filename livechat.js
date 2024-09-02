// Create and append <style> element
const style = document.createElement('style');
style.textContent = `

// backoffice code **************************************************************************************************

.content-header {
    background: #00000024;
}

@media (min-width: 768px) {
.col-sm-12 {
width: 50%;
}
}
.imgParent{
max-width: 100%;
display: flex;
flex-direction: row;
}

label[for="frontpathBE"], label[for="backpathBE"] {
    display: none;
}


// livechat code ************************************************************************************************

    ::selection {
        color: red;
        background: yellow;
    }
    @media (max-width: 1140px) {
        .stackable-layout.right-open:not(.left-focused) .css-qzdn6e {
            display: block;
        }
    }
    .css-qzdn6e, .css-7eezsw {
        background: #000;
    }
    .css-u4cohp, .css-10qrzi9, .css-14yrzxm, .css-xbdb0k {
        background: #065547;
    }
    .css-u4cohp:hover, .css-10qrzi9:hover, .css-14yrzxm:hover, .css-xbdb0k:hover {
        background: #006d5a;
    }
    .css-1hu008m, .css-16ranto, .css-y77xyk, .css-188ons9 {
        background: #5f104d;
    }
    .css-1hu008m:hover, .css-16ranto:hover, .css-y77xyk:hover, .css-188ons9:hover {
        background: #710358;
    }
    .css-1tonxl6 {
        background: #00adbd;
    }
    .css-1tonxl6:hover {
        background: #05d0e3;
    }
    .lc-Badge-module__badge--primary___8LRpp {
        font-size: 10px;
        width: 10px;
        height: 20px;
    }
    @keyframes blink {
        0%, 20%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .blink {
        animation: blink 3s infinite;
        font-size: 12px;
  border: 1px solid white;
    }
    .blink2 {
        animation: blink 0.3s infinite;
        font-size: 15px;
  border: 1px solid white;
    }
.css-19u39ph {
    border: 2px solid white;
}

`;
document.head.appendChild(style);

// Define color categories and sets
const colorSets = {
    yellow: new Set(['50s', '51s', '52s', '53s', '54s', '55s', '56s', '57s', '58s', '59s','1m']),
    orange: new Set(['2m']),
    red: new Set(['3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m'])
};

// Select divs and update their color
document.querySelectorAll('.lc-Typography-module__paragraph-sm___QIEFL').forEach(div => {
    const text = div.innerText.trim();
    div.style.color = '';
    div.style.outline = '';
    div.classList.remove('blink', 'blink2');

    if (colorSets.yellow.has(text)) {
        div.style.color = 'yellow';
    } else if (colorSets.orange.has(text)) {
        div.style.color = '#ee00ff';
    } else if (colorSets.red.has(text)) {
        div.style.color = '#ff645e';
        div.classList.add('blink2');
    } else {
        div.style.color = 'white';
    }
});


// backoffice code *********************************************************************

// NID verify image open in new tab
// JavaScript code to create and manage the lightbox

// Function to create and show the lightbox
function showLightbox() {
    // Check if a lightbox already exists
    let existingLightbox = document.getElementById('lightbox');
    if (existingLightbox) {
        document.body.removeChild(existingLightbox);
    }

    // Create the lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.zIndex = '2147483647'; // Max z-index value to ensure it's on top
    lightbox.style.left = '0';
    lightbox.style.top = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.cursor = 'pointer';

    // Create the lightbox image
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';

    // Set the image source to the clicked image source
    lightboxImg.src = this.src;

    // Add the image to the lightbox
    lightbox.appendChild(lightboxImg);

    // Create and add the close button
    const closeBtn = document.createElement('span');
    closeBtn.innerText = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '40px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '2147483648'; // Ensure it's on top of the lightbox

    // Add click event listener to close the lightbox
    closeBtn.addEventListener('click', () => {
        if (lightbox.parentNode) {
            lightbox.parentNode.removeChild(lightbox);
        }
    });

    lightbox.appendChild(closeBtn);

    // Add the lightbox to the body
    document.body.appendChild(lightbox);

    // Prevent the lightbox from closing when clicking on the image
    lightboxImg.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Close the lightbox when clicking outside of the image
    lightbox.addEventListener('click', () => {
        if (lightbox.parentNode) {
            lightbox.parentNode.removeChild(lightbox);
        }
    });
}

// Attach the lightbox functionality to all images with class 'imgshown1Id'
document.querySelectorAll('.imgshown1Id, .imgshownId').forEach(image => {
    image.addEventListener('click', showLightbox);
});
