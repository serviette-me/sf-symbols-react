import { IconProps } from "../../types"

export default function StrollerIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.857421875 31.431640625"
          className={className}
        >
          <path
            d="              M9.6387 31.4321C11.4437 31.4321 12.9887 30.3381 13.6447 28.7661H22.5727C23.2287 30.3241 24.7597 31.4041 26.5507 31.4041C28.9297 31.4041 30.8577 29.4771 30.8577 27.0981C30.8577 24.7191 28.9297 22.7911 26.5507 22.7911C26.1267 22.7911 25.7307 22.8461 25.3617 22.9551L23.9397 21.5331C29.9277 20.8091 30.7887 15.5721 30.7887 12.0591C30.7887 6.1521 26.6327 0.0001 18.9497 0.0001C17.4177 0.0001 16.3107 1.1621 16.3107 2.6661V10.1721H12.5777L6.6307 4.2521C6.1527 3.7871 5.5917 3.5551 4.9627 3.5551H1.8597C0.8477 3.5551 -0.0003 4.3891 -0.0003 5.4141C-0.0003 6.4261 0.8477 7.2731 1.8597 7.2731H4.4297L7.3417 10.1721H5.9337C4.9497 10.1721 4.1567 10.9651 4.1567 11.9491C4.1567 12.8241 4.7987 13.5491 5.6187 13.6991L6.1117 16.3381C6.6447 19.1951 8.8047 21.0961 12.2497 21.5191L10.8417 22.9281C10.4587 22.8181 10.0487 22.7641 9.6387 22.7641C7.2327 22.7641 5.2907 24.6911 5.2907 27.0981C5.2907 29.4901 7.2327 31.4321 9.6387 31.4321ZM19.8517 4.0741C19.8517 3.8421 20.0017 3.6911 20.2617 3.6911C23.3377 3.6911 26.3317 6.1931 27.0707 10.1721H19.8517ZM13.8087 18.0601C11.1567 18.0601 9.9117 17.1991 9.6117 15.6821L9.2287 13.7261H27.1527C26.9067 15.8871 25.9627 18.0601 22.4767 18.0601ZM13.6307 25.3891L13.6177 25.3751L17.3907 21.6151H18.7847L22.5727 25.3891ZM9.6387 28.9161C8.6137 28.9161 7.8207 28.1231 7.8207 27.0981C7.8207 26.0721 8.6137 25.2791 9.6387 25.2791C10.6507 25.2791 11.4437 26.0721 11.4437 27.0981C11.4437 28.1231 10.6507 28.9161 9.6387 28.9161ZM26.5507 28.9161C25.5257 28.9161 24.7327 28.1231 24.7327 27.0981C24.7327 26.0721 25.5257 25.2791 26.5507 25.2791C27.5627 25.2791 28.3557 26.0721 28.3557 27.0981C28.3557 28.1231 27.5627 28.9161 26.5507 28.9161Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.5859375 30.556640625"
          className={className}
        >
          <path
            d="              M8.8457 30.5565C10.6917 30.5565 12.2227 29.3805 12.7557 27.7265H21.8747C22.4087 29.2855 23.8987 30.4065 25.6347 30.4065C27.8227 30.4065 29.5857 28.6425 29.5857 26.4415C29.5857 24.2535 27.8227 22.4905 25.6347 22.4905C25.1287 22.4905 24.6507 22.5855 24.1997 22.7495L22.0527 20.6035C28.4237 20.3985 29.4907 15.2715 29.4907 11.5115C29.4907 5.4685 25.2387 -0.0005 18.1567 -0.0005C16.8707 -0.0005 15.9687 0.9565 15.9687 2.2555V10.0895H11.5257L5.8657 4.4155C5.4687 4.0335 5.0177 3.8415 4.4847 3.8415H1.4497C0.6567 3.8415 -0.0003 4.4975 -0.0003 5.2905C-0.0003 6.0835 0.6567 6.7405 1.4497 6.7405H4.1157L7.4647 10.0895H5.2087C4.4437 10.0895 3.8417 10.6915 3.8417 11.4565C3.8417 12.2085 4.4437 12.8245 5.2087 12.8245L5.7557 15.6955C6.2887 18.6075 8.6407 20.4395 12.4277 20.6035L10.4047 22.6265C9.9257 22.4355 9.4067 22.3395 8.8457 22.3395C6.5627 22.3395 4.7307 24.1585 4.7307 26.4415C4.7307 28.7385 6.5627 30.5565 8.8457 30.5565ZM18.7027 3.3495C18.7027 3.0355 18.9087 2.8435 19.2087 2.8435C22.2717 2.8435 26.0317 5.2775 26.6467 10.0895H18.7027ZM12.9607 17.8695C10.2267 17.8695 8.7907 16.8715 8.4497 15.1895L7.9847 12.8245H26.6877C26.4687 15.2715 25.4847 17.8695 21.6567 17.8695ZM12.7557 25.1425C12.6877 24.9515 12.6187 24.7595 12.5237 24.5815L16.5017 20.6035H17.9927L22.0797 24.6915C21.9977 24.8415 21.9437 24.9925 21.8887 25.1425ZM8.8457 28.4105C7.7517 28.4105 6.8907 27.5355 6.8907 26.4415C6.8907 25.3475 7.7517 24.4995 8.8457 24.4995C9.9527 24.4995 10.8007 25.3475 10.8007 26.4415C10.8007 27.5355 9.9527 28.4105 8.8457 28.4105ZM25.6347 28.4105C24.5407 28.4105 23.6797 27.5355 23.6797 26.4415C23.6797 25.3475 24.5407 24.4995 25.6347 24.4995C26.7287 24.4995 27.5897 25.3475 27.5897 26.4415C27.5897 27.5355 26.7287 28.4105 25.6347 28.4105Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.255859375 31.021484375"
          className={className}
        >
          <path
            d="              M9.2697 31.0216C11.0877 31.0216 12.6327 29.8726 13.2347 28.2736H22.2437C22.8457 29.8316 24.3497 30.9256 26.1137 30.9256C28.3967 30.9256 30.2557 29.0796 30.2557 26.7836C30.2557 24.4996 28.3967 22.6406 26.1137 22.6406C25.6617 22.6406 25.2247 22.7086 24.8147 22.8456L23.0647 21.0956C29.2167 20.6036 30.1877 15.4216 30.1877 11.7856C30.1877 5.8246 25.9767 -0.0004 18.5797 -0.0004C17.1587 -0.0004 16.1467 1.0526 16.1467 2.4606V10.1306H12.0857L6.2757 4.3206C5.8247 3.8966 5.3187 3.6776 4.7437 3.6776H1.6677C0.7517 3.6776 -0.0003 4.4436 -0.0003 5.3456C-0.0003 6.2476 0.7517 7.0136 1.6677 7.0136H4.2797L7.3967 10.1306H5.5917C4.7167 10.1306 4.0057 10.8276 4.0057 11.7026C4.0057 12.5236 4.6347 13.2066 5.4277 13.2886L5.9477 16.0236C6.4807 18.9086 8.7227 20.7816 12.3187 21.0816L10.6367 22.7776C10.2127 22.6266 9.7477 22.5586 9.2697 22.5586C6.9177 22.5586 5.0317 24.4316 5.0317 26.7836C5.0317 29.1346 6.9177 31.0216 9.2697 31.0216ZM19.3047 3.7186C19.3047 3.4586 19.4827 3.2816 19.7697 3.2816C22.8457 3.2816 26.1817 5.7696 26.8787 10.1306H19.3047ZM13.4117 17.9646C10.7187 17.9646 9.3787 17.0356 9.0647 15.4356L8.6407 13.2886H26.9337C26.7017 15.5996 25.7307 17.9646 22.0937 17.9646ZM13.2207 25.2656C13.1797 25.1836 13.1387 25.0876 13.0977 24.9926L16.9667 21.1366H18.4157L22.3397 25.0606C22.3127 25.1286 22.2847 25.1976 22.2437 25.2656ZM9.2697 28.6696C8.2027 28.6696 7.3827 27.8356 7.3827 26.7836C7.3827 25.7306 8.2027 24.9106 9.2697 24.9106C10.3227 24.9106 11.1427 25.7306 11.1427 26.7836C11.1427 27.8356 10.3227 28.6696 9.2697 28.6696ZM26.1137 28.6696C25.0607 28.6696 24.2267 27.8356 24.2267 26.7836C24.2267 25.7306 25.0607 24.9106 26.1137 24.9106C27.1657 24.9106 27.9867 25.7306 27.9867 26.7836C27.9867 27.8356 27.1657 28.6696 26.1137 28.6696Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.302734375 28.642578125"
          className={className}
        >
          <path
            d="              M7.5467 28.6425C9.3377 28.6425 10.7867 27.4125 11.1017 25.7165H20.4667C20.7947 27.3025 22.1897 28.4645 23.8577 28.4645C25.7717 28.4645 27.3027 26.9335 27.3027 25.0055C27.3027 23.0915 25.7717 21.5605 23.8577 21.5605C23.2697 21.5605 22.7087 21.7105 22.2167 21.9705L18.9767 18.7165H20.2067C25.5387 18.7165 27.1527 14.5875 27.1527 10.4045C27.1527 4.6345 23.4067 0.0005 16.9667 0.0005C15.9957 0.0005 15.3677 0.6425 15.3677 1.6265V9.7615H10.0077L4.5117 4.2795C4.2247 3.9925 3.9787 3.8825 3.5817 3.8825H0.8067C0.3687 3.8825 -0.0003 4.2515 -0.0003 4.6895C-0.0003 5.1265 0.3687 5.4825 0.8067 5.4825H3.4727L7.7517 9.7615H4.0607C3.6367 9.7615 3.3087 10.1035 3.3087 10.5135C3.3087 10.9375 3.6367 11.2795 4.0607 11.2795H4.5117L5.0997 14.3965C5.6057 17.1035 7.8477 18.7165 11.4437 18.7165H12.4277L9.3247 21.8345C8.7907 21.5465 8.1897 21.3825 7.5467 21.3825C5.5097 21.3825 3.9097 22.9685 3.9097 25.0055C3.9097 27.0565 5.5097 28.6425 7.5467 28.6425ZM16.8707 2.1605C16.8707 1.7915 17.1177 1.5585 17.4997 1.5585C21.2187 1.5585 25.3337 4.0875 25.6207 9.7615H16.8707ZM11.4437 17.1995C8.6547 17.1995 6.9867 16.0505 6.6037 14.1095L6.0297 11.2795H25.6077C25.4027 14.3555 24.0627 17.1995 20.2067 17.1995ZM11.1017 24.2945C11.0057 23.7895 10.8147 23.3245 10.5277 22.9275L14.7387 18.7165H16.6657L20.9997 23.0505C20.7537 23.4195 20.5627 23.8435 20.4667 24.2945ZM7.5467 27.2205C6.3167 27.2205 5.3317 26.2505 5.3317 25.0055C5.3317 23.7755 6.3167 22.8045 7.5467 22.8045C8.7777 22.8045 9.7477 23.7755 9.7477 25.0055C9.7477 26.2505 8.7777 27.2205 7.5467 27.2205ZM23.8577 27.2205C22.6267 27.2205 21.6427 26.2505 21.6427 25.0055C21.6427 23.7755 22.6267 22.8045 23.8577 22.8045C25.0877 22.8045 26.0727 23.7755 26.0727 25.0055C26.0727 26.2505 25.0877 27.2205 23.8577 27.2205Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.779296875 29.99609375"
          className={className}
        >
          <path
            d="              M8.3537 29.9961C10.2127 29.9961 11.7307 28.7661 12.1817 27.0571H21.4517C21.9027 28.6291 23.3377 29.7641 25.0467 29.7641C27.1117 29.7641 28.7797 28.0961 28.7797 26.0171C28.7797 23.9531 27.1117 22.2851 25.0467 22.2851C24.4867 22.2851 23.9527 22.4081 23.4747 22.6271L20.8087 19.9611H21.1367C27.4667 19.9611 28.6567 15.0251 28.6567 11.1421C28.6567 5.0171 24.3497 0.0001 17.6637 0.0001C16.5297 0.0001 15.7497 0.8201 15.7497 1.9821V10.0211H10.8557L5.3597 4.5251C5.0177 4.1831 4.6347 4.0191 4.1697 4.0191H1.1757C0.5337 4.0191 -0.0003 4.5661 -0.0003 5.2091C-0.0003 5.8511 0.5337 6.3851 1.1757 6.3851H3.9097L7.5467 10.0211H4.7437C4.1287 10.0211 3.6227 10.5141 3.6227 11.1291C3.6227 11.7441 4.1287 12.2361 4.7437 12.2361H4.9497L5.5097 15.2711C6.0567 18.1831 8.4907 19.9611 12.4277 19.9611H12.5917L10.0897 22.4491C9.5707 22.2031 8.9827 22.0661 8.3537 22.0661C6.1247 22.0661 4.3747 23.8031 4.3747 26.0171C4.3747 28.2461 6.1247 29.9961 8.3537 29.9961ZM17.9647 2.8711C17.9647 2.5291 18.1977 2.2971 18.5527 2.2971C21.5747 2.2971 25.8397 4.6211 26.3727 10.0211H17.9647ZM12.4277 17.7321C9.6387 17.7321 8.0667 16.6521 7.7107 14.8611L7.1917 12.2361H26.3867C26.1957 14.8751 25.1567 17.7321 21.1367 17.7321ZM12.1817 24.9781C12.0997 24.6641 11.9767 24.3501 11.8127 24.0761L15.9277 19.9611H17.4727L21.7517 24.2401C21.6287 24.4731 21.5337 24.7191 21.4517 24.9781ZM8.3537 28.0681C7.2047 28.0681 6.3027 27.1661 6.3027 26.0171C6.3027 24.8831 7.2047 23.9801 8.3537 23.9801C9.4887 23.9801 10.3907 24.8831 10.3907 26.0171C10.3907 27.1661 9.4887 28.0681 8.3537 28.0681ZM25.0467 28.0681C23.9117 28.0681 22.9957 27.1661 22.9957 26.0171C22.9957 24.8831 23.9117 23.9801 25.0467 23.9801C26.1957 23.9801 27.0837 24.8831 27.0837 26.0171C27.0837 27.1661 26.1957 28.0681 25.0467 28.0681Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.328125 29.6953125"
          className={className}
        >
          <path
            d="              M8.0667 29.695C9.9397 29.695 11.4567 28.437 11.8537 26.687H21.2187C21.6157 28.26 23.0367 29.422 24.7187 29.422C26.7147 29.422 28.3277 27.809 28.3277 25.799C28.3277 23.803 26.7147 22.189 24.7187 22.189C24.1307 22.189 23.5707 22.326 23.0777 22.586L20.0977 19.605H20.8497C26.9607 19.605 28.1917 14.861 28.1917 10.965C28.1917 4.785 23.8437 0 17.3767 0C16.3377 0 15.6137 0.752 15.6137 1.846V9.994H10.4867L5.0857 4.594C4.7717 4.279 4.4297 4.143 3.9927 4.143H1.0257C0.4647 4.143 -0.0003 4.607 -0.0003 5.168C-0.0003 5.728 0.4647 6.207 1.0257 6.207H3.8007L7.5877 9.994H4.4707C3.9377 9.994 3.5137 10.418 3.5137 10.951C3.5137 11.484 3.9377 11.922 4.4707 11.922H4.7987L5.3867 15.053C5.9067 17.883 8.2717 19.605 12.1267 19.605H12.6877L9.9257 22.367C9.3787 22.08 8.7497 21.916 8.0667 21.916C5.8787 21.916 4.1837 23.625 4.1837 25.799C4.1837 27.986 5.8787 29.695 8.0667 29.695ZM17.5407 2.611C17.5407 2.242 17.8007 1.996 18.1697 1.996C21.1637 1.996 25.7437 4.252 26.2087 9.994H17.5407ZM12.1267 17.678C9.2967 17.678 7.6567 16.543 7.3007 14.697L6.7407 11.922H26.2227C26.0447 14.656 24.9787 17.678 20.8497 17.678ZM11.8537 24.896C11.7577 24.5 11.6077 24.131 11.4157 23.803L15.6137 19.605H17.1857L21.5747 23.994C21.4237 24.281 21.3007 24.582 21.2187 24.896ZM8.0667 27.891C6.9047 27.891 5.9747 26.961 5.9747 25.799C5.9747 24.623 6.9047 23.707 8.0667 23.707C9.2427 23.707 10.1587 24.623 10.1587 25.799C10.1587 26.961 9.2427 27.891 8.0667 27.891ZM24.7187 27.891C23.5567 27.891 22.6137 26.961 22.6137 25.799C22.6137 24.623 23.5567 23.707 24.7187 23.707C25.8947 23.707 26.8107 24.623 26.8107 25.799C26.8107 26.961 25.8947 27.891 24.7187 27.891Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.134765625 30.2421875"
          className={className}
        >
          <path
            d="              M8.5727 30.2418C10.4177 30.2418 11.9497 29.0388 12.4277 27.3438H21.6287C22.1207 28.9158 23.5837 30.0508 25.3067 30.0508C27.4117 30.0508 29.1347 28.3278 29.1347 26.2088C29.1347 24.0898 27.4117 22.3808 25.3067 22.3808C24.7597 22.3808 24.2537 22.4898 23.7887 22.6818L21.3557 20.2348H21.3687C27.8497 20.2348 29.0257 15.1758 29.0257 11.3068C29.0257 5.2228 24.7327 -0.0002 17.8827 -0.0002C16.6797 -0.0002 15.8317 0.8748 15.8317 2.1058V10.0488H11.1567L5.5777 4.4848C5.2087 4.1148 4.7987 3.9508 4.3067 3.9508H1.2987C0.5877 3.9508 -0.0003 4.5388 -0.0003 5.2498C-0.0003 5.9468 0.5877 6.5348 1.2987 6.5348H4.0057L7.5057 10.0488H4.9357C4.2657 10.0488 3.7187 10.5958 3.7187 11.2658C3.7187 11.9488 4.2657 12.4828 4.9357 12.4828H5.0587L5.6187 15.4488C6.1657 18.3888 8.5857 20.1938 12.5237 20.2348L10.2267 22.5308C9.7207 22.2988 9.1597 22.1758 8.5727 22.1758C6.3167 22.1758 4.5387 23.9668 4.5387 26.2088C4.5387 28.4648 6.3167 30.2418 8.5727 30.2418ZM18.2797 3.0758C18.2797 2.7478 18.4977 2.5288 18.8397 2.5288C21.8747 2.5288 25.9217 4.9078 26.4957 10.0488H18.2797ZM12.6597 17.8008C9.8847 17.8008 8.3807 16.7478 8.0387 14.9978L7.5337 12.4828H26.5237C26.3187 15.0528 25.2927 17.8008 21.3687 17.8008ZM12.4277 25.0608C12.3457 24.7868 12.2497 24.5278 12.1137 24.2948L16.1737 20.2348H17.6917L21.8887 24.4318C21.7927 24.6368 21.7107 24.8418 21.6427 25.0608ZM8.5727 28.2188C7.4517 28.2188 6.5627 27.3298 6.5627 26.2088C6.5627 25.0878 7.4517 24.1988 8.5727 24.1988C9.6937 24.1988 10.5687 25.0878 10.5687 26.2088C10.5687 27.3298 9.6937 28.2188 8.5727 28.2188ZM25.3067 28.2188C24.1717 28.2188 23.2967 27.3298 23.2967 26.2088C23.2967 25.0878 24.1717 24.1988 25.3067 24.1988C26.4277 24.1988 27.3027 25.0878 27.3027 26.2088C27.3027 27.3298 26.4277 28.2188 25.3067 28.2188Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.962890625 27.26171875"
          className={className}
        >
          <path
            d="              M6.8497 27.2618C8.5447 27.2618 9.8987 26.0448 10.1177 24.4178H19.5097C19.7287 26.0038 21.0687 27.1938 22.7227 27.1938C24.5277 27.1938 25.9627 25.7718 25.9627 23.9528C25.9627 22.1488 24.5277 20.7128 22.7227 20.7128C22.1207 20.7128 21.5607 20.8768 21.0957 21.1368L17.4727 17.5278H19.3727C23.6527 17.5278 25.7847 14.2048 25.7847 9.6658C25.7847 4.4298 22.8187 -0.0002 16.4337 -0.0002C15.5447 -0.0002 15.0257 0.4788 15.0257 1.3258V9.4608H9.3787L3.7597 3.8418C3.5277 3.6098 3.3907 3.5408 3.0487 3.5408H0.4927C0.2187 3.5408 -0.0003 3.7598 -0.0003 4.0328C-0.0003 4.3068 0.2187 4.5258 0.4927 4.5258H3.0487L7.9707 9.4608H3.4997C3.2407 9.4608 3.0217 9.6658 3.0217 9.9398C3.0217 10.1988 3.2407 10.4178 3.4997 10.4178H4.1287L4.7167 13.5078C5.1957 16.0648 7.2867 17.5278 10.5407 17.5278H12.0997L8.5177 21.0958C8.0387 20.8218 7.4647 20.6578 6.8497 20.6578C5.0037 20.6578 3.5547 22.1078 3.5547 23.9528C3.5547 25.8128 5.0037 27.2618 6.8497 27.2618ZM15.9827 1.5448C15.9827 1.1898 16.2147 0.9708 16.5977 0.9708C21.3417 0.9708 24.7457 3.8828 24.8277 9.4608H15.9827ZM10.5407 16.5698C7.8067 16.5698 6.0837 15.3948 5.6737 13.3438L5.0857 10.4178H24.8007C24.5957 14.0138 22.7907 16.5698 19.3727 16.5698ZM10.1177 23.4878C10.0347 22.8318 9.7477 22.2438 9.3517 21.7788L13.5897 17.5278H15.9827L20.2617 21.8198C19.8657 22.2718 19.5917 22.8458 19.5097 23.4878ZM6.8497 26.3318C5.5367 26.3318 4.4847 25.2788 4.4847 23.9528C4.4847 22.6408 5.5367 21.5878 6.8497 21.5878C8.1757 21.5878 9.2147 22.6408 9.2147 23.9528C9.2147 25.2788 8.1757 26.3318 6.8497 26.3318ZM22.7227 26.3318C21.3967 26.3318 20.3437 25.2788 20.3437 23.9528C20.3437 22.6408 21.3967 21.5878 22.7227 21.5878C24.0347 21.5878 25.0877 22.6408 25.0877 23.9528C25.0877 25.2788 24.0347 26.3318 22.7227 26.3318Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.265625 26.564453125"
          className={className}
        >
          <path
            d="              M6.4937 26.5643C8.1347 26.5643 9.4477 25.3613 9.6117 23.7753H19.0177C19.1817 25.3613 20.4937 26.5643 22.1347 26.5643C23.8847 26.5643 25.2657 25.1973 25.2657 23.4333C25.2657 21.6703 23.8847 20.3023 22.1347 20.3023C21.5337 20.3023 20.9867 20.4663 20.5077 20.7403L16.7067 16.9393H18.9497C22.6957 16.9393 25.0877 14.0273 25.0877 9.2973C25.0877 4.3473 22.5177 0.0003 16.1597 0.0003C15.3267 0.0003 14.8477 0.4233 14.8477 1.1753V9.3103H9.0647L3.3767 3.6363C3.1587 3.4313 3.0767 3.3773 2.7757 3.3773H0.3417C0.1507 3.3773 -0.0003 3.5273 -0.0003 3.7183C-0.0003 3.8963 0.1507 4.0473 0.3417 4.0473H2.8297L8.0937 9.3103H3.2267C3.0347 9.3103 2.8847 9.4613 2.8847 9.6523C2.8847 9.8303 3.0347 9.9943 3.2267 9.9943H3.9237L4.5257 13.0703C4.9907 15.5453 6.9867 16.9393 10.0897 16.9393H11.9217L8.1207 20.7403C7.6427 20.4663 7.0957 20.3023 6.4937 20.3023C4.7437 20.3023 3.3767 21.6833 3.3767 23.4333C3.3767 25.1833 4.7437 26.5643 6.4937 26.5643ZM15.5317 1.2573C15.5317 0.8883 15.7497 0.6833 16.1327 0.6833C21.4097 0.6833 24.4177 3.8143 24.4177 9.2973V9.3103H15.5317ZM10.0897 16.2563C7.3687 16.2563 5.6187 15.0803 5.1957 12.9613L4.6077 9.9943H24.3907C24.1857 13.8773 22.1347 16.2563 18.9497 16.2563ZM9.6117 23.0913C9.5297 22.3533 9.2147 21.7113 8.7227 21.2183L13.0017 16.9393H15.6267L19.9067 21.2183C19.4137 21.6973 19.0997 22.3533 19.0177 23.0913ZM6.4937 25.8813C5.1267 25.8813 4.0467 24.8003 4.0467 23.4333C4.0467 22.0663 5.1267 20.9863 6.4937 20.9863C7.8617 20.9863 8.9417 22.0663 8.9417 23.4333C8.9417 24.8003 7.8617 25.8813 6.4937 25.8813ZM22.1347 25.8813C20.7677 25.8813 19.6877 24.8003 19.6877 23.4333C19.6877 22.0663 20.7677 20.9863 22.1347 20.9863C23.5017 20.9863 24.5817 22.0663 24.5817 23.4333C24.5817 24.8003 23.5017 25.8813 22.1347 25.8813Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}