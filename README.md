ScriptSlide v1.2
=================

JavaScript and HTML based presentation. 

The aim is to provide a lightweight, but easily-configurable, and visually compelling presentation within a web-browser without relying on external services.

[See how it works!](http://www.willwebberley.net/downloads/scriptslide)

**IMPORTANT FILES:**
* *js/scriptslide.js*
    * The main ScriptSlide script.
    * You won't usually need to edit this, but include this in your presentation HTML file.
    * Relies on JQuery and a couple of its plugins. Include these before ScriptSlide.js (as shown in presentation.html).

* *js/config.js*
    * This is the configuration file. 
    * Edit this to change the slideshow structure, transitions, logos, colour-schemes, etc.
    * Include this script **before** ScriptSlide.js in your presentation HTML file.

* *presentation.html*
    * This is where the presentation content goes.
    * Have a look through the file to see how slides are made up.
    * The JS scripts required are listed at the bottom of the document (and work in its current state).

* *css/styles.css*
    * Stylesheet for the presentation.
    * Common styles are included at the top for you to customise.
    * Change any style to suit your particular use(s).
    


An example usage is [here](http://www.willwebberley.net/downloads/node-fts/#welcome).