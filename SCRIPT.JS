document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const searchInput = document.getElementById("searchInput");
  const links = document.querySelectorAll("[data-page]");
  const toggle = document.getElementById("letterToggle");
  const sliderContainer = document.getElementById("fontSizeSlider");
  const slider = document.getElementById("slider");
  const fontPercent = document.getElementById("fontPercent");

  const defaultSize = 16;

  const counters = document.querySelectorAll('.count');
  let animated = false;
  

       
  function setupCounterAnimation() {
    const counters = document.querySelectorAll('.count');
    let animated = false;
  
    function animateCounter(counter) {
      const target = parseFloat(counter.getAttribute("data-target"));
      const format = counter.getAttribute("data-format") || "integer";
      const unit = counter.getAttribute("data-unit") || "";
      const duration = 1500;
      const startTime = performance.now();
    
      function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = progress * target;
    
        if (format === "decimal") {
          counter.innerText =
            currentValue.toLocaleString("id-ID", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) + unit;
        } else {
          counter.innerText = Math.floor(currentValue).toLocaleString("id-ID") + unit;
        }
    
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          if (format === "decimal") {
            counter.innerText =
              target.toLocaleString("id-ID", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) + unit;
          } else {
            counter.innerText = target.toLocaleString("id-ID") + unit;
          }
        }
      }
    
      requestAnimationFrame(updateCount);
    }    
  
    function handleScroll() {
      const statsSection = document.querySelector('.stats');
      if (!statsSection) return;
  
      const sectionTop = statsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionTop < screenHeight && !animated) {
        counters.forEach(counter => animateCounter(counter));
        animated = true;
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  
  // ===============================
  // FUNGSI: LOAD & NAVIGASI HALAMAN
  // ===============================

  const allPagesContent = {
    home: "",
    wisata: "",
    artikel: ""
  };

  // Gabungkan pages lokal ke allPagesContent
  Object.entries(pages).forEach(([key, html]) => {
    allPagesContent[key] = html;
  });

  function loadPage(page) {
    const loading = document.getElementById("loading");
    loading.style.display = "block";  // Tampilkan loading dulu
  
    if (pages[page]) {
      setTimeout(() => {  // Simulasi delay agar loading terlihat
        content.innerHTML = pages[page];
        setupInternalLinks();
  
        if (content.querySelector('.count')) {
          setupCounterAnimation();
        }
  
        loading.style.display = "none";  // Sembunyikan loading
        window.scrollTo(0, 0);
      }, 500); // delay 500ms, bisa diubah sesuai kebutuhan
  
      return;
    }
  
    fetch(`${page}.html`)
      .then(res => res.text())
      .then(html => {
        setTimeout(() => {
          content.innerHTML = html;
          setupInternalLinks();
  
          if (content.querySelector('.count')) {
            setupCounterAnimation();
          }
  
          allPagesContent[page] = html;
          if (page === "home") initSlider();
  
          loading.style.display = "none";  // Sembunyikan loading
          window.scrollTo(0, 0);
        }, 500);
      })
      .catch(() => {
        loading.style.display = "none";  // Sembunyikan loading juga kalau error
        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
      });

      function updateActiveLink(currentPage) {
        document.querySelectorAll("nav a[data-page]").forEach(link => {
          const target = link.getAttribute("data-page");
          if (target === currentPage) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
        updateActiveLink(page);
  }
  
  function setupInternalLinks() {
    document.querySelectorAll("a[data-page]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const page = link.getAttribute("data-page");
        loadPage(page);
        window.scrollTo(0, 0); // tambah ini juga
      });
    });
  }
  

  // ===============================
  // FUNGSI: SLIDER HERO (HALAMAN HOME)
  // ===============================

  function initSlider() {
    const slider = document.getElementById("heroSlider");
    if (!slider) return;
  
    const slides = slider.querySelectorAll("img");
    const totalSlides = slides.length;
  
    // Clone slide pertama dan append ke akhir
    const firstClone = slides[0].cloneNode(true);
    slider.appendChild(firstClone);
  
    let currentSlide = 0;
    const slideWidth = slides[0].clientWidth;
  
    function updateSlider(animate = true) {
      if (animate) {
        slider.style.transition = "transform 0.5s ease-in-out";
      } else {
        slider.style.transition = "none";
      }
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      if (currentSlide >= totalSlides) return; // tunggu reset posisi
      currentSlide++;
      updateSlider();
  
      // Jika pindah ke clone slide pertama, setelah animasi reset ke slide pertama tanpa animasi
      if (currentSlide === totalSlides) {
        setTimeout(() => {
          currentSlide = 0;
          updateSlider(false);
        }, 500); // sama dengan durasi transition
      }
    });
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      if (currentSlide === 0) {
        // langsung loncat ke clone slide terakhir tanpa animasi dulu
        currentSlide = totalSlides;
        updateSlider(false);
  
        setTimeout(() => {
          currentSlide--;
          updateSlider();
        }, 20); // delay kecil biar browser render transform tanpa animasi dulu
      } else {
        currentSlide--;
        updateSlider();
      }
    });
  
    // Autoplay dengan interval 8 detik
    setInterval(() => {
      document.getElementById("nextBtn").click();
    }, 8000);
  }
  
  window.addEventListener('load', initSlider);
  

  // ===============================
  // FUNGSI: PENCARIAN DI SEMUA HALAMAN
  // ===============================

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();
    if (!keyword) {
      loadPage("home");
      return;
    }
  
    const seenDestinasi = new Set();
    const seenArtikel = new Set();
    let destinasiHTML = "";
    let artikelHTML = "";
    let destinasiFound = false;
    let artikelFound = false;
  
    Object.entries(allPagesContent).forEach(([page, html]) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
  
      // Cari destinasi
      tempDiv.querySelectorAll(".destinasi-item").forEach(item => {
        const text = item.textContent.toLowerCase();
        const pageKey = item.querySelector("a[data-page]")?.getAttribute("data-page");
        if (text.includes(keyword) && !seenDestinasi.has(pageKey)) {
          destinasiHTML += item.outerHTML;
          seenDestinasi.add(pageKey);
          destinasiFound = true;
        }
      });
  
      // Cari artikel
      tempDiv.querySelectorAll(".artikel-item").forEach(item => {
        const text = item.textContent.toLowerCase();
        const pageKey = item.querySelector("a[data-page]")?.getAttribute("data-page");
        if (text.includes(keyword) && !seenArtikel.has(pageKey)) {
          artikelHTML += item.outerHTML;
          seenArtikel.add(pageKey);
          artikelFound = true;
        }
      });
    });
  
    let resultsHTML = "";
  
    if (destinasiFound) {
      resultsHTML += `
        <section class="destinasi-wisata">
          <h3>Destinasi Wisata</h3>
          <div class="destinasi">${destinasiHTML}</div>
        </section>`;
    }
  
    if (artikelFound) {
      resultsHTML += `
        <section class="artikel">
          <h3>Artikel</h3>
          <div class="artikel-list">${artikelHTML}</div>
        </section>`;
    }
  
    if (!destinasiFound && !artikelFound) {
      resultsHTML += `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 70px 0; text-align: center;">
          <p style="font-size: 16px; ">Maaf, hasil pencarian tidak ditemukan</p>
          <img src="tidakditemukan.png" alt="Tidak ditemukan" style="max-width: 80%; max-height: 300px; margin-bottom: 16px;">
          <p style="margin-bottom: 8px;">Ingin kembali ke <a href="#" data-page="home" style="text-decoration: none; color: #007bff; font-weight: bold;">beranda</a>?</p>
        </div>
      `;
    }
    
    
    
  
    content.innerHTML = resultsHTML;
  
    //aktifkan semua link <a data-page="..."> hasil pencarian
    setupInternalLinks();
  });
  

  // ===============================
  // EVENT: TOGGLE SLIDER UKURAN FONT
  // ===============================

  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // cegah event bubbling
    const isVisible = sliderContainer.style.display === "block";
    sliderContainer.style.display = isVisible ? "none" : "block";
  });

  slider.addEventListener("input", () => {
    const size = slider.value;
    const percent = Math.round((size / defaultSize) * 100);
    document.documentElement.style.setProperty('--font-size', size + 'px');
    document.body.style.fontSize = size + "px";
    fontPercent.textContent = percent + "%";
  });

  // Tutup slider saat klik di luar
  document.addEventListener("click", (e) => {
    const isClickInsideSlider = sliderContainer.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideSlider && !isClickOnToggle) {
      sliderContainer.style.display = "none";
    }
  });

  // ===============================
  // EVENT: TOGGLE DARK MODE
  // ===============================

  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // ===============================
  // EVENT: TOGGLE SEARCH BAR
  // ===============================

  document.getElementById("searchToggle").addEventListener("click", (e) => {
    const bar = document.getElementById("searchBar");
    const isVisible = bar.style.display === "block";
    bar.style.display = isVisible ? "none" : "block";

    if (!isVisible) {
      searchInput.focus();

      const handleClickOutside = (event) => {
        const isClickInsideBar = bar.contains(event.target);
        const isClickOnIcon = e.target.contains(event.target);
        if (!isClickInsideBar && !isClickOnIcon) {
          bar.style.display = "none";
          document.removeEventListener("click", handleClickOutside);
        }
      };

      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);
    }
  });

  // ===============================
  // INISIALISASI: MUAT HALAMAN AWAL & PRELOAD
  // ===============================

  loadPage("home");

  ["wisata", "artikel"].forEach(page => {
    fetch(`${page}.html`)
      .then(res => res.text())
      .then(html => {
        allPagesContent[page] = html;
      });
  });

  // ===============================
  // EVENT: SETUP NAVIGATION LINKS
  // ===============================

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });

});
