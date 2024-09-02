import { IconProps } from "../../types"

export default function LockSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM8.6407 18.8813V13.6993C8.6407 12.7973 8.9827 12.2633 9.6387 12.0582V10.7733C9.6387 8.0663 11.2927 6.2482 13.7267 6.2482C16.1737 6.2482 17.8277 8.0663 17.8277 10.7733V12.0863C18.4707 12.2633 18.7987 12.7973 18.7987 13.6993V18.8813C18.7987 20.0973 18.2517 20.6313 17.1587 20.6313H10.3087C9.1877 20.6313 8.6407 20.0973 8.6407 18.8813ZM12.1957 11.9633H15.2577V10.6913C15.2577 9.5023 14.6567 8.7633 13.7127 8.7633C12.7837 8.7633 12.1957 9.5153 12.1957 10.6913Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM8.0797 18.5257V13.1247C8.0797 12.1817 8.4497 11.6617 9.1877 11.5387V10.0627C9.1877 7.4097 10.7867 5.6327 13.1657 5.6327C15.5317 5.6327 17.1447 7.4097 17.1447 10.0627V11.5387C17.8687 11.6617 18.2517 12.1817 18.2517 13.1247V18.5257C18.2517 19.6597 17.7327 20.1657 16.6937 20.1657H9.6247C8.5857 20.1657 8.0797 19.6597 8.0797 18.5257ZM11.1977 11.4847H15.1207V9.9397C15.1207 8.5177 14.3417 7.6017 13.1527 7.6017C11.9767 7.6017 11.1977 8.5317 11.1977 9.9397Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM8.3807 18.7165V13.4255C8.3807 12.5095 8.7227 11.9905 9.4197 11.8265V10.4455C9.4197 7.7655 11.0607 5.9605 13.4527 5.9605C15.8727 5.9605 17.4997 7.7655 17.4997 10.4455V11.8395C18.1837 11.9905 18.5387 12.5095 18.5387 13.4255V18.7165C18.5387 19.8925 18.0057 20.4255 16.9397 20.4255H9.9937C8.9007 20.4255 8.3807 19.8925 8.3807 18.7165ZM11.7307 11.7445H15.1897V10.3355C15.1897 9.0375 14.5057 8.2165 13.4397 8.2165C12.4007 8.2165 11.7307 9.0505 11.7307 10.3355Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM7.3277 17.9375V12.2775C7.3277 11.2385 7.7657 10.7465 8.6547 10.7185V8.9275C8.6547 6.4535 10.1717 4.8125 12.3867 4.8125C14.6017 4.8125 16.1057 6.4535 16.1057 8.9275V10.7185C17.0077 10.7465 17.4457 11.2385 17.4457 12.2775V17.9375C17.4457 19.0175 16.9667 19.5095 15.9827 19.5095H8.7907C7.8067 19.5095 7.3277 19.0175 7.3277 17.9375ZM9.8707 10.7055H14.9027V8.8185C14.9027 7.1235 13.8907 5.9885 12.3867 5.9885C10.8827 5.9885 9.8707 7.1235 9.8707 8.8185Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM7.7107 18.2793V12.7563C7.7107 11.7713 8.1077 11.2793 8.9007 11.1973V9.5973C8.9007 6.9863 10.4727 5.2223 12.7967 5.2223C15.1207 5.2223 16.6937 6.9863 16.6937 9.5973V11.1973C17.4867 11.2793 17.8827 11.7713 17.8827 12.7563V18.2793C17.8827 19.3593 17.4047 19.8653 16.4067 19.8653H9.1877C8.1897 19.8653 7.7107 19.3593 7.7107 18.2793ZM10.5687 11.1703H15.0257V9.4473C15.0257 7.8883 14.1367 6.8493 12.7967 6.8493C11.4567 6.8493 10.5687 7.8883 10.5687 9.4473Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM7.5057 18.1425V12.5375C7.5057 11.5395 7.9157 11.0465 8.7367 10.9925V9.3375C8.7367 6.7405 10.2947 5.0035 12.5917 5.0035C14.8887 5.0035 16.4477 6.7405 16.4477 9.3375V10.9925C17.2817 11.0465 17.6917 11.5395 17.6917 12.5375V18.1425C17.6917 19.1955 17.2267 19.6875 16.2427 19.6875H8.9417C7.9707 19.6875 7.5057 19.1955 7.5057 18.1425ZM10.2127 10.9785H14.9707V9.1735C14.9707 7.5335 14.0137 6.4255 12.5917 6.4255C11.1697 6.4255 10.2127 7.5335 10.2127 9.1735Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.8617 18.389V12.906C7.8617 11.949 8.2577 11.443 9.0237 11.348V9.803C9.0237 7.164 10.6097 5.4 12.9477 5.4C15.2987 5.4 16.8847 7.164 16.8847 9.803V11.348C17.6507 11.443 18.0467 11.949 18.0467 12.906V18.389C18.0467 19.496 17.5547 19.988 16.5297 19.988H9.3787C8.3537 19.988 7.8617 19.496 7.8617 18.389ZM10.8417 11.307H15.0667V9.666C15.0667 8.162 14.2187 7.178 12.9477 7.178C11.6757 7.178 10.8417 8.162 10.8417 9.666Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM7.0817 17.6504V11.9224C7.0817 10.8284 7.5747 10.3364 8.5587 10.3224V8.3674C8.5587 6.0704 9.9807 4.5394 12.1137 4.5394C14.2327 4.5394 15.6677 6.0704 15.6677 8.3674V10.3224C16.6527 10.3364 17.1307 10.8284 17.1307 11.9224V17.6504C17.1307 18.7714 16.6387 19.2634 15.6267 19.2634H8.5997C7.5877 19.2634 7.0817 18.7714 7.0817 17.6504ZM9.4197 10.3224H14.8067V8.3264C14.8067 6.5624 13.7127 5.3864 12.1137 5.3864C10.4997 5.3864 9.4197 6.5624 9.4197 8.3264Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM6.9587 17.5V11.744C6.9587 10.609 7.4647 10.117 8.5037 10.117V8.066C8.5037 5.865 9.8987 4.402 11.9627 4.402C14.0407 4.402 15.4357 5.865 15.4357 8.066V10.117C16.4607 10.117 16.9807 10.609 16.9807 11.744V17.5C16.9807 18.635 16.4747 19.127 15.4357 19.127H8.5037C7.4647 19.127 6.9587 18.635 6.9587 17.5ZM9.1877 10.117H14.7517V8.066C14.7517 6.275 13.6307 5.086 11.9627 5.086C10.3087 5.086 9.1877 6.275 9.1877 8.066Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
