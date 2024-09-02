import { IconProps } from "../../types"

export default function LocationFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.577856017180153 29.53868085191399"
          className={className}
        >
          <path
            d="              M3.1764 16.8377H12.6104C12.6784 16.8377 12.7194 16.8787 12.7194 16.9477V26.3807C12.7194 30.0037 17.5734 30.7557 19.1184 27.3377L29.0574 5.3947C30.7944 1.5937 27.9364 -1.1953 24.1354 0.5137L2.1924 10.4397C-1.2116 11.9707 -0.4736 16.8247 3.1764 16.8377Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.684571037062476 27.619540914522673"
          className={className}
        >
          <path
            d="              M2.4897 15.2594L12.1967 15.2874C12.3197 15.2874 12.3747 15.3414 12.3747 15.4784L12.3877 25.1304C12.3877 27.9744 16.0517 28.5894 17.2827 25.8824L27.2907 4.0484C28.6167 1.1504 26.4017 -0.9006 23.5577 0.3984L1.6557 10.4334C-0.9143 11.5954 -0.3813 15.2594 2.4897 15.2594Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.688908650025922 28.633187846625276"
          className={className}
        >
          <path
            d="              M2.8527 16.0866L12.4087 16.1006C12.5047 16.1006 12.5597 16.1546 12.5597 16.2506V25.7936C12.5597 29.0476 16.8527 29.7316 18.2467 26.6546L28.2277 4.7666C29.7727 1.3896 27.2157 -1.0584 23.8657 0.4596L1.9367 10.4406C-1.0713 11.7936 -0.4293 16.0866 2.8527 16.0866Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.719487247677158 25.59491268022421"
          className={className}
        >
          <path
            d="              M1.4591 13.3501L12.0551 13.3911C12.2191 13.3911 12.2881 13.4601 12.2881 13.6241L12.3151 24.1511C12.3151 25.8061 14.3111 26.1471 15.0361 24.6021L25.4951 2.2221C26.2601 0.5671 24.9481 -0.4849 23.4031 0.2251L0.9131 10.6981C-0.5229 11.3681 -0.2089 13.3371 1.4591 13.3501Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.485709478968776 26.380881938611036"
          className={className}
        >
          <path
            d="              M2.0536 14.2564L11.9246 14.2974C12.1026 14.2974 12.1706 14.3524 12.1706 14.5304L12.1846 24.3464C12.1846 26.6574 15.0696 27.1904 16.1086 24.9484L26.1706 3.1824C27.2376 0.8724 25.4326 -0.7136 23.1906 0.3254L1.3156 10.4154C-0.7354 11.3584 -0.3114 14.2434 2.0536 14.2564Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.810605821367574 25.691996040785313"
          className={className}
        >
          <path
            d="              M1.8078 13.6956L11.7748 13.7366C11.9798 13.7366 12.0488 13.8046 12.0488 14.0096L12.0758 23.8946C12.0758 25.9316 14.5228 26.4096 15.4388 24.4276L25.5428 2.7026C26.4588 0.7066 24.8858 -0.6054 22.9718 0.2826L1.1248 10.4136C-0.6252 11.2206 -0.2842 13.6816 1.8078 13.6956Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.006250904701417 26.920053366353976"
          className={className}
        >
          <path
            d="              M2.2475 14.696L12.0365 14.724C12.2005 14.724 12.2555 14.778 12.2555 14.943L12.2825 24.691C12.2825 27.234 15.4955 27.794 16.6165 25.36L26.6515 3.568C27.8415 0.997 25.8585 -0.794 23.3435 0.355L1.4545 10.431C-0.8145 11.47 -0.3365 14.683 2.2475 14.696Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.593961892416832 25.47585467837679"
          className={className}
        >
          <path
            d="              M0.9762 12.9117L12.4202 12.9257C12.5432 12.9257 12.6112 12.9937 12.6112 13.1307L12.6252 24.4917C12.6252 25.6547 14.0192 25.8047 14.4702 24.8477L25.4222 1.5777C25.9962 0.3887 25.0392 -0.3363 23.9592 0.1557L0.6342 11.0797C-0.3768 11.5587 -0.1178 12.8987 0.9762 12.9117Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.52735115861949 25.40657639013105"
          className={className}
        >
          <path
            d="              M0.736 12.6796L12.603 12.6936C12.699 12.6936 12.767 12.7616 12.767 12.8576L12.795 24.6556C12.795 25.5586 13.861 25.6266 14.189 24.9706L25.387 1.2496C25.851 0.2926 25.086 -0.2674 24.252 0.1286L0.49 11.2716C-0.303 11.6546 -0.071 12.6796 0.736 12.6796Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}