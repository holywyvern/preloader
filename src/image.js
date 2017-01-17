import Loader from './loader';

class ImageLoader extends Loader {

    _starLoad(url, name) {
        const file = document.createElement('img');
        file.onload  = () => this._onSuccess(url, name, file);
        file.onerror = (file, error) => this._onError(url, name, error);
        file.src = url;
    }

}

export default ImageLoader;