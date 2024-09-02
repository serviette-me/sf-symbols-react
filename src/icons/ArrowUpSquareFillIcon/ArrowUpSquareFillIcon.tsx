import { IconProps } from "../../types"

export default function ArrowUpSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM13.7267 21.3013C12.4827 21.3013 11.5117 20.4533 11.5117 19.2773V14.1503L11.7307 11.4843L11.0467 12.6192L9.8297 14.1503C9.5297 14.5333 8.9957 14.7653 8.4767 14.7653C7.3827 14.7653 6.6587 14.0683 6.6587 13.0563C6.6587 12.4823 6.8087 12.0993 7.2457 11.6213L11.8807 6.5763C12.3597 6.0433 12.9747 5.7692 13.7267 5.7692C14.4787 5.7692 15.0937 6.0433 15.5727 6.5763L20.2067 11.6213C20.6447 12.0993 20.7947 12.4823 20.7947 13.0563C20.7947 14.0683 20.0567 14.7653 18.9767 14.7653C18.4707 14.7653 17.9377 14.5333 17.6227 14.1503L16.4197 12.7013L15.7227 11.4843L15.9417 14.1503V19.2773C15.9417 20.4533 14.9707 21.3013 13.7267 21.3013Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM13.1657 20.4667C12.2367 20.4667 11.5257 19.8237 11.5257 18.9217V12.8517L11.6897 10.0217L10.6507 11.4297L9.2017 13.0427C8.9547 13.3297 8.5587 13.5077 8.1487 13.5077C7.3147 13.5077 6.7267 12.9337 6.7267 12.1407C6.7267 11.7027 6.8497 11.3887 7.1637 11.0467L11.8397 6.1937C12.2227 5.7827 12.6327 5.5917 13.1657 5.5917C13.6997 5.5917 14.1227 5.7827 14.5057 6.1937L19.1677 11.0467C19.4827 11.3887 19.6187 11.7027 19.6187 12.1407C19.6187 12.9337 19.0177 13.5077 18.1837 13.5077C17.7867 13.5077 17.3767 13.3437 17.1307 13.0427L15.7087 11.4707L14.6427 10.0077L14.8067 12.8517V18.9217C14.8067 19.8237 14.0957 20.4667 13.1657 20.4667Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM13.4667 20.9045C12.3597 20.9045 11.5117 20.1665 11.5117 19.1135V13.5355L11.7167 10.8005L10.8557 12.0725L9.5297 13.6305C9.2697 13.9725 8.7907 14.1775 8.3267 14.1775C7.3557 14.1775 6.6857 13.5355 6.6857 12.6195C6.6857 12.1135 6.8357 11.7715 7.2047 11.3615L11.8677 6.3985C12.2907 5.9195 12.8107 5.6875 13.4667 5.6875C14.1097 5.6875 14.6427 5.9335 15.0667 6.3985L19.7147 11.3615C20.0977 11.7715 20.2347 12.1135 20.2347 12.6195C20.2347 13.5355 19.5647 14.1775 18.6077 14.1775C18.1427 14.1775 17.6777 13.9725 17.3907 13.6305L16.0777 12.1265L15.2027 10.8005L15.4087 13.5355V19.1135C15.4087 20.1665 14.5607 20.9045 13.4667 20.9045Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM12.4007 19.2915C11.9087 19.2915 11.5667 18.9495 11.5667 18.4575V10.4045L11.6617 7.8205L10.1177 9.5425L8.1207 11.5395C7.9707 11.7035 7.7657 11.7855 7.5467 11.7855C7.0817 11.7855 6.7537 11.4435 6.7537 11.0055C6.7537 10.7735 6.8227 10.5825 6.9727 10.4315L11.7717 5.6465C11.9907 5.4275 12.1677 5.3455 12.4007 5.3455C12.6327 5.3455 12.8247 5.4415 13.0297 5.6465L17.8277 10.4315C17.9787 10.5825 18.0607 10.7735 18.0607 11.0055C18.0607 11.4435 17.7187 11.7855 17.2537 11.7855C17.0217 11.7855 16.8297 11.7035 16.6657 11.5395L14.6837 9.5425L13.1387 7.8065L13.2207 10.4045V18.4575C13.2207 18.9495 12.8787 19.2915 12.4007 19.2915Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM12.8107 19.9203C12.0727 19.9203 11.5387 19.4143 11.5387 18.6893V12.0043L11.6757 9.0783L10.3907 10.6643L8.8047 12.3183C8.5997 12.5503 8.2847 12.6873 7.9437 12.6873C7.2737 12.6873 6.7817 12.2093 6.7817 11.5393C6.7817 11.1973 6.8767 10.9243 7.1097 10.6773L11.8127 5.9333C12.1267 5.6053 12.4277 5.4553 12.8107 5.4553C13.2067 5.4553 13.5077 5.6053 13.8227 5.9333L18.5117 10.6773C18.7437 10.9243 18.8537 11.1973 18.8537 11.5393C18.8537 12.2093 18.3477 12.6873 17.6777 12.6873C17.3357 12.6873 17.0347 12.5643 16.8167 12.3183L15.2437 10.6773L13.9457 9.0643L14.0817 12.0043V18.6893C14.0817 19.4143 13.5487 19.9203 12.8107 19.9203Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM12.6057 19.6195C11.9907 19.6195 11.5387 19.1815 11.5387 18.5525V11.5395L11.6617 8.5445L10.2537 10.2405L8.5857 11.9215C8.3947 12.1135 8.1347 12.2365 7.8337 12.2365C7.2457 12.2365 6.8087 11.7855 6.8087 11.2105C6.8087 10.9105 6.8907 10.6645 7.0817 10.4725L11.7847 5.7835C12.0727 5.4965 12.3047 5.3865 12.6057 5.3865C12.9337 5.3865 13.1657 5.5095 13.4397 5.7835L18.1287 10.4725C18.3337 10.6645 18.4297 10.9105 18.4297 11.2105C18.4297 11.7855 17.9787 12.2365 17.3907 12.2365C17.0897 12.2365 16.8297 12.1265 16.6387 11.9215L14.9847 10.2405L13.5487 8.5315L13.6717 11.5395V18.5525C13.6717 19.1815 13.2347 19.6195 12.6057 19.6195Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM12.9607 20.152C12.1407 20.152 11.5387 19.592 11.5387 18.785V12.373L11.6897 9.488L10.4997 11.006L8.9827 12.633C8.7497 12.893 8.4087 13.043 8.0387 13.043C7.2867 13.043 6.7537 12.523 6.7537 11.799C6.7537 11.416 6.8637 11.129 7.1367 10.842L11.8267 6.043C12.1677 5.674 12.5237 5.51 12.9607 5.51C13.4257 5.51 13.7817 5.687 14.1227 6.043L18.7987 10.842C19.0587 11.129 19.1817 11.416 19.1817 11.799C19.1817 12.523 18.6347 13.043 17.8967 13.043C17.5277 13.043 17.1857 12.893 16.9527 12.633L15.4357 11.033L14.2457 9.475L14.3967 12.373V18.785C14.3967 19.592 13.7817 20.152 12.9607 20.152Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM12.1137 18.8264C11.8127 18.8264 11.5937 18.6344 11.5937 18.3204V8.9144L11.6487 6.8494L9.9527 8.5864L7.5197 11.0194C7.4097 11.1424 7.3007 11.1834 7.1507 11.1834C6.8767 11.1834 6.6717 10.9784 6.6717 10.7184C6.6717 10.5824 6.7267 10.4724 6.8227 10.3774L11.7437 5.4414C11.8677 5.3184 11.9767 5.2634 12.1137 5.2634C12.2497 5.2634 12.3727 5.3184 12.4827 5.4414L17.4177 10.3774C17.5137 10.4724 17.5687 10.5824 17.5687 10.7184C17.5687 10.9784 17.3637 11.1834 17.0897 11.1834C16.9397 11.1834 16.8297 11.1424 16.7207 11.0194L14.2867 8.5864L12.5777 6.8224L12.6327 8.9144V18.3204C12.6327 18.6344 12.4277 18.8264 12.1137 18.8264Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM11.9627 18.594C11.7717 18.594 11.6207 18.457 11.6207 18.238V8.135L11.6487 6.344L9.8577 8.107L7.2047 10.76C7.1227 10.842 7.0547 10.883 6.9587 10.883C6.7677 10.883 6.6307 10.746 6.6307 10.582C6.6307 10.473 6.6717 10.404 6.7407 10.336L11.7307 5.332C11.7987 5.264 11.8807 5.223 11.9627 5.223C12.0447 5.223 12.1407 5.264 12.1957 5.332L17.2127 10.336C17.2817 10.404 17.3227 10.473 17.3227 10.582C17.3227 10.746 17.1857 10.883 16.9937 10.883C16.8987 10.883 16.8297 10.842 16.7477 10.76L14.0957 8.107L12.2907 6.33L12.3187 8.135V18.238C12.3187 18.457 12.1817 18.594 11.9627 18.594Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}