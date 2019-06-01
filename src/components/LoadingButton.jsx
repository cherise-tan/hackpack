import React from 'react'

const LoadingButton = ({ isLoading, className, children }) =>
  <button className={className}>
    {isLoading ? <Spinner /> : children}
  </button>

const Spinner = () => (
  <div className="spinner"></div>
)

export default LoadingButton
