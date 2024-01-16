import User from "./users.js";
import Token from "./token.js";
import Board from "./boards.js";
import List from "./lists.js";
import Card from "./cards.js";

const classesToToggle = document.querySelectorAll(
  ".show-content, .hide-content"
);
let forms = document.getElementById("forms");
let login = document.getElementById("login");
let formLogin = document.getElementById("form-login");
let userAvatar = document.getElementById("user-avatar");
let formCreateUser = document.getElementById("form-create-user");
let createUser = document.getElementById("create-user");
let menuProfile = document.getElementById("menu-profile");
let listUsers = document.getElementById("list-users");
let btnListUsers = document.getElementById("btn-users");
let spanMeContent = document.getElementById("me-content");
let content = document.getElementById("content");
let spanMe = document.getElementById("me");
let sidebar = document.getElementById("sidebar");
let headerMenu = document.getElementById("home-header");
let homeIntro = document.getElementById("home-intro");
let homeSair = document.getElementById("home-sair");
let refCreateAcc = document.getElementById("ref-create-acc");
let refLogin = document.getElementById("ref-fazer-login");
let mainContainer = document.getElementById("main-container");
let menuUsers = document.getElementById("menu-users");
let users = document.getElementById("users");
let boardsContent = document.getElementById("boards-content");
let homeHome = document.getElementById("home-home");
let boards = document.getElementById("menu-boards");
let listBoards = document.getElementById("list-boards");
let listsMenu = document.getElementById("lists-menu");
let listLists = document.getElementById("lists");
let formCreateBoard = document.getElementById("form-board");
let listsContent = document.getElementById("lists-content");
let formCreateList = document.getElementById("form-list");
let addDialog = document.getElementById("add-card-dialog");
let closeDialog = document.getElementById("close-dialog");
let formCreateCard = document.getElementById("form-add-card");
let menuFavs = document.getElementById("menu-favs");

function getTokenReload() {
  if (localStorage.getItem("token")) return localStorage.getItem("token");
}

let verify = getTokenReload();
async function verificarToken() {
  if (verify) {
    mainContainer.classList.remove("logged-off");
    mainContainer.classList.add("logged-in");
    forms.classList.remove("show-content-grid");
    forms.classList.add("hide-content");

    const storedAvatarUrl = localStorage.getItem("userAvatar");
    if (storedAvatarUrl) {
      userAvatar.src = storedAvatarUrl;
      userAvatar.alt = "Avatar do usuário";
    }

    listBoards.innerHTML = "";
    Board.myBoards().then((boards) => {
      for (let board of boards) {
        const li = document.createElement("li");
        li.setAttribute("board-id", board.id);
        const nameDiv = document.createElement("div");
        nameDiv.id = "board-title";
        nameDiv.innerHTML = board.name;
        nameDiv.style.backgroundColor = board.color;
        const starDiv = document.createElement("div");
        starDiv.id = "fav-star";
        starDiv.style.backgroundColor = board.color;
        const trashIcon = document.createElement("i");
        trashIcon.id = "trash-icon";
        trashIcon.className = "fa-solid fa-trash";
        trashIcon.setAttribute("trash-id", board.id);
        starDiv.appendChild(trashIcon);
        const starIcon = document.createElement("i");
        starIcon.id = "star-icon";
        const isFavorite = board.favorito === true || board.favorito === "true";
        starIcon.className = `fa-${isFavorite ? "solid" : "regular"} fa-star`;
        starIcon.setAttribute("star-id", board.id);
        starDiv.appendChild(starIcon);
        li.appendChild(nameDiv);
        li.appendChild(starDiv);
        listBoards.appendChild(li);
      }
    });

    classesToToggle.forEach((element) => {
      if (
        element === boardsContent ||
        element === sidebar ||
        element === headerMenu
      ) {
        element.classList.remove("hide-content");
        element.classList.add("show-content");
        headerMenu.classList.add("show-content-flex");
      } else {
        element.classList.remove("show-content");
        element.classList.add("hide-content");
      }
    });
  } else {
    userAvatar.classList.add("hide-content");
  }
}

