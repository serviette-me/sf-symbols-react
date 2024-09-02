import { IconProps } from "../../types"

export default function BubbleLeftIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.8671875 31.103515625"
          className={className}
        >
          <path
            d="              M10.5957 31.1038C11.7717 31.1038 12.7967 30.6528 14.2597 29.3948L18.7717 25.4978H25.7307C30.0237 25.4978 32.8677 22.6408 32.8677 18.3478V7.1508C32.8677 2.8578 30.0237 -0.0002 25.7307 -0.0002H7.1367C2.8437 -0.0002 -0.0003 2.8578 -0.0003 7.1508V18.3478C-0.0003 22.6408 3.1587 25.4978 6.6587 25.4978H7.7517V28.0278C7.7517 29.9418 8.8457 31.1038 10.5957 31.1038ZM11.7307 25.7718V22.1488C11.7307 21.0548 11.1287 20.6448 10.2267 20.6448H7.5607C5.7837 20.6448 4.8537 19.7558 4.8537 17.9378V7.5608C4.8537 5.7418 5.7837 4.8538 7.5607 4.8538H25.3067C27.0837 4.8538 28.0137 5.7418 28.0137 7.5608V17.9378C28.0137 19.7558 27.0837 20.6448 25.3067 20.6448H18.3477C17.2127 20.6448 16.7617 20.8908 15.9137 21.7108Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5 29.681640625"
          className={className}
        >
          <path
            d="              M9.5017 29.6815C10.4317 29.6815 11.1697 29.2855 12.3187 28.2875L16.9397 24.2405H24.8007C28.9847 24.2405 31.4997 21.6835 31.4997 17.5415V6.6995C31.4997 2.5435 28.9847 0.0005 24.8007 0.0005H6.6997C2.5157 0.0005 -0.0003 2.5435 -0.0003 6.6995V17.5415C-0.0003 21.6835 2.6797 24.2405 6.4667 24.2405H7.3417V27.2755C7.3417 28.7655 8.1487 29.6815 9.5017 29.6815ZM10.3497 25.7715V21.9845C10.3497 21.0545 9.9117 20.7125 9.0777 20.7125H6.9177C4.6347 20.7125 3.5277 19.5645 3.5277 17.3225V6.9045C3.5277 4.6625 4.6347 3.5275 6.9177 3.5275H24.5817C26.8517 3.5275 27.9727 4.6625 27.9727 6.9045V17.3225C27.9727 19.5645 26.8517 20.7125 24.5817 20.7125H16.6797C15.7367 20.7125 15.3127 20.8905 14.6287 21.5745Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.224609375 30.43359375"
          className={className}
        >
          <path
            d="              M10.0767 30.434C11.1427 30.434 12.0317 30.01 13.3437 28.875L17.9097 24.91H25.2927C29.5317 24.91 32.2247 22.189 32.2247 17.965V6.945C32.2247 2.721 29.5317 0 25.2927 0H6.9317C2.6937 0 -0.0003 2.707 -0.0003 6.945V17.965C-0.0003 22.203 2.9397 24.91 6.5627 24.91H7.5607V27.672C7.5607 29.395 8.5177 30.434 10.0767 30.434ZM11.0877 25.772V22.066C11.0877 21.055 10.5547 20.672 9.6797 20.672H7.2597C5.2497 20.672 4.2247 19.674 4.2247 17.65V7.26C4.2247 5.236 5.2497 4.238 7.2597 4.238H24.9647C26.9747 4.238 27.9997 5.236 27.9997 7.26V17.65C27.9997 19.674 26.9747 20.672 24.9647 20.672H17.5547C16.5157 20.672 16.0777 20.891 15.2987 21.643Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.681640625 27.64453125"
          className={className}
        >
          <path
            d="              M7.8477 27.645C8.3677 27.645 8.7367 27.357 9.3517 26.824L14.1637 22.6H23.8707C27.5767 22.6 29.6817 20.453 29.6817 16.803V5.811C29.6817 2.146 27.5767 0 23.8707 0H5.8107C2.1057 0 -0.0003 2.133 -0.0003 5.811V16.803C-0.0003 20.467 2.1057 22.6 5.8107 22.6H6.6857V26.291C6.6857 27.111 7.1097 27.645 7.8477 27.645ZM8.2717 25.73V21.711C8.2717 21.137 8.0387 20.918 7.4647 20.918H5.8247C3.1177 20.918 1.6957 19.414 1.6957 16.789V5.824C1.6957 3.186 3.1177 1.695 5.8247 1.695H23.8577C26.5367 1.695 27.9867 3.186 27.9867 5.824V16.789C27.9867 19.414 26.5367 20.918 23.8577 20.918H14.1507C13.5347 20.918 13.2207 21.014 12.7697 21.465Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.625 28.779296875"
          className={className}
        >
          <path
            d="              M8.8047 28.7789C9.5707 28.7789 10.1307 28.4099 11.0747 27.5899L15.7637 23.4339H24.2127C28.3147 23.4339 30.6247 21.0819 30.6247 17.0219V6.4119C30.6247 2.3519 28.3147 -0.0001 24.2127 -0.0001H6.4257C2.3107 -0.0001 -0.0003 2.3519 -0.0003 6.4119V17.0219C-0.0003 21.0819 2.3657 23.4339 6.3297 23.4339H7.0687V26.8109C7.0687 28.0269 7.7107 28.7789 8.8047 28.7789ZM9.4607 25.7719V21.8749C9.4607 21.0679 9.1327 20.7539 8.3537 20.7539H6.4937C3.9097 20.7539 2.6797 19.4549 2.6797 16.9399V6.4939C2.6797 3.9789 3.9097 2.6799 6.4937 2.6799H24.1307C26.7017 2.6799 27.9457 3.9789 27.9457 6.4939V16.9399C27.9457 19.4549 26.7017 20.7539 24.1307 20.7539H15.6137C14.7797 20.7539 14.3827 20.8909 13.7947 21.4919Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.1328125 28.287109375"
          className={className}
        >
          <path
            d="              M8.4087 28.2868C9.0777 28.2868 9.5427 27.9318 10.3767 27.1938L15.0937 22.9958H23.8707C27.9457 22.9958 30.1327 20.7398 30.1327 16.7348V6.2618C30.1327 2.2558 27.9457 -0.0002 23.8707 -0.0002H6.2617C2.1877 -0.0002 -0.0003 2.2418 -0.0003 6.2618V16.7348C-0.0003 20.7538 2.1877 22.9958 6.2617 22.9958H6.9177V26.5508C6.9177 27.6038 7.4517 28.2868 8.4087 28.2868ZM8.9687 25.7848V21.8198C8.9687 21.0818 8.6817 20.7948 7.9437 20.7948H6.2617C3.4997 20.7948 2.2017 19.3868 2.2017 16.7208V6.2618C2.2017 3.5958 3.4997 2.2008 6.2617 2.2008H23.8707C26.6187 2.2008 27.9317 3.5958 27.9317 6.2618V16.7208C27.9317 19.3868 26.6187 20.7948 23.8707 20.7948H15.0117C14.2457 20.7948 13.8637 20.9038 13.3437 21.4378Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.0078125 29.17578125"
          className={className}
        >
          <path
            d="              M9.1057 29.1753C9.9397 29.1753 10.5817 28.7933 11.6077 27.8903L16.2697 23.7893H24.4587C28.6017 23.7893 31.0077 21.3413 31.0077 17.2543V6.5483C31.0077 2.4473 28.6017 0.0003 24.4587 0.0003H6.5347C2.4067 0.0003 -0.0003 2.4473 -0.0003 6.5483V17.2543C-0.0003 21.3553 2.5017 23.7893 6.3847 23.7893H7.1777V27.0293C7.1777 28.3553 7.9027 29.1753 9.1057 29.1753ZM9.8437 25.7853V21.9293C9.8437 21.0683 9.4607 20.7403 8.6677 20.7403H6.6717C4.2247 20.7403 3.0487 19.5093 3.0487 17.1173V6.6853C3.0487 4.2793 4.2247 3.0483 6.6717 3.0483H24.3227C26.7697 3.0483 27.9587 4.2793 27.9587 6.6853V17.1173C27.9587 19.5093 26.7697 20.7403 24.3227 20.7403H16.0647C15.1897 20.7403 14.7797 20.9043 14.1507 21.5333Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.080078125 26.783203125"
          className={className}
        >
          <path
            d="              M7.1097 26.7835C7.4237 26.7835 7.6697 26.6055 7.9977 26.3185L12.9197 22.0935H23.8707C27.0977 22.0935 29.0797 20.0705 29.0797 16.8845V5.2085C29.0797 2.0235 27.0977 -0.0005 23.8707 -0.0005H5.2087C1.9827 -0.0005 -0.0003 1.9965 -0.0003 5.2085V16.8845C-0.0003 20.0975 1.9827 22.0935 5.2087 22.0935H6.3707V25.9625C6.3707 26.4685 6.6717 26.7835 7.1097 26.7835ZM7.3277 25.6485V21.5745C7.3277 21.2185 7.1917 21.0815 6.8357 21.0815H5.2367C2.6117 21.0815 1.0117 19.4555 1.0117 16.8575V5.2365C1.0117 2.6385 2.6117 1.0115 5.2367 1.0115H23.8437C26.4137 1.0115 28.0547 2.6385 28.0547 5.2365V16.8575C28.0547 19.4555 26.4137 21.0815 23.8437 21.0815H13.0297C12.5917 21.0815 12.3727 21.1505 12.0177 21.4925Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 26.345703125"
          className={className}
        >
          <path
            d="              M6.7267 26.3455C6.9457 26.3455 7.1227 26.2225 7.3147 26.0725L12.2907 21.8345H23.8707C26.8517 21.8345 28.7657 19.8785 28.7657 16.9255V4.8945C28.7657 1.9555 26.8517 0.0005 23.8707 0.0005H4.8947C1.9137 0.0005 -0.0003 1.9145 -0.0003 4.8945V16.9255C-0.0003 19.9195 1.9137 21.8345 4.8947 21.8345H6.2207V25.7855C6.2207 26.1265 6.4397 26.3455 6.7267 26.3455ZM6.8497 25.6215V21.4925C6.8497 21.2595 6.7537 21.1645 6.5217 21.1645H4.9357C2.3517 21.1645 0.6697 19.4825 0.6697 16.8985V4.9355C0.6697 2.3515 2.3517 0.6695 4.9357 0.6695H23.8437C26.3457 0.6695 28.0957 2.3515 28.0957 4.9355V16.8985C28.0957 19.4825 26.3457 21.1645 23.8437 21.1645H12.4417C12.0997 21.1645 11.9357 21.2325 11.6207 21.5055Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}