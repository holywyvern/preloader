import EventManager from 'generic-events';

import AudioLoader  from './audio';
import ImageLoader  from './image';
import JsonLoader   from './json';
import VideoLoader  from './video';

import Set          from 'es6-set';

class Preloader {
    
    constructor() {
        this.events   = new EventManager();
        this.audio    = new AudioLoader(this);
        this.image    = new ImageLoader(this);
        this.json     = new JsonLoader(this);
        this.video    = new VideoLoader(this);
        this._loading = new Set();
        this.audio.events.on('end',this._onAudioLoad.bind(this));
        this.image.events.on('end',this._onImageLoad.bind(this));
        this.json.events.on('end',this._onJsonLoad.bind(this));
        this.video.events.on('end',this._onVideoLoad.bind(this));
    }

    _onAudioLoad() {
        this._loading.delete('audio');
        this._checkLoad();
    }

    _onImageLoad() {
        this._loading.delete('image');
        this._checkLoad();
    }

    _onJsonLoad() {
        this._loading.delete('json');
        this._checkLoad();
    }

    _onVideoLoad() {
        this._loading.delete('video');
        this._checkLoad();
    }

    _checkLoad() {
        if (this._loading.size <= 0) {
            this.events.fire('end');
        }
    }

    start() {
        if (this._loading.size > 0) {
            throw "Loader is still loading.";
        }
        this._loading.add('audio');
        this._loading.add('image');
        this._loading.add('json');
        this._loading.add('video');
        this.audio.start();
        this.image.start();
        this.json.start();
        this.video.start();
        return this;
    }

    on(name, callback) {
        this.events.on(name, callback);
        return this;
    }

    addAudio(url, name=url) {
        this.audio.add(url, name);
        return this;
    }

    addImage(url, name=url) {
        this.image.add(url, name);
        return this;
    }

    addJson(url, name=url) {
        this.json.add(url, name);
        return this;
    }

     addVideo(url, name=url) {
        this.video.add(url, name);
        return this;
    }       

}

export default Preloader;