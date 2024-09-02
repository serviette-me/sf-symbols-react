import { IconProps } from "../../types"

export default function SkisIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.2646484375 43.26807354684401"
          className={className}
        >
          <path
            d="              M1.8421 22.7995C-0.6189 25.2605 -0.6049 29.1565 1.8291 31.6175C4.2901 34.0515 8.2001 34.0515 10.6471 31.6045L31.6061 10.6585C34.0531 8.1975 34.0531 4.3015 31.6201 1.8265C29.1451 -0.6065 25.2621 -0.6205 22.8011 1.8545ZM4.4811 25.4385L25.4401 4.4925C26.4521 3.4815 27.9971 3.4815 28.9811 4.4655C29.9651 5.4495 29.9651 6.9945 28.9541 8.0065L8.0081 28.9655C6.9971 29.9775 5.4381 29.9775 4.4671 28.9795C3.4691 28.0085 3.4691 26.4495 4.4811 25.4385ZM11.6591 32.6155C9.2111 35.0635 9.2111 38.9735 11.6451 41.4345C14.1061 43.8675 18.0021 43.8955 20.4631 41.4205L41.4221 20.4755C43.8831 18.0005 43.8701 14.1175 41.4361 11.6435C38.9611 9.2235 35.0651 9.2095 32.6181 11.6705ZM14.2971 35.2545L35.2561 14.3095C36.2681 13.2975 37.8131 13.2975 38.7971 14.2815C39.7951 15.2665 39.7951 16.8115 38.7701 17.8365L17.8251 38.7815C16.8131 39.7935 15.2541 39.7935 14.2841 38.7955C13.2861 37.8245 13.2861 36.2665 14.2971 35.2545ZM15.6231 16.6885L16.7721 17.8225C17.2371 18.2875 17.9341 18.3015 18.3721 17.8225C18.8361 17.4125 18.8361 16.7155 18.3721 16.2645L17.2091 15.0885C16.7721 14.6515 16.0611 14.6375 15.6231 15.0885C15.1591 15.5125 15.1451 16.2375 15.6231 16.6885ZM11.1661 21.1045L12.3421 22.2935C12.7801 22.7445 13.4911 22.7175 13.9421 22.2935C14.3791 21.8565 14.3931 21.1455 13.9421 20.6945L12.7801 19.5185C12.3421 19.0805 11.6041 19.0805 11.1661 19.5185C10.7291 19.9695 10.7561 20.6665 11.1661 21.1045ZM25.4401 26.5045L26.5881 27.6395C27.0401 28.1045 27.7501 28.1045 28.1881 27.6395C28.6531 27.2295 28.6251 26.5045 28.1881 26.0805L27.0261 24.9045C26.5881 24.4675 25.8771 24.4405 25.4401 24.9045C24.9891 25.3285 24.9611 26.0535 25.4401 26.5045ZM20.9831 30.9205L22.1591 32.1105C22.5961 32.5615 23.3071 32.5335 23.7581 32.1105C24.1961 31.6725 24.2091 30.9615 23.7581 30.5105L22.5961 29.3345C22.1591 28.8975 21.4201 28.8975 20.9831 29.3345C20.5451 29.7855 20.5731 30.4965 20.9831 30.9205Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.5302734375 40.5302734375"
          className={className}
        >
          <path
            d="              M1.6135 22.4016C-0.5465 24.5616 -0.5195 27.9386 1.5855 30.0846C3.7465 32.2036 7.1365 32.2176 9.2695 30.0716L30.0785 9.2766C32.2105 7.1296 32.1975 3.7396 30.0915 1.5926C27.9455 -0.5264 24.5545 -0.5404 22.4085 1.6066ZM3.6645 24.4656L24.4595 3.6706C25.4845 2.6456 27.0435 2.6456 28.0275 3.6576C29.0395 4.6416 29.0255 6.2006 28.0135 7.2256L7.2185 28.0206C6.1935 29.0326 4.6345 29.0326 3.6505 28.0346C2.6525 27.0496 2.6525 25.4776 3.6645 24.4656ZM10.4595 31.2606C8.3125 33.3936 8.3265 36.7976 10.4455 38.9446C12.5915 41.0496 15.9685 41.0776 18.1285 38.9166L38.9235 18.1216C41.0705 15.9756 41.0565 12.5846 38.9375 10.4386C36.7915 8.3326 33.4005 8.3196 31.2535 10.4656ZM12.5095 33.3116L33.3185 12.5166C34.3305 11.5046 35.9025 11.4916 36.8735 12.5026C37.8845 13.4876 37.8845 15.0456 36.8595 16.0716L16.0645 36.8666C15.0525 37.8776 13.4805 37.8916 12.4965 36.8796C11.4985 35.8956 11.4985 34.3366 12.5095 33.3116ZM15.0665 15.4426L16.2555 16.6186C16.6935 17.0416 17.3495 17.0556 17.7595 16.6186C18.1975 16.2216 18.1975 15.5656 17.7595 15.1276L16.5565 13.9246C16.1465 13.5146 15.4765 13.5006 15.0665 13.9246C14.6425 14.3216 14.6285 15.0186 15.0665 15.4426ZM10.7055 19.7626L11.9085 20.9796C12.3325 21.4166 13.0015 21.3756 13.4255 20.9796C13.8355 20.5696 13.8495 19.8996 13.4255 19.4756L12.2225 18.2726C11.8125 17.8626 11.1285 17.8626 10.7055 18.2726C10.2945 18.6966 10.3085 19.3526 10.7055 19.7626ZM23.9125 24.2876L25.1015 25.4636C25.5255 25.8876 26.2095 25.8876 26.6195 25.4636C27.0435 25.0676 27.0295 24.3976 26.6195 23.9876L25.4165 22.7846C25.0055 22.3606 24.3225 22.3326 23.9125 22.7846C23.4885 23.1806 23.4745 23.8646 23.9125 24.2876ZM19.5645 28.6086L20.7675 29.8386C21.1775 30.2626 21.8475 30.2356 22.2715 29.8386C22.6815 29.4286 22.7095 28.7446 22.2715 28.3216L21.0685 27.1186C20.6585 26.7076 19.9745 26.7076 19.5645 27.1186C19.1545 27.5416 19.1685 28.1986 19.5645 28.6086Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.97095106896362 41.97608182549422"
          className={className}
        >
          <path
            d="              M1.7348 22.6186C-0.5892 24.9286 -0.5622 28.5796 1.7208 30.9036C4.0318 33.1866 7.6958 33.1866 10.0058 30.8766L30.8828 9.9996C33.1798 7.7026 33.1798 4.0386 30.8968 1.7146C28.5728 -0.5694 24.9218 -0.5824 22.6118 1.7416ZM4.0998 24.9836L24.9768 4.1066C25.9888 3.0816 27.5468 3.0816 28.5318 4.0796C29.5298 5.0636 29.5298 6.6226 28.5178 7.6336L7.6408 28.5106C6.6158 29.5366 5.0568 29.5366 4.0858 28.5386C3.0748 27.5536 3.0878 25.9956 4.0998 24.9836ZM11.0858 31.9696C8.7898 34.2806 8.7898 37.9446 11.0728 40.2556C13.3968 42.5386 17.0468 42.5656 19.3578 40.2416L40.2348 19.3646C42.5588 17.0406 42.5318 13.3896 40.2618 11.0796C37.9378 8.7966 34.2738 8.7966 31.9768 11.0926ZM13.4518 34.3356L34.3418 13.4586C35.3538 12.4466 36.9128 12.4466 37.8968 13.4446C38.8948 14.4286 38.8948 15.9876 37.8698 16.9996L16.9928 37.8766C15.9808 38.8876 14.4218 38.8876 13.4378 37.8896C12.4398 36.9196 12.4398 35.3606 13.4518 34.3356ZM15.3518 16.1106L16.5278 17.2586C16.9788 17.6966 17.6628 17.7106 18.0858 17.2586C18.5238 16.8486 18.5238 16.1656 18.0858 15.7276L16.8968 14.5386C16.4728 14.1146 15.7898 14.1006 15.3518 14.5386C14.9148 14.9486 14.9008 15.6596 15.3518 16.1106ZM10.9498 20.4716L12.1388 21.6746C12.5628 22.1126 13.2598 22.0856 13.6978 21.6746C14.1218 21.2516 14.1348 20.5536 13.6978 20.1166L12.5078 18.9266C12.0838 18.5036 11.3738 18.5036 10.9498 18.9266C10.5258 19.3786 10.5398 20.0486 10.9498 20.4716ZM24.7168 25.4626L25.8928 26.6106C26.3308 27.0616 27.0278 27.0616 27.4518 26.6106C27.8888 26.2146 27.8748 25.5166 27.4518 25.0926L26.2618 23.9036C25.8378 23.4796 25.1408 23.4386 24.7168 23.9036C24.2798 24.3136 24.2658 25.0246 24.7168 25.4626ZM20.3148 29.8376L21.5038 31.0406C21.9278 31.4776 22.6248 31.4506 23.0628 31.0406C23.4868 30.6166 23.4998 29.9196 23.0628 29.4816L21.8738 28.2926C21.4498 27.8686 20.7388 27.8686 20.3148 28.2926C19.8908 28.7296 19.9048 29.4136 20.3148 29.8376Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.791264997166245 35.791264997166245"
          className={className}
        >
          <path
            d="              M1.2575 21.1366C-0.4235 22.8186 -0.4105 25.3886 1.2445 27.0836C2.9255 28.7246 5.5095 28.7516 7.1915 27.0566L27.0565 7.1916C28.7385 5.5096 28.7245 2.9256 27.0845 1.2446C25.3885 -0.4104 22.8185 -0.4234 21.1365 1.2576ZM2.4065 22.2856L22.2855 2.4066C23.3105 1.3676 24.9235 1.3536 25.9355 2.3926C26.9605 3.4046 26.9475 5.0176 25.9085 6.0426L6.0435 25.9086C5.0035 26.9476 3.4045 26.9606 2.3925 25.9356C1.3535 24.9236 1.3675 23.3106 2.4065 22.2856ZM8.7225 28.5876C7.0415 30.2836 7.0545 32.8676 8.7095 34.5356C10.3905 36.2036 12.9745 36.2166 14.6565 34.5356L34.5355 14.6566C36.2165 12.9746 36.2035 10.3906 34.5355 8.7086C32.8675 7.0546 30.2835 7.0406 28.5875 8.7226ZM9.8715 29.7366L29.7365 9.8716C30.7755 8.8316 32.3885 8.8316 33.3865 9.8576C34.4255 10.8556 34.4255 12.4686 33.3865 13.5076L13.5075 33.3866C12.4685 34.4256 10.8555 34.4256 9.8575 33.3866C8.8325 32.3886 8.8325 30.7756 9.8715 29.7366ZM13.7405 13.2756L15.0525 14.5876C15.3945 14.9156 15.9145 14.9296 16.2425 14.5876C16.5705 14.2736 16.5705 13.7406 16.2425 13.4126L14.9165 12.0856C14.5875 11.7576 14.0545 11.7576 13.7405 12.0856C13.3985 12.4006 13.3845 12.9476 13.7405 13.2756ZM9.7075 17.2946L11.0335 18.6216C11.3475 18.9626 11.8805 18.9356 12.2225 18.6216C12.5505 18.2926 12.5505 17.7596 12.2225 17.4316L10.8965 16.1056C10.5685 15.7776 10.0355 15.7776 9.7075 16.1056C9.3785 16.4476 9.3925 16.9666 9.7075 17.2946ZM21.2055 20.7406L22.5175 22.0386C22.8455 22.3806 23.3785 22.3806 23.7075 22.0386C24.0485 21.7246 24.0355 21.1916 23.7075 20.8766L22.3805 19.5506C22.0665 19.2226 21.5335 19.2086 21.2055 19.5506C20.8635 19.8656 20.8635 20.4126 21.2055 20.7406ZM17.1715 24.7596L18.4985 26.0856C18.8265 26.4136 19.3595 26.4006 19.6875 26.0856C20.0155 25.7576 20.0295 25.2246 19.6875 24.8966L18.3615 23.5706C18.0465 23.2426 17.5005 23.2426 17.1715 23.5706C16.8435 23.9126 16.8575 24.4316 17.1715 24.7596Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.7802734375 38.7802734375"
          className={className}
        >
          <path
            d="              M1.4529 22.1522C-0.4891 24.1072 -0.4751 27.1562 1.4389 29.1112C3.3939 31.0252 6.4569 31.0382 8.3979 29.0972L29.0969 8.3982C31.0389 6.4562 31.0249 3.3802 29.1109 1.4392C27.1699 -0.4748 24.1069 -0.4888 22.1519 1.4522ZM3.1479 23.8332L23.8469 3.1342C24.8589 2.1222 26.4449 2.1222 27.4289 3.1202C28.4409 4.1182 28.4269 5.6912 27.4159 6.7022L6.7159 27.4022C5.6909 28.4272 4.1189 28.4272 3.1339 27.4292C2.1229 26.4312 2.1229 24.8592 3.1479 23.8332ZM9.6829 30.3822C7.7419 32.3242 7.7549 35.3862 9.6699 37.3412C11.6249 39.2552 14.6729 39.2692 16.6289 37.3272L37.3279 16.6282C39.2689 14.6732 39.2549 11.6112 37.3409 9.6692C35.3999 7.7552 32.3239 7.7412 30.3819 9.6832ZM11.3789 32.0642L32.0779 11.3652C33.0889 10.3532 34.6619 10.3532 35.6599 11.3512C36.6719 12.3352 36.6579 13.9212 35.6459 14.9332L14.9469 35.6322C13.9219 36.6572 12.3489 36.6572 11.3509 35.6462C10.3529 34.6612 10.3529 33.0892 11.3789 32.0642ZM14.7139 14.6462L15.9309 15.8352C16.3549 16.2452 16.9839 16.2592 17.3799 15.8352C17.7909 15.4522 17.7909 14.8232 17.3799 14.4132L16.1499 13.1832C15.7539 12.7862 15.1109 12.7732 14.7139 13.1832C14.3039 13.5662 14.2909 14.2362 14.7139 14.6462ZM10.4219 18.9112L11.6379 20.1422C12.0349 20.5522 12.6909 20.5252 13.1009 20.1422C13.4979 19.7452 13.5109 19.1032 13.1009 18.6932L11.8709 17.4622C11.4739 17.0662 10.8179 17.0662 10.4219 17.4622C10.0249 17.8722 10.0389 18.5152 10.4219 18.9112ZM22.9449 22.8632L24.1619 24.0662C24.5719 24.4762 25.2139 24.4762 25.6109 24.0662C26.0209 23.6832 26.0069 23.0402 25.6109 22.6442L24.3799 21.4132C23.9839 21.0172 23.3409 20.9902 22.9449 21.4132C22.5349 21.7962 22.5209 22.4522 22.9449 22.8632ZM18.6519 27.1282L19.8689 28.3722C20.2649 28.7822 20.9219 28.7552 21.3319 28.3722C21.7279 27.9762 21.7419 27.3332 21.3319 26.9232L20.1009 25.6932C19.7049 25.2962 19.0479 25.2962 18.6519 25.6932C18.2549 26.1032 18.2689 26.7322 18.6519 27.1282Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.7958984375 37.7958984375"
          className={className}
        >
          <path
            d="              M1.3709 22.015C-0.4611 23.847 -0.4481 26.718 1.3569 28.564C3.1889 30.355 6.0739 30.369 7.9059 28.537L28.5499 7.906C30.3819 6.06 30.3549 3.189 28.5639 1.357C26.7319 -0.448 23.8469 -0.461 22.0149 1.371ZM2.8469 23.492L23.4919 2.847C24.5169 1.822 26.1029 1.822 27.0879 2.833C28.0989 3.818 28.0859 5.404 27.0739 6.429L6.4289 27.06C5.4039 28.085 3.8179 28.085 2.8339 27.087C1.8219 26.089 1.8219 24.517 2.8469 23.492ZM9.2589 29.89C7.4269 31.722 7.4409 34.607 9.2319 36.439C11.0779 38.244 13.9489 38.257 15.7809 36.425L36.4249 15.781C38.2569 13.949 38.2439 11.064 36.4389 9.232C34.6069 7.441 31.7359 7.414 29.8899 9.246ZM10.7359 31.367L31.3669 10.722C32.3919 9.71 33.9779 9.697 34.9629 10.708C35.9739 11.693 35.9739 13.279 34.9489 14.304L14.3039 34.949C13.2789 35.974 11.7069 35.974 10.7089 34.962C9.7109 33.978 9.7109 32.392 10.7359 31.367ZM14.5089 14.195L15.7399 15.398C16.1499 15.794 16.7649 15.808 17.1619 15.398C17.5579 15.029 17.5579 14.414 17.1619 14.003L15.9179 12.773C15.5349 12.39 14.9059 12.376 14.5089 12.773C14.1129 13.142 14.0989 13.785 14.5089 14.195ZM10.2569 18.419L11.4879 19.677C11.8709 20.074 12.5129 20.046 12.9099 19.677C13.2929 19.281 13.3059 18.652 12.9099 18.255L11.6789 17.011C11.2829 16.628 10.6399 16.628 10.2569 17.011C9.8609 17.421 9.8749 18.037 10.2569 18.419ZM22.3979 22.07L23.6149 23.273C24.0249 23.683 24.6539 23.683 25.0369 23.273C25.4469 22.904 25.4329 22.275 25.0369 21.892L23.8059 20.648C23.4099 20.265 22.7809 20.238 22.3979 20.648C22.0019 21.017 21.9879 21.673 22.3979 22.07ZM18.1319 26.308L19.3769 27.552C19.7589 27.949 20.3879 27.921 20.7979 27.552C21.1809 27.169 21.1949 26.54 20.7979 26.13L19.5539 24.9C19.1719 24.503 18.5289 24.503 18.1319 24.9C17.7499 25.296 17.7629 25.912 18.1319 26.308Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.533939891692285 39.52880859375"
          className={className}
        >
          <path
            d="              M1.5192 22.2542C-0.5178 24.2912 -0.4908 27.4912 1.5052 29.5282C3.5432 31.5242 6.7422 31.5372 8.7792 29.5142L29.5192 8.7742C31.5432 6.7372 31.5292 3.5372 29.5332 1.5002C27.4962 -0.4958 24.2962 -0.5088 22.2592 1.5142ZM3.3652 24.1142L24.1052 3.3602C25.1302 2.3482 26.7032 2.3482 27.6872 3.3462C28.6992 4.3302 28.6852 5.9032 27.6732 6.9282L6.9332 27.6682C5.9082 28.6802 4.3362 28.6942 3.3512 27.6822C2.3532 26.6982 2.3532 25.1252 3.3652 24.1142ZM10.0232 30.7582C7.9862 32.7822 8.0002 35.9942 10.0092 38.0182C12.0332 40.0282 15.2322 40.0412 17.2692 38.0042L38.0092 17.2642C40.0462 15.2272 40.0332 12.0282 38.0232 10.0042C36.0002 7.9942 32.7872 7.9812 30.7632 10.0182ZM11.8692 32.6042L32.6092 11.8642C33.6212 10.8382 35.1932 10.8382 36.1772 11.8502C37.1892 12.8342 37.1892 14.4072 36.1642 15.4182L15.4232 36.1582C14.4122 37.1842 12.8392 37.1842 11.8552 36.1722C10.8432 35.1882 10.8432 33.6162 11.8692 32.6042ZM14.8632 14.9812L16.0662 16.1702C16.5032 16.5802 17.1462 16.6082 17.5432 16.1702C17.9662 15.7872 17.9662 15.1312 17.5432 14.7212L16.3262 13.5042C15.9292 13.1082 15.2732 13.0802 14.8632 13.5042C14.4532 13.8872 14.4392 14.5712 14.8632 14.9812ZM10.5432 19.2742L11.7592 20.5042C12.1702 20.9282 12.8262 20.8872 13.2362 20.5042C13.6462 20.1082 13.6602 19.4382 13.2362 19.0282L12.0192 17.8112C11.6232 17.4142 10.9532 17.4142 10.5432 17.8112C10.1462 18.2352 10.1602 18.8772 10.5432 19.2742ZM23.3672 23.4852L24.5702 24.6602C24.9802 25.0842 25.6362 25.0842 26.0462 24.6602C26.4572 24.2782 26.4432 23.6212 26.0462 23.2112L24.8302 21.9942C24.4202 21.5982 23.7632 21.5712 23.3672 21.9942C22.9432 22.3912 22.9292 23.0612 23.3672 23.4852ZM19.0462 27.7642L20.2632 28.9942C20.6602 29.4182 21.3162 29.3912 21.7402 28.9942C22.1362 28.5982 22.1502 27.9422 21.7402 27.5182L20.5232 26.3012C20.1132 25.9052 19.4432 25.9052 19.0462 26.3012C18.6362 26.7252 18.6502 27.3672 19.0462 27.7642Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.13381279737671 33.133812797376706"
          className={className}
        >
          <path
            d="              M1.1075 19.9614C-0.3825 21.4514 -0.3555 23.6254 1.1075 25.1154C2.5845 26.5784 4.7715 26.5914 6.2615 25.1014L25.1015 6.2614C26.5915 4.7714 26.5785 2.5844 25.1155 1.1074C23.6255 -0.3556 21.4515 -0.3826 19.9605 1.1074ZM1.8185 20.6714L20.6715 1.8184C21.7385 0.7654 23.3925 0.7524 24.4045 1.8184C25.4575 2.8434 25.4435 4.4984 24.3905 5.5504L5.5505 24.3904C4.4985 25.4434 2.8435 25.4574 1.8185 24.4044C0.7515 23.3924 0.7655 21.7384 1.8185 20.6714ZM8.0395 26.8794C6.5485 28.3694 6.5625 30.5564 8.0115 32.0334C9.5015 33.4964 11.6755 33.5094 13.1665 32.0194L32.0195 13.1664C33.5095 11.6754 33.4965 9.5024 32.0335 8.0114C30.5565 6.5624 28.3555 6.5484 26.8785 8.0394ZM8.7505 27.5894L27.5895 8.7504C28.6425 7.6834 30.2965 7.6704 31.3225 8.7224C32.3885 9.7484 32.3755 11.4024 31.3085 12.4554L12.4555 31.3084C11.4025 32.3754 9.7485 32.3884 8.7225 31.3224C7.6695 30.2964 7.6835 28.6424 8.7505 27.5894ZM12.7145 12.0724L14.1365 13.5074C14.3965 13.7534 14.7795 13.7534 15.0255 13.5074C15.2855 13.2614 15.2855 12.8654 15.0255 12.6194L13.6035 11.1834C13.3575 10.9374 12.9605 10.9374 12.7145 11.1834C12.4555 11.4294 12.4555 11.8264 12.7145 12.0724ZM8.9825 15.7914L10.4185 17.2264C10.6645 17.4724 11.0605 17.4724 11.3065 17.2264C11.5525 16.9804 11.5665 16.5844 11.3065 16.3374L9.8845 14.9024C9.6385 14.6564 9.2285 14.6564 8.9825 14.9024C8.7365 15.1484 8.7505 15.5454 8.9825 15.7914ZM19.6325 18.9904L21.0545 20.4124C21.3145 20.6584 21.7105 20.6584 21.9575 20.4124C22.2035 20.1664 22.2035 19.7694 21.9575 19.5234L20.5215 18.1014C20.2755 17.8414 19.8785 17.8414 19.6325 18.1014C19.3865 18.3344 19.3735 18.7304 19.6325 18.9904ZM15.9145 22.7094L17.3355 24.1304C17.5825 24.3904 17.9785 24.3774 18.2385 24.1304C18.4845 23.8844 18.4845 23.4884 18.2385 23.2424L16.8025 21.8204C16.5565 21.5604 16.1605 21.5604 15.9145 21.8204C15.6685 22.0664 15.6685 22.4494 15.9145 22.7094Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.78028612813352 31.78028612813353"
          className={className}
        >
          <path
            d="              M1.0412 19.3649C-0.3538 20.7589 -0.3398 22.7279 1.0412 24.1219C2.4082 25.4759 4.3902 25.4899 5.7852 24.0949L24.1052 5.7879C25.4862 4.3939 25.4722 2.4109 24.1192 1.0309C22.7242 -0.3371 20.7552 -0.3501 19.3752 1.0309ZM1.5192 19.8569L19.8532 1.5229C20.9202 0.4559 22.6012 0.4429 23.6272 1.5229C24.6932 2.5479 24.6792 4.2299 23.6132 5.2959L5.2932 23.6169C4.2262 24.6829 2.5582 24.6969 1.5192 23.6299C0.4392 22.6049 0.4532 20.9229 1.5192 19.8569ZM7.6852 25.9949C6.2912 27.3759 6.3042 29.3719 7.6582 30.7399C9.0522 32.1199 11.0212 32.1339 12.4162 30.7399L30.7502 12.4059C32.1302 11.0249 32.1172 9.0559 30.7502 7.6609C29.3692 6.3079 27.3862 6.2939 25.9922 7.6749ZM8.1642 26.4879L26.4842 8.1669C27.5502 7.1009 29.2182 7.0869 30.2572 8.1539C31.3372 9.1789 31.3242 10.8609 30.2572 11.9269L11.9232 30.2609C10.8572 31.3269 9.1752 31.3409 8.1502 30.2609C7.0842 29.2219 7.0972 27.5539 8.1642 26.4879ZM12.1832 11.4619L13.6732 12.9519C13.8782 13.1579 14.2072 13.1579 14.4122 12.9519C14.6172 12.7469 14.6172 12.4189 14.4122 12.2139L12.9212 10.7239C12.7162 10.5189 12.3882 10.5189 12.1832 10.7239C11.9782 10.9289 11.9782 11.2569 12.1832 11.4619ZM8.6152 15.0309L10.1052 16.5209C10.3102 16.7259 10.6382 16.7259 10.8432 16.5209C11.0482 16.3159 11.0482 15.9879 10.8432 15.7829L9.3532 14.2919C9.1482 14.0869 8.8342 14.0869 8.6152 14.2919C8.4102 14.4969 8.4102 14.8249 8.6152 15.0309ZM18.8282 18.0929L20.3182 19.5829C20.5232 19.7879 20.8512 19.7879 21.0562 19.5829C21.2612 19.3649 21.2612 19.0499 21.0562 18.8449L19.5662 17.3549C19.3612 17.1499 19.0332 17.1499 18.8282 17.3549C18.6232 17.5599 18.6232 17.8879 18.8282 18.0929ZM15.2592 21.6479L16.7502 23.1379C16.9552 23.3429 17.2832 23.3429 17.4882 23.1379C17.6932 22.9329 17.6932 22.6049 17.4882 22.3999L15.9982 20.9089C15.7932 20.7039 15.4642 20.7039 15.2592 20.9089C15.0542 21.1149 15.0542 21.4429 15.2592 21.6479Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}