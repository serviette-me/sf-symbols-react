import { IconProps } from "../../types"

export default function SevenCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM13.8227 21.1641C14.7387 21.1641 15.2437 20.8081 15.9417 19.7011L19.7697 13.5491C20.2477 12.7691 20.4527 12.1131 20.4527 11.3341C20.4527 9.8981 19.4547 9.0231 17.7867 9.0231H11.6897C10.4457 9.0231 9.6937 9.6801 9.6937 10.7601C9.6937 11.8531 10.4457 12.5101 11.6897 12.5101H15.6957V12.6601L12.0857 17.9921C11.8257 18.3611 11.7027 18.7991 11.7027 19.2911C11.7027 20.4121 12.5507 21.1641 13.8227 21.1641Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM12.9607 20.8086C13.6577 20.8086 14.0687 20.5216 14.5467 19.7016L19.0177 11.8536C19.3867 11.2106 19.5237 10.7456 19.5237 10.1996C19.5237 9.1196 18.7307 8.3946 17.4457 8.3946H11.0607C10.1987 8.3946 9.6527 8.8866 9.6527 9.6796C9.6527 10.4726 10.1987 10.9786 11.0607 10.9786H15.9547V11.1016L11.6487 18.3746C11.4437 18.6896 11.3477 19.0036 11.3477 19.3726C11.3477 20.2346 12.0177 20.8086 12.9607 20.8086Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM13.4117 21.0004C14.2327 21.0004 14.6837 20.6724 15.2847 19.7014L19.4137 12.7554C19.8517 12.0454 20.0157 11.4704 20.0157 10.8144C20.0157 9.5434 19.1137 8.7224 17.6227 8.7224H11.3887C10.3227 8.7224 9.6797 9.3104 9.6797 10.2544C9.6797 11.2114 10.3357 11.7854 11.3887 11.7854H15.8187V11.9354L11.8807 18.1834C11.6487 18.5254 11.5387 18.8944 11.5387 19.3324C11.5387 20.3304 12.2907 21.0004 13.4117 21.0004Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM11.8667 20.07C12.2367 20.07 12.4827 19.906 12.7147 19.482L17.9237 9.475C18.1287 9.092 18.1837 8.873 18.1837 8.613C18.1837 8.012 17.7047 7.574 16.9807 7.574H10.2817C9.8847 7.574 9.6247 7.861 9.6247 8.244C9.6247 8.641 9.8987 8.928 10.2817 8.928H16.3517V9.023L11.1697 18.744C11.0607 18.949 11.0197 19.1 11.0197 19.305C11.0197 19.756 11.3887 20.07 11.8667 20.07Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM12.4137 20.5621C12.9607 20.5621 13.3027 20.3301 13.6717 19.6871L18.5257 10.7461C18.8397 10.1991 18.9217 9.8571 18.9217 9.4741C18.9217 8.5991 18.2657 7.9711 17.2267 7.9711H10.6507C10.0347 7.9711 9.6247 8.3811 9.6247 8.9821C9.6247 9.5841 10.0487 9.9801 10.6507 9.9801H16.1327V10.1031L11.3617 18.6211C11.1977 18.8811 11.1287 19.1271 11.1287 19.4281C11.1287 20.1111 11.6757 20.5621 12.4137 20.5621Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM12.0997 20.4394C12.5647 20.4394 12.8787 20.2204 13.1657 19.6874L18.2657 10.1304C18.5257 9.6384 18.5937 9.3514 18.5937 9.0644C18.5937 8.3124 17.9917 7.7524 17.1037 7.7524H10.4177C9.9397 7.7524 9.6117 8.0934 9.6117 8.5864C9.6117 9.0784 9.9527 9.4334 10.4177 9.4334H16.2287V9.5434L11.1977 18.7574C11.0607 18.9904 11.0057 19.1814 11.0057 19.4554C11.0057 20.0294 11.4847 20.4394 12.0997 20.4394Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM12.6467 20.6719C13.2617 20.6719 13.6307 20.4119 14.0547 19.7009L18.7437 11.2249C19.0727 10.6369 19.1817 10.2399 19.1817 9.7889C19.1817 8.8179 18.4567 8.1619 17.3227 8.1619H10.8277C10.1037 8.1619 9.6387 8.5999 9.6387 9.2829C9.6387 9.9669 10.1167 10.4179 10.8277 10.4179H16.0647V10.5409L11.4847 18.5119C11.3067 18.7989 11.2247 19.0719 11.2247 19.4139C11.2247 20.1659 11.8257 20.6719 12.6467 20.6719Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM11.5667 19.6052C11.8127 19.6052 11.9627 19.4962 12.0997 19.2222L17.4867 8.6272C17.6097 8.3672 17.6507 8.2302 17.6507 8.0392C17.6507 7.6422 17.3227 7.3552 16.8167 7.3552H10.0897C9.8167 7.3552 9.6387 7.5472 9.6387 7.8062C9.6387 8.0662 9.8297 8.2582 10.0897 8.2582H16.5157V8.3402L11.1287 18.7442C11.0607 18.8812 11.0327 18.9762 11.0327 19.1132C11.0327 19.4002 11.2657 19.6052 11.5667 19.6052Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM11.4157 19.3461C11.5937 19.3461 11.6897 19.2771 11.7847 19.0721L17.2537 8.1761C17.3357 7.9981 17.3767 7.8891 17.3767 7.7381C17.3767 7.4371 17.1167 7.2321 16.7347 7.2321H9.9937C9.7887 7.2321 9.6527 7.3831 9.6527 7.5741C9.6527 7.7521 9.7887 7.9021 9.9937 7.9021H16.5977V7.9841L11.1157 18.7441C11.0607 18.8401 11.0467 18.9081 11.0467 19.0041C11.0467 19.2091 11.1977 19.3461 11.4157 19.3461Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}