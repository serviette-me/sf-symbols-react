import { IconProps } from "../../types"

export default function ForwardIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.0234375 24.19921875"
          className={className}
        >
          <path
            d="              M3.1997 24.1991C3.9927 24.1991 4.7307 24.0211 5.4687 23.5841L19.7967 15.2441C20.8637 14.6151 21.7387 13.8361 21.9847 12.7281V20.6721C21.9847 22.9001 23.4477 24.1991 25.1837 24.1991C25.9627 24.1991 26.7147 24.0211 27.4527 23.5841L41.7677 15.2441C43.0387 14.5061 44.0237 13.5491 44.0237 12.0721C44.0237 10.5821 43.0937 9.7211 41.7677 8.9551L27.4527 0.6151C26.7017 0.1781 25.9497 0.0001 25.1427 0.0001C23.4197 0.0001 21.9847 1.2851 21.9847 3.5271V11.4021C21.7387 10.3081 20.9047 9.5981 19.7967 8.9551L5.4687 0.6151C4.7167 0.1781 3.9787 0.0001 3.1717 0.0001C1.4497 0.0001 -0.0003 1.2851 -0.0003 3.5271V20.6721C-0.0003 22.9001 1.4767 24.1991 3.1997 24.1991ZM4.8677 18.4711C4.7987 18.4711 4.7847 18.4301 4.7847 18.3751V5.8241C4.7847 5.7691 4.7987 5.7281 4.8807 5.7281C4.9217 5.7281 4.9627 5.7281 5.0177 5.7691L15.8047 11.9761C15.8457 12.0041 15.8457 12.0171 15.8457 12.0861C15.8457 12.1411 15.8317 12.1821 15.8047 12.2091L5.0177 18.4301C4.9767 18.4571 4.9217 18.4711 4.8677 18.4711ZM26.8377 18.4711C26.7837 18.4711 26.7557 18.4301 26.7557 18.3751V5.8241C26.7557 5.7691 26.7837 5.7281 26.8517 5.7281C26.8927 5.7281 26.9337 5.7281 26.9887 5.7691L37.7757 11.9761C37.8167 12.0041 37.8297 12.0171 37.8297 12.0861C37.8297 12.1411 37.8027 12.1821 37.7757 12.2091L26.9887 18.4301C26.9477 18.4571 26.8927 18.4711 26.8377 18.4711Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.837890625 22.83203125"
          className={className}
        >
          <path
            d="              M2.5837 22.8321C3.2537 22.8321 3.8557 22.6541 4.5117 22.2711L18.6347 14.0001C19.5507 13.4671 20.1797 12.8241 20.3847 11.9901V19.8921C20.3847 21.7791 21.5747 22.8321 22.9687 22.8321C23.6387 22.8321 24.2407 22.6541 24.8967 22.2711L39.0197 14.0001C40.1407 13.3441 40.8377 12.5231 40.8377 11.4021C40.8377 10.2671 40.1677 9.5021 39.0197 8.8181L24.8967 0.5471C24.2407 0.1781 23.6387 0.0001 22.9547 0.0001C21.5467 0.0001 20.3847 1.0391 20.3847 2.9261V10.8011C20.1797 9.9801 19.5647 9.3651 18.6347 8.8181L4.5117 0.5471C3.8557 0.1781 3.2537 0.0001 2.5707 0.0001C1.1757 0.0001 -0.0003 1.0391 -0.0003 2.9261V19.8921C-0.0003 21.7791 1.1897 22.8321 2.5837 22.8321ZM3.7187 18.7031C3.5817 18.7031 3.4867 18.6211 3.4867 18.4431V4.3751C3.4867 4.2111 3.5817 4.1151 3.7187 4.1151C3.7867 4.1151 3.8687 4.1421 3.9647 4.1971L15.8457 11.1561C15.9687 11.2241 16.0237 11.2791 16.0237 11.4021C16.0237 11.5251 15.9547 11.5941 15.8457 11.6621L3.9647 18.6351C3.8687 18.6761 3.7867 18.7031 3.7187 18.7031ZM24.1037 18.7031C23.9667 18.7031 23.8707 18.6211 23.8707 18.4431V4.3751C23.8707 4.2111 23.9667 4.1151 24.1037 4.1151C24.1717 4.1151 24.2407 4.1421 24.3357 4.1971L36.2307 11.1561C36.3537 11.2241 36.4087 11.2791 36.4087 11.4021C36.4087 11.5251 36.3397 11.5941 36.2307 11.6621L24.3357 18.6351C24.2537 18.6761 24.1717 18.7031 24.1037 18.7031Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.51953125 23.556640625"
          className={className}
        >
          <path
            d="              M2.9117 23.557C3.6507 23.557 4.3207 23.379 5.0177 22.969L19.2497 14.67C20.2477 14.082 20.9997 13.371 21.2327 12.387V20.316C21.2327 22.381 22.5587 23.557 24.1307 23.557C24.8687 23.557 25.5527 23.379 26.2367 22.969L40.4687 14.67C41.6717 13.959 42.5197 13.07 42.5197 11.758C42.5197 10.445 41.7127 9.625 40.4687 8.9L26.2367 0.588C25.5387 0.178 24.8557 0 24.1177 0C22.5447 0 21.2327 1.176 21.2327 3.254V11.115C20.9997 10.158 20.2757 9.502 19.2497 8.9L5.0177 0.588C4.3067 0.178 3.6367 0 2.8847 0C1.3127 0 -0.0003 1.176 -0.0003 3.254V20.316C-0.0003 22.381 1.3397 23.557 2.9117 23.557ZM4.3207 18.594C4.2247 18.594 4.1697 18.525 4.1697 18.416V5.154C4.1697 5.031 4.2247 4.977 4.3337 4.977C4.3887 4.977 4.4437 4.977 4.5117 5.031L15.8187 11.594C15.9007 11.635 15.9277 11.676 15.9277 11.772C15.9277 11.854 15.8867 11.908 15.8187 11.949L4.5117 18.525C4.4567 18.566 4.3887 18.594 4.3207 18.594ZM25.5527 18.594C25.4567 18.594 25.3887 18.525 25.3887 18.416V5.154C25.3887 5.031 25.4567 4.977 25.5527 4.977C25.6077 4.977 25.6617 4.977 25.7437 5.031L37.0507 11.594C37.1187 11.635 37.1597 11.676 37.1597 11.772C37.1597 11.854 37.1187 11.908 37.0507 11.949L25.7437 18.525C25.6757 18.566 25.6077 18.594 25.5527 18.594Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.640625 20.890625"
          className={className}
        >
          <path
            d="              M1.7497 20.8911C2.2427 20.8911 2.6937 20.7131 3.1587 20.4391L17.2127 12.1681C17.8007 11.8261 18.1427 11.4161 18.2927 10.9371V18.7991C18.2927 20.1931 19.0997 20.8911 20.0427 20.8911C20.5347 20.8911 20.9727 20.7131 21.4517 20.4391L35.4927 12.1681C36.2717 11.7171 36.6407 11.1431 36.6407 10.4451C36.6407 9.7481 36.2847 9.1871 35.4927 8.7231L21.4517 0.4511C20.9727 0.1781 20.5347 0.0001 20.0427 0.0001C19.0997 0.0001 18.2927 0.6971 18.2927 2.0921V9.9391C18.1567 9.4751 17.8007 9.0781 17.2127 8.7231L3.1587 0.4511C2.6797 0.1781 2.2427 0.0001 1.7497 0.0001C0.8207 0.0001 -0.0003 0.6971 -0.0003 2.0921V18.7991C-0.0003 20.1931 0.8207 20.8911 1.7497 20.8911ZM2.1597 18.9901C1.9277 18.9901 1.6817 18.8401 1.6817 18.4301V2.4751C1.6817 2.0641 1.9277 1.9001 2.1597 1.9001C2.2837 1.9001 2.4067 1.9411 2.6117 2.0511L15.9957 9.9801C16.2427 10.1171 16.3657 10.2261 16.3657 10.4451C16.3657 10.6641 16.2287 10.7871 15.9957 10.9101L2.6117 18.8401C2.4197 18.9491 2.2837 18.9901 2.1597 18.9901ZM20.4397 18.9901C20.2207 18.9901 19.9607 18.8401 19.9607 18.4301V2.4751C19.9607 2.0641 20.2207 1.9001 20.4397 1.9001C20.5627 1.9001 20.6997 1.9411 20.8907 2.0511L34.2887 9.9801C34.5217 10.1171 34.6447 10.2261 34.6447 10.4451C34.6447 10.6641 34.5217 10.7871 34.2887 10.9101L20.8907 18.8401C20.6997 18.9491 20.5627 18.9901 20.4397 18.9901Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.80078125 21.970703125"
          className={className}
        >
          <path
            d="              M2.1877 21.971C2.7887 21.971 3.3087 21.793 3.8967 21.451L17.8967 13.221C18.7027 12.742 19.1957 12.195 19.3597 11.539V19.414C19.3597 21.068 20.3577 21.971 21.5607 21.971C22.1487 21.971 22.6677 21.793 23.2557 21.451L37.2557 13.221C38.2817 12.619 38.8007 11.895 38.8007 10.979C38.8007 10.076 38.2947 9.365 37.2557 8.75L23.2557 0.52C22.6547 0.178 22.1487 0 21.5467 0C20.3577 0 19.3597 0.902 19.3597 2.557V10.432C19.1957 9.775 18.7027 9.229 17.8967 8.75L3.8967 0.52C3.2947 0.178 2.7887 0 2.1877 0C0.9977 0 -0.0003 0.902 -0.0003 2.557V19.414C-0.0003 21.068 0.9977 21.971 2.1877 21.971ZM2.9807 18.867C2.8027 18.867 2.6657 18.758 2.6657 18.512V3.459C2.6657 3.227 2.8027 3.104 2.9807 3.104C3.0627 3.104 3.1587 3.131 3.2817 3.213L15.8727 10.65C16.0507 10.746 16.1327 10.828 16.1327 10.979C16.1327 11.143 16.0367 11.238 15.8727 11.32L3.2817 18.772C3.1717 18.84 3.0627 18.867 2.9807 18.867ZM22.3397 18.867C22.1757 18.867 22.0257 18.758 22.0257 18.512V3.459C22.0257 3.227 22.1757 3.104 22.3397 3.104C22.4217 3.104 22.5177 3.131 22.6407 3.213L35.2457 10.65C35.4097 10.746 35.4927 10.828 35.4927 10.979C35.4927 11.143 35.3967 11.238 35.2457 11.32L22.6407 18.772C22.5317 18.84 22.4217 18.867 22.3397 18.867Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.65234375 21.478515625"
          className={className}
        >
          <path
            d="              M1.9687 21.4788C2.5297 21.4788 2.9937 21.3008 3.5407 20.9728L17.4727 12.7698C18.2247 12.3318 18.6347 11.8398 18.7847 11.2658V19.1408C18.7847 20.6578 19.6877 21.4788 20.7537 21.4788C21.3147 21.4788 21.7797 21.3008 22.3267 20.9728L36.2717 12.7698C37.2287 12.1948 37.6527 11.5258 37.6527 10.7328C37.6527 9.9528 37.2287 9.2828 36.2717 8.7088L22.3267 0.5058C21.7797 0.1778 21.3147 -0.0002 20.7537 -0.0002C19.6877 -0.0002 18.7847 0.8198 18.7847 2.3378V10.2128C18.6347 9.6388 18.2247 9.1468 17.4727 8.7088L3.5407 0.5058C2.9807 0.1778 2.5297 -0.0002 1.9687 -0.0002C0.9027 -0.0002 -0.0003 0.8198 -0.0003 2.3378V19.1408C-0.0003 20.6578 0.9027 21.4788 1.9687 21.4788ZM2.5707 18.9488C2.3657 18.9488 2.2017 18.8258 2.2017 18.5388V2.9398C2.2017 2.6518 2.3657 2.5288 2.5707 2.5288C2.6657 2.5288 2.7617 2.5698 2.8987 2.6388L15.9007 10.3498C16.0917 10.4588 16.2017 10.5548 16.2017 10.7328C16.2017 10.9238 16.0917 11.0198 15.9007 11.1288L2.8987 18.8398C2.7757 18.9218 2.6657 18.9488 2.5707 18.9488ZM21.3557 18.9488C21.1507 18.9488 20.9867 18.8258 20.9867 18.5388V2.9398C20.9867 2.6518 21.1507 2.5288 21.3557 2.5288C21.4517 2.5288 21.5467 2.5698 21.6837 2.6388L34.6857 10.3498C34.8767 10.4588 34.9867 10.5548 34.9867 10.7328C34.9867 10.9238 34.8767 11.0198 34.6857 11.1288L21.6837 18.8398C21.5607 18.9218 21.4517 18.9488 21.3557 18.9488Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.67578125 22.33984375"
          className={className}
        >
          <path
            d="              M2.3657 22.34C2.9937 22.34 3.5407 22.162 4.1567 21.793L18.2107 13.549C19.0727 13.057 19.6187 12.455 19.8107 11.73V19.619C19.8107 21.369 20.8767 22.34 22.1617 22.34C22.7907 22.34 23.3517 22.162 23.9667 21.793L38.0217 13.549C39.0747 12.92 39.6757 12.154 39.6757 11.156C39.6757 10.144 39.1017 9.42 38.0217 8.777L23.9667 0.533C23.3377 0.164 22.7907 0 22.1487 0C20.8767 0 19.8107 0.957 19.8107 2.707V10.582C19.6187 9.857 19.0727 9.283 18.2107 8.777L4.1567 0.533C3.5407 0.164 2.9937 0 2.3517 0C1.0667 0 -0.0003 0.957 -0.0003 2.707V19.619C-0.0003 21.369 1.0797 22.34 2.3657 22.34ZM3.2947 18.785C3.1447 18.785 3.0217 18.689 3.0217 18.484V3.855C3.0217 3.637 3.1447 3.541 3.3087 3.541C3.3767 3.541 3.4587 3.568 3.5687 3.623L15.8597 10.869C16.0097 10.951 16.0917 11.019 16.0917 11.156C16.0917 11.307 16.0097 11.375 15.8597 11.457L3.5687 18.703C3.4727 18.758 3.3767 18.785 3.2947 18.785ZM23.1057 18.785C22.9417 18.785 22.8187 18.689 22.8187 18.484V3.855C22.8187 3.637 22.9417 3.541 23.1057 3.541C23.1737 3.541 23.2697 3.568 23.3787 3.623L35.6697 10.869C35.8207 10.951 35.8887 11.019 35.8887 11.156C35.8887 11.307 35.8067 11.375 35.6697 11.457L23.3787 18.703C23.2697 18.758 23.1737 18.785 23.1057 18.785Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.314453125 20.138671875"
          className={className}
        >
          <path
            d="              M1.4627 20.1383C1.8727 20.1383 2.2967 19.9473 2.6527 19.7422L16.8577 11.3883C17.2407 11.1703 17.5137 10.8692 17.6227 10.5133V18.3753C17.6227 19.5783 18.3337 20.1383 19.0857 20.1383C19.4957 20.1383 19.9197 19.9473 20.2757 19.7422L34.4807 11.3883C35.0137 11.0742 35.3147 10.6503 35.3147 10.0623C35.3147 9.4883 35.0277 9.0783 34.4807 8.7503L20.2757 0.3962C19.9067 0.1913 19.4957 0.0003 19.0857 0.0003C18.3337 0.0003 17.6227 0.5602 17.6227 1.7632V9.6113C17.5137 9.2693 17.2537 8.9963 16.8577 8.7503L2.6527 0.3962C2.2837 0.1913 1.8727 0.0003 1.4627 0.0003C0.7107 0.0003 -0.0003 0.5602 -0.0003 1.7632V18.3753C-0.0003 19.5783 0.7107 20.1383 1.4627 20.1383ZM1.6137 19.0583C1.3537 19.0583 0.9847 18.8672 0.9847 18.2793V1.8592C0.9847 1.2853 1.3537 1.0933 1.6137 1.0933C1.7777 1.0933 1.9417 1.1212 2.2147 1.2853L16.1327 9.4883C16.4337 9.6663 16.5837 9.8023 16.5837 10.0623C16.5837 10.3223 16.4197 10.5003 16.1327 10.6503L2.2147 18.8672C1.9547 19.0173 1.7777 19.0583 1.6137 19.0583ZM19.2367 19.0583C18.9767 19.0583 18.6077 18.8672 18.6077 18.2793V1.8592C18.6077 1.2853 18.9767 1.0933 19.2367 1.0933C19.4007 1.0933 19.5647 1.1212 19.8377 1.2853L33.7557 9.4883C34.0567 9.6663 34.2067 9.8023 34.2067 10.0623C34.2067 10.3223 34.0427 10.5003 33.7557 10.6503L19.8377 18.8672C19.5777 19.0173 19.4007 19.0583 19.2367 19.0583Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.64453125 19.7421875"
          className={className}
        >
          <path
            d="              M1.3127 19.7422C1.6817 19.7422 2.1057 19.5512 2.3927 19.3732L16.6657 10.9782C16.9527 10.8142 17.1857 10.5822 17.2817 10.2812V18.1562C17.2817 19.2632 17.9517 19.7422 18.6077 19.7422C18.9627 19.7422 19.3867 19.5512 19.6737 19.3732L33.9607 10.9782C34.3577 10.7462 34.6447 10.3772 34.6447 9.8572C34.6447 9.3382 34.3847 9.0232 33.9607 8.7632L19.6737 0.3692C19.3597 0.1912 18.9627 0.0002 18.6077 0.0002C17.9517 0.0002 17.2817 0.4782 17.2817 1.5992V9.4332C17.1857 9.1462 16.9667 8.9412 16.6657 8.7632L2.3927 0.3692C2.0777 0.1912 1.6817 0.0002 1.3127 0.0002C0.6567 0.0002 -0.0003 0.4782 -0.0003 1.5992V18.1562C-0.0003 19.2632 0.6567 19.7422 1.3127 19.7422ZM1.3397 19.0722C1.0667 19.0722 0.6427 18.8672 0.6427 18.1972V1.5452C0.6427 0.8752 1.0667 0.6702 1.3397 0.6702C1.5177 0.6702 1.6957 0.6972 2.0097 0.8752L16.2017 9.2282C16.5427 9.4202 16.6937 9.5842 16.6937 9.8572C16.6937 10.1442 16.5157 10.3362 16.2017 10.5132L2.0097 18.8672C1.7087 19.0452 1.5177 19.0722 1.3397 19.0722ZM18.6207 19.0722C18.3477 19.0722 17.9237 18.8672 17.9237 18.1972V1.5452C17.9237 0.8752 18.3477 0.6702 18.6207 0.6702C18.7987 0.6702 18.9767 0.6972 19.2907 0.8752L33.4827 9.2282C33.8247 9.4202 33.9747 9.5842 33.9747 9.8572C33.9747 10.1442 33.8107 10.3362 33.4827 10.5132L19.2907 18.8672C18.9907 19.0452 18.7987 19.0722 18.6207 19.0722Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
