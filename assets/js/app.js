const anchorTags = document.querySelectorAll(".github-link");

anchorTags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        e.preventDefault();
        const canShow = e.target.dataset.show;
        if (canShow === "false") {
            window.open(tag.href, '_blank');
        } else {
            alert('project copyright reserved for a company');
        }
    })
})