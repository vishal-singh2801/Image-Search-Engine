const accessKey = "oUGAR7s7UDwctzXntl08EfnmyRR-VjfM6PfLWJlkXcI";

const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = SearchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        SearchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);
    })
    ShowMoreBtn.style.display = "block"
}

SearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});


ShowMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})