const products = [
  { name: "Classic Wood", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=60" },
  { name: "Golden Glow", image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=600&q=60" },
  { name: "Rustic Heart", image: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=600&q=60" },
  { name: "Black Marble", image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=600&q=60" },
  { name: "White Classic", image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=60" },
  { name: "Silver Edge", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=60" },
  { name: "Modern Minimal", image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=600&q=60" },
  { name: "Rosewood Charm", image: "https://images.unsplash.com/photo-1567016555066-5c9184bd5fdf?auto=format&fit=crop&w=600&q=60" },
  { name: "Vintage Vibe", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60" },
  { name: "Nature Frame", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=60" },
  { name: "Elegant Border", image: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=600&q=60" },
  { name: "Dream Frame", image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&w=600&q=60" }
];

const container = document.getElementById("productGrid");
if (container) {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
    `;
    container.appendChild(card);
  });
}
