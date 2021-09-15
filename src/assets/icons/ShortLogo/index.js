import React from 'react'
import PropTypes from 'prop-types'

const paths = [
  'M12.9146 24.8182C14.6955 24.8182 16.1467 24.5818 17.2683 24.1091C18.193 23.7278 19.0225 23.2542 19.7567 22.6884C20.0912 22.4306 20.2684 22.0237 20.2684 21.6014V20.966C20.2684 20.0369 19.2153 19.4859 18.4392 19.9963V19.9963C17.7808 20.4455 17.0004 20.8354 16.0974 21.1664C15.2194 21.5209 14.1586 21.6981 12.9146 21.6981C11.0858 21.6981 9.45131 21.2964 8.01251 20.4927C6.57322 19.6891 5.43922 18.5782 4.61001 17.16C3.7803 15.7654 3.36595 14.1818 3.36595 12.409C3.36595 10.6363 3.7803 9.0527 4.61001 7.65821C5.43922 6.26347 6.57322 5.15264 8.01251 4.32541C9.45131 3.52164 11.0858 3.12001 12.9146 3.12001C14.7931 3.12001 16.3903 3.4155 17.7076 4.00622C18.0882 4.18065 18.4492 4.35602 18.7905 4.53233C19.7411 5.02326 21 4.36137 21 3.29154V3.29154C21 2.91252 20.8377 2.54812 20.533 2.32274C19.7502 1.74384 18.7839 1.22958 17.6343 0.779809C16.2683 0.259935 14.6955 0 12.9146 0C11.0609 0 9.3537 0.318934 7.79289 0.957307C6.23158 1.61913 4.86599 2.51719 3.69514 3.65173C2.52428 4.78629 1.60991 6.09807 0.951027 7.58711C0.317142 9.09985 0 10.7072 0 12.409C0 14.1109 0.317142 15.7064 0.951027 17.1954C1.60991 18.7082 2.52428 20.0318 3.69514 21.1664C4.86599 22.3009 6.23158 23.1873 7.79289 23.8255C9.3537 24.4873 11.0609 24.8182 12.9146 24.8182Z0',
  'M12.2515 15.0863L12.2607 9.84001C12.2615 9.35677 11.8705 8.96436 11.3872 8.96356C10.904 8.96275 10.5115 9.35385 10.5107 9.8371L10.5015 15.0833C10.5007 15.5666 10.8917 15.959 11.375 15.9598C11.8582 15.9606 12.2507 15.5695 12.2515 15.0863Z',
  'M9.96172 14.8234L16.5795 14.8345C17.0554 14.8353 17.4419 14.4501 17.4427 13.9742C17.4435 13.4982 17.0584 13.1118 16.5825 13.111L9.96473 13.1C9.4888 13.0992 9.10231 13.4843 9.10148 13.9603C9.10065 14.4362 9.48579 14.8226 9.96172 14.8234Z',
]

export const ShortLogo = ({ className, color }) => {
  return (
    <svg
      className={className}
      width="21"
      height="25"
      viewBox="0 0 21 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => (
        <path d={path} fill={color} key={index} />
      ))}
    </svg>
  )
}

ShortLogo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

ShortLogo.defaultProps = {
  className: 'ArrowContainer',
  color: '#5E966A',
}