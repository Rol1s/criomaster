# Деплой на GitHub Pages

## 1. Создай репозиторий на GitHub

- Зайди на [github.com/new](https://github.com/new)
- Имя репо: **criomaster** (или любое — тогда в шаге 4 поменяй `basePath` в `next.config.ts`)
- Public, без README (у нас уже есть проект)
- Создай репо

## 2. Включи GitHub Pages

- В репо: **Settings** → **Pages**
- **Source**: **GitHub Actions** (выбери из выпадающего списка)
- Сохрани

## 3. Запушь код

В папке проекта выполни (подставь свой логин и имя репо):

```bash
git init
git add .
git commit -m "КриоМастер — сайт ремонт холодильников"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЛОГИН/criomaster.git
git push -u origin main
```

## 4. Деплой

После пуша в **main** автоматически запустится workflow **Deploy to GitHub Pages**. Через 1–2 минуты сайт будет доступен по адресу:

**https://ТВОЙ_ЛОГИН.github.io/criomaster/**

Если назвал репо по-другому — подставь его в URL вместо `criomaster`.

## Если репо назван не criomaster

Открой `next.config.ts` и замени `/criomaster` на `/ИМЯ_ТВОЕГО_РЕПО` в строке с `basePath`.
