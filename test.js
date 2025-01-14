const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to validate CPF format
const validateCPF = (cpf) => {
    return /^\d{11}$/.test(cpf);
};

// Function to validate phone number format
const validatePhone = (phone) => {
    return /^\d{10,11}$/.test(phone);
};

// Function to validate date of birth format
const validateDate = (date) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

// Main function to collect and validate user data
const collectUserData = () => {
    const userData = {};

    rl.question('Enter your name: ', (name) => {
        userData.name = name;

        rl.question('Enter your CPF (11 digits): ', (cpf) => {
            if (!validateCPF(cpf)) {
                console.log('Invalid CPF. Please use 11 digits.');
                rl.close();
                return;
            }
            userData.cpf = cpf;

            rl.question('Enter your phone number (10-11 digits): ', (phone) => {
                if (!validatePhone(phone)) {
                    console.log('Invalid phone number. Please use 10 or 11 digits.');
                    rl.close();
                    return;
                }
                userData.phone = phone;

                rl.question('Enter your date of birth (YYYY-MM-DD): ', (dob) => {
                    if (!validateDate(dob)) {
                        console.log('Invalid date format. Please use YYYY-MM-DD.');
                        rl.close();
                        return;
                    }
                    userData.dateOfBirth = dob;

                    console.log('User Data:', userData);
                    rl.close();
                });
            });
        });
    });
};

collectUserData();
