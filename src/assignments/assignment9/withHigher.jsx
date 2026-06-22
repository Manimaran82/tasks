import React from 'react'

const withHiger = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent {...props} />
  )
}

export default withHiger
