// Create and append <style> element
const style = document.createElement('style');
style.textContent = `

// backoffice code 

@media (min-width: 768px) {
    .col-sm-12 {
        width: 40%;
    }
}


.form-group imgParent{
  max-width: 100%;
    display: flex;
}

// livechat code 

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
        background: #000000;
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
