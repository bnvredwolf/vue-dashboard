// [middleware] provider
export default async function ({ $web3 }) {
  if (window.ethereum) {
    window.web3 = new $web3(window.ethereum);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      console.log('[@polarity/web3]', 'connection successful!');
    } catch (e) {
      console.log('[@polarity/web3]', 'error', e.message);
    }
  } else {
    console.log('[@polarity/web3]', "non-ethereum browser detected!");
  }
}