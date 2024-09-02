import { IconProps } from "../../types"

export default function ShekelsignIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.619140625 25.23828125"
          className={className}
        >
          <path
            d="              M7.3147 21.3009C7.3147 23.6659 8.6957 24.7329 11.0747 24.7329H18.8807C23.5707 24.7329 26.6187 21.7519 26.6187 17.1169V2.6109C26.6187 1.1619 25.4437 -0.0001 24.0077 -0.0001C22.5447 -0.0001 21.3827 1.1619 21.3827 2.6109V15.7499C21.3827 18.1839 20.0567 19.6469 17.9097 19.6469H12.2497V10.4859C12.2497 9.1329 11.1427 8.0249 9.7887 8.0249C8.4217 8.0249 7.3147 9.1329 7.3147 10.4859ZM-0.0003 22.6129C-0.0003 24.0629 1.1757 25.2379 2.6247 25.2379C4.0607 25.2379 5.2367 24.0629 5.2367 22.6129V5.5649H10.6227C12.9067 5.5649 14.3557 6.9729 14.3557 9.2419V14.6559C14.3557 16.0239 15.4627 17.1309 16.8167 17.1309C18.1697 17.1309 19.2777 16.0239 19.2777 14.6559V7.8889C19.2777 3.4039 16.2697 0.5059 11.6487 0.5059H4.6617C1.8597 0.5059 -0.0003 2.2699 -0.0003 4.8949Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.404296875 25.2109375"
          className={className}
        >
          <path
            d="              M6.9587 22.2309C6.9587 23.9259 7.9847 24.7869 9.6657 24.7869H17.4997C21.9977 24.7869 24.4047 22.2579 24.4047 17.4319V1.8869C24.4047 0.8479 23.5567 -0.0001 22.5177 -0.0001C21.4647 -0.0001 20.6177 0.8479 20.6177 1.8869V16.7479C20.6177 19.8519 19.4277 20.9449 16.6937 20.9449H10.5957V9.4199C10.5957 8.4219 9.7887 7.6019 8.7777 7.6019C7.7797 7.6019 6.9587 8.4219 6.9587 9.4199ZM-0.0003 23.3109C-0.0003 24.3629 0.8477 25.2109 1.9007 25.2109C2.9397 25.2109 3.7867 24.3629 3.7867 23.3109V4.2519H9.5977C12.3597 4.2519 13.7947 5.4139 13.7947 8.3259V15.7089C13.7947 16.7209 14.6157 17.5269 15.6137 17.5269C16.6117 17.5269 17.4317 16.7209 17.4317 15.7089V7.4239C17.4317 2.8579 14.8887 0.4099 10.4997 0.4099H3.1587C1.2577 0.4099 -0.0003 1.6409 -0.0003 3.4449Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.56640625 25.224609375"
          className={className}
        >
          <path
            d="              M7.1507 21.7379C7.1507 23.7889 8.3537 24.7599 10.4047 24.7599H18.2247C22.8317 24.7599 25.5667 21.9839 25.5667 17.2679V2.2699C25.5667 1.0119 24.5547 -0.0001 23.2967 -0.0001C22.0387 -0.0001 21.0137 1.0119 21.0137 2.2699V16.2149C21.0137 18.9769 19.7697 20.2619 17.3357 20.2619H11.4707V9.9809C11.4707 8.7909 10.4997 7.8199 9.3107 7.8199C8.1207 7.8199 7.1507 8.7909 7.1507 9.9809ZM-0.0003 22.9419C-0.0003 24.1989 1.0257 25.2249 2.2837 25.2249C3.5277 25.2249 4.5527 24.1989 4.5527 22.9419V4.9359H10.1447C12.6467 4.9359 14.0817 6.2339 14.0817 8.8049V15.1489C14.0817 16.3519 15.0527 17.3219 16.2427 17.3219C17.4317 17.3219 18.4027 16.3519 18.4027 15.1489V7.6699C18.4027 3.1449 15.6137 0.4649 11.1157 0.4649H3.9517C1.5727 0.4649 -0.0003 1.9689 -0.0003 4.2109Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.57421875 24.841796875"
          className={className}
        >
          <path
            d="              M6.5897 23.2965C6.5897 24.0355 7.0687 24.5415 7.8067 24.5415H15.5857C19.7967 24.5415 21.5747 22.5175 21.5747 17.7595V0.9025C21.5747 0.4105 21.1777 0.0005 20.6857 0.0005C20.1937 0.0005 19.7967 0.4105 19.7967 0.9025V17.7735C19.7967 21.6155 18.5117 22.5855 15.1617 22.5855H8.3677V7.7515C8.3677 7.2735 7.9707 6.8635 7.4787 6.8635C6.9867 6.8635 6.5897 7.2735 6.5897 7.7515ZM-0.0003 23.9535C-0.0003 24.4455 0.3967 24.8415 0.8887 24.8415C1.3807 24.8415 1.7777 24.4455 1.7777 23.9535V2.2555H8.6547C11.8127 2.2555 13.2067 3.2265 13.2067 7.0415V17.0075C13.2067 17.5005 13.6037 17.8965 14.0957 17.8965C14.5877 17.8965 14.9847 17.5005 14.9847 17.0075V6.6855C14.9847 2.0915 13.1117 0.3145 9.2017 0.3145H1.2167C0.4787 0.3145 -0.0003 0.8205 -0.0003 1.5585Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.982421875 25.2109375"
          className={className}
        >
          <path
            d="              M6.7407 22.8458C6.7407 24.0898 7.5337 24.8418 8.7777 24.8418H16.6247C20.9867 24.8418 22.9827 22.5998 22.9827 17.6508V1.4358C22.9827 0.6428 22.3397 -0.0002 21.5607 -0.0002C20.7677 -0.0002 20.1247 0.6428 20.1247 1.4358V17.4038C20.1247 20.9318 19.0317 21.7928 15.9137 21.7928H9.5427V8.7498C9.5427 7.9848 8.9137 7.3558 8.1487 7.3558C7.3687 7.3558 6.7407 7.9848 6.7407 8.7498ZM-0.0003 23.7758C-0.0003 24.5688 0.6427 25.2108 1.4357 25.2108C2.2147 25.2108 2.8577 24.5688 2.8577 23.7758V3.4178H8.9417C12.0037 3.4178 13.4397 4.4298 13.4397 7.7518V16.4058C13.4397 17.1718 14.0687 17.8008 14.8337 17.8008C15.6137 17.8008 16.2427 17.1718 16.2427 16.4058V7.1368C16.2427 2.5158 14.0137 0.3688 9.7757 0.3688H2.2017C0.8747 0.3688 -0.0003 1.2438 -0.0003 2.5428Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.189453125 25.18359375"
          className={className}
        >
          <path
            d="              M6.6177 23.1738C6.6177 24.1718 7.2737 24.8558 8.2717 24.8558H16.1187C20.4117 24.8558 22.1897 22.7638 22.1897 17.7458V1.1618C22.1897 0.5198 21.6567 -0.0002 21.0137 -0.0002C20.3707 -0.0002 19.8517 0.5198 19.8517 1.1618V17.7598C19.8517 21.5328 18.7987 22.2578 15.4767 22.2578H8.9547V8.3538C8.9547 7.7108 8.4217 7.1918 7.7797 7.1918C7.1367 7.1918 6.6177 7.7108 6.6177 8.3538ZM-0.0003 24.0218C-0.0003 24.6638 0.5197 25.1838 1.1617 25.1838C1.8187 25.1838 2.3377 24.6638 2.3377 24.0218V2.9258H8.5727C11.8127 2.9258 13.2347 3.8688 13.2347 7.4098V16.7758C13.2347 17.4178 13.7677 17.9378 14.4097 17.9378C15.0527 17.9378 15.5727 17.4178 15.5727 16.7758V6.9588C15.5727 2.3108 13.5077 0.3278 9.3657 0.3278H1.6547C0.6567 0.3278 -0.0003 0.9978 -0.0003 2.0098Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.59765625 25.197265625"
          className={className}
        >
          <path
            d="              M6.8357 22.5725C6.8357 24.0215 7.7247 24.8145 9.1597 24.8145H16.9937C21.4097 24.8145 23.5977 22.4495 23.5977 17.5545V1.6265C23.5977 0.7245 22.8597 -0.0005 21.9707 -0.0005C21.0687 -0.0005 20.3297 0.7245 20.3297 1.6265V17.1175C20.3297 20.4665 19.2087 21.4235 16.2557 21.4235H9.9937V9.0375C9.9937 8.1755 9.2837 7.4645 8.4217 7.4645C7.5467 7.4645 6.8357 8.1755 6.8357 9.0375ZM-0.0003 23.5705C-0.0003 24.4725 0.7247 25.1975 1.6267 25.1975C2.5297 25.1975 3.2537 24.4725 3.2537 23.5705V3.7735H9.2287C12.1547 3.7735 13.5897 4.8535 13.5897 7.9985V16.1055C13.5897 16.9665 14.3007 17.6775 15.1757 17.6775C16.0367 17.6775 16.7477 16.9665 16.7477 16.1055V7.2595C16.7477 2.6525 14.3827 0.3825 10.0897 0.3825H2.6117C1.0387 0.3825 -0.0003 1.4085 -0.0003 2.9255Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.767578125 24.376953125"
          className={className}
        >
          <path
            d="              M6.5627 23.4334C6.5627 23.8164 6.8087 24.0894 7.1917 24.0894H14.8887C19.0037 24.0894 20.7677 22.1624 20.7677 17.7594V0.5194C20.7677 0.2324 20.5347 0.0004 20.2477 0.0004C19.9607 0.0004 19.7147 0.2324 19.7147 0.5194V17.7874C19.7147 21.7244 18.1427 23.0234 14.7517 23.0234H7.6017V6.9454C7.6017 6.6584 7.3687 6.4254 7.0817 6.4254C6.7947 6.4254 6.5627 6.6584 6.5627 6.9454ZM-0.0003 23.8434C-0.0003 24.1444 0.2327 24.3774 0.5197 24.3774C0.8067 24.3774 1.0387 24.1444 1.0387 23.8434V1.3534H8.7497C11.7987 1.3534 13.1657 2.3794 13.1657 6.5214V17.2954C13.1657 17.5824 13.3987 17.8144 13.6857 17.8144C13.9727 17.8144 14.2047 17.5824 14.2047 17.2954V6.3024C14.2047 1.7774 12.5917 0.2734 8.9827 0.2734H0.6287C0.2457 0.2734 -0.0003 0.5604 -0.0003 0.9294Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.34375 24.130859375"
          className={className}
        >
          <path
            d="              M6.5487 23.5154C6.5487 23.7074 6.6717 23.8714 6.8637 23.8714H14.5197C18.5797 23.8714 20.3437 21.9984 20.3437 17.7594V0.3284C20.3437 0.1504 20.1937 0.0004 20.0157 0.0004C19.8377 0.0004 19.6877 0.1504 19.6877 0.3284V17.8004C19.6877 21.7794 17.9377 23.2424 14.5337 23.2424H7.2047V6.5354C7.2047 6.3434 7.0547 6.1934 6.8767 6.1934C6.6997 6.1934 6.5487 6.3434 6.5487 6.5354ZM-0.0003 23.8024C-0.0003 23.9804 0.1507 24.1314 0.3277 24.1314C0.5197 24.1314 0.6697 23.9804 0.6697 23.8024V0.8884H8.8047C11.7987 0.8884 13.1387 1.9414 13.1387 6.2614V17.4454C13.1387 17.6364 13.2887 17.7874 13.4667 17.7874C13.6587 17.7874 13.8087 17.6364 13.8087 17.4454V6.1114C13.8087 1.6274 12.3187 0.2594 8.8727 0.2594H0.3277C0.1367 0.2594 -0.0003 0.4234 -0.0003 0.6154Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
