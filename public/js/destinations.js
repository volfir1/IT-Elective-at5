// Destination data with added directions
const destinations = [
    {
        id: 1,
        name: "Palawan Underground River",
        location: "Puerto Princesa, Palawan",
        description: "A UNESCO World Heritage site featuring a spectacular limestone karst landscape with an underground river.",
        image: '/src/destinations/underground.jpg',
        additionalImages: [
            '/src/destinations/underground2.jpg'
        ],
        category: "cultural",
        rating: 4.8,
        directions: {
            fromManila: [
                "Take a flight from Manila (NAIA) to Puerto Princesa International Airport (approximately 1h 15m)",
                "From the airport, take a van or tricycle to your accommodation in Puerto Princesa",
                "Book an Underground River tour through your hotel or local tour operator",
                "Tour vans will pick you up from your hotel early morning",
                "The drive to Sabang Wharf takes about 2 hours",
                "Take a 15-minute boat ride to the Underground River entrance"
            ],
            tips: [
                "Book permits in advance as there are daily visitor limits",
                "Best visiting hours: 8:00 AM - 3:00 PM",
                "Bring water and light snacks",
                "Wear comfortable walking shoes"
            ]
        }
    },
    {
        id: 2,
        name: "Siargao Island",
        location: "Surigao del Norte",
        description: "Known for its stunning lagoons, white sand beaches, and world-class surfing spots.",
        image: "/src/destinations/siargao.jpg",
        additionalImages: [
            '/src/destinations/siargao2.jpg',
             '/src/destinations/siargao3.jpg',
             '/src/destinations/siargao4.jpg'
        ],
        category: "beaches",
        rating: 4.9,
        directions: {
            fromManila: [
                "Fly from Manila to Sayak Airport (Siargao Airport)",
                "Take a van or habal-habal (motorcycle) to General Luna",
                "Most resorts are located within the General Luna area"
            ],
            tips: [
                "Best time for surfing: September to November",
                "Book accommodations in General Luna for easy access to attractions",
                "Rent a motorbike for easy island exploration",
                "Bring cash as ATMs are limited"
            ]
        }
    },
    {
        id: 3,
        name: "Mount Pulag",
        location: "Benguet",
        description: "The highest peak in Luzon, famous for its sea of clouds and stunning sunrise views.",
        image: "/src/destinations/pulag.jpg",
        additionalImages: [
            '/src/destinations/pulag2.jpg'
        ],
        category: "mountains",
        rating: 4.7,
        directions: {
            fromManila: [
                "Take a bus from Manila to Baguio City (approximately 5-6 hours)",
                "From Baguio, ride a jeepney or van to Kabayan, Benguet",
                "Secure hiking permits and guides at the DENR office in Kabayan",
                "Travel by jeepney to the Mount Pulag ranger station",
                "Hike to the summit (usually requires an overnight camping trip)"
            ],
            tips: [
                "Prepare for cold temperatures at the summit",
                "Book your hike in advance as permits may run out",
                "Bring warm clothing, camping gear, and food",
                "Best hiking season: November to March"
            ]
        }
    },
    {
        id: 4,
        name: "Batanes Islands",
        location: "Batanes",
        description: "A group of islands known for their stunning landscapes, traditional stone houses, and pristine beaches.",
        image: "/src/destinations/batanes.jpeg",
        additionalImages: [

            '/src/destinations/batanes2.webp',
                 '/src/destinations/batanes3.webp',
                    '/src/destinations/batanes4.jpg'
        ],
        category: "islands",
        rating: 4.9,
        directions: {
            fromManila: [
                "Fly from Manila (NAIA) to Basco Airport in Batanes (approximately 1h 45m)",
                "From Basco, explore the islands by renting a bike, motorbike, or hiring a local guide"
            ],
            tips: [
                "Best months to visit: March to June for calmer seas and better weather",
                "Wear sunscreen and a hat to protect against strong winds and sun",
                "Bring cash as there are limited ATMs",
                "Try the local Ivatan cuisine, such as ‘Uvud’ and ‘Vunung’"
            ]
        }
    },
    {
        id: 5,
        name: "Coron Island",
        location: "Palawan",
        description: "Famous for its crystal-clear lagoons, white sand beaches, and World War II wreck diving sites.",
        image: "/src/destinations/coron.jpg",
        additionalImages: [
   
            '/src/destinations/coron2.jpg'
        ],
        category: "islands",
        rating: 4.8,
        directions: {
            fromManila: [
                "Fly from Manila to Busuanga Airport (Coron)",
                "From the airport, take a van to Coron Town",
                "Book boat tours to explore Coron’s famous sites such as Kayangan Lake and Twin Lagoons"
            ],
            tips: [
                "Best months to visit: November to May for calm waters",
                "Bring snorkeling gear to fully enjoy Coron’s marine life",
                "Wear aqua shoes for rocky shores",
                "Bring a waterproof camera for underwater shots"
            ]
        }
    },
    {
        id: 6,
        name: "Mount Mayon",
        location: "Albay",
        description: "The perfect cone volcano, offering hiking adventures and spectacular views.",
        image: "/src/destinations/mayon.jpg",
        additionalImages: [
           
            '/src/destinations/mayon2.jpg'
        ],
        category: "mountains",
        rating: 4.6,
        directions: {
            fromManila: [
                "Fly from Manila to Legazpi City Airport",
                "From the airport, take a van or jeepney to your accommodation",
                "Arrange for a local guide to hike the lower slopes of Mount Mayon"
            ],
            tips: [
                "Best time to visit: during the dry season from March to May",
                "Hiking to the summit is restricted due to volcanic activity",
                "Visit the Cagsawa Ruins for a picturesque view of Mayon",
                "Always check local advisories for volcanic activity updates"
            ]
        }
    },
    {
        "id": 7,
        "name": "Chocolate Hills",
        "location": "Bohol",
        "description": "A geological formation in the Bohol province, famous for its unique hills that turn brown during the dry season, resembling chocolate mounds.",
        "image": "/src/destinations/chocohills.webp",
        "additionalImages": [

            "/src/destinations/chocohills.webp",
             "/src/destinations/choco2.jpg"
        ],
        "category": "natural_wonders",
        "rating": 4.7,
        "directions": {
            "fromManila": [
                "Fly from Manila to Tagbilaran Airport (Bohol)",
                "From Tagbilaran, take a bus or van to Carmen, Bohol (approximately 1-2 hours)",
                "Chocolate Hills complex is located in Carmen; you can rent a motorbike or hire a guide to explore the area"
            ],
            "tips": [
                "Best time to visit: during the dry season (November to May) when the hills turn chocolate brown",
                "Visit the Chocolate Hills Viewing Complex for the best panoramic view",
                "Bring sunscreen and a hat as it can get hot during the day",
                "Consider visiting the nearby Tarsier Sanctuary to see the world’s smallest primates"
            ]
        }
    },
    {
        "id": 8,
        "name": "Banaue Rice Terraces",
        "location": "Ifugao",
        "description": "Ancient rice terraces carved into the mountains of Ifugao by the indigenous people over 2,000 years ago, often referred to as the 'Eighth Wonder of the World'.",
        "image": "/src/destinations/banaue1.webp",
        "additionalImages": [
            "/src/destinations/banaue2.jpeg",
            "/src/destinations/banaue3.jpg",
            "/src/destinations/banaue4.jpg",
        ],
        "category": "cultural",
        "rating": 4.9,
        "directions": {
            "fromManila": [
                "Take a bus from Manila to Banaue (approximately 9 hours)",
                "Once in Banaue, you can take a jeepney or tricycle to the viewpoints",
                "Hiking tours are available with local guides for a more immersive experience"
            ],
            "tips": [
                "Best time to visit: April to May for planting season, or June to July for harvesting season",
                "Wear comfortable hiking shoes and bring water for the trek",
                "Visit the Batad Rice Terraces for a more remote and quieter experience",
                "Consider staying overnight in a homestay to experience local culture"
            ]
        }
    },
    {
        "id": 9,
        "name": "El Nido",
        "location": "Palawan",
        "description": "A tropical paradise known for its stunning limestone cliffs, crystal-clear waters, hidden lagoons, and vibrant marine life, perfect for island hopping and snorkeling.",
        "image": "/src/destinations/elnido1.jpg",
        "additionalImages": [
            "/src/destinations/elnido2.webp",
            "/src/destinations/elnido3.jpg",
              "/src/destinations/elnido4.jpg"
        ],
        "category": "beaches",
        "rating": 4.9,
        "directions": {
            "fromManila": [
                "Fly from Manila to Lio Airport (El Nido) or Puerto Princesa Airport",
                "From Puerto Princesa, take a van or bus to El Nido (approximately 5-6 hours)",
                "Island hopping tours can be booked through local operators once in El Nido"
            ],
            "tips": [
                "Best time to visit: November to May for calm seas and pleasant weather",
                "Book an island-hopping tour (Tours A, B, C, or D) to explore famous spots like Big Lagoon, Secret Lagoon, and Seven Commandos Beach",
                "Bring waterproof bags to protect your belongings during boat tours",
                "Snorkeling gear is often included in tours, but you can bring your own for better quality"
            ]
        }
    }
    
    
    
];

    // Add directions for other destinations similarly


