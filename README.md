# PostCSS Remove Nested Calc

[PostCSS] plugin to remove nested calc() for ie11 compatibility.

[PostCSS]: https://github.com/postcss/postcss


E.g. Zach Handing [wrote about it on codepen], and I had a very similar problem.

[wrote about it on codepen]: https://codepen.io/zachhanding/post/nested-calc-functions-and-ie11

This will cause problems in IE11
```css
.foo {
    width: width: calc(100vw - calc(20% - 10px));
}
```


This will not:
```css
.foo {
  width: calc(100vw - (20% - 10px));
}
```

## Install 


```bash
$ npm install postcss-remove-nested-calc --save-dev
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-remove-nested-calc'),
    require('autoprefixer')
  ]
}

```
Or for Webpack
```diff
module.exports = {
    target: 'web',
    mode: (process.env.APP_ENV === 'production') ? 'production' : 'development',
    devtool: (process.env.APP_ENV === 'production') ? false : 'inline-source-map',
    entry: {
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
+                                require('postcss-remove-nested-calc'),
                                require('autoprefixer')
                            ],
                        }
                    },
                ]
            },
            
        ]
    }
};
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

## Built With

[js-plugin-starter-kit](https://github.com/course-one/js-plugin-starter-kit)

[official docs]: https://github.com/postcss/postcss#usage

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
To all the JS RegEx Ninjas out there, this project might have some room for improvement ;)

Please make sure to update tests as appropriate.

## Authors

Nico Jacobs

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
