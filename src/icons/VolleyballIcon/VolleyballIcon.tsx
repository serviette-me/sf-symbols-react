import { IconProps } from "../../types"

export default function VolleyballIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.873046875"
          className={className}
        >
          <path
            d="              M14.9297 0.0001C6.7127 0.0001 -0.0003 6.7131 -0.0003 14.9431C-0.0003 23.1601 6.7127 29.8731 14.9297 29.8731C23.1597 29.8731 29.8727 23.1601 29.8727 14.9431C29.8727 6.7131 23.1597 0.0001 14.9297 0.0001ZM14.9297 3.7051C16.5567 3.7051 18.1017 4.0471 19.4957 4.6761L19.4827 4.6891C20.5627 5.0171 20.1657 6.6581 18.6617 8.8591C16.0097 7.1231 11.9357 5.7011 8.0117 6.1111C9.9257 4.6071 12.3317 3.7051 14.9297 3.7051ZM15.5447 16.2561C18.9217 13.1801 21.7387 9.5021 22.4357 6.6031C23.1327 7.2321 23.7617 7.9431 24.2817 8.7361C24.6507 10.3221 23.3657 15.0251 16.8167 20.8221C16.2417 19.4141 15.8187 17.7871 15.5447 16.2561ZM13.8357 14.2601C10.1577 12.7971 6.5217 12.0171 3.8557 13.1111C4.0607 11.8531 4.4847 10.6641 5.0727 9.5701C8.9007 7.7111 13.7267 8.9551 17.0487 10.9511C16.1467 12.0041 15.0667 13.1251 13.8357 14.2601ZM26.1677 14.9431C26.1677 19.0721 23.8987 22.7091 20.5347 24.6641C19.6057 24.6781 18.7987 24.1031 18.1157 23.2011C22.4357 19.4821 24.8417 15.9411 26.0177 13.1111C26.1137 13.7131 26.1677 14.3141 26.1677 14.9431ZM3.7597 16.0511C4.2797 15.5451 4.9907 15.2581 5.8787 15.1761C6.3577 19.2771 7.9707 22.5991 9.8027 24.9241C6.4937 23.2151 4.1427 19.9061 3.7597 16.0511ZM12.9477 16.7621C13.5077 19.8381 14.8337 23.8981 17.1307 25.9491C16.6247 26.0581 16.1057 26.1271 15.5857 26.1541C13.1117 25.2381 9.4607 21.5471 8.5727 15.3811C9.8577 15.6401 11.3337 16.1191 12.9477 16.7621Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.875"
          className={className}
        >
          <path
            d="              M14.4377 0.0003C6.5217 0.0003 -0.0003 6.5213 -0.0003 14.4373C-0.0003 22.3673 6.5217 28.8753 14.4507 28.8753C22.3667 28.8753 28.8747 22.3673 28.8747 14.4373C28.8747 6.5213 22.3667 0.0003 14.4377 0.0003ZM14.4377 2.7753C16.2417 2.7753 17.9507 3.1993 19.4687 3.9373C20.3577 4.5253 19.9067 6.2073 18.4567 8.3533C15.5727 6.4673 11.0327 4.8943 6.7677 5.6873C8.8317 3.8833 11.5257 2.7753 14.4377 2.7753ZM14.8747 15.6813C18.4847 12.4003 21.4237 8.4903 21.9437 5.5513C22.8317 6.3023 23.5977 7.1773 24.2267 8.1483C24.6367 9.8713 23.3927 15.1213 16.2007 20.5353C15.5727 19.0313 15.1347 17.2953 14.8747 15.6813ZM13.4397 14.0003C9.5157 12.4143 5.5917 11.6073 2.8847 12.9063C3.0757 11.4433 3.5547 10.0493 4.2517 8.8043C8.3947 6.5493 13.6577 7.9983 17.1447 10.1313C16.1327 11.3613 14.8887 12.6873 13.4397 14.0003ZM26.0997 14.4373C26.0997 18.7303 23.7207 22.5313 20.2207 24.5543C19.0447 24.5543 18.0467 23.7483 17.2267 22.5043C22.2437 18.8123 24.7737 14.9843 25.8397 11.9903C26.0037 12.7833 26.0997 13.6033 26.0997 14.4373ZM2.8167 15.4223C3.4317 14.8063 4.2797 14.4783 5.3457 14.4103C5.7007 19.0173 7.5877 22.6543 9.6387 25.0473C5.8927 23.3383 3.1857 19.6873 2.8167 15.4223ZM12.6877 16.1053C13.2477 19.4413 14.7247 23.8163 17.2677 25.7443C16.4337 25.9633 15.5727 26.0863 14.6697 26.0993C12.3047 25.2793 8.2307 21.2873 7.5877 14.5473C9.0777 14.7933 10.8147 15.3403 12.6877 16.1053Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 0C6.6167 0 -0.0003 6.617 -0.0003 14.697C-0.0003 22.777 6.6167 29.395 14.7107 29.395C22.7907 29.395 29.4077 22.777 29.4077 14.697C29.4077 6.617 22.7777 0 14.6977 0ZM14.6977 3.268C16.3927 3.268 18.0057 3.637 19.4547 4.307H19.4417C20.4807 4.744 20.0567 6.412 18.5667 8.613C15.8047 6.809 11.5117 5.305 7.4377 5.893C9.4197 4.252 11.9487 3.268 14.6977 3.268ZM15.2307 15.969C18.7167 12.811 21.5877 9.01 22.2027 6.098C22.9957 6.781 23.6797 7.574 24.2537 8.449C24.6507 10.076 23.3927 15.039 16.5297 20.686C15.9277 19.223 15.5037 17.541 15.2307 15.969ZM13.6447 14.123C9.8577 12.619 6.0837 11.826 3.3907 13.002C3.5957 11.648 4.0467 10.363 4.6897 9.201C8.6677 7.15 13.6987 8.49 17.0897 10.555C16.1467 11.703 14.9847 12.906 13.6447 14.123ZM26.1407 14.697C26.1407 18.908 23.8167 22.613 20.3987 24.596C19.3457 24.609 18.4437 23.939 17.6917 22.873C22.3257 19.154 24.8007 15.49 25.9357 12.578C26.0727 13.262 26.1407 13.973 26.1407 14.697ZM3.3087 15.736C3.8687 15.189 4.6617 14.889 5.6187 14.807C6.0567 19.154 7.7927 22.613 9.7207 24.978C6.2067 23.256 3.6917 19.797 3.3087 15.736ZM12.8237 16.447C13.3847 19.646 14.7797 23.844 17.1987 25.853C16.5297 26.004 15.8597 26.1 15.1617 26.127C12.7287 25.252 8.8867 21.41 8.1077 14.984C9.4887 15.23 11.0737 15.736 12.8237 16.447Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 0C6.2067 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7267 27.426C21.2327 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.7127 0ZM13.7127 1.463C15.7227 1.463 17.6227 1.955 19.3047 2.83C20.1937 3.678 19.6737 5.578 18.1567 7.889C15.0527 5.51 9.5157 3.678 4.8537 5.291C7.0957 2.939 10.2537 1.463 13.7127 1.463ZM13.9317 14.779C17.9507 11.129 21.0137 6.836 21.0817 3.965C22.3397 4.922 23.4067 6.111 24.2267 7.465C24.6637 9.379 23.4337 15.313 15.3807 20.275C14.6157 18.607 14.1097 16.639 13.9317 14.779ZM13.0017 13.713C8.7227 11.84 4.2107 11.02 1.5037 12.701C1.6677 10.842 2.2417 9.092 3.1447 7.547C7.6287 4.676 13.8357 6.439 17.3497 9.023C16.2147 10.527 14.7387 12.141 13.0017 13.713ZM25.9627 13.713C25.9627 18.238 23.4477 22.23 19.7557 24.35C18.3067 24.281 17.0217 23.146 16.0367 21.52C22.1757 17.732 24.6917 13.316 25.4437 10.186C25.7847 11.307 25.9627 12.482 25.9627 13.713ZM1.4907 14.396C2.2007 13.617 3.2947 13.234 4.6487 13.152C4.9487 18.813 7.5057 22.996 9.9257 25.348C5.2497 23.803 1.7637 19.482 1.4907 14.396ZM12.5237 15.066C12.9477 18.936 14.8067 23.721 17.8147 25.252C16.5297 25.703 15.1487 25.963 13.7267 25.963C13.5487 25.963 13.3847 25.963 13.2207 25.949C10.9507 25.033 6.5347 20.604 6.0707 13.193C7.9847 13.371 10.2127 14.041 12.5237 15.066Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 0.0001C6.3987 0.0001 -0.0003 6.3851 -0.0003 14.1231C-0.0003 21.8481 6.3987 28.2461 14.1367 28.2461C21.8617 28.2461 28.2457 21.8481 28.2457 14.1231C28.2457 6.3851 21.8477 0.0001 14.1227 0.0001ZM14.1227 2.1871C16.0237 2.1871 17.8277 2.6391 19.4417 3.4591C20.2347 4.1561 19.7557 5.8791 18.3337 8.0251C15.2847 6.0431 10.4317 4.3481 5.9477 5.4691C8.0937 3.4451 10.9787 2.1871 14.1227 2.1871ZM14.4507 15.2991C18.2107 11.8811 21.2187 7.8201 21.6157 4.8811C22.6407 5.7011 23.5157 6.6991 24.2127 7.8061C24.5957 9.6661 23.3377 15.2581 15.7907 20.3031C15.1347 18.7441 14.6837 16.9531 14.4507 15.2991ZM13.1797 13.8361C9.0917 12.1541 4.9767 11.3341 2.2697 12.7831C2.4477 11.1831 2.9527 9.6661 3.7187 8.3121C8.0797 5.7831 13.6167 7.3691 17.1987 9.5841C16.1327 10.9371 14.7657 12.4001 13.1797 13.8361ZM26.0587 14.1231C26.0587 18.5251 23.5977 22.4221 19.9887 24.4861C18.6617 24.4731 17.5407 23.4881 16.6527 22.0251C22.1617 18.4161 24.7327 14.3551 25.7027 11.2521C25.9357 12.1681 26.0587 13.1391 26.0587 14.1231ZM2.2287 15.0121C2.8847 14.3281 3.8277 13.9731 5.0177 13.9041C5.2777 18.8671 7.3557 22.7091 9.5567 25.1151C5.5237 23.4061 2.5707 19.5371 2.2287 15.0121ZM12.5367 15.6811C13.0707 19.1951 14.6567 23.7751 17.3767 25.5941C16.3377 25.8941 15.2577 26.0451 14.1367 26.0451H14.0687C11.7987 25.2931 7.4507 21.1091 6.9727 14.0141C8.5997 14.2461 10.4867 14.8341 12.5367 15.6811Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 0.0004C6.3297 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3437 27.8904 13.9587 27.8904C21.5877 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5737 0.0004 13.9457 0.0004ZM13.9457 1.8594C15.9007 1.8594 17.7597 2.3374 19.4137 3.1854C20.1657 3.9644 19.6737 5.7014 18.2657 7.8474C15.1617 5.8244 10.0897 4.0464 5.4827 5.3734C7.6697 3.2124 10.6777 1.8594 13.9457 1.8594ZM14.2047 15.0934C18.0607 11.6074 21.1097 7.4374 21.4377 4.4984C22.5317 5.3734 23.4747 6.4394 24.2127 7.6284C24.5817 9.5704 23.2967 15.3674 15.5587 20.1794C14.8887 18.5934 14.4377 16.7754 14.2047 15.0934ZM13.0427 13.7534C8.8597 12.0174 4.6347 11.1834 1.9277 12.7284C2.0917 11.0464 2.6247 9.4744 3.4177 8.0524C7.9027 5.3594 13.6037 7.0414 17.2407 9.2834C16.1327 10.7054 14.6977 12.2504 13.0427 13.7534ZM26.0317 13.9454C26.0317 18.4164 23.5297 22.3674 19.8517 24.4594C18.4567 24.4454 17.2677 23.3374 16.3377 21.7524C22.1207 18.1974 24.7047 13.9864 25.6207 10.8414C25.8947 11.8264 26.0317 12.8784 26.0317 13.9454ZM1.8867 14.7794C2.5707 14.0684 3.5817 13.6994 4.8257 13.6304C5.0317 18.7984 7.2327 22.7504 9.5017 25.1564C5.3047 23.4614 2.2287 19.4684 1.8867 14.7794ZM12.4417 15.4494C12.9607 19.0724 14.6157 23.7614 17.4317 25.5114C16.3237 25.8534 15.1617 26.0314 13.9587 26.0314C13.8767 26.0314 13.7947 26.0314 13.7127 26.0314C11.5117 25.3064 7.0137 21.0004 6.6307 13.7264C8.3397 13.9454 10.3227 14.5604 12.4417 15.4494Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 -0.0005C6.4397 -0.0005 -0.0003 6.4535 -0.0003 14.2595C-0.0003 22.0805 6.4527 28.5335 14.2737 28.5335C22.0797 28.5335 28.5197 22.0805 28.5197 14.2595C28.5197 6.4535 22.0797 -0.0005 14.2597 -0.0005ZM14.2597 2.4475C16.1187 2.4475 17.8827 2.8985 19.4547 3.6775C20.2887 4.3335 19.8107 6.0295 18.3887 8.1755C15.4077 6.2345 10.6917 4.5935 6.3027 5.5645C8.4217 3.6365 11.2107 2.4475 14.2597 2.4475ZM14.6287 15.4765C18.3337 12.1135 21.3007 8.1215 21.7657 5.1815C22.7227 5.9745 23.5567 6.9045 24.2267 7.9565C24.6227 9.7485 23.3657 15.2035 15.9687 20.4125C15.3257 18.8805 14.8747 17.1175 14.6287 15.4765ZM13.2887 13.9175C9.2697 12.2775 5.2497 11.4565 2.5297 12.8515C2.7207 11.3065 3.2127 9.8435 3.9507 8.5315C8.2167 6.1245 13.6447 7.6425 17.1857 9.8305C16.1327 11.1285 14.8207 12.5375 13.2887 13.9175ZM26.0727 14.2595C26.0727 18.6215 23.6527 22.4765 20.0977 24.5275C18.8257 24.5135 17.7597 23.6115 16.8987 22.2445C22.1897 18.5935 24.7457 14.6285 25.7577 11.5805C25.9627 12.4415 26.0727 13.3435 26.0727 14.2595ZM2.4887 15.1895C3.1167 14.5465 4.0327 14.2055 5.1547 14.1365C5.4687 18.9495 7.4507 22.6955 9.5837 25.1015C5.6877 23.3785 2.8297 19.6055 2.4887 15.1895ZM12.6057 15.8735C13.1387 19.3185 14.6837 23.8025 17.3227 25.6755C16.3657 25.9355 15.3667 26.0725 14.3277 26.0855C12.0177 25.2925 7.7927 21.1915 7.2327 14.2465C8.8047 14.4925 10.6227 15.0525 12.6057 15.8735Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.4117 0.0002ZM13.4117 0.9432C15.4767 0.9432 17.4457 1.4632 19.1677 2.3652C20.2347 3.2952 19.6877 5.4142 18.0197 7.9292C14.9707 5.0722 8.6677 3.1852 3.9917 5.2632C6.2887 2.6252 9.6527 0.9432 13.4117 0.9432ZM13.5627 14.3692C17.8557 10.4722 20.9177 5.9472 20.5757 3.2262C22.0667 4.2792 23.3237 5.6602 24.2407 7.2602C24.7867 9.1052 23.6247 15.2172 15.1757 20.4122C14.2597 18.6482 13.6717 16.4742 13.5627 14.3692ZM12.9607 13.6722C8.5587 11.5942 3.5957 10.8012 0.9707 12.6872C1.0797 10.5822 1.7367 8.6132 2.7887 6.9042C7.2187 3.7872 14.1507 5.6462 17.4867 8.7092C16.3237 10.2952 14.7797 12.0172 12.9607 13.6722ZM25.8667 13.4122C25.8667 18.0062 23.3517 22.0392 19.6187 24.1992C18.0877 24.0762 16.6937 22.9002 15.6407 21.2192C22.3397 17.0622 24.6917 12.3042 25.1697 9.2832C25.6207 10.5822 25.8667 11.9632 25.8667 13.4122ZM12.6327 14.5602C12.8927 18.7712 15.0937 23.6382 18.3477 24.8552C16.8297 25.5122 15.1617 25.8672 13.4117 25.8672C13.1247 25.8672 12.8377 25.8672 12.5507 25.8402C10.1987 24.6642 5.9337 20.0562 5.3317 12.5232C7.5057 12.6192 10.1037 13.3442 12.6327 14.5602ZM0.9567 13.8772C1.7087 13.0432 2.9257 12.6052 4.3887 12.5372C4.8807 18.8532 7.9157 23.3102 10.4317 25.5122C5.1407 24.2132 1.1617 19.5102 0.9567 13.8772Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001ZM13.2477 0.6701C15.3667 0.6701 17.3637 1.2031 19.1137 2.1191H19.0997C20.2477 3.1171 19.6737 5.3321 17.9507 7.9431C14.9157 4.8261 8.1487 2.8981 3.5277 5.2911C5.8377 2.4741 9.3377 0.6701 13.2477 0.6701ZM13.3707 14.1501C17.8417 10.1031 20.9047 5.4281 20.2617 2.8161C21.9297 3.9371 23.2967 5.4411 24.2677 7.1911L24.2537 7.2051C24.8147 9.0921 23.6387 15.2031 15.0797 20.4671C14.0817 18.6481 13.4397 16.3791 13.3707 14.1501ZM12.9337 13.6441C8.4627 11.4571 3.2537 10.6781 0.6837 12.6741C0.7927 10.4451 1.4767 8.3531 2.5977 6.5761C6.9867 3.3221 14.3277 5.2361 17.5407 8.5451C16.3787 10.1851 14.7927 11.9491 12.9337 13.6441ZM25.8257 13.2481C25.8257 17.8831 23.2967 21.9431 19.5507 24.1171C17.9787 23.9671 16.5297 22.7641 15.4357 21.0551C22.4627 16.7211 24.7047 11.7031 25.0057 8.7771C25.5387 10.1721 25.8257 11.6761 25.8257 13.2481ZM12.6877 14.2871C12.8657 18.6891 15.2577 23.5701 18.6207 24.6231C16.9937 25.3891 15.1617 25.8261 13.2477 25.8261C12.8927 25.8261 12.5507 25.7991 12.1957 25.7711C9.8167 24.4591 5.6187 19.7561 4.9487 12.1811C7.2597 12.2231 10.0627 12.9881 12.6877 14.2871ZM0.6837 13.5901C1.4487 12.7421 2.7207 12.2911 4.2657 12.1951C4.8537 18.8811 8.1347 23.4741 10.6917 25.5531C5.0857 24.3901 0.8477 19.4961 0.6837 13.5901Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}