1.- Create Project

```ssh
django-admin startproject --template=https://codeload.github.com/bay007/dj-project-webpack/zip/master your_project_name
```

2.- Install js dependences.

```ssh
cd assets
[yarn|npm] install
```

3.- Start develop server

```ssh
assets> yarn run watch
cd ..
python manage.py runserver
```

3.5.- Add new javascript and css files for new html file.
Example: We are going to create notifications.html
Create a new notifications.html extended from base. (you can inspire in login.html)
Create a new `notifications.js` and `notifications.css` in `src/js` and `src/css`
Inside `notifications.js` include at first line
`import '../css/notifications.scss';`
Add `src/js/notifications.js` to `assets/mix.js`

4.- Redy to deploy.
Run

```ssh
yarn run build
```

`assets/dist` directory will be created with files ready to production.

5.- If you want to add new templates, you must add at `assets/tailwind.config.js`
in content section, thus, only css used in templates will be in final dist bundles.

```ssh
purge: {
    enabled: true,
    content: ['../core/templates/**/*.html'],
}
```



NOTE:
When you access to /login/ page a error will raised:
```
WebpackBundleLookupError at /login/
Cannot resolve bundle vendors.
est Method:	GET
Request URL:	http://127.0.0.1:8000/login/
Django Version:	2.1.2
Exception Type:	WebpackBundleLookupError
Exception Value:	
Cannot resolve bundle vendors.
```
The reazon is, at start time, we don't have any vendor javascript code. 

1.- To fix, remove 'vendor' bundle in base.html

or

2.- Add extenrnal dependences like Lodash, lodash will be bundled in verndors.[hash].js 



TODO: 
* ENV variables support
* Add shell_plus
* Add custom user model withouth username
* Add support for post_office for email
* Add Recaptcha for login
* Add Axes for block multi intent login
* Add DRF basic support