// Create and append <style> element
const style = document.createElement('style');
style.textContent = `

/* backoffice code **************************************************************************************************/

.content-header {
    background: #00000024;
}

@media (min-width: 768px) {
    .col-sm-12 {
        width: 50%;
    }
}

.imgParent {
    max-width: 100%;
    display: flex;
    flex-direction: row;
}

label[for="frontpathBE"], label[for="backpathBE"] {
    display: none;
}

::selection {
    color: red;
    background: yellow;
}

.css-8uygdv .animate-enter-done {
    height: 25px;
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

/* Sales Smartly code **************************************************************************************************/
.ivu-table-header {
    display: none;
}
`;
document.head.appendChild(style);


// Define color categories and sets
const colorSets = {
    yellow: new Set(['50s', '51s', '52s', '53s', '54s', '55s', '56s', '57s', '58s', '59s', '1m']),
    orange: new Set(['2m']),
    red: new Set(['3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m'])
};

// Select divs and update their color
document.querySelectorAll('.lc-Typography-module__paragraph-sm___5KRhm').forEach(div => {
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

// NID verify image open in new tab with lightbox
function showLightbox() {
    let existingLightbox = document.getElementById('lightbox');
    if (existingLightbox) {
        document.body.removeChild(existingLightbox);
    }

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    Object.assign(lightbox.style, {
        position: 'fixed',
        zIndex: '2147483647',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        overflow: 'auto',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center'
    });

    const lightboxImg = document.createElement('img');
    Object.assign(lightboxImg.style, {
        maxWidth: '100%',
        maxHeight: '100%',
        transition: 'transform 0.3s ease',
        transformOrigin: 'center',
        display: 'block'
    });
    lightboxImg.src = this.src;

    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement('span');
    closeBtn.innerText = '×';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: '#fff',
        fontSize: '40px',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: '2147483648'
    });
    closeBtn.addEventListener('click', () => lightbox.remove());
    lightbox.appendChild(closeBtn);

    lightboxImg.addEventListener('click', (event) => event.stopPropagation());
    lightbox.addEventListener('click', () => lightbox.remove());

    let isZoomed = false;
    lightboxImg.addEventListener('click', () => {
        isZoomed = !isZoomed;
        lightboxImg.style.transform = isZoomed ? 'scale(2.5)' : 'scale(1)';
        lightbox.style.cursor = isZoomed ? 'move' : 'pointer';
    });

    document.body.appendChild(lightbox);
}

// Attach the lightbox to images
document.querySelectorAll('.imgshown1Id, .imgshownId').forEach(image => {
    image.addEventListener('click', showLightbox);
});


// 🟡 ✅ FIXED: Check if element exists before using classList
const divElement = document.querySelector('.css-1uw9242.stackable-layout');
if (divElement) {
    divElement.classList.add('left-focused');
    divElement.classList.remove('middle-focused');
}


// Ctrl + Click to copy text with popup
document.addEventListener('click', function (e) {
    if (e.ctrlKey && e.button === 0) {
        const target = e.target;
        const text = target.innerText || target.textContent;

        if (text && text.trim() !== '') {
            navigator.clipboard.writeText(text.trim()).then(() => {
                const popup = document.createElement('div');
                popup.textContent = '✔️ Copied!';
                Object.assign(popup.style, {
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '10px 15px',
                    background: '#28a745',
                    color: '#fff',
                    fontSize: '14px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    zIndex: 9999,
                    opacity: '1',
                    transition: 'opacity 0.3s'
                });
                document.body.appendChild(popup);
                setTimeout(() => {
                    popup.style.opacity = '0';
                    setTimeout(() => popup.remove(), 300);
                }, 800);
            }).catch(err => {
                alert('❌ Copy failed: ' + err.message);
            });
        }
    }
});
