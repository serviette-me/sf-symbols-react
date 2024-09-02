import { IconProps } from "../../types"

export default function FourSixCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM18.8947 20.2751C20.9177 20.2751 21.9847 18.5941 21.9847 16.6521C21.9847 15.0251 21.3557 13.4261 19.7557 13.4261C18.7437 13.4261 18.1697 14.1781 17.9507 15.0531H17.9237V14.3011C17.9237 12.5101 18.2387 11.5941 18.8257 11.5941C19.1547 11.5941 19.2907 11.8671 19.4687 12.1681C19.7557 12.6601 20.0567 12.8651 20.5897 12.8651C21.3557 12.8651 21.6287 12.3321 21.6287 11.7851C21.6287 11.6351 21.6157 11.4021 21.5607 11.2521C21.2187 10.0761 20.1387 9.5701 18.9217 9.5701C16.2287 9.5701 15.4357 12.2641 15.4357 14.9571C15.4357 17.2541 16.1737 20.2751 18.8947 20.2751ZM12.0727 20.1931C12.7697 20.1931 13.3167 19.8241 13.3167 18.9221V18.2931H13.4117C14.1777 18.2931 14.3967 17.8011 14.3967 17.2671C14.3967 16.6251 14.0957 16.2561 13.4257 16.2561H13.3167V11.5661C13.3167 10.3631 12.5237 9.6931 11.3207 9.6931C9.6387 9.6931 9.1597 10.9511 8.7087 12.2501L7.6287 15.2581C7.4377 15.8051 7.3147 16.3651 7.3147 16.8711C7.3147 17.8141 7.8207 18.2931 8.8187 18.2931H10.8277V18.9221C10.8277 19.7971 11.4027 20.1931 12.0727 20.1931ZM10.9237 16.3381H9.4337V16.2281L10.8687 11.6891H10.9237ZM18.8397 18.2521C18.3887 18.2521 18.1567 17.6781 18.1567 16.7211C18.1567 15.8321 18.3887 15.2851 18.8397 15.2851C19.2777 15.2851 19.5237 15.8591 19.5097 16.7751C19.5097 17.7051 19.2777 18.2521 18.8397 18.2521Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM18.4567 20.0296C20.5217 20.0296 21.6567 18.3066 21.6567 16.2696C21.6567 14.5336 20.8907 12.8516 19.1817 12.8516C18.1287 12.8516 17.4177 13.5896 17.1447 14.6156H17.1167V14.1776C17.1167 12.5236 17.3637 10.6776 18.4157 10.6776C18.8947 10.6776 19.1677 11.0466 19.3727 11.4846C19.6057 11.9356 19.8927 12.1406 20.3847 12.1406C21.0407 12.1406 21.3007 11.6896 21.3007 11.1836C21.3007 11.0336 21.2737 10.8286 21.2327 10.6636C20.9177 9.4886 19.7827 8.8726 18.4847 8.8726C15.7367 8.8726 14.9437 11.7856 14.9437 14.5196C14.9437 16.9666 15.7087 20.0296 18.4567 20.0296ZM11.4437 19.9336C12.0447 19.9336 12.5367 19.5916 12.5367 18.8126V17.8146H12.8237C13.4807 17.8146 13.7127 17.3906 13.7127 16.8986C13.7127 16.3516 13.4397 15.9956 12.8377 15.9956H12.5367V10.6506C12.5367 9.5706 11.8257 8.9826 10.7737 8.9826C9.4607 8.9826 8.9957 9.8576 8.5727 10.9236L6.8227 15.0796C6.6037 15.6266 6.5077 16.0786 6.5077 16.5426C6.5077 17.3356 6.9867 17.8146 7.8207 17.8146H10.3497V18.8126C10.3497 19.6056 10.8967 19.9336 11.4437 19.9336ZM10.4177 16.0506H8.4077V15.9546L10.3637 10.8416H10.4177ZM18.4157 18.2106C17.6777 18.2106 17.3637 17.2816 17.3637 16.3106C17.3637 15.3676 17.7047 14.5336 18.4157 14.5336C19.1547 14.5336 19.4827 15.4086 19.4547 16.3656C19.4547 17.3356 19.1137 18.2106 18.4157 18.2106Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM18.6897 20.1664C20.7267 20.1664 21.8337 18.4704 21.8337 16.4744C21.8337 14.8064 21.1367 13.1664 19.4957 13.1664C18.4567 13.1664 17.8147 13.9044 17.5687 14.8614H17.5407V14.2464C17.5407 12.5234 17.8277 11.1704 18.6347 11.1704C19.0317 11.1704 19.2367 11.4844 19.4277 11.8534C19.6877 12.3324 19.9887 12.5234 20.4807 12.5234C21.2047 12.5234 21.4787 12.0314 21.4787 11.5114C21.4787 11.3614 21.4507 11.1424 21.4097 10.9784C21.0817 9.8024 19.9747 9.2424 18.7167 9.2424C15.9957 9.2424 15.2027 12.0454 15.2027 14.7654C15.2027 17.1174 15.9547 20.1664 18.6897 20.1664ZM11.7847 20.0704C12.4277 20.0704 12.9477 19.7144 12.9477 18.8804V18.0744H13.1387C13.8497 18.0744 14.0687 17.6094 14.0687 17.1034C14.0687 16.5024 13.7817 16.1324 13.1527 16.1324H12.9477V11.1424C12.9477 9.9944 12.1957 9.3654 11.0607 9.3654C9.5567 9.3654 9.0777 10.4454 8.6547 11.6344L7.2457 15.1894C7.0407 15.7224 6.9317 16.2424 6.9317 16.7204C6.9317 17.5954 7.4237 18.0744 8.3397 18.0744H10.6097V18.8804C10.6097 19.7144 11.1567 20.0704 11.7847 20.0704ZM10.6777 16.2144H8.9417V16.1054L10.6227 11.2934H10.6777ZM18.6347 18.2384C18.0607 18.2384 17.7737 17.5004 17.7737 16.5434C17.7737 15.6274 18.0737 14.9294 18.6347 14.9294C19.2227 14.9294 19.4957 15.6544 19.4957 16.5844C19.4957 17.5274 19.1957 18.2384 18.6347 18.2384Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM17.6097 19.496C19.6187 19.496 20.7407 17.732 20.7407 15.641C20.7407 13.795 19.8517 12.018 18.0327 12.018C16.8577 12.018 16.0237 12.865 15.7227 14.068H15.6817V13.891C15.6817 12.236 15.9007 9.256 17.5957 9.256C18.3477 9.256 18.8127 9.803 19.0587 10.5C19.2087 10.842 19.4137 11.033 19.7827 11.033C20.2207 11.033 20.4257 10.76 20.4257 10.391C20.4257 10.24 20.3987 10.063 20.3437 9.885C20.0427 8.695 18.9487 7.957 17.6367 7.957C14.9297 7.957 14.1777 11.225 14.1777 13.891C14.1777 16.461 14.9707 19.496 17.6097 19.496ZM10.6777 19.4C11.0737 19.4 11.4157 19.113 11.4157 18.607V16.912H12.0587C12.4827 16.912 12.6877 16.639 12.6877 16.256C12.6877 15.887 12.4827 15.613 12.0587 15.613H11.4157V9.201C11.4157 8.408 10.8967 8.012 10.2127 8.012C9.4337 8.012 9.0777 8.422 8.7637 9.105L5.9747 14.93C5.7827 15.354 5.7147 15.641 5.7147 15.982C5.7147 16.529 6.0837 16.912 6.6447 16.912H9.9117V18.607C9.9117 19.168 10.3087 19.4 10.6777 19.4ZM9.9397 15.641H7.0817V15.572L9.8847 9.488H9.9397ZM17.5957 18.197C16.4337 18.197 15.9137 16.775 15.9137 15.627C15.9137 14.506 16.4887 13.248 17.5817 13.248C18.7307 13.248 19.2367 14.547 19.2227 15.695C19.2227 16.844 18.6897 18.197 17.5957 18.197Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM18.1837 19.8511C20.2617 19.8511 21.4377 18.1151 21.4377 16.0101C21.4377 14.2051 20.5897 12.4691 18.8127 12.4691C17.7187 12.4691 16.9397 13.2211 16.6387 14.3281H16.5977V14.0821C16.5977 12.5101 16.8027 10.0901 18.1567 10.0901C18.7307 10.0901 19.0857 10.5001 19.3187 11.0331C19.5237 11.4571 19.7967 11.6621 20.2477 11.6621C20.8357 11.6621 21.0817 11.2651 21.0817 10.8011C21.0817 10.6371 21.0547 10.4591 21.0137 10.2951C20.7127 9.1051 19.5507 8.4221 18.2107 8.4221C15.4217 8.4221 14.6157 11.4841 14.6157 14.2461C14.6157 16.7751 15.4217 19.8511 18.1837 19.8511ZM11.0467 19.7561C11.5937 19.7561 12.0317 19.4281 12.0317 18.7171V17.4861H12.4547C13.0157 17.4861 13.2617 17.1171 13.2617 16.6521C13.2617 16.1741 13.0157 15.8181 12.4547 15.8181H12.0317V10.0491C12.0317 9.0641 11.3887 8.5171 10.4317 8.5171C9.3377 8.5171 8.8867 9.1461 8.4907 10.0761L6.2887 14.9571C6.0707 15.4901 5.9887 15.8871 5.9887 16.3241C5.9887 17.0351 6.4527 17.4861 7.1777 17.4861H10.0487V18.7171C10.0487 19.4691 10.5687 19.7561 11.0467 19.7561ZM10.0897 15.8731H7.7387V15.7771L10.0487 10.2811H10.0897ZM18.1567 18.1831C17.2267 18.1831 16.8437 17.0211 16.8437 16.0511C16.8437 15.0661 17.2677 14.0271 18.1567 14.0271C19.0587 14.0271 19.4547 15.1071 19.4277 16.0921C19.4277 17.0901 19.0177 18.1831 18.1567 18.1831Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM18.0327 19.7554C20.1117 19.7554 21.3147 18.0054 21.3147 15.8594C21.3147 14.0134 20.4257 12.2634 18.6077 12.2634C17.4997 12.2634 16.6657 13.0024 16.3517 14.1774H16.2967V14.0274C16.2967 12.5094 16.4887 9.7614 18.0057 9.7614C18.6347 9.7614 19.0447 10.1994 19.2777 10.7734C19.4687 11.1974 19.7287 11.3884 20.1797 11.3884C20.7267 11.3884 20.9587 11.0194 20.9587 10.5684C20.9587 10.4184 20.9457 10.2534 20.8907 10.0764C20.6037 8.9004 19.4277 8.1624 18.0467 8.1624C15.2437 8.1624 14.4377 11.3064 14.4377 14.0824C14.4377 16.6664 15.2577 19.7554 18.0327 19.7554ZM10.8147 19.6464C11.3337 19.6464 11.7577 19.3324 11.7577 18.6754V17.3084H12.2367C12.7697 17.3084 13.0157 16.9664 13.0157 16.5024C13.0157 16.0644 12.7827 15.7224 12.2367 15.7224H11.7577V9.7204C11.7577 8.7774 11.1287 8.2444 10.2407 8.2444C9.2827 8.2444 8.8317 8.7364 8.4487 9.5844L6.0017 14.8884C5.7697 15.4214 5.6877 15.7774 5.6877 16.2014C5.6877 16.8574 6.1527 17.3084 6.8087 17.3084H9.8707V18.6754C9.8707 19.4004 10.3907 19.6464 10.8147 19.6464ZM9.9117 15.7634H7.3687V15.6684L9.8577 9.9664H9.9117ZM18.0057 18.1564C16.9667 18.1564 16.5567 16.8714 16.5567 15.8864C16.5567 14.8884 17.0217 13.7534 18.0057 13.7534C19.0177 13.7534 19.4417 14.9294 19.4137 15.9414C19.4137 16.9394 18.9627 18.1564 18.0057 18.1564Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM18.3067 19.9199C20.3707 19.9199 21.5327 18.1969 21.5327 16.1189C21.5327 14.3419 20.7127 12.6329 18.9767 12.6329C17.8967 12.6329 17.1447 13.3849 16.8577 14.4509H16.8167V14.1229C16.8167 12.5099 17.0487 10.3499 18.2657 10.3499C18.7987 10.3499 19.1267 10.7329 19.3457 11.2249C19.5647 11.6619 19.8377 11.8669 20.3027 11.8669C20.9317 11.8669 21.1777 11.4429 21.1777 10.9649C21.1777 10.8149 21.1507 10.6229 21.1097 10.4589C20.8087 9.2829 19.6467 8.6129 18.3337 8.6129C15.5587 8.6129 14.7517 11.6079 14.7517 14.3689C14.7517 16.8579 15.5447 19.9199 18.3067 19.9199ZM11.2247 19.8239C11.7847 19.8239 12.2497 19.4959 12.2497 18.7579V17.6229H12.6187C13.2207 17.6229 13.4527 17.2399 13.4527 16.7619C13.4527 16.2419 13.2067 15.9009 12.6187 15.9009H12.2497V10.3089C12.2497 9.2829 11.5797 8.7089 10.5817 8.7089C9.3927 8.7089 8.9277 9.4469 8.5317 10.4449L6.5217 15.0119C6.3027 15.5449 6.2067 15.9689 6.2067 16.4199C6.2067 17.1579 6.6857 17.6229 7.4507 17.6229H10.1717V18.7579C10.1717 19.5239 10.7047 19.8239 11.2247 19.8239ZM10.2407 15.9549H8.0257V15.8599L10.1857 10.5269H10.2407ZM18.2657 18.1969C17.4177 18.1969 17.0627 17.1309 17.0627 16.1599C17.0627 15.1899 17.4587 14.2459 18.2657 14.2459C19.0997 14.2459 19.4547 15.2309 19.4417 16.2149C19.4417 17.1859 19.0587 18.1969 18.2657 18.1969Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM17.0487 19.1682C18.9627 19.1682 19.9887 17.3902 19.9887 15.3532C19.9887 13.4942 19.0997 11.7032 17.2817 11.7032C16.0097 11.7032 15.1617 12.6742 14.9027 13.9452H14.8477V13.7132C14.8477 11.8672 15.1347 8.5862 17.0627 8.5862C17.9647 8.5862 18.4977 9.2562 18.7717 10.1312C18.8667 10.3902 18.9767 10.5822 19.2777 10.5822C19.5647 10.5822 19.7147 10.4182 19.7147 10.1442C19.7147 10.0212 19.6877 9.8302 19.6187 9.6252C19.3047 8.4492 18.3207 7.6702 17.0897 7.6702C14.4917 7.6702 13.8357 11.1422 13.8357 13.6442C13.8357 16.1872 14.5737 19.1682 17.0487 19.1682ZM10.4727 19.0722C10.7457 19.0722 10.9787 18.8402 10.9787 18.5392V16.3792H11.8127C12.0997 16.3792 12.2637 16.2012 12.2637 15.9142C12.2637 15.6682 12.0727 15.4762 11.8127 15.4762H10.9787V8.5312C10.9787 7.9292 10.5817 7.7112 10.1717 7.7112C9.6527 7.7112 9.4067 7.9982 9.1737 8.4902L5.9337 14.9702C5.7967 15.2582 5.7417 15.4762 5.7417 15.7222C5.7417 16.1052 6.0017 16.3792 6.4397 16.3792H9.9527V18.5392C9.9527 18.8812 10.1857 19.0722 10.4727 19.0722ZM9.9667 15.4902H6.7127V15.4352L9.9117 8.8592H9.9667ZM17.0487 18.2522C15.7087 18.2522 15.0667 16.6662 15.0667 15.2992C15.0667 14.0132 15.7777 12.5922 17.0347 12.5922C18.3477 12.5922 18.9767 14.0412 18.9627 15.3942C18.9627 16.7202 18.3337 18.2522 17.0487 18.2522Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM16.7617 18.9901C18.6347 18.9901 19.6057 17.1991 19.6057 15.2031C19.6057 13.3301 18.7167 11.5391 16.8987 11.5391C15.5727 11.5391 14.7247 12.5641 14.4917 13.8631H14.4377V13.6171C14.4377 11.6761 14.7387 8.2441 16.7887 8.2441C17.7737 8.2441 18.3477 8.9821 18.6207 9.9261C18.6897 10.1441 18.7577 10.3491 19.0177 10.3491C19.2227 10.3491 19.3597 10.2261 19.3597 10.0081C19.3597 9.8981 19.3187 9.7071 19.2497 9.4741C18.9217 8.3121 18.0057 7.5191 16.8027 7.5191C14.2737 7.5191 13.6717 11.0881 13.6717 13.5081C13.6717 16.0371 14.3827 18.9901 16.7617 18.9901ZM10.3767 18.8941C10.5817 18.8941 10.7457 18.6891 10.7457 18.4841V16.0921H11.6757C11.9077 16.0921 12.0447 15.9691 12.0447 15.7361C12.0447 15.5311 11.8667 15.3941 11.6757 15.3941H10.7457V8.1761C10.7457 7.6701 10.4177 7.5331 10.1577 7.5331C9.7617 7.5331 9.5837 7.7791 9.3927 8.1481L5.9197 14.9841C5.8107 15.2031 5.7557 15.3811 5.7557 15.5721C5.7557 15.8731 5.9607 16.0921 6.3297 16.0921H9.9807V18.4841C9.9807 18.7301 10.1307 18.8941 10.3767 18.8941ZM9.9807 15.3941H6.5077V15.3671L9.9257 8.5171H9.9807ZM16.7617 18.2651C15.3397 18.2651 14.6287 16.6111 14.6287 15.1071C14.6287 13.7401 15.4217 12.2361 16.7477 12.2361C18.1567 12.2361 18.8397 13.7811 18.8397 15.2171C18.8397 16.6391 18.1567 18.2651 16.7617 18.2651Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
