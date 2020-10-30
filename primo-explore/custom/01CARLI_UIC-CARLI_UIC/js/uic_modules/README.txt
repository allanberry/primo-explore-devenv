Trouble with Browzine plugin.

I am working with Angular directives.

I am working within a CJS modularized development environment, using Browserify.

  • as implemented, the integration code injects a script tag into the DOM, to dynamically load the plugin at runtime
  • however, I am using Browserify, and have modularized Angular
    • this was done because it really opens up the possibilities for using SCSS and the NPM ecosystem
    • for me, however, browser context is not yet available upon compilation, when "app" variable declared
  • ideally would instead import Browzine adapter as a module; this makes sense to me conceptually
  • I pulled the browser code (previously called at runtime) into my environment, and modularized it
  • not currently working.  Compiles OK, but Angular complains at runtime, in the browser console.
  • lots of other warnings, cruft in the dev console.
  • Integration code is not documented.  Not minimized, but no code comments.

Do you know where folks tend to find support for post-integration issues?  I expect John will not want me to keep him on speed dial.

Do you know of any list of Primo Angular Directives?  (I think of these as hooks where code can be injected.)


I may have uploaded my API key by accident to my repository.  Oops.  If this is a problem, can I mint a new API key?


Where do people in your community tend to go for support, either from Third Iron, Ex Libris, or each other?