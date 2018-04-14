function Carousel(element, options) {
    this.element = element;
    this.speed = 2000;
    this.currentImg = 0;

    if (options) { // undefined, null, 0, ''
        this.speed = options.speed || 2000;
        this.repeatDelay = options.repeatDelay || 5000;
        this.auto = options.auto;
        /* 
        if(options.auto) {
            setInterval( () => {
                this.next();
            }, options.repeatDelay || 5000)
        } */
    }
}

Carousel.prototype.init = function () {
    console.log('Velocidad:', this.speed);

    this.drawIndicators();

    if(this.auto) {
        setInterval( () => {
            this.next();
        }, this.repeatDelay);
    }
}

Carousel.prototype.drawIndicators = function () {
    //let items = this.element.children;
    let items = this.element.find('.carousel-item')
    //const indicatorsContainer = this.element.querySelector('.carousel-indicators');
    const indicatorsContainer = this.element.find('.carousel-indicators');

    for (let item of items) {
        indicatorsContainer.append('<i class="indicator"></i>');
    }

    let _this = this;

    indicatorsContainer.find('i.indicator').click( function() { 
        let index = indicatorsContainer.find('i.indicator').index( $(this) );
        //console.log(index);
        _this.setIndex(index);
    });
    

    indicatorsContainer.find('i.indicator').eq(0).addClass('active');
}

Carousel.prototype.next = function () {
    const slider = this.element.find('.carousel-slider');
    const length = this.element.find('.carousel-item').length - 1;

    console.log(length);

    this.currentImg++;

    if (this.currentImg > length) {
        this.currentImg = 0;
    }

    /* slider.animate({
        left: - (100 * this.currentImg) + '%'
    }, this.speed); */
    this.animate();
}

Carousel.prototype.setIndex = function(index) {
    this.currentImg = index;

    this.animate();
}

Carousel.prototype.animate = function(left) {
    const slider = this.element.find('.carousel-slider');
    const indicatorsContainer = this.element.find('.carousel-indicators');

    slider.animate({
        left: - (100 * this.currentImg) + '%'
    }, this.speed);

    indicatorsContainer.find('i.indicator').removeClass('active');
    indicatorsContainer.find('i.indicator').eq(this.currentImg).addClass('active');
}