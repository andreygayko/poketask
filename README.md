  _В связи с требованиями, пагинация определяется на основе значения count, полученного в ответе. Однако, при применении фильтрации, пагинация неактивна, поскольку поле count отсутствует в полученном ответе._
  _Также, в предоставленном API отсутствует возможность отправки нескольких выбранных параметров, поэтому фильтрация доступна только для одного параметра ability._

# Рекомендации

- использовать yarn
- следовать структуре

# Цель

- Имея готовое апи https://pokeapi.co/docs/v2#resource-listspagination-section реализовать

## Вывод списка покемонов, используя

- TypeScript, **any** быть не должно
- [Styled Components](https://styled-components.com/) или [EmotionJS](https://emotion.sh/docs/styled) для минимальной стилизации
- [SWR](https://swr.vercel.app/) в связке с [Axios](https://github.com/axios/axios)

### Уровень 1

- список имен Покемонов, где это _name_ из ответа API;
- Пагинация, 20 покемонов на странице, число страниц рассчитывается из ответа _count_ из API.

### Уровень 2

- Добавление "карточек" покемонов, кроме имени отображение данных, полученных из API https://pokeapi.co/docs/v2#pokemon-section

### Уровень 3

- Добавление фильтра по https://pokeapi.co/docs/v2#abilities, реализовать можно как панелью, так и дропдауном (селектом), выбранных параметров может быть несколько.

### Уровень 4

- Создание дополнительной страницы-фильтра по https://pokeapi.co/docs/v2#pokemon-habitats с учетом ранее приведеных фильтров

**Нет необходимости выполнять все уровни**

Главый критерий **Уровень 1**, **Уровень 2** крайне желателен к реализации.

Удачи =)
