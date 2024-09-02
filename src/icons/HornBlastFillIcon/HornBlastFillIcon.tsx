import { IconProps } from "../../types"

export default function HornBlastFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 53.484375 27.53871184807191"
          className={className}
        >
          <path
            d="              M2.2697 21.7407C3.5277 21.7407 4.5387 20.7287 4.5387 19.4707V19.3747H5.7017C5.6187 19.7167 5.5777 20.0727 5.5777 20.4417C5.5777 23.0667 7.7387 25.2267 10.3637 25.2267H18.1157C20.3297 25.2267 22.2307 23.6817 22.7497 21.6037C24.9647 22.7387 27.1387 24.2837 29.2167 26.1567C32.4027 29.0137 36.5447 27.1817 36.5447 22.9707V4.5687C36.5447 0.3437 32.4027 -1.4743 29.2167 1.3827C24.5547 5.5527 19.5097 8.1637 14.1097 8.1637H4.5387V8.0547C4.5387 6.7967 3.5277 5.7857 2.2697 5.7857C1.0117 5.7857 -0.0003 6.7967 -0.0003 8.0547V19.4707C-0.0003 20.7287 1.0117 21.7407 2.2697 21.7407ZM39.6077 7.8637C40.1267 8.7657 41.3437 9.0937 42.2597 8.5747L50.8187 3.6527C51.7477 3.1057 52.0487 1.9027 51.5297 0.9727C50.9957 0.0567 49.7797 -0.2713 48.8637 0.2617L40.3187 5.1837C39.3887 5.7167 39.0747 6.9197 39.6077 7.8637ZM39.7307 13.7697C39.7307 14.8357 40.6187 15.7107 41.6857 15.7107H51.5427C52.6097 15.7107 53.4847 14.8357 53.4847 13.7697C53.4847 12.7027 52.6097 11.8147 51.5427 11.8147H41.6857C40.6187 11.8147 39.7307 12.7027 39.7307 13.7697ZM39.6077 19.6757C39.0747 20.5917 39.3887 21.7947 40.3187 22.3417L48.8637 27.2637C49.7657 27.8247 50.9827 27.4957 51.5297 26.5667C52.0487 25.6507 51.7477 24.4477 50.8187 23.9007L42.2597 18.9787C41.3577 18.4317 40.1407 18.7457 39.6077 19.6757ZM9.3107 20.4417C9.3107 19.8807 9.7887 19.4027 10.3637 19.4027H18.1157C18.1427 19.4027 18.1837 19.4027 18.2107 19.4027C18.3067 19.4297 18.3887 19.4437 18.4847 19.4707C18.8677 19.6207 19.1547 20.0037 19.1547 20.4417C19.1547 21.0017 18.6757 21.4807 18.1157 21.4807H10.3637C9.7887 21.4807 9.3107 21.0017 9.3107 20.4417Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.40625 26.530352814450964"
          className={className}
        >
          <path
            d="              M1.6817 20.2392C2.6117 20.2392 3.3637 19.4872 3.3637 18.5432V18.2422H5.0037C4.8127 18.7482 4.7027 19.2822 4.7027 19.8562C4.7027 22.2762 6.6857 24.2582 9.1057 24.2582H16.8577C19.2087 24.2582 21.1637 22.3712 21.2597 20.0202C23.8847 21.1682 26.4137 22.9182 28.8477 25.2832C31.4177 27.7582 35.0137 26.3232 35.0137 22.7682V3.7642C35.0137 0.2092 31.4177 -1.2398 28.8477 1.2352C24.1177 5.8152 18.8127 8.2892 13.6717 8.2892H3.3637V7.9612C3.3637 7.0322 2.6117 6.2802 1.6817 6.2802C0.7517 6.2802 -0.0003 7.0322 -0.0003 7.9612V18.5432C-0.0003 19.4872 0.7517 20.2392 1.6817 20.2392ZM38.3227 7.2232C38.7187 7.9342 39.6757 8.1802 40.4007 7.7702L48.9457 2.8482C49.6697 2.4382 49.9157 1.4812 49.4927 0.7562C49.0957 0.0452 48.1387 -0.2008 47.4137 0.2092L38.8687 5.1172C38.1447 5.5412 37.8987 6.4852 38.3227 7.2232ZM38.4997 13.2662C38.4997 14.1002 39.1837 14.7832 40.0177 14.7832H49.8887C50.7227 14.7832 51.4067 14.1002 51.4067 13.2662C51.4067 12.4322 50.7227 11.7352 49.8887 11.7352H40.0177C39.1837 11.7352 38.4997 12.4322 38.4997 13.2662ZM7.6697 19.8562C7.6697 19.0632 8.3267 18.4072 9.1057 18.4072H16.7477C17.0487 18.4892 17.3637 18.5712 17.6777 18.6802C18.0467 18.9402 18.2927 19.3772 18.2927 19.8562C18.2927 20.6212 17.6367 21.2782 16.8577 21.2782H9.1057C8.3267 21.2782 7.6697 20.6212 7.6697 19.8562ZM38.3227 19.3092C37.8987 20.0332 38.1447 20.9772 38.8687 21.4012L47.4277 26.3232C48.1247 26.7462 49.0817 26.5002 49.4927 25.7762C49.9157 25.0512 49.6697 24.1082 48.9457 23.6842L40.3867 18.7622C39.6897 18.3382 38.7327 18.5842 38.3227 19.3092Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52.5 27.05928246662856"
          className={className}
        >
          <path
            d="              M1.9957 21.0213C3.0897 21.0213 3.9787 20.1323 3.9787 19.0253V18.8343H5.3597C5.2367 19.2573 5.1677 19.6953 5.1677 20.1603C5.1677 22.6893 7.2457 24.7673 9.7617 24.7673H17.5137C19.7967 24.7673 21.7247 23.0723 22.0667 20.8713C24.4727 22.0053 26.8107 23.6463 29.0387 25.7383C31.9377 28.4183 35.8207 26.7773 35.8207 22.8673V4.1773C35.8207 0.2813 31.9377 -1.3597 29.0387 1.3063C24.3497 5.6813 19.1817 8.2243 13.9047 8.2243H3.9787V8.0053C3.9787 6.8983 3.0897 6.0093 1.9957 6.0093C0.8887 6.0093 -0.0003 6.8983 -0.0003 8.0053V19.0253C-0.0003 20.1323 0.8887 21.0213 1.9957 21.0213ZM38.9927 7.5543C39.4707 8.3753 40.5647 8.6623 41.3847 8.1833L49.9297 3.2613C50.7637 2.7833 51.0367 1.7033 50.5727 0.8693C50.0937 0.0483 48.9997 -0.2387 48.1797 0.2263L39.6347 5.1483C38.8007 5.6273 38.5277 6.7203 38.9927 7.5543ZM39.1567 13.5293C39.1567 14.4863 39.9357 15.2793 40.8927 15.2793H50.7637C51.7207 15.2793 52.4997 14.4863 52.4997 13.5293C52.4997 12.5723 51.7207 11.7793 50.7637 11.7793H40.8927C39.9357 11.7793 39.1567 12.5723 39.1567 13.5293ZM38.9927 19.5043C38.5277 20.3243 38.8007 21.4043 39.6347 21.8963L48.1797 26.8183C48.9867 27.3103 50.0797 27.0233 50.5727 26.1893C51.0367 25.3693 50.7637 24.2893 49.9297 23.7963L41.3847 18.8753C40.5777 18.3823 39.4847 18.6703 38.9927 19.5043ZM8.5317 20.1603C8.5317 19.4903 9.0917 18.9293 9.7617 18.9293H17.4727C17.7187 18.9843 17.9647 19.0663 18.2247 19.1623C18.5387 19.3943 18.7437 19.7633 18.7437 20.1603C18.7437 20.8163 18.1837 21.3773 17.5137 21.3773H9.7617C9.0917 21.3773 8.5317 20.8163 8.5317 20.1603Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.138671875 24.882474477279455"
          className={className}
        >
          <path
            d="              M0.8477 17.9254C1.3127 17.9254 1.6957 17.5434 1.6957 17.0784V16.4494H3.9097C3.4177 17.0914 3.1307 17.8984 3.1307 18.7594C3.1307 20.8514 4.8267 22.5604 6.9177 22.5604H14.6697C16.7477 22.5604 18.4707 20.8514 18.4707 18.7594C18.4707 18.1994 18.3477 17.6794 18.1287 17.2014C21.8067 18.2534 24.8557 20.5504 28.4647 23.9824C30.0647 25.6504 32.6347 24.9254 32.6347 22.4234V2.4494C32.6347 -0.0526 30.0647 -0.7636 28.4647 0.9044C23.3107 5.9084 18.7167 8.4374 13.0977 8.4374H1.6957V7.7814C1.6957 7.3164 1.3127 6.9334 0.8477 6.9334C0.3827 6.9334 -0.0003 7.3164 -0.0003 7.7814V17.0784C-0.0003 17.5434 0.3827 17.9254 0.8477 17.9254ZM36.3267 6.3184C36.5447 6.7014 37.0777 6.8374 37.4747 6.6194L46.0197 1.6974C46.4157 1.4644 46.5527 0.9314 46.3207 0.5354C46.1017 0.1384 45.5687 0.0154 45.1717 0.2344L36.6137 5.1564C36.2307 5.3754 36.0797 5.9084 36.3267 6.3184ZM36.5997 12.4434C36.5997 12.9084 36.9827 13.2914 37.4337 13.2914H47.3047C47.7557 13.2914 48.1387 12.9084 48.1387 12.4434C48.1387 11.9784 47.7557 11.5954 47.3047 11.5954H37.4337C36.9827 11.5954 36.5997 11.9784 36.5997 12.4434ZM4.8127 18.7594C4.8127 17.6114 5.7697 16.6544 6.9177 16.6544H14.6697C15.8187 16.6544 16.7757 17.6114 16.7757 18.7594C16.7757 19.9084 15.8187 20.8514 14.6697 20.8514H6.9177C5.7697 20.8514 4.8127 19.9084 4.8127 18.7594ZM36.3267 18.5684C36.0797 18.9644 36.2307 19.4984 36.6267 19.7304L45.1857 24.6524C45.5687 24.8844 46.1017 24.7344 46.3207 24.3514C46.5527 23.9414 46.4157 23.4214 46.0197 23.1754L37.4607 18.2534C37.0777 18.0214 36.5447 18.1714 36.3267 18.5684Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.080078125 25.88337058342547"
          className={className}
        >
          <path
            d="              M37.4887 6.8032C37.8297 7.3912 38.6097 7.5962 39.1977 7.2542L47.7557 2.3332C48.3437 2.0042 48.5487 1.2112 48.1937 0.6102C47.8657 0.0362 47.0727 -0.1688 46.4977 0.1592L37.9397 5.0812C37.3517 5.4222 37.1467 6.2022 37.4887 6.8032ZM1.3127 19.2722C2.0367 19.2722 2.6247 18.6842 2.6247 17.9592V17.5222H4.6207C4.3067 18.0962 4.1287 18.7662 4.1287 19.4632C4.1287 21.7602 6.0157 23.6332 8.2987 23.6332H16.0507C18.3337 23.6332 20.2207 21.7602 20.2207 19.4632C20.2207 19.2862 20.2067 19.1082 20.1797 18.9442C23.1187 20.0922 25.9217 22.0202 28.6157 24.7272C30.7757 26.9562 34.0297 25.7522 34.0297 22.6352V3.2492C34.0297 0.1182 30.7757 -1.0848 28.6157 1.1432C23.8437 5.9832 18.3617 8.3622 13.3847 8.3622H2.6247V7.8972C2.6247 7.1862 2.0367 6.5982 1.3127 6.5982C0.5877 6.5982 -0.0003 7.1862 -0.0003 7.8972V17.9592C-0.0003 18.6842 0.5877 19.2722 1.3127 19.2722ZM37.7067 12.9422C37.7067 13.6252 38.2817 14.2002 38.9647 14.2002H48.8227C49.5057 14.2002 50.0797 13.6252 50.0797 12.9422C50.0797 12.2582 49.5057 11.6842 48.8227 11.6842H38.9647C38.2817 11.6842 37.7067 12.2582 37.7067 12.9422ZM6.6177 19.4632C6.6177 18.5472 7.3827 17.7682 8.2987 17.7682H16.0507C16.9667 17.7682 17.7327 18.5472 17.7327 19.4632C17.7327 20.3792 16.9667 21.1452 16.0507 21.1452H8.2987C7.3827 21.1452 6.6177 20.3792 6.6177 19.4632ZM37.4887 19.0812C37.1467 19.6682 37.3517 20.4482 37.9397 20.7902L46.4977 25.7112C47.0727 26.0672 47.8657 25.8482 48.1937 25.2602C48.5487 24.6722 48.3437 23.8932 47.7427 23.5382L39.1977 18.6292C38.6227 18.2742 37.8297 18.4932 37.4887 19.0812Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.328125 25.519010789491922"
          className={className}
        >
          <path
            d="              M37.0367 6.5766C37.3247 7.0826 38.0077 7.2606 38.5277 6.9596L47.0727 2.0376C47.5917 1.7506 47.7837 1.0666 47.4687 0.5336C47.1817 0.0276 46.4847 -0.1494 45.9787 0.1376L37.4197 5.0596C36.9137 5.3466 36.7227 6.0436 37.0367 6.5766ZM1.0937 18.7316C1.7087 18.7316 2.2017 18.2256 2.2017 17.6236V17.1176H4.4297C4.0467 17.7326 3.8147 18.4576 3.8147 19.2506C3.8147 21.4656 5.6327 23.2706 7.8477 23.2706H15.5997C17.8147 23.2706 19.6327 21.4656 19.6327 19.2506C19.6327 18.9226 19.5917 18.6076 19.5097 18.3076C22.6407 19.4556 25.6207 21.4796 28.4787 24.4186C30.4197 26.5106 33.4687 25.4436 33.4687 22.5596V2.9536C33.4687 0.0686 30.4197 -0.9974 28.4787 1.0946C23.6797 6.0706 18.1017 8.3956 13.2207 8.3956H2.2017V7.8616C2.2017 7.2606 1.7087 6.7686 1.0937 6.7686C0.4927 6.7686 -0.0003 7.2606 -0.0003 7.8616V17.6236C-0.0003 18.2256 0.4927 18.7316 1.0937 18.7316ZM37.2697 12.7566C37.2697 13.3576 37.7617 13.8506 38.3637 13.8506H48.2207C48.8227 13.8506 49.3277 13.3576 49.3277 12.7566C49.3277 12.1546 48.8227 11.6486 48.2207 11.6486H38.3637C37.7617 11.6486 37.2697 12.1546 37.2697 12.7566ZM6.0157 19.2506C6.0157 18.2526 6.8497 17.4186 7.8477 17.4186H15.5997C16.5977 17.4186 17.4317 18.2526 17.4317 19.2506C17.4317 20.2486 16.5977 21.0556 15.5997 21.0556H7.8477C6.8497 21.0556 6.0157 20.2486 6.0157 19.2506ZM37.0367 18.9366C36.7227 19.4696 36.9137 20.1396 37.4197 20.4536L45.9787 25.3756C46.4847 25.6766 47.1817 25.4846 47.4687 24.9796C47.7837 24.4456 47.5917 23.7756 47.0727 23.4616L38.5277 18.5396C38.0077 18.2386 37.3247 18.4306 37.0367 18.9366Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.654296875 26.15755760031555"
          className={className}
        >
          <path
            d="              M1.4767 19.6819C2.2837 19.6819 2.9397 19.0259 2.9397 18.2059V17.8369H4.7717C4.5257 18.3839 4.3747 18.9849 4.3747 19.6279C4.3747 21.9789 6.3027 23.8929 8.6407 23.8929H16.3927C18.7437 23.8929 20.6717 21.9789 20.6717 19.6279C20.6717 19.5589 20.6587 19.4769 20.6587 19.4089C23.4607 20.5569 26.1407 22.4029 28.7107 24.9729C31.0487 27.3109 34.4527 25.9989 34.4527 22.6899V3.4679C34.4527 0.1589 31.0487 -1.1541 28.7107 1.1839C23.9667 5.9009 18.5527 8.3209 13.5077 8.3209H2.9397V7.9249C2.9397 7.1179 2.2837 6.4479 1.4767 6.4479C0.6567 6.4479 -0.0003 7.1179 -0.0003 7.9249V18.2059C-0.0003 19.0259 0.6567 19.6819 1.4767 19.6819ZM37.8437 6.9809C38.2127 7.6239 39.0747 7.8429 39.7167 7.4729L48.2617 2.5519C48.9047 2.1819 49.1367 1.3349 48.7537 0.6789C48.3987 0.0359 47.5367 -0.1831 46.8947 0.1729L38.3357 5.0949C37.6937 5.4639 37.4747 6.3249 37.8437 6.9809ZM38.0487 13.0789C38.0487 13.8309 38.6777 14.4459 39.4157 14.4459H49.2867C50.0257 14.4459 50.6547 13.8309 50.6547 13.0789C50.6547 12.3269 50.0257 11.7119 49.2867 11.7119H39.4157C38.6777 11.7119 38.0487 12.3269 38.0487 13.0789ZM7.0687 19.6279C7.0687 18.7659 7.7797 18.0419 8.6407 18.0419H16.3657C16.6247 18.0959 16.8847 18.1649 17.1447 18.2329C17.6367 18.5069 17.9787 19.0399 17.9787 19.6279C17.9787 20.4889 17.2537 21.1859 16.3927 21.1859H8.6407C7.7797 21.1859 7.0687 20.4889 7.0687 19.6279ZM37.8437 19.1769C37.4747 19.8189 37.6937 20.6669 38.3497 21.0499L46.8947 25.9709C47.5237 26.3539 48.3847 26.1219 48.7537 25.4789C49.1367 24.8369 48.9047 23.9889 48.2617 23.6059L39.7167 18.6839C39.0747 18.3019 38.2267 18.5339 37.8437 19.1769Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.580078125 24.049617957941738"
          className={className}
        >
          <path
            d="              M0.5057 16.8669C0.7927 16.8669 1.0117 16.6339 1.0117 16.3609V15.5679H3.3087C2.6387 16.2099 2.2147 17.1269 2.2147 18.1109C2.2147 20.0249 3.7737 21.5969 5.6877 21.5969H13.4397C15.3537 21.5969 16.9397 20.0249 16.9397 18.1109C16.9397 17.2499 16.5977 16.4429 16.0647 15.8279C16.3927 15.8819 16.7207 15.9509 17.0487 16.0189C21.2737 16.9759 24.0767 19.5329 28.4377 23.4019C29.5857 24.4959 31.5277 24.2629 31.5277 22.2529V1.7869C31.5277 -0.2091 29.5857 -0.4421 28.4377 0.6379C22.8047 5.6829 19.5097 8.4719 12.9477 8.4719H1.0117V7.6789C1.0117 7.3919 0.7927 7.1729 0.5057 7.1729C0.2327 7.1729 -0.0003 7.3919 -0.0003 7.6789V16.3609C-0.0003 16.6339 0.2327 16.8669 0.5057 16.8669ZM35.3967 5.9699C35.5057 6.2029 35.8477 6.2849 36.0797 6.1479L44.6247 1.2259C44.8577 1.1029 44.9397 0.7749 44.8027 0.5429C44.6797 0.3099 44.3377 0.2279 44.1057 0.3649L35.5607 5.2729C35.3277 5.4099 35.2457 5.7379 35.3967 5.9699ZM35.7107 12.0269C35.7107 12.2999 35.9297 12.5329 36.2167 12.5329H46.0747C46.3477 12.5329 46.5797 12.2999 46.5797 12.0269C46.5797 11.7399 46.3477 11.5209 46.0747 11.5209H36.2167C35.9297 11.5209 35.7107 11.7399 35.7107 12.0269ZM3.2267 18.1109C3.2267 16.7709 4.3337 15.6359 5.6877 15.6359H13.4397C14.7927 15.6359 15.9137 16.7709 15.9137 18.1109C15.9137 19.4639 14.7927 20.5849 13.4397 20.5849H5.6877C4.3337 20.5849 3.2267 19.4639 3.2267 18.1109ZM35.3967 18.0839C35.2457 18.3159 35.3277 18.6439 35.5747 18.7809L44.1187 23.7029C44.3377 23.8389 44.6657 23.7439 44.8027 23.5109C44.9397 23.2789 44.8577 22.9509 44.6117 22.7999L36.0667 17.8919C35.8477 17.7549 35.5197 17.8509 35.3967 18.0839Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.7734375 23.63159120029008"
          className={className}
        >
          <path
            d="              M1.7367 17.7923C1.7367 19.6103 3.2407 21.1143 5.0587 21.1143H12.8107C14.6287 21.1143 16.1467 19.6103 16.1467 17.7923C16.1467 16.7663 15.6677 15.8363 14.9297 15.2213C15.5587 15.2763 16.1467 15.3723 16.7067 15.4953C21.1227 16.4113 23.7347 19.0903 28.4237 23.1103C29.3537 23.9173 30.9667 23.9173 30.9667 22.1803V1.4543C30.9667 -0.2827 29.3537 -0.2827 28.4237 0.5103C22.5447 5.5833 19.9337 8.4953 12.8787 8.4953H0.6697V7.6203C0.6697 7.4423 0.5197 7.2923 0.3277 7.2923C0.1507 7.2923 -0.0003 7.4423 -0.0003 7.6203V15.9873C-0.0003 16.1783 0.1507 16.3293 0.3277 16.3293C0.5197 16.3293 0.6697 16.1783 0.6697 15.9873V15.1253H3.0767C2.2697 15.7413 1.7367 16.7113 1.7367 17.7923ZM34.9177 5.8013C34.9867 5.9523 35.2187 5.9933 35.3687 5.9113L43.9137 0.9893C44.0647 0.9073 44.1187 0.6883 44.0237 0.5383C43.9547 0.3873 43.7087 0.3463 43.5587 0.4283L35.0137 5.3503C34.8637 5.4323 34.8087 5.6513 34.9177 5.8013ZM35.2457 11.8173C35.2457 11.9953 35.3967 12.1453 35.5877 12.1453H45.4457C45.6227 12.1453 45.7737 11.9953 45.7737 11.8173C45.7737 11.6253 45.6227 11.4753 45.4457 11.4753H35.5877C35.3967 11.4753 35.2457 11.6253 35.2457 11.8173ZM2.4067 17.7923C2.4067 16.3973 3.5137 15.2213 4.8947 15.1253H12.8787C12.9067 15.1253 12.9477 15.1253 12.9887 15.1253C14.3557 15.2213 15.4767 16.3973 15.4767 17.7923C15.4767 19.2543 14.2737 20.4443 12.8107 20.4443H5.0587C3.6097 20.4443 2.4067 19.2543 2.4067 17.7923ZM34.9177 17.8333C34.8087 17.9833 34.8637 18.2023 35.0277 18.2973L43.5857 23.2193C43.7087 23.3013 43.9277 23.2333 44.0237 23.0833C44.1187 22.9323 44.0647 22.7133 43.9007 22.6183L35.3557 17.6963C35.2187 17.6143 34.9997 17.6823 34.9177 17.8333Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
