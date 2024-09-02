import { IconProps } from "../../types"

export default function LirasignSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM8.3127 17.6773C8.3127 18.5393 8.9417 19.0583 9.7887 19.0583H16.5297C17.4047 19.0583 18.0197 18.4983 18.0197 17.6233C18.0197 16.7483 17.4047 16.2013 16.5297 16.2013H12.8377C13.1117 15.9143 13.3027 15.5453 13.4117 15.1483C13.4527 15.0253 13.4807 14.9023 13.5077 14.7653H16.0097C16.3247 14.7653 16.5427 14.5473 16.5427 14.2323C16.5427 13.9183 16.3247 13.6993 16.0097 13.6993H13.5347C13.4937 13.3713 13.4397 13.0703 13.3577 12.7833H16.0097C16.3247 12.7833 16.5427 12.5513 16.5427 12.2503C16.5427 11.9353 16.3247 11.7033 16.0097 11.7033H13.1387C13.1387 11.6763 13.1247 11.5392 13.1247 11.4293C13.1247 10.6363 13.7537 10.1032 15.0527 10.1032C15.8727 10.1032 16.1057 10.2133 16.7757 10.2133C17.4587 10.2133 17.9927 9.8303 17.9927 9.0783C17.9927 8.5582 17.7867 8.1763 17.3497 7.8883C16.7887 7.5193 15.8867 7.3283 14.4787 7.3283C11.3887 7.3283 9.6527 8.8863 9.6527 10.9782C9.6527 11.2243 9.6937 11.4703 9.7207 11.7033H8.6547C8.3397 11.7033 8.1207 11.9353 8.1207 12.2503C8.1207 12.5513 8.3537 12.7833 8.6547 12.7833H9.9667C10.0347 13.0843 10.1037 13.3983 10.1447 13.6993H8.6547C8.3397 13.6993 8.1207 13.9183 8.1207 14.2323C8.1207 14.5473 8.3537 14.7653 8.6547 14.7653H10.1587C10.1307 14.8753 10.1177 14.9703 10.0897 15.1073C9.9937 15.5313 9.7617 15.8453 9.3517 16.1333C8.7777 16.5433 8.3127 16.9943 8.3127 17.6773Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.9707 17.9377C7.9707 18.6207 8.4357 19.0447 9.1057 19.0447H16.6117C17.2947 19.0447 17.7737 18.5937 17.7737 17.9237C17.7737 17.2397 17.2947 16.8167 16.6117 16.8167H11.8127C12.2367 16.4197 12.5367 15.8317 12.6597 15.1757C12.6877 15.0117 12.7147 14.8477 12.7287 14.6837H15.6137C15.9827 14.6837 16.2557 14.4237 16.2557 14.0407C16.2557 13.6717 15.9827 13.4117 15.6137 13.4117H12.6597C12.5917 13.0427 12.5097 12.6877 12.4137 12.3597H15.6137C15.9827 12.3597 16.2557 12.0997 16.2557 11.7167C16.2557 11.3477 15.9827 11.0877 15.6137 11.0877H12.1957C12.1817 11.0057 12.1677 10.8687 12.1677 10.7457C12.1677 9.6117 13.0157 8.8317 14.5607 8.8317C15.4767 8.8317 15.8867 9.0237 16.4477 9.0367C17.0347 9.0507 17.4457 8.7227 17.4457 8.1207C17.4457 7.6697 17.2407 7.3417 16.7887 7.1097C16.1877 6.7947 15.3537 6.6447 14.2187 6.6447C11.2657 6.6447 9.5427 8.2437 9.5427 10.5817C9.5427 10.7597 9.5567 10.9097 9.5837 11.0877H8.5317C8.1487 11.0877 7.8887 11.3477 7.8887 11.7167C7.8887 12.0997 8.1617 12.3597 8.5317 12.3597H9.8167C9.8987 12.7147 9.9937 13.0707 10.0627 13.4117H8.5317C8.1487 13.4117 7.8887 13.6717 7.8887 14.0407C7.8887 14.4237 8.1617 14.6837 8.5317 14.6837H10.1717C10.1717 14.8067 10.1587 14.9157 10.1307 15.0667C10.0217 15.8867 9.5017 16.4477 8.8317 16.7347C8.2987 17.0217 7.9707 17.3767 7.9707 17.9377Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM8.1487 17.8005C8.1487 18.5805 8.7087 19.0585 9.4607 19.0585H16.5707C17.3497 19.0585 17.8967 18.5525 17.8967 17.7735C17.8967 16.9945 17.3497 16.5015 16.5707 16.5015H12.3457C12.7017 16.1605 12.9477 15.6815 13.0567 15.1755C13.0977 15.0255 13.1247 14.8745 13.1387 14.7385H15.8187C16.1597 14.7385 16.4067 14.4925 16.4067 14.1505C16.4067 13.8085 16.1597 13.5765 15.8187 13.5765H13.1247C13.0707 13.2205 13.0017 12.8925 12.9067 12.5785H15.8187C16.1597 12.5785 16.4067 12.3455 16.4067 12.0035C16.4067 11.6625 16.1597 11.4165 15.8187 11.4165H12.6877C12.6877 11.3615 12.6737 11.2245 12.6737 11.1155C12.6737 10.1585 13.4117 9.5015 14.8207 9.5015C15.6817 9.5015 15.9957 9.6525 16.6247 9.6665C17.2677 9.6795 17.7327 9.3105 17.7327 8.6265C17.7327 8.1485 17.5277 7.7925 17.0897 7.5195C16.5017 7.1775 15.6407 7.0135 14.3557 7.0135C11.3337 7.0135 9.5977 8.5855 9.5977 10.8005C9.5977 11.0055 9.6247 11.2105 9.6527 11.4165H8.5997C8.2577 11.4165 8.0117 11.6625 8.0117 12.0035C8.0117 12.3455 8.2717 12.5785 8.5997 12.5785H9.8987C9.9667 12.9065 10.0487 13.2485 10.1037 13.5765H8.5997C8.2577 13.5765 8.0117 13.8085 8.0117 14.1505C8.0117 14.4925 8.2717 14.7385 8.5997 14.7385H10.1587C10.1587 14.8475 10.1447 14.9575 10.1037 15.0935C10.0077 15.7085 9.6387 16.1325 9.1057 16.4195C8.5587 16.7755 8.1487 17.1855 8.1487 17.8005Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.6017 17.9105C7.6017 18.2925 7.8617 18.5525 8.2577 18.5525H16.3657C16.7617 18.5525 17.0347 18.2925 17.0347 17.9105C17.0347 17.5275 16.7617 17.2675 16.3657 17.2675H10.3227C10.9647 16.7485 11.4437 15.8185 11.5257 14.8615C11.5387 14.6285 11.5527 14.3965 11.5387 14.1775H14.8887C15.2577 14.1775 15.5177 13.9315 15.5177 13.5765C15.5177 13.2205 15.2577 12.9745 14.8887 12.9745H11.3887C11.2797 12.5235 11.1697 12.0995 11.0467 11.6895H14.8887C15.2577 11.6895 15.5177 11.4435 15.5177 11.0875C15.5177 10.7325 15.2577 10.4865 14.8887 10.4865H10.8277C10.8007 10.2815 10.7867 10.0765 10.7867 9.8715C10.7867 8.3395 11.7987 7.2735 13.7127 7.2735C14.6697 7.2735 15.2987 7.5055 15.7497 7.6155C16.1737 7.6835 16.4337 7.4375 16.4337 7.0545C16.4337 6.7815 16.2967 6.5485 15.9277 6.3985C15.3807 6.1665 14.5877 5.9885 13.6587 5.9885C10.9097 5.9885 9.3657 7.5605 9.3657 9.9535C9.3657 10.1305 9.3787 10.3085 9.4067 10.4865H8.3677C7.9977 10.4865 7.7387 10.7325 7.7387 11.0875C7.7387 11.4435 7.9977 11.6895 8.3677 11.6895H9.6117C9.7207 12.1265 9.8437 12.5505 9.9527 12.9745H8.3677C7.9977 12.9745 7.7387 13.2205 7.7387 13.5765C7.7387 13.9315 7.9977 14.1775 8.3677 14.1775H10.1447C10.1717 14.3695 10.1717 14.5605 10.1587 14.7515C10.0767 15.9685 9.2837 16.9395 8.1757 17.1995C7.7657 17.3225 7.6017 17.5545 7.6017 17.9105Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM7.7387 18.1013C7.7387 18.6623 8.1207 19.0173 8.6677 19.0173H16.6527C17.2127 19.0173 17.6097 18.6483 17.6097 18.1013C17.6097 17.5543 17.2127 17.1853 16.6527 17.1853H11.1567C11.6757 16.7483 12.0447 15.9963 12.1677 15.1893C12.1957 14.9983 12.2087 14.8063 12.2227 14.6153H15.3537C15.7777 14.6153 16.0777 14.3283 16.0777 13.9183C16.0777 13.4943 15.7777 13.2203 15.3537 13.2203H12.0997C12.0177 12.8243 11.9217 12.4413 11.8267 12.0723H15.3537C15.7777 12.0723 16.0777 11.7993 16.0777 11.3753C16.0777 10.9653 15.7777 10.6773 15.3537 10.6773H11.5797C11.5667 10.5683 11.5667 10.4313 11.5667 10.3083C11.5667 8.9413 12.5367 8.0253 14.2457 8.0253C15.2167 8.0253 15.7497 8.2443 16.2287 8.2853C16.7757 8.3123 17.0897 7.9983 17.0897 7.4923C17.0897 7.0953 16.8987 6.8083 16.4337 6.5903C15.8047 6.3163 14.9977 6.2073 14.0547 6.2073C11.1977 6.2073 9.4607 7.8343 9.4607 10.3083C9.4607 10.4453 9.4747 10.5543 9.5017 10.6773H8.4627C8.0387 10.6773 7.7387 10.9653 7.7387 11.3753C7.7387 11.7993 8.0387 12.0723 8.4627 12.0723H9.7207C9.8167 12.4553 9.9257 12.8383 10.0077 13.2203H8.4627C8.0387 13.2203 7.7387 13.4943 7.7387 13.9183C7.7387 14.3283 8.0387 14.6153 8.4627 14.6153H10.1997C10.1997 14.7523 10.1857 14.8883 10.1717 15.0393C10.0347 16.1053 9.3517 16.8303 8.5037 17.1033C7.9977 17.3083 7.7387 17.6093 7.7387 18.1013Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM7.6157 18.1975C7.6157 18.6755 7.9297 19.0035 8.4217 19.0035H16.6797C17.1717 19.0035 17.5137 18.6755 17.5137 18.1975C17.5137 17.7185 17.1717 17.4045 16.6797 17.4045H10.7737C11.3617 16.9255 11.7717 16.0915 11.8947 15.2035C11.9217 14.9845 11.9357 14.7795 11.9357 14.5745H15.2027C15.6547 14.5745 15.9687 14.2735 15.9687 13.8355C15.9687 13.3985 15.6547 13.1115 15.2027 13.1115H11.7847C11.6897 12.7015 11.5797 12.3045 11.4847 11.9215H15.2027C15.6547 11.9215 15.9687 11.6215 15.9687 11.1835C15.9687 10.7465 15.6547 10.4585 15.2027 10.4585H11.2387C11.2247 10.3225 11.2107 10.1855 11.2107 10.0485C11.2107 8.5725 12.2637 7.5605 14.0687 7.5605C15.0797 7.5605 15.6817 7.8065 16.1057 7.8615C16.6247 7.8885 16.8847 7.5875 16.8847 7.1365C16.8847 6.7815 16.7067 6.4945 16.2287 6.3025C15.5857 6.0425 14.8067 5.9475 13.9727 5.9475C11.1567 5.9475 9.4197 7.5875 9.4197 10.1585C9.4197 10.2675 9.4337 10.3495 9.4477 10.4585H8.4087C7.9707 10.4585 7.6567 10.7465 7.6567 11.1835C7.6567 11.6215 7.9707 11.9215 8.4087 11.9215H9.6797C9.7757 12.3185 9.8847 12.7145 9.9807 13.1115H8.4087C7.9707 13.1115 7.6567 13.3985 7.6567 13.8355C7.6567 14.2735 7.9707 14.5745 8.4087 14.5745H10.1997C10.2127 14.7245 10.1997 14.8615 10.1857 15.0255C10.0487 16.2285 9.2557 17.0485 8.3267 17.3085C7.8207 17.4725 7.6157 17.7465 7.6157 18.1975Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM7.8337 18.033C7.8337 18.635 8.2577 19.031 8.8597 19.031H16.6387C17.2407 19.031 17.6777 18.635 17.6777 18.02C17.6777 17.418 17.2407 17.021 16.6387 17.021H11.4297C11.9217 16.611 12.2637 15.928 12.3867 15.189C12.4137 14.998 12.4277 14.82 12.4417 14.643H15.4627C15.8597 14.643 16.1467 14.369 16.1467 13.973C16.1467 13.576 15.8597 13.303 15.4627 13.303H12.3457C12.2637 12.92 12.1677 12.551 12.0727 12.195H15.4627C15.8597 12.195 16.1467 11.922 16.1467 11.525C16.1467 11.129 15.8597 10.855 15.4627 10.855H11.8397C11.8397 10.76 11.8267 10.623 11.8267 10.5C11.8267 9.229 12.7427 8.367 14.3827 8.367C15.3267 8.367 15.8187 8.586 16.3247 8.613C16.8847 8.627 17.2407 8.312 17.2407 7.766C17.2407 7.355 17.0487 7.041 16.5837 6.822C15.9687 6.521 15.1487 6.398 14.1367 6.398C11.2247 6.398 9.5017 8.012 9.5017 10.432C9.5017 10.582 9.5157 10.719 9.5297 10.855H8.4907C8.0797 10.855 7.7927 11.129 7.7927 11.525C7.7927 11.922 8.0937 12.195 8.4907 12.195H9.7617C9.8577 12.564 9.9527 12.934 10.0347 13.303H8.4907C8.0797 13.303 7.7927 13.576 7.7927 13.973C7.7927 14.369 8.0937 14.643 8.4907 14.643H10.1857C10.1857 14.779 10.1717 14.902 10.1587 15.053C10.0347 16.01 9.4197 16.666 8.6547 16.939C8.1207 17.186 7.8337 17.514 7.8337 18.033Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM7.5877 17.5004C7.5877 17.7734 7.7657 17.9644 8.0387 17.9644H15.9277C16.2147 17.9644 16.3927 17.7734 16.3927 17.5134C16.3927 17.2674 16.2147 17.0764 15.9277 17.0764H9.7067C10.4457 16.5154 11.0057 15.4354 11.0337 14.3964C11.0467 14.1364 11.0337 13.8904 11.0057 13.6304H14.4787C14.7517 13.6304 14.9297 13.4534 14.9297 13.2074C14.9297 12.9614 14.7517 12.7834 14.4787 12.7834H10.8557C10.7457 12.2914 10.6097 11.8264 10.4867 11.3754H14.4787C14.7517 11.3754 14.9297 11.1834 14.9297 10.9374C14.9297 10.6914 14.7517 10.5134 14.4787 10.5134H10.2947C10.2407 10.2264 10.1997 9.9124 10.1997 9.6114C10.1997 8.0394 11.1697 6.8904 13.2617 6.8904C14.1367 6.8904 14.7927 7.0954 15.2717 7.2874C15.5857 7.3964 15.8317 7.2054 15.8317 6.9184C15.8317 6.7544 15.7637 6.6174 15.5177 6.4944C15.0937 6.2894 14.2867 6.0154 13.2347 6.0154C10.5957 6.0154 9.2697 7.5054 9.2697 9.6524C9.2697 9.9534 9.3107 10.2264 9.3657 10.5134H8.2987C8.0257 10.5134 7.8477 10.6914 7.8477 10.9374C7.8477 11.1834 8.0257 11.3754 8.2987 11.3754H9.5297C9.6527 11.8394 9.8027 12.3044 9.9117 12.7834H8.2987C8.0257 12.7834 7.8477 12.9614 7.8477 13.2074C7.8477 13.4534 8.0257 13.6304 8.2987 13.6304H10.0767C10.1177 13.8774 10.1307 14.1234 10.1307 14.3824C10.0897 15.6134 9.3107 16.7614 7.9707 17.0354C7.7107 17.1034 7.5877 17.2674 7.5877 17.5004Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM7.5747 17.295C7.5747 17.5 7.7107 17.65 7.9297 17.65H15.7087C15.9277 17.65 16.0647 17.5 16.0647 17.309C16.0647 17.117 15.9277 16.967 15.7087 16.967H9.4067C10.1717 16.393 10.7867 15.23 10.7867 14.164C10.7867 13.877 10.7737 13.617 10.7327 13.357H14.2597C14.4787 13.357 14.6157 13.207 14.6157 13.016C14.6157 12.824 14.4787 12.674 14.2597 12.674H10.5957C10.4727 12.168 10.3357 11.676 10.1857 11.197H14.2597C14.4787 11.197 14.6157 11.047 14.6157 10.855C14.6157 10.678 14.4787 10.514 14.2597 10.514H10.0217C9.9397 10.186 9.9117 9.83 9.9117 9.475C9.9117 7.875 10.8557 6.686 13.0157 6.686C13.8497 6.686 14.5337 6.891 15.0257 7.123C15.2847 7.246 15.5317 7.082 15.5317 6.85C15.5317 6.754 15.4907 6.645 15.3127 6.549C14.9437 6.357 14.1227 6.029 13.0157 6.029C10.4317 6.029 9.2287 7.479 9.2287 9.488C9.2287 9.844 9.2697 10.186 9.3377 10.514H8.2717C8.0527 10.514 7.9157 10.678 7.9157 10.855C7.9157 11.047 8.0527 11.197 8.2717 11.197H9.4887C9.6117 11.689 9.7757 12.182 9.8987 12.674H8.2717C8.0527 12.674 7.9157 12.824 7.9157 13.016C7.9157 13.207 8.0527 13.357 8.2717 13.357H10.0347C10.0897 13.617 10.1037 13.904 10.1037 14.191C10.1037 15.422 9.3247 16.666 7.8617 16.953C7.6837 16.98 7.5747 17.117 7.5747 17.295Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
