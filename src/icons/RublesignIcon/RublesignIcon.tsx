import { IconProps } from "../../types"

export default function RublesignIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.96875 24.732421875"
          className={className}
        >
          <path
            d="              M-0.0003 20.2751C-0.0003 20.6721 0.3277 21.0001 0.7247 21.0001H3.3087V21.2321C3.3087 23.4611 4.5667 24.7321 6.6857 24.7321C8.8047 24.7321 10.0767 23.4611 10.0767 21.2321V21.0001H15.4497C15.8457 21.0001 16.1737 20.6721 16.1737 20.2751C16.1737 19.8791 15.8457 19.5511 15.4497 19.5511H10.0767V16.0101H13.9457C19.2367 16.0101 22.9687 12.7011 22.9687 8.0391C22.9687 3.2671 19.4957 0.0001 14.3967 0.0001H6.8227C4.5937 0.0001 3.3087 1.3401 3.3087 3.6911V14.3961H0.8067C0.3557 14.3961 -0.0003 14.7521 -0.0003 15.2031C-0.0003 15.6541 0.3557 16.0101 0.8067 16.0101H3.3087V19.5511H0.7247C0.3277 19.5511 -0.0003 19.8791 -0.0003 20.2751ZM10.0767 11.1291V5.1401H12.2777C14.7247 5.1401 16.1327 6.2621 16.1327 8.1211C16.1327 10.0211 14.7247 11.1291 12.2367 11.1291Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.02734375 24.787109375"
          className={className}
        >
          <path
            d="              M-0.0003 19.8791C-0.0003 20.3301 0.3687 20.6991 0.8067 20.6991H3.5137V22.3811C3.5137 23.8571 4.4297 24.7871 5.8517 24.7871C7.2737 24.7871 8.2027 23.8571 8.2027 22.3811V20.6991H14.2187C14.6567 20.6991 15.0257 20.3301 15.0257 19.8791C15.0257 19.4411 14.6567 19.0721 14.2187 19.0721H8.2027V15.5451H12.6597C17.6637 15.5451 21.0277 12.3181 21.0277 7.7931C21.0277 3.2131 17.8007 0.0001 12.8927 0.0001H5.9197C4.4027 0.0001 3.5137 0.9301 3.5137 2.5161V13.8501H0.8477C0.3827 13.8501 -0.0003 14.2321 -0.0003 14.6971C-0.0003 15.1621 0.3827 15.5451 0.8477 15.5451H3.5137V19.0721H0.8067C0.3687 19.0721 -0.0003 19.4411 -0.0003 19.8791ZM8.2027 11.9631V3.7321H11.5117C14.6157 3.7321 16.2837 5.3051 16.2837 7.8341C16.2837 10.3911 14.6017 11.9631 11.4847 11.9631Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.052734375 24.759765625"
          className={className}
        >
          <path
            d="              M-0.0003 20.0974C-0.0003 20.5214 0.3417 20.8634 0.7657 20.8634H3.4047V21.7794C3.4047 23.6524 4.4977 24.7594 6.2887 24.7594C8.0797 24.7594 9.1877 23.6524 9.1877 21.7794V20.8634H14.8617C15.2847 20.8634 15.6267 20.5214 15.6267 20.0974C15.6267 19.6734 15.2847 19.3324 14.8617 19.3324H9.1877V15.7914H13.3437C18.4977 15.7914 22.0527 12.5234 22.0527 7.9294C22.0527 3.2534 18.7027 0.0004 13.6857 0.0004H6.3987C4.4977 0.0004 3.4047 1.1484 3.4047 3.1444V14.1364H0.8337C0.3687 14.1364 -0.0003 14.5054 -0.0003 14.9704C-0.0003 15.4214 0.3687 15.7914 0.8337 15.7914H3.4047V19.3324H0.7657C0.3417 19.3324 -0.0003 19.6734 -0.0003 20.0974ZM9.1877 11.5254V4.4844H11.9217C14.6697 4.4844 16.2017 5.8104 16.2017 7.9844C16.2017 10.1994 14.6697 11.5254 11.8807 11.5254Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.56640625 24.513671875"
          className={className}
        >
          <path
            d="              M-0.0003 19.113C-0.0003 19.496 0.3147 19.811 0.6977 19.811H3.6367V23.529C3.6367 24.076 4.0747 24.514 4.6207 24.514C5.1547 24.514 5.5917 24.076 5.5917 23.529V19.811H12.4277C12.8107 19.811 13.1387 19.496 13.1387 19.113C13.1387 18.73 12.8107 18.416 12.4277 18.416H5.5917V14.697H10.9097C15.6407 14.697 18.5667 11.703 18.5667 7.355C18.5667 3.021 15.6547 0 10.9237 0H4.6207C4.0197 0 3.6367 0.41 3.6367 1.025V13.289H0.6977C0.3147 13.289 -0.0003 13.604 -0.0003 13.986C-0.0003 14.369 0.3147 14.697 0.6977 14.697H3.6367V18.416H0.6977C0.3147 18.416 -0.0003 18.73 -0.0003 19.113ZM5.5917 12.961V1.764H10.4997C14.4377 1.764 16.5567 3.896 16.5567 7.355C16.5567 10.814 14.4237 12.961 10.4997 12.961Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.796875 24.828125"
          className={className}
        >
          <path
            d="              M-0.0003 19.6467C-0.0003 20.1117 0.3827 20.5077 0.8617 20.5077H3.6507V23.1327C3.6507 24.1167 4.3477 24.8277 5.3187 24.8277C6.3027 24.8277 6.9997 24.1167 6.9997 23.1327V20.5077H13.4257C13.8907 20.5077 14.2867 20.1117 14.2867 19.6467C14.2867 19.1677 13.8907 18.7847 13.4257 18.7847H6.9997V15.2577H11.8267C16.6527 15.2577 19.7967 12.0857 19.7967 7.6427C19.7967 3.1987 16.7207 -0.0003 11.9357 -0.0003H5.3457C4.2927 -0.0003 3.6507 0.6697 3.6507 1.7777V13.5077H0.8747C0.3967 13.5077 -0.0003 13.9047 -0.0003 14.3827C-0.0003 14.8617 0.3967 15.2577 0.8747 15.2577H3.6507V18.7847H0.8617C0.3827 18.7847 -0.0003 19.1677 -0.0003 19.6467ZM6.9997 12.5097V2.8297H11.0197C14.5467 2.8297 16.3657 4.6897 16.3657 7.6567C16.3657 10.6507 14.5337 12.5097 11.0197 12.5097Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.099609375 24.85546875"
          className={className}
        >
          <path
            d="              M-0.0003 19.4957C-0.0003 19.9887 0.3967 20.3987 0.8887 20.3987H3.7187V23.5427C3.7187 24.2677 4.2927 24.8557 5.0177 24.8557C5.7427 24.8557 6.3297 24.2677 6.3297 23.5427V20.3987H12.9747C13.4667 20.3987 13.8637 19.9887 13.8637 19.4957C13.8637 19.0177 13.4667 18.6077 12.9747 18.6077H6.3297V15.0937H11.3617C16.0917 15.0937 19.0997 11.9497 19.0997 7.5607C19.0997 3.1857 16.1187 -0.0003 11.3887 -0.0003H5.0177C4.2247 -0.0003 3.7187 0.5327 3.7187 1.3537V13.3167H0.8887C0.3967 13.3167 -0.0003 13.7127 -0.0003 14.2047C-0.0003 14.6977 0.3967 15.0937 0.8887 15.0937H3.7187V18.6077H0.8887C0.3967 18.6077 -0.0003 19.0177 -0.0003 19.4957ZM6.3297 12.8247V2.3247H10.7457C14.5057 2.3247 16.4197 4.3477 16.4197 7.5607C16.4197 10.7867 14.4787 12.8247 10.7457 12.8247Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.330078125 24.80078125"
          className={className}
        >
          <path
            d="              M-0.0003 19.7421C-0.0003 20.2071 0.3827 20.5761 0.8337 20.5761H3.5817V22.8051C3.5817 24.0081 4.3887 24.8011 5.5507 24.8011C6.7267 24.8011 7.5197 24.0081 7.5197 22.8051V20.5761H13.7677C14.2187 20.5761 14.6017 20.2071 14.6017 19.7421C14.6017 19.2771 14.2187 18.9081 13.7677 18.9081H7.5197V15.3811H12.1817C17.0897 15.3811 20.3297 12.1821 20.3297 7.7111C20.3297 3.1991 17.1857 0.0001 12.3457 0.0001H5.5917C4.3477 0.0001 3.5817 0.7791 3.5817 2.0921V13.6441H0.8617C0.3827 13.6441 -0.0003 14.0411 -0.0003 14.5191C-0.0003 14.9841 0.3827 15.3811 0.8617 15.3811H3.5817V18.9081H0.8337C0.3827 18.9081 -0.0003 19.2771 -0.0003 19.7421ZM7.5197 12.2771V3.2131H11.2387C14.5747 3.2131 16.3247 4.9491 16.3247 7.7381C16.3247 10.5411 14.5607 12.2771 11.2247 12.2771Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.869140625 24.076171875"
          className={className}
        >
          <path
            d="              M-0.0003 18.607C-0.0003 18.84 0.2047 19.059 0.4517 19.059H3.5277V23.516C3.5277 23.83 3.7737 24.076 4.0747 24.076C4.3747 24.076 4.6207 23.83 4.6207 23.516V19.059H11.7167C11.9627 19.059 12.1677 18.84 12.1677 18.607C12.1677 18.361 11.9627 18.156 11.7167 18.156H4.6207V14.164H10.3087C15.0387 14.164 17.8687 11.375 17.8687 7.096C17.8687 2.816 15.0527 0 10.3227 0H4.0747C3.7457 0 3.5277 0.26 3.5277 0.588V13.262H0.4517C0.2047 13.262 -0.0003 13.467 -0.0003 13.713C-0.0003 13.959 0.2047 14.164 0.4517 14.164H3.5277V18.156H0.4517C0.2047 18.156 -0.0003 18.361 -0.0003 18.607ZM4.6207 13.166V1.025H10.1857C14.3557 1.025 16.7477 3.322 16.7477 7.096C16.7477 10.856 14.3277 13.166 10.1857 13.166Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.513671875 23.84375"
          className={className}
        >
          <path
            d="              M-0.0003 18.3336C-0.0003 18.5116 0.1507 18.6626 0.3147 18.6626H3.4727V23.5016C3.4727 23.6936 3.6227 23.8436 3.8007 23.8436C3.9787 23.8436 4.1287 23.6936 4.1287 23.5016V18.6626H11.3477C11.5117 18.6626 11.6757 18.5116 11.6757 18.3336C11.6757 18.1696 11.5117 18.0196 11.3477 18.0196H4.1287V13.8906H10.0077C14.7387 13.8906 17.5137 11.2106 17.5137 6.9586C17.5137 2.6936 14.7387 -0.0004 10.0077 -0.0004H3.8007C3.5957 -0.0004 3.4727 0.1636 3.4727 0.3696V13.2476H0.3147C0.1507 13.2476 -0.0003 13.3986 -0.0003 13.5626C-0.0003 13.7406 0.1507 13.8906 0.3147 13.8906H3.4727V18.0196H0.3147C0.1507 18.0196 -0.0003 18.1696 -0.0003 18.3336ZM4.1287 13.2476V0.6286H10.0217C14.3007 0.6286 16.8437 3.0076 16.8437 6.9586C16.8437 10.8696 14.2867 13.2476 10.0217 13.2476Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
