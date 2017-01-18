import Loader from './loader';

class ImageLoader extends Loader {

    _startLoad(url, name) {
        console.log(name);
        const file = new Image();
        file.onload  = () => this._onSuccess(url, name, file);
        file.onerror = (file, error) => this._onError(url, name, error);
        file.src = url;
    }

}

export default ImageLoader;