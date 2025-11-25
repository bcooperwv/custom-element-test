javascript
     class TestElement extends HTMLElement {
       connectedCallback() {
         console.log('Test Element Loaded');
         this.innerHTML = 'Test Element Loaded';
       }
     }
     customElements.define('test-element', TestElement);
