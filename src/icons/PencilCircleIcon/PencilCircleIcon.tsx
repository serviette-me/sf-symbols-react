import { IconProps } from "../../types"

export default function PencilCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM20.0157 11.9491L20.9997 11.0061C21.5877 10.4181 21.6017 9.6111 21.0277 9.0511L20.6307 8.6411C20.0707 8.0801 19.2497 8.0801 18.6617 8.6821L17.7327 9.6521ZM11.4297 20.5621L19.1957 12.7971L16.8707 10.4591L9.1187 18.2661L8.4217 20.1391C8.1617 20.8491 8.8457 21.5191 9.5427 21.2601Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM19.6877 11.0336L20.6577 10.0626C21.1777 9.5426 21.2047 8.8866 20.7127 8.4086L20.3577 8.0526C19.8657 7.5606 19.2087 7.5876 18.7027 8.1076L17.7327 9.0786ZM10.4867 20.2206L18.8667 11.8676L16.8847 9.8986L8.5317 18.2656L7.8067 20.0976C7.6017 20.6306 8.1077 21.1096 8.6137 20.9316Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM19.8657 11.5254L20.8357 10.5684C21.3967 10.0214 21.4097 9.2834 20.8767 8.7504L20.5077 8.3674C19.9747 7.8474 19.2367 7.8614 18.6757 8.4224L17.7327 9.3924ZM10.9787 20.4124L19.0317 12.3594L16.8707 10.1994L8.8457 18.2654L8.1347 20.1254C7.8887 20.7544 8.5037 21.3414 9.1057 21.1094Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM19.2637 9.488L20.1117 8.627C20.5217 8.217 20.5347 7.793 20.1657 7.424L19.9477 7.205C19.5917 6.85 19.1547 6.891 18.7577 7.273L17.9097 8.121ZM9.1327 19.592L18.5527 10.186L17.1987 8.832L7.7797 18.238L6.9727 19.947C6.8637 20.221 7.1227 20.453 7.3417 20.357Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM19.4687 10.4451L20.4527 9.4611C20.9177 8.9821 20.9457 8.4221 20.5077 7.9841L20.1797 7.6561C19.7417 7.2191 19.1817 7.2601 18.7167 7.7241L17.7327 8.7091ZM9.8987 19.9881L18.6487 11.2651L16.8987 9.5151L8.1617 18.2521L7.4097 20.0701C7.2457 20.4801 7.6427 20.8361 8.0117 20.7131Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM19.3457 10.1174L20.3297 9.1194C20.7677 8.6544 20.8087 8.1624 20.3987 7.7524L20.0837 7.4374C19.6737 7.0274 19.1677 7.0684 18.7307 7.5054L17.7327 8.4904ZM9.5567 19.8654L18.5257 10.9234L16.9117 9.3104L7.9567 18.2384L7.1777 20.0564C7.0407 20.3984 7.3687 20.6854 7.6697 20.5764Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM19.5647 10.7049L20.5487 9.7209C21.0277 9.2289 21.0547 8.6269 20.6037 8.1619L20.2617 7.8339C19.7967 7.3689 19.1957 7.3969 18.7027 7.8889L17.7327 8.8729ZM10.1577 20.0979L18.7437 11.5259L16.8987 9.6799L8.3257 18.2519L7.5737 20.0839C7.3967 20.5489 7.8477 20.9589 8.2577 20.8089Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM19.1677 8.6682L19.8237 7.9982C20.1797 7.6422 20.1797 7.3142 19.8657 7.0132L19.7697 6.9182C19.4827 6.6172 19.1407 6.6582 18.8127 6.9862L18.1427 7.6422ZM8.5447 19.2502L18.5937 9.2282L17.5817 8.2032L7.5467 18.2242L6.6987 19.8242C6.6167 19.9882 6.7947 20.1382 6.9177 20.0702Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM19.1137 8.2301L19.6737 7.6701C20.0157 7.3421 19.9887 7.0551 19.7147 6.7811L19.6877 6.7541C19.4277 6.4941 19.1267 6.5351 18.8397 6.8221L18.2657 7.3961ZM8.2577 19.0581L18.6077 8.7231L17.7737 7.8751L7.4377 18.2111L6.5627 19.7421C6.4937 19.8651 6.6307 19.9611 6.7127 19.9061Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
