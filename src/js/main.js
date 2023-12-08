//Maakt een class Main aan, die heeft de functions om te decrypten of te encrypted, en om de text te veranderen
class Main {
    encrypterView;
    decrypterView;
    htmlElement;
    constructor(data, app) { 
        this.app = app; 
        this.htmlElement = document.createElement("main");  
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body")); 
        this.encrypterView = new EncrypterView(this, data.encrypt);   
        this.decrypterView = new DecrypterView(this, data.decrypt);  
    }
    cipher(textToCipher, type) {
        if (type === "ENCRYPT") {
            this.app.encrypt(textToCipher);
        }
        else {
            this.app.decrypt(textToCipher);
        }
    }
    changeEncrypter(encryptedText) {
        this.encrypterView.changeBody(encryptedText);
    }
    changeDecrypter(decryptedView) {
        this.decrypterView.changeBody(decryptedView);
    }
}
//Maakt een EncrypterView aan die alles laat zien met betrekking tot de encrypter
class EncrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;
    constructor(main, object) { 
        this.htmlElement = document.createElement("article");   
        this.htmlElement.classList.add("view");
        this.main = main;   
        this.type = "ENCRYPT";  
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement)   
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Encrypt");
    }
    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }
    changeBody(encryptedText) {
        this.body.changeBody(encryptedText);
    }
}
//Maakt een decrypterView aan die zorgt voor alles rondom decrypter
class DecrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;
    constructor(main, placeholder) { 
        this.htmlElement = document.createElement("article");   
        this.htmlElement.classList.add("view"); 
        this.type = "DECRYPT"; 
        this.main = main;   
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement)   
        this.header = new Header(this, "Decrypter"); 
        this.body = new Body(this, placeholder); 
        this.footer = new Footer(this, "Decrypt");
    }
    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }
    changeBody(decryptedText) {
        this.body.changeBody(decryptedText);
    }
}
//Maakt een header aan
class Header {
    htmlElement;
    view;
    headingHtmlElement;
    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");    
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText;
        this.headingHtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headingHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}
//Maakt de body van alles aan
class Body {
    htmlElement;
    view;
    inputHtmlElement;
    text;
    constructor(view, object) {
        this.htmlElement = document.createElement("section");    
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input")
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.inputHtmlElement.placeholder = object.placeholder;
        this.inputHtmlElement.value = object.value;
        this.text = object.value;
        this.inputHtmlElement.oninput = this.onTyping;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
    onTyping = (event) => {
        this.text = event.target.value;
    }
    changeBody(text) {
        this.inputHtmlElement.value = text;
    }
}
//Maakt een footer aan
class Footer {
    htmlElement;
    view;
    app;
    buttonHtmlElement;
    constructor(view, buttonText) {
        this.htmlElement = document.createElement("footer");    
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked;
        this.buttonHtmlElement.innerText = buttonText;
        this.htmlElement.appendChild(this.buttonHtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}
//Maakt een App aan
class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;
    constructor() {
        this.encrypter = new Encrypter();   
        this.decrypter = new Decrypter(); 
        this.cleaner = new Cleaner();   
        this.renderer = new Renderer(); 
        this.api = new API();   
        this.api.getData("./src/data/data.json").then((data) => {    
            this.main = new Main(data, this);  
        });
    }
    encrypt = (textToEncrypt) => {
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted);
    }
    decrypt(textToDecrypt) {
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);
    }
}
//Creert de app
const app = new App();