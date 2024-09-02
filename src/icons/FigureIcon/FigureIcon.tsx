import { IconProps } from "../../types"

export default function FigureIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.8671875 32.853515625"
          className={className}
        >
          <path
            d="              M12.9337 6.9047C14.8337 6.9047 16.3787 5.3597 16.3787 3.4587C16.3787 1.5587 14.8337 -0.0003 12.9337 -0.0003C11.0337 -0.0003 9.4747 1.5587 9.4747 3.4587C9.4747 5.3597 11.0337 6.9047 12.9337 6.9047ZM12.9337 20.7407C13.3707 20.7407 13.5627 20.9867 13.8907 22.0257C14.3687 23.4477 15.9007 29.5857 16.3247 31.3767C16.5297 32.3477 17.0897 32.8537 17.9647 32.8537C19.0727 32.8537 19.7557 31.8687 19.4417 30.7617C19.3597 30.3787 17.2407 21.5467 16.9397 19.7417C16.6657 17.8967 16.6797 13.8497 16.6797 12.5777C16.6797 11.9087 17.0487 11.3747 17.5957 11.2517C18.2387 11.1017 23.8577 10.5277 24.6507 10.2267C25.3887 9.9937 25.8677 9.3787 25.8677 8.6267C25.8677 7.7107 25.1977 6.9997 24.3637 6.9997C24.1037 6.9997 23.8847 7.0547 23.6387 7.1097C21.3007 7.5197 16.4197 8.0667 12.9337 8.0667C9.4747 8.0667 4.5527 7.5607 2.2017 7.1097C1.9007 7.0407 1.6957 6.9997 1.5037 6.9997C0.6697 6.9997 -0.0003 7.6977 -0.0003 8.6267C-0.0003 9.4197 0.4927 10.0757 1.2307 10.2407C2.0647 10.4317 7.5747 11.1287 8.2717 11.2517C8.8317 11.3477 9.2017 11.8667 9.2147 12.5777C9.2427 13.8497 9.2147 17.8967 8.9137 19.7417C8.5997 21.5467 6.4937 30.3787 6.4117 30.7617C6.0837 31.8417 6.7817 32.8537 7.8887 32.8537C8.7227 32.8537 9.2557 32.3887 9.5297 31.3907C10.0347 29.5997 11.4847 23.4887 12.0037 22.0257C12.3727 20.9587 12.5097 20.7407 12.9337 20.7407Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.814453125 31.5"
          className={className}
        >
          <path
            d="              M12.4007 6.4258C14.1777 6.4258 15.6137 4.9898 15.6137 3.2128C15.6137 1.4358 14.1777 -0.0002 12.4007 -0.0002C10.6227 -0.0002 9.1877 1.4358 9.1877 3.2128C9.1877 4.9898 10.6227 6.4258 12.4007 6.4258ZM12.4007 19.7698C12.9067 19.7698 13.1247 20.0708 13.4397 21.0818C13.8907 22.4768 15.3947 28.4238 15.8047 30.1598C16.0097 31.0758 16.5157 31.4998 17.2817 31.4998C18.2657 31.4998 18.8677 30.6118 18.5937 29.6268C18.4977 29.2578 16.4477 20.6988 16.1597 18.9358C15.9007 17.1448 15.9007 13.2068 15.9007 11.9768C15.9007 11.2388 16.2697 10.7188 16.8847 10.5818C17.5277 10.4178 22.9547 9.8578 23.7067 9.5978C24.3637 9.3788 24.8147 8.8318 24.8147 8.1488C24.8147 7.3008 24.1717 6.6988 23.4747 6.6988C23.2287 6.6988 23.0097 6.7538 22.7637 6.8088C20.5347 7.2048 15.7777 7.7248 12.4007 7.7248C9.0367 7.7248 4.2657 7.2458 2.0237 6.8088C1.7497 6.7398 1.5447 6.6988 1.3397 6.6988C0.6287 6.6988 -0.0003 7.2868 -0.0003 8.1488C-0.0003 8.8598 0.4377 9.4468 1.1077 9.5978C1.9007 9.7758 7.2457 10.4588 7.9157 10.5818C8.5317 10.6778 8.9137 11.2248 8.9277 11.9768C8.9547 13.2068 8.9137 17.1448 8.6267 18.9358C8.3397 20.6988 6.2887 29.2578 6.1937 29.6268C5.9067 30.5978 6.5347 31.4998 7.5197 31.4998C8.2577 31.4998 8.7497 31.0898 8.9957 30.1738C9.4887 28.4378 10.8967 22.5178 11.3887 21.0818C11.7307 20.0568 11.9087 19.7698 12.4007 19.7698Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.375 32.224609375"
          className={className}
        >
          <path
            d="              M12.6737 6.6852C14.5197 6.6852 16.0237 5.1812 16.0237 3.3362C16.0237 1.5042 14.5197 0.0002 12.6737 0.0002C10.8417 0.0002 9.3377 1.5042 9.3377 3.3362C9.3377 5.1812 10.8417 6.6852 12.6737 6.6852ZM12.6737 20.2892C13.1527 20.2892 13.3577 20.5492 13.6717 21.5882C14.1507 22.9962 15.6547 29.0392 16.0777 30.8032C16.2837 31.7462 16.8297 32.2242 17.6367 32.2242C18.6897 32.2242 19.3317 31.2672 19.0447 30.2282C18.9497 29.8592 16.8577 21.1502 16.5707 19.3592C16.2967 17.5412 16.3107 13.5492 16.3107 12.3042C16.3107 11.5942 16.6797 11.0602 17.2537 10.9372C17.9097 10.7872 23.4337 10.2132 24.1997 9.9262C24.9097 9.7072 25.3747 9.1192 25.3747 8.4082C25.3747 7.5192 24.7047 6.8632 23.9397 6.8632C23.6937 6.8632 23.4747 6.9182 23.2287 6.9722C20.9457 7.3832 16.1187 7.9022 12.6737 7.9022C9.2697 7.9022 4.4157 7.4102 2.1187 6.9722C1.8317 6.9042 1.6267 6.8632 1.4217 6.8632C0.6567 6.8632 -0.0003 7.5062 -0.0003 8.4082C-0.0003 9.1602 0.4647 9.7892 1.1757 9.9392C1.9827 10.1312 7.4237 10.8142 8.1077 10.9372C8.6817 11.0332 9.0647 11.5662 9.0777 12.3042C9.1057 13.5492 9.0777 17.5412 8.7777 19.3592C8.4767 21.1502 6.3987 29.8592 6.3167 30.2282C6.0017 31.2542 6.6717 32.2242 7.7107 32.2242C8.5037 32.2242 9.0097 31.7732 9.2837 30.8162C9.7757 29.0532 11.2107 23.0232 11.7167 21.5882C12.0587 20.5352 12.2227 20.2892 12.6737 20.2892Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.10546875 29.380859375"
          className={className}
        >
          <path
            d="              M11.5527 5.769C13.1527 5.769 14.4377 4.484 14.4377 2.885C14.4377 1.285 13.1527 0 11.5527 0C9.9527 0 8.6677 1.285 8.6677 2.885C8.6677 4.484 9.9527 5.769 11.5527 5.769ZM11.5527 18.307C12.1137 18.307 12.3727 18.689 12.6597 19.66C13.0567 20.986 14.4787 26.592 14.9027 28.232C15.0937 29.039 15.5177 29.381 16.1467 29.381C16.9807 29.381 17.4727 28.629 17.2537 27.795C17.1587 27.453 15.1897 19.359 14.9567 17.691C14.7247 15.996 14.6837 12.264 14.6837 11.129C14.6977 10.281 15.0527 9.789 15.7367 9.652C16.3657 9.502 21.4517 8.928 22.1207 8.736C22.7227 8.586 23.1057 8.107 23.1057 7.506C23.1057 6.754 22.5447 6.303 21.9977 6.303C21.7387 6.303 21.5197 6.344 21.2187 6.412C19.2367 6.781 14.7247 7.246 11.5527 7.246C8.3807 7.246 3.8557 6.795 1.8727 6.412C1.5857 6.344 1.3537 6.303 1.1077 6.303C0.5337 6.303 -0.0003 6.754 -0.0003 7.506C-0.0003 8.107 0.3687 8.613 0.9707 8.736C1.6677 8.887 6.7267 9.529 7.3557 9.652C8.0387 9.775 8.4087 10.281 8.4217 11.129C8.4497 12.264 8.3807 15.996 8.1347 17.691C7.8887 19.359 5.9337 27.453 5.8377 27.795C5.6057 28.629 6.1117 29.381 6.9457 29.381C7.5747 29.381 7.9847 29.039 8.2027 28.232C8.6547 26.592 10.0347 21.014 10.4587 19.66C10.7457 18.703 10.9927 18.307 11.5527 18.307Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.130859375 30.638671875"
          className={className}
        >
          <path
            d="              M12.0587 6.1249C13.7537 6.1249 15.1207 4.7579 15.1207 3.0629C15.1207 1.3669 13.7537 -0.0001 12.0587 -0.0001C10.3637 -0.0001 8.9957 1.3669 8.9957 3.0629C8.9957 4.7579 10.3637 6.1249 12.0587 6.1249ZM12.0587 19.1409C12.6057 19.1409 12.8517 19.4819 13.1527 20.4939C13.5897 21.8609 15.0667 27.6719 15.4767 29.3809C15.6677 30.2559 16.1467 30.6389 16.8297 30.6389C17.7457 30.6389 18.2927 29.8049 18.0467 28.9019C17.9517 28.5469 15.9277 20.1519 15.6677 18.4159C15.4087 16.6519 15.3947 12.7969 15.4087 11.6069C15.4087 10.8149 15.7777 10.2949 16.4337 10.1449C17.0767 9.9939 22.3677 9.4339 23.0917 9.1879C23.7067 8.9959 24.1307 8.5039 24.1307 7.8479C24.1307 7.0409 23.5157 6.5219 22.9007 6.5219C22.6677 6.5219 22.4497 6.5629 22.2027 6.6169C20.0297 7.0139 15.3677 7.5199 12.0587 7.5199C8.7777 7.5199 4.0877 7.0409 1.9137 6.6169C1.6547 6.5629 1.4497 6.5219 1.2307 6.5219C0.5877 6.5219 -0.0003 7.0269 -0.0003 7.8479C-0.0003 8.5039 0.3967 9.0509 1.0257 9.2009C1.7907 9.3649 7.0277 10.0219 7.6837 10.1449C8.3397 10.2679 8.7227 10.8149 8.7367 11.6069C8.7637 12.7969 8.7227 16.6519 8.4497 18.4159C8.1617 20.1519 6.1657 28.5469 6.0567 28.9019C5.7967 29.8049 6.3707 30.6389 7.2867 30.6389C7.9567 30.6389 8.4087 30.2699 8.6547 29.3809C9.1187 27.6859 10.5277 21.8889 10.9927 20.4939C11.3207 19.4959 11.5257 19.1409 12.0587 19.1409Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.748046875 30.146484375"
          className={className}
        >
          <path
            d="              M11.8677 5.9468C13.5217 5.9468 14.8477 4.6208 14.8477 2.9808C14.8477 1.3258 13.5217 -0.0002 11.8677 -0.0002C10.2127 -0.0002 8.8867 1.3258 8.8867 2.9808C8.8867 4.6208 10.2127 5.9468 11.8677 5.9468ZM11.8677 18.7848C12.4417 18.7848 12.6877 19.1408 12.9887 20.1518C13.4257 21.5058 14.8747 27.2478 15.2847 28.9438C15.4767 29.7908 15.9417 30.1468 16.5837 30.1468C17.4587 30.1468 17.9787 29.3538 17.7457 28.4918C17.6507 28.1228 15.6547 19.8378 15.3947 18.1288C15.1347 16.3788 15.1207 12.5648 15.1207 11.3888C15.1207 10.5688 15.5037 10.0488 16.1737 9.8988C16.8167 9.7478 22.0387 9.1878 22.7497 8.9548C23.3377 8.7768 23.7477 8.2988 23.7477 7.6698C23.7477 6.8768 23.1467 6.3988 22.5857 6.3988C22.3537 6.3988 22.1347 6.4528 21.8887 6.5078C19.7557 6.8908 15.1487 7.3828 11.8677 7.3828C8.6137 7.3828 3.9787 6.9178 1.8457 6.5078C1.6137 6.4528 1.3807 6.3988 1.1617 6.3988C0.5747 6.3988 -0.0003 6.8768 -0.0003 7.6698C-0.0003 8.2988 0.3827 8.8318 0.9847 8.9548C1.7367 9.1188 6.9177 9.7758 7.5607 9.8988C8.2307 10.0218 8.6267 10.5688 8.6407 11.3888C8.6547 12.5648 8.6137 16.3788 8.3397 18.1288C8.0667 19.8378 6.0837 28.1228 5.9887 28.4918C5.7427 29.3538 6.2757 30.1468 7.1507 30.1468C7.7927 30.1468 8.2307 29.7908 8.4627 28.9438C8.9277 27.2618 10.3087 21.5328 10.7737 20.1518C11.0877 19.1678 11.3067 18.7848 11.8677 18.7848Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.41796875 31.0078125"
          className={className}
        >
          <path
            d="              M12.2087 6.2477C13.9317 6.2477 15.3397 4.8537 15.3397 3.1307C15.3397 1.3947 13.9317 -0.0003 12.2087 -0.0003C10.4727 -0.0003 9.0777 1.3947 9.0777 3.1307C9.0777 4.8537 10.4727 6.2477 12.2087 6.2477ZM12.2087 19.4007C12.7427 19.4007 12.9607 19.7287 13.2757 20.7407C13.7267 22.1207 15.2027 27.9867 15.6137 29.7087C15.8187 30.5977 16.3107 31.0077 17.0217 31.0077C17.9647 31.0077 18.5387 30.1467 18.2927 29.2167C18.1837 28.8477 16.1467 20.3847 15.8867 18.6347C15.6137 16.8577 15.6137 12.9747 15.6137 11.7577C15.6137 10.9927 15.9957 10.4727 16.6247 10.3227C17.2677 10.1717 22.6137 9.6117 23.3517 9.3657C23.9937 9.1597 24.4177 8.6407 24.4177 7.9707C24.4177 7.1367 23.7887 6.5897 23.1467 6.5897C22.9007 6.5897 22.6957 6.6447 22.4357 6.6997C20.2477 7.0957 15.5447 7.6017 12.2087 7.6017C8.8867 7.6017 4.1567 7.1227 1.9687 6.6997C1.6957 6.6447 1.4907 6.5897 1.2717 6.5897C0.6017 6.5897 -0.0003 7.1367 -0.0003 7.9707C-0.0003 8.6547 0.4097 9.2287 1.0667 9.3657C1.8317 9.5297 7.1227 10.1997 7.7927 10.3227C8.4217 10.4317 8.8047 10.9787 8.8187 11.7577C8.8457 12.9747 8.8047 16.8577 8.5317 18.6347C8.2437 20.3847 6.2207 28.8477 6.1247 29.2167C5.8517 30.1467 6.4397 31.0077 7.3827 31.0077C8.0937 31.0077 8.5587 30.6117 8.8047 29.7227C9.2837 28.0137 10.6917 22.1487 11.1697 20.7407C11.4977 19.7427 11.6897 19.4007 12.2087 19.4007Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.244140625 28.3828125"
          className={className}
        >
          <path
            d="              M11.1287 5.5232C12.6597 5.5232 13.8907 4.2932 13.8907 2.7622C13.8907 1.2302 12.6597 0.0002 11.1287 0.0002C9.5977 0.0002 8.3677 1.2302 8.3677 2.7622C8.3677 4.2932 9.5977 5.5232 11.1287 5.5232ZM11.1287 17.6782C11.6897 17.6782 11.9627 18.0742 12.2087 19.0042C12.5777 20.3032 13.9587 25.7032 14.3967 27.2892C14.5877 28.0272 14.9707 28.3832 15.5587 28.3832C16.3377 28.3832 16.8027 27.6722 16.6117 26.8922C16.5157 26.5512 14.5877 18.7442 14.3827 17.1312C14.1777 15.4762 14.0957 11.8812 14.1097 10.7732C14.1227 9.9122 14.4647 9.4472 15.1757 9.3242C15.7777 9.1872 20.6587 8.5722 21.3007 8.4492C21.8887 8.3262 22.2437 7.8612 22.2437 7.2872C22.2437 6.6032 21.7657 6.1662 21.2047 6.1662C20.9317 6.1662 20.6857 6.2072 20.3437 6.2752C18.5527 6.6172 14.1777 7.0682 11.1287 7.0682C8.0667 7.0682 3.6917 6.6312 1.9007 6.2752C1.5587 6.2072 1.3127 6.1662 1.0387 6.1662C0.4787 6.1662 -0.0003 6.6032 -0.0003 7.2872C-0.0003 7.8612 0.3557 8.3402 0.9567 8.4492C1.5857 8.5582 6.4667 9.2012 7.0817 9.3242C7.7797 9.4472 8.1207 9.9122 8.1487 10.7732C8.1617 11.8812 8.0667 15.4762 7.8617 17.1312C7.6567 18.7442 5.7287 26.5512 5.6467 26.8922C5.4417 27.6722 5.9067 28.3832 6.6857 28.3832C7.2737 28.3832 7.6567 28.0272 7.8617 27.2892C8.2987 25.7032 9.6657 20.3162 10.0347 19.0042C10.2947 18.0742 10.5687 17.6782 11.1287 17.6782Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.806640625 27.86328125"
          className={className}
        >
          <path
            d="              M10.9097 5.4004C12.4007 5.4004 13.6037 4.1974 13.6037 2.7074C13.6037 1.2034 12.4007 0.0004 10.9097 0.0004C9.4067 0.0004 8.2027 1.2034 8.2027 2.7074C8.2027 4.1974 9.4067 5.4004 10.9097 5.4004ZM10.9097 17.3634C11.4707 17.3634 11.7437 17.7594 11.9907 18.6624C12.3317 19.9614 13.6997 25.2524 14.1367 26.8104C14.3277 27.5214 14.6837 27.8634 15.2577 27.8634C16.0097 27.8634 16.4607 27.1934 16.2697 26.4274C16.1877 26.0864 14.2867 18.4294 14.0957 16.8434C13.9047 15.2164 13.7947 11.6754 13.8087 10.5954C13.8357 9.7204 14.1637 9.2694 14.8747 9.1464C15.4767 9.0234 20.2617 8.3944 20.8767 8.2984C21.4647 8.1894 21.8067 7.7244 21.8067 7.1644C21.8067 6.5214 21.3557 6.0844 20.8087 6.0844C20.5217 6.0844 20.2617 6.1384 19.8927 6.2074C18.2107 6.5354 13.9047 6.9724 10.9097 6.9724C7.9157 6.9724 3.6097 6.5354 1.9137 6.2074C1.5587 6.1384 1.2847 6.0844 1.0117 6.0844C0.4517 6.0844 -0.0003 6.5214 -0.0003 7.1644C-0.0003 7.7244 0.3417 8.1894 0.9437 8.2984C1.5447 8.4084 6.3437 9.0234 6.9317 9.1464C7.6567 9.2694 7.9847 9.7204 7.9977 10.5954C8.0117 11.6754 7.9157 15.2164 7.7247 16.8434C7.5337 18.4294 5.6327 26.0864 5.5367 26.4274C5.3457 27.1934 5.7967 27.8634 6.5487 27.8634C7.1227 27.8634 7.4927 27.5214 7.6837 26.8104C8.1207 25.2524 9.4747 19.9614 9.8297 18.6624C10.0627 17.7594 10.3497 17.3634 10.9097 17.3634Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}