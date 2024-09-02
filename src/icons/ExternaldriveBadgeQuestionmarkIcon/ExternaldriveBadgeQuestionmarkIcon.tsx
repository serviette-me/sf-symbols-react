import { IconProps } from "../../types"

export default function ExternaldriveBadgeQuestionmarkIconIcon({
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
            d="              M15.2719 26.1951H32.3609C36.9139 26.1951 39.9629 23.1871 39.9629 18.6891C39.9629 17.2261 39.5799 15.9411 39.0609 14.8341L34.0569 3.9921C32.8949 1.4631 30.7889 0.0001 27.8089 0.0001H16.3519C13.3709 0.0001 11.2659 1.4631 10.1039 3.9921L6.9319 10.8691C8.1759 10.7601 9.7479 11.0331 11.0469 11.5531L14.1499 4.7991C14.4509 4.1291 15.2029 3.7051 16.0649 3.7051H28.0959C28.9569 3.7051 29.7089 4.1291 30.0099 4.7991L32.9489 11.2111C32.7579 11.1841 32.5529 11.1701 32.0329 11.1701H15.8179C14.2189 11.1701 12.9199 11.4841 11.8669 11.9351C13.4529 12.7831 14.7929 14.0271 15.7229 15.5451H32.3609C34.3029 15.5451 35.5879 16.8031 35.5879 18.6891C35.5879 20.6031 34.3029 21.8201 32.3609 21.8201H17.0489C16.8159 23.4341 16.2009 24.9371 15.2719 26.1951ZM7.4509 28.0001C11.5249 28.0001 14.9019 24.5961 14.9019 20.5351C14.9019 16.4611 11.5389 13.0981 7.4509 13.0981C3.3769 13.0981 -0.0001 16.4611 -0.0001 20.5351C-0.0001 24.5961 3.3769 28.0001 7.4509 28.0001ZM7.0819 22.1891C6.3159 22.1891 5.6059 21.8071 5.6059 21.0821V21.0141C5.6059 20.4391 6.0289 20.0161 6.6859 19.5511C7.3829 19.0721 7.7789 18.7851 7.7789 18.4431C7.7789 18.1841 7.6019 18.0061 7.3279 18.0061C7.0679 18.0061 6.8769 18.1151 6.5759 18.3891C6.3709 18.5941 6.0429 18.8671 5.4139 18.8671C4.4569 18.8671 3.9919 18.3071 3.9919 17.6911C3.9919 16.2971 5.7829 15.4761 7.5059 15.4761C9.5699 15.4761 11.0879 16.6661 11.0879 18.2661C11.0879 19.6051 10.1169 19.9341 9.3649 20.4391C9.0509 20.6581 8.7769 20.8911 8.6269 21.2461C8.3669 21.8891 7.7249 22.1891 7.0819 22.1891ZM29.9549 18.6891C29.9549 19.8381 30.8849 20.7541 32.0329 20.7541C33.1679 20.7541 34.0979 19.8381 34.0979 18.6891C34.0979 17.5681 33.1539 16.6251 32.0329 16.6251C30.8989 16.6251 29.9549 17.5681 29.9549 18.6891ZM7.0409 25.4841C6.1659 25.4841 5.4959 24.9921 5.4959 24.1441C5.4959 23.3381 6.1659 22.8321 7.0409 22.8321C7.9569 22.8321 8.5859 23.3381 8.5859 24.1441C8.5859 24.9921 7.9569 25.4841 7.0409 25.4841Z"
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
            d="              M14.8064 24.7731H31.5004C35.6834 24.7731 38.5544 21.9161 38.5544 17.9371C38.5544 16.6801 38.2134 15.5861 37.7894 14.6011L32.9764 3.6501C31.9374 1.2991 29.9554 0.0001 27.2484 0.0001H15.8454C13.1384 0.0001 11.1564 1.2991 10.1174 3.6501L7.1774 10.3361C8.2034 10.2951 9.3794 10.5141 10.4044 10.9101L13.2074 4.3481C13.6174 3.3491 14.5464 2.8161 15.7634 2.8161H27.3304C28.5464 2.8161 29.4764 3.3491 29.8864 4.3481L32.8394 11.2931C32.4294 11.1701 31.9784 11.1011 31.3494 11.1011H14.9294C13.6854 11.1011 12.6054 11.2521 11.6344 11.4841C12.9204 12.1811 14.0134 13.1661 14.8204 14.3831H31.5004C33.7694 14.3831 35.2734 15.8731 35.2734 17.9371C35.2734 20.1521 33.7694 21.4921 31.5004 21.4921H16.1874C15.9684 22.6951 15.4904 23.8031 14.8064 24.7731ZM7.2054 26.7691C11.1154 26.7691 14.3964 23.5021 14.3964 19.5641C14.3964 15.6271 11.1424 12.3731 7.2054 12.3731C3.2544 12.3731 0.0004 15.6271 0.0004 19.5641C0.0004 23.5151 3.2544 26.7691 7.2054 26.7691ZM6.9454 21.2601C6.3434 21.2601 5.8384 20.9311 5.8384 20.3301V20.2751C5.8384 19.5641 6.2894 19.1401 6.9184 18.6891C7.6424 18.2111 8.0524 17.9241 8.0524 17.4311C8.0524 17.0211 7.7244 16.7341 7.2324 16.7341C6.7954 16.7341 6.5074 16.9391 6.2074 17.2261C5.9614 17.4591 5.7144 17.7321 5.2094 17.7321C4.5114 17.7321 4.1424 17.3081 4.1424 16.7891C4.1424 15.5581 5.7284 14.7791 7.3144 14.7791C9.2014 14.7791 10.5134 15.8461 10.5134 17.3081C10.5134 18.5121 9.6934 18.8941 8.9274 19.4411C8.4904 19.7561 8.2164 20.0021 8.1214 20.4531C7.9574 20.9861 7.5194 21.2601 6.9454 21.2601ZM29.4354 17.9371C29.4354 18.9901 30.2964 19.8241 31.3364 19.8241C32.3614 19.8241 33.2224 18.9901 33.2224 17.9371C33.2224 16.9261 32.3614 16.0511 31.3364 16.0511C30.3104 16.0511 29.4354 16.9261 29.4354 17.9371ZM6.9314 24.2671C6.2074 24.2671 5.6464 23.7891 5.6464 23.0781C5.6464 22.3811 6.2204 21.9021 6.9314 21.9021C7.6834 21.9021 8.2304 22.3941 8.2304 23.0781C8.2164 23.7891 7.6834 24.2671 6.9314 24.2671Z"
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
            d="              M15.053 25.5253H31.951C36.34 25.5253 39.307 22.5863 39.307 18.3343C39.307 16.9533 38.924 15.7773 38.459 14.7243L33.537 3.8283C32.443 1.3813 30.393 0.0003 27.535 0.0003H16.105C13.248 0.0003 11.211 1.3813 10.104 3.8283L7.041 10.6093C8.189 10.5413 9.57 10.7873 10.746 11.2383L13.699 4.5803C14.055 3.7593 14.889 3.2813 15.914 3.2813H27.727C28.766 3.2813 29.6 3.7593 29.955 4.5803L32.895 11.2383C32.594 11.1703 32.279 11.1293 31.705 11.1293H15.395C13.959 11.1293 12.77 11.3613 11.758 11.7173C13.207 12.4823 14.424 13.6173 15.299 14.9983H31.951C34.057 14.9983 35.438 16.3513 35.438 18.3343C35.438 20.3843 34.057 21.6563 31.951 21.6563H16.639C16.42 23.0783 15.859 24.3903 15.053 25.5253ZM7.328 27.4123C11.334 27.4123 14.656 24.0763 14.656 20.0703C14.656 16.0643 11.348 12.7563 7.328 12.7563C3.309 12.7563 0 16.0643 0 20.0703C0 24.0763 3.309 27.4123 7.328 27.4123ZM7.014 21.7383C6.316 21.7383 5.715 21.3833 5.715 20.7263V20.6583C5.715 20.0293 6.152 19.5923 6.795 19.1403C7.506 18.6623 7.902 18.3753 7.902 17.9653C7.902 17.6233 7.656 17.4043 7.273 17.4043C6.932 17.4043 6.699 17.5543 6.398 17.8283C6.18 18.0473 5.879 18.3203 5.318 18.3203C4.471 18.3203 4.061 17.8283 4.061 17.2673C4.061 15.9413 5.756 15.1483 7.41 15.1483C9.393 15.1483 10.814 16.2693 10.814 17.8143C10.814 19.0863 9.912 19.4413 9.147 19.9613C8.777 20.2203 8.504 20.4673 8.381 20.8633C8.176 21.4653 7.629 21.7383 7.014 21.7383ZM29.709 18.3343C29.709 19.4273 30.598 20.3023 31.705 20.3023C32.785 20.3023 33.688 19.4273 33.688 18.3343C33.688 17.2543 32.772 16.3513 31.705 16.3513C30.611 16.3513 29.709 17.2543 29.709 18.3343ZM6.986 24.8963C6.18 24.8963 5.564 24.4183 5.564 23.6383C5.564 22.8733 6.18 22.3813 6.986 22.3813C7.82 22.3813 8.408 22.8863 8.408 23.6383C8.408 24.4183 7.82 24.8963 6.986 24.8963Z"
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
            d="              M13.7815 22.7368H30.5975C34.0565 22.7368 36.5995 20.1938 36.5995 16.9528C36.5995 15.9548 36.2985 15.0938 35.9705 14.2868L31.0765 3.0347C30.2285 1.0388 28.5605 -0.0003 26.3455 -0.0003H15.1895C12.9745 -0.0003 11.2925 1.0388 10.4455 3.0347L7.4925 9.7758C8.1075 9.8168 8.7225 9.9398 9.2835 10.1308L12.0725 3.4868C12.6325 2.1597 13.7125 1.4898 15.2035 1.4898H26.3185C27.8085 1.4898 28.8885 2.1597 29.4495 3.4868L32.9355 11.6898C32.2385 11.3618 31.4455 11.1558 30.5975 11.1558H11.3745C12.1135 11.5938 12.7695 12.1678 13.2895 12.8517H30.5975C33.1135 12.8517 34.9175 14.6428 34.9175 16.9528C34.9175 19.4418 33.1135 21.0547 30.5975 21.0547H14.5875C14.3965 21.6568 14.1235 22.2168 13.7815 22.7368ZM6.8085 24.9378C10.4995 24.9378 13.6035 21.8618 13.6035 18.1288C13.6035 14.4098 10.5275 11.3338 6.8085 11.3338C3.0765 11.3338 -0.0005 14.4098 -0.0005 18.1288C-0.0005 21.8748 3.0765 24.9378 6.8085 24.9378ZM6.6855 19.7968C6.2755 19.7968 6.0155 19.5508 6.0155 19.1408V19.0728C6.0155 18.3068 6.4125 17.8828 7.0545 17.4318C7.7925 16.9258 8.2715 16.6248 8.2715 15.9418C8.2715 15.3398 7.7515 14.9438 6.9865 14.9438C6.3305 14.9438 5.8785 15.2438 5.5915 15.5728C5.3595 15.8318 5.1955 16.0648 4.8265 16.0648C4.4565 16.0648 4.2105 15.8188 4.2105 15.4488C4.2105 14.4918 5.5235 13.6858 6.9725 13.6858C8.6265 13.6858 9.6795 14.6428 9.6795 15.8868C9.6795 16.9117 9.0915 17.3358 8.3125 17.9098C7.6835 18.3748 7.4235 18.6488 7.3695 19.1958C7.3415 19.5648 7.1235 19.7968 6.6855 19.7968ZM28.9025 16.9528C28.9025 17.8828 29.6545 18.5938 30.5705 18.5938C31.4455 18.5938 32.2105 17.8558 32.2105 16.9528C32.2105 16.0778 31.4455 15.3128 30.5705 15.3128C29.6545 15.3128 28.9025 16.0778 28.9025 16.9528ZM6.6855 22.4488C6.1525 22.4488 5.7285 22.0118 5.7285 21.4788C5.7285 20.9458 6.1655 20.5078 6.6855 20.5078C7.2325 20.5078 7.6695 20.9587 7.6565 21.4788C7.6565 22.0118 7.2185 22.4488 6.6855 22.4488Z"
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
            d="              M14.5198 23.8573H30.9668C34.9038 23.8573 37.6658 21.1093 37.6658 17.4453C37.6658 16.3243 37.3378 15.3533 36.9688 14.4513L32.2788 3.4313C31.3358 1.1893 29.4358 0.0003 26.8928 0.0003H15.5308C12.9878 0.0003 11.0878 1.1893 10.1308 3.4313L7.3418 9.9803C8.2308 9.9943 9.1598 10.1723 9.9938 10.4723L12.6058 4.0473C13.0838 2.8573 14.1368 2.2423 15.5718 2.2423H26.8378C28.2738 2.2423 29.3258 2.8573 29.8048 4.0473L32.7718 11.3343C32.2248 11.1423 31.6098 11.0333 30.9118 11.0333H14.3828C13.3578 11.0333 12.4008 11.0883 11.4848 11.1703C12.5778 11.7713 13.5218 12.6193 14.2458 13.6313H30.9668C33.4418 13.6313 35.0688 15.2583 35.0688 17.4453C35.0688 19.8653 33.4418 21.2593 30.9668 21.2593H15.6408C15.4218 22.2033 15.0388 23.0783 14.5198 23.8573ZM7.0408 25.9763C10.8688 25.9763 14.0818 22.7913 14.0818 18.9353C14.0818 15.0803 10.8968 11.9083 7.0408 11.9083C3.1858 11.9083 -0.0002 15.0933 -0.0002 18.9353C-0.0002 22.8043 3.1858 25.9763 7.0408 25.9763ZM6.8768 20.6583C6.3578 20.6583 6.0018 20.3573 6.0018 19.8513V19.7973C6.0018 19.0043 6.4668 18.5663 7.0818 18.1293C7.8068 17.6363 8.2308 17.3493 8.2308 16.7753C8.2308 16.2693 7.8068 15.9143 7.1778 15.9143C6.6168 15.9143 6.2618 16.1603 5.9608 16.4743C5.7148 16.7343 5.4958 16.9943 5.0718 16.9943C4.5528 16.9943 4.2378 16.6523 4.2378 16.2013C4.2378 15.0933 5.7008 14.3143 7.2048 14.3143C8.9688 14.3143 10.1448 15.3123 10.1448 16.6793C10.1448 17.8003 9.4338 18.2243 8.6538 18.7993C8.1348 19.1813 7.8618 19.4273 7.7928 19.9473C7.7108 20.3983 7.3968 20.6583 6.8768 20.6583ZM29.1078 17.4453C29.1078 18.4433 29.9278 19.2093 30.8988 19.2093C31.8558 19.2093 32.6618 18.4293 32.6618 17.4453C32.6618 16.5023 31.8558 15.6813 30.8988 15.6813C29.9278 15.6813 29.1078 16.5023 29.1078 17.4453ZM6.8768 23.4743C6.2478 23.4743 5.7558 22.9963 5.7558 22.3813C5.7558 21.7653 6.2478 21.3003 6.8768 21.3003C7.5058 21.3003 7.9978 21.7793 7.9978 22.3813C7.9978 22.9963 7.5058 23.4743 6.8768 23.4743Z"
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
            d="              M14.3559 23.3375H30.6519C34.4529 23.3375 37.1469 20.6445 37.1469 17.1715C37.1469 16.1195 36.8459 15.2305 36.5039 14.3695L31.8829 3.3085C30.9809 1.1215 29.1209 -0.0005 26.6739 -0.0005H15.3399C12.8929 -0.0005 11.0469 1.1215 10.1449 3.3085L7.4239 9.7755C8.2309 9.8165 9.0239 9.9805 9.7619 10.2405L12.2639 3.8695C12.7829 2.5705 13.9039 1.9145 15.4629 1.9145H26.5649C28.1229 1.9145 29.2439 2.5705 29.7639 3.8695L32.7309 11.3615C32.1019 11.1285 31.4039 11.0055 30.6519 11.0055H11.3889C12.3729 11.5525 13.2349 12.3045 13.9179 13.2065H30.6519C33.2359 13.2065 34.9449 14.9155 34.9449 17.1715C34.9449 19.7015 33.2359 21.1365 30.6519 21.1365H15.3259C15.1079 21.9295 14.7789 22.6675 14.3559 23.3375ZM6.9449 25.5395C10.7049 25.5395 13.8909 22.3805 13.8909 18.5935C13.8909 14.7795 10.7599 11.6485 6.9449 11.6485C3.1449 11.6485 -0.0001 14.7795 -0.0001 18.5935C-0.0001 22.4085 3.1449 25.5395 6.9449 25.5395ZM6.8219 20.3165C6.3579 20.3165 6.0839 20.0425 6.0839 19.5785V19.5375C6.0839 18.6895 6.5489 18.2515 7.1639 17.8285C7.8889 17.3225 8.3129 17.0355 8.3129 16.4195C8.3129 15.8455 7.8479 15.4625 7.1369 15.4625C6.5079 15.4625 6.1249 15.7365 5.8239 16.0505C5.5649 16.3245 5.3729 16.5705 4.9899 16.5705C4.5669 16.5705 4.2789 16.2965 4.2789 15.8735C4.2789 14.8205 5.6879 14.0545 7.1369 14.0545C8.8189 14.0545 9.9259 15.0115 9.9259 16.3375C9.9259 17.4045 9.2829 17.8555 8.4899 18.4295C7.9299 18.8535 7.6559 19.0995 7.6019 19.6605C7.5469 20.0705 7.3149 20.3165 6.8219 20.3165ZM28.9299 17.1715C28.9299 18.1285 29.7089 18.8675 30.6389 18.8675C31.5549 18.8675 32.3339 18.1155 32.3339 17.1715C32.3339 16.2555 31.5549 15.4765 30.6389 15.4765C29.7089 15.4765 28.9299 16.2555 28.9299 17.1715ZM6.8219 23.0235C6.2619 23.0235 5.7969 22.5585 5.7969 21.9985C5.7969 21.4235 6.2619 20.9585 6.8219 20.9585C7.4099 20.9585 7.8609 21.4375 7.8609 21.9985C7.8609 22.5585 7.4099 23.0235 6.8219 23.0235Z"
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
            d="              M14.6424 24.2544H31.1854C35.2324 24.2544 38.0354 21.4644 38.0354 17.6644C38.0354 16.4744 37.7074 15.4634 37.3104 14.5194L32.5664 3.5274C31.5824 1.2444 29.6544 0.0004 27.0294 0.0004H15.6544C13.0434 0.0004 11.1014 1.2444 10.1174 3.5274L7.2594 10.1304C8.2164 10.1304 9.2424 10.3224 10.1584 10.6644L12.8514 4.1704C13.3024 3.0764 14.3144 2.4884 15.6404 2.4884H27.0434C28.3824 2.4884 29.3804 3.0764 29.8324 4.1704L32.7984 11.3204C32.2934 11.1564 31.7594 11.0744 31.0894 11.0744H14.6154C13.4944 11.0744 12.4824 11.1704 11.5394 11.3064C12.7144 11.9494 13.7264 12.8654 14.4784 13.9594H31.1854C33.5784 13.9594 35.1504 15.5314 35.1504 17.6644C35.1504 20.0024 33.5784 21.3694 31.1854 21.3694H15.8734C15.6544 22.4224 15.2304 23.3924 14.6424 24.2544ZM7.0954 26.3324C10.9644 26.3324 14.2054 23.0914 14.2054 19.2094C14.2054 15.3264 10.9924 12.1134 7.0954 12.1134C3.2124 12.1134 0.0004 15.3264 0.0004 19.2094C0.0004 23.1194 3.2124 26.3324 7.0954 26.3324ZM6.9044 20.9184C6.3434 20.9184 5.9194 20.6174 5.9194 20.0704V20.0154C5.9194 19.2504 6.3844 18.8124 7.0004 18.3754C7.7244 17.8824 8.1484 17.5954 8.1484 17.0764C8.1484 16.5974 7.7654 16.2834 7.1914 16.2834C6.6854 16.2834 6.3574 16.5024 6.0564 16.8024C5.8104 17.0484 5.5784 17.3084 5.1274 17.3084C4.5254 17.3084 4.1834 16.9394 4.1834 16.4614C4.1834 15.2984 5.7014 14.5194 7.2464 14.5194C9.0504 14.5194 10.2944 15.5454 10.2944 16.9534C10.2944 18.1154 9.5434 18.5254 8.7634 19.0864C8.2714 19.4274 7.9984 19.6874 7.9164 20.1664C7.8064 20.6584 7.4374 20.9184 6.9044 20.9184ZM29.2444 17.6644C29.2444 18.6894 30.0784 19.4824 31.0764 19.4824C32.0604 19.4824 32.8944 18.6754 32.8944 17.6644C32.8944 16.6794 32.0604 15.8454 31.0764 15.8454C30.0784 15.8454 29.2444 16.6794 29.2444 17.6644ZM6.8904 23.8164C6.2204 23.8164 5.7014 23.3384 5.7014 22.6814C5.7014 22.0394 6.2204 21.5604 6.8904 21.5604C7.5744 21.5604 8.0934 22.0394 8.0804 22.6814C8.0804 23.3384 7.5744 23.8164 6.8904 23.8164Z"
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
            d="              M13.0429 21.9436H30.5159C33.5099 21.9436 35.8749 19.5786 35.8749 16.6386C35.8749 15.7366 35.5879 14.9156 35.2599 14.1506L30.0099 2.6526C29.2309 0.9026 27.8089 -0.0004 25.8949 -0.0004H14.9709C13.0569 -0.0004 11.6349 0.9026 10.8559 2.6526L7.5879 9.7756C7.9429 9.8026 8.3129 9.8846 8.6539 9.9806L11.8259 2.9536C12.4279 1.6136 13.4669 0.9296 14.8749 0.9296H26.0039C27.3989 0.9296 28.4379 1.6136 29.0389 2.9536L33.1949 12.1136C32.4299 11.6346 31.4859 11.3476 30.5159 11.3476H11.3609C11.7719 11.6346 12.1409 11.9906 12.4689 12.3726H30.5159C32.9489 12.3726 34.8629 14.2736 34.8629 16.6386C34.8629 19.0856 32.9489 20.9176 30.5159 20.9176H13.5899C13.4399 21.2876 13.2479 21.6156 13.0429 21.9436ZM6.6039 24.1306C10.2129 24.1306 13.2069 21.1506 13.2069 17.5276C13.2069 13.8906 10.2269 10.9236 6.6039 10.9236C2.9939 10.9236 -0.0001 13.9046 -0.0001 17.5276C-0.0001 21.1506 2.9939 24.1306 6.6039 24.1306ZM6.4939 19.0996C6.1519 19.0996 5.9339 18.8946 5.9339 18.5386V18.4706C5.9339 17.7876 6.2339 17.3906 6.9319 16.9126C7.6559 16.4066 8.2029 16.0646 8.2029 15.3126C8.2029 14.6566 7.6429 14.2326 6.7809 14.2326C6.0699 14.2326 5.5369 14.5876 5.2639 14.9156C5.0719 15.1626 4.9359 15.3946 4.6079 15.3946C4.3199 15.3946 4.1149 15.1896 4.1149 14.8746C4.1149 14.0546 5.3179 13.1656 6.7679 13.1656C8.3669 13.1656 9.3379 14.1506 9.3379 15.2716C9.3379 16.2426 8.8319 16.6386 8.0529 17.2126C7.3559 17.7456 7.1229 18.0196 7.0679 18.5936C7.0549 18.8946 6.8499 19.0996 6.4939 19.0996ZM28.8609 16.6386C28.8609 17.5546 29.5999 18.2106 30.4609 18.2106C31.2949 18.2106 32.0199 17.4996 32.0199 16.6386C32.0199 15.8186 31.2949 15.0796 30.4609 15.0796C29.5999 15.0796 28.8609 15.8186 28.8609 16.6386ZM6.4939 21.6696C6.0019 21.6696 5.6189 21.2596 5.6189 20.7676C5.6189 20.3026 6.0159 19.8926 6.4939 19.8926C6.9859 19.8926 7.4099 20.3166 7.3969 20.7676C7.3829 21.2596 6.9729 21.6696 6.4939 21.6696Z"
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
            d="              M12.6463 21.5335H30.4613C33.2363 21.5335 35.4923 19.2775 35.4923 16.4885C35.4923 15.6265 35.2193 14.8205 34.8772 14.0955L29.4633 2.4605C28.7113 0.8475 27.4123 -0.0005 25.6623 -0.0005H14.8473C13.0973 -0.0005 11.7993 0.8475 11.0603 2.4605L7.6293 9.7755C7.8613 9.8025 8.0942 9.8575 8.3263 9.8985L11.6893 2.6795C12.3183 1.3395 13.3303 0.6425 14.6833 0.6425H25.8263C27.1793 0.6425 28.1913 1.3395 28.8203 2.6795L33.3183 12.3325C32.5113 11.7855 31.5133 11.4575 30.4613 11.4575H11.3343C11.5803 11.6625 11.8123 11.8945 12.0313 12.1265H30.4613C32.8673 12.1265 34.8222 14.0825 34.8222 16.4885C34.8222 18.8945 32.8673 20.8635 30.4613 20.8635H13.0703C12.9332 21.0955 12.7973 21.3145 12.6463 21.5335ZM6.4943 23.7205C10.0493 23.7205 13.0023 20.7815 13.0023 17.2125C13.0023 13.6445 10.0763 10.7185 6.4943 10.7185C2.9393 10.7185 0.0003 13.6585 0.0003 17.2125C0.0003 20.7815 2.9393 23.7205 6.4943 23.7205ZM6.3983 18.7445C6.0843 18.7445 5.8793 18.5525 5.8793 18.2385V18.1565C5.8793 17.5275 6.1383 17.1445 6.8493 16.6385C7.5883 16.1325 8.1623 15.7905 8.1623 14.9985C8.1623 14.3145 7.5603 13.8765 6.6723 13.8765C5.9333 13.8765 5.3592 14.2595 5.0992 14.5875C4.9223 14.8205 4.7993 15.0525 4.4842 15.0525C4.2383 15.0525 4.0603 14.8745 4.0603 14.5745C4.0603 13.8355 5.2093 12.9065 6.6583 12.9065C8.2173 12.9065 9.1603 13.9045 9.1603 14.9575C9.1603 15.9005 8.6953 16.2835 7.9163 16.8575C7.1773 17.4175 6.9593 17.7055 6.9183 18.2795C6.8903 18.5525 6.6993 18.7445 6.3983 18.7445ZM28.8343 16.4885C28.8343 17.3765 29.5453 18.0195 30.4063 18.0195C31.1993 18.0195 31.9243 17.3355 31.9243 16.4885C31.9243 15.6955 31.1993 14.9575 30.4063 14.9575C29.5453 14.9575 28.8343 15.6955 28.8343 16.4885ZM6.3983 21.2735C5.9203 21.2735 5.5643 20.8905 5.5643 20.4255C5.5643 19.9745 5.9473 19.5915 6.3983 19.5915C6.8633 19.5915 7.2603 19.9885 7.2463 20.4255C7.2323 20.8905 6.8493 21.2735 6.3983 21.2735Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}