fetch('/data/projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Something went wrong ...' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        createProjectCard(data.projects);
    })
    .catch(error => {
        console.error('Working hard to figure out why?', error);
    });


