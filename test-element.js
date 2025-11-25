javascript
     class TestElement extends HTMLElement {
       connectedCallback() {
         this.innerHTML = 'Test Element Loaded';
       }
     }
     customElements.define('test-element', TestElement);
    
