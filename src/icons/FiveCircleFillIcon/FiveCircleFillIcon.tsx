import { IconProps } from "../../types"

export default function FiveCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.8887 21.6421C12.1137 21.6421 10.2677 20.8221 9.7067 19.5231C9.5977 19.2501 9.5427 18.9761 9.5427 18.6621C9.5427 17.6501 10.2537 16.9941 11.5117 16.9941C12.4547 16.9941 12.8927 17.2541 13.2617 17.5141C13.6717 17.8281 14.0277 18.1011 14.7657 18.1011C15.5037 18.1011 16.0647 17.5681 16.0647 16.8981C16.0647 16.1741 15.5857 15.6951 14.8747 15.6951C14.3967 15.6951 14.0817 15.8591 13.6987 16.0231C13.2757 16.2281 12.8107 16.4061 12.0037 16.4061C10.3087 16.4061 9.4747 15.5991 9.5707 14.0681L9.7757 10.7321C9.8437 9.4611 10.7327 8.5581 12.0317 8.5581H18.1287C19.4007 8.5581 20.0837 9.1331 20.0837 10.1991C20.0837 11.2521 19.3457 11.8671 18.1287 11.8671H13.4397L13.2887 13.8771H13.5217C13.9457 13.0841 15.0937 12.5781 16.4067 12.5781C19.0037 12.5781 20.6717 14.1911 20.6717 16.7481C20.6717 19.7691 18.4707 21.6421 14.8887 21.6421Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.3687 21.1636C11.8667 21.1636 10.1167 20.3026 9.5567 18.9216C9.4607 18.6896 9.4067 18.4436 9.4067 18.1566C9.4067 17.3766 9.9527 16.8576 10.8687 16.8576C11.5387 16.8576 11.9357 17.0896 12.2367 17.4586C12.6737 18.0746 13.3437 18.4976 14.2867 18.4976C15.4487 18.4976 16.2967 17.6636 16.2967 16.5426C16.2967 15.4086 15.5727 14.6566 14.4647 14.6566C13.8637 14.6566 13.4397 14.8336 12.9197 15.2036C12.4277 15.5176 12.0317 15.6676 11.3747 15.6676C10.1307 15.6676 9.4747 14.9976 9.5567 13.8226L9.8577 9.8166C9.9117 8.7636 10.6507 8.0526 11.7717 8.0526H17.7327C18.6207 8.0526 19.1407 8.5176 19.1407 9.3246C19.1407 10.1036 18.5797 10.5816 17.7327 10.5816H12.5777L12.3317 13.4946H12.5097C12.9607 12.7556 14.1367 12.2496 15.3667 12.2496C17.9507 12.2496 19.6877 13.9316 19.6877 16.4476C19.6877 19.3186 17.5957 21.1636 14.3687 21.1636Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6427 21.4234C11.9907 21.4234 10.1987 20.5764 9.6387 19.2504C9.5297 18.9904 9.4747 18.7304 9.4747 18.4294C9.4747 17.5274 10.1167 16.9254 11.2107 16.9254C12.0177 16.9254 12.4417 17.1854 12.7697 17.5004C13.2067 17.9514 13.7127 18.2934 14.5327 18.2934C15.4767 18.2934 16.1737 17.6234 16.1737 16.7344C16.1737 15.8184 15.5727 15.2164 14.6837 15.2164C14.1507 15.2164 13.7817 15.3804 13.3297 15.6404C12.8787 15.9004 12.4417 16.0644 11.7027 16.0644C10.2127 16.0644 9.4747 15.3264 9.5707 13.9594L9.8167 10.3084C9.8847 9.1464 10.6917 8.3394 11.9077 8.3394H17.9507C19.0317 8.3394 19.6327 8.8454 19.6327 9.7894C19.6327 10.7184 18.9907 11.2654 17.9507 11.2654H13.0297L12.8377 13.6994H13.0427C13.4807 12.9334 14.6427 12.4274 15.9137 12.4274C18.4977 12.4274 20.2067 14.0824 20.2067 16.6114C20.2067 19.5644 18.0607 21.4234 14.6427 21.4234Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.6447 20.248C11.4847 20.248 9.9397 19.291 9.4337 17.855C9.3657 17.678 9.3237 17.514 9.3237 17.322C9.3237 16.898 9.6247 16.598 10.0757 16.598C10.4047 16.598 10.6777 16.775 10.8557 17.145C11.2517 18.17 12.3597 18.84 13.6577 18.84C15.3127 18.84 16.5567 17.609 16.5567 15.941C16.5567 14.273 15.4627 13.139 13.8357 13.139C12.9747 13.139 12.3457 13.412 11.5937 14.15C11.1697 14.479 10.9237 14.588 10.5137 14.588C9.9117 14.588 9.5427 14.164 9.5837 13.535L9.9937 8.504C10.0487 7.848 10.4997 7.438 11.2247 7.438H17.0897C17.4867 7.438 17.7597 7.725 17.7597 8.135C17.7597 8.545 17.4727 8.832 17.0897 8.832H11.4157L11.0607 13.084H11.1427C11.7167 12.318 12.8787 11.799 14.0277 11.799C16.5017 11.799 18.2387 13.494 18.2387 15.9C18.2387 18.512 16.3657 20.248 13.6447 20.248Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.0407 20.8361C11.7027 20.8361 10.0217 19.9471 9.4607 18.5391C9.3657 18.3061 9.3107 18.0881 9.3107 17.8141C9.3107 17.1851 9.7477 16.7481 10.4457 16.7481C10.9507 16.7481 11.3067 16.9941 11.5797 17.4041C12.0317 18.2241 12.9067 18.7441 13.9997 18.7441C15.3947 18.7441 16.4607 17.7051 16.4607 16.3101C16.4607 14.9021 15.5587 13.9731 14.2047 13.9731C13.5347 13.9731 13.0297 14.1781 12.4137 14.6831C11.8807 15.0531 11.5387 15.1891 10.9647 15.1891C10.0077 15.1891 9.4747 14.6151 9.5427 13.6581L9.8987 9.2151C9.9527 8.3121 10.6097 7.7241 11.6077 7.7241H17.4867C18.1157 7.7241 18.5257 8.1211 18.5257 8.7501C18.5257 9.3511 18.1017 9.7621 17.4867 9.7621H12.0177L11.7307 13.2481H11.8537C12.3457 12.5371 13.5217 12.0311 14.6977 12.0311C17.2817 12.0311 19.0447 13.7401 19.0447 16.2561C19.0447 19.0311 17.0347 20.8361 14.0407 20.8361Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.8637 20.6584C11.6077 20.6584 9.9667 19.7554 9.4067 18.3204C9.3107 18.1014 9.2557 17.8824 9.2557 17.6364C9.2557 17.0894 9.6387 16.6934 10.2127 16.6934C10.6227 16.6934 10.9647 16.9254 11.2107 17.3774C11.6757 18.3064 12.6597 18.8804 13.8227 18.8804C15.3807 18.8804 16.5427 17.7324 16.5427 16.1874C16.5427 14.6284 15.5447 13.5894 14.0547 13.5894C13.3437 13.5894 12.8107 13.8084 12.1407 14.3824C11.5667 14.8064 11.2517 14.9164 10.7327 14.9164C9.9527 14.9164 9.4747 14.3824 9.5297 13.5624L9.9257 8.8864C9.9807 8.0664 10.5817 7.5464 11.5117 7.5464H17.3497C17.8417 7.5464 18.1837 7.9024 18.1837 8.4214C18.1837 8.9274 17.8277 9.2964 17.3497 9.2964H11.7167L11.3887 13.1114H11.4847C11.9907 12.4144 13.1657 11.9084 14.3147 11.9084C16.8987 11.9084 18.6897 13.6444 18.6897 16.1324C18.6897 18.8674 16.7207 20.6584 13.8637 20.6584Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.1917 20.9729C11.7717 20.9729 10.0627 20.0979 9.5017 18.7029C9.4067 18.4709 9.3517 18.2379 9.3517 17.9649C9.3517 17.2679 9.8297 16.8029 10.6227 16.8029C11.2107 16.8029 11.5797 17.0349 11.8667 17.4179C12.3187 18.1699 13.0977 18.6349 14.1227 18.6349C15.4217 18.6349 16.3927 17.6919 16.3927 16.4199C16.3927 15.1209 15.5587 14.2739 14.3147 14.2739C13.6717 14.2739 13.2067 14.4649 12.6327 14.9159C12.1137 15.2579 11.7437 15.3949 11.1427 15.3949C10.0627 15.3949 9.4747 14.7789 9.5427 13.7269L9.8707 9.4749C9.9397 8.5179 10.6227 7.8749 11.6757 7.8749H17.5957C18.3337 7.8749 18.7847 8.2989 18.7847 8.9959C18.7847 9.6799 18.3067 10.1169 17.5957 10.1169H12.2637L11.9907 13.3579H12.1267C12.6057 12.6329 13.7817 12.1269 14.9847 12.1269C17.5687 12.1269 19.3187 13.8219 19.3187 16.3379C19.3187 19.1539 17.2817 20.9729 14.1917 20.9729Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.3577 19.7152C11.3337 19.7152 9.8847 18.6892 9.4747 17.2402C9.4477 17.1442 9.4197 17.0352 9.4197 16.9122C9.4197 16.6522 9.6117 16.4612 9.8847 16.4612C10.1167 16.4612 10.2817 16.5842 10.3767 16.8572C10.7047 17.9922 11.9487 18.7852 13.4397 18.7852C15.2437 18.7852 16.5837 17.4452 16.5837 15.6132C16.5837 13.8082 15.3397 12.5512 13.5347 12.5512C12.5097 12.5512 11.7437 12.9062 10.8687 13.8632C10.6367 14.0682 10.4997 14.1372 10.2407 14.1372C9.8577 14.1372 9.6247 13.8772 9.6527 13.4942L10.0897 8.0122C10.1307 7.5742 10.4047 7.3142 10.8417 7.3142H16.7347C17.0077 7.3142 17.1987 7.5062 17.1987 7.7652C17.1987 8.0252 17.0077 8.2302 16.7347 8.2302H11.0197L10.6227 13.0562H10.7047C11.3477 12.1952 12.4957 11.6622 13.6577 11.6622C15.9687 11.6622 17.6227 13.2892 17.6227 15.5992C17.6227 18.0602 15.9007 19.7152 13.3577 19.7152Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2207 19.4281C11.2517 19.4281 9.8577 18.3611 9.5017 16.9121C9.4747 16.8441 9.4607 16.7751 9.4607 16.6931C9.4607 16.5151 9.5977 16.3791 9.7887 16.3791C9.9667 16.3791 10.0897 16.4741 10.1307 16.7071C10.4177 17.8961 11.7437 18.7581 13.3297 18.7581C15.2027 18.7581 16.5977 17.3491 16.5977 15.4491C16.5977 13.5491 15.2847 12.2361 13.3847 12.2361C12.2637 12.2361 11.4437 12.6331 10.4997 13.6991C10.3637 13.8491 10.2817 13.9041 10.0897 13.9041C9.8297 13.9041 9.6657 13.7131 9.6937 13.4671L10.1447 7.7381C10.1717 7.4241 10.3497 7.2321 10.6507 7.2321H16.5707C16.7757 7.2321 16.8987 7.3831 16.8987 7.5741C16.8987 7.7521 16.7757 7.9161 16.5707 7.9161H10.8277L10.4047 13.0291H10.4727C11.1567 12.1131 12.3047 11.5801 13.4527 11.5801C15.6957 11.5801 17.3087 13.1801 17.3087 15.4221C17.3087 17.8141 15.6547 19.4281 13.2207 19.4281Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}