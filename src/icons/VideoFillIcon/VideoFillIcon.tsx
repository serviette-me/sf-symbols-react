import { IconProps } from "../../types"

export default function VideoFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.587890625 23.8984375"
          className={className}
        >
          <path
            d="              M5.701 23.8983H18.854C22.586 23.8983 24.555 21.9293 24.555 18.4573V5.4413C24.555 1.9683 22.6 0.0003 18.867 0.0003H5.701C1.969 0.0003 0 1.9683 0 5.4553V18.8813C0 22.3533 1.955 23.8983 5.701 23.8983ZM27.125 17.8003L30.611 20.7403C31.555 21.5333 32.361 22.0663 33.264 22.0663C34.59 22.0663 35.588 21.1773 35.588 19.6873V4.5523C35.588 3.0623 34.59 2.1743 33.264 2.1743C32.348 2.1743 31.568 2.7073 30.611 3.5003L27.125 6.4393Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.576171875 23.05078125"
          className={className}
        >
          <path
            d="              M5.0452 23.0505H18.9632C22.2172 23.0505 24.0082 21.2735 24.0082 18.1565V4.8805C24.0082 1.7775 22.2852 0.0005 19.0452 0.0005H5.0452C1.8732 0.0005 0.0002 1.7775 0.0002 4.8945V18.3755C0.0002 21.4925 1.8052 23.0505 5.0452 23.0505ZM26.2362 16.4745L30.4612 20.0975C31.1722 20.6855 31.8422 21.0825 32.5392 21.0825C33.7282 21.0825 34.5762 20.2615 34.5762 18.9495V4.2655C34.5762 2.9665 33.7282 2.1325 32.5392 2.1325C31.8422 2.1325 31.1722 2.5295 30.4612 3.1305L26.2362 6.7535Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.109375 23.48828125"
          className={className}
        >
          <path
            d="              M5.4003 23.4882H18.9083C22.4083 23.4882 24.2953 21.6152 24.2953 18.3062V5.1682C24.2953 1.8732 22.4633 0.0002 18.9493 0.0002H5.4003C1.9273 0.0002 0.0003 1.8732 0.0003 5.1812V18.6352C0.0003 21.9432 1.8863 23.4882 5.4003 23.4882ZM26.7013 17.1722L30.5433 20.4392C31.3773 21.1362 32.1153 21.6012 32.9353 21.6012C34.1933 21.6012 35.1093 20.7402 35.1093 19.3322V4.4162C35.1093 3.0082 34.1933 2.1602 32.9353 2.1602C32.1153 2.1602 31.3773 2.6252 30.5433 3.3222L26.7013 6.5902Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.345703125 22.12109375"
          className={className}
        >
          <path
            d="              M4.4162 22.1206H19.3322C22.1212 22.1206 23.7342 20.5356 23.7342 17.7456V4.3746C23.7342 1.5856 22.2172 -0.0004 19.4142 -0.0004H4.4162C1.6952 -0.0004 0.0002 1.5856 0.0002 4.3746V17.7456C0.0002 20.5356 1.6132 22.1206 4.4162 22.1206ZM25.3342 15.0796L30.2692 19.2496C30.7482 19.6466 31.2542 19.9066 31.7602 19.9066C32.7172 19.9066 33.3462 19.2086 33.3462 18.1426V3.9786C33.3462 2.9116 32.7172 2.2146 31.7602 2.2146C31.2542 2.2146 30.7482 2.4746 30.2692 2.8706L25.3342 7.0136Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.919921875 22.50390625"
          className={className}
        >
          <path
            d="              M4.6214 22.504H19.0314C21.9574 22.504 23.6524 20.85 23.6524 17.978V4.525C23.6524 1.654 22.0664 0 19.1404 0H4.6214C1.7914 0 0.0004 1.654 0.0004 4.525V18.047C0.0004 20.932 1.6954 22.504 4.6214 22.504ZM25.6484 15.613L30.3514 19.674C30.9124 20.152 31.5004 20.453 32.0604 20.453C33.1684 20.453 33.9204 19.66 33.9204 18.471V4.088C33.9204 2.898 33.1684 2.105 32.0604 2.105C31.5004 2.105 30.9124 2.406 30.3514 2.898L25.6484 6.945Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.564453125 22.203125"
          className={className}
        >
          <path
            d="              M4.3887 22.2027H19.0727C21.8207 22.2027 23.4607 20.6177 23.4607 17.8687V4.3207C23.4607 1.5857 21.9567 -0.0003 19.2087 -0.0003H4.3887C1.7637 -0.0003 -0.0003 1.5857 -0.0003 4.3207V17.8687C-0.0003 20.6177 1.6407 22.2027 4.3887 22.2027ZM25.3207 15.1347L30.2967 19.4417C30.7617 19.8517 31.3087 20.1117 31.8007 20.1117C32.8667 20.1117 33.5647 19.3317 33.5647 18.2107V3.9927C33.5647 2.8707 32.8667 2.0917 31.8007 2.0917C31.3087 2.0917 30.7617 2.3517 30.2967 2.7617L25.3207 7.0547Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.20703125 22.736328125"
          className={className}
        >
          <path
            d="              M4.7988 22.7361H19.0038C22.0668 22.7361 23.8028 21.0411 23.8028 18.0601V4.6891C23.8028 1.7091 22.1618 0.0001 19.0998 0.0001H4.7988C1.8318 0.0001 -0.0002 1.7091 -0.0002 4.6891V18.1971C-0.0002 21.1781 1.7368 22.7361 4.7988 22.7361ZM25.8948 15.9821L30.3928 19.8511C31.0218 20.3851 31.6508 20.7401 32.2658 20.7401C33.4138 20.7401 34.2068 19.9201 34.2068 18.6891V4.1701C34.2068 2.9391 33.4138 2.1191 32.2658 2.1191C31.6368 2.1191 31.0218 2.4751 30.3928 2.9941L25.8948 6.8631Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.0859375 22.01171875"
          className={className}
        >
          <path
            d="              M4.457 22.012H19.674C22.531 22.012 24.117 20.439 24.117 17.582V4.43C24.117 1.572 22.559 0 19.701 0H4.457C1.613 0 0 1.572 0 4.43V17.582C0 20.439 1.586 22.012 4.457 22.012ZM25.348 15.012L30.242 18.99C30.734 19.373 31.172 19.619 31.691 19.619C32.525 19.619 33.086 19.031 33.086 18.033V3.965C33.086 2.981 32.525 2.379 31.691 2.379C31.172 2.379 30.734 2.625 30.242 3.022L25.348 6.973Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.935546875 21.95703125"
          className={className}
        >
          <path
            d="              M4.4711 21.9566H19.8381C22.7361 21.9566 24.3091 20.3846 24.3091 17.4996V4.4566C24.3091 1.5726 22.7361 -0.0004 19.8381 -0.0004H4.4711C1.5591 -0.0004 0.0001 1.5726 0.0001 4.4566V17.4996C0.0001 20.3846 1.5721 21.9566 4.4711 21.9566ZM25.3341 14.9706L30.2151 18.8536C30.7071 19.2366 31.1311 19.4826 31.6501 19.4826C32.4161 19.4826 32.9351 18.9496 32.9351 17.9926V3.9646C32.9351 3.0076 32.4161 2.4746 31.6501 2.4746C31.1311 2.4746 30.7071 2.7206 30.2151 3.1036L25.3341 6.9456Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}