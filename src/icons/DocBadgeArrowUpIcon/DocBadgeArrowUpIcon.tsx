import { IconProps } from "../../types"

export default function DocBadgeArrowUpIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.515625 33.00390625"
          className={className}
        >
          <path
            d="              M5.0309 16.174C5.7969 15.969 6.6039 15.859 7.4379 15.859C8.2849 15.859 9.0919 15.969 9.8849 16.188V6.111C9.8849 5.264 10.2269 4.854 11.1429 4.854H15.8049V10.322C15.8049 13.344 17.1859 14.738 20.2209 14.738H25.6619V24.76C25.6619 25.607 25.3199 26.018 24.4179 26.018H17.1169C17.0349 27.781 16.4469 29.463 15.4899 30.871H25.1559C28.5469 30.871 30.5159 28.889 30.5159 25.498V13.139C30.5159 10.623 30.0919 9.27 28.4649 7.643L22.8869 2.064C21.2739 0.438 19.9199 0 17.4179 0H10.3909C7.0139 0 5.0309 1.982 5.0309 5.373ZM19.5239 10.035V4.99L25.5249 11.02H20.5079C19.8519 11.02 19.5239 10.678 19.5239 10.035ZM7.4509 33.004C11.5249 33.004 14.9019 29.6 14.9019 25.525C14.9019 21.465 11.5389 18.102 7.4509 18.102C3.3629 18.102 -0.0001 21.465 -0.0001 25.525C-0.0001 29.6 3.3629 33.004 7.4509 33.004ZM7.4509 20.877C7.8609 20.877 8.2309 21.014 8.5999 21.383L11.8949 24.541C12.1679 24.787 12.3179 25.129 12.3179 25.512C12.3179 26.305 11.6759 26.961 10.8559 26.961C10.4729 26.961 10.0629 26.797 9.8579 26.51L9.0369 25.43L8.9689 25.361L9.0239 26.373V28.697C9.0239 29.6 8.3949 30.215 7.4509 30.215C6.5079 30.215 5.8789 29.6 5.8789 28.697V26.373L5.9339 25.361L5.8789 25.43L5.0449 26.51C4.8399 26.797 4.4299 26.961 4.0469 26.961C3.2269 26.961 2.5839 26.305 2.5839 25.512C2.5979 25.129 2.7479 24.787 3.0219 24.541L6.3029 21.383C6.6719 21.014 7.0409 20.877 7.4509 20.877Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.681640625 32.443359375"
          className={className}
        >
          <path
            d="              M5.4411 16.1742C6.0161 16.0642 6.5901 15.9822 7.1911 15.9822C7.7931 15.9822 8.3811 16.0642 8.9691 16.1872V5.2222C8.9691 4.1292 9.5021 3.5272 10.6641 3.5272H16.0371V10.2262C16.0371 12.6052 17.1721 13.7262 19.5371 13.7262H26.1541V24.8832C26.1541 25.9762 25.6211 26.5642 24.4591 26.5642H16.2971C16.1601 27.8362 15.7091 29.0532 15.0391 30.0922H24.8831C27.9861 30.0922 29.6821 28.3832 29.6821 25.2652V12.8792C29.6821 10.7462 29.3671 9.6802 28.0141 8.3122L21.4511 1.6812C20.1251 0.3422 19.0181 0.0002 16.9941 0.0002H10.2401C7.1371 0.0002 5.4411 1.7092 5.4411 4.8262ZM18.9351 9.9672V3.8142L25.8811 10.8282H19.7971C19.2091 10.8282 18.9351 10.5552 18.9351 9.9672ZM7.2051 32.4432C11.1291 32.4432 14.3961 29.1762 14.3961 25.2382C14.3961 21.3012 11.1561 18.0472 7.2051 18.0472C3.2541 18.0472 0.0001 21.3012 0.0001 25.2382C0.0001 29.1892 3.2541 32.4432 7.2051 32.4432ZM7.2191 20.7132C7.5331 20.7132 7.8071 20.8362 8.1071 21.1232L11.5251 24.3362C11.7711 24.5552 11.8811 24.8282 11.8811 25.1422C11.8811 25.7712 11.3891 26.2912 10.7461 26.2772C10.4321 26.2642 10.1171 26.1402 9.9391 25.9222L8.8591 24.7192L8.3941 24.2262L8.4491 25.5942V28.5742C8.4491 29.2712 7.9301 29.7772 7.2191 29.7772C6.4941 29.7772 5.9751 29.2712 5.9751 28.5742V25.5942L6.0431 24.2262L5.5511 24.7192L4.4981 25.9222C4.3071 26.1402 3.9921 26.2772 3.6781 26.2772C3.0351 26.2772 2.5161 25.7712 2.5291 25.1422C2.5431 24.8282 2.6661 24.5552 2.8981 24.3362L6.3031 21.1232C6.6171 20.8222 6.9041 20.7132 7.2191 20.7132Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.119140625 32.73046875"
          className={className}
        >
          <path
            d="              M5.2223 16.1606C5.8923 15.9966 6.5903 15.9136 7.3143 15.9136C8.0523 15.9136 8.7633 15.9966 9.4473 16.1736V5.6736C9.4473 4.7166 9.8843 4.2246 10.9103 4.2246H15.9143V10.2676C15.9143 12.9886 17.1723 14.2466 19.8923 14.2466H25.8943V24.8146C25.8943 25.7716 25.4573 26.2636 24.4313 26.2636H16.7203C16.6113 27.7946 16.0913 29.2576 15.2713 30.4886H25.0333C28.2733 30.4886 30.1193 28.6426 30.1193 25.3746V13.0016C30.1193 10.6636 29.7503 9.4606 28.2463 7.9436L22.2163 1.8726C20.7263 0.3826 19.4823 -0.0004 17.2263 -0.0004H10.3223C7.0683 -0.0004 5.2223 1.8456 5.2223 5.0996ZM19.2363 9.9946V4.4296L25.6893 10.9236H20.1663C19.5503 10.9236 19.2363 10.6096 19.2363 9.9946ZM7.3283 32.7306C11.3343 32.7306 14.6703 29.3806 14.6703 25.3886C14.6703 21.3826 11.3473 18.0606 7.3283 18.0606C3.3223 18.0606 0.0003 21.3826 0.0003 25.3886C0.0003 29.3946 3.3223 32.7306 7.3283 32.7306ZM7.3413 20.7816C7.6973 20.7816 8.0253 20.9176 8.3673 21.2466L11.7163 24.4316C11.9763 24.6776 12.1133 24.9786 12.1133 25.3206C12.1133 26.0446 11.5393 26.6326 10.8003 26.6196C10.4453 26.6196 10.0903 26.4826 9.8983 26.2226L8.9553 25.0876L8.6953 24.8146L8.7503 25.9906V28.6286C8.7503 29.4356 8.1753 29.9966 7.3413 29.9966C6.5073 29.9966 5.9203 29.4356 5.9203 28.6286V25.9906L5.9883 24.8146L5.7153 25.0876L4.7853 26.2226C4.5803 26.4826 4.2243 26.6326 3.8693 26.6196C3.1313 26.6196 2.5563 26.0446 2.5563 25.3206C2.5703 24.9786 2.7073 24.6776 2.9533 24.4316L6.3023 21.2466C6.6443 20.9176 6.9723 20.7816 7.3413 20.7816Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.546875 31.759765625"
          className={className}
        >
          <path
            d="              M5.9469 16.611C6.2209 16.584 6.4809 16.57 6.7539 16.57C7.0409 16.57 7.3009 16.584 7.6429 16.625V4.061C7.6429 2.557 8.4489 1.682 10.0349 1.682H16.4199V9.912C16.4199 11.471 17.2129 12.209 18.7309 12.209H26.8649V25.061C26.8649 26.606 26.0449 27.439 24.4729 27.439H14.7519C14.5879 28.041 14.3559 28.602 14.0549 29.135H24.5549C27.2069 29.135 28.5469 27.768 28.5469 25.102V12.277C28.5469 10.801 28.3559 10.145 27.4529 9.215L19.4139 1.094C18.5389 0.205 17.8279 0 16.5019 0H9.9399C7.3149 0 5.9469 1.354 5.9469 4.02ZM18.0199 9.734V2.023L26.5239 10.609H18.9079C18.2789 10.609 18.0199 10.363 18.0199 9.734ZM6.7949 31.76C10.4859 31.76 13.5899 28.684 13.5899 24.965C13.5899 21.232 10.5269 18.17 6.7949 18.17C3.0759 18.17 -0.0001 21.246 -0.0001 24.965C-0.0001 28.697 3.0759 31.76 6.7949 31.76ZM6.8089 20.535C7.0139 20.535 7.1639 20.631 7.3559 20.795L10.8689 24.131C11.0739 24.322 11.1559 24.5 11.1559 24.719C11.1559 25.129 10.8559 25.443 10.4449 25.416C10.2539 25.416 10.0489 25.32 9.9259 25.184L8.8319 24.076L7.5059 22.736L7.5609 24.582V28.588C7.5609 28.998 7.2319 29.326 6.8089 29.326C6.3989 29.326 6.0569 28.998 6.0569 28.588V24.582L6.1109 22.736L4.7849 24.076L3.7049 25.184C3.5549 25.32 3.3629 25.43 3.1579 25.416C2.7619 25.416 2.4339 25.129 2.4469 24.719C2.4609 24.486 2.5429 24.322 2.7479 24.131L6.2479 20.795C6.4529 20.604 6.6309 20.535 6.8089 20.535Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.1484375 32.087890625"
          className={className}
        >
          <path
            d="              M5.7008 16.1871C6.1388 16.1191 6.5758 16.0781 7.0278 16.0781C7.4788 16.0781 7.9158 16.1191 8.3808 16.1871V4.6481C8.3808 3.3911 9.0368 2.6801 10.3628 2.6801H16.1878V10.1721C16.1878 12.1271 17.1578 13.0701 19.0998 13.0701H26.4688V24.9511C26.4688 26.2231 25.7988 26.9201 24.4728 26.9201H15.7638C15.5998 27.8771 15.2438 28.7931 14.7518 29.6001H24.7048C27.6308 29.6001 29.1488 28.0551 29.1488 25.1151V12.7151C29.1488 10.8141 28.9028 9.9391 27.7128 8.7361L20.5348 1.4351C19.3868 0.2731 18.4438 0.0001 16.7348 0.0001H10.1448C7.2188 0.0001 5.7008 1.5451 5.7008 4.4841ZM18.5528 9.9121V3.0491L26.0998 10.7191H19.3458C18.7848 10.7191 18.5528 10.4731 18.5528 9.9121ZM7.0408 32.0881C10.8688 32.0881 14.0818 28.9021 14.0818 25.0471C14.0818 21.1911 10.8968 18.0191 7.0408 18.0191C3.1858 18.0191 -0.0002 21.2051 -0.0002 25.0471C-0.0002 28.9161 3.1858 32.0881 7.0408 32.0881ZM7.0548 20.5901C7.3278 20.5901 7.5328 20.7131 7.7928 20.9451L11.2928 24.2131C11.5118 24.4041 11.6078 24.6371 11.6078 24.9101C11.6078 25.4431 11.1968 25.8671 10.6638 25.8401C10.4038 25.8261 10.1448 25.7171 9.9808 25.5251L8.7498 24.2541L8.0118 23.4881L8.0798 25.1021V28.4921C8.0798 29.0531 7.6288 29.4901 7.0548 29.4901C6.4808 29.4901 6.0288 29.0531 6.0288 28.4921V25.1021L6.0978 23.4881L5.3458 24.2541L4.1428 25.5251C3.9648 25.7171 3.7048 25.8531 3.4318 25.8401C2.9118 25.8401 2.4748 25.4431 2.5018 24.9101C2.5018 24.6371 2.6108 24.4041 2.8298 24.2131L6.3028 20.9451C6.5758 20.6991 6.7948 20.5901 7.0548 20.5901Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.833984375 31.896484375"
          className={className}
        >
          <path
            d="              M5.8376 16.1873C6.2066 16.1463 6.5626 16.1193 6.9176 16.1193C7.2876 16.1193 7.6426 16.1463 8.0396 16.1873V4.3343C8.0396 2.9803 8.7636 2.2013 10.1856 2.2013H16.2696V10.1443C16.2696 11.8673 17.1306 12.7143 18.8396 12.7143H26.6326V24.9923C26.6326 26.3593 25.9086 27.1113 24.4866 27.1113H15.4496C15.2716 27.8903 14.9706 28.6423 14.5746 29.3123H24.5956C27.4256 29.3123 28.8336 27.8773 28.8336 25.0333V12.6193C28.8336 10.8553 28.6286 10.0893 27.5356 8.9683L20.0016 1.2983C18.9626 0.2323 18.1016 0.0003 16.5706 0.0003H10.0766C7.2596 0.0003 5.8376 1.4493 5.8376 4.2933ZM18.3336 9.8843V2.6253L26.2086 10.6503H19.0856C18.5396 10.6503 18.3336 10.4313 18.3336 9.8843ZM6.9456 31.8963C10.7056 31.8963 13.8906 28.7383 13.8906 24.9513C13.8906 21.1363 10.7596 18.0063 6.9456 18.0063C3.1306 18.0063 -0.0004 21.1363 -0.0004 24.9513C-0.0004 28.7653 3.1306 31.8963 6.9456 31.8963ZM6.9586 20.5353C7.1916 20.5353 7.3696 20.6443 7.6016 20.8493L11.1426 24.1443C11.3616 24.3223 11.4436 24.5273 11.4436 24.7873C11.4436 25.2523 11.0876 25.6213 10.6096 25.5933C10.3766 25.5803 10.1586 25.4843 9.9946 25.3203L8.6816 24.0073L7.7926 23.0783L7.8616 24.8283V28.4513C7.8616 28.9293 7.4516 29.3263 6.9586 29.3263C6.4666 29.3263 6.0566 28.9293 6.0566 28.4513V24.8283L6.1246 23.0783L5.2226 24.0073L3.9376 25.3203C3.7596 25.4843 3.5276 25.6073 3.2946 25.5933C2.8306 25.5933 2.4336 25.2523 2.4606 24.7873C2.4746 24.5273 2.5706 24.3223 2.7756 24.1443L6.3026 20.8493C6.5486 20.6313 6.7406 20.5353 6.9586 20.5353Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.3671875 32.23828125"
          className={className}
        >
          <path
            d="              M5.5778 16.1738C6.0708 16.0778 6.5758 16.0238 7.0818 16.0238C7.6018 16.0238 8.1078 16.0778 8.6268 16.1738V4.8808C8.6268 3.6918 9.2288 3.0348 10.4868 3.0348H16.1058V10.1858C16.1058 12.3188 17.1448 13.3438 19.2778 13.3438H26.3188V24.9098C26.3188 26.1138 25.7168 26.7558 24.4588 26.7558H15.9828C15.8318 27.8498 15.4358 28.8888 14.8618 29.8048H24.7738C27.7678 29.8048 29.3668 28.1918 29.3668 25.1698V12.7698C29.3668 10.7738 29.0938 9.8168 27.8358 8.5448L20.9178 1.5308C19.7008 0.2868 18.6758 -0.0002 16.8298 -0.0002H10.1718C7.1778 -0.0002 5.5778 1.5998 5.5778 4.6208ZM18.7028 9.9258V3.3768L25.9898 10.7598H19.5368C18.9628 10.7598 18.7028 10.4998 18.7028 9.9258ZM7.0958 32.2388C10.9648 32.2388 14.2048 28.9978 14.2048 25.1288C14.2048 21.2328 10.9918 18.0198 7.0958 18.0198C3.2128 18.0198 -0.0002 21.2328 -0.0002 25.1288C-0.0002 29.0258 3.2128 32.2388 7.0958 32.2388ZM7.1098 20.6308C7.4098 20.6308 7.6428 20.7538 7.9158 21.0138L11.3748 24.2538C11.6078 24.4588 11.7168 24.7048 11.7168 25.0058C11.7168 25.5798 11.2658 26.0308 10.6918 26.0178C10.4048 26.0038 10.1308 25.8948 9.9528 25.6898L8.7908 24.4458L8.1618 23.8028L8.2308 25.3068V28.5198C8.2308 29.1348 7.7518 29.5998 7.1098 29.5998C6.4808 29.5998 6.0018 29.1348 6.0018 28.5198V25.3068L6.0708 23.8028L5.4278 24.4458L4.2798 25.6898C4.1018 25.8948 3.8148 26.0308 3.5278 26.0178C2.9528 26.0178 2.4878 25.5798 2.5018 25.0058C2.5158 24.7048 2.6248 24.4588 2.8438 24.2538L6.3028 21.0138C6.5898 20.7398 6.8358 20.6308 7.1098 20.6308Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.19140625 31.609375"
          className={className}
        >
          <path
            d="              M6.0973 17.1989C6.2613 17.1859 6.3843 17.1859 6.5493 17.1859C6.7263 17.1859 6.8493 17.1859 7.1093 17.2129V3.7189C7.1093 2.0099 8.0393 1.0119 9.8303 1.0119H16.6383V9.6249C16.6383 10.9789 17.3223 11.5799 18.5933 11.5799H27.1793V25.1839C27.1793 26.9609 26.2503 27.8909 24.4593 27.8909H13.8223C13.6993 28.2459 13.5493 28.5739 13.3713 28.9019H24.5133C26.9203 28.9019 28.1913 27.6309 28.1913 25.2109V11.8399C28.1913 10.7459 28.0133 10.2399 27.3433 9.5569L18.6623 0.8479C17.9923 0.1909 17.4723 -0.0001 16.4203 -0.0001H9.7753C7.3823 -0.0001 6.0973 1.2719 6.0973 3.6909ZM17.6233 9.5429V1.2579L26.9333 10.5959H18.6753C17.9243 10.5959 17.6233 10.2949 17.6233 9.5429ZM6.6033 31.6089C10.1993 31.6089 13.2073 28.6289 13.2073 25.0059C13.2073 21.3829 10.2263 18.4019 6.6033 18.4019C2.9943 18.4019 0.0003 21.3969 0.0003 25.0059C0.0003 28.6429 2.9943 31.6089 6.6033 31.6089ZM6.6173 20.5489C6.7813 20.5489 6.8903 20.6309 7.0133 20.7399L10.5003 24.1449C10.6913 24.3359 10.7873 24.4729 10.7873 24.6639C10.7873 24.9919 10.5543 25.2249 10.2403 25.2109C10.0763 25.2109 9.9253 25.1289 9.8303 25.0329L9.0233 24.1989L7.1363 22.2989L7.1643 24.2809V28.8069C7.1643 29.0939 6.9313 29.3399 6.6173 29.3399C6.3023 29.3399 6.0563 29.0939 6.0563 28.8069V24.2809L6.0973 22.2989L4.1973 24.1989L3.4043 25.0329C3.2953 25.1289 3.1583 25.2109 2.9943 25.2109C2.6793 25.2109 2.4333 24.9919 2.4333 24.6639C2.4333 24.4589 2.5293 24.3359 2.7203 24.1449L6.2073 20.7399C6.3433 20.6039 6.4803 20.5489 6.6173 20.5489Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 31.52734375"
          className={className}
        >
          <path
            d="              M6.1794 17.4866C6.2754 17.4866 6.3434 17.4866 6.4394 17.4866C6.5624 17.4866 6.6314 17.4866 6.8494 17.5136V3.5406C6.8494 1.7226 7.8344 0.6696 9.7204 0.6696H16.7614V9.4746C16.7614 10.7326 17.3774 11.2386 18.5254 11.2386H27.3304V25.2386C27.3304 27.1246 26.3594 28.1096 24.4594 28.1096H13.3574C13.2614 28.3416 13.1384 28.5606 13.0154 28.7796H24.5004C26.7834 28.7796 28.0004 27.5626 28.0004 25.2656V11.6216C28.0004 10.7056 27.8364 10.2816 27.2894 9.7346L18.2654 0.7246C17.7184 0.1636 17.2954 -0.0004 16.3794 -0.0004H9.6934C7.4374 -0.0004 6.1794 1.2166 6.1794 3.5136ZM17.4314 9.4476V0.8476L27.1524 10.5686H18.5524C17.7464 10.5686 17.4314 10.2536 17.4314 9.4476ZM6.5074 31.5276C10.0624 31.5276 13.0024 28.6016 13.0024 25.0196C13.0024 21.4516 10.0764 18.5256 6.5074 18.5256C2.9534 18.5256 0.0004 21.4646 0.0004 25.0196C0.0004 28.6016 2.9534 31.5276 6.5074 31.5276ZM6.5214 20.5486C6.6584 20.5486 6.7674 20.6176 6.8494 20.7126L10.3224 24.1446C10.5134 24.3356 10.5954 24.4586 10.5954 24.6366C10.5954 24.9106 10.4044 25.1016 10.1314 25.1016C9.9944 25.1016 9.8574 25.0336 9.7894 24.9516L9.1194 24.2536L6.9454 22.0666L6.9724 24.1176V28.9026C6.9724 29.1486 6.7814 29.3536 6.5214 29.3536C6.2614 29.3536 6.0564 29.1486 6.0564 28.9026V24.1176L6.0974 22.0666L3.9104 24.2536L3.2544 24.9516C3.1724 25.0336 3.0484 25.1016 2.9124 25.1016C2.6384 25.1016 2.4334 24.9106 2.4334 24.6366C2.4334 24.4456 2.5154 24.3356 2.7074 24.1446L6.1794 20.7126C6.3024 20.5896 6.4254 20.5486 6.5214 20.5486Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
