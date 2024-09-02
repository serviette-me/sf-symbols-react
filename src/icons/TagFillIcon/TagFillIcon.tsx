import { IconProps } from "../../types"

export default function TagFillIconIcon({
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
            d="              M18.3632 31.8279L32.0352 18.1559C33.2932 16.8989 33.5802 16.0369 33.5802 14.0409V8.8869C33.5802 7.1369 33.1562 6.3159 31.7482 4.8949L28.6712 1.8319C27.2502 0.4099 26.4292 -0.0001 24.6932 -0.0001H19.5392C17.5292 -0.0001 16.7362 0.3279 15.4782 1.5999L1.7932 15.2719C-0.5998 17.6639 -0.5998 20.4529 1.8062 22.8459L10.7892 31.8279C13.1812 34.2339 15.9702 34.2339 18.3632 31.8279ZM21.8222 13.3579C20.4962 13.3579 19.4572 12.3319 19.4572 11.0059C19.4572 9.6799 20.4962 8.6409 21.8222 8.6409C23.1482 8.6409 24.1872 9.6799 24.1872 11.0059C24.1872 12.3319 23.1482 13.3579 21.8222 13.3579Z"
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
            d="              M17.2405 30.4471L30.7485 16.9261C31.8825 15.7911 32.0605 15.0661 32.0605 13.3441V8.1761C32.0605 6.5761 31.6775 5.9331 30.4475 4.7171L27.3435 1.5991C26.1135 0.3831 25.4845 0.0001 23.8845 0.0001H18.7035C16.9945 0.0001 16.2965 0.2051 15.1625 1.3401L1.6405 14.8481C-0.5335 17.0211 -0.5605 19.4281 1.6405 21.6291L10.4725 30.4471C12.6735 32.6351 15.0665 32.6351 17.2405 30.4471ZM21.3005 12.1411C20.1115 12.1411 19.1955 11.2111 19.1955 10.0351C19.1955 8.8461 20.1115 7.9161 21.3005 7.9161C22.5035 7.9161 23.4195 8.8461 23.4195 10.0351C23.4195 11.2111 22.5035 12.1411 21.3005 12.1411Z"
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
            d="              M17.8285 31.1718L31.4315 17.5688C32.6345 16.3648 32.8535 15.5858 32.8535 13.7128V8.5448C32.8535 6.8628 32.4575 6.1388 31.1305 4.8128L28.0415 1.7228C26.7145 0.3968 25.9765 -0.0002 24.3085 -0.0002H19.1405C17.2675 -0.0002 16.5295 0.2738 15.3265 1.4768L1.7225 15.0668C-0.5745 17.3628 -0.5745 19.9608 1.7225 22.2718L10.6365 31.1718C12.9475 33.4828 15.5445 33.4688 17.8285 31.1718ZM21.5745 12.7828C20.3025 12.7828 19.3325 11.7988 19.3325 10.5408C19.3325 9.2828 20.3025 8.2988 21.5745 8.2988C22.8455 8.2988 23.8165 9.2828 23.8165 10.5408C23.8165 11.7988 22.8455 12.7828 21.5745 12.7828Z"
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
            d="              M15.7365 28.7652L29.1485 15.3122C30.0915 14.3692 30.1735 13.8902 30.1735 12.4412V7.2462C30.1735 5.9202 29.9145 5.5232 28.8755 4.4842L25.6755 1.2992C24.6505 0.2602 24.2535 0.0002 22.9275 0.0002H17.7185C16.2695 0.0002 15.7915 0.0822 14.8615 1.0122L1.3945 14.4242C-0.4515 16.2692 -0.4785 18.1972 1.3945 20.0702L10.1035 28.7522C11.9765 30.6252 13.9045 30.6112 15.7365 28.7652ZM20.6715 10.4592C19.7285 10.4592 19.0175 9.7202 19.0175 8.7912C19.0175 7.8612 19.7285 7.1372 20.6715 7.1372C21.6285 7.1372 22.3395 7.8612 22.3395 8.7912C22.3395 9.7202 21.6285 10.4592 20.6715 10.4592Z"
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
            d="              M16.5295 29.5584L29.9145 16.1464C30.9805 15.0804 31.0895 14.4514 31.0895 12.9064V7.7114C31.0895 6.2074 30.7345 5.7014 29.6265 4.5934L26.4965 1.4634C25.3885 0.3694 24.8825 0.0004 23.3785 0.0004H18.1835C16.6385 0.0004 16.0235 0.1234 14.9575 1.1894L1.5315 14.5884C-0.4925 16.6114 -0.5335 18.7854 1.5445 20.8494L10.2675 29.5454C12.3455 31.6234 14.4925 31.6094 16.5295 29.5584ZM20.9725 11.3754C19.8655 11.3754 19.0175 10.5004 19.0175 9.4064C19.0175 8.3124 19.8655 7.4514 20.9725 7.4514C22.0935 7.4514 22.9415 8.3124 22.9415 9.4064C22.9415 10.5004 22.0935 11.3754 20.9725 11.3754Z"
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
            d="              M16.1229 29.0663L29.4529 15.7093C30.4779 14.6833 30.5469 14.0953 30.5469 12.6603V7.4653C30.5469 6.0153 30.2049 5.5643 29.1659 4.5253L26.0209 1.3813C24.9959 0.3553 24.5449 0.0003 23.0949 0.0003H17.8859C16.4509 0.0003 15.8769 0.0683 14.8509 1.0933L1.4799 14.4373C-0.4751 16.3923 -0.5161 18.4163 1.4939 20.4123L10.1479 29.0523C12.1579 31.0493 14.1679 31.0213 16.1229 29.0663ZM20.7979 10.9373C19.7179 10.9373 18.9249 10.1033 18.9249 9.0643C18.9249 8.0113 19.7179 7.1913 20.7979 7.1913C21.8649 7.1913 22.6719 8.0113 22.6719 9.0643C22.6719 10.1033 21.8649 10.9373 20.7979 10.9373Z"
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
            d="              M16.8339 29.9411L30.2729 16.4881C31.3799 15.3811 31.5039 14.7251 31.5039 13.0981V7.9161C31.5039 6.3711 31.1339 5.7971 29.9859 4.6481L26.8689 1.5311C25.7069 0.3691 25.1459 0.0001 23.6009 0.0001H18.4199C16.7929 0.0001 16.1499 0.1501 15.0429 1.2581L1.5889 14.6971C-0.5161 16.7891 -0.5431 19.0591 1.5889 21.1911L10.3529 29.9411C12.4859 32.0601 14.7419 32.0471 16.8339 29.9411ZM21.1269 11.7031C19.9639 11.7031 19.0889 10.8141 19.0889 9.6801C19.0889 8.5451 19.9639 7.6561 21.1269 7.6561C22.2749 7.6561 23.1499 8.5451 23.1499 9.6801C23.1499 10.8141 22.2749 11.7031 21.1269 11.7031Z"
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
            d="              M15.2288 28.3691L28.7498 14.8071C29.5708 13.9861 29.6668 13.6311 29.6668 12.1821V6.9731C29.6668 5.8101 29.5298 5.4821 28.4908 4.4431L25.2368 1.1891C24.1838 0.1501 23.8558 0.0001 22.7078 0.0001H17.4988C16.0358 0.0001 15.6938 0.0961 14.8738 0.9301L1.2698 14.4241C-0.4252 16.1331 -0.4252 17.9241 1.2838 19.6191L10.0338 28.3691C11.7428 30.0921 13.5468 30.0641 15.2288 28.3691ZM20.5198 9.8441C19.7268 9.8441 19.1388 9.2421 19.1388 8.4631C19.1388 7.6701 19.7268 7.0681 20.5198 7.0681C21.3128 7.0681 21.9148 7.6701 21.9148 8.4631C21.9148 9.2421 21.3128 9.8441 20.5198 9.8441Z"
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
            d="              M14.9688 28.1777L28.5448 14.5337C29.3108 13.7817 29.4198 13.5077 29.4198 12.0317V6.8357C29.4198 5.7557 29.3378 5.4687 28.2858 4.4157L25.0038 1.1347C23.9648 0.0957 23.6648 -0.0003 22.5838 -0.0003H17.3888C15.9258 -0.0003 15.6528 0.1097 14.8868 0.8747L1.2148 14.4237C-0.4122 16.0507 -0.3982 17.7737 1.2148 19.3867L9.9928 28.1777C11.6328 29.8047 13.3698 29.7907 14.9688 28.1777ZM20.4518 9.5297C19.7408 9.5297 19.2078 8.9957 19.2078 8.2847C19.2078 7.5747 19.7408 7.0407 20.4518 7.0407C21.1488 7.0407 21.6958 7.5747 21.6958 8.2847C21.6958 8.9957 21.1488 9.5297 20.4518 9.5297Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}