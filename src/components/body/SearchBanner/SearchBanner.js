import PropTypes from "prop-types"

/**
 * 
 * @param {*} Object 
 * @returns Выводит изображение ниже поля ввода
 */
export default function SearchBanner(props) {
  return (
    <a href={props.href} className="search__footer">
      <img className="search__footer-img" src={props.src} alt="..." />
    </a>
  )
}

SearchBanner.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}
