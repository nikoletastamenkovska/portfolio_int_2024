window.createProjectData = function (projects) {
    const container = document.getElementById('projects_list_container');
    const scroller = document.querySelector('.scroller_inner');

    function createCards(projects) {
        projects.forEach(project => {
            const card = document.createElement('li');
            card.classList.add('project_card');

            const cover = document.createElement('div');
            cover.classList.add('cover');
            cover.style.backgroundImage = `url(${project.images[0]})`;

            const cardInner = document.createElement('div');
            cardInner.classList.add('card_inner');
            const projectImagesBtn = document.createElement('button');
            projectImagesBtn.classList.add('project_images_button');
            projectImagesBtn.textContent = 'Project Images';

            cardInner.innerHTML = `
            <div class="inner_card_content">
                <h3 class="card_title">${project.title}</h3>
                <div class="card_description">${project.description}</div>
                <div class="card_tech">Technologies: ${project.tech.join(', ')}</div>
                <div class="card_links">
                    ${project.github ? `<a href="${project.github}" target="_blank">Check on GitHub</a>` : ''} 
                    ${project.gitlab ? `<a href="${project.gitlab}" target="_blank">Check on GitLab</a>` : ''}
                    ${project.deployed ? `<a href="${project.deployed}" target="_blank">Live Demo</a>` : ''}
                </div>
            </div>
        `;

            const carousel = document.createElement('div');
            carousel.id = 'carousel';
            carousel.style.display = 'none';

            const carouselNavigation = document.createElement('div');
            carouselNavigation.id = 'carousel_nav';


            const imagesList = [];
            const dots = [];

            project.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = `Project image ${index + 1}`;
                img.classList.add('carousel_image');
                imagesList.push(img);

                const dot = document.createElement('span');
                dot.classList.add('dot');
                dots.push(dot);

                carousel.appendChild(img);
                carouselNavigation.appendChild(dot);

                dot.addEventListener('click', () => {
                    imagesList.forEach(img => img.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));

                    img.classList.add('active');
                    dot.classList.add('active');
                });
            });

            if (imagesList.length > 0) {
                imagesList[0].classList.add('active');
                dots[0].classList.add('active');
            }

            carousel.appendChild(carouselNavigation);
            cardInner.append(projectImagesBtn);
            card.append(cover, cardInner, carousel);
            container.appendChild(card);


            card.addEventListener('mouseenter', () => {
                const cardRect = card.getBoundingClientRect();
                const scrollRect = scroller.getBoundingClientRect();

                if (cardRect.right > scrollRect.right || cardRect.left < scrollRect.left) {
                    scroller.scrollBy({
                        left: cardRect.left - scrollRect.left,
                        behavior: 'smooth'
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                carousel.style.display = "none";
                Array.from(cardInner.children).forEach(child => {
                    if (child != carousel) {
                        if (child === projectImagesBtn) {
                            child.style.display = 'block';
                        } else {
                            child.style.display = 'flex';
                        }
                    }
                })
            });

            projectImagesBtn.addEventListener('click', () => {
                Array.from(cardInner.children).forEach(child => {
                    if (child != carousel) {
                        child.style.display = "none";
                    }
                });
                carousel.style.display = "flex";

                imagesList.forEach(img => img.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                imagesList[0].classList.add('active');
                dots[0].classList.add('active');
            });
        });
    }

    createCards(projects);
    createCards(projects);
    createCards(projects);
    createCards(projects);
};
