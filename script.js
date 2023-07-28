function calculateCountdown() {
    const targetDate = new Date("2024-01-26T00:00:00");
    const now = new Date();
    const timeDifference = targetDate - now;
  
    if (timeDifference <= 0) {
      // Geri sayım tamamlandı
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
      return;
    }
  
    // Zaman farkını gün, saat, dakika ve saniyeye çevir
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    // Sayfada göster
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  // Her saniyede bir güncelle
  setInterval(calculateCountdown, 1000);
  
  // Başlangıçta bir kere çağır
  calculateCountdown();
  