import User from "./users.js";
import Token from "./token.js";

let login = document.getElementById("login");
let formLogin = document.getElementById("form-login");
let formCreateUser = document.getElementById("form-create-user");
let createUser = document.getElementById("create-user");
let listUsers = document.getElementById("list-users");
let btnListUsers = document.getElementById("btn-users");
let spanMe = document.getElementById("me");
let sidebar = document.getElementById("sidebar");
let headerMenu = document.getElementById("header-menu");
let homeIntro = document.getElementById("home-intro");
let homeSair = document.getElementById("home-sair");
let refCreateAcc = document.getElementById("ref-create-acc");
let refLogin = document.getElementById("ref-fazer-login");
let mainContainer = document.getElementById("main-container");
const classesToToggle = document.querySelectorAll(
  ".show-content, .hide-content"
);

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

btnListUsers.addEventListener("click", (event) => {
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
