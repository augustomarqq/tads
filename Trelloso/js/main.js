import User from "./users.js";
import Token from "./token.js";
import Board from "./boards.js";

const classesToToggle = document.querySelectorAll(
  ".show-content, .hide-content"
);
let forms = document.getElementById("forms");
let login = document.getElementById("login");
let formLogin = document.getElementById("form-login");
let formCreateUser = document.getElementById("form-create-user");
let createUser = document.getElementById("create-user");
let listUsers = document.getElementById("list-users");
let btnListUsers = document.getElementById("btn-users");
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
let createBoard = document.getElementById("create-new-board");
let formCreateBoard = document.getElementById("form-board");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = new FormData(formLogin);
  User.login(formData).then((token) => {
    Token.saveToken(token);

    mainContainer.classList.remove("logged-off");
    mainContainer.classList.add("logged-in");

    classesToToggle.forEach((element) => {
      if (element === spanMe || element === sidebar || element === headerMenu) {
        element.classList.remove("hide-content");
        element.classList.add("show-content");
        headerMenu.classList.add("show-content-flex");
      } else {
        element.classList.remove("show-content");
        element.classList.add("hide-content");
      }
    });

    User.me()
      .then((me) => {
        const userString = `Name: ${me.name}<br>Username: ${me.username}<br> Avatar: ${me.avatar_url}`;
        spanMe.innerHTML = userString;
        const nameString = `Área de trabalho de ${me.name}`;
        homeIntro.innerHTML = nameString;
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

  spanMe.innerHTML = "";
  homeIntro.innerHTML = "";

  mainContainer.classList.remove("logged-in");
  mainContainer.classList.add("logged-off");
  forms.classList.remove("hide-content");
  forms.classList.add("show-content-grid");

  classesToToggle.forEach((element) => {
    if (element === forms || element === login) {
      element.classList.remove("hide-content");
      element.classList.add("show-content");
    } else {
      element.classList.remove("show-content");
      element.classList.add("hide-content");
    }
  });
});

boards.addEventListener("click", (event) => {
  event.preventDefault();

  listBoards.innerHTML = "";
  Board.myBoards().then((boards) => {
    for (let board of boards) {
      const li = document.createElement("li");
      li.innerHTML = board.name;
      li.style.backgroundColor = board.color;
      const starContainer = document.createElement("div");
      starContainer.id = "fav-star";
      starContainer.style.backgroundColor = board.color;
      const starIcon = document.createElement("i");
      starIcon.className = "fa-regular fa-star";
      starContainer.appendChild(starIcon);
      li.appendChild(starContainer);
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
});

homeHome.addEventListener("onclick", (event) => {
  event.preventDefault();

  listBoards.innerHTML = "";
  Board.myBoards().then((boards) => {
    for (let board of boards) {
      const li = document.createElement("li");
      li.innerHTML = board.boardName;
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
      li.innerHTML = board.name;
      li.style.backgroundColor = board.color;
      const starContainer = document.createElement("div");
      starContainer.id = "fav-star";
      starContainer.style.backgroundColor = board.color;
      const starIcon = document.createElement("i");
      starIcon.className = "fa-regular fa-star";
      starContainer.appendChild(starIcon);
      li.appendChild(starContainer);
      listBoards.appendChild(li);
    })
    .catch((error) => {
      console.log(error.message);
      alert("Erro ao criar quadro. Por favor, tente novamente.");
    });
});
