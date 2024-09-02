import { IconProps } from "../../types"

export default function BookmarkSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.1037 21.1093C9.2427 21.1093 8.6407 20.4802 8.6407 19.5643V8.3532C8.6407 6.8633 9.5297 5.9613 11.0197 5.9613H16.4197C17.9237 5.9613 18.8127 6.8633 18.8127 8.3532V19.5643C18.8127 20.4802 18.2107 21.1093 17.3497 21.1093C16.8707 21.1093 16.5297 20.9043 16.0917 20.4943L13.7677 18.1563C13.7407 18.1153 13.6997 18.1153 13.6857 18.1563L11.3747 20.4943C10.9377 20.9043 10.5817 21.1093 10.1037 21.1093Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM9.2557 20.5757C8.5997 20.5757 8.1487 20.0977 8.1487 19.3597V7.8207C8.1487 6.3847 8.9417 5.5647 10.3767 5.5647H15.9417C17.3767 5.5647 18.1697 6.3847 18.1697 7.8207V19.3597C18.1697 20.0977 17.7187 20.5757 17.0627 20.5757C16.6387 20.5757 16.3657 20.3707 15.8187 19.8517L13.2067 17.2677C13.1797 17.2267 13.1387 17.2267 13.1117 17.2677L10.5137 19.8517C9.9667 20.3707 9.6797 20.5757 9.2557 20.5757Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM9.7067 20.8635C8.9417 20.8635 8.4087 20.3025 8.4087 19.4685V8.1075C8.4087 6.6445 9.2557 5.7835 10.7187 5.7835H16.2017C17.6637 5.7835 18.5117 6.6445 18.5117 8.1075V19.4685C18.5117 20.3025 17.9787 20.8635 17.2127 20.8635C16.7617 20.8635 16.4477 20.6585 15.9687 20.1935L13.5077 17.7325C13.4807 17.7055 13.4397 17.7055 13.4117 17.7325L10.9647 20.1935C10.4727 20.6585 10.1587 20.8635 9.7067 20.8635Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM8.2027 19.7555C7.7927 19.7555 7.5337 19.4555 7.5337 18.9765V7.1235C7.5337 5.8245 8.2167 5.1265 9.5017 5.1265H15.2577C16.5567 5.1265 17.2407 5.8245 17.2407 7.1235V18.9765C17.2407 19.4555 16.9807 19.7555 16.5707 19.7555C16.2697 19.7555 16.0917 19.5785 15.5997 19.0995L12.4417 15.9275C12.4137 15.9005 12.3597 15.9005 12.3187 15.9275L9.1597 19.0995C8.6817 19.5785 8.5037 19.7555 8.2027 19.7555Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM8.7227 20.2343C8.1897 20.2343 7.8337 19.8383 7.8337 19.2093V7.4653C7.8337 6.0703 8.5727 5.3043 9.9667 5.3043H15.6267C17.0217 5.3043 17.7597 6.0703 17.7597 7.4653V19.2093C17.7597 19.8383 17.4047 20.2343 16.8707 20.2343C16.4887 20.2343 16.2557 20.0293 15.6407 19.4273L12.8657 16.6793C12.8247 16.6523 12.7697 16.6523 12.7427 16.6793L9.9527 19.4273C9.3517 20.0293 9.1187 20.2343 8.7227 20.2343Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM8.4217 20.0425C7.9567 20.0425 7.6567 19.7015 7.6567 19.1265V7.2595C7.6567 5.8925 8.3677 5.1675 9.7347 5.1675H15.4497C16.8297 5.1675 17.5407 5.8925 17.5407 7.2595V19.1265C17.5407 19.7015 17.2407 20.0425 16.7617 20.0425C16.3927 20.0425 16.1877 19.8245 15.5447 19.1815L12.6597 16.3655C12.6187 16.3245 12.5647 16.3245 12.5237 16.3655L9.6527 19.1815C8.9957 19.8245 8.7907 20.0425 8.4217 20.0425Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM8.9547 20.385C8.3677 20.385 7.9707 19.961 7.9707 19.277V7.615C7.9707 6.207 8.7367 5.428 10.1447 5.428H15.7637C17.1717 5.428 17.9377 6.207 17.9377 7.615V19.277C17.9377 19.961 17.5407 20.385 16.9527 20.385C16.5427 20.385 16.2967 20.18 15.7227 19.605L13.0157 16.939C12.9747 16.898 12.9197 16.898 12.8927 16.939L10.1997 19.605C9.6117 20.18 9.3657 20.385 8.9547 20.385Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM7.9027 19.3594C7.5747 19.3594 7.3687 19.1134 7.3687 18.7574V6.9314C7.3687 5.7144 8.0117 5.0724 9.2017 5.0724H15.0117C16.2147 5.0724 16.8577 5.7144 16.8577 6.9314V18.7574C16.8577 19.1134 16.6387 19.3594 16.3247 19.3594C16.1057 19.3594 15.9687 19.2504 15.6957 18.9764L12.1677 15.3534C12.1267 15.3124 12.0857 15.3124 12.0587 15.3534L8.5317 18.9764C8.2577 19.2504 8.1077 19.3594 7.9027 19.3594Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM7.7387 19.154C7.4647 19.154 7.2737 18.936 7.2737 18.635V6.822C7.2737 5.66 7.9027 5.031 9.0507 5.031H14.8887C16.0367 5.031 16.6527 5.66 16.6527 6.822V18.635C16.6527 18.936 16.4747 19.154 16.1877 19.154C16.0237 19.154 15.9007 19.072 15.7367 18.908L12.0177 15.053C11.9907 15.012 11.9497 15.012 11.9217 15.053L8.2027 18.908C8.0387 19.072 7.9157 19.154 7.7387 19.154Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
