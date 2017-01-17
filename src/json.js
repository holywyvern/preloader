import Loader from './loader';

class JsonLoader extends Loader {

    _startLoad(url, name) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (req.readyState == 4) {
                const status = xhr.status;
                if (status == 200) {
                    try {
                        this._onSuccess(url, name, JSON.parse(xhr.responseText));
                    } catch (e) {
                        this._onError(url, name, e);
                    } 
                } else {
                    this._onError(url, name, e);
                }
            }
        };
        xhr.send();
    }

}

export default JsonLoader;