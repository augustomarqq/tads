let menuFilmes = document.getElementById("menu-filmes")
let filmesContent = document.getElementById("filmes-content")
let liFilmes = document.getElementById("li-filmes")
let welcomeMsg = document.getElementById("welcome")

const renderizarFilmes = () => {
    filmes.forEach(filme => {
        let filmesDiv = document.createElement('div')
        filmesDiv.setAttribute('id', `filme-${filme.id}`)
        filmesDiv.classList.add('filme')
        filmesDiv.innerHTML = `
            <i class="fa-solid fa-trash-can" onclick="removerFilme('${filme.title}')"></i>
            <h3>${filme.title}</h3>
            <img src="${filme.poster}" alt="${filme.title}">
            <p>${filme.year}<p>
            <p>${filme.genre}<p>
        `
        filmesContent.insertBefore(filmesDiv, filmesContent.firstChild);
    })
}

const renderizarSeries = () => {
    series.forEach(serie => {
        let seriesDiv = document.createElement('div')
        seriesDiv.setAttribute('id', `serie-${serie.id}`)
        seriesDiv.classList.add('serie')
        seriesDiv.innerHTML = `
            <i class="fa-solid fa-trash-can" onclick="removerSerie('${serie.title}')"></i>
            <h3>${serie.title}</h3>
            <img src="${serie.poster}" alt="${serie.title}">
            <p>${serie.year}</p>
            <p>${serie.genre}</p>
        `
        seriesContent.insertBefore(seriesDiv, seriesContent.firstChild)
    })
}

const renderizarAnimes = () => {
    animes.forEach(anime => {
        let animesDiv = document.createElement('div')
        animesDiv.setAttribute('id', `anime-${anime.id}`)
        animesDiv.classList.add('anime')
        animesDiv.innerHTML = `
            <i class="fa-solid fa-trash-can" onclick="removerAnime('${anime.title}')"></i>
            <h3>${anime.title}</h3>
            <img src="${anime.poster}" alt="${anime.title}">
            <p>${anime.year}</p>
            <p>${anime.genre}</p>
        `

        animesContent.insertBefore(animesDiv, animesContent.firstChild)
    })
}


menuFilmes.addEventListener("click", function(e) {
    e.preventDefault()

    addButton.classList.remove('esconder-conteudo')
    addButton.classList.add('exibir-conteudo')
    // rmvButton.classList.remove('esconder-conteudo')
    // rmvButton.classList.add('exibir-conteudo')
    welcomeMsg.classList.remove('exibir-conteudo')
    welcomeMsg.classList.add('esconder-conteudo')
    seriesContent.innerHTML = ""
    animesContent.innerHTML = ""

    liSeries.classList.remove('menu-selecionado')
    liSeries.classList.add('menu-normal')
    liAnimes.classList.remove('menu-selecionado')
    liAnimes.classList.add('menu-normal')
    liFilmes.classList.remove('menu-normal')
    liFilmes.classList.add('menu-selecionado')

    addButton.innerText = "Adicionar novo filme"
    filmesContent.innerHTML = ""
    renderizarFilmes()
    seriesContent.classList.remove('exibir-conteudo')
    seriesContent.classList.add('esconder-conteudo')
    animesContent.classList.remove('exibir-conteudo')
    animesContent.classList.add('esconder-conteudo')
    filmesContent.classList.remove('esconder-conteudo')
    filmesContent.classList.add('exibir-conteudo')
})

// 
// ABA SERIES
//

let menuSeries = document.getElementById("menu-series")
let seriesContent = document.getElementById("series-content")
let liSeries = document.getElementById("li-series")

menuSeries.addEventListener("click", function(e) {
    e.preventDefault()

    addButton.classList.remove('esconder-conteudo')
    addButton.classList.add('exibir-conteudo')
    // rmvButton.classList.remove('esconder-conteudo')
    // rmvButton.classList.add('exibir-conteudo')
    welcomeMsg.classList.remove('exibir-conteudo')
    welcomeMsg.classList.add('esconder-conteudo')
    filmesContent.innerHTML = ""
    animesContent.innerHTML = ""

    liFilmes.classList.remove('menu-selecionado')
    liFilmes.classList.add('menu-normal')
    liAnimes.classList.remove('menu-selecionado')
    liAnimes.classList.add('menu-normal')
    liSeries.classList.remove('menu-normal')
    liSeries.classList.add('menu-selecionado')

    addButton.innerText = "Adicionar nova série"
    seriesContent.innerHTML = ""
    renderizarSeries()
    filmesContent.classList.remove('exibir-conteudo')
    filmesContent.classList.add('esconder-conteudo')
    animesContent.classList.remove('exibir-conteudo')
    animesContent.classList.add('esconder-conteudo')
    seriesContent.classList.remove('esconder-conteudo')
    seriesContent.classList.add('exibir-conteudo')

})

// 
// ABA ANIMES
//

let menuAnimes = document.getElementById("menu-animes")
let animesContent = document.getElementById("animes-content")
let liAnimes = document.getElementById("li-animes")

