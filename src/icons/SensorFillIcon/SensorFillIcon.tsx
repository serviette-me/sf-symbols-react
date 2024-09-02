import { IconProps } from "../../types"

export default function SensorFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.640625 25.40234375"
          className={className}
        >
          <path
            d="              M5.3597 25.4023H20.0157C23.4067 25.4023 25.3747 23.4203 25.3747 20.0433V5.3593C25.3747 1.9823 23.4067 0.0003 20.0157 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9823 -0.0003 5.3593V20.0433C-0.0003 23.4203 1.9827 25.4023 5.3597 25.4023ZM31.4867 17.6773C32.0877 18.3753 33.1407 18.3753 33.8107 17.6233C35.6427 15.5723 36.6407 12.8923 36.6407 10.0083C36.6407 7.1093 35.6427 4.4293 33.8107 2.3793C33.1407 1.6273 32.0877 1.6273 31.4867 2.3243C30.8987 3.0083 31.1037 3.8423 31.6637 4.5113C32.9767 6.0023 33.6467 7.8613 33.6467 10.0083C33.6467 12.1403 32.9767 14.0003 31.6637 15.4903C31.1037 16.1603 30.8987 16.9943 31.4867 17.6773ZM27.8227 14.6563C28.4097 15.3403 29.5447 15.3533 30.1737 14.5193C31.1307 13.2613 31.7047 11.6763 31.7047 10.0083C31.7047 8.3403 31.1307 6.7403 30.1737 5.4823C29.5447 4.6483 28.4097 4.6763 27.8227 5.3453C27.1937 6.0703 27.4937 6.8773 27.9587 7.5063C28.4517 8.2303 28.6977 9.0513 28.6977 10.0083C28.6977 10.9513 28.4517 11.7853 27.9587 12.4963C27.4937 13.1253 27.1937 13.9453 27.8227 14.6563ZM10.7047 14.2593C9.9257 14.2593 9.4067 13.7403 9.4067 12.9743V6.7133C9.4067 5.9473 9.9257 5.4273 10.7047 5.4273C11.4707 5.4273 12.0037 5.9473 12.0037 6.7133V12.9743C12.0037 13.7403 11.4707 14.2593 10.7047 14.2593ZM14.6567 14.2593C13.8907 14.2593 13.3577 13.7403 13.3577 12.9743V6.7133C13.3577 5.9473 13.8907 5.4273 14.6567 5.4273C15.4217 5.4273 15.9547 5.9473 15.9547 6.7133V12.9743C15.9547 13.7403 15.4217 14.2593 14.6567 14.2593ZM18.6077 14.2593C17.8417 14.2593 17.3087 13.7403 17.3087 12.9743V6.7133C17.3087 5.9473 17.8417 5.4273 18.6077 5.4273C19.3867 5.4273 19.9067 5.9473 19.9067 6.7133V12.9743C19.9067 13.7403 19.3867 14.2593 18.6077 14.2593Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.931640625 24.5546875"
          className={className}
        >
          <path
            d="              M4.8267 24.5544H19.5367C22.6547 24.5544 24.3637 22.8454 24.3637 19.7554V4.7984C24.3637 1.6954 22.6547 0.0004 19.5367 0.0004H4.8267C1.7087 0.0004 -0.0003 1.6954 -0.0003 4.7984V19.7554C-0.0003 22.8594 1.7087 24.5544 4.8267 24.5544ZM30.3107 16.6254C30.7887 17.1854 31.6507 17.1854 32.1977 16.5704C33.9607 14.5874 34.9317 12.0034 34.9317 9.2144C34.9317 6.4124 33.9607 3.8284 32.1977 1.8454C31.6507 1.2304 30.8027 1.2304 30.3247 1.7914C29.8317 2.3374 29.9827 3.0214 30.4747 3.5954C31.8147 5.1134 32.4977 7.0544 32.4977 9.2144C32.4977 11.3754 31.8147 13.3024 30.4747 14.8204C29.9827 15.3944 29.8317 16.0784 30.3107 16.6254ZM26.9067 13.6444C27.3847 14.1914 28.3007 14.2054 28.8207 13.5214C29.7367 12.3184 30.2837 10.8144 30.2837 9.2144C30.2837 7.6154 29.7367 6.0974 28.8207 4.9084C28.3007 4.2104 27.3987 4.2244 26.9067 4.7714C26.4007 5.3454 26.6327 6.0024 27.0297 6.5624C27.5767 7.3414 27.8357 8.2304 27.8357 9.2144C27.8357 10.1994 27.5767 11.0874 27.0297 11.8674C26.6327 12.4144 26.4007 13.0704 26.9067 13.6444ZM10.8147 13.4394C10.1717 13.4394 9.7347 12.9884 9.7347 12.3594V5.9064C9.7347 5.2774 10.1717 4.8264 10.8147 4.8264C11.4437 4.8264 11.8947 5.2774 11.8947 5.9064V12.3594C11.8947 12.9884 11.4437 13.4394 10.8147 13.4394ZM14.5877 13.4394C13.9587 13.4394 13.5077 12.9884 13.5077 12.3594V5.9064C13.5077 5.2774 13.9587 4.8264 14.5877 4.8264C15.2027 4.8264 15.6547 5.2774 15.6547 5.9064V12.3594C15.6547 12.9884 15.2027 13.4394 14.5877 13.4394ZM18.3477 13.4394C17.7327 13.4394 17.2677 12.9884 17.2677 12.3594V5.9064C17.2677 5.2774 17.7327 4.8264 18.3477 4.8264C18.9907 4.8264 19.4277 5.2774 19.4277 5.9064V12.3594C19.4277 12.9884 18.9907 13.4394 18.3477 13.4394Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.833984375 24.9921875"
          className={className}
        >
          <path
            d="              M5.1137 24.9922H19.7837C23.0507 24.9922 24.8967 23.1462 24.8967 19.8922V5.0862C24.8967 1.8462 23.0507 0.0002 19.7837 0.0002H5.1137C1.8597 0.0002 -0.0003 1.8462 -0.0003 5.0862V19.8922C-0.0003 23.1462 1.8597 24.9922 5.1137 24.9922ZM30.9397 17.1722C31.4727 17.8142 32.4437 17.8142 33.0447 17.1172C34.8497 15.1072 35.8337 12.4692 35.8337 9.6252C35.8337 6.7812 34.8497 4.1422 33.0447 2.1332C32.4437 1.4352 31.4867 1.4352 30.9397 2.0642C30.3927 2.6932 30.5707 3.4592 31.1037 4.0742C32.4297 5.5782 33.1137 7.4782 33.1137 9.6252C33.1137 11.7712 32.4297 13.6722 31.1037 15.1622C30.5707 15.7912 30.3927 16.5562 30.9397 17.1722ZM27.3847 14.1642C27.9317 14.7932 28.9567 14.8062 29.5317 14.0412C30.4747 12.8102 31.0217 11.2652 31.0217 9.6252C31.0217 7.9842 30.4747 6.4262 29.5317 5.2092C28.9567 4.4432 27.9317 4.4572 27.3847 5.0722C26.8247 5.7152 27.0837 6.4672 27.5217 7.0542C28.0407 7.8062 28.3007 8.6542 28.3007 9.6252C28.3007 10.5822 28.0407 11.4432 27.5217 12.1952C27.0837 12.7832 26.8107 13.5212 27.3847 14.1642ZM10.7597 13.8632C10.0487 13.8632 9.5567 13.3852 9.5567 12.6742V6.3302C9.5567 5.6332 10.0487 5.1402 10.7597 5.1402C11.4567 5.1402 11.9497 5.6332 11.9497 6.3302V12.6742C11.9497 13.3852 11.4567 13.8632 10.7597 13.8632ZM14.6157 13.8632C13.9177 13.8632 13.4257 13.3852 13.4257 12.6742V6.3302C13.4257 5.6332 13.9177 5.1402 14.6157 5.1402C15.3127 5.1402 15.8187 5.6332 15.8187 6.3302V12.6742C15.8187 13.3852 15.3127 13.8632 14.6157 13.8632ZM18.4847 13.8632C17.7867 13.8632 17.2947 13.3852 17.2947 12.6742V6.3302C17.2947 5.6332 17.7867 5.1402 18.4847 5.1402C19.1957 5.1402 19.6877 5.6332 19.6877 6.3302V12.6742C19.6877 13.3852 19.1957 13.8632 18.4847 13.8632Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.07421875 23.1875"
          className={className}
        >
          <path
            d="              M4.0337 23.1878H18.5667C21.2327 23.1878 22.5997 21.8198 22.5997 19.1948V3.9918C22.5997 1.3668 21.2327 -0.0002 18.5667 -0.0002H4.0337C1.3677 -0.0002 -0.0003 1.3398 -0.0003 3.9918V19.1948C-0.0003 21.8338 1.3677 23.1878 4.0337 23.1878ZM28.4097 14.6838C28.6837 15.0118 29.2027 15.0388 29.5447 14.6428C31.1857 12.8108 32.0747 10.4448 32.0747 7.8478C32.0747 5.2358 31.1857 2.8848 29.5447 1.0388C29.2167 0.6698 28.7387 0.6698 28.4517 0.9708C28.1367 1.2718 28.1637 1.7228 28.5057 2.1188C29.8867 3.6918 30.6117 5.6738 30.6117 7.8478C30.6117 10.0078 29.8867 12.0038 28.5057 13.5628C28.1777 13.9448 28.1227 14.3558 28.4097 14.6838ZM25.3337 11.8398C25.6347 12.1538 26.1677 12.1678 26.4957 11.7308C27.3297 10.6508 27.8227 9.3108 27.8227 7.8478C27.8227 6.3848 27.3297 5.0448 26.4957 3.9508C26.1817 3.5268 25.6617 3.5268 25.3617 3.8278C25.0467 4.1428 25.1287 4.5528 25.4157 4.9488C26.0587 5.8518 26.3457 6.8088 26.3457 7.8478C26.3457 8.8728 26.0587 9.8298 25.4157 10.7458C25.1287 11.1288 25.0467 11.5258 25.3337 11.8398ZM11.0747 11.8258C10.6917 11.8258 10.3907 11.5258 10.3907 11.1288V4.5938C10.3907 4.1968 10.6917 3.8968 11.0747 3.8968C11.4567 3.8968 11.7577 4.1968 11.7577 4.5938V11.1288C11.7577 11.5258 11.4567 11.8258 11.0747 11.8258ZM14.3967 11.8258C14.0137 11.8258 13.7127 11.5258 13.7127 11.1288V4.5938C13.7127 4.1968 14.0137 3.8968 14.3967 3.8968C14.7797 3.8968 15.0797 4.1968 15.0797 4.5938V11.1288C15.0797 11.5258 14.7797 11.8258 14.3967 11.8258ZM17.7047 11.8258C17.3357 11.8258 17.0217 11.5258 17.0217 11.1288V4.5938C17.0217 4.1968 17.3357 3.8968 17.7047 3.8968C18.1017 3.8968 18.4027 4.1968 18.4027 4.5938V11.1288C18.4027 11.5258 18.1017 11.8258 17.7047 11.8258Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.837890625 24.0078125"
          className={className}
        >
          <path
            d="              M4.4847 24.008H19.2227C22.1757 24.008 23.7067 22.49 23.7067 19.564V4.443C23.7067 1.518 22.1757 0 19.2227 0H4.4847C1.5317 0 -0.0003 1.518 -0.0003 4.443V19.564C-0.0003 22.49 1.5317 24.008 4.4847 24.008ZM29.5587 15.955C29.9687 16.434 30.6937 16.434 31.1587 15.9C32.8947 13.959 33.8377 11.443 33.8377 8.695C33.8377 5.961 32.8947 3.445 31.1587 1.504C30.6937 0.971 29.9827 0.971 29.5727 1.436C29.1487 1.9 29.2577 2.488 29.7087 3.008C31.0627 4.553 31.7737 6.521 31.7737 8.695C31.7737 10.869 31.0627 12.852 29.7087 14.396C29.2717 14.902 29.1487 15.477 29.5587 15.955ZM26.3187 12.988C26.7287 13.453 27.5077 13.48 27.9457 12.879C28.8337 11.717 29.3677 10.254 29.3677 8.695C29.3677 7.15 28.8337 5.687 27.9457 4.525C27.5077 3.937 26.7427 3.951 26.3317 4.402C25.8947 4.881 26.0727 5.441 26.4417 5.947C27.0157 6.768 27.2887 7.697 27.2887 8.695C27.2887 9.707 27.0157 10.637 26.4417 11.443C26.0727 11.949 25.8947 12.51 26.3187 12.988ZM10.8827 12.906C10.3357 12.906 9.9397 12.51 9.9397 11.963V5.387C9.9397 4.854 10.3357 4.443 10.8827 4.443C11.4157 4.443 11.8267 4.854 11.8267 5.387V11.963C11.8267 12.51 11.4157 12.906 10.8827 12.906ZM14.5337 12.906C13.9997 12.906 13.6037 12.51 13.6037 11.963V5.387C13.6037 4.854 13.9997 4.443 14.5337 4.443C15.0667 4.443 15.4767 4.854 15.4767 5.387V11.963C15.4767 12.51 15.0667 12.906 14.5337 12.906ZM18.1837 12.906C17.6507 12.906 17.2537 12.51 17.2537 11.963V5.387C17.2537 4.854 17.6507 4.443 18.1837 4.443C18.7307 4.443 19.1267 4.854 19.1267 5.387V11.963C19.1267 12.51 18.7307 12.906 18.1837 12.906Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.22265625 23.70703125"
          className={className}
        >
          <path
            d="              M4.2927 23.7066H19.0447C21.9157 23.7066 23.3377 22.2856 23.3377 19.4686V4.2386C23.3377 1.4216 21.9157 -0.0004 19.0447 -0.0004H4.2927C1.4357 -0.0004 -0.0003 1.4086 -0.0003 4.2386V19.4686C-0.0003 22.2856 1.4357 23.7066 4.2927 23.7066ZM29.1207 15.5726C29.4907 16.0096 30.1467 16.0096 30.5837 15.5176C32.2927 13.6036 33.2227 11.1286 33.2227 8.4216C33.2227 5.7146 32.2927 3.2266 30.5837 1.3126C30.1597 0.8336 29.5177 0.8336 29.1487 1.2446C28.7657 1.6676 28.8617 2.2016 29.2717 2.6796C30.6387 4.2386 31.3497 6.2346 31.3497 8.4216C31.3497 10.5956 30.6387 12.6056 29.2717 14.1506C28.8617 14.6286 28.7657 15.1486 29.1207 15.5726ZM25.9907 12.6196C26.3597 13.0426 27.0567 13.0706 27.4667 12.5236C28.3417 11.3746 28.8617 9.9536 28.8617 8.4216C28.8617 6.8906 28.3417 5.4546 27.4667 4.3206C27.0567 3.7736 26.3727 3.7866 26.0037 4.2106C25.6077 4.6206 25.7577 5.1266 26.1137 5.6196C26.7017 6.4536 26.9887 7.3966 26.9887 8.4216C26.9887 9.4336 26.7017 10.3906 26.1137 11.2246C25.7717 11.7036 25.6077 12.2086 25.9907 12.6196ZM10.9237 12.6196C10.4317 12.6196 10.0627 12.2496 10.0627 11.7576V5.0996C10.0627 4.6076 10.4317 4.2386 10.9237 4.2386C11.4027 4.2386 11.7847 4.6076 11.7847 5.0996V11.7576C11.7847 12.2496 11.4027 12.6196 10.9237 12.6196ZM14.5057 12.6196C14.0277 12.6196 13.6587 12.2496 13.6587 11.7576V5.0996C13.6587 4.6076 14.0277 4.2386 14.5057 4.2386C14.9847 4.2386 15.3677 4.6076 15.3677 5.0996V11.7576C15.3677 12.2496 14.9847 12.6196 14.5057 12.6196ZM18.1017 12.6196C17.6227 12.6196 17.2407 12.2496 17.2407 11.7576V5.0996C17.2407 4.6076 17.6227 4.2386 18.1017 4.2386C18.5937 4.2386 18.9627 4.6076 18.9627 5.0996V11.7576C18.9627 12.2496 18.5937 12.6196 18.1017 12.6196Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.31640625 24.240234375"
          className={className}
        >
          <path
            d="              M4.6347 24.24H19.3597C22.3807 24.24 23.9807 22.641 23.9807 19.646V4.594C23.9807 1.6 22.3807 0 19.3597 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V19.646C-0.0003 22.654 1.6137 24.24 4.6347 24.24ZM29.8727 16.242C30.3247 16.762 31.1037 16.762 31.6097 16.187C33.3597 14.232 34.3167 11.689 34.3167 8.928C34.3167 6.166 33.3597 3.623 31.6097 1.654C31.1037 1.094 30.3377 1.094 29.9007 1.6C29.4497 2.092 29.5727 2.721 30.0367 3.268C31.3907 4.799 32.0877 6.754 32.0877 8.928C32.0877 11.088 31.3907 13.057 30.0367 14.574C29.5727 15.121 29.4357 15.736 29.8727 16.242ZM26.5777 13.275C27.0157 13.781 27.8497 13.795 28.3277 13.152C29.2307 11.977 29.7637 10.5 29.7637 8.928C29.7637 7.355 29.2307 5.865 28.3277 4.689C27.8497 4.06 27.0297 4.074 26.5777 4.566C26.1137 5.086 26.3187 5.687 26.7017 6.221C27.2617 7.014 27.5347 7.93 27.5347 8.928C27.5347 9.926 27.2617 10.828 26.7017 11.635C26.3187 12.154 26.1137 12.756 26.5777 13.275ZM10.8557 13.139C10.2677 13.139 9.8577 12.728 9.8577 12.141V5.619C9.8577 5.045 10.2677 4.621 10.8557 4.621C11.4297 4.621 11.8537 5.045 11.8537 5.619V12.141C11.8537 12.728 11.4297 13.139 10.8557 13.139ZM14.5607 13.139C13.9867 13.139 13.5627 12.728 13.5627 12.141V5.619C13.5627 5.045 13.9867 4.621 14.5607 4.621C15.1207 4.621 15.5587 5.045 15.5587 5.619V12.141C15.5587 12.728 15.1207 13.139 14.5607 13.139ZM18.2517 13.139C17.6917 13.139 17.2677 12.728 17.2677 12.141V5.619C17.2677 5.045 17.6917 4.621 18.2517 4.621C18.8397 4.621 19.2637 5.045 19.2637 5.619V12.141C19.2637 12.728 18.8397 13.139 18.2517 13.139Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.556640625 22.517578125"
          className={className}
        >
          <path
            d="              M3.6917 22.5177H17.9237C20.3437 22.5177 21.6157 21.2327 21.6157 18.8397V3.6777C21.6157 1.2987 20.3437 -0.0003 17.9237 -0.0003H3.6917C1.2717 -0.0003 -0.0003 1.2717 -0.0003 3.6777V18.8397C-0.0003 21.2597 1.2717 22.5177 3.6917 22.5177ZM27.4527 13.5077C27.6177 13.7267 27.9457 13.7537 28.1777 13.4937C29.7227 11.7577 30.5567 9.5707 30.5567 7.0957C30.5567 4.6207 29.7227 2.4337 28.1777 0.6977C27.9867 0.4647 27.7127 0.4647 27.5347 0.6157C27.3027 0.7797 27.2477 1.1077 27.5077 1.3807C28.8887 2.9807 29.6137 4.9627 29.6137 7.0957C29.6137 9.2417 28.8887 11.2107 27.5077 12.8107C27.2757 13.0567 27.2887 13.3297 27.4527 13.5077ZM24.4727 10.8147C24.6637 10.9917 24.9927 11.0057 25.2247 10.7047C26.0037 9.6937 26.4547 8.4627 26.4547 7.0957C26.4547 5.7287 26.0037 4.4977 25.2247 3.4867C25.0197 3.2127 24.7047 3.1987 24.5137 3.3637C24.3087 3.5137 24.2817 3.8007 24.4867 4.0737C25.1977 5.0857 25.5117 6.0567 25.5117 7.0957C25.5117 8.1347 25.1977 9.1057 24.4867 10.1307C24.2947 10.3767 24.2947 10.6367 24.4727 10.8147ZM11.2797 10.7867C11.0337 10.7867 10.8277 10.5957 10.8277 10.3357V3.9377C10.8277 3.6777 11.0337 3.4727 11.2797 3.4727C11.5387 3.4727 11.7437 3.6777 11.7437 3.9377V10.3357C11.7437 10.5957 11.5387 10.7867 11.2797 10.7867ZM14.2457 10.7867C13.9867 10.7867 13.7817 10.5957 13.7817 10.3357V3.9377C13.7817 3.6777 13.9867 3.4727 14.2457 3.4727C14.4927 3.4727 14.6977 3.6777 14.6977 3.9377V10.3357C14.6977 10.5957 14.4927 10.7867 14.2457 10.7867ZM17.1997 10.7867C16.9527 10.7867 16.7477 10.5957 16.7477 10.3357V3.9377C16.7477 3.6777 16.9527 3.4727 17.1997 3.4727C17.4587 3.4727 17.6637 3.6777 17.6637 3.9377V10.3357C17.6637 10.5957 17.4587 10.7867 17.1997 10.7867Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.77734375 22.17578125"
          className={className}
        >
          <path
            d="              M3.5137 22.176H17.5957C19.8927 22.176 21.1097 20.918 21.1097 18.662V3.514C21.1097 1.258 19.8927 0 17.5957 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V18.662C-0.0003 20.959 1.2167 22.176 3.5137 22.176ZM26.9607 12.906C27.0707 13.057 27.3167 13.084 27.4807 12.906C28.9707 11.211 29.7777 9.105 29.7777 6.699C29.7777 4.307 28.9707 2.201 27.4807 0.506C27.3437 0.355 27.1797 0.355 27.0567 0.424C26.8787 0.52 26.7837 0.779 26.9887 0.998C28.3827 2.611 29.1077 4.58 29.1077 6.699C29.1077 8.832 28.3827 10.801 26.9887 12.414C26.8247 12.592 26.8517 12.783 26.9607 12.906ZM24.0347 10.268C24.1587 10.391 24.3767 10.404 24.5687 10.172C25.3207 9.188 25.7577 8.025 25.7577 6.699C25.7577 5.387 25.3207 4.225 24.5687 3.24C24.4177 3.035 24.2127 3.021 24.0767 3.104C23.9257 3.186 23.8577 3.404 24.0077 3.609C24.7597 4.676 25.0747 5.66 25.0747 6.699C25.0747 7.752 24.7597 8.736 24.0077 9.803C23.8707 9.98 23.9117 10.172 24.0347 10.268ZM11.3887 10.254C11.1977 10.254 11.0467 10.104 11.0467 9.912V3.582C11.0467 3.404 11.1977 3.24 11.3887 3.24C11.5667 3.24 11.7307 3.404 11.7307 3.582V9.912C11.7307 10.104 11.5667 10.254 11.3887 10.254ZM14.1637 10.254C13.9727 10.254 13.8227 10.104 13.8227 9.912V3.582C13.8227 3.404 13.9727 3.24 14.1637 3.24C14.3557 3.24 14.5057 3.404 14.5057 3.582V9.912C14.5057 10.104 14.3557 10.254 14.1637 10.254ZM16.9397 10.254C16.7477 10.254 16.5977 10.104 16.5977 9.912V3.582C16.5977 3.404 16.7477 3.24 16.9397 3.24C17.1307 3.24 17.2817 3.404 17.2817 3.582V9.912C17.2817 10.104 17.1307 10.254 16.9397 10.254Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}