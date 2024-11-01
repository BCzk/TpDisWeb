const data = [
    {
        id: '1',
        name: 'Stalking Gaze: Currently in development',
        imageSrc: "../Recursos/Juegos/stalkinggaze-image.png",        
        info: "In a fresh new project, Team Paranoid has announced the development of their latest title, Stalking Gaze, which started just a few days ago. Following the footsteps of their previous success, Paranoid, this new game delves even deeper into the psychological horror genre, offering players a spine-chilling experience within a walking simulator format.<br /><br />Stalking Gaze is crafted with a distinct low poly aesthetic that complements its eerie, atmospheric storytelling.Set in a hauntingly mysterious 3D environment, players are invited to explore unsettling spaces, piecing together the unsettling narrative that unfolds with each step.<br /><br />Backed by BRISA, the publisher supporting this ambitious project, Stalking Gaze is set to make its debut in the first quarter of 2025.<br /><br />Expectations for Stalking Gaze are running high, especially after the positive reception of Paranoid, which garnered praise for its tense atmosphere and gripping psychological narrative.The success of Paranoid has set a strong precedent, and many are eager to see how Team Paranoid will push the boundaries of the psychological horror genre with this new project. Fans are anticipating another emotionally intense experience, trusting the team's ability to deliver an even more refined and unsettling game in Stalking Gaze.",
        date: "May 20, 2024",
        imgId: ""
    },
    {
        id: '2',
        name: 'Paranoid, selected to participate in EVA 2023',
        imageSrc: "../Recursos/Juegos/paranoid-image.png",
        info: "Paranoid has been making waves since its release in late June, showcasing the talent of Team Paranoid in the psychological horror genre. This 3D walking simulator, with its low poly aesthetic and unsettling atmosphere, has drawn in fans eager for a gripping, immersive experience.<br /><br />The project has been supported by BRISA, a publisher known for championing innovative indie titles.Their collaboration has played a key role in bringing Paranoid to a wider audience and ensuring its success.<br /><br />In exciting news, Paranoid has now been selected to participate in EVA 2023, a prestigious event in Argentina for indie developers and gaming enthusiasts.The event, taking place in late September, will offer attendees the chance to experience this haunting game firsthand and engage with the developers behind the project.<br /><br />If you're attending EVA 2023, be sure to stop by and try Paranoid for yourself, or download it directly from the EVA online catalogue to dive into the unsettling world that Team Paranoid has meticulously crafted.",
        date: "August 11, 2023",
        imgId: ""
    },
    {
        id: '3',
        name: 'Paranoid, nominated for "Best Original Idea" in EVA 2023',
        imageSrc: "../Recursos/Eva23.png",
        info: "Following the announcement of its participation in EVA 2023, Paranoid has now been nominated for the prestigious 'Best Original Idea' award at the event. This recognition highlights the unique and creative vision behind the psychological horror walking simulator, which has already captivated players with its low poly aesthetic and immersive narrative.<br /><br />Fans of Paranoid can now show their support by casting their votes through the official EVA 2023 website, allowing players to participate in the voting process from the comfort of their homes.For those attending the event in person, voting is also made easy with QR codes distributed throughout the venue.<br /><br />This nomination marks a significant milestone for Team Paranoid and BRISA, the publisher that has supported this project.With the game being in the spotlight, now is the perfect time for both long-time fans and newcomers to dive into the unsettling world of Paranoid and support its nomination for Best Original Idea.",
        date: "September 2, 2023",
        imgId: ""
    },
    {
        id: '4',
        name: 'Rotobox: Currently in development',
        imageSrc: "../Recursos/Juegos/rotobox-image.png",
        info: "Rotobox, the latest project from ByBox, is shaping up to be an innovative addition to the mobile puzzle game genre. Development began in June of this year, and the game draws inspiration from classic sokoban-style puzzles, challenging players to navigate complex levels by pushing boxes into designated positions. However, Rotobox introduces a unique twist: players will be able to use the gyroscope of their mobile devices to interact with the game, adding an immersive layer to the puzzle-solving experience.<br /><br />The game, set to be free-to-play, is being published by BRISA, continuing their support for creative and engaging indie titles.Rotobox is a follow-up to a previously released prototype, and with its growing features and enhanced gameplay mechanics, fans of the original will find plenty to be excited about.<br /><br />Scheduled for release in the summer of 2025, Rotobox promises to offer a fresh take on the sokoban genre, with mobile-specific features that set it apart from traditional puzzle games.Keep an eye out for this title as development progresses!",
        date: "July 27, 2024",
        imgId: "rotobox-image"
    },
    {
        id: '5',
        name: 'Xiaolin Towers: Historic academic achievement',
        imageSrc: "../Recursos/Juegos/xiaolintowers-image.png",
        info: "Xiaolin Towers, a parkour platformer developed by BRISA's team, has a unique origin story: it was created as a university project and has since made an unexpected impact. Developed as part of the 'Advanced Game Development' class in the second year of the Bachelor in Game Development at UADE, it became the first and only project to ever promote the class it was presented in.<br /><br />The game's standout feature is the randomization of its tower rooms, ensuring that each playthrough offers a fresh challenge with differently generated towers. This adds an element of surprise and replayability to the platforming experience, making Xiaolin Towers an engaging choice for parkour enthusiasts.<br /><br />Now available free to play on BRISA's website, Xiaolin Towers continues to demonstrate the creative and technical skills honed by the development team during their academic journey. The game stands as a testament to the quality of work being produced by students in the Advanced Game Development class, and its success highlights the potential for university projects to go beyond the classroom.",
        date: "November 29, 2023",
        imgId: ""
    },
    {
        id: '6',
        name: 'Rotobox is now seeking testers',
        imageSrc: "../Recursos/Juegos/rotobox-image.png",
        info: "In exciting news for puzzle game enthusiasts, ByBox has announced that their sokoban-style mobile game, Rotobox, is entering its next phase of development with a Beta version on the horizon. Since beginning development in June of this year, the team, along with publisher BRISA, has been hard at work refining the game's unique feature: the ability to use your mobile device's gyroscope to interact with puzzles. Now, they're ready to invite players to be part of the process.<br /><br />The development team is currently seeking testers to join the closed testing phase of Rotobox.This is a great opportunity for players to experience the game firsthand and provide valuable feedback that will help shape the final product.If you're interested in participating, you can send an email to BRISA's team for a chance to gain early access.<br /><br />Your input will be crucial in helping ByBox deliver the best possible version of Rotobox by its expected release in the summer of 2025. Whether you're a sokoban puzzle fan or just love innovative mobile games, this is your chance to make a direct impact on the game's development and ensure it offers the best experience for everyone.",
        date: "September 10, 2024",
        imgId: "rotobox-image"
    }
];

function updateContent(data, id) {
    const entry = data.find(item => item.id === id);
    if (entry) {
        //////Actualiza textos
        document.getElementById('name').innerText = entry.name;
        document.getElementById('date').innerText = entry.date;
        document.getElementById('info').innerHTML = entry.info;

        ////// Actualiza el src de la imagen
        const imgElement = document.getElementById('image');
        imgElement.src = entry.imageSrc;
        ////// Actualiza el ID de la imagen para 1 caso específico
        imgElement.id = entry.imgId;


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