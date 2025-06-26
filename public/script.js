// JS for FreeFire ID Marketplace
async function loadMarket() {
  const res = await fetch('/freefireid/market');
  const ids = await res.json();
  const list = document.getElementById('id-list');
  list.innerHTML = '';
  if (ids.length === 0) {
    list.innerHTML = '<p>No FreeFire IDs available right now.</p>';
    return;
  }
  ids.forEach(id => {
    const div = document.createElement('div');
    div.className = 'id-card';
    div.innerHTML = `
      <div class="id-info">
        <b>ID:</b> ${id.freeFireID} <br>
        <b>Price:</b> ₹${id.price} <br>
        <b>Status:</b> ${id.status}
      </div>
      <button class="buy-btn" onclick="buyID('${id._id}')">Buy</button>
    `;
    list.appendChild(div);
  });
}

async function buyID(id) {
  const buyerId = prompt('Enter your UserID to buy:');
  if (!buyerId) return alert('UserID required!');
  const res = await fetch(`/freefireid/buy/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buyerId })
  });
  const data = await res.json();
  if (data.error) alert(data.error);
  else alert('Purchase successful!');
  loadMarket();
}

document.getElementById('refresh-btn').onclick = loadMarket;
window.onload = loadMarket;

document.getElementById('sellForm').onsubmit = async function(e) {
  e.preventDefault();
  const form = e.target;
  const body = {
    freeFireID: form.freeFireID.value,
    price: form.price.value,
    userID: form.userID.value
  };
  const res = await fetch('/freefireid/sell', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (data.error) alert(data.error);
  else alert('ID listed for sale!');
  form.reset();
  loadMarket();
};

// Fetch and display real buyers from backend
async function loadBuyers() {
  const res = await fetch('/freefireid/buyers');
  const buyers = await res.json();
  const list = document.getElementById('buyers-list');
  list.innerHTML = '';
  if (buyers.length === 0) {
    list.innerHTML = '<li>No buyers yet.</li>';
    return;
  }
  buyers.forEach(b => {
    const li = document.createElement('li');
    li.textContent = `${b.name} (ID: ${b.id})`;
    list.appendChild(li);
  });
}
window.addEventListener('DOMContentLoaded', loadBuyers);

// Advanced Free Fire search data (static for demo, can be fetched from Google or API)
const ffSearchData = [
  'SCAR - Metal Wings', 'AK47 - Blue Flame Draco', 'M1014 - Green Flame Draco',
  'Chrono', 'Alok', 'DJ Alok', 'Wukong', 'Skyler', 'Jota',
  'Cobra Bundle', 'Hip Hop Bundle', 'Sakura Bundle',
  'Evo Gun', 'Emote - Cobra Strike', 'Emote - FFWC Throne',
  'Animation - Evo Gun', 'Pet - Detective Panda', 'Pet - Ottero',
  'Vehicle Skin - Monster Truck', 'Backpack - Angel Wings',
  'Free Fire Max', 'Diamond Royale', 'Elite Pass', 'Ranked Mode',
  'Classic Mode', 'Guild', 'Friends', 'Chat', 'Secure Payment',
  'Official Free Fire Max Website'
];

function createSearchBar() {
  const searchSection = document.createElement('section');
  searchSection.className = 'search-section';
  searchSection.innerHTML = `
    <input type="text" id="ff-search" placeholder="Search Free Fire items..." autocomplete="off">
    <ul id="search-suggestions" class="suggestions"></ul>
  `;
  document.querySelector('main').insertBefore(searchSection, document.querySelector('.marketplace'));

  const input = document.getElementById('ff-search');
  const suggestions = document.getElementById('search-suggestions');
  input.addEventListener('input', function() {
    const val = input.value.toLowerCase();
    suggestions.innerHTML = '';
    if (!val) return;
    ffSearchData.filter(item => item.toLowerCase().includes(val)).slice(0, 7).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.onclick = () => {
        input.value = item;
        suggestions.innerHTML = '';
      };
      suggestions.appendChild(li);
    });
  });
  document.addEventListener('click', e => {
    if (!searchSection.contains(e.target)) suggestions.innerHTML = '';
  });
}
window.addEventListener('DOMContentLoaded', createSearchBar);
