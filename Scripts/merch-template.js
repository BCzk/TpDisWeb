const data = [
    {
        id: '1',
        product: 'Bag: Space Odyssey',
        imageSrc: "../Recursos/Merch/bolsaspaceodyssey-merch.png",
        productType: "Bag",        
        description: "A recyclable bag from the game 'Space Odyssey'.",
        price: "$9.99"
    },
    {
        id: '2',
        product: 'Pillow: Rotobox',
        imageSrc: "../Recursos/Merch/almohadonrotobox-merch.png",
        productType: "Pillow",
        description: "A comfy couch pillow from the game 'Rotobox'.",
        price: "$17.99"
    },
    {
        id: '3',
        product: 'Sticker: Rotobox',
        imageSrc: "../Recursos/Merch/stickerrotobox-merch.png",
        productType: "Sticker",
        description: "An autoadhesive sticker from the game 'Rotobox'.",
        price: "$1.99"
    },
    {
        id: '4',
        product: 'Sticker: Stalking Gaze',
        imageSrc: "../Recursos/Merch/stickerstalkinggaze-merch.png",
        productType: "Sticker",
        description: "An autoadhesive sticker from the game 'Stalking Gaze'.",
        price: "$1.99"
    },
    {
        id: '5',
        product: 'Ceramic Cup: Stalking Gaze',
        imageSrc: "../Recursos/Merch/tazastalkinggaze-merch.png",
        productType: "Cup",
        description: "A ceramic cup from the game 'Stalking Gaze'.",
        price: "$11.99"
    },
    {
        id: '6',
        product: 'Plastic Cup: Stalking Gaze',
        imageSrc: "../Recursos/Merch/vasostalkinggaze-merch.png",
        productType: "Cup",
        description: "A reusable plastic cup from the game 'Stalking Gaze'.",
        price: "$7.99"
    },
    {
        id: '7',
        product: 'Notebook: Stalking Gaze',
        imageSrc: "../Recursos/Merch/libretastalkinggaze-merch.png",
        productType: "Notebook",
        description: "A blank notebook from the game 'Stalking Gaze'.",
        price: "$9.99"
    }
];

function updateContent(data, id) {
    const entry = data.find(item => item.id === id);
    if (entry) {
        //////Actualiza textos
        document.getElementById('product').innerText = entry.product;
        document.getElementById('articleName').innerText = entry.product;
        document.getElementById('productType').innerText = entry.productType;
        document.getElementById('description').innerText = entry.description;
        document.getElementById('price').innerText = entry.price;

        ////// Actualiza el src de la imagen
        const imgElement = document.getElementById('image');
        imgElement.src = entry.imageSrc;
    } else {
        console.error('ID no encontrado:', id);
    }
}

window.onload = () => {
    const idToLoad = localStorage.getItem('idToLoad');
    if (idToLoad) {
        updateContent(data, idToLoad);
    }
};

$(".link-button").click(function () {
    alert("We are sorry. This product is currently out of stock.");
});