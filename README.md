# nv-simple-toast
> A really really simple toast library for Angular ...

## Demo 
Check out a simple usage of **nv-simple-toast** : [nv-simple-toast](https://nvigneux.github.io/nv-simple-toast-example/)

## Installation

```
npm install --save nv-simple-toast
```
[npm package](https://www.npmjs.com/package/nv-simple-toast)

## Setup
### Module
Import ``NvSimpleToastModule`` in to your ``AppModule``

```javascript
import { NvSimpleToastModule } from 'nv-simple-toast'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NvSimpleToastModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
----------
### Template
Add ``<nv-simple-toast></nv-simple-toast>`` to your template

```html
<main>
  <router-outlet></router-outlet>
  <nv-simple-toast></nv-simple-toast>
</main>
```
----------
### Service
Import the service ``NvSimpleToast`` in to your components
```javascript
import { NvSimpleToast } from 'nv-simple-toast'
...
constructor(private nvSimpleToast: NvSimpleToast) {}
...
this.nvSimpleToast.addToast({title: 'test'}, 4000)
```
## Development
### Toast
```javascript
export interface Toast {
  id?: number
  title: string
}
```
### Service
```javascript
getToasts(): Observable<Toast[]>

addToast(toast: Toast, time: number = 5000): void // default 5000

removeToast(toast: Toast): void

clearToast(): void
```
