import { IconProps } from "../../types"
import React from "react"

export default function PillFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.16089303439045 30.17456385428554"
          className={className}
        >
          <path
            d="              M27.7686 2.399C24.4056 -0.978 19.2786 -0.718 15.8466 2.727L10.8706 7.676L22.4916 19.284L27.4266 14.335C30.8856 10.889 31.1316 5.776 27.7686 2.399ZM7.7396 10.835L2.7216 15.838C-0.7234 19.284 -0.9694 24.397 2.3936 27.774C5.7566 31.151 10.8836 30.891 14.3156 27.46L19.3466 22.415Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.454893649781475 28.47045217815443"
          className={className}
        >
          <path
            d="              M26.2054 2.2453C23.1014 -0.8587 18.5624 -0.7357 15.2674 2.5593L10.0724 7.7413L20.7084 18.3913L25.8904 13.2093C29.1994 9.9013 29.3084 5.3763 26.2054 2.2453ZM7.7754 10.0513L2.5664 15.2603C-0.7426 18.5693 -0.8516 23.0943 2.2384 26.2253C5.3554 29.3293 9.8944 29.2063 13.1894 25.9113L18.4124 20.6883Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.357330688405952 29.37483101525578"
          className={className}
        >
          <path
            d="              M27.0314 2.3282C23.7914 -0.9258 18.9374 -0.7208 15.5744 2.6422L10.4884 7.7152L21.6584 18.8572L26.7034 13.8122C30.0934 10.4222 30.2714 5.5822 27.0314 2.3282ZM7.7534 10.4632L2.6544 15.5622C-0.7366 18.9532 -0.9136 23.7932 2.3264 27.0472C5.5664 30.3012 10.4204 30.0952 13.7834 26.7322L18.9104 21.6052Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.330578306866744 26.342738637617494"
          className={className}
        >
          <path
            d="              M24.321 2.0083C21.545 -0.7667 17.581 -0.6987 14.463 2.4183L9.008 7.8733L18.456 17.3343L23.924 11.8653C27.028 8.7623 27.096 4.8113 24.321 2.0083ZM7.874 8.9943L2.418 14.4633C-0.699 17.5803 -0.767 21.5313 2.008 24.3343C4.784 27.1103 8.749 27.0413 11.866 23.9243L17.334 18.4553Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.375954534629244 27.381211975275193"
          className={className}
        >
          <path
            d="              M25.2227 2.1582C22.2697 -0.7808 18.0997 -0.7538 14.9007 2.4592L9.5547 7.7912L19.5897 17.8122L24.9217 12.4802C28.1347 9.2682 28.1487 5.1112 25.2227 2.1582ZM7.8047 9.5552L2.4587 14.8872C-0.7533 18.1132 -0.7813 22.2692 2.1587 25.2232C5.0977 28.1622 9.2677 28.1352 12.4807 24.9222L17.8267 19.5762Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.771862807946157 26.766858238673116"
          className={className}
        >
          <path
            d="              M24.6656 2.1017C21.8076 -0.7423 17.8426 -0.7553 14.6986 2.4027L9.2706 7.8167L18.9506 17.4957L24.3646 12.0687C27.5366 8.9107 27.5086 4.9587 24.6656 2.1017ZM7.8216 9.2657L2.4076 14.6797C-0.7644 17.8517 -0.7374 21.8027 2.1066 24.6607C4.9636 27.5037 8.9156 27.5317 12.0866 24.3597L17.5016 18.9457Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.846557866123785 27.85399809549084"
          className={className}
        >
          <path
            d="              M25.6469 2.1999C22.6249 -0.8211 18.3049 -0.7391 15.0509 2.5009L9.7739 7.7779L20.0689 18.0589L25.3459 12.7959C28.5999 9.5419 28.6549 5.2219 25.6469 2.1999ZM7.7919 9.7739L2.4999 15.0519C-0.7531 18.3059 -0.8081 22.6259 2.1999 25.6609C5.2079 28.6689 9.5419 28.5999 12.7949 25.3469L18.0859 20.0559Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.758565391863954 25.783114743436943"
          className={className}
        >
          <path
            d="              M23.8688 1.8887C21.1888 -0.8043 17.2238 -0.6133 14.1748 2.4357L8.6378 7.9727L17.7978 17.1327L23.3348 11.5957C26.3708 8.5607 26.5618 4.5957 23.8688 1.8887ZM7.9548 8.6427L2.4308 14.1797C-0.6042 17.2147 -0.8092 21.1937 1.8838 23.9007C4.5638 26.5937 8.5418 26.3887 11.5908 23.3397L17.1148 17.8167Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.471404275088307 25.49820048869934"
          className={className}
        >
          <path
            d="              M23.6375 1.822C21.0125 -0.817 17.0475 -0.571 14.0265 2.437L8.4615 8.015L17.4715 17.025L23.0365 11.447C26.0435 8.453 26.2905 4.488 23.6375 1.822ZM7.9975 8.467L2.4325 14.031C-0.5615 17.039 -0.8215 21.017 1.8175 23.683C4.4565 26.322 8.4345 26.062 11.4425 23.041L17.0065 17.476Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
