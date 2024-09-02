import { IconProps } from "../../types"

export default function TagIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.579837636055956 33.6328125"
          className={className}
        >
          <path
            d="              M18.3632 31.8279L32.0352 18.1559C33.2932 16.8989 33.5802 16.0369 33.5802 14.0409V8.8869C33.5802 7.1369 33.1562 6.3159 31.7482 4.8949L28.6712 1.8319C27.2502 0.4099 26.4292 -0.0001 24.6932 -0.0001H19.5392C17.5292 -0.0001 16.7362 0.3279 15.4782 1.5999L1.7932 15.2719C-0.5998 17.6639 -0.5998 20.4529 1.8062 22.8459L10.7892 31.8279C13.1812 34.2339 15.9702 34.2339 18.3632 31.8279ZM15.4642 27.8769C14.8632 28.4789 14.3302 28.5059 13.7012 27.8769L5.7572 19.9469C5.1012 19.3179 5.1702 18.7719 5.7442 18.1839L18.9512 4.9769C19.2382 4.7029 19.3882 4.6079 19.7442 4.6079H24.2142C24.5562 4.6079 24.8302 4.7309 25.0072 4.9079L28.6582 8.5589C28.8362 8.7499 28.9592 9.0239 28.9592 9.3519V13.8219C28.9592 14.2739 28.9182 14.4379 28.6712 14.6699ZM22.5602 13.3579C23.9002 13.3579 24.9252 12.3319 24.9252 11.0059C24.9252 9.6799 23.9002 8.6409 22.5602 8.6409C21.2342 8.6409 20.2092 9.6799 20.2092 11.0059C20.2092 12.3319 21.2342 13.3579 22.5602 13.3579Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.060562896415604 32.087890625"
          className={className}
        >
          <path
            d="              M17.2405 30.4471L30.7485 16.9261C31.8825 15.7911 32.0605 15.0661 32.0605 13.3441V8.1761C32.0605 6.5761 31.6775 5.9331 30.4475 4.7171L27.3435 1.5991C26.1135 0.3831 25.4845 0.0001 23.8845 0.0001H18.7035C16.9945 0.0001 16.2965 0.2051 15.1625 1.3401L1.6405 14.8481C-0.5335 17.0211 -0.5605 19.4281 1.6405 21.6291L10.4725 30.4471C12.6735 32.6351 15.0665 32.6351 17.2405 30.4471ZM15.0525 27.6441C14.2595 28.4371 13.4805 28.4511 12.6605 27.6441L4.4435 19.4411C3.6095 18.6211 3.6645 17.8141 4.4295 17.0491L17.6775 3.8141C17.9515 3.5411 18.1695 3.4041 18.5805 3.4041H23.6935C24.0765 3.4041 24.3495 3.5411 24.5955 3.7871L28.2735 7.4651C28.5055 7.6971 28.6565 7.9841 28.6565 8.3671V13.4801C28.6565 13.9321 28.5465 14.1501 28.2875 14.4101ZM22.0255 12.1411C23.2285 12.1411 24.1445 11.2111 24.1445 10.0351C24.1445 8.8461 23.2285 7.9161 22.0255 7.9161C20.8225 7.9161 19.9065 8.8461 19.9065 10.0351C19.9065 11.2111 20.8225 12.1411 22.0255 12.1411Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.853515625 32.89966200648595"
          className={className}
        >
          <path
            d="              M17.8285 31.1718L31.4315 17.5688C32.6345 16.3648 32.8535 15.5858 32.8535 13.7128V8.5448C32.8535 6.8628 32.4575 6.1388 31.1305 4.8128L28.0415 1.7228C26.7145 0.3968 25.9765 -0.0002 24.3085 -0.0002H19.1405C17.2675 -0.0002 16.5295 0.2738 15.3265 1.4768L1.7225 15.0668C-0.5745 17.3628 -0.5745 19.9608 1.7225 22.2718L10.6365 31.1718C12.9475 33.4828 15.5445 33.4688 17.8285 31.1718ZM15.2715 27.7678C14.5745 28.4648 13.9315 28.4788 13.2075 27.7678L5.1265 19.7008C4.4025 18.9768 4.4575 18.3198 5.1265 17.6368L18.3475 4.4298C18.6215 4.1558 18.8125 4.0328 19.1955 4.0328H23.9665C24.3225 4.0328 24.6095 4.1698 24.8145 4.3748L28.4785 8.0388C28.6835 8.2438 28.8065 8.5308 28.8065 8.8868V13.6578C28.8065 14.1098 28.7385 14.3008 28.4925 14.5468ZM22.3125 12.7828C23.5845 12.7828 24.5545 11.7988 24.5545 10.5408C24.5545 9.2828 23.5845 8.2988 22.3125 8.2988C21.0415 8.2988 20.0705 9.2828 20.0705 10.5408C20.0705 11.7988 21.0415 12.7828 22.3125 12.7828Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.173846973582858 30.1533203125"
          className={className}
        >
          <path
            d="              M15.7365 28.7652L29.1485 15.3122C30.0915 14.3692 30.1735 13.8902 30.1735 12.4412V7.2462C30.1735 5.9202 29.9145 5.5232 28.8755 4.4842L25.6755 1.2992C24.6505 0.2602 24.2535 0.0002 22.9275 0.0002H17.7185C16.2695 0.0002 15.7915 0.0822 14.8615 1.0122L1.3945 14.4242C-0.4515 16.2692 -0.4785 18.1972 1.3945 20.0702L10.1035 28.7522C11.9765 30.6252 13.9045 30.6112 15.7365 28.7652ZM14.6015 27.4942C13.4945 28.6012 12.3595 28.6152 11.2245 27.4942L2.6665 18.9222C1.5445 17.8142 1.5585 16.6522 2.6525 15.5582L16.0505 2.2152C16.3925 1.8732 16.7345 1.6952 17.2535 1.6952H23.0095C23.4885 1.6952 23.8435 1.8592 24.1995 2.2152L27.9595 5.9742C28.3005 6.3162 28.4785 6.6722 28.4785 7.1642V12.9202C28.4785 13.4262 28.3005 13.7812 27.9595 14.1232ZM21.3695 10.4592C22.3265 10.4592 23.0375 9.7202 23.0375 8.7912C23.0375 7.8612 22.3265 7.1372 21.3695 7.1372C20.4255 7.1372 19.7145 7.8612 19.7145 8.7912C19.7145 9.7202 20.4255 10.4592 21.3695 10.4592Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.089860839210846 31.10009765625"
          className={className}
        >
          <path
            d="              M16.5295 29.5584L29.9145 16.1464C30.9805 15.0804 31.0895 14.4514 31.0895 12.9064V7.7114C31.0895 6.2074 30.7345 5.7014 29.6265 4.5934L26.4965 1.4634C25.3885 0.3694 24.8825 0.0004 23.3785 0.0004H18.1835C16.6385 0.0004 16.0235 0.1234 14.9575 1.1894L1.5315 14.5884C-0.4925 16.6114 -0.5335 18.7854 1.5445 20.8494L10.2675 29.5454C12.3455 31.6234 14.4925 31.6094 16.5295 29.5584ZM14.7935 27.5074C13.8765 28.4104 12.9335 28.4234 11.9905 27.4944L3.6095 19.1134C2.6665 18.1704 2.6935 17.2134 3.5955 16.3104L16.8575 3.0764C17.1305 2.7894 17.3905 2.6384 17.8415 2.6384H23.3655C23.7755 2.6384 24.0625 2.7894 24.3225 3.0624L28.0275 6.7674C28.3005 7.0414 28.4515 7.3144 28.4515 7.7244V13.2614C28.4515 13.7134 28.3005 13.9724 28.0415 14.2464ZM21.6835 11.3754C22.8045 11.3754 23.6385 10.5004 23.6385 9.4064C23.6385 8.3124 22.8045 7.4514 21.6835 7.4514C20.5625 7.4514 19.7285 8.3124 19.7285 9.4064C19.7285 10.5004 20.5625 11.3754 21.6835 11.3754Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.54640439719805 30.541264200643607"
          className={className}
        >
          <path
            d="              M16.1229 29.0663L29.4529 15.7093C30.4779 14.6833 30.5469 14.0953 30.5469 12.6603V7.4653C30.5469 6.0153 30.2049 5.5643 29.1659 4.5253L26.0209 1.3813C24.9959 0.3553 24.5449 0.0003 23.0949 0.0003H17.8859C16.4509 0.0003 15.8769 0.0683 14.8509 1.0933L1.4799 14.4373C-0.4751 16.3923 -0.5161 18.4163 1.4939 20.4123L10.1479 29.0523C12.1579 31.0493 14.1679 31.0213 16.1229 29.0663ZM14.6459 27.4123C13.6619 28.3963 12.6229 28.4103 11.6249 27.3983L3.1339 18.9223C2.1359 17.9243 2.1499 16.8713 3.1209 15.9003L16.3959 2.6523C16.6699 2.3793 16.9569 2.2013 17.4219 2.2013H23.1769C23.6009 2.2013 23.8879 2.3653 24.1749 2.6523L27.9079 6.3713C28.1949 6.6583 28.3449 6.9453 28.3449 7.3693V13.1383C28.3449 13.5903 28.1809 13.8773 27.9079 14.1503ZM21.4959 10.9373C22.5619 10.9373 23.3689 10.1033 23.3689 9.0643C23.3689 8.0113 22.5619 7.1913 21.4959 7.1913C20.4159 7.1913 19.6229 8.0113 19.6229 9.0643C19.6229 10.1033 20.4159 10.9373 21.4959 10.9373Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.50343450696429 31.525638913623606"
          className={className}
        >
          <path
            d="              M16.8339 29.9411L30.2729 16.4881C31.3799 15.3811 31.5039 14.7251 31.5039 13.0981V7.9161C31.5039 6.3711 31.1339 5.7971 29.9859 4.6481L26.8689 1.5311C25.7069 0.3691 25.1459 0.0001 23.6009 0.0001H18.4199C16.7929 0.0001 16.1499 0.1501 15.0429 1.2581L1.5889 14.6971C-0.5161 16.7891 -0.5431 19.0591 1.5889 21.1911L10.3529 29.9411C12.4859 32.0601 14.7419 32.0471 16.8339 29.9411ZM14.9059 27.5621C14.0449 28.4241 13.1699 28.4371 12.2809 27.5621L3.9679 19.2501C3.0799 18.3611 3.1069 17.4731 3.9549 16.6251L17.2159 3.3911C17.4899 3.1171 17.7359 2.9671 18.1599 2.9671H23.5049C23.9019 2.9671 24.1889 3.1171 24.4489 3.3771L28.1399 7.0681C28.3999 7.3281 28.5369 7.6011 28.5369 7.9981V13.3571C28.5369 13.8091 28.4139 14.0551 28.1399 14.3141ZM21.8379 11.7031C22.9859 11.7031 23.8609 10.8141 23.8609 9.6801C23.8609 8.5451 22.9859 7.6561 21.8379 7.6561C20.6749 7.6561 19.8139 8.5451 19.8139 9.6801C19.8139 10.8141 20.6749 11.7031 21.8379 11.7031Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.666264913182136 29.650899413406297"
          className={className}
        >
          <path
            d="              M15.2288 28.3691L28.7498 14.8071C29.5708 13.9861 29.6668 13.6311 29.6668 12.1821V6.9731C29.6668 5.8101 29.5298 5.4821 28.4908 4.4431L25.2368 1.1891C24.1838 0.1501 23.8558 0.0001 22.7078 0.0001H17.4988C16.0358 0.0001 15.6938 0.0961 14.8738 0.9301L1.2698 14.4241C-0.4252 16.1331 -0.4252 17.9241 1.2838 19.6191L10.0338 28.3691C11.7428 30.0921 13.5468 30.0641 15.2288 28.3691ZM14.5448 27.6171C13.2738 28.8751 12.0018 28.9021 10.7168 27.6171L2.0358 18.9351C0.7638 17.6641 0.7918 16.3511 2.0358 15.1071L15.5838 1.6411C16.0078 1.2171 16.4458 1.0251 17.0338 1.0251H22.7898C23.3498 1.0251 23.7878 1.2171 24.2108 1.6411L28.0398 5.4691C28.4628 5.8791 28.6548 6.3301 28.6548 6.8911V12.6461C28.6548 13.2211 28.4628 13.6721 28.0398 14.0821ZM21.2168 9.8441C22.0098 9.8441 22.6118 9.2421 22.6118 8.4631C22.6118 7.6701 22.0098 7.0681 21.2168 7.0681C20.4378 7.0681 19.8358 7.6701 19.8358 8.4631C19.8358 9.2421 20.4378 9.8441 21.2168 9.8441Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.42017142375526 29.392827673755264"
          className={className}
        >
          <path
            d="              M14.9688 28.1777L28.5448 14.5337C29.3108 13.7817 29.4198 13.5077 29.4198 12.0317V6.8357C29.4198 5.7557 29.3378 5.4687 28.2858 4.4157L25.0038 1.1347C23.9648 0.0957 23.6648 -0.0003 22.5838 -0.0003H17.3888C15.9258 -0.0003 15.6528 0.1097 14.8868 0.8747L1.2148 14.4237C-0.4122 16.0507 -0.3982 17.7737 1.2148 19.3867L9.9928 28.1777C11.6328 29.8047 13.3698 29.7907 14.9688 28.1777ZM14.5178 27.6717C13.1648 29.0257 11.8108 29.0387 10.4438 27.6717L1.7208 18.9357C0.3678 17.5957 0.3808 16.2017 1.7208 14.8747L15.3518 1.3397C15.8168 0.8887 16.3088 0.6697 16.9238 0.6697H22.6798C23.2678 0.6697 23.7598 0.8887 24.2248 1.3397L28.0808 5.2087C28.5448 5.6597 28.7498 6.1527 28.7498 6.7537V12.5097C28.7498 13.1247 28.5448 13.6177 28.0808 14.0687ZM21.1488 9.5297C21.8598 9.5297 22.3928 8.9957 22.3928 8.2847C22.3928 7.5747 21.8598 7.0407 21.1488 7.0407C20.4378 7.0407 19.9048 7.5747 19.9048 8.2847C19.9048 8.9957 20.4378 9.5297 21.1488 9.5297Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
