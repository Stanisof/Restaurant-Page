function aboutDisplay() {
    const about = document.createElement('h1');
    about.textContent = "About us";
    const intro = document.createElement('p');
    intro.className = "about"
    intro.textContent = "Since we opened the restaurant we always have been a family business. From recipes to cooking everything comes from our own family tradition and the knowledge given from generation to generation. Because of that taste may vary from time to time as we try out new things that we think we can improve.";

    return [about, intro]
}

export { aboutDisplay }