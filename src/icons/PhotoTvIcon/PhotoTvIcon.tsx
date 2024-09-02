import { IconProps } from "../../types"

export default function PhotoTvIconIcon({
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
            d="              M4.9357 26.0311H31.8827C34.9867 26.0311 36.8187 24.1991 36.8187 21.0961V4.9351C36.8187 1.8321 34.9867 0.0001 31.8827 0.0001H4.9357C1.8317 0.0001 -0.0003 1.8321 -0.0003 4.9351V21.0961C-0.0003 24.1991 1.8317 26.0311 4.9357 26.0311ZM4.4977 5.6191C4.4977 4.8121 4.8807 4.5121 5.6057 4.5121H31.2127C31.9377 4.5121 32.3207 4.8121 32.3207 5.6191V18.3341L26.0177 12.4551C25.4297 11.9221 24.7047 11.6621 24.0077 11.6621C23.2837 11.6621 22.5997 11.9081 21.9847 12.4411L15.1487 18.5661L11.9497 15.7091C11.3747 15.2031 10.7327 14.9431 10.1037 14.9431C9.3927 14.9431 8.9277 15.1891 8.3537 15.6821L4.4977 19.0171ZM14.0277 13.4941C15.9547 13.4941 17.5407 11.9081 17.5407 9.9671C17.5407 8.0391 15.9547 6.4391 14.0277 6.4391C12.0857 6.4391 10.4997 8.0391 10.4997 9.9671C10.4997 11.9081 12.0857 13.4941 14.0277 13.4941ZM10.8827 31.4861H25.9357C26.9747 31.4861 27.7817 30.6111 27.7817 29.6541C27.7817 28.6971 26.9747 27.8221 25.9357 27.8221H10.8827C9.8437 27.8221 9.0367 28.6971 9.0367 29.6541C9.0367 30.6111 9.8437 31.4861 10.8827 31.4861Z"
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
            d="              M4.2247 24.377H31.2817C33.9197 24.377 35.5057 22.791 35.5057 20.152V4.225C35.5057 1.586 33.9197 0 31.2817 0H4.2247C1.5857 0 -0.0003 1.586 -0.0003 4.225V20.152C-0.0003 22.791 1.5857 24.377 4.2247 24.377ZM3.3497 4.58C3.3497 3.76 3.7867 3.35 4.5797 3.35H30.9257C31.7047 3.35 32.1427 3.76 32.1427 4.58V17.951L25.2387 11.512C24.6507 10.951 23.9397 10.691 23.2147 10.691C22.4767 10.691 21.7927 10.937 21.1637 11.484L14.3827 17.555L11.2517 14.738C10.6917 14.232 10.0487 13.959 9.4067 13.959C8.7497 13.959 8.2167 14.219 7.6567 14.725L3.3497 18.525ZM12.5917 12.1C14.4237 12.1 15.9417 10.582 15.9417 8.723C15.9417 6.877 14.4237 5.346 12.5917 5.346C10.7327 5.346 9.2017 6.877 9.2017 8.723C9.2017 10.582 10.7327 12.1 12.5917 12.1ZM10.5547 29.422H24.9517C25.7717 29.422 26.4277 28.725 26.4277 27.945C26.4277 27.166 25.7717 26.469 24.9517 26.469H10.5547C9.7347 26.469 9.0647 27.166 9.0647 27.945C9.0647 28.725 9.7347 29.422 10.5547 29.422Z"
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
            d="              M4.5937 25.2519H31.5957C34.4807 25.2519 36.2027 23.5289 36.2027 20.6449V4.6079C36.2027 1.7089 34.4807 -0.0001 31.5957 -0.0001H4.5937C1.7087 -0.0001 -0.0003 1.7089 -0.0003 4.6079V20.6449C-0.0003 23.5289 1.7087 25.2519 4.5937 25.2519ZM3.9647 5.1269C3.9647 4.3199 4.3617 3.9649 5.1267 3.9649H31.0767C31.8277 3.9649 32.2387 4.3199 32.2387 5.1269V18.1559L25.6487 12.0039C25.0607 11.4569 24.3497 11.1969 23.6387 11.1969C22.9007 11.1969 22.2167 11.4429 21.6017 11.9899L14.7927 18.0879L11.6207 15.2439C11.0467 14.7379 10.4047 14.4789 9.7757 14.4789C9.0917 14.4789 8.5997 14.7249 8.0257 15.2309L3.9647 18.7849ZM13.3437 12.8379C15.2307 12.8379 16.7887 11.2789 16.7887 9.3789C16.7887 7.4919 15.2307 5.9199 13.3437 5.9199C11.4437 5.9199 9.8847 7.4919 9.8847 9.3789C9.8847 11.2789 11.4437 12.8379 13.3437 12.8379ZM10.7327 30.5159H25.4707C26.4007 30.5159 27.1527 29.7229 27.1527 28.8479C27.1527 27.9729 26.4007 27.1799 25.4707 27.1799H10.7327C9.7887 27.1799 9.0507 27.9729 9.0507 28.8479C9.0507 29.7229 9.7887 30.5159 10.7327 30.5159Z"
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
            d="              M3.1997 22.1621H30.1057C32.1017 22.1621 33.3047 20.9731 33.3047 18.9631V3.1991C33.3047 1.1891 32.1017 0.0001 30.1057 0.0001H3.1997C1.1897 0.0001 -0.0003 1.1891 -0.0003 3.1991V18.9631C-0.0003 20.9731 1.1897 22.1621 3.1997 22.1621ZM1.6957 3.2261C1.6957 2.2561 2.2557 1.6951 3.2407 1.6951H30.0647C31.0347 1.6951 31.6097 2.2561 31.6097 3.2261V17.6231L23.7757 10.3491C23.1327 9.7751 22.4497 9.4741 21.6427 9.4741C20.8767 9.4741 20.2067 9.7481 19.5507 10.3361L12.9747 16.2151L10.0347 13.5351C9.4747 13.0021 8.8727 12.7281 8.1897 12.7281C7.5337 12.7281 6.9727 13.0021 6.4257 13.5081L1.6957 17.8691ZM10.6227 10.2401C12.3727 10.2401 13.8227 8.7911 13.8227 7.0001C13.8227 5.2361 12.3727 3.7871 10.6227 3.7871C8.8317 3.7871 7.3827 5.2361 7.3827 7.0001C7.3827 8.7911 8.8317 10.2401 10.6227 10.2401ZM9.9257 26.3321H23.3787C23.8437 26.3321 24.2267 25.9491 24.2267 25.4841C24.2267 25.0061 23.8437 24.6231 23.3787 24.6231H9.9257C9.4477 24.6231 9.0647 25.0061 9.0647 25.4841C9.0647 25.9491 9.4477 26.3321 9.9257 26.3321Z"
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
            d="              M3.7737 23.3101H30.8847C33.2367 23.3101 34.6587 21.8751 34.6587 19.5371V3.7601C34.6587 1.4221 33.2367 0.0001 30.8847 0.0001H3.7737C1.4217 0.0001 -0.0003 1.4221 -0.0003 3.7601V19.5371C-0.0003 21.8751 1.4217 23.3101 3.7737 23.3101ZM2.6117 3.9101C2.6117 3.0761 3.1037 2.6111 3.9237 2.6111H30.7347C31.5547 2.6111 32.0467 3.0761 32.0467 3.9101V17.7191L24.7457 10.8961C24.1447 10.3361 23.4477 10.0621 22.6957 10.0621C21.9567 10.0621 21.2737 10.3221 20.6447 10.8691L13.9047 16.8981L10.8007 14.1091C10.2407 13.6031 9.6117 13.3301 8.9687 13.3301C8.3267 13.3301 7.7657 13.5901 7.2187 14.0961L2.6117 18.2111ZM11.6617 11.2111C13.4397 11.2111 14.9157 9.7341 14.9157 7.9161C14.9157 6.1251 13.4397 4.6481 11.6617 4.6481C9.8577 4.6481 8.3677 6.1251 8.3677 7.9161C8.3677 9.7341 9.8577 11.2111 11.6617 11.2111ZM10.3357 28.0821H24.3227C25.0057 28.0821 25.5667 27.5211 25.5667 26.8511C25.5667 26.1681 25.0057 25.6071 24.3227 25.6071H10.3357C9.6527 25.6071 9.0917 26.1681 9.0917 26.8511C9.0917 27.5211 9.6527 28.0821 10.3357 28.0821Z"
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
            d="              M3.5137 22.709H30.6657C32.8537 22.709 34.1797 21.369 34.1797 19.195V3.514C34.1797 1.34 32.8537 0 30.6657 0H3.5137C1.3397 0 -0.0003 1.34 -0.0003 3.514V19.195C-0.0003 21.369 1.3397 22.709 3.5137 22.709ZM2.2017 3.541C2.2017 2.707 2.7067 2.201 3.5547 2.201H30.6247C31.4727 2.201 31.9787 2.707 31.9787 3.541V17.596L24.4727 10.555C23.8707 9.994 23.1597 9.721 22.4087 9.721C21.6697 9.721 20.9867 9.98 20.3577 10.541L13.6307 16.543L10.5547 13.768C9.9937 13.248 9.3657 12.988 8.7227 12.988C8.0937 12.988 7.5057 13.248 6.9587 13.754L2.2017 18.047ZM11.1427 10.719C12.8927 10.719 14.3417 9.27 14.3417 7.465C14.3417 5.701 12.8927 4.252 11.1427 4.252C9.3657 4.252 7.9027 5.701 7.9027 7.465C7.9027 9.27 9.3657 10.719 11.1427 10.719ZM10.2127 27.344H23.9667C24.5687 27.344 25.0747 26.852 25.0747 26.236C25.0747 25.621 24.5687 25.129 23.9667 25.129H10.2127C9.6117 25.129 9.1057 25.621 9.1057 26.236C9.1057 26.852 9.6117 27.344 10.2127 27.344Z"
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
            d="              M3.9647 23.7612H31.0627C33.5237 23.7612 35.0277 22.2712 35.0277 19.7972V3.9652C35.0277 1.4902 33.5237 0.0002 31.0627 0.0002H3.9647C1.4907 0.0002 -0.0003 1.4902 -0.0003 3.9652V19.7972C-0.0003 22.2712 1.4907 23.7612 3.9647 23.7612ZM2.9397 4.1972C2.9397 3.3772 3.4047 2.9262 4.2107 2.9262H30.8167C31.6227 2.9262 32.0877 3.3772 32.0877 4.1972V17.8142L24.9647 11.1562C24.3637 10.5952 23.6527 10.3222 22.9137 10.3222C22.1757 10.3222 21.4927 10.5822 20.8767 11.1422L14.1097 17.1852L11.0057 14.3832C10.4317 13.8632 9.8027 13.6032 9.1597 13.6032C8.5037 13.6032 7.9567 13.8632 7.4097 14.3552L2.9397 18.3472ZM12.0587 11.5942C13.8637 11.5942 15.3537 10.1032 15.3537 8.2582C15.3537 6.4392 13.8637 4.9492 12.0587 4.9492C10.2267 4.9492 8.7227 6.4392 8.7227 8.2582C8.7227 10.1032 10.2267 11.5942 12.0587 11.5942ZM10.4317 28.6562H24.5957C25.3337 28.6562 25.9357 28.0412 25.9357 27.3162C25.9357 26.5922 25.3337 25.9762 24.5957 25.9762H10.4317C9.6797 25.9762 9.0917 26.5922 9.0917 27.3162C9.0917 28.0412 9.6797 28.6562 10.4317 28.6562Z"
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
            d="              M2.7757 21.4372H29.3537C31.1177 21.4372 32.1287 20.4262 32.1287 18.6622V2.7752C32.1287 1.0122 31.1177 0.0002 29.3537 0.0002H2.7757C1.0117 0.0002 -0.0003 1.0122 -0.0003 2.7752V18.6622C-0.0003 20.4262 1.0117 21.4372 2.7757 21.4372ZM22.8457 10.0902C22.1617 9.4742 21.4927 9.1602 20.6307 9.1602C19.8107 9.1602 19.1817 9.4612 18.4977 10.0762L12.0997 15.7772L9.3657 13.2212C8.7907 12.6872 8.2167 12.3872 7.4927 12.3872C6.8087 12.3872 6.2757 12.6602 5.7287 13.1932L1.0117 17.6232V2.8162C1.0117 1.6542 1.6677 1.0122 2.8297 1.0122H29.3127C30.4607 1.0122 31.1177 1.6542 31.1177 2.8162V17.6642ZM9.9257 9.6112C11.6897 9.6112 13.1387 8.1622 13.1387 6.3852C13.1387 4.6212 11.6897 3.1582 9.9257 3.1582C8.1487 3.1582 6.6997 4.6212 6.6997 6.3852C6.6997 8.1622 8.1487 9.6112 9.9257 9.6112ZM9.5297 24.9922H22.5997C22.8867 24.9922 23.1187 24.7732 23.1187 24.4862C23.1187 24.1852 22.8867 23.9672 22.5997 23.9672H9.5297C9.2427 23.9672 9.0097 24.1852 9.0097 24.4862C9.0097 24.7732 9.2427 24.9922 9.5297 24.9922Z"
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
            d="              M2.5707 21.0684H28.9707C30.6247 21.0684 31.5407 20.1524 31.5407 18.4984V2.5704C31.5407 0.9164 30.6247 0.0004 28.9707 0.0004H2.5707C0.9157 0.0004 -0.0003 0.9164 -0.0003 2.5704V18.4984C-0.0003 20.1524 0.9157 21.0684 2.5707 21.0684ZM22.3677 9.9534C21.6697 9.3244 20.9997 8.9964 20.1117 8.9964C19.2777 8.9964 18.6487 9.3104 17.9517 9.9394L11.6487 15.5454L9.0097 13.0564C8.4357 12.5094 7.8747 12.2224 7.1367 12.2224C6.4257 12.2224 5.9197 12.4964 5.3597 13.0434L0.6697 17.5004V2.5974C0.6697 1.3534 1.3677 0.6704 2.6117 0.6704H28.9157C30.1597 0.6704 30.8707 1.3534 30.8707 2.5974V17.6774ZM9.5707 9.2964C11.3337 9.2964 12.7837 7.8474 12.7837 6.0704C12.7837 4.3064 11.3337 2.8304 9.5707 2.8304C7.7927 2.8304 6.3437 4.3064 6.3437 6.0704C6.3437 7.8474 7.7927 9.2964 9.5707 9.2964ZM30.6247 19.5504C30.3927 19.9614 30.0237 20.2204 29.5317 20.3304C30.0097 20.1794 30.3657 19.9334 30.6247 19.5504ZM9.3377 24.3084H22.2027C22.4087 24.3084 22.5587 24.1714 22.5587 23.9664C22.5587 23.7614 22.4087 23.6384 22.2027 23.6384H9.3377C9.1327 23.6384 8.9827 23.7614 8.9827 23.9664C8.9827 24.1714 9.1327 24.3084 9.3377 24.3084Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}