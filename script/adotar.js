const posts = [
    { id: 1, user: "Paçoca", image: "/assests/pacoca.jpg", caption: "Adote este lindo amiguinho!", gender: "F", age: "adulto", isFavorite: false, adopted: false },
    { id: 2, user: "Bino", image: "/assests/bino.jpg", caption: "Pronto para um novo lar.", gender: "M", age: "adulto", isFavorite: false, adopted: false },
    { id: 3, user: "Kiara", image: "/assests/kiara.jpg", caption: "Carinho e lealdade.", gender: "F", age: "adulto", isFavorite: false, adopted: false },
    { id: 4, user: "Laika", image: "/assests/laika.jpg", caption: "Uma nova chance de ser feliz.", gender: "F", age: "filhote", isFavorite: false, adopted: false },
    { id: 5, user: "Pipo", image: "/assests/pipo.jpg", caption: "Esperando por um lar cheio de amor.", gender: "M", age: "filhote", isFavorite: false, adopted: false },
    { id: 6, user: "Bia", image: "/assests/bia.jpg", caption: "Adoção é amor!", gender: "F", age: "adulto", isFavorite: false, adopted: false },
    { id: 7, user: "Nibo", image: "/assests/nibo.jpg", caption: "Um companheiro fiel.", gender: "M", age: "adulto", isFavorite: false, adopted: false },
    { id: 8, user: "Paula", image: "/assests/paula.jpg", caption: "Pronto para novas aventuras.", gender: "F", age: "filhote", isFavorite: false, adopted: false },
    { id: 9, user: "Roberto", image: "/assests/roberto.jpg", caption: "Cada animal merece uma chance.", gender: "M", age: "adulto", isFavorite: false, adopted: false },
    { id: 10, user: "Juliana", image: "/assests/juliana.jpg", caption: "Encontre seu novo melhor amigo.", gender: "F", age: "adulto", isFavorite: false, adopted: false }
];

/* Função para renderizar os posts no feed */
function renderPosts(displayList) {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';

    if (displayList.length === 0) {
        feed.innerHTML = '<p>Nenhum animal para exibir.</p>';
        return;
    }

    displayList.forEach(post => {
        // Ignora posts que já foram adotados
        if (post.adopted) return;

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.user}</h3>
            <img src="${post.image}" alt="Imagem do animal">
            <p>${post.caption}</p>
            <div class="actions">
                <button class="btn" onclick="toggleFavorite(${post.id})">${post.isFavorite ? 'Desfavoritar' : 'Favoritar'}</button>
                <button class="btn" onclick="adoptPost(${post.id})">Adotar</button>
            </div>
            <p><small>Sexo: ${post.gender} | Idade: ${post.age}</small></p>
        `;

        feed.appendChild(postDiv);
    });
}

/* Função para atualizar a renderização com base nos filtros */
function filterPosts() {
    const genderFilter = document.getElementById('filter-gender').value;
    const ageFilter = document.getElementById('filter-age').value;

    let filtered = posts.filter(post => !post.adopted);

    if (genderFilter) {
        filtered = filtered.filter(post => post.gender === genderFilter);
    }

    if (ageFilter) {
        filtered = filtered.filter(post => post.age === ageFilter);
    }

    renderPosts(filtered);
}

/* Função para alternar o status de favorito */
function toggleFavorite(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        post.isFavorite = !post.isFavorite;
        filterPosts();
    }
}

/* Função para adotar o animal (remove do feed) */
function adoptPost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        post.adopted = true;
        filterPosts();
    }
}

/* Função para mostrar apenas os animais favoritos */
function showFavorites() {
    const favorites = posts.filter(post => post.isFavorite && !post.adopted);
    renderPosts(favorites);
}

/* Adiciona os event listeners para os filtros após o carregamento do DOM */
window.addEventListener('DOMContentLoaded', () => {
    renderPosts(posts);

    document.getElementById('filter-gender').addEventListener('change', filterPosts);
    document.getElementById('filter-age').addEventListener('change', filterPosts);
});
