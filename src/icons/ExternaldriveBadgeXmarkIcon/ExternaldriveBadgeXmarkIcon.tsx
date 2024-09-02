import { IconProps } from "../../types"

export default function ExternaldriveBadgeXmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.962890625 28"
          className={className}
        >
          <path
            d="              M15.2719 26.1951H32.3609C36.9139 26.1951 39.9629 23.1871 39.9629 18.6891C39.9629 17.2261 39.5799 15.9411 39.0609 14.8341L34.0569 3.9921C32.8949 1.4631 30.7889 0.0001 27.8089 0.0001H16.3519C13.3709 0.0001 11.2659 1.4631 10.1039 3.9921L6.9319 10.8691C8.1759 10.7601 9.7479 11.0331 11.0469 11.5531L14.1499 4.7991C14.4509 4.1291 15.2029 3.7051 16.0649 3.7051H28.0959C28.9569 3.7051 29.7089 4.1291 30.0099 4.7991L32.9489 11.2111C32.7579 11.1841 32.5529 11.1701 32.0329 11.1701H15.8179C14.2189 11.1701 12.9199 11.4841 11.8669 11.9351C13.4529 12.7831 14.7929 14.0271 15.7229 15.5451H32.3609C34.3029 15.5451 35.5879 16.8031 35.5879 18.6891C35.5879 20.6031 34.3029 21.8201 32.3609 21.8201H17.0489C16.8159 23.4341 16.2009 24.9371 15.2719 26.1951ZM7.4509 28.0001C11.5249 28.0001 14.9019 24.5961 14.9019 20.5351C14.9019 16.4611 11.5389 13.0981 7.4509 13.0981C3.3769 13.0981 -0.0001 16.4611 -0.0001 20.5351C-0.0001 24.5961 3.3769 28.0001 7.4509 28.0001ZM29.9549 18.6891C29.9549 19.8381 30.8849 20.7541 32.0329 20.7541C33.1679 20.7541 34.0979 19.8381 34.0979 18.6891C34.0979 17.5681 33.1539 16.6251 32.0329 16.6251C30.8989 16.6251 29.9549 17.5681 29.9549 18.6891ZM5.8649 24.0901C5.3729 24.5961 4.4569 24.5551 3.9509 24.0621C3.4179 23.5701 3.4179 22.6411 3.9239 22.1481L5.5369 20.5491L3.9509 18.9631C3.4449 18.4431 3.4449 17.5681 3.9509 17.0491C4.4709 16.5161 5.3589 16.5291 5.8649 17.0491L7.4509 18.6351L9.0649 17.0081C9.5839 16.5021 10.4449 16.5291 10.9509 17.0491C11.4709 17.5821 11.5119 18.4301 10.9919 18.9351L9.3789 20.5491L10.9509 22.1211C11.4709 22.6541 11.4709 23.5021 10.9509 24.0211C10.4179 24.5411 9.5569 24.5681 9.0369 24.0351L7.4649 22.4631Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.5546875 26.76953125"
          className={className}
        >
          <path
            d="              M14.8064 24.7731H31.5004C35.6834 24.7731 38.5544 21.9161 38.5544 17.9371C38.5544 16.6801 38.2134 15.5861 37.7894 14.6011L32.9764 3.6501C31.9374 1.2991 29.9554 0.0001 27.2484 0.0001H15.8454C13.1384 0.0001 11.1564 1.2991 10.1174 3.6501L7.1774 10.3361C8.2034 10.2951 9.3794 10.5141 10.4044 10.9101L13.2074 4.3481C13.6174 3.3491 14.5464 2.8161 15.7634 2.8161H27.3304C28.5464 2.8161 29.4764 3.3491 29.8864 4.3481L32.8394 11.2931C32.4294 11.1701 31.9784 11.1011 31.3494 11.1011H14.9294C13.6854 11.1011 12.6054 11.2521 11.6344 11.4841C12.9204 12.1811 14.0134 13.1661 14.8204 14.3831H31.5004C33.7694 14.3831 35.2734 15.8731 35.2734 17.9371C35.2734 20.1521 33.7694 21.4921 31.5004 21.4921H16.1874C15.9684 22.6951 15.4904 23.8031 14.8064 24.7731ZM7.2054 26.7691C11.1154 26.7691 14.3964 23.5021 14.3964 19.5641C14.3964 15.6271 11.1424 12.3731 7.2054 12.3731C3.2544 12.3731 0.0004 15.6271 0.0004 19.5641C0.0004 23.5151 3.2544 26.7691 7.2054 26.7691ZM5.4274 22.9551C5.0044 23.3921 4.2794 23.3381 3.8554 22.9281C3.4184 22.5171 3.3904 21.7791 3.8284 21.3551L5.6324 19.5511L3.9234 17.8281C3.5134 17.4041 3.5004 16.7071 3.9234 16.2831C4.3344 15.8731 5.0454 15.8731 5.4684 16.2831L7.1774 18.0061L8.9964 16.1871C9.4334 15.7501 10.1304 15.8051 10.5544 16.2281C10.9784 16.6661 11.0194 17.3491 10.5954 17.7871L8.7774 19.6051L10.4864 21.3141C10.9104 21.7381 10.9104 22.4221 10.4864 22.8461C10.0624 23.2691 9.3654 23.2691 8.9414 22.8591L7.2324 21.1501ZM29.4354 17.9371C29.4354 18.9901 30.2964 19.8241 31.3364 19.8241C32.3614 19.8241 33.2224 18.9901 33.2224 17.9371C33.2224 16.9261 32.3614 16.0511 31.3364 16.0511C30.3104 16.0511 29.4354 16.9261 29.4354 17.9371Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.306640625 27.412109375"
          className={className}
        >
          <path
            d="              M15.053 25.5253H31.951C36.34 25.5253 39.307 22.5863 39.307 18.3343C39.307 16.9533 38.924 15.7773 38.459 14.7243L33.537 3.8283C32.443 1.3813 30.393 0.0003 27.535 0.0003H16.105C13.248 0.0003 11.211 1.3813 10.104 3.8283L7.041 10.6093C8.189 10.5413 9.57 10.7873 10.746 11.2383L13.699 4.5803C14.055 3.7593 14.889 3.2813 15.914 3.2813H27.727C28.766 3.2813 29.6 3.7593 29.955 4.5803L32.895 11.2383C32.594 11.1703 32.279 11.1293 31.705 11.1293H15.395C13.959 11.1293 12.77 11.3613 11.758 11.7173C13.207 12.4823 14.424 13.6173 15.299 14.9983H31.951C34.057 14.9983 35.438 16.3513 35.438 18.3343C35.438 20.3843 34.057 21.6563 31.951 21.6563H16.639C16.42 23.0783 15.859 24.3903 15.053 25.5253ZM7.328 27.4123C11.334 27.4123 14.656 24.0763 14.656 20.0703C14.656 16.0643 11.348 12.7563 7.328 12.7563C3.309 12.7563 0 16.0643 0 20.0703C0 24.0763 3.309 27.4123 7.328 27.4123ZM5.66 23.5433C5.195 24.0213 4.361 23.9803 3.897 23.5153C3.418 23.0643 3.391 22.2303 3.869 21.7653L5.578 20.0703L3.938 18.4163C3.473 17.9513 3.473 17.1583 3.938 16.6793C4.402 16.2153 5.209 16.2153 5.674 16.6793L7.328 18.3203L9.023 16.6253C9.502 16.1463 10.295 16.1743 10.76 16.6523C11.225 17.1443 11.279 17.9103 10.801 18.3883L9.092 20.0973L10.719 21.7383C11.197 22.2173 11.197 22.9823 10.719 23.4613C10.254 23.9393 9.461 23.9533 8.982 23.4743L7.355 21.8343ZM29.709 18.3343C29.709 19.4273 30.598 20.3023 31.705 20.3023C32.785 20.3023 33.688 19.4273 33.688 18.3343C33.688 17.2543 32.772 16.3513 31.705 16.3513C30.611 16.3513 29.709 17.2543 29.709 18.3343Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.599609375 24.9375"
          className={className}
        >
          <path
            d="              M13.7815 22.7368H30.5975C34.0565 22.7368 36.5995 20.1938 36.5995 16.9528C36.5995 15.9548 36.2985 15.0938 35.9705 14.2868L31.0765 3.0347C30.2285 1.0388 28.5605 -0.0003 26.3455 -0.0003H15.1895C12.9745 -0.0003 11.2925 1.0388 10.4455 3.0347L7.4925 9.7758C8.1075 9.8168 8.7225 9.9398 9.2835 10.1308L12.0725 3.4868C12.6325 2.1597 13.7125 1.4898 15.2035 1.4898H26.3185C27.8085 1.4898 28.8885 2.1597 29.4495 3.4868L32.9355 11.6898C32.2385 11.3618 31.4455 11.1558 30.5975 11.1558H11.3745C12.1135 11.5938 12.7695 12.1678 13.2895 12.8517H30.5975C33.1135 12.8517 34.9175 14.6428 34.9175 16.9528C34.9175 19.4418 33.1135 21.0547 30.5975 21.0547H14.5875C14.3965 21.6568 14.1235 22.2168 13.7815 22.7368ZM6.8085 24.9378C10.4995 24.9378 13.6035 21.8618 13.6035 18.1288C13.6035 14.4098 10.5275 11.3338 6.8085 11.3338C3.0765 11.3338 -0.0005 14.4098 -0.0005 18.1288C-0.0005 21.8748 3.0765 24.9378 6.8085 24.9378ZM4.7035 21.3278C4.4025 21.6288 3.9375 21.6018 3.6365 21.3008C3.3355 20.9998 3.3085 20.5487 3.6235 20.2347L5.7425 18.1018L3.7735 16.1058C3.4995 15.8188 3.4725 15.3668 3.7735 15.0938C4.0605 14.8068 4.5115 14.8208 4.7855 15.0938L6.7815 17.0628L8.9145 14.9438C9.2145 14.6288 9.6795 14.6698 9.9805 14.9708C10.2675 15.2578 10.3085 15.7228 10.0075 16.0367L7.8745 18.1558L9.8575 20.1388C10.1305 20.4398 10.1445 20.8908 9.8575 21.1778C9.5565 21.4648 9.1195 21.4508 8.8185 21.1778L6.8355 19.1958ZM28.9025 16.9528C28.9025 17.8828 29.6545 18.5938 30.5705 18.5938C31.4455 18.5938 32.2105 17.8558 32.2105 16.9528C32.2105 16.0778 31.4455 15.3128 30.5705 15.3128C29.6545 15.3128 28.9025 16.0778 28.9025 16.9528Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.666015625 25.9765625"
          className={className}
        >
          <path
            d="              M14.5198 23.8573H30.9668C34.9038 23.8573 37.6658 21.1093 37.6658 17.4453C37.6658 16.3243 37.3378 15.3533 36.9688 14.4513L32.2788 3.4313C31.3358 1.1893 29.4358 0.0003 26.8928 0.0003H15.5308C12.9878 0.0003 11.0878 1.1893 10.1308 3.4313L7.3418 9.9803C8.2308 9.9943 9.1598 10.1723 9.9938 10.4723L12.6058 4.0473C13.0838 2.8573 14.1368 2.2423 15.5718 2.2423H26.8378C28.2738 2.2423 29.3258 2.8573 29.8048 4.0473L32.7718 11.3343C32.2248 11.1423 31.6098 11.0333 30.9118 11.0333H14.3828C13.3578 11.0333 12.4008 11.0883 11.4848 11.1703C12.5778 11.7713 13.5218 12.6193 14.2458 13.6313H30.9668C33.4418 13.6313 35.0688 15.2583 35.0688 17.4453C35.0688 19.8653 33.4418 21.2593 30.9668 21.2593H15.6408C15.4218 22.2033 15.0388 23.0783 14.5198 23.8573ZM7.0408 25.9763C10.8688 25.9763 14.0818 22.7913 14.0818 18.9353C14.0818 15.0803 10.8968 11.9083 7.0408 11.9083C3.1858 11.9083 -0.0002 15.0933 -0.0002 18.9353C-0.0002 22.8043 3.1858 25.9763 7.0408 25.9763ZM5.1538 22.2303C4.7718 22.6133 4.1698 22.5583 3.8008 22.1893C3.4318 21.8343 3.3768 21.2183 3.7598 20.8363L5.7008 18.9083L3.8968 17.1033C3.5548 16.7343 3.5408 16.1463 3.8968 15.7913C4.2658 15.4493 4.8398 15.4493 5.2088 15.7913L7.0138 17.5953L8.9418 15.6543C9.3378 15.2713 9.9258 15.3263 10.2948 15.6953C10.6638 16.0643 10.7188 16.6523 10.3358 17.0493L8.3948 18.9763L10.1988 20.7813C10.5548 21.1503 10.5548 21.7383 10.1988 22.0803C9.8298 22.4353 9.2558 22.4353 8.8868 22.0803L7.0818 20.2893ZM29.1078 17.4453C29.1078 18.4433 29.9278 19.2093 30.8988 19.2093C31.8558 19.2093 32.6618 18.4293 32.6618 17.4453C32.6618 16.5023 31.8558 15.6813 30.8988 15.6813C29.9278 15.6813 29.1078 16.5023 29.1078 17.4453Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.146484375 25.5390625"
          className={className}
        >
          <path
            d="              M14.3559 23.3375H30.6519C34.4529 23.3375 37.1469 20.6445 37.1469 17.1715C37.1469 16.1195 36.8459 15.2305 36.5039 14.3695L31.8829 3.3085C30.9809 1.1215 29.1209 -0.0005 26.6739 -0.0005H15.3399C12.8929 -0.0005 11.0469 1.1215 10.1449 3.3085L7.4239 9.7755C8.2309 9.8165 9.0239 9.9805 9.7619 10.2405L12.2639 3.8695C12.7829 2.5705 13.9039 1.9145 15.4629 1.9145H26.5649C28.1229 1.9145 29.2439 2.5705 29.7639 3.8695L32.7309 11.3615C32.1019 11.1285 31.4039 11.0055 30.6519 11.0055H11.3889C12.3729 11.5525 13.2349 12.3045 13.9179 13.2065H30.6519C33.2359 13.2065 34.9449 14.9155 34.9449 17.1715C34.9449 19.7015 33.2359 21.1365 30.6519 21.1365H15.3259C15.1079 21.9295 14.7789 22.6675 14.3559 23.3375ZM6.9449 25.5395C10.7049 25.5395 13.8909 22.3805 13.8909 18.5935C13.8909 14.7795 10.7599 11.6485 6.9449 11.6485C3.1449 11.6485 -0.0001 14.7795 -0.0001 18.5935C-0.0001 22.4085 3.1449 25.5395 6.9449 25.5395ZM4.9899 21.8205C4.6349 22.1755 4.1019 22.1215 3.7599 21.7795C3.4179 21.4515 3.3629 20.9175 3.7189 20.5485L5.7289 18.5525L3.8829 16.6935C3.5689 16.3515 3.5549 15.8315 3.8829 15.5175C4.2109 15.2165 4.7309 15.2035 5.0589 15.5175L6.9179 17.3635L8.9139 15.3535C9.2699 14.9985 9.8029 15.0665 10.1449 15.3945C10.4859 15.7365 10.5409 16.2695 10.1859 16.6245L8.1759 18.6345L10.0219 20.4805C10.3359 20.8085 10.3499 21.3415 10.0219 21.6565C9.6939 21.9705 9.1739 21.9705 8.8459 21.6565L6.9999 19.8105ZM28.9299 17.1715C28.9299 18.1285 29.7089 18.8675 30.6389 18.8675C31.5549 18.8675 32.3339 18.1155 32.3339 17.1715C32.3339 16.2555 31.5549 15.4765 30.6389 15.4765C29.7089 15.4765 28.9299 16.2555 28.9299 17.1715Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.03515625 26.33203125"
          className={className}
        >
          <path
            d="              M14.6424 24.2544H31.1854C35.2324 24.2544 38.0354 21.4644 38.0354 17.6644C38.0354 16.4744 37.7074 15.4634 37.3104 14.5194L32.5664 3.5274C31.5824 1.2444 29.6544 0.0004 27.0294 0.0004H15.6544C13.0434 0.0004 11.1014 1.2444 10.1174 3.5274L7.2594 10.1304C8.2164 10.1304 9.2424 10.3224 10.1584 10.6644L12.8514 4.1704C13.3024 3.0764 14.3144 2.4884 15.6404 2.4884H27.0434C28.3824 2.4884 29.3804 3.0764 29.8324 4.1704L32.7984 11.3204C32.2934 11.1564 31.7594 11.0744 31.0894 11.0744H14.6154C13.4944 11.0744 12.4824 11.1704 11.5394 11.3064C12.7144 11.9494 13.7264 12.8654 14.4784 13.9594H31.1854C33.5784 13.9594 35.1504 15.5314 35.1504 17.6644C35.1504 20.0024 33.5784 21.3694 31.1854 21.3694H15.8734C15.6544 22.4224 15.2304 23.3924 14.6424 24.2544ZM7.0954 26.3324C10.9644 26.3324 14.2054 23.0914 14.2054 19.2094C14.2054 15.3264 10.9924 12.1134 7.0954 12.1134C3.2124 12.1134 0.0004 15.3264 0.0004 19.2094C0.0004 23.1194 3.2124 26.3324 7.0954 26.3324ZM5.2634 22.5454C4.8534 22.9554 4.1974 22.9004 3.8144 22.5174C3.4184 22.1344 3.3774 21.4644 3.7734 21.0684L5.6604 19.1954L3.8964 17.4184C3.5274 17.0354 3.5134 16.3924 3.8964 16.0094C4.2794 15.6404 4.9214 15.6404 5.3044 16.0094L7.0824 17.7734L8.9554 15.8864C9.3654 15.4764 10.0074 15.5314 10.3904 15.9274C10.7874 16.3244 10.8414 16.9664 10.4314 17.3634L8.5584 19.2504L10.3084 21.0134C10.6914 21.4104 10.6914 22.0394 10.3084 22.4224C9.9254 22.7914 9.2964 22.8044 8.9004 22.4224L7.1364 20.6714ZM29.2444 17.6644C29.2444 18.6894 30.0784 19.4824 31.0764 19.4824C32.0604 19.4824 32.8944 18.6754 32.8944 17.6644C32.8944 16.6794 32.0604 15.8454 31.0764 15.8454C30.0784 15.8454 29.2444 16.6794 29.2444 17.6644Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.875 24.130859375"
          className={className}
        >
          <path
            d="              M13.0429 21.9436H30.5159C33.5099 21.9436 35.8749 19.5786 35.8749 16.6386C35.8749 15.7366 35.5879 14.9156 35.2599 14.1506L30.0099 2.6526C29.2309 0.9026 27.8089 -0.0004 25.8949 -0.0004H14.9709C13.0569 -0.0004 11.6349 0.9026 10.8559 2.6526L7.5879 9.7756C7.9429 9.8026 8.3129 9.8846 8.6539 9.9806L11.8259 2.9536C12.4279 1.6136 13.4669 0.9296 14.8749 0.9296H26.0039C27.3989 0.9296 28.4379 1.6136 29.0389 2.9536L33.1949 12.1136C32.4299 11.6346 31.4859 11.3476 30.5159 11.3476H11.3609C11.7719 11.6346 12.1409 11.9906 12.4689 12.3726H30.5159C32.9489 12.3726 34.8629 14.2736 34.8629 16.6386C34.8629 19.0856 32.9489 20.9176 30.5159 20.9176H13.5899C13.4399 21.2876 13.2479 21.6156 13.0429 21.9436ZM6.6039 24.1306C10.2129 24.1306 13.2069 21.1506 13.2069 17.5276C13.2069 13.8906 10.2269 10.9236 6.6039 10.9236C2.9939 10.9236 -0.0001 13.9046 -0.0001 17.5276C-0.0001 21.1506 2.9939 24.1306 6.6039 24.1306ZM4.3199 20.6716C4.1019 20.8906 3.7189 20.9046 3.4729 20.6586C3.2269 20.4126 3.2399 20.0566 3.4729 19.8106L5.7699 17.5136L3.6089 15.3266C3.3909 15.0936 3.3499 14.7516 3.6089 14.5056C3.8689 14.2596 4.2109 14.2876 4.4299 14.5056L6.6169 16.6656L8.8999 14.3696C9.1329 14.1366 9.5019 14.1506 9.7479 14.3826C9.9939 14.6156 9.9939 14.9976 9.7619 15.2306L7.4649 17.5276L9.6249 19.6876C9.8579 19.9196 9.8709 20.2616 9.6249 20.5216C9.3789 20.7816 9.0239 20.7536 8.7909 20.5216L6.6309 18.3616ZM28.8609 16.6386C28.8609 17.5546 29.5999 18.2106 30.4609 18.2106C31.2949 18.2106 32.0199 17.4996 32.0199 16.6386C32.0199 15.8186 31.2949 15.0796 30.4609 15.0796C29.5999 15.0796 28.8609 15.8186 28.8609 16.6386Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.4921875 23.720703125"
          className={className}
        >
          <path
            d="              M12.6463 21.5335H30.4613C33.2363 21.5335 35.4923 19.2775 35.4923 16.4885C35.4923 15.6265 35.2193 14.8205 34.8772 14.0955L29.4633 2.4605C28.7113 0.8475 27.4123 -0.0005 25.6623 -0.0005H14.8473C13.0973 -0.0005 11.7993 0.8475 11.0603 2.4605L7.6293 9.7755C7.8613 9.8025 8.0942 9.8575 8.3263 9.8985L11.6893 2.6795C12.3183 1.3395 13.3303 0.6425 14.6833 0.6425H25.8263C27.1793 0.6425 28.1913 1.3395 28.8203 2.6795L33.3183 12.3325C32.5113 11.7855 31.5133 11.4575 30.4613 11.4575H11.3343C11.5803 11.6625 11.8123 11.8945 12.0313 12.1265H30.4613C32.8673 12.1265 34.8222 14.0825 34.8222 16.4885C34.8222 18.8945 32.8673 20.8635 30.4613 20.8635H13.0703C12.9332 21.0955 12.7973 21.3145 12.6463 21.5335ZM6.4943 23.7205C10.0493 23.7205 13.0023 20.7815 13.0023 17.2125C13.0023 13.6445 10.0763 10.7185 6.4943 10.7185C2.9393 10.7185 0.0003 13.6585 0.0003 17.2125C0.0003 20.7815 2.9393 23.7205 6.4943 23.7205ZM4.1152 20.3305C3.9373 20.5215 3.6093 20.5625 3.3773 20.3305C3.1582 20.1115 3.1853 19.7965 3.4043 19.5915L5.7833 17.2125L3.5133 14.9435C3.3363 14.7245 3.2813 14.4375 3.5133 14.2185C3.7603 13.9865 4.0603 14.0275 4.2383 14.2185L6.5213 16.4745L8.8863 14.0955C9.0923 13.8905 9.4063 13.8905 9.6253 14.0955C9.8443 14.3005 9.8303 14.6285 9.6253 14.8335L7.2463 17.2125L9.5023 19.4555C9.7073 19.6605 9.7343 19.9475 9.5023 20.1935C9.2832 20.4395 8.9692 20.3985 8.7633 20.1935L6.5213 17.9375ZM28.8343 16.4885C28.8343 17.3765 29.5453 18.0195 30.4063 18.0195C31.1993 18.0195 31.9243 17.3355 31.9243 16.4885C31.9243 15.6955 31.1993 14.9575 30.4063 14.9575C29.5453 14.9575 28.8343 15.6955 28.8343 16.4885Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}