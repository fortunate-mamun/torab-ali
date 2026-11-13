document.addEventListener('DOMContentLoaded', () => {

  function updateChamberStatus() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const statusBox = document.getElementById('liveStatusBox');
    const statusTitle = document.getElementById('statusTitle');
    const statusDesc = document.getElementById('statusDesc');

    if (dayOfWeek === 5) {
      statusBox.classList.add('closed');
      statusTitle.innerHTML = '🔴 আজ শুক্রবার — চেম্বার বন্ধ রয়েছে';
      statusTitle.style.color = '#dc2626';
      statusDesc.textContent = 'আগামীকাল শনিবার বিকাল ৯টা থেকে চেম্বার পুনরায় খোলা থাকবে।';
    } else {
      statusBox.classList.remove('closed');
      statusTitle.innerHTML = '🟢 আজ চেম্বার খোলা আছে';
      statusTitle.style.color = '#059669';
      statusDesc.textContent = 'রোগী দেখার সময়: বিকাল ৪:০০ টা থেকে রাত ৯:০০ টা (ময়লাপোতা মোড়)।';
    }
  }

  updateChamberStatus();
});