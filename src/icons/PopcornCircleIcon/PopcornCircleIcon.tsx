import { IconProps } from "../../types"

export default function PopcornCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM12.9067 12.2641C13.4117 11.7441 14.1507 11.4431 14.9297 11.4431C15.7227 11.4431 16.4477 11.7441 16.9397 12.2641C17.3767 11.7581 18.0327 11.4571 18.7577 11.4571C19.2227 11.4571 19.6737 11.5801 20.0427 11.7991C20.0707 11.6761 20.0977 11.5391 20.0977 11.4021C20.0977 10.2951 19.4417 9.5291 18.4297 9.4471C18.1157 8.8461 17.5957 8.5041 16.9667 8.5041C16.5427 8.5041 16.1467 8.6271 15.8317 8.9001C15.7497 8.8731 15.6267 8.8591 15.5447 8.8731C15.2307 8.2991 14.6287 7.9431 13.9727 7.9431C13.1527 7.9431 12.4827 8.4221 12.3317 9.0371C11.9487 9.0781 11.6347 9.4061 11.5667 9.7621C10.6097 9.7891 9.8297 10.5821 9.8297 11.5661C9.8297 11.6351 9.8297 11.6891 9.8437 11.7711C10.2127 11.5661 10.6367 11.4571 11.0877 11.4571C11.8257 11.4571 12.4687 11.7581 12.9067 12.2641ZM14.1777 21.8341H15.6817L16.3927 14.1091C16.4887 13.1251 15.7087 12.6461 14.9297 12.6461C14.1637 12.6461 13.3847 13.1251 13.4667 14.1091ZM12.7147 21.8341H13.0297L12.2637 13.7261C12.2087 13.0701 11.7307 12.6601 11.0877 12.6601C10.3637 12.6601 9.7347 13.1931 9.8987 14.0681L11.0737 20.2621C11.2517 21.2321 11.7577 21.8341 12.7147 21.8341ZM17.1307 21.8341C18.1017 21.8341 18.5937 21.2321 18.7717 20.2621L19.9477 14.0681C20.1117 13.1931 19.4827 12.6601 18.7577 12.6601C18.1287 12.6601 17.6367 13.0701 17.5817 13.7261L16.8297 21.8341Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM12.3187 11.7446C12.8237 11.1286 13.6037 10.7876 14.4237 10.7876C15.2307 10.7876 16.0237 11.1286 16.5157 11.7446C16.9527 11.2106 17.6367 10.9106 18.3747 10.9106C18.8257 10.9106 19.2637 11.0336 19.6327 11.2386C19.7557 11.0196 19.8377 10.7596 19.8377 10.4996C19.8377 9.3656 19.1267 8.5726 18.1017 8.5316C17.8007 7.9026 17.2817 7.5196 16.6117 7.5196C16.1597 7.5196 15.7637 7.6566 15.4357 7.9436C15.3127 7.9026 15.1347 7.8886 14.9977 7.9156C14.6977 7.3006 14.0817 6.9176 13.3987 6.9176C12.5097 6.9176 11.8667 7.4516 11.7307 8.0386C11.2797 8.0386 10.9097 8.4496 10.8687 8.8456C9.8847 8.8456 9.0777 9.6526 9.0777 10.6636C9.0777 10.8556 9.1057 11.0336 9.2007 11.2386C9.5707 11.0196 10.0077 10.9106 10.4727 10.9106C11.1977 10.9106 11.8807 11.2106 12.3187 11.7446ZM13.6307 21.7926H15.2167L15.9687 13.4536C16.0647 12.3596 15.1757 11.8806 14.4237 11.8806C13.6717 11.8806 12.7827 12.3596 12.8787 13.4536ZM12.0037 21.7926H12.5777L11.7987 13.1936C11.7307 12.4276 11.1427 12.0036 10.4727 12.0036C9.6657 12.0036 8.9277 12.6056 9.1327 13.6716L10.3907 20.2616C10.5547 21.2046 11.0467 21.7926 12.0037 21.7926ZM16.8297 21.7926C17.8007 21.7926 18.2797 21.2046 18.4567 20.2616L19.7007 13.6716C19.9067 12.6056 19.1677 12.0036 18.3747 12.0036C17.6917 12.0036 17.1037 12.4276 17.0347 13.1936L16.2557 21.7926Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM12.6327 12.0174C13.1387 11.4574 13.8907 11.1424 14.6977 11.1424C15.4907 11.1424 16.2557 11.4574 16.7347 12.0174C17.1857 11.5114 17.8417 11.2114 18.5797 11.2114C19.0447 11.2114 19.4827 11.3204 19.8517 11.5394C19.9197 11.3754 19.9747 11.1704 19.9747 10.9784C19.9747 9.8714 19.2907 9.0784 18.2797 9.0234C17.9647 8.4084 17.4457 8.0394 16.7887 8.0394C16.3657 8.0394 15.9687 8.1754 15.6547 8.4494C15.5317 8.4224 15.3947 8.4084 15.2847 8.4354C14.9707 7.8344 14.3687 7.4644 13.6987 7.4644C12.8517 7.4644 12.1957 7.9704 12.0447 8.5724C11.6347 8.5994 11.2927 8.9554 11.2387 9.3384C10.2677 9.3514 9.4747 10.1444 9.4747 11.1424C9.4747 11.2794 9.4887 11.3884 9.5427 11.5254C9.9117 11.3204 10.3357 11.2114 10.8007 11.2114C11.5257 11.2114 12.1957 11.5114 12.6327 12.0174ZM13.9177 21.8204H15.4627L16.1877 13.8084C16.2827 12.7694 15.4487 12.2914 14.6977 12.2914C13.9317 12.2914 13.0977 12.7694 13.1937 13.8084ZM12.3867 21.8204H12.8107L12.0447 13.4804C11.9907 12.7694 11.4567 12.3594 10.8007 12.3594C10.0347 12.3594 9.3517 12.9204 9.5427 13.8904L10.7457 20.2754C10.9237 21.2324 11.4157 21.8204 12.3867 21.8204ZM16.9937 21.8204C17.9507 21.8204 18.4437 21.2324 18.6207 20.2754L19.8377 13.8904C20.0157 12.9204 19.3317 12.3594 18.5797 12.3594C17.9237 12.3594 17.3767 12.7694 17.3227 13.4804L16.5567 21.8204Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM11.5257 10.896C12.0037 10.186 12.8517 9.775 13.6857 9.775C14.5327 9.775 15.3807 10.186 15.8597 10.896C16.2827 10.295 16.9937 9.953 17.7597 9.953C18.2657 9.953 18.7167 10.09 19.0997 10.35C19.3047 10.049 19.4277 9.68 19.4277 9.283C19.4277 8.176 18.6617 7.369 17.6227 7.355C17.4047 6.699 16.8437 6.234 16.1327 6.234C15.6677 6.234 15.2577 6.412 14.9567 6.713C14.7387 6.631 14.4647 6.631 14.2187 6.686C13.9457 6.016 13.3167 5.592 12.6057 5.592C11.7167 5.592 11.1017 6.111 10.9787 6.686C10.4047 6.59 9.8707 7.068 9.8707 7.67C8.9007 7.643 8.0937 8.463 8.0937 9.447C8.0937 9.762 8.1617 10.035 8.2987 10.322C8.6817 10.076 9.1327 9.953 9.6117 9.953C10.3767 9.953 11.1017 10.295 11.5257 10.896ZM12.8517 21.656H14.5327L15.3667 12.441C15.4767 11.238 14.4917 10.65 13.6857 10.65C12.8927 10.65 11.9077 11.238 12.0037 12.441ZM11.0197 21.656H11.9767L11.1287 12.209C11.0467 11.32 10.3767 10.828 9.6117 10.828C8.6957 10.828 7.8617 11.553 8.1077 12.865L9.5297 20.316C9.6797 21.178 10.1167 21.656 11.0197 21.656ZM16.3517 21.656C17.2537 21.656 17.6917 21.178 17.8557 20.316L19.2777 12.865C19.5237 11.553 18.6897 10.828 17.7597 10.828C17.0077 10.828 16.3377 11.32 16.2557 12.209L15.4077 21.656Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM11.9487 11.4021C12.4417 10.7321 13.2617 10.3631 14.0957 10.3631C14.9297 10.3631 15.7497 10.7321 16.2417 11.4021C16.6937 10.8551 17.3767 10.5551 18.1157 10.5551C18.5797 10.5551 19.0037 10.6641 19.3867 10.8831C19.5507 10.5961 19.6597 10.2671 19.6597 9.9121C19.6597 8.7641 18.9357 7.9571 17.8827 7.9301C17.6097 7.2871 17.0757 6.8771 16.3787 6.8771C15.9137 6.8771 15.5037 7.0271 15.1897 7.3141C15.0257 7.2731 14.8207 7.2601 14.6567 7.3011C14.3557 6.6581 13.7267 6.2621 13.0297 6.2621C12.0997 6.2621 11.4707 6.8081 11.3337 7.3961C10.8557 7.3691 10.4457 7.8201 10.4317 8.2581C9.4197 8.2441 8.5997 9.0641 8.5997 10.0761C8.5997 10.3491 8.6547 10.6091 8.7907 10.8831C9.1597 10.6641 9.5977 10.5551 10.0627 10.5551C10.8007 10.5551 11.4977 10.8551 11.9487 11.4021ZM13.2887 21.7521H14.9027L15.6957 13.0291C15.7907 11.8671 14.8337 11.3751 14.0957 11.3751C13.3577 11.3751 12.4007 11.8671 12.4957 13.0291ZM11.5527 21.7521H12.3047L11.4977 12.8381C11.4297 12.0041 10.7737 11.5661 10.0627 11.5661C9.2147 11.5661 8.4077 12.2091 8.6407 13.4261L9.9397 20.2481C10.1167 21.1911 10.5817 21.7521 11.5527 21.7521ZM16.6387 21.7521C17.6097 21.7521 18.0607 21.1911 18.2387 20.2481L19.5507 13.4261C19.7827 12.2091 18.9627 11.5661 18.1157 11.5661C17.4177 11.5661 16.7617 12.0041 16.6937 12.8381L15.8867 21.7521Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM11.7307 11.2114C12.2227 10.5134 13.0707 10.1304 13.9047 10.1304C14.7517 10.1304 15.5997 10.5134 16.0777 11.2114C16.5427 10.6644 17.2407 10.3494 17.9787 10.3494C18.4297 10.3494 18.8667 10.4594 19.2367 10.6774C19.4417 10.3634 19.5647 9.9804 19.5647 9.5844C19.5647 8.4354 18.8257 7.6154 17.7597 7.6014C17.4867 6.9454 16.9667 6.5074 16.2417 6.5074C15.7777 6.5074 15.3667 6.6584 15.0527 6.9594C14.8747 6.9184 14.6427 6.9044 14.4507 6.9454C14.1637 6.2894 13.5347 5.8784 12.8237 5.8784C11.8667 5.8784 11.2517 6.4534 11.1287 7.0414C10.6227 6.9864 10.1717 7.4644 10.1717 7.9164C9.1597 7.8884 8.3257 8.7224 8.3257 9.7484C8.3257 10.0764 8.3947 10.3634 8.5587 10.6774C8.9277 10.4724 9.3787 10.3494 9.8437 10.3494C10.5817 10.3494 11.2797 10.6644 11.7307 11.2114ZM13.0837 21.7384H14.7387L15.5447 12.7964C15.6407 11.5804 14.6287 11.1014 13.9047 11.1014C13.1937 11.1014 12.1817 11.5804 12.2777 12.7964ZM11.2927 21.7384H12.1407L11.3207 12.6464C11.2517 11.7714 10.5687 11.3204 9.8437 11.3204C8.9687 11.3204 8.1207 11.9904 8.3667 13.2754L9.6937 20.2344C9.8707 21.1774 10.3227 21.7384 11.2927 21.7384ZM16.5297 21.7384C17.4997 21.7384 17.9507 21.1774 18.1287 20.2344L19.4547 13.2754C19.7007 11.9904 18.8537 11.3204 17.9787 11.3204C17.2537 11.3204 16.5707 11.7714 16.5017 12.6464L15.6817 21.7384Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM12.1137 11.5529C12.6057 10.9099 13.4117 10.5549 14.2327 10.5549C15.0527 10.5549 15.8727 10.9099 16.3517 11.5529C16.8027 11.0199 17.4867 10.7049 18.2247 10.7049C18.6897 10.7049 19.1267 10.8279 19.4957 11.0329C19.6467 10.7869 19.7287 10.4859 19.7287 10.1719C19.7287 9.0239 19.0177 8.2309 17.9787 8.1899C17.6917 7.5609 17.1717 7.1509 16.4747 7.1509C16.0237 7.1509 15.6137 7.3009 15.2987 7.5879C15.1487 7.5469 14.9567 7.5329 14.8067 7.5609C14.5057 6.9319 13.8767 6.5489 13.1937 6.5489C12.2777 6.5489 11.6347 7.0819 11.5117 7.6839C11.0467 7.6559 10.6367 8.0939 10.6227 8.5179C9.6247 8.5039 8.8047 9.3239 8.8047 10.3359C8.8047 10.5679 8.8457 10.8009 8.9687 11.0329C9.3377 10.8279 9.7757 10.7049 10.2407 10.7049C10.9787 10.7049 11.6617 11.0199 12.1137 11.5529ZM13.4397 21.7789H15.0387L15.8187 13.2209C15.9137 12.0719 14.9707 11.5939 14.2327 11.5939C13.4937 11.5939 12.5647 12.0719 12.6597 13.2209ZM11.7437 21.7789H12.4277L11.6207 13.0019C11.5527 12.1949 10.9377 11.7579 10.2407 11.7579C9.4067 11.7579 8.6267 12.3869 8.8597 13.5349L10.1307 20.2479C10.3087 21.2049 10.7867 21.7789 11.7437 21.7789ZM16.7207 21.7789C17.6917 21.7789 18.1567 21.2049 18.3337 20.2479L19.6187 13.5349C19.8377 12.3869 19.0587 11.7579 18.2247 11.7579C17.5277 11.7579 16.9117 12.1949 16.8437 13.0019L16.0507 21.7789Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM11.2517 10.4862C11.7167 9.7482 12.5647 9.3102 13.3987 9.3102C14.2327 9.3102 15.0797 9.7482 15.5447 10.4862C15.9547 9.8302 16.6797 9.4332 17.4727 9.4332C18.0327 9.4332 18.5257 9.6112 18.9217 9.9262C19.1267 9.6522 19.2497 9.2972 19.2497 8.9002C19.2497 7.8612 18.4437 7.0542 17.4317 7.0412C17.2817 6.3712 16.6937 5.8792 15.9827 5.8792C15.5317 5.8792 15.1207 6.0842 14.8337 6.3852C14.5607 6.2752 14.2327 6.2752 13.9177 6.3572C13.6717 5.6742 13.0427 5.2092 12.3317 5.2092C11.5387 5.2092 10.9097 5.6602 10.7737 6.2202C10.1167 6.0842 9.4747 6.5622 9.4747 7.3282C8.5587 7.3282 7.7927 8.1352 7.7927 9.0512C7.7927 9.3382 7.8477 9.5972 7.9567 9.8442C8.3537 9.5842 8.8187 9.4332 9.3107 9.4332C10.1167 9.4332 10.8417 9.8302 11.2517 10.4862ZM12.5237 21.5602H14.2737L15.1487 11.9762C15.2437 10.7732 14.2867 10.0762 13.3987 10.0762C12.4957 10.0762 11.5387 10.7732 11.6487 11.9762ZM10.6637 21.5602H11.7577L10.8557 11.6482C10.7737 10.7192 10.1167 10.1852 9.3107 10.1852C8.3397 10.1852 7.5057 10.9782 7.7657 12.3182L9.2967 20.4392C9.4337 21.1782 9.8437 21.5602 10.6637 21.5602ZM16.1327 21.5602C16.9527 21.5602 17.3637 21.1782 17.4997 20.4392L19.0317 12.3182C19.2907 10.9782 18.4567 10.1852 17.4727 10.1852C16.6797 10.1852 16.0237 10.7192 15.9417 11.6482L15.0387 21.5602Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM11.1017 10.2811C11.5667 9.5291 12.4137 9.0641 13.2477 9.0641C14.0817 9.0641 14.9297 9.5291 15.3947 10.2811C15.7777 9.5701 16.5157 9.1601 17.3357 9.1601C17.9097 9.1601 18.4297 9.3511 18.8397 9.6931C19.0317 9.4331 19.1547 9.0921 19.1547 8.6811C19.1547 7.6831 18.3337 6.8771 17.3357 6.8771C17.2127 6.1931 16.6247 5.6871 15.9007 5.6871C15.4487 5.6871 15.0527 5.8921 14.7797 6.2071C14.4787 6.0841 14.1097 6.0841 13.7537 6.1801C13.5217 5.4821 12.9067 5.0041 12.1817 5.0041C11.4437 5.0041 10.8147 5.4281 10.6637 5.9741C9.9667 5.7971 9.2697 6.2891 9.2697 7.1501C8.3807 7.1501 7.6427 7.9571 7.6427 8.8461C7.6427 9.1191 7.6977 9.3651 7.7797 9.5981C8.1897 9.3101 8.6547 9.1601 9.1597 9.1601C9.9807 9.1601 10.7187 9.5701 11.1017 10.2811ZM12.3597 21.5061H14.1367L15.0257 11.7171C15.1347 10.5411 14.1917 9.7621 13.2477 9.7621C12.3047 9.7621 11.3617 10.5411 11.4707 11.7171ZM10.4867 21.5061H11.6487L10.7187 11.3481C10.6367 10.4041 9.9807 9.8441 9.1597 9.8441C8.1487 9.8441 7.3277 10.6641 7.5877 12.0311L9.1877 20.4941C9.3107 21.1641 9.7067 21.5061 10.4867 21.5061ZM16.0097 21.5061C16.7887 21.5061 17.1857 21.1641 17.3087 20.4941L18.9077 12.0311C19.1677 10.6641 18.3477 9.8441 17.3357 9.8441C16.5157 9.8441 15.8597 10.4041 15.7777 11.3481L14.8477 21.5061Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}