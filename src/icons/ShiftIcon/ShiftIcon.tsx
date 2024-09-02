import { IconProps } from "../../types"

export default function ShiftIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.80078125 27.630859375"
          className={className}
        >
          <path
            d="              M11.1839 27.6311H20.6169C23.0509 27.6311 24.4859 26.1951 24.4859 23.7751V18.4981H29.0939C30.7339 18.4981 31.8009 17.5681 31.8009 16.1191C31.8009 15.2031 31.4589 14.6561 30.5159 13.6851L18.1149 1.0121C17.4449 0.3551 16.6929 0.0001 15.8999 0.0001C15.1069 0.0001 14.3559 0.3551 13.6859 1.0121L1.2719 13.6851C0.3279 14.6701 -0.0001 15.1891 -0.0001 16.1191C-0.0001 17.5681 1.0659 18.4981 2.6929 18.4981H7.3149V23.7751C7.3149 26.1951 8.7499 27.6311 11.1839 27.6311ZM13.0429 22.5581C12.7009 22.5581 12.4689 22.3261 12.4689 21.9711V14.7521C12.4689 14.4511 12.3589 14.3281 12.0449 14.3281H7.5609C7.5059 14.3281 7.4919 14.3141 7.4919 14.2731C7.4919 14.2601 7.4919 14.2321 7.5199 14.2051L15.7909 5.8511C15.8049 5.8241 15.8589 5.8101 15.8999 5.8101C15.9279 5.8101 15.9819 5.8241 16.0099 5.8511L24.2679 14.2051C24.3089 14.2321 24.3089 14.2601 24.3089 14.2731C24.3089 14.3141 24.2949 14.3281 24.2399 14.3281H19.7559C19.4409 14.3281 19.3319 14.4511 19.3319 14.7521V21.9711C19.3319 22.3121 19.0719 22.5581 18.7579 22.5581Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.59765625 26.509765625"
          className={className}
        >
          <path
            d="              M10.8279 26.5099H19.7699C21.9429 26.5099 23.1739 25.2249 23.1739 23.1059V17.4179H28.2599C29.6269 17.4179 30.5979 16.6109 30.5979 15.3539C30.5979 14.5739 30.2699 14.0679 29.5449 13.3439L17.2539 0.9159C16.6519 0.3279 15.9959 -0.0001 15.2989 -0.0001C14.6019 -0.0001 13.9449 0.3279 13.3439 0.9159L1.0529 13.3439C0.3149 14.0959 -0.0001 14.5739 -0.0001 15.3539C-0.0001 16.6109 0.9709 17.4179 2.3379 17.4179H7.4379V23.1059C7.4379 25.2249 8.6539 26.5099 10.8279 26.5099ZM11.8669 22.9139C11.4429 22.9139 11.1559 22.6129 11.1559 22.1899V14.7379C11.1559 14.4239 11.0329 14.3009 10.7049 14.3009H5.3179C5.2359 14.3009 5.1949 14.2599 5.1949 14.2189C5.1949 14.1779 5.2089 14.1509 5.2639 14.0959L15.1069 4.2519C15.1619 4.1839 15.2309 4.1559 15.2989 4.1559C15.3669 4.1559 15.4359 4.1839 15.5039 4.2519L25.3339 14.0959C25.3889 14.1509 25.4019 14.1779 25.4019 14.2189C25.4019 14.2599 25.3609 14.3009 25.2929 14.3009H19.8929C19.5649 14.3009 19.4549 14.4239 19.4549 14.7379V22.1899C19.4549 22.5999 19.1409 22.9139 18.7309 22.9139Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.2265625 27.111328125"
          className={className}
        >
          <path
            d="              M11.0199 27.111H20.2209C22.5309 27.111 23.8569 25.73 23.8569 23.461V17.992H28.6969C30.2149 17.992 31.2269 17.117 31.2269 15.764C31.2269 14.916 30.8989 14.383 30.0649 13.521L17.7049 0.971C17.0759 0.342 16.3649 0 15.6129 0C14.8609 0 14.1639 0.342 13.5219 0.971L1.1759 13.521C0.3279 14.396 -0.0001 14.902 -0.0001 15.764C-0.0001 17.117 1.0119 17.992 2.5289 17.992H7.3689V23.461C7.3689 25.73 8.7089 27.111 11.0199 27.111ZM12.4959 22.736C12.1129 22.736 11.8399 22.463 11.8399 22.08V14.752C11.8399 14.438 11.7309 14.314 11.4159 14.314H6.4939C6.4399 14.314 6.4119 14.287 6.4119 14.246C6.4119 14.219 6.4119 14.191 6.4529 14.15L15.4629 5.1C15.5039 5.059 15.5719 5.031 15.6129 5.031C15.6679 5.031 15.7229 5.059 15.7639 5.1L24.7739 14.15C24.8149 14.191 24.8279 14.219 24.8279 14.246C24.8279 14.287 24.8009 14.314 24.7319 14.314H19.8239C19.4959 14.314 19.3869 14.438 19.3869 14.752V22.08C19.3869 22.449 19.1129 22.736 18.7439 22.736Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.2578125 25.033203125"
          className={className}
        >
          <path
            d="              M10.1579 25.0329H19.0999C20.7539 25.0329 21.6969 24.0349 21.6969 22.4489V15.9689H27.6169C28.5469 15.9689 29.2579 15.4079 29.2579 14.5329C29.2579 13.9859 28.9979 13.5899 28.5609 13.1519L16.2149 0.8199C15.6269 0.2329 15.1619 -0.0001 14.6289 -0.0001C14.0959 -0.0001 13.6169 0.2329 13.0429 0.8199L0.6969 13.1519C0.2459 13.6039 -0.0001 13.9859 -0.0001 14.5329C-0.0001 15.4079 0.7109 15.9689 1.6409 15.9689H7.5609V22.4489C7.5609 24.0349 8.5039 25.0329 10.1579 25.0329ZM10.2949 23.3929C9.7209 23.3929 9.3109 22.9959 9.3109 22.4219V14.7929C9.3109 14.4789 9.2009 14.3689 8.8869 14.3689H2.4199C2.2699 14.3689 2.1879 14.3149 2.1879 14.2049C2.1879 14.1229 2.2149 14.0679 2.3109 13.9729L14.1639 2.1599C14.3559 1.9549 14.4789 1.8999 14.6289 1.8999C14.7789 1.8999 14.9019 1.9549 15.0939 2.1599L26.9469 13.9729C27.0429 14.0679 27.0699 14.1229 27.0699 14.2049C27.0699 14.3149 26.9879 14.3689 26.8379 14.3689H20.3709C20.0569 14.3689 19.9469 14.4789 19.9469 14.7929V22.4219C19.9469 22.9959 19.5369 23.3929 18.9629 23.3929Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.83203125 25.78515625"
          className={className}
        >
          <path
            d="              M10.6089 25.7854H19.2229C21.2319 25.7854 22.3259 24.5954 22.3259 22.6814V16.7074H27.7129C28.9299 16.7074 29.8319 15.9964 29.8319 14.8754C29.8319 14.1774 29.5179 13.6854 28.9299 13.1114L16.7069 0.8614C16.1469 0.3004 15.5589 0.0004 14.9159 0.0004C14.2739 0.0004 13.6859 0.3004 13.1249 0.8614L0.9019 13.1114C0.3009 13.7134 -0.0001 14.1774 -0.0001 14.8754C-0.0001 15.9964 0.9019 16.7074 2.1189 16.7074H7.5059V22.6814C7.5059 24.5954 8.5999 25.7854 10.6089 25.7854ZM11.1149 23.1324C10.6369 23.1324 10.3089 22.8044 10.3089 22.3124V14.7244C10.3089 14.3964 10.1859 14.2734 9.8569 14.2734H3.8829C3.7869 14.2734 3.7459 14.2324 3.7459 14.1644C3.7459 14.1234 3.7599 14.0824 3.8149 14.0274L14.6559 3.2134C14.7519 3.1304 14.8339 3.0894 14.9159 3.0894C14.9979 3.0894 15.0799 3.1304 15.1759 3.2134L26.0179 14.0274C26.0719 14.0824 26.0999 14.1234 26.0999 14.1644C26.0999 14.2324 26.0449 14.2734 25.9629 14.2734H19.9749C19.6469 14.2734 19.5239 14.3964 19.5239 14.7244V22.3124C19.5239 22.7774 19.1819 23.1324 18.7169 23.1324Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 25.375"
          className={className}
        >
          <path
            d="              M10.4859 25.3746H18.9219C20.8359 25.3746 21.8609 24.2536 21.8609 22.4496V16.3246H27.4119C28.5329 16.3246 29.4079 15.6406 29.4079 14.6016C29.4079 13.9586 29.0799 13.4806 28.5879 12.9886L16.3929 0.8336C15.8589 0.3006 15.3129 -0.0004 14.6969 -0.0004C14.0959 -0.0004 13.5349 0.3006 13.0159 0.8336L0.8199 12.9886C0.2869 13.5076 -0.0001 13.9586 -0.0001 14.6016C-0.0001 15.6406 0.8749 16.3246 1.9819 16.3246H7.5469V22.4496C7.5469 24.2536 8.5719 25.3746 10.4859 25.3746ZM10.7049 23.2556C10.1859 23.2556 9.8299 22.9006 9.8299 22.3946V14.7246C9.8299 14.3826 9.7069 14.2596 9.3789 14.2596H3.0629C2.9669 14.2596 2.9119 14.2186 2.9119 14.1506C2.9119 14.0956 2.9399 14.0546 2.9939 13.9866L14.4099 2.6386C14.5199 2.5296 14.6149 2.5016 14.6969 2.5016C14.7929 2.5016 14.8889 2.5296 14.9839 2.6386L26.3999 13.9866C26.4689 14.0546 26.4819 14.0956 26.4819 14.1506C26.4819 14.2186 26.4409 14.2596 26.3319 14.2596H20.0289C19.7009 14.2596 19.5779 14.3826 19.5779 14.7246V22.3946C19.5779 22.8866 19.2089 23.2556 18.7029 23.2556Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.16015625 26.099609375"
          className={className}
        >
          <path
            d="              M10.7049 26.1001H19.4689C21.5469 26.1001 22.6949 24.8691 22.6949 22.8731V17.0211H27.9449C29.2309 17.0211 30.1599 16.2691 30.1599 15.0941C30.1599 14.3551 29.8459 13.8631 29.2029 13.2071L16.9399 0.8891C16.3649 0.3141 15.7499 0.0001 15.0799 0.0001C14.4099 0.0001 13.7949 0.3141 13.2209 0.8891L0.9709 13.2071C0.3009 13.8911 -0.0001 14.3551 -0.0001 15.0941C-0.0001 16.2691 0.9299 17.0211 2.2149 17.0211H7.4789V22.8731C7.4789 24.8691 8.6269 26.1001 10.7049 26.1001ZM11.4429 23.0371C10.9919 23.0371 10.6639 22.7231 10.6639 22.2711V14.7381C10.6639 14.4101 10.5549 14.2871 10.2269 14.2871H4.4979C4.4159 14.2871 4.3749 14.2461 4.3749 14.1911C4.3749 14.1501 4.3889 14.1091 4.4429 14.0551L14.8479 3.6641C14.9299 3.5821 15.0119 3.5551 15.0799 3.5551C15.1619 3.5551 15.2309 3.5821 15.3129 3.6641L25.7309 14.0551C25.7849 14.1091 25.7989 14.1501 25.7989 14.1911C25.7989 14.2461 25.7579 14.2871 25.6759 14.2871H19.9469C19.6189 14.2871 19.4959 14.4101 19.4959 14.7381V22.2711C19.4959 22.7091 19.1679 23.0371 18.7169 23.0371Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.06640625 24.58203125"
          className={className}
        >
          <path
            d="              M9.7209 24.5822H19.3459C20.6449 24.5822 21.4789 23.7482 21.4789 22.4632V15.5042H27.8629C28.5739 15.5042 29.0659 15.0802 29.0659 14.4372C29.0659 14.0412 28.8749 13.7132 28.5329 13.3852L15.9689 0.8062C15.3259 0.1372 14.9429 0.0002 14.5329 0.0002C14.1089 0.0002 13.7399 0.1372 13.0839 0.8062L0.5329 13.3852C0.1909 13.7262 -0.0001 14.0412 -0.0001 14.4372C-0.0001 15.0802 0.4919 15.5042 1.1899 15.5042H7.5879V22.4632C7.5879 23.7482 8.4219 24.5822 9.7209 24.5822ZM9.7619 23.5842C9.0919 23.5842 8.6129 23.1332 8.6129 22.4632V14.8882C8.6129 14.6152 8.5179 14.5192 8.2439 14.5192H1.5719C1.3399 14.5192 1.2309 14.4372 1.2309 14.2872C1.2309 14.1782 1.2719 14.0962 1.4079 13.9592L13.8219 1.5312C14.1369 1.2032 14.3149 1.1212 14.5329 1.1212C14.7379 1.1212 14.9299 1.2032 15.2439 1.5312L27.6579 13.9592C27.7949 14.0962 27.8219 14.1782 27.8219 14.2872C27.8219 14.4372 27.7129 14.5192 27.4939 14.5192H20.8219C20.5349 14.5192 20.4399 14.6152 20.4399 14.8882V22.4632C20.4399 23.1192 19.9749 23.5842 19.3049 23.5842Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.95703125 24.36328125"
          className={className}
        >
          <path
            d="              M9.4879 24.3631H19.4689C20.5899 24.3631 21.3689 23.6111 21.3689 22.4761V15.2711H27.9999C28.5879 15.2711 28.9569 14.9301 28.9569 14.3961C28.9569 14.0681 28.8069 13.7951 28.5199 13.5081L15.8589 0.8061C15.1759 0.1091 14.8479 0.0001 14.4789 0.0001C14.1229 0.0001 13.7949 0.1091 13.1109 0.8061L0.4509 13.5081C0.1499 13.7951 -0.0001 14.0681 -0.0001 14.3961C-0.0001 14.9301 0.3689 15.2711 0.9569 15.2711H7.5879V22.4761C7.5879 23.6111 8.3669 24.3631 9.4879 24.3631ZM9.4879 23.6931C8.7639 23.6931 8.2579 23.2011 8.2579 22.4901V14.9431C8.2579 14.6831 8.1759 14.6011 7.9159 14.6011H1.1349C0.8749 14.6011 0.7519 14.5191 0.7519 14.3421C0.7519 14.2191 0.7789 14.1231 0.9429 13.9731L13.6449 1.2171C14.0269 0.8341 14.2319 0.7241 14.4789 0.7241C14.7249 0.7241 14.9429 0.8341 15.3129 1.2171L28.0269 13.9731C28.1779 14.1231 28.2189 14.2191 28.2189 14.3421C28.2189 14.5191 28.0959 14.6011 27.8219 14.6011H21.0409C20.7809 14.6011 20.6989 14.6831 20.6989 14.9431V22.4901C20.6989 23.2011 20.1929 23.6931 19.4689 23.6931Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}