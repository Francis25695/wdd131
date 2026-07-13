const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x400/accra-ghana-temple-759299-wallpaper.jpg"
    },

    {
        templeName: "Atlanta Georgia Temple",
        location: "Atlanta, Georgia",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
    },

    {
        templeName: "Belem Brazil Temple",
        location: "Belem, Brazil",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
    },

    {
        templeName: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg"
    },

    {
        templeName: "Billings Montana Temple",
        location: "Billings, Montana",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
    },

    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
    },

    {
        templeName: "Chicago Illinois Temple",
        location: "Chicago, Illinois",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_0738.jpg"
    },

    {
        templeName: "Fresno California Temple",
        location: "Fresno, California",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fresno-california/400x250/fresno-temple-lds-829954-wallpaper.jpg"
    }
];


// Select the gallery container
const gallery = document.querySelector(".gallery-container");


// Function to create temple cards
function displayTemples(temple) {

    const figure = document.createElement("figure");

    figure.classList.add("gallery-item");

    figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}">
        <figcaption>
            ${temple.templeName}<br>
            ${temple.location}
        </figcaption>
    `;

    gallery.appendChild(figure);
}


// Display all temples
temples.forEach(displayTemples);