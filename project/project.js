const menubutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (menubutton && navigation) {
    menubutton.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
}

function getReviewCount() {
    const count = localStorage.getItem('reviewCount');
    return count ? parseInt(count, 10) : 0;
}

function incrementReviewCount() {
    const currentCount = getReviewCount();
    const newCount = currentCount + 1;
    localStorage.setItem('reviewCount', newCount);
    return newCount;
}

function displayReviewCount() {
    const counterElement = document.getElementById('reviewCount');
    if (counterElement) {
        const count = getReviewCount();
        counterElement.textContent = count;
    }
}

function validateForm(event) {
    const rating = document.querySelector('input[name="rating"]:checked');
    let isValid = true;
    let errorMessage = '';

    if (!rating) {
        errorMessage += 'Please select a rating.\n';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        alert('Please complete all required fields:\n\n' + errorMessage);
        return false;
    }

    incrementReviewCount();
    return true;
}

const mzansiRestaurants = [
    {
        name: "Max's Lifestyle Tavern",
        caption: "A world-class Shisanyama experience in the heart of Umlazi.",
        category: "traditional",
        province: "KwaZulu-Natal",
        image: "https://www.maxslifestyle.co.za/wp-content/uploads/sb-instagram-feed-images/468028522_18469361359020605_7688927583218826549_nfull.jpg",
        credit: "Photo: Unsplash",
        link: "https://maxslifestyle.co.za",
        tip: "Tourist note: Dress up - this is premium kasi. Valet parking available."
    },
    {
        name: "Bo-Kaap Kombuis",
        caption: "Authentic Cape Malay dishes like Bobotie with stunning Table Mountain views.",
        category: "traditional",
        province: "Western Cape",
        image: "https://www.eatout.co.za/wp-content/uploads/2013/11/2022-01-02.jpeg",
        credit: "Photo: Unsplash",
        link: "https://bokaapkombuis.co.za/",
        tip: "Tourist note: Halaal certified. Try the koesisters for dessert."
    },
    {
        name: "Karibu Restaurant",
        caption: "A 'Theatre of Dining' at the V&A Waterfront featuring game meat and traditional potjies.",
        category: "fine-dining",
        province: "Western Cape",
        image: "https://kariburestaurant.co.za/wp-content/uploads/2021/10/1-13.jpg",
        credit: "Photo: Unsplash",
        link: "https://kariburestaurant.co.za",
        tip: "Tourist note: Ask for a window seat. The harbour view + oxtail potjie = magic."
    },
    {
        name: "Busy Corner Imbizo Shisanyama",
        caption: "South Africa's acclaimed commercial Shisanyama destination in Midrand.",
        category: "traditional",
        province: "Gauteng",
        image: "https://www.imbizoshisanyama.co.za/wp-content/uploads/2020/12/braai-mix.jpg",
        credit: "Photo: Unsplash",
        link: "https://imbizoshisanyama.co.za",
        tip: "Tourist note: Huge portions. One platter feeds 2-3 people easy."
    },
    {
        name: "Kwa Mai Mai Traditional Market",
        caption: "Joburg's oldest muti market & shisa nyama. Pick your meat, they braai it fresh for you.",
        category: "traditional",
        province: "Gauteng",
        image: "https://s.inyourpocket.com/img/text/southafrica/johannesburg/kwa-mai-mai-nkayiso-shabalala-honest-travel_2.jpg",
        credit: "Photo: Google Maps",
        link: "https://www.google.com/maps/place/Kwa+Mai+Mai,+Goud+St,+Johannesburg",
        tip: "Tourist note: Buy meat from butchers inside, then take to braai stalls. Cash for pap & chakalaka."
    },
    {
        name: "Mash African Cuisine",
        caption: "Authentic Venda-inspired dishes like Masonja (Mopane Worms) and Hard-body Chicken.",
        category: "traditional",
        province: "Limpopo",
        image: "https://static.wixstatic.com/media/646102_8eb404b145a44a24877408e4d06f1b93~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/646102_8eb404b145a44a24877408e4d06f1b93~mv2.jpg",
        link: "https://mashpolokwane.wixsite.com/mash"
    },
    {
        name: "Phala's Kitchen",
        caption: "Proper kasi food in Mabopane. Famous for hearty plates of pap, chakalaka, and mogodu.",
        category: "traditional",
        province: "Gauteng",
        image: "https://img.restaurantguru.com/r8fa-exterior-PHALAS-Eating-House.jpg",
        credit: "Photo: Google Maps",
        link: "https://www.google.com/maps/place/Phala's+Kitchen",
        tip: "Tourist note: It’s a small spot with big flavour. Go early - they sell out of mogodu by 2pm."
    }
];

function displayRestaurants(data = mzansiRestaurants) {
    const grid = document.getElementById('restaurant-grid');
    if (!grid) return;

    grid.innerHTML = data.map(spot => `
    <article class="food-card">
      <div class="card-image">
        <img src="${spot.image}" 
             alt="${spot.name}" 
             loading="lazy"
             onerror="this.src='https://placehold.co/400x300/A65E2E/FFF8DC?text=Mzansi+Foodie'">
        ${spot.credit ? `<span class="img-credit">${spot.credit}</span>` : ''}
      </div>
      
      <div class="card-content">
        <h3>${spot.name}</h3>
        <p class="caption">${spot.caption}</p>
        
        <div class="tags">
          <span class="tag province">${spot.province}</span>
          <span class="tag category">${spot.category}</span>
        </div>
        
        ${spot.tip ? `<p class="tourist-tip">💡 ${spot.tip}</p>` : ''}
        
        <a href="${spot.link}" target="_blank" rel="noopener" class="btn-visit">
          Visit Website
        </a>
      </div>
    </article> `).join('');
}

function filterByCategory(category) {
    if (category === 'all') {
        displayRestaurants(mzansiRestaurants)
    }
    else {
        const filteredList = mzanziRestuarants.filter(spot => spot.category === category);
        displayRestaurants(filteredList);
    }
}

function updateFooter() {
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

// Run all initializations on load
document.addEventListener('DOMContentLoaded', () => {
    displayRestaurants(mzansiRestaurants);
    displayReviewCount();
    updateFooter();
});