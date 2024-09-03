fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects');

        data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <p><strong>Technologies: </strong>${project.tech.join(', ')}</p>
                <a href="${project.link}">View Project</a>
            `
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.log('Error fetching data:', error));