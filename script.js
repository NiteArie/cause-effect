let app = (() => {
    const _data = [
        {
            name: "John Doe",
            street: "None",
            city: "None",
            state: "None",
            country: "None",
            telephone: "None",
            birthday: "None",
        },
        {
            name: "Jane Doe",
            street: "None",
            city: "None",
            state: "None",
            country: "None",
            telephone: "None",
            birthday: "None",
        }
    ];
    const _usersList = document.querySelector('.container__users');
    const _userProfile = document.querySelector('.container__user-profile');

    renderUsers();

    function renderUsers() {
        _data.forEach((user) => {
            _usersList.appendChild(createUserDOM(user));
        })
    }

    function createUserDOM(user) {
        let userContainer = document.createElement('div');
        let userImg = document.createElement('img');
        let userName = document.createElement('h2');

        userContainer.classList.add('container__users__user');
        userImg.classList.add('container__users__user__img');
        userName.classList.add('container__users__user__name');
        
        userImg.src = "assets/profile-user.svg";
        userName.textContent = user.name;

        userContainer.append(userImg, userName);

        return userContainer;
    }

    
})();