import { IconProps } from "../../types"

export default function DocBadgeGearshapeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.8984375 33.359375"
          className={className}
        >
          <path
            d="              M5.4137 16.174C6.1797 15.969 6.9867 15.859 7.8207 15.859C8.6677 15.859 9.4747 15.969 10.2677 16.188V6.111C10.2677 5.264 10.6097 4.854 11.5257 4.854H16.1877V10.322C16.1877 13.344 17.5687 14.738 20.6037 14.738H26.0447V24.76C26.0447 25.607 25.7027 26.018 24.8007 26.018H17.4997C17.4177 27.781 16.8297 29.463 15.8727 30.871H25.5387C28.9297 30.871 30.8987 28.889 30.8987 25.498V13.139C30.8987 10.623 30.4747 9.27 28.8477 7.643L23.2697 2.064C21.6567 0.438 20.3027 0 17.8007 0H10.7737C7.3967 0 5.4137 1.982 5.4137 5.373ZM19.9067 10.035V4.99L25.9077 11.02H20.8907C20.2347 11.02 19.9067 10.678 19.9067 10.035ZM7.2047 33.359H8.4217C9.0507 33.359 9.5567 32.963 9.6937 32.361L9.9807 31.145C10.0757 31.104 10.1577 31.076 10.2407 31.049L11.2927 31.691C11.8127 32.02 12.4687 31.965 12.9337 31.514L13.7817 30.652C14.2187 30.215 14.2597 29.545 13.9317 29.012L13.3027 27.973C13.3437 27.891 13.3577 27.822 13.3987 27.74L14.6157 27.439C15.2307 27.289 15.6407 26.797 15.6407 26.168V24.965C15.6407 24.35 15.2307 23.816 14.6157 23.68L13.4117 23.406C13.3987 23.338 13.3577 23.242 13.3167 23.174L13.9727 22.094C14.2867 21.574 14.2457 20.891 13.7817 20.453L12.8927 19.605C12.4827 19.209 11.8667 19.086 11.3337 19.414L10.2407 20.084C10.1577 20.043 10.0757 20.029 9.9937 19.988L9.6937 18.744C9.5427 18.143 9.0507 17.732 8.4217 17.732H7.2047C6.5627 17.732 6.0837 18.143 5.9337 18.772L5.6327 19.975C5.5507 19.988 5.4547 20.043 5.3727 20.084L4.2797 19.414C3.7867 19.113 3.1447 19.195 2.7207 19.605L1.8317 20.453C1.3807 20.877 1.3397 21.561 1.6677 22.094L2.3237 23.174C2.2697 23.242 2.2417 23.338 2.2007 23.406L1.0117 23.68C0.3967 23.844 -0.0003 24.35 -0.0003 24.965V26.168C-0.0003 26.797 0.4097 27.289 1.0117 27.439L2.2417 27.74C2.2557 27.822 2.2967 27.891 2.3237 27.973L1.6817 29.012C1.3667 29.545 1.3947 30.215 1.8457 30.652L2.7067 31.514C3.1447 31.951 3.8007 32.02 4.3337 31.691L5.4007 31.049C5.4547 31.09 5.5507 31.104 5.6327 31.145L5.9337 32.361C6.0837 32.963 6.5627 33.359 7.2047 33.359ZM7.8207 27.754C6.6167 27.754 5.6187 26.756 5.6187 25.553C5.6187 24.35 6.6167 23.352 7.8207 23.352C9.0097 23.352 10.0217 24.35 10.0217 25.553C10.0217 26.756 9.0097 27.754 7.8207 27.754Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.94140625 32.689453125"
          className={className}
        >
          <path
            d="              M5.7008 16.1742C6.2758 16.0642 6.8498 15.9822 7.4508 15.9822C8.0528 15.9822 8.6408 16.0642 9.2288 16.1872V5.2222C9.2288 4.1292 9.7618 3.5272 10.9238 3.5272H16.2968V10.2262C16.2968 12.6052 17.4318 13.7262 19.7968 13.7262H26.4138V24.8832C26.4138 25.9762 25.8808 26.5642 24.7188 26.5642H16.5568C16.4198 27.8362 15.9688 29.0532 15.2988 30.0922H25.1428C28.2458 30.0922 29.9418 28.3832 29.9418 25.2652V12.8792C29.9418 10.7462 29.6268 9.6802 28.2738 8.3122L21.7108 1.6812C20.3848 0.3422 19.2778 0.0002 17.2538 0.0002H10.4998C7.3968 0.0002 5.7008 1.7092 5.7008 4.8262ZM19.1948 9.9672V3.8142L26.1408 10.8282H20.0568C19.4688 10.8282 19.1948 10.5552 19.1948 9.9672ZM6.8498 32.6892H8.0528C8.5718 32.6892 8.9958 32.3612 9.1188 31.8552L9.4198 30.5702C9.5568 30.5152 9.7068 30.4612 9.8438 30.3922L10.9648 31.0762C11.4028 31.3492 11.9218 31.3362 12.3188 30.9392L13.1528 30.1052C13.5078 29.7232 13.5488 29.1892 13.2618 28.7242L12.5918 27.6172C12.6738 27.4802 12.7148 27.3712 12.7698 27.2342L14.0548 26.9202C14.5738 26.7972 14.9158 26.3872 14.9158 25.8532V24.6782C14.9158 24.1582 14.5608 23.7482 14.0548 23.6252L12.7828 23.3242C12.7288 23.1602 12.6598 23.0372 12.6188 22.9282L13.3028 21.7792C13.5758 21.3422 13.5348 20.7812 13.1658 20.4122L12.3048 19.5922C11.9488 19.2362 11.4298 19.1402 10.9918 19.4142L9.8438 20.1252C9.6938 20.0562 9.5568 20.0152 9.4198 19.9612L9.1188 18.6622C8.9828 18.1422 8.5718 17.8012 8.0528 17.8012H6.8498C6.3168 17.8012 5.9058 18.1562 5.7828 18.6622L5.4828 19.9472C5.3188 20.0022 5.1818 20.0562 5.0448 20.1252L3.8968 19.4142C3.4998 19.1682 2.9528 19.2362 2.5978 19.5922L1.7498 20.4122C1.3808 20.7812 1.3128 21.3282 1.5858 21.7792L2.2828 22.9282C2.2288 23.0372 2.1738 23.1872 2.1058 23.3242L0.8478 23.6252C0.3278 23.7482 -0.0002 24.1722 -0.0002 24.6782V25.8532C-0.0002 26.3872 0.3418 26.7972 0.8478 26.9202L2.1328 27.2342C2.1878 27.3712 2.2418 27.4802 2.2968 27.6172L1.6268 28.7382C1.3538 29.1892 1.3948 29.7362 1.7638 30.1052L2.5838 30.9392C2.9528 31.3222 3.4998 31.3492 3.9378 31.0762L5.0718 30.3922C5.2088 30.4742 5.3598 30.5152 5.4828 30.5702L5.7828 31.8552C5.9058 32.3482 6.3168 32.6892 6.8498 32.6892ZM7.4508 27.4942C6.2208 27.4942 5.2228 26.4962 5.2228 25.2522C5.2228 24.0352 6.2208 23.0232 7.4508 23.0102C8.6678 22.9962 9.6938 24.0352 9.6938 25.2522C9.6938 26.4962 8.6678 27.4942 7.4508 27.4942Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.447265625 33.03125"
          className={className}
        >
          <path
            d="              M5.5505 16.1606C6.2205 15.9966 6.9185 15.9136 7.6425 15.9136C8.3805 15.9136 9.0915 15.9966 9.7755 16.1736V5.6736C9.7755 4.7166 10.2125 4.2246 11.2385 4.2246H16.2425V10.2676C16.2425 12.9886 17.5005 14.2466 20.2205 14.2466H26.2225V24.8146C26.2225 25.7716 25.7855 26.2636 24.7595 26.2636H17.0485C16.9395 27.7946 16.4195 29.2576 15.5995 30.4886H25.3615C28.6015 30.4886 30.4475 28.6426 30.4475 25.3746V13.0016C30.4475 10.6636 30.0785 9.4606 28.5745 7.9436L22.5445 1.8726C21.0545 0.3826 19.8105 -0.0004 17.5545 -0.0004H10.6505C7.3965 -0.0004 5.5505 1.8456 5.5505 5.0996ZM19.5645 9.9946V4.4296L26.0175 10.9236H20.4945C19.8785 10.9236 19.5645 10.6096 19.5645 9.9946ZM7.0415 33.0316H8.2445C8.8325 33.0316 9.2965 32.6626 9.4195 32.1156L9.7205 30.8576C9.8305 30.8166 9.9535 30.7756 10.0625 30.7206L11.1285 31.3906C11.6215 31.6916 12.2095 31.6646 12.6465 31.2266L13.4805 30.3786C13.8905 29.9686 13.9185 29.3676 13.6175 28.8746L12.9605 27.7946C13.0295 27.6856 13.0565 27.6036 13.0975 27.4946L14.3555 27.1936C14.9165 27.0426 15.2985 26.5916 15.2985 26.0176V24.8146C15.2985 24.2406 14.9165 23.7756 14.3555 23.6526L13.1255 23.3516C13.0845 23.2426 13.0295 23.1326 12.9885 23.0506L13.6585 21.9436C13.9595 21.4516 13.9045 20.8226 13.4945 20.4256L12.6195 19.5916C12.2365 19.2086 11.6625 19.1136 11.1695 19.4006L10.0625 20.0976C9.9395 20.0426 9.8305 20.0156 9.7345 19.9606L9.4195 18.7036C9.2835 18.1286 8.8325 17.7596 8.2445 17.7596H7.0415C6.4535 17.7596 6.0025 18.1426 5.8655 18.7036L5.5645 19.9476C5.4415 19.9886 5.3325 20.0426 5.2225 20.0976L4.1015 19.4006C3.6505 19.1266 3.0625 19.1956 2.6665 19.5916L1.7915 20.4256C1.3805 20.8226 1.3265 21.4376 1.6265 21.9436L2.3105 23.0506C2.2555 23.1326 2.2145 23.2556 2.1605 23.3516L0.9435 23.6526C0.3695 23.7886 0.0005 24.2536 0.0005 24.8146V26.0176C0.0005 26.5916 0.3825 27.0426 0.9435 27.1936L2.1875 27.4946C2.2285 27.6036 2.2695 27.6856 2.3105 27.7946L1.6545 28.8746C1.3675 29.3676 1.3945 29.9826 1.8045 30.3786L2.6525 31.2266C3.0625 31.6506 3.6645 31.6916 4.1425 31.3906L5.2365 30.7206C5.3455 30.7896 5.4685 30.8166 5.5645 30.8576L5.8655 32.1156C6.0025 32.6626 6.4535 33.0316 7.0415 33.0316ZM7.6425 27.6306C6.4255 27.6306 5.4415 26.6196 5.4415 25.4026C5.4415 24.1996 6.4255 23.1876 7.6425 23.1876C8.8455 23.1736 9.8715 24.1996 9.8715 25.4026C9.8715 26.6196 8.8455 27.6306 7.6425 27.6306Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.65625 31.85546875"
          className={className}
        >
          <path
            d="              M6.0563 16.611C6.3303 16.584 6.5903 16.57 6.8633 16.57C7.1503 16.57 7.4103 16.584 7.7523 16.625V4.061C7.7523 2.557 8.5583 1.682 10.1443 1.682H16.5293V9.912C16.5293 11.471 17.3223 12.209 18.8403 12.209H26.9743V25.061C26.9743 26.606 26.1543 27.439 24.5823 27.439H14.8613C14.6973 28.041 14.4653 28.602 14.1643 29.135H24.6643C27.3163 29.135 28.6563 27.768 28.6563 25.102V12.277C28.6563 10.801 28.4653 10.145 27.5623 9.215L19.5233 1.094C18.6483 0.205 17.9373 0 16.6113 0H10.0493C7.4243 0 6.0563 1.354 6.0563 4.02ZM18.1293 9.734V2.023L26.6333 10.609H19.0173C18.3883 10.609 18.1293 10.363 18.1293 9.734ZM6.3303 31.856H7.4653C7.8753 31.856 8.1893 31.609 8.2993 31.186L8.6133 29.873C8.7913 29.818 9.0093 29.736 9.1873 29.641L10.3493 30.338C10.6913 30.557 11.0743 30.557 11.3883 30.242L12.1813 29.436C12.4553 29.148 12.4963 28.752 12.2633 28.369L11.5803 27.221C11.6893 27.029 11.7443 26.865 11.8123 26.688L13.1253 26.373C13.5493 26.277 13.8083 25.949 13.8083 25.539V24.404C13.8083 24.008 13.5213 23.721 13.1253 23.611L11.8263 23.283C11.7443 23.064 11.6623 22.887 11.5933 22.736L12.3183 21.561C12.5373 21.205 12.4823 20.781 12.2093 20.508L11.3883 19.715C11.1013 19.428 10.6913 19.359 10.3633 19.578L9.1873 20.303C8.9683 20.193 8.7913 20.139 8.6133 20.07L8.2993 18.744C8.1893 18.334 7.8753 18.074 7.4653 18.074H6.3303C5.9203 18.074 5.5783 18.361 5.4963 18.744L5.1953 20.057C4.9633 20.139 4.7713 20.193 4.5803 20.303L3.4183 19.578C3.1033 19.373 2.6933 19.428 2.3923 19.715L1.6133 20.508C1.3403 20.795 1.2443 21.205 1.4633 21.561L2.1873 22.736C2.1323 22.887 2.0373 23.092 1.9683 23.283L0.6563 23.611C0.2593 23.721 0.0003 24.022 0.0003 24.404V25.539C0.0003 25.949 0.2593 26.277 0.6563 26.373L1.9683 26.688C2.0643 26.865 2.1323 27.029 2.2153 27.221L1.5313 28.397C1.3123 28.752 1.3403 29.162 1.6273 29.436L2.3923 30.242C2.6933 30.557 3.0903 30.543 3.4453 30.338L4.6073 29.641C4.8263 29.75 5.0173 29.818 5.1953 29.873L5.4963 31.186C5.5783 31.596 5.9203 31.856 6.3303 31.856ZM6.9043 27.193C5.6463 27.193 4.6753 26.209 4.6753 24.979C4.6753 23.762 5.6463 22.75 6.9043 22.736C8.0933 22.723 9.1193 23.762 9.1193 24.979C9.1193 26.209 8.0933 27.193 6.9043 27.193Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.326171875 32.265625"
          className={className}
        >
          <path
            d="              M5.8786 16.1871C6.3166 16.1191 6.7536 16.0781 7.2056 16.0781C7.6566 16.0781 8.0936 16.1191 8.5586 16.1871V4.6481C8.5586 3.3911 9.2146 2.6801 10.5406 2.6801H16.3656V10.1721C16.3656 12.1271 17.3356 13.0701 19.2776 13.0701H26.6466V24.9511C26.6466 26.2231 25.9766 26.9201 24.6506 26.9201H15.9416C15.7776 27.8771 15.4216 28.7931 14.9296 29.6001H24.8826C27.8086 29.6001 29.3266 28.0551 29.3266 25.1151V12.7151C29.3266 10.8141 29.0806 9.9391 27.8906 8.7361L20.7126 1.4351C19.5646 0.2731 18.6216 0.0001 16.9126 0.0001H10.3226C7.3966 0.0001 5.8786 1.5451 5.8786 4.4841ZM18.7306 9.9121V3.0491L26.2776 10.7191H19.5236C18.9626 10.7191 18.7306 10.4731 18.7306 9.9121ZM6.6176 32.2661H7.8066C8.2716 32.2661 8.6266 31.9781 8.7366 31.5271L9.0506 30.2011C9.2146 30.1461 9.4196 30.0641 9.5836 29.9821L10.7466 30.6931C11.1286 30.9261 11.5666 30.9261 11.9216 30.5701L12.7286 29.7361C13.0566 29.4081 13.0836 28.9711 12.8246 28.5471L12.1406 27.3981C12.2496 27.2211 12.2906 27.0701 12.3596 26.9061L13.6856 26.5781C14.1366 26.4691 14.4376 26.1131 14.4376 25.6621V24.4861C14.4376 24.0351 14.1226 23.6931 13.6856 23.5841L12.3726 23.2561C12.3046 23.0511 12.2226 22.9001 12.1546 22.7641L12.8786 21.5741C13.1246 21.1781 13.0836 20.6991 12.7556 20.3981L11.9216 19.5781C11.5936 19.2501 11.1426 19.1821 10.7596 19.4141L9.5836 20.1521C9.3926 20.0571 9.2146 20.0021 9.0506 19.9471L8.7366 18.5941C8.6266 18.1561 8.2716 17.8551 7.8066 17.8551H6.6176C6.1526 17.8551 5.7836 18.1701 5.6876 18.6071L5.3866 19.9201C5.1676 20.0021 5.0036 20.0571 4.8126 20.1521L3.6506 19.4141C3.2946 19.1951 2.8306 19.2501 2.5016 19.5781L1.6816 20.3981C1.3676 20.7131 1.2856 21.1781 1.5316 21.5741L2.2696 22.7641C2.2016 22.9001 2.1196 23.0781 2.0506 23.2561L0.7386 23.5841C0.2876 23.6931 -0.0004 24.0491 -0.0004 24.4861V25.6621C-0.0004 26.1131 0.2876 26.4691 0.7386 26.5781L2.0646 26.9061C2.1466 27.0701 2.2016 27.2211 2.2836 27.3981L1.5856 28.5601C1.3536 28.9711 1.3806 29.4221 1.6956 29.7361L2.5016 30.5701C2.8306 30.9121 3.2816 30.9261 3.6776 30.6931L4.8536 29.9821C5.0446 30.0921 5.2226 30.1461 5.3866 30.2011L5.6876 31.5271C5.7836 31.9651 6.1526 32.2661 6.6176 32.2661ZM7.2186 27.3301C5.9476 27.3301 4.9626 26.3181 4.9626 25.0601C4.9626 23.8301 5.9476 22.8051 7.2186 22.7911C8.4356 22.7771 9.4886 23.8301 9.4886 25.0601C9.4886 26.3181 8.4356 27.3301 7.2186 27.3301Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.984375 32.01953125"
          className={className}
        >
          <path
            d="              M5.988 16.1873C6.357 16.1463 6.713 16.1193 7.068 16.1193C7.438 16.1193 7.793 16.1463 8.19 16.1873V4.3343C8.19 2.9803 8.914 2.2013 10.336 2.2013H16.42V10.1443C16.42 11.8673 17.281 12.7143 18.99 12.7143H26.783V24.9923C26.783 26.3593 26.059 27.1113 24.637 27.1113H15.6C15.422 27.8903 15.121 28.6423 14.725 29.3123H24.746C27.576 29.3123 28.984 27.8773 28.984 25.0333V12.6193C28.984 10.8553 28.779 10.0893 27.686 8.9683L20.152 1.2983C19.113 0.2323 18.252 0.0003 16.721 0.0003H10.227C7.41 0.0003 5.988 1.4493 5.988 4.2933ZM18.484 9.8843V2.6253L26.359 10.6503H19.236C18.69 10.6503 18.484 10.4313 18.484 9.8843ZM6.494 32.0193H7.67C8.107 32.0193 8.422 31.7733 8.531 31.3363L8.846 29.9963C9.037 29.9413 9.256 29.8453 9.447 29.7503L10.637 30.4613C10.992 30.6933 11.389 30.6933 11.703 30.3653L12.51 29.5453C12.797 29.2303 12.838 28.8473 12.592 28.4513L11.895 27.2613C12.018 27.0843 12.072 26.9063 12.141 26.7153L13.481 26.4003C13.918 26.2913 14.178 25.9633 14.178 25.5393V24.3773C14.178 23.9663 13.891 23.6663 13.481 23.5563L12.154 23.2283C12.072 22.9963 11.977 22.8323 11.908 22.6683L12.647 21.4513C12.865 21.0953 12.838 20.6583 12.537 20.3843L11.703 19.5783C11.402 19.2633 10.992 19.1953 10.65 19.4273L9.447 20.1793C9.229 20.0563 9.037 20.0023 8.846 19.9333L8.531 18.5663C8.422 18.1563 8.107 17.8823 7.67 17.8823H6.494C6.07 17.8823 5.729 18.1703 5.647 18.5663L5.332 19.9203C5.1 20.0023 4.908 20.0563 4.703 20.1793L3.527 19.4273C3.199 19.2093 2.775 19.2633 2.461 19.5783L1.668 20.3843C1.367 20.6723 1.285 21.0953 1.504 21.4513L2.256 22.6683C2.188 22.8323 2.106 23.0233 2.023 23.2283L0.684 23.5563C0.273 23.6663 0 23.9803 0 24.3773V25.5393C0 25.9633 0.273 26.2913 0.684 26.4003L2.037 26.7153C2.119 26.9063 2.188 27.0843 2.27 27.2613L1.572 28.4653C1.354 28.8473 1.381 29.2573 1.682 29.5453L2.461 30.3653C2.775 30.6933 3.186 30.6793 3.541 30.4613L4.744 29.7503C4.963 29.8733 5.154 29.9413 5.332 29.9963L5.647 31.3363C5.729 31.7463 6.07 32.0193 6.494 32.0193ZM7.096 27.2343C5.811 27.2343 4.813 26.2223 4.813 24.9653C4.813 23.7203 5.811 22.6813 7.096 22.6683C8.326 22.6543 9.365 23.7203 9.365 24.9653C9.365 26.2223 8.326 27.2343 7.096 27.2343Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.5859375 32.443359375"
          className={className}
        >
          <path
            d="              M5.7965 16.1738C6.2895 16.0778 6.7945 16.0238 7.3005 16.0238C7.8205 16.0238 8.3265 16.0778 8.8455 16.1738V4.8808C8.8455 3.6918 9.4475 3.0348 10.7055 3.0348H16.3245V10.1858C16.3245 12.3188 17.3635 13.3438 19.4965 13.3438H26.5375V24.9098C26.5375 26.1138 25.9355 26.7558 24.6775 26.7558H16.2015C16.0505 27.8498 15.6545 28.8888 15.0805 29.8048H24.9925C27.9865 29.8048 29.5855 28.1918 29.5855 25.1698V12.7698C29.5855 10.7738 29.3125 9.8168 28.0545 8.5448L21.1365 1.5308C19.9195 0.2868 18.8945 -0.0002 17.0485 -0.0002H10.3905C7.3965 -0.0002 5.7965 1.5998 5.7965 4.6208ZM18.9215 9.9258V3.3768L26.2085 10.7598H19.7555C19.1815 10.7598 18.9215 10.4998 18.9215 9.9258ZM6.7125 32.4438H7.9025C8.3945 32.4438 8.7775 32.1288 8.8865 31.6508L9.2015 30.3518C9.3655 30.2968 9.5425 30.2288 9.6935 30.1468L10.8285 30.8438C11.2385 31.1038 11.7165 31.0898 12.0855 30.7208L12.9065 29.8868C13.2485 29.5308 13.2755 29.0528 13.0155 28.6148L12.3315 27.4808C12.4275 27.3298 12.4685 27.1938 12.5235 27.0298L13.8355 26.7148C14.3285 26.6058 14.6425 26.2228 14.6425 25.7308V24.5548C14.6425 24.0758 14.3145 23.7068 13.8355 23.5838L12.5505 23.2698C12.4825 23.0918 12.4005 22.9418 12.3455 22.8188L13.0565 21.6558C13.3165 21.2328 13.2755 20.7268 12.9335 20.3988L12.0725 19.5778C11.7445 19.2368 11.2515 19.1548 10.8555 19.4138L9.6935 20.1388C9.5155 20.0428 9.3655 20.0018 9.2015 19.9338L8.8865 18.6208C8.7775 18.1428 8.3945 17.8278 7.9025 17.8278H6.7125C6.2205 17.8278 5.8375 18.1558 5.7285 18.6208L5.4275 19.9198C5.2365 19.9888 5.0725 20.0428 4.9085 20.1388L3.7595 19.4138C3.3765 19.1678 2.8845 19.2368 2.5425 19.5778L1.7085 20.3988C1.3675 20.7268 1.2855 21.2328 1.5445 21.6558L2.2695 22.8188C2.2015 22.9418 2.1325 23.1188 2.0645 23.2698L0.7795 23.5838C0.3005 23.7068 -0.0005 24.0898 -0.0005 24.5548V25.7308C-0.0005 26.2228 0.3145 26.6058 0.7795 26.7148L2.0915 27.0298C2.1605 27.1938 2.2145 27.3298 2.2835 27.4808L1.5995 28.6288C1.3395 29.0528 1.3805 29.5448 1.7225 29.8868L2.5295 30.7208C2.8845 31.0758 3.3765 31.1038 3.7875 30.8438L4.9355 30.1468C5.1135 30.2418 5.2775 30.2968 5.4275 30.3518L5.7285 31.6508C5.8375 32.1288 6.2205 32.4438 6.7125 32.4438ZM7.3145 27.3988C6.0565 27.3988 5.0725 26.3868 5.0725 25.1428C5.0725 23.9118 6.0565 22.8868 7.3145 22.8728C8.5315 22.8598 9.5705 23.9118 9.5705 25.1428C9.5705 26.3868 8.5315 27.3988 7.3145 27.3988Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 31.6640625"
          className={className}
        >
          <path
            d="              M6.152 17.1989C6.316 17.1859 6.439 17.1859 6.604 17.1859C6.781 17.1859 6.904 17.1859 7.164 17.2129V3.7189C7.164 2.0099 8.094 1.0119 9.885 1.0119H16.693V9.6249C16.693 10.9789 17.377 11.5799 18.648 11.5799H27.234V25.1839C27.234 26.9609 26.305 27.8909 24.514 27.8909H13.877C13.754 28.2459 13.604 28.5739 13.426 28.9019H24.568C26.975 28.9019 28.246 27.6309 28.246 25.2109V11.8399C28.246 10.7459 28.068 10.2399 27.398 9.5569L18.717 0.8479C18.047 0.1909 17.527 -0.0001 16.475 -0.0001H9.83C7.437 -0.0001 6.152 1.2719 6.152 3.6909ZM17.678 9.5429V1.2579L26.988 10.5959H18.73C17.979 10.5959 17.678 10.2949 17.678 9.5429ZM6.098 31.6639H7.191C7.602 31.6639 7.902 31.4179 7.984 31.0079L8.285 29.7499C8.463 29.6949 8.682 29.6129 8.859 29.5179L9.98 30.1879C10.309 30.4059 10.691 30.4059 10.992 30.1059L11.744 29.3259C12.018 29.0389 12.059 28.6699 11.826 28.2869L11.17 27.1799C11.266 27.0019 11.32 26.8379 11.389 26.6599L12.66 26.3589C13.07 26.2639 13.316 25.9489 13.316 25.5529V24.4589C13.316 24.0759 13.043 23.8029 12.66 23.6929L11.416 23.3789C11.32 23.1599 11.238 22.9959 11.184 22.8459L11.881 21.7109C12.086 21.3689 12.031 20.9589 11.771 20.6989L10.992 19.9339C10.705 19.6469 10.309 19.5919 9.994 19.7969L8.859 20.5079C8.641 20.3989 8.463 20.3439 8.285 20.2749L7.984 18.9899C7.902 18.6069 7.602 18.3339 7.191 18.3339H6.098C5.715 18.3339 5.387 18.6209 5.305 18.9899L5.018 20.2479C4.785 20.3439 4.607 20.3989 4.416 20.5079L3.295 19.7969C2.994 19.5919 2.584 19.6469 2.311 19.9339L1.559 20.6989C1.285 20.9729 1.189 21.3689 1.395 21.7109L2.105 22.8459C2.051 22.9959 1.969 23.1879 1.9 23.3789L0.629 23.6929C0.246 23.8029 0 24.0899 0 24.4589V25.5529C0 25.9489 0.246 26.2639 0.629 26.3589L1.9 26.6599C1.982 26.8379 2.051 27.0019 2.133 27.1799L1.463 28.3149C1.258 28.6699 1.285 29.0529 1.559 29.3259L2.311 30.1059C2.584 30.4059 2.98 30.3929 3.322 30.1879L4.443 29.5179C4.662 29.6269 4.84 29.6949 5.018 29.7499L5.305 31.0079C5.387 31.4039 5.715 31.6639 6.098 31.6639ZM6.658 27.1519C5.441 27.1519 4.512 26.1949 4.512 25.0059C4.512 23.8439 5.441 22.8589 6.658 22.8459C7.807 22.8319 8.805 23.8439 8.805 25.0059C8.805 26.1949 7.807 27.1519 6.658 27.1519Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.02734375 31.5546875"
          className={className}
        >
          <path
            d="              M6.2067 17.4866C6.3027 17.4866 6.3707 17.4866 6.4667 17.4866C6.5897 17.4866 6.6587 17.4866 6.8767 17.5136V3.5406C6.8767 1.7226 7.8617 0.6696 9.7477 0.6696H16.7887V9.4746C16.7887 10.7326 17.4047 11.2386 18.5527 11.2386H27.3577V25.2386C27.3577 27.1246 26.3867 28.1096 24.4867 28.1096H13.3847C13.2887 28.3416 13.1657 28.5606 13.0427 28.7796H24.5277C26.8107 28.7796 28.0277 27.5626 28.0277 25.2656V11.6216C28.0277 10.7056 27.8637 10.2816 27.3167 9.7346L18.2927 0.7246C17.7457 0.1636 17.3227 -0.0004 16.4067 -0.0004H9.7207C7.4647 -0.0004 6.2067 1.2166 6.2067 3.5136ZM17.4587 9.4476V0.8476L27.1797 10.5686H18.5797C17.7737 10.5686 17.4587 10.2536 17.4587 9.4476ZM5.9887 31.5546H7.0547C7.4507 31.5546 7.7517 31.3086 7.8337 30.9126L8.1347 29.6816C8.3127 29.6266 8.5177 29.5316 8.6957 29.4496L9.7887 30.1056C10.1167 30.3246 10.4867 30.3246 10.7867 30.0236L11.5387 29.2576C11.7987 28.9846 11.8257 28.6156 11.6077 28.2466L10.9647 27.1526C11.0607 26.9746 11.1157 26.8106 11.1837 26.6466L12.4277 26.3456C12.8247 26.2636 13.0707 25.9496 13.0707 25.5666V24.4866C13.0707 24.1036 12.8107 23.8436 12.4277 23.7346L11.1977 23.4196C11.1157 23.2146 11.0337 23.0506 10.9787 22.9006L11.6617 21.7796C11.8667 21.4516 11.8127 21.0546 11.5527 20.7946L10.7867 20.0426C10.4997 19.7556 10.1167 19.7146 9.8027 19.9066L8.6957 20.6036C8.4907 20.4946 8.3127 20.4396 8.1347 20.3716L7.8337 19.1136C7.7517 18.7306 7.4507 18.4706 7.0547 18.4706H5.9887C5.6057 18.4706 5.2907 18.7446 5.2087 19.1136L4.9357 20.3576C4.7027 20.4396 4.5257 20.4946 4.3337 20.6036L3.2407 19.9066C2.9397 19.7146 2.5427 19.7556 2.2697 20.0426L1.5317 20.7946C1.2717 21.0686 1.1617 21.4516 1.3807 21.7796L2.0777 22.9006C2.0237 23.0506 1.9277 23.2286 1.8597 23.4196L0.6287 23.7346C0.2457 23.8436 -0.0003 24.1176 -0.0003 24.4866V25.5666C-0.0003 25.9496 0.2457 26.2636 0.6287 26.3456L1.8597 26.6466C1.9547 26.8106 2.0237 26.9746 2.0917 27.1526L1.4497 28.2596C1.2307 28.6156 1.2717 28.9976 1.5317 29.2576L2.2697 30.0236C2.5427 30.3246 2.9257 30.2966 3.2537 30.1056L4.3747 29.4496C4.5797 29.5586 4.7577 29.6266 4.9357 29.6816L5.2087 30.9126C5.2907 31.2946 5.6057 31.5546 5.9887 31.5546ZM6.5347 27.1246C5.3457 27.1246 4.4297 26.1956 4.4297 25.0196C4.4297 23.8716 5.3457 22.9136 6.5347 22.9006C7.6697 22.8726 8.6407 23.8716 8.6407 25.0196C8.6407 26.1956 7.6697 27.1246 6.5347 27.1246Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
