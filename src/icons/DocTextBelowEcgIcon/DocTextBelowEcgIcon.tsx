import { IconProps } from "../../types"

export default function DocTextBelowEcgIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.484375 30.87109375"
          className={className}
        >
          <path
            d="              M-0.0003 25.498C-0.0003 28.889 1.9827 30.871 5.3597 30.871H20.1247C23.5157 30.871 25.4847 28.889 25.4847 25.498V5.373C25.4847 1.982 23.5157 0 20.1247 0H5.3597C1.9827 0 -0.0003 1.982 -0.0003 5.373ZM4.8537 24.76V6.111C4.8537 5.264 5.1957 4.854 6.1117 4.854H19.3867C20.2887 4.854 20.6307 5.264 20.6307 6.111V24.76C20.6307 25.607 20.2887 26.018 19.3867 26.018H6.1117C5.1957 26.018 4.8537 25.607 4.8537 24.76ZM8.4767 12.537H10.2947C10.7737 12.537 11.1017 12.277 11.1977 11.854L11.2797 11.512L11.9087 14.52C12.0997 15.449 13.3577 15.477 13.6307 14.561L14.4237 11.977L14.4517 12.072C14.6017 12.373 14.8887 12.537 15.2577 12.537H17.0217C17.5137 12.537 17.9237 12.141 17.9237 11.648C17.9237 11.156 17.5137 10.76 17.0217 10.76H15.8317L15.3267 8.777C15.0937 7.889 13.9047 7.93 13.6037 8.832L12.9197 10.938L12.1817 7.424C11.9907 6.48 10.7327 6.467 10.4997 7.383L9.6937 10.76H8.4767C7.9847 10.76 7.5747 11.17 7.5747 11.648C7.5747 12.141 7.9707 12.537 8.4767 12.537ZM8.5037 19.182H16.9667C17.5277 19.182 17.9517 18.744 17.9517 18.184C17.9517 17.637 17.5277 17.227 16.9667 17.227H8.5037C7.9297 17.227 7.5057 17.637 7.5057 18.184C7.5057 18.744 7.9297 19.182 8.5037 19.182ZM8.5037 22.559H13.0707C13.6307 22.559 14.0407 22.135 14.0407 21.602C14.0407 21.041 13.6307 20.604 13.0707 20.604H8.5037C7.9297 20.604 7.5057 21.041 7.5057 21.602C7.5057 22.135 7.9297 22.559 8.5037 22.559Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 30.091796875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2652C-0.0003 28.3962 1.6957 30.0922 4.7987 30.0922H19.4417C22.5447 30.0922 24.2407 28.3962 24.2407 25.2652V4.8262C24.2407 1.7092 22.5447 0.0002 19.4417 0.0002H4.7987C1.6957 0.0002 -0.0003 1.7092 -0.0003 4.8262ZM3.5277 24.8832V5.2222C3.5277 4.1152 4.0607 3.5272 5.2227 3.5272H19.0177C20.1797 3.5272 20.7127 4.1152 20.7127 5.2222V24.8832C20.7127 25.9762 20.1797 26.5642 19.0177 26.5642H5.2227C4.0607 26.5642 3.5277 25.9762 3.5277 24.8832ZM7.3277 11.8262H9.3927C9.8297 11.8262 10.1307 11.5802 10.2267 11.1832L10.5407 9.9532L11.4437 14.2732C11.6077 15.1212 12.7287 15.1352 12.9887 14.3012L14.0407 10.7462L14.1777 11.2792C14.3007 11.6352 14.5747 11.8262 14.9567 11.8262H16.9117C17.3637 11.8262 17.7187 11.4712 17.7187 11.0332C17.7187 10.5822 17.3767 10.2262 16.9117 10.2262H15.4627L14.8477 7.8612C14.6427 7.0682 13.5767 7.0962 13.3167 7.9022L12.3187 11.0472L11.3337 6.2622C11.1567 5.4282 10.0217 5.4142 9.8167 6.2342L8.8597 10.2262H7.3277C6.8767 10.2262 6.5217 10.5962 6.5217 11.0332C6.5217 11.4712 6.8767 11.8262 7.3277 11.8262ZM7.3967 19.0992H16.8577C17.3767 19.0992 17.7597 18.7032 17.7597 18.1832C17.7597 17.6782 17.3767 17.2812 16.8577 17.2812H7.3967C6.8637 17.2812 6.4667 17.6782 6.4667 18.1832C6.4667 18.7032 6.8637 19.0992 7.3967 19.0992ZM7.3967 22.8462H12.1547C12.6737 22.8462 13.0567 22.4632 13.0567 21.9572C13.0567 21.4372 12.6737 21.0272 12.1547 21.0272H7.3967C6.8637 21.0272 6.4667 21.4372 6.4667 21.9572C6.4667 22.4632 6.8637 22.8462 7.3967 22.8462Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.896484375 30.48828125"
          className={className}
        >
          <path
            d="              M-0.0003 25.3746C-0.0003 28.6426 1.8457 30.4886 5.0997 30.4886H19.8107C23.0507 30.4886 24.8967 28.6426 24.8967 25.3746V5.0996C24.8967 1.8456 23.0507 -0.0004 19.8107 -0.0004H5.0997C1.8457 -0.0004 -0.0003 1.8456 -0.0003 5.0996ZM4.2247 24.8146V5.6736C4.2247 4.7166 4.6617 4.2246 5.6877 4.2246H19.2087C20.2347 4.2246 20.6717 4.7166 20.6717 5.6736V24.8146C20.6717 25.7716 20.2347 26.2636 19.2087 26.2636H5.6877C4.6617 26.2636 4.2247 25.7716 4.2247 24.8146ZM7.9297 12.1956H9.8707C10.3227 12.1956 10.6367 11.9356 10.7457 11.5256L10.9377 10.7736L11.6897 14.3966C11.8677 15.2856 13.0567 15.2986 13.3297 14.4236L14.2457 11.3886L14.3277 11.6896C14.4647 12.0176 14.7387 12.1956 15.1207 12.1956H16.9667C17.4457 12.1956 17.8277 11.8126 17.8277 11.3476C17.8277 10.8826 17.4457 10.4996 16.9667 10.4996H15.6547L15.0937 8.3396C14.8887 7.4926 13.7537 7.5196 13.4667 8.3806L12.6327 10.9786L11.7847 6.8636C11.5937 5.9746 10.3907 5.9606 10.1857 6.8356L9.2967 10.4996H7.9297C7.4647 10.4996 7.0687 10.8966 7.0687 11.3476C7.0687 11.8126 7.4517 12.1956 7.9297 12.1956ZM7.9847 19.1266H16.9117C17.4587 19.1266 17.8687 18.7036 17.8687 18.1696C17.8687 17.6506 17.4587 17.2406 16.9117 17.2406H7.9847C7.4237 17.2406 7.0137 17.6506 7.0137 18.1696C7.0137 18.7036 7.4237 19.1266 7.9847 19.1266ZM7.9847 22.6816H12.6327C13.1797 22.6816 13.5767 22.2716 13.5767 21.7516C13.5767 21.2186 13.1797 20.7946 12.6327 20.7946H7.9847C7.4237 20.7946 7.0137 21.2186 7.0137 21.7516C7.0137 22.2716 7.4237 22.6816 7.9847 22.6816Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 29.134765625"
          className={className}
        >
          <path
            d="              M-0.0003 25.102C-0.0003 27.768 1.3537 29.135 3.9927 29.135H18.6077C21.2597 29.135 22.5997 27.768 22.5997 25.102V4.02C22.5997 1.354 21.2597 0 18.6077 0H3.9927C1.3537 0 -0.0003 1.354 -0.0003 4.02ZM1.6957 25.061V4.061C1.6957 2.516 2.5017 1.682 4.0877 1.682H18.5257C20.0977 1.682 20.9177 2.516 20.9177 4.061V25.061C20.9177 26.606 20.0977 27.439 18.5257 27.439H4.0877C2.5017 27.439 1.6957 26.606 1.6957 25.061ZM5.8377 10.869H8.3397C8.6817 10.869 8.9137 10.678 8.9957 10.363L9.6657 7.602L11.0057 14.109C11.1287 14.738 11.9627 14.752 12.1547 14.123L13.5627 9.105L13.8637 10.336C13.9457 10.678 14.1777 10.869 14.5197 10.869H16.7617C17.0897 10.869 17.3637 10.609 17.3637 10.295C17.3637 9.967 17.1037 9.707 16.7617 9.707H14.8747L14.1507 6.863C13.9997 6.262 13.2067 6.275 13.0297 6.877L11.6487 11.607L10.2537 4.854C10.1307 4.211 9.2967 4.211 9.1327 4.84L7.9567 9.707H5.8377C5.5097 9.707 5.2497 9.98 5.2497 10.295C5.2497 10.609 5.5097 10.869 5.8377 10.869ZM5.8657 18.676H16.7887C17.1717 18.676 17.4727 18.375 17.4727 17.992C17.4727 17.623 17.1717 17.336 16.7887 17.336H5.8657C5.4687 17.336 5.1677 17.623 5.1677 17.992C5.1677 18.375 5.4687 18.676 5.8657 18.676ZM5.8657 22.859H11.1157C11.4977 22.859 11.7987 22.572 11.7987 22.203C11.7987 21.82 11.4977 21.52 11.1157 21.52H5.8657C5.4687 21.52 5.1677 21.82 5.1677 22.203C5.1677 22.572 5.4687 22.859 5.8657 22.859Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.447265625 29.599609375"
          className={className}
        >
          <path
            d="              M-0.0003 25.1151C-0.0003 28.0681 1.5177 29.6001 4.4437 29.6001H19.0037C21.9297 29.6001 23.4477 28.0681 23.4477 25.1151V4.4841C23.4477 1.5451 21.9297 0.0001 19.0037 0.0001H4.4437C1.5177 0.0001 -0.0003 1.5451 -0.0003 4.4841ZM2.6797 24.9511V4.6481C2.6797 3.3771 3.3357 2.6801 4.6617 2.6801H18.7717C20.0977 2.6801 20.7677 3.3771 20.7677 4.6481V24.9511C20.7677 26.2231 20.0977 26.9201 18.7717 26.9201H4.6617C3.3357 26.9201 2.6797 26.2231 2.6797 24.9511ZM6.5897 11.3611H8.8187C9.2287 11.3611 9.5157 11.1431 9.6117 10.7601L10.0627 8.9411L11.1287 14.1231C11.2927 14.9021 12.3317 14.9161 12.5777 14.1371L13.7947 9.9671L13.9997 10.7731C14.1097 11.1561 14.3687 11.3611 14.7657 11.3611H16.8577C17.2677 11.3611 17.6097 11.0331 17.6097 10.6371C17.6097 10.2131 17.2817 9.8851 16.8577 9.8851H15.2307L14.5467 7.2731C14.3557 6.5351 13.3707 6.5621 13.1247 7.3141L11.9357 11.1151L10.7867 5.5231C10.6227 4.7441 9.5837 4.7301 9.3787 5.5101L8.3267 9.8851H6.5897C6.1797 9.8851 5.8377 10.2261 5.8377 10.6371C5.8377 11.0331 6.1797 11.3611 6.5897 11.3611ZM6.6857 19.0591H16.7757C17.2817 19.0591 17.6507 18.6621 17.6507 18.1701C17.6507 17.6911 17.2817 17.3221 16.7757 17.3221H6.6857C6.1797 17.3221 5.7967 17.6911 5.7967 18.1701C5.7967 18.6621 6.1797 19.0591 6.6857 19.0591ZM6.6857 23.0371H11.5667C12.0587 23.0371 12.4277 22.6541 12.4277 22.1761C12.4277 21.6841 12.0587 21.3011 11.5667 21.3011H6.6857C6.1797 21.3011 5.7967 21.6841 5.7967 22.1761C5.7967 22.6541 6.1797 23.0371 6.6857 23.0371Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.99609375 29.3125"
          className={className}
        >
          <path
            d="              M-0.0003 25.0333C-0.0003 27.8903 1.4087 29.3123 4.2387 29.3123H18.7577C21.5877 29.3123 22.9957 27.8903 22.9957 25.0333V4.2933C22.9957 1.4493 21.5877 0.0003 18.7577 0.0003H4.2387C1.4087 0.0003 -0.0003 1.4493 -0.0003 4.2933ZM2.2017 24.9923V4.3343C2.2017 2.9663 2.9257 2.2013 4.3477 2.2013H18.6487C20.0707 2.2013 20.7947 2.9663 20.7947 4.3343V24.9923C20.7947 26.3593 20.0707 27.1113 18.6487 27.1113H4.3477C2.9257 27.1113 2.2017 26.3593 2.2017 24.9923ZM6.1797 11.1153H8.4907C8.9007 11.1153 9.1597 10.8823 9.2557 10.5273L9.7887 8.3813L10.9647 14.0413C11.1157 14.7933 12.1137 14.7933 12.3457 14.0543L13.6587 9.5293L13.9047 10.4863C13.9867 10.8823 14.2597 11.1153 14.6697 11.1153H16.8167C17.2127 11.1153 17.5277 10.7873 17.5277 10.4043C17.5277 10.0073 17.2267 9.7073 16.8167 9.7073H15.0937L14.3827 6.9593C14.2047 6.2483 13.2477 6.2613 13.0157 6.9863L11.7307 11.1563L10.4867 5.1133C10.3227 4.3613 9.3247 4.3473 9.1467 5.0993L8.0257 9.7073H6.1797C5.7837 9.7073 5.4687 10.0213 5.4687 10.4043C5.4687 10.7873 5.7837 11.1153 6.1797 11.1153ZM6.2887 19.0313H16.7347C17.2267 19.0313 17.5817 18.6483 17.5817 18.1703C17.5817 17.7053 17.2267 17.3493 16.7347 17.3493H6.2887C5.7967 17.3493 5.4277 17.7053 5.4277 18.1703C5.4277 18.6483 5.7967 19.0313 6.2887 19.0313ZM6.2887 23.1323H11.2247C11.7167 23.1323 12.0727 22.7773 12.0727 22.3123C12.0727 21.8343 11.7167 21.4513 11.2247 21.4513H6.2887C5.7967 21.4513 5.4277 21.8343 5.4277 22.3123C5.4277 22.7773 5.7967 23.1323 6.2887 23.1323Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.7890625 29.8046875"
          className={className}
        >
          <path
            d="              M-0.0003 25.1698C-0.0003 28.1918 1.5857 29.8048 4.5937 29.8048H19.1957C22.1897 29.8048 23.7887 28.1918 23.7887 25.1698V4.6208C23.7887 1.5998 22.1897 -0.0002 19.1957 -0.0002H4.5937C1.5857 -0.0002 -0.0003 1.5998 -0.0003 4.6208ZM3.0487 24.9098V4.8808C3.0487 3.6918 3.6507 3.0348 4.9087 3.0348H18.8807C20.1387 3.0348 20.7407 3.6918 20.7407 4.8808V24.9098C20.7407 26.1138 20.1387 26.7558 18.8807 26.7558H4.9087C3.6507 26.7558 3.0487 26.1138 3.0487 24.9098ZM6.9047 11.5528H9.0647C9.4887 11.5528 9.7757 11.3208 9.8707 10.9378L10.2677 9.3648L11.2657 14.1778C11.4297 14.9848 12.5097 14.9978 12.7557 14.2048L13.9047 10.2948L14.0817 10.9788C14.1917 11.3478 14.4647 11.5528 14.8477 11.5528H16.8847C17.3087 11.5528 17.6507 11.2108 17.6507 10.7868C17.6507 10.3638 17.3227 10.0218 16.8847 10.0218H15.3267L14.6837 7.5198C14.4787 6.7538 13.4527 6.7808 13.2067 7.5608L12.0997 11.0738L11.0197 5.8378C10.8557 5.0308 9.7757 5.0178 9.5707 5.8108L8.5587 10.0218H6.9047C6.4807 10.0218 6.1387 10.3768 6.1387 10.7868C6.1387 11.2108 6.4807 11.5528 6.9047 11.5528ZM6.9867 19.0718H16.8167C17.3227 19.0718 17.7047 18.6758 17.7047 18.1698C17.7047 17.6778 17.3227 17.2948 16.8167 17.2948H6.9867C6.4667 17.2948 6.0837 17.6778 6.0837 18.1698C6.0837 18.6758 6.4667 19.0718 6.9867 19.0718ZM6.9867 22.9418H11.8127C12.3187 22.9418 12.7017 22.5588 12.7017 22.0668C12.7017 21.5738 12.3187 21.1778 11.8127 21.1778H6.9867C6.4667 21.1778 6.0837 21.5738 6.0837 22.0668C6.0837 22.5588 6.4667 22.9418 6.9867 22.9418Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 28.90234375"
          className={className}
        >
          <path
            d="              M-0.0003 25.2109C-0.0003 27.6449 1.2577 28.9019 3.6777 28.9019H18.4157C20.8227 28.9019 22.0937 27.6449 22.0937 25.2109V3.6909C22.0937 1.2719 20.8227 -0.0001 18.4157 -0.0001H3.6777C1.2577 -0.0001 -0.0003 1.2719 -0.0003 3.6909ZM1.0117 25.1839V3.7189C1.0117 1.9409 1.9417 1.0119 3.7327 1.0119H18.3617C20.1527 1.0119 21.0817 1.9409 21.0817 3.7189V25.1839C21.0817 26.9609 20.1527 27.8909 18.3617 27.8909H3.7327C1.9417 27.8909 1.0117 26.9609 1.0117 25.1839ZM5.3727 10.5819H8.1207C8.3947 10.5819 8.5857 10.4179 8.6407 10.1719L9.5017 6.6039L11.0607 14.2189C11.1567 14.6969 11.7717 14.7109 11.8947 14.2459L13.4117 8.5719L13.8227 10.1719C13.8907 10.4179 14.0687 10.5819 14.3277 10.5819H16.6937C16.9117 10.5819 17.1307 10.3909 17.1307 10.1719C17.1307 9.9259 16.9397 9.7339 16.6937 9.7339H14.6017L13.8497 6.7539C13.7407 6.3159 13.1657 6.3159 13.0297 6.7539L11.5387 12.2359L9.9667 4.5389C9.8577 4.0469 9.2557 4.0469 9.1327 4.5249L7.8747 9.7339H5.3727C5.1407 9.7339 4.9627 9.9399 4.9627 10.1719C4.9627 10.3909 5.1547 10.5819 5.3727 10.5819ZM5.3047 18.2379H16.8437C17.1177 18.2379 17.3087 18.0329 17.3087 17.7869C17.3087 17.5269 17.1177 17.3359 16.8437 17.3359H5.3047C5.0317 17.3359 4.8397 17.5269 4.8397 17.7869C4.8397 18.0329 5.0317 18.2379 5.3047 18.2379ZM5.3047 22.5179H10.9647C11.2247 22.5179 11.4297 22.3129 11.4297 22.0659C11.4297 21.8199 11.2247 21.6149 10.9647 21.6149H5.3047C5.0317 21.6149 4.8397 21.8199 4.8397 22.0659C4.8397 22.3129 5.0317 22.5179 5.3047 22.5179Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 28.779296875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2656C-0.0003 27.5626 1.2167 28.7796 3.5137 28.7796H18.3207C20.6037 28.7796 21.8207 27.5626 21.8207 25.2656V3.5136C21.8207 1.2166 20.6037 -0.0004 18.3207 -0.0004H3.5137C1.2167 -0.0004 -0.0003 1.2166 -0.0003 3.5136ZM0.6697 25.2386V3.5406C0.6697 1.6546 1.6547 0.6696 3.5407 0.6696H18.2797C20.1797 0.6696 21.1507 1.6546 21.1507 3.5406V25.2386C21.1507 27.1246 20.1797 28.1096 18.2797 28.1096H3.5407C1.6547 28.1096 0.6697 27.1246 0.6697 25.2386ZM5.1407 10.4176H8.0257C8.2437 10.4176 8.4087 10.2816 8.4627 10.0766L9.4197 6.0836L11.0877 14.2736C11.1697 14.6696 11.6617 14.6836 11.7717 14.2876L13.3437 8.2986L13.8087 10.0766C13.8497 10.2816 14.0137 10.4176 14.2327 10.4176H16.6657C16.8297 10.4176 17.0077 10.2676 17.0077 10.0896C17.0077 9.9126 16.8437 9.7346 16.6657 9.7346H14.4517L13.6857 6.6996C13.6037 6.3306 13.1387 6.3306 13.0297 6.6996L11.4847 12.5506L9.8167 4.3616C9.7207 3.9516 9.2287 3.9516 9.1327 4.3616L7.8337 9.7346H5.1407C4.9627 9.7346 4.8267 9.9126 4.8267 10.0896C4.8267 10.2676 4.9767 10.4176 5.1407 10.4176ZM5.0177 18.0056H16.8707C17.0767 18.0056 17.2407 17.8556 17.2407 17.6636C17.2407 17.4726 17.0767 17.3226 16.8707 17.3226H5.0177C4.8127 17.3226 4.6617 17.4726 4.6617 17.6636C4.6617 17.8556 4.8127 18.0056 5.0177 18.0056ZM5.0177 22.3396H10.8827C11.0877 22.3396 11.2387 22.1896 11.2387 21.9976C11.2387 21.8066 11.0877 21.6566 10.8827 21.6566H5.0177C4.8127 21.6566 4.6617 21.8066 4.6617 21.9976C4.6617 22.1896 4.8127 22.3396 5.0177 22.3396Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
