import { IconProps } from "../../types"

export default function HeartSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.4587 7.5742C12.0857 7.5742 13.1657 8.5173 13.7127 9.4332C14.2457 8.5173 15.3397 7.5742 16.9527 7.5742C19.0997 7.5742 20.8637 9.2563 20.8637 11.8532C20.8637 16.4883 15.4087 19.6743 14.6427 20.0703C14.3687 20.2073 13.9997 20.4123 13.7127 20.4123C13.4257 20.4123 13.0427 20.2073 12.7837 20.0703C12.0317 19.6463 6.5487 16.4883 6.5487 11.8532C6.5487 9.2563 8.3267 7.5742 10.4587 7.5742Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM9.8297 6.9587C11.4027 6.9587 12.5237 7.8617 13.1527 8.9687C13.7677 7.8617 14.9157 6.9587 16.4607 6.9587C18.7307 6.9587 20.4807 8.7087 20.4807 11.2517C20.4807 15.4217 15.7777 18.7027 13.9727 19.8377C13.7127 19.9747 13.3987 20.1657 13.1657 20.1657C12.9337 20.1657 12.5917 19.9747 12.3317 19.8377C10.5137 18.7027 5.8247 15.4217 5.8247 11.2517C5.8247 8.7087 7.5747 6.9587 9.8297 6.9587Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM10.1717 7.2875C11.7577 7.2875 12.8657 8.2165 13.4397 9.2145C14.0277 8.2165 15.1347 7.2875 16.7207 7.2875C18.9217 7.2875 20.6857 9.0095 20.6857 11.5805C20.6857 15.9965 15.5857 19.2225 14.3277 19.9745C14.0547 20.0975 13.7127 20.3025 13.4527 20.3025C13.1937 20.3025 12.8247 20.0975 12.5647 19.9745C11.3067 19.2085 6.2067 15.9965 6.2067 11.5805C6.2067 9.0095 7.9707 7.2875 10.1717 7.2875Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM9.0237 6.1525C10.5277 6.1525 11.7027 7.0415 12.3867 8.2575C13.0567 7.0415 14.2597 6.1525 15.7367 6.1525C18.0747 6.1525 19.7837 7.9295 19.7837 10.3495C19.7837 14.1505 15.6137 17.4865 12.9887 19.2635C12.7967 19.4005 12.5647 19.5505 12.4007 19.5505C12.2497 19.5505 11.9907 19.4005 11.7717 19.2635C9.0917 17.5685 4.9907 14.1505 4.9907 10.3495C4.9907 7.9295 6.6857 6.1525 9.0237 6.1525Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM9.4337 6.5623C10.9647 6.5623 12.1137 7.4373 12.7967 8.6543C13.4667 7.4373 14.6287 6.5623 16.1597 6.5623C18.4977 6.5623 20.2347 8.3403 20.2347 10.8693C20.2347 14.7243 16.0237 18.0603 13.5347 19.6743C13.3027 19.8243 13.0157 20.0023 12.8107 20.0023C12.6187 20.0023 12.2907 19.8243 12.0447 19.6743C9.5427 18.0883 5.3457 14.7243 5.3457 10.8693C5.3457 8.3403 7.0817 6.5623 9.4337 6.5623Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM9.2017 6.3305C10.7187 6.3305 11.8807 7.1915 12.5917 8.4765C13.3027 7.1915 14.4787 6.3305 15.9827 6.3305C18.3617 6.3305 20.0977 8.1345 20.0977 10.6365C20.0977 14.3285 16.1597 17.7055 13.2887 19.5785C13.0707 19.7425 12.8107 19.9195 12.6187 19.9195C12.4417 19.9195 12.1267 19.7285 11.8807 19.5785C8.9957 17.7465 5.0857 14.3285 5.0857 10.6365C5.0857 8.1345 6.8087 6.3305 9.2017 6.3305Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM9.5977 6.74C11.1567 6.74 12.2907 7.629 12.9477 8.791C13.6037 7.629 14.7517 6.74 16.2837 6.74C18.5937 6.74 20.3437 8.504 20.3437 11.033C20.3437 15.025 15.9137 18.334 13.7267 19.742C13.4807 19.893 13.1797 20.084 12.9607 20.084C12.7557 20.084 12.4277 19.893 12.1677 19.742C9.9667 18.361 5.5507 15.025 5.5507 11.033C5.5507 8.504 7.3007 6.74 9.5977 6.74Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM8.8047 5.8924C10.2677 5.8924 11.4847 6.8224 12.1137 7.9434C12.7427 6.8224 13.9727 5.8924 15.4087 5.8924C17.6917 5.8924 19.3597 7.6294 19.3597 9.9394C19.3597 13.8904 14.9027 17.1584 12.5917 18.8394C12.4277 18.9494 12.2367 19.0454 12.1137 19.0454C11.9907 19.0454 11.7847 18.9354 11.6347 18.8394C9.2147 17.3224 4.8537 13.8904 4.8537 9.9394C4.8537 7.6294 6.5217 5.8924 8.8047 5.8924Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM8.6957 5.756C10.1307 5.756 11.3617 6.699 11.9627 7.779C12.5777 6.699 13.8227 5.756 15.2437 5.756C17.4997 5.756 19.1547 7.465 19.1547 9.734C19.1547 13.754 14.5337 16.994 12.3867 18.621C12.2497 18.717 12.0727 18.785 11.9627 18.785C11.8677 18.785 11.6897 18.703 11.5527 18.621C9.2837 17.186 4.7847 13.754 4.7847 9.734C4.7847 7.465 6.4397 5.756 8.6957 5.756Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