menuAnimes.addEventListener("click", function(e) {
    e.preventDefault()

    addButton.classList.remove('esconder-conteudo')
    addButton.classList.add('exibir-conteudo')
    // rmvButton.classList.remove('esconder-conteudo')
    // rmvButton.classList.add('exibir-conteudo')
    welcomeMsg.classList.remove('exibir-conteudo')
    welcomeMsg.classList.add('esconder-conteudo')
    filmesContent.innerHTML = ""
    seriesContent.innerHTML = ""

    liFilmes.classList.remove('menu-selecionado')
    liFilmes.classList.add('menu-normal')
    liSeries.classList.remove('menu-selecionado')
    liSeries.classList.add('menu-normal')
    liAnimes.classList.remove('menu-normal')
    liAnimes.classList.add('menu-selecionado')

    addButton.innerText = "Adicionar novo anime"
    animesContent.innerHTML = ""
    renderizarAnimes()
    filmesContent.classList.remove('exibir-conteudo')
    filmesContent.classList.add('esconder-conteudo')
    seriesContent.classList.remove('exibir-conteudo')
    seriesContent.classList.add('esconder-conteudo')
    animesContent.classList.remove('esconder-conteudo')
    animesContent.classList.add('exibir-conteudo')

})

//
// Adicionar e Remover obras
// 

const addButton = document.getElementById('add-button')
const rmvButton = document.getElementById("rmv-button")
const addDialog = document.getElementById('add-dialog')
const closeDialog = document.getElementById('close-dialog')
const addForm = document.getElementById('add-form')

addButton.addEventListener('click', () => {
    addDialog.showModal();
});

closeDialog.addEventListener('click', () => {
    addDialog.close();
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    const poster = document.getElementById('poster').value;

    if (addButton.textContent === "Adicionar novo filme") {
        const newMovie = {
            id: filmes.length + 1,
            title: title,
            year: year,
            genre: genre,
            poster: poster
        };
        filmes.push(newMovie)
        console.log('Filme adicionado:', newMovie);
        filmesContent.innerHTML = ""
        renderizarFilmes()

    } else if (addButton.textContent === "Adicionar nova série") {
        const newSerie = {
            id: series.length + 1,
            title: title,
            year: year,
            genre: genre,
            poster: poster
        };
        series.push(newSerie)
        console.log('Série adicionada:', newSerie);
        seriesContent.innerHTML = ""
        renderizarSeries()

    } else if (addButton.textContent === "Adicionar novo anime") {
        const newAnime = {
            id: animes.length + 1,
            title: title,
            year: year,
            genre: genre,
            poster: poster
        };
        animes.push(newAnime);
        console.log('Anime adicionado:', newAnime);
        animesContent.innerHTML = ""
        renderizarAnimes()
    }

    addDialog.close();
});

function removerFilme(nomeDoFilme) {
    const index = filmes.findIndex(filme => filme.title === nomeDoFilme);
    if (index !== -1) {
        const confirmar = window.confirm(`Tem certeza que deseja excluir o filme "${nomeDoFilme}"?`);
        
        if (confirmar) {
            filmes.splice(index, 1);
            alert(`Filme "${nomeDoFilme}" foi removido com sucesso.`);

            for (let i = 0; i < filmes.length; i++) {
                filmes[i].id = i + 1;
            }
            
            filmesContent.innerHTML = ""
            renderizarFilmes()
        } else {
            alert(`A exclusão do filme "${nomeDoFilme}" foi cancelada.`);
        }
    } else {
        alert(`Nenhum filme com o nome "${nomeDoFilme}" encontrado.`);
    }
}

function removerSerie(nomeDaSerie) {
    const index = series.findIndex(serie => serie.title === nomeDaSerie);
    if (index !== -1) {
        const confirmar = window.confirm(`Tem certeza que deseja excluir a série "${nomeDaSerie}"?`);
        
        if (confirmar) {
            series.splice(index, 1);
            alert(`Série "${nomeDaSerie}" foi removido com sucesso.`);

            for (let i = 0; i < series.length; i++) {
                series[i].id = i + 1;
            }

            seriesContent.innerHTML = ""
            renderizarSeries()
        } else {
            alert(`A exclusão da Série "${nomeDaSerie}" foi cancelada.`);
        }
    } else {
        alert(`Nenhuma série com o nome "${nomeDaSerie}" encontrado.`);
    }
}

function removerAnime(nomeDoAnime) {
    const index = animes.findIndex(anime => anime.title === nomeDoAnime);
    if (index !== -1) {
        const confirmar = window.confirm(`Tem certeza que deseja excluir o anime "${nomeDoAnime}"?`);
        
        if (confirmar) {
            animes.splice(index, 1);
            alert(`Anime "${nomeDoAnime}" foi removido com sucesso.`);

            for (let i = 0; i < animes.length; i++) {
                animes[i].id = i + 1;
            }

            animesContent.innerHTML = ""
            renderizarAnimes()
        } else {
            alert(`A exclusão do anime "${nomeDoAnime}" foi cancelada.`);
        }
    } else {
        alert(`Nenhum anime com o nome "${nomeDoAnime}" encontrado.`);
    }
}