window.createProjectData = function (projects) {
    const container = document.getElementById('projects_list_container');
    projects.forEach(project => {
        // the card
        const card = document.createElement('li');
        card.classList.add('project_card');

        // the cover of the card
        const cover = document.createElement('div');
        cover.classList.add('cover');
        cover.style.backgroundImage = `url(${project.images[0]})`;

        // the everything inside the card
        const cardInner = document.createElement('div');
        cardInner.classList.add('card_inner');
        const projectImagesBtn = document.createElement('button');
        projectImagesBtn.classList.add('project_images_button');
        projectImagesBtn.textContent = 'Project Images';

        cardInner.innerHTML = `
            <h3 class="card_title">${project.title}</h3>
            <div class="card_description">${project.description}</div>
            <div class="card_tech">Technologies: ${project.tech.join(', ')}</div>
            <div class="card_links">
            ${project.github ? `<a href="${project.github}" target="_blank">Check on GitHub</a>` : ''} 
            ${project.gitlab ? `<a href="${project.gitlab}" target="_blank">Check on GitLab</a>` : ''}
            ${project.deployed ? `<a href="${project.deployed}" target="_blank">Live Demo</a>` : ''}
            </div>
        `;

        // the carousel
        const carousel = document.createElement('div');
        carousel.id = 'carousel';
        carousel.style.display = 'none';

        const carouselNavigation = document.createElement('div');
        carouselNavigation.id = 'carousel_nav';

        const closeProjectImagesBtn = document.createElement('btn');
        closeProjectImagesBtn.classList.add('close_project_img_btn');
        closeProjectImagesBtn.innerHTML = `<span class="close">&times;</span>`;

        carousel.append(closeProjectImagesBtn, carouselNavigation);


        const imagesList = [];
        const dots = [];

        // Create the carousel images
        project.images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Project image ${index + 1}`;
            img.classList.add('carousel_image');
            imagesList.push(img);

            // create dot el
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

        const seeMoreBtn = document.createElement('button');
        seeMoreBtn.classList.add('see_more_btn');
        seeMoreBtn.innerHTML = "See more";

        const closeSeeMoreBtn = document.createElement('btn');
        closeSeeMoreBtn.classList.add('close_see_more_btn');
        closeSeeMoreBtn.innerHTML = `<span class="close">&times;</span>`;

        cardInner.append(projectImagesBtn, closeSeeMoreBtn);
        cover.appendChild(seeMoreBtn);
        card.append(cover, cardInner, carousel);
        container.appendChild(card);


        seeMoreBtn.addEventListener('click', () => {
            card.classList.add('active');
            seeMoreBtn.style.display = "none";
        });

        card.addEventListener("mouseover", () => {
            cover.classList.add("active");
            seeMoreBtn.style.display = "block";
        });

        carousel.addEventListener('mouseleave', () => {
            carousel.style.display = 'none';
            projectImagesBtn.style.display = 'block';
            Array.from(cardInner.children).forEach(child => {
                if (child != carousel) {
                    child.style.display = 'flex';
                    projectImagesBtn.style.display = "block";
                }
            });
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("active");
            cover.classList.add("active");
            seeMoreBtn.style.display = "none";
        });

        closeSeeMoreBtn.addEventListener('click', () => {
            card.classList.remove('active');
            seeMoreBtn.style.display = "block";
        });

        closeProjectImagesBtn.addEventListener('click', () => {
            Array.from(cardInner.children).forEach(child => {
                if (child != carousel) {
                    child.style.display = "flex";
                }
            });
            carousel.style.display = "none";
            projectImagesBtn.style.display = "block";
        });

        projectImagesBtn.addEventListener('click', () => {
            Array.from(cardInner.children).forEach(child => {
                if (child != carousel) {
                    child.style.display = "none";
                }
            });
            carousel.style.display = "flex";
        });
    });
}