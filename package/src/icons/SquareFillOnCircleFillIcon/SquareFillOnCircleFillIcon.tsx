import { IconProps } from "../../types"
import React from "react"

export default function SquareFillOnCircleFillIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.3984375 33.208984375"
          className={className}
        >
          <path
            d="              M15.2847 6.1522H24.8417C22.4357 2.4612 18.2517 0.0002 13.5077 0.0002C6.0427 0.0002 -0.0003 6.0562 -0.0003 13.5212C-0.0003 18.7582 2.9807 23.3102 7.3417 25.5522V14.0822C7.3417 9.2832 10.4727 6.1522 15.2847 6.1522ZM9.9257 27.8492C9.9257 31.2262 11.8947 33.2092 15.2847 33.2092H29.0387C32.4157 33.2092 34.3987 31.2262 34.3987 27.8492V14.0822C34.3987 10.7052 32.4157 8.7222 29.0387 8.7222H15.2847C11.8947 8.7222 9.9257 10.7052 9.9257 14.0822Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.744140625 31.732421875"
          className={className}
        >
          <path
            d="              M14.1917 6.111H22.9957C20.8637 2.461 16.8987 0 12.3597 0C5.5367 0 -0.0003 5.537 -0.0003 12.373C-0.0003 17.322 2.9257 21.602 7.1367 23.57V13.139C7.1367 8.805 9.8297 6.111 14.1917 6.111ZM9.3517 26.934C9.3517 30.037 11.0607 31.732 14.1917 31.732H27.9177C31.0487 31.732 32.7437 30.037 32.7437 26.934V13.139C32.7437 10.035 31.0487 8.34 27.9177 8.34H14.1917C11.0607 8.34 9.3517 10.035 9.3517 13.139Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.619140625 32.498046875"
          className={className}
        >
          <path
            d="              M14.7657 6.1255H23.9667C21.6977 2.4475 17.6097 0.0005 12.9747 0.0005C5.8107 0.0005 -0.0003 5.7965 -0.0003 12.9605C-0.0003 18.0745 2.9527 22.4905 7.2457 24.6095V13.6305C7.2457 9.0375 10.1717 6.1255 14.7657 6.1255ZM9.6527 27.3985C9.6527 30.6525 11.4977 32.4985 14.7657 32.4985H28.5057C31.7737 32.4985 33.6187 30.6525 33.6187 27.3985V13.6305C33.6187 10.3765 31.7737 8.5315 28.5057 8.5315H14.7657C11.4977 8.5315 9.6527 10.3765 9.6527 13.6305Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.447265625 29.75"
          className={className}
        >
          <path
            d="              M12.6877 6.3707H21.0277C19.2907 2.6117 15.4767 -0.0003 11.0467 -0.0003C4.9357 -0.0003 -0.0003 4.9357 -0.0003 11.0467C-0.0003 15.7497 2.9257 19.7557 7.0687 21.3557V11.9497C7.0687 8.4217 9.1327 6.3707 12.6877 6.3707ZM8.6547 25.7577C8.6547 28.4097 10.0077 29.7497 12.6877 29.7497H26.4137C29.0937 29.7497 30.4477 28.4097 30.4477 25.7577V11.9497C30.4477 9.3107 29.0937 7.9567 26.4137 7.9567H12.6877C10.0077 7.9567 8.6547 9.3107 8.6547 11.9497Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.69140625 30.775390625"
          className={className}
        >
          <path
            d="              M13.4807 6.0835H21.8207C19.8657 2.4745 16.0237 -0.0005 11.6207 -0.0005C5.1957 -0.0005 -0.0003 5.2085 -0.0003 11.6215C-0.0003 16.4065 2.8847 20.5075 6.9997 22.2985V12.5235C6.9997 8.4905 9.4197 6.0835 13.4807 6.0835ZM8.9957 26.3455C8.9957 29.2715 10.5277 30.7755 13.4807 30.7755H27.2067C30.1737 30.7755 31.6917 29.2715 31.6917 26.3455V12.5235C31.6917 9.5975 30.1737 8.0805 27.2067 8.0805H13.4807C10.5277 8.0805 8.9957 9.5975 8.9957 12.5235Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.103515625 30.255859375"
          className={className}
        >
          <path
            d="              M13.0837 6.0838H21.1507C19.3047 2.4748 15.5447 -0.0002 11.2107 -0.0002C5.0177 -0.0002 -0.0003 5.0178 -0.0003 11.2108C-0.0003 15.9008 2.8577 19.8928 6.9317 21.5878V12.1818C6.9317 8.3128 9.2007 6.0838 13.0837 6.0838ZM8.7907 26.0178C8.7907 28.8338 10.2267 30.2558 13.0837 30.2558H26.8107C29.6677 30.2558 31.1037 28.8338 31.1037 26.0178V12.1818C31.1037 9.3648 29.6677 7.9438 26.8107 7.9438H13.0837C10.2267 7.9438 8.7907 9.3648 8.7907 12.1818Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.142578125 31.185546875"
          className={className}
        >
          <path
            d="              M13.7817 6.0976H22.3257C20.3027 2.4606 16.4067 -0.0004 11.9357 -0.0004C5.3457 -0.0004 -0.0003 5.3456 -0.0003 11.9356C-0.0003 16.7886 2.8987 20.9726 7.0687 22.8316V12.7836C7.0687 8.6136 9.5977 6.0976 13.7817 6.0976ZM9.1467 26.5916C9.1467 29.5856 10.7597 31.1856 13.7817 31.1856H27.5217C30.5427 31.1856 32.1427 29.5856 32.1427 26.5916V12.7836C32.1427 9.7756 30.5427 8.1896 27.5217 8.1896H13.7817C10.7597 8.1896 9.1467 9.7756 9.1467 12.7836Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.5859375 29.107421875"
          className={className}
        >
          <path
            d="              M12.1547 6.7672H20.8637C19.2637 2.8032 15.3807 0.0002 10.8277 0.0002C4.8397 0.0002 -0.0003 4.8402 -0.0003 10.8282C-0.0003 15.5582 3.0217 19.5642 7.2457 21.0542V11.6622C7.2457 8.5722 9.0507 6.7672 12.1547 6.7672ZM8.4627 25.4292C8.4627 27.8492 9.7207 29.1072 12.1547 29.1072H25.8947C28.3147 29.1072 29.5857 27.8492 29.5857 25.4292V11.6622C29.5857 9.2562 28.3147 7.9842 25.8947 7.9842H12.1547C9.7207 7.9842 8.4627 9.2562 8.4627 11.6622Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.134765625 28.79296875"
          className={className}
        >
          <path
            d="              M11.8807 6.9858H20.7677C19.2637 2.9118 15.3257 -0.0002 10.7187 -0.0002C4.7847 -0.0002 -0.0003 4.7988 -0.0003 10.7328C-0.0003 15.4768 3.0757 19.4828 7.3277 20.9178V11.5258C7.3277 8.6678 9.0097 6.9858 11.8807 6.9858ZM8.3667 25.2788C8.3667 27.5758 9.5837 28.7928 11.8807 28.7928H25.6207C27.9177 28.7928 29.1347 27.5758 29.1347 25.2788V11.5258C29.1347 9.2288 27.9177 8.0118 25.6207 8.0118H11.8807C9.5837 8.0118 8.3667 9.2288 8.3667 11.5258Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
