import { IconProps } from "../../types"

export default function CCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.8477 21.1781C17.3087 21.1781 19.3187 20.0981 20.0567 18.3891C20.2067 18.0881 20.2757 17.7321 20.2757 17.3631C20.2757 16.2971 19.5367 15.6681 18.2797 15.6681C17.4177 15.6681 16.8437 15.9961 16.4067 16.7621C16.0917 17.3081 15.5857 17.5821 14.9157 17.5821C13.7947 17.5821 13.1387 16.6111 13.1387 14.9301C13.1387 13.2481 13.7947 12.2771 14.9297 12.2771C15.5857 12.2771 16.0917 12.5781 16.4197 13.1521C16.8847 13.9731 17.3637 14.2461 18.2797 14.2461C19.5367 14.2461 20.2757 13.6171 20.2757 12.5511C20.2757 12.1821 20.2067 11.8261 20.0567 11.5121C19.3187 9.8031 17.2817 8.6821 14.8477 8.6821C11.1697 8.6821 8.7227 11.1701 8.7227 14.9301C8.7227 18.7031 11.1697 21.1781 14.8477 21.1781Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM14.3967 20.7816C16.8437 20.7816 18.7987 19.6606 19.5097 17.8826C19.6327 17.6096 19.6737 17.3496 19.6737 17.0626C19.6737 16.2426 19.1267 15.7496 18.2107 15.7496C17.5687 15.7496 17.1447 16.0096 16.8167 16.6246C16.3787 17.5686 15.5587 18.0746 14.4377 18.0746C12.7967 18.0746 11.7437 16.6386 11.7437 14.3826C11.7437 12.1266 12.7967 10.6916 14.4507 10.6916C15.5587 10.6916 16.3787 11.1976 16.8167 12.1676C17.1717 12.8106 17.5407 13.0426 18.2107 13.0426C19.1267 13.0426 19.6737 12.5506 19.6737 11.7306C19.6737 11.4296 19.6327 11.1836 19.5097 10.8966C18.7987 9.1196 16.8167 7.9846 14.3967 7.9846C10.7867 7.9846 8.4217 10.5136 8.4217 14.3826C8.4217 18.2656 10.7737 20.7816 14.3967 20.7816Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.6287 21.0004C17.0897 21.0004 19.0727 19.8924 19.7967 18.1564C19.9337 17.8694 19.9887 17.5544 19.9887 17.2264C19.9887 16.2694 19.3457 15.7094 18.2517 15.7094C17.4867 15.7094 16.9807 16.0094 16.5977 16.6934C16.2287 17.4314 15.5727 17.8284 14.6977 17.8284C13.3297 17.8284 12.4827 16.6384 12.4827 14.6834C12.4827 12.7284 13.3297 11.5394 14.6977 11.5394C15.5727 11.5394 16.2287 11.9354 16.6117 12.7014C17.0217 13.4254 17.4457 13.6854 18.2517 13.6854C19.3457 13.6854 19.9887 13.1254 19.9887 12.1684C19.9887 11.8394 19.9337 11.5254 19.7967 11.2384C19.0727 9.4884 17.0627 8.3674 14.6287 8.3674C10.9917 8.3674 8.5857 10.8694 8.5857 14.6834C8.5857 18.4984 10.9787 21.0004 14.6287 21.0004Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM13.7537 20.057C16.1467 20.057 18.0737 18.813 18.6207 16.953C18.6897 16.721 18.7027 16.584 18.7027 16.42C18.7027 15.955 18.4297 15.668 17.9787 15.668C17.6227 15.668 17.4047 15.832 17.2407 16.229C16.8027 17.719 15.5037 18.635 13.7817 18.635C11.4437 18.635 9.8437 16.611 9.8437 13.645C9.8437 10.678 11.4437 8.641 13.7817 8.641C15.5037 8.641 16.8027 9.543 17.2407 11.033C17.4047 11.43 17.6227 11.594 17.9787 11.594C18.4297 11.594 18.7027 11.32 18.7027 10.842C18.7027 10.678 18.6897 10.555 18.6207 10.309C18.0737 8.463 16.1187 7.205 13.7537 7.205C10.3637 7.205 8.1347 9.762 8.1347 13.645C8.1347 17.514 10.3497 20.057 13.7537 20.057Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM14.1097 20.5081C16.5427 20.5081 18.4707 19.3731 19.1547 17.5551C19.2497 17.2951 19.2907 17.0901 19.2907 16.8571C19.2907 16.1871 18.8537 15.7771 18.1567 15.7771C17.6637 15.7771 17.3357 16.0101 17.0757 16.5291C16.5567 17.7191 15.5317 18.3891 14.1367 18.3891C12.1547 18.3891 10.8417 16.6521 10.8417 14.0271C10.8417 11.4021 12.1547 9.6521 14.1507 9.6521C15.5317 9.6521 16.5707 10.3221 17.0757 11.5251C17.3497 12.0581 17.6507 12.2641 18.1567 12.2641C18.8537 12.2641 19.2907 11.8671 19.2907 11.1971C19.2907 10.9511 19.2497 10.7601 19.1547 10.5001C18.4707 8.6811 16.5297 7.5331 14.1097 7.5331C10.5407 7.5331 8.2437 10.0761 8.2437 14.0271C8.2437 17.9781 10.5277 20.5081 14.1097 20.5081Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.9457 20.3574C16.3657 20.3574 18.2927 19.2094 18.9487 17.3634C19.0447 17.1174 19.0727 16.9394 19.0727 16.7344C19.0727 16.1604 18.7027 15.8044 18.1287 15.8044C17.7187 15.8044 17.4457 16.0094 17.2267 16.4744C16.6657 17.8144 15.5177 18.5524 13.9727 18.5524C11.7987 18.5524 10.3357 16.6524 10.3357 13.8224C10.3357 10.9924 11.7987 9.0784 13.9727 9.0784C15.5177 9.0784 16.6657 9.8164 17.2267 11.1704C17.4457 11.6344 17.7187 11.8264 18.1287 11.8264C18.7027 11.8264 19.0727 11.4704 19.0727 10.8964C19.0727 10.6774 19.0447 10.5134 18.9487 10.2674C18.2797 8.4354 16.3657 7.2734 13.9457 7.2734C10.4047 7.2734 8.1347 9.8304 8.1347 13.8224C8.1347 17.8144 10.3907 20.3574 13.9457 20.3574Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM14.2327 20.6309C16.6657 20.6309 18.6207 19.4959 19.3047 17.6919C19.4137 17.4319 19.4547 17.1989 19.4547 16.9399C19.4547 16.2149 18.9767 15.7639 18.1837 15.7639C17.6227 15.7639 17.2537 16.0099 16.9667 16.5699C16.4887 17.6639 15.5447 18.2519 14.2737 18.2519C12.4277 18.2519 11.2247 16.6519 11.2247 14.1779C11.2247 11.7169 12.4277 10.1039 14.2737 10.1039C15.5447 10.1039 16.4887 10.7049 16.9667 11.7989C17.2677 12.3729 17.6097 12.6059 18.1837 12.6059C18.9767 12.6059 19.4547 12.1539 19.4547 11.4299C19.4547 11.1559 19.4137 10.9379 19.3047 10.6779C18.6207 8.8729 16.6527 7.7249 14.2327 7.7249C10.6507 7.7249 8.3127 10.2679 8.3127 14.1779C8.3127 18.1019 10.6367 20.6309 14.2327 20.6309Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM13.5077 19.6602C15.8457 19.6602 17.8007 18.3062 18.1837 16.4332C18.2247 16.1872 18.2247 16.1052 18.2247 16.0102C18.2247 15.6812 18.0737 15.4902 17.7597 15.4902C17.4997 15.4902 17.3497 15.6272 17.2817 15.9282C16.9807 17.6092 15.5037 18.7302 13.5217 18.7302C10.9647 18.7302 9.1877 16.5432 9.1877 13.3982C9.1877 10.2542 10.9647 8.0662 13.5217 8.0662C15.5037 8.0662 16.9937 9.1872 17.2817 10.8692C17.3497 11.1702 17.4997 11.2932 17.7597 11.2932C18.0737 11.2932 18.2247 11.1152 18.2247 10.7872C18.2247 10.6782 18.2247 10.6092 18.1837 10.3632C17.7867 8.5172 15.8047 7.1232 13.5077 7.1232C10.3087 7.1232 8.1487 9.6662 8.1487 13.3982C8.1487 17.1312 10.3087 19.6602 13.5077 19.6602Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM13.3847 19.4551C15.6957 19.4551 17.6637 18.0331 17.9507 16.1461C17.9917 15.9001 17.9787 15.8591 17.9787 15.7911C17.9787 15.5311 17.8827 15.3941 17.6507 15.3941C17.4457 15.3941 17.3227 15.5041 17.2947 15.7641C17.0757 17.5411 15.4907 18.7711 13.3847 18.7711C10.7327 18.7711 8.8457 16.5021 8.8457 13.2621C8.8457 10.0351 10.7327 7.7521 13.3847 7.7521C15.4907 7.7521 17.0897 8.9821 17.2947 10.7731C17.3227 11.0331 17.4457 11.1291 17.6507 11.1291C17.8827 11.1291 17.9787 11.0061 17.9787 10.7461C17.9787 10.6781 17.9917 10.6231 17.9507 10.3771C17.6507 8.5311 15.6407 7.0821 13.3847 7.0821C10.2947 7.0821 8.1487 9.6111 8.1487 13.2621C8.1487 16.9261 10.2947 19.4551 13.3847 19.4551Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
