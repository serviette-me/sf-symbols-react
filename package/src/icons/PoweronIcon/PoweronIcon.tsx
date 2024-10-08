import { IconProps } from "../../types"
import React from "react"

export default function PoweronIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5.98828125 28.4921875"
          className={className}
        >
          <path
            d="              M2.9937 28.4925C4.7307 28.4925 5.9887 27.2485 5.9887 25.5935V2.8845C5.9887 1.2305 4.7307 -0.0005 2.9937 -0.0005C1.2577 -0.0005 -0.0003 1.2305 -0.0003 2.8845V25.5935C-0.0003 27.2485 1.2577 28.4925 2.9937 28.4925Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4.15625 27.2890625"
          className={className}
        >
          <path
            d="              M2.0777 27.289C3.2677 27.289 4.1567 26.414 4.1567 25.266V2.023C4.1567 0.861 3.2677 0 2.0777 0C0.8887 0 -0.0003 0.861 -0.0003 2.023V25.266C-0.0003 26.414 0.8887 27.289 2.0777 27.289Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5.126953125 27.91796875"
          className={className}
        >
          <path
            d="              M2.5567 27.9184C4.0467 27.9184 5.1267 26.8514 5.1267 25.4294V2.4744C5.1267 1.0524 4.0467 0.0004 2.5567 0.0004C1.0797 0.0004 -0.0003 1.0524 -0.0003 2.4744V25.4294C-0.0003 26.8514 1.0797 27.9184 2.5567 27.9184Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1.77734375 25.484375"
          className={className}
        >
          <path
            d="              M0.8887 25.4846C1.3807 25.4846 1.7777 25.1016 1.7777 24.6096V0.8746C1.7777 0.3826 1.3807 -0.0004 0.8887 -0.0004C0.3967 -0.0004 -0.0003 0.3826 -0.0003 0.8746V24.6096C-0.0003 25.1016 0.3967 25.4846 0.8887 25.4846Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2.994140625 26.509765625"
          className={className}
        >
          <path
            d="              M1.5037 26.5095C2.3377 26.5095 2.9937 25.8675 2.9937 25.0465V1.4495C2.9937 0.6285 2.3377 0.0005 1.5037 0.0005C0.6567 0.0005 -0.0003 0.6285 -0.0003 1.4495V25.0465C-0.0003 25.8675 0.6567 26.5095 1.5037 26.5095Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2.337890625 26.072265625"
          className={className}
        >
          <path
            d="              M1.1617 26.0727C1.8187 26.0727 2.3377 25.5667 2.3377 24.9237V1.1347C2.3377 0.4917 1.8187 -0.0003 1.1617 -0.0003C0.5197 -0.0003 -0.0003 0.4917 -0.0003 1.1347V24.9237C-0.0003 25.5667 0.5197 26.0727 1.1617 26.0727Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3.5 26.8515625"
          className={className}
        >
          <path
            d="              M1.7497 26.8512C2.7477 26.8512 3.4997 26.1132 3.4997 25.1422V1.6952C3.4997 0.7382 2.7477 0.0002 1.7497 0.0002C0.7517 0.0002 -0.0003 0.7382 -0.0003 1.6952V25.1422C-0.0003 26.1132 0.7517 26.8512 1.7497 26.8512Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1.0390625 24.69140625"
          className={className}
        >
          <path
            d="              M0.5197 24.6911C0.8067 24.6911 1.0387 24.4731 1.0387 24.1851V0.5191C1.0387 0.2321 0.8067 0.0001 0.5197 0.0001C0.2327 0.0001 -0.0003 0.2321 -0.0003 0.5191V24.1851C-0.0003 24.4731 0.2327 24.6911 0.5197 24.6911Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0.669921875 24.294921875"
          className={className}
        >
          <path
            d="              M0.3277 24.295C0.5197 24.295 0.6697 24.144 0.6697 23.953V0.328C0.6697 0.15 0.5197 0 0.3277 0C0.1507 0 -0.0003 0.15 -0.0003 0.328V23.953C-0.0003 24.144 0.1507 24.295 0.3277 24.295Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
