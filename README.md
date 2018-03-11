# hdlss-browser-client
In-browser client-side helper for hdlss.io integration.

## Usage

1. Include the package `hdlss-browser-client` in your webapp in your favorite way:

    npm
    ```bash
    npm install hdlss-browser-client
    ```
    Bower
    ```bash
    bower install --save hdlss-browser-client
    ```
    script tag
    ```html
    <script src="https://unpkg.com/hdlss-browser-client@^0.1"></script>
    ```

2. Use it via the single global variable `hdlss` it exports:

    ```js
    // when your page has finished loading:
    hdlss.ready();

    // when instead there has been an error and the page will never finish loading:
    hdlss.error();
    ```

3. For instructions on how to finish the integration please see instructions on [hdlss.io](https://get.hdlss.io) (work in progress).
