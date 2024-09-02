import { IconProps } from "../../types"

export default function PhoneIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.28515625 29.01171875"
          className={className}
        >
          <path
            d="              M21.7795 29.0112C24.2125 29.0112 26.0445 28.1232 27.8225 26.3322C27.9185 26.2362 28.0005 26.1402 28.0955 26.0312C28.8065 25.1832 29.2855 24.0622 29.2855 23.1332C29.2855 21.9432 28.8065 20.9722 27.5625 20.1112L23.0915 16.9942C21.5465 15.9272 19.9335 15.9412 18.7575 17.1312L17.8965 18.0062C17.3495 18.5662 16.7615 18.6072 15.9415 17.9242C15.1895 17.3082 14.1775 16.3922 13.4395 15.6682C12.8375 15.0662 12.0585 14.1912 11.5115 13.4942C10.8695 12.6742 10.8695 12.0992 11.4295 11.5392L12.3045 10.6772C13.4945 9.5152 13.5215 7.8752 12.4555 6.3572L9.0235 1.5582C8.2985 0.5472 7.1235 0.0002 5.9195 0.0002C4.9495 0.0002 3.9645 0.3422 3.1035 1.0252C3.0075 1.1072 2.8985 1.1892 2.8575 1.2302C0.9165 3.1582 0.0005 4.8672 0.0005 7.8202C0.0005 12.4002 2.0235 17.1442 7.1505 22.1352C12.2635 27.0972 16.7205 29.0112 21.7795 29.0112ZM21.6835 25.9222C18.2105 25.9352 14.3825 24.2672 9.5565 19.5782C4.7305 14.8752 3.1855 10.9102 3.1995 7.4372C3.1995 6.1112 3.7055 4.8812 4.5935 4.1292C4.7305 4.0062 4.8805 3.8832 5.0175 3.7872C5.3045 3.5682 5.6055 3.4592 5.9065 3.4592C6.2895 3.4592 6.6585 3.6502 6.9455 4.0602L9.1875 7.3422C9.6385 8.0112 9.5975 8.7772 8.9415 9.3792L8.2855 9.9802C6.8635 11.2932 7.0275 12.5782 7.6015 13.5622C8.1625 14.5332 9.6525 16.2422 11.2935 17.8282C13.3025 19.7832 15.1345 21.4102 15.8735 21.8342C16.8715 22.4222 18.1695 22.5722 19.4555 21.1502L20.0565 20.5082C20.6585 19.8512 21.4235 19.8242 22.1075 20.2612L25.0605 22.1762C25.5115 22.4632 25.6625 22.8322 25.6625 23.2012C25.6625 23.5022 25.5665 23.8022 25.3345 24.1032C25.2385 24.2402 25.1155 24.3902 24.9925 24.5272C24.2405 25.4162 23.0095 25.9222 21.6835 25.9222Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.013671875 27.877306848243137"
          className={className}
        >
          <path
            d="              M20.8355 27.8771C23.2425 27.8771 24.9375 27.1121 26.5235 25.4301C26.6195 25.3341 26.7145 25.2251 26.8105 25.1161C27.5765 24.2411 28.0135 23.2151 28.0135 22.3261C28.0135 21.2461 27.4805 20.2891 26.2635 19.4421L22.0255 16.5021C20.6585 15.5451 19.1135 15.5041 17.9645 16.6661L17.0075 17.6371C16.5705 18.0611 16.1465 18.1021 15.5855 17.6641C14.8345 17.1171 13.5895 16.0101 12.7145 15.1351C11.8805 14.3151 10.9645 13.2891 10.4315 12.5101C10.0075 11.9501 10.0215 11.5261 10.4595 11.0881L11.4165 10.1311C12.5915 8.9831 12.5505 7.4381 11.5935 6.0571L8.4905 1.6681C7.7105 0.5611 6.6715 0.0141 5.5645 0.0001C4.6625 -0.0129 3.7055 0.3691 2.8165 1.1211C2.7205 1.2031 2.6115 1.2991 2.5295 1.3671C0.7795 3.0221 0.0005 4.6761 0.0005 7.3281C0.0005 11.5801 2.2145 16.3251 6.9865 21.0281C11.7445 25.7031 16.3515 27.8771 20.8355 27.8771ZM20.7945 25.2801C17.3085 25.3211 13.1665 23.1471 8.9825 19.0321C4.7855 14.9161 2.6115 10.6101 2.6525 7.1371C2.6665 5.7151 3.1715 4.4571 4.1565 3.6101C4.2655 3.5141 4.3885 3.4181 4.4985 3.3361C4.8395 3.0491 5.2225 2.8991 5.5645 2.8991C5.9605 2.8991 6.3165 3.0761 6.5895 3.4871L9.0375 7.1101C9.4065 7.6571 9.4065 8.2851 8.8595 8.7911L7.9295 9.6941C6.7405 10.8151 6.8635 12.0321 7.4925 12.9891C8.1625 14.0001 9.5845 15.6271 10.9235 16.9401C12.4555 18.4301 14.2055 19.9891 15.0935 20.6041C16.0505 21.2331 17.2815 21.3421 18.4025 20.1661L19.3045 19.2371C19.8105 18.6901 20.4255 18.6901 20.9865 19.0591L24.4455 21.3421C24.8825 21.6161 25.0335 21.9711 25.0335 22.3671C25.0335 22.7091 24.8825 23.0781 24.5955 23.4341C24.5005 23.5431 24.4185 23.6661 24.3225 23.7761C23.4745 24.7601 22.2035 25.2661 20.7945 25.2801Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.68359375 28.478515625"
          className={className}
        >
          <path
            d="              M21.3285 28.4781C23.7615 28.4781 25.5255 27.6441 27.2075 25.9081C27.3025 25.8121 27.3985 25.7171 27.4945 25.6071C28.2185 24.7321 28.6835 23.6661 28.6835 22.7501C28.6835 21.6151 28.1775 20.6441 26.9475 19.7971L22.5855 16.7621C21.1235 15.7501 19.5505 15.7361 18.3755 16.9121L17.4725 17.8281C16.9805 18.3201 16.4745 18.3611 15.7775 17.8011C15.0255 17.2131 13.8905 16.2151 13.0975 15.4081C12.3865 14.7111 11.5395 13.7671 11.0055 13.0291C10.4595 12.3321 10.4725 11.8261 10.9785 11.3341L11.8945 10.4181C13.0705 9.2561 13.0705 7.6561 12.0445 6.2211L8.7635 1.6131C8.0115 0.5471 6.9185 0.0001 5.7555 0.0001C4.8125 0.0001 3.8415 0.3421 2.9665 1.0661C2.8715 1.1481 2.7615 1.2441 2.7075 1.2991C0.8615 3.0901 0.0005 4.7711 0.0005 7.5881C0.0005 12.0171 2.1195 16.7621 7.0685 21.6151C12.0175 26.4411 16.5435 28.4781 21.3285 28.4781ZM21.2595 25.6211C17.7875 25.6481 13.8085 23.7341 9.2835 19.3181C4.7445 14.8891 2.9125 10.7731 2.9395 7.2871C2.9395 5.9201 3.4595 4.6891 4.3885 3.8831C4.5115 3.7731 4.6485 3.6641 4.7715 3.5681C5.0855 3.3221 5.4275 3.1991 5.7425 3.1991C6.1385 3.1991 6.4945 3.3771 6.7815 3.7871L9.1195 7.2321C9.5295 7.8481 9.5015 8.5451 8.9005 9.1051L8.1215 9.8441C6.8085 11.0601 6.9455 12.3181 7.5465 13.3031C8.1625 14.2731 9.6255 15.9551 11.1155 17.4041C12.9065 19.1401 14.6975 20.7401 15.5035 21.2601C16.4885 21.8611 17.7465 21.9841 18.9625 20.6851L19.7015 19.9061C20.2615 19.3051 20.9595 19.2911 21.5745 19.6871L24.7735 21.7791C25.2105 22.0661 25.3615 22.4221 25.3615 22.8051C25.3615 23.1331 25.2515 23.4611 24.9925 23.7891C24.8965 23.9121 24.7875 24.0491 24.6775 24.1721C23.8715 25.1011 22.6265 25.6211 21.2595 25.6211Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.962890625 25.963221453557548"
          className={className}
        >
          <path
            d="              M19.3455 25.9637C21.5335 25.9637 23.1325 25.3477 24.5135 23.8577C24.5955 23.7617 24.6775 23.6797 24.7465 23.5977C25.5665 22.7097 25.9625 21.8067 25.9625 20.9727C25.9625 20.0847 25.4575 19.2637 24.4185 18.5527L20.4535 15.8187C19.3455 15.0397 18.0055 14.9167 16.8165 16.0787L15.8185 17.0627C15.5175 17.3637 15.1895 17.4187 14.8205 17.2137C14.1505 16.8027 12.6325 15.5587 11.4705 14.3967C10.1995 13.1257 9.2965 12.0997 8.7505 11.1427C8.5445 10.7737 8.5995 10.4457 8.9005 10.1447L9.8845 9.1467C11.0465 7.9577 10.9235 6.6307 10.1445 5.5097L7.4105 1.5457C6.6995 0.5057 5.8785 0.0277 4.9905 0.0007C4.1565 -0.0133 3.2405 0.3967 2.3655 1.2167C2.2835 1.2857 2.2015 1.3677 2.1055 1.4497C0.6285 2.8167 0.0005 4.4027 0.0005 6.5627C0.0005 10.4047 2.4885 15.0257 6.7125 19.2507C10.9235 23.4477 15.5315 25.9637 19.3455 25.9637ZM19.3595 24.3087C15.8735 24.3497 11.5115 21.7247 7.9295 18.1297C4.3205 14.5337 1.6135 10.0627 1.6545 6.5627C1.6685 5.0457 2.1875 3.7057 3.2945 2.6797C3.3765 2.6257 3.4315 2.5707 3.5005 2.5157C4.0055 2.0507 4.5255 1.8187 4.9625 1.8187C5.4005 1.8187 5.7555 1.9967 6.0565 2.4477L8.7095 6.3987C9.0505 6.9047 9.1055 7.4787 8.5445 8.0397L7.4235 9.1467C6.6035 9.9667 6.6305 11.0197 7.1915 11.8397C7.8475 12.7977 9.1195 14.2737 10.3495 15.5177C11.5935 16.7757 13.1665 18.1157 14.1235 18.7717C14.9435 19.3327 15.9965 19.3597 16.8165 18.5397L17.9235 17.4187C18.4845 16.8577 19.0585 16.9127 19.5645 17.2547L23.5155 19.9067C23.9535 20.1937 24.1445 20.5627 24.1445 21.0007C24.1445 21.4517 23.9125 21.9577 23.4475 22.4637C23.3785 22.5457 23.3375 22.5867 23.2835 22.6687C22.2575 23.7757 20.9045 24.2957 19.3595 24.3087Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.193359375 27.152685610197103"
          className={className}
        >
          <path
            d="              M20.2205 27.1529C22.6135 27.1529 24.2405 26.4689 25.7035 24.8699C25.7985 24.7599 25.8945 24.6509 25.9905 24.5279C26.7965 23.6249 27.1935 22.6819 27.1935 21.8209C27.1935 20.7949 26.6465 19.8659 25.4295 19.0179L21.3555 16.1879C20.0845 15.2989 18.5935 15.2309 17.4455 16.3789L16.4195 17.3909C16.0785 17.7469 15.7505 17.7739 15.3395 17.4999C14.6015 16.9949 13.2075 15.7639 12.2365 14.8069C11.2655 13.8359 10.2675 12.7149 9.7345 11.8809C9.4605 11.4849 9.4885 11.1569 9.8435 10.8009L10.8555 9.7889C12.0035 8.6409 11.9355 7.1509 11.0335 5.8789L8.1485 1.7499C7.3285 0.5749 6.3715 0.0139 5.3455 -0.0001C4.4705 -0.0131 3.5415 0.3829 2.6385 1.1759C2.5295 1.2719 2.4195 1.3679 2.3105 1.4629C0.6975 2.9539 0.0005 4.5389 0.0005 7.0279C0.0005 11.0469 2.3375 15.8049 6.8765 20.3169C11.4025 24.8149 16.1195 27.1529 20.2205 27.1529ZM20.2205 24.8829C16.7345 24.9379 12.3735 22.4359 8.5995 18.6899C4.8125 14.9439 2.2425 10.4319 2.2965 6.9459C2.3245 5.4689 2.8435 4.1979 3.8825 3.2819C3.9785 3.1999 4.0605 3.1309 4.1695 3.0489C4.5525 2.7209 4.9625 2.5429 5.3455 2.5429C5.7425 2.5429 6.0975 2.7069 6.3715 3.1179L8.9415 6.9729C9.2555 7.4379 9.2695 7.9569 8.8045 8.4219L7.6975 9.5159C6.6715 10.5139 6.7535 11.7039 7.4235 12.6329C8.1625 13.6719 9.5435 15.2309 10.6915 16.3659C11.9085 17.5689 13.6035 19.0859 14.6015 19.8109C15.5315 20.4809 16.7205 20.5629 17.7185 19.5379L18.8125 18.4299C19.2635 17.9519 19.7835 17.9789 20.2615 18.2929L24.0625 20.8089C24.4725 21.0819 24.6235 21.4239 24.6235 21.8339C24.6235 22.2039 24.4595 22.6269 24.1175 23.0099C24.0355 23.1059 23.9665 23.2019 23.8845 23.2969C22.9825 24.3359 21.6975 24.8559 20.2205 24.8829Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.7421875 26.742529233605637"
          className={className}
        >
          <path
            d="              M19.8785 26.7425C22.2715 26.7425 23.8435 26.0995 25.2245 24.5415C25.3345 24.4315 25.4435 24.3085 25.5395 24.1995C26.3595 23.2835 26.7425 22.3815 26.7425 21.5195C26.7425 20.5355 26.1685 19.6195 24.9515 18.7715L20.9725 16.0105C19.7555 15.1625 18.3065 15.0665 17.1585 16.2015L16.1055 17.2545C15.7915 17.5685 15.5175 17.5825 15.2165 17.3905C14.4785 16.9265 12.9885 15.6275 11.9765 14.6155C10.9105 13.5625 9.8845 12.3875 9.3375 11.5255C9.1605 11.2115 9.1735 10.9515 9.4885 10.6375L10.5275 9.5845C11.6755 8.4355 11.5805 6.9865 10.7325 5.7695L7.9705 1.7915C7.1235 0.5745 6.2075 0.0135 5.2225 0.0005C4.3615 -0.0135 3.4595 0.3835 2.5435 1.2035C2.4195 1.3125 2.3105 1.4085 2.2015 1.5045C0.6425 2.8985 0.0005 4.4715 0.0005 6.8365C0.0005 10.7465 2.4065 15.5045 6.8225 19.9205C11.2105 24.3085 15.9825 26.7425 19.8785 26.7425ZM19.8925 24.6375C16.4065 24.7055 11.9355 22.0255 8.3945 18.4985C4.8265 14.9435 2.0235 10.3225 2.0915 6.8365C2.1195 5.3325 2.6525 4.0335 3.7185 3.1035C3.8145 3.0215 3.8825 2.9535 3.9785 2.8855C4.3885 2.5295 4.8265 2.3385 5.2225 2.3385C5.6195 2.3385 5.9745 2.4885 6.2345 2.8985L8.8865 6.8775C9.1735 7.3015 9.2015 7.7795 8.7775 8.2035L7.5745 9.4065C6.6305 10.3495 6.6995 11.4985 7.3825 12.4145C8.1625 13.4675 9.5155 14.9985 10.5685 16.0375C11.6075 17.0905 13.2615 18.5665 14.3285 19.3595C15.2445 20.0435 16.3925 20.1115 17.3355 19.1685L18.5395 17.9655C18.9625 17.5415 19.4275 17.5685 19.8655 17.8425L23.8435 20.4945C24.2405 20.7675 24.4045 21.1095 24.4045 21.5195C24.4045 21.9165 24.2125 22.3535 23.8575 22.7635C23.7755 22.8595 23.7205 22.9285 23.6385 23.0235C22.7095 24.0905 21.4105 24.6095 19.8925 24.6375Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.548828125 27.467150457974135"
          className={className}
        >
          <path
            d="              M20.4805 27.4677C22.8865 27.4677 24.5415 26.7427 26.0585 25.1157C26.1545 25.0067 26.2505 24.8967 26.3455 24.7737C27.1385 23.8847 27.5485 22.9147 27.5485 22.0257C27.5485 20.9867 27.0015 20.0437 25.7855 19.1957L21.6425 16.3247C20.3305 15.4087 18.8265 15.3407 17.6645 16.5027L16.6795 17.4867C16.2835 17.8837 15.9145 17.9107 15.4495 17.5687C14.7105 17.0497 13.3715 15.8737 12.4415 14.9437C11.5255 14.0277 10.5685 12.9617 10.0355 12.1547C9.6935 11.6757 9.7205 11.3067 10.1035 10.9247L11.1015 9.9257C12.2505 8.7777 12.2095 7.2737 11.2795 5.9477L8.2985 1.7097C7.4925 0.5607 6.4945 0.0137 5.4415 0.0007C4.5525 -0.0133 3.6235 0.3697 2.7205 1.1487C2.6115 1.2447 2.5015 1.3407 2.4065 1.4227C0.7385 2.9807 0.0005 4.5937 0.0005 7.1507C0.0005 11.2657 2.2835 16.0237 6.9315 20.6177C11.5525 25.1837 16.2145 27.4677 20.4805 27.4677ZM20.4665 25.0477C16.9805 25.1017 12.7145 22.7367 8.7635 18.8407C4.7985 14.9167 2.3925 10.5007 2.4475 7.0137C2.4605 5.5787 2.9805 4.3067 3.9925 3.4187C4.1015 3.3367 4.1975 3.2547 4.3065 3.1727C4.6755 2.8577 5.0725 2.6937 5.4415 2.6937C5.8375 2.6937 6.1935 2.8577 6.4665 3.2677L8.9825 7.0277C9.3245 7.5337 9.3245 8.0937 8.8325 8.5727L7.7935 9.5847C6.6995 10.6367 6.7945 11.8407 7.4515 12.7837C8.1625 13.8087 9.5565 15.3947 10.7875 16.6117C12.1545 17.9377 13.8635 19.4687 14.8205 20.1387C15.7635 20.7957 16.9535 20.8907 18.0055 19.7977L19.0175 18.7717C19.4965 18.2657 20.0705 18.2797 20.5765 18.6077L24.2265 21.0277C24.6505 21.3007 24.8005 21.6567 24.8005 22.0527C24.8005 22.4227 24.6365 22.8187 24.3225 23.1877C24.2405 23.2977 24.1585 23.3927 24.0765 23.5027C23.1875 24.5137 21.9165 25.0337 20.4665 25.0477Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.923828125 24.92415901099058"
          className={className}
        >
          <path
            d="              M18.6485 24.9242C20.5765 24.9242 22.2035 24.3502 23.5845 22.9282C23.6255 22.8732 23.6795 22.8322 23.7205 22.7912C24.5415 21.9442 24.9235 21.0552 24.9235 20.2352C24.9235 19.4832 24.5275 18.7722 23.7205 18.2252L19.7835 15.5452C18.7855 14.8612 17.6095 14.6972 16.3655 15.9012L15.4495 16.7892C15.1485 17.0902 14.7655 17.1862 14.3145 16.9532C13.7125 16.6252 12.1685 15.4632 10.8005 14.0962C9.2425 12.5512 8.5445 11.7032 7.9705 10.6102C7.7385 10.1582 7.8345 9.7762 8.1345 9.4752L9.0235 8.5452C10.2265 7.3152 10.0625 6.1392 9.3785 5.1412L6.6995 1.2032C6.1385 0.3972 5.4415 0.0142 4.6755 0.0002C3.8695 -0.0138 2.9535 0.3972 2.1325 1.2032C2.0785 1.2582 2.0505 1.2852 1.9965 1.3402C0.6015 2.6942 0.0005 4.3202 0.0005 6.1942C0.0005 9.9402 2.5705 14.3562 6.5765 18.3482C10.5415 22.2992 14.9295 24.9242 18.6485 24.9242ZM18.6625 23.8582C15.1755 23.8712 10.9645 21.3012 7.3005 17.6512C3.6365 13.9732 1.0525 9.6942 1.0665 6.2072C1.0665 4.6492 1.5855 3.2542 2.7345 2.1332C2.7895 2.0922 2.8305 2.0512 2.8715 1.9962C3.5005 1.3952 4.1155 1.1082 4.6215 1.1082C5.0995 1.1082 5.4825 1.3402 5.8245 1.8322L8.4765 5.7562C8.8735 6.3442 8.9825 7.0692 8.2305 7.8072L7.2185 8.8052C6.5625 9.4472 6.5355 10.3632 6.9455 11.0612C7.4235 11.8952 8.5855 13.3032 10.0765 14.8202C11.5805 16.3382 13.0295 17.5002 13.8635 17.9792C14.5605 18.3892 15.4765 18.3612 16.1195 17.7052L17.1175 16.6942C17.8555 15.9422 18.5665 16.0512 19.1685 16.4472L23.0915 19.1002C23.5845 19.4282 23.8165 19.8242 23.8165 20.2892C23.8165 20.8222 23.5295 21.4242 22.9005 22.0532C22.8595 22.1082 22.8325 22.1352 22.7915 22.1762C21.6565 23.3382 20.2345 23.8582 18.6625 23.8582Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.390625 24.378197931508165"
          className={className}
        >
          <path
            d="              M18.2935 24.3786C20.0845 24.3786 21.7245 23.8316 23.1055 22.4506C23.1325 22.4226 23.1735 22.3816 23.1875 22.3686C24.0075 21.5476 24.3905 20.6596 24.3905 19.8526C24.3905 19.1696 24.0485 18.5266 23.3515 18.0616L19.4275 15.3956C18.5115 14.7666 17.4045 14.5756 16.1465 15.7926L15.2575 16.6536C14.9575 16.9406 14.5335 17.0496 14.0415 16.8036C13.4945 16.5306 11.9355 15.3956 10.4595 13.9466C8.7505 12.2516 8.1485 11.4996 7.5745 10.3376C7.3285 9.8446 7.4375 9.4216 7.7385 9.1336L8.5855 8.2456C9.8025 6.9876 9.6115 5.8666 8.9965 4.9506L6.3165 1.0266C5.8515 0.3426 5.2225 0.0146 4.5255 0.0016C3.7185 -0.0264 2.8165 0.3976 2.0095 1.2046C1.9825 1.2316 1.9685 1.2456 1.9275 1.2866C0.5875 2.6266 0.0005 4.2666 0.0005 6.0036C0.0005 9.6946 2.6255 14.0146 6.5075 17.8836C10.3495 21.7126 14.6155 24.3786 18.2935 24.3786ZM18.2935 23.6266C14.8205 23.6266 10.6775 21.0696 6.9865 17.3916C3.2815 13.6866 0.7655 9.5036 0.7655 6.0166C0.7655 4.4446 1.2855 3.0086 2.4605 1.8336C2.4885 1.8056 2.5295 1.7646 2.5565 1.7376C3.2405 1.0536 3.9105 0.7396 4.4575 0.7396C4.9495 0.7396 5.3455 0.9996 5.7015 1.5056L8.3535 5.4156C8.7915 6.0576 8.9145 6.8506 8.0665 7.6846L7.1095 8.6146C6.5485 9.1746 6.4945 10.0226 6.8085 10.6656C7.2055 11.4176 8.3265 12.7976 9.9395 14.4526C11.5665 16.1206 12.9605 17.1726 13.7265 17.5696C14.3695 17.8976 15.2165 17.8426 15.7635 17.2686L16.7075 16.3116C17.5275 15.4636 18.3205 15.6006 18.9765 16.0386L22.8735 18.6906C23.3785 19.0326 23.6525 19.4426 23.6525 19.9346C23.6525 20.4956 23.3375 21.1376 22.6265 21.8486C22.5995 21.8766 22.5725 21.8896 22.5445 21.9306C21.3555 23.1206 19.9065 23.6266 18.2935 23.6266Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
