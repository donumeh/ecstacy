const testimonies = [
    {
        name: "Mike",
        profile: "./images/mike.webp",
        testimony: "This site is a game-changer! Found three hidden trails near me I never knew exists...",
    },
    {
        name: "Josephine",
        profile: "./images/josephine.webp",
        testimony: "As a busy parent, I love how the event calendar includes family-friendly options...",
    },
    {
        name: "Bayo",
        profile: "./images/bayo.webp",
        testimony: "More than just trails —this site connects people! Joined a cleanup day and met folks who cleanup day and met folks who care about pre...",
    }
]

const services = [
    {
        header: "Find <span>Routes</span>",
        image: "./images/routes.webp",
        text: "Discover <span>hiking and biking trails</span> tailored to your skill level",
    },
    {
        header: "Join a <span>community</span>",
        image: "./images/community.webp",
        text: "<span>Connect with fellow outdoor enthusiats</span> and share adventures",
    },
    {
        header: "Join <span>Events</span>",
        image: "./images/adventure_image.webp",
        text: "From <span>guided hikes to eco-cleanups</span>, never miss a chance to explore",
    }
]

const homeFirstPage = () => {
    const main = document.querySelector('#client_view');

    // Greenish container
    const greenish_image_background = document.createElement('div');
    greenish_image_background.classList.add('green_background_first_page');

    // First Page container
    const first_page_container = document.createElement('div');

    first_page_container.classList.add('first_page_container');

    // Single component for header container
    const header_container = document.createElement('div');
    header_container.classList.add('header_container');

    const page_header = document.createElement("h1");
    const page_description = document.createElement('p');
    const button = document.createElement('p');
    const link = document.createElement('a');

    // second component
    const image_container = document.createElement('div');
    const page_image = document.createElement('img');

    // Clear the current main
    main.innerHTML = "";

    page_header.classList.add('first_page_header_text');
    page_header.innerHTML = "Discover <span class='highlighted_text'>Hidden Trails</span> & <span class='highlighted_text'>Outdoor Adventures</span> Near You";

    page_description.classList.add('first_page_desscription')
    page_description.textContent = 'Your gateway to hiking, biking, and cummunity events —right outside your door!'

    button.classList.add('button_first_page');
    link.setAttribute('href', '#');
    link.textContent = 'DISCOVER';

    page_image.setAttribute('src', './images/medium-shot-smiley-man-bicycle.webp');
    page_image.setAttribute('alt', 'an image of a young man on a bike hiking');
    page_image.setAttribute('loading', 'lazy');
    page_image.classList.add('first_page_image')

    image_container.classList.add('image_container');
    image_container.appendChild(page_image);
    image_container.appendChild(greenish_image_background);

    header_container.appendChild(page_description);
    header_container.appendChild(page_header);
    button.appendChild(link);
    header_container.appendChild(button);

    first_page_container.appendChild(header_container);
    first_page_container.appendChild(image_container);

    main.appendChild(first_page_container);
}

const secondFirstPage = () => {
    // main 
    const main = document.querySelector('#client_view');

    // Clear the current main
    main.innerHTML = "";

    // div container
    const div_container = document.createElement('div');
    div_container.classList.add('second_page_div_container');

    // image container
    const image_container = document.createElement("second_page_image_container");
    image_container.classList.add('second_page_image_container');

    const page_image = document.createElement('img');

    page_image.classList.add('second_page_image');
    page_image.setAttribute('src', './images/adventure_image.webp');
    page_image.setAttribute('alt', 'an image of people having an adventurous moment');
    page_image.setAttribute('loading', 'lazy');


    const greenish_image_background = document.createElement('div');
    greenish_image_background.classList.add('green_background_second_page');

    image_container.appendChild(page_image)
    image_container.appendChild(greenish_image_background);

    // page header container
    const second_page_header_container = document.createElement('div');
    second_page_header_container.classList.add('second_page_header_container');

    const page_header = document.createElement("h1");
    const button = document.createElement('p');
    const link = document.createElement('a');

    page_header.classList.add('second_page_header_text');
    page_header.innerHTML = `<span class="second_page_highlighted_text">Join the Adventure:</span>Upcoming Outdoor Events & Community Gatherings`;

    link.textContent = `Join The Adventure`;
    link.setAttribute('href', '#');
    link.classList.add('second_page_button_link')
    button.appendChild(link);

    button.classList.add('second_page_button_wrapper');

    second_page_header_container.appendChild(page_header);
    second_page_header_container.appendChild(button);

    div_container.appendChild(image_container);
    div_container.appendChild(second_page_header_container);

    main.appendChild(div_container);
}

