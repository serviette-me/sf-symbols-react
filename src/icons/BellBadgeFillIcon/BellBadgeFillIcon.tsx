import { IconProps } from "../../types"

export default function BellBadgeFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.861328125 30.625"
          className={className}
        >
          <path
            d="              M3.1443 24.3219H25.7033C27.5903 24.3219 28.8613 23.1059 28.8613 21.3149C28.8613 19.5509 27.8083 18.2659 26.4143 17.2269C25.6753 16.6929 25.2933 15.6679 25.0743 14.3829C24.9243 13.5079 24.8003 12.6329 24.6503 11.7719C23.7613 12.2229 22.7503 12.4689 21.6973 12.4689C17.9653 12.4689 14.8753 9.3789 14.8753 5.6469C14.8753 3.7189 15.7093 1.9689 17.0073 0.7249C16.2693 0.2319 15.3943 -0.0001 14.4243 -0.0001C12.4003 -0.0001 10.5953 1.2579 9.8433 3.1309C6.6993 4.2659 4.8673 7.5199 4.2653 11.5659C3.8143 14.3149 3.6363 16.3519 2.4473 17.2269C1.0523 18.2659 0.0003 19.5509 0.0003 21.3149C0.0003 23.1059 1.2573 24.3219 3.1443 24.3219ZM21.7113 10.2809C24.2403 10.2809 26.3453 8.1759 26.3453 5.6469C26.3453 3.1169 24.2403 1.0119 21.7113 1.0119C19.1813 1.0119 17.0763 3.1169 17.0763 5.6469C17.0763 8.1759 19.1813 10.2809 21.7113 10.2809ZM14.4653 30.6249C17.2953 30.6249 19.3863 28.7379 19.5373 26.4139H9.3793C9.5293 28.7379 11.6213 30.6249 14.4653 30.6249Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.31640625 29.6953125"
          className={className}
        >
          <path
            d="              M2.5976 23.8031H24.7186C26.3046 23.8031 27.3166 22.8591 27.3166 21.4781C27.3166 19.9061 26.0996 18.6481 24.8146 17.5271C23.9946 16.7891 23.6796 15.2991 23.5156 13.8631C23.4336 12.9881 23.3516 12.1271 23.2286 11.2931C22.4356 11.6481 21.5606 11.8531 20.6586 11.8531C16.9666 11.8531 13.9316 8.8181 13.9316 5.1411C13.9316 3.3631 14.6566 1.7501 15.7906 0.5471C15.1756 0.1781 14.4516 0.0001 13.6586 0.0001C11.6346 0.0001 10.0216 1.3261 9.3926 3.1581C6.0016 4.3751 4.3886 7.8071 4.0336 12.4691C3.7596 14.6291 3.5546 16.6111 2.5016 17.5271C1.2036 18.6481 -0.0004 19.9061 -0.0004 21.4781C-0.0004 22.8591 1.0116 23.8031 2.5976 23.8031ZM20.6586 9.8301C23.2146 9.8301 25.3476 7.7111 25.3476 5.1411C25.3476 2.5701 23.2146 0.4511 20.6586 0.4511C18.1016 0.4511 15.9826 2.5701 15.9826 5.1411C15.9826 7.7111 18.1016 9.8301 20.6586 9.8301ZM13.6716 29.6951C16.2556 29.6951 18.1426 27.9041 18.3066 25.7851H9.0376C9.2016 27.9041 11.0876 29.6951 13.6716 29.6951Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.13671875 30.1875"
          className={className}
        >
          <path
            d="              M2.8986 24.0762H25.2516C27.0016 24.0762 28.1366 22.9962 28.1366 21.3832C28.1366 19.7152 27.0156 18.4432 25.6616 17.3772C24.8966 16.7342 24.5406 15.4902 24.3496 14.1372C24.2406 13.2622 24.1176 12.3872 23.9806 11.5532C23.1466 11.9492 22.2026 12.1812 21.2186 12.1812C17.5136 12.1812 14.4376 9.1192 14.4376 5.4142C14.4376 3.5552 15.2166 1.8592 16.4476 0.6422C15.7636 0.2052 14.9566 0.0002 14.0686 0.0002C12.0446 0.0002 10.3356 1.2992 9.6386 3.1442C6.3706 4.3202 4.6486 7.6562 4.1696 11.9902C3.8006 14.4652 3.6096 16.4742 2.4886 17.3772C1.1346 18.4432 -0.0004 19.7152 -0.0004 21.3832C-0.0004 22.9962 1.1486 24.0762 2.8986 24.0762ZM21.2186 10.0622C23.7616 10.0622 25.8806 7.9572 25.8806 5.4142C25.8806 2.8572 23.7616 0.7522 21.2186 0.7522C18.6756 0.7522 16.5706 2.8572 16.5706 5.4142C16.5706 7.9572 18.6756 10.0622 21.2186 10.0622ZM14.0956 30.1872C16.8166 30.1872 18.7986 28.3422 18.9626 26.1132H9.2286C9.3926 28.3422 11.3746 30.1872 14.0956 30.1872Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.416015625 28.19140625"
          className={className}
        >
          <path
            d="              M18.8675 9.0371C21.3285 9.0371 23.3785 6.9861 23.3785 4.5121C23.3785 2.0371 21.3285 0.0001 18.8675 0.0001C16.3925 0.0001 14.3415 2.0371 14.3415 4.5121C14.3415 6.9861 16.3925 9.0371 18.8675 9.0371ZM1.5855 23.1741H23.8165C24.8005 23.1741 25.4165 22.6401 25.4165 21.8481C25.4165 20.4671 24.0765 19.2771 22.9275 18.0601C21.8205 16.8571 21.7105 14.3961 21.4785 12.2501C21.4515 11.4711 21.3825 10.7461 21.2735 10.0351C20.5485 10.4041 19.7145 10.6231 18.8535 10.6231C15.5035 10.6231 12.7555 7.8611 12.7555 4.5121C12.7555 2.9531 13.3575 1.5171 14.3415 0.4511C13.8635 0.2051 13.3025 0.0551 12.7015 0.0551C10.8005 0.0551 9.4335 1.4081 9.0095 3.2401C5.5235 4.3611 4.1565 7.6561 3.9235 12.2501C3.6915 14.3961 3.5825 16.8571 2.4745 18.0601C1.3265 19.2771 0.0005 20.4671 0.0005 21.8481C0.0005 22.6401 0.6015 23.1741 1.5855 23.1741ZM12.7015 28.1911C14.9165 28.1911 16.4885 26.6051 16.7345 24.7731H8.6675C8.9145 26.6051 10.4865 28.1911 12.7015 28.1911Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.345703125 29.107421875"
          className={className}
        >
          <path
            d="              M2.2556 23.488H24.0896C25.4846 23.488 26.3456 22.723 26.3456 21.588C26.3456 20.152 25.0196 18.908 23.7886 17.719C22.9136 16.857 22.6546 15.08 22.5316 13.549C22.4906 12.66 22.4216 11.813 22.3126 10.992C21.6016 11.293 20.8086 11.471 19.9886 11.471C16.3376 11.471 13.3436 8.477 13.3436 4.826C13.3436 3.145 13.9866 1.613 15.0256 0.451C14.4786 0.15 13.8496 0 13.1656 0C11.1426 0 9.6656 1.381 9.1056 3.186C5.5506 4.471 4.0876 8.012 3.8966 13.043C3.7326 14.834 3.4996 16.789 2.5426 17.719C1.3126 18.908 -0.0004 20.152 -0.0004 21.588C-0.0004 22.723 0.8476 23.488 2.2556 23.488ZM20.0016 9.543C22.5726 9.543 24.7186 7.41 24.7186 4.826C24.7186 2.229 22.5726 0.109 20.0016 0.109C17.4046 0.109 15.2856 2.229 15.2856 4.826C15.2856 7.41 17.4046 9.543 20.0016 9.543ZM13.1796 29.107C15.5856 29.107 17.3496 27.385 17.5276 25.389H8.8186C8.9966 27.385 10.7596 29.107 13.1796 29.107Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.798828125 28.875"
          className={className}
        >
          <path
            d="              M19.6326 9.4746C22.2166 9.4746 24.3766 7.3416 24.3766 4.7446C24.3766 2.1326 22.2166 -0.0004 19.6326 -0.0004C17.0216 -0.0004 14.8886 2.1326 14.8886 4.7446C14.8886 7.3416 17.0216 9.4746 19.6326 9.4746ZM2.0646 23.3926H23.7346C25.0196 23.3926 25.7986 22.7366 25.7986 21.7386C25.7986 20.3706 24.4046 19.1406 23.2286 17.9236C22.3266 16.9806 22.0806 15.0386 21.9706 13.4666C21.9566 12.5786 21.9026 11.7306 21.8206 10.9236C21.1366 11.1976 20.3986 11.3476 19.6196 11.3476C15.9966 11.3476 13.0156 8.3676 13.0156 4.7446C13.0156 3.1176 13.6176 1.6266 14.5876 0.4786C14.0956 0.2326 13.5216 0.0956 12.8926 0.0956C10.8826 0.0956 9.4606 1.5036 8.9556 3.2946C5.3186 4.6076 3.9236 8.2166 3.8286 13.4666C3.7186 15.0386 3.4726 16.9806 2.5706 17.9236C1.3806 19.1406 -0.0004 20.3706 -0.0004 21.7386C-0.0004 22.7366 0.7656 23.3926 2.0646 23.3926ZM12.8926 28.8746C15.2166 28.8746 16.9126 27.1796 17.0896 25.2656H8.7086C8.8866 27.1796 10.5816 28.8746 12.8926 28.8746Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.76953125 29.353515625"
          className={className}
        >
          <path
            d="              M2.4066 23.625H24.3636C25.8396 23.625 26.7696 22.777 26.7696 21.533C26.7696 20.043 25.4846 18.799 24.2406 17.637C23.3926 16.816 23.1056 15.176 22.9546 13.686C22.9006 12.797 22.8316 11.949 22.7086 11.129C21.9706 11.457 21.1366 11.635 20.2756 11.635C16.6246 11.635 13.6036 8.613 13.6036 4.963C13.6036 3.24 14.2736 1.668 15.3536 0.492C14.7926 0.164 14.1226 0 13.3846 0C11.3616 0 9.8296 1.367 9.2286 3.172C5.7556 4.43 4.2246 7.93 3.9646 12.797C3.7466 14.738 3.5276 16.721 2.5296 17.637C1.2716 18.799 -0.0004 20.043 -0.0004 21.533C-0.0004 22.777 0.9296 23.625 2.4066 23.625ZM20.2886 9.666C22.8596 9.666 24.9926 7.533 24.9926 4.963C24.9926 2.379 22.8596 0.26 20.2886 0.26C17.7046 0.26 15.5856 2.379 15.5856 4.963C15.5856 7.533 17.7046 9.666 20.2886 9.666ZM13.3986 29.354C15.8726 29.354 17.6916 27.604 17.8696 25.566H8.9136C9.0916 27.604 10.9106 29.354 13.3986 29.354Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.91015625 27.2890625"
          className={className}
        >
          <path
            d="              M17.8557 8.4493C20.1657 8.4493 22.0797 6.5353 22.0797 4.2243C22.0797 1.9143 20.1657 0.0003 17.8557 0.0003C15.5447 0.0003 13.6447 1.9143 13.6447 4.2243C13.6447 6.5353 15.5447 8.4493 17.8557 8.4493ZM0.9707 22.8863H23.9397C24.5277 22.8863 24.9097 22.5313 24.9097 21.9843C24.9097 20.6033 23.6527 19.4413 22.5587 18.2383C21.1777 16.6933 21.2327 13.5623 20.8357 10.6363C20.7817 10.0213 20.6857 9.4473 20.5757 8.8733C19.7827 9.3653 18.8397 9.6663 17.8557 9.6663C14.8747 9.6663 12.4137 7.2053 12.4137 4.2243C12.4137 2.7343 13.0157 1.3943 14.0137 0.4103C13.5487 0.1643 13.0297 0.0133 12.4547 0.0133C10.7047 0.0133 9.3927 1.2853 9.0917 3.1723C5.8247 4.0603 4.4567 6.9313 4.0607 10.6363C3.6777 13.5623 3.7327 16.6933 2.3377 18.2383C1.2577 19.4413 -0.0003 20.6033 -0.0003 21.9843C-0.0003 22.5313 0.3827 22.8863 0.9707 22.8863ZM12.4547 27.2893C14.5327 27.2893 15.9547 25.8533 16.2697 24.1173H8.6407C8.9547 25.8533 10.3767 27.2893 12.4547 27.2893Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.650390625 26.837890625"
          className={className}
        >
          <path
            d="              M0.656 22.7499H23.994C24.377 22.7499 24.65 22.4769 24.65 22.0669C24.65 20.6719 23.434 19.5369 22.367 18.3339C20.836 16.6109 20.986 13.1249 20.508 9.8169C20.439 9.2829 20.33 8.7769 20.207 8.2849C19.387 8.8459 18.389 9.1739 17.336 9.1739C14.547 9.1739 12.236 6.8769 12.236 4.0739C12.236 2.6389 12.838 1.3259 13.836 0.3829C13.385 0.1509 12.879 -0.0001 12.318 -0.0001C10.65 -0.0001 9.365 1.2169 9.133 3.1449C5.975 3.8969 4.621 6.5489 4.143 9.8169C3.664 13.1249 3.801 16.6109 2.283 18.3339C1.217 19.5369 0 20.6719 0 22.0669C0 22.4769 0.26 22.7499 0.656 22.7499ZM17.35 8.1489C19.578 8.1489 21.41 6.3029 21.41 4.0739C21.41 1.8459 19.578 -0.0001 17.35 -0.0001C15.121 -0.0001 13.275 1.8459 13.275 4.0739C13.275 6.3029 15.121 8.1489 17.35 8.1489ZM12.318 26.8379C14.328 26.8379 15.682 25.4709 16.037 23.7759H8.613C8.969 25.4709 10.322 26.8379 12.318 26.8379Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}