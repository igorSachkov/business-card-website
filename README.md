Сайт визитка

https://igorsachkov.github.io/business-card-website/index.html




Добавьте это в свой файл package.json

"homepage" : "http://<username>.github.io/<reponame>"
Добавьте этот скрипт в свой файл package.json

 "deploy": "npm run build&&gh-pages -d build"
Установите эту библиотеку .

 npm install --save-dev gh-pages
После выполнения этих двух шагов выполните следующую команду

npm run deploy
Он автоматически создал ветвь с именем gh-pages и развернул ее.
 
 
 https://coderoad.ru/45257667/%D0%9A%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%BD%D1%83%D1%82%D1%8C-%D0%B8-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-Reactjs-%D0%BD%D0%B0-gh-pages
