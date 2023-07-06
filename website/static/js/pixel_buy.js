// Importing dependencies
import Web3 from './web3.min.js';

let selectedPixel = null;

// Function to select a pixel
function selectPixel(pixel) {
  selectedPixel = pixel;
}

// Function to buy a pixel
async function buyPixel() {
  if (!selectedPixel) {
    alert('Please select a pixel first.');
    return;
  }

  const web3 = new Web3(Web3.givenProvider);
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  // Send buyPixel message to the blockchain
  web3.eth.sendTransaction({
    from: account,
    to: '0x0000000000000000000000000000000000000000', // Replace with contract address
    data: web3.utils.toHex('buyPixel') + selectedPixel
  })
  .then(function(receipt){
    alert('Pixel bought successfully!');
  });
}

// Event listener for the buy button
document.getElementById('buy-button').addEventListener('click', buyPixel);

export { selectPixel, buyPixel };