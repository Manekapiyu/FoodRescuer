function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Reservation made!");
});

const foodItems = [
    {
        title: 'Organic Mangoes-per kilo',
        description: 'Crisp and juicy apples.',
        price: 250,
        expiration: '2024-09-30',
        category: 'fruits',
        image: 'mango1.jpeg',
    },
    {
        title: 'Organic Coconut Cookies',
        description: 'Ideal for quick snacks or desserts',
        price: 250,
        expiration: '2024-09-28',
        category: 'Baked Goods',
        image: 'cookies.jpg',
    },
    {
        title: 'Organic Carrots-250g',
        description: 'Sweet and crunchy carrots.',
        price: 80,
        expiration: '2024-09-28',
        category: 'vegetables',
        image: 'carrot.jpeg',
    },
    {
        title: 'String Hoppers',
        description: 'Fresh and homemade foods',
        price: 150,
        expiration: '2024-09-28',
        category: 'Cooked Meals',
        image: 'hoppers.jpg',
    },
];

function displayFoodItems(filteredItems) {
    const foodListing = document.getElementById('food-listing');
    foodListing.innerHTML = '';

    filteredItems.forEach((item, index) => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-item';
        foodDiv.innerHTML = `
            <img src="${item.image}" alt="${item.description}" />
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <p>Price: LKR${item.price.toFixed(2)}</p>
            <p>Expiration Date: ${item.expiration}</p>
        `;
        foodListing.appendChild(foodDiv);

        setTimeout(() => {
            foodDiv.classList.add('visible');
        }, index * 200);
    });
}

displayFoodItems(foodItems);

function applyFilters() {
    const selectedCategory = document.getElementById('category').value;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    const expirationDate = new Date(document.getElementById('expiration-date').value);
    const searchQuery = document.getElementById('search').value.toLowerCase();

    const filteredItems = foodItems.filter(item => {
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        const matchesPrice = item.price <= maxPrice;
        const matchesExpiration = expirationDate ? new Date(item.expiration) <= expirationDate : true;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);

        return matchesCategory && matchesPrice && matchesExpiration && matchesSearch;
    });

    displayFoodItems(filteredItems);
}

document.getElementById('apply-filters').addEventListener('click', applyFilters);

displayFoodItems(foodItems);


let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function prevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
    showTestimonial(currentTestimonial);
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
    showTestimonial(currentTestimonial);
}

document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(currentTestimonial);
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
});

function openForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});


