import { IconProps } from "../../types"
import React from "react"

export default function PlayRectangleFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H27.6717C31.0487 27.1113 33.0317 25.1293 33.0317 21.7523V5.3592C33.0317 1.9683 31.0487 0.0003 27.6717 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM14.6287 19.3863C13.3437 20.1662 11.8267 19.4683 11.8267 17.9102V9.1463C11.8267 7.6013 13.3167 6.9043 14.6287 7.6832L21.8747 11.9492C23.0917 12.6743 23.1187 14.3833 21.8747 15.1213Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H27.8087C30.9397 26.1407 32.6347 24.4457 32.6347 21.3417V4.7987C32.6347 1.6957 30.9397 -0.0003 27.8087 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM14.0817 18.7437C13.1117 19.3317 11.9767 18.8257 11.9767 17.7047V8.4217C11.9767 7.3147 13.1247 6.8227 14.0817 7.3967L21.7247 11.8947C22.6137 12.4277 22.6267 13.6987 21.7247 14.2457Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H27.7267C30.9937 26.6605 32.8397 24.8145 32.8397 21.5605V5.0995C32.8397 1.8455 30.9937 -0.0005 27.7267 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM14.3687 19.0855C13.2347 19.7695 11.8947 19.1815 11.8947 17.8285V8.8045C11.8947 7.4645 13.2207 6.8635 14.3687 7.5465L21.8067 11.9355C22.8727 12.5645 22.8867 14.0685 21.8067 14.7105Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7601H27.9867C30.6657 24.7601 32.0197 23.3921 32.0197 20.7671V3.9921C32.0197 1.3671 30.6657 0.0001 27.9867 0.0001H4.0337C1.3677 0.0001 -0.0003 1.3531 -0.0003 3.9921V20.7671C-0.0003 23.4061 1.3677 24.7601 4.0337 24.7601ZM13.3847 17.8421C12.8107 18.1971 12.1267 17.9101 12.1267 17.3081V7.4781C12.1267 6.8771 12.8377 6.6171 13.3847 6.9451L21.3557 11.7171C21.8887 12.0311 21.9027 12.7691 21.3557 13.0981Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 25.51171875"
          className={className}
        >
          <path
            d="              M4.4847 25.5113H27.9047C30.8577 25.5113 32.3887 23.9943 32.3887 21.0823V4.4293C32.3887 1.5173 30.8577 0.0003 27.9047 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5043 -0.0003 4.4293V21.0823C-0.0003 23.9943 1.5317 25.5113 4.4847 25.5113ZM13.7267 18.3203C12.9607 18.7853 12.0727 18.4023 12.0727 17.5683V7.9433C12.0727 7.1233 13.0017 6.7673 13.7267 7.1913L21.6157 11.8533C22.3127 12.2773 22.3267 13.2613 21.6157 13.6723Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1702H27.9457C30.8167 25.1702 32.2387 23.7622 32.2387 20.9452V4.2382C32.2387 1.4222 30.8167 0.0002 27.9457 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM13.5217 18.1012C12.8787 18.4982 12.1137 18.1832 12.1137 17.5002V7.6972C12.1137 7.0272 12.9337 6.7402 13.5217 7.0952L21.5607 11.8532C22.1347 12.1952 22.1487 13.0152 21.5607 13.3712Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H27.8637C30.8847 25.785 32.4977 24.186 32.4977 21.191V4.594C32.4977 1.6 30.8847 0 27.8637 0H4.6347C1.6137 0 -0.0003 1.586 -0.0003 4.594V21.191C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM13.8767 18.512C13.0157 19.018 12.0317 18.58 12.0317 17.637V8.148C12.0317 7.205 13.0567 6.795 13.8767 7.287L21.6567 11.881C22.4357 12.346 22.4497 13.453 21.6567 13.918Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1997H28.0407C30.4607 24.1997 31.7187 22.9137 31.7187 20.5217V3.6777C31.7187 1.2847 30.4607 -0.0003 28.0407 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2577 -0.0003 3.6777V20.5217C-0.0003 22.9417 1.2717 24.1997 3.6917 24.1997ZM13.2067 17.4997C12.7287 17.8007 12.1547 17.5547 12.1547 17.0487V7.1917C12.1547 6.6857 12.7287 6.4527 13.2067 6.7267L21.0957 11.5257C21.5747 11.8257 21.5747 12.4547 21.0957 12.7417Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 23.92578125"
          className={className}
        >
          <path
            d="              M3.5137 23.926H28.0687C30.3517 23.926 31.5687 22.668 31.5687 20.412V3.514C31.5687 1.258 30.3517 0 28.0687 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.412C-0.0003 22.709 1.2167 23.926 3.5137 23.926ZM13.1117 17.336C12.6737 17.596 12.1547 17.363 12.1547 16.912V7.041C12.1547 6.59 12.6737 6.357 13.1117 6.617L20.9587 11.443C21.4097 11.717 21.4097 12.291 20.9587 12.564Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
