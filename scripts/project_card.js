window.createProjectCard = function (projects) {
    const container = document.getElementById('projects_list_container');
    projects.forEach(project => {
        const card = document.createElement('li');
        card.classList.add('project_card');

        card.innerHTML = `
            <h3>${project.title}</h3>
            
            <p>Technologies: ${project.tech.join(', ')}</p>
            <a href="${project.link}" target="_blank">GitHub</a>
            ${project.deployed ? `<a href="${project.deployed}" target="_blank">Live Demo</a>` : ''}
        `;

        container.appendChild(card);
    });
}