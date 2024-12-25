// import React from 'react'
import PropTypes from 'prop-types'

const ProptypeEx = props => {
  return (
    <>
      <div>
        {props.numvalue}
      </div>
    </>
  )
}

ProptypeEx.propTypes = {
  numvalue: PropTypes.number,
}
ProptypeEx.defaultProps = {
  numvalue: 123
}

export default ProptypeEx
