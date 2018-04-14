function Carousel(element, options) {
    this.element = element;
    this.speed = 2000;
    this.currentImg = 0;

    if (options) { // undefined, null, 0, ''
        this.speed = options.speed;
    }
}

Carousel.prototype.init = function () {
    console.log('Velocidad:', this.speed);

    this.drawIndicators();
}

Carousel.prototype.drawIndicators = function () {
    //let items = this.element.children;
    let items = this.element.find('.carousel-item')
    //const indicatorsContainer = this.element.querySelector('.carousel-indicators');
    const indicatorsContainer = this.element.find('.carousel-indicators');

    for (let item of items) {
        indicatorsContainer.append('<i class="indicator"></i>');
    }

    indicatorsContainer.find('i.indicator').eq(0).addClass('active');
}

Carousel.prototype.next = function () {

}