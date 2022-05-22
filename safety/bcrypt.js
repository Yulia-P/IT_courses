let bcrypt = require('bcrypt');

salt = '$2b$10$qNuSSupDD53DkQfO8wqpf.'

exports.cryptPass = (password) =>{
    let encryptedPassword = bcrypt.hashSync(password, salt)
    return encryptedPassword;
}

exports.comparePass = (password, encryptedPasswordToCompareTo) => {
    let encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword == encryptedPasswordToCompareTo;
}

