import { Widget } from "./Widget.js";

export class TextBoxWidget extends Widget {
    constructor(container, page) {
        super(container, page);
        
        this.SELECTORS = Object.freeze({
            TEXTBOX: '.textbox',
        });

        this.elements = {
            textboxes: [],
            textX: null,
            textY: null,
            textOutput: null,
        };

        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.updateOutput();
        console.log("textBoxWidget initialized", this.container);
    }

    cacheElements() {
        // FIXED SELECTORS
        this.elements.textboxes = Array.from(
            this.container.querySelectorAll(this.SELECTORS.TEXTBOX)
        );
        
        this.elements.textX = this.container.querySelector('#textXOutput');
        this.elements.textY = this.container.querySelector('#textYOutput');
        this.elements.textOutput = this.container.querySelector('#textOutput');
    }

    bindEvents() {
        this.elements.textboxes.forEach(textbox => {
            textbox.addEventListener('input', () => this.updateOutput());
        });
    }

     updateOutput() {
        const [textX, textY] = this.elements.textboxes;

        const xValue = textX?.value || "";
        const yValue = textY?.value || "";

        // Write individual values
        this.elements.textX.textContent = xValue;
        this.elements.textY.textContent = yValue;

        // Write the result (sum)
        this.elements.textOutput.textContent = xValue + yValue;
    }

}
