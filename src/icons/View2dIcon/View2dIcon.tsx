import { IconProps } from "../../types"

export default function View2dIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.76171875 21.1640625"
          className={className}
        >
          <path
            d="              M2.611 21.1638H14.41C15.777 21.1638 16.721 20.2888 16.721 18.9488C16.721 17.5958 15.791 16.7348 14.41 16.7348H7.396V16.6108L12.469 12.2088C14.916 10.0758 16.146 8.4768 16.146 6.2758C16.146 2.5698 13.002 -0.0002 7.943 -0.0002C3.855 -0.0002 1.121 1.5858 0.178 4.4438C0.055 4.8258 0 5.1538 0 5.6058C0 6.9448 0.971 7.8748 2.406 7.8748C3.65 7.8748 4.443 7.3418 4.881 6.2758C4.99 5.9608 5.141 5.7148 5.318 5.4688C5.838 4.7848 6.645 4.3608 7.766 4.3608C9.42 4.3608 10.432 5.3048 10.432 6.6038C10.432 7.6968 9.83 8.6678 8.203 10.0898L1.518 15.9418C0.533 16.8028 0.027 17.7048 0.027 18.7308C0.027 20.2208 1.025 21.1638 2.611 21.1638ZM22.162 21.1368H27.822C33.783 21.1368 37.762 16.9258 37.762 10.5958C37.762 4.4298 33.783 0.3418 27.822 0.3418H22.162C20.357 0.3418 19.209 1.3948 19.209 3.2128V18.2658C19.209 20.0978 20.357 21.1368 22.162 21.1368ZM25.115 16.4878V4.9898H27.002C29.846 4.9898 31.746 7.2458 31.746 10.5958C31.746 14.1368 29.846 16.4878 27.002 16.4878Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.9453125 20.521484375"
          className={className}
        >
          <path
            d="              M1.9 20.5214H13.48C14.506 20.5214 15.203 19.8654 15.203 18.8674C15.203 17.8694 14.506 17.2124 13.48 17.2124H5.428V17.1174L10.623 12.3184C13.48 9.6664 14.574 8.0524 14.574 5.9064C14.574 2.4744 11.607 0.0004 7.219 0.0004C3.732 0.0004 1.121 1.5724 0.232 4.2114C0.082 4.6344 0.027 4.9904 0.027 5.3864C0.027 6.3984 0.711 7.0824 1.764 7.0824C2.707 7.0824 3.24 6.6714 3.568 5.7964C3.678 5.4274 3.814 5.1134 4.02 4.8124C4.648 3.8554 5.729 3.2674 7.137 3.2674C9.064 3.2674 10.459 4.5114 10.459 6.1384C10.459 7.4644 9.844 8.4764 7.67 10.5274L1.135 16.6384C0.355 17.3494 0 17.9784 0 18.7304C0 19.8374 0.752 20.5214 1.9 20.5214ZM19.893 20.5074H25.43C31.158 20.5074 34.945 16.4334 34.945 10.3224C34.945 4.3204 31.158 0.3284 25.43 0.3284H19.893C18.621 0.3284 17.801 1.0934 17.801 2.3924V18.4294C17.801 19.7424 18.621 20.5074 19.893 20.5074ZM21.998 17.0624V3.7594H24.938C28.396 3.7594 30.666 6.3844 30.666 10.3364C30.666 14.3694 28.396 17.0624 24.938 17.0624Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.421875 20.86328125"
          className={className}
        >
          <path
            d="              M2.2563 20.8635H13.9593C15.1623 20.8635 15.9963 20.0845 15.9963 18.9085C15.9963 17.7185 15.1753 16.9535 13.9593 16.9535H6.4533V16.8575L11.5933 12.2505C14.2183 9.8845 15.3943 8.2715 15.3943 6.0975C15.3943 2.5295 12.3323 0.0005 7.5883 0.0005C3.7733 0.0005 1.1073 1.5725 0.1913 4.3345C0.0543 4.7305 0.0003 5.0855 0.0003 5.4965C0.0003 6.6855 0.8343 7.5055 2.0913 7.5055C3.1993 7.5055 3.8693 7.0275 4.2523 6.0435C4.3613 5.7145 4.4983 5.4275 4.6893 5.1545C5.2633 4.3475 6.1933 3.8415 7.4513 3.8415C9.2423 3.8415 10.4313 4.9355 10.4313 6.3845C10.4313 7.5875 9.8163 8.5725 7.9433 10.2945L1.3263 16.2695C0.4373 17.0625 0.0003 17.8285 0.0003 18.7305C0.0003 20.0435 0.8883 20.8635 2.2563 20.8635ZM21.0823 20.8355H26.6743C32.5393 20.8355 36.4223 16.6935 36.4223 10.4725C36.4223 4.3755 32.5393 0.3285 26.6743 0.3285H21.0823C19.5233 0.3285 18.5253 1.2575 18.5253 2.8305V18.3475C18.5253 19.9335 19.5233 20.8355 21.0823 20.8355ZM23.6253 16.7615V4.4025H26.0173C29.1483 4.4025 31.2263 6.8355 31.2263 10.4725C31.2263 14.2465 29.1483 16.7615 26.0173 16.7615Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.58203125 19.93359375"
          className={className}
        >
          <path
            d="              M0.93 19.9333H12.592C13.111 19.9333 13.453 19.6053 13.453 19.0993C13.453 18.5803 13.111 18.2523 12.592 18.2523H2.639V18.1973L8.395 12.4413C11.662 9.1873 12.646 7.5743 12.646 5.4963C12.646 2.3923 9.953 0.0003 6.344 0.0003C3.555 0.0003 1.148 1.4903 0.314 3.8143C0.123 4.3203 0.027 4.7993 0.027 5.1683C0.027 5.7153 0.328 6.0563 0.861 6.0563C1.354 6.0563 1.572 5.8243 1.709 5.2913C1.805 4.8533 1.928 4.4293 2.133 4.0473C2.857 2.6383 4.361 1.6543 6.344 1.6543C8.805 1.6543 10.76 3.4183 10.76 5.5923C10.76 7.2463 10.021 8.4353 7.137 11.3343L0.574 17.9653C0.137 18.4023 0 18.6623 0 19.0453C0 19.6053 0.369 19.9333 0.93 19.9333ZM17.145 19.8793H22.367C28 19.8793 31.582 15.9413 31.582 10.0493C31.582 4.1703 28 0.2733 22.367 0.2733H17.145C16.57 0.2733 16.215 0.6423 16.215 1.2303V18.9223C16.215 19.5093 16.57 19.8793 17.145 19.8793ZM18.088 18.1833V1.9553H22.244C26.797 1.9553 29.668 5.1953 29.668 10.0623C29.668 14.9293 26.797 18.1833 22.244 18.1833Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.140625 20.111328125"
          className={className}
        >
          <path
            d="              M1.436 20.1113H12.879C13.686 20.1113 14.219 19.5913 14.219 18.8123C14.219 18.0333 13.699 17.5133 12.879 17.5133H4.156V17.4313L9.447 12.3733C12.551 9.4063 13.563 7.7793 13.563 5.6603C13.563 2.4203 10.719 0.0003 6.768 0.0003C3.65 0.0003 1.121 1.5723 0.26 4.0603C0.109 4.4983 0.041 4.8813 0.041 5.2503C0.041 6.0433 0.547 6.5763 1.354 6.5763C2.105 6.5763 2.475 6.2483 2.721 5.4823C2.83 5.0863 2.98 4.7163 3.186 4.3883C3.883 3.2673 5.127 2.5563 6.74 2.5563C8.846 2.5563 10.486 4.0063 10.486 5.8243C10.486 7.3143 9.844 8.3533 7.342 10.8143L0.889 17.0763C0.246 17.6913 0 18.1423 0 18.7303C0 19.5913 0.561 20.1113 1.436 20.1113ZM18.443 20.0973H23.898C29.49 20.0973 33.141 16.1053 33.141 10.1443C33.141 4.2383 29.49 0.3143 23.898 0.3143H18.443C17.5 0.3143 16.898 0.9023 16.898 1.8733V18.5393C16.898 19.4963 17.5 20.0973 18.443 20.0973ZM19.988 17.4183V2.9663H23.611C27.48 2.9663 29.982 5.8383 29.982 10.1583C29.982 14.5063 27.48 17.4183 23.611 17.4183Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.142578125 19.892578125"
          className={className}
        >
          <path
            d="              M1.2027 19.8929H12.5647C13.2477 19.8929 13.6857 19.4549 13.6857 18.7849C13.6857 18.1289 13.2477 17.6909 12.5647 17.6909H3.4587V17.6229L8.7907 12.4279C12.0447 9.2699 13.0157 7.6289 13.0157 5.5229C13.0157 2.3929 10.2267 -0.0001 6.5217 -0.0001C3.6227 -0.0001 1.1207 1.5719 0.3007 3.9789C0.1367 4.4429 0.0687 4.8259 0.0687 5.1679C0.0687 5.8519 0.4647 6.3029 1.1347 6.3029C1.7777 6.3029 2.0507 6.0019 2.2557 5.3179C2.3657 4.8949 2.5157 4.5119 2.7347 4.1559C3.4727 2.9399 4.8127 2.1599 6.5217 2.1599C8.7367 2.1599 10.4997 3.7189 10.4997 5.6599C10.4997 7.2319 9.8707 8.2989 7.1637 10.9649L0.7657 17.3219C0.1917 17.8969 -0.0003 18.2379 -0.0003 18.7439C-0.0003 19.4549 0.4787 19.8929 1.2027 19.8929ZM17.6367 19.8649H23.0507C28.5467 19.8649 32.1427 15.9409 32.1427 10.0489C32.1427 4.1969 28.5467 0.3149 23.0507 0.3149H17.6367C16.8847 0.3149 16.4067 0.8069 16.4067 1.5719V18.5939C16.4067 19.3729 16.8847 19.8649 17.6367 19.8649ZM18.8807 17.6229V2.5289H22.8867C26.9747 2.5289 29.6137 5.5369 29.6137 10.0629C29.6137 14.6019 26.9747 17.6229 22.8867 17.6229Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.919921875 20.302734375"
          className={className}
        >
          <path
            d="              M1.641 20.303H13.139C14.041 20.303 14.643 19.715 14.643 18.853C14.643 17.965 14.041 17.391 13.139 17.391H4.703V17.309L9.953 12.359C12.947 9.529 14 7.902 14 5.77C14 2.447 11.102 0 6.959 0C3.678 0 1.121 1.586 0.246 4.129C0.096 4.566 0.041 4.936 0.041 5.318C0.041 6.207 0.615 6.809 1.531 6.809C2.365 6.809 2.803 6.439 3.09 5.619C3.199 5.25 3.336 4.895 3.555 4.58C4.211 3.527 5.387 2.871 6.904 2.871C8.941 2.871 10.473 4.238 10.473 5.975C10.473 7.383 9.844 8.422 7.479 10.691L0.998 16.885C0.287 17.555 0 18.074 0 18.744C0 19.701 0.643 20.303 1.641 20.303ZM19.072 20.275H24.555C30.215 20.275 33.92 16.256 33.92 10.227C33.92 4.279 30.215 0.328 24.555 0.328H19.072C17.979 0.328 17.281 0.998 17.281 2.105V18.498C17.281 19.605 17.979 20.275 19.072 20.275ZM20.85 17.268V3.309H24.186C27.877 3.309 30.283 6.084 30.283 10.24C30.283 14.451 27.877 17.268 24.186 17.268Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.857421875 19.98828125"
          className={className}
        >
          <path
            d="              M0.588 19.9886H12.646C12.961 19.9886 13.166 19.7966 13.166 19.4956C13.166 19.1956 12.961 19.0176 12.646 19.0176H1.572V18.9626L7.861 12.4826C11.17 9.0916 12.195 7.5336 12.195 5.4826C12.195 2.3926 9.611 -0.0004 6.139 -0.0004C3.5 -0.0004 1.203 1.3946 0.355 3.6096C0.123 4.1696 0 4.7576 0 5.1676C0 5.5376 0.178 5.7426 0.506 5.7426C0.793 5.7426 0.943 5.5786 1.012 5.2636C1.066 4.8126 1.162 4.3336 1.354 3.9106C2.078 2.2556 3.773 0.9846 6.139 0.9846C8.928 0.9846 11.102 3.0216 11.102 5.5096C11.102 7.2736 10.24 8.6266 7.137 11.8126L0.342 18.8126C0.082 19.0726 0 19.2366 0 19.4546C0 19.7966 0.246 19.9886 0.588 19.9886ZM16.502 19.9066H21.479C27.275 19.9066 30.857 15.9686 30.857 10.0486C30.857 4.1566 27.275 0.2186 21.479 0.2186H16.502C16.174 0.2186 15.969 0.4376 15.969 0.7796V19.3456C15.969 19.6876 16.174 19.9066 16.502 19.9066ZM17.063 18.9216V1.1896H21.424C26.592 1.1896 29.75 4.7306 29.75 10.0486C29.75 15.3806 26.592 18.9216 21.424 18.9216Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.501953125 20.015625"
          className={className}
        >
          <path
            d="              M0.4237 20.0159H12.7017C12.8927 20.0159 13.0297 19.8929 13.0297 19.7009C13.0297 19.4959 12.8927 19.3999 12.7017 19.3999H1.0387V19.3459L7.6157 12.4959C10.9237 9.0369 11.9767 7.4919 11.9767 5.4549C11.9767 2.3929 9.4477 -0.0001 6.0297 -0.0001C3.4727 -0.0001 1.2437 1.3399 0.3967 3.4999C0.1507 4.0879 -0.0003 4.7439 -0.0003 5.1679C-0.0003 5.4279 0.1097 5.5649 0.3417 5.5649C0.5197 5.5649 0.6427 5.4409 0.6567 5.2499C0.7107 4.7719 0.7797 4.2789 0.9707 3.8279C1.6817 2.0509 3.4867 0.6289 6.0297 0.6289C8.9957 0.6289 11.2927 2.8029 11.2927 5.4549C11.2927 7.2739 10.3637 8.7089 7.1367 12.0589L0.2457 19.2499C0.0687 19.4139 0.0277 19.5099 0.0277 19.6599C0.0277 19.8929 0.1917 20.0159 0.4237 20.0159ZM16.1877 19.9059H21.0277C26.9197 19.9059 30.5017 15.9689 30.5017 10.0489C30.5017 4.1289 26.9197 0.1909 21.0277 0.1909H16.1877C15.9957 0.1909 15.8597 0.3149 15.8597 0.5329V19.5649C15.8597 19.7699 15.9957 19.9059 16.1877 19.9059ZM16.5427 19.2909V0.8069H21.0137C26.5097 0.8069 29.8187 4.4979 29.8187 10.0489C29.8187 15.5999 26.5097 19.2909 21.0137 19.2909Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
