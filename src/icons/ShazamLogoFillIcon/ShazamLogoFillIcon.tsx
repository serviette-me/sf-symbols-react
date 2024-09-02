import { IconProps } from "../../types"

export default function ShazamLogoFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.873046875"
          className={className}
        >
          <path
            d="              M14.9297 29.8734C23.1597 29.8734 29.8727 23.1604 29.8727 14.9294C29.8727 6.7124 23.1597 0.0004 14.9297 0.0004C6.7127 0.0004 -0.0003 6.7124 -0.0003 14.9294C-0.0003 23.1604 6.7127 29.8734 14.9297 29.8734ZM13.8767 9.1464C13.8497 9.1604 11.8397 11.0744 10.7867 12.2634C10.2947 12.8104 10.0347 13.5074 10.0897 14.2464C10.1307 15.0114 10.4997 15.7224 11.1287 16.2964C11.9627 16.9944 13.5897 17.1444 14.6287 16.2284C15.2437 15.6814 15.9547 14.8754 15.9957 14.8754C16.5017 14.3144 17.3637 14.2734 17.9237 14.8064C18.4707 15.2984 18.4977 16.1604 17.9787 16.7344C17.9787 16.7484 17.1717 17.6504 16.4337 18.2384C15.4487 19.1544 14.1637 19.5914 12.8377 19.5914C11.5797 19.5914 10.3087 19.1684 9.3517 18.3474C8.1487 17.3084 7.4377 15.9144 7.3277 14.3964C7.2597 12.9334 7.7517 11.5114 8.7497 10.4044C9.8707 9.1604 11.8947 7.2594 11.9627 7.1364C12.5237 6.6304 13.3707 6.6854 13.9047 7.2324C14.4507 7.7524 14.4377 8.5994 13.8767 9.1464ZM15.9957 20.7674C16.0097 20.7534 18.0327 18.8394 19.0857 17.6774C19.5777 17.1034 19.8377 16.4064 19.7827 15.6814C19.7287 14.8884 19.3597 14.1914 18.7307 13.6174C17.9097 12.9334 16.2697 12.7694 15.2437 13.6714C14.6287 14.2054 13.9047 15.0394 13.8767 15.0524C13.3707 15.6134 12.5097 15.6274 11.9487 15.1074C11.4027 14.6284 11.3617 13.7534 11.8947 13.1794C11.8947 13.1524 12.7007 12.2634 13.4397 11.6624C14.4377 10.7464 15.6957 10.3084 17.0347 10.3084C18.2927 10.3084 19.5507 10.7324 20.5487 11.5664C21.7107 12.5914 22.4357 14.0004 22.5317 15.5034C22.6137 16.9944 22.1207 18.4024 21.1097 19.5094C19.9887 20.7534 17.9787 22.6404 17.9097 22.7634C17.3497 23.2694 16.5017 23.2424 15.9547 22.6814C15.4217 22.1484 15.4357 21.3144 15.9957 20.7674Z"
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
            d="              M14.4377 28.8753C22.3667 28.8753 28.8747 22.3533 28.8747 14.4373C28.8747 6.5083 22.3537 0.0003 14.4377 0.0003C6.5077 0.0003 -0.0003 6.5083 -0.0003 14.4373C-0.0003 22.3533 6.5217 28.8753 14.4377 28.8753ZM13.3577 8.5723C13.3297 8.5993 11.2657 10.5413 10.1987 11.7713C9.6937 12.3183 9.4197 13.0433 9.4747 13.7813C9.5297 14.5743 9.8987 15.2993 10.5407 15.8863C11.3887 16.6112 13.0707 16.7613 14.1097 15.8183C14.7517 15.2713 15.4907 14.4373 15.5177 14.4373C16.0367 13.8633 16.9257 13.8223 17.4867 14.3693C18.0467 14.8753 18.0877 15.7503 17.5547 16.3383C17.5407 16.3513 16.7207 17.2673 15.9687 17.8833C14.9707 18.8263 13.6447 19.2633 12.2907 19.2633C10.9917 19.2633 9.7067 18.8403 8.7227 17.9783C7.4917 16.9263 6.7677 15.4903 6.6577 13.9453C6.5757 12.4413 7.0817 10.9923 8.1207 9.8573C9.2557 8.5993 11.3207 6.6443 11.3887 6.5353C11.9627 6.0023 12.8377 6.0562 13.3847 6.6032C13.9317 7.1503 13.9177 8.0113 13.3577 8.5723ZM15.5177 20.4533C15.5317 20.4393 17.6097 18.4843 18.6757 17.3083C19.1817 16.7203 19.4547 15.9963 19.3867 15.2713C19.3317 14.4513 18.9627 13.7403 18.3337 13.1523C17.4727 12.4413 15.8047 12.2773 14.7517 13.2073C14.1097 13.7543 13.3847 14.6013 13.3577 14.6153C12.8377 15.1763 11.9487 15.2173 11.3747 14.6703C10.8147 14.1773 10.7867 13.2893 11.3207 12.7013C11.3207 12.6743 12.1547 11.7713 12.9067 11.1423C13.9177 10.2133 15.2167 9.7753 16.5707 9.7753C17.8687 9.7753 19.1677 10.1992 20.1797 11.0473C21.3687 12.0993 22.1077 13.5493 22.2167 15.0803C22.2847 16.6112 21.7797 18.0472 20.7537 19.1813C19.6057 20.4393 17.5547 22.3943 17.4727 22.5043C16.9117 23.0233 16.0367 22.9963 15.4907 22.4222C14.9297 21.8883 14.9437 21.0273 15.5177 20.4533Z"
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
            d="              M14.6977 29.395C22.7777 29.395 29.4077 22.777 29.4077 14.697C29.4077 6.617 22.7777 0 14.6977 0C6.6167 0 -0.0003 6.617 -0.0003 14.697C-0.0003 22.777 6.6167 29.395 14.6977 29.395ZM13.6307 8.873C13.6167 8.887 11.5667 10.828 10.4997 12.031C10.0077 12.578 9.7347 13.289 9.8027 14.027C9.8577 14.807 10.2267 15.518 10.8557 16.105C11.6897 16.816 13.3437 16.953 14.3827 16.037C15.0117 15.49 15.7367 14.67 15.7637 14.67C16.2827 14.096 17.1577 14.068 17.7187 14.602C18.2657 15.094 18.3067 15.969 17.7737 16.543C17.7737 16.57 16.9527 17.459 16.2147 18.074C15.2167 19.004 13.9177 19.441 12.5777 19.441C11.3067 19.441 10.0217 19.018 9.0507 18.17C7.8477 17.131 7.1227 15.709 7.0137 14.191C6.9317 12.701 7.4377 11.266 8.4487 10.145C9.5837 8.887 11.6207 6.973 11.6897 6.85C12.2497 6.344 13.1117 6.385 13.6577 6.932C14.2047 7.465 14.1917 8.326 13.6307 8.873ZM15.7637 20.617C15.7907 20.603 17.8277 18.676 18.8947 17.5C19.3867 16.926 19.6597 16.215 19.5917 15.49C19.5507 14.684 19.1677 13.973 18.5387 13.398C17.7047 12.701 16.0507 12.537 15.0117 13.453C14.3827 13.986 13.6577 14.82 13.6307 14.848C13.1117 15.408 12.2367 15.436 11.6757 14.902C11.1287 14.41 11.0877 13.535 11.6207 12.947C11.6207 12.934 12.4417 12.031 13.1797 11.416C14.1917 10.5 15.4767 10.062 16.8167 10.062C18.1017 10.062 19.3727 10.486 20.3847 11.32C21.5607 12.359 22.2847 13.781 22.3807 15.312C22.4627 16.816 21.9567 18.238 20.9457 19.346C19.8107 20.603 17.7737 22.531 17.7047 22.641C17.1447 23.16 16.2827 23.119 15.7367 22.559C15.1897 22.025 15.2027 21.178 15.7637 20.617Z"
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
            d="              M13.7127 27.4253C21.2187 27.4253 27.4257 21.2323 27.4257 13.7133C27.4257 6.2073 21.2187 0.0003 13.6987 0.0003C6.1937 0.0003 -0.0003 6.2073 -0.0003 13.7133C-0.0003 21.2323 6.2067 27.4253 13.7127 27.4253ZM12.6187 7.8473C12.5917 7.8753 10.4997 9.8433 9.4197 11.0743C8.9007 11.6213 8.6267 12.3593 8.6957 13.1253C8.7497 13.9183 9.1187 14.6563 9.7617 15.2443C10.6367 15.9823 12.3317 16.1323 13.3707 15.1893C14.0407 14.6293 14.7797 13.7813 14.7927 13.7813C15.3257 13.1933 16.2287 13.1523 16.8027 13.7133C17.3637 14.2323 17.4047 15.1213 16.8707 15.7093C16.8437 15.7223 16.0097 16.6253 15.2577 17.2813C14.2457 18.2243 12.9067 18.6623 11.5387 18.6623C10.2267 18.6623 8.9277 18.2383 7.9297 17.3633C6.6717 16.3103 5.9477 14.8473 5.8377 13.2893C5.7557 11.7713 6.2617 10.2953 7.3277 9.1463C8.4767 7.8753 10.5687 5.8923 10.6367 5.7833C11.1977 5.2503 12.0857 5.3043 12.6327 5.8513C13.1937 6.4123 13.1797 7.2733 12.6187 7.8473ZM14.7927 19.8653C14.8207 19.8513 16.9257 17.8823 17.9917 16.6793C18.5117 16.0913 18.7847 15.3673 18.7167 14.6293C18.6617 13.8083 18.2927 13.0703 17.6507 12.4823C16.7757 11.7713 15.0797 11.5933 14.0407 12.5373C13.3707 13.0843 12.6327 13.9453 12.6187 13.9593C12.0857 14.5333 11.1837 14.5743 10.6097 14.0133C10.0487 13.5073 10.0077 12.6193 10.5407 12.0173C10.5687 12.0043 11.4027 11.1013 12.1547 10.4453C13.1797 9.5023 14.5057 9.0643 15.8727 9.0643C17.1857 9.0643 18.4847 9.4883 19.5237 10.3633C20.7407 11.4163 21.4787 12.8793 21.5737 14.4373C21.6567 15.9823 21.1507 17.4313 20.0837 18.5803C18.9357 19.8513 16.8707 21.8343 16.7757 21.9433C16.2147 22.4763 15.3257 22.4353 14.7797 21.8753C14.2187 21.3143 14.2327 20.4533 14.7927 19.8653Z"
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
            d="              M14.1227 28.2465C21.8477 28.2465 28.2457 21.8615 28.2457 14.1235C28.2457 6.3985 21.8477 0.0005 14.1097 0.0005C6.3847 0.0005 -0.0003 6.3985 -0.0003 14.1235C-0.0003 21.8615 6.3987 28.2465 14.1227 28.2465ZM13.0157 8.2165C13.0017 8.2445 10.8967 10.2265 9.8167 11.4575C9.2967 12.0175 9.0237 12.7555 9.0917 13.5075C9.1467 14.3145 9.5157 15.0525 10.1577 15.6405C11.0327 16.3785 12.7287 16.5295 13.7817 15.5855C14.4507 15.0115 15.1897 14.1775 15.2027 14.1775C15.7367 13.5765 16.6387 13.5485 17.2127 14.1095C17.7737 14.6155 17.8147 15.5175 17.2817 16.1055C17.2677 16.1195 16.4197 17.0355 15.6677 17.6775C14.6567 18.6215 13.3167 19.0725 11.9357 19.0725C10.6227 19.0725 9.3107 18.6345 8.3127 17.7595C7.0687 16.7075 6.3437 15.2445 6.2207 13.6715C6.1387 12.1545 6.6577 10.6775 7.7107 9.5295C8.8727 8.2445 10.9647 6.2615 11.0327 6.1525C11.6077 5.6195 12.4957 5.6735 13.0427 6.2345C13.6037 6.7815 13.5897 7.6565 13.0157 8.2165ZM15.2027 20.2755C15.2307 20.2615 17.3357 18.2795 18.4157 17.0765C18.9217 16.4885 19.2087 15.7505 19.1407 15.0115C19.0857 14.1915 18.7027 13.4535 18.0737 12.8655C17.1987 12.1545 15.5037 11.9765 14.4507 12.9195C13.7817 13.4805 13.0427 14.3285 13.0157 14.3555C12.4957 14.9165 11.5797 14.9575 11.0197 14.3965C10.4457 13.9045 10.4177 13.0015 10.9507 12.4005C10.9647 12.3865 11.7987 11.4705 12.5647 10.8285C13.5897 9.8845 14.9157 9.4335 16.2827 9.4335C17.6097 9.4335 18.9077 9.8715 19.9477 10.7465C21.1637 11.7985 21.9027 13.2615 21.9977 14.8345C22.0797 16.3785 21.5737 17.8285 20.5077 18.9765C19.3597 20.2615 17.2817 22.2445 17.1987 22.3535C16.6247 22.8865 15.7367 22.8455 15.1897 22.2715C14.6157 21.7245 14.6427 20.8495 15.2027 20.2755Z"
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
            d="              M13.9457 27.8907C21.5737 27.8907 27.8907 21.5737 27.8907 13.9457C27.8907 6.3297 21.5607 -0.0003 13.9317 -0.0003C6.3167 -0.0003 -0.0003 6.3297 -0.0003 13.9457C-0.0003 21.5737 6.3297 27.8907 13.9457 27.8907ZM12.8377 8.0117C12.8107 8.0387 10.6917 10.0347 9.5977 11.2797C9.0777 11.8397 8.8047 12.5777 8.8727 13.3437C8.9277 14.1507 9.2967 14.9027 9.9397 15.4897C10.8277 16.2287 12.5367 16.3927 13.6037 15.4357C14.2737 14.8617 15.0117 14.0137 15.0387 14.0137C15.5727 13.4117 16.4887 13.3847 17.0627 13.9457C17.6227 14.4647 17.6637 15.3667 17.1307 15.9547C17.1037 15.9687 16.2557 16.8847 15.5037 17.5407C14.4787 18.4977 13.1247 18.9487 11.7437 18.9487C10.4177 18.9487 9.0917 18.5117 8.0937 17.6367C6.8357 16.5567 6.0977 15.0937 5.9887 13.5217C5.8927 11.9767 6.4117 10.4867 7.4917 9.3237C8.6547 8.0387 10.7597 6.0427 10.8277 5.9337C11.4027 5.4007 12.3047 5.4547 12.8517 6.0017C13.4257 6.5627 13.3987 7.4377 12.8377 8.0117ZM15.0387 20.1657C15.0527 20.1387 17.1857 18.1567 18.2657 16.9397C18.7847 16.3517 19.0727 15.6137 18.9907 14.8617C18.9487 14.0407 18.5667 13.2887 17.9237 12.7007C17.0347 11.9767 15.3257 11.7987 14.2737 12.7557C13.6037 13.3027 12.8517 14.1777 12.8377 14.1917C12.3047 14.7657 11.3887 14.8067 10.8147 14.2457C10.2407 13.7397 10.1987 12.8377 10.7457 12.2367C10.7597 12.2227 11.6077 11.3067 12.3597 10.6507C13.3987 9.6937 14.7387 9.2417 16.1187 9.2417C17.4587 9.2417 18.7717 9.6797 19.8107 10.5547C21.0407 11.6077 21.7797 13.0977 21.8887 14.6697C21.9707 16.2287 21.4507 17.7047 20.3847 18.8667C19.2227 20.1387 17.1307 22.1487 17.0347 22.2577C16.4607 22.7907 15.5727 22.7637 15.0117 22.1897C14.4507 21.6287 14.4647 20.7537 15.0387 20.1657Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5332C22.0797 28.5332 28.5197 22.0802 28.5197 14.2732C28.5197 6.4532 22.0667 0.0002 14.2457 0.0002C6.4397 0.0002 -0.0003 6.4532 -0.0003 14.2732C-0.0003 22.0802 6.4397 28.5332 14.2597 28.5332ZM13.1657 8.3812C13.1527 8.4082 11.0467 10.3772 9.9807 11.5942C9.4607 12.1542 9.1877 12.8792 9.2557 13.6312C9.3107 14.4372 9.6797 15.1622 10.3227 15.7502C11.1837 16.4742 12.8787 16.6382 13.9177 15.6952C14.5737 15.1352 15.3127 14.3012 15.3397 14.3012C15.8597 13.6992 16.7617 13.6722 17.3357 14.2322C17.8967 14.7382 17.9237 15.6272 17.3907 16.2152C17.3907 16.2282 16.5567 17.1312 15.7907 17.7732C14.7927 18.7172 13.4667 19.1542 12.0857 19.1542C10.7867 19.1542 9.4887 18.7302 8.4907 17.8692C7.2457 16.8032 6.5217 15.3532 6.4117 13.8082C6.3297 12.2912 6.8357 10.8142 7.8887 9.6792C9.0367 8.4082 11.1157 6.4392 11.1837 6.3302C11.7577 5.7972 12.6327 5.8512 13.1797 6.3982C13.7537 6.9452 13.7267 7.8202 13.1657 8.3812ZM15.3397 20.3572C15.3537 20.3442 17.4457 18.3752 18.5257 17.1852C19.0317 16.5972 19.3047 15.8732 19.2497 15.1352C19.1957 14.3142 18.8127 13.5902 18.1837 13.0022C17.3087 12.2912 15.6267 12.1132 14.5737 13.0562C13.9177 13.6032 13.1797 14.4512 13.1657 14.4652C12.6327 15.0392 11.7437 15.0802 11.1697 14.5192C10.6097 14.0272 10.5687 13.1382 11.1017 12.5372C11.1157 12.5232 11.9487 11.6072 12.7007 10.9782C13.7267 10.0352 15.0387 9.5842 16.4067 9.5842C17.7187 9.5842 19.0177 10.0212 20.0427 10.8832C21.2457 11.9352 21.9847 13.3852 22.0937 14.9432C22.1757 16.4742 21.6567 17.9372 20.6167 19.0722C19.4687 20.3442 17.3907 22.3122 17.3087 22.4222C16.7477 22.9552 15.8597 22.9142 15.3127 22.3532C14.7517 21.8062 14.7657 20.9312 15.3397 20.3572Z"
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
            d="              M13.4117 26.8109C20.7677 26.8109 26.8107 20.7679 26.8107 13.3989C26.8107 6.0429 20.7677 -0.0001 13.3987 -0.0001C6.0427 -0.0001 -0.0003 6.0429 -0.0003 13.3989C-0.0003 20.7679 6.0427 26.8109 13.4117 26.8109ZM12.3317 7.6149C12.3047 7.6429 10.2407 9.5839 9.1737 10.8009C8.6677 11.3479 8.3947 12.0589 8.4627 12.8239C8.5177 13.6039 8.8867 14.3279 9.5157 14.9159C10.3767 15.6269 12.0447 15.7909 13.0837 14.8609C13.7267 14.3009 14.4647 13.4669 14.4787 13.4669C14.9977 12.8929 15.8867 12.8519 16.4477 13.3989C17.0217 13.9039 17.0487 14.7929 16.5297 15.3669C16.5017 15.3809 15.6817 16.2829 14.9437 16.9119C13.9457 17.8419 12.6187 18.2789 11.2657 18.2789C9.9667 18.2789 8.6817 17.8559 7.7107 16.9939C6.4807 15.9689 5.7557 14.5199 5.6467 12.9749C5.5647 11.4849 6.0707 10.0219 7.1097 8.9009C8.2437 7.6429 10.3087 5.6879 10.3767 5.5779C10.9377 5.0589 11.8127 5.1129 12.3457 5.6469C12.9067 6.1929 12.8927 7.0549 12.3317 7.6149ZM14.4787 19.4829C14.5057 19.4549 16.5707 17.5139 17.6367 16.3379C18.1427 15.7499 18.4157 15.0259 18.3477 14.3009C18.2927 13.4939 17.9237 12.7699 17.2947 12.1819C16.4337 11.4849 14.7657 11.3069 13.7267 12.2359C13.0837 12.7829 12.3457 13.6309 12.3317 13.6449C11.8127 14.2049 10.9237 14.2459 10.3637 13.6989C9.8027 13.2069 9.7617 12.3319 10.2817 11.7309C10.3087 11.7169 11.1287 10.8149 11.8667 10.1859C12.8927 9.2559 14.1917 8.8179 15.5447 8.8179C16.8437 8.8179 18.1287 9.2419 19.1407 10.0899C20.3297 11.1289 21.0687 12.5779 21.1637 14.1229C21.2457 15.6269 20.7407 17.0759 19.7007 18.1969C18.5667 19.4549 16.5297 21.4099 16.4337 21.5199C15.8727 22.0389 14.9977 22.0119 14.4647 21.4509C13.9047 20.9039 13.9177 20.0429 14.4787 19.4829Z"
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
            d="              M13.2477 26.4965C20.5347 26.4965 26.4957 20.5355 26.4957 13.2485C26.4957 5.9605 20.5347 0.0005 13.2477 0.0005C5.9607 0.0005 -0.0003 5.9605 -0.0003 13.2485C-0.0003 20.5355 5.9607 26.4965 13.2477 26.4965ZM12.1817 7.5055C12.1677 7.5335 10.1037 9.4605 9.0507 10.6645C8.5447 11.2105 8.2717 11.9215 8.3397 12.6735C8.3947 13.4535 8.7637 14.1775 9.3927 14.7515C10.2407 15.4625 11.8947 15.6265 12.9337 14.6975C13.5757 14.1365 14.3007 13.3165 14.3277 13.3165C14.8337 12.7425 15.7227 12.7145 16.2827 13.2485C16.8297 13.7535 16.8707 14.6285 16.3517 15.2035C16.3237 15.2165 15.5037 16.1055 14.7797 16.7345C13.7817 17.6645 12.4827 18.1015 11.1287 18.1015C9.8437 18.1015 8.5727 17.6775 7.5877 16.8305C6.3707 15.7915 5.6597 14.3695 5.5507 12.8375C5.4687 11.3475 5.9747 9.8985 6.9997 8.7915C8.1347 7.5335 10.1717 5.5915 10.2407 5.4825C10.8007 4.9625 11.6757 5.0175 12.1957 5.5645C12.7557 6.0975 12.7417 6.9595 12.1817 7.5055ZM14.3277 19.2915C14.3417 19.2635 16.4067 17.3355 17.4457 16.1605C17.9507 15.5855 18.2247 14.8755 18.1567 14.1365C18.1157 13.3435 17.7457 12.6195 17.1167 12.0445C16.2557 11.3475 14.6017 11.1695 13.5757 12.0995C12.9337 12.6465 12.1957 13.4805 12.1817 13.4945C11.6757 14.0545 10.7867 14.0825 10.2267 13.5485C9.6657 13.0565 9.6387 12.1815 10.1577 11.5935C10.1717 11.5805 10.9917 10.6915 11.7307 10.0625C12.7417 9.1325 14.0277 8.6955 15.3667 8.6955C16.6657 8.6955 17.9377 9.1195 18.9487 9.9665C20.1387 11.0055 20.8637 12.4275 20.9457 13.9595C21.0407 15.4625 20.5347 16.8985 19.5097 18.0055C18.3747 19.2635 16.3517 21.2055 16.2557 21.3005C15.6957 21.8345 14.8337 21.7925 14.3007 21.2325C13.7537 20.6995 13.7677 19.8375 14.3277 19.2915Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
