import { IconProps } from "../../types"

export default function ACircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM11.0607 21.4241C9.6657 21.4241 8.8867 20.6581 8.8867 19.3321C8.8867 19.0041 8.9687 18.5251 9.1737 17.8551L11.2797 11.3751C11.9077 9.3511 13.0567 8.4351 14.8887 8.4351C16.7757 8.4351 17.9787 9.3651 18.5937 11.3751L20.6857 17.8551C20.8907 18.5251 20.9727 19.0041 20.9727 19.3321C20.9727 20.6581 20.2067 21.4241 18.8127 21.4241C17.6507 21.4241 16.9257 20.7671 16.6387 19.4001L16.5017 18.8121H13.3707L13.2207 19.4001C12.9477 20.7671 12.2227 21.4241 11.0607 21.4241ZM13.9997 15.8051H15.8727L15.0117 12.0311H14.8617Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM10.1857 20.9996C9.1737 20.9996 8.5727 20.4126 8.5727 19.4546C8.5727 19.1816 8.6267 18.8396 8.7907 18.3616L11.8257 9.8026C12.2777 8.4216 13.1117 7.7656 14.4097 7.7656C15.7367 7.7656 16.6117 8.4216 17.0627 9.8026L20.0837 18.3616C20.2477 18.8396 20.3027 19.1816 20.3027 19.4546C20.3027 20.4126 19.7007 20.9996 18.7027 20.9996C17.8557 20.9996 17.3087 20.5486 17.0627 19.5376L16.4747 17.7456H12.4007L11.8127 19.5376C11.5667 20.5486 11.0197 20.9996 10.1857 20.9996ZM13.0017 15.3806H15.8867L14.5057 10.7736H14.3687Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM10.6507 21.2324C9.4337 21.2324 8.7367 20.5484 8.7367 19.4004C8.7367 19.0994 8.8187 18.6754 8.9957 18.1014L11.5387 10.6364C12.0857 8.9144 13.0837 8.1344 14.6567 8.1344C16.2827 8.1344 17.3357 8.9274 17.8687 10.6364L20.4117 18.1014C20.5897 18.6754 20.6577 19.0994 20.6577 19.4004C20.6577 20.5484 19.9747 21.2324 18.7577 21.2324C17.7457 21.2324 17.1037 20.6724 16.8437 19.4684L16.4887 18.3204H12.9067L12.5647 19.4684C12.2907 20.6724 11.6617 21.2324 10.6507 21.2324ZM13.5217 15.6134H15.8727L14.7797 11.4434H14.6287Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM9.1327 20.152C8.6267 20.152 8.3127 19.852 8.3127 19.4C8.3127 19.223 8.3397 19.086 8.4217 18.84L12.4957 7.971C12.7147 7.396 13.1117 7.109 13.6987 7.109C14.2867 7.109 14.6977 7.396 14.9157 7.971L18.9907 18.84C19.0727 19.086 19.0997 19.223 19.0997 19.4C19.0997 19.838 18.7717 20.152 18.2927 20.152C17.8827 20.152 17.6097 19.961 17.4317 19.455L16.2827 16.215H11.1287L9.9807 19.455C9.8027 19.975 9.5297 20.152 9.1327 20.152ZM11.5937 14.848H15.8187L13.7677 9.092H13.6447Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM9.6247 20.7131C8.8457 20.7131 8.3807 20.2481 8.3807 19.5371C8.3807 19.2911 8.4077 19.0451 8.5447 18.6621L12.1677 8.7771C12.5097 7.8061 13.1527 7.3281 14.1097 7.3281C15.0797 7.3281 15.7367 7.8061 16.0777 8.7771L19.7007 18.6621C19.8237 19.0451 19.8657 19.2911 19.8657 19.5371C19.8657 20.2481 19.3867 20.7131 18.6207 20.7131C17.9917 20.7131 17.5687 20.3981 17.3357 19.6051L16.4607 17.0491H11.7847L10.9097 19.6051C10.6777 20.3981 10.2537 20.7131 9.6247 20.7131ZM12.3597 15.1071H15.8867L14.1917 9.9671H14.0547Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM9.3107 20.5484C8.6677 20.5484 8.2577 20.1524 8.2577 19.5784C8.2577 19.3594 8.2847 19.1544 8.4077 18.8394L12.3597 8.2034C12.6467 7.4644 13.1657 7.0824 13.9317 7.0824C14.7107 7.0824 15.2437 7.4644 15.5177 8.2034L19.4827 18.8394C19.5917 19.1544 19.6327 19.3594 19.6327 19.5784C19.6327 20.1524 19.2087 20.5484 18.5797 20.5484C18.0607 20.5484 17.7047 20.3024 17.4867 19.6464L16.4607 16.6524H11.4297L10.4047 19.6464C10.1857 20.3164 9.8167 20.5484 9.3107 20.5484ZM11.9907 14.9434H15.8867L14.0137 9.5024H13.8637Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM9.8707 20.8359C8.9957 20.8359 8.4627 20.3169 8.4627 19.4959C8.4627 19.2499 8.5037 18.9629 8.6547 18.5389L12.0177 9.2149C12.4137 8.0669 13.1247 7.5199 14.2327 7.5199C15.3667 7.5199 16.1187 8.0799 16.5017 9.2149L19.8657 18.5389C20.0157 18.9629 20.0567 19.2499 20.0567 19.5099C20.0567 20.3169 19.5237 20.8359 18.6487 20.8359C17.9377 20.8359 17.4587 20.4529 17.2127 19.5779L16.4747 17.3499H12.0447L11.3067 19.5779C11.0607 20.4669 10.5817 20.8359 9.8707 20.8359ZM12.6327 15.2309H15.8867L14.3277 10.3089H14.1917Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM8.9007 19.6332C8.5727 19.6332 8.3667 19.4552 8.3667 19.1682C8.3667 19.0722 8.3947 19.0042 8.4487 18.8532L12.6877 7.6702C12.8107 7.3142 13.0427 7.1642 13.3987 7.1642C13.7407 7.1642 13.9727 7.3142 14.1097 7.6702L18.3477 18.8532C18.3887 19.0042 18.4157 19.0722 18.4157 19.1812C18.4157 19.4412 18.1977 19.6332 17.9237 19.6332C17.6367 19.6332 17.4867 19.5232 17.3637 19.1952L16.0507 15.6542H10.7327L9.4197 19.1952C9.2967 19.5372 9.1597 19.6332 8.9007 19.6332ZM11.0607 14.7382H15.7227L13.4257 8.5582H13.3577Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM8.7777 19.3591C8.5447 19.3591 8.4077 19.2501 8.4077 19.0451C8.4077 18.9761 8.4217 18.9491 8.4627 18.8401L12.7697 7.5061C12.8517 7.2731 13.0017 7.1641 13.2477 7.1641C13.4527 7.1641 13.6037 7.2731 13.6987 7.5061L18.0057 18.8401C18.0467 18.9491 18.0607 18.9761 18.0607 19.0581C18.0607 19.2231 17.9097 19.3591 17.7187 19.3591C17.4997 19.3591 17.4177 19.2771 17.3357 19.0581L15.9277 15.3401H10.5277L9.1327 19.0581C9.0507 19.2911 8.9687 19.3591 8.7777 19.3591ZM10.7867 14.6701H15.6817L13.2617 8.2851H13.2067Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
