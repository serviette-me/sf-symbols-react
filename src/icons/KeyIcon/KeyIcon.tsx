import { IconProps } from "../../types"

export default function KeyIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.76953125 35.547272367949375"
          className={className}
        >
          <path
            d="              M8.4217 34.9456C9.3247 35.7106 10.5277 35.7796 11.3617 34.9586L15.5727 30.7346C16.4067 29.9146 16.3787 28.6286 15.5587 27.7946L13.9867 26.2086L16.5427 23.6526C17.3357 22.8316 17.3637 21.5336 16.5427 20.7126L14.3827 18.5526C17.8557 16.5706 19.7697 13.4396 19.7697 9.8576C19.7697 4.4026 15.3677 -0.0004 9.8847 -0.0004C4.3747 -0.0004 -0.0003 4.3886 -0.0003 9.8576C-0.0003 13.6306 2.0777 17.0356 5.4277 18.7166V31.2266C5.4277 31.8556 5.6467 32.6076 6.1797 33.0586ZM9.8847 31.3766L8.5177 30.0236V16.0376C5.8107 15.5446 3.5547 12.9606 3.5547 9.8576C3.5547 6.3846 6.3847 3.5686 9.8847 3.5686C13.3847 3.5686 16.1877 6.3846 16.1877 9.8576C16.1877 12.9476 13.9317 15.5586 10.6097 16.0646V19.8376L12.9337 22.2036L10.5817 24.5136V27.8766L11.9907 29.2446ZM9.8847 9.7066C11.0877 9.7066 12.0727 8.7086 12.0727 7.5196C12.0727 6.3026 11.0877 5.3316 9.8847 5.3316C8.6817 5.3316 7.6977 6.2886 7.6977 7.5196C7.6977 8.7086 8.6817 9.7066 9.8847 9.7066Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.03125 34.81590961168291"
          className={className}
        >
          <path
            d="              M8.3127 34.3164C9.0367 34.9454 10.0347 35.0134 10.7187 34.3304L14.9437 30.1054C15.6267 29.4214 15.5997 28.3694 14.9297 27.6854L13.0837 25.8394L15.9007 23.0234C16.5707 22.3534 16.5707 21.2874 15.9007 20.6034L13.3847 18.0874C17.0077 16.1874 19.0317 13.0974 19.0317 9.4884C19.0317 4.2384 14.7797 0.0004 9.5157 0.0004C4.2247 0.0004 -0.0003 4.2244 -0.0003 9.4884C-0.0003 13.2074 2.0917 16.5434 5.4277 18.1014V30.8164C5.4277 31.3634 5.6057 31.9924 6.0707 32.3884ZM9.5157 31.4454L8.0797 30.0234V15.9824C5.1137 15.3674 2.8707 12.6874 2.8707 9.4884C2.8707 5.8374 5.8377 2.8844 9.5157 2.8844C13.1797 2.8844 16.1327 5.8374 16.1327 9.4884C16.1327 12.6604 13.8767 15.3674 10.4997 16.0374V19.3044L13.0017 21.8344L10.3767 24.4184V27.2344L12.0587 28.8754ZM9.5157 9.2144C10.7327 9.2144 11.7167 8.2164 11.7167 7.0004C11.7167 5.7834 10.7327 4.7984 9.5157 4.7984C8.2847 4.7984 7.3147 5.7834 7.3147 7.0004C7.3147 8.2164 8.2987 9.2144 9.5157 9.2144Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.4140625 35.20893086021495"
          className={className}
        >
          <path
            d="              M8.3677 34.6585C9.1877 35.3555 10.2947 35.4235 11.0607 34.6715L15.2847 30.4475C16.0367 29.6955 16.0097 28.5195 15.2577 27.7535L13.5627 26.0445L16.2427 23.3655C16.9807 22.6135 16.9807 21.4235 16.2287 20.6715L13.9177 18.3475C17.4587 16.3925 19.4137 13.2895 19.4137 9.6935C19.4137 4.3335 15.0937 -0.0005 9.7067 -0.0005C4.3067 -0.0005 -0.0003 4.3205 -0.0003 9.6935C-0.0003 13.4395 2.0777 16.8165 5.4277 18.4435V31.0355C5.4277 31.6365 5.6327 32.3335 6.1247 32.7575ZM9.7067 31.4175L8.3127 30.0375V16.0235C5.4827 15.4765 3.2407 12.8515 3.2407 9.6935C3.2407 6.1385 6.1247 3.2535 9.7067 3.2535C13.2887 3.2535 16.1597 6.1385 16.1597 9.6935C16.1597 12.8245 13.9047 15.4765 10.5547 16.0645V19.6055L12.9747 22.0395L10.4867 24.4865V27.5765L12.0177 29.0805ZM9.7067 9.4885C10.9237 9.4885 11.9087 8.4905 11.9087 7.2875C11.9087 6.0705 10.9237 5.0855 9.7067 5.0855C8.4907 5.0855 7.5197 6.0565 7.5197 7.2875C7.5197 8.4905 8.4907 9.4885 9.7067 9.4885Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.63671875 33.42658598043788"
          className={className}
        >
          <path
            d="              M8.1077 33.1272C8.5317 33.4962 9.1187 33.5512 9.5427 33.1402L13.7537 28.9162C14.1637 28.5062 14.1507 27.8772 13.7407 27.4802L11.4027 25.1422L14.7247 21.8342C15.1207 21.4372 15.1077 20.8082 14.6977 20.3982L11.5117 17.1852C15.4357 15.4762 17.6367 12.4282 17.6367 8.7912C17.6367 3.9242 13.6997 0.0002 8.8187 0.0002C3.9237 0.0002 -0.0003 3.9102 -0.0003 8.7912C-0.0003 12.3872 2.1057 15.5862 5.4277 16.9532V29.9822C5.4277 30.3512 5.5367 30.7892 5.8787 31.0762ZM8.8187 31.4592L7.1227 29.7642V15.7362C3.9097 14.9302 1.6817 12.1272 1.6817 8.7912C1.6817 4.8672 4.8677 1.6952 8.8187 1.6952C12.7557 1.6952 15.9277 4.8532 15.9277 8.7912C15.9277 12.0862 13.6997 14.9302 9.9527 15.9142V18.0742L13.0157 21.1372L9.8577 24.2542V26.0042L12.0587 28.1782ZM8.8187 8.2442C10.0077 8.2442 10.9647 7.2872 10.9647 6.0972C10.9647 4.9082 10.0077 3.9512 8.8187 3.9512C7.6157 3.9512 6.6717 4.9082 6.6717 6.0972C6.6717 7.2872 7.6287 8.2442 8.8187 8.2442Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.552734375 34.34621401552881"
          className={className}
        >
          <path
            d="              M8.2307 33.906C8.8597 34.453 9.7207 34.521 10.3227 33.934L14.5337 29.709C15.1347 29.107 15.1077 28.205 14.5197 27.617L12.5097 25.607L15.5037 22.627C16.0777 22.053 16.0647 21.137 15.4767 20.535L12.7557 17.801C16.4607 15.955 18.5527 12.879 18.5527 9.256C18.5527 4.129 14.4097 0 9.2697 0C4.1287 0 -0.0003 4.115 -0.0003 9.256C-0.0003 12.934 2.0917 16.229 5.4277 17.719V30.557C5.4277 31.049 5.5777 31.609 6.0017 31.965ZM9.2697 31.5L7.7927 30.023V15.941C4.6617 15.258 2.4337 12.523 2.4337 9.256C2.4337 5.496 5.4827 2.447 9.2697 2.447C13.0567 2.447 16.0917 5.482 16.0917 9.256C16.0917 12.482 13.8497 15.258 10.4317 16.023V18.977L13.0567 21.602L10.2537 24.363V26.824L12.0997 28.643ZM9.2697 8.9C10.4997 8.9 11.4977 7.902 11.4977 6.672C11.4977 5.455 10.4997 4.471 9.2697 4.471C8.0387 4.471 7.0687 5.455 7.0687 6.672C7.0687 7.902 8.0527 8.9 9.2697 8.9Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.279296875 34.07435243203322"
          className={className}
        >
          <path
            d="              M8.1897 33.6873C8.7637 34.1663 9.5427 34.2343 10.0897 33.7013L14.3147 29.4763C14.8477 28.9293 14.8207 28.1093 14.3007 27.5763L12.1817 25.4703L15.2717 22.3943C15.8047 21.8753 15.7777 21.0413 15.2577 20.4943L12.4007 17.6233C16.1597 15.8183 18.2797 12.7563 18.2797 9.1193C18.2797 4.0743 14.1917 0.0003 9.1467 0.0003C4.0607 0.0003 -0.0003 4.0473 -0.0003 9.1193C-0.0003 12.7833 2.1057 16.0373 5.4277 17.5003V30.4063C5.4277 30.8573 5.5647 31.3773 5.9607 31.7323ZM9.1467 31.5273L7.6287 30.0233V15.9143C4.4157 15.1893 2.1877 12.4143 2.1877 9.1193C2.1877 5.2913 5.2907 2.2013 9.1467 2.2013C12.9887 2.2013 16.0777 5.2913 16.0777 9.1193C16.0777 12.3863 13.8357 15.1893 10.4047 16.0093V18.7713L13.0837 21.4653L10.1857 24.3223V26.5923L12.1267 28.5063ZM9.1467 8.7093C10.3637 8.7093 11.3617 7.7113 11.3617 6.4803C11.3617 5.2633 10.3637 4.2793 9.1467 4.2793C7.9027 4.2793 6.9317 5.2633 6.9317 6.4803C6.9317 7.7113 7.9157 8.7093 9.1467 8.7093Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.7578125 34.54251559087159"
          className={className}
        >
          <path
            d="              M8.2717 34.0837C8.9417 34.6587 9.8577 34.7267 10.4867 34.0977L14.7107 29.8727C15.3397 29.2437 15.3267 28.2737 14.6977 27.6447L12.7557 25.7027L15.6817 22.7907C16.2837 22.1757 16.2837 21.1917 15.6547 20.5627L13.0297 17.9237C16.6937 16.0507 18.7577 12.9747 18.7577 9.3517C18.7577 4.1697 14.5747 -0.0003 9.3787 -0.0003C4.1697 -0.0003 -0.0003 4.1567 -0.0003 9.3517C-0.0003 13.0427 2.0917 16.3517 5.4277 17.8827V30.6657C5.4277 31.1717 5.5917 31.7737 6.0297 32.1427ZM9.3787 31.4727L7.9157 30.0237V15.9547C4.8537 15.2987 2.6247 12.5917 2.6247 9.3517C2.6247 5.6327 5.6327 2.6387 9.3787 2.6387C13.1117 2.6387 16.1187 5.6327 16.1187 9.3517C16.1187 12.5647 13.8637 15.2987 10.4587 16.0237V19.1137L13.0297 21.6977L10.3087 24.3767V26.9887L12.0857 28.7387ZM9.3787 9.0237C10.5957 9.0237 11.5937 8.0257 11.5937 6.8087C11.5937 5.5917 10.5957 4.6077 9.3787 4.6077C8.1487 4.6077 7.1777 5.5917 7.1777 6.8087C7.1777 8.0257 8.1617 9.0237 9.3787 9.0237Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.775390625 32.58705625884738"
          className={className}
        >
          <path
            d="              M7.9847 32.4023C8.2307 32.6343 8.5587 32.6623 8.8047 32.4023L13.0157 28.1913C13.2617 27.9453 13.2617 27.5903 13.0157 27.3573L10.3637 24.7183L13.9867 21.1093C14.2187 20.8903 14.2047 20.5213 13.9587 20.2753L10.3227 16.6253C14.4647 15.0113 16.7757 12.0043 16.7757 8.3673C16.7757 3.7323 13.0297 0.0003 8.3807 0.0003C3.7187 0.0003 -0.0003 3.7183 -0.0003 8.3673C-0.0003 11.8943 2.1187 15.0113 5.4277 16.2423V29.4353C5.4277 29.6953 5.5097 29.9963 5.7557 30.2423ZM8.3807 31.3633L6.4527 29.4353V15.4903C3.2267 14.6013 1.0117 11.7443 1.0117 8.3673C1.0117 4.3063 4.2927 1.0253 8.3807 1.0253C12.4547 1.0253 15.7367 4.2933 15.7367 8.3673C15.7367 11.7163 13.5217 14.6013 9.3517 15.8183V17.1443L12.9197 20.7133L9.4197 24.1723V25.2383L11.9627 27.7543ZM8.3807 7.6423C9.5297 7.6423 10.4457 6.7263 10.4457 5.5783C10.4457 4.4433 9.5297 3.5273 8.3807 3.5273C7.2457 3.5273 6.3297 4.4433 6.3297 5.5783C6.3297 6.7263 7.2457 7.6423 8.3807 7.6423Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.337890625 32.151178722065325"
          className={className}
        >
          <path
            d="              M7.9157 32.0336C8.0667 32.1836 8.2717 32.1976 8.4357 32.0336L12.6327 27.8226C12.8107 27.6586 12.8107 27.4396 12.6327 27.2886L9.8297 24.4996L13.6177 20.7406C13.7677 20.6036 13.7537 20.3716 13.5767 20.2066L9.7207 16.3246C13.9727 14.7796 16.3377 11.7856 16.3377 8.1486C16.3377 3.6366 12.6877 -0.0004 8.1617 -0.0004C3.6227 -0.0004 -0.0003 3.6226 -0.0003 8.1486C-0.0003 11.6346 2.1327 14.7106 5.4277 15.8726V29.1626C5.4277 29.3676 5.4957 29.5996 5.7017 29.8046ZM8.1617 31.3226L6.1117 29.2716V15.3676C2.8847 14.4376 0.6697 11.5526 0.6697 8.1486C0.6697 4.0336 4.0057 0.6976 8.1617 0.6976C12.3047 0.6976 15.6407 4.0056 15.6407 8.1486C15.6407 11.5256 13.4257 14.4376 9.0507 15.7496V16.6656L12.8787 20.4946L9.2017 24.1306V24.8416L11.9217 27.5356ZM8.1617 7.3286C9.2837 7.3286 10.1717 6.4396 10.1717 5.3186C10.1717 4.2106 9.2837 3.3226 8.1617 3.3226C7.0547 3.3226 6.1657 4.2106 6.1657 5.3186C6.1657 6.4396 7.0547 7.3286 8.1617 7.3286Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
