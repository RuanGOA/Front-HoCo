import React from 'react'
import PropTypes from 'prop-types'

const paths = [
  'M3.30577 1.09283C5.1315 1.09283 6.61155 2.57288 6.61155 4.39861V21.6387H34.6738V4.39858C34.6738 2.57286 36.1538 1.09283 37.9796 1.09283C39.8053 1.09283 41.2853 2.57287 41.2853 4.39858V46.6016C41.2853 48.4273 39.8053 49.9073 37.9796 49.9073C36.1538 49.9073 34.6738 48.4273 34.6738 46.6016V27.8315H6.61155V46.6015C6.61155 48.4273 5.1315 49.9073 3.30577 49.9073C1.48005 49.9073 0 48.4273 0 46.6015V4.39861C0 2.57288 1.48005 1.09283 3.30577 1.09283ZM72.2125 12.75C75.9346 12.75 79.2403 13.6243 82.1296 15.3729C85.0195 17.1215 87.2721 19.4529 88.8883 22.3672C90.5532 25.2815 91.3859 28.463 91.3859 31.9118C91.3859 35.3602 90.5532 38.5413 88.8883 41.4556C87.2721 44.3217 85.0195 46.6288 82.1296 48.3774C79.2403 50.126 75.9346 51 72.2125 51C68.4905 51 65.1848 50.126 62.2954 48.3774C59.4056 46.6288 57.1285 44.3217 55.4636 41.4556C53.8473 38.5413 53.0392 35.3602 53.0392 31.9118C53.0392 28.463 53.8473 25.2815 55.4636 22.3672C57.1285 19.4529 59.4056 17.1215 62.2954 15.3729C65.1848 13.6243 68.4905 12.75 72.2125 12.75ZM72.2125 18.5786C69.6168 18.5786 67.3397 19.2101 65.3807 20.4729C63.4217 21.6872 61.9036 23.3144 60.826 25.3544C59.7974 27.3458 59.2833 29.5316 59.2833 31.9118C59.2833 34.2432 59.7974 36.4285 60.826 38.4688C61.9036 40.4604 63.4217 42.0872 65.3807 43.3503C67.3397 44.5642 69.6168 45.1714 72.2125 45.1714C74.8574 45.1714 77.1345 44.5642 79.0444 43.3503C81.0034 42.0872 82.4974 40.4604 83.5255 38.4688C84.6032 36.4285 85.1417 34.2432 85.1417 31.9118C85.1417 29.5316 84.6032 27.3458 83.5255 25.3544C82.4974 23.3144 81.0034 21.6872 79.0444 20.4729C77.1345 19.2101 74.8574 18.5786 72.2125 18.5786Z',
  'M167.827 12.75C171.549 12.75 174.854 13.6243 177.744 15.3729C180.634 17.1214 182.886 19.4529 184.502 22.3672C186.168 25.2815 187 28.463 187 31.9117C187 35.3602 186.168 38.5413 184.502 41.4556C182.886 44.3217 180.634 46.6288 177.744 48.3774C174.854 50.126 171.549 51 167.827 51C164.105 51 160.799 50.126 157.91 48.3774C155.02 46.6288 152.743 44.3217 151.078 41.4556C149.461 38.5413 148.653 35.3602 148.653 31.9117C148.653 28.463 149.461 25.2815 151.078 22.3672C152.743 19.4529 155.02 17.1214 157.91 15.3729C160.799 13.6243 164.105 12.75 167.827 12.75ZM167.827 18.5786C165.231 18.5786 162.954 19.2101 160.995 20.4729C159.036 21.6872 157.518 23.3144 156.44 25.3544C155.412 27.3458 154.897 29.5315 154.897 31.9117C154.897 34.2432 155.412 36.4285 156.44 38.4688C157.518 40.4603 159.036 42.0872 160.995 43.3503C162.954 44.5642 165.231 45.1714 167.827 45.1714C170.472 45.1714 172.749 44.5642 174.659 43.3503C176.618 42.0872 178.112 40.4603 179.14 38.4688C180.217 36.4285 180.756 34.2432 180.756 31.9117C180.756 29.5315 180.217 27.3458 179.14 25.3544C178.112 23.3144 176.618 21.6872 174.659 20.4729C172.749 19.2101 170.472 18.5786 167.827 18.5786Z',
  'M125.072 51C128.648 51 131.562 50.5143 133.814 49.5429C135.675 48.7575 137.344 47.7816 138.821 46.6152C139.487 46.0892 139.838 45.2702 139.838 44.4214V43.013C139.838 41.1474 137.713 40.0497 136.165 41.0914C134.843 42.0143 133.276 42.8157 131.463 43.4957C129.7 44.2243 127.57 44.5885 125.072 44.5885C121.4 44.5885 118.118 43.7629 115.229 42.1114C112.339 40.46 110.062 38.1771 108.397 35.2628C106.731 32.3971 105.899 29.1428 105.899 25.4999C105.899 21.857 106.731 18.6028 108.397 15.7372C110.062 12.8711 112.339 10.5884 115.229 8.88847C118.118 7.23678 121.4 6.41144 125.072 6.41144C128.844 6.41144 132.051 7.01865 134.696 8.23255C135.422 8.57304 136.112 8.91525 136.767 9.25921C138.709 10.2791 141.307 8.92842 141.307 6.73514C141.307 5.97351 140.986 5.24022 140.379 4.78016C138.805 3.58767 136.862 2.52854 134.549 1.60246C131.806 0.534152 128.648 0 125.072 0C121.35 0 117.922 0.655391 114.788 1.96721C111.653 3.32722 108.911 5.17268 106.56 7.50411C104.209 9.83555 102.373 12.5312 101.05 15.5911C99.7772 18.6997 99.1404 22.0028 99.1404 25.4999C99.1404 28.9971 99.7772 32.2757 101.05 35.3357C102.373 38.4443 104.209 41.1643 106.56 43.4957C108.911 45.8272 111.653 47.6486 114.788 48.96C117.922 50.32 121.35 51 125.072 51Z',
  'M123.642 29.3793L123.659 19.4026C123.66 18.6601 123.059 18.0572 122.317 18.0559C121.574 18.0546 120.971 18.6555 120.97 19.398L120.953 29.3747C120.951 30.1172 121.552 30.7202 122.295 30.7215C123.037 30.7227 123.64 30.1218 123.642 29.3793Z',
  'M121.412 29.8154L131.246 29.8322C131.996 29.8334 132.604 29.2269 132.606 28.4775C132.607 27.728 132 27.1194 131.251 27.1181L121.417 27.1013C120.667 27.1 120.059 27.7066 120.057 28.456C120.056 29.2055 120.663 29.8141 121.412 29.8154Z',
]

export const Logo = ({ className, color, width }) => {
  return (
    <svg
      className={className}
      width={width}
      height={width / 3.6}
      viewBox="0 0 187 51"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => {
        return <path d={path} fill={color} key={index} />
      })}
    </svg>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
}

Logo.defaultProps = {
  className: 'ArrowContainer',
  color: '#fff',
  width: 187,
}
