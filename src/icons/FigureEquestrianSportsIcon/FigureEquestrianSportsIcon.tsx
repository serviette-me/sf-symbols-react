import { IconProps } from "../../types"

export default function FigureEquestrianSportsIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.91796875 28.73828125"
          className={className}
        >
          <path
            d="              M19.6187 6.9042C21.5197 6.9042 23.0647 5.3452 23.0647 3.4452C23.0647 1.5452 21.5197 0.0002 19.6187 0.0002C17.7187 0.0002 16.1597 1.5452 16.1597 3.4452C16.1597 5.3452 17.7187 6.9042 19.6187 6.9042ZM21.6427 17.3082C22.6677 17.3082 23.4887 16.5022 23.4887 15.4762C23.4887 14.4512 22.6677 13.6442 21.6427 13.6442H16.6387V8.5172C16.6387 6.5082 14.9297 5.1952 13.0567 5.5782L4.1017 7.4242C0.5877 8.1482 -0.2733 12.2502 2.2017 14.5602L7.3277 19.3592V26.8922C7.3277 27.9042 8.1487 28.7382 9.1597 28.7382C10.1717 28.7382 11.0197 27.9042 11.0197 26.8922V18.6482C11.0197 18.0192 10.8557 17.6502 10.4867 17.2262L6.7947 13.1932C6.6177 13.0152 6.6857 12.7832 6.9317 12.7282L12.5367 11.6892C12.8107 11.6352 12.9747 11.7712 12.9747 12.0312V15.4762C12.9747 16.5022 13.7947 17.3082 14.8067 17.3082ZM29.7907 24.2262H33.1817C34.1797 24.2262 34.9177 23.5022 34.9177 22.5042V8.5862C34.9177 7.6012 34.1797 6.8772 33.1817 6.8772H29.7367C24.5687 6.8772 21.3147 8.1892 17.9927 11.9352H21.5467C21.6697 11.9352 21.7927 11.9352 21.9157 11.9492C24.0487 10.2262 26.3867 9.5842 29.7367 9.5842H32.2107V21.5062H29.7907C29.4087 21.5062 29.2437 21.3832 29.0937 21.0822L27.7677 18.4432C27.3987 17.7052 26.6467 17.5682 26.0447 17.8282C25.4027 18.0742 24.9097 18.8122 25.3477 19.6742L26.6737 22.3122C27.2617 23.4882 28.4787 24.2262 29.7907 24.2262ZM12.7287 22.3402C14.0277 21.3832 15.1077 20.2342 16.0367 19.0312H14.8067C14.1227 19.0312 13.4667 18.8262 12.9337 18.4842C12.8657 18.5522 12.7967 18.6352 12.7287 18.7032ZM1.3677 24.8012H4.3617C4.8397 24.8012 5.3047 24.7872 5.6187 24.7732V22.0662C5.2907 22.0662 4.8537 22.0942 4.3617 22.0942H1.3677C0.6427 22.0942 -0.0003 22.6402 -0.0003 23.4612C-0.0003 24.1722 0.6287 24.8012 1.3677 24.8012Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.607421875 27.453125"
          className={className}
        >
          <path
            d="              M18.4567 6.4397C20.2207 6.4397 21.6697 4.9907 21.6697 3.2127C21.6697 1.4497 20.2207 -0.0003 18.4567 -0.0003C16.6657 -0.0003 15.2307 1.4497 15.2307 3.2127C15.2307 4.9907 16.6657 6.4397 18.4567 6.4397ZM20.5487 16.3517C21.4517 16.3517 22.1897 15.6267 22.1897 14.7247C22.1897 13.8087 21.4517 13.0837 20.5487 13.0837H15.5317V7.9567C15.5317 6.0837 13.9587 4.8947 12.2227 5.2367L3.5277 7.0407C0.2457 7.7107 -0.6153 11.5797 1.7367 13.7127L6.9317 18.4297V25.8127C6.9317 26.7017 7.6697 27.4527 8.5727 27.4527C9.4607 27.4527 10.2127 26.7017 10.2127 25.8127V17.8007C10.2127 17.2267 10.0767 16.9117 9.7347 16.5157L5.8657 12.4687C5.6607 12.2637 5.7557 11.9907 6.0157 11.9357L11.6617 10.8827C12.0857 10.8147 12.2637 10.9647 12.2637 11.3477V14.7247C12.2637 15.6267 13.0017 16.3517 13.9047 16.3517ZM28.4787 22.5177H31.1717C32.0197 22.5177 32.6077 21.9297 32.6077 21.0957V7.9977C32.6077 7.1917 32.0197 6.5897 31.1857 6.5897H28.4237C23.3927 6.5897 20.2887 7.8887 17.0767 11.5667H19.8657C19.9477 11.5667 20.0427 11.5667 20.1247 11.5797C22.4217 9.5157 24.8417 8.7367 28.4237 8.7367H30.4607V20.3707H28.4787C28.0277 20.3707 27.7537 20.1797 27.5767 19.8247L26.2907 17.2537C26.0037 16.6797 25.4157 16.5707 24.9517 16.7477C24.4317 16.9397 24.0357 17.5277 24.3767 18.2247L25.6617 20.7947C26.1957 21.8477 27.2757 22.5177 28.4787 22.5177ZM11.7307 21.2047C13.0427 20.2477 14.0957 19.0857 15.0387 17.8687H13.9047C13.3987 17.8687 12.9197 17.7457 12.5097 17.5277C12.2637 17.8147 12.0177 18.0877 11.7307 18.3477ZM1.0797 23.5297H3.7597C4.3617 23.5297 4.9357 23.5017 5.4137 23.4477V21.3007C4.9357 21.3557 4.3747 21.3827 3.7597 21.3827H1.0797C0.5057 21.3827 -0.0003 21.8207 -0.0003 22.4767C-0.0003 23.0367 0.4927 23.5297 1.0797 23.5297Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.837890625 28.13671875"
          className={className}
        >
          <path
            d="              M19.072 6.6855C20.904 6.6855 22.408 5.1815 22.408 3.3355C22.408 1.5035 20.904 0.0005 19.072 0.0005C17.227 0.0005 15.723 1.5035 15.723 3.3355C15.723 5.1815 17.227 6.6855 19.072 6.6855ZM21.123 16.8575C22.107 16.8575 22.887 16.0915 22.887 15.1215C22.887 14.1505 22.107 13.3845 21.123 13.3845H16.119V8.2575C16.119 6.3165 14.479 5.0585 12.674 5.4275L3.828 7.2465C0.438 7.9435 -0.424 11.9355 1.982 14.1645L7.15 18.9215V26.3865C7.15 27.3435 7.93 28.1365 8.887 28.1365C9.844 28.1365 10.637 27.3435 10.637 26.3865V18.2515C10.637 17.6505 10.5 17.2945 10.131 16.8985L6.357 12.8515C6.166 12.6605 6.262 12.4145 6.508 12.3595L12.127 11.3205C12.469 11.2515 12.646 11.3885 12.646 11.7165V15.1215C12.646 16.0915 13.426 16.8575 14.383 16.8575ZM29.176 23.4195H32.238C33.168 23.4195 33.838 22.7635 33.838 21.8475V8.3125C33.838 7.4105 33.168 6.7405 32.252 6.7405H29.121C24.021 6.7405 20.836 8.0525 17.568 11.7575H20.768C20.863 11.7575 20.973 11.7575 21.082 11.7715C23.283 9.8985 25.662 9.1875 29.121 9.1875H31.391V20.9725H29.176C28.766 20.9725 28.547 20.8225 28.383 20.4945L27.084 17.8825C26.742 17.2265 26.072 17.1035 25.539 17.3225C24.951 17.5415 24.5 18.2105 24.896 18.9905L26.195 21.6015C26.756 22.7225 27.918 23.4195 29.176 23.4195ZM12.264 21.8065C13.563 20.8495 14.643 19.7015 15.572 18.4845H14.383C13.781 18.4845 13.221 18.3205 12.742 18.0335C12.592 18.2105 12.428 18.3885 12.264 18.5395ZM1.244 24.1995H4.074C4.621 24.1995 5.141 24.1715 5.523 24.1585V21.7105C5.127 21.7385 4.621 21.7655 4.074 21.7655H1.244C0.588 21.7655 0 22.2575 0 22.9965C0 23.6385 0.574 24.1995 1.244 24.1995Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.320663311078157 25.498046875"
          className={className}
        >
          <path
            d="              M16.8928 5.8103C18.4928 5.8103 19.7918 4.5113 19.7918 2.8843C19.7918 1.2993 18.4928 0.0003 16.8928 0.0003C15.2798 0.0003 13.9808 1.2993 13.9808 2.8843C13.9808 4.5113 15.2798 5.8103 16.8928 5.8103ZM18.8888 15.0253C19.6688 15.0253 20.2968 14.3963 20.2968 13.6173C20.2968 12.8383 19.6688 12.2223 18.8888 12.2223H14.0078V7.2183C14.0078 5.5643 12.6138 4.4983 11.0688 4.8123L2.8378 6.5213C-0.1282 7.1233 -0.9352 10.6643 1.2108 12.5503L6.3248 17.0623V24.1033C6.3248 24.8693 6.9668 25.4983 7.7328 25.4983C8.4848 25.4983 9.1278 24.8693 9.1278 24.1033V16.5293C9.1278 16.0233 9.0178 15.7633 8.7038 15.4353L4.7798 11.4573C4.5608 11.2383 4.6698 10.9243 4.9438 10.8833L10.4668 9.8573C11.0138 9.7613 11.2188 9.9253 11.2188 10.4183V13.6173C11.2188 14.3963 11.8478 15.0253 12.6138 15.0253ZM26.3948 20.1663H28.3358C28.9648 20.1663 29.3208 19.7973 29.3208 19.1953V7.2053C29.3208 6.6723 28.9648 6.3163 28.4188 6.3163H26.3398C21.6368 6.3163 18.8068 7.5193 15.8128 10.9923H17.5768C20.0238 8.5173 22.5258 7.5883 26.3398 7.5883H28.0358V18.8673H26.3948C25.8478 18.8673 25.4518 18.5933 25.2188 18.1423L24.0028 15.7223C23.8248 15.3943 23.4968 15.3123 23.2098 15.4083C22.8948 15.5173 22.6488 15.8733 22.8538 16.2973L24.0708 18.7303C24.5218 19.6193 25.3828 20.1663 26.3948 20.1663ZM10.3578 19.4273C11.6018 18.5393 12.5998 17.4183 13.5158 16.2423H12.6138C12.3678 16.2423 12.1488 16.2153 11.9168 16.1333C11.4378 16.7203 10.9188 17.2543 10.3578 17.7463ZM0.7468 21.5603H3.0438C3.7818 21.5603 4.4648 21.5193 5.1078 21.4243V20.1383C4.4788 20.2343 3.7818 20.2893 3.0438 20.2893H0.7468C0.3908 20.2893 0.1038 20.5623 0.1038 20.9313C0.1038 21.2733 0.3908 21.5603 0.7468 21.5603Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.130859375 26.6328125"
          className={className}
        >
          <path
            d="              M17.7183 6.1525C19.4003 6.1525 20.7673 4.7715 20.7673 3.0625C20.7673 1.3805 19.4003 -0.0005 17.7183 -0.0005C16.0093 -0.0005 14.6293 1.3805 14.6293 3.0625C14.6293 4.7715 16.0093 6.1525 17.7183 6.1525ZM19.8383 15.7365C20.6853 15.7365 21.3553 15.0805 21.3553 14.2325C21.3553 13.3845 20.6853 12.7285 19.8383 12.7285H14.8203V7.5875C14.8203 5.8245 13.3433 4.7035 11.7033 5.0315L3.1583 6.7945C0.0133 7.4375 -0.8207 11.1565 1.4353 13.1665L6.6723 17.8285V25.1155C6.6723 25.9495 7.3553 26.6325 8.1893 26.6325C9.0093 26.6325 9.6933 25.9495 9.6933 25.1155V17.2535C9.6933 16.7205 9.5843 16.4335 9.2423 16.0785L5.2633 12.0035C5.0453 11.7855 5.1683 11.4845 5.4273 11.4295L11.1013 10.3765C11.6073 10.2815 11.8123 10.4585 11.8123 10.9105V14.2325C11.8123 15.0805 12.4823 15.7365 13.3163 15.7365ZM27.6313 21.4375H29.8863C30.6253 21.4375 31.1313 20.9315 31.1313 20.1935V7.6285C31.1313 6.9175 30.6253 6.4255 29.9143 6.4255H27.5763C22.6403 6.4255 19.6333 7.6975 16.5023 11.3335H18.7993C18.8533 11.3335 18.9223 11.3335 18.9763 11.3335C21.3693 9.0505 23.8573 8.2035 27.5763 8.2035H29.3403V19.6325H27.6313C27.1523 19.6325 26.8103 19.4145 26.6053 19.0175L25.3473 16.4885C25.1013 16.0235 24.6363 15.9275 24.2543 16.0645C23.8163 16.2145 23.4613 16.7075 23.7613 17.2945L25.0193 19.8245C25.5113 20.8085 26.5093 21.4375 27.6313 21.4375ZM11.0883 20.4665C12.4003 19.5235 13.4533 18.3615 14.3963 17.1305H13.3163C12.9333 17.1305 12.5783 17.0485 12.2503 16.9125C11.8813 17.3355 11.5113 17.7465 11.0883 18.1155ZM0.9023 22.7085H3.3633C4.0603 22.7085 4.7033 22.6815 5.2913 22.5995V20.8085C4.7163 20.8905 4.0603 20.9315 3.3633 20.9315H0.9023C0.4103 20.9315 0.0003 21.3005 0.0003 21.8475C0.0003 22.3125 0.4103 22.7085 0.9023 22.7085Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.296875 26.16796875"
          className={className}
        >
          <path
            d="              M17.2946 5.9751C18.9356 5.9751 20.2756 4.6481 20.2756 2.9801C20.2756 1.3401 18.9356 0.0001 17.2946 0.0001C15.6266 0.0001 14.3006 1.3401 14.3006 2.9801C14.3006 4.6481 15.6266 5.9751 17.2946 5.9751ZM19.4416 15.3941C20.2476 15.3941 20.8906 14.7661 20.8906 13.9591C20.8906 13.1521 20.2476 12.5231 19.4416 12.5231H14.4236V7.3831C14.4236 5.6741 12.9886 4.5801 11.4026 4.9081L2.9526 6.6581C-0.1094 7.2871 -0.9434 10.9101 1.2716 12.8651L6.5356 17.4861V24.7321C6.5356 25.5121 7.1916 26.1681 7.9706 26.1681C8.7496 26.1681 9.4066 25.5121 9.4066 24.7321V16.9391C9.4066 16.4341 9.2966 16.1601 8.9826 15.8181L4.9356 11.7441C4.7026 11.5121 4.8266 11.1971 5.0996 11.1421L10.7866 10.0901C11.3476 9.9801 11.5526 10.1721 11.5526 10.6641V13.9591C11.5526 14.7661 12.2086 15.3941 12.9886 15.3941ZM27.1656 20.8221H29.1616C29.8456 20.8221 30.2966 20.3711 30.2966 19.6871V7.4101C30.2966 6.7671 29.8456 6.3161 29.1896 6.3161H27.1116C22.2306 6.3161 19.2776 7.5881 16.1736 11.1971H18.3336C20.7816 8.7911 23.2966 7.8891 27.1116 7.8891H28.7106V19.2231H27.1656C26.6606 19.2231 26.2776 18.9761 26.0586 18.5531L24.8146 16.0641C24.5956 15.6541 24.1996 15.5591 23.8706 15.6681C23.4606 15.8051 23.1466 16.2421 23.4066 16.7751L24.6506 19.2771C25.1286 20.2211 26.0856 20.8221 27.1656 20.8221ZM10.7326 20.0571C12.0446 19.1131 13.0976 17.9371 14.0406 16.7211H12.9886C12.6876 16.7211 12.3866 16.6661 12.0996 16.5571C11.6756 17.0761 11.2246 17.5411 10.7326 17.9921ZM0.8066 22.2581H3.1586C3.8826 22.2581 4.5666 22.2171 5.2086 22.1211V20.5351C4.5796 20.6311 3.8826 20.6851 3.1586 20.6851H0.8066C0.3556 20.6851 -0.0004 21.0141 -0.0004 21.4781C-0.0004 21.8891 0.3556 22.2581 0.8066 22.2581Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.7734375 26.98828125"
          className={className}
        >
          <path
            d="              M18.033 6.2752C19.756 6.2752 21.164 4.8672 21.164 3.1312C21.164 1.4082 19.756 0.0002 18.033 0.0002C16.297 0.0002 14.889 1.4082 14.889 3.1312C14.889 4.8672 16.297 6.2752 18.033 6.2752ZM20.139 16.0102C21.014 16.0102 21.725 15.3122 21.725 14.4372C21.725 13.5762 21.014 12.8792 20.139 12.8792H15.135V7.7522C15.135 5.9472 13.604 4.7852 11.936 5.1272L3.322 6.9042C0.123 7.5602 -0.725 11.3342 1.572 13.3982L6.795 18.0882V25.4162C6.795 26.2772 7.492 26.9882 8.354 26.9882C9.201 26.9882 9.912 26.2772 9.912 25.4162V17.4862C9.912 16.9392 9.803 16.6382 9.461 16.2692L5.523 12.2092C5.318 11.9902 5.414 11.7032 5.688 11.6482L11.348 10.5952C11.813 10.5132 12.004 10.6772 12.004 11.1012V14.4372C12.004 15.3122 12.715 16.0102 13.576 16.0102ZM28 21.9022H30.434C31.227 21.9022 31.773 21.3692 31.773 20.5902V7.7932C31.773 7.0412 31.227 6.4942 30.461 6.4942H27.945C22.969 6.4942 19.92 7.7792 16.748 11.4292H19.264C19.332 11.4292 19.4 11.4292 19.469 11.4432C21.82 9.2562 24.281 8.4352 27.945 8.4352H29.832V19.9472H28C27.535 19.9472 27.221 19.7422 27.029 19.3592L25.758 16.8162C25.498 16.3102 24.979 16.2012 24.568 16.3652C24.076 16.5292 23.707 17.0622 24.022 17.7052L25.293 20.2482C25.813 21.2602 26.838 21.9022 28 21.9022ZM11.361 20.7812C12.674 19.8382 13.74 18.6762 14.67 17.4452H13.576C13.139 17.4452 12.729 17.3492 12.373 17.1722C12.059 17.5412 11.73 17.8962 11.361 18.2112ZM0.984 23.0642H3.541C4.184 23.0642 4.813 23.0372 5.346 22.9692V21.0272C4.813 21.0822 4.197 21.1362 3.541 21.1362H0.984C0.451 21.1362 0 21.5332 0 22.1212C0 22.6272 0.451 23.0642 0.984 23.0642Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.06069591084944 24.623046875"
          className={className}
        >
          <path
            d="              M16.3987 5.6058C17.9297 5.6058 19.1877 4.3338 19.1877 2.7888C19.1877 1.2578 17.9297 -0.0002 16.3987 -0.0002C14.8537 -0.0002 13.5957 1.2578 13.5957 2.7888C13.5957 4.3338 14.8537 5.6058 16.3987 5.6058ZM18.1897 14.5328C18.9277 14.5328 19.5427 13.9318 19.5427 13.1938C19.5427 12.4418 18.9277 11.8398 18.1897 11.8398H13.4727V7.0278C13.4727 5.4278 12.1467 4.4158 10.6567 4.7168L2.7267 6.3438C-0.1303 6.9318 -0.8963 10.3358 1.1677 12.1548L6.0897 16.5018V23.2828C6.0897 24.0078 6.7057 24.6228 7.4297 24.6228C8.1677 24.6228 8.7837 24.0078 8.7837 23.2828V15.9828C8.7837 15.5038 8.6737 15.2578 8.3737 14.9298L4.5857 11.1148C4.3807 10.8968 4.4907 10.5958 4.7497 10.5408L10.0827 9.5708C10.6017 9.4748 10.7927 9.6388 10.7927 10.1038V13.1938C10.7927 13.9318 11.3947 14.5328 12.1467 14.5328ZM25.4217 19.3048H27.2817C27.8147 19.3048 28.0607 19.0588 28.0607 18.5388V6.9318C28.0607 6.5628 27.8147 6.3168 27.4317 6.3168H25.3677C20.8967 6.3168 18.2167 7.4378 15.3737 10.7328H16.6037C19.0507 8.1618 21.5397 7.2048 25.3677 7.2048H27.1857V18.4028H25.4217C24.8207 18.4028 24.3827 18.1018 24.1237 17.6228L22.9607 15.2848C22.8247 15.0528 22.5787 14.9848 22.3867 15.0668C22.1677 15.1488 22.0177 15.3808 22.1677 15.6818L23.3307 18.0328C23.7407 18.8398 24.4927 19.3048 25.4217 19.3048ZM9.8907 18.6208C11.0527 17.7868 11.9827 16.7478 12.8437 15.6408H12.1467C11.9967 15.6408 11.8457 15.6268 11.7087 15.5998C11.1487 16.2698 10.5607 16.8988 9.8907 17.4588ZM0.7167 20.6578H2.9177C3.6567 20.6578 4.3537 20.6038 4.9827 20.5218V19.6188C4.3537 19.7148 3.6567 19.7698 2.9177 19.7698H0.7167C0.4577 19.7698 0.2517 19.9608 0.2517 20.2348C0.2517 20.4668 0.4577 20.6578 0.7167 20.6578Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.435301699999346 24.158203125"
          className={className}
        >
          <path
            d="              M16.1555 5.4824C17.6465 5.4824 18.8905 4.2524 18.8905 2.7344C18.8905 1.2304 17.6465 0.0004 16.1555 0.0004C14.6385 0.0004 13.3945 1.2304 13.3945 2.7344C13.3945 4.2524 14.6385 5.4824 16.1555 5.4824ZM17.8375 14.2874C18.5625 14.2874 19.1635 13.6854 19.1635 12.9614C19.1635 12.2224 18.5625 11.6344 17.8375 11.6344H13.2165V6.9184C13.2165 5.3454 11.9175 4.3474 10.4545 4.6484L2.6755 6.2484C-0.1275 6.8224 -0.8795 10.1584 1.1445 11.9494L5.9705 16.2014V22.8594C5.9705 23.5704 6.5855 24.1584 7.2965 24.1584C8.0075 24.1584 8.6225 23.5704 8.6225 22.8594V15.6954C8.6225 15.2304 8.5135 14.9844 8.2265 14.6704L4.5075 10.9234C4.3025 10.7184 4.3985 10.4184 4.6715 10.3634L9.8945 9.4064C10.4005 9.3244 10.5915 9.4744 10.5915 9.9254V12.9614C10.5915 13.6854 11.1795 14.2874 11.9175 14.2874ZM24.9335 18.8534H26.7515C27.2435 18.8534 27.4355 18.6754 27.4355 18.2114V6.7954C27.4355 6.4944 27.2435 6.3164 26.9295 6.3164H24.8785C20.5175 6.3164 17.9335 7.3964 15.1575 10.5954H16.1145C18.5625 7.9704 21.0365 7.0004 24.8785 7.0004H26.7515V18.1564H24.9335C24.3045 18.1564 23.8395 17.8414 23.5795 17.3364L22.4315 15.0524C22.3225 14.8614 22.1165 14.8204 21.9665 14.8884C21.8165 14.9574 21.6935 15.1214 21.8165 15.3674L22.9645 17.6644C23.3475 18.4294 24.0445 18.8534 24.9335 18.8534ZM9.6615 18.1974C10.7695 17.3904 11.6855 16.3924 12.5195 15.3264H11.9175C11.8085 15.3264 11.7125 15.3264 11.6165 15.3124C11.0155 16.0374 10.3865 16.6934 9.6615 17.2954ZM0.7065 20.1794H2.8665C3.6055 20.1794 4.3025 20.1254 4.9315 20.0434V19.3454C4.3025 19.4554 3.6055 19.4964 2.8665 19.4964H0.7065C0.5015 19.4964 0.3515 19.6604 0.3515 19.8654C0.3515 20.0434 0.5015 20.1794 0.7065 20.1794Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