// Function to create destination cards
function createDestinationCard(destination) {
    return `
        <div class="col-md-6 col-lg-4 destination-item" data-category="${destination.category}">
            <div class="destination-card">
                <div class="destination-image">
                    <img src="${destination.image}" alt="${destination.name}">
                </div>
                <div class="destination-content">
                    <h3>${destination.name}</h3>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${destination.location}</p>
                    <p>${destination.description}</p>
                    <div class="destination-meta">
                        <span class="rating">
                            <i class="fas fa-star"></i> ${destination.rating}
                        </span>
                        <button class="btn btn-sm btn-primary" onclick="openDirectionsModal(${destination.id})">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to create modal HTML
function createDirectionsModal(destination) {
    return `
        <div class="modal fade" id="modal-${destination.id}" tabindex="-1" aria-labelledby="modalLabel-${destination.id}" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title" id="modalLabel-${destination.id}">How to Get to ${destination.name}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${destination.image}" alt="${destination.name}" class="img-fluid rounded mb-3">
                                
                                <!-- Additional Images Carousel -->
                                ${destination.additionalImages && destination.additionalImages.length > 0 ? `
                                    <div id="carousel-${destination.id}" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            ${destination.additionalImages.map((img, index) => `
                                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                                    <img src="${img}" class="d-block w-100 img-fluid rounded" alt="Additional image">
                                                </div>
                                            `).join('')}
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${destination.id}" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${destination.id}" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                ` : ''}
                            </div>
                            <div class="col-md-6">
                                <h6 class="fw-bold"><i class="fas fa-map-marked-alt"></i> From Manila:</h6>
                                <ol class="list-group list-group-numbered mb-4">
                                    ${destination.directions.fromManila.map(step => `
                                        <li class="list-group-item">${step}</li>
                                    `).join('')}
                                </ol>
                                
                                <h6 class="fw-bold"><i class="fas fa-lightbulb"></i> Travel Tips:</h6>
                                <ul class="list-group mb-3">
                                    ${destination.directions.tips.map(tip => `
                                        <li class="list-group-item"><i class="fas fa-check text-primary"></i> ${tip}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="https://www.google.com/maps/search/${encodeURIComponent(destination.name + ' ' + destination.location)}" 
                           target="_blank" 
                           class="btn btn-primary">
                            <i class="fas fa-map-marker-alt"></i> View on Map
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// Function to open the directions modal
function openDirectionsModal(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    if (!destination) return;

    // Check if modal already exists
    let modal = document.getElementById(`modal-${destinationId}`);
    if (!modal) {
        // Create and append modal if it doesn't exist
        const modalHTML = createDirectionsModal(destination);
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById(`modal-${destinationId}`);
    }

    // Open the modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Function to filter destinations
function filterDestinations(category) {
    const items = document.querySelectorAll('.destination-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate destinations
    const container = document.getElementById('destinationsContainer');
    container.innerHTML = destinations.map(createDestinationCard).join('');

    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter destinations
            const category = this.dataset.filter;
            filterDestinations(category);
        });
    });

    // Initialize AOS
    AOS.init();
});