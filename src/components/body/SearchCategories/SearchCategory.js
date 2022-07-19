/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент блока категорий поиска
 */
export default function SearchCategory(props) {
  return (
    <a className="search__header-item widget__title" href={props.href}>{props.title}</a>
  )
}