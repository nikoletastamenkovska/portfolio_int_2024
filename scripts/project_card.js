window.createProjectCard = function (projects) {
    const container = document.getElementById('projects_list_container');
    projects.forEach(project => {
        const card = document.createElement('li');
        card.classList.add('project_card');

        const cover = document.createElement('div');
        cover.classList.add('cover');
        cover.innerHTML = `
            <img src="${project.images[0]}" alt="{project.title}"></img>
        `

        const cardInner = document.createElement('div');
        cardInner.classList.add('card_inner');

        cardInner.innerHTML = `
            <h3>${project.title}</h3>
            <p>Technologies: ${project.tech.join(', ')}</p>
            <a href="${project.link}" target="_blank">GitHub</a>
            ${project.deployed ? `<a href="${project.deployed}" target="_blank">Live Demo</a>` : ''}
        `;

        card.append(cover, cardInner)
        container.appendChild(card);
    });
}