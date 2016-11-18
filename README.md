
# Rich Code eXperience (RCX)

<!-- <img src='media/rcx-3.jpg'> -->

## Overview
  
## Usage

* Go to dist/, open rcx.html via file:// or http://
* Start coding

### Advanced Usage

* Go to dist/app
* To test a specific version, open rcx-[version].html via file:// or http://
* file:// can't use AJAX server store, but can still communicate with a 'configured' server using DOM server store. See server/ for an example implementation

## Alternatives

* JSFiddle
* JSBin
* CodePen
* Plunkr
* Others

### Comparison with RCX

* **Storage**
  * NONE of the alternatives gives you a choice where to store your data.
  * RCX gives you a choice to store your data in 4 different storag layers with the same API:
    * Browser (IndexedDB, LocalStorage)
    * Server 
      * AJAX (Make sure you open RCX using http://, NOT file://)
      * DOM (Hackish using script and form tags - see the folder /server for details)
    * Cloud (For now, just Firebase 3)
    * Static (Inmemory, just for testing)
* **Files**
  * JSFiddle, JSBin, and CodePen give you just ONE file per Tab (HTML, CSS, JS)
  * RCX gives you essentially UNLIMITED files per tab. Yes, RCX can function more than just 'play'-ground; it can build entire programs. It can even build [itself](#).
* **Transpilers**
  * All of the above have transpiler support, but not the most straightforward ways to unlock
  * RCX gives you a simple dropdown NEAR the filename to change the transpiler of the file. Could not be any simpler.
* **Export/Import**
  * All the alternatives have bad support for exporting/importing
  * RCX allows you to export/import your project as a JSON file, a ZIP file, or a single file (based on the currently selected of the Tab)
* **Output**
  * None of the alternatives are capable of showing the pre-run form of the HTML file (before inserted into the iframe) 
  * RCX gives you an option to display the result using frame or editor
    * The frame option runs your HTML in an iframe (the default)
    * The editor option does NOT run your HTML in an iframe, but merely shows you what you code looks like before it is inserted into the iframe DOM. This is a useful feature for debugging, especially when you want to see the generated code of using transpilers.
  * RCX also allows you to export/import in the Output Tab
* **Data**
  * The alternatives have different ways of organizing their code samples
  * RCX gives you a Tree, a List, a Select, and a Route for navigating your projects
  * RCX also allows you to export/import your entire set of projects here as a JSON or a ZIP file
* **Layout**
* Others

## Docs

Documentation for RCX can be found on the [wiki](https://github.com/ajbodev/rcx/wiki).

## Development

Make sure [git](https://git-scm.com/downloads), [node](https://nodejs.org/en/download/), and [npm](https://www.npmjs.com/package/npm) are installed on your machine first.

To run builds and/or tests, clone the repo first:

```bash
git clone https://github.com/ajbodev/rcx.git
```

Then install all node dependencies:

```bash
npm install
```

### Build

All output files are in /dist/app.

Make sure gulp, webpack are install globally:

```bash
npm i gulp -g
npm i webpack -g
```

To build the rcx HTML file, run:

```bash
gulp jade:app // rcx-[version].html
```

The HTML file (non-standalone) requires four files to run. Build them using:

```bash
gulp webpack:app      // bundle-[version].js
gulp jade:app-css     // bundle-[version].css
gulp jade:vendors-js  // vendors-[version].js
gulp jade:vendors-css // vendors-[version].css
```

You can also generate the bundle-[version].js by simply typing:

```bash
webpack
```

The standalone build (all in one file) requires all four files to have been built already. If so, then simply run:

```bash
gulp jade:app-standalone // rcx-[version]-standalone.html
```

### Tests

Make sure jasmine is installed globally:

```
npm i -g jasmine
```

Then simply run:

```bash
gulp jasmine:app
```

## Author

**Omar Job Abesamis**
- <https://github.com/ajbodev>

## License

Open sourced under the [MIT license](LICENSE.md).
