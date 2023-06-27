const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})/;

export const checkPasswordEffectiveness = (password) => {
    return strongPasswordRegex.test(password);
}

