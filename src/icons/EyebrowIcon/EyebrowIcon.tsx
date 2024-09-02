import { IconProps } from "../../types"

export default function EyebrowIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.09144678991821 27.853611445302406"
          className={className}
        >
          <path
            d="              M3.9417 13.2893C6.7987 13.2893 16.3557 6.8083 20.0057 6.8083C21.3187 6.8083 22.3847 7.3283 23.6017 8.4223L27.4297 11.8943C29.3297 13.6313 32.2427 11.5523 30.6157 9.0373C29.9727 8.0393 29.2347 6.7953 26.9377 4.2523C24.2027 1.2443 22.0297 0.0003 18.9397 0.0003C15.3437 0.0003 8.6717 2.5293 1.8907 5.8793C-1.5413 7.5883 0.0317 13.2893 3.9417 13.2893ZM27.9087 19.6603C30.1097 17.2953 26.6507 14.0273 24.3267 16.3653C22.7537 17.9373 20.0197 18.8673 16.9707 18.8673C13.4437 18.8673 10.1487 18.0333 6.9087 16.2833C3.9417 14.6703 1.7817 19.0723 4.7477 20.6723C4.8847 20.7403 5.0217 20.8223 5.1587 20.8903C4.9527 21.1503 4.7207 21.3963 4.4477 21.6973C2.4237 23.7893 5.5137 26.5643 7.4687 24.4183C8.0157 23.8303 8.4947 23.1743 8.9587 22.4763C9.4517 22.6403 9.9567 22.7773 10.4497 22.9143C10.2307 23.7203 9.9707 24.3493 9.7927 24.7733C8.5897 27.4263 12.4457 28.9843 13.5667 26.2773C13.8947 25.4573 14.1547 24.5413 14.3457 23.6113C15.1527 23.6933 15.9587 23.7483 16.7517 23.7483C16.8067 24.5273 16.7657 25.1703 16.7247 25.6073C16.5337 28.5333 20.7307 28.6423 20.7987 25.6893C20.8127 24.9513 20.7717 24.1723 20.6757 23.3923C21.4957 23.2283 22.2887 22.9963 23.0547 22.7223C23.4517 23.6793 23.5747 24.3363 23.6567 24.8143C24.1617 27.6723 28.2637 26.5923 27.6207 23.8983C27.3477 22.7223 26.9927 21.6833 26.5817 20.8493C27.0607 20.4803 27.5117 20.0843 27.9087 19.6603Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.682369225692174 26.02808995035536"
          className={className}
        >
          <path
            d="              M3.4199 12.2365C6.1409 12.2365 15.2739 5.8655 19.2249 5.8655C20.6189 5.8655 21.8089 6.4125 23.1079 7.6015L26.7309 10.9105C28.2479 12.3045 30.5179 10.6505 29.3689 8.8045C28.7539 7.8065 27.9199 6.5075 25.7599 4.1155C23.2989 1.3945 21.2209 -0.0005 18.1039 -0.0005C14.2759 -0.0005 7.8499 2.4475 1.5879 5.6465C-1.3511 7.1365 0.0979 12.2365 3.4199 12.2365ZM26.6349 18.2385C28.2889 16.4605 25.7459 13.9995 23.9279 15.8045C22.2459 17.4725 19.3339 18.4985 16.1209 18.4985C12.4979 18.4985 9.0799 17.6505 5.7579 15.8455C3.5019 14.6285 1.8479 17.9235 4.1449 19.1405C4.5959 19.3865 5.0609 19.6195 5.5389 19.8375C5.2249 20.3435 4.8689 20.7945 4.4999 21.1915C3.0239 22.7365 5.2519 24.7325 6.7149 23.1465C7.3299 22.4765 7.8499 21.6695 8.3009 20.9175C9.0389 21.1645 9.7909 21.3695 10.5429 21.5335C10.3109 22.4905 10.0239 23.2835 9.8319 23.7345C8.9569 25.7035 11.7459 26.8245 12.5799 24.8005C12.9219 23.9535 13.1959 22.9005 13.3599 21.9985C14.2759 22.1075 15.2049 22.1485 16.1209 22.1485C16.1759 22.1485 16.2169 22.1485 16.2719 22.1485C16.3399 23.0915 16.2989 23.9125 16.2719 24.3765C16.1349 26.5375 19.1699 26.6055 19.2109 24.4175C19.2389 23.6385 19.1839 22.7225 19.1019 21.9165C20.0589 21.7655 20.9889 21.5195 21.8639 21.2185C22.3009 22.2855 22.4509 23.1325 22.5339 23.6255C22.9159 25.7445 25.8829 24.8965 25.4179 22.9415C25.1449 21.8335 24.8299 20.8225 24.4609 20.0015C25.2819 19.4965 26.0059 18.9085 26.6349 18.2385Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.426040944701942 26.98193607993848"
          className={className}
        >
          <path
            d="              M3.6925 12.7827C6.4945 12.7827 15.8325 6.3577 19.6335 6.3577C20.9875 6.3577 22.1085 6.8907 23.3665 8.0257L27.0985 11.4297C28.8215 13.0017 31.4325 11.1287 30.0245 8.9137C29.3955 7.9297 28.6165 6.6577 26.3875 4.1837C23.7765 1.3127 21.6435 -0.0003 18.5395 -0.0003C14.8345 -0.0003 8.2855 2.4887 1.7505 5.7697C-1.4485 7.3687 0.0555 12.7827 3.6925 12.7827ZM27.3035 18.9897C29.2445 16.8987 26.2235 14.0137 24.1315 16.0917C22.5045 17.7187 19.6885 18.6897 16.5715 18.6897C13.0025 18.6897 9.6395 17.8417 6.3585 16.0647C3.7335 14.6427 1.8055 18.5257 4.4575 19.9477C4.7445 20.0977 5.0455 20.2477 5.3465 20.3987C5.0865 20.7677 4.7995 21.0957 4.4715 21.4507C2.7075 23.2827 5.3875 25.6897 7.1105 23.8027C7.6845 23.1877 8.1905 22.4767 8.6415 21.7387C9.2565 21.9297 9.8715 22.1077 10.5005 22.2577C10.2685 23.1327 9.9945 23.8437 9.8035 24.2817C8.7645 26.6057 12.1145 27.9587 13.0985 25.5667C13.4405 24.7457 13.6995 23.7617 13.8775 22.8457C14.7665 22.9417 15.6415 22.9957 16.5305 22.9957C16.5845 23.8437 16.5435 24.5687 16.5025 25.0197C16.3385 27.5757 19.9895 27.6717 20.0435 25.0877C20.0715 24.3227 20.0165 23.4887 19.9345 22.6957C20.8235 22.5317 21.6705 22.2987 22.4915 22.0117C22.9145 23.0237 23.0375 23.7617 23.1335 24.2407C23.5715 26.7557 27.1255 25.7847 26.5785 23.4477C26.3055 22.2987 25.9775 21.2867 25.5805 20.4527C26.2235 20.0157 26.7975 19.5237 27.3035 18.9897Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.494326836383244 22.914094540954075"
          className={className}
        >
          <path
            d="              M2.6818 10.5138C5.1568 10.5138 13.7428 4.3478 18.0348 4.3478C19.5528 4.3478 20.8788 4.9768 22.3148 6.2888L25.7328 9.4468C26.6078 10.2538 27.9198 9.2968 27.3598 8.3538C26.7308 7.3688 25.6368 5.8108 23.8868 3.8828C21.6038 1.3538 19.7028 -0.0002 16.7908 -0.0002C12.9088 -0.0002 6.9888 2.1878 1.2048 5.2498C-1.1052 6.4668 0.1938 10.5138 2.6818 10.5138ZM24.6248 16.0368C25.4728 15.1348 24.2148 13.8498 23.2308 14.8198C21.3708 16.6658 18.2538 17.8148 14.7948 17.8148C11.0488 17.8148 7.4938 16.9938 4.0758 15.1208C2.8868 14.4788 2.0258 16.1468 3.2148 16.7888C3.8708 17.1308 4.5408 17.4448 5.2248 17.7328C4.8688 18.3198 4.3358 19.0998 3.9808 19.4548C3.2148 20.2618 4.3228 21.2328 5.0878 20.3988C5.7028 19.7148 6.2368 18.7988 6.5648 18.2518C7.7538 18.6758 8.9568 18.9898 10.1738 19.2228C9.9278 20.2618 9.5858 21.2458 9.3948 21.7108C8.9568 22.7088 10.3378 23.2558 10.7618 22.2028C11.1178 21.3148 11.3908 20.1388 11.5278 19.4418C12.6078 19.5918 13.7008 19.6598 14.7948 19.6598C15.1228 19.6598 15.4508 19.6468 15.7658 19.6328C15.8478 20.6448 15.7928 21.6148 15.7658 22.0938C15.6978 23.1738 17.1878 23.2008 17.2148 22.0938C17.2428 21.2458 17.1878 20.2208 17.1188 19.5098C18.5548 19.3188 19.8948 18.9488 21.0978 18.4298C21.5218 19.4688 21.6998 20.4808 21.8228 20.9728C22.0408 22.0668 23.4628 21.5738 23.2168 20.6038C22.9708 19.6058 22.6568 18.5668 22.3278 17.8148C23.2028 17.3088 23.9688 16.7068 24.6248 16.0368Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.78482072844508 24.865806013995876"
          className={className}
        >
          <path
            d="              M3.0912 11.5525C5.7302 11.5525 14.5752 5.2495 18.7182 5.2495C20.1672 5.2495 21.4392 5.8375 22.7922 7.0685L26.2922 10.2815C27.5642 11.4565 29.4092 10.0625 28.5752 8.6545C27.9742 7.6695 27.0722 6.3165 25.0072 4.0335C22.7242 1.4905 20.7002 -0.0005 17.5702 -0.0005C13.5912 -0.0005 7.3292 2.3925 1.3962 5.4965C-1.2288 6.8635 0.1382 11.5525 3.0912 11.5525ZM25.8142 17.3355C27.1262 15.9275 25.1582 13.9725 23.6812 15.4355C21.9172 17.1855 18.8962 18.2655 15.5742 18.2655C11.8962 18.2655 8.3962 17.4045 5.0332 15.5725C3.2282 14.6015 1.9022 17.1855 3.7472 18.1695C4.4042 18.5255 5.0742 18.8395 5.7572 19.1265C5.4022 19.7555 4.9232 20.4665 4.5402 20.8635C3.3922 22.0665 5.1012 23.5705 6.2362 22.3265C6.8922 21.6015 7.4662 20.6175 7.8632 19.9195C8.7652 20.2065 9.6812 20.4535 10.6112 20.6305C10.3652 21.6695 10.0502 22.6135 9.8592 23.0645C9.1752 24.5955 11.3082 25.4295 11.9502 23.8575C12.3062 22.9685 12.5792 21.8065 12.7302 20.9725C13.6732 21.0815 14.6302 21.1365 15.5742 21.1365C15.7102 21.1365 15.8332 21.1365 15.9702 21.1225C16.0522 22.1485 15.9972 23.1055 15.9702 23.5975C15.8742 25.2655 18.1712 25.3065 18.2122 23.6115C18.2262 22.7775 18.1712 21.7655 18.0892 20.9585C19.1562 20.8225 20.1672 20.5765 21.1112 20.2475C21.5752 21.3695 21.7262 22.3675 21.8222 22.8595C22.1222 24.4995 24.3512 23.8025 23.9952 22.3125C23.7492 21.2595 23.4352 20.2065 23.0932 19.4005C24.1462 18.8265 25.0622 18.1425 25.8142 17.3355Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.2820932039462 24.204401971214686"
          className={className}
        >
          <path
            d="              M2.9002 11.1697C5.4842 11.1697 14.1932 4.9077 18.4312 4.9077C19.9212 4.9077 21.2342 5.5097 22.6152 6.7677L26.0462 9.9257C27.1812 10.9647 28.7942 9.7347 28.1242 8.5727C27.5232 7.5877 26.6072 6.2207 24.5832 3.9787C22.3962 1.5447 20.4002 -0.0003 17.2692 -0.0003C13.2082 -0.0003 7.0292 2.3517 1.2862 5.4007C-1.1608 6.6987 0.1652 11.1697 2.9002 11.1697ZM25.3632 16.8167C26.4702 15.6267 24.8292 13.9587 23.5442 15.2307C21.7402 17.0217 18.6632 18.1287 15.2732 18.1287C11.5542 18.1287 8.0132 17.2677 4.6222 15.4217C3.0772 14.5737 1.9292 16.7757 3.5292 17.6227C4.3082 18.0327 5.0872 18.4027 5.8802 18.7167C5.5382 19.3457 4.9502 20.2887 4.5682 20.6857C3.6112 21.6837 5.0052 22.9137 5.9622 21.8747C6.6732 21.0957 7.2752 19.9607 7.6032 19.3457C8.6012 19.6737 9.6262 19.9337 10.6522 20.1247C10.3922 21.1777 10.0772 22.2307 9.8722 22.6957C9.3122 23.9807 11.0482 24.6507 11.5952 23.3377C11.9642 22.4217 12.2382 21.1507 12.3742 20.3847C13.3312 20.5077 14.3022 20.5627 15.2732 20.5627C15.4502 20.5627 15.6282 20.5487 15.8062 20.5487C15.8882 21.6017 15.8332 22.6677 15.8062 23.1467C15.7382 24.5407 17.6112 24.5687 17.6382 23.1597C17.6652 22.2847 17.5972 21.2047 17.5292 20.4257C18.6502 20.2757 19.7022 20.0427 20.7002 19.7007C21.1522 20.8497 21.3162 21.9297 21.4252 22.4217C21.6712 23.8027 23.5032 23.1877 23.2022 21.9707C22.9562 20.9177 22.6562 19.8517 22.3142 19.0317C23.5032 18.4437 24.5292 17.7047 25.3632 16.8167Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.17216549779852 25.368331223813584"
          className={className}
        >
          <path
            d="              M3.2285 11.8537C5.9085 11.8537 14.8765 5.5097 18.9375 5.5097C20.3725 5.5097 21.6035 6.0837 22.9295 7.3007L26.4845 10.5547C27.8655 11.8257 29.8885 10.3227 28.9175 8.7227C28.3025 7.7387 27.4415 6.4117 25.3355 4.0747C22.9705 1.4627 20.9195 -0.0003 17.8025 -0.0003C13.8925 -0.0003 7.5485 2.4197 1.4785 5.5647C-1.2835 6.9867 0.1245 11.8537 3.2285 11.8537ZM26.1695 17.7327C27.6325 16.1597 25.4045 13.9867 23.7905 15.5997C22.0685 17.3227 19.0875 18.3617 15.8065 18.3617C12.1565 18.3617 8.6975 17.5137 5.3475 15.6957C3.3515 14.6157 1.8745 17.4997 3.9115 18.5937C4.4865 18.9087 5.0745 19.1817 5.6615 19.4417C5.3205 20.0297 4.9095 20.6177 4.5275 20.9997C3.2285 22.3537 5.1695 24.0767 6.4415 22.6817C7.0835 21.9847 7.6305 21.0957 8.0545 20.3577C8.8885 20.6177 9.7365 20.8497 10.5835 21.0277C10.3375 22.0257 10.0365 22.9137 9.8455 23.3657C9.0795 25.0747 11.4995 26.0317 12.2245 24.2677C12.5665 23.4067 12.8395 22.2847 13.0035 21.4237C13.9335 21.5197 14.8765 21.5747 15.8065 21.5747C15.9025 21.5747 15.9975 21.5747 16.1075 21.5747C16.1755 22.5587 16.1345 23.4607 16.1075 23.9397C15.9845 25.8127 18.5955 25.8677 18.6365 23.9667C18.6635 23.1467 18.6095 22.1897 18.5275 21.3827C19.5385 21.2327 20.5235 20.9867 21.4395 20.6717C21.8905 21.7797 22.0405 22.7087 22.1365 23.1877C22.4645 25.0337 25.0075 24.2817 24.6115 22.5857C24.3515 21.5057 24.0365 20.4807 23.6815 19.6597C24.6385 19.1267 25.4725 18.4707 26.1695 17.7327Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.45383131347912 21.20849609375"
          className={className}
        >
          <path
            d="              M2.4035 9.6248C4.7135 9.6248 13.1495 3.6098 17.5105 3.6098C19.0555 3.6098 20.4085 4.2788 21.8855 5.6328L25.2895 8.7908C25.8505 9.3108 26.7525 8.6948 26.3565 8.0798C25.6585 7.0688 24.3325 5.2778 22.9515 3.7328C20.5595 1.0938 18.7815 -0.0002 16.1435 -0.0002C12.5065 -0.0002 6.9145 1.9548 1.0905 5.0448C-1.0285 6.1528 0.2295 9.6248 2.4035 9.6248ZM23.6355 14.9848C24.1275 14.4648 23.3895 13.6988 22.8155 14.2738C20.8875 16.2008 17.7155 17.4038 14.1605 17.4038C10.3875 17.4038 6.8055 16.6248 3.3605 14.7378C2.6355 14.3418 2.1435 15.3258 2.7995 15.6678C3.3055 15.9418 3.8245 16.1878 4.3445 16.4198C3.9755 16.9398 3.5375 17.5278 3.2095 17.8418C2.6905 18.3748 3.4145 19.0178 3.9205 18.4568C4.4125 17.8968 4.8635 17.2538 5.1925 16.7758C6.6135 17.3358 8.0765 17.7598 9.5535 18.0328C9.2935 19.0588 8.9515 19.9198 8.7605 20.3988C8.4875 21.0408 9.3755 21.4098 9.6625 20.7128C10.0045 19.8378 10.2915 18.8128 10.4285 18.1838C11.6585 18.3748 12.9035 18.4708 14.1605 18.4708C14.6945 18.4708 15.1995 18.4438 15.7055 18.4028C15.7745 19.3728 15.7335 20.2208 15.7055 20.6988C15.6515 21.3688 16.6215 21.3968 16.6355 20.6718C16.6625 19.8518 16.6355 18.9488 16.5675 18.3068C18.4535 18.0328 20.1495 17.4448 21.5705 16.5978C21.9675 17.5408 22.1865 18.5388 22.3365 19.0588C22.5145 19.7558 23.4165 19.4548 23.2385 18.7848C22.9655 17.8278 22.6235 16.7888 22.3095 16.1058C22.7875 15.7638 23.2385 15.3948 23.6355 14.9848Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.92527757175288 20.323313422678265"
          className={className}
        >
          <path
            d="              M2.2559 9.1733C4.4849 9.1733 12.8519 3.2263 17.2409 3.2263C18.8129 3.2263 20.1799 3.9103 21.6839 5.2913L25.0739 8.4493C25.4709 8.8183 26.1679 8.3813 25.8399 7.9293C25.1289 6.9043 23.6799 5.0043 22.4769 3.6503C20.0299 0.9433 18.3069 0.0003 15.8189 0.0003C12.3049 0.0003 6.8909 1.8323 1.0259 4.9223C-0.9841 5.9883 0.2459 9.1733 2.2559 9.1733ZM9.2419 17.4183C8.9829 18.4433 8.6269 19.2363 8.4359 19.7153C8.2579 20.1663 8.9009 20.4533 9.1059 19.9333C9.4339 19.0863 9.7209 18.1563 9.8709 17.5273C11.1839 17.7463 12.5099 17.8553 13.8499 17.8553C14.4789 17.8553 15.0799 17.8143 15.6679 17.7463C15.7499 18.7163 15.7089 19.4963 15.6679 19.9743C15.6409 20.4393 16.3379 20.4533 16.3519 19.9333C16.3789 19.1273 16.3519 18.3063 16.2969 17.6773C18.4159 17.3493 20.2889 16.6113 21.7799 15.5723C22.1759 16.4883 22.4489 17.5133 22.6139 18.0603C22.7639 18.5663 23.4069 18.3473 23.2419 17.8413C22.9549 16.8843 22.5859 15.8043 22.2849 15.1893C22.5859 14.9573 22.8729 14.6973 23.1329 14.4373C23.4609 14.1233 22.9689 13.6173 22.5999 13.9863C20.6449 15.9413 17.4459 17.1853 13.8499 17.1853C10.0489 17.1853 6.4529 16.4333 2.9939 14.5333C2.5019 14.2593 2.2009 14.9023 2.5839 15.0933C3.0219 15.3263 3.4589 15.5313 3.8969 15.7363C3.5279 16.2283 3.1309 16.7073 2.8169 17.0073C2.4199 17.4043 2.9529 17.8823 3.3229 17.4453C3.7739 16.9533 4.1839 16.4333 4.5119 15.9963C6.1119 16.6663 7.7659 17.1443 9.4339 17.4593Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
