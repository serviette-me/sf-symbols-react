import { IconProps } from "../../types"

export default function ArrowRightDocOnClipboardIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.625 36.50390625"
          className={className}
        >
          <path
            d="              M-0.0003 31.1444C-0.0003 34.5354 1.9827 36.5044 5.3597 36.5044H17.9097C21.2867 36.5044 23.2697 34.5214 23.2697 31.1444V28.6294H25.2657C28.6567 28.6294 30.6247 26.6464 30.6247 23.2694V5.3594C30.6247 1.9684 28.6567 0.0004 25.2657 0.0004H12.7287C9.3377 0.0004 7.3687 1.9684 7.3687 5.3594V7.8754H5.3597C1.9827 7.8754 -0.0003 9.8434 -0.0003 13.2344ZM15.0667 4.6754V4.3064C15.0667 3.8964 15.4357 3.1584 16.2147 3.1584H21.7927C22.5727 3.1584 22.9417 3.8964 22.9417 4.3064V4.6754C22.9417 5.2774 22.4217 5.8244 21.7927 5.8244H16.2147C15.5727 5.8244 15.0667 5.2774 15.0667 4.6754ZM4.8537 30.4064V13.9724C4.8537 13.1384 5.1957 12.7284 6.1117 12.7284H17.1587C18.0607 12.7284 18.4027 13.1384 18.4027 13.9724V30.4064C18.4027 31.2404 18.0607 31.6504 17.1587 31.6504H6.1117C5.1957 31.6504 4.8537 31.2404 4.8537 30.4064ZM6.1797 22.2164C6.1797 23.1194 6.8087 23.8164 7.6567 23.8164H10.9517L12.9197 23.6794L12.0727 24.1714L10.9647 25.0604C10.6777 25.2934 10.5277 25.6624 10.5277 26.0454C10.5277 26.8514 11.0337 27.3844 11.7577 27.3844C12.1957 27.3844 12.4547 27.2614 12.7967 26.9614L16.5017 23.5704C16.8847 23.2284 17.0897 22.7774 17.0897 22.2164C17.0897 21.6704 16.8847 21.2184 16.5017 20.8774L12.7967 17.4864C12.4547 17.1854 12.1957 17.0624 11.7577 17.0624C11.0337 17.0624 10.5277 17.5954 10.5277 18.3884C10.5277 18.7574 10.7047 19.1544 10.9647 19.3734L12.0177 20.2484L12.9197 20.7544L10.9517 20.6174H7.6567C6.8087 20.6174 6.1797 21.3284 6.1797 22.2164Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.28515625 35.451171875"
          className={className}
        >
          <path
            d="              M-0.0003 30.6245C-0.0003 33.7555 1.6957 35.4515 4.7987 35.4515H17.4997C20.6037 35.4515 22.2987 33.7425 22.2987 30.6245V28.1095H24.4997C27.6037 28.1095 29.2847 26.4005 29.2847 23.2835V4.8265C29.2847 1.7085 27.6037 -0.0005 24.4997 -0.0005H11.7987C8.6957 -0.0005 6.9997 1.7085 6.9997 4.8265V7.3555H4.7987C1.6957 7.3555 -0.0003 9.0505 -0.0003 12.1815ZM14.0687 4.2925V3.9515C14.0687 3.5405 14.3967 2.9805 15.0797 2.9805H21.2047C21.9027 2.9805 22.2167 3.5405 22.2167 3.9515V4.2925C22.2167 4.7985 21.8207 5.2635 21.2047 5.2635H15.0797C14.4647 5.2635 14.0687 4.7985 14.0687 4.2925ZM3.5277 30.2425V12.5645C3.5277 11.4705 4.0607 10.8825 5.2227 10.8825H17.0627C18.2247 10.8825 18.7717 11.4705 18.7717 12.5645V30.2425C18.7717 31.3495 18.2247 31.9235 17.0627 31.9235H5.2227C4.0607 31.9235 3.5277 31.3495 3.5277 30.2425ZM5.4417 21.4105C5.4417 22.1215 5.9337 22.6405 6.6037 22.6405H11.2107L13.4257 22.5315L12.2777 23.3785L11.0607 24.4865C10.8417 24.6775 10.7187 24.9645 10.7187 25.2925C10.7187 25.9215 11.1427 26.3735 11.7437 26.3735C12.0857 26.3735 12.3187 26.2635 12.5507 26.0445L16.3247 22.4215C16.6247 22.1485 16.7887 21.8205 16.7887 21.4105C16.7887 21.0135 16.6247 20.6995 16.3247 20.4125L12.5507 16.7895C12.3187 16.5565 12.0857 16.4605 11.7437 16.4605C11.1427 16.4605 10.7187 16.9125 10.7187 17.5405C10.7187 17.8555 10.8557 18.1565 11.0607 18.3335L12.2497 19.4415L13.4117 20.3025L11.2107 20.1795H6.6037C5.9337 20.1795 5.4417 20.7125 5.4417 21.4105Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.99609375 36.01171875"
          className={className}
        >
          <path
            d="              M-0.0003 30.912C-0.0003 34.166 1.8457 36.012 5.0997 36.012H17.7187C20.9587 36.012 22.8047 34.166 22.8047 30.912V28.397H24.9097C28.1507 28.397 29.9957 26.537 29.9957 23.283V5.113C29.9957 1.859 28.1507 0 24.9097 0H12.2907C9.0367 0 7.1917 1.859 7.1917 5.113V7.629H5.0997C1.8457 7.629 -0.0003 9.475 -0.0003 12.742ZM14.6017 4.498V4.143C14.6017 3.732 14.9437 3.076 15.6817 3.076H21.5197C22.2577 3.076 22.5997 3.732 22.5997 4.143V4.498C22.5997 5.059 22.1487 5.564 21.5197 5.564H15.6817C15.0527 5.564 14.6017 5.059 14.6017 4.498ZM4.2247 30.338V13.316C4.2247 12.359 4.6617 11.867 5.6877 11.867H17.1177C18.1427 11.867 18.5797 12.359 18.5797 13.316V30.338C18.5797 31.295 18.1427 31.787 17.1177 31.787H5.6877C4.6617 31.787 4.2247 31.295 4.2247 30.338ZM5.8247 21.848C5.8247 22.654 6.3847 23.27 7.1507 23.27H11.0747L13.1527 23.147L12.1677 23.803L11.0197 24.801C10.7597 25.006 10.6227 25.334 10.6227 25.703C10.6227 26.414 11.0747 26.906 11.7577 26.906C12.1407 26.906 12.3867 26.797 12.6877 26.537L16.4197 23.037C16.7617 22.723 16.9397 22.326 16.9397 21.848C16.9397 21.369 16.7617 20.986 16.4197 20.658L12.6877 17.158C12.3867 16.898 12.1407 16.789 11.7577 16.789C11.0747 16.789 10.6227 17.268 10.6227 17.992C10.6227 18.334 10.7737 18.689 11.0197 18.895L12.1407 19.879L13.1527 20.549L11.0747 20.412H7.1507C6.3987 20.412 5.8247 21.041 5.8247 21.848Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.658203125 34.015625"
          className={className}
        >
          <path
            d="              M-0.0003 29.9826C-0.0003 32.6626 1.3537 34.0156 3.9927 34.0156H17.0347C19.6877 34.0156 21.0277 32.6486 21.0277 29.9826V27.3986H23.6527C26.3047 27.3986 27.6587 26.0316 27.6587 23.3656V4.0336C27.6587 1.3676 26.3047 -0.0004 23.6527 -0.0004H10.6227C7.9847 -0.0004 6.6177 1.3536 6.6177 4.0336V6.6306H3.9927C1.3537 6.6306 -0.0003 7.9846 -0.0003 10.6636ZM13.1657 3.6776V3.4046C13.1657 3.0356 13.4117 2.6936 13.9587 2.6936H20.3297C20.8637 2.6936 21.1097 3.0356 21.1097 3.4046V3.6776C21.1097 4.0466 20.8637 4.3886 20.3297 4.3886H13.9587C13.4117 4.3886 13.1657 4.0466 13.1657 3.6776ZM1.6957 29.9556V10.6916C1.6957 9.1466 2.5017 8.3126 4.0747 8.3126H16.9527C18.5257 8.3126 19.3457 9.1466 19.3457 10.6916V29.9556C19.3457 31.4996 18.5257 32.3336 16.9527 32.3336H4.0747C2.5017 32.3336 1.6957 31.4996 1.6957 29.9556ZM4.3617 20.3166C4.3617 20.7126 4.6487 20.9996 5.0447 20.9996H12.0177L14.2597 20.9316L12.7017 22.3396L11.1157 23.9396C10.9647 24.0626 10.8827 24.2266 10.8827 24.4316C10.8827 24.8006 11.1697 25.1016 11.5527 25.1016C11.7437 25.1016 11.8947 25.0196 12.0317 24.8966L16.0777 20.8356C16.2427 20.6856 16.3377 20.5216 16.3377 20.3026C16.3377 20.1246 16.2557 19.9746 16.0777 19.7966L12.0317 15.7366C11.8947 15.5996 11.7437 15.5316 11.5527 15.5316C11.1697 15.5316 10.8827 15.8186 10.8827 16.1876C10.8827 16.3926 10.9787 16.5566 11.1157 16.6936L12.7017 18.2796L14.2597 19.7016L12.0177 19.6196H5.0447C4.6487 19.6196 4.3617 19.8926 4.3617 20.3166Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.4375 34.767578125"
          className={className}
        >
          <path
            d="              M-0.0003 30.2827C-0.0003 33.2367 1.5177 34.7677 4.4437 34.7677H17.2407C20.1657 34.7677 21.6697 33.2227 21.6697 30.2827V27.7537H23.9937C26.9197 27.7537 28.4377 26.2227 28.4377 23.2697V4.4847C28.4377 1.5317 26.9197 -0.0003 23.9937 -0.0003H11.1977C8.2847 -0.0003 6.7537 1.5177 6.7537 4.4847V6.9997H4.4437C1.5177 6.9997 -0.0003 8.5317 -0.0003 11.4847ZM13.4397 4.0197V3.7047C13.4397 3.2947 13.7407 2.8437 14.3687 2.8437H20.8357C21.4647 2.8437 21.7657 3.2947 21.7657 3.7047V4.0197C21.7657 4.4707 21.4377 4.8807 20.8357 4.8807H14.3687C13.7537 4.8807 13.4397 4.4707 13.4397 4.0197ZM2.6797 30.1187V11.6487C2.6797 10.3767 3.3357 9.6797 4.6617 9.6797H17.0077C18.3337 9.6797 18.9907 10.3767 18.9907 11.6487V30.1187C18.9907 31.3907 18.3337 32.0877 17.0077 32.0877H4.6617C3.3357 32.0877 2.6797 31.3907 2.6797 30.1187ZM4.9627 20.8767C4.9627 21.4507 5.3727 21.8747 5.9337 21.8747H11.3747L13.7407 21.7797L12.4137 22.8597L11.1287 24.1037C10.9377 24.2677 10.8277 24.5137 10.8277 24.7737C10.8277 25.3067 11.2107 25.7167 11.7307 25.7167C12.0037 25.7167 12.2227 25.6207 12.4007 25.4437L16.2147 21.6837C16.4607 21.4377 16.5977 21.1917 16.5977 20.8767C16.5977 20.5897 16.4747 20.3577 16.2147 20.0977L12.4007 16.3237C12.2227 16.1467 12.0037 16.0647 11.7307 16.0647C11.2107 16.0647 10.8277 16.4477 10.8277 16.9807C10.8277 17.2537 10.9517 17.4867 11.1287 17.6637L12.4007 18.9077L13.7407 19.9887L11.3747 19.8927H5.9337C5.3727 19.8927 4.9627 20.3027 4.9627 20.8767Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.958984375 34.3984375"
          className={className}
        >
          <path
            d="              M-0.0003 30.105C-0.0003 32.963 1.4087 34.398 4.2387 34.398H17.0897C19.9197 34.398 21.3277 32.949 21.3277 30.105V27.576H23.7207C26.5367 27.576 27.9587 26.127 27.9587 23.283V4.293C27.9587 1.449 26.5367 0 23.7207 0H10.8687C8.0527 0 6.6307 1.436 6.6307 4.293V6.822H4.2387C1.4087 6.822 -0.0003 8.244 -0.0003 11.115ZM13.0837 3.883V3.596C13.0837 3.172 13.3577 2.789 13.9587 2.789H20.6307C21.2187 2.789 21.5057 3.172 21.5057 3.596V3.883C21.5057 4.293 21.2187 4.689 20.6307 4.689H13.9587C13.3577 4.689 13.0837 4.293 13.0837 3.883ZM2.2017 30.064V11.143C2.2017 9.789 2.9257 9.023 4.3337 9.023H16.9807C18.3887 9.023 19.1267 9.789 19.1267 11.143V30.064C19.1267 31.432 18.3887 32.197 16.9807 32.197H4.3337C2.9257 32.197 2.2017 31.432 2.2017 30.064ZM4.6897 20.59C4.6897 21.096 5.0447 21.465 5.5507 21.465H11.4707L13.9177 21.369L12.4957 22.586L11.1567 23.898C10.9927 24.063 10.8967 24.268 10.8967 24.514C10.8967 24.979 11.2517 25.361 11.7307 25.361C11.9627 25.361 12.1677 25.266 12.3187 25.115L16.1467 21.273C16.3657 21.055 16.4887 20.863 16.4887 20.59C16.4887 20.357 16.3787 20.166 16.1467 19.934L12.3187 16.078C12.1677 15.928 11.9627 15.846 11.7307 15.846C11.2517 15.846 10.8967 16.215 10.8967 16.68C10.8967 16.926 11.0057 17.131 11.1567 17.295L12.4957 18.621L13.9177 19.824L11.4707 19.742H5.5507C5.0587 19.742 4.6897 20.084 4.6897 20.59Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.806640625 35.068359375"
          className={className}
        >
          <path
            d="              M-0.0003 30.4331C-0.0003 33.4691 1.5857 35.0681 4.5937 35.0681H17.3497C20.3437 35.0681 21.9437 33.4551 21.9437 30.4331V27.9041H24.2127C27.2067 27.9041 28.8067 26.3051 28.8067 23.2831V4.6351C28.8067 1.6131 27.2067 0.0001 24.2127 0.0001H11.4567C8.4627 0.0001 6.8637 1.5991 6.8637 4.6351V7.1641H4.5937C1.5857 7.1641 -0.0003 8.7641 -0.0003 11.7851ZM13.7127 4.1421V3.8141C13.7127 3.4041 14.0277 2.9121 14.6697 2.9121H20.9997C21.6567 2.9121 21.9567 3.4041 21.9567 3.8141V4.1421C21.9567 4.6071 21.6017 5.0451 20.9997 5.0451H14.6697C14.0687 5.0451 13.7127 4.6071 13.7127 4.1421ZM3.0487 30.1741V12.0451C3.0487 10.8551 3.6507 10.1991 4.8947 10.1991H17.0347C18.2927 10.1991 18.8947 10.8551 18.8947 12.0451V30.1741C18.8947 31.3771 18.2927 32.0191 17.0347 32.0191H4.8947C3.6507 32.0191 3.0487 31.3771 3.0487 30.1741ZM5.1677 21.1091C5.1677 21.7381 5.6057 22.2171 6.2207 22.2171H11.3067L13.6037 22.1071L12.3597 23.0921L11.1017 24.2671C10.8967 24.4451 10.7737 24.7051 10.7737 25.0061C10.7737 25.5801 11.1837 26.0041 11.7437 26.0041C12.0317 26.0041 12.2637 25.8941 12.4687 25.7031L16.2557 21.9981C16.5297 21.7521 16.6797 21.4651 16.6797 21.1091C16.6797 20.7811 16.5427 20.5081 16.2557 20.2341L12.4687 16.5291C12.2637 16.3241 12.0317 16.2421 11.7437 16.2421C11.1837 16.2421 10.7737 16.6521 10.7737 17.2261C10.7737 17.5141 10.9097 17.7731 11.1017 17.9511L12.3457 19.1411L13.6037 20.1251L11.3067 20.0161H6.2207C5.6057 20.0161 5.1677 20.4801 5.1677 21.1091Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.248046875 33.5234375"
          className={className}
        >
          <path
            d="              M-0.0003 29.8318C-0.0003 32.2518 1.2577 33.5238 3.6777 33.5238H16.9667C19.3727 33.5238 20.6307 32.2518 20.6307 29.8318V27.1528H23.5837C25.9907 27.1528 27.2477 25.8808 27.2477 23.4608V3.6778C27.2477 1.2578 25.9907 -0.0002 23.5837 -0.0002H10.2947C7.9027 -0.0002 6.6177 1.2578 6.6177 3.6778V6.3578H3.6777C1.2577 6.3578 -0.0003 7.6288 -0.0003 10.0488ZM13.2617 3.3908V3.1578C13.2617 2.8578 13.4937 2.5428 13.9457 2.5428H19.9197C20.3847 2.5428 20.6037 2.8578 20.6037 3.1578V3.3908C20.6037 3.6918 20.3847 3.9918 19.9197 3.9918H13.9457C13.4937 3.9918 13.2617 3.6918 13.2617 3.3908ZM1.0117 29.8048V10.0898C1.0117 8.3128 1.9417 7.3828 3.7187 7.3828H16.9117C18.6897 7.3828 19.6187 8.3128 19.6187 10.0898V29.8048C19.6187 31.5688 18.6897 32.4978 16.9117 32.4978H3.7187C1.9417 32.4978 1.0117 31.5688 1.0117 29.8048ZM3.9097 19.9338C3.9097 20.1938 4.1017 20.3848 4.3887 20.3848H12.7427L14.6837 20.3578L13.0017 22.0258L11.0467 23.9668C10.9517 24.0758 10.8827 24.1718 10.8827 24.3218C10.8827 24.5548 11.0607 24.7458 11.3067 24.7458C11.4567 24.7458 11.5527 24.6778 11.6347 24.5958L15.9827 20.2618C16.0777 20.1798 16.1327 20.0568 16.1327 19.9198C16.1327 19.8238 16.0917 19.7008 15.9827 19.5918L11.6347 15.2578C11.5527 15.1618 11.4567 15.1078 11.3067 15.1078C11.0607 15.1078 10.8827 15.2988 10.8827 15.5308C10.8827 15.6818 10.9517 15.7778 11.0467 15.8868L13.0017 17.8278L14.6977 19.5098L12.7427 19.4688H4.3887C4.1157 19.4688 3.9097 19.6328 3.9097 19.9338Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.04296875 33.27734375"
          className={className}
        >
          <path
            d="              M-0.0003 29.7638C-0.0003 32.0608 1.2167 33.2778 3.5137 33.2778H16.9257C19.2227 33.2778 20.4397 32.0608 20.4397 29.7638V27.0428H23.5427C25.8267 27.0428 27.0427 25.8258 27.0427 23.5298V3.5138C27.0427 1.2168 25.8267 -0.0002 23.5427 -0.0002H10.1307C7.8617 -0.0002 6.6177 1.2168 6.6177 3.5138V6.2348H3.5137C1.2167 6.2348 -0.0003 7.4508 -0.0003 9.7478ZM13.3167 3.2538V3.0488C13.3167 2.7618 13.5217 2.4888 13.9457 2.4888H19.7147C20.1387 2.4888 20.3437 2.7618 20.3437 3.0488V3.2538C20.3437 3.5278 20.1387 3.8008 19.7147 3.8008H13.9457C13.5217 3.8008 13.3167 3.5278 13.3167 3.2538ZM0.6697 29.7228V9.7758C0.6697 7.8888 1.6547 6.9048 3.5407 6.9048H16.8847C18.7847 6.9048 19.7697 7.8888 19.7697 9.7758V29.7228C19.7697 31.6228 18.7847 32.6078 16.8847 32.6078H3.5407C1.6547 32.6078 0.6697 31.6228 0.6697 29.7228ZM3.6917 19.7558C3.6917 19.9468 3.8277 20.0838 4.0467 20.0838H13.1117L14.9157 20.0568L13.1387 21.8748L11.0197 23.9938C10.9377 24.0758 10.8827 24.1448 10.8827 24.2678C10.8827 24.4318 10.9927 24.5688 11.1837 24.5688C11.3067 24.5688 11.3747 24.5278 11.4437 24.4588L15.9417 19.9748C15.9827 19.9198 16.0367 19.8378 16.0367 19.7418C16.0367 19.6738 16.0097 19.5648 15.9417 19.4958L11.4437 15.0258C11.3747 14.9568 11.3067 14.9028 11.1837 14.9028C10.9927 14.9028 10.8827 15.0388 10.8827 15.2028C10.8827 15.3258 10.9377 15.3948 11.0197 15.4768L13.1387 17.6098L14.9297 19.4278L13.1117 19.4008H4.0467C3.8417 19.4008 3.6917 19.5098 3.6917 19.7558Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}