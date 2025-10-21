==== assets/script.js ====
const SAMPLE_PRODUCTS = [
  {id:1,name:'Classic Wood',price:499,desc:'Hand-sanded oak finish',img:'https://images.unsplash.com/photo-1545235617-9465f6d9de2d?auto=format&fit=crop&w=800&q=80'},
  {id:2,name:'Golden Glow',price:1199,desc:'Ornate gold frame',img:'https://images.unsplash.com/photo-1549921296-3a3190b9d8f6?auto=format&fit=crop&w=800&q=80'},
  {id:3,name:'Rustic Heart',price:549,desc:'Weathered pine',img:'https://images.unsplash.com/photo-1505691723518-36a57e36c8b6?auto=format&fit=crop&w=800&q=80'},
  {id:4,name:'Midnight Glass',price:799,desc:'Slim black with glass',img:'https://images.unsplash.com/photo-1505691723518-36a57e36c8b6?auto=format&fit=crop&w=800&q=80'},
  {id:5,name:'Floating Light',price:899,desc:'Floating glass look',img:'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80'},
  {id:6,name:'Matte White',price:649,desc:'Soft white edge',img:'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80'},
  {id:7,name:'Heritage Maple',price:599,desc:'Warm maple grain',img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80'},
  {id:8,name:'Bevelled Black',price:1299,desc:'Deep bevel luxe finish',img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'},
  {id:9,name:'Handpainted',price:999,desc:'Unique handpainted patina',img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80'},
  {id:10,name:'Collage',price:1199,desc:'Multiple-photo collage',img:'https://images.unsplash.com/photo-1473447195632-2fd3a6a3d3f5?auto=format&fit=crop&w=800&q=80'},
  {id:11,name:'Canvas Wrap',price:1499,desc:'Canvas print on wood',img:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'},
  {id:12,name:'Walnut Luxe',price:899,desc:'Hand-polished walnut',img:'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=80'}
];

function renderGrid(targetId, limit){
  const el = document.getElementById(targetId);
  if(!el) return;
  const items = SAMPLE_PRODUCTS.slice(0, limit || SAMPLE_PRODUCTS.length);
  el.innerHTML = '';
  items.forEach(p => {
    const d = document.createElement('div'); d.className='card';
    d.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="label">${p.name}</div>
      <div class="muted">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
        <div class="price">₹${p.price}</div>
        <a class="btn" href="contact.html">Customize</a>
      </div>`;
    el.appendChild(d);
  });
}

renderGrid('home-grid', 6);
renderGrid('collections-grid');

document.querySelectorAll('.nav-link').forEach(a=>{
  const href = a.getAttribute('href');
  if(window.location.pathname.endsWith(href) || (href==='index.html' && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')))){
    a.classList.add('active');
  }
});

SAMPLE_PRODUCTS.forEach(p=>{const i=new Image();i.src=p.img});
