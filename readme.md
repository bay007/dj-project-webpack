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