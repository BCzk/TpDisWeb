// Función para redirigir a template.html
document.querySelectorAll('.load-game-template').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const idToLoad = event.currentTarget.getAttribute("data-id");
        localStorage.setItem('idToLoad', idToLoad);
        window.location.href = '../Paginas/game-template.html';
    });
});

document.querySelectorAll('.load-merch-template').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const idToLoad = event.currentTarget.getAttribute("data-id");
        localStorage.setItem('idToLoad', idToLoad);
        window.location.href = '../Paginas/merch-template.html';
    });
});