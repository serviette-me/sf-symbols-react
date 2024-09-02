import { IconProps } from "../../types"

export default function GlowplugIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.340749943149746 27.20703125"
          className={className}
        >
          <path
            d="              M37.3088 4.2106C38.1568 4.2106 38.8948 4.3206 39.6328 4.5116C42.4768 5.1956 43.5018 1.1756 40.6308 0.3966C39.7418 0.1506 38.4978 -0.0004 37.3088 -0.0004C34.3558 -0.0004 31.5938 0.9436 29.2418 2.5706C26.9048 0.9436 24.1288 -0.0004 21.1758 -0.0004C18.2088 -0.0004 15.4478 0.9436 13.0958 2.5706C10.7578 0.9436 7.9828 -0.0004 5.0298 -0.0004C3.8398 -0.0004 2.5958 0.1506 1.7208 0.3966C-1.1642 1.1756 -0.1382 5.1956 2.7048 4.5116C3.4438 4.3206 4.1958 4.2106 5.0298 4.2106C6.7658 4.2106 8.4338 4.6896 9.9098 5.5366C7.4768 8.4906 5.9868 12.4006 5.9868 16.6386C5.9868 22.9546 8.8438 27.2066 13.1098 27.2066C17.3618 27.2066 20.2048 22.9686 20.2048 16.6386C20.2048 12.4006 18.7288 8.4906 16.2948 5.5366C17.7718 4.6896 19.4258 4.2106 21.1758 4.2106C22.9118 4.2106 24.5668 4.6896 26.0428 5.5366C23.6228 8.4906 22.1328 12.4006 22.1328 16.6386C22.1328 22.9686 24.9768 27.2066 29.2288 27.2066C33.5078 27.2066 36.3518 22.9546 36.3518 16.6386C36.3518 12.4006 34.8618 8.4906 32.4418 5.5366C33.9178 4.6896 35.5728 4.2106 37.3088 4.2106ZM10.2108 16.6386C10.2108 13.4536 11.3048 10.5136 13.0958 8.2986C14.8868 10.5136 15.9938 13.4536 15.9938 16.6386C15.9938 20.3576 14.7778 22.9956 13.1098 22.9956C11.4418 22.9956 10.2108 20.3436 10.2108 16.6386ZM26.3438 16.6386C26.3438 13.4536 27.4508 10.5136 29.2418 8.2986C31.0328 10.5136 32.1408 13.4536 32.1408 16.6386C32.1408 20.3436 30.8968 22.9956 29.2288 22.9956C27.5608 22.9956 26.3438 20.3576 26.3438 16.6386Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.149805095848414 26.0859375"
          className={className}
        >
          <path
            d="              M36.6394 3.1991C37.4874 3.1991 38.2804 3.3091 39.0594 3.5141C41.2464 4.0471 42.0674 0.9841 39.7974 0.3691C38.9774 0.1501 37.7874 0.0001 36.6394 0.0001C33.6864 0.0001 30.9104 0.9841 28.6004 2.6801C26.2894 0.9841 23.5284 0.0001 20.5754 0.0001C17.6214 0.0001 14.8604 0.9841 12.5494 2.6801C10.2394 0.9841 7.4634 0.0001 4.5104 0.0001C3.3624 0.0001 2.1724 0.1501 1.3524 0.3691C-0.9176 0.9841 -0.0966 4.0471 2.0904 3.5141C2.8694 3.3091 3.6624 3.1991 4.5104 3.1991C6.5334 3.1991 8.4484 3.8281 10.1164 4.8941C7.5594 7.8071 5.9734 11.7441 5.9734 16.0641C5.9734 22.0391 8.5844 26.0861 12.5494 26.0861C16.5004 26.0861 19.1254 22.0531 19.1254 16.0641C19.1254 11.7581 17.5394 7.8071 14.9694 4.8941C16.6374 3.8281 18.5514 3.1991 20.5754 3.1991C22.5984 3.1991 24.5124 3.8281 26.1804 4.8941C23.6104 7.8071 22.0244 11.7581 22.0244 16.0641C22.0244 22.0531 24.6494 26.0861 28.6004 26.0861C32.5654 26.0861 35.1764 22.0391 35.1764 16.0641C35.1764 11.7441 33.5904 7.8071 31.0334 4.8941C32.7014 3.8281 34.6164 3.1991 36.6394 3.1991ZM9.1724 16.0641C9.1724 12.5511 10.4714 9.3381 12.5494 7.0001C14.6144 9.3381 15.9124 12.5511 15.9124 16.0641C15.9124 20.1251 14.5184 22.8731 12.5494 22.8731C10.5944 22.8731 9.1724 20.1111 9.1724 16.0641ZM25.2374 16.0641C25.2374 12.5511 26.5354 9.3381 28.6004 7.0001C30.6784 9.3381 31.9774 12.5511 31.9774 16.0641C31.9774 20.1111 30.5554 22.8731 28.6004 22.8731C26.6314 22.8731 25.2374 20.1251 25.2374 16.0641Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.788198745437 26.6875"
          className={className}
        >
          <path
            d="              M36.9991 3.7458C37.8471 3.7458 38.6131 3.8418 39.3651 4.0468C41.9081 4.6618 42.8371 1.0938 40.2401 0.3828C39.3921 0.1508 38.1621 -0.0002 36.9991 -0.0002C34.0461 -0.0002 31.2711 0.9708 28.9471 2.6248C26.6221 0.9708 23.8471 -0.0002 20.8941 -0.0002C17.9411 -0.0002 15.1651 0.9708 12.8411 2.6248C10.5171 0.9708 7.7421 -0.0002 4.7881 -0.0002C3.6261 -0.0002 2.4101 0.1508 1.5481 0.3828C-1.0489 1.0938 -0.1199 4.6618 2.4231 4.0468C3.1751 3.8418 3.9411 3.7458 4.7881 3.7458C6.6621 3.7458 8.4391 4.2788 10.0111 5.2358C7.5231 8.1758 5.9921 12.0998 5.9921 16.3648C5.9921 22.5308 8.7261 26.6878 12.8551 26.6878C16.9561 26.6878 19.7051 22.5308 19.7051 16.3648C19.7051 12.0998 18.1731 8.1758 15.6711 5.2358C17.2441 4.2788 19.0211 3.7458 20.8941 3.7458C22.7671 3.7458 24.5441 4.2788 26.1171 5.2358C23.6281 8.1758 22.0831 12.0998 22.0831 16.3648C22.0831 22.5308 24.8311 26.6878 28.9331 26.6878C33.0621 26.6878 35.8101 22.5308 35.8101 16.3648C35.8101 12.0998 34.2651 8.1758 31.7771 5.2358C33.3491 4.2788 35.1261 3.7458 36.9991 3.7458ZM9.7241 16.3648C9.7241 13.0288 10.9131 9.9668 12.8411 7.6838C14.7691 9.9668 15.9581 13.0288 15.9581 16.3648C15.9581 20.2478 14.6601 22.9418 12.8551 22.9418C11.0501 22.9418 9.7241 20.2348 9.7241 16.3648ZM25.8301 16.3648C25.8301 13.0288 27.0191 9.9668 28.9471 7.6838C30.8741 9.9668 32.0641 13.0288 32.0641 16.3648C32.0641 20.2348 30.7381 22.9418 28.9331 22.9418C27.1281 22.9418 25.8301 20.2478 25.8301 16.3648Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.9592386599723 24.171875"
          className={className}
        >
          <path
            d="              M35.2569 1.695C36.1179 1.695 36.9929 1.805 37.8139 2.01C39.0169 2.311 39.4819 0.697 38.1689 0.355C37.4039 0.137 36.3239 0 35.2569 0C32.3309 0 29.5969 1.053 27.3679 2.83C25.1399 1.053 22.4189 0 19.4799 0C16.5539 0 13.8199 1.053 11.5909 2.83C9.3629 1.053 6.6279 0 3.7159 0C2.6359 0 1.5559 0.137 0.7899 0.355C-0.5221 0.697 -0.0571 2.311 1.1459 2.01C1.9799 1.805 2.8409 1.695 3.7159 1.695C6.1359 1.695 8.4189 2.529 10.3199 3.965C7.5849 6.74 5.8629 10.705 5.8629 15.053C5.8629 20.494 8.1459 24.172 11.6049 24.172C15.0499 24.172 17.3199 20.494 17.3199 15.053C17.3199 10.705 15.5969 6.74 12.8759 3.978C14.7769 2.529 17.0459 1.695 19.4799 1.695C21.9129 1.695 24.1969 2.529 26.0969 3.978C23.3629 6.74 21.6399 10.705 21.6399 15.053C21.6399 20.494 23.9089 24.172 27.3549 24.172C30.8139 24.172 33.0969 20.494 33.0969 15.053C33.0969 10.705 31.3739 6.74 28.6539 3.965C30.5399 2.529 32.8239 1.695 35.2569 1.695ZM7.5579 15.053C7.5579 11.115 9.1299 7.547 11.5909 5.086C14.0659 7.547 15.6379 11.115 15.6379 15.053C15.6379 19.51 13.9969 22.477 11.6049 22.477C9.1989 22.477 7.5579 19.496 7.5579 15.053ZM23.3349 15.053C23.3349 11.115 24.9069 7.547 27.3679 5.086C29.8289 7.547 31.4019 11.115 31.4019 15.053C31.4019 19.496 29.7609 22.477 27.3549 22.477C24.9619 22.477 23.3349 19.51 23.3349 15.053Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.390588111095 25.375"
          className={className}
        >
          <path
            d="              M36.2025 2.5706C37.0645 2.5706 37.8845 2.6656 38.6915 2.8846C40.4545 3.3086 41.1525 0.8746 39.2795 0.3696C38.4725 0.1506 37.3375 -0.0004 36.2025 -0.0004C33.2495 -0.0004 30.4885 1.0256 28.2045 2.7476C25.9085 1.0256 23.1595 -0.0004 20.1935 -0.0004C17.2405 -0.0004 14.4785 1.0256 12.1815 2.7476C9.8985 1.0256 7.1365 -0.0004 4.1835 -0.0004C3.0485 -0.0004 1.9135 0.1506 1.1075 0.3696C-0.7655 0.8746 -0.0545 3.3086 1.6955 2.8846C2.5015 2.6656 3.3355 2.5706 4.1835 2.5706C6.3985 2.5706 8.4765 3.2816 10.2535 4.5116C7.6015 7.3696 5.9475 11.3476 5.9475 15.6956C5.9475 21.4646 8.4355 25.3746 12.1955 25.3746C15.9545 25.3746 18.4295 21.4786 18.4295 15.6956C18.4295 11.3476 16.7755 7.3696 14.1225 4.5116C15.9005 3.2816 17.9785 2.5706 20.1935 2.5706C22.4085 2.5706 24.4865 3.2816 26.2635 4.5116C23.6115 7.3696 21.9565 11.3476 21.9565 15.6956C21.9565 21.4786 24.4315 25.3746 28.1915 25.3746C31.9515 25.3746 34.4395 21.4646 34.4395 15.6956C34.4395 11.3476 32.7845 7.3696 30.1325 4.5116C31.9095 3.2816 33.9885 2.5706 36.2025 2.5706ZM8.5175 15.6956C8.5175 11.9906 9.9395 8.5996 12.1955 6.1936C14.4515 8.5996 15.8595 11.9906 15.8595 15.6956C15.8595 19.9746 14.3555 22.8046 12.1955 22.8046C10.0485 22.8046 8.5175 19.9606 8.5175 15.6956ZM24.5275 15.6956C24.5275 11.9906 25.9495 8.5996 28.1915 6.1936C30.4475 8.5996 31.8685 11.9906 31.8685 15.6956C31.8685 19.9606 30.3375 22.8046 28.1915 22.8046C26.0315 22.8046 24.5275 19.9746 24.5275 15.6956Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.954314309157965 24.96484375"
          className={className}
        >
          <path
            d="              M35.9529 2.2015C36.8149 2.2015 37.6619 2.3105 38.4829 2.5155C39.9999 2.8985 40.6289 0.8065 38.9749 0.3555C38.1959 0.1505 37.0739 -0.0005 35.9529 -0.0005C32.9999 -0.0005 30.2389 1.0395 27.9689 2.7895C25.6989 1.0395 22.9379 -0.0005 19.9709 -0.0005C17.0179 -0.0005 14.2559 1.0395 11.9869 2.7895C9.7169 1.0395 6.9549 -0.0005 4.0019 -0.0005C2.8809 -0.0005 1.7599 0.1505 0.9809 0.3555C-0.6741 0.8065 -0.0451 2.8985 1.4589 2.5155C2.2929 2.3105 3.1409 2.2015 4.0019 2.2015C6.3129 2.2015 8.4869 2.9665 10.3189 4.2925C7.6249 7.1235 5.9439 11.1155 5.9439 15.4905C5.9439 21.1365 8.3359 24.9645 11.9999 24.9645C15.6369 24.9645 18.0299 21.1365 18.0299 15.4905C18.0299 11.1155 16.3479 7.1365 13.6549 4.2925C15.4869 2.9665 17.6599 2.2015 19.9709 2.2015C22.2949 2.2015 24.4689 2.9665 26.3009 4.2925C23.6079 7.1365 21.9119 11.1155 21.9119 15.4905C21.9119 21.1365 24.3049 24.9645 27.9549 24.9645C31.6189 24.9645 34.0119 21.1365 34.0119 15.4905C34.0119 11.1155 32.3299 7.1235 29.6369 4.2925C31.4689 2.9665 33.6429 2.2015 35.9529 2.2015ZM8.1449 15.4905C8.1449 11.6625 9.6349 8.1755 11.9869 5.7425C14.3379 8.1755 15.8279 11.6625 15.8279 15.4905C15.8279 19.8785 14.2559 22.7635 11.9999 22.7635C9.7309 22.7635 8.1449 19.8655 8.1449 15.4905ZM24.1139 15.4905C24.1139 11.6625 25.6039 8.1755 27.9689 5.7425C30.3209 8.1755 31.8109 11.6625 31.8109 15.4905C31.8109 19.8655 30.2109 22.7635 27.9549 22.7635C25.6989 22.7635 24.1139 19.8785 24.1139 15.4905Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.71797392792134 25.67578125"
          className={className}
        >
          <path
            d="              M36.3802 2.83C37.2422 2.83 38.0622 2.939 38.8552 3.145C40.7962 3.623 41.5482 0.916 39.4972 0.369C38.6912 0.15 37.5292 0 36.3802 0C33.4272 0 30.6792 0.998 28.3822 2.721C26.0852 0.998 23.3242 0 20.3572 0C17.4042 0 14.6422 0.998 12.3452 2.721C10.0482 0.998 7.2862 0 4.3332 0C3.1852 0 2.0232 0.15 1.2162 0.369C-0.8348 0.916 -0.0688 3.623 1.8592 3.145C2.6652 2.939 3.4722 2.83 4.3332 2.83C6.4522 2.83 8.4622 3.514 10.1992 4.676C7.5872 7.561 5.9602 11.512 5.9602 15.846C5.9602 21.711 8.5032 25.676 12.3592 25.676C16.1872 25.676 18.7302 21.725 18.7302 15.846C18.7302 11.525 17.1032 7.561 14.4922 4.676C16.2142 3.514 18.2242 2.83 20.3572 2.83C22.4902 2.83 24.4992 3.514 26.2222 4.676C23.6112 7.561 21.9842 11.525 21.9842 15.846C21.9842 21.725 24.5272 25.676 28.3682 25.676C32.2102 25.676 34.7532 21.711 34.7532 15.846C34.7532 11.512 33.1402 7.561 30.5292 4.676C32.2512 3.514 34.2612 2.83 36.3802 2.83ZM8.8042 15.846C8.8042 12.223 10.1712 8.914 12.3452 6.535C14.5192 8.914 15.8862 12.223 15.8862 15.846C15.8862 20.029 14.4232 22.832 12.3592 22.832C10.2812 22.832 8.8042 20.016 8.8042 15.846ZM24.8272 15.846C24.8272 12.223 26.1952 8.914 28.3682 6.535C30.5422 8.914 31.9092 12.223 31.9092 15.846C31.9092 20.016 30.4332 22.832 28.3682 22.832C26.2902 22.832 24.8272 20.029 24.8272 15.846Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.65419075670808 23.10546875"
          className={className}
        >
          <path
            d="              M34.3243 1.0118C35.2133 1.0118 36.0883 1.1348 36.9223 1.3398C37.7293 1.5448 37.9753 0.5468 37.1133 0.3278C36.3483 0.1228 35.3223 -0.0002 34.3243 -0.0002C31.4403 -0.0002 28.7603 1.0668 26.5863 2.8708C24.3993 1.0668 21.7193 -0.0002 18.8213 -0.0002C15.9223 -0.0002 13.2423 1.0668 11.0693 2.8708C8.8953 1.0668 6.2013 -0.0002 3.3173 -0.0002C2.3323 -0.0002 1.2933 0.1228 0.5413 0.3278C-0.3197 0.5468 -0.0737 1.5448 0.7193 1.3398C1.5533 1.1348 2.4423 1.0118 3.3173 1.0118C5.9143 1.0118 8.3213 1.9548 10.3033 3.5548C7.5283 6.2208 5.7643 10.1448 5.7643 14.4648C5.7643 19.6468 7.8833 23.1058 11.0823 23.1058C14.2683 23.1058 16.3733 19.6328 16.3733 14.4648C16.3733 10.1448 14.6103 6.2208 11.8343 3.5548C13.8173 1.9548 16.2373 1.0118 18.8213 1.0118C21.4183 1.0118 23.8243 1.9548 25.8073 3.5548C23.0453 6.2208 21.2683 10.1448 21.2683 14.4648C21.2683 19.6328 23.3733 23.1058 26.5593 23.1058C29.7583 23.1058 31.8773 19.6468 31.8773 14.4648C31.8773 10.1448 30.1133 6.2208 27.3383 3.5548C29.3213 1.9548 31.7403 1.0118 34.3243 1.0118ZM6.7893 14.4648C6.7893 10.3908 8.4573 6.6988 11.0693 4.2248C13.6803 6.6988 15.3623 10.3908 15.3623 14.4648C15.3623 19.0178 13.6663 22.0938 11.0823 22.0938C8.4983 22.0938 6.7893 19.0038 6.7893 14.4648ZM22.2793 14.4648C22.2793 10.3908 23.9613 6.6988 26.5723 4.2248C29.1843 6.6988 30.8653 10.3908 30.8653 14.4648C30.8653 19.0038 29.1433 22.0938 26.5593 22.0938C23.9753 22.0938 22.2793 19.0178 22.2793 14.4648Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.987260758584796 22.572265625"
          className={className}
        >
          <path
            d="              M33.8541 0.6701C34.7431 0.6701 35.6451 0.7931 36.4791 1.0121C37.0671 1.1621 37.2041 0.4921 36.5751 0.3421C35.8231 0.1231 34.8111 0.0001 33.8541 0.0001C30.9961 0.0001 28.3301 1.0941 26.1841 2.8981C24.0371 1.0941 21.3711 0.0001 18.5001 0.0001C15.6161 0.0001 12.9501 1.0941 10.8031 2.8981C8.6571 1.0941 6.0041 0.0001 3.1331 0.0001C2.1761 0.0001 1.1641 0.1231 0.4121 0.3421C-0.2159 0.4921 -0.0799 1.1621 0.5081 1.0121C1.3561 0.7931 2.2451 0.6701 3.1331 0.6701C5.7991 0.6701 8.2871 1.6681 10.3111 3.3501C7.5081 5.9611 5.7311 9.8711 5.7311 14.1911C5.7311 19.2231 7.7681 22.5721 10.8171 22.5721C13.8791 22.5721 15.9031 19.1951 15.9031 14.1911C15.9031 9.8851 14.1121 5.9751 11.3091 3.3631C13.3321 1.6821 15.8211 0.6701 18.5001 0.6701C21.1661 0.6701 23.6551 1.6821 25.6781 3.3631C22.8751 5.9751 21.0841 9.8851 21.0841 14.1911C21.0841 19.1951 23.1081 22.5721 26.1701 22.5721C29.2331 22.5721 31.2701 19.2231 31.2701 14.1911C31.2701 9.8711 29.4791 5.9611 26.6901 3.3501C28.7001 1.6681 31.1881 0.6701 33.8541 0.6701ZM6.4011 14.1911C6.4011 10.0351 8.1231 6.2891 10.8171 3.8011C13.4961 6.2891 15.2331 10.0351 15.2331 14.1911C15.2331 18.7851 13.4961 21.9021 10.8171 21.9021C8.1511 21.9021 6.4011 18.7581 6.4011 14.1911ZM21.7541 14.1911C21.7541 10.0351 23.4911 6.2891 26.1701 3.8011C28.8641 6.2891 30.6001 10.0351 30.6001 14.1911C30.6001 18.7581 28.8501 21.9021 26.1701 21.9021C23.4911 21.9021 21.7541 18.7851 21.7541 14.1911Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
