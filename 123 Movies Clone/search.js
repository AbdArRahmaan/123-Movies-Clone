

const suggestions = [
    {
        title: "Nosferatu",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/nosferatu-1630858195.webp",
        genre: ["Fantasy", "Horror", "Mystery"]
    },
    {
        title: "Heretic",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/heretic-1630857913.webp",
        genre: ["Horror", "Thriller"],
    },
    {
        title: "Gladiator II",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/gladiator-ii-1630857926.webp",
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        title: "Red One",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/red-one-1630857912.webp",
        genre: ["Action", "Adventure", "Comedy"]
    },
    {
        title: "Venom: The Last Dance",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/venom-the-last-dance-1630857833.webp",
        genre: ["Action", "Adventure", "Sci-Fi"]
    },
    {
        title: "Conclave",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/conclave-1630858009.webp",
        genre: ["Drama", "Thriller"]
    },
    {
        title: "We Live In Time",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/we-live-in-time-1630857995.webp",
        genre: ["Drama", "Romance"]
    },
    {
        title: "Saturday Night",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/saturday-night-1630857934.webp",
        genre: ["Biography", "Comedy", "Drama"]
    },
    {
        title: "Megapolis",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/megalopolis-1630857706.webp",
        genre: ["Drama", "Sci-Fi"]
    },
    {
        title:"My Old Ass",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/my-old-ass-1630857904.webp",
        genre: ["Comedy"]
    },
    {
        title:"Joker: Folie à Deux",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/joker-folie-a-deux-1630857718.webp",
        genre:["Crime", "Drama", "Musical"]
    },
        {
        title:"The Apprentice",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/the-apprentice-1630857780.webp",
        genre: ["Biography", "Drama", "History"]
    },
    {
        title:"Beetlejuice Beetlejuice",
        image: "https://img.icdn.my.id/thumb/w_320/h_480/beetlejuice-beetlejuice-1630857597.webp",
        genre: [ "Comedy", "Fantasy", "Horror"]
    },
    {
        title:"The Killer",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/the-killer-1630857507.webp",
        genre: ["Action"]
    },
    {
        title:"Twisters",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/twisters-1630857443.webp",
        genre: ["Action", "Adventure", "Thriller"],
    },
    {   title:"Bad seed",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/bad-seed-1630858241.webp",
        genre: ["Mystery", "Thriller"],

    },
    {
        title:"Black Box Diaries",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/black-box-diaries-1630858240.webp",
        genre: ["Documentary"],
    },
    {
        title:"Screw Mickiewicz",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/screw-mickiewicz-1630858238.webp",
        genre: ["Drama"],
    },
    {
        title:"Shimmy: The First Monkey King",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/shimmy-the-first-monkey-king-1630858233.webp",
        genre: ["Family"],
    },
    {
        title:"Druzyna AA",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/druzyna-aa-1630858232.webp",
        genre: ["Drama"],
    },
    {
        title:"We Were Dangerous",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/we-were-dangerous-1630858231.webp",
        genre: ["Drama"],
    },
    {
        title:"Arena Wars",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/arena-wars-1630858225.webp",
        genre: ["Action", "Comedy", "Sci-Fi"]
    },
    {
        title:"Mufasa: The Lion King",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/mufasa-the-lion-king-1630858185.webp",
        genre: ["Animation, Adventure, Drama"]
    },
    {
        title:"Kromoleo",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/kromoleo-1630858224.webp"
        
    },
    {
        title:"Kang Mak",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/kang-mak-1630858223.webp"
    },
    {
        title:"Testament: The Parables Retold",
        image:"https://img.icdn.my.id/thumb/w_320/h_480/testament-the-parables-retold-1630858222.webp"
    }
    
    // Add more suggestions as needed
];
// Retrieve agenda from localStorage
let agenda = localStorage.getItem("agenda");
if (!agenda) {
    console.error("Agenda is not defined or missing in localStorage.");
    // Optional: Redirect to the home page or show an error message
} else {
    const lowercasedAgenda = agenda.toLowerCase();

    // Filter suggestions
    const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.title.toLowerCase().includes(agenda.toLowerCase())
    );
    // Clear the current container
    const suggestionsContainer = document.querySelector(".suggestionsContainer");

    // Render filtered suggestions
    filteredSuggestions.forEach((suggestion) => {
        const titleClass = suggestion.title.length >= 13 ? "bigTitle" : "Title";
        suggestionsContainer.innerHTML = `
            <div class = "suggestion">
                <div class="bottomText">
                    <p class="${titleClass}">${suggestion.title}</p>
                </div>
                <div class="upperpart">
                    <img class="play" src="Images/image copy.png" alt="Play">
                    <img src="${suggestion.image}" class="suggestionimg" alt="${suggestion.altText}">
                </div>
            </div>
        `;

        container.appendChild(suggestionsContainer);
    });
} 
const searchBar = document.getElementById("searchBar");
const searchbutton = document.getElementById("searcher");
let research;
searchbutton.addEventListener("click", function(){agenda = (searchBar.value); localStorage.setItem("agenda", agenda); window.location.href = "123movies-search.html"} );
searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
    {agenda = (searchBar.value); localStorage.setItem("agenda", agenda); window.location.href = "123movies-search.html"}
}
);