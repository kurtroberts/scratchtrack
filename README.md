scratchtrack
============

Browser-based responsive wireframing framework, aimed at making the wireframing process productive and fluid.

#Philosophy
The point of this project is to make it easy and fast to use native frameworks and tools to prototype and design websites.  Why would anyone want to do that, you ask?

Working in the native medium is fast, cheap and it resolves misunderstandings up front.  It lets less technical users make more educated choices about the implementation process.

This kit is meant to be a backend-agnostic, easy to learn prototyping system.  You could call most desktop, GUI-based prototyping tools backend-agnostic.  Scratchtrack is intended to be easy to learn in the sense that you can apply your basic coding skills and get rough ideas down without having to learn yet another GUI.

##Isn't it easier to just start drawing? (Spoiler: Also explains the name.)
Some people think that way.  Others think structurally.  It's called scratchtrack, because back in the days of recording sound on tape, you'd sometimes need a throwaway track for all the other musicians to work off of.  Say you're the drummer and you have an idea for a riff, but you can't play production quality guitar.  You could lay down a throwaway track that the rest of the band can use to improvise their parts, and then everyone can contribute to the song.

##What's in the "box"?
- A working front-end build system, set up and ready to go.
- A grid system and some basic page layouts
- A variety of partials for common needs (search boxes, typography, lists, nav)
- Helper mixins for SCSS, including for responsive design
- Icon libraries



#Setting up

Step 0: Install node.js and gulp.


First, you'll clone this repo:

```
git clone https://github.com/kurtroberts/scratchtrack

```

Then you'll get all the required dependencies, and build your environment:

```

npm install
gulp
git submodule init
git submodule update


```

The slow part is over.  Now you get to wireframe like crazy.


#Making Site Trees and Pages