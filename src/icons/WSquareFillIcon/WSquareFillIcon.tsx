import { IconProps } from "../../types"

export default function WSquareFillIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM10.2537 20.2893C8.8727 20.2893 8.1077 19.6052 7.8337 18.1833L6.1657 9.1603C6.1117 8.9823 6.1117 8.8453 6.1117 8.6813C6.1117 7.6153 6.8497 6.8363 7.9567 6.8363C9.0507 6.8363 9.7347 7.5063 9.8707 8.7223L10.6227 15.2033H10.7737L11.9217 8.6403C12.1137 7.5883 12.6737 7.0953 13.7127 7.0953C14.7517 7.0953 15.3537 7.6293 15.5317 8.6543L16.6657 15.2033H16.8167L17.5687 8.7223C17.7047 7.5063 18.3887 6.8363 19.4687 6.8363C20.5767 6.8363 21.3277 7.6153 21.3277 8.6813C21.3277 8.8453 21.3277 8.9823 21.2737 9.1603L19.5917 18.1833C19.3187 19.6052 18.5527 20.2893 17.1717 20.2893C15.8727 20.2893 15.0387 19.5513 14.7657 18.0883L13.7817 13.1383H13.6447L12.6737 18.0883C12.4007 19.5513 11.5667 20.2893 10.2537 20.2893Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM9.5297 19.7287C8.4767 19.7287 7.8477 19.1957 7.6157 18.1147L5.3867 8.2577C5.3457 8.0937 5.3317 7.9567 5.3317 7.8067C5.3317 6.9587 5.9197 6.3577 6.7947 6.3577C7.6697 6.3577 8.1757 6.8357 8.3267 7.8617L9.7477 15.5727H9.8707L11.6347 7.7247C11.7987 6.8907 12.2907 6.4937 13.1527 6.4937C13.9997 6.4937 14.5057 6.9177 14.6697 7.7387L16.4197 15.5727H16.5427L17.9787 7.8617C18.1287 6.8357 18.6207 6.3577 19.5097 6.3577C20.3847 6.3577 20.9727 6.9587 20.9727 7.8067C20.9727 7.9567 20.9587 8.0937 20.9177 8.2577L18.6757 18.1147C18.4567 19.1957 17.8277 19.7287 16.7617 19.7287C15.7367 19.7287 15.0527 19.1677 14.8337 18.0877L13.2067 11.1697H13.0837L11.4567 18.0877C11.2387 19.1677 10.5547 19.7287 9.5297 19.7287Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM9.9117 20.0295C8.6817 20.0295 7.9847 19.4275 7.7387 18.1565L5.7967 8.7365C5.7427 8.5725 5.7427 8.4355 5.7427 8.2855C5.7427 7.3145 6.4117 6.6175 7.4097 6.6175C8.3947 6.6175 8.9957 7.2055 9.1327 8.3265L10.2127 15.3805H10.3497L11.7847 8.2165C11.9627 7.2595 12.4957 6.8085 13.4527 6.8085C14.3967 6.8085 14.9567 7.3005 15.1207 8.2305L16.5427 15.3805H16.6797L17.7597 8.3265C17.8967 7.2055 18.4977 6.6175 19.4957 6.6175C20.4807 6.6175 21.1507 7.3145 21.1507 8.2855C21.1507 8.4355 21.1507 8.5725 21.0957 8.7365L19.1677 18.1565C18.9087 19.4275 18.2107 20.0295 16.9807 20.0295C15.8047 20.0295 15.0527 19.3735 14.7927 18.0875L13.5077 12.2225H13.3847L12.0997 18.0875C11.8537 19.3735 11.0877 20.0295 9.9117 20.0295Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM8.7087 18.7985C8.1077 18.7985 7.7247 18.4845 7.5747 17.8825L4.7847 7.0135C4.7437 6.8905 4.7437 6.7815 4.7437 6.6855C4.7437 6.1935 5.0727 5.8655 5.5777 5.8655C6.0837 5.8655 6.3167 6.0975 6.4527 6.7125L8.7497 16.3105H8.8457L11.4027 6.6445C11.5257 6.1385 11.8537 5.9065 12.3727 5.9065C12.9067 5.9065 13.2207 6.1385 13.3437 6.6445L15.9007 16.3105H15.9957L18.2927 6.7125C18.4297 6.0975 18.6757 5.8655 19.1817 5.8655C19.6877 5.8655 20.0157 6.1935 20.0157 6.6855C20.0157 6.7815 20.0017 6.8905 19.9747 7.0135L17.1717 17.8825C17.0217 18.4845 16.6387 18.7985 16.0237 18.7985C15.4217 18.7985 15.0117 18.4985 14.8747 17.9105L12.4137 8.5035H12.3317L9.8707 17.9105C9.7347 18.4985 9.3247 18.7985 8.7087 18.7985Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM9.0647 19.3733C8.2167 19.3733 7.6697 18.9353 7.4787 18.0743L4.8947 7.6833C4.8397 7.5193 4.8397 7.3833 4.8397 7.2463C4.8397 6.5353 5.3187 6.0293 6.0567 6.0293C6.7947 6.0293 7.1777 6.4123 7.3417 7.3003L9.2017 15.8043H9.3107L11.4437 7.1363C11.6077 6.4393 12.0447 6.0973 12.7837 6.0973C13.5217 6.0973 13.9587 6.4533 14.1227 7.1363L16.2557 15.8043H16.3657L18.2387 7.3003C18.4027 6.4123 18.7847 6.0293 19.5237 6.0293C20.2617 6.0293 20.7407 6.5353 20.7407 7.2463C20.7407 7.3833 20.7267 7.5193 20.6857 7.6833L18.0877 18.0743C17.8967 18.9353 17.3497 19.3733 16.4887 19.3733C15.6407 19.3733 15.0797 18.9353 14.8887 18.0743L12.8377 9.9123H12.7287L10.6777 18.0743C10.4867 18.9353 9.9117 19.3733 9.0647 19.3733Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM8.8047 19.1675C8.0667 19.1675 7.5747 18.7715 7.3967 18.0465L4.6077 7.3555C4.5667 7.2055 4.5527 7.0545 4.5527 6.9315C4.5527 6.2895 4.9767 5.8515 5.6327 5.8515C6.3027 5.8515 6.6177 6.1655 6.7817 6.9725L8.8867 15.9275H8.9827L11.3477 6.8085C11.4977 6.1795 11.9087 5.8785 12.5777 5.8785C13.2477 5.8785 13.6447 6.1795 13.8087 6.8085L16.1737 15.9275H16.2697L18.3887 6.9725C18.5527 6.1655 18.8677 5.8515 19.5367 5.8515C20.1937 5.8515 20.6177 6.2895 20.6177 6.9315C20.6177 7.0545 20.6037 7.2055 20.5627 7.3555L17.7597 18.0465C17.5817 18.7715 17.0897 19.1675 16.3377 19.1675C15.5997 19.1675 15.0797 18.7855 14.9157 18.0745L12.6327 9.2015H12.5237L10.2407 18.0745C10.0767 18.7855 9.5567 19.1675 8.8047 19.1675Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM9.2557 19.523C8.3267 19.523 7.7517 19.045 7.5337 18.088L5.0997 7.93C5.0587 7.779 5.0447 7.629 5.0447 7.492C5.0447 6.713 5.5777 6.18 6.3707 6.18C7.1777 6.18 7.6017 6.604 7.7657 7.533L9.4337 15.709H9.5567L11.5257 7.396C11.6897 6.631 12.1547 6.262 12.9337 6.262C13.7267 6.262 14.1917 6.645 14.3557 7.396L16.3247 15.709H16.4477L18.1287 7.533C18.2797 6.604 18.7167 6.18 19.5237 6.18C20.3167 6.18 20.8357 6.713 20.8357 7.492C20.8357 7.629 20.8357 7.779 20.7817 7.93L18.3477 18.088C18.1287 19.045 17.5547 19.523 16.6117 19.523C15.6817 19.523 15.0667 19.031 14.8617 18.088L12.9887 10.459H12.8787L11.0197 18.088C10.8147 19.031 10.1997 19.523 9.2557 19.523Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM8.5857 18.2934C8.1617 18.2934 7.9157 18.0884 7.8207 17.6644L5.0037 6.5354C4.9907 6.4534 4.9907 6.4124 4.9907 6.3434C4.9907 6.0434 5.1817 5.8514 5.4957 5.8514C5.7967 5.8514 5.9477 6.0024 6.0157 6.3304L8.5857 16.7894H8.6547L11.4707 6.4124C11.5527 6.0704 11.7717 5.9204 12.0997 5.9204C12.4547 5.9204 12.6467 6.0704 12.7287 6.4124L15.5447 16.7894H15.6267L18.1837 6.3304C18.2657 6.0024 18.4157 5.8514 18.7027 5.8514C19.0177 5.8514 19.2227 6.0434 19.2227 6.3434C19.2227 6.4124 19.2227 6.4534 19.1957 6.5354L16.3927 17.6644C16.2837 18.0884 16.0367 18.2934 15.6137 18.2934C15.1757 18.2934 14.9297 18.0884 14.8207 17.6774L12.1407 7.5604H12.0587L9.3787 17.6774C9.2697 18.0884 9.0237 18.2934 8.5857 18.2934Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM8.5317 18.033C8.1897 18.033 8.0257 17.883 7.9297 17.541L5.1267 6.289C5.1137 6.221 5.1137 6.207 5.1137 6.152C5.1137 5.961 5.2497 5.838 5.4687 5.838C5.6467 5.838 5.7427 5.947 5.7967 6.139L8.4907 17.035H8.5587L11.5117 6.289C11.5797 6.029 11.7307 5.934 11.9627 5.934C12.2227 5.934 12.3457 6.029 12.4137 6.289L15.3677 17.035H15.4357L18.1287 6.139C18.1837 5.947 18.2797 5.838 18.4707 5.838C18.6897 5.838 18.8127 5.961 18.8127 6.152C18.8127 6.207 18.8127 6.221 18.7987 6.289L15.9957 17.541C15.9007 17.883 15.7367 18.033 15.3947 18.033C15.0527 18.033 14.8887 17.883 14.7927 17.555L12.0037 7.082H11.9217L9.1327 17.555C9.0367 17.883 8.8727 18.033 8.5317 18.033Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}