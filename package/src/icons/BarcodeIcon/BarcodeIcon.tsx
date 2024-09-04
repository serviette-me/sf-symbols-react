import { IconProps } from "../../types"
import React from "react"

export default function BarcodeIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.041015625 22.17578125"
          className={className}
        >
          <path
            d="              M-0.0003 22.176H2.3517V0H-0.0003ZM4.6207 22.176H5.9747V0H4.6207ZM8.2167 22.176H12.0857V0H8.2167ZM13.4937 22.176H15.9277V0H13.4937ZM17.3767 22.176H21.2047V0H17.3767ZM22.3677 22.176H25.3617V0H22.3677ZM26.1137 22.176H28.0407V0H26.1137Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.2890625 21.587890625"
          className={className}
        >
          <path
            d="              M-0.0003 21.5882H2.2837V0.0002H-0.0003ZM4.5117 21.5882H5.8247V0.0002H4.5117ZM7.9977 21.5882H11.7577V0.0002H7.9977ZM13.1247 21.5882H15.5037V0.0002H13.1247ZM16.9257 21.5882H20.6307V0.0002H16.9257ZM21.7657 21.5882H24.6777V0.0002H21.7657ZM25.4027 21.5882H27.2887V0.0002H25.4027Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.685546875 21.90234375"
          className={className}
        >
          <path
            d="              M-0.0003 21.9023H2.3247V0.0003H-0.0003ZM4.5667 21.9023H5.9067V0.0003H4.5667ZM8.1207 21.9023H11.9217V0.0003H8.1207ZM13.3167 21.9023H15.7227V0.0003H13.3167ZM17.1587 21.9023H20.9317V0.0003H17.1587ZM22.0797 21.9023H25.0337V0.0003H22.0797ZM25.7717 21.9023H27.6857V0.0003H25.7717Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.1953125 20.7265625"
          className={className}
        >
          <path
            d="              M-0.0003 20.7264H2.1877V0.0004H-0.0003ZM4.3337 20.7264H5.5917V0.0004H4.3337ZM7.6837 20.7264H11.2797V0.0004H7.6837ZM12.5917 20.7264H14.8747V0.0004H12.5917ZM16.2427 20.7264H19.8107V0.0004H16.2427ZM20.9047 20.7264H23.6937V0.0004H20.9047ZM24.3907 20.7264H26.1957V0.0004H24.3907Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 21.205078125"
          className={className}
        >
          <path
            d="              M-0.0003 21.2048H2.2427V-0.0002H-0.0003ZM4.4297 21.2048H5.7147V-0.0002H4.4297ZM7.8617 21.2048H11.5527V-0.0002H7.8617ZM12.8927 21.2048H15.2307V-0.0002H12.8927ZM16.6247 21.2048H20.2757V-0.0002H16.6247ZM21.3827 21.2048H24.2407V-0.0002H21.3827ZM24.9647 21.2048H26.8107V-0.0002H24.9647Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.537109375 21"
          className={className}
        >
          <path
            d="              M-0.0003 21.0001H2.2287V0.0001H-0.0003ZM4.3887 21.0001H5.6597V0.0001H4.3887ZM7.7927 21.0001H11.4297V0.0001H7.7927ZM12.7557 21.0001H15.0797V0.0001H12.7557ZM16.4607 21.0001H20.0707V0.0001H16.4607ZM21.1777 21.0001H24.0077V0.0001H21.1777ZM24.7047 21.0001H26.5367V0.0001H24.7047Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.015625 21.369140625"
          className={className}
        >
          <path
            d="              M-0.0003 21.3688H2.2697V-0.0002H-0.0003ZM4.4567 21.3688H5.7697V-0.0002H4.4567ZM7.9297 21.3688H11.6347V-0.0002H7.9297ZM12.9887 21.3688H15.3397V-0.0002H12.9887ZM16.7477 21.3688H20.4257V-0.0002H16.7477ZM21.5467 21.3688H24.4317V-0.0002H21.5467ZM25.1567 21.3688H27.0157V-0.0002H25.1567Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.744140625 20.37109375"
          className={className}
        >
          <path
            d="              M-0.0003 20.3707H2.1467V-0.0003H-0.0003ZM4.2517 20.3707H5.4957V-0.0003H4.2517ZM7.5467 20.3707H11.0877V-0.0003H7.5467ZM12.3727 20.3707H14.6287V-0.0003H12.3727ZM15.9547 20.3707H19.4687V-0.0003H15.9547ZM20.5347 20.3707H23.2837V-0.0003H20.5347ZM23.9667 20.3707H25.7437V-0.0003H23.9667Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.51171875 20.193359375"
          className={className}
        >
          <path
            d="              M-0.0003 20.193H2.1327V0H-0.0003ZM4.2247 20.193H5.4417V0H4.2247ZM7.4787 20.193H10.9927V0H7.4787ZM12.2637 20.193H14.4927V0H12.2637ZM15.8187 20.193H19.2907V0H15.8187ZM20.3437 20.193H23.0647V0H20.3437ZM23.7477 20.193H25.5117V0H23.7477Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
