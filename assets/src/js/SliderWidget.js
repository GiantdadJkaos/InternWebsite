import { Widget } from "./Widget.js";

export class SliderWidget extends Widget {
    constructor(container, page) {
        super(container, page);
        
        this.SELECTORS = Object.freeze({
            SLIDER: '.slider',
        });

        this.elements = {
            slider: [],
            variableX: null,
            variableY: null,
            output: null
        };

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateOutput();
        console.log("slider initialized", this.container);
    }

    cacheElements() {
        this.elements.slider = Array.from(
            this.container.querySelectorAll(this.SELECTORS.SLIDER)
        );

        // FIXED SELECTORS
        this.elements.variableX = this.container.querySelector('#xOutput');
        this.elements.variableY = this.container.querySelector('#yOutput');
        this.elements.output   = this.container.querySelector('#output');
    }

    bindEvents() {
        this.elements.slider.forEach(slider => {
            slider.addEventListener('input', () => this.updateOutput());
        });
    }

     updateOutput() {
        const [sliderX, sliderY] = this.elements.slider;

        const xValue = Number(sliderX.value);
        const yValue = Number(sliderY.value);

        // Write individual values
        this.elements.variableX.textContent = xValue;
        this.elements.variableY.textContent = yValue;

        // Write the result (sum)
        this.elements.output.textContent = xValue + yValue;
    }

}
