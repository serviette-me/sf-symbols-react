import { IconProps } from "../../types"

export default function Person2BadgeGearshapeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.4296875 31.021484375"
          className={className}
        >
          <path
            d="              M27.0837 13.5348C30.6247 13.5348 33.4007 10.5278 33.4007 6.7268C33.4007 3.0488 30.5567 -0.0002 27.0837 -0.0002C23.5977 -0.0002 20.7537 3.0488 20.7537 6.7268C20.7537 10.5278 23.5427 13.5348 27.0837 13.5348ZM10.8277 13.8088C13.9317 13.8088 16.3927 11.1428 16.3927 7.8068C16.3927 4.5668 13.8637 1.8868 10.8277 1.8868C7.7797 1.8868 5.2497 4.5938 5.2497 7.8068C5.2497 11.1698 7.7247 13.8088 10.8277 13.8088ZM27.0837 9.8168C25.6487 9.8168 24.4867 8.4898 24.4867 6.7268C24.4867 5.0588 25.6897 3.7188 27.0837 3.7188C28.4517 3.7188 29.6677 5.0588 29.6677 6.7128C29.6677 8.5178 28.4927 9.8168 27.0837 9.8168ZM10.8277 10.1578C9.7887 10.1578 8.9137 9.1738 8.9137 7.8068C8.9137 6.5628 9.8167 5.5368 10.8277 5.5368C11.8267 5.5368 12.7427 6.5628 12.7427 7.8068C12.7427 9.1738 11.8807 10.1578 10.8277 10.1578ZM29.5447 26.5098C29.0117 25.1288 28.9567 24.2398 28.9567 22.7908H19.3047C19.1267 22.7908 19.0857 22.6818 19.0857 22.5718C19.0857 21.1508 22.0937 18.4028 27.0837 18.4028C28.1777 18.4028 29.1757 18.5258 30.0647 18.7578C30.6797 17.5548 31.5687 16.4878 32.6077 15.6538C30.9667 15.0388 29.0797 14.6698 27.0837 14.6698C20.0977 14.6698 14.7107 18.9898 14.7107 23.4468C14.7107 25.5118 16.1057 26.5098 18.8397 26.5098ZM3.6507 26.5368H13.7817C12.6467 25.8128 12.1407 24.1168 12.2637 22.8598H4.3617C4.1977 22.8598 4.1567 22.7498 4.1567 22.6538C4.1567 20.6038 7.0407 18.3198 10.8277 18.3198C11.5667 18.3198 13.0297 18.5798 13.6307 18.7578C14.1777 17.5958 15.0527 16.6388 16.3517 15.8728C14.7797 15.1758 12.4277 14.6838 10.8277 14.6838C4.8397 14.6838 -0.0003 18.7308 -0.0003 23.2558C-0.0003 25.3478 1.2027 26.5368 3.6507 26.5368ZM38.0077 31.0218H39.2247C39.8537 31.0218 40.3597 30.6248 40.4957 30.0238L40.7837 28.8068C40.8787 28.7658 40.9607 28.7518 41.0427 28.7108L42.0817 29.3538C42.6157 29.6818 43.2717 29.6268 43.7227 29.1758L44.5837 28.3148C45.0217 27.8768 45.0627 27.2068 44.7347 26.6738L44.0917 25.6348C44.1327 25.5528 44.1597 25.4848 44.2017 25.4028L45.4177 25.1148C46.0337 24.9508 46.4297 24.4588 46.4297 23.8298V22.6408C46.4297 22.0118 46.0337 21.4918 45.4177 21.3558L44.2147 21.0688C44.1877 20.9998 44.1467 20.9038 44.1187 20.8358L44.7757 19.7558C45.0897 19.2368 45.0347 18.5528 44.5837 18.1148L43.6957 17.2678C43.2847 16.8708 42.6567 16.7618 42.1367 17.0758L41.0427 17.7458C40.9607 17.7048 40.8787 17.6918 40.7967 17.6508L40.4957 16.4198C40.3457 15.8048 39.8537 15.3948 39.2247 15.3948H38.0077C37.3657 15.3948 36.8867 15.8048 36.7367 16.4338L36.4357 17.6368C36.3537 17.6508 36.2577 17.7048 36.1757 17.7458L35.0817 17.0758C34.5897 16.7758 33.9477 16.8578 33.5237 17.2678L32.6347 18.1148C32.1837 18.5388 32.1427 19.2228 32.4707 19.7558L33.1137 20.8358C33.0727 20.9038 33.0447 20.9998 33.0037 21.0688L31.8147 21.3558C31.1857 21.5058 30.8027 22.0118 30.8027 22.6408V23.8298C30.8027 24.4588 31.2127 24.9508 31.8147 25.1148L33.0317 25.4028C33.0587 25.4848 33.0997 25.5528 33.1267 25.6348L32.4847 26.6738C32.1697 27.2068 32.1977 27.8768 32.6347 28.3148L33.5097 29.1758C33.9477 29.6128 34.6037 29.6818 35.1367 29.3538L36.1897 28.7108C36.2577 28.7518 36.3537 28.7658 36.4357 28.8068L36.7367 30.0238C36.8867 30.6248 37.3657 31.0218 38.0077 31.0218ZM38.6227 25.4158C37.4197 25.4158 36.4217 24.4178 36.4217 23.2148C36.4217 22.0118 37.4197 21.0138 38.6227 21.0138C39.8127 21.0138 40.8247 22.0118 40.8247 23.2148C40.8247 24.4178 39.8127 25.4158 38.6227 25.4158Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.677734375 30.515625"
          className={className}
        >
          <path
            d="              M26.6057 13.098C30.0097 13.098 32.7307 10.158 32.7307 6.494C32.7307 2.926 29.9687 0 26.6057 0C23.2427 0 20.4937 2.898 20.4937 6.48C20.4937 10.144 23.2147 13.098 26.6057 13.098ZM10.6097 13.303C13.5767 13.303 15.9547 10.705 15.9547 7.478C15.9547 4.334 13.5487 1.777 10.6097 1.777C7.6837 1.777 5.2637 4.375 5.2637 7.492C5.2637 10.719 7.6567 13.303 10.6097 13.303ZM26.6057 10.213C24.8827 10.213 23.4607 8.586 23.4607 6.48C23.4607 4.457 24.8967 2.898 26.6057 2.898C28.3147 2.898 29.7637 4.484 29.7637 6.494C29.7637 8.6 28.3147 10.213 26.6057 10.213ZM10.6097 10.459C9.2557 10.459 8.1077 9.16 8.1077 7.492C8.1077 5.906 9.2557 4.621 10.6097 4.621C11.9627 4.621 13.1247 5.893 13.1247 7.478C13.1247 9.16 11.9767 10.459 10.6097 10.459ZM3.2127 25.922H13.6447C12.7557 25.375 12.2497 24.117 12.3597 23.078H3.4047C3.1857 23.078 3.1037 22.969 3.1037 22.791C3.1037 20.07 6.4807 17.35 10.6097 17.35C11.8267 17.35 13.3437 17.678 14.3007 18.156C14.7927 17.309 15.4767 16.584 16.4337 15.982C14.7657 15.066 12.5367 14.519 10.6097 14.519C4.7437 14.519 -0.0003 18.607 -0.0003 23.146C-0.0003 24.951 1.0667 25.922 3.2127 25.922ZM29.4497 25.922C29.0797 24.883 28.9847 24.103 28.9847 23.023H18.1017C17.8417 23.023 17.7457 22.914 17.7457 22.723C17.7457 20.891 20.9867 17.418 26.6187 17.418C28.0957 17.418 29.4087 17.678 30.5297 18.102C31.0627 17.199 31.7597 16.406 32.5797 15.764C30.8707 14.984 28.8617 14.519 26.6187 14.519C19.4137 14.519 14.4647 19.277 14.4647 23.283C14.4647 25.074 15.6957 25.922 18.2107 25.922ZM37.6247 30.516H38.8147C39.3477 30.516 39.7577 30.187 39.8807 29.668L40.1817 28.383C40.3187 28.342 40.4827 28.287 40.6057 28.219L41.7267 28.902C42.1637 29.176 42.6977 29.148 43.0797 28.752L43.9137 27.918C44.2837 27.549 44.3107 27.016 44.0237 26.551L43.3677 25.443C43.4357 25.307 43.4767 25.184 43.5317 25.047L44.8167 24.746C45.3357 24.609 45.6777 24.199 45.6777 23.68V22.49C45.6777 21.971 45.3227 21.561 44.8167 21.437L43.5447 21.137C43.4907 20.986 43.4357 20.85 43.3807 20.74L44.0777 19.592C44.3517 19.154 44.2967 18.594 43.9277 18.238L43.0667 17.404C42.7107 17.062 42.1917 16.967 41.7537 17.24L40.6057 17.951C40.4547 17.869 40.3187 17.828 40.1957 17.773L39.8807 16.475C39.7577 15.969 39.3477 15.627 38.8147 15.627H37.6247C37.0777 15.627 36.6817 15.982 36.5587 16.488L36.2577 17.76C36.0937 17.814 35.9437 17.869 35.8067 17.951L34.6717 17.24C34.2617 16.98 33.7287 17.049 33.3597 17.404L32.5117 18.238C32.1427 18.594 32.0747 19.141 32.3477 19.592L33.0587 20.74C32.9907 20.85 32.9357 21 32.8807 21.137L31.6227 21.437C31.1037 21.574 30.7617 21.984 30.7617 22.49V23.68C30.7617 24.199 31.1037 24.609 31.6227 24.746L32.9087 25.047C32.9627 25.184 33.0037 25.307 33.0587 25.443L32.4027 26.564C32.1287 27.016 32.1567 27.549 32.5257 27.918L33.3457 28.752C33.7287 29.135 34.2617 29.176 34.6997 28.902L35.8337 28.219C35.9707 28.301 36.1207 28.342 36.2577 28.383L36.5587 29.668C36.6817 30.174 37.0777 30.516 37.6247 30.516ZM38.2267 25.32C36.9827 25.32 35.9847 24.309 35.9847 23.078C35.9847 21.848 36.9827 20.836 38.2267 20.836C39.4297 20.822 40.4687 21.848 40.4687 23.078C40.4687 24.309 39.4297 25.32 38.2267 25.32Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.07421875 30.775390625"
          className={className}
        >
          <path
            d="              M26.8657 13.3164C30.3247 13.3164 33.0857 10.3364 33.0857 6.6034C33.0857 2.9804 30.2837 0.0004 26.8657 0.0004C23.4337 0.0004 20.6307 2.9664 20.6307 6.6034C20.6307 10.3364 23.3927 13.3164 26.8657 13.3164ZM10.7187 13.5624C13.7537 13.5624 16.1877 10.9234 16.1877 7.6424C16.1877 4.4574 13.7267 1.8184 10.7187 1.8184C7.7247 1.8184 5.2637 4.4844 5.2637 7.6424C5.2637 10.9514 7.6977 13.5624 10.7187 13.5624ZM26.8657 9.9944C25.2927 9.9944 24.0077 8.5314 24.0077 6.6034C24.0077 4.7714 25.3207 3.3224 26.8657 3.3224C28.3827 3.3224 29.7087 4.7854 29.7087 6.6034C29.7087 8.5444 28.4097 9.9944 26.8657 9.9944ZM10.7187 10.2944C9.5427 10.2944 8.5317 9.1604 8.5317 7.6424C8.5317 6.2484 9.5567 5.0994 10.7187 5.0994C11.8947 5.0994 12.9197 6.2344 12.9197 7.6424C12.9197 9.1604 11.9217 10.2944 10.7187 10.2944ZM29.5037 26.2224C29.0387 25.0054 28.9707 24.1714 28.9707 22.9004H18.7437C18.5257 22.9004 18.4567 22.7774 18.4567 22.6274C18.4567 21.0274 21.5607 17.9234 26.8657 17.9234C28.1367 17.9234 29.2847 18.1154 30.2837 18.4434C30.8577 17.3774 31.6507 16.4474 32.5937 15.6954C30.9257 15.0114 28.9707 14.5874 26.8657 14.5874C19.7837 14.5874 14.6017 19.1134 14.6017 23.3654C14.6017 25.2934 15.9137 26.2224 18.5387 26.2224ZM3.4457 26.2364H13.7127C12.7017 25.5934 12.1957 24.1034 12.3047 22.9554H3.9097C3.7187 22.9554 3.6507 22.8454 3.6507 22.7094C3.6507 20.3434 6.7817 17.8554 10.7187 17.8554C11.6897 17.8554 13.1797 18.1424 13.9457 18.4574C14.4647 17.4454 15.2437 16.5974 16.3927 15.9144C14.7657 15.1214 12.4827 14.6014 10.7187 14.6014C4.7987 14.6014 -0.0003 18.6624 -0.0003 23.2014C-0.0003 25.1564 1.1487 26.2364 3.4457 26.2364ZM37.8297 30.7754H39.0337C39.6077 30.7754 40.0727 30.4064 40.2087 29.8454L40.4957 28.6014C40.6187 28.5604 40.7287 28.5194 40.8377 28.4644L41.9177 29.1344C42.3967 29.4354 42.9977 29.3944 43.4217 28.9704L44.2697 28.1234C44.6657 27.7124 44.7067 27.1114 44.4067 26.6054L43.7497 25.5254C43.8047 25.4294 43.8317 25.3344 43.8867 25.2384L45.1307 24.9234C45.7047 24.7874 46.0747 24.3364 46.0747 23.7484V22.5584C46.0747 21.9844 45.6917 21.5194 45.1307 21.3824L43.9007 21.0954C43.8597 20.9864 43.8187 20.8634 43.7637 20.7814L44.4477 19.6734C44.7347 19.1954 44.6937 18.5664 44.2697 18.1694L43.3947 17.3224C43.0117 16.9534 42.4377 16.8434 41.9587 17.1444L40.8377 17.8414C40.7287 17.7734 40.6187 17.7464 40.5097 17.7054L40.2087 16.4334C40.0727 15.8734 39.6077 15.4904 39.0337 15.4904H37.8297C37.2287 15.4904 36.7907 15.8734 36.6547 16.4474L36.3537 17.6914C36.2307 17.7184 36.1077 17.7734 35.9977 17.8414L34.8907 17.1444C34.4397 16.8574 33.8377 16.9394 33.4417 17.3224L32.5797 18.1694C32.1567 18.5664 32.1157 19.1814 32.4157 19.6734L33.0857 20.7814C33.0317 20.8634 32.9907 20.9864 32.9497 21.0954L31.7187 21.3824C31.1447 21.5194 30.7887 21.9844 30.7887 22.5584V23.7484C30.7887 24.3364 31.1587 24.7874 31.7187 24.9234L32.9767 25.2384C33.0177 25.3344 33.0587 25.4294 33.0997 25.5254L32.4437 26.6194C32.1427 27.1114 32.1837 27.7124 32.5797 28.1234L33.4277 28.9704C33.8377 29.3804 34.4397 29.4354 34.9317 29.1344L36.0257 28.4644C36.1207 28.5194 36.2437 28.5604 36.3537 28.6014L36.6547 29.8454C36.7907 30.3924 37.2287 30.7754 37.8297 30.7754ZM38.4317 25.3614C37.2147 25.3614 36.2167 24.3634 36.2167 23.1324C36.2167 21.9294 37.2147 20.9314 38.4317 20.9184C39.6347 20.9184 40.6597 21.9294 40.6597 23.1324C40.6597 24.3634 39.6347 25.3614 38.4317 25.3614Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.583984375 29.736328125"
          className={className}
        >
          <path
            d="              M26.0177 12.4138C29.2027 12.4138 31.7597 9.6248 31.7597 6.1388C31.7597 2.7478 29.1757 -0.0002 26.0177 -0.0002C22.8457 -0.0002 20.2757 2.7208 20.2757 6.1248C20.2757 9.6248 22.8317 12.4138 26.0177 12.4138ZM26.0177 10.8148C23.7757 10.8148 21.9567 8.7638 21.9567 6.1248C21.9567 3.5818 23.7887 1.5998 26.0177 1.5998C28.2457 1.5998 30.0647 3.6098 30.0647 6.1388C30.0647 8.7768 28.2457 10.8148 26.0177 10.8148ZM10.2677 12.5918C13.0427 12.5918 15.2577 10.1578 15.2577 7.0818C15.2577 4.1148 13.0297 1.7088 10.2677 1.7088C7.5197 1.7088 5.2777 4.1558 5.2777 7.0958C5.2777 10.1718 7.4927 12.5918 10.2677 12.5918ZM10.2677 11.0198C8.3807 11.0198 6.8497 9.2968 6.8497 7.0958C6.8497 5.0038 8.3947 3.2948 10.2677 3.2948C12.1547 3.2948 13.6857 4.9898 13.6857 7.0818C13.6857 9.2968 12.1547 11.0198 10.2677 11.0198ZM2.4887 24.9508H13.7537C13.2477 24.6638 12.8247 24.0348 12.8247 23.3788H2.2697C1.7777 23.3788 1.5857 23.2008 1.5857 22.7498C1.5857 19.0998 5.5777 15.8188 10.2537 15.8188C12.2497 15.8188 14.0407 16.3518 15.4907 17.3628C15.8317 16.9528 16.2287 16.5838 16.6937 16.2558C14.8747 14.9298 12.6597 14.2458 10.2537 14.2458C4.3747 14.2458 -0.0003 18.4978 -0.0003 22.8318C-0.0003 24.2538 0.8337 24.9508 2.4887 24.9508ZM29.5587 24.9508C29.4087 24.4318 29.3267 23.8988 29.2987 23.3518H16.7757C16.1597 23.3518 15.9417 23.1878 15.9417 22.7638C15.9417 20.1658 19.6057 15.8868 26.0317 15.8868C28.2327 15.8868 30.1057 16.4058 31.5817 17.2128C31.9517 16.7618 32.3477 16.3788 32.7987 16.0368C30.9807 14.9708 28.6977 14.2868 26.0317 14.2868C18.7307 14.2868 14.2457 19.3728 14.2457 22.9278C14.2457 24.3088 15.2027 24.9508 17.2127 24.9508ZM37.1057 29.7358H38.2407C38.6507 29.7358 38.9647 29.4898 39.0607 29.0668L39.3747 27.7538C39.5667 27.6988 39.7847 27.6168 39.9627 27.5218L41.1247 28.2188C41.4667 28.4378 41.8497 28.4378 42.1637 28.1228L42.9567 27.3168C43.2307 27.0158 43.2717 26.6328 43.0387 26.2498L42.3557 25.1018C42.4647 24.9098 42.5197 24.7458 42.5877 24.5688L43.9007 24.2538C44.3247 24.1578 44.5837 23.8298 44.5837 23.4198V22.2848C44.5837 21.8888 44.2967 21.5878 43.9007 21.4918L42.6017 21.1638C42.5197 20.9318 42.4377 20.7678 42.3687 20.6168L43.0937 19.4418C43.3127 19.0858 43.2577 18.6618 42.9847 18.3888L42.1637 17.5958C41.8767 17.3088 41.4667 17.2398 41.1387 17.4448L39.9627 18.1838C39.7437 18.0738 39.5667 18.0198 39.3747 17.9508L39.0607 16.6248C38.9647 16.2148 38.6507 15.9418 38.2407 15.9418H37.1057C36.6957 15.9418 36.3537 16.2418 36.2717 16.6248L35.9707 17.9378C35.7387 18.0198 35.5467 18.0738 35.3557 18.1838L34.1937 17.4448C33.8787 17.2538 33.4687 17.3088 33.1677 17.5958L32.3887 18.3888C32.1157 18.6758 32.0197 19.0858 32.2387 19.4418L32.9627 20.6168C32.9087 20.7678 32.8127 20.9588 32.7437 21.1638L31.4317 21.4918C31.0347 21.5878 30.7757 21.9018 30.7757 22.2848V23.4198C30.7757 23.8298 31.0347 24.1578 31.4317 24.2538L32.7437 24.5688C32.8397 24.7458 32.9087 24.9098 32.9907 25.1018L32.3067 26.2638C32.0877 26.6328 32.1157 27.0428 32.4027 27.3168L33.1677 28.1228C33.4687 28.4378 33.8657 28.4238 34.2207 28.2188L35.3827 27.5218C35.6017 27.6308 35.7927 27.6988 35.9707 27.7538L36.2717 29.0668C36.3537 29.4628 36.6957 29.7358 37.1057 29.7358ZM37.6797 25.0738C36.4217 25.0738 35.4517 24.0898 35.4517 22.8458C35.4517 21.6428 36.4217 20.6308 37.6797 20.6168C38.8687 20.6038 39.8947 21.6428 39.8947 22.8458C39.8947 24.0898 38.8687 25.0738 37.6797 25.0738Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.185546875 30.1875"
          className={className}
        >
          <path
            d="              M26.3187 12.8246C29.6137 12.8246 32.2927 9.9256 32.2927 6.3576C32.2927 2.8436 29.5997 -0.0004 26.3187 -0.0004C23.0097 -0.0004 20.3297 2.8026 20.3297 6.3296C20.3297 9.9116 23.0097 12.8246 26.3187 12.8246ZM10.4727 12.9746C13.3437 12.9746 15.6817 10.4176 15.6817 7.2596C15.6817 4.1976 13.3437 1.7086 10.4727 1.7086C7.6157 1.7086 5.2637 4.2386 5.2637 7.2866C5.2637 10.4316 7.6017 12.9746 10.4727 12.9746ZM26.3187 10.4586C24.4047 10.4586 22.8047 8.6406 22.8047 6.3296C22.8047 4.0746 24.3907 2.3656 26.3187 2.3656C28.2187 2.3656 29.8187 4.1016 29.8187 6.3576C29.8187 8.6676 28.2047 10.4586 26.3187 10.4586ZM10.4727 10.6366C8.9137 10.6366 7.5877 9.1466 7.5877 7.2866C7.5877 5.4956 8.9007 4.0336 10.4727 4.0336C12.0587 4.0336 13.3577 5.4686 13.3577 7.2596C13.3577 9.1466 12.0447 10.6366 10.4727 10.6366ZM2.9397 25.5386H13.5627C12.8247 25.1016 12.3187 24.1306 12.4137 23.2286H2.7887C2.5297 23.2286 2.4197 23.1056 2.4197 22.8726C2.4197 19.7286 6.1117 16.7206 10.4587 16.7206C12.0037 16.7206 13.5347 17.1036 14.7247 17.7596C15.1897 17.1176 15.7497 16.5426 16.4887 16.0646C14.7517 14.9846 12.6057 14.4106 10.4587 14.4106C4.6897 14.4106 -0.0003 18.5386 -0.0003 23.0786C-0.0003 24.7046 0.9847 25.5386 2.9397 25.5386ZM29.3807 25.5386C29.1207 24.7456 29.0117 24.0076 28.9977 23.1736H17.3357C17.0217 23.1736 16.8987 23.0786 16.8987 22.8186C16.8987 20.7266 20.2757 16.7886 26.3187 16.7886C28.0547 16.7886 29.5727 17.1306 30.8297 17.6776C31.3087 16.9806 31.8827 16.3656 32.5527 15.8316C30.8167 14.9566 28.7107 14.4236 26.3187 14.4236C18.9767 14.4236 14.3007 19.4546 14.3007 23.1876C14.3007 24.7866 15.4357 25.5386 17.8007 25.5386ZM37.3657 30.1876H38.5547C39.0197 30.1876 39.3747 29.9006 39.4847 29.4356L39.7987 28.1226C39.9627 28.0686 40.1677 27.9866 40.3317 27.9046L41.4937 28.6016C41.8767 28.8476 42.3277 28.8336 42.6697 28.4926L43.4907 27.6586C43.8047 27.3296 43.8317 26.8926 43.5857 26.4686L42.8887 25.3206C42.9977 25.1426 43.0387 24.9926 43.1077 24.8286L44.4337 24.4996C44.8987 24.3906 45.1857 24.0356 45.1857 23.5706V22.4086C45.1857 21.9566 44.8847 21.6156 44.4337 21.5056L43.1207 21.1776C43.0527 20.9726 42.9707 20.8226 42.9027 20.6856L43.6267 19.4956C43.8727 19.0996 43.8317 18.6206 43.5037 18.3066L42.6697 17.4996C42.3417 17.1716 41.8907 17.1036 41.5217 17.3356L40.3317 18.0746C40.1407 17.9786 39.9627 17.9236 39.7987 17.8696L39.4847 16.5156C39.3747 16.0776 39.0197 15.7776 38.5547 15.7776H37.3657C36.9007 15.7776 36.5447 16.0916 36.4357 16.5296L36.1347 17.8416C35.9297 17.9236 35.7517 17.9786 35.5747 18.0746L34.3987 17.3356C34.0427 17.1176 33.5777 17.1716 33.2497 17.4996L32.4437 18.3066C32.1157 18.6346 32.0337 19.0996 32.2797 19.4956L33.0177 20.6856C32.9497 20.8226 32.8677 20.9996 32.7987 21.1776L31.4867 21.5056C31.0347 21.6156 30.7477 21.9706 30.7477 22.4086V23.5706C30.7477 24.0356 31.0487 24.3906 31.4867 24.4996L32.8127 24.8286C32.8947 24.9926 32.9497 25.1426 33.0317 25.3206L32.3337 26.4826C32.1017 26.8926 32.1287 27.3436 32.4437 27.6586L33.2497 28.4926C33.5777 28.8336 34.0427 28.8476 34.4257 28.6016L35.6017 27.9046C35.7927 27.9996 35.9707 28.0686 36.1347 28.1226L36.4357 29.4356C36.5447 29.8866 36.9007 30.1876 37.3657 30.1876ZM37.9667 25.2516C36.6957 25.2516 35.7107 24.2406 35.7107 22.9826C35.7107 21.7516 36.6957 20.7266 37.9667 20.7126C39.1977 20.6996 40.2367 21.7516 40.2367 22.9826C40.2367 24.2406 39.1977 25.2516 37.9667 25.2516Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.912109375 29.99609375"
          className={className}
        >
          <path
            d="              M26.1407 12.6603C29.3947 12.6603 32.0467 9.7892 32.0467 6.2753C32.0467 2.8023 29.3947 0.0003 26.1407 0.0003C22.8727 0.0003 20.2347 2.7482 20.2347 6.2482C20.2347 9.7753 22.9007 12.6603 26.1407 12.6603ZM10.3907 12.7833C13.2067 12.7833 15.5177 10.2543 15.5177 7.1503C15.5177 4.1152 13.2347 1.6683 10.3907 1.6683C7.5747 1.6683 5.2637 4.1563 5.2637 7.1773C5.2637 10.2673 7.5747 12.7833 10.3907 12.7833ZM26.1407 10.5953C24.1307 10.5953 22.4357 8.6683 22.4357 6.2482C22.4357 3.8553 24.1037 2.0643 26.1407 2.0643C28.1777 2.0643 29.8457 3.8962 29.8457 6.2753C29.8457 8.6953 28.1507 10.5953 26.1407 10.5953ZM10.3907 10.7463C8.7227 10.7463 7.3007 9.1463 7.3007 7.1773C7.3007 5.2503 8.7087 3.7052 10.3907 3.7052C12.1137 3.7052 13.4937 5.2222 13.4937 7.1503C13.4937 9.1463 12.0727 10.7463 10.3907 10.7463ZM2.7887 25.3203H13.5217C12.8657 24.9513 12.3597 24.1313 12.4547 23.2972H2.4477C2.1737 23.2972 2.0367 23.1873 2.0367 22.9143C2.0367 19.5233 5.9067 16.3653 10.3767 16.3653C12.0997 16.3653 13.6447 16.7753 14.9707 17.5543C15.4087 17.0083 15.9007 16.5293 16.5157 16.0923C14.7517 14.9433 12.6327 14.3423 10.3767 14.3423C4.6487 14.3423 -0.0003 18.4983 -0.0003 23.0373C-0.0003 24.5683 0.9297 25.3203 2.7887 25.3203ZM29.3397 25.3203C29.1347 24.6503 29.0257 23.9673 29.0117 23.2563H16.9117C16.5567 23.2563 16.4067 23.1603 16.4067 22.8733C16.4067 20.6172 19.8787 16.4333 26.1547 16.4333C28.0277 16.4333 29.6547 16.8163 30.9937 17.4453C31.4457 16.8433 31.9647 16.3243 32.5387 15.8733C30.7757 14.9433 28.6287 14.3693 26.1547 14.3693C18.7307 14.3693 14.2047 19.5513 14.2047 23.1333C14.2047 24.6363 15.2847 25.3203 17.5687 25.3203ZM37.2287 29.9963H38.4047C38.8277 29.9963 39.1567 29.7363 39.2517 29.3123L39.5797 27.9593C39.7717 27.9183 39.9907 27.8223 40.1817 27.7263L41.3577 28.4373C41.7267 28.6703 42.1097 28.6703 42.4377 28.3423L43.2437 27.5213C43.5317 27.2073 43.5727 26.8243 43.3267 26.4273L42.6287 25.2383C42.7517 25.0603 42.7927 24.8833 42.8617 24.6913L44.2147 24.3773C44.6387 24.2673 44.9117 23.9393 44.9117 23.5153V22.3533C44.9117 21.9433 44.6247 21.6423 44.2147 21.5333L42.8887 21.2053C42.7927 20.9723 42.7107 20.7953 42.6427 20.6443L43.3807 19.4273C43.5997 19.0723 43.5587 18.6353 43.2717 18.3473L42.4377 17.5543C42.1367 17.2403 41.7267 17.1722 41.3847 17.3903L40.1817 18.1423C39.9627 18.0333 39.7717 17.9783 39.5797 17.9102L39.2517 16.5433C39.1567 16.1333 38.8277 15.8593 38.4047 15.8593H37.2287C36.8047 15.8593 36.4627 16.1463 36.3807 16.5433L36.0667 17.8963C35.8337 17.9783 35.6427 18.0333 35.4377 18.1423L34.2477 17.3903C33.9337 17.1853 33.4957 17.2403 33.1957 17.5543L32.3887 18.3473C32.1017 18.6483 32.0197 19.0723 32.2387 19.4273L32.9907 20.6443C32.9217 20.7953 32.8397 21.0003 32.7577 21.2053L31.4177 21.5333C31.0077 21.6423 30.7347 21.9572 30.7347 22.3533V23.5153C30.7347 23.9393 31.0077 24.2673 31.4177 24.3773L32.7717 24.6913C32.8537 24.8833 32.9217 25.0603 33.0037 25.2383L32.3067 26.4413C32.0877 26.8243 32.1157 27.2343 32.4027 27.5213L33.1957 28.3423C33.4957 28.6703 33.9067 28.6563 34.2757 28.4373L35.4647 27.7263C35.6977 27.8363 35.8747 27.9183 36.0667 27.9593L36.3807 29.3123C36.4627 29.7223 36.8047 29.9963 37.2287 29.9963ZM37.8297 25.2113C36.5447 25.2113 35.5467 24.1993 35.5467 22.9413C35.5467 21.6833 36.5447 20.6583 37.8297 20.6443C39.0607 20.6313 40.0997 21.6833 40.0997 22.9413C40.0997 24.1993 39.0607 25.2113 37.8297 25.2113Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.404296875 30.32421875"
          className={className}
        >
          <path
            d="              M26.4417 12.9477C29.7777 12.9477 32.4847 10.0217 32.4847 6.4117C32.4847 2.8847 29.7637 -0.0003 26.4417 -0.0003C23.1057 -0.0003 20.3987 2.8437 20.3987 6.3987C20.3987 10.0077 23.1057 12.9477 26.4417 12.9477ZM10.5277 13.1117C13.4397 13.1117 15.8047 10.5407 15.8047 7.3557C15.8047 4.2517 13.4397 1.7367 10.5277 1.7367C7.6427 1.7367 5.2637 4.2927 5.2637 7.3687C5.2637 10.5547 7.6287 13.1117 10.5277 13.1117ZM26.4417 10.3497C24.6097 10.3497 23.0917 8.6137 23.0917 6.3987C23.0917 4.2387 24.6097 2.5977 26.4417 2.5977C28.2597 2.5977 29.7907 4.2657 29.7907 6.4117C29.7907 8.6407 28.2597 10.3497 26.4417 10.3497ZM10.5277 10.5547C9.0647 10.5547 7.8067 9.1597 7.8067 7.3687C7.8067 5.6737 9.0507 4.2797 10.5277 4.2797C12.0177 4.2797 13.2617 5.6467 13.2617 7.3557C13.2617 9.1597 12.0177 10.5547 10.5277 10.5547ZM3.0627 25.7027H13.6037C12.7967 25.2247 12.2907 24.1307 12.3867 23.1607H3.0487C2.8167 23.1607 2.7067 23.0507 2.7067 22.8317C2.7067 19.8657 6.2757 16.9937 10.5277 16.9937C11.9217 16.9937 13.4527 17.3497 14.5467 17.9377C15.0117 17.1997 15.6267 16.5567 16.4607 16.0237C14.7517 15.0117 12.5647 14.4517 10.5277 14.4517C4.7167 14.4517 -0.0003 18.5797 -0.0003 23.1187C-0.0003 24.8147 1.0257 25.7027 3.0627 25.7027ZM29.4087 25.7027C29.0937 24.8007 28.9977 24.0487 28.9847 23.1057H17.6637C17.3767 23.1057 17.2677 23.0097 17.2677 22.7777C17.2677 20.7947 20.5767 17.0627 26.4417 17.0627C28.0687 17.0627 29.5037 17.3637 30.6937 17.8557C31.1997 17.0767 31.8277 16.3787 32.5667 15.8047C30.8437 14.9707 28.7657 14.4647 26.4417 14.4647C19.1677 14.4647 14.3687 19.3727 14.3687 23.2287C14.3687 24.9107 15.5447 25.7027 17.9787 25.7027ZM37.4747 30.3247H38.6637C39.1567 30.3247 39.5387 30.0237 39.6487 29.5447L39.9627 28.2327C40.1267 28.1917 40.3047 28.1227 40.4547 28.0407L41.5897 28.7387C41.9997 28.9847 42.4787 28.9707 42.8477 28.6017L43.6677 27.7677C44.0097 27.4257 44.0367 26.9477 43.7777 26.5097L43.0937 25.3617C43.1897 25.2107 43.2307 25.0747 43.2847 24.9237L44.5977 24.6097C45.0897 24.4867 45.4047 24.1037 45.4047 23.6247V22.4497C45.4047 21.9707 45.0767 21.5877 44.5977 21.4787L43.3127 21.1637C43.2437 20.9867 43.1617 20.8357 43.1077 20.7127L43.8187 19.5367C44.0777 19.1267 44.0367 18.6077 43.6957 18.2797L42.8337 17.4587C42.5057 17.1307 42.0137 17.0487 41.6177 17.2947L40.4547 18.0197C40.2777 17.9237 40.1267 17.8827 39.9627 17.8277L39.6487 16.5017C39.5387 16.0237 39.1567 15.7087 38.6637 15.7087H37.4747C36.9827 15.7087 36.5997 16.0367 36.4907 16.5017L36.1897 17.8147C35.9977 17.8687 35.8337 17.9237 35.6697 18.0197L34.5217 17.2947C34.1387 17.0627 33.6467 17.1177 33.3047 17.4587L32.4707 18.2797C32.1287 18.6207 32.0607 19.1137 32.3067 19.5367L33.0317 20.7127C32.9627 20.8357 32.9087 20.9997 32.8267 21.1637L31.5407 21.4787C31.0627 21.6017 30.7617 21.9707 30.7617 22.4497V23.6247C30.7617 24.1037 31.0767 24.4867 31.5407 24.6097L32.8537 24.9237C32.9217 25.0747 32.9767 25.2107 33.0447 25.3617L32.3617 26.5237C32.1157 26.9477 32.1427 27.4397 32.4847 27.7677L33.2907 28.6017C33.6467 28.9707 34.1387 28.9847 34.5487 28.7387L35.6977 28.0407C35.8747 28.1367 36.0387 28.1917 36.1897 28.2327L36.4907 29.5447C36.5997 30.0097 36.9827 30.3247 37.4747 30.3247ZM38.0767 25.2797C36.8187 25.2797 35.8337 24.2677 35.8337 23.0237C35.8337 21.7927 36.8187 20.7817 38.0767 20.7677C39.2927 20.7537 40.3317 21.7927 40.3317 23.0237C40.3317 24.2677 39.2927 25.2797 38.0767 25.2797Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.146484375 29.39453125"
          className={className}
        >
          <path
            d="              M25.8397 12.0998C28.9567 12.0998 31.3767 9.4198 31.3767 5.9887C31.3767 2.7067 28.9027 -0.0003 25.8397 -0.0003C22.7907 -0.0003 20.3167 2.6797 20.3167 5.9748C20.3167 9.4198 22.7367 12.0998 25.8397 12.0998ZM25.8397 11.1148C23.3107 11.1148 21.3277 8.8867 21.3277 5.9748C21.3277 3.2127 23.3657 0.9847 25.8397 0.9847C28.3417 0.9847 30.3517 3.2398 30.3517 5.9887C30.3517 8.8867 28.3687 11.1148 25.8397 11.1148ZM10.1037 12.3598C12.8107 12.3598 14.9297 10.0348 14.9297 7.0138C14.9297 4.1427 12.7557 1.7778 10.1037 1.7778C7.4377 1.7778 5.2907 4.1558 5.2907 7.0138C5.2907 10.0348 7.3827 12.3598 10.1037 12.3598ZM10.1037 11.3748C7.9437 11.3748 6.2617 9.5018 6.2617 7.0138C6.2617 4.7028 7.9847 2.7617 10.1037 2.7617C12.2087 2.7617 13.9457 4.6758 13.9457 7.0138C13.9457 9.5018 12.2637 11.3748 10.1037 11.3748ZM2.1057 24.4588H14.0817C13.7407 24.2818 13.4257 23.9258 13.3167 23.5018H2.0507C1.2717 23.5018 0.9847 23.2288 0.9847 22.5318C0.9847 18.5258 5.1267 15.0938 10.0767 15.0938C12.4417 15.0938 14.5747 15.7908 16.1877 17.1168C16.4197 16.8848 16.6527 16.6658 16.9257 16.4608C15.0527 14.9298 12.6737 14.1368 10.0767 14.1368C4.0197 14.1368 -0.0003 18.5118 -0.0003 22.5588C-0.0003 23.8438 0.6977 24.4588 2.1057 24.4588ZM29.8457 24.4588C29.7637 24.1448 29.7087 23.8168 29.6957 23.4748H16.5977C15.6267 23.4748 15.3267 23.2418 15.3267 22.6138C15.3267 19.5648 19.2367 15.1618 25.8677 15.1618C28.4927 15.1618 30.6937 15.8728 32.3747 16.9117C32.6207 16.6528 32.8677 16.4478 33.1547 16.2418C31.2537 14.9978 28.7927 14.1778 25.8677 14.1778C18.7437 14.1778 14.3007 19.1268 14.3007 22.6678C14.3007 23.8988 15.0797 24.4588 16.7347 24.4588ZM36.9277 29.3948H38.0217C38.4177 29.3948 38.7187 29.1488 38.8147 28.7518L39.1157 27.4808C39.2927 27.4258 39.5117 27.3438 39.6897 27.2478L40.7967 27.9318C41.1387 28.1368 41.5077 28.1368 41.8087 27.8358L42.5747 27.0568C42.8477 26.7698 42.8747 26.4008 42.6427 26.0318L41.9867 24.9098C42.0957 24.7328 42.1507 24.5818 42.2187 24.4048L43.4767 24.0898C43.8867 24.0078 44.1467 23.6938 44.1467 23.2968V22.2028C44.1467 21.8068 43.8727 21.5328 43.4767 21.4378L42.2327 21.1097C42.1507 20.9048 42.0687 20.7398 42.0137 20.5898L42.6977 19.4418C42.9157 19.1138 42.8617 18.7028 42.6017 18.4297L41.8087 17.6778C41.5347 17.3908 41.1387 17.3358 40.8247 17.5278L39.6897 18.2388C39.4707 18.1288 39.2927 18.0738 39.1157 18.0058L38.8147 16.7347C38.7187 16.3378 38.4177 16.0778 38.0217 16.0778H36.9277C36.5317 16.0778 36.2167 16.3518 36.1347 16.7347L35.8477 17.9918C35.6157 18.0738 35.4377 18.1288 35.2457 18.2388L34.1247 17.5278C33.8247 17.3358 33.4137 17.3908 33.1267 17.6778L32.3887 18.4297C32.1157 18.7168 32.0197 19.1138 32.2247 19.4418L32.9357 20.5898C32.8807 20.7398 32.7987 20.9178 32.7167 21.1097L31.4587 21.4378C31.0767 21.5328 30.8167 21.8208 30.8167 22.2028V23.2968C30.8167 23.6938 31.0767 24.0078 31.4587 24.0898L32.7167 24.4048C32.8127 24.5818 32.8807 24.7328 32.9497 24.9098L32.2927 26.0448C32.0877 26.4008 32.1157 26.7968 32.3887 27.0568L33.1267 27.8358C33.4137 28.1368 33.8107 28.1228 34.1387 27.9318L35.2737 27.2478C35.4927 27.3578 35.6697 27.4258 35.8477 27.4808L36.1347 28.7518C36.2167 29.1348 36.5317 29.3948 36.9277 29.3948ZM37.4747 24.8968C36.2717 24.8968 35.3277 23.9398 35.3277 22.7498C35.3277 21.5738 36.2717 20.6038 37.4747 20.5898C38.6367 20.5628 39.6207 21.5738 39.6207 22.7498C39.6207 23.9398 38.6367 24.8968 37.4747 24.8968Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.9140625 29.23046875"
          className={className}
        >
          <path
            d="              M25.7577 11.9357C28.8207 11.9357 31.1717 9.3247 31.1717 5.9067C31.1717 2.6797 28.7517 -0.0003 25.7577 -0.0003C22.7777 -0.0003 20.3297 2.6657 20.3297 5.9067C20.3297 9.3247 22.6817 11.9357 25.7577 11.9357ZM25.7577 11.2657C23.0777 11.2657 20.9997 8.9547 20.9997 5.9067C20.9997 3.0347 23.1467 0.6697 25.7577 0.6697C28.3827 0.6697 30.5017 3.0487 30.5017 5.9067C30.5017 8.9547 28.4377 11.2657 25.7577 11.2657ZM10.0077 12.2367C12.7017 12.2367 14.7517 9.9807 14.7517 6.9727C14.7517 4.1567 12.6057 1.8187 10.0077 1.8187C7.3967 1.8187 5.2907 4.1697 5.2907 6.9727C5.2907 9.9667 7.3277 12.2367 10.0077 12.2367ZM10.0077 11.5667C7.7107 11.5667 5.9607 9.5977 5.9607 6.9727C5.9607 4.5387 7.7657 2.4887 10.0077 2.4887C12.2367 2.4887 14.0817 4.5257 14.0817 6.9727C14.0817 9.5977 12.3047 11.5667 10.0077 11.5667ZM1.9137 24.2127H14.2457C13.9997 24.1037 13.7267 23.8707 13.5627 23.5567H1.9277C1.0117 23.5567 0.6837 23.2417 0.6837 22.4357C0.6837 18.2387 4.9087 14.7247 9.9807 14.7247C12.5367 14.7247 14.8477 15.5037 16.5427 17.0077C16.7067 16.8577 16.8847 16.7207 17.0487 16.5707C15.1347 14.9297 12.6877 14.0687 9.9807 14.0687C3.8277 14.0687 -0.0003 18.5117 -0.0003 22.4217C-0.0003 23.6387 0.6287 24.2127 1.9137 24.2127ZM29.9957 24.2127C29.9417 23.9937 29.9137 23.7757 29.9007 23.5427H16.5017C15.3537 23.5427 14.9977 23.2837 14.9977 22.5317C14.9977 19.2497 19.0447 14.8067 25.7847 14.8067C28.6287 14.8067 31.0077 15.5997 32.7717 16.7477C32.9627 16.6117 33.1267 16.4887 33.3317 16.3517C31.3907 15.0257 28.8337 14.1227 25.7847 14.1227C18.7437 14.1227 14.3277 19.0037 14.3277 22.5317C14.3277 23.6937 15.0257 24.2127 16.4887 24.2127ZM36.8457 29.2307H37.8987C38.3087 29.2307 38.5957 28.9847 38.6917 28.5877L38.9787 27.3437C39.1567 27.3027 39.3617 27.2067 39.5387 27.1247L40.6327 27.7817C40.9747 27.9997 41.3297 27.9997 41.6307 27.6997L42.3827 26.9337C42.6427 26.6467 42.6837 26.2907 42.4517 25.9217L41.8087 24.8277C41.9047 24.6507 41.9587 24.4867 42.0277 24.3227L43.2717 24.0217C43.6677 23.9397 43.9137 23.6247 43.9137 23.2417V22.1617C43.9137 21.7797 43.6547 21.5057 43.2717 21.4097L42.0547 21.0957C41.9587 20.8907 41.8767 20.7267 41.8227 20.5757L42.5057 19.4547C42.7107 19.1267 42.6567 18.7167 42.3967 18.4567L41.6307 17.7187C41.3577 17.4317 40.9747 17.3767 40.6597 17.5687L39.5387 18.2657C39.3337 18.1697 39.1567 18.1157 38.9787 18.0467L38.6917 16.7887C38.5957 16.4067 38.3087 16.1467 37.8987 16.1467H36.8457C36.4627 16.1467 36.1487 16.4197 36.0527 16.7887L35.7797 18.0197C35.5467 18.1157 35.3827 18.1697 35.1917 18.2657L34.0837 17.5687C33.7967 17.3767 33.3867 17.4317 33.1137 17.7187L32.3747 18.4567C32.1157 18.7437 32.0197 19.1267 32.2247 19.4547L32.9217 20.5757C32.8677 20.7267 32.7847 20.9047 32.7167 21.0957L31.4727 21.4097C31.0897 21.5057 30.8437 21.7927 30.8437 22.1617V23.2417C30.8437 23.6247 31.0897 23.9397 31.4727 24.0217L32.7167 24.3227C32.7987 24.4867 32.8677 24.6507 32.9357 24.8277L32.2927 25.9357C32.0877 26.2907 32.1157 26.6737 32.3747 26.9337L33.1137 27.6997C33.3867 27.9997 33.7697 27.9727 34.1117 27.7817L35.2187 27.1247C35.4237 27.2207 35.6017 27.3027 35.7797 27.3437L36.0527 28.5877C36.1487 28.9707 36.4627 29.2307 36.8457 29.2307ZM37.3787 24.8007C36.1897 24.8007 35.2737 23.8577 35.2737 22.6957C35.2737 21.5467 36.1897 20.5897 37.3787 20.5757C38.5137 20.5487 39.4847 21.5467 39.4847 22.6957C39.4847 23.8577 38.5137 24.8007 37.3787 24.8007Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}