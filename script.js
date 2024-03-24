let changes = document.getElementById('change');
let navbars = document.getElementById('navbar');

changes.addEventListener('click',()=>{
    if(changes.checked == true){
        navbars.style.display="flex";

    }else{
        navbars.style.display="none";
    }
})


// testimonial 
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonials[index].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.getElementById('next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Show the first testimonial initially
showTestimonial(currentTestimonial);


// testimonial ends 

// photo gallery starts 
const accessKey = 'QX_o1QWFtob6AR55BiRUIyp7wwDlLAqjlRj5isERXds';
const galleryElement = document.querySelector('.gallery');

// Fetch images from Unsplash API
fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`)
    .then(response => response.json())
    .then(data => {
        data.forEach(photo => {
            const imgElement = document.createElement('img');
            imgElement.src = photo.urls.regular;
            imgElement.alt = photo.alt_description;
            galleryElement.appendChild(imgElement);
        });
    })
    .catch(error => console.log('Error fetching images:', error));

// photo gallery ends

// cover section image fetch 

// Array of categories
const categories = ['car', 'scenery', 'architecture','beach','travel'];

// Function to fetch random image from Unsplash API
function fetchRandomImage() {
    // Select a random category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    fetch(`https://api.unsplash.com/photos/random?query=${randomCategory}&orientation=landscape&client_id=QX_o1QWFtob6AR55BiRUIyp7wwDlLAqjlRj5isERXds`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            const coverSection = document.getElementById('cover-section');
            coverSection.style.backgroundImage = `url(${imageUrl})`;
            coverSection.style.backgroundSize = 'cover';
            coverSection.style.backgroundPosition = 'center';
        })
        .catch(error => console.error('Error fetching random image:', error));
}

// Call the function to fetch a random image from a random category
fetchRandomImage();
