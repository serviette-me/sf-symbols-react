import { IconProps } from "../../types"

export default function WifiCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM7.9157 14.2731C8.1487 14.5331 8.5447 14.5331 8.8047 14.2601C10.4587 12.5371 12.5507 11.6351 14.9297 11.6351C17.3357 11.6351 19.4547 12.5511 21.0687 14.2731C21.3147 14.5191 21.6977 14.5191 21.9437 14.2731L22.9137 13.2891C23.1187 13.0701 23.1327 12.7421 22.9547 12.5101C21.2187 10.3361 18.0467 8.9411 14.9297 8.9411C11.8127 8.9411 8.6407 10.3361 6.9047 12.5101C6.7267 12.7421 6.7407 13.0701 6.9457 13.2891ZM10.7597 16.9801C11.0327 17.2131 11.3887 17.1991 11.6487 16.9531C12.4957 16.0921 13.7267 15.5581 14.9297 15.5581C16.1327 15.5581 17.3767 16.0921 18.2387 16.9531C18.4847 17.2131 18.8397 17.2131 19.0997 16.9801L20.1937 15.9691C20.4117 15.7641 20.4397 15.4491 20.2477 15.2301C19.0857 13.8631 17.0347 13.0161 14.9297 13.0161C12.8237 13.0161 10.7737 13.8631 9.6117 15.2301C9.4197 15.4491 9.4477 15.7641 9.6657 15.9691ZM14.9297 20.8911C15.1757 20.8911 15.3947 20.7811 15.7087 20.4801L17.3767 18.8811C17.6097 18.6351 17.6227 18.2931 17.4317 18.0741C16.8297 17.3221 15.8867 16.8711 14.9297 16.8711C13.9457 16.8711 12.9747 17.3631 12.3727 18.1561C12.2227 18.3611 12.2777 18.6761 12.4957 18.8811L14.1637 20.4801C14.4787 20.7671 14.6837 20.8911 14.9297 20.8911Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM7.1227 13.6716C7.3417 13.9046 7.6977 13.9046 7.9157 13.6586C9.6387 11.8396 11.8947 10.8696 14.4377 10.8696C16.9937 10.8696 19.2637 11.8396 20.9587 13.6716C21.1777 13.8906 21.5197 13.8906 21.7387 13.6586L22.7367 12.6466C22.9137 12.4546 22.9277 12.1816 22.7637 11.9626C20.9727 9.7476 17.6777 8.2716 14.4377 8.2716C11.1837 8.2716 7.8887 9.7346 6.0977 11.9626C5.9337 12.1816 5.9477 12.4546 6.1387 12.6466ZM10.1167 16.5836C10.3497 16.8166 10.6637 16.7886 10.9097 16.5566C11.7987 15.6136 13.1387 15.0116 14.4377 15.0256C15.7227 15.0116 17.0757 15.6136 17.9787 16.5706C18.2107 16.8166 18.5257 16.8166 18.7577 16.5836L19.8787 15.5036C20.0707 15.3126 20.0977 15.0386 19.9197 14.8336C18.7167 13.3986 16.5977 12.5096 14.4377 12.5096C12.2637 12.5096 10.1447 13.4126 8.9417 14.8336C8.7777 15.0386 8.7907 15.3126 8.9957 15.5036ZM14.4377 20.6036C14.6567 20.6036 14.8337 20.5076 15.1617 20.2066L16.9117 18.5256C17.1037 18.3206 17.1307 18.0336 16.9667 17.8286C16.3787 17.0896 15.4077 16.6246 14.4377 16.6246C13.4397 16.6246 12.4547 17.1176 11.8667 17.9106C11.7307 18.0876 11.7717 18.3336 11.9627 18.5256L13.7127 20.2066C14.0277 20.4946 14.2047 20.6036 14.4377 20.6036Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM7.5467 14.0004C7.7657 14.2464 8.1487 14.2464 8.3947 13.9724C10.0757 12.2094 12.2367 11.2794 14.6977 11.2794C17.1717 11.2794 19.3597 12.2224 21.0277 14.0004C21.2457 14.2184 21.6157 14.2324 21.8477 13.9864L22.8317 12.9884C23.0237 12.7834 23.0367 12.4824 22.8597 12.2634C21.0957 10.0624 17.8827 8.6274 14.6977 8.6274C11.5117 8.6274 8.2847 10.0624 6.5217 12.2634C6.3437 12.4824 6.3707 12.7834 6.5627 12.9884ZM10.4457 16.8024C10.7047 17.0354 11.0467 17.0214 11.3067 16.7754C12.1677 15.8734 13.4527 15.3124 14.6977 15.3124C15.9417 15.3124 17.2407 15.8734 18.1157 16.7894C18.3477 17.0354 18.7027 17.0354 18.9357 16.8024L20.0427 15.7504C20.2617 15.5584 20.2757 15.2574 20.0837 15.0524C18.9077 13.6584 16.8297 12.7834 14.6977 12.7834C12.5647 12.7834 10.4867 13.6584 9.2967 15.0524C9.1187 15.2714 9.1327 15.5584 9.3517 15.7504ZM14.6977 20.7674C14.9297 20.7674 15.1207 20.6584 15.4487 20.3574L17.1577 18.7164C17.3637 18.4984 17.3907 18.1834 17.2127 17.9644C16.6117 17.2134 15.6677 16.7614 14.6977 16.7614C13.7127 16.7614 12.7287 17.2544 12.1407 18.0474C11.9907 18.2384 12.0447 18.5254 12.2497 18.7164L13.9587 20.3574C14.2737 20.6444 14.4647 20.7674 14.6977 20.7674Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM5.9197 12.66C6.0837 12.852 6.3437 12.838 6.5217 12.646C8.3807 10.678 10.8827 9.611 13.6987 9.611C16.5297 9.611 19.0587 10.65 20.9047 12.66C21.0687 12.838 21.3277 12.838 21.4787 12.66L22.4767 11.648C22.6267 11.498 22.6407 11.293 22.5037 11.129C20.6447 8.832 17.1447 7.273 13.6987 7.273C10.2537 7.273 6.7537 8.832 4.8947 11.129C4.7717 11.293 4.7847 11.498 4.9217 11.648ZM9.1467 15.9C9.3237 16.078 9.5567 16.064 9.7477 15.873C10.7047 14.807 12.2367 14.123 13.6987 14.137C15.1617 14.123 16.6937 14.807 17.6637 15.873C17.8557 16.078 18.0877 16.078 18.2657 15.9L19.4007 14.766C19.5507 14.615 19.5647 14.41 19.4277 14.26C18.1977 12.756 15.9827 11.785 13.6987 11.785C11.4297 11.785 9.2007 12.77 7.9847 14.26C7.8477 14.41 7.8617 14.615 8.0117 14.766ZM13.6987 20.152C13.8767 20.152 13.9997 20.07 14.3277 19.783L16.1877 17.979C16.3107 17.855 16.3377 17.664 16.2147 17.5C15.7087 16.816 14.7107 16.311 13.6987 16.311C12.6877 16.311 11.6897 16.816 11.1697 17.541C11.0607 17.691 11.0877 17.855 11.2387 17.979L13.0837 19.783C13.3987 20.057 13.5217 20.152 13.6987 20.152Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM6.6307 13.2751C6.8227 13.4941 7.1367 13.4941 7.3557 13.2621C9.1187 11.3751 11.4707 10.3771 14.1097 10.3771C16.7757 10.3771 19.1407 11.3751 20.9047 13.2751C21.0957 13.4671 21.4097 13.4801 21.6017 13.2621L22.6137 12.2361C22.7907 12.0581 22.8047 11.7991 22.6407 11.6071C20.8227 9.3511 17.4457 7.8481 14.1097 7.8481C10.7867 7.8481 7.4097 9.3511 5.5777 11.6071C5.4277 11.7991 5.4417 12.0581 5.6187 12.2361ZM9.6937 16.3241C9.9117 16.5431 10.1987 16.5291 10.4317 16.2971C11.3477 15.2991 12.7557 14.6701 14.1097 14.6831C15.4627 14.6701 16.8847 15.2991 17.8147 16.3101C18.0327 16.5431 18.3337 16.5431 18.5257 16.3241L19.6737 15.1891C19.8517 15.0251 19.8787 14.7651 19.7007 14.5881C18.4847 13.0981 16.3237 12.1681 14.1097 12.1681C11.9077 12.1681 9.7477 13.0981 8.5177 14.5881C8.3537 14.7791 8.3667 15.0121 8.5727 15.1891ZM14.1097 20.4121C14.3277 20.4121 14.4787 20.3161 14.8207 20.0151L16.6117 18.2791C16.7757 18.1151 16.8027 17.8551 16.6527 17.6641C16.1057 16.9391 15.1077 16.4471 14.1097 16.4471C13.1117 16.4471 12.1137 16.9531 11.5387 17.7461C11.4157 17.8961 11.4567 18.1151 11.6347 18.2791L13.4257 20.0151C13.7407 20.3161 13.9047 20.4121 14.1097 20.4121Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM6.3437 13.0564C6.5217 13.2614 6.8357 13.2484 7.0407 13.0294C8.8187 11.1154 11.2247 10.0894 13.9317 10.0894C16.6387 10.0894 19.0727 11.1154 20.8637 13.0434C21.0547 13.2344 21.3417 13.2484 21.5197 13.0434L22.5447 11.9904C22.7087 11.8264 22.7227 11.5934 22.5857 11.4024C20.7267 9.1324 17.3087 7.6014 13.9317 7.6014C10.5687 7.6014 7.1367 9.1324 5.2907 11.4024C5.1407 11.5934 5.1677 11.8264 5.3187 11.9904ZM9.4607 16.1734C9.6657 16.3924 9.9397 16.3784 10.1717 16.1464C11.0877 15.1214 12.5367 14.4644 13.9317 14.4784C15.3257 14.4644 16.7757 15.1214 17.7327 16.1604C17.9377 16.3924 18.2107 16.3924 18.4027 16.1734L19.5647 15.0254C19.7287 14.8614 19.7557 14.6154 19.5917 14.4374C18.3477 12.9334 16.1737 11.9764 13.9317 11.9764C11.7027 11.9764 9.5157 12.9334 8.2847 14.4374C8.1207 14.6284 8.1347 14.8474 8.3257 15.0254ZM13.9317 20.3024C14.1367 20.3024 14.2737 20.2204 14.6157 19.9204L16.4477 18.1564C16.5977 17.9924 16.6247 17.7594 16.4887 17.5824C15.9417 16.8434 14.9297 16.3514 13.9317 16.3514C12.9197 16.3514 11.9217 16.8574 11.3617 17.6504C11.2387 17.8004 11.2797 17.9924 11.4437 18.1564L13.2617 19.9204C13.5897 20.2074 13.7267 20.3024 13.9317 20.3024Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM6.8497 13.4399C7.0407 13.6719 7.3827 13.6719 7.6017 13.4259C9.3377 11.5799 11.6487 10.5819 14.2457 10.5819C16.8707 10.5819 19.1957 11.5669 20.9317 13.4399C21.1367 13.6579 21.4507 13.6579 21.6567 13.4399L22.6677 12.4139C22.8457 12.2359 22.8597 11.9629 22.6957 11.7579C20.8907 9.5159 17.5407 8.0389 14.2457 8.0389C10.9647 8.0389 7.6157 9.5159 5.8107 11.7579C5.6467 11.9629 5.6597 12.2359 5.8377 12.4139ZM9.8707 16.4339C10.1037 16.6659 10.4047 16.6389 10.6367 16.4199C11.5387 15.4359 12.9197 14.8199 14.2457 14.8339C15.5727 14.8199 16.9667 15.4359 17.8967 16.4199C18.1157 16.6519 18.4157 16.6659 18.6207 16.4339L19.7557 15.3259C19.9477 15.1489 19.9607 14.8889 19.7967 14.6969C18.5797 13.2349 16.4477 12.3179 14.2457 12.3179C12.0587 12.3179 9.9257 13.2349 8.7087 14.6969C8.5447 14.8889 8.5587 15.1489 8.7497 15.3259ZM14.2457 20.4939C14.4647 20.4939 14.6287 20.3989 14.9707 20.0979L16.7347 18.3889C16.9117 18.2109 16.9397 17.9379 16.7887 17.7329C16.2287 17.0079 15.2437 16.5289 14.2457 16.5289C13.2477 16.5289 12.2637 17.0219 11.6757 17.8149C11.5527 17.9789 11.5937 18.2109 11.7717 18.3889L13.5487 20.0979C13.8767 20.3989 14.0407 20.4939 14.2457 20.4939Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM5.3597 12.1682C5.4957 12.3182 5.7007 12.3042 5.8377 12.1402C7.7927 10.1032 10.4317 8.9822 13.3987 8.9822C16.3657 8.9822 19.0447 10.0622 20.9587 12.1402C21.0957 12.3042 21.2867 12.3182 21.4237 12.1542L22.3807 11.1832C22.5177 11.0472 22.5177 10.8962 22.4077 10.7602C20.5217 8.4632 16.9257 6.8492 13.3987 6.8492C9.8577 6.8492 6.2617 8.4352 4.3887 10.7602C4.2657 10.8962 4.2927 11.0472 4.4027 11.1832ZM8.7227 15.5312C8.8597 15.6812 9.0367 15.6542 9.2007 15.5042C10.2127 14.3962 11.8257 13.6722 13.3987 13.6852C14.9567 13.6722 16.5837 14.3962 17.5957 15.5042C17.7457 15.6542 17.9377 15.6812 18.0737 15.5312L19.1817 14.4242C19.3047 14.3012 19.3187 14.1372 19.1957 14.0272C18.0057 12.5372 15.7227 11.5532 13.3987 11.5532C11.0607 11.5532 8.7907 12.5512 7.5877 14.0272C7.4917 14.1502 7.4917 14.3012 7.6157 14.4242ZM13.3987 19.9472C13.5347 19.9472 13.6447 19.8652 13.9457 19.6052L15.8317 17.7732C15.9417 17.6642 15.9547 17.5412 15.8597 17.4042C15.4077 16.7752 14.4097 16.2562 13.3987 16.2562C12.3867 16.2562 11.3887 16.7752 10.9237 17.4182C10.8277 17.5542 10.8417 17.6642 10.9507 17.7732L12.8517 19.6052C13.1387 19.8652 13.2617 19.9472 13.3987 19.9472Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM5.0727 11.8941C5.1957 12.0311 5.3727 12.0171 5.4957 11.8811C7.4787 9.8031 10.1987 8.6401 13.2347 8.6401C16.2827 8.6401 19.0447 9.7481 20.9867 11.8811C21.1097 12.0171 21.2737 12.0311 21.3967 11.8941L22.3397 10.9371C22.4627 10.8141 22.4627 10.6781 22.3537 10.5551C20.4527 8.2581 16.8167 6.6311 13.2347 6.6311C9.6527 6.6311 6.0017 8.2301 4.1157 10.5551C4.0197 10.6781 4.0327 10.8141 4.1427 10.9371ZM8.5037 15.3401C8.6267 15.4631 8.7777 15.4351 8.9137 15.2991C9.9527 14.1781 11.6347 13.4261 13.2347 13.4531C14.8477 13.4261 16.5297 14.1781 17.5547 15.2991C17.6917 15.4351 17.8557 15.4631 17.9647 15.3401L19.0727 14.2461C19.1677 14.1371 19.1957 14.0001 19.0857 13.8901C17.8967 12.4141 15.5997 11.4161 13.2347 11.4161C10.8827 11.4161 8.5727 12.4281 7.3827 13.8901C7.3007 14.0001 7.3007 14.1371 7.4097 14.2461ZM13.2347 19.8241C13.3577 19.8241 13.4667 19.7561 13.7407 19.4961L15.6677 17.6501C15.7497 17.5551 15.7637 17.4731 15.6817 17.3361C15.2437 16.7481 14.2457 16.2281 13.2347 16.2281C12.2227 16.2281 11.2247 16.7481 10.8007 17.3361C10.7047 17.4731 10.7047 17.5551 10.8147 17.6501L12.7287 19.4961C13.0157 19.7561 13.1117 19.8241 13.2347 19.8241Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}