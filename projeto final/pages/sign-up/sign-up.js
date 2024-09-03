
document.getElementById('sign-up-button').addEventListener('click', signUp);

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirmation = document.getElementById('passwordConfirmation').value;

    if (password !== passwordConfirmation) {
        alert('As senhas não coincidem');
        return;
    }

    window.location.href = 'login';
}