# Workers APP
### Workers App is a test React application.

## Installation
Employee APP is created on Laravel Core and dependencies using ReactJS.

Download the repo, install the laravel core and dependencies and start the server.

```
$ git clone https://github.com/sofiaohanjanyan/workers.git
$ cd workers
$ composer install
```

## Configuration
Create an environment, generate a key, config your database connections

```
$ mv .env.example .env # for windows: ren .env.example .env
$ php artisan key:generate
```

Then config your database connections in .env file

Run the migration

```
$ php artisan migrate
```

## Launch the application

```
$ npm run dev
$ php artisan serve
# Laravel development server started: <http://127.0.0.1:8000>
```
