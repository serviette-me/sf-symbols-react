import { IconProps } from "../../types"

export default function SquareTophalfFilledIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M-0.0003 21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3733C27.1117 1.9823 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9823 -0.0003 5.3733ZM4.8537 21.0133V13.5623H22.2577V21.0133C22.2577 21.8473 21.9157 22.2583 20.9997 22.2583H6.1117C5.1957 22.2583 4.8537 21.8473 4.8537 21.0133Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M-0.0003 21.3143C-0.0003 24.4453 1.6957 26.1403 4.7987 26.1403H21.3417C24.4457 26.1403 26.1407 24.4453 26.1407 21.3143V4.8263C26.1407 1.7093 24.4457 0.0003 21.3417 0.0003H4.7987C1.6957 0.0003 -0.0003 1.7093 -0.0003 4.8263ZM3.5277 20.9313V13.0703H22.6137V20.9313C22.6137 22.0253 22.0797 22.6133 20.9177 22.6133H5.2227C4.0607 22.6133 3.5277 22.0253 3.5277 20.9313Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M-0.0003 21.5473C-0.0003 24.8013 1.8457 26.6603 5.0997 26.6603H21.5607C24.8007 26.6603 26.6597 24.8013 26.6597 21.5473V5.1133C26.6597 1.8593 24.8147 0.0003 21.5607 0.0003H5.0997C1.8457 0.0003 -0.0003 1.8593 -0.0003 5.1133ZM4.2247 20.9723V13.3303H22.4217V20.9723C22.4217 21.9293 21.9847 22.4223 20.9587 22.4223H5.6877C4.6617 22.4223 4.2247 21.9293 4.2247 20.9723Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M-0.0003 20.7263C-0.0003 23.3923 1.3677 24.7593 3.9927 24.7593H20.7537C23.3927 24.7593 24.7597 23.3923 24.7597 20.7263V4.0333C24.7597 1.3673 23.4067 0.0003 20.7537 0.0003H3.9927C1.3537 0.0003 -0.0003 1.3673 -0.0003 4.0333ZM1.6957 20.6853V12.3733H23.0647V20.6853C23.0647 22.2033 22.2437 23.0643 20.6717 23.0643H4.0877C2.5017 23.0643 1.6957 22.2033 1.6957 20.6853Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M-0.0003 21.0413C-0.0003 23.9943 1.5177 25.5253 4.4437 25.5253H21.0817C23.9937 25.5253 25.5257 23.9943 25.5257 21.0413V4.4843C25.5257 1.5453 24.0077 0.0003 21.0817 0.0003H4.4437C1.5177 0.0003 -0.0003 1.5453 -0.0003 4.4843ZM2.6797 20.8773V12.7563H22.8457V20.8773C22.8457 22.1343 22.1757 22.8453 20.8497 22.8453H4.6617C3.3357 22.8453 2.6797 22.1343 2.6797 20.8773Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M-0.0003 20.8773C-0.0003 23.7483 1.4217 25.1703 4.2387 25.1703H20.9317C23.7477 25.1703 25.1697 23.7483 25.1697 20.8773V4.2933C25.1697 1.4353 23.7617 0.0003 20.9317 0.0003H4.2387C1.4087 0.0003 -0.0003 1.4353 -0.0003 4.2933ZM2.2017 20.8493V12.5923H22.9687V20.8493C22.9687 22.2033 22.2437 22.9683 20.8227 22.9683H4.3477C2.9257 22.9683 2.2017 22.2033 2.2017 20.8493Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M-0.0003 21.1643C-0.0003 24.1853 1.5997 25.7853 4.5937 25.7853H21.1917C24.1857 25.7853 25.7847 24.1853 25.7847 21.1643V4.6343C25.7847 1.6133 24.1997 0.0003 21.1917 0.0003H4.5937C1.5857 0.0003 -0.0003 1.6133 -0.0003 4.6343ZM3.0487 20.9043V12.8923H22.7497V20.9043C22.7497 22.0803 22.1347 22.7503 20.8767 22.7503H4.9087C3.6507 22.7503 3.0487 22.0803 3.0487 20.9043Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M-0.0003 20.5213C-0.0003 22.9413 1.2847 24.1993 3.6777 24.1993H20.5217C22.9137 24.1993 24.1997 22.9413 24.1997 20.5213V3.6913C24.1997 1.2713 22.9417 0.0003 20.5217 0.0003H3.6777C1.2577 0.0003 -0.0003 1.2713 -0.0003 3.6913ZM1.0117 20.4803V12.0993H23.1877V20.4803C23.1877 22.2033 22.2577 23.1873 20.4807 23.1873H3.7327C1.9417 23.1873 1.0117 22.2033 1.0117 20.4803Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.92578125"
          className={className}
        >
          <path
            d="              M-0.0003 20.4123C-0.0003 22.7093 1.2577 23.9263 3.5137 23.9263H20.4117C22.6677 23.9263 23.9257 22.7093 23.9257 20.4123V3.5133C23.9257 1.2173 22.6957 0.0003 20.4117 0.0003H3.5137C1.2167 0.0003 -0.0003 1.2173 -0.0003 3.5133ZM0.6697 20.3713V11.9633H23.2557V20.3713C23.2557 22.2033 22.2717 23.2563 20.3707 23.2563H3.5407C1.6547 23.2563 0.6697 22.2033 0.6697 20.3713Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}