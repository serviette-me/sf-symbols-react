import { IconProps } from "../../types"

export default function FolderBadgeGearshapeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.98046875 28.341796875"
          className={className}
        >
          <path
            d="              M29.5447 15.6265H30.7617C31.3907 15.6265 31.8967 15.2305 32.0337 14.6285L32.3207 13.4125C32.4157 13.3715 32.4977 13.3435 32.5797 13.3025L33.6327 13.9595C34.1527 14.2875 34.8087 14.2325 35.2737 13.7815L36.1207 12.9195C36.5587 12.4825 36.5997 11.8125 36.2717 11.2795L35.6427 10.2405C35.6837 10.1585 35.6977 10.0895 35.7387 10.0075L36.9547 9.7075C37.5707 9.5565 37.9807 9.0645 37.9807 8.4355V7.2325C37.9807 6.6175 37.5707 6.0845 36.9547 5.9475L35.7517 5.6735C35.7247 5.6055 35.6977 5.5095 35.6567 5.4415L36.3127 4.3615C36.6267 3.8415 36.5857 3.1585 36.1207 2.7205L35.2327 1.8735C34.8227 1.4765 34.2067 1.3535 33.6737 1.6815L32.5797 2.3515C32.4977 2.3105 32.4157 2.2965 32.3337 2.2555L32.0337 1.0115C31.8827 0.4105 31.3907 0.0005 30.7617 0.0005H29.5447C28.9027 0.0005 28.4237 0.4105 28.2737 1.0395L27.9727 2.2425C27.8907 2.2555 27.7947 2.3105 27.7127 2.3515L26.6187 1.6815C26.1267 1.3805 25.4847 1.4625 25.0607 1.8735L24.1717 2.7205C23.7207 3.1445 23.6797 3.8285 24.0077 4.3615L24.6637 5.4415C24.6097 5.5095 24.5817 5.6055 24.5407 5.6735L23.3517 5.9475C22.7367 6.1115 22.3397 6.6175 22.3397 7.2325V8.4355C22.3397 9.0645 22.7497 9.5565 23.3517 9.7075L24.5817 10.0075C24.5957 10.0895 24.6367 10.1585 24.6637 10.2405L24.0217 11.2795C23.7067 11.8125 23.7347 12.4825 24.1717 12.9195L25.0467 13.7815C25.4847 14.2185 26.1407 14.2875 26.6737 13.9595L27.7407 13.3025C27.7947 13.3575 27.8907 13.3715 27.9727 13.4125L28.2737 14.6285C28.4237 15.2165 28.9027 15.6265 29.5447 15.6265ZM5.3597 28.3415H27.3027C30.6387 28.3415 32.6207 26.3595 32.6207 22.9825V17.1855C31.0897 17.6235 29.3267 17.6235 27.7677 17.1855V22.2305C27.7677 23.1465 27.3577 23.4885 26.5237 23.4885H6.0977C5.2637 23.4885 4.8537 23.1465 4.8537 22.2305V14.1775H22.9687C22.0117 13.1255 21.2867 11.8675 20.8637 10.4595H4.8537V7.0415C4.8537 6.2345 5.4137 5.7145 6.2617 5.7145H7.7657C8.9547 5.7145 9.6527 5.9605 10.7187 6.7405L11.2657 7.1505C12.4957 8.0525 13.2477 8.3395 15.0387 8.3395H20.5217C20.4257 6.6035 20.7407 5.0035 21.5337 3.4725H16.3787C15.1897 3.4725 14.4517 3.2125 13.4117 2.4475L12.8517 2.0375C11.6487 1.1485 10.8967 0.8615 9.1057 0.8615H5.3597C2.1057 0.8615 -0.0003 2.8985 -0.0003 6.3165V22.9825C-0.0003 26.3595 1.9827 28.3415 5.3597 28.3415ZM30.1597 10.0215C28.9567 10.0215 27.9587 9.0235 27.9587 7.8205C27.9587 6.6175 28.9567 5.6195 30.1597 5.6195C31.3497 5.6195 32.3617 6.6175 32.3617 7.8205C32.3617 9.0235 31.3497 10.0215 30.1597 10.0215Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.43359375 26.9609375"
          className={className}
        >
          <path
            d="              M29.3807 14.8891H30.5837C31.1037 14.8891 31.5277 14.5471 31.6367 14.0411L31.9517 12.7561C32.0877 12.7151 32.2387 12.6601 32.3747 12.5921L33.4827 13.2751C33.9337 13.5491 34.4527 13.5211 34.8497 13.1251L35.6837 12.2911C36.0387 11.9221 36.0797 11.3891 35.7927 10.9241L35.1227 9.8031C35.2047 9.6801 35.2457 9.5571 35.3007 9.4201L36.5857 9.1051C37.1057 8.9821 37.4337 8.5721 37.4337 8.0531V6.8631C37.4337 6.3441 37.0917 5.9331 36.5857 5.8101L35.3147 5.5101C35.2597 5.3591 35.1917 5.2231 35.1507 5.1131L35.8337 3.9651C36.1077 3.5271 36.0667 2.9671 35.6977 2.6111L34.8357 1.7771C34.4807 1.4221 33.9607 1.3401 33.5237 1.6131L32.3747 2.3241C32.2247 2.2421 32.0877 2.2011 31.9517 2.1461L31.6367 0.8481C31.5137 0.3421 31.1037 0.0001 30.5837 0.0001H29.3807C28.8477 0.0001 28.4377 0.3421 28.3147 0.8611L28.0137 2.1331C27.8497 2.1871 27.7127 2.2421 27.5767 2.3241L26.4277 1.6131C26.0317 1.3531 25.4847 1.4221 25.1287 1.7771L24.2817 2.6111C23.9117 2.9671 23.8437 3.5141 24.1177 3.9651L24.8147 5.1131C24.7597 5.2231 24.7047 5.3731 24.6367 5.5101L23.3787 5.8101C22.8597 5.9471 22.5317 6.3571 22.5317 6.8631V8.0531C22.5317 8.5721 22.8727 8.9821 23.3787 9.1051L24.6637 9.4201C24.7187 9.5571 24.7737 9.6801 24.8277 9.8031L24.1587 10.9241C23.8847 11.3891 23.9257 11.9221 24.2817 12.2911L25.1157 13.1251C25.4847 13.5081 26.0177 13.5351 26.4687 13.2751L27.5897 12.5921C27.7407 12.6601 27.8767 12.7151 28.0137 12.7561L28.3147 14.0411C28.4377 14.5471 28.8477 14.8891 29.3807 14.8891ZM4.8267 26.9611H27.2347C30.1327 26.9611 31.8277 25.2521 31.8277 22.1621V16.5021C30.7887 16.7621 29.4357 16.7621 28.3007 16.5021V21.7381C28.3007 22.8871 27.7127 23.4331 26.6187 23.4331H5.2087C4.1157 23.4331 3.5277 22.8871 3.5277 21.7241V12.2231H22.2577C21.6567 11.3611 21.2047 10.3771 20.9587 9.3241H3.5277V5.9061C3.5277 4.8261 4.1697 4.2241 5.2497 4.2241H7.4377C8.4907 4.2241 9.1057 4.4571 9.9937 5.1411L10.6777 5.7011C11.7437 6.5211 12.4827 6.7951 14.0407 6.7951H20.8497C20.8767 5.5371 21.1367 4.4161 21.7107 3.2671H14.9977C13.9457 3.2671 13.3027 3.0211 12.4277 2.3511L11.7437 1.8051C10.6777 0.9711 9.9527 0.6971 8.3807 0.6971H4.5667C1.7367 0.6971 -0.0003 2.4061 -0.0003 5.4961V22.1621C-0.0003 25.2661 1.7087 26.9611 4.8267 26.9611ZM29.9827 9.6931C28.7517 9.6931 27.7537 8.6821 27.7537 7.4511C27.7537 6.2211 28.7517 5.2091 29.9827 5.1951C31.1997 5.1951 32.2247 6.2211 32.2247 7.4511C32.2247 8.6821 31.1997 9.6931 29.9827 9.6931Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.720703125 27.685546875"
          className={className}
        >
          <path
            d="              M29.4627 15.2856H30.6797C31.2537 15.2856 31.7187 14.9026 31.8557 14.3556L32.1427 13.0976C32.2657 13.0566 32.3747 13.0296 32.4847 12.9746L33.5647 13.6446C34.0427 13.9316 34.6447 13.9046 35.0687 13.4666L35.9157 12.6326C36.3127 12.2226 36.3537 11.6076 36.0527 11.1156L35.3967 10.0356C35.4517 9.9256 35.4787 9.8436 35.5337 9.7346L36.7777 9.4336C37.3517 9.2966 37.7207 8.8316 37.7207 8.2576V7.0686C37.7207 6.4946 37.3377 6.0156 36.7777 5.8926L35.5467 5.5916C35.5057 5.4826 35.4517 5.3726 35.4097 5.2906L36.0797 4.1836C36.3807 3.6916 36.3397 3.0766 35.9157 2.6656L35.0407 1.8316C34.6587 1.4626 34.0837 1.3536 33.6057 1.6546L32.4847 2.3376C32.3747 2.2836 32.2657 2.2556 32.1567 2.2016L31.8557 0.9436C31.7047 0.3826 31.2537 -0.0004 30.6797 -0.0004H29.4627C28.8747 -0.0004 28.4377 0.3826 28.3007 0.9566L27.9997 2.1876C27.8767 2.2286 27.7537 2.2836 27.6447 2.3376L26.5367 1.6546C26.0857 1.3676 25.4847 1.4496 25.0877 1.8316L24.2267 2.6656C23.8027 3.0626 23.7617 3.6776 24.0627 4.1836L24.7327 5.2906C24.6777 5.3726 24.6367 5.4956 24.5957 5.5916L23.3657 5.8926C22.7907 6.0296 22.4357 6.4946 22.4357 7.0686V8.2576C22.4357 8.8316 22.8047 9.2966 23.3657 9.4336L24.6227 9.7346C24.6637 9.8436 24.7047 9.9256 24.7457 10.0356L24.0897 11.1156C23.7887 11.6076 23.8297 12.2226 24.2267 12.6326L25.0747 13.4666C25.4847 13.8906 26.0857 13.9316 26.5777 13.6446L27.6717 12.9746C27.7677 13.0296 27.8907 13.0566 27.9997 13.0976L28.3007 14.3556C28.4377 14.9026 28.8747 15.2856 29.4627 15.2856ZM5.1137 27.6856H27.2757C30.4067 27.6856 32.2517 25.8396 32.2517 22.5996V16.8706C30.9397 17.2126 29.3807 17.2126 28.0277 16.8706V21.9976C28.0277 23.0236 27.5217 23.4606 26.5647 23.4606H5.6877C4.7167 23.4606 4.2247 23.0236 4.2247 21.9976V13.2616H22.6267C21.8477 12.2906 21.2457 11.1696 20.9047 9.9256H4.2247V6.5076C4.2247 5.5646 4.8267 5.0176 5.7837 5.0176H7.6157C8.7367 5.0176 9.3927 5.2496 10.3767 5.9886L10.9927 6.4666C12.1407 7.3276 12.8927 7.6156 14.5747 7.6156H20.6717C20.6307 6.1116 20.9317 4.7306 21.6157 3.3766H15.7227C14.6017 3.3766 13.9047 3.1306 12.9477 2.4066L12.3317 1.9276C11.1837 1.0666 10.4457 0.7796 8.7637 0.7796H4.9767C1.9277 0.7796 -0.0003 2.6656 -0.0003 5.9196V22.5996C-0.0003 25.8396 1.8597 27.6856 5.1137 27.6856ZM30.0777 9.8706C28.8617 9.8706 27.8637 8.8726 27.8637 7.6426C27.8637 6.4396 28.8617 5.4276 30.0777 5.4276C31.2817 5.4136 32.3067 6.4396 32.3067 7.6426C32.3067 8.8726 31.2817 9.8706 30.0777 9.8706Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.61328125 25.197265625"
          className={className}
        >
          <path
            d="              M29.1347 13.7817H30.2697C30.6937 13.7817 31.0077 13.5347 31.1037 13.1117L31.4177 11.7987C31.5957 11.7577 31.8147 11.6617 31.9927 11.5667L33.1547 12.2637C33.4957 12.4827 33.8927 12.4827 34.2067 12.1677L34.9867 11.3617C35.2737 11.0747 35.3007 10.6917 35.0687 10.2947L34.3847 9.1467C34.4937 8.9687 34.5487 8.7907 34.6177 8.6137L35.9297 8.2987C36.3537 8.2027 36.6137 7.8747 36.6137 7.4647V6.3297C36.6137 5.9337 36.3397 5.6467 35.9297 5.5367L34.6307 5.2087C34.5487 4.9907 34.4667 4.8257 34.3987 4.6617L35.1227 3.4867C35.3417 3.1307 35.2867 2.7067 35.0137 2.4337L34.2067 1.6547C33.9067 1.3537 33.4957 1.2847 33.1677 1.5037L31.9927 2.2287C31.7737 2.1187 31.5957 2.0647 31.4177 1.9957L31.1037 0.6697C31.0077 0.2737 30.6937 -0.0003 30.2697 -0.0003H29.1347C28.7247 -0.0003 28.3827 0.2867 28.3007 0.6697L27.9997 1.9827C27.7677 2.0647 27.5897 2.1187 27.3847 2.2287L26.2227 1.5037C25.9087 1.2987 25.4977 1.3537 25.1977 1.6547L24.4177 2.4337C24.1447 2.7207 24.0487 3.1307 24.2677 3.4867L24.9927 4.6617C24.9377 4.8257 24.8417 5.0177 24.7737 5.2087L23.4607 5.5367C23.0647 5.6467 22.8047 5.9477 22.8047 6.3297V7.4647C22.8047 7.8747 23.0647 8.2027 23.4607 8.2987L24.7737 8.6137C24.8687 8.7907 24.9377 8.9687 25.0197 9.1467L24.3357 10.3227C24.1177 10.6917 24.1447 11.0877 24.4317 11.3617L25.1977 12.1677C25.4977 12.4827 25.8947 12.4827 26.2497 12.2637L27.4117 11.5667C27.6307 11.6757 27.8227 11.7577 27.9997 11.7987L28.3007 13.1117C28.3827 13.5217 28.7247 13.7817 29.1347 13.7817ZM4.0337 25.1977H26.8787C29.2717 25.1977 30.6387 23.8297 30.6387 21.2047V15.2307C30.1877 15.2987 29.5037 15.2987 28.9437 15.2307V21.1227C28.9437 22.6957 28.0817 23.5157 26.5647 23.5157H4.0607C2.5297 23.5157 1.6957 22.6957 1.6957 21.1227V9.8847H21.8337C21.6427 9.3787 21.5057 8.8457 21.4377 8.2847H1.6957V4.4707C1.6957 3.0217 2.4337 2.2967 3.8417 2.2967H6.9997C7.9977 2.2967 8.5317 2.5017 9.2697 3.1577L10.0487 3.8417C10.9097 4.5937 11.5937 4.8397 12.9747 4.8397H21.5747C21.7107 4.2387 21.8747 3.7327 22.1617 3.1447H13.3847C12.3457 3.1447 11.7987 2.9527 11.0877 2.3247L10.2947 1.6407C9.4067 0.8477 8.7777 0.6287 7.4097 0.6287H3.5137C1.2437 0.6287 -0.0003 1.8727 -0.0003 4.3747V21.2047C-0.0003 23.8577 1.3677 25.1977 4.0337 25.1977ZM29.7087 9.1187C28.4647 9.1187 27.4937 8.1347 27.4937 6.9047C27.4937 5.6877 28.4647 4.6757 29.7087 4.6617C30.9117 4.6487 31.9237 5.6877 31.9237 6.9047C31.9237 8.1347 30.9117 9.1187 29.7087 9.1187Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.091796875 26.072265625"
          className={className}
        >
          <path
            d="              M29.2717 14.4099H30.4607C30.9257 14.4099 31.2817 14.1229 31.3907 13.6719L31.7047 12.3459C31.8827 12.2909 32.0747 12.2089 32.2387 12.1269L33.4007 12.8379C33.7837 13.0699 34.2347 13.0699 34.5767 12.7149L35.3967 11.8809C35.7107 11.5529 35.7387 11.1149 35.4927 10.6919L34.7947 9.5429C34.9047 9.3649 34.9457 9.2149 35.0137 9.0509L36.3397 8.7229C36.8047 8.6129 37.0917 8.2579 37.0917 7.8069V6.6309C37.0917 6.1799 36.7907 5.8379 36.3397 5.7289L35.0277 5.3999C34.9587 5.1949 34.8767 5.0449 34.8227 4.9079L35.5337 3.7189C35.7797 3.3219 35.7387 2.8439 35.4237 2.5429L34.5767 1.7229C34.2477 1.3949 33.7967 1.3259 33.4277 1.5589L32.2387 2.2969C32.0467 2.2009 31.8827 2.1469 31.7047 2.0919L31.3907 0.7379C31.2817 0.3009 30.9257 -0.0001 30.4607 -0.0001H29.2717C28.8207 -0.0001 28.4517 0.3149 28.3557 0.7519L28.0407 2.0649C27.8357 2.1469 27.6587 2.2009 27.4807 2.2969L26.3187 1.5589C25.9627 1.3399 25.4847 1.3949 25.1567 1.7229L24.3497 2.5429C24.0217 2.8579 23.9397 3.3219 24.1857 3.7189L24.9237 4.9079C24.8557 5.0449 24.7867 5.2229 24.7047 5.3999L23.3927 5.7289C22.9547 5.8379 22.6547 6.1929 22.6547 6.6309V7.8069C22.6547 8.2579 22.9547 8.6129 23.3927 8.7229L24.7187 9.0509C24.8007 9.2149 24.8687 9.3649 24.9377 9.5429L24.2407 10.7049C24.0077 11.1149 24.0347 11.5669 24.3637 11.8809L25.1567 12.7149C25.4847 13.0569 25.9497 13.0699 26.3317 12.8379L27.5077 12.1269C27.6997 12.2359 27.8767 12.2909 28.0407 12.3459L28.3557 13.6719C28.4517 14.1089 28.8207 14.4099 29.2717 14.4099ZM4.4847 26.0719H27.1937C29.8047 26.0719 31.3227 24.5549 31.3227 21.6289V16.0649C30.5977 16.2149 29.5177 16.2289 28.6427 16.0649V21.4099C28.6427 22.7359 27.9457 23.3929 26.6877 23.3929H4.6487C3.3767 23.3929 2.6797 22.7359 2.6797 21.4099V10.9649H21.8067C21.4237 10.2399 21.1507 9.4469 21.0277 8.5999H2.6797V5.1949C2.6797 3.9379 3.3637 3.2809 4.5937 3.2809H7.2187C8.1897 3.2809 8.7497 3.4999 9.5157 4.1289L10.3087 4.7719C11.2517 5.5509 11.9907 5.8109 13.4117 5.8109H21.0547C21.1637 4.8669 21.3827 4.0329 21.8337 3.1309H14.1227C13.1387 3.1309 12.5647 2.8989 11.8127 2.2829L11.0197 1.6539C10.0627 0.8609 9.3517 0.6019 7.9297 0.6019H4.0607C1.5037 0.6019 -0.0003 2.0919 -0.0003 4.9629V21.6289C-0.0003 24.5549 1.5317 26.0719 4.4847 26.0719ZM29.8727 9.4749C28.6157 9.4749 27.6177 8.4629 27.6177 7.2049C27.6177 5.9749 28.6157 4.9489 29.8727 4.9359C31.1037 4.9219 32.1427 5.9749 32.1427 7.2049C32.1427 8.4629 31.1037 9.4749 29.8727 9.4749Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.900390625 25.580078125"
          className={className}
        >
          <path
            d="              M29.2167 14.1504H30.3927C30.8167 14.1504 31.1447 13.8904 31.2407 13.4664L31.5687 12.1134C31.7597 12.0584 31.9787 11.9764 32.1697 11.8804L33.3457 12.5914C33.7147 12.8104 34.0977 12.8104 34.4257 12.4964L35.2327 11.6754C35.5197 11.3614 35.5607 10.9644 35.3147 10.5824L34.6177 9.3924C34.7407 9.2014 34.7817 9.0374 34.8637 8.8454L36.2027 8.5174C36.6407 8.4214 36.9007 8.0934 36.9007 7.6694V6.5074C36.9007 6.0974 36.6137 5.7964 36.2027 5.6874L34.8767 5.3594C34.7817 5.1274 34.6997 4.9494 34.6307 4.7984L35.3687 3.5824C35.5877 3.2264 35.5467 2.7754 35.2597 2.5024L34.4257 1.6954C34.1247 1.3944 33.7147 1.3264 33.3727 1.5444L32.1697 2.2964C31.9517 2.1874 31.7597 2.1324 31.5687 2.0644L31.2407 0.6974C31.1447 0.2874 30.8167 0.0004 30.3927 0.0004H29.2167C28.7927 0.0004 28.4517 0.3004 28.3687 0.6974L28.0547 2.0374C27.8227 2.1324 27.6307 2.1874 27.4257 2.2964L26.2497 1.5444C25.9217 1.3394 25.4847 1.3944 25.1837 1.6954L24.3767 2.5024C24.0897 2.8024 24.0077 3.2264 24.2267 3.5824L24.9787 4.7984C24.9097 4.9494 24.8277 5.1544 24.7457 5.3594L23.4067 5.6874C22.9957 5.7964 22.7227 6.1114 22.7227 6.5074V7.6694C22.7227 8.0934 22.9957 8.4214 23.4067 8.5174L24.7597 8.8454C24.8417 9.0374 24.9097 9.2014 24.9927 9.3924L24.2947 10.5954C24.0767 10.9644 24.1037 11.3754 24.3907 11.6754L25.1837 12.4964C25.4847 12.8104 25.9087 12.8104 26.2637 12.5914L27.4527 11.8804C27.6857 11.9904 27.8767 12.0584 28.0547 12.1134L28.3687 13.4664C28.4517 13.8774 28.7927 14.1504 29.2167 14.1504ZM4.2927 25.5804H27.1657C29.6137 25.5804 31.0487 24.1584 31.0487 21.3414V15.8184C30.5017 15.9144 29.5587 15.9274 28.8477 15.8184V21.2464C28.8477 22.6544 28.0687 23.3784 26.7147 23.3784H4.3207C2.9527 23.3784 2.2017 22.6544 2.2017 21.2324V10.2674H21.5467C21.3007 9.6114 21.1227 8.9144 21.0547 8.2034H2.2017V4.7984C2.2017 3.4454 2.9117 2.7484 4.2247 2.7484H7.1097C8.0117 2.7484 8.5587 2.9804 9.2557 3.5684L10.0897 4.2654C10.9787 5.0034 11.7027 5.2634 13.0567 5.2634H21.1637C21.3277 4.4844 21.5197 3.8284 21.9027 3.0624H13.6307C12.7017 3.0624 12.1407 2.8434 11.4567 2.2554L10.6227 1.5724C9.7207 0.8064 9.0237 0.5604 7.6697 0.5604H3.7737C1.3807 0.5604 -0.0003 1.9274 -0.0003 4.6754V21.3414C-0.0003 24.1714 1.4357 25.5804 4.2927 25.5804ZM29.8187 9.3654C28.5337 9.3654 27.5347 8.3534 27.5347 7.0824C27.5347 5.8374 28.5337 4.8124 29.8187 4.7984C31.0487 4.7714 32.0877 5.8374 32.0877 7.0824C32.0877 8.3534 31.0487 9.3654 29.8187 9.3654Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.2421875 26.455078125"
          className={className}
        >
          <path
            d="              M29.3267 14.615H30.5157C31.0077 14.615 31.3907 14.301 31.4997 13.822L31.8147 12.523C31.9647 12.469 32.1427 12.4 32.3067 12.318L33.4417 13.016C33.8517 13.275 34.3297 13.262 34.6997 12.893L35.5197 12.059C35.8477 11.703 35.8887 11.225 35.6157 10.787L34.9457 9.652C35.0407 9.502 35.0817 9.365 35.1367 9.215L36.4497 8.887C36.9277 8.777 37.2427 8.395 37.2427 7.902V6.727C37.2427 6.248 36.9137 5.879 36.4497 5.756L35.1507 5.455C35.0817 5.264 35.0137 5.113 34.9587 4.99L35.6697 3.828C35.9157 3.404 35.8747 2.898 35.5337 2.57L34.6857 1.75C34.3437 1.408 33.8657 1.326 33.4687 1.586L32.3067 2.311C32.1287 2.215 31.9647 2.174 31.8147 2.105L31.4997 0.793C31.3767 0.314 31.0077 0 30.5157 0H29.3267C28.8337 0 28.4377 0.328 28.3417 0.793L28.0277 2.092C27.8357 2.16 27.6857 2.215 27.5217 2.311L26.3597 1.586C25.9907 1.34 25.4847 1.408 25.1427 1.75L24.3227 2.57C23.9807 2.898 23.8987 3.404 24.1587 3.828L24.8827 4.99C24.8147 5.113 24.7457 5.291 24.6777 5.455L23.3927 5.756C22.9137 5.879 22.5997 6.262 22.5997 6.727V7.902C22.5997 8.395 22.9137 8.777 23.3927 8.887L24.7047 9.215C24.7597 9.365 24.8277 9.502 24.8827 9.652L24.2127 10.801C23.9527 11.225 23.9937 11.717 24.3227 12.059L25.1427 12.893C25.4847 13.248 25.9767 13.275 26.3867 13.016L27.5487 12.318C27.7267 12.414 27.8767 12.469 28.0277 12.523L28.3417 13.822C28.4377 14.301 28.8337 14.615 29.3267 14.615ZM4.6347 26.455H27.2067C29.9417 26.455 31.5407 24.855 31.5407 21.861V16.242C30.6797 16.447 29.4767 16.461 28.5057 16.242V21.547C28.5057 22.805 27.8357 23.406 26.6597 23.406H4.8947C3.6917 23.406 3.0487 22.805 3.0487 21.547V11.498H21.9977C21.5197 10.719 21.1777 9.844 20.9997 8.914H3.0487V5.496C3.0487 4.32 3.7047 3.691 4.8807 3.691H7.3147C8.3127 3.691 8.9137 3.91 9.7207 4.566L10.4727 5.168C11.4567 5.961 12.1957 6.234 13.6857 6.234H20.9587C21.0407 5.154 21.2737 4.197 21.7797 3.186H14.5057C13.4937 3.186 12.8787 2.953 12.0727 2.311L11.3337 1.709C10.3357 0.916 9.6117 0.643 8.1207 0.643H4.2797C1.6137 0.643 -0.0003 2.229 -0.0003 5.195V21.861C-0.0003 24.855 1.6137 26.455 4.6347 26.455ZM29.9277 9.57C28.6697 9.57 27.6717 8.559 27.6717 7.314C27.6717 6.084 28.6697 5.059 29.9277 5.045C31.1447 5.031 32.1837 6.084 32.1837 7.314C32.1837 8.559 31.1447 9.57 29.9277 9.57Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.23046875 24.71875"
          className={className}
        >
          <path
            d="              M29.0117 13.316H30.1057C30.5157 13.316 30.8167 13.07 30.8987 12.674L31.1997 11.402C31.3767 11.348 31.5957 11.266 31.7737 11.184L32.8947 11.854C33.2227 12.059 33.5917 12.059 33.9067 11.758L34.6587 10.979C34.9317 10.691 34.9587 10.322 34.7407 9.953L34.0837 8.832C34.1797 8.654 34.2347 8.504 34.3027 8.326L35.5747 8.025C35.9707 7.93 36.2307 7.615 36.2307 7.219V6.125C36.2307 5.729 35.9567 5.455 35.5747 5.359L34.3297 5.031C34.2347 4.826 34.1527 4.662 34.0977 4.512L34.7817 3.363C34.9997 3.035 34.9457 2.625 34.6857 2.352L33.9067 1.6C33.6187 1.313 33.2227 1.258 32.9087 1.449L31.7737 2.16C31.5547 2.051 31.3767 1.996 31.1997 1.928L30.8987 0.656C30.8167 0.26 30.5157 0 30.1057 0H29.0117C28.6157 0 28.3007 0.287 28.2187 0.656L27.9317 1.914C27.6997 1.996 27.5217 2.051 27.3297 2.16L26.2087 1.449C25.9087 1.258 25.4977 1.313 25.2107 1.6L24.4727 2.352C24.1997 2.639 24.1037 3.035 24.3087 3.363L25.0197 4.512C24.9647 4.662 24.8827 4.84 24.8007 5.031L23.5427 5.359C23.1597 5.455 22.9137 5.742 22.9137 6.125V7.219C22.9137 7.615 23.1597 7.93 23.5427 8.025L24.8147 8.326C24.8967 8.504 24.9647 8.654 25.0337 8.832L24.3767 9.967C24.1717 10.322 24.1997 10.719 24.4727 10.979L25.2107 11.758C25.4977 12.059 25.8947 12.045 26.2227 11.854L27.3577 11.184C27.5767 11.279 27.7537 11.348 27.9317 11.402L28.2187 12.674C28.3007 13.057 28.6157 13.316 29.0117 13.316ZM3.6917 24.719H26.4957C28.8337 24.719 30.0917 23.42 30.0917 21.041V14.479C29.7907 14.492 29.4357 14.492 29.0797 14.479V20.986C29.0797 22.777 28.0957 23.693 26.3727 23.693H3.7187C1.9417 23.693 1.0117 22.777 1.0117 20.986V9.393H22.2307C22.1077 9.078 22.0117 8.75 21.9437 8.408H1.0117V4.061C1.0117 2.488 1.7907 1.723 3.3497 1.723H6.8497C7.9847 1.723 8.4907 1.887 9.2837 2.639L10.0077 3.309C10.8277 4.074 11.4437 4.293 12.8657 4.293H22.1207C22.2167 3.938 22.3397 3.609 22.5037 3.268H13.0707C11.8807 3.268 11.3477 3.117 10.5957 2.42L9.8707 1.75C8.9827 0.916 8.4627 0.738 7.0547 0.738H3.1717C1.0797 0.738 -0.0003 1.805 -0.0003 3.979V21.041C-0.0003 23.447 1.2717 24.719 3.6917 24.719ZM29.5727 8.818C28.3557 8.818 27.4257 7.861 27.4257 6.672C27.4257 5.496 28.3557 4.525 29.5727 4.512C30.7207 4.484 31.7187 5.496 31.7187 6.672C31.7187 7.861 30.7207 8.818 29.5727 8.818Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.025390625 24.458984375"
          className={className}
        >
          <path
            d="              M28.9567 13.0836H30.0237C30.4197 13.0836 30.7207 12.8376 30.8027 12.4416L31.1037 11.2106C31.2677 11.1566 31.4867 11.0606 31.6507 10.9786L32.7577 11.6486C33.0857 11.8536 33.4547 11.8536 33.7427 11.5526L34.4937 10.7876C34.7537 10.5136 34.7947 10.1446 34.5627 9.7756L33.9197 8.6816C34.0297 8.5036 34.0707 8.3536 34.1527 8.1756L35.3827 7.8746C35.7797 7.7926 36.0257 7.4786 36.0257 7.0956V6.0156C36.0257 5.6326 35.7657 5.3726 35.3827 5.2636L34.1657 4.9496C34.0707 4.7446 33.9887 4.5796 33.9337 4.4296L34.6177 3.3086C34.8227 2.9806 34.7677 2.5836 34.5077 2.3246L33.7427 1.5726C33.4687 1.2856 33.0857 1.2446 32.7717 1.4356L31.6507 2.1326C31.4457 2.0236 31.2677 1.9686 31.1037 1.9006L30.8027 0.6426C30.7207 0.2596 30.4197 -0.0004 30.0237 -0.0004H28.9567C28.5747 -0.0004 28.2597 0.2876 28.1637 0.6426L27.8907 1.8866C27.6717 1.9686 27.4937 2.0236 27.3027 2.1326L26.1957 1.4356C25.9087 1.2446 25.4977 1.2856 25.2247 1.5726L24.4997 2.3246C24.2267 2.5976 24.1307 2.9806 24.3357 3.3086L25.0337 4.4296C24.9787 4.5796 24.8967 4.7576 24.8277 4.9496L23.5837 5.2636C23.2017 5.3726 22.9547 5.6466 22.9547 6.0156V7.0956C22.9547 7.4786 23.2017 7.7926 23.5837 7.8746L24.8277 8.1756C24.9097 8.3536 24.9787 8.5036 25.0467 8.6816L24.4047 9.7886C24.1997 10.1446 24.2267 10.5276 24.4997 10.7876L25.2247 11.5526C25.4977 11.8536 25.8947 11.8396 26.2227 11.6486L27.3297 10.9786C27.5487 11.0876 27.7127 11.1566 27.8907 11.2106L28.1637 12.4416C28.2597 12.8246 28.5747 13.0836 28.9567 13.0836ZM3.5137 24.4586H26.3047C28.6017 24.4586 29.8187 23.2146 29.8187 20.9586V14.0816C29.5857 14.0816 29.4087 14.0816 29.1487 14.0816V20.9176C29.1487 22.8186 28.0957 23.7886 26.2777 23.7886H3.5407C1.6547 23.7886 0.6697 22.8186 0.6697 20.9176V9.1466H22.4217C22.3397 8.9276 22.2717 8.7086 22.2027 8.4766H0.6697V3.8556C0.6697 2.2146 1.4627 1.4216 3.0897 1.4216H6.7817C7.9707 1.4216 8.4627 1.5856 9.2837 2.3656L9.9807 3.0356C10.7867 3.8006 11.3747 4.0056 12.8107 4.0056H22.3947C22.4767 3.7736 22.5857 3.5546 22.6817 3.3356H12.9067C11.6347 3.3356 11.1157 3.1996 10.3497 2.4606L9.6527 1.8046C8.7637 0.9436 8.2987 0.7926 6.8767 0.7926H3.0077C0.9847 0.7926 -0.0003 1.7776 -0.0003 3.7736V20.9586C-0.0003 23.2426 1.2167 24.4586 3.5137 24.4586ZM29.4907 8.6676C28.3147 8.6676 27.3847 7.7246 27.3847 6.5486C27.3847 5.4006 28.3147 4.4436 29.4907 4.4296C30.6247 4.4156 31.6097 5.4006 31.6097 6.5486C31.6097 7.7246 30.6247 8.6676 29.4907 8.6676Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}