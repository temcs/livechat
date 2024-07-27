// Create a <style> element
const style = document.createElement('style');
style.type = 'text/css';

//Selection color

// Add CSS rules for ::selection pseudo-element
style.textContent = `
        ::selection {
        color: rgb(28, 255, 84);
        background: #fc0000;
    }

/* Any size convert */

@media (max-width: 1140px) {
    .stackable-layout.right-open:not(.left-focused) .css-qzdn6e {
        display: block;
    }
}

/*CS side color */

.css-u4cohp,.css-10qrzi9, .css-14yrzxm, .css-xbdb0k{
    background: #065547;
}
 .css-u4cohp:hover,.css-10qrzi9:hover,.css-14yrzxm:hover,.css-xbdb0k:hover  {
    background: #006d5a;
}

/*User side color*/

.css-1hu008m, .css-16ranto,.css-y77xyk,.css-188ons9 {
background: #5f104d;
}

.css-1hu008m:hover,.css-16ranto:hover,.css-y77xyk:hover,.css-188ons9:hover {
background: #710358;
}

/*Photo color*/

.css-1tonxl6{
background : #00adbd;
}

.css-1tonxl6:hover{
background : #05d0e3;
}

/*Left navigation*/


`;

// Append the <style> element to the document head
document.head.appendChild(style);
