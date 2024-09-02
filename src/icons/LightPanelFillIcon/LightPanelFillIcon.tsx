import { IconProps } from "../../types"

export default function LightPanelFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.095703125 27.80859375"
          className={className}
        >
          <path
            d="              M5.3597 27.8084H29.7367C33.1137 27.8084 35.0957 25.8264 35.0957 22.4494V5.3594C35.0957 1.9684 33.1137 0.0004 29.7367 0.0004H5.3597C1.9827 0.0004 -0.0003 1.9684 -0.0003 5.3594V22.4494C-0.0003 25.8264 1.9827 27.8084 5.3597 27.8084ZM6.0977 22.9554C5.2637 22.9554 4.8537 22.6134 4.8537 21.6974V6.0974C4.8537 5.1954 5.2637 4.8534 6.0977 4.8534H28.9977C29.8317 4.8534 30.2427 5.1954 30.2427 6.0974V21.6974C30.2427 22.6134 29.8317 22.9554 28.9977 22.9554ZM7.9437 20.3844H27.1527C27.5077 20.3844 27.6717 20.2074 27.6717 19.8374V7.9574C27.6717 7.6014 27.5077 7.4234 27.1527 7.4234H7.9437C7.5877 7.4234 7.4237 7.6014 7.4237 7.9574V19.8374C7.4237 20.2074 7.5877 20.3844 7.9437 20.3844Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.357421875 26.6875"
          className={className}
        >
          <path
            d="              M4.8267 26.6878H29.5177C32.6487 26.6878 34.3577 24.9918 34.3577 21.8888V4.7988C34.3577 1.6948 32.6487 -0.0002 29.5177 -0.0002H4.8267C1.7087 -0.0002 -0.0003 1.6948 -0.0003 4.7988V21.8888C-0.0003 24.9918 1.7087 26.6878 4.8267 26.6878ZM5.2087 23.1598C4.1157 23.1598 3.5277 22.6268 3.5277 21.4508V5.2228C3.5277 4.0608 4.1157 3.5268 5.2087 3.5268H29.1347C30.2287 3.5268 30.8297 4.0608 30.8297 5.2228V21.4508C30.8297 22.6268 30.2287 23.1598 29.1347 23.1598ZM6.6037 20.9318H27.7407C28.3007 20.9318 28.6017 20.6168 28.6017 20.0568V6.6308C28.6017 6.0568 28.3007 5.7418 27.7407 5.7418H6.6037C6.0427 5.7418 5.7427 6.0568 5.7427 6.6308V20.0568C5.7427 20.6168 6.0427 20.9318 6.6037 20.9318Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.740234375 27.2890625"
          className={className}
        >
          <path
            d="              M5.1137 27.2886H29.6267C32.8947 27.2886 34.7407 25.4436 34.7407 22.1896V5.0996C34.7407 1.8456 32.8947 -0.0004 29.6267 -0.0004H5.1137C1.8597 -0.0004 -0.0003 1.8456 -0.0003 5.0996V22.1896C-0.0003 25.4436 1.8597 27.2886 5.1137 27.2886ZM5.6877 23.0506C4.7167 23.0506 4.2247 22.6136 4.2247 21.5876V5.7016C4.2247 4.6616 4.7167 4.2246 5.6877 4.2246H29.0667C30.0237 4.2246 30.5157 4.6616 30.5157 5.7016V21.5876C30.5157 22.6136 30.0237 23.0506 29.0667 23.0506ZM7.3147 20.6446H27.4257C27.8767 20.6446 28.1097 20.4116 28.1097 19.9476V7.3416C28.1097 6.8766 27.8767 6.6446 27.4257 6.6446H7.3147C6.8637 6.6446 6.6307 6.8766 6.6307 7.3416V19.9476C6.6307 20.4116 6.8637 20.6446 7.3147 20.6446Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.921875 24.7734375"
          className={className}
        >
          <path
            d="              M4.0337 24.7738H28.8887C31.5687 24.7738 32.9217 23.4058 32.9217 20.7808V3.9918C32.9217 1.3538 31.5687 -0.0002 28.8887 -0.0002H4.0337C1.3677 -0.0002 -0.0003 1.3398 -0.0003 3.9918V20.7808C-0.0003 23.4198 1.3677 24.7738 4.0337 24.7738ZM4.0607 23.0778C2.5297 23.0778 1.6957 22.2718 1.6957 20.6858V4.0738C1.6957 2.5018 2.5297 1.6818 4.0607 1.6818H28.8617C30.3657 1.6818 31.2267 2.5018 31.2267 4.0738V20.6858C31.2267 22.2718 30.3657 23.0778 28.8617 23.0778ZM4.6897 21.4918H28.2327C29.1347 21.4918 29.6407 20.9868 29.6407 20.0698V4.7028C29.6407 3.7868 29.1347 3.2808 28.2327 3.2808H4.6897C3.7867 3.2808 3.2817 3.7868 3.2817 4.7028V20.0698C3.2817 20.9868 3.7867 21.4918 4.6897 21.4918Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.87890625 25.9765625"
          className={className}
        >
          <path
            d="              M4.4847 25.9764H29.3947C32.3477 25.9764 33.8787 24.4454 33.8787 21.5334V4.4434C33.8787 1.5174 32.3477 0.0004 29.3947 0.0004H4.4847C1.5317 0.0004 -0.0003 1.5174 -0.0003 4.4434V21.5334C-0.0003 24.4594 1.5317 25.9764 4.4847 25.9764ZM4.6487 23.2974C3.3767 23.2974 2.6797 22.6274 2.6797 21.3004V4.6754C2.6797 3.3364 3.3767 2.6794 4.6487 2.6794H29.2307C30.4887 2.6794 31.1997 3.3364 31.1997 4.6754V21.3004C31.1997 22.6274 30.4887 23.2974 29.2307 23.2974ZM5.7557 21.3004H28.1227C28.8207 21.3004 29.2027 20.9044 29.2027 20.1934V5.7834C29.2027 5.0724 28.8207 4.6754 28.1227 4.6754H5.7557C5.0587 4.6754 4.6757 5.0724 4.6757 5.7834V20.1934C4.6757 20.9044 5.0587 21.3004 5.7557 21.3004Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.60546875 25.56640625"
          className={className}
        >
          <path
            d="              M4.2927 25.5663H29.3127C32.1837 25.5663 33.6057 24.1443 33.6057 21.3283V4.2383C33.6057 1.4223 32.1837 0.0003 29.3127 0.0003H4.2927C1.4357 0.0003 -0.0003 1.4083 -0.0003 4.2383V21.3283C-0.0003 24.1583 1.4357 25.5663 4.2927 25.5663ZM4.3207 23.3653C2.9527 23.3653 2.2017 22.6273 2.2017 21.2183V4.3473C2.2017 2.9253 2.9527 2.2013 4.3207 2.2013H29.2847C30.6387 2.2013 31.4047 2.9253 31.4047 4.3473V21.2183C31.4047 22.6273 30.6387 23.3653 29.2847 23.3653ZM5.2637 21.4923H28.3417C29.1077 21.4923 29.5447 21.0413 29.5447 20.2753V5.2913C29.5447 4.5113 29.1077 4.0603 28.3417 4.0603H5.2637C4.4977 4.0603 4.0747 4.5113 4.0747 5.2913V20.2753C4.0747 21.0413 4.4977 21.4923 5.2637 21.4923Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.083984375 26.27734375"
          className={className}
        >
          <path
            d="              M4.6347 26.2778H29.4497C32.4847 26.2778 34.0837 24.6778 34.0837 21.6838V4.5938C34.0837 1.5998 32.4847 -0.0002 29.4497 -0.0002H4.6347C1.6137 -0.0002 -0.0003 1.5858 -0.0003 4.5938V21.6838C-0.0003 24.6778 1.6137 26.2778 4.6347 26.2778ZM4.8947 23.2288C3.6917 23.2288 3.0487 22.6268 3.0487 21.3688V4.9078C3.0487 3.6508 3.6917 3.0348 4.8947 3.0348H29.1897C30.3787 3.0348 31.0347 3.6508 31.0347 4.9078V21.3688C31.0347 22.6268 30.3787 23.2288 29.1897 23.2288ZM6.1247 21.1368H27.9587C28.6017 21.1368 28.9437 20.7808 28.9437 20.1388V6.1388C28.9437 5.4958 28.6017 5.1268 27.9587 5.1268H6.1247C5.4827 5.1268 5.1407 5.4958 5.1407 6.1388V20.1388C5.1407 20.7808 5.4827 21.1368 6.1247 21.1368Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 23.734375"
          className={className}
        >
          <path
            d="              M3.6917 23.7343H28.3277C30.7477 23.7343 32.0197 22.4353 32.0197 20.0563V3.6773C32.0197 1.2853 30.7477 0.0003 28.3277 0.0003H3.6917C1.2717 0.0003 -0.0003 1.2583 -0.0003 3.6773V20.0563C-0.0003 22.4763 1.2717 23.7343 3.6917 23.7343ZM3.7187 22.7223C1.9417 22.7223 1.0117 21.7933 1.0117 20.0023V3.7183C1.0117 1.9413 1.9417 1.0113 3.7187 1.0113H28.2867C30.0097 1.0113 30.9937 1.9413 30.9937 3.7183V20.0023C30.9937 21.7933 30.0097 22.7223 28.2867 22.7223ZM3.9237 21.4923H28.0957C29.1897 21.4923 29.7777 20.9043 29.7777 19.8103V3.9243C29.7777 2.8303 29.1897 2.2283 28.0957 2.2283H3.9237C2.8297 2.2283 2.2427 2.8303 2.2427 3.9243V19.8103C2.2427 20.9043 2.8297 21.4923 3.9237 21.4923Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.5546875 23.201171875"
          className={className}
        >
          <path
            d="              M3.5137 23.2015H28.0407C30.3247 23.2015 31.5547 21.9575 31.5547 19.6875V3.5135C31.5547 1.2575 30.3247 -0.0005 28.0407 -0.0005H3.5137C1.2167 -0.0005 -0.0003 1.2165 -0.0003 3.5135V19.6875C-0.0003 21.9845 1.2167 23.2015 3.5137 23.2015ZM3.5407 22.5315C1.6547 22.5315 0.6697 21.5605 0.6697 19.6605V3.5545C0.6697 1.6545 1.6547 0.6695 3.5407 0.6695H27.9997C29.8317 0.6695 30.8847 1.6545 30.8847 3.5545V19.6605C30.8847 21.5605 29.8317 22.5315 27.9997 22.5315ZM3.5277 21.5055H28.0137C29.2167 21.5055 29.8457 20.8765 29.8457 19.6735V3.5275C29.8457 2.3375 29.2167 1.7085 28.0137 1.7085H3.5277C2.3377 1.7085 1.6957 2.3375 1.6957 3.5275V19.6735C1.6957 20.8765 2.3377 21.5055 3.5277 21.5055Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
