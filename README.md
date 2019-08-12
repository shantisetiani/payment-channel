# Front-end Dashboard Skeleton

[Front-end Dashboard Skeleton](https://github.com/payfazz/front-end-skeleton) is skeleton based on ReactJS for building web dashboard. This project has been wrapped with **webpack** and implement [Ant Design System](https://ant.design/).

## How to Use

-   Clone this repository `git clone https://github.com/payfazz/front-end-skeleton`
-   Change origin url to your own repository with `git remote` command
-   Install dependencies with `npm install` or `yarn install`
-   Copy `.env.example` to `.env` and adjust the value with your environment
-   Serve project : `npm start`
-   Have fun!

## How to Deploy

-   Prepare your .env with real value.
    **IMPORTANT : Dont forget to adjust your PUBLIC_URL ENV!**

We assumes your application is hosted at the serving web server's root. This value doesn't includes the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide.

**Example**

https://payfazz.com, `PUBLIC_URL` = `/`

https://payfazz.com/dev-vm/abc/skeleton-dash, `PUBLIC_URL` = `/dev-vm/abc/skeleton-dash`

-   Run `npm run build` and wait until the bundle process is completed.
-   Copy `dist/` folder contents and serve it with your preffered web server like `nginx`.
-   Done

## Project Structure

Here's project structure in Front-end Dashboard Skeleton.

```
   /
   ├── public/
   └── src/
       |── api/
       |     ├── base.js
       |     └── yourapi.js
       |── assets/
       |── config/
       |     ├── cookies.js
       |     ├── menu.js
       |     ├── url.js
       |── interceptors/
       |     ├── pre-request.js
       |     └── unauthorized.js
       |── middlewares/
       |     └── authenticate.middleware.js
       |── modules/
       |     ├── dashboard/
       |     ├── page-404/
       |     ├── users/
       |     ├── shared/
       |     └── yourmodules/
       |── routes/
       |     ├── auth.js
       |     ├── dashboard.js
       |     └── index.js
       |── styles/
       |     ├── _global.scss
       |     └── index.scss
       └── utils/
             ├── cookies/
             ├── formatters/
             ├── roles/
             ├── routes/
             ├── transformers/
             └── url-query-params/
```

## References

#### 1. API

This folder stores all HTTP requests to **backend**. You can extends `BaseApi` class and use the `make` method.
`BaseApi` is a wrapper for axios client that has been configured with `interceptors` and `base url`.

```
make(method, url, data, addtionalConfig);
```

Example :

```
export class AuthApi extends BaseApi {
  constructor () {
    super('v1/auth');
  }

  login = (data) => {
    return this.make('POST', 'auth/login', data)
  };

  logout = () => {
    return this.make('POST', 'auth/logout')
  };
}
```

#### 2. Assets

This folder used for storing asset files like logo, and other images.

#### 3. Config

This folder stores global constants in your project like `MENU, BASE_URL, etc`.
Variable name must be in **uppercase** format.

#### 4. Interceptors

You can intercept **requests** or **responses** before they are handled by then or catch.
Currently, there are 2 interceptor provided by us.

-   Pre Request Interceptor : Append bearer token to request header.
-   Unauthorized Interceptor : Handle auth error response status like 401/403, redirect to login page.

#### 5. Middlewares

Middleware is a general term for software that serves to "glue together" separate, often complex and already existing, programs.
You can create your own middleware and attach it in `routes`. Attached middleware will be applied by `routes factory`.

#### 6. Modules

Modules can be described as your application domain.
Here's the example structure :

```
modules/
  ├── auth/
  |     |── login/
  |     |     |── index.js
  |     |     |── form.js
  |     |     └── modal.js
  |     └── register/
  └── product/
        |── index.js
        └── filter.js
```

#### 7. Routes

Application route stored in separated file based on module name. Then, register the new module routes to `index.js`.

#### 8. Styles

Save and load your styles in this folder. All styles must be defined as .scss extension.
Dont forget to import it in **index.scss**.
Variables like global padding, font, and color scheme must be defined in `_global.scss`.

#### 9. Utils

Utils folder contains helper methods.
A helper method is a method that helps another method to perform it's task. These are typically used when a method has to perform a complicated task that is composed of several smaller tasks. The smaller tasks are often performed by helper methods.

## Resources

-   [ReactJS Documentation](https://reactjs.org/docs/getting-started.html)
-   [Axios Documentation](https://github.com/axios/axios)
-   [Ant Design of React](https://ant.design/docs/react/introduce)
-   [Moment.js](https://momentjs.com/docs/)

## Contributing

We would love for you to contribute to this repo and help make it even better than it is today!
Build your code and submit your Pull Request.

Thankyou!
