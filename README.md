[![Build status](https://ci.appveyor.com/api/projects/status/db2d0wok55hb61ot/branch/master?svg=true)](https://ci.appveyor.com/project/Sergius92739/ra-5-2-composition-decomposition/branch/master)

### Deployment:  <a href="https://sergius92739.github.io/ra-5.2-composition-decomposition/">Github Pages</a>

Декомпозиция
===

Вы работаете в стартапе, который решил тягаться с самим Яндексом в части предоставления контента. Это, конечно же шутка, но задача нешуточная.

Вам принесли дизайн-макет, похожий на этот:

![](./assets/decomposition.png)

Что вам нужно сделать:

1. Разбейте весь интерфейс на компоненты и в файле каждого компонента напишите буквально одну строку комментария, за что данный компонент отвечает (можете использовать формат JSDoc, подсмотреть можно, например, у ребят из Alfa Laboratory: https://github.com/alfa-laboratory/arui-feather/blob/v16.0.0/src/dropdown/dropdown.jsx).
1. Постарайтесь повторящиеся компоненты сделать настраемыми за счёт `props`. Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.

Функциональность и стилизацию реализовывать не нужно, достаточно базового оформления (чтобы видно было все блоки).
