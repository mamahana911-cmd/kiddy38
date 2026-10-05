const WA_NUMBER='6287771285577';
const DEFAULT_PRODUCTS=[
 {id:1,name:'Chinos Cargo Anak Casual 2-4 ',category:'Anak',price:76000,size:'2–4 tahun',image:'assets/produk/Chinos Cargo Anak Casual 2-4.webp'},
 {id:2,name:'Chinos Cargo Anak Casual 6-10',category:'Anak',price:83000,size:'6–10 tahun',image:'assets/produk/Chinos Cargo Anak Casual 6-10.webp'},
 {id:3,name:'Celana Chinos Pria',category:'Pria',price:121000,size:'M–XXL',image:'assets/produk/Celana Chinos Pria.webp'},
 {id:4,name:'Chinos Cargo Anak Casual 12-14',category:'Anak',price:87000,size:'12–14 tahun',image:'assets/produk/Chinos Cargo Anak Casual 12-14.webp'},
 {id:5,name:'Tunik Casual Wanita',category:'Wanita',price:119000,size:'M–XXL',image:'assets/produk/Tunik Casual Wanita.webp'},
 {id:6,name:'Celana Chinos Pria Kondor',category:'Pria',price:129000,size:'M–XXL',image:'assets/produk/Celana Chinos Pria Kondor.webp'},
 {id:7,name:'Chinos Cargo Anak Casual 16-18',category:'Anak',price:93000,size:'16–18 tahun',image:'assets/produk/Chinos Cargo Anak Casual 16-18.webp'},
 {id:8,name:'Gamis Wanita Kekinian',category:'Wanita',price:99000,size:'All Size',image:'assets/produk/Gamis Wanita Kekinian.webp'}
];
const TESTIMONIALS=[
 {name:'Rina',role:'Pembeli',text:'Bahannya nyaman dan ukurannya sesuai. Anak saya langsung suka.'},
 {name:'Siti',role:'Reseller',text:'Katalog mudah dikirim ke pelanggan. Saya jadi lebih praktis menawarkan produk.'},
 {name:'Dewi',role:'Pembeli',text:'Modelnya kekinian, harga juga masih ramah. Pesannya cepat lewat WhatsApp.'},
 {name:'Maya',role:'Reseller',text:'Produk mudah dipasarkan karena foto dan detailnya sudah jelas.'},
 {name:'Fajar',role:'Pembeli',text:'Kualitas sesuai dengan yang ditampilkan di katalog. Recommended.'},
 {name:'Novi',role:'Reseller',text:'Respons admin cepat dan pilihan produknya terus bertambah.'}
];
const NOTIFICATIONS=[
 {name:'Ayu',city:'Karawang',product:'Chinos Cargo Anak Casual 2-4'},
{name:'Rani',city:'Bekasi',product:'Chinos Cargo Anak Casual 6-10'},
{name:'Angga',city:'Serang',product:'Celana Chinos Pria'},
{name:'Salsa',city:'Purwakarta',product:'Chinos Cargo Anak Casual 12-14'},
{name:'Nina',city:'Subang',product:'Tunik Casual Wanita'},
{name:'Maya',city:'Jakarta',product:'Chinos Cargo Anak Casual 16-18'},
{name:'Dimas',city:'Bandung',product:'Celana Chinos Pria Kondor'},
{name:'Fira',city:'Bogor',product:'Chinos Cargo Anak Casual 2-4'},
{name:'Rizky',city:'Tangerang',product:'Celana Chinos Pria'},
{name:'Lina',city:'Cirebon',product:'Tunik Casual Wanita'},
{name:'Bagas',city:'Depok',product:'Chinos Cargo Anak Casual 6-10'},
{name:'Wulan',city:'Tasikmalaya',product:'Chinos Cargo Anak Casual 12-14'},
{name:'Arif',city:'Cikampek',product:'Celana Chinos Pria Kondor'},
{name:'Dewi',city:'Semarang',product:'Tunik Casual Wanita'},
{name:'Fajar',city:'Surabaya',product:'Celana Chinos Pria'},
{name:'Putri',city:'Yogyakarta',product:'Chinos Cargo Anak Casual 16-18'},
{name:'Reza',city:'Malang',product:'Chinos Cargo Anak Casual 6-10'},
{name:'Siti',city:'Kuningan',product:'Chinos Cargo Anak Casual 2-4'},
{name:'Ilham',city:'Karawang',product:'Celana Chinos Pria Kondor'},
{name:'Nadia',city:'Banten',product:'Tunik Casual Wanita'},
{name:'Raka',city:'Jakarta Selatan',product:'Chinos Cargo Anak Casual 12-14'},
{name:'Citra',city:'Bandung',product:'Chinos Cargo Anak Casual 16-18'},
{name:'Andi',city:'Palembang',product:'Celana Chinos Pria'},
{name:'Vina',city:'Medan',product:'Tunik Casual Wanita'},
{name:'Yoga',city:'Makassar',product:'Celana Chinos Pria Kondor'},
{name:'Aulia',city:'Solo',product:'Chinos Cargo Anak Casual 6-10'},
{name:'Bima',city:'Denpasar',product:'Chinos Cargo Anak Casual 2-4'},
{name:'Riska',city:'Pekanbaru',product:'Chinos Cargo Anak Casual 12-14'},
{name:'Doni',city:'Bandar Lampung',product:'Celana Chinos Pria'},
{name:'Mila',city:'Pontianak',product:'Chinos Cargo Anak Casual 16-18'}
];
let products=JSON.parse(localStorage.getItem('kiddy38_products')||'null')||DEFAULT_PRODUCTS;
let activeCategory='Semua';
const rupiah=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
function renderFilters(){const cats=['Semua',...new Set(products.map(p=>p.category))];document.getElementById('categoryFilters').innerHTML=cats.map(c=>`<button class="filter ${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`).join('');document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderFilters();renderProducts()})}
function renderProducts(){const q=document.getElementById('searchInput').value.toLowerCase();const list=products.filter(p=>(activeCategory==='Semua'||p.category===activeCategory)&&(`${p.name} ${p.category}`.toLowerCase().includes(q)));const grid=document.getElementById('productGrid');grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image">${p.image?`<img src="${p.image}" alt="${p.name}">`:`<div class="placeholder">KIDDY38</div>`}</div><div class="product-info"><div class="product-cat">${p.category}</div><div class="product-name">${p.name}</div><div class="price">${rupiah(p.price)}</div><div class="size">Ukuran: ${p.size||'Tersedia'}</div><button class="product-btn" onclick="openProduct(${p.id})">Lihat Detail</button></div></article>`).join(''):`<p>Produk tidak ditemukan.</p>`}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;document.getElementById('modalContent').innerHTML=`<div class="detail"><div class="detail-image">${p.image?`<img src="${p.image}" alt="${p.name}">`:`<div class="placeholder">KIDDY38</div>`}</div><div class="detail-copy"><span class="eyebrow">${p.category}</span><h2>${p.name}</h2><div class="big-price">${rupiah(p.price)}</div><p><b>Ukuran:</b> ${p.size||'-'}</p><p>Silakan tanyakan ketersediaan warna, ukuran, stok, dan ongkir kepada admin.</p><a class="wa-order" target="_blank" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Kiddy38, saya mau pesan ${p.name} dengan harga ${rupiah(p.price)}. Mohon info ukuran/warna yang tersedia.`)}"><i class="fa-brands fa-whatsapp"></i> Pesan via WhatsApp</a></div></div>`;document.getElementById('productModal').classList.add('open')}
function renderTestimonials(){document.getElementById('testimonialGrid').innerHTML=TESTIMONIALS.map(t=>`<article class="testimonial-card"><div class="stars">★★★★★</div><p>“${t.text}”</p><div class="person"><div class="avatar">${t.name[0]}</div><div><b>${t.name}</b><small>${t.role}</small></div></div></article>`).join('')}
let notifyTimer;
function showNotification(){const n=NOTIFICATIONS[Math.floor(Math.random()*NOTIFICATIONS.length)];document.getElementById('liveName').textContent=n.name+' • '+n.city;document.getElementById('liveText').textContent='baru saja membeli '+n.product;document.getElementById('liveTime').textContent='Aktivitas terbaru';const el=document.getElementById('liveNotification');el.classList.add('show');clearTimeout(notifyTimer);notifyTimer=setTimeout(()=>el.classList.remove('show'),5500)}
document.getElementById('searchInput').addEventListener('input',renderProducts);document.getElementById('modalClose').onclick=()=>document.getElementById('productModal').classList.remove('open');document.getElementById('productModal').onclick=e=>{if(e.target.id==='productModal')e.currentTarget.classList.remove('open')};document.getElementById('closeLive').onclick=()=>document.getElementById('liveNotification').classList.remove('show');
renderFilters();renderProducts();renderTestimonials();
// Notifikasi di bawah ini memakai data contoh sampai sistem order/database terhubung. Jangan gunakan sebagai bukti pembelian nyata.
setTimeout(showNotification,3500);setInterval(showNotification,18000);
