const friendslist = document.querySelector(".friends__list"),
    friendsNumber = friendslist.querySelector(".friends__title");

function getNumber() {
    const currentNumber = friendslist.getElementsByClassName("friend__name");
    friendsNumber.innerText = `등록된 친구 ${currentNumber.length}`
}

function init() {
    getNumber();
}

init();