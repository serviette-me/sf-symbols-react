import { IconProps } from "../../types"

export default function FlagCheckeredIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.072265625 28.30078125"
          className={className}
        >
          <path
            d="              M2.2559 28.3005C3.4999 28.3005 4.5389 27.2895 4.5389 26.0175V19.0725C5.0179 18.9765 5.6469 18.8945 6.3169 18.8945C10.9099 18.8945 14.9159 21.4375 19.7699 21.4375C21.7519 21.4375 23.3929 21.0415 24.5269 20.4805C25.6489 19.9335 26.0719 18.8125 26.0719 17.4725V4.9085C26.0719 3.3495 25.1149 2.2285 23.6249 2.2285C22.4219 2.2285 21.3279 2.5425 19.7559 2.5425C15.2309 2.5425 10.8969 0.0005 6.3029 0.0005C4.4849 0.0005 2.9939 0.3415 1.6129 0.9845C0.5199 1.5035 -0.0001 2.2015 -0.0001 3.4315V26.0175C-0.0001 27.2755 1.0259 28.3005 2.2559 28.3005ZM4.8399 11.3755V8.0665C5.3049 7.8885 5.8379 7.7515 6.5219 7.7515C6.8769 7.7515 7.9569 7.8205 8.7359 7.9705V4.8945C10.1309 5.1405 11.5389 5.5645 12.9879 5.9885V9.0505C14.3009 9.5015 16.1329 9.8985 17.2399 10.0765V7.0005C17.9789 7.1095 18.7439 7.1775 19.4959 7.1775C20.1249 7.1775 20.7399 7.1645 21.2329 7.0545V10.1035C20.7269 10.2405 20.1109 10.2535 19.4959 10.2535C19.1129 10.2535 18.3479 10.2535 17.2399 10.0765V13.3715C18.4299 13.5485 19.4549 13.5485 19.9879 13.5485C20.6039 13.5485 20.8629 13.5075 21.2329 13.4125V16.4475C20.8219 16.6255 20.2209 16.7075 19.5099 16.7075C18.7719 16.7075 18.0199 16.6255 17.2399 16.4745V13.3715C15.7229 13.1115 14.3559 12.7695 12.9879 12.3455V15.3675C11.6079 14.9705 10.2129 14.5875 8.7359 14.3825V11.2795C8.2439 11.1835 7.4789 11.0605 6.5219 11.0605C5.8379 11.0605 5.3049 11.1975 4.8399 11.3755ZM8.7359 11.2795C10.2809 11.5525 11.4979 11.9215 12.9879 12.3455V9.0505C11.5799 8.6405 10.2809 8.2715 8.7359 7.9705Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.18359375 27.576171875"
          className={className}
        >
          <path
            d="              M1.6548 27.5763C2.5568 27.5763 3.3088 26.8383 3.3088 25.9083V18.6483C3.7188 18.5253 4.6758 18.2243 6.0158 18.2243C10.8418 18.2243 14.4378 20.7403 19.2638 20.7403C21.3148 20.7403 22.5448 20.4253 23.6248 19.9203C24.6638 19.4273 25.1838 18.5113 25.1838 17.2133V3.9923C25.1838 2.8433 24.3908 2.0643 23.2418 2.0643C22.2988 2.0643 21.1228 2.5153 19.1678 2.5153C14.4918 2.5153 10.7458 0.0003 5.9198 0.0003C3.9378 0.0003 2.8028 0.2873 1.5858 0.8473C0.5738 1.3123 -0.0002 2.0233 -0.0002 3.2673V25.9083C-0.0002 26.8243 0.7518 27.5763 1.6548 27.5763ZM3.4588 11.6623V7.6973C3.7868 7.3823 4.6208 7.0003 6.0298 7.0003C6.4258 7.0003 7.2738 7.0543 7.9028 7.1503V3.5273C9.5158 3.7463 11.0328 4.2243 12.5918 4.6893V8.2983C14.0958 8.7913 15.8048 9.2013 17.2808 9.3793V5.7563C17.8558 5.8243 18.4438 5.8653 19.0448 5.8653C20.0978 5.8653 21.0278 5.7693 21.7248 5.5783V9.1873C21.1368 9.3513 20.1658 9.4883 19.0448 9.4883C18.6348 9.4883 18.0328 9.4743 17.2808 9.3793V13.3433C18.0738 13.4393 18.7718 13.4533 19.2908 13.4533C20.3438 13.4533 21.0818 13.3433 21.7248 13.1663V16.6663C21.4238 16.9803 20.5488 17.3493 19.1268 17.3493C18.5118 17.3493 17.9098 17.2813 17.2808 17.1853V13.3433C15.5998 13.1113 14.1508 12.7563 12.5918 12.2633V16.0093C11.1148 15.5723 9.5838 15.1483 7.9028 14.9703V11.1153C7.3828 11.0473 6.8358 10.9643 6.0298 10.9643C4.6208 10.9643 3.7868 11.3473 3.4588 11.6623ZM7.9028 11.1153C9.6118 11.3613 10.9378 11.7853 12.5918 12.2633V8.2983C11.0328 7.8473 9.6248 7.3963 7.9028 7.1503Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.6484375 27.9453125"
          className={className}
        >
          <path
            d="              M1.9692 27.9458C3.0492 27.9458 3.9512 27.0708 3.9512 25.9628V18.8668C4.4162 18.7578 5.1812 18.5798 6.1802 18.5798C10.8832 18.5798 14.6972 21.1097 19.5232 21.1097C21.5472 21.1097 22.9962 20.7398 24.1032 20.2068C25.1832 19.6878 25.6482 18.6617 25.6482 17.3498V4.4707C25.6482 3.1167 24.7732 2.1468 23.4472 2.1468C22.3672 2.1468 21.2322 2.5298 19.4822 2.5298C14.8892 2.5298 10.8282 -0.0003 6.1252 -0.0003C4.2242 -0.0003 2.9122 0.3148 1.5992 0.9157C0.5472 1.4078 0.0002 2.1058 0.0002 3.3498V25.9628C0.0002 27.0568 0.8892 27.9458 1.9692 27.9458ZM4.1832 11.5117V7.8888C4.5802 7.6428 5.2642 7.3968 6.2892 7.3968C6.6722 7.3968 7.6292 7.4508 8.3402 7.5738V4.2518C9.8442 4.4847 11.3062 4.9357 12.7972 5.3728V8.6958C14.2052 9.1598 15.9822 9.5708 17.2672 9.7348V6.4118C17.9242 6.4937 18.5942 6.5487 19.2772 6.5487C20.1112 6.5487 20.8772 6.4937 21.4652 6.3577V9.6798C20.9182 9.8168 20.1392 9.8848 19.2772 9.8848C18.8812 9.8848 18.1972 9.8848 17.2672 9.7348V13.3578C18.2652 13.4938 19.1272 13.5078 19.6602 13.5078C20.4802 13.5078 20.9732 13.4258 21.4652 13.2888V16.5427C21.0962 16.7888 20.3852 17.0078 19.3322 17.0078C18.6482 17.0078 17.9652 16.9398 17.2672 16.8168V13.3578C15.6682 13.1118 14.2602 12.7558 12.7972 12.3048V15.6678C11.3752 15.2578 9.9122 14.8478 8.3402 14.6558V11.1977C7.8342 11.1148 7.1782 11.0198 6.2892 11.0198C5.2642 11.0198 4.5802 11.2658 4.1832 11.5117ZM8.3402 11.1977C9.9672 11.4568 11.2382 11.8538 12.7972 12.3048V8.6958C11.3202 8.2578 9.9672 7.8618 8.3402 7.5738Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.501953125 26.11328125"
          className={className}
        >
          <path
            d="              M0.8067 26.1134C1.2437 26.1134 1.5997 25.7574 1.5997 25.3064V17.3494C2.0237 17.2404 3.2947 16.6934 5.4277 16.6934C10.3907 16.6934 13.4527 19.1544 18.2387 19.1544C20.2617 19.1544 21.1097 18.9214 22.0797 18.4704C22.9417 18.0874 23.5017 17.4864 23.5017 16.4614V2.8574C23.5017 2.2014 22.9957 1.8454 22.3267 1.8454C21.6837 1.8454 20.4257 2.4474 18.0747 2.4474C13.2757 2.4474 10.2267 0.0004 5.2637 0.0004C3.2407 0.0004 2.3787 0.2324 1.4087 0.6704C0.5607 1.0524 -0.0003 1.6684 -0.0003 2.6934V25.3064C-0.0003 25.7444 0.3687 26.1134 0.8067 26.1134ZM1.5997 11.6214V6.9864C1.8187 6.5074 3.1307 5.8924 5.2637 5.8924C5.7017 5.8924 6.1937 5.9204 6.6717 5.9614V1.6684C8.5317 1.8594 10.1587 2.3794 11.8127 2.8844V7.1774C13.5487 7.7244 15.2167 8.1624 16.9397 8.2984V4.0054C17.3087 4.0334 17.6917 4.0464 18.0747 4.0464C19.4687 4.0464 20.6857 3.8964 21.8887 3.5414V7.8344C21.2047 8.0254 19.7837 8.3394 18.0747 8.3394C17.6777 8.3394 17.2817 8.3124 16.9397 8.2984V12.9334C17.2407 12.9614 17.6367 12.9744 18.0747 12.9744C19.4687 12.9744 20.6857 12.8104 21.8887 12.4684V16.4474C21.6697 16.9254 20.3847 17.5414 18.2387 17.5414C17.7867 17.5414 17.3637 17.5134 16.9397 17.4864V12.9334C15.1077 12.7424 13.6717 12.4144 11.8127 11.8124V16.2694C10.2267 15.7774 8.5857 15.2854 6.6717 15.1344V10.5954C6.2067 10.5544 5.9067 10.5274 5.2637 10.5274C3.1177 10.5274 1.8187 11.1424 1.5997 11.6214ZM6.6717 10.5954C8.5587 10.7874 9.9937 11.2654 11.8127 11.8124V7.1774C10.1037 6.6584 8.5857 6.1524 6.6717 5.9614Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.595703125 27.09765625"
          className={className}
        >
          <path
            d="              M1.2581 27.0973C1.9411 27.0973 2.5161 26.5373 2.5161 25.8403V18.3612C2.8851 18.2242 4.0471 17.8013 5.8101 17.8013C10.8011 17.8013 14.1231 20.2893 18.9351 20.2893C21.0411 20.2893 21.9841 20.0293 23.0511 19.5373C24.0211 19.0992 24.5961 18.3063 24.5961 17.0493V3.3903C24.5961 2.5153 23.9121 1.9552 22.9961 1.9552C22.2171 1.9552 20.9861 2.4883 18.7851 2.4883C14.0271 2.4883 10.6501 0.0003 5.6741 0.0003C3.5961 0.0003 2.6661 0.2462 1.5591 0.7523C0.6021 1.1893 0.0001 1.9002 0.0001 3.1442V25.8403C0.0001 26.5233 0.5741 27.0973 1.2581 27.0973ZM2.5701 11.8403V7.4513C2.8031 7.0543 3.8421 6.5083 5.7151 6.5083C6.1391 6.5083 6.8221 6.5493 7.3551 6.6172V2.6382C9.1191 2.8433 10.7051 3.3493 12.3321 3.8423V7.8063C13.9591 8.3123 15.5861 8.7503 17.3091 8.9142V4.9353C17.7731 4.9902 18.2521 5.0173 18.7441 5.0173C20.0841 5.0173 21.1911 4.8672 22.0391 4.6352V8.5993C21.3831 8.7773 20.1931 8.9823 18.7441 8.9823C18.3201 8.9823 17.8281 8.9553 17.3091 8.9142V13.3163C17.8421 13.3713 18.3341 13.3853 18.8261 13.3853C20.1661 13.3853 21.2191 13.2343 22.0391 13.0023V16.8023C21.8071 17.1993 20.7681 17.7323 18.8811 17.7323C18.3481 17.7323 17.8281 17.6913 17.3091 17.6363V13.3163C15.5181 13.0973 14.0141 12.7423 12.3321 12.2093V16.4063C10.7871 15.9413 9.1871 15.4903 7.3551 15.3263V11.0063C6.8361 10.9513 6.4121 10.9103 5.7151 10.9103C3.8281 10.9103 2.8031 11.4433 2.5701 11.8403ZM7.3551 11.0063C9.1871 11.2383 10.5681 11.6893 12.3321 12.2093V7.8063C10.6781 7.3143 9.1871 6.8223 7.3551 6.6172Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.28125 26.82421875"
          className={className}
        >
          <path
            d="              M1.0387 26.8245C1.6137 26.8245 2.0777 26.3735 2.0777 25.7985V18.1975C2.4197 18.0465 3.7047 17.5545 5.7147 17.5545C10.7737 17.5545 13.9457 20.0295 18.7577 20.0295C20.8907 20.0295 21.6837 19.7965 22.7227 19.3315C23.6657 18.9085 24.2817 18.1975 24.2817 16.9395V3.0625C24.2817 2.3245 23.6527 1.9005 22.8597 1.9005C22.1897 1.9005 20.9317 2.4745 18.5797 2.4745C13.7677 2.4745 10.6097 -0.0005 5.5367 -0.0005C3.4047 -0.0005 2.5977 0.2325 1.5587 0.6975C0.6157 1.1215 -0.0003 1.8315 -0.0003 3.0765V25.7985C-0.0003 26.3595 0.4787 26.8245 1.0387 26.8245ZM2.0777 11.9495V7.3145C2.2697 6.8635 3.4047 6.2345 5.5367 6.2345C5.9747 6.2345 6.5757 6.2615 7.0547 6.3165V2.1465C8.9007 2.3375 10.5277 2.8715 12.1957 3.3635V7.5335C13.8907 8.0525 15.4767 8.4905 17.3227 8.6545V4.4845C17.7327 4.5255 18.1427 4.5395 18.5797 4.5395C20.0707 4.5395 21.3007 4.3615 22.2167 4.1015V8.2715C21.5337 8.4625 20.2207 8.7085 18.5797 8.7085C18.1567 8.7085 17.7187 8.6815 17.3227 8.6545V13.2895C17.7187 13.3305 18.1017 13.3435 18.5797 13.3435C20.0707 13.3435 21.3007 13.1655 22.2167 12.9065V16.8845C22.0257 17.3355 20.8907 17.9645 18.7577 17.9645C18.2657 17.9645 17.7867 17.9375 17.3227 17.8825V13.2895C15.4767 13.0835 13.9457 12.7425 12.1957 12.1675V16.6385C10.6097 16.1605 8.9687 15.6955 7.0547 15.5315V10.9515C6.5347 10.8965 6.1797 10.8695 5.5367 10.8695C3.4047 10.8695 2.2697 11.4985 2.0777 11.9495ZM7.0547 10.9515C8.9417 11.1565 10.3767 11.6345 12.1957 12.1675V7.5335C10.4867 7.0275 8.9547 6.5075 7.0547 6.3165Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.841796875 27.302734375"
          className={className}
        >
          <path
            d="              M1.4218 27.3026C2.2008 27.3026 2.8438 26.6736 2.8438 25.8676V18.4846C3.2398 18.3476 4.3208 17.9926 5.8927 17.9926C10.8148 17.9926 14.2458 20.4806 19.0728 20.4806C21.1508 20.4806 22.2168 20.1936 23.2968 19.7016C24.2948 19.2366 24.8418 18.4026 24.8418 17.1176V3.6506C24.8418 2.6526 24.1168 2.0096 23.0918 2.0096C22.2578 2.0096 21.0408 2.5016 18.9488 2.5016C14.2328 2.5016 10.6918 -0.0004 5.7698 -0.0004C3.7328 -0.0004 2.7207 0.2736 1.5728 0.7926C0.5877 1.2446 -0.0003 1.9546 -0.0003 3.1996V25.8676C-0.0003 26.6606 0.6428 27.3026 1.4218 27.3026ZM2.9398 11.7716V7.5606C3.2268 7.1916 4.1698 6.7266 5.8517 6.7266C6.2617 6.7266 6.9998 6.7676 7.5878 6.8496V3.0216C9.2828 3.2406 10.8418 3.7326 12.4417 4.2106V8.0256C14.0138 8.5316 15.6818 8.9416 17.2948 9.1196V5.2906C17.8008 5.3456 18.3337 5.3866 18.8668 5.3866C20.0837 5.3866 21.1228 5.2636 21.9028 5.0446V8.8596C21.2738 9.0236 20.1797 9.2016 18.8668 9.2016C18.4438 9.2016 17.9098 9.1876 17.2948 9.1196V13.3296C17.9378 13.3986 18.5258 13.4116 19.0178 13.4116C20.2347 13.4116 21.1638 13.2756 21.9028 13.0706V16.7476C21.6288 17.1176 20.6718 17.5686 18.9898 17.5686C18.4158 17.5686 17.8558 17.5276 17.2948 17.4456V13.3296C15.5448 13.0976 14.0688 12.7556 12.4417 12.2366V16.2426C10.9238 15.7906 9.3517 15.3396 7.5878 15.1756V11.0606C7.0688 11.0056 6.5898 10.9376 5.8517 10.9376C4.1698 10.9376 3.2268 11.4156 2.9398 11.7716ZM7.5878 11.0606C9.3648 11.2926 10.7188 11.7306 12.4417 12.2366V8.0256C10.8278 7.5466 9.3648 7.0816 7.5878 6.8496Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.4765625 25.169921875"
          className={className}
        >
          <path
            d="              M0.5063 25.1699C0.7793 25.1699 0.9983 24.9509 0.9983 24.6639V16.2149C1.5043 16.1879 2.7613 15.5719 5.0583 15.5719C9.8983 15.5719 12.7973 17.9919 17.5683 17.9919C19.4413 17.9919 20.3713 17.7599 21.2463 17.3499C21.9843 17.0219 22.4763 16.5429 22.4763 15.8179V2.5839C22.4763 2.0509 22.1353 1.7909 21.6423 1.7909C21.0413 1.7909 19.7833 2.4199 17.4183 2.4199C12.6193 2.4199 9.7203 -0.0001 4.8943 -0.0001C3.0353 -0.0001 2.1053 0.2459 1.2173 0.6429C0.4923 0.9839 0.0003 1.4489 0.0003 2.1739V24.6639C0.0003 24.9379 0.2323 25.1699 0.5063 25.1699ZM0.9983 11.1969V6.5629C1.2443 6.0429 2.7753 5.4549 4.8943 5.4549C5.3323 5.4549 5.7013 5.4689 6.1793 5.5239V1.0669C8.0663 1.2309 9.6793 1.7499 11.3203 2.2699V6.7269C13.1113 7.3009 14.8753 7.7379 16.4473 7.8339V3.3769C16.7613 3.3909 17.0903 3.4039 17.4183 3.4039C18.6893 3.4039 19.8923 3.2809 21.4653 2.8029V7.2739C20.7953 7.4649 19.2363 7.8749 17.4183 7.8749C17.0623 7.8749 16.6933 7.8479 16.4473 7.8339V12.4549C16.6253 12.4829 17.0353 12.4959 17.4183 12.4959C18.6893 12.4959 19.8923 12.3589 21.4653 11.8949V15.8869C21.2183 16.4059 19.7283 16.9939 17.5683 16.9939C17.1853 16.9939 16.8023 16.9809 16.4473 16.9529V12.4549C14.6293 12.3049 13.3303 11.9899 11.3203 11.3479V15.7769C9.7203 15.2849 8.0803 14.7659 6.1793 14.6289V10.1449C5.7833 10.1039 5.5513 10.0899 4.8943 10.0899C2.7343 10.0899 1.2443 10.6779 0.9983 11.1969ZM6.1793 10.1449C8.0663 10.3089 9.5023 10.7869 11.3203 11.3479V6.7269C9.6113 6.1799 8.0933 5.7149 6.1793 5.5239Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.943359375 24.69140625"
          className={className}
        >
          <path
            d="              M0.3552 24.6918C0.5332 24.6918 0.6832 24.5408 0.6832 24.3358V15.6408C1.2302 15.6408 2.4882 14.9978 4.8672 14.9978C9.6382 14.9978 12.4692 17.4048 17.2262 17.4048C19.0172 17.4048 19.9742 17.1578 20.8082 16.7758C21.4922 16.4608 21.9432 16.0648 21.9432 15.4898V2.4468C21.9432 1.9688 21.6832 1.7638 21.2872 1.7638C20.6992 1.7638 19.4412 2.4058 17.0762 2.4058C12.2912 2.4058 9.4742 -0.0002 4.7172 -0.0002C2.9262 -0.0002 1.9552 0.2458 1.1212 0.6288C0.4512 0.9438 0.0002 1.3398 0.0002 1.9138V24.3358C0.0002 24.5278 0.1642 24.6918 0.3552 24.6918ZM0.6832 10.9788V6.3578C0.9432 5.8108 2.5842 5.2368 4.7172 5.2368C5.1402 5.2368 5.4412 5.2368 5.9202 5.2908V0.7378C7.8342 0.9028 9.4332 1.4218 11.0602 1.9548V6.4938C12.8922 7.0818 14.6972 7.5198 16.1872 7.5878V3.0488C16.4882 3.0628 16.7752 3.0758 17.0762 3.0758C18.2932 3.0758 19.4692 2.9668 21.2462 2.4338V6.9728C20.5762 7.1638 18.9352 7.6288 17.0762 7.6288C16.7342 7.6288 16.3922 7.6148 16.1872 7.5878V12.2088C16.3102 12.2368 16.7202 12.2498 17.0762 12.2498C18.2932 12.2498 19.4692 12.1268 21.2462 11.6078V15.5998C20.9862 16.1468 19.3862 16.7208 17.2262 16.7208C16.8572 16.7208 16.5152 16.6938 16.1872 16.6798V12.2088C14.3692 12.0718 13.1522 11.7848 11.0602 11.1148V15.5308C9.4472 15.0258 7.8342 14.5058 5.9202 14.3558V9.9118C5.5642 9.8848 5.3592 9.8578 4.7172 9.8578C2.5432 9.8578 0.9432 10.4318 0.6832 10.9788ZM5.9202 9.9118C7.8062 10.0628 9.2422 10.5408 11.0602 11.1148V6.4938C9.3512 5.9338 7.8472 5.4828 5.9202 5.2908Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}