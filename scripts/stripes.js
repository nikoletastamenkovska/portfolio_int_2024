// // Convert a decimal to binary and pad it to ensure uniform length
// function toBinaryString(decimal, length = 16) {
//     return decimal.toString(2).padStart(length, '0');
// }

// // Generate stripes for latitude and longitude
// function generateStripes(containerId, binaryString) {
//     const container = document.getElementById(containerId);
//     container.innerHTML = ''; // Clear existing content

//     // Create stripe elements based on the binary string
//     for (let i = 0; i < binaryString.length; i++) {
//         const stripe = document.createElement('div');
//         stripe.className = 'stripe ' + (binaryString[i] === '1' ? 'black' : 'silver');

//         // Make the first stripe red
//         if (i === 0) {
//             stripe.classList.add('red');
//         }

//         container.appendChild(stripe);
//     }
// }

// // Latitude and Longitude binary strings
// const latitudeBinary = toBinaryString(42, 8) + toBinaryString(15719, 16).slice(0, 12);
// const longitudeBinary = toBinaryString(20, 8) + toBinaryString(962597, 20).slice(0, 16);

// // Concatenate latitude and longitude
// const combinedBinary = latitudeBinary + longitudeBinary;

// // Generate stripes
// generateStripes('stripes', combinedBinary);

// // Duplicate the stripes content for seamless scrolling
// const stripesElement = document.getElementById('stripes');
// const stripesContent = stripesElement.innerHTML;
// stripesElement.innerHTML += stripesContent; // Duplicate the content

// // Play background music
// // document.getElementById('background-music').play();