const thirdFirstPage = () => {
    // main client view

    const main = document.querySelector('#client_view');

    // third page container
    const third_page_container = document.createElement('div');
    third_page_container.classList.add('third_page_container');

    // Clear the current main
    main.innerHTML = "";

    const page_header = document.createElement("h2");

    // Testimonial headers
    const div_container = document.createElement('div');

    // Page Header Title
    page_header.classList.add('third_page_header_text');
    page_header.innerHTML = `Read <span class="third_page_highlighted_text">Exciting Stories</span>`;

    div_container.classList.add("testimonies_container");

    testimonies.forEach(testimony => {
        // main div
        const div = document.createElement('div');

        // Name of person
        const h3 = document.createElement('h3');

        // image of person
        const img = document.createElement('img');

        // Snippet of text from person
        const text = document.createElement('p');

        // Greeny back drop for person profile
        const green_testimonial_background = document.createElement('div');

        // Image wrapper
        const image_container = document.createElement('div');

        // Background drop
        green_testimonial_background.classList.add('testimonial_backdrop');

        h3.classList.add('testimony_header');
        h3.innerHTML = `Meet <span>${testimony.name}</span>`;

        img.setAttribute('alt', `Profile image of ${testimony.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('src', `${testimony.profile}`);
        img.classList.add('testimony_profile_image');

        image_container.classList.add('third_page_image_container');
        image_container.appendChild(img);
        image_container.appendChild(green_testimonial_background);

        text.classList.add('testimony_text')
        text.innerHTML = `${testimony.testimony}<a href="#">read more</a>`;

        div.classList.add("testimony");
        div.appendChild(h3);
        div.appendChild(image_container);
        div.appendChild(text);
        div_container.appendChild(div);
    })

    third_page_container.appendChild(page_header);
    third_page_container.appendChild(div_container);

    main.appendChild(third_page_container);
}

const fourthFirstPage = () => {
    // main client view
    const main = document.querySelector('#client_view');

    // Clear the current main
    main.innerHTML = "";

    // page container
    const div_container = document.createElement('div');
    div_container.classList.add('fourth_page_div_container');

    // page header
    const page_header = document.createElement('h2');
    page_header.classList.add('fourth_page_header_text');
    page_header.textContent = "Services";

    div_container.appendChild(page_header);

    // Backdrops
    const backdrop1 = document.createElement('div')
    const backdrop2 = document.createElement('div')

    //  Backddrop addition to container
    backdrop1.classList.add('backdrop1');
    backdrop1.classList.add('fourth_page_backdrop');
    backdrop2.classList.add('backdrop2');
    backdrop2.classList.add('fourth_page_backdrop');

    // Backdrop addition to div_container
    div_container.appendChild(backdrop1);
    div_container.appendChild(backdrop2);

    // services container
    const services_container = document.createElement('div');
    services_container.classList.add('services_container');

    services.forEach(service => {
        // For each service
        const s_service = document.createElement('div');
        s_service.classList.add('services');


        // service header
        const service_header = document.createElement('h3');
        service_header.classList.add('service_header');
        service_header.innerHTML = service.header;

        // Adding the service header 
        s_service.appendChild(service_header);

        // service image
        const img = document.createElement('img');
        const startIndex = service.header.indexOf('>') + 1;
        const endIndex = service.header.indexOf('<', startIndex); // Look for '<' after '>'

        img.setAttribute('alt', `Image for ${service.header.slice(startIndex, endIndex)}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('src', `${service.image}`);
        img.classList.add('service_image');

        // Adding the service image
        s_service.appendChild(img);

        // Service explanation
        const text = document.createElement('p');
        text.classList.add('fourth_page_service_text');
        text.innerHTML = service.text;

        // Appending the service text in s_service
        s_service.appendChild(text);
        services_container.appendChild(s_service);
    })

    div_container.appendChild(services_container);
    main.appendChild(div_container);
}

const fifthFirstPage = () => {
    // main client view
    const main = document.querySelector('#client_view');

    // Clear the current main
    main.innerHTML = "";

    // Division container
    const div_container = document.createElement('div');
    div_container.classList.add('fifth_page_container');

    // page_header container
    const page_header = document.createElement('div');
    page_header.classList.add('page_header_container');

    // fifth page header
    const h3 = document.createElement('h3');
    h3.classList.add('fifth_page_header');

    h3.innerHTML = `Join our <span>Community</span>`;

    page_header.appendChild(h3);

    // Button and link
    const button = document.createElement('p');
    const a = document.createElement('a');

    a.classList.add('fifth_page_link');
    a.setAttribute('href', "#")
    a.textContent = "Join our Discord Community";
    button.classList.add('fifth_page_button');

    //  Appending the button to page
    button.appendChild(a);
    page_header.appendChild(button);

    // Image container
    const image_container = document.createElement('div');
    image_container.classList.add('fifth_page_image_container');

    // Image creation
    const img = document.createElement('img');

    img.setAttribute('src', './images/a_person_using_their_smartphone.webp');
    img.setAttribute('alt', 'Image of a person joining the discord community');
    img.classList.add('fifth_page_image');

    // fifth page Backdrop
    const backdrop = document.createElement('div');
    backdrop.classList.add('fifth_page_backdrop');

    image_container.appendChild(img);
    image_container.appendChild(backdrop);


    div_container.appendChild(page_header);
    div_container.appendChild(image_container);

    main.appendChild(div_container);
}

const sixthFirstPage = () => {
    const main = document.querySelector('#client_view');
    const div_container = document.createElement('div');
    const h2 = document.createElement('h2');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');


    const h3 = document.createElement('h3');
    const text = document.createElement('p');

    const follow_us = document.createElement('h3');


    div_container.setAttribute('class', 'footer');

    // Clear the current main
    main.innerHTML = "";

    h2.textContent = `A community for the outdoorsy`;
    div1.appendChild(h2);


    h3.textContent = `Address`;
    text.textContent = `1883 Old Highway 20 McDade Texas, United States`;


    follow_us.textContent = `Follow Us`;


    div2.appendChild(h3);
    div2.appendChild(text);
    div3.appendChild(follow_us);

    main.appendChild(div1);
    main.appendChild(div2);
    main.appendChild(div3);

}

const pages = {
    "first_page": homeFirstPage,
    "second_page": secondFirstPage,
    "third_page": thirdFirstPage,
    "fourth_page": fourthFirstPage,
    "fifth_page": fifthFirstPage,
    "sixth_page": sixthFirstPage
}

const page_view = document.querySelectorAll('input[type="radio"]')
homeFirstPage();
page_view.forEach(page => {

    page.addEventListener('click', () => {
        pages[page.value]();
    })
})

let scrollLocked = false;

const selectSlide = (event) => {
    if (scrollLocked) {
        return;
    }

    scrollLocked = true;
    setTimeout(() => {
        scrollLocked = false;
    }, 500);

    const values = Object.keys(pages);
    const currentSlide = document.querySelector("input[type='radio']:checked");

    if (!currentSlide) return;

    let location = values.indexOf(currentSlide.value);

    if (event === "up") {
        location = Math.max(0, location - 1);
    } else if (event === "down") {
        location = Math.min(values.length - 1, location + 1);
    }

    const newSlide = document.querySelector(`input[value='${values[location]}']`);
    if (newSlide) {
        currentSlide.checked = false;
        newSlide.checked = true;
        pages[values[location]]();
    }
};

const slideInteraction = () => {
    // Beginning of scroll detector

    let lastTouchY = 0;

    function onTouchStart(event) {
        lastTouchY = event.touches[0].clientY;
    }

    function onTouchMove(event) {
        const currentY = event.touches[0].clientY;

        if (currentY > lastTouchY) {
            selectSlide('up');
        } else if (currentY < lastTouchY) {
            selectSlide('down');
        }
        lastTouchY = currentY;
    }

    // Wheel events (desktop)
    function onWheel(event) {
        if (event.deltaY < 0) {
            selectSlide("up");
        } else if (event.deltaY > 0) {
            selectSlide('down');
        }
    }

    function onKeyDown(event) {
        if (event.key === "ArrowUp") {
            selectSlide('up');
        } else if (event.key === "ArrowDown") {
            selectSlide('down');
        }
    }

    // Touch events (mobile)
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    window.addEventListener('wheel', onWheel, { passive: true });

    // Arrow key check
    window.addEventListener('keydown', onKeyDown);
}

slideInteraction();