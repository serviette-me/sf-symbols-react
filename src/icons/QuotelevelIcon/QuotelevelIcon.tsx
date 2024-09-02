import { IconProps } from "../../types"

export default function QuotelevelIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.356718652855484 26.98828125"
          className={className}
        >
          <path
            d="              M15.6032 26.9882C16.7922 26.9882 17.7902 26.0722 17.7902 24.8832V2.1052C17.7902 0.9292 16.7652 0.0002 15.6032 0.0002C14.4962 0.0002 13.4292 0.9432 13.4292 2.1052V24.8832C13.4292 26.0582 14.4682 26.9882 15.6032 26.9882ZM22.7532 26.9882C23.9432 26.9882 24.9412 26.0722 24.9412 24.8832V2.1052C24.9412 0.9292 23.9152 0.0002 22.7532 0.0002C21.6462 0.0002 20.5802 0.9432 20.5802 2.1052V24.8832C20.5802 26.0582 21.6052 26.9882 22.7532 26.9882ZM6.4562 18.7712C7.7142 19.6052 9.1632 19.1402 9.1632 17.6092V9.4202C9.1632 7.8472 7.7692 7.3552 6.4562 8.2442L0.7692 12.1272C-0.2288 12.7972 -0.2838 14.2602 0.7692 14.9702ZM31.9002 18.7712L37.5872 14.9702C38.6402 14.2602 38.5852 12.7972 37.5872 12.1272L31.9002 8.2442C30.5872 7.3552 29.1932 7.8472 29.1932 9.4202V17.6092C29.1932 19.1402 30.6422 19.6052 31.9002 18.7712Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.99480233048452 26.236328125"
          className={className}
        >
          <path
            d="              M14.504 26.2368C15.393 26.2368 16.117 25.5528 16.117 24.6638V1.5718C16.117 0.6968 15.379 -0.0002 14.504 -0.0002C13.657 -0.0002 12.905 0.6968 12.905 1.5718V24.6638C12.905 25.5388 13.643 26.2368 14.504 26.2368ZM21.491 26.2368C22.379 26.2368 23.09 25.5528 23.09 24.6638V1.5718C23.09 0.6968 22.366 -0.0002 21.491 -0.0002C20.643 -0.0002 19.891 0.6968 19.891 1.5718V24.6638C19.891 25.5388 20.629 26.2368 21.491 26.2368ZM5.782 17.8558C6.916 18.6078 8.215 18.1838 8.215 16.8168V9.4748C8.215 8.0528 6.971 7.6148 5.782 8.4078L0.682 11.8948C-0.207 12.5098 -0.248 13.8088 0.682 14.4378ZM30.213 17.8558L35.313 14.4378C36.242 13.8088 36.201 12.4958 35.313 11.8948L30.213 8.4078C29.024 7.6148 27.78 8.0528 27.78 9.4748V16.8168C27.78 18.1838 29.078 18.6078 30.213 17.8558Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.23893312039617 26.619140625"
          className={className}
        >
          <path
            d="              M15.078 26.6195C16.131 26.6195 16.992 25.8125 16.992 24.7735V1.8455C16.992 0.8065 16.104 -0.0005 15.078 -0.0005C14.094 -0.0005 13.178 0.8205 13.178 1.8455V24.7735C13.178 25.8125 14.067 26.6195 15.078 26.6195ZM22.16 26.6195C23.2 26.6195 24.061 25.8125 24.061 24.7735V1.8455C24.061 0.8065 23.172 -0.0005 22.16 -0.0005C21.176 -0.0005 20.246 0.8205 20.246 1.8455V24.7735C20.246 25.8125 21.149 26.6195 22.16 26.6195ZM6.137 18.3205C7.34 19.1265 8.707 18.6895 8.707 17.2265V9.4335C8.707 7.9295 7.395 7.4645 6.137 8.3125L0.723 12.0035C-0.22 12.6465 -0.261 14.0415 0.723 14.7105ZM31.102 18.3205L36.516 14.7105C37.5 14.0415 37.459 12.6465 36.516 12.0035L31.102 8.3125C29.844 7.4645 28.532 7.9295 28.532 9.4335V17.2265C28.532 18.6895 29.899 19.1265 31.102 18.3205Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.38534797086519 25.265625"
          className={className}
        >
          <path
            d="              M12.7181 25.2656C13.1691 25.2656 13.5251 24.8966 13.5251 24.4456V0.7926C13.5251 0.3416 13.1691 -0.0004 12.7181 -0.0004C12.2671 -0.0004 11.9251 0.3416 11.9251 0.7926V24.4456C11.9251 24.8966 12.2671 25.2656 12.7181 25.2656ZM19.6631 25.2656C20.1151 25.2656 20.4701 24.8966 20.4701 24.4456V0.7926C20.4701 0.3416 20.1151 -0.0004 19.6631 -0.0004C19.2121 -0.0004 18.8711 0.3416 18.8711 0.7926V24.4456C18.8711 24.8966 19.2121 25.2656 19.6631 25.2656ZM27.6211 16.5156L31.8311 13.6996C32.5831 13.1936 32.5561 12.1136 31.8311 11.6216L27.6211 8.7496C26.6501 8.0936 25.6241 8.4496 25.6241 9.6246V15.6546C25.6241 16.7886 26.6911 17.1446 27.6211 16.5156ZM4.7611 16.5156C5.6911 17.1306 6.7711 16.7886 6.7571 15.6546V9.6246C6.7711 8.4496 5.7461 8.0936 4.7611 8.7496L0.5641 11.6216C-0.1739 12.1266 -0.2019 13.1936 0.5641 13.6996Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.49256741703648 25.7578125"
          className={className}
        >
          <path
            d="              M13.8105 25.7573C14.4945 25.7573 15.0405 25.2113 15.0405 24.5273V1.2303C15.0405 0.5333 14.4945 0.0003 13.8105 0.0003C13.1265 0.0003 12.5665 0.5473 12.5665 1.2303V24.5273C12.5665 25.2113 13.1265 25.7573 13.8105 25.7573ZM20.6875 25.7573C21.3705 25.7573 21.9315 25.2113 21.9315 24.5273V1.2303C21.9315 0.5333 21.3705 0.0003 20.6875 0.0003C20.0175 0.0003 19.4435 0.5473 19.4435 1.2303V24.5273C19.4435 25.2113 20.0035 25.7573 20.6875 25.7573ZM5.3615 17.2543C6.4135 17.9513 7.6175 17.5683 7.6035 16.2973V9.5023C7.6175 8.1893 6.4545 7.7793 5.3615 8.5173L0.6305 11.7443C-0.1895 12.3183 -0.2305 13.5213 0.6305 14.0953ZM29.1365 17.2543L33.8675 14.0953C34.7145 13.5213 34.6875 12.3043 33.8675 11.7443L29.1365 8.5173C28.0295 7.7793 26.8945 8.1893 26.8945 9.5023V16.2973C26.8945 17.5683 28.0835 17.9643 29.1365 17.2543Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.63808220729474 25.498046875"
          className={className}
        >
          <path
            d="              M13.4101 25.4983C13.9851 25.4983 14.4361 25.0193 14.4361 24.4453V1.0393C14.4361 0.4653 13.9851 0.0003 13.4101 0.0003C12.8361 0.0003 12.3711 0.4653 12.3711 1.0393V24.4453C12.3711 25.0193 12.8361 25.4983 13.4101 25.4983ZM20.2331 25.4983C20.8071 25.4983 21.2581 25.0193 21.2581 24.4453V1.0393C21.2581 0.4653 20.8071 0.0003 20.2331 0.0003C19.6581 0.0003 19.1941 0.4653 19.1941 1.0393V24.4453C19.1941 25.0193 19.6581 25.4983 20.2331 25.4983ZM28.5181 16.9393L33.0431 13.9183C33.8501 13.3713 33.8231 12.1953 33.0431 11.6623L28.5181 8.5863C27.4651 7.8753 26.3851 8.2713 26.3851 9.5293V16.0093C26.3851 17.2263 27.5201 17.6093 28.5181 16.9393ZM5.1121 16.9393C6.1231 17.5953 7.2721 17.2263 7.2581 16.0093V9.5293C7.2721 8.2713 6.1641 7.8753 5.1121 8.5863L0.6001 11.6623C-0.1789 12.2093 -0.2199 13.3713 0.6001 13.9183Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.14031833179093 25.962890625"
          className={className}
        >
          <path
            d="              M14.1046 25.963C14.8696 25.963 15.4986 25.348 15.4986 24.582V1.367C15.4986 0.602 14.8696 0 14.1046 0C13.3526 0 12.7096 0.602 12.7096 1.367V24.582C12.7096 25.348 13.3386 25.963 14.1046 25.963ZM21.0226 25.963C21.8016 25.963 22.4306 25.348 22.4306 24.582V1.367C22.4306 0.602 21.7876 0 21.0226 0C20.2836 0 19.6276 0.602 19.6276 1.367V24.582C19.6276 25.348 20.2706 25.963 21.0226 25.963ZM5.5456 17.514C6.6256 18.225 7.8696 17.828 7.8566 16.516V9.475C7.8696 8.121 6.6806 7.697 5.5456 8.463L0.6516 11.812C-0.1964 12.387 -0.2374 13.644 0.6516 14.246ZM29.5946 17.514L34.4886 14.246C35.3776 13.644 35.3366 12.387 34.4886 11.812L29.5946 8.463C28.4596 7.697 27.2706 8.121 27.2706 9.475V16.516C27.2706 17.828 28.5006 18.238 29.5946 17.514Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.71047511113182 24.96484375"
          className={className}
        >
          <path
            d="              M11.8004 24.9645C12.0874 24.9645 12.2924 24.7595 12.2924 24.4725V0.4925C12.2924 0.2055 12.0874 -0.0005 11.8004 -0.0005C11.5134 -0.0005 11.3084 0.2055 11.3084 0.4925V24.4725C11.3084 24.7595 11.5134 24.9645 11.8004 24.9645ZM18.9104 24.9645C19.1974 24.9645 19.4024 24.7595 19.4024 24.4725V0.4925C19.4024 0.2055 19.1974 -0.0005 18.9104 -0.0005C18.6224 -0.0005 18.4174 0.2055 18.4174 0.4925V24.4725C18.4174 24.7595 18.6224 24.9645 18.9104 24.9645ZM4.2944 15.9825C5.1284 16.5425 6.0854 16.2285 6.0854 15.2165V9.7895C6.0854 8.7225 5.1694 8.4085 4.2944 8.9965L0.5074 11.5665C-0.1626 12.0315 -0.1756 12.9885 0.5074 13.4535ZM26.4154 15.9825L30.2034 13.4535C30.8864 12.9885 30.8724 12.0315 30.2034 11.5665L26.4154 8.9965C25.5544 8.4085 24.6244 8.7225 24.6244 9.7895V15.2165C24.6244 16.2285 25.5814 16.5425 26.4154 15.9825Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.85598459392083 24.814453125"
          className={className}
        >
          <path
            d="              M11.332 24.8145C11.524 24.8145 11.66 24.6915 11.66 24.4865V0.3285C11.66 0.1365 11.524 0.0005 11.332 0.0005C11.127 0.0005 10.991 0.1365 10.991 0.3285V24.4865C10.991 24.6915 11.127 24.8145 11.332 24.8145ZM18.524 24.8145C18.729 24.8145 18.866 24.6915 18.866 24.4865V0.3285C18.866 0.1365 18.729 0.0005 18.524 0.0005C18.319 0.0005 18.182 0.1365 18.182 0.3285V24.4865C18.182 24.6915 18.319 24.8145 18.524 24.8145ZM25.797 15.7225L29.379 13.3165C30.022 12.8785 30.008 11.9765 29.379 11.5525L25.797 9.1195C24.977 8.5585 24.116 8.8595 24.116 9.8575V14.9845C24.116 15.9415 25.018 16.2425 25.797 15.7225ZM4.045 15.7225C4.838 16.2425 5.741 15.9415 5.741 14.9845V9.8575C5.741 8.8595 4.866 8.5585 4.045 9.1195L0.477 11.5525C-0.152 11.9765 -0.166 12.8785 0.477 13.3165Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}