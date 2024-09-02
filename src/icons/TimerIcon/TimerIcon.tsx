import { IconProps } from "../../types"

export default function TimerIconIcon({
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
            d="              M14.9297 29.8598C23.3237 29.8598 29.8727 23.2968 29.8727 14.9298C29.8727 6.5628 23.3237 -0.0002 14.9297 -0.0002C13.5897 -0.0002 12.6187 0.7658 12.6187 2.0508V5.9878C12.6187 7.1228 13.4397 7.9568 14.5467 7.9568C15.6677 7.9568 16.4747 7.1228 16.4747 5.9878V4.8128C21.3277 5.5918 24.9917 9.8438 24.9917 14.9298C24.9917 20.4398 20.5487 24.9918 14.9297 24.9918C9.3237 24.9918 4.8667 20.4398 4.8667 14.9298C4.8667 12.9468 5.5097 10.9378 6.5627 9.3238C7.5057 7.8618 7.7927 6.7128 6.6447 5.6598C5.5507 4.6488 3.8007 4.7988 2.7207 6.3578C1.0257 8.7778 -0.0003 11.7578 -0.0003 14.9298C-0.0003 23.2968 6.5487 29.8598 14.9297 29.8598ZM17.1717 17.5688C18.5257 16.1738 18.2247 14.1778 16.6797 13.2068L10.9097 9.5708C9.5157 8.6958 8.3537 9.8988 9.2147 11.2658L12.8517 17.0348C13.8227 18.5938 15.8187 18.8948 17.1717 17.5688Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.875"
          className={className}
        >
          <path
            d="              M14.4377 28.8746C22.4487 28.8746 28.8747 22.4356 28.8747 14.4376C28.8747 6.4396 22.4487 -0.0004 14.4507 -0.0004C13.4117 -0.0004 12.7417 0.6016 12.7417 1.5996V6.2206C12.7417 7.0816 13.3577 7.7386 14.2187 7.7386C15.0797 7.7386 15.6817 7.0816 15.6817 6.2206V3.5816C21.1227 4.2106 25.2797 8.8316 25.2797 14.4376C25.2797 20.4256 20.4667 25.2796 14.4377 25.2796C8.4077 25.2796 3.5817 20.4256 3.5957 14.4376C3.6097 12.0036 4.4297 9.6936 5.8237 7.8746C6.4937 6.8906 6.6577 5.9886 5.8657 5.2226C5.0857 4.4846 3.8277 4.5666 3.0347 5.6606C1.1487 8.0796 -0.0003 11.1426 -0.0003 14.4376C-0.0003 22.4356 6.4397 28.8746 14.4377 28.8746ZM16.6527 16.7346C17.8687 15.4766 17.6097 13.7266 16.1877 12.7836L9.6797 8.4356C8.6547 7.7656 7.7107 8.7226 8.3807 9.7476L12.7287 16.2426C13.6577 17.6636 15.4217 17.9376 16.6527 16.7346Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 29.3944C22.9007 29.3944 29.4077 22.8864 29.4077 14.6974C29.4077 6.5074 22.9137 0.0004 14.7107 0.0004C13.5077 0.0004 12.6737 0.6974 12.6737 1.8454V6.0974C12.6737 7.1094 13.3987 7.8474 14.3967 7.8474C15.3807 7.8474 16.1057 7.1094 16.1057 6.0974V4.2244C21.2327 4.9354 25.1287 9.3654 25.1287 14.6974C25.1287 20.4394 20.5077 25.1294 14.6977 25.1294C8.8867 25.1294 4.2657 20.4394 4.2657 14.6974C4.2657 12.4964 5.0037 10.3494 6.2207 8.6404C7.0277 7.4104 7.2597 6.3714 6.2757 5.4554C5.3317 4.5664 3.8147 4.6894 2.8707 6.0294C1.0937 8.4494 -0.0003 11.4704 -0.0003 14.6974C-0.0003 22.8864 6.4937 29.3944 14.6977 29.3944ZM16.9257 17.1854C18.2107 15.8454 17.9377 13.9594 16.4477 13.0024L10.3357 9.0374C9.1057 8.2574 8.0527 9.3384 8.8187 10.5544L12.7827 16.6664C13.7537 18.1564 15.6267 18.4434 16.9257 17.1854Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2327 0 13.7267 0C13.0567 0 12.7697 0.355 12.7697 0.957V6.316C12.7697 6.781 13.0707 7.164 13.5487 7.164C14.0277 7.164 14.3417 6.781 14.3417 6.316V1.791C20.6857 2.133 25.6487 7.314 25.6487 13.713C25.6487 20.316 20.3297 25.648 13.7127 25.648C7.0957 25.648 1.7637 20.316 1.7777 13.713C1.7777 10.637 2.9397 7.861 4.8257 5.756C5.1547 5.359 5.1817 4.854 4.8257 4.498C4.4847 4.129 3.9097 4.156 3.5277 4.607C1.3537 7.041 -0.0003 10.24 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM15.6957 15.436C16.6797 14.396 16.4747 13.016 15.2987 12.195L8.2027 7.15C7.6157 6.727 7.0137 7.328 7.4377 7.916L12.4687 15.012C13.3027 16.188 14.6837 16.42 15.6957 15.436Z"
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
            d="              M14.1227 28.2461C21.8887 28.2461 28.2457 21.8751 28.2457 14.1231C28.2457 6.3711 21.8887 0.0001 14.1367 0.0001C13.3027 0.0001 12.8377 0.4921 12.8377 1.3121V6.3571C12.8377 7.0551 13.3167 7.5881 13.9997 7.5881C14.6977 7.5881 15.1757 7.0551 15.1757 6.3571V2.8031C20.9867 3.3361 25.4567 8.1761 25.4567 14.1231C25.4567 20.3981 20.4257 25.4571 14.1227 25.4571C7.8207 25.4571 2.7757 20.3981 2.7757 14.1231C2.7887 11.4021 3.7457 8.9001 5.3457 6.9591C5.8517 6.2621 5.9337 5.5231 5.3597 4.9491C4.7847 4.3611 3.8557 4.4301 3.2537 5.2091C1.2307 7.6421 -0.0003 10.7601 -0.0003 14.1231C-0.0003 21.8751 6.3577 28.2461 14.1227 28.2461ZM16.3237 16.2151C17.4457 15.0391 17.2127 13.4261 15.8727 12.5101L8.9007 7.7111C8.0937 7.1641 7.3007 7.9711 7.8477 8.7641L12.6467 15.7361C13.5627 17.0761 15.1617 17.3361 16.3237 16.2151Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5877 0.0004 13.9587 0.0004C13.2347 0.0004 12.8787 0.4374 12.8787 1.1484V6.4394C12.8787 7.0414 13.2887 7.5054 13.8767 7.5054C14.4787 7.5054 14.8887 7.0414 14.8887 6.4394V2.3654C20.9047 2.8434 25.5527 7.8064 25.5527 13.9454C25.5527 20.3984 20.3987 25.5664 13.9457 25.5664C7.4917 25.5664 2.3107 20.3984 2.3237 13.9454C2.3377 11.0604 3.3637 8.4494 5.0857 6.4394C5.4957 5.9064 5.5237 5.2634 5.0727 4.7854C4.6207 4.3064 3.8687 4.3474 3.3637 4.9494C1.2847 7.3824 -0.0003 10.5414 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM16.1327 15.9144C17.2127 14.7794 16.9937 13.2614 15.6957 12.3594L8.4627 7.3004C7.7797 6.8224 7.0687 7.5464 7.5467 8.2164L12.5917 15.4494C13.5077 16.7484 15.0257 16.9804 16.1327 15.9144Z"
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
            d="              M14.2597 28.5199C22.1207 28.5199 28.5197 22.1209 28.5197 14.2599C28.5197 6.3989 22.1347 -0.0001 14.2737 -0.0001C13.3437 -0.0001 12.7967 0.5469 12.7967 1.4359V6.3029C12.7967 7.0679 13.3297 7.6559 14.0957 7.6559C14.8617 7.6559 15.3947 7.0679 15.3947 6.3029V3.1309C21.0407 3.7049 25.3747 8.4629 25.3747 14.2599C25.3747 20.4119 20.4397 25.3889 14.2597 25.3889C8.0797 25.3889 3.1167 20.4119 3.1307 14.2599C3.1447 11.6619 4.0467 9.2419 5.5507 7.3559C6.1387 6.5349 6.2477 5.7289 5.5777 5.0589C4.9077 4.4159 3.8417 4.4849 3.1577 5.4009C1.2027 7.8339 -0.0003 10.9239 -0.0003 14.2599C-0.0003 22.1209 6.3987 28.5199 14.2597 28.5199ZM16.4607 16.4339C17.6227 15.2309 17.3907 13.5489 16.0097 12.6329L9.2417 8.0259C8.3397 7.4239 7.4787 8.2849 8.0797 9.1879L12.6737 15.9549C13.6037 17.3359 15.2717 17.5959 16.4607 16.4339Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.4117 0.0002C12.8107 0.0002 12.6327 0.2462 12.6327 0.6972V6.1662C12.6327 6.4532 12.7967 6.6992 13.1247 6.6992C13.4397 6.6992 13.6037 6.4532 13.6037 6.1662V1.0532C20.3987 1.2032 25.7717 6.6722 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 10.0902 2.3657 7.0822 4.4847 4.8532C4.7027 4.6212 4.7167 4.3202 4.5117 4.1152C4.3067 3.8962 3.9787 3.9102 3.7457 4.1562C1.4357 6.5762 -0.0003 9.8442 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM15.1207 14.8202C15.9827 13.9042 15.7907 12.7152 14.7657 11.9762L7.8617 6.9452C7.3827 6.6032 6.9317 7.0542 7.2737 7.5332L12.2907 14.4512C13.0427 15.4632 14.2327 15.6812 15.1207 14.8202Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C12.6877 0.0001 12.5647 0.1781 12.5647 0.5601V6.0841C12.5647 6.2891 12.6597 6.4531 12.8927 6.4531C13.1387 6.4531 13.2347 6.2891 13.2347 6.0841V0.6701C20.2477 0.7241 25.8257 6.3301 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 9.8031 2.0647 6.6851 4.3207 4.3891C4.4707 4.2381 4.4847 4.0331 4.3477 3.9101C4.2107 3.7731 4.0197 3.7731 3.8687 3.9241C1.4907 6.3301 -0.0003 9.6251 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM14.8207 14.4921C15.6267 13.6441 15.4357 12.5511 14.4917 11.8531L7.6837 6.8221C7.2737 6.5351 6.8907 6.9181 7.2047 7.3281L12.2087 14.1371C12.9067 15.0801 13.9997 15.2851 14.8207 14.4921Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
