// Personal details shown across the site.
// Leave a field as an empty string to hide it. Nothing breaks.
export const profile = {
    nameEn: 'Mahmoud Ramzi',
    nameAr: 'محمود رمزي',
    initials: 'MR',

    // Put the photo at public/profile.jpg.
    // Paths to files in public/ have no leading slash, so they also work on GitHub Pages.
    // If the file is missing, an animated monogram is shown instead.
    photo: 'profile.jpg',

    // Contact & links: fill in what should be visible.
    email: '',
    phone: '',
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    links: {
        linkedin: 'https://www.linkedin.com/in/mahmoud-ramzi-5',
        gitlab: 'https://gitlab.com/Mahmoud-Ramzi5',
        github: '',
        cv: '', // e.g. 'cv.pdf' placed in public/
    },
};
