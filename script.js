// Função para ir para a tela de seleção de perfis
function goToProfiles() {
    const loginScreen = document.getElementById('loginScreen');
    const profileScreen = document.getElementById('profileScreen');
    
    // Transição do logo "N" para a tela de perfil
    const logo = document.getElementById('logo');
    logo.style.animation = 'logoAnimationOut 1s ease forwards';

    // Espera 1.5 segundos antes de fazer a transição para a próxima tela
    setTimeout(function() {
        loginScreen.style.display = 'none';  // Esconde a tela de login
        profileScreen.style.display = 'block';  // Exibe a tela de perfis
    }, 1500);
}

// Função para simular a escolha de um perfil
function selectProfile(profileName) {
    alert(`Você escolheu o perfil: ${profileName}`);
}
