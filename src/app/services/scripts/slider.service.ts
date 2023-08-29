import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() {
	}

  public loadScript({id=''}) {
    return new Promise((resolve, reject) => {
    if(id && document.getElementById(id)) {
        resolve({id: id, loaded: true, status: 'Already Loaded'});
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = '';
    script.src = './slider.js';
    script.id = id;
    script.onload =() => {
        resolve({id: id, loaded: true, status: 'Loaded'});
    };
    script.onerror = (error: any) => resolve({id: id, loaded: false, status: 'Loaded'});
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
});
}

public removeScript(id: string) {
    let script = document.getElementById(id);
    if(script) {
        script.remove();
    }
}
}
