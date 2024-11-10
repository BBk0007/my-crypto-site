// Portfolio Data
const portfolioData = [
    { name: 'Alex Morgan', profit: '+120%' },
    { name: 'Chris Brown', profit: '+150%' },
    { name: 'Sara Lee', profit: '+200%' },
    { name: 'John Doe', profit: '+95%' },
    { name: 'Jane Smith', profit: '+180%' }
];

// Update Portfolio with Random Names and Profits
function updatePortfolio() {
    const portfolioElements = document.querySelectorAll('.portfolio');
    portfolioElements.forEach(element => {
        const randomIndex = Math.floor(Math.random() * portfolioData.length);
        const randomPerson = portfolioData[randomIndex];
        element.innerHTML = `<p><strong>${randomPerson.name}</strong>: ${randomPerson.profit}</p>`;
    });
}

// Update Portfolio every 3 seconds
setInterval(updatePortfolio, 3000);

// Fetch Real-Time Crypto Prices
async function fetchCryptoPrices() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,tether,usd-coin,litecoin,ripple,dogecoin,polkadot,cardano&vs_currencies=usd';
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const cryptoPrices = [
        `BTC $${data.bitcoin.usd}`,
        `ETH $${data.ethereum.usd}`,
        `SOL $${data.solana.usd}`,
        `USDT $${data['tether'].usd}`,
        `USDC $${data['usd-coin'].usd}`,
        `LTC $${data.litecoin.usd}`,
        `XRP $${data.ripple.usd}`,
        `DOGE $${data.dogecoin.usd}`,
        `DOT $${data.polkadot.usd}`,
        `ADA $${data.cardano.usd}`
    ];
    
    document.getElementById('ticker-text').textContent = 'Crypto Prices: ' + cryptoPrices.join(' | ');
}

// Update Crypto Prices every 10 seconds
setInterval(fetchCryptoPrices, 10000);
fetchCryptoPrices(); // Initial call to populate the prices immediately

// Handle "Invest Now" button click to show investor info and open live chat
function handleInvestNow() {
    const randomIndex = Math.floor(Math.random() * portfolioData.length);
    const randomInvestor = portfolioData[randomIndex];
    alert(`Investor: ${randomInvestor.name}\nProfit: ${randomInvestor.profit}`);
    window.location.href = 'https://signal.link';
}
