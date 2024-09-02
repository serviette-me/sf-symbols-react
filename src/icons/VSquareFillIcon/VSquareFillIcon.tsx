import { IconProps } from "../../types"

export default function VSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM13.6587 20.2893C11.4027 20.2893 10.3357 19.3863 9.7207 17.4043L7.5197 10.4043C7.3687 9.9123 7.3147 9.5973 7.3147 9.1873C7.3147 7.7523 8.3127 6.8363 9.8167 6.8363C11.2247 6.8363 11.9087 7.4923 12.2227 9.1053L13.6307 15.9143H13.7677L15.1757 9.1053C15.4907 7.4653 16.1597 6.8363 17.5687 6.8363C19.0857 6.8363 20.1117 7.7383 20.1117 9.1333C20.1117 9.5293 20.0707 9.8852 19.8927 10.4043L17.7187 17.2953C17.0767 19.3323 15.9417 20.2893 13.6587 20.2893Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM13.1247 19.7287C11.5797 19.7287 10.8147 19.0997 10.3227 17.6367L7.2457 8.9687C7.1227 8.6137 7.0817 8.3667 7.0817 8.0667C7.0817 7.0277 7.8207 6.3577 8.9137 6.3577C9.9257 6.3577 10.4317 6.8227 10.7187 7.9707L13.0837 16.1877H13.2067L15.5857 7.9707C15.8597 6.8227 16.3657 6.3577 17.3767 6.3577C18.4707 6.3577 19.2227 7.0277 19.2227 8.0387C19.2227 8.3397 19.1817 8.5997 19.0587 8.9687L15.9957 17.5547C15.5037 19.0447 14.6837 19.7287 13.1247 19.7287Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM13.4117 20.0295C11.4847 20.0295 10.5547 19.2635 10.0077 17.5135L7.3967 9.7345C7.2597 9.3105 7.2047 9.0235 7.2047 8.6675C7.2047 7.4235 8.0797 6.6175 9.3927 6.6175C10.6097 6.6175 11.2107 7.1775 11.5117 8.5725L13.3707 16.0505H13.5077L15.3677 8.5725C15.6677 7.1645 16.2557 6.6175 17.4867 6.6175C18.7987 6.6175 19.6877 7.4105 19.6877 8.6265C19.6877 8.9825 19.6467 9.2835 19.4957 9.7345L16.8987 17.4175C16.3377 19.2085 15.3397 20.0295 13.4117 20.0295Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM12.3867 18.7985C11.7027 18.7985 11.3477 18.5115 11.0607 17.7875L6.9997 7.1645C6.9317 6.9865 6.9047 6.8355 6.9047 6.6855C6.9047 6.1935 7.2737 5.8655 7.7927 5.8655C8.2717 5.8655 8.5317 6.0705 8.7087 6.6035L12.3317 16.7075H12.4277L16.0367 6.6035C16.2287 6.0845 16.4887 5.8655 16.9667 5.8655C17.4867 5.8655 17.8557 6.1935 17.8557 6.6855C17.8557 6.8355 17.8277 6.9725 17.7597 7.1645L13.6997 17.7595C13.4397 18.4575 13.0427 18.7985 12.3867 18.7985Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM12.7967 19.3733C11.6897 19.3733 11.1157 18.9083 10.7047 17.7733L7.0687 8.0523C6.9727 7.7793 6.9457 7.5743 6.9457 7.3423C6.9457 6.5623 7.5057 6.0293 8.3267 6.0293C9.0917 6.0293 9.5017 6.3843 9.7477 7.2463L12.7427 16.3653H12.8377L15.8317 7.2463C16.0777 6.3843 16.4887 6.0293 17.2537 6.0293C18.0747 6.0293 18.6487 6.5623 18.6487 7.3283C18.6487 7.5743 18.6077 7.7653 18.5257 8.0523L14.8887 17.7323C14.4927 18.8533 13.8767 19.3733 12.7967 19.3733Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM12.6057 19.1675C11.7437 19.1675 11.2927 18.7985 10.9237 17.8415L6.9587 7.5195C6.8907 7.3005 6.8497 7.1365 6.8497 6.9315C6.8497 6.3025 7.3417 5.8515 7.9977 5.8515C8.6267 5.8515 8.9687 6.1525 9.2017 6.8225L12.5367 16.4605H12.6327L15.9827 6.8225C16.2147 6.1525 16.5567 5.8515 17.1857 5.8515C17.8417 5.8515 18.3207 6.2895 18.3207 6.9315C18.3207 7.1365 18.2927 7.3005 18.2247 7.5195L14.2737 17.8145C13.9177 18.7445 13.4117 19.1675 12.6057 19.1675Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM12.9337 19.523C11.6347 19.523 10.9787 18.99 10.5407 17.705L7.1367 8.449C7.0407 8.135 6.9997 7.916 6.9997 7.656C6.9997 6.768 7.6427 6.18 8.5727 6.18C9.4477 6.18 9.8987 6.576 10.1587 7.561L12.8927 16.283H13.0017L15.7227 7.561C15.9827 6.576 16.4337 6.18 17.3087 6.18C18.2387 6.18 18.8947 6.754 18.8947 7.629C18.8947 7.902 18.8537 8.121 18.7577 8.449L15.3677 17.65C14.9297 18.936 14.2187 19.523 12.9337 19.523Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM12.0997 18.2934C11.6487 18.2934 11.4157 18.1014 11.2517 17.6914L7.0407 6.6584C6.9997 6.5354 6.9867 6.4394 6.9867 6.3434C6.9867 6.0564 7.1917 5.8514 7.5057 5.8514C7.7927 5.8514 7.9437 5.9614 8.0667 6.3024L12.0587 17.0214H12.1407L16.1327 6.3024C16.2557 5.9744 16.4067 5.8514 16.6937 5.8514C17.0077 5.8514 17.2267 6.0434 17.2267 6.3434C17.2267 6.4394 17.1997 6.5214 17.1587 6.6584L12.9477 17.6774C12.8107 18.0744 12.5507 18.2934 12.0997 18.2934Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM11.9627 18.033C11.6207 18.033 11.4437 17.883 11.3477 17.637L7.0687 6.398C7.0277 6.316 7.0137 6.221 7.0137 6.152C7.0137 5.975 7.1507 5.838 7.3687 5.838C7.5467 5.838 7.6567 5.906 7.7387 6.139L11.9217 17.186H11.9907L16.1737 6.139C16.2697 5.92 16.3657 5.838 16.5427 5.838C16.7617 5.838 16.8987 5.961 16.8987 6.152C16.8987 6.221 16.8847 6.289 16.8437 6.398L12.5647 17.637C12.4827 17.869 12.3047 18.033 11.9627 18.033Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
