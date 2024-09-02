import { IconProps } from "../../types"

export default function RublesignSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM11.3887 20.3983C10.2817 20.3983 9.5427 19.6743 9.5427 18.5663V18.4023H8.4627C8.0667 18.4023 7.8747 18.1833 7.8747 17.8283C7.8747 17.4862 8.0527 17.2673 8.4627 17.2673H9.5427V15.9003H8.4627C8.0527 15.9003 7.8337 15.6813 7.8337 15.3263C7.8337 14.9573 8.0527 14.7243 8.4627 14.7243H9.5427V9.6663C9.5427 8.3813 10.2267 7.6563 11.4567 7.6563H15.1617C17.8007 7.6563 19.5917 9.3383 19.5917 11.8123C19.5917 14.2183 17.6917 15.9143 14.9567 15.9143H13.2617V17.2673H15.6817C16.0777 17.2673 16.2837 17.4862 16.2837 17.8283C16.2837 18.1833 16.0777 18.4023 15.6817 18.4023H13.2617V18.5663C13.2617 19.6743 12.5097 20.3983 11.3887 20.3983ZM13.2617 13.1383H14.3147C15.2437 13.1383 15.8457 12.6333 15.8457 11.8532C15.8457 11.0883 15.2437 10.5953 14.3277 10.5953H13.2617Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM10.8007 20.0157C9.9807 20.0157 9.4067 19.4687 9.4067 18.6347V17.8417H8.2577C7.8477 17.8417 7.6157 17.5817 7.6157 17.2127C7.6157 16.8297 7.8477 16.5707 8.2577 16.5707H9.4067V15.2027H8.2437C7.8337 15.2027 7.5877 14.9437 7.5877 14.5607C7.5877 14.1777 7.8337 13.9177 8.2437 13.9177H9.4067V8.3537C9.4067 7.4377 9.9397 6.8907 10.8277 6.8907H14.3557C16.9937 6.8907 18.7167 8.6137 18.7167 11.0607C18.7167 13.4807 16.9257 15.2167 14.2457 15.2167H12.1957V16.5707H15.0387C15.4497 16.5707 15.6957 16.8297 15.6957 17.2127C15.6957 17.5817 15.4497 17.8417 15.0387 17.8417H12.1957V18.6347C12.1957 19.4547 11.6347 20.0157 10.8007 20.0157ZM12.1957 12.9887L13.7677 13.0017C15.1347 13.0017 15.9137 12.2637 15.9137 11.0877C15.9137 9.9397 15.1487 9.2007 13.7677 9.2007H12.1957Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM11.1157 20.2205C10.1447 20.2205 9.4747 19.5785 9.4747 18.6075V18.1425H8.3677C7.9707 18.1425 7.7517 17.9105 7.7517 17.5415C7.7517 17.1855 7.9567 16.9395 8.3677 16.9395H9.4747V15.5855H8.3537C7.9437 15.5855 7.7247 15.3395 7.7247 14.9705C7.7247 14.5875 7.9437 14.3555 8.3537 14.3555H9.4747V9.0505C9.4747 7.9435 10.0897 7.3005 11.1567 7.3005H14.7797C17.4177 7.3005 19.1817 9.0095 19.1817 11.4575C19.1817 13.8765 17.3357 15.5995 14.6157 15.5995H12.7557V16.9395H15.3807C15.7907 16.9395 16.0097 17.1855 16.0097 17.5415C16.0097 17.9105 15.7907 18.1425 15.3807 18.1425H12.7557V18.6075C12.7557 19.5785 12.0997 20.2205 11.1157 20.2205ZM12.7557 13.0705L14.0547 13.0835C15.1897 13.0835 15.8727 12.4555 15.8727 11.4985C15.8727 10.5545 15.2027 9.9535 14.0687 9.9535H12.7557Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM10.0217 19.0725C9.5977 19.0725 9.2837 18.7855 9.2837 18.3475V16.6255H8.0257C7.6837 16.6255 7.4517 16.3925 7.4517 16.0505C7.4517 15.7095 7.6837 15.4625 8.0257 15.4625H9.2837V14.0415H8.0117C7.6697 14.0415 7.4377 13.7945 7.4377 13.4535C7.4377 13.1255 7.6697 12.8785 8.0117 12.8785H9.2837V6.8765C9.2837 6.4255 9.5707 6.1255 10.0217 6.1255H13.2207C15.7497 6.1255 17.3087 7.7515 17.3087 10.0765C17.3087 12.4145 15.7497 14.0275 13.2067 14.0275H10.7457V15.4625H14.0137C14.3557 15.4625 14.5877 15.7095 14.5877 16.0505C14.5877 16.3925 14.3557 16.6255 14.0137 16.6255H10.7457V18.3345C10.7457 18.7715 10.4457 19.0725 10.0217 19.0725ZM10.7457 12.7015L13.0017 12.7145C14.8337 12.7145 15.8457 11.7035 15.8457 10.0895C15.8457 8.4765 14.8477 7.4785 13.0017 7.4785H10.7457Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM10.4317 19.7563C9.7757 19.7563 9.3247 19.3183 9.3247 18.6753V17.4723H8.1207C7.7107 17.4723 7.4377 17.1993 7.4377 16.8023C7.4377 16.4203 7.7107 16.1193 8.1207 16.1193H9.3247V14.7523H8.1077C7.6837 14.7523 7.4237 14.4653 7.4237 14.0683C7.4237 13.6723 7.6837 13.3843 8.1077 13.3843H9.3247V7.5193C9.3247 6.8223 9.7477 6.3843 10.4317 6.3843H13.8357C16.4607 6.3843 18.1427 8.1343 18.1427 10.5683C18.1427 13.0153 16.4337 14.7523 13.7817 14.7523H11.5117V16.1193H14.6287C15.0527 16.1193 15.3127 16.4203 15.3127 16.8023C15.3127 17.1993 15.0527 17.4723 14.6287 17.4723H11.5117V18.6753C11.5117 19.3183 11.0747 19.7563 10.4317 19.7563ZM11.5257 12.8923L13.4117 12.9063C15.0667 12.9063 15.9417 12.0173 15.9417 10.5953C15.9417 9.1873 15.0797 8.2993 13.4117 8.2993H11.5257Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM10.2127 19.6195C9.6657 19.6195 9.2837 19.2365 9.2837 18.6895V17.2675H8.0387C7.6287 17.2675 7.3557 16.9805 7.3557 16.5705C7.3557 16.1735 7.6287 15.8725 8.0387 15.8725H9.2837V14.5055H8.0257C7.6157 14.5055 7.3277 14.1915 7.3277 13.7945C7.3277 13.3985 7.6157 13.0975 8.0257 13.0975H9.2837V7.0405C9.2837 6.4805 9.6387 6.0975 10.1997 6.0975H13.5487C16.1737 6.0975 17.8277 7.8745 17.8277 10.2945C17.8277 12.7425 16.1597 14.4925 13.5347 14.4925H11.1287V15.8725H14.4097C14.8207 15.8725 15.0937 16.1735 15.0937 16.5705C15.0937 16.9805 14.8207 17.2675 14.4097 17.2675H11.1287V18.6895C11.1287 19.2365 10.7457 19.6195 10.2127 19.6195ZM11.1427 12.8375L13.2207 12.8655C15.0257 12.8655 15.9687 11.8805 15.9687 10.3085C15.9687 8.7635 15.0387 7.7925 13.2207 7.7925H11.1427Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM10.5957 19.865C9.8577 19.865 9.3657 19.387 9.3657 18.662V17.637H8.1757C7.7657 17.637 7.5197 17.363 7.5197 16.98C7.5197 16.598 7.7657 16.324 8.1757 16.324H9.3657V14.957H8.1617C7.7517 14.957 7.4927 14.67 7.4927 14.287C7.4927 13.891 7.7517 13.617 8.1617 13.617H9.3657V7.889C9.3657 7.082 9.8297 6.604 10.5957 6.604H14.0547C16.6937 6.604 18.3887 8.34 18.3887 10.787C18.3887 13.221 16.6527 14.957 13.9867 14.957H11.7987V16.324H14.8067C15.2167 16.324 15.4767 16.598 15.4767 16.98C15.4767 17.363 15.2167 17.637 14.8067 17.637H11.7987V18.662C11.7987 19.373 11.3067 19.865 10.5957 19.865ZM11.8127 12.934L13.5627 12.961C15.0937 12.961 15.9277 12.127 15.9277 10.814C15.9277 9.516 15.1077 8.695 13.5767 8.695H11.8127Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM9.7757 18.3344C9.5017 18.3344 9.2967 18.1704 9.2967 17.8694V15.7634H8.0257C7.7657 15.7634 7.6017 15.5864 7.6017 15.3394C7.6017 15.0934 7.7657 14.9164 8.0257 14.9164H9.2967V13.4124H7.9977C7.7517 13.4124 7.5747 13.2484 7.5747 12.9884C7.5747 12.7424 7.7517 12.5644 7.9977 12.5644H9.2967V6.6304C9.2967 6.3434 9.4887 6.1524 9.7757 6.1524H12.7837C15.2027 6.1524 16.6387 7.5884 16.6387 9.7754C16.6387 11.9764 15.2027 13.3984 12.7837 13.3984H10.2407V14.9164H13.4807C13.7267 14.9164 13.9047 15.0934 13.9047 15.3394C13.9047 15.5864 13.7267 15.7634 13.4807 15.7634H10.2407V17.8554C10.2407 18.1564 10.0487 18.3344 9.7757 18.3344ZM10.2407 12.5094L12.7147 12.5234C14.6017 12.5234 15.6957 11.4704 15.6957 9.7754C15.6957 8.0934 14.6017 7.0414 12.7147 7.0414H10.2407Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM9.6387 17.951C9.4607 17.951 9.3107 17.855 9.3107 17.623V15.313H8.0117C7.8067 15.313 7.6697 15.176 7.6697 14.971C7.6697 14.766 7.8067 14.629 8.0117 14.629H9.3107V13.098H7.9977C7.7927 13.098 7.6567 12.961 7.6567 12.756C7.6567 12.551 7.7927 12.414 7.9977 12.414H9.3107V6.508C9.3107 6.289 9.4477 6.152 9.6387 6.152H12.5647C14.9157 6.152 16.2967 7.492 16.2967 9.611C16.2967 11.744 14.9157 13.07 12.5647 13.07H9.9807V14.629H13.2067C13.4117 14.629 13.5487 14.766 13.5487 14.971C13.5487 15.176 13.4117 15.313 13.2067 15.313H9.9807V17.596C9.9807 17.842 9.8437 17.951 9.6387 17.951ZM9.9807 12.414H12.5777C14.4787 12.414 15.6137 11.348 15.6137 9.611C15.6137 7.889 14.4787 6.822 12.5777 6.822H9.9807Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}