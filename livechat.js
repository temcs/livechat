// Create and append <style> element
const style = document.createElement('style');
style.textContent = `
    ::selection {
        color: rgb(28, 255, 84);
        background: #fc0000;
    }
    @media (max-width: 1140px) {
        .stackable-layout.right-open:not(.left-focused) .css-qzdn6e {
            display: block;
        }
    }
    .css-qzdn6e, .css-7eezsw {
        background: url(https://mattsko.com/wp-content/uploads/2018/04/japanese-art-rain-gif.gif) no-repeat;
        background-size: cover;
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
        animation: blink 1s infinite;
        font-size: 15px;
    }
    .blink2 {
        animation: blink 0.3s infinite;
        font-size: 20px;
    }
`;
document.head.appendChild(style);

// Define color categories and sets
const colorSets = {
    yellow: new Set(['0s', '50s', '51s', '52s', '53s', '54s', '55s', '56s', '57s', '58s', '59s']),
    orange: new Set(['1m']),
    red: new Set(['2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m'])
};

// Select divs and update their color
document.querySelectorAll('.lc-Typography-module__paragraph-sm___QIEFL').forEach(div => {
    var topBar = document.querySelector('.css-xhnzd8');
    const text = div.innerText.trim();
    div.style.color = '';
    div.style.outline = '';
    div.classList.remove('blink', 'blink2');

    if (colorSets.yellow.has(text)) {
        div.style.color = 'yellow';
        topBar.style.background = 'black';
    } else if (colorSets.orange.has(text)) {
        div.style.color = 'orange';
        div.style.outline = 'White 1px solid';
        div.classList.add('blink');
    } else if (colorSets.red.has(text)) {
        div.style.color = '#ff645e';
        div.style.outline = 'White 1px solid';
        div.classList.add('blink2');
        topBar.style.background = 'red';
    } else {
        div.style.color = 'white';


    }
});
