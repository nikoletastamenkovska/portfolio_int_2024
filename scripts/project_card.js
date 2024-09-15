window.createProjectCard = function (projects) {
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

        // the image carousel
        // the container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('.image_container');

        const closeProjectImagesBtn = document.createElement('btn');
        closeProjectImagesBtn.classList.add('close_see_more_btn');
        closeProjectImagesBtn.innerHTML = `<span class="close">&times;</span>`;

        imageContainer.appendChild(closeProjectImagesBtn);


        // Create the carousel images
        project.images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            image.alt = `Project image ${index + 1}`;
            img.classList.add('carousel_image');
            imageContainer.appendChild(img);
        });

        const seeMoreBtn = document.createElement('btn');
        seeMoreBtn.classList.add('see_more_btn');
        seeMoreBtn.innerHTML = "See more";

        const closeSeeMoreBtn = document.createElement('btn');
        closeSeeMoreBtn.classList.add('close_see_more_btn');
        closeSeeMoreBtn.innerHTML = `<span class="close">&times;</span>`;

        cardInner.append(imageContainer, projectImagesBtn);
        cardInner.appendChild(closeSeeMoreBtn);
        cover.appendChild(seeMoreBtn);
        card.append(cover, cardInner);
        container.appendChild(card);

        imageContainer.style.display = 'none';

        seeMoreBtn.addEventListener('click', () => {
            card.classList.add('active');
            seeMoreBtn.style.display = "none";
        });

        // card.addEventListener("mouseleave", () => {
        //     card.classList.remove("active");
        // seeMoreBtn.style.display = "block";
        // });

        closeSeeMoreBtn.addEventListener('click', () => {
            card.classList.remove('active');
            seeMoreBtn.style.display = "block";
        });

        closeProjectImagesBtn.addEventListener('click', () => {
            Array.from(cardInner.children).forEach(child => {
                if (child != imageContainer) {
                    child.style.display = "flex";
                }
            });
            imageContainer.style.display = "none";
            projectImagesBtn.style.display = "block";
        });

        projectImagesBtn.addEventListener('click', () => {
            Array.from(cardInner.children).forEach(child => {
                if (child != imageContainer) {
                    child.style.display = "none";
                }
            });
            imageContainer.style.display = "block";
        });
    });
}