verificarToken();

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(formLogin);
  User.login(formData).then((token) => {
    Token.saveToken(token);

    mainContainer.classList.remove("logged-off");
    mainContainer.classList.add("logged-in");
    forms.classList.remove("show-content-grid");
    forms.classList.add("hide-content");
    userAvatar.classList.remove("hide-content");
    userAvatar.classList.add("show-content");

    classesToToggle.forEach((element) => {
      if (
        element === boardsContent ||
        element === sidebar ||
        element === headerMenu
      ) {
        element.classList.remove("hide-content");
        element.classList.add("show-content");
        headerMenu.classList.add("show-content-flex");
      } else {
        element.classList.remove("show-content");
        element.classList.add("hide-content");
      }
    });

    listBoards.innerHTML = "";
    Board.myBoards().then((boards) => {
      for (let board of boards) {
        const li = document.createElement("li");
        li.setAttribute("board-id", board.id);
        const nameDiv = document.createElement("div");
        nameDiv.id = "board-title";
        nameDiv.innerHTML = board.name;
        nameDiv.style.backgroundColor = board.color;
        const starDiv = document.createElement("div");
        starDiv.id = "fav-star";
        starDiv.style.backgroundColor = board.color;
        const trashIcon = document.createElement("i");
        trashIcon.id = "trash-icon";
        trashIcon.className = "fa-solid fa-trash";
        trashIcon.setAttribute("trash-id", board.id);
        starDiv.appendChild(trashIcon);
        const starIcon = document.createElement("i");
        starIcon.id = "star-icon";
        const isFavorite = board.favorito === true || board.favorito === "true";
        starIcon.className = `fa-${isFavorite ? "solid" : "regular"} fa-star`;
        starIcon.setAttribute("star-id", board.id);
        starDiv.appendChild(starIcon);
        li.appendChild(nameDiv);
        li.appendChild(starDiv);
        listBoards.appendChild(li);
      }
    });

    User.me()
      .then((me) => {
        const nameString = `Área de trabalho de ${me.name}`;
        homeIntro.innerHTML = nameString;

        userAvatar.src = me.avatar_url;
        userAvatar.alt = "Avatar do usuário";
        localStorage.setItem("userAvatar", me.avatar_url);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
});

menuUsers.addEventListener("click", (event) => {
  event.preventDefault();

  forms.classList.remove("hide-content");
  forms.classList.add("show-content-grid");

  classesToToggle.forEach((element) => {
    if (element === users || element === sidebar || element === headerMenu) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
  resetColors();
});

btnListUsers.addEventListener("click", (event) => {
  event.preventDefault();

  listUsers.innerHTML = "";
  User.getAll().then((users) => {
    for (let user of users) {
      const li = document.createElement("li");
      li.innerHTML = user.name;
      listUsers.appendChild(li);
    }
  });
});

formCreateUser.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("new-name").value;
  const username = document.getElementById("new-username").value;
  const password = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const avatar = document.getElementById("new-avatar").value;

  if (password === confirmPassword) {
    console.log(name, username, password, avatar);
    User.create(name, username, password, avatar)
      .then((user) => {
        console.log(user);
        alert("Usuário cadastrado com sucesso!");
        formCreateUser.reset();
      })
      .catch((error) => {
        console.log(error.message);
        alert("Erro ao cadastrar o usuário. Por favor, preencha novamente.");
      });
  } else {
    alert("A senhas não coincidem. Por favor, tente novamente.");
  }
});

refCreateAcc.addEventListener("click", (event) => {
  event.preventDefault();

  classesToToggle.forEach((element) => {
    if (element === createUser) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
});

refLogin.addEventListener("click", (event) => {
  event.preventDefault();

  classesToToggle.forEach((element) => {
    if (element === login) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
});

homeSair.addEventListener("click", (event) => {
  event.preventDefault();
  Token.rmvToken();
  localStorage.removeItem("userAvatar");
  localStorage.removeItem("selectedBoardId");
  localStorage.removeItem("selectedListId");

  spanMe.innerHTML = "";
  homeIntro.innerHTML = "";
  listBoards.innerHTML = "";

  mainContainer.classList.remove("logged-in");
  mainContainer.classList.add("logged-off");
  forms.classList.remove("hide-content");
  forms.classList.add("show-content-grid");
  userAvatar.classList.remove("show-content");
  userAvatar.classList.add("hide-content");

  classesToToggle.forEach((element) => {
    if (element === forms || element === login) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
  resetColors();
});

menuProfile.addEventListener("click", (event) => {
  event.preventDefault();

  forms.classList.remove("hide-content");
  forms.classList.add("show-content-grid");

  spanMe.innerHTML = "";
  User.me()
    .then((me) => {
      const userString = `Name: ${me.name}<br>Username: ${me.username}<br> Avatar:`;
      spanMe.innerHTML = userString;

      const avatarImg = document.createElement("img");
      avatarImg.src = me.avatar_url;
      avatarImg.alt = "Avatar do usuário";
      avatarImg.width = 64;
      avatarImg.height = 64;

      spanMe.appendChild(avatarImg);
    })
    .catch((error) => {
      console.error(error.message);
    });

  classesToToggle.forEach((element) => {
    if (
      element === spanMeContent ||
      element === sidebar ||
      element === headerMenu
    ) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
      headerMenu.classList.add("show-content-flex");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
  resetColors();
});

boards.addEventListener("click", (event) => {
  event.preventDefault();

  listBoards.innerHTML = "";
  Board.myBoards().then((boards) => {
    for (let board of boards) {
      const li = document.createElement("li");
      li.setAttribute("board-id", board.id);
      const nameDiv = document.createElement("div");
      nameDiv.id = "board-title";
      nameDiv.innerHTML = board.name;
      nameDiv.style.backgroundColor = board.color;
      const starDiv = document.createElement("div");
      starDiv.id = "fav-star";
      starDiv.style.backgroundColor = board.color;
      const trashIcon = document.createElement("i");
      trashIcon.id = "trash-icon";
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.setAttribute("trash-id", board.id);
      starDiv.appendChild(trashIcon);
      const starIcon = document.createElement("i");
      starIcon.id = "star-icon";
      const isFavorite = board.favorito === true || board.favorito === "true";
      starIcon.className = `fa-${isFavorite ? "solid" : "regular"} fa-star`;
      starIcon.setAttribute("star-id", board.id);
      starDiv.appendChild(starIcon);
      li.appendChild(nameDiv);
      li.appendChild(starDiv);
      listBoards.appendChild(li);
    }
  });

  forms.classList.remove("show-content-grid");
  forms.classList.add("hide-content");

  classesToToggle.forEach((element) => {
    if (
      element === boardsContent ||
      element === sidebar ||
      element === headerMenu
    ) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
  resetColors();
});

menuFavs.addEventListener("click", async (event) => {
    event.preventDefault();
  
    forms.classList.remove("show-content-grid");
    forms.classList.add("hide-content");
  
    classesToToggle.forEach((element) => {
      if (
        element === boardsContent ||
        element === sidebar ||
        element === headerMenu
      ) {
        element.classList.remove("hide-content");
        element.classList.add("show-content");
      } else {
        element.classList.remove("show-content");
        element.classList.add("hide-content");
      }
    });
    resetColors();
  
    listBoards.innerHTML = "";
    const allBoards = await Board.myBoards();
  
    // Filtra apenas os boards com favorito=true
    const favoriteBoards = allBoards.filter((board) => board.favorito === true);
  
    for (let board of favoriteBoards) {
      const li = document.createElement("li");
      li.setAttribute("board-id", board.id);
      const nameDiv = document.createElement("div");
      nameDiv.id = "board-title";
      nameDiv.innerHTML = board.name;
      nameDiv.style.backgroundColor = board.color;
      const starDiv = document.createElement("div");
      starDiv.id = "fav-star";
      starDiv.style.backgroundColor = board.color;
      const trashIcon = document.createElement("i");
      trashIcon.id = "trash-icon";
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.setAttribute("trash-id", board.id);
      starDiv.appendChild(trashIcon);
      const starIcon = document.createElement("i");
      starIcon.id = "star-icon";
      starIcon.className = "fa-solid fa-star"; // Ajuste para garantir que seja sempre favorito
      starIcon.setAttribute("star-id", board.id);
      starDiv.appendChild(starIcon);
      li.appendChild(nameDiv);
      li.appendChild(starDiv);
      listBoards.appendChild(li);
    }
  });

homeHome.addEventListener("click", (event) => {
  event.preventDefault();

  listBoards.innerHTML = "";
  Board.myBoards().then((boards) => {
    for (let board of boards) {
      const li = document.createElement("li");
      li.setAttribute("board-id", board.id);
      const nameDiv = document.createElement("div");
      nameDiv.id = "board-title";
      nameDiv.innerHTML = board.name;
      nameDiv.style.backgroundColor = board.color;
      const starDiv = document.createElement("div");
      starDiv.id = "fav-star";
      starDiv.style.backgroundColor = board.color;
      const trashIcon = document.createElement("i");
      trashIcon.id = "trash-icon";
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.setAttribute("trash-id", board.id);
      starDiv.appendChild(trashIcon);
      const starIcon = document.createElement("i");
      starIcon.id = "star-icon";
      const isFavorite = board.favorito === true || board.favorito === "true";
      starIcon.className = `fa-${isFavorite ? "solid" : "regular"} fa-star`;
      starIcon.setAttribute("star-id", board.id);
      starDiv.appendChild(starIcon);
      li.appendChild(nameDiv);
      li.appendChild(starDiv);
      listBoards.appendChild(li);
    }
  });

  forms.classList.remove("show-content-grid");
  forms.classList.add("hide-content");

  classesToToggle.forEach((element) => {
    if (
      element === boardsContent ||
      element === sidebar ||
      element === headerMenu
    ) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
  resetColors();
});

formCreateBoard.addEventListener("submit", (event) => {
  event.preventDefault();

  const boardName = document.getElementById("new-title").value;
  const boardBackground = document.getElementById("color-dropdown").value;

  console.log(boardName, boardBackground);
  Board.create(boardName, boardBackground)
    .then((board) => {
      console.log(board);
      alert("Quadro novo criado com sucesso!");
      formCreateBoard.reset();

      const li = document.createElement("li");
      li.setAttribute("board-id", board.id);
      const nameDiv = document.createElement("div");
      nameDiv.id = "board-title";
      nameDiv.innerHTML = board.name;
      nameDiv.style.backgroundColor = board.color;
      const starDiv = document.createElement("div");
      starDiv.id = "fav-star";
      starDiv.style.backgroundColor = board.color;
      const trashIcon = document.createElement("i");
      trashIcon.id = "trash-icon";
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.setAttribute("trash-id", board.id);
      starDiv.appendChild(trashIcon);
      const starIcon = document.createElement("i");
      starIcon.id = "star-icon";
      const isFavorite = board.favorito === true || board.favorito === "true";
      starIcon.className = `fa-${isFavorite ? "solid" : "regular"} fa-star`;
      starIcon.setAttribute("star-id", board.id);
      starDiv.appendChild(starIcon);
      li.appendChild(nameDiv);
      li.appendChild(starDiv);
      listBoards.appendChild(li);
    })
    .catch((error) => {
      console.log(error.message);
      alert("Erro ao criar quadro. Por favor, tente novamente.");
    });
});

listBoards.addEventListener("click", async function (event) {
  event.preventDefault();

  const liElement = event.target.closest("li");
  const boardId = liElement.getAttribute("board-id");
  const trashIcon = event.target.closest("i.fa-trash");
  const starIcon = event.target.closest("i.fa-star");

  if (trashIcon) {
    const isConfirmed = confirm(
      `Você quer realmente excluir o board ${boardId}?`
    );

    if (isConfirmed) {
      console.log("Board a ser deletado:", boardId);
      Board.deleteBoard(boardId);
      liElement.remove();
    }
  } else if (starIcon) {
    if (starIcon.classList.contains("fa-solid")) {
      starIcon.classList.remove("fa-solid", "fa-star");
      starIcon.classList.add("fa-regular", "fa-star");
      await updateFavoriteStatus(boardId, false);
    } else {
      starIcon.classList.remove("fa-regular", "fa-star");
      starIcon.classList.add("fa-solid", "fa-star");
      await updateFavoriteStatus(boardId, true);
    }
  } else {
    localStorage.setItem("selectedBoardId", boardId);
    console.log("Board selecionado:", boardId);
    const selectedBoardColor =
      liElement.querySelector("#board-title").style.backgroundColor;
    listLists.style.backgroundColor = selectedBoardColor;
    listsContent.style.backgroundColor = selectedBoardColor;
    listsMenu.style.backgroundColor = selectedBoardColor;
    content.style.backgroundColor = selectedBoardColor;

    if (boardId) {
      generateLists(boardId);
    }
    classesToToggle.forEach((element) => {
      if (
        element === listsContent ||
        element === sidebar ||
        element === headerMenu
      ) {
        element.classList.remove("hide-content");
        element.classList.add("show-content");
      } else {
        element.classList.remove("show-content");
        element.classList.add("hide-content");
      }
    });
  }
});

async function generateLists(boardId) {
  const boardLists = await Board.getBoardLists(boardId);

  listLists.innerHTML = "";

  for (let list of boardLists) {
    const divMain = document.createElement("div");
    divMain.id = `list-${list.id}`;
    divMain.classList.add("list-container");

    // Div para o list.name
    const divListName = document.createElement("div");
    divListName.classList.add("list-name");
    divListName.textContent = list.name;

    // Div para os card-item
    const divCardContainer = document.createElement("div");
    divCardContainer.classList.add("card-container");

    divMain.appendChild(divListName);
    divMain.appendChild(divCardContainer);

    listLists.appendChild(divMain);

    for (let card of list.cards) {
      const divCard = document.createElement("div");
      divCard.classList.add("card-item");
      divCard.textContent = card.name;
      divCard.id = `card-${card.id}`;
      console.log(card);
      divCardContainer.appendChild(divCard);
    }

    const addCardButton = document.createElement("button");
    addCardButton.classList.add("add-card-button");
    addCardButton.textContent = "Adicionar um cartão";
    divCardContainer.appendChild(addCardButton);
    addCardButton.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.setItem("selectedListId", list.id);
      console.log("Botão Adicionar novo cartão clicado para a lista", list.id);
      addDialog.showModal();
    });
  }
}

formCreateList.addEventListener("submit", (event) => {
  event.preventDefault();

  const listName = document.getElementById("new-list-title").value;
  const selectedBoardId = localStorage.getItem("selectedBoardId");
  const position = 0;
  console.log(listName, selectedBoardId, position);
  List.create(listName, selectedBoardId, position)
    .then((list) => {
      console.log(list);
      alert("Lista nova criada com sucesso!");
      formCreateList.reset();
      generateLists(selectedBoardId);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
      alert("Erro ao criar lista. Por favor, tente novamente.");
    });
});

formCreateCard.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const selectedBoardId = localStorage.getItem("selectedBoardId");
  const cardTitle = document.getElementById("card-title").value;
  const selectedListId = localStorage.getItem("selectedListId");
  console.log(cardTitle, selectedListId);
  Card.create(cardTitle, selectedListId)
    .then((card) => {
      console.log(card);
      alert("Card novo criado com sucesso");
      formCreateCard.reset();
      generateLists(selectedBoardId);
      addDialog.close();
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
      alert("Erro ao criar novo card. Por favor, tente novamente");
    });
});

closeDialog.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  addDialog.close();
});

function resetColors() {
  listLists.style.backgroundColor = "";
  listsContent.style.backgroundColor = "";
  listsMenu.style.backgroundColor = "";
  content.style.backgroundColor = "";
}

async function updateFavoriteStatus(boardId, isFavorite) {
  await Board.updateBoardInfo(boardId, { favorito: isFavorite });
}
