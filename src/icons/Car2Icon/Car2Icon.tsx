import { IconProps } from "../../types"

export default function Car2IconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.51953125 28.546875"
          className={className}
        >
          <path
            d="              M2.7067 28.5468H4.5117C5.6327 28.5468 6.5217 27.6578 6.5217 26.5368V24.3498C8.7087 24.4998 11.6077 24.6098 14.4647 24.6508V26.5368C14.4647 27.6578 15.3537 28.5468 16.4747 28.5468H18.2797C19.4007 28.5468 20.2887 27.6578 20.2887 26.5368V24.3498C23.3787 24.5408 27.8497 24.6918 31.6367 24.6918C35.4377 24.6918 39.9087 24.5408 42.9977 24.3498V26.5368C42.9977 27.6578 43.8867 28.5468 45.0077 28.5468H46.8127C47.9337 28.5468 48.8227 27.6578 48.8227 26.5368V22.3398C49.2737 21.6698 49.5197 20.8358 49.5197 19.8648V17.4588C49.5197 14.6428 49.2597 13.0158 47.8247 11.3618L46.3747 9.6938C45.8557 7.2458 44.9527 4.6758 44.4607 3.6508C43.5727 1.7498 41.8637 0.5738 39.6617 0.2738C38.3907 0.1098 35.7107 -0.0002 31.6367 -0.0002C28.5197 -0.0002 26.2227 0.0688 24.7457 0.1638C23.2697 0.0688 20.9867 -0.0002 17.8687 -0.0002C13.8087 -0.0002 11.1287 0.1098 9.8577 0.2738C7.6427 0.5738 5.9337 1.7368 5.0587 3.6508C4.5797 4.6758 3.6637 7.2458 3.1307 9.6938L1.6957 11.3618C0.2597 13.0158 -0.0003 14.6428 -0.0003 17.4588V19.5238C-0.0003 20.6448 0.2327 21.5738 0.6977 22.3128V26.5368C0.6977 27.6578 1.5857 28.5468 2.7067 28.5468ZM5.7697 20.3028C4.4977 20.1798 3.7597 19.4008 3.7597 18.2108V16.8298C3.7597 15.0798 4.2797 14.2048 4.8537 13.4258L6.6447 11.0738C6.8767 9.8708 7.6977 6.7268 8.2437 5.6328C8.7637 4.5798 9.6657 4.1288 10.6777 3.9918C11.8397 3.8148 14.1227 3.7328 17.8687 3.7328C18.1837 3.7328 18.4847 3.7328 18.7847 3.7328C18.6487 4.0198 18.4977 4.4158 18.3207 4.8948H17.8687C14.2737 4.8948 12.0997 4.9358 11.4437 5.0178C10.2947 5.1958 9.6797 5.5368 9.3247 6.2348C8.9957 6.8498 8.6407 7.9978 8.4497 8.7228C8.2437 9.5568 8.6267 10.1168 9.5427 10.0898C10.4997 10.0758 13.9997 10.0078 16.6657 9.9808L15.4627 11.3618C14.0277 13.0158 13.7677 14.6428 13.7677 17.4588V19.8648C13.7677 20.1658 13.7947 20.4528 13.8357 20.7268C10.3637 20.6308 7.2327 20.4528 5.7697 20.3028ZM31.6367 20.7678C26.7837 20.7678 21.5467 20.5078 19.2227 20.2618C18.0467 20.1388 17.5277 19.5918 17.5277 18.5388V16.8298C17.5277 15.0798 18.0467 14.2048 18.6207 13.4258L20.4117 11.0738C20.6447 9.8708 21.4787 6.7268 22.0257 5.6328C22.5317 4.5798 23.4337 4.1288 24.4457 3.9918C25.6077 3.8148 27.8907 3.7328 31.6367 3.7328C35.3827 3.7328 37.6797 3.8558 38.8417 3.9918C39.8397 4.1148 40.7147 4.5798 41.2887 5.6738C41.7817 6.6448 42.6017 9.7618 42.8747 11.0738L44.6527 13.4258C45.2407 14.2048 45.7597 15.0798 45.7597 16.8298V18.5388C45.7597 19.5918 45.2267 20.1388 44.0647 20.2618C41.7267 20.5078 36.5037 20.7678 31.6367 20.7678ZM22.2307 8.7228C22.0257 9.5708 22.3947 10.1168 23.3107 10.0898C24.5957 10.0628 26.8517 9.9528 31.6367 9.9528C36.4357 9.9528 38.6917 10.0628 39.9627 10.0898C40.8927 10.1168 41.2617 9.5708 41.0567 8.7228C40.8927 7.9978 40.5367 6.9178 40.3187 6.4808C39.8677 5.5238 39.2247 5.1958 38.0767 5.0178C37.4197 4.9358 35.2327 4.8948 31.6367 4.8948C28.0547 4.8948 25.8677 4.9358 25.2107 5.0178C24.0627 5.1958 23.4337 5.5238 22.9687 6.4808C22.7497 6.9178 22.4087 7.9978 22.2307 8.7228ZM7.8477 19.5648C9.3787 19.5648 10.5277 18.4158 10.5277 16.8988C10.5277 15.3808 9.3787 14.2188 7.8477 14.2188C6.3297 14.2188 5.1817 15.3808 5.1817 16.8988C5.1817 18.4158 6.3297 19.5648 7.8477 19.5648ZM21.6287 19.5648C23.1467 19.5648 24.2947 18.4158 24.2947 16.8988C24.2947 15.3808 23.1467 14.2188 21.6287 14.2188C20.1117 14.2188 18.9497 15.3808 18.9497 16.8988C18.9497 18.4158 20.1117 19.5648 21.6287 19.5648ZM41.6587 19.5648C43.1757 19.5648 44.3377 18.4158 44.3377 16.8988C44.3377 15.3808 43.1757 14.2188 41.6587 14.2188C40.1407 14.2188 38.9927 15.3808 38.9927 16.8988C38.9927 18.4158 40.1407 19.5648 41.6587 19.5648ZM27.6177 18.8538H35.6567C36.8047 18.8538 37.6247 18.0328 37.6247 16.8988C37.6247 15.7498 36.8047 14.9298 35.6567 14.9298H27.6177C26.4827 14.9298 25.6617 15.7498 25.6617 16.8988C25.6617 18.0328 26.4827 18.8538 27.6177 18.8538Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.59375 26.947265625"
          className={className}
        >
          <path
            d="              M2.6117 26.947H4.3207C5.3867 26.947 6.2207 26.113 6.2207 25.047V22.832C8.2307 22.955 10.7457 23.051 13.2347 23.092V25.047C13.2347 26.113 14.0687 26.947 15.1487 26.947H16.8577C17.9377 26.947 18.7717 26.113 18.7717 25.047V22.832C21.8067 23.01 26.0447 23.146 29.5727 23.146C33.0857 23.146 37.3247 23.01 40.3727 22.832V25.047C40.3727 26.113 41.2067 26.947 42.2737 26.947H43.9827C45.0627 26.947 45.8967 26.113 45.8967 25.047V21.232C46.3477 20.644 46.5937 19.893 46.5937 18.977V16.57C46.5937 14 46.2247 12.551 44.8707 10.896L43.5857 9.324C43.0667 6.863 42.1637 4.293 41.6857 3.268C40.8657 1.559 39.3067 0.506 37.2967 0.232C36.2027 0.082 33.3727 0 29.5727 0C26.8517 0 24.6227 0.055 23.1877 0.123C21.7797 0.055 19.6877 0 17.0217 0C13.2207 0 10.3907 0.096 9.2967 0.232C7.2867 0.492 5.7147 1.545 4.9087 3.268C4.4437 4.293 3.5277 6.863 3.0077 9.324L1.7087 10.896C0.3557 12.551 -0.0003 14 -0.0003 16.57V18.662C-0.0003 19.701 0.2327 20.549 0.6977 21.191V25.047C0.6977 26.113 1.5317 26.947 2.6117 26.947ZM4.5667 19.811C3.3497 19.687 2.7757 18.99 2.7757 17.869V16.256C2.7757 14.437 3.1857 13.562 4.0057 12.482L5.5917 10.391C5.8927 8.805 6.7537 5.852 7.3147 4.676C7.8067 3.664 8.6817 3.144 9.8027 3.008C10.8277 2.871 13.3577 2.762 17.0217 2.762C17.2677 2.762 17.4997 2.762 17.7187 2.762C17.6227 2.926 17.5277 3.09 17.4457 3.268C17.3497 3.486 17.2407 3.76 17.1037 4.088H17.0217C13.3987 4.088 11.1837 4.156 10.3497 4.279C9.4197 4.416 8.9277 4.717 8.5587 5.373C8.1897 6.057 7.6977 7.574 7.4377 8.668C7.2737 9.324 7.5607 9.693 8.2847 9.666C9.6527 9.598 12.6597 9.516 15.4357 9.475L14.2597 10.896C12.9067 12.551 12.5367 14 12.5367 16.57V18.977C12.5367 19.428 12.6057 19.852 12.7147 20.234C9.2557 20.152 6.0567 19.975 4.5667 19.811ZM29.5727 20.289C24.8147 20.289 19.2087 20.057 16.9527 19.797C15.7907 19.66 15.3127 19.086 15.3127 18.033V16.256C15.3127 14.437 15.7227 13.562 16.5427 12.482L18.1427 10.391C18.4437 8.805 19.3047 5.852 19.8657 4.676C20.3437 3.664 21.2187 3.144 22.3537 3.008C23.3657 2.871 25.8947 2.762 29.5727 2.762C33.2367 2.762 35.7927 2.885 36.7637 3.008C37.9117 3.144 38.7737 3.678 39.2797 4.689C39.8267 5.811 40.6737 8.75 40.9887 10.391L42.5877 12.482C43.4087 13.562 43.8187 14.437 43.8187 16.256V18.033C43.8187 19.086 43.3537 19.66 42.1777 19.797C39.9217 20.057 34.3167 20.289 29.5727 20.289ZM19.9747 8.668C19.8247 9.324 20.1117 9.693 20.8227 9.666C22.5587 9.584 24.9787 9.461 29.5727 9.461C34.1527 9.461 36.5727 9.584 38.3087 9.666C39.0197 9.693 39.3067 9.324 39.1567 8.668C38.9097 7.574 38.4177 6.084 38.0897 5.496C37.6797 4.717 37.1737 4.416 36.2307 4.279C35.4097 4.156 33.1957 4.088 29.5727 4.088C25.9357 4.088 23.7207 4.156 22.9007 4.279C21.9707 4.416 21.4517 4.717 21.0407 5.496C20.7127 6.084 20.2347 7.574 19.9747 8.668ZM7.0817 18.73C8.4767 18.73 9.5157 17.691 9.5157 16.297C9.5157 14.916 8.4767 13.863 7.0817 13.863C5.7017 13.863 4.6487 14.916 4.6487 16.297C4.6487 17.691 5.7017 18.73 7.0817 18.73ZM19.6327 18.73C21.0137 18.73 22.0667 17.691 22.0667 16.297C22.0667 14.916 21.0137 13.863 19.6327 13.863C18.2387 13.863 17.1857 14.916 17.1857 16.297C17.1857 17.691 18.2387 18.73 19.6327 18.73ZM39.5117 18.73C40.8927 18.73 41.9457 17.691 41.9457 16.297C41.9457 14.916 40.8927 13.863 39.5117 13.863C38.1177 13.863 37.0647 14.916 37.0647 16.297C37.0647 17.691 38.1177 18.73 39.5117 18.73ZM25.7437 18.115H33.3867C34.4257 18.115 35.1637 17.377 35.1637 16.338C35.1637 15.299 34.4257 14.561 33.3867 14.561H25.7437C24.7187 14.561 23.9807 15.299 23.9807 16.338C23.9807 17.377 24.7187 18.115 25.7437 18.115Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.138671875 27.794921875"
          className={className}
        >
          <path
            d="              M2.6657 27.7946H4.4157C5.5237 27.7946 6.3847 26.9336 6.3847 25.8396V23.6386C8.4907 23.7756 11.2107 23.8706 13.8907 23.9256V25.8396C13.8907 26.9336 14.7517 27.7946 15.8457 27.7946H17.6097C18.7027 27.7946 19.5647 26.9336 19.5647 25.8396V23.6386C22.6407 23.8296 27.0017 23.9536 30.6657 23.9536C34.3297 23.9536 38.6917 23.8296 41.7537 23.6386V25.8396C41.7537 26.9336 42.6157 27.7946 43.7227 27.7946H45.4727C46.5797 27.7946 47.4417 26.9336 47.4417 25.8396V21.8206C47.8927 21.1916 48.1387 20.3986 48.1387 19.4546V17.0486C48.1387 14.3416 47.8247 12.7966 46.4297 11.1426L45.0627 9.5296C44.5427 7.0686 43.6407 4.4976 43.1487 3.4726C42.3007 1.6676 40.6597 0.5466 38.5407 0.2596C37.3517 0.0956 34.6037 -0.0004 30.6657 -0.0004C27.7267 -0.0004 25.4567 0.0546 23.9937 0.1506C22.5447 0.0686 20.3707 -0.0004 17.4727 -0.0004C13.5347 -0.0004 10.7867 0.1096 9.5837 0.2596C7.4787 0.5336 5.8247 1.6546 4.9907 3.4726C4.5117 4.4976 3.5957 7.0686 3.0767 9.5296L1.7087 11.1426C0.3007 12.7966 -0.0003 14.3416 -0.0003 17.0486V19.1266C-0.0003 20.2066 0.2327 21.0956 0.6977 21.7796V25.8396C0.6977 26.9336 1.5587 27.7946 2.6657 27.7946ZM5.2087 20.0706C3.9517 19.9476 3.2947 19.2086 3.2947 18.0606V16.5566C3.2947 14.7796 3.7597 13.9046 4.4567 12.9886L6.1527 10.7456C6.4117 9.3656 7.2597 6.3166 7.8067 5.1816C8.3127 4.1426 9.2017 3.6636 10.2677 3.5276C11.3617 3.3766 13.7677 3.2676 17.4727 3.2676C17.7457 3.2676 18.0057 3.2816 18.2657 3.2816C18.2387 3.3356 18.2107 3.4046 18.1697 3.4726C18.0607 3.7326 17.9097 4.0876 17.7457 4.5116H17.4727C13.8637 4.5116 11.6617 4.5666 10.9237 4.6756C9.8847 4.8266 9.3247 5.1546 8.9687 5.8246C8.6137 6.4806 8.1897 7.7926 7.9707 8.6956C7.7797 9.4476 8.1207 9.9126 8.9547 9.8986C10.1037 9.8436 13.3987 9.7756 16.0777 9.7346L14.9027 11.1426C13.4937 12.7966 13.1937 14.3416 13.1937 17.0486V19.4546C13.1937 19.8246 13.2207 20.1656 13.3027 20.4946C9.8437 20.4126 6.6717 20.2206 5.2087 20.0706ZM30.6657 20.5486C25.8537 20.5486 20.4527 20.3026 18.1427 20.0426C16.9807 19.9196 16.4887 19.3596 16.4887 18.3066V16.5566C16.4887 14.7796 16.9527 13.9046 17.6507 12.9886L19.3317 10.7456C19.6057 9.3656 20.4397 6.3166 20.9997 5.1816C21.5057 4.1426 22.3947 3.6636 23.4607 3.5276C24.5547 3.3766 26.9477 3.2676 30.6657 3.2676C34.3707 3.2676 36.7907 3.4046 37.8577 3.5276C38.9237 3.6636 39.7987 4.1566 40.3317 5.2086C40.8657 6.2476 41.6997 9.2836 41.9867 10.7456L43.6817 12.9886C44.3787 13.9046 44.8437 14.7796 44.8437 16.5566V18.3066C44.8437 19.3596 44.3377 19.9196 43.1757 20.0426C40.8787 20.3026 35.4787 20.5486 30.6657 20.5486ZM21.1637 8.6956C20.9867 9.4606 21.3147 9.9126 22.1487 9.8986C23.6387 9.8436 25.9627 9.7206 30.6657 9.7206C35.3557 9.7206 37.6937 9.8436 39.1837 9.8986C40.0177 9.9126 40.3457 9.4606 40.1547 8.6956C39.9497 7.7926 39.5387 6.5356 39.2657 6.0156C38.8277 5.1406 38.2537 4.8266 37.2017 4.6756C36.4767 4.5666 34.2757 4.5116 30.6657 4.5116C27.0567 4.5116 24.8557 4.5666 24.1177 4.6756C23.0647 4.8266 22.5037 5.1406 22.0527 6.0156C21.7927 6.5356 21.3827 7.7926 21.1637 8.6956ZM7.4927 19.1816C8.9417 19.1816 10.0487 18.0746 10.0487 16.6116C10.0487 15.1626 8.9417 14.0546 7.4927 14.0546C6.0427 14.0546 4.9357 15.1626 4.9357 16.6116C4.9357 18.0746 6.0427 19.1816 7.4927 19.1816ZM20.6857 19.1816C22.1347 19.1816 23.2427 18.0746 23.2427 16.6116C23.2427 15.1626 22.1347 14.0546 20.6857 14.0546C19.2227 14.0546 18.1157 15.1626 18.1157 16.6116C18.1157 18.0746 19.2227 19.1816 20.6857 19.1816ZM40.6467 19.1816C42.0957 19.1816 43.2027 18.0746 43.2027 16.6116C43.2027 15.1626 42.0957 14.0546 40.6467 14.0546C39.1837 14.0546 38.0767 15.1626 38.0767 16.6116C38.0767 18.0746 39.1837 19.1816 40.6467 19.1816ZM26.7427 18.5116H34.5897C35.6837 18.5116 36.4627 17.7186 36.4627 16.6386C36.4627 15.5446 35.6837 14.7656 34.5897 14.7656H26.7427C25.6487 14.7656 24.8687 15.5446 24.8687 16.6386C24.8687 17.7186 25.6487 18.5116 26.7427 18.5116Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.642578125 24.896484375"
          className={className}
        >
          <path
            d="              M2.4607 24.8961H4.0337C5.0317 24.8961 5.7967 24.1171 5.7967 23.1331V20.9451C7.5057 21.0411 9.5297 21.1231 11.5527 21.1641V23.1331C11.5527 24.1171 12.3187 24.8961 13.3167 24.8961H14.8887C15.8867 24.8961 16.6527 24.1171 16.6527 23.1331V20.9451C19.6187 21.1091 23.5837 21.2191 26.7427 21.2191C29.9137 21.2191 33.8787 21.1091 36.8457 20.9451V23.1331C36.8457 24.1171 37.6117 24.8961 38.6097 24.8961H40.1817C41.1797 24.8961 41.9457 24.1171 41.9457 23.1331V19.8381C42.3967 19.3731 42.6427 18.7301 42.6427 17.8961V15.4901C42.6427 13.1251 42.1227 11.8941 40.9477 10.3631L39.7717 8.8461C39.2797 6.3851 38.3637 3.7871 37.8987 2.7891C37.1737 1.2441 35.7657 0.4101 34.0707 0.1911C33.1547 0.0681 30.1057 0.0001 26.7427 0.0001C24.6917 0.0001 22.7497 0.0271 21.3417 0.0681C19.9477 0.0271 17.9927 0.0001 15.9007 0.0001C12.5507 0.0001 9.4887 0.0681 8.5727 0.1911C6.8767 0.3961 5.4687 1.2441 4.7437 2.7891C4.2797 3.7871 3.3637 6.3851 2.8707 8.8461L1.6957 10.3631C0.5197 11.8941 -0.0003 13.1251 -0.0003 15.4901V17.7191C-0.0003 18.6211 0.2457 19.3051 0.6977 19.7971V23.1331C0.6977 24.1171 1.4627 24.8961 2.4607 24.8961ZM3.0767 19.3051C1.8727 19.1681 1.4217 18.5941 1.4217 17.5271V15.4901C1.4217 13.5901 1.7367 12.6601 2.8167 11.2381L4.1977 9.4471C4.5937 7.3011 5.4957 4.5801 6.0297 3.4311C6.5077 2.4201 7.4237 1.7911 8.7367 1.6401C9.5977 1.5311 12.4137 1.4221 15.9007 1.4221C16.1327 1.4221 16.3657 1.4221 16.5977 1.4221C16.2017 1.7771 15.8727 2.2151 15.6267 2.7341C12.2497 2.7341 10.0217 2.8161 9.0237 2.9531C8.1617 3.0621 7.6697 3.4311 7.3007 4.0881C6.8767 4.8401 6.2477 6.6441 5.8787 8.2851C5.7837 8.7091 5.9477 8.9411 6.4527 8.9141C8.3537 8.7771 10.4727 8.6811 13.7677 8.6401C13.7537 8.7091 13.7407 8.7771 13.7267 8.8461L12.5507 10.3631C11.3747 11.8941 10.8557 13.1251 10.8557 15.4901V17.8961C10.8557 18.6761 11.0607 19.2911 11.4567 19.7421C8.0257 19.6601 4.6617 19.4821 3.0767 19.3051ZM26.7427 19.7971C22.2167 19.7971 16.2287 19.5921 13.9177 19.3051C12.7147 19.1541 12.2637 18.5941 12.2637 17.5271V15.4901C12.2637 13.5901 12.5777 12.6601 13.6717 11.2381L15.0387 9.4471C15.4357 7.3011 16.3377 4.5801 16.8847 3.4311C17.3637 2.4201 18.2797 1.7911 19.5917 1.6401C20.4527 1.5311 23.2697 1.4221 26.7427 1.4221C30.2287 1.4221 33.0727 1.5311 33.8927 1.6401C35.2327 1.8051 36.1347 2.4201 36.6137 3.4311C37.1597 4.5801 38.0487 7.3011 38.4457 9.4471L39.8267 11.2381C40.9067 12.6601 41.2207 13.5901 41.2207 15.4901V17.5271C41.2207 18.5941 40.7697 19.1681 39.5667 19.3051C37.2697 19.5781 31.2817 19.7971 26.7427 19.7971ZM16.7347 8.2851C16.6387 8.7091 16.8027 8.9411 17.3087 8.9141C19.5917 8.7501 22.1487 8.6401 26.7427 8.6401C31.3357 8.6401 33.9067 8.7501 36.1897 8.9141C36.6957 8.9411 36.8597 8.7091 36.7637 8.2851C36.3947 6.6441 35.7797 4.8401 35.3417 4.0881C34.9587 3.4311 34.4807 3.0621 33.6187 2.9531C32.5937 2.8161 30.2697 2.7341 26.7427 2.7341C23.2287 2.7341 20.8907 2.8161 19.8657 2.9531C19.0177 3.0621 18.5257 3.4311 18.1567 4.0881C17.7187 4.8401 17.1037 6.6441 16.7347 8.2851ZM6.0427 17.5001C7.1917 17.5001 8.0667 16.6251 8.0667 15.4761C8.0667 14.3141 7.1917 13.4391 6.0427 13.4391C4.8807 13.4391 4.0057 14.3141 4.0057 15.4761C4.0057 16.6251 4.8807 17.5001 6.0427 17.5001ZM16.8847 17.5001C18.0467 17.5001 18.9087 16.6251 18.9087 15.4761C18.9087 14.3141 18.0467 13.4391 16.8847 13.4391C15.7367 13.4391 14.8617 14.3141 14.8617 15.4761C14.8617 16.6251 15.7367 17.5001 16.8847 17.5001ZM36.6137 17.5001C37.7617 17.5001 38.6367 16.6251 38.6367 15.4761C38.6367 14.3141 37.7617 13.4391 36.6137 13.4391C35.4517 13.4391 34.5767 14.3141 34.5767 15.4761C34.5767 16.6251 35.4517 17.5001 36.6137 17.5001ZM23.2287 17.0901H30.2557C31.1177 17.0901 31.7047 16.5021 31.7047 15.6401C31.7047 14.7791 31.1177 14.1911 30.2557 14.1911H23.2287C22.3677 14.1911 21.7797 14.7791 21.7797 15.6401C21.7797 16.5021 22.3677 17.0901 23.2287 17.0901Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.720703125 25.935546875"
          className={className}
        >
          <path
            d="              M2.5427 25.9354H4.1837C5.2367 25.9354 6.0427 25.1284 6.0427 24.1034V21.8754C7.9027 21.9844 10.1857 22.0524 12.4547 22.1074V24.1034C12.4547 25.1284 13.2617 25.9354 14.3007 25.9354H15.9417C16.9937 25.9354 17.7867 25.1284 17.7867 24.1034V21.8614C20.7947 22.0394 24.8827 22.1484 28.2327 22.1484C31.5817 22.1484 35.6697 22.0394 38.6777 21.8614V24.1034C38.6777 25.1284 39.4847 25.9354 40.5237 25.9354H42.1777C43.2167 25.9354 44.0237 25.1284 44.0237 24.1034V20.5214C44.4747 19.9884 44.7207 19.2774 44.7207 18.4024V15.9964C44.7207 13.6034 44.2967 12.2504 42.9977 10.6094L41.7947 9.0914C41.2887 6.6304 40.3727 4.0464 39.9087 3.0354C39.1427 1.4214 37.6657 0.4644 35.7797 0.2054C34.8087 0.0824 31.8687 0.0004 28.2327 0.0004C25.8267 0.0004 23.7347 0.0414 22.2987 0.0954C20.9047 0.0414 18.8807 0.0004 16.4887 0.0004C12.8517 0.0004 9.9117 0.0824 8.9417 0.2054C7.0407 0.4374 5.5777 1.4214 4.8127 3.0354C4.3477 4.0464 3.4317 6.6304 2.9257 9.0914L1.7227 10.6094C0.4237 12.2504 -0.0003 13.6034 -0.0003 15.9964V18.1154C-0.0003 19.0994 0.2327 19.8784 0.6977 20.4534V24.1034C0.6977 25.1284 1.5037 25.9354 2.5427 25.9354ZM3.8007 19.4964C2.6117 19.3734 2.1467 18.7304 2.1467 17.6644V15.8864C2.1467 14.0414 2.4887 13.1524 3.4587 11.8804L4.9357 9.9534C5.2637 8.1214 6.1527 5.2774 6.7267 4.0604C7.1777 3.0894 8.0527 2.5294 9.2557 2.3784C10.1857 2.2554 12.8657 2.1464 16.4887 2.1464C16.6937 2.1464 16.8987 2.1464 17.1177 2.1464C16.8987 2.4064 16.7207 2.7074 16.5707 3.0354C16.5017 3.1854 16.4197 3.3634 16.3377 3.5824C12.7697 3.5824 10.5817 3.6644 9.6657 3.8004C8.8727 3.9104 8.4357 4.1974 8.0797 4.8264C7.6697 5.5504 7.0817 7.3004 6.7817 8.6274C6.6587 9.1734 6.8907 9.4334 7.4787 9.3924C9.1467 9.2834 11.6347 9.1874 14.6287 9.1604L13.4807 10.6094C12.1817 12.2504 11.7577 13.6034 11.7577 15.9964V18.4024C11.7577 18.9904 11.8677 19.4964 12.0727 19.9194C8.5997 19.8374 5.3047 19.6604 3.8007 19.4964ZM28.2327 19.9744C23.5567 19.9744 17.7187 19.7554 15.5037 19.4964C14.3277 19.3594 13.9047 18.7574 13.9047 17.7184V15.8864C13.9047 14.0414 14.2457 13.1524 15.2167 11.8804L16.6937 9.9534C17.0217 8.1214 17.9097 5.2774 18.4847 4.0604C18.9357 3.0894 19.8107 2.5294 21.0137 2.3784C21.9437 2.2554 24.6227 2.1464 28.2327 2.1464C31.8557 2.1464 34.5767 2.2694 35.4377 2.3784C36.6817 2.5294 37.5297 3.1034 37.9937 4.0604C38.5687 5.2634 39.4437 8.0934 39.7847 9.9534L41.2617 11.8804C42.2327 13.1524 42.5747 14.0414 42.5747 15.8864V17.7184C42.5747 18.7574 42.1367 19.3594 40.9747 19.4964C38.7597 19.7554 32.9217 19.9744 28.2327 19.9744ZM18.5387 8.6274C18.4157 9.1734 18.6487 9.4334 19.2367 9.3924C21.2597 9.2694 23.7887 9.1464 28.2327 9.1464C32.6897 9.1464 35.2187 9.2694 37.2427 9.3924C37.8297 9.4334 38.0627 9.1734 37.9397 8.6274C37.6387 7.3004 37.0647 5.5644 36.6677 4.8674C36.2847 4.1974 35.8477 3.9104 35.0547 3.8004C34.1247 3.6644 31.8967 3.5824 28.2327 3.5824C24.5817 3.5824 22.3537 3.6644 21.4237 3.8004C20.6307 3.9104 20.1797 4.1974 19.8107 4.8674C19.4137 5.5644 18.8397 7.3004 18.5387 8.6274ZM6.5897 18.2114C7.8887 18.2114 8.8727 17.2264 8.8727 15.9274C8.8727 14.6284 7.8887 13.6444 6.5897 13.6444C5.2907 13.6444 4.3067 14.6284 4.3067 15.9274C4.3067 17.2264 5.2907 18.2114 6.5897 18.2114ZM18.3477 18.2114C19.6467 18.2114 20.6307 17.2264 20.6307 15.9274C20.6307 14.6284 19.6467 13.6444 18.3477 13.6444C17.0487 13.6444 16.0647 14.6284 16.0647 15.9274C16.0647 17.2264 17.0487 18.2114 18.3477 18.2114ZM38.1307 18.2114C39.4297 18.2114 40.4137 17.2264 40.4137 15.9274C40.4137 14.6284 39.4297 13.6444 38.1307 13.6444C36.8317 13.6444 35.8477 14.6284 35.8477 15.9274C35.8477 17.2264 36.8317 18.2114 38.1307 18.2114ZM24.5547 17.6364H31.9237C32.8947 17.6364 33.5777 16.9534 33.5777 15.9824C33.5777 15.0114 32.8947 14.3284 31.9237 14.3284H24.5547C23.5837 14.3284 22.9007 15.0114 22.9007 15.9824C22.9007 16.9534 23.5837 17.6364 24.5547 17.6364Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.66796875 25.361328125"
          className={className}
        >
          <path
            d="              M2.5157 25.3613H4.1157C5.1407 25.3613 5.9337 24.5683 5.9337 23.5563V21.3143C7.7107 21.4243 9.8707 21.4923 12.0177 21.5473V23.5563C12.0177 24.5683 12.7967 25.3613 13.8227 25.3613H15.4357C16.4607 25.3613 17.2407 24.5683 17.2407 23.5563V21.3143C20.2347 21.4783 24.2407 21.6013 27.4937 21.6013C30.7477 21.6013 34.7537 21.4783 37.7347 21.3143V23.5563C37.7347 24.5683 38.5277 25.3613 39.5527 25.3613H41.1527C42.1777 25.3613 42.9707 24.5683 42.9707 23.5563V20.0973C43.4217 19.6053 43.6677 18.9353 43.6677 18.0883V15.6813C43.6677 13.3713 43.2027 12.0863 41.9317 10.4453L40.7837 8.9553C40.2777 6.4943 39.3747 3.9103 38.8967 2.8983C38.1717 1.3533 36.7497 0.4373 34.9317 0.1913C34.0157 0.0683 31.0217 0.0003 27.4937 0.0003C25.2927 0.0003 23.3107 0.0273 21.9027 0.0823C20.5217 0.0273 18.4707 0.0003 16.1737 0.0003C12.6467 0.0003 9.6527 0.0823 8.7367 0.1913C6.9177 0.4103 5.4957 1.3533 4.7717 2.8983C4.2927 3.9103 3.3907 6.4943 2.8847 8.9553L1.7367 10.4453C0.4647 12.0863 -0.0003 13.3713 -0.0003 15.6813V17.8143C-0.0003 18.7583 0.2327 19.4963 0.6977 20.0433V23.5563C0.6977 24.5683 1.4907 25.3613 2.5157 25.3613ZM3.3637 19.3183C2.2017 19.1953 1.7907 18.5803 1.7907 17.5413V15.6813C1.7907 13.8083 2.0917 12.9333 3.1587 11.5393L4.5527 9.7073C4.9217 7.7243 5.8107 4.9633 6.3987 3.7053C6.8357 2.7613 7.6977 2.1743 8.9417 2.0233C9.8167 1.9143 12.5917 1.7913 16.1737 1.7913C16.3927 1.7913 16.5977 1.7913 16.8027 1.7913C16.5157 2.1193 16.2697 2.4883 16.0777 2.8983C16.0237 3.0083 15.9687 3.1443 15.9007 3.2953C12.4007 3.2953 10.2407 3.3903 9.2697 3.5273C8.5587 3.6233 8.1617 3.8963 7.8067 4.5113C7.3687 5.2633 6.7407 7.1503 6.4117 8.5993C6.3027 9.0783 6.5077 9.2693 7.0277 9.2423C8.8597 9.1193 10.9787 9.0093 14.1777 8.9683L13.0427 10.4453C11.7717 12.0863 11.3067 13.3713 11.3067 15.6813V18.0883C11.3067 18.7443 11.4567 19.2913 11.7437 19.7423C8.2577 19.6603 4.8947 19.4963 3.3637 19.3183ZM27.4937 19.8103C22.8457 19.8103 16.8707 19.5923 14.6837 19.3183C13.5217 19.1813 13.0977 18.5803 13.0977 17.5413V15.6813C13.0977 13.8083 13.4117 12.9333 14.4647 11.5393L15.8727 9.7073C16.2287 7.7243 17.1307 4.9633 17.7047 3.7053C18.1567 2.7613 19.0177 2.1743 20.2617 2.0233C21.1367 1.9143 23.8987 1.7913 27.4937 1.7913C31.0767 1.7913 33.9067 1.9143 34.6997 2.0233C35.9847 2.1873 36.8317 2.7753 37.2697 3.7053C37.8707 4.9633 38.7457 7.7243 39.1157 9.7073L40.5097 11.5393C41.5767 12.9333 41.8767 13.8083 41.8767 15.6813V17.5413C41.8767 18.5803 41.4667 19.1813 40.2907 19.3183C38.1037 19.5923 32.1427 19.8103 27.4937 19.8103ZM17.7327 8.5993C17.6227 9.0783 17.8277 9.2693 18.3337 9.2423C20.5217 9.0923 23.1187 8.9683 27.4937 8.9683C31.8557 8.9683 34.4527 9.0923 36.6407 9.2423C37.1597 9.2693 37.3517 9.0783 37.2427 8.5993C36.9137 7.1503 36.2987 5.2633 35.8617 4.5113C35.5057 3.8963 35.1097 3.6233 34.3987 3.5273C33.4007 3.3903 31.1587 3.2953 27.4937 3.2953C23.8167 3.2953 21.5747 3.3903 20.5897 3.5273C19.8787 3.6233 19.4687 3.8963 19.1137 4.5113C18.6897 5.2633 18.0607 7.1503 17.7327 8.5993ZM6.3167 17.9103C7.5607 17.9103 8.5177 16.9533 8.5177 15.7093C8.5177 14.4513 7.5607 13.5083 6.3167 13.5083C5.0727 13.5083 4.1157 14.4513 4.1157 15.7093C4.1157 16.9533 5.0727 17.9103 6.3167 17.9103ZM17.6367 17.9103C18.8807 17.9103 19.8247 16.9533 19.8247 15.7093C19.8247 14.4513 18.8807 13.5083 17.6367 13.5083C16.3787 13.5083 15.4357 14.4513 15.4357 15.7093C15.4357 16.9533 16.3787 17.9103 17.6367 17.9103ZM37.3517 17.9103C38.5957 17.9103 39.5527 16.9533 39.5527 15.7093C39.5527 14.4513 38.5957 13.5083 37.3517 13.5083C36.0937 13.5083 35.1507 14.4513 35.1507 15.7093C35.1507 16.9533 36.0937 17.9103 37.3517 17.9103ZM23.8707 17.3633H31.1037C32.0467 17.3633 32.6897 16.7203 32.6897 15.7773C32.6897 14.8473 32.0467 14.2053 31.1037 14.2053H23.8707C22.9417 14.2053 22.2847 14.8473 22.2847 15.7773C22.2847 16.7203 22.9417 17.3633 23.8707 17.3633Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.52734375 26.373046875"
          className={className}
        >
          <path
            d="              M2.5707 26.3729H4.2387C5.3047 26.3729 6.1117 25.5529 6.1117 24.5139V22.2849C8.0387 22.4079 10.4317 22.4899 12.7967 22.5309V24.5139C12.7967 25.5529 13.6037 26.3729 14.6697 26.3729H16.3377C17.3907 26.3729 18.2107 25.5529 18.2107 24.5139V22.2849C21.2327 22.4629 25.3887 22.5859 28.8067 22.5859C32.2387 22.5859 36.3807 22.4629 39.4027 22.2849V24.5139C39.4027 25.5529 40.2227 26.3729 41.2887 26.3729H42.9567C44.0097 26.3729 44.8297 25.5529 44.8297 24.5139V20.8219C45.2817 20.2759 45.5277 19.5369 45.5277 18.6489V16.2419C45.5277 13.7809 45.1307 12.3869 43.8047 10.7329L42.5607 9.1879C42.0547 6.7269 41.1387 4.1559 40.6737 3.1309C39.8947 1.4769 38.3767 0.4789 36.4357 0.2189C35.4097 0.0819 32.5117 -0.0001 28.8067 -0.0001C26.2637 -0.0001 24.1037 0.0409 22.6677 0.1089C21.2737 0.0409 19.2227 -0.0001 16.7207 -0.0001C13.0157 -0.0001 10.1177 0.0959 9.0917 0.2189C7.1507 0.4649 5.6327 1.4769 4.8537 3.1309C4.3887 4.1559 3.4727 6.7269 2.9667 9.1879L1.7227 10.7329C0.3967 12.3869 -0.0003 13.7809 -0.0003 16.2419V18.3609C-0.0003 19.3589 0.2327 20.1659 0.6977 20.7809V24.5139C0.6977 25.5529 1.5177 26.3729 2.5707 26.3729ZM4.1287 19.6329C2.9257 19.5099 2.4197 18.8399 2.4197 17.7599V16.0369C2.4197 14.2189 2.7887 13.3299 3.6917 12.1539L5.2227 10.1449C5.5367 8.4079 6.4117 5.5239 6.9867 4.3199C7.4517 3.3359 8.3267 2.7889 9.4887 2.6519C10.4587 2.5289 13.0707 2.4059 16.7207 2.4059C16.9397 2.4059 17.1587 2.4059 17.3637 2.4059C17.2127 2.6389 17.0767 2.8849 16.9527 3.1309C16.8707 3.3089 16.7757 3.5409 16.6657 3.8009C13.0707 3.8009 10.8417 3.8829 9.9667 4.0059C9.1057 4.1289 8.6407 4.4159 8.2847 5.0589C7.8887 5.7699 7.3417 7.4239 7.0687 8.6409C6.9177 9.2419 7.1777 9.5429 7.8207 9.5159C9.3657 9.4199 12.0997 9.3239 14.9707 9.2969L13.8227 10.7329C12.4957 12.3869 12.0997 13.7809 12.0997 16.2419V18.6489C12.0997 19.1819 12.1817 19.6469 12.3457 20.0569C8.8727 19.9749 5.6187 19.7969 4.1287 19.6329ZM28.8067 20.1109C24.0897 20.1109 18.3617 19.8929 16.1187 19.6329C14.9567 19.4829 14.5057 18.9079 14.5057 17.8559V16.0369C14.5057 14.2189 14.8887 13.3299 15.7907 12.1539L17.3087 10.1449C17.6367 8.4079 18.5117 5.5239 19.0727 4.3199C19.5507 3.3359 20.4117 2.7889 21.5877 2.6519C22.5587 2.5289 25.1697 2.4059 28.8067 2.4059C32.4567 2.4059 35.1097 2.5429 36.0117 2.6519C37.2017 2.8029 38.0627 3.3499 38.5547 4.3339C39.1157 5.4959 39.9767 8.3809 40.3047 10.1449L41.8357 12.1539C42.7387 13.3299 43.1077 14.2189 43.1077 16.0369V17.8559C43.1077 18.9079 42.6567 19.4959 41.4937 19.6329C39.2657 19.8789 33.5237 20.1109 28.8067 20.1109ZM19.1547 8.6409C19.0177 9.2419 19.2777 9.5429 19.9197 9.5159C21.8207 9.4059 24.3087 9.2829 28.8067 9.2829C33.3187 9.2829 35.8067 9.4059 37.6937 9.5159C38.3497 9.5429 38.5957 9.2419 38.4587 8.6409C38.1857 7.4239 37.6387 5.7829 37.2837 5.1409C36.8867 4.4159 36.4217 4.1289 35.5607 4.0059C34.6857 3.8829 32.4567 3.8009 28.8067 3.8009C25.1697 3.8009 22.9417 3.8829 22.0527 4.0059C21.2047 4.1289 20.7267 4.4159 20.3437 5.1409C19.9747 5.7829 19.4417 7.4239 19.1547 8.6409ZM6.8087 18.4429C8.1347 18.4429 9.1597 17.4179 9.1597 16.0919C9.1597 14.7519 8.1347 13.7399 6.8087 13.7399C5.4687 13.7399 4.4567 14.7519 4.4567 16.0919C4.4567 17.4179 5.4687 18.4429 6.8087 18.4429ZM18.8947 18.4429C20.2347 18.4429 21.2457 17.4179 21.2457 16.0919C21.2457 14.7519 20.2347 13.7399 18.8947 13.7399C17.5687 13.7399 16.5567 14.7519 16.5567 16.0919C16.5567 17.4179 17.5687 18.4429 18.8947 18.4429ZM38.7187 18.4429C40.0587 18.4429 41.0707 17.4179 41.0707 16.0919C41.0707 14.7519 40.0587 13.7399 38.7187 13.7399C37.3787 13.7399 36.3677 14.7519 36.3677 16.0919C36.3677 17.4179 37.3787 18.4429 38.7187 18.4429ZM25.0607 17.8419H32.5527C33.5507 17.8419 34.2617 17.1449 34.2617 16.1329C34.2617 15.1349 33.5507 14.4379 32.5527 14.4379H25.0607C24.0627 14.4379 23.3657 15.1349 23.3657 16.1329C23.3657 17.1449 24.0627 17.8419 25.0607 17.8419Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.2890625 24.28125"
          className={className}
        >
          <path
            d="              M2.4067 24.2813H3.9237C4.8807 24.2813 5.6327 23.5433 5.6327 22.5863V20.4533C7.2187 20.5493 9.0777 20.6173 10.9377 20.6723V22.5863C10.9377 23.5293 11.6757 24.2813 12.6327 24.2813H14.1637C15.1207 24.2813 15.8597 23.5433 15.8597 22.5863V20.4533C18.8127 20.6313 22.7087 20.7403 25.7717 20.7403C28.8207 20.7403 32.7167 20.6313 35.6697 20.4533V22.5863C35.6697 23.5433 36.4087 24.2813 37.3657 24.2813H38.8967C39.8537 24.2813 40.5917 23.5433 40.5917 22.5863V19.4963C41.0427 19.0723 41.2887 18.4703 41.2887 17.6503V15.2443C41.2887 12.8103 40.7017 11.6483 39.6487 10.2673L38.4457 8.7093C37.9527 6.2483 37.0367 3.6503 36.5727 2.6523C35.8477 1.1213 34.4667 0.3963 32.9357 0.1913C32.0057 0.0683 28.8747 0.0003 25.7717 0.0003C23.8707 0.0003 21.9707 0.0273 20.5627 0.0823V0.0683C19.1817 0.0273 17.3637 0.0003 15.5317 0.0003C12.4137 0.0003 9.2967 0.0683 8.3537 0.1913C6.8227 0.3963 5.4417 1.1213 4.7167 2.6523C4.2517 3.6503 3.3497 6.2483 2.8577 8.7093L1.6407 10.2673C0.5877 11.6483 -0.0003 12.8103 -0.0003 15.2443V17.5953C-0.0003 18.4293 0.2457 19.0453 0.6977 19.4823V22.5863C0.6977 23.5293 1.4497 24.2813 2.4067 24.2813ZM2.6797 19.2913C1.4357 19.1403 0.9297 18.6073 0.9297 17.5413V15.2443C0.9297 13.3023 1.2577 12.3323 2.3927 10.8413L3.7187 9.1053C4.1697 6.7403 5.0727 4.0883 5.5647 3.0623C6.0837 1.9683 7.0687 1.2993 8.4627 1.1343C9.3107 1.0253 12.1957 0.9293 15.5317 0.9293C15.8457 0.9293 16.1597 0.9293 16.4607 0.9293C16.0237 1.2033 15.6407 1.5583 15.3397 2.0093C12.0997 2.0093 9.7477 2.0643 8.6957 2.2013C7.6427 2.3383 7.0407 2.8163 6.6307 3.5413C6.2067 4.2933 5.5777 5.9883 5.1677 7.8753C5.0857 8.2303 5.2087 8.5173 5.7147 8.4763C7.6977 8.3263 9.7757 8.2573 13.1937 8.2163C13.1527 8.3813 13.1247 8.5453 13.0837 8.7093L11.8807 10.2673C10.8277 11.6483 10.2407 12.8103 10.2407 15.2443V17.6503C10.2407 18.4703 10.4867 19.0723 10.9377 19.4963V19.7423C7.6157 19.6603 4.3337 19.4963 2.6797 19.2913ZM25.7717 19.8103C21.3967 19.8103 15.3807 19.5913 12.9197 19.2913C11.6617 19.1403 11.1697 18.6073 11.1697 17.5413V15.2443C11.1697 13.3023 11.4847 12.3323 12.6187 10.8413L13.9457 9.1053C14.3967 6.7403 15.2987 4.0883 15.8047 3.0623C16.3247 1.9683 17.2947 1.2993 18.7027 1.1343C19.5507 1.0253 22.4357 0.9293 25.7717 0.9293C29.0937 0.9293 31.9927 1.0253 32.8267 1.1343C34.2347 1.2993 35.2187 1.9823 35.7387 3.0623C36.2307 4.0883 37.1327 6.7403 37.5837 9.1053L38.9097 10.8413C40.0447 12.3323 40.3727 13.3023 40.3727 15.2443V17.5413C40.3727 18.6073 39.8677 19.1543 38.6097 19.2913C36.1617 19.5643 30.1327 19.8103 25.7717 19.8103ZM15.4087 7.8753C15.3267 8.2303 15.4497 8.5173 15.9417 8.4763C18.3477 8.3123 20.8767 8.2163 25.7717 8.2163C30.6527 8.2163 33.1817 8.3123 35.5877 8.4763C36.0797 8.5173 36.2027 8.2303 36.1207 7.8753C35.6977 5.9883 35.0957 4.2933 34.6587 3.5413C34.2477 2.8163 33.6467 2.3383 32.6077 2.2013C31.5277 2.0643 29.1077 2.0093 25.7717 2.0093C22.4357 2.0093 20.0017 2.0643 18.9217 2.2013C17.8827 2.3383 17.2677 2.8163 16.8707 3.5413C16.4477 4.2933 15.8317 5.9883 15.4087 7.8753ZM5.6737 16.9663C6.6997 16.9663 7.4647 16.2013 7.4647 15.1753C7.4647 14.1363 6.6997 13.3713 5.6737 13.3713C4.6347 13.3713 3.8687 14.1363 3.8687 15.1753C3.8687 16.2013 4.6347 16.9663 5.6737 16.9663ZM15.9007 16.9663C16.9397 16.9663 17.7047 16.2013 17.7047 15.1753C17.7047 14.1363 16.9397 13.3713 15.9007 13.3713C14.8747 13.3713 14.1097 14.1363 14.1097 15.1753C14.1097 16.2013 14.8747 16.9663 15.9007 16.9663ZM35.6287 16.9663C36.6547 16.9663 37.4197 16.2013 37.4197 15.1753C37.4197 14.1363 36.6547 13.3713 35.6287 13.3713C34.5897 13.3713 33.8247 14.1363 33.8247 15.1753C33.8247 16.2013 34.5897 16.9663 35.6287 16.9663ZM22.3807 16.7343H29.1487C29.9007 16.7343 30.4197 16.2283 30.4197 15.4633C30.4197 14.6973 29.9007 14.1913 29.1487 14.1913H22.3807C21.6287 14.1913 21.1097 14.6973 21.1097 15.4633C21.1097 16.2283 21.6287 16.7343 22.3807 16.7343Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.60546875 23.966796875"
          className={className}
        >
          <path
            d="              M2.3657 23.9666H3.8687C4.8127 23.9666 5.5367 23.2426 5.5367 22.2986V20.2066C7.0687 20.2886 8.8457 20.3716 10.6227 20.4126V22.2986C10.6227 23.2286 11.3477 23.9666 12.2907 23.9666H13.7947C14.7387 23.9666 15.4627 23.2426 15.4627 22.2986V20.2066C18.4027 20.3716 22.2577 20.4806 25.2657 20.4806C28.2597 20.4806 32.1287 20.3716 35.0687 20.2066V22.2986C35.0687 23.2426 35.7927 23.9666 36.7367 23.9666H38.2267C39.1697 23.9666 39.9087 23.2426 39.9087 22.2986V19.3046C40.3597 18.9216 40.6057 18.3336 40.6057 17.5276V15.1216C40.6057 12.6466 39.9767 11.5256 38.9787 10.2266L37.7617 8.6406C37.2697 6.1796 36.3677 3.5686 35.8887 2.5836C35.1777 1.0666 33.7967 0.3826 32.3617 0.1916C31.4177 0.0686 28.2597 -0.0004 25.2657 -0.0004C23.4477 -0.0004 21.5607 0.0276 20.1527 0.0816V0.0686C18.7987 0.0136 17.0347 -0.0004 15.3397 -0.0004C12.3457 -0.0004 9.1877 0.0686 8.2437 0.1916C6.8087 0.3826 5.4277 1.0666 4.7167 2.5836C4.2387 3.5686 3.3357 6.1796 2.8437 8.6406L1.6267 10.2266C0.6287 11.5256 -0.0003 12.6466 -0.0003 15.1216V17.5406C-0.0003 18.3336 0.2457 18.9216 0.6977 19.3046V22.2986C0.6977 23.2286 1.4357 23.9666 2.3657 23.9666ZM2.4747 19.2906C1.2027 19.1266 0.6837 18.6216 0.6837 17.5406V15.1216C0.6837 13.1656 1.0117 12.1546 2.1597 10.6366L3.4727 8.9276C3.9377 6.4536 4.8537 3.8416 5.3187 2.8716C5.8657 1.7496 6.8767 1.0386 8.3267 0.8746C9.1737 0.7656 12.0857 0.6836 15.3397 0.6836C15.7367 0.6836 16.1187 0.6836 16.5017 0.6836C16.0367 0.9156 15.6137 1.2166 15.2577 1.6266C12.0997 1.6266 9.6247 1.6816 8.5177 1.8186C7.3827 1.9556 6.7127 2.5016 6.2887 3.2536C5.8657 4.0056 5.2367 5.6466 4.7987 7.6566C4.7307 7.9706 4.8397 8.2856 5.3317 8.2576C7.3557 8.1076 9.4197 8.0386 12.9067 7.9976C12.8517 8.2166 12.8107 8.4216 12.7697 8.6406L11.5387 10.2266C10.5547 11.5256 9.9257 12.6466 9.9257 15.1216V17.5276C9.9257 18.3336 10.1717 18.9216 10.6227 19.3046V19.7426C7.3827 19.6466 4.1567 19.4966 2.4747 19.2906ZM25.2657 19.8106C20.9727 19.8106 14.9437 19.6056 12.4007 19.2906C11.1287 19.1266 10.5957 18.6216 10.5957 17.5406V15.1216C10.5957 13.1656 10.9377 12.1546 12.0857 10.6366L13.3987 8.9276C13.8637 6.4536 14.7797 3.8416 15.2437 2.8716C15.7907 1.7496 16.8027 1.0386 18.2517 0.8746C19.0857 0.7656 22.0117 0.6836 25.2657 0.6836C28.5197 0.6836 31.4317 0.7656 32.2797 0.8746C33.7287 1.0386 34.7407 1.7496 35.2867 2.8716C35.7517 3.8416 36.6547 6.4536 37.1327 8.9276L38.4457 10.6366C39.5937 12.1546 39.9217 13.1656 39.9217 15.1216V17.5406C39.9217 18.6216 39.4027 19.1406 38.1307 19.2906C35.5877 19.5646 29.5447 19.8106 25.2657 19.8106ZM14.7247 7.6566C14.6567 7.9706 14.7657 8.2856 15.2437 8.2576C17.7187 8.0806 20.2207 7.9976 25.2657 7.9976C30.2967 7.9976 32.8127 8.0806 35.2737 8.2576C35.7657 8.2856 35.8747 7.9706 35.8067 7.6566C35.3417 5.6466 34.7537 4.0056 34.3167 3.2536C33.8787 2.5016 33.2227 1.9556 32.0877 1.8186C30.9807 1.6816 28.5057 1.6266 25.2657 1.6266C22.0257 1.6266 19.5367 1.6816 18.4437 1.8186C17.2947 1.9556 16.6247 2.5016 16.2147 3.2536C15.7907 4.0056 15.1757 5.6466 14.7247 7.6566ZM5.4827 16.6936C6.4527 16.6936 7.1637 15.9826 7.1637 15.0116C7.1637 14.0406 6.4527 13.3306 5.4827 13.3306C4.5117 13.3306 3.8007 14.0406 3.8007 15.0116C3.8007 15.9826 4.5117 16.6936 5.4827 16.6936ZM15.4087 16.6936C16.3787 16.6936 17.0897 15.9826 17.0897 15.0116C17.0897 14.0406 16.3787 13.3306 15.4087 13.3306C14.4377 13.3306 13.7267 14.0406 13.7267 15.0116C13.7267 15.9826 14.4377 16.6936 15.4087 16.6936ZM35.1227 16.6936C36.0937 16.6936 36.8047 15.9826 36.8047 15.0116C36.8047 14.0406 36.0937 13.3306 35.1227 13.3306C34.1527 13.3306 33.4417 14.0406 33.4417 15.0116C33.4417 15.9826 34.1527 16.6936 35.1227 16.6936ZM21.9567 16.5426H28.5747C29.2847 16.5426 29.7497 16.0786 29.7497 15.3676C29.7497 14.6566 29.2847 14.1916 28.5747 14.1916H21.9567C21.2457 14.1916 20.7677 14.6566 20.7677 15.3676C20.7677 16.0786 21.2457 16.5426 21.9567 16.5426Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}