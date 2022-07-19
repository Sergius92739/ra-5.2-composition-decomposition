import './Header.scss'
import AdBlock from "./AdBlock/AdBlock"
import NewsBox from "./NewsBox/NewsBox"
import PropTypes from "prop-types"

/**
 * 
 * @param {Object} props 
 * @returns Выводит шапку страницы (новостной блок и блок анонса)
 */
export default function Header({ dataHeader }) {
  return (
    <header className="page__header header">
      <NewsBox data={dataHeader} />
      <AdBlock data={dataHeader}>
        <img className="adblock__img" src={dataHeader.adBlock.src} alt="..." />
      </AdBlock>
    </header>
  )
}

Header.propTypes = {
  dataHeader: PropTypes.object.isRequired
}
