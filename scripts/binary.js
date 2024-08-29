function decimalToBinary(degree) {
    let [intPart, fracPart] = degree.toString().split('.');

    intPart = parseInt(intPart).toString(2);

    let fracBinary = '';
    if (fracPart) {
        let frac = parseFloat('0.' + fracPart);
        while (frac > 0 && fracBinary.length < 24) {
            frac *= 2;
            if (frac >= 1) {
                fracBinary += '1';
                frac -= 1;
            } else {
                fracBinary += '0';
            }
        }
    }

    return intPart + '.' + fracBinary;
}

const lat = 42.055167;
const lng = 21.447694;

const latBinary = decimalToBinary(lat);
const lngBinary = decimalToBinary(lng);

function generateBinaryImages(binaryString) {
    return binaryString.split('').map(char => {
        if (char === '0') {
            return `<div class="item"><img src="/images/no/zero.jpg" alt="Zero"></div>`;
        } else if (char === '1') {
            return `<div class="item"><img src="/images/no/one.jpg" alt="One"></div>`;
        } else {
            return `<div class="item"><img src="/images/no/dot.jpg" alt="Dot"></div>`;
        }
    }).join('');
}

// Insert generated HTML into the page
document.querySelector('#latitude').innerHTML = generateBinaryImages(latBinary);
document.querySelector('#longitude').innerHTML = generateBinaryImages(lngBinary);
