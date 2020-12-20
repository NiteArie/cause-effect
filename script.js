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
        _data.forEach((user, index) => {
            _usersList.appendChild(createUserDOM(user, index));
        })
    }

    function createUserDOM(user, index) {
        let userContainer = document.createElement('div');
        let userImg = document.createElement('img');
        let userName = document.createElement('h2');

        userContainer.classList.add('container__users__user');

        userImg.classList.add('container__users__user__img');
        userName.classList.add('container__users__user__name');

        userContainer.setAttribute('index', index);
        userImg.setAttribute('index', index);
        userName.setAttribute('index', index);
        
        userImg.src = "assets/profile-user.svg";
        userName.textContent = user.name;

        userContainer.append(userImg, userName);

        userContainer.addEventListener('click', (event) => {
            clearUserProfileDOM();
            renderUserProfile(event);
        })

        return userContainer;
    }

    function renderUserProfile(event) {
        let index = event.target.getAttribute('index');
        
        let user = _data[index];

        clearActiveUserDOM();
        activeUserDOM(index);
        
        _userProfile.appendChild(createUserProfileDOM(user));
        
    }

    function clearUserProfileDOM() {
        _userProfile.textContent = '';
    }

    function createUserProfileDOM(user) {
        let userProfileContainer = document.createElement('div');
        let userProfileImg = document.createElement('img');
        let userProfileName = document.createElement('h2');
        let userProfileStreet = document.createElement('p');
        let userProfileCity = document.createElement('p');
        let userProfileState = document.createElement('p');
        let userProfileCountry = document.createElement('p');
        let userProfileTelephone = document.createElement('p');
        let userProfileBirth = document.createElement('p');

        userProfileContainer.classList.add('container__user-profile__info')
        userProfileImg.classList.add('container__user-profile__info__img');
        userProfileName.classList.add('container__user-profile__info__name');
        userProfileStreet.classList.add('container__user-profile__info__street');
        userProfileCity.classList.add('container__user-profile__info__city');
        userProfileState.classList.add('container__user-profile__info__state');
        userProfileCountry.classList.add('container__user-profile__info__country');
        userProfileTelephone.classList.add('container__user-profile__info__phone');
        userProfileBirth.classList.add('container__user-profile__info__birth');

        userProfileImg.src = 'assets/profile-user.svg';
        userProfileName.textContent = user.name;
        userProfileStreet.textContent = `Street: ${user.street}`;
        userProfileCity.textContent = `City: ${user.city}`;
        userProfileState.textContent = `State: ${user.state}`;
        userProfileCountry.textContent = `Country: ${user.country}`;
        userProfileTelephone.textContent = `Phone: ${user.telephone}`;
        userProfileBirth.textContent = `Birth: ${user.birthday}`;

        userProfileContainer.append(
            userProfileImg,
            userProfileName,
            userProfileStreet,
            userProfileCity,
            userProfileState,
            userProfileCountry,
            userProfileTelephone,
            userProfileBirth,
        );

        return userProfileContainer;
    }

    function activeUserDOM(index) {
        let usersListChildren = _usersList.children;

        // for ( let i = 0; i < usersListChildren.length; i++ ) {
        //     if (usersListChildren[i].getAttribute('index') == index) {
        //         usersListChildren[i].classList.add('active');
        //     }
        // }

        usersListChildren[index].classList.add('active');
    }

    function clearActiveUserDOM() {
        let usersListChildren = _usersList.children;

        for ( let i = 0; i < usersListChildren.length; i++ ) {
            usersListChildren[i].classList.remove('active');
        }
    }
})();