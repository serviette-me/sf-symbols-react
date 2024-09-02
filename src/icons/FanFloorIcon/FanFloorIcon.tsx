import { IconProps } from "../../types"

export default function FanFloorIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.580078125 35.423828125"
          className={className}
        >
          <path
            d="              M6.0427 35.4242H19.5237C20.5487 35.4242 21.0817 34.5492 21.0817 33.5232C21.0817 32.0332 19.7557 31.0492 18.1697 31.0492H14.9707V25.3882C20.9867 24.3492 25.5797 19.0992 25.5797 12.7972C25.5797 5.7282 19.8377 0.0002 12.7837 0.0002C5.7427 0.0002 -0.0003 5.7282 -0.0003 12.7972C-0.0003 19.0992 4.5937 24.3492 10.5957 25.3882V31.0492H7.4097C5.8247 31.0492 4.4977 32.0332 4.4977 33.5232C4.4977 34.5492 5.0177 35.4242 6.0427 35.4242ZM12.7837 21.6972C7.8617 21.6972 3.8557 17.7192 3.8557 12.7972C3.8557 7.8612 7.8617 3.8692 12.7837 3.8692C17.7187 3.8692 21.7107 7.8612 21.7107 12.7972C21.7107 17.7192 17.7187 21.6972 12.7837 21.6972ZM9.4477 19.4412C11.1157 19.4412 12.0857 18.1422 12.5647 15.8322C12.8377 15.8462 12.9887 15.8462 13.2347 15.8052V17.8692C13.2347 19.1952 13.9587 19.9472 15.2577 19.9472C17.4047 19.9472 19.4277 18.2112 19.4277 16.1332C19.4277 14.4652 18.1697 13.5082 15.8457 13.0292C15.8597 12.7692 15.8597 12.5922 15.8187 12.3732H17.8687C19.1817 12.3732 19.9337 11.6352 19.9337 10.3492C19.9337 8.1892 18.1977 6.1522 16.1327 6.1522C14.4647 6.1522 13.4937 7.4372 13.0157 9.7342C12.7427 9.7212 12.5777 9.7212 12.3457 9.7342V7.7242C12.3457 6.4122 11.6207 5.6332 10.3227 5.6332C8.1617 5.6332 6.1527 7.3962 6.1527 9.4472C6.1527 11.1292 7.4237 12.0722 9.7477 12.5642C9.7347 12.8102 9.7347 12.9742 9.7617 13.2212H7.7107C6.3987 13.2212 5.6327 13.9452 5.6327 15.2302C5.6327 17.4042 7.3827 19.4412 9.4477 19.4412ZM12.7837 14.2732C11.9497 14.2732 11.2927 13.6032 11.2927 12.7972C11.2927 11.9632 11.9497 11.3062 12.7837 11.3062C13.6177 11.3062 14.2737 11.9902 14.2737 12.7972C14.2737 13.6172 13.6177 14.2732 12.7837 14.2732Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.70703125 33.619140625"
          className={className}
        >
          <path
            d="              M5.4007 33.6188H18.2927C19.0587 33.6188 19.4827 33.0038 19.4827 32.2248C19.4827 30.9668 18.4027 30.1188 16.9667 30.1188H13.5077V23.5838C19.2637 22.7778 23.7067 17.8278 23.7067 11.8538C23.7067 5.3048 18.3747 -0.0002 11.8537 -0.0002C5.3187 -0.0002 -0.0003 5.3048 -0.0003 11.8538C-0.0003 17.8278 4.4437 22.7908 10.2127 23.5838V30.1188H6.7267C5.2907 30.1188 4.2107 30.9668 4.2107 32.2248C4.2107 33.0038 4.6347 33.6188 5.4007 33.6188ZM11.8537 20.7678C6.9317 20.7678 2.9397 16.7758 2.9397 11.8398C2.9397 6.9178 6.9317 2.9258 11.8537 2.9258C16.7887 2.9258 20.7677 6.9178 20.7677 11.8398C20.7677 16.7758 16.7887 20.7678 11.8537 20.7678ZM8.5037 18.5388C10.1307 18.5388 11.0337 17.2268 11.7167 14.8608C11.9627 14.8748 12.1267 14.8748 12.3457 14.8338V17.0898C12.3457 18.3478 13.0157 19.0588 14.2457 19.0588C16.4197 19.0588 18.5257 17.1988 18.5257 15.2438C18.5257 13.6168 17.2407 12.7288 14.8887 12.0448C14.9027 11.8128 14.9027 11.6348 14.8747 11.4028H17.0487C18.3207 11.4028 19.0177 10.7188 19.0177 9.4878C19.0177 7.3278 17.1717 5.2228 15.2167 5.2228C13.6177 5.2228 12.7017 6.4938 12.0317 8.8188C11.7987 8.8048 11.5937 8.8048 11.3747 8.8458V6.6858C11.3747 5.4278 10.7047 4.7028 9.4607 4.7028C7.3007 4.7028 5.1957 6.5628 5.1957 8.5178C5.1957 10.1448 6.4937 11.0198 8.8457 11.7168C8.8317 11.9358 8.8457 12.1408 8.8727 12.3598H6.6717C5.4007 12.3598 4.6897 13.0288 4.6897 14.2598C4.6897 16.4338 6.5347 18.5388 8.5037 18.5388ZM11.8537 13.3848C11.0197 13.3848 10.3497 12.7008 10.3497 11.8808C10.3497 11.0468 11.0197 10.3768 11.8537 10.3768C12.7017 10.3768 13.3577 11.0608 13.3577 11.8808C13.3577 12.7148 12.7017 13.3848 11.8537 13.3848Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.69140625 34.576171875"
          className={className}
        >
          <path
            d="              M5.7427 34.5763H18.9497C19.8517 34.5763 20.3297 33.8243 20.3297 32.9223C20.3297 31.5273 19.1137 30.6113 17.5957 30.6113H14.2867V24.5413C20.1657 23.6113 24.6917 18.4983 24.6917 12.3453C24.6917 5.5373 19.1407 0.0003 12.3457 0.0003C5.5367 0.0003 -0.0003 5.5373 -0.0003 12.3453C-0.0003 18.4983 4.5257 23.6113 10.4177 24.5413V30.6113H7.0817C5.5777 30.6113 4.3617 31.5273 4.3617 32.9223C4.3617 33.8243 4.8397 34.5763 5.7427 34.5763ZM12.3457 21.2593C7.4237 21.2593 3.4317 17.2813 3.4317 12.3453C3.4317 7.4233 7.4237 3.4183 12.3457 3.4183C17.2817 3.4183 21.2737 7.4233 21.2737 12.3453C21.2737 17.2813 17.2817 21.2593 12.3457 21.2593ZM8.9957 19.0173C10.6507 19.0173 11.5797 17.7183 12.1677 15.3673C12.4277 15.3813 12.5777 15.3813 12.8107 15.3533V17.5003C12.8107 18.7983 13.5077 19.5233 14.7797 19.5233C16.9397 19.5233 19.0037 17.7323 19.0037 15.7093C19.0037 14.0683 17.7327 13.1383 15.3947 12.5643C15.4087 12.3183 15.4087 12.1403 15.3677 11.9083H17.4867C18.7717 11.9083 19.5097 11.1973 19.5097 9.9393C19.5097 7.7933 17.7187 5.7143 15.6957 5.7143C14.0547 5.7143 13.1247 7.0003 12.5507 9.2973C12.2907 9.2833 12.1137 9.2833 11.8807 9.3243V7.2323C11.8807 5.9473 11.1837 5.1953 9.9257 5.1953C7.7517 5.1953 5.7017 7.0003 5.7017 9.0093C5.7017 10.6643 6.9867 11.5803 9.3247 12.1683C9.3107 12.4003 9.3107 12.5783 9.3377 12.8243H7.2187C5.9337 12.8243 5.1957 13.5213 5.1957 14.7793C5.1957 16.9533 6.9867 19.0173 8.9957 19.0173ZM12.3457 13.8493C11.5117 13.8493 10.8557 13.1793 10.8557 12.3733C10.8557 11.5253 11.5117 10.8693 12.3457 10.8693C13.1797 10.8693 13.8497 11.5523 13.8497 12.3733C13.8497 13.1933 13.1797 13.8493 12.3457 13.8493Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.546875 30.5703125"
          className={className}
        >
          <path
            d="              M4.9627 30.5703H16.5707C16.9807 30.5703 17.2537 30.2973 17.2537 29.8733C17.2537 29.0663 16.6117 28.4783 15.5587 28.4783H11.6347V21.5063C17.1857 21.0683 21.5467 16.4333 21.5467 10.7733C21.5467 4.8403 16.7067 0.0003 10.7737 0.0003C4.8267 0.0003 -0.0003 4.8263 -0.0003 10.7733C-0.0003 16.4473 4.3747 21.0953 9.9397 21.5063V28.4783H5.9887C4.9217 28.4783 4.2927 29.0663 4.2927 29.8733C4.2927 30.2973 4.5527 30.5703 4.9627 30.5703ZM10.7737 19.9883C5.6877 19.9883 1.5727 15.8733 1.5727 10.7733C1.5727 5.6743 5.6877 1.5583 10.7737 1.5583C15.8727 1.5583 19.9887 5.6743 19.9887 10.7733C19.9887 15.8733 15.8727 19.9883 10.7737 19.9883ZM7.3007 17.6773C8.9417 17.6773 9.8707 16.3383 10.6507 13.7133C10.9237 13.7133 11.1017 13.7263 11.3067 13.6723V16.4333C11.3067 17.6773 11.9217 18.3343 13.1247 18.3343C15.4087 18.3343 17.6507 16.3243 17.6507 14.3013C17.6507 12.6463 16.3247 11.7442 13.7407 10.9782C13.7407 10.7873 13.7407 10.4863 13.6997 10.2673H16.3927C17.6367 10.2673 18.2797 9.6523 18.2797 8.4492C18.2797 6.1793 16.2967 3.9372 14.2597 3.9372C12.6467 3.9372 11.7167 5.2503 10.9517 7.8203C10.7867 7.8062 10.4727 7.8062 10.2537 7.8612V5.1812C10.2537 3.9513 9.6387 3.2952 8.4357 3.2952C6.1657 3.2952 3.9097 5.3043 3.9097 7.3283C3.9097 8.9683 5.2497 9.8713 7.8477 10.6503C7.8207 10.8553 7.8477 11.1563 7.8887 11.3473H5.1817C3.9377 11.3473 3.2817 11.9633 3.2817 13.1663C3.2817 15.4493 5.2777 17.6773 7.3007 17.6773ZM10.7737 12.4823C9.8577 12.4823 9.1187 11.7303 9.1187 10.8143C9.1187 9.8983 9.8577 9.1462 10.7737 9.1462C11.7027 9.1462 12.4417 9.8983 12.4417 10.8143C12.4417 11.7303 11.7027 12.4823 10.7737 12.4823Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.517578125 32.470703125"
          className={className}
        >
          <path
            d="              M4.9907 32.4706H17.4997C18.1017 32.4706 18.4707 32.0196 18.4707 31.4046C18.4707 30.2836 17.5407 29.5176 16.2017 29.5176H12.5647V22.4216C18.1567 21.7656 22.5177 17.0076 22.5177 11.2516C22.5177 5.0446 17.4457 -0.0004 11.2517 -0.0004C5.0447 -0.0004 -0.0003 5.0446 -0.0003 11.2516C-0.0003 17.0216 4.3617 21.7926 9.9667 22.4216V29.5176H6.3027C4.9497 29.5176 4.0337 30.2836 4.0337 31.4046C4.0337 32.0196 4.3887 32.4706 4.9907 32.4706ZM11.2657 20.1656C6.3297 20.1656 2.3517 16.1736 2.3517 11.2386C2.3517 6.3166 6.3297 2.3376 11.2657 2.3376C16.1877 2.3376 20.1657 6.3166 20.1657 11.2386C20.1657 16.1736 16.1877 20.1656 11.2657 20.1656ZM7.9027 17.9646C9.4887 17.9646 10.3497 16.6386 11.1697 14.2456C11.4027 14.2456 11.5797 14.2596 11.7717 14.2046V16.5836C11.7717 17.8146 12.4007 18.4846 13.6177 18.4846C15.7907 18.4846 17.9377 16.5706 17.9377 14.6696C17.9377 13.0836 16.6387 12.2366 14.2737 11.4296C14.2867 11.2106 14.2867 11.0056 14.2597 10.7736H16.5297C17.7597 10.7736 18.4297 10.1446 18.4297 8.9416C18.4297 6.7816 16.5297 4.6206 14.6287 4.6206C13.0707 4.6206 12.1957 5.9066 11.4027 8.2306C11.1977 8.2166 10.9647 8.2166 10.7457 8.2716V6.0156C10.7457 4.7986 10.1177 4.1156 8.9137 4.1156C6.7407 4.1156 4.5797 6.0426 4.5797 7.9296C4.5797 9.5156 5.8927 10.3636 8.2577 11.1696C8.2577 11.3886 8.2717 11.6206 8.2987 11.8126H6.0017C4.7717 11.8126 4.0877 12.4416 4.0877 13.6446C4.0877 15.8186 6.0017 17.9646 7.9027 17.9646ZM11.2657 12.8106C10.4177 12.8106 9.7477 12.1406 9.7477 11.3066C9.7477 10.4586 10.4177 9.7886 11.2657 9.7886C12.0997 9.7886 12.7697 10.4586 12.7697 11.3066C12.7697 12.1406 12.0997 12.8106 11.2657 12.8106Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.833984375 31.841796875"
          className={className}
        >
          <path
            d="              M4.7717 31.8422H17.0627C17.5687 31.8422 17.8967 31.4732 17.8967 30.9392C17.8967 29.9142 17.0627 29.1892 15.7637 29.1892H12.0317V21.7792C17.5407 21.2192 21.8337 16.5702 21.8337 10.9242C21.8337 4.9082 16.9257 0.0002 10.9097 0.0002C4.8947 0.0002 -0.0003 4.9082 -0.0003 10.9242C-0.0003 16.5842 4.3067 21.2322 9.8297 21.7792V29.1892H6.0567C4.7577 29.1892 3.9237 29.9142 3.9237 30.9392C3.9237 31.4732 4.2517 31.8422 4.7717 31.8422ZM10.9237 19.8382C5.9887 19.8382 2.0237 15.8462 2.0237 10.9102C2.0237 5.9882 5.9887 2.0102 10.9237 2.0102C15.8597 2.0102 19.8247 5.9882 19.8247 10.9102C19.8247 15.8462 15.8597 19.8382 10.9237 19.8382ZM7.5607 17.6502C9.1327 17.6502 9.9667 16.3242 10.8687 13.9042C11.0877 13.9182 11.2657 13.9182 11.4567 13.8632V16.3102C11.4567 17.5142 12.0727 18.1702 13.2477 18.1702C15.4357 18.1702 17.6097 16.2152 17.6097 14.3692C17.6097 12.7832 16.2967 11.9632 13.9317 11.0882C13.9457 10.8692 13.9317 10.6782 13.9177 10.4452H16.2427C17.4457 10.4452 18.1017 9.8302 18.1017 8.6402C18.1017 6.4802 16.1597 4.3062 14.3007 4.3062C12.7697 4.3062 11.9217 5.5782 11.0607 7.9022C10.8557 7.9022 10.6097 7.9022 10.4047 7.9572V5.6602C10.4047 4.4572 9.7887 3.7872 8.6137 3.7872C6.4257 3.7872 4.2387 5.7562 4.2387 7.6012C4.2387 9.1742 5.5507 9.9942 7.9297 10.8832C7.9297 11.0882 7.9437 11.3342 7.9847 11.5122H5.6187C4.4027 11.5122 3.7457 12.1272 3.7457 13.3032C3.7457 15.4902 5.7017 17.6502 7.5607 17.6502ZM10.9237 12.4962C10.0767 12.4962 9.4067 11.8262 9.4067 10.9922C9.4067 10.1312 10.0767 9.4612 10.9237 9.4612C11.7717 9.4612 12.4417 10.1312 12.4417 10.9922C12.4417 11.8262 11.7717 12.4962 10.9237 12.4962Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.0234375 32.962890625"
          className={className}
        >
          <path
            d="              M5.1677 32.9627H17.8417C18.5117 32.9627 18.9087 32.4437 18.9087 31.7597C18.9087 30.5707 17.9237 29.7777 16.5297 29.7777H12.9607V22.9137C18.6347 22.2027 23.0237 17.3637 23.0237 11.4977C23.0237 5.1547 17.8557 -0.0003 11.5117 -0.0003C5.1677 -0.0003 -0.0003 5.1547 -0.0003 11.4977C-0.0003 17.3637 4.4027 22.2167 10.0767 22.9277V29.7777H6.4937C5.0997 29.7777 4.1017 30.5707 4.1017 31.7597C4.1017 32.4437 4.4977 32.9627 5.1677 32.9627ZM11.5117 20.4117C6.5897 20.4117 2.6117 16.4337 2.6117 11.4977C2.6117 6.5757 6.5897 2.5837 11.5117 2.5837C16.4477 2.5837 20.4257 6.5757 20.4257 11.4977C20.4257 16.4337 16.4477 20.4117 11.5117 20.4117ZM8.1617 18.2107C9.7617 18.2107 10.6367 16.8987 11.4027 14.5057C11.6487 14.5197 11.8127 14.5197 12.0177 14.4787V16.8027C12.0177 18.0467 12.6737 18.7307 13.8907 18.7307C16.0647 18.7307 18.1837 16.8437 18.1837 14.9157C18.1837 13.3167 16.8987 12.4417 14.5467 11.6897C14.5467 11.4707 14.5467 11.2797 14.5197 11.0467H16.7477C18.0057 11.0467 18.6897 10.3907 18.6897 9.1737C18.6897 7.0137 16.8027 4.8807 14.8747 4.8807C13.3027 4.8807 12.4137 6.1657 11.6757 8.4767C11.4567 8.4767 11.2387 8.4767 11.0197 8.5177V6.3027C11.0197 5.0727 10.3767 4.3617 9.1467 4.3617C6.9867 4.3617 4.8537 6.2617 4.8537 8.1757C4.8537 9.7887 6.1527 10.6507 8.5177 11.4027C8.5037 11.6207 8.5177 11.8397 8.5447 12.0447H6.2887C5.0447 12.0447 4.3477 12.7007 4.3477 13.9047C4.3477 16.0917 6.2347 18.2107 8.1617 18.2107ZM11.5117 13.0567C10.6777 13.0567 10.0077 12.3867 10.0077 11.5527C10.0077 10.7047 10.6777 10.0347 11.5117 10.0347C12.3597 10.0347 13.0297 10.7187 13.0297 11.5527C13.0297 12.3867 12.3597 13.0567 11.5117 13.0567Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.177734375 28.90234375"
          className={className}
        >
          <path
            d="              M5.2227 28.9023H15.9417C16.2147 28.9023 16.3927 28.7243 16.3927 28.4513C16.3927 27.9453 16.0097 27.5213 15.2717 27.5213H11.1017V21.1503C16.7207 20.8773 21.1777 16.2563 21.1777 10.5823C21.1777 4.7443 16.4197 0.0003 10.5817 0.0003C4.7437 0.0003 -0.0003 4.7303 -0.0003 10.5823C-0.0003 16.2693 4.4707 20.8903 10.0897 21.1503V27.5213H5.8787C5.1547 27.5213 4.7717 27.9453 4.7717 28.4513C4.7717 28.7243 4.9497 28.9023 5.2227 28.9023ZM10.5817 20.1933C5.2777 20.1933 0.9847 15.9003 0.9847 10.5683C0.9847 5.2633 5.2777 0.9573 10.5817 0.9573C15.8867 0.9573 20.1937 5.2633 20.1937 10.5683C20.1937 15.9003 15.8867 20.1933 10.5817 20.1933ZM6.9587 17.7053C8.6957 17.7053 9.7477 16.3383 10.3637 13.4533C10.6917 13.4673 10.8827 13.4803 11.1157 13.3983V16.6113C11.1157 17.8963 11.7437 18.5393 12.9747 18.5393C15.3807 18.5393 17.7187 16.4473 17.7187 14.2053C17.7187 12.4683 16.3517 11.4703 13.4807 10.8283C13.4937 10.6643 13.4807 10.2403 13.4257 10.0493H16.5977C17.8967 10.0493 18.5257 9.4203 18.5257 8.1893C18.5257 5.7833 16.4607 3.4593 14.2047 3.4593C12.4827 3.4593 11.4707 4.8263 10.8277 7.6973C10.6917 7.6833 10.3087 7.6833 10.0627 7.7243V4.5663C10.0627 3.2813 9.4477 2.6383 8.2167 2.6383C5.8107 2.6383 3.4587 4.7173 3.4587 6.9723C3.4587 8.7093 4.8397 9.7203 7.7247 10.3493C7.6837 10.5413 7.7247 10.9373 7.7517 11.1293H4.5937C3.2947 11.1293 2.6527 11.7443 2.6527 12.9743C2.6527 15.3943 4.7307 17.7053 6.9587 17.7053ZM10.5817 12.4413C9.5567 12.4413 8.7367 11.6073 8.7367 10.5953C8.7367 9.5703 9.5567 8.7223 10.5817 8.7223C11.5937 8.7223 12.4417 9.5703 12.4417 10.5953C12.4417 11.6073 11.5937 12.4413 10.5817 12.4413Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.97265625 28.0546875"
          className={className}
        >
          <path
            d="              M5.3457 28.0544H15.6137C15.8187 28.0544 15.9547 27.9184 15.9547 27.7404C15.9547 27.3844 15.6957 27.0434 15.1347 27.0434H10.8277V20.9724C16.4747 20.7814 20.9727 16.1604 20.9727 10.4864C20.9727 4.7034 16.2697 0.0004 10.4867 0.0004C4.6897 0.0004 -0.0003 4.6894 -0.0003 10.4864C-0.0003 16.1734 4.5257 20.7944 10.1587 20.9724V27.0434H5.8247C5.2637 27.0434 5.0177 27.3844 5.0177 27.7404C5.0177 27.9184 5.1407 28.0544 5.3457 28.0544ZM10.4867 20.3024C5.0587 20.3024 0.6697 15.9144 0.6697 10.4724C0.6697 5.0584 5.0587 0.6564 10.4867 0.6564C15.9007 0.6564 20.3027 5.0584 20.3027 10.4724C20.3027 15.9144 15.9007 20.3024 10.4867 20.3024ZM6.7947 17.7324C8.5727 17.7324 9.6797 16.3514 10.2127 13.3164C10.5687 13.3304 10.7737 13.3574 11.0197 13.2614V16.7074C11.0197 18.0194 11.6487 18.6344 12.8927 18.6344C15.3677 18.6344 17.7457 16.5294 17.7457 14.1644C17.7457 12.3734 16.3657 11.3204 13.3437 10.7594C13.3577 10.5954 13.3437 10.1174 13.2887 9.9254H16.7067C18.0197 9.9254 18.6487 9.3104 18.6487 8.0664C18.6487 5.5784 16.5567 3.2264 14.1917 3.2264C12.4007 3.2264 11.3337 4.6074 10.7597 7.6284C10.6367 7.6154 10.2127 7.6154 9.9527 7.6694V4.2384C9.9527 2.9394 9.3517 2.3104 8.1077 2.3104C5.6187 2.3104 3.2267 4.4164 3.2267 6.7814C3.2267 8.5724 4.6207 9.6384 7.6567 10.1854C7.6157 10.3774 7.6567 10.8284 7.6837 11.0194H4.2797C2.9807 11.0194 2.3247 11.6484 2.3247 12.8784C2.3247 15.3674 4.4437 17.7324 6.7947 17.7324ZM10.4867 12.4414C9.4067 12.4414 8.5317 11.5394 8.5317 10.4864C8.5317 9.4064 9.4067 8.5034 10.4867 8.5034C11.5527 8.5034 12.4417 9.4064 12.4417 10.4864C12.4417 11.5394 11.5527 12.4414 10.4867 12.4414Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}