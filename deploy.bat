move /Y dist\MyFavPlaces\main.*.js dist\MyFavPlaces\main.js
move /Y dist\MyFavPlaces\polyfills.*.js dist\MyFavPlaces\polyfills.js
move /Y dist\MyFavPlaces\runtime.*.js dist\MyFavPlaces\runtime.js
move /Y dist\MyFavPlaces\scripts.*.js dist\MyFavPlaces\scripts.js
move /Y dist\MyFavPlaces\styles.*.css dist\MyFavPlaces\styles.css

xcopy /Y index.html dist\MyFavPlaces\index.html