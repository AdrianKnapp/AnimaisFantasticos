export default function fetchBitcoin(url, target) {
  function updateUI(data) {
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (1000 / data.BRL.sell).toFixed(4);
  }

  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      updateUI(data);
    } catch (err) {
      console.log(err);
    }
  }

  return fetchData();
}
