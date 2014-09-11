## Laravel 4.3 + Gulp + Compass

I was fed up of the bootstrapping I needed to do for each project, so I created this repository. I'm aiming for this to be a fluid project, constantly changing as I encounter new bits I need to configure. I'm also playing around with Gulp as an alternative for Grunt (I like the pipes...). 

I've left compass compiling out of the Gulp process for now. I found it *really* slow to update when I changed a file, so instead I've configured PHPStorm to run the compass tasks upon save.

Also, I've literally just started this. Going to try out a few new tactics, so please don't take this as a finished project by any means...

## To Do
  - Task-specific file watching (ie. when compass changes the `/assets/css` files, run `dev-build:css`).
  - Add `package.json`
  - More things.

## Requirements
  - PHP 5.4 (see Laravel Requirements)
  - Node.js (+ npm)
  - Ruby (for compass support. Run `gem install compass` to install.)

## Usage
```bash

git clone https://github.com/jonlambert/laravel-gulp-starter your-project-name
cd your-project-name
composer install
npm install
bower install
gulp build-dev

```
