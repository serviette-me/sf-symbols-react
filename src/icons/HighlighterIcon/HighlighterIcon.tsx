import { IconProps } from "../../types"

export default function HighlighterIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.859375 31.016655068936977"
          className={className}
        >
          <path
            d="              M2.7887 26.259H5.1267C5.7147 26.259 5.8657 26.136 6.1527 25.931L7.0817 25.192C7.7517 25.657 8.6137 25.726 9.4747 25.356L13.9317 23.401C14.3007 23.237 14.5607 23.087 14.8617 22.786L28.4787 9.169C29.9417 7.706 29.9547 5.792 28.5337 4.37L25.2107 1.048C23.7757 -0.374 21.8747 -0.347 20.4117 1.116L6.8087 14.706C6.4937 15.007 6.3437 15.28 6.1797 15.649L4.2247 20.12C3.8417 21.009 3.9377 21.911 4.4567 22.595L2.1737 24.892C1.6677 25.397 1.8867 26.259 2.7887 26.259ZM22.5317 4.042C22.7637 3.81 22.9417 3.823 23.1597 4.042L25.5387 6.421C25.7577 6.64 25.7717 6.817 25.5387 7.05L25.1287 7.46L22.1207 4.452ZM10.4867 16.087L19.8377 6.735L22.8457 9.757L13.5077 19.095ZM8.9417 21.72C8.7497 21.788 8.6407 21.774 8.5037 21.638L7.9437 21.077C7.8067 20.94 7.7927 20.831 7.8617 20.653L8.6547 18.849L10.7457 20.927ZM1.6137 31.017H28.2457C29.1487 31.017 29.8597 30.21 29.8597 29.335C29.8597 28.433 29.1487 27.681 28.2457 27.681H1.6137C0.7107 27.681 -0.0003 28.446 -0.0003 29.335C-0.0003 30.196 0.7247 31.017 1.6137 31.017Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.09375 29.94140625"
          className={className}
        >
          <path
            d="              M2.0777 25.1148H4.0747C4.5667 25.1148 4.7167 25.0328 5.0177 24.8008L5.9337 24.0898C6.5217 24.5818 7.3007 24.6638 8.0937 24.3358L12.5917 22.4218C12.9337 22.2718 13.1527 22.1348 13.3987 21.8748L26.7557 8.5727C28.1367 7.2048 28.1367 5.5098 26.7697 4.1288L23.6657 1.0257C22.2987 -0.3422 20.6037 -0.3422 19.2367 1.0257L5.8787 14.3148C5.6187 14.5738 5.4827 14.7798 5.3317 15.1348L3.4047 19.6328C3.0627 20.4258 3.1447 21.2048 3.6507 21.8068L1.5727 23.9528C1.1207 24.4177 1.3267 25.1148 2.0777 25.1148ZM20.9867 3.2677C21.2867 2.9528 21.6157 2.9528 21.9027 3.2538L24.5407 5.8927C24.8417 6.1938 24.8277 6.5218 24.5137 6.8227L23.8027 7.5328L20.2617 3.9788ZM8.7777 15.4218L18.4847 5.7557L22.0257 9.3107L12.3187 18.9768ZM7.7107 21.4508C7.4927 21.5328 7.3277 21.5328 7.1367 21.3418L6.3847 20.5898C6.1937 20.3988 6.1937 20.2347 6.2887 20.0158L7.3417 17.5688L10.1717 20.3988ZM1.3537 29.9418H27.7407C28.4927 29.9418 29.0937 29.2848 29.0937 28.5468C29.0937 27.7948 28.4927 27.1658 27.7407 27.1658H1.3537C0.6017 27.1658 -0.0003 27.8088 -0.0003 28.5468C-0.0003 29.2848 0.6157 29.9418 1.3537 29.9418Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.490234375 30.500300411392253"
          className={className}
        >
          <path
            d="              M2.4477 25.7151H4.6347C5.1677 25.7151 5.3187 25.6061 5.6187 25.3871L6.5347 24.6621C7.1637 25.1411 7.9977 25.2231 8.8187 24.8671L13.3027 22.9261C13.6587 22.7761 13.8907 22.6251 14.1777 22.3521L27.6587 8.8851C29.0937 7.4631 29.0937 5.6451 27.6997 4.2501L24.4867 1.0371C23.0777 -0.3569 21.2737 -0.3439 19.8517 1.0651L6.3707 14.5181C6.0837 14.8051 5.9337 15.0371 5.7837 15.4061L3.8417 19.8771C3.4727 20.7251 3.5687 21.5721 4.0747 22.2151L1.8867 24.4441C1.4087 24.9221 1.6137 25.7151 2.4477 25.7151ZM21.8067 3.6761C22.0667 3.4021 22.3127 3.4161 22.5727 3.6621L25.0747 6.1641C25.3207 6.4241 25.3337 6.6701 25.0607 6.9441L24.5137 7.4901L21.2457 4.2231ZM9.6797 15.7621L19.1957 6.2741L22.4627 9.5411L12.9477 19.0431ZM8.3537 21.5861C8.1617 21.6681 8.0257 21.6541 7.8617 21.4901L7.2047 20.8481C7.0407 20.6841 7.0407 20.5471 7.1227 20.3421L8.0387 18.2361L10.4727 20.6701ZM1.4907 30.5001H27.9997C28.8337 30.5001 29.4907 29.7761 29.4907 28.9691C29.4907 28.1211 28.8337 27.4381 27.9997 27.4381H1.4907C0.6567 27.4381 -0.0003 28.1351 -0.0003 28.9691C-0.0003 29.7621 0.6697 30.5001 1.4907 30.5001Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.328125 28.039906670659658"
          className={className}
        >
          <path
            d="              M1.8047 23.3774H3.2677C3.6097 23.3774 3.7457 23.3094 4.0057 23.1184L4.9907 22.3934L5.0447 22.4484C5.4957 22.8994 6.0567 22.9814 6.6717 22.7214L11.2927 20.9304C11.6077 20.8074 11.7307 20.7114 11.9217 20.5204L25.0747 7.5864C26.2497 6.4244 26.2367 5.0434 25.0607 3.8404L22.1897 0.9284C21.0137 -0.2746 19.6187 -0.3156 18.4437 0.8464L5.2777 13.7804C5.0857 13.9714 4.9907 14.0944 4.8677 14.3954L2.9937 19.0164C2.7347 19.6184 2.7887 20.1654 3.2537 20.6294L3.2947 20.6704L1.4627 22.5434C1.1207 22.9134 1.2987 23.3774 1.8047 23.3774ZM19.5237 2.0364C20.0017 1.5714 20.5627 1.5574 21.0137 2.0084L23.9527 5.0164C24.4047 5.4814 24.3767 6.0284 23.8987 6.4934L22.8317 7.5454L18.4567 3.0884ZM6.9177 14.4364L17.4457 4.0864L21.8207 8.5434L11.3067 18.8934ZM6.4807 21.0944C6.2067 21.1904 6.0427 21.1764 5.8107 20.9584L4.7577 19.8774C4.5387 19.6594 4.5257 19.4674 4.6347 19.2084L6.0977 15.6394L10.0897 19.6864ZM0.8477 28.0404H27.4807C27.9457 28.0404 28.3277 27.6574 28.3277 27.1924C28.3277 26.7274 27.9457 26.3444 27.4807 26.3444H0.8477C0.3827 26.3444 -0.0003 26.7274 -0.0003 27.1924C-0.0003 27.6574 0.3827 28.0404 0.8477 28.0404Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.6015625 29.24766430412371"
          className={className}
        >
          <path
            d="              M1.6267 24.3802H3.4047C3.8147 24.3802 3.9787 24.3122 4.2797 24.0662L5.1957 23.3692C5.7017 23.8882 6.4527 23.9842 7.2047 23.6692L11.7307 21.7832C12.0727 21.6322 12.2497 21.5092 12.4687 21.2902L25.6617 8.1932C26.9747 6.8802 26.9607 5.3082 25.6347 3.9822L22.6817 1.0152C21.3557 -0.3248 19.7837 -0.3378 18.4707 0.9742L5.2777 14.0582C5.0587 14.2902 4.9357 14.4542 4.7847 14.7962L2.8707 19.3222C2.5567 20.0332 2.6387 20.7572 3.1447 21.3042L1.1897 23.3412C0.7657 23.7922 0.9707 24.3802 1.6267 24.3802ZM19.9887 2.7652C20.3437 2.4102 20.7677 2.3962 21.1097 2.7382L23.9117 5.5542C24.2407 5.8962 24.2267 6.3202 23.8707 6.6752L22.9547 7.5782L19.0727 3.6672ZM7.6837 14.9882L17.6097 5.1302L21.4927 9.0272L11.5667 18.8982ZM6.9317 21.2632C6.6717 21.3722 6.4937 21.3722 6.2617 21.1402L5.4007 20.2792C5.1677 20.0462 5.1677 19.8552 5.2777 19.6092L6.5077 16.7382L9.8027 20.0602ZM1.1897 29.2472H27.4117C28.0687 29.2472 28.6017 28.6872 28.6017 28.0442C28.6017 27.3882 28.0687 26.8412 27.4117 26.8412H1.1897C0.5337 26.8412 -0.0003 27.3882 -0.0003 28.0442C-0.0003 28.6872 0.5337 29.2472 1.1897 29.2472Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.328125 28.854737612858518"
          className={className}
        >
          <path
            d="              M1.3677 23.9741H3.0217C3.4047 23.9741 3.5687 23.9051 3.8687 23.6591L4.7847 22.9621L4.8127 22.9891C5.3187 23.4951 6.0017 23.5911 6.6997 23.2901L11.2387 21.4171C11.5797 21.2801 11.7437 21.1571 11.9497 20.9521L25.0337 7.9641C26.3187 6.6931 26.3047 5.2021 25.0057 3.8901L22.1347 0.9911C20.8227 -0.3069 19.3317 -0.3349 18.0467 0.9371L4.9497 13.9251C4.7437 14.1161 4.6207 14.2671 4.4847 14.6091L2.5707 19.1481C2.2837 19.8181 2.3517 20.4871 2.8577 21.0071L0.9707 23.0031C0.5607 23.4271 0.7657 23.9741 1.3677 23.9741ZM19.4277 2.4681C19.8247 2.0991 20.2887 2.0711 20.6587 2.4411L23.5427 5.3531C23.9117 5.7361 23.8847 6.2001 23.5017 6.5831L22.4767 7.5951L18.4027 3.4931ZM7.0687 14.7451L17.1177 4.7651L21.1917 8.8661L11.1427 18.8471ZM6.4937 21.1711C6.2207 21.2671 6.0157 21.2671 5.7697 21.0211L4.8397 20.0911C4.5937 19.8451 4.5937 19.6261 4.7027 19.3801L6.0297 16.2771L9.5977 19.8721ZM1.0937 28.8551H27.2207C27.8227 28.8551 28.3277 28.3491 28.3277 27.7471C28.3277 27.1461 27.8227 26.6541 27.2207 26.6541H1.0937C0.4927 26.6541 -0.0003 27.1461 -0.0003 27.7471C-0.0003 28.3491 0.4927 28.8551 1.0937 28.8551Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.806640625 29.546690015748595"
          className={className}
        >
          <path
            d="              M1.8187 24.6928H3.6917C4.1427 24.6928 4.2927 24.6108 4.5937 24.3788L5.5097 23.6818C6.0707 24.1868 6.8227 24.2828 7.5877 23.9548L12.0997 22.0548C12.4417 21.9038 12.6327 21.7678 12.8657 21.5348L26.1267 8.3548C27.4667 7.0158 27.4667 5.3888 26.1267 4.0488L23.1057 1.0138C21.7657 -0.3262 20.1387 -0.3402 18.7987 0.9858L5.5367 14.1658C5.3047 14.4118 5.1677 14.5898 5.0177 14.9448L3.1037 19.4568C2.7757 20.2088 2.8577 20.9468 3.3637 21.5208L1.3537 23.5998C0.9157 24.0638 1.1207 24.6928 1.8187 24.6928ZM20.4117 2.9688C20.7537 2.6408 21.1367 2.6408 21.4517 2.9548L24.1857 5.7028C24.4997 6.0178 24.4867 6.3998 24.1447 6.7288L23.3247 7.5618L19.5777 3.8028ZM8.1487 15.1778L17.9787 5.4018L21.7247 9.1478L11.8947 18.9368ZM7.2597 21.3438C7.0277 21.4388 6.8497 21.4388 6.6307 21.2208L5.8247 20.4138C5.6187 20.1948 5.6187 20.0178 5.7147 19.7848L6.8637 17.0918L9.9667 20.2088ZM1.2577 29.5468H27.5487C28.2457 29.5468 28.8067 28.9448 28.8067 28.2618C28.8067 27.5638 28.2457 26.9768 27.5487 26.9768H1.2577C0.5607 26.9768 -0.0003 27.5638 -0.0003 28.2618C-0.0003 28.9448 0.5747 29.5468 1.2577 29.5468Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.341796875 26.963673160120226"
          className={className}
        >
          <path
            d="              M2.3787 22.589H3.5957C3.8967 22.589 3.9927 22.52 4.1837 22.397L5.2497 21.618L5.3597 21.727C5.7287 22.11 6.1117 22.151 6.6177 21.973L11.3617 20.278C11.6347 20.182 11.7307 20.114 11.9087 19.936L25.1287 7.071C26.1677 6.046 26.1677 4.843 25.1287 3.763L22.2847 0.823C21.2457 -0.23 20.0017 -0.284 18.9627 0.727L5.7287 13.579C5.5507 13.757 5.4687 13.839 5.3597 14.112L3.5407 18.829C3.3497 19.321 3.3767 19.704 3.7597 20.087L3.8687 20.21L2.1327 21.932C1.8727 22.206 1.9957 22.589 2.3787 22.589ZM19.6597 1.438C20.2477 0.878 20.9317 0.864 21.4927 1.438L24.4997 4.542C25.0607 5.13 25.0337 5.8 24.4317 6.374L23.3107 7.454L18.5257 2.546ZM6.7267 14.003L17.8687 3.188L22.6407 8.11L11.5117 18.925ZM6.4807 20.989C6.1797 21.085 6.0567 21.044 5.8787 20.866L4.6347 19.595C4.4567 19.403 4.4297 19.253 4.5257 18.979L6.1797 14.768L10.7457 19.444ZM0.5057 26.964H27.8357C28.1097 26.964 28.3417 26.731 28.3417 26.444C28.3417 26.171 28.1097 25.938 27.8357 25.938H0.5057C0.2327 25.938 -0.0003 26.171 -0.0003 26.444C-0.0003 26.731 0.2327 26.964 0.5057 26.964Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.341796875 26.40854438426271"
          className={className}
        >
          <path
            d="              M2.6797 22.1706H3.7597C4.0467 22.1706 4.1157 22.1156 4.2657 22.0196L5.3867 21.2266L5.5097 21.3496C5.8377 21.7056 6.1387 21.7326 6.5897 21.5826L11.4027 19.9416C11.6617 19.8596 11.7307 19.8046 11.8947 19.6406L25.1427 6.8166C26.1267 5.8596 26.1267 4.7246 25.1697 3.7266L22.3267 0.7736C21.3687 -0.2104 20.2067 -0.2654 19.2367 0.6646L5.9477 13.4746C5.7837 13.6526 5.7147 13.7206 5.6187 13.9536L3.8277 18.7246C3.6507 19.1766 3.6777 19.4636 4.0197 19.8046L4.1697 19.9696L2.4747 21.6236C2.2427 21.8426 2.3517 22.1706 2.6797 22.1706ZM19.7287 1.1426C20.3707 0.5276 21.1097 0.5006 21.7247 1.1426L24.7867 4.3016C25.4027 4.9576 25.3617 5.6686 24.6917 6.2976L23.5567 7.4046L18.5667 2.2506ZM6.6307 13.7756L18.0877 2.7156L23.0647 7.8836L11.6207 18.9436ZM6.4807 20.9266C6.1797 21.0356 6.0707 20.9806 5.9197 20.8306L4.5797 19.4356C4.4157 19.2586 4.3747 19.1486 4.4847 18.8616L6.2207 14.3226L11.0747 19.3266ZM0.3277 26.4086H27.9997C28.1917 26.4086 28.3417 26.2586 28.3417 26.0666C28.3417 25.8886 28.1917 25.7386 27.9997 25.7386H0.3277C0.1507 25.7386 -0.0003 25.8886 -0.0003 26.0666C-0.0003 26.2586 0.1507 26.4086 0.3277 26.4086Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}