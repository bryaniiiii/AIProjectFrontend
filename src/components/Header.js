import PropTypes from 'prop-types'
import Button from './Button'
import Answer from './Answer'


const Header = ({title, onAsk, showAsk}) => {

      
  
    return (
    <header>
      <h1>{title}</h1>
        <Button color = {showAsk ? 'red': 'green'} text={showAsk ? 'Close' : 'Ask'} onClick = {onAsk}/>
    </header>
  )
}
Header.defaultProps = {
    title: 'Question Answering Bot',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Header
