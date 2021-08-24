/**Get sections*/
const header = document.querySelector('#header1');
const about = document.querySelector('#about-us');
const post = document.querySelector('#fb-post');
const contact = document.querySelector('#contact');
const video = document.querySelector('#post');
const allSections = Array.from(document.querySelectorAll('section'));

/**Other selectors*/
const unorderedList = document.querySelector('.nav-list');

/**Dynamic Menu */
const dynamicMenu = () => {
    for (const section of allSections) {
        const navLinks = document.createElement('a');
        const list = document.createElement('a');
        navLinks.className = 'nav_link';
        list.className = 'nav_item';
        navLinks.textContent = section.getAttribute('data-nav');
        navLinks.setAttribute('href', `#${section.getAttribute('id')}`)
        list.appendChild(navLinks);
        unorderedList.appendChild(list);
    }
    return;
}

/** Clear active class from all links */
const removeActiveClasses = (links) => {
    links.forEach((navLink) => {
        navLink.classList.remove('active');
    });
}

dynamicMenu();

/** Scroll effect */
const scrollEffect = () => {
    const navLinks = document.querySelectorAll('.nav_link');
    for(const navLink of navLinks) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            removeActiveClasses(navLinks);
            const links = navLink.getAttribute('href');
            document
                .querySelector(links)
                .scrollIntroView({ behavior: 'smooth'});
            navLink.classList.add('active');
            });
        }
    return;
}

scrollEffect();

/** Active state */
const checkViewport = () => {
    const startCheck = () => {
        for(section of allSections) {
            const sec = section.getAttribute('data-nav');
            const rect = document.getElementById(sec).getBoundingClientRect();

            const isActive = rect.top <= window.innerHeight && rect.top >= 0;

            if (isActive) {
                removeActiveClasses(sec);
                sec.classList.add('active');
                break;
            }
        }

        startCheck();
        window.addEventListener('scroll', startCheck);
        return;
    }
};

checkViewport();