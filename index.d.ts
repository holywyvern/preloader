declare module "client-side-loader" {

    import EventManger, { EventCallback } from 'generic-events';

    export interface ResourceLoader<R> {
        /**
         * Gets a resource previously loaded by name.
         * @param name {string} The resource to get.
         * @return The resource, or null if the resource doesn't exists or wasn't loaded.
         */
        get(name: string): R | null;
        /**
         * Adds a new resource to load.
         * If the manager is loading, an error is thrown.
         * @param url {string} The url to load
         * @param name {string} The name of the resource, if ignored, the name will be the url.
         * @return this.
         */
        add(url: string, name?: string): this;
        /**
         * Starts the load of the resources.
         */
        start(): void;
        /**
         * A quick access to the audio loader.
         */
        public audio : ResourceLoader<HTMLAudioElement>;
        /**
         * A quick access to the image loader.
         */
        public image : ResourceLoader<HTMLImageElement>;
        /**
         * A quick access to the json loader.
         */
        public json  : ResourceLoader<any>;
        /**
         * A quick access to the video loader.
         */
        public video : ResourceLoader<HTMLVideoElement>;
        /**
         * The event manager of the loader.
         */        
        public events: EventManger;
    }

    export default class Loader {
        /**
         * The audio loader.
         */
        public audio : ResourceLoader<HTMLAudioElement>;
        /**
         * The image loader.
         */
        public image : ResourceLoader<HTMLImageElement>;
        /**
         * The JSON loader.
         */
        public json  : ResourceLoader<any>;
        /**
         * The video loader.
         */
        public video : ResourceLoader<HTMLVideoElement>;
        /**
         * The event manager.
         */
        public events: EventManger;
        /**
         * Adds an audio file, similar to: ``this.audio.add(url, name)``
         * @param url {string} The url to load
         * @param name {string} The name of the resource, if ignored, the name will be the url.
         * @return this.
         */
        addAudio(url: string, name?: string): this;
        /**
         * Adds an image file, similar to: ``this.image.add(url, name)``
         * @param url {string} The url to load
         * @param name {string} The name of the resource, if ignored, the name will be the url.
         * @return this.
         */
        addImage(url: string, name?: string): this;
        /**
         * Adds an video file, similar to: ``this.video.add(url, name)``
         * @param url {string} The url to load
         * @param name {string} The name of the resource, if ignored, the name will be the url.
         * @return this.
         */
        addVideo(url: string, name?: string): this;
        /**
         * Adds an json file, similar to: ``this.json.add(url, name)``
         * @param url {string} The url to load
         * @param name {string} The name of the resource, if ignored, the name will be the url.
         * @return this.
         */
        addJson(url: string, name?: string): this;
        /**
         * Alias to this.events.on.
         * @see EventCallback.on()
         */
        on(event:string, ...callbacks: EventCallback): this;
    }

}