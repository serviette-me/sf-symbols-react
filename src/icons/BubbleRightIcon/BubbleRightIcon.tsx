import { IconProps } from "../../types"

export default function BubbleRightIconIcon({
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
            d="              M22.2717 31.1038C24.0217 31.1038 25.1157 29.9418 25.1157 28.0278V25.4978H26.2087C29.7087 25.4978 32.8677 22.6408 32.8677 18.3478V7.1508C32.8677 2.8578 30.0237 -0.0002 25.7307 -0.0002H7.1367C2.8437 -0.0002 -0.0003 2.8578 -0.0003 7.1508V18.3478C-0.0003 22.6408 2.8437 25.4978 7.1367 25.4978H14.0957L18.6077 29.3948C20.0707 30.6528 21.0957 31.1038 22.2717 31.1038ZM21.1367 25.7718L16.9527 21.7108C16.1057 20.8908 15.6547 20.6448 14.5337 20.6448H7.5607C5.7837 20.6448 4.8537 19.7558 4.8537 17.9378V7.5608C4.8537 5.7418 5.7837 4.8538 7.5607 4.8538H25.3067C27.0837 4.8538 28.0137 5.7418 28.0137 7.5608V17.9378C28.0137 19.7558 27.0837 20.6448 25.3067 20.6448H22.6407C21.7387 20.6448 21.1367 21.0548 21.1367 22.1488Z"
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
            d="              M21.9977 29.6815C23.3517 29.6815 24.1717 28.7655 24.1717 27.2755V24.2405H25.0337C28.8207 24.2405 31.4997 21.6835 31.4997 17.5415V6.6995C31.4997 2.5435 28.9847 0.0005 24.8007 0.0005H6.6997C2.5157 0.0005 -0.0003 2.5435 -0.0003 6.6995V17.5415C-0.0003 21.6835 2.5157 24.2405 6.6997 24.2405H14.5607L19.1817 28.2875C20.3297 29.2855 21.0687 29.6815 21.9977 29.6815ZM21.1507 25.7715L16.8707 21.5745C16.1877 20.8905 15.7637 20.7125 14.8207 20.7125H6.9177C4.6487 20.7125 3.5277 19.5645 3.5277 17.3225V6.9045C3.5277 4.6625 4.6487 3.5275 6.9177 3.5275H24.5817C26.8657 3.5275 27.9727 4.6625 27.9727 6.9045V17.3225C27.9727 19.5645 26.8657 20.7125 24.5817 20.7125H22.4217C21.5877 20.7125 21.1507 21.0545 21.1507 21.9845Z"
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
            d="              M22.1487 30.434C23.7067 30.434 24.6637 29.395 24.6637 27.672V24.91H25.6487C29.2847 24.91 32.2247 22.203 32.2247 17.965V6.945C32.2247 2.707 29.5317 0 25.2927 0H6.9317C2.6937 0 -0.0003 2.721 -0.0003 6.945V17.965C-0.0003 22.189 2.6937 24.91 6.9317 24.91H14.3147L18.8807 28.875C20.1937 30.01 21.0817 30.434 22.1487 30.434ZM21.1367 25.772L16.9117 21.643C16.1467 20.891 15.7087 20.672 14.6697 20.672H7.2597C5.2497 20.672 4.2247 19.674 4.2247 17.65V7.26C4.2247 5.236 5.2497 4.238 7.2597 4.238H24.9647C26.9747 4.238 27.9997 5.236 27.9997 7.26V17.65C27.9997 19.674 26.9747 20.672 24.9647 20.672H22.5317C21.6697 20.672 21.1367 21.055 21.1367 22.066Z"
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
            d="              M21.8337 27.645C22.5587 27.645 22.9957 27.111 22.9957 26.291V22.6H23.8707C27.5767 22.6 29.6817 20.467 29.6817 16.803V5.811C29.6817 2.133 27.5767 0 23.8707 0H5.8107C2.1057 0 -0.0003 2.146 -0.0003 5.811V16.803C-0.0003 20.453 2.1057 22.6 5.8107 22.6H15.5177L20.3297 26.824C20.9317 27.357 21.3147 27.645 21.8337 27.645ZM21.4097 25.73L16.9117 21.465C16.4607 21.014 16.1467 20.918 15.5177 20.918H5.8247C3.1447 20.918 1.6957 19.414 1.6957 16.789V5.824C1.6957 3.186 3.1447 1.695 5.8247 1.695H23.8577C26.5647 1.695 27.9867 3.186 27.9867 5.824V16.789C27.9867 19.414 26.5647 20.918 23.8577 20.918H22.2167C21.6287 20.918 21.4097 21.137 21.4097 21.711Z"
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
            d="              M21.8207 28.7789C22.9137 28.7789 23.5567 28.0269 23.5567 26.8109V23.4339H24.2947C28.2597 23.4339 30.6247 21.0819 30.6247 17.0219V6.4119C30.6247 2.3519 28.3147 -0.0001 24.2127 -0.0001H6.4257C2.3107 -0.0001 -0.0003 2.3519 -0.0003 6.4119V17.0219C-0.0003 21.0819 2.3107 23.4339 6.4257 23.4339H14.8617L19.5507 27.5899C20.4937 28.4099 21.0547 28.7789 21.8207 28.7789ZM21.1637 25.7719L16.8297 21.4919C16.2427 20.8909 15.8457 20.7539 15.0117 20.7539H6.4937C3.9237 20.7539 2.6797 19.4549 2.6797 16.9399V6.4939C2.6797 3.9789 3.9237 2.6799 6.4937 2.6799H24.1307C26.7147 2.6799 27.9457 3.9789 27.9457 6.4939V16.9399C27.9457 19.4549 26.7147 20.7539 24.1307 20.7539H22.2717C21.4927 20.7539 21.1637 21.0679 21.1637 21.8749Z"
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
            d="              M21.7247 28.2868C22.6817 28.2868 23.2147 27.6038 23.2147 26.5508V22.9958H23.8707C27.9457 22.9958 30.1327 20.7538 30.1327 16.7348V6.2618C30.1327 2.2418 27.9457 -0.0002 23.8707 -0.0002H6.2617C2.1877 -0.0002 -0.0003 2.2558 -0.0003 6.2618V16.7348C-0.0003 20.7398 2.1877 22.9958 6.2617 22.9958H15.0387L19.7557 27.1938C20.5897 27.9318 21.0547 28.2868 21.7247 28.2868ZM21.1637 25.7848L16.7887 21.4378C16.2697 20.9038 15.8867 20.7948 15.1207 20.7948H6.2617C3.5137 20.7948 2.2017 19.3868 2.2017 16.7208V6.2618C2.2017 3.5958 3.5137 2.2008 6.2617 2.2008H23.8707C26.6327 2.2008 27.9317 3.5958 27.9317 6.2618V16.7208C27.9317 19.3868 26.6327 20.7948 23.8707 20.7948H22.1897C21.4517 20.7948 21.1637 21.0818 21.1637 21.8198Z"
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
            d="              M21.9027 29.1753C23.1057 29.1753 23.8167 28.3553 23.8167 27.0293V23.7893H24.6097C28.5057 23.7893 31.0077 21.3553 31.0077 17.2543V6.5483C31.0077 2.4473 28.6017 0.0003 24.4587 0.0003H6.5347C2.4067 0.0003 -0.0003 2.4473 -0.0003 6.5483V17.2543C-0.0003 21.3413 2.4067 23.7893 6.5347 23.7893H14.7387L19.4007 27.8903C20.4257 28.7933 21.0687 29.1753 21.9027 29.1753ZM21.1507 25.7853L16.8437 21.5333C16.2287 20.9043 15.8047 20.7403 14.9297 20.7403H6.6717C4.2387 20.7403 3.0487 19.5093 3.0487 17.1173V6.6853C3.0487 4.2793 4.2387 3.0483 6.6717 3.0483H24.3227C26.7837 3.0483 27.9587 4.2793 27.9587 6.6853V17.1173C27.9587 19.5093 26.7837 20.7403 24.3227 20.7403H22.3397C21.5337 20.7403 21.1507 21.0683 21.1507 21.9293Z"
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
            d="              M21.9707 26.7835C22.4087 26.7835 22.7087 26.4685 22.7087 25.9625V22.0935H23.8707C27.0977 22.0935 29.0797 20.0975 29.0797 16.8845V5.2085C29.0797 1.9965 27.0977 -0.0005 23.8707 -0.0005H5.2087C1.9827 -0.0005 -0.0003 2.0235 -0.0003 5.2085V16.8845C-0.0003 20.0705 1.9827 22.0935 5.2087 22.0935H16.1597L21.0817 26.3185C21.3967 26.6055 21.6567 26.7835 21.9707 26.7835ZM21.7387 25.6485L17.0627 21.4925C16.7067 21.1505 16.4887 21.0815 16.0507 21.0815H5.2367C2.6657 21.0815 1.0117 19.4555 1.0117 16.8575V5.2365C1.0117 2.6385 2.6657 1.0115 5.2367 1.0115H23.8437C26.4687 1.0115 28.0547 2.6385 28.0547 5.2365V16.8575C28.0547 19.4555 26.4687 21.0815 23.8437 21.0815H22.2437C21.8887 21.0815 21.7387 21.2185 21.7387 21.5745Z"
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
            d="              M22.0527 26.3455C22.3267 26.3455 22.5447 26.1265 22.5447 25.7855V21.8345H23.8707C26.8517 21.8345 28.7657 19.9195 28.7657 16.9255V4.8945C28.7657 1.9145 26.8517 0.0005 23.8707 0.0005H4.8947C1.9137 0.0005 -0.0003 1.9555 -0.0003 4.8945V16.9255C-0.0003 19.8785 1.9137 21.8345 4.8947 21.8345H16.4887L21.4647 26.0725C21.6427 26.2225 21.8337 26.3455 22.0527 26.3455ZM21.9157 25.6215L17.1447 21.5055C16.8297 21.2325 16.6657 21.1645 16.3247 21.1645H4.9357C2.4197 21.1645 0.6697 19.4825 0.6697 16.8985V4.9355C0.6697 2.3515 2.4197 0.6695 4.9357 0.6695H23.8437C26.4137 0.6695 28.0957 2.3515 28.0957 4.9355V16.8985C28.0957 19.4825 26.4137 21.1645 23.8437 21.1645H22.2437C22.0117 21.1645 21.9157 21.2595 21.9157 21.4925Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}