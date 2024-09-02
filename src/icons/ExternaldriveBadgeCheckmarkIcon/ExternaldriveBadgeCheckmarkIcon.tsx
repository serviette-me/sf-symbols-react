import { IconProps } from "../../types"

export default function ExternaldriveBadgeCheckmarkIconIcon({
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
            d="              M15.2719 26.1951H32.3609C36.9139 26.1951 39.9629 23.1871 39.9629 18.6891C39.9629 17.2261 39.5799 15.9411 39.0609 14.8341L34.0569 3.9921C32.8949 1.4631 30.7889 0.0001 27.8089 0.0001H16.3519C13.3709 0.0001 11.2659 1.4631 10.1039 3.9921L6.9319 10.8691C8.1759 10.7601 9.7479 11.0331 11.0469 11.5531L14.1499 4.7991C14.4509 4.1291 15.2029 3.7051 16.0649 3.7051H28.0959C28.9569 3.7051 29.7089 4.1291 30.0099 4.7991L32.9489 11.2111C32.7579 11.1841 32.5529 11.1701 32.0329 11.1701H15.8179C14.2189 11.1701 12.9199 11.4841 11.8669 11.9351C13.4529 12.7831 14.7929 14.0271 15.7229 15.5451H32.3609C34.3029 15.5451 35.5879 16.8031 35.5879 18.6891C35.5879 20.6031 34.3029 21.8201 32.3609 21.8201H17.0489C16.8159 23.4341 16.2009 24.9371 15.2719 26.1951ZM7.4509 28.0001C11.5249 28.0001 14.9019 24.5961 14.9019 20.5351C14.9019 16.4611 11.5389 13.0981 7.4509 13.0981C3.3769 13.0981 -0.0001 16.4611 -0.0001 20.5351C-0.0001 24.5961 3.3769 28.0001 7.4509 28.0001ZM29.9549 18.6891C29.9549 19.8381 30.8849 20.7541 32.0329 20.7541C33.1679 20.7541 34.0979 19.8381 34.0979 18.6891C34.0979 17.5681 33.1539 16.6251 32.0329 16.6251C30.8989 16.6251 29.9549 17.5681 29.9549 18.6891ZM6.8219 24.6641C6.3989 24.6641 5.9199 24.5551 5.6189 24.2261L3.4319 21.8751C3.1579 21.5741 2.9259 21.2191 2.9259 20.7951C2.9259 19.7831 3.7189 19.2911 4.4569 19.2911C4.8809 19.2911 5.2639 19.4001 5.5239 19.7151L6.6719 21.0821L9.4199 17.3221C9.7209 16.8981 10.1719 16.6661 10.6639 16.6661C11.5119 16.6661 12.1679 17.3361 12.1679 18.1701C12.1679 18.4161 12.0999 18.7441 11.9079 18.9761L8.0249 24.1171C7.7659 24.4591 7.3009 24.6641 6.8219 24.6641Z"
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
            d="              M14.8064 24.7731H31.5004C35.6834 24.7731 38.5544 21.9161 38.5544 17.9371C38.5544 16.6801 38.2134 15.5861 37.7894 14.6011L32.9764 3.6501C31.9374 1.2991 29.9554 0.0001 27.2484 0.0001H15.8454C13.1384 0.0001 11.1564 1.2991 10.1174 3.6501L7.1774 10.3361C8.2034 10.2951 9.3794 10.5141 10.4044 10.9101L13.2074 4.3481C13.6174 3.3491 14.5464 2.8161 15.7634 2.8161H27.3304C28.5464 2.8161 29.4764 3.3491 29.8864 4.3481L32.8394 11.2931C32.4294 11.1701 31.9784 11.1011 31.3494 11.1011H14.9294C13.6854 11.1011 12.6054 11.2521 11.6344 11.4841C12.9204 12.1811 14.0134 13.1661 14.8204 14.3831H31.5004C33.7694 14.3831 35.2734 15.8731 35.2734 17.9371C35.2734 20.1521 33.7694 21.4921 31.5004 21.4921H16.1874C15.9684 22.6951 15.4904 23.8031 14.8064 24.7731ZM7.2054 26.7691C11.1154 26.7691 14.3964 23.5021 14.3964 19.5641C14.3964 15.6271 11.1424 12.3731 7.2054 12.3731C3.2544 12.3731 0.0004 15.6271 0.0004 19.5641C0.0004 23.5151 3.2544 26.7691 7.2054 26.7691ZM6.4664 23.5021C6.1384 23.5021 5.7694 23.4061 5.5234 23.1331L3.2674 20.6991C3.0624 20.4531 2.9124 20.1521 2.9124 19.8511C2.9124 19.0991 3.4864 18.6621 4.1014 18.6621C4.4574 18.6621 4.7574 18.7851 4.9634 19.0311L6.3714 20.6171L9.4204 16.4201C9.6384 16.1051 9.9944 15.9001 10.4044 15.9001C11.0464 15.9001 11.5804 16.4201 11.5804 17.0761C11.5804 17.2811 11.5114 17.5411 11.3614 17.7461L7.4234 23.0781C7.2324 23.3381 6.8494 23.5021 6.4664 23.5021ZM29.4354 17.9371C29.4354 18.9901 30.2964 19.8241 31.3364 19.8241C32.3614 19.8241 33.2224 18.9901 33.2224 17.9371C33.2224 16.9261 32.3614 16.0511 31.3364 16.0511C30.3104 16.0511 29.4354 16.9261 29.4354 17.9371Z"
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
            d="              M15.053 25.5253H31.951C36.34 25.5253 39.307 22.5863 39.307 18.3343C39.307 16.9533 38.924 15.7773 38.459 14.7243L33.537 3.8283C32.443 1.3813 30.393 0.0003 27.535 0.0003H16.105C13.248 0.0003 11.211 1.3813 10.104 3.8283L7.041 10.6093C8.189 10.5413 9.57 10.7873 10.746 11.2383L13.699 4.5803C14.055 3.7593 14.889 3.2813 15.914 3.2813H27.727C28.766 3.2813 29.6 3.7593 29.955 4.5803L32.895 11.2383C32.594 11.1703 32.279 11.1293 31.705 11.1293H15.395C13.959 11.1293 12.77 11.3613 11.758 11.7173C13.207 12.4823 14.424 13.6173 15.299 14.9983H31.951C34.057 14.9983 35.438 16.3513 35.438 18.3343C35.438 20.3843 34.057 21.6563 31.951 21.6563H16.639C16.42 23.0783 15.859 24.3903 15.053 25.5253ZM7.328 27.4123C11.334 27.4123 14.656 24.0763 14.656 20.0703C14.656 16.0643 11.348 12.7563 7.328 12.7563C3.309 12.7563 0 16.0643 0 20.0703C0 24.0763 3.309 27.4123 7.328 27.4123ZM6.645 24.1173C6.275 24.1173 5.852 24.0083 5.578 23.7073L3.35 21.3143C3.104 21.0413 2.912 20.7133 2.912 20.3433C2.912 19.4553 3.609 18.9903 4.293 18.9903C4.676 18.9903 5.018 19.0993 5.25 19.3863L6.535 20.8633L9.406 16.8983C9.68 16.5153 10.09 16.2973 10.541 16.2973C11.293 16.2973 11.895 16.8983 11.895 17.6503C11.895 17.8833 11.813 18.1703 11.648 18.3883L7.738 23.6253C7.506 23.9263 7.082 24.1173 6.645 24.1173ZM29.709 18.3343C29.709 19.4273 30.598 20.3023 31.705 20.3023C32.785 20.3023 33.688 19.4273 33.688 18.3343C33.688 17.2543 32.772 16.3513 31.705 16.3513C30.611 16.3513 29.709 17.2543 29.709 18.3343Z"
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
            d="              M13.7815 22.7368H30.5975C34.0565 22.7368 36.5995 20.1938 36.5995 16.9528C36.5995 15.9548 36.2985 15.0938 35.9705 14.2868L31.0765 3.0347C30.2285 1.0388 28.5605 -0.0003 26.3455 -0.0003H15.1895C12.9745 -0.0003 11.2925 1.0388 10.4455 3.0347L7.4925 9.7758C8.1075 9.8168 8.7225 9.9398 9.2835 10.1308L12.0725 3.4868C12.6325 2.1597 13.7125 1.4898 15.2035 1.4898H26.3185C27.8085 1.4898 28.8885 2.1597 29.4495 3.4868L32.9355 11.6898C32.2385 11.3618 31.4455 11.1558 30.5975 11.1558H11.3745C12.1135 11.5938 12.7695 12.1678 13.2895 12.8517H30.5975C33.1135 12.8517 34.9175 14.6428 34.9175 16.9528C34.9175 19.4418 33.1135 21.0547 30.5975 21.0547H14.5875C14.3965 21.6568 14.1235 22.2168 13.7815 22.7368ZM6.8085 24.9378C10.4995 24.9378 13.6035 21.8618 13.6035 18.1288C13.6035 14.4098 10.5275 11.3338 6.8085 11.3338C3.0765 11.3338 -0.0005 14.4098 -0.0005 18.1288C-0.0005 21.8748 3.0765 24.9378 6.8085 24.9378ZM5.9605 21.7248C5.7555 21.7248 5.5235 21.6288 5.3595 21.4648L3.1035 18.9768C2.9535 18.8258 2.8985 18.6078 2.8985 18.4297C2.8985 18.0058 3.2265 17.6918 3.6365 17.6918C3.8965 17.6918 4.0875 17.8278 4.2105 17.9648L5.9195 19.7968L9.2555 15.1898C9.3925 14.9978 9.6245 14.8748 9.8845 14.8748C10.2815 14.8748 10.6235 15.1898 10.6235 15.5998C10.6235 15.7498 10.5685 15.9138 10.4585 16.0508L6.5765 21.4378C6.4395 21.6148 6.2205 21.7248 5.9605 21.7248ZM28.9025 16.9528C28.9025 17.8828 29.6545 18.5938 30.5705 18.5938C31.4455 18.5938 32.2105 17.8558 32.2105 16.9528C32.2105 16.0778 31.4455 15.3128 30.5705 15.3128C29.6545 15.3128 28.9025 16.0778 28.9025 16.9528Z"
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
            d="              M14.5198 23.8573H30.9668C34.9038 23.8573 37.6658 21.1093 37.6658 17.4453C37.6658 16.3243 37.3378 15.3533 36.9688 14.4513L32.2788 3.4313C31.3358 1.1893 29.4358 0.0003 26.8928 0.0003H15.5308C12.9878 0.0003 11.0878 1.1893 10.1308 3.4313L7.3418 9.9803C8.2308 9.9943 9.1598 10.1723 9.9938 10.4723L12.6058 4.0473C13.0838 2.8573 14.1368 2.2423 15.5718 2.2423H26.8378C28.2738 2.2423 29.3258 2.8573 29.8048 4.0473L32.7718 11.3343C32.2248 11.1423 31.6098 11.0333 30.9118 11.0333H14.3828C13.3578 11.0333 12.4008 11.0883 11.4848 11.1703C12.5778 11.7713 13.5218 12.6193 14.2458 13.6313H30.9668C33.4418 13.6313 35.0688 15.2583 35.0688 17.4453C35.0688 19.8653 33.4418 21.2593 30.9668 21.2593H15.6408C15.4218 22.2033 15.0388 23.0783 14.5198 23.8573ZM7.0408 25.9763C10.8688 25.9763 14.0818 22.7913 14.0818 18.9353C14.0818 15.0803 10.8968 11.9083 7.0408 11.9083C3.1858 11.9083 -0.0002 15.0933 -0.0002 18.9353C-0.0002 22.8043 3.1858 25.9763 7.0408 25.9763ZM6.2478 22.7503C5.9878 22.7503 5.6738 22.6543 5.4688 22.4353L3.1718 19.9333C2.9938 19.7283 2.8988 19.4683 2.8988 19.2363C2.8988 18.6483 3.3498 18.2523 3.8828 18.2523C4.1968 18.2523 4.4438 18.3883 4.6078 18.5663L6.1938 20.3023L9.4198 15.8323C9.5978 15.5863 9.8988 15.4083 10.2398 15.4083C10.7598 15.4083 11.2108 15.8323 11.2108 16.3793C11.2108 16.5433 11.1428 16.7613 11.0058 16.9393L7.0548 22.3943C6.8908 22.6133 6.5758 22.7503 6.2478 22.7503ZM29.1078 17.4453C29.1078 18.4433 29.9278 19.2093 30.8988 19.2093C31.8558 19.2093 32.6618 18.4293 32.6618 17.4453C32.6618 16.5023 31.8558 15.6813 30.8988 15.6813C29.9278 15.6813 29.1078 16.5023 29.1078 17.4453Z"
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
            d="              M14.3559 23.3375H30.6519C34.4529 23.3375 37.1469 20.6445 37.1469 17.1715C37.1469 16.1195 36.8459 15.2305 36.5039 14.3695L31.8829 3.3085C30.9809 1.1215 29.1209 -0.0005 26.6739 -0.0005H15.3399C12.8929 -0.0005 11.0469 1.1215 10.1449 3.3085L7.4239 9.7755C8.2309 9.8165 9.0239 9.9805 9.7619 10.2405L12.2639 3.8695C12.7829 2.5705 13.9039 1.9145 15.4629 1.9145H26.5649C28.1229 1.9145 29.2439 2.5705 29.7639 3.8695L32.7309 11.3615C32.1019 11.1285 31.4039 11.0055 30.6519 11.0055H11.3889C12.3729 11.5525 13.2349 12.3045 13.9179 13.2065H30.6519C33.2359 13.2065 34.9449 14.9155 34.9449 17.1715C34.9449 19.7015 33.2359 21.1365 30.6519 21.1365H15.3259C15.1079 21.9295 14.7789 22.6675 14.3559 23.3375ZM6.9449 25.5395C10.7049 25.5395 13.8909 22.3805 13.8909 18.5935C13.8909 14.7795 10.7599 11.6485 6.9449 11.6485C3.1449 11.6485 -0.0001 14.7795 -0.0001 18.5935C-0.0001 22.4085 3.1449 25.5395 6.9449 25.5395ZM6.1109 22.3395C5.8929 22.3395 5.6059 22.2445 5.4279 22.0395L3.1169 19.5095C2.9529 19.3315 2.8989 19.0855 2.8989 18.8805C2.8989 18.4025 3.2679 18.0195 3.7459 18.0195C4.0329 18.0195 4.2519 18.1565 4.4019 18.3205L6.0839 20.1385L9.4059 15.5035C9.5699 15.2855 9.8299 15.1345 10.1309 15.1345C10.5959 15.1345 10.9919 15.4905 10.9919 15.9825C10.9919 16.1325 10.9379 16.3245 10.8009 16.4885L6.8359 22.0115C6.6859 22.2035 6.4119 22.3395 6.1109 22.3395ZM28.9299 17.1715C28.9299 18.1285 29.7089 18.8675 30.6389 18.8675C31.5549 18.8675 32.3339 18.1155 32.3339 17.1715C32.3339 16.2555 31.5549 15.4765 30.6389 15.4765C29.7089 15.4765 28.9299 16.2555 28.9299 17.1715Z"
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
            d="              M14.6424 24.2544H31.1854C35.2324 24.2544 38.0354 21.4644 38.0354 17.6644C38.0354 16.4744 37.7074 15.4634 37.3104 14.5194L32.5664 3.5274C31.5824 1.2444 29.6544 0.0004 27.0294 0.0004H15.6544C13.0434 0.0004 11.1014 1.2444 10.1174 3.5274L7.2594 10.1304C8.2164 10.1304 9.2424 10.3224 10.1584 10.6644L12.8514 4.1704C13.3024 3.0764 14.3144 2.4884 15.6404 2.4884H27.0434C28.3824 2.4884 29.3804 3.0764 29.8324 4.1704L32.7984 11.3204C32.2934 11.1564 31.7594 11.0744 31.0894 11.0744H14.6154C13.4944 11.0744 12.4824 11.1704 11.5394 11.3064C12.7144 11.9494 13.7264 12.8654 14.4784 13.9594H31.1854C33.5784 13.9594 35.1504 15.5314 35.1504 17.6644C35.1504 20.0024 33.5784 21.3694 31.1854 21.3694H15.8734C15.6544 22.4224 15.2304 23.3924 14.6424 24.2544ZM7.0954 26.3324C10.9644 26.3324 14.2054 23.0914 14.2054 19.2094C14.2054 15.3264 10.9924 12.1134 7.0954 12.1134C3.2124 12.1134 0.0004 15.3264 0.0004 19.2094C0.0004 23.1194 3.2124 26.3324 7.0954 26.3324ZM6.3304 23.0784C6.0434 23.0784 5.7014 22.9824 5.4824 22.7504L3.2124 20.2614C3.0214 20.0564 2.8984 19.7694 2.8984 19.4964C2.8984 18.8394 3.4044 18.4434 3.9644 18.4434C4.2934 18.4434 4.5664 18.5664 4.7574 18.7714L6.2614 20.4534L9.4064 16.0914C9.6114 15.8044 9.9254 15.6274 10.2944 15.6274C10.8824 15.6274 11.3614 16.0914 11.3614 16.6794C11.3614 16.8714 11.2934 17.1034 11.1564 17.2954L7.2054 22.6954C7.0274 22.9274 6.6854 23.0784 6.3304 23.0784ZM29.2444 17.6644C29.2444 18.6894 30.0784 19.4824 31.0764 19.4824C32.0604 19.4824 32.8944 18.6754 32.8944 17.6644C32.8944 16.6794 32.0604 15.8454 31.0764 15.8454C30.0784 15.8454 29.2444 16.6794 29.2444 17.6644Z"
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
            d="              M13.0429 21.9436H30.5159C33.5099 21.9436 35.8749 19.5786 35.8749 16.6386C35.8749 15.7366 35.5879 14.9156 35.2599 14.1506L30.0099 2.6526C29.2309 0.9026 27.8089 -0.0004 25.8949 -0.0004H14.9709C13.0569 -0.0004 11.6349 0.9026 10.8559 2.6526L7.5879 9.7756C7.9429 9.8026 8.3129 9.8846 8.6539 9.9806L11.8259 2.9536C12.4279 1.6136 13.4669 0.9296 14.8749 0.9296H26.0039C27.3989 0.9296 28.4379 1.6136 29.0389 2.9536L33.1949 12.1136C32.4299 11.6346 31.4859 11.3476 30.5159 11.3476H11.3609C11.7719 11.6346 12.1409 11.9906 12.4689 12.3726H30.5159C32.9489 12.3726 34.8629 14.2736 34.8629 16.6386C34.8629 19.0856 32.9489 20.9176 30.5159 20.9176H13.5899C13.4399 21.2876 13.2479 21.6156 13.0429 21.9436ZM6.6039 24.1306C10.2129 24.1306 13.2069 21.1506 13.2069 17.5276C13.2069 13.8906 10.2269 10.9236 6.6039 10.9236C2.9939 10.9236 -0.0001 13.9046 -0.0001 17.5276C-0.0001 21.1506 2.9939 24.1306 6.6039 24.1306ZM5.7559 20.9046C5.5779 20.9046 5.3999 20.8226 5.2639 20.6716L3.0629 18.2656C2.9529 18.1286 2.8989 17.9646 2.8989 17.8146C2.8989 17.4866 3.1579 17.2406 3.4859 17.2406C3.7189 17.2406 3.8559 17.3636 3.9789 17.4726L5.7149 19.3456L9.0509 14.7656C9.1599 14.6156 9.3379 14.5056 9.5429 14.5056C9.8579 14.5056 10.1309 14.7656 10.1309 15.0796C10.1309 15.2306 10.0759 15.3536 9.9939 15.4626L6.2339 20.6586C6.1249 20.8086 5.9609 20.9046 5.7559 20.9046ZM28.8609 16.6386C28.8609 17.5546 29.5999 18.2106 30.4609 18.2106C31.2949 18.2106 32.0199 17.4996 32.0199 16.6386C32.0199 15.8186 31.2949 15.0796 30.4609 15.0796C29.5999 15.0796 28.8609 15.8186 28.8609 16.6386Z"
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
            d="              M12.6463 21.5335H30.4613C33.2363 21.5335 35.4923 19.2775 35.4923 16.4885C35.4923 15.6265 35.2193 14.8205 34.8772 14.0955L29.4633 2.4605C28.7113 0.8475 27.4123 -0.0005 25.6623 -0.0005H14.8473C13.0973 -0.0005 11.7993 0.8475 11.0603 2.4605L7.6293 9.7755C7.8613 9.8025 8.0942 9.8575 8.3263 9.8985L11.6893 2.6795C12.3183 1.3395 13.3303 0.6425 14.6833 0.6425H25.8263C27.1793 0.6425 28.1913 1.3395 28.8203 2.6795L33.3183 12.3325C32.5113 11.7855 31.5133 11.4575 30.4613 11.4575H11.3343C11.5803 11.6625 11.8123 11.8945 12.0313 12.1265H30.4613C32.8673 12.1265 34.8222 14.0825 34.8222 16.4885C34.8222 18.8945 32.8673 20.8635 30.4613 20.8635H13.0703C12.9332 21.0955 12.7973 21.3145 12.6463 21.5335ZM6.4943 23.7205C10.0493 23.7205 13.0023 20.7815 13.0023 17.2125C13.0023 13.6445 10.0763 10.7185 6.4943 10.7185C2.9393 10.7185 0.0003 13.6585 0.0003 17.2125C0.0003 20.7815 2.9393 23.7205 6.4943 23.7205ZM5.6333 20.4805C5.4823 20.4805 5.3323 20.4125 5.2093 20.2755L3.0492 17.9105C2.9393 17.7875 2.8853 17.6505 2.8853 17.5135C2.8853 17.2125 3.1173 17.0075 3.4043 17.0075C3.6093 17.0075 3.7323 17.1305 3.8423 17.2405L5.6053 19.1265L8.9413 14.5465C9.0373 14.4105 9.2013 14.3285 9.3653 14.3285C9.6383 14.3285 9.8713 14.5465 9.8713 14.8205C9.8713 14.9705 9.8163 15.0665 9.7483 15.1755L6.0563 20.2615C5.9473 20.3985 5.8243 20.4805 5.6333 20.4805ZM28.8343 16.4885C28.8343 17.3765 29.5453 18.0195 30.4063 18.0195C31.1993 18.0195 31.9243 17.3355 31.9243 16.4885C31.9243 15.6955 31.1993 14.9575 30.4063 14.9575C29.5453 14.9575 28.8343 15.6955 28.8343 16.4885Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}