const activeUser = {
    email: 'jon_doe@niepodam.pl',
    password: 'password',
};

const incorrectUser = {
    email: 'Jan_Kowalski@example.com',
    password: 'incorrectPassword',
};

const userInOut = {
    email: 'jon_doe1@niepodam.pl',
    password: 'password',
};

const registerDeleteUser = {
    name: 'Jon_Doe',
    email: 'jon_doe@niepodam.pl',
    password: 'password',
    firstName: 'Jon',
    lastName: 'Doe',
    company: 'Test_Company',
    address: 'avenue street',
    address2: 'avenue street 1234',
    country: 'United States',
    state: 'Texas',
    city: 'Houston',
    zipcode: '12345',
    phone: '1234567890',
};

const formUser = {
    name: 'John',
    email: 'johnsmith@example.com'
}

const existingEmailUser = {
    name: 'Jon_Doe1',
    email: 'jon_doe1@niepodam.pl'
}


module.exports = { activeUser, incorrectUser, userInOut, registerDeleteUser, formUser,
     existingEmailUser
 };