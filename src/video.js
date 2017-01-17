import Loader from './loader';

class VideoLoader extends Loader {

    _startLoad(url, name) {
        const file = document.createElement('video');
        file.onload  = () => this._onSuccess(url, name, file);
        file.onerror = (file, error) => this._onError(url, name, error);
        file.preload = 'auto';
        file.addEventListener("canplaythrough", () => this.events.fire('playable', url, name));
        file.src = url;
    }
}

export default VideoLoader;