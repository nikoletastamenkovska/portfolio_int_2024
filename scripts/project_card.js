window.createProjectCard = function (projects) {
    const container = document.getElementById('projects_list_container');
    projects.forEach(project => {
        const card = document.createElement('li');
        card.classList.add('project_card');

        const cover = document.createElement('div');
        cover.classList.add('cover');
        cover.style.backgroundImage = `url(${project.images[0]})`;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card_inner');

        cardInner.innerHTML = `
            <h3 class="card_title">${project.title}</h3>
            <div class="card_description">${project.description}</div>
            <div class="card_tech">Technologies: ${project.tech.join(', ')}</div>
            <div class="card_links">
            ${project.github ? `<a href="${project.github}" target="_blank">Check on GitHub</a>` : ''} 
            ${project.gitlab ? `<a href="${project.gitlab}" target="_blank">Check on GitLab</a>` : ''}
            ${project.deployed ? `<a href="${project.deployed}" target="_blank">Live Demo</a>` : ''}
            </div>
            <button class="see_images_btn">See images</button>
        `;

        const seeMoreBtn = document.createElement('btn');
        seeMoreBtn.classList.add('see_more_btn');
        seeMoreBtn.innerHTML = "See more";

        const closeSeeMoreBtn = document.createElement('btn');
        closeSeeMoreBtn.classList.add('close_see_more_btn');
        closeSeeMoreBtn.innerHTML = `<span class="close">&times;</span>`

        cardInner.appendChild(closeSeeMoreBtn);
        cover.appendChild(seeMoreBtn);
        card.append(cover, cardInner);
        container.appendChild(card);


        seeMoreBtn.addEventListener('click', () => {
            card.classList.add('active');
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("active")
        })

        closeSeeMoreBtn.addEventListener('click', () => {
            card.classList.remove('active');
        });
    });
}