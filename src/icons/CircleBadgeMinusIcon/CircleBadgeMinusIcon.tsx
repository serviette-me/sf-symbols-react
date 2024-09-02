import { IconProps } from "../../types"

export default function CircleBadgeMinusIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.384765625 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C16.7477 29.8591 18.4847 29.5451 20.0837 28.9431C18.9077 27.7671 18.0327 26.2911 17.5687 24.6371C16.7347 24.8691 15.8457 24.9921 14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C19.7007 4.8671 23.7067 8.1891 24.7457 12.6601C25.4437 12.4821 26.1817 12.4001 26.9197 12.4001C27.8907 12.4001 28.8337 12.5511 29.7087 12.8101C28.6697 5.5781 22.4357 0.0001 14.9297 0.0001C6.6987 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.6987 29.8591 14.9297 29.8591ZM26.9337 29.5581C31.0077 29.5581 34.3847 26.1541 34.3847 22.0941C34.3847 18.0191 31.0077 14.6561 26.9337 14.6561C22.8457 14.6561 19.4827 18.0191 19.4827 22.0941C19.4827 26.1541 22.8457 29.5581 26.9337 29.5581ZM23.3517 23.4611C22.6267 23.4611 22.0117 22.8321 21.9847 22.1071C21.9707 21.3691 22.6267 20.7541 23.3517 20.7541H30.5297C31.2537 20.7541 31.8687 21.3551 31.8687 22.1071C31.8687 22.8321 31.2537 23.4611 30.5297 23.4611Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.71484375 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C16.2967 28.8886 18.0877 28.5196 19.7287 27.8636C18.8807 26.9746 18.2387 25.9086 17.8557 24.7186C16.7887 25.0876 15.6407 25.2926 14.4377 25.2926C8.4217 25.2926 3.5957 20.4536 3.5957 14.4376C3.5957 8.4356 8.4217 3.5956 14.4237 3.5956C19.7697 3.5956 24.1857 7.4376 25.0877 12.4956C25.5797 12.4006 26.0997 12.3596 26.6187 12.3596C27.3577 12.3596 28.0687 12.4546 28.7517 12.6326C27.8497 5.5506 21.7387 -0.0004 14.4237 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5077 28.8886 14.4377 28.8886ZM26.5097 28.8066C30.4337 28.8066 33.7147 25.5256 33.7147 21.6016C33.7147 17.6636 30.4607 14.4106 26.5097 14.4106C22.5727 14.4106 19.3187 17.6636 19.3187 21.6016C19.3187 25.5386 22.5727 28.8066 26.5097 28.8066ZM22.9687 22.7086C22.3807 22.7086 21.8747 22.1896 21.8747 21.6016C21.8617 21.0276 22.3807 20.5076 22.9687 20.5076H30.0777C30.6657 20.5076 31.1577 21.0136 31.1577 21.6016C31.1577 22.1896 30.6657 22.7086 30.0777 22.7086Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.0703125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C16.5427 29.4084 18.2927 29.0664 19.9197 28.4374C18.8947 27.3984 18.1287 26.1134 17.7047 24.6774C16.7617 24.9784 15.7497 25.1424 14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9137 4.2794 14.6977 4.2794C19.7417 4.2794 23.9397 7.8344 24.9097 12.5914C25.5117 12.4554 26.1407 12.3864 26.7827 12.3864C27.6307 12.3864 28.4787 12.5094 29.2577 12.7424C28.2867 5.5784 22.1077 0.0004 14.6977 0.0004C6.6037 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM26.7287 29.2034C30.7347 29.2034 34.0707 25.8674 34.0707 21.8614C34.0707 17.8554 30.7477 14.5474 26.7287 14.5474C22.7227 14.5474 19.4007 17.8554 19.4007 21.8614C19.4007 25.8674 22.7227 29.2034 26.7287 29.2034ZM23.1737 23.1054C22.5177 23.1054 21.9437 22.5314 21.9297 21.8754C21.9157 21.2184 22.5177 20.6444 23.1737 20.6444H30.3107C30.9807 20.6444 31.5407 21.2054 31.5407 21.8754C31.5407 22.5314 30.9807 23.1054 30.3107 23.1054Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.56640625 27.6171875"
          className={className}
        >
          <path
            d="              M13.7264 27.426C15.7224 27.426 17.6234 26.988 19.3324 26.182C18.9494 25.744 18.6344 25.225 18.3884 24.691C16.9534 25.307 15.3804 25.648 13.7264 25.648C7.1094 25.648 1.7914 20.316 1.7914 13.713C1.7914 7.096 7.0954 1.764 13.7124 1.764C19.9064 1.764 24.9784 6.453 25.5664 12.469C25.7574 12.455 26.0314 12.455 26.2634 12.469C26.6464 12.469 27.0024 12.51 27.3714 12.592C26.7964 5.592 20.8364 0 13.7124 0C6.2074 0 0.0004 6.193 0.0004 13.713C0.0004 21.219 6.2074 27.426 13.7264 27.426ZM25.7714 27.617C29.4624 27.617 32.5664 24.541 32.5664 20.822C32.5664 17.09 29.5044 14.014 25.7714 14.014C22.0394 14.014 18.9764 17.09 18.9764 20.822C18.9764 24.555 22.0394 27.617 25.7714 27.617ZM22.1754 21.547C21.7794 21.547 21.4514 21.205 21.4514 20.822C21.4514 20.426 21.7794 20.084 22.1754 20.084H29.3534C29.7504 20.084 30.0784 20.426 30.0784 20.822C30.0784 21.205 29.7504 21.547 29.3534 21.547Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.291015625 28.314453125"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C16.0237 28.2461 17.8277 27.8631 19.4827 27.1521C18.8667 26.4551 18.3747 25.6481 18.0327 24.7601C16.8167 25.2111 15.5037 25.4711 14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C19.8107 2.7891 24.4997 6.9311 25.3067 12.3871C25.6617 12.3321 26.0587 12.3181 26.4277 12.3181C27.0157 12.3181 27.5897 12.3871 28.1367 12.5231C27.3297 5.5231 21.2867 0.0001 14.1097 0.0001C6.3707 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3847 28.2461 14.1227 28.2461ZM26.2497 28.3141C30.0777 28.3141 33.2907 25.1151 33.2907 21.2731C33.2907 17.4181 30.1057 14.2461 26.2497 14.2461C22.3947 14.2461 19.2087 17.4181 19.2087 21.2731C19.2087 25.1421 22.3947 28.3141 26.2497 28.3141ZM22.7227 22.2171C22.2167 22.2171 21.7927 21.7791 21.7927 21.2731C21.7927 20.7811 22.2167 20.3441 22.7227 20.3441H29.7777C30.2827 20.3441 30.7067 20.7811 30.7067 21.2731C30.7067 21.7791 30.2827 22.2171 29.7777 22.2171Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.044921875 28.041015625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C15.8597 27.8904 17.6917 27.4944 19.3597 26.7554C18.8537 26.1684 18.4437 25.4984 18.1287 24.7734C16.8297 25.2794 15.4357 25.5664 13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C19.8377 2.3244 24.6637 6.6584 25.4437 12.3324C25.7167 12.3044 26.0317 12.2914 26.3187 12.2914C26.8237 12.3044 27.3167 12.3454 27.7947 12.4554C27.0297 5.5094 21.0407 0.0004 13.9317 0.0004C6.3027 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3167 27.8904 13.9457 27.8904ZM26.0997 28.0414C29.8727 28.0414 33.0447 24.8964 33.0447 21.0954C33.0447 17.2814 29.9137 14.1504 26.0997 14.1504C22.2987 14.1504 19.1547 17.2954 19.1547 21.0954C19.1547 24.9234 22.2987 28.0414 26.0997 28.0414ZM22.5857 21.9294C22.1347 21.9294 21.7517 21.5334 21.7517 21.0954C21.7517 20.6584 22.1347 20.2614 22.5857 20.2614H29.6137C30.0647 20.2614 30.4477 20.6584 30.4477 21.0954C30.4477 21.5334 30.0647 21.9294 29.6137 21.9294Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.46875 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C16.1467 28.5199 17.9377 28.1509 19.5917 27.4529C18.8667 26.6879 18.3067 25.7579 17.9507 24.7329C16.8027 25.1559 15.5587 25.3889 14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C19.7967 3.1309 24.3637 7.1509 25.2107 12.4419C25.6207 12.3599 26.0727 12.3319 26.5097 12.3319C27.1657 12.3319 27.7947 12.4139 28.3967 12.5649C27.5487 5.5369 21.4787 -0.0001 14.2457 -0.0001C6.4257 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM26.3597 28.5329C30.2287 28.5329 33.4687 25.2929 33.4687 21.4099C33.4687 17.5269 30.2557 14.3149 26.3597 14.3149C22.4767 14.3149 19.2637 17.5269 19.2637 21.4099C19.2637 25.3199 22.4767 28.5329 26.3597 28.5329ZM22.8317 22.4219C22.2847 22.4219 21.8337 21.9569 21.8207 21.4239C21.8207 20.8909 22.2847 20.4259 22.8317 20.4259H29.9007C30.4477 20.4259 30.8987 20.8769 30.8987 21.4239C30.8987 21.9569 30.4477 22.4219 29.9007 22.4219Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.91015625 27.056640625"
          className={className}
        >
          <path
            d="              M13.4124 26.8102C15.5174 26.8102 17.5004 26.3182 19.2914 25.4292C19.0584 25.1702 18.8674 24.8832 18.7034 24.5822C17.0894 25.3472 15.3124 25.7712 13.4124 25.7712C6.5764 25.7712 1.0524 20.2342 1.0524 13.4122C1.0524 6.5902 6.5764 1.0392 13.4124 1.0392C19.9744 1.0392 25.3614 6.1792 25.7304 12.6742C25.8124 12.6602 26.0314 12.6742 26.1684 12.6872C26.3734 12.7012 26.5784 12.7282 26.7964 12.7832C26.4554 5.7152 20.5484 0.0002 13.4124 0.0002C6.0434 0.0002 0.0004 6.0432 0.0004 13.4122C0.0004 20.7672 6.0434 26.8102 13.4124 26.8102ZM25.3064 27.0562C28.9164 27.0562 31.9104 24.0762 31.9104 20.4532C31.9104 16.8302 28.9294 13.8492 25.3064 13.8492C21.6974 13.8492 18.7034 16.8442 18.7034 20.4532C18.7034 24.0902 21.6974 27.0562 25.3064 27.0562ZM21.6154 21.0412C21.3004 21.0412 21.0274 20.7672 21.0274 20.4532C21.0274 20.1382 21.3004 19.8652 21.6154 19.8652H28.9844C29.2984 19.8652 29.5724 20.1382 29.5724 20.4532C29.5724 20.7672 29.2984 21.0412 28.9844 21.0412Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 26.755859375"
          className={className}
        >
          <path
            d="              M13.2484 26.4961C15.4214 26.4961 17.4454 25.9761 19.2634 25.0471C19.1134 24.8691 18.9764 24.6911 18.8674 24.5141C17.1584 25.3481 15.2714 25.8261 13.2484 25.8261C6.3164 25.8261 0.6704 20.1801 0.6704 13.2481C0.6704 6.3031 6.3164 0.6701 13.2484 0.6701C20.0154 0.6701 25.5664 6.0431 25.8124 12.7561C25.8264 12.7561 26.0174 12.7831 26.1274 12.7971C26.2364 12.8101 26.3734 12.8381 26.4964 12.8651C26.2914 5.7561 20.4124 0.0001 13.2484 0.0001C5.9614 0.0001 0.0004 5.9611 0.0004 13.2481C0.0004 20.5351 5.9614 26.4961 13.2484 26.4961ZM25.0744 26.7561C28.6294 26.7561 31.5684 23.8301 31.5684 20.2621C31.5684 16.6801 28.6424 13.7541 25.0744 13.7541C21.5194 13.7541 18.5664 16.7071 18.5664 20.2621C18.5664 23.8301 21.5194 26.7561 25.0744 26.7561ZM21.3284 20.7811C21.0544 20.7811 20.8224 20.5351 20.8224 20.2621C20.8224 19.9881 21.0544 19.7421 21.3284 19.7421H28.7934C29.0664 19.7421 29.3124 19.9881 29.3124 20.2621C29.3124 20.5351 29.0664 20.7811 28.7934 20.7811Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}