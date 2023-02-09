class Carroussel {
    constructor(images, carrousselId) {
        this.images = images;
        this.carrousselId = carrousselId;
        this.indexActuel = 0;
        this.display();
    }
    display = () => {
        let content = document.getElementById(this.carrousselId);
        let image = document.createElement('img');
        image.src = this.images[this.indexActuel];
        content.innerHTML = this.indexActuel;
        content.appendChild(image);    
    }

    suivant = function () {
        if (this.indexActuel >= this.images.length - 1) {
            this.indexActuel = 0;
        } else {
            this.indexActuel += 1;
        }
        this.display()
    }
    precedent = function () {
        if (this.indexActuel <= 0) {
            this.indexActuel = this.images.length - 1;
        } else {
            this.indexActuel -= 1;
        }
        this.display()
    }
}

let carroussel1 = new Carroussel(['image1.jpg', 'image2.jpg', 'image3.jpg'], 'carroussel-main');
const afterButton = document.getElementById('button-suivant');
const beforeButton = document.getElementById('button-precedent');

afterButton.addEventListener('click', () => carroussel1.suivant())
beforeButton.addEventListener('click', () => carroussel1.precedent())

setInterval(() => {
    carroussel1.suivant()
}, 3000);