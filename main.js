console.log("it's on");
fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        const title = document.querySelector('#category-label');
        const {CostumeType, Year} = data;
        title.innerHTML = `${CostumeType} ${Year}`;
        // title.innerHTML = data.CostumeType + " " + data.Year;
        const section = document.querySelector('#costume-section');
        for (const costume of data.Costumes){
            const article = document.createElement('article');

            const header = document.createElement('h3');
            header.innerHTML = costume.Name;
            article.appendChild(header);

            const paragraph = document.createElement('p');
            paragraph.innerHTML = costume.IsMovieRelated ? "This was also a movie" : "This was not a movie";
            article.appendChild(paragraph);

            section.appendChild(article);
        }
    });