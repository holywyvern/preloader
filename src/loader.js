import EventManager from 'generic-events';
class Loader {

    constructor(manager) {
        this.events = new EventManager();
        this._loadSize  = 0;
        this._loading   = false;
        this._result    = {};
        this._manager   = this;
    }

    get audio() {
        return this._manager.audio;
    }

    get image() {
        return this._manager.image;
    }

    get json() {
        return this._manager.json;
    }

    get video() {
        return this._manager.video;
    }

    add(url, name=url) {
        if (this._loading) {
            throw "Currently loading";
        }
        this._result[name] = { url, value: null };
        return this;
    }

    _onSuccess(url, name, resource) {
        this._loadSize--;
        this.events.fire('load', resource, url, name);
        this._result[name].value = resource;
        this._checkLoad();
    }

    _checkLoad() {
        if (this._loadSize <= 0) {
            this.events.fire('end');
            this._loading = false;
        }        
    }

    _onError(url, name, error) {
        this._loadSize--;
        this.events.fire('error', error, url, name);
        this._checkLoad(); 
    }

    start() {
        this._loading = true;
        const resources = Object.keys(this._result);
        this._loadSize = resources.length;
        for (let name of resources) {
            this.events.fire('start', asset.url, name);
            let asset = this._result[name];
            this._startLoad(asset.url, name);
        }
        this._checkLoad();       
    }

    get(name) {
        return this._result[name] ? this._result[name].value : null;
    }

    _starLoad(url, name) {

    }

}

export default Loader;