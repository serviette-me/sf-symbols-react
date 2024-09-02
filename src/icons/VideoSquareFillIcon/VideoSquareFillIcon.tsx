import { IconProps } from "../../types"

export default function VideoSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM8.7907 18.7993C7.1507 18.7993 6.2757 18.1293 6.2757 16.5973V10.6913C6.2757 9.1873 7.1637 8.3123 8.7907 8.3123H14.7797C16.4197 8.3123 17.2677 9.1873 17.2677 10.6913V16.4203C17.2677 17.9373 16.4067 18.7993 14.7797 18.7993ZM18.1017 16.0513V11.2113L19.7287 9.8573C20.1527 9.5023 20.4937 9.2693 20.8907 9.2693C21.4787 9.2693 21.9157 9.6523 21.9157 10.2953V16.9533C21.9157 17.6093 21.4787 17.9922 20.8907 17.9922C20.4937 17.9922 20.1387 17.7603 19.7287 17.4183Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.7517 18.5387C6.2347 18.5387 5.3727 17.7867 5.3727 16.3237V9.9117C5.3727 8.4487 6.2617 7.6147 7.7517 7.6147H14.5057C16.0367 7.6147 16.8297 8.4487 16.8297 9.9117V16.2417C16.8297 17.6917 15.9957 18.5387 14.4647 18.5387ZM17.6507 15.2717V10.9377L19.8377 9.0777C20.1657 8.8047 20.4937 8.6267 20.8087 8.6267C21.3687 8.6267 21.7657 9.0097 21.7657 9.6247V16.5837C21.7657 17.2127 21.3687 17.5957 20.8087 17.5957C20.4937 17.5957 20.1657 17.4177 19.8377 17.1447Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM8.2987 18.6755C6.7127 18.6755 5.8517 17.9645 5.8517 16.4745V10.3225C5.8517 8.8455 6.7407 7.9845 8.2987 7.9845H14.6567C16.2427 7.9845 17.0627 8.8455 17.0627 10.3225V16.3375C17.0627 17.8285 16.2147 18.6755 14.6287 18.6755ZM17.8827 15.6955V11.0875L19.7837 9.5015C20.1527 9.1735 20.4937 8.9685 20.8497 8.9685C21.4377 8.9685 21.8477 9.3515 21.8477 9.9805V16.7755C21.8477 17.4315 21.4377 17.8145 20.8497 17.8145C20.4937 17.8145 20.1527 17.6095 19.7837 17.2945Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM6.7127 17.8965C5.3187 17.8965 4.4977 17.1035 4.4977 15.7095V8.9965C4.4977 7.6015 5.3597 6.8225 6.7127 6.8225H14.1227C15.5317 6.8225 16.2837 7.6015 16.2837 8.9965V15.7095C16.2837 17.1035 15.4767 17.8965 14.0817 17.8965ZM17.0487 14.2735V10.4315L19.6597 8.2445C19.8927 8.0395 20.1657 7.9295 20.4117 7.9295C20.8907 7.9295 21.2187 8.2715 21.2187 8.8045V15.9005C21.2187 16.4475 20.8907 16.7895 20.4117 16.7895C20.1657 16.7895 19.9067 16.6665 19.6597 16.4745Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM7.0817 18.3473C5.6467 18.3473 4.7987 17.5543 4.7987 16.1463V9.3923C4.7987 7.9703 5.6877 7.1503 7.0817 7.1503H14.3277C15.7907 7.1503 16.5567 7.9703 16.5567 9.3923V16.1193C16.5567 17.5273 15.7227 18.3473 14.2737 18.3473ZM17.3637 14.7793V10.7593L19.9067 8.5723C20.1657 8.3403 20.4807 8.2033 20.7537 8.2033C21.3007 8.2033 21.6697 8.5863 21.6697 9.1743V16.3383C21.6697 16.9393 21.3007 17.3223 20.7537 17.3223C20.4807 17.3223 20.1937 17.1853 19.9067 16.9533Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM6.7127 18.2515C5.3187 18.2515 4.4707 17.4315 4.4707 16.0375V9.1055C4.4707 7.6975 5.3727 6.8905 6.7127 6.8905H14.2327C15.6547 6.8905 16.4067 7.6975 16.4067 9.1055V16.0375C16.4067 17.4315 15.5727 18.2515 14.1637 18.2515ZM17.1997 14.4925V10.6505L19.9477 8.2855C20.1657 8.0935 20.4807 7.9705 20.7267 7.9705C21.2597 7.9705 21.6287 8.3535 21.6287 8.9275V16.2015C21.6287 16.7895 21.2597 17.1855 20.7267 17.1855C20.4807 17.1855 20.1937 17.0625 19.9477 16.8435Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.3687 18.43C5.8927 18.43 5.0447 17.664 5.0447 16.229V9.611C5.0447 8.176 5.9337 7.355 7.3687 7.355H14.4097C15.9007 7.355 16.6797 8.176 16.6797 9.611V16.174C16.6797 17.596 15.8317 18.43 14.3557 18.43ZM17.4867 14.998V10.842L19.8787 8.791C20.1657 8.545 20.4807 8.381 20.7817 8.381C21.3277 8.381 21.7107 8.777 21.7107 9.365V16.447C21.7107 17.062 21.3277 17.445 20.7817 17.445C20.4807 17.445 20.1797 17.281 19.8787 17.035Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM6.7127 17.4184C5.3187 17.4184 4.5527 16.6524 4.5527 15.2714V8.8454C4.5527 7.4644 5.3317 6.6994 6.7127 6.6994H13.9867C15.3807 6.6994 16.1327 7.4644 16.1327 8.8454V15.2714C16.1327 16.6524 15.3677 17.4184 13.9727 17.4184ZM16.8437 13.9724V10.1304L19.2907 8.1484C19.5097 7.9704 19.7427 7.8474 19.9887 7.8474C20.3987 7.8474 20.6717 8.1344 20.6717 8.6274V15.4764C20.6717 15.9824 20.3987 16.2694 19.9887 16.2694C19.7427 16.2694 19.5237 16.1464 19.2907 15.9554Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM6.7267 17.158C5.3317 17.158 4.5797 16.42 4.5797 15.039V8.764C4.5797 7.383 5.3317 6.645 6.7267 6.645H13.9177C15.2987 6.645 16.0507 7.383 16.0507 8.764V15.039C16.0507 16.42 15.2987 17.158 13.9317 17.158ZM16.7477 13.822V9.967L19.0997 8.107C19.3187 7.93 19.5367 7.807 19.7697 7.807C20.1387 7.807 20.3987 8.066 20.3987 8.545V15.272C20.3987 15.736 20.1387 15.996 19.7697 15.996C19.5367 15.996 19.3187 15.873 19.0997 15.695Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
