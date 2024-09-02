import { IconProps } from "../../types"

export default function MusicNoteTvIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.818359375 31.486328125"
          className={className}
        >
          <path
            d="              M4.9357 26.0311H31.8827C34.9867 26.0311 36.8187 24.1991 36.8187 21.0961V4.9351C36.8187 1.8321 34.9867 0.0001 31.8827 0.0001H4.9357C1.8317 0.0001 -0.0003 1.8321 -0.0003 4.9351V21.0961C-0.0003 24.1991 1.8317 26.0311 4.9357 26.0311ZM5.6057 21.5331C4.8807 21.5331 4.4977 21.2191 4.4977 20.4261V5.6191C4.4977 4.8121 4.8807 4.5121 5.6057 4.5121H31.2127C31.9377 4.5121 32.3207 4.8121 32.3207 5.6191V20.4261C32.3207 21.2191 31.9377 21.5331 31.2127 21.5331ZM22.2167 11.2521C23.0237 11.0601 23.2287 10.8011 23.2287 9.9671V7.3011C23.2287 6.5761 22.8457 6.3161 22.0667 6.5081L18.1157 7.4921C17.3227 7.6831 17.1307 7.9301 17.1307 8.8051V14.0411C17.1307 14.5331 17.1177 14.5471 16.5567 14.6971L15.3677 15.0121C13.8497 15.4081 12.9607 16.3101 12.9607 17.5961C12.9607 18.8811 13.9587 19.7691 15.3947 19.7691C17.4317 19.7691 18.8677 18.3071 18.8677 16.2281V12.4821C18.8677 12.1131 18.9087 12.0721 19.1137 12.0171ZM10.8827 31.4861H25.9357C26.9747 31.4861 27.7817 30.6111 27.7817 29.6541C27.7817 28.6971 26.9747 27.8221 25.9357 27.8221H10.8827C9.8437 27.8221 9.0367 28.6971 9.0367 29.6541C9.0367 30.6111 9.8437 31.4861 10.8827 31.4861Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.505859375 29.421875"
          className={className}
        >
          <path
            d="              M4.2247 24.377H31.2817C33.9197 24.377 35.5057 22.791 35.5057 20.152V4.225C35.5057 1.586 33.9197 0 31.2817 0H4.2247C1.5857 0 -0.0003 1.586 -0.0003 4.225V20.152C-0.0003 22.791 1.5857 24.377 4.2247 24.377ZM4.5797 21.027C3.7867 21.027 3.3497 20.617 3.3497 19.797V4.58C3.3497 3.76 3.7867 3.35 4.5797 3.35H30.9257C31.7047 3.35 32.1427 3.76 32.1427 4.58V19.797C32.1427 20.617 31.7047 21.027 30.9257 21.027ZM21.7107 10.062C22.4497 9.885 22.6547 9.68 22.6547 8.873V6.193C22.6547 5.564 22.3677 5.318 21.6157 5.51L17.6367 6.494C16.9117 6.672 16.7347 6.877 16.7347 7.711V13.412C16.7347 13.959 16.7067 14.027 16.0777 14.191L14.8477 14.519C13.4807 14.875 12.5097 15.695 12.5097 17.008C12.5097 18.238 13.4527 19.1 14.8477 19.1C16.8437 19.1 18.2247 17.664 18.2247 15.641V11.416C18.2247 10.978 18.3067 10.883 18.5527 10.828ZM10.5547 29.422H24.9517C25.7717 29.422 26.4277 28.725 26.4277 27.945C26.4277 27.166 25.7717 26.469 24.9517 26.469H10.5547C9.7347 26.469 9.0647 27.166 9.0647 27.945C9.0647 28.725 9.7347 29.422 10.5547 29.422Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.203125 30.515625"
          className={className}
        >
          <path
            d="              M4.5937 25.2519H31.5957C34.4807 25.2519 36.2027 23.5289 36.2027 20.6449V4.6079C36.2027 1.7089 34.4807 -0.0001 31.5957 -0.0001H4.5937C1.7087 -0.0001 -0.0003 1.7089 -0.0003 4.6079V20.6449C-0.0003 23.5289 1.7087 25.2519 4.5937 25.2519ZM5.1267 21.2869C4.3617 21.2869 3.9647 20.9319 3.9647 20.1249V5.1269C3.9647 4.3199 4.3617 3.9649 5.1267 3.9649H31.0767C31.8277 3.9649 32.2387 4.3199 32.2387 5.1269V20.1249C32.2387 20.9319 31.8277 21.2869 31.0767 21.2869ZM21.9847 10.6909C22.7497 10.4999 22.9547 10.2679 22.9547 9.4469V6.7679C22.9547 6.0979 22.6267 5.8519 21.8617 6.0429L17.8967 7.0269C17.1307 7.2049 16.9527 7.4379 16.9527 8.2849V13.7399C16.9527 14.2599 16.9257 14.3009 16.3377 14.4509L15.1207 14.7789C13.6717 15.1489 12.7427 16.0239 12.7427 17.3219C12.7427 18.5799 13.7267 19.4549 15.1347 19.4549C17.1587 19.4549 18.5667 18.0059 18.5667 15.9549V11.9769C18.5667 11.5659 18.6207 11.5119 18.8537 11.4569ZM10.7327 30.5159H25.4707C26.4007 30.5159 27.1527 29.7229 27.1527 28.8479C27.1527 27.9729 26.4007 27.1799 25.4707 27.1799H10.7327C9.7887 27.1799 9.0507 27.9729 9.0507 28.8479C9.0507 29.7229 9.7887 30.5159 10.7327 30.5159Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.3046875 26.33203125"
          className={className}
        >
          <path
            d="              M3.1997 22.1621H30.1057C32.1017 22.1621 33.3047 20.9731 33.3047 18.9631V3.1991C33.3047 1.1891 32.1017 0.0001 30.1057 0.0001H3.1997C1.1897 0.0001 -0.0003 1.1891 -0.0003 3.1991V18.9631C-0.0003 20.9731 1.1897 22.1621 3.1997 22.1621ZM3.2407 20.4671C2.2557 20.4671 1.6957 19.9061 1.6957 18.9351V3.2261C1.6957 2.2561 2.2557 1.6951 3.2407 1.6951H30.0647C31.0347 1.6951 31.6097 2.2561 31.6097 3.2261V18.9351C31.6097 19.9061 31.0347 20.4671 30.0647 20.4671ZM20.5347 8.5311C21.1637 8.3671 21.3417 8.2441 21.3417 7.4781V4.9631C21.3417 4.4711 21.1777 4.2521 20.4807 4.4161L16.7067 5.3461C16.0647 5.4961 15.9277 5.6331 15.9277 6.4121V12.5641C15.9277 13.1521 15.8867 13.2481 15.2167 13.4391L13.9867 13.7671C12.7967 14.0821 11.7987 14.7791 11.7987 16.0511C11.7987 17.1721 12.6327 17.9651 13.9457 17.9651C15.8187 17.9651 17.0347 16.6391 17.0347 14.7521V9.9391C17.0347 9.4611 17.1447 9.3381 17.4317 9.2691ZM9.9257 26.3321H23.3787C23.8437 26.3321 24.2267 25.9491 24.2267 25.4841C24.2267 25.0061 23.8437 24.6231 23.3787 24.6231H9.9257C9.4477 24.6231 9.0647 25.0061 9.0647 25.4841C9.0647 25.9491 9.4477 26.3321 9.9257 26.3321Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.658203125 28.08203125"
          className={className}
        >
          <path
            d="              M3.7737 23.3101H30.8847C33.2367 23.3101 34.6587 21.8751 34.6587 19.5371V3.7601C34.6587 1.4221 33.2367 0.0001 30.8847 0.0001H3.7737C1.4217 0.0001 -0.0003 1.4221 -0.0003 3.7601V19.5371C-0.0003 21.8751 1.4217 23.3101 3.7737 23.3101ZM3.9237 20.6851C3.1037 20.6851 2.6117 20.2211 2.6117 19.3871V3.9101C2.6117 3.0761 3.1037 2.6111 3.9237 2.6111H30.7347C31.5547 2.6111 32.0467 3.0761 32.0467 3.9101V19.3871C32.0467 20.2211 31.5547 20.6851 30.7347 20.6851ZM21.3967 9.2971C22.0797 9.1191 22.2847 8.9691 22.2847 8.1621V5.4821C22.2847 4.9221 22.0667 4.6761 21.3277 4.8671L17.3357 5.8511C16.6387 6.0291 16.4887 6.1801 16.4887 7.0001V13.0021C16.4887 13.5901 16.4337 13.6851 15.7637 13.8631L14.5197 14.1911C13.2347 14.5331 12.2227 15.2991 12.2227 16.6251C12.2227 17.8141 13.1117 18.6621 14.5057 18.6621C16.4747 18.6621 17.8147 17.2541 17.8147 15.2581V10.7321C17.8147 10.2401 17.9237 10.1311 18.1977 10.0621ZM10.3357 28.0821H24.3227C25.0057 28.0821 25.5667 27.5211 25.5667 26.8511C25.5667 26.1681 25.0057 25.6071 24.3227 25.6071H10.3357C9.6527 25.6071 9.0917 26.1681 9.0917 26.8511C9.0917 27.5211 9.6527 28.0821 10.3357 28.0821Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.1796875 27.34375"
          className={className}
        >
          <path
            d="              M3.5137 22.709H30.6657C32.8537 22.709 34.1797 21.369 34.1797 19.195V3.514C34.1797 1.34 32.8537 0 30.6657 0H3.5137C1.3397 0 -0.0003 1.34 -0.0003 3.514V19.195C-0.0003 21.369 1.3397 22.709 3.5137 22.709ZM3.5547 20.508C2.7067 20.508 2.2017 20.002 2.2017 19.168V3.541C2.2017 2.707 2.7067 2.201 3.5547 2.201H30.6247C31.4727 2.201 31.9787 2.707 31.9787 3.541V19.168C31.9787 20.002 31.4727 20.508 30.6247 20.508ZM21.2187 8.873C21.8747 8.695 22.0667 8.559 22.0667 7.766V5.086C22.0667 4.566 21.8887 4.334 21.1637 4.512L17.1587 5.51C16.4887 5.674 16.3377 5.811 16.3377 6.617V12.783C16.3377 13.385 16.2837 13.494 15.5997 13.686L14.3417 14.014C13.0977 14.342 12.0587 15.08 12.0587 16.42C12.0587 17.582 12.9337 18.43 14.3007 18.43C16.2557 18.43 17.5817 17.022 17.5817 15.039V10.35C17.5817 9.844 17.7047 9.707 18.0057 9.639ZM10.2127 27.344H23.9667C24.5687 27.344 25.0747 26.852 25.0747 26.236C25.0747 25.621 24.5687 25.129 23.9667 25.129H10.2127C9.6117 25.129 9.1057 25.621 9.1057 26.236C9.1057 26.852 9.6117 27.344 10.2127 27.344Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.02734375 28.65625"
          className={className}
        >
          <path
            d="              M3.9647 23.7612H31.0627C33.5237 23.7612 35.0277 22.2712 35.0277 19.7972V3.9652C35.0277 1.4902 33.5237 0.0002 31.0627 0.0002H3.9647C1.4907 0.0002 -0.0003 1.4902 -0.0003 3.9652V19.7972C-0.0003 22.2712 1.4907 23.7612 3.9647 23.7612ZM4.2107 20.8362C3.4047 20.8362 2.9397 20.3852 2.9397 19.5642V4.1972C2.9397 3.3772 3.4047 2.9262 4.2107 2.9262H30.8167C31.6227 2.9262 32.0877 3.3772 32.0877 4.1972V19.5642C32.0877 20.3852 31.6227 20.8362 30.8167 20.8362ZM21.5337 9.6252C22.2437 9.4472 22.4357 9.2692 22.4357 8.4632V5.7832C22.4357 5.1952 22.1897 4.9632 21.4517 5.1402L17.4727 6.1382C16.7477 6.3032 16.5977 6.4802 16.5977 7.3142V13.1792C16.5977 13.7402 16.5567 13.8222 15.9007 14.0002L14.6697 14.3282C13.3297 14.6702 12.3457 15.4632 12.3457 16.7892C12.3457 17.9922 13.2617 18.8532 14.6567 18.8532C16.6387 18.8532 17.9927 17.4312 17.9927 15.4222V11.0192C17.9927 10.5542 18.0877 10.4592 18.3617 10.3902ZM10.4317 28.6562H24.5957C25.3337 28.6562 25.9357 28.0412 25.9357 27.3162C25.9357 26.5922 25.3337 25.9762 24.5957 25.9762H10.4317C9.6797 25.9762 9.0917 26.5922 9.0917 27.3162C9.0917 28.0412 9.6797 28.6562 10.4317 28.6562Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.12890625 24.9921875"
          className={className}
        >
          <path
            d="              M2.7757 21.4372H29.3537C31.1177 21.4372 32.1287 20.4262 32.1287 18.6622V2.7752C32.1287 1.0122 31.1177 0.0002 29.3537 0.0002H2.7757C1.0117 0.0002 -0.0003 1.0122 -0.0003 2.7752V18.6622C-0.0003 20.4262 1.0117 21.4372 2.7757 21.4372ZM2.8297 20.4262C1.6677 20.4262 1.0117 19.7832 1.0117 18.6212V2.8162C1.0117 1.6542 1.6677 1.0122 2.8297 1.0122H29.3127C30.4607 1.0122 31.1177 1.6542 31.1177 2.8162V18.6212C31.1177 19.7832 30.4607 20.4262 29.3127 20.4262ZM19.6327 8.0802C20.2207 7.9292 20.3847 7.8062 20.3847 7.0962V4.7992C20.3847 4.3342 20.2347 4.1292 19.5777 4.2932L16.1187 5.1272C15.5037 5.2772 15.3947 5.4002 15.3947 6.1252V12.2912C15.3947 12.8382 15.3397 12.9202 14.7107 13.0972L13.5077 13.4392C12.4007 13.7402 11.4707 14.3832 11.4707 15.5722C11.4707 16.6252 12.2497 17.3632 13.4807 17.3632C15.2307 17.3632 16.2967 16.1192 16.2967 14.3552V9.3922C16.2967 8.9412 16.3927 8.8322 16.6657 8.7772ZM9.5297 24.9922H22.5997C22.8867 24.9922 23.1187 24.7732 23.1187 24.4862C23.1187 24.1852 22.8867 23.9672 22.5997 23.9672H9.5297C9.2427 23.9672 9.0097 24.1852 9.0097 24.4862C9.0097 24.7732 9.2427 24.9922 9.5297 24.9922Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.541015625 24.30859375"
          className={className}
        >
          <path
            d="              M2.5707 21.0684H28.9707C30.6247 21.0684 31.5407 20.1524 31.5407 18.4984V2.5704C31.5407 0.9164 30.6247 0.0004 28.9707 0.0004H2.5707C0.9157 0.0004 -0.0003 0.9164 -0.0003 2.5704V18.4984C-0.0003 20.1524 0.9157 21.0684 2.5707 21.0684ZM2.6117 20.3984C1.3677 20.3984 0.6697 19.7144 0.6697 18.4704V2.5974C0.6697 1.3534 1.3677 0.6704 2.6117 0.6704H28.9157C30.1597 0.6704 30.8707 1.3534 30.8707 2.5974V18.4704C30.8707 19.7144 30.1597 20.3984 28.9157 20.3984ZM19.1677 7.8474C19.7427 7.7114 19.8927 7.5874 19.8927 6.8904V4.7164C19.8927 4.2654 19.7557 4.0744 19.1137 4.2384L15.8187 5.0174C15.2167 5.1544 15.1207 5.2774 15.1207 5.9884V12.1544C15.1207 12.6734 15.0667 12.7554 14.4517 12.9334L13.2757 13.2614C12.1957 13.5624 11.3067 14.1914 11.3067 15.3124C11.3067 16.3514 12.0447 17.0624 13.2347 17.0624C14.9157 17.0624 15.9277 15.8594 15.9277 14.1504V9.1194C15.9277 8.6814 16.0097 8.5864 16.2697 8.5314ZM9.3377 24.3084H22.2027C22.4087 24.3084 22.5587 24.1714 22.5587 23.9664C22.5587 23.7614 22.4087 23.6384 22.2027 23.6384H9.3377C9.1327 23.6384 8.9827 23.7614 8.9827 23.9664C8.9827 24.1714 9.1327 24.3084 9.3377 24.3084Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
