import { IconProps } from "../../types"

export default function QuestionmarkVideoIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.162109375 24.5"
          className={className}
        >
          <path
            d="              M6.4125 24.5001H20.3435C24.5415 24.5001 26.7555 22.2851 26.7555 18.3751V17.7191L30.6385 21.0411C31.6775 21.9301 32.5805 22.5171 33.5915 22.5171C35.0685 22.5171 36.1625 21.5191 36.1625 19.8651V4.9901C36.1625 3.3221 35.0685 2.3241 33.5915 2.3241C32.5665 2.3241 31.6775 2.9121 30.6385 3.8011L26.7555 7.1231V6.1111C26.7555 2.2151 24.5415 0.0001 20.3435 0.0001H6.4125C2.2145 0.0001 0.0005 2.2151 0.0005 6.1391V18.8401C0.0005 22.7231 2.2015 24.5001 6.4125 24.5001ZM7.1505 20.3571C5.4145 20.3571 4.4295 19.3051 4.4295 17.6911V6.8081C4.4295 5.0311 5.4145 4.1291 7.1505 4.1291H19.6055C21.3285 4.1291 22.3125 5.1821 22.3125 6.8081V17.6911C22.3125 19.3051 21.2595 20.3571 19.5645 20.3571ZM12.9065 14.4371C13.8495 14.4371 14.4645 13.9861 14.7245 13.4261C14.7385 13.3981 14.7525 13.3301 14.7655 13.2891C14.9435 12.8921 15.5445 12.5101 16.0915 12.1821C17.4315 11.3751 17.9105 10.6781 17.9105 9.4331C17.9105 7.3691 15.9415 5.8791 13.3305 5.8791C11.2245 5.8791 9.6385 6.6721 9.0235 7.9161C8.8865 8.1891 8.8455 8.4351 8.8455 8.7361C8.8455 9.5161 9.4475 10.2131 10.6505 10.2131C11.4845 10.2131 11.8675 9.8441 12.1685 9.5701C12.5375 9.2281 12.7695 9.0921 13.0845 9.0921C13.4665 9.0921 13.6995 9.3101 13.6995 9.6801C13.6995 10.1171 13.1935 10.4861 12.3045 11.1011C11.4705 11.7031 10.9105 12.2361 10.9105 12.9471V12.9881C10.9105 13.9321 11.6215 14.4371 12.9065 14.4371ZM31.6775 17.2131L26.7555 13.3571V11.4981L31.6775 7.6291C31.7595 7.5601 31.8285 7.5191 31.9235 7.5191C32.0195 7.5191 32.1015 7.5881 32.1015 7.7251V17.1311C32.1015 17.2541 32.0195 17.3361 31.9235 17.3361C31.8285 17.3361 31.7595 17.2811 31.6775 17.2131ZM12.9195 18.6761C14.0685 18.6761 14.8885 18.0741 14.8885 16.9941C14.8885 15.9551 14.0685 15.3121 12.9195 15.3121C11.7855 15.3121 10.9515 15.9411 10.9515 16.9941C10.9515 18.0601 11.7855 18.6761 12.9195 18.6761Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35 23.48828125"
          className={className}
        >
          <path
            d="              M5.8649 23.4882H19.9749C23.7479 23.4882 25.8539 21.4102 25.8539 17.7872V16.5152L30.3789 20.3712C31.1719 21.0412 31.9239 21.4922 32.7169 21.4922C34.0429 21.4922 34.9999 20.5492 34.9999 19.0862V4.5802C34.9999 3.1032 34.0429 2.1742 32.7169 2.1742C31.9099 2.1742 31.1719 2.6252 30.3789 3.2952L25.8539 7.1362V5.6872C25.8539 2.0782 23.7479 0.0002 19.9749 0.0002H5.8649C2.1879 0.0002 -0.0001 2.0782 -0.0001 5.7012V18.0192C-0.0001 21.6292 2.0919 23.4882 5.8649 23.4882ZM6.4259 20.3852C4.4429 20.3852 3.3219 19.2772 3.3219 17.2812V6.1932C3.3219 4.1292 4.4429 3.0902 6.4259 3.0902H19.4139C21.3969 3.0902 22.5309 4.1972 22.5309 6.1932V17.2812C22.5309 19.2772 21.3689 20.3852 19.3999 20.3852ZM12.5099 14.1642C13.2889 14.1642 13.7809 13.7402 13.9179 13.2072C13.9179 13.1662 13.9319 13.1112 13.9319 13.0702C14.0269 12.5102 14.5199 12.1132 15.2309 11.6622C16.5019 10.8552 17.1719 10.1582 17.1719 8.7912C17.1719 6.7262 15.2719 5.4272 12.9059 5.4272C10.7869 5.4272 9.3109 6.3302 8.8179 7.5192C8.7229 7.7522 8.6819 7.9842 8.6819 8.2442C8.6819 8.9002 9.2009 9.4062 10.0079 9.4062C10.7739 9.4062 11.0329 9.0232 11.3749 8.6542C11.7719 8.1482 12.1819 7.8752 12.7419 7.8752C13.5079 7.8752 13.9859 8.2992 13.9859 8.9552C13.9859 9.5972 13.4669 9.9802 12.4959 10.6772C11.6349 11.2792 11.0199 11.8812 11.0199 12.8382V12.9472C11.0199 13.7402 11.5389 14.1642 12.5099 14.1642ZM31.4179 17.5272L25.8539 13.0432V10.6092L31.4179 6.1382C31.5139 6.0562 31.5959 6.0022 31.6909 6.0022C31.8279 6.0022 31.9099 6.0972 31.9099 6.2612V17.4042C31.9099 17.5682 31.8279 17.6642 31.6909 17.6642C31.5959 17.6642 31.5139 17.5952 31.4179 17.5272ZM12.4959 18.1292C13.4259 18.1292 14.1499 17.5412 14.1499 16.6382C14.1499 15.7632 13.4399 15.1482 12.4959 15.1482C11.5659 15.1482 10.8419 15.7502 10.8419 16.6382C10.8419 17.5272 11.5799 18.1292 12.4959 18.1292Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.615234375 24.021484375"
          className={className}
        >
          <path
            d="              M6.1657 24.0217H20.1797C24.1717 24.0217 26.3317 21.8747 26.3317 18.1017V17.1587L30.5297 20.7267C31.4457 21.5197 32.2797 22.0387 33.1817 22.0387C34.5897 22.0387 35.6157 21.0687 35.6157 19.4957V4.7987C35.6157 3.2267 34.5897 2.2557 33.1817 2.2557C32.2657 2.2557 31.4457 2.7887 30.5297 3.5687L26.3317 7.1367V5.9197C26.3317 2.1597 24.1717 -0.0003 20.1797 -0.0003H6.1657C2.2147 -0.0003 -0.0003 2.1597 -0.0003 5.9337V18.4567C-0.0003 22.2167 2.1597 24.0217 6.1657 24.0217ZM6.8227 20.3847C4.9627 20.3847 3.9097 19.3047 3.9097 17.4997V6.5217C3.9097 4.6077 4.9627 3.6507 6.8227 3.6507H19.5237C21.3687 3.6507 22.4217 4.7307 22.4217 6.5217V17.4997C22.4217 19.3047 21.3147 20.3847 19.4957 20.3847ZM12.7287 14.3147C13.6037 14.3147 14.1507 13.8767 14.3417 13.3297C14.3557 13.2887 14.3687 13.2347 14.3827 13.1937C14.5197 12.7147 15.0667 12.3317 15.6957 11.9497C17.0077 11.1287 17.5687 10.4457 17.5687 9.1327C17.5687 7.0687 15.6407 5.6737 13.1387 5.6737C11.0337 5.6737 9.4887 6.5217 8.9417 7.7387C8.8187 7.9847 8.7777 8.2307 8.7777 8.5037C8.7777 9.2287 9.3377 9.8437 10.3497 9.8437C11.1567 9.8437 11.4707 9.4607 11.7987 9.1467C12.1817 8.7227 12.4957 8.5177 12.9337 8.5177C13.4937 8.5177 13.8497 8.8457 13.8497 9.3377C13.8497 9.8707 13.3297 10.2537 12.4007 10.9097C11.5527 11.5117 10.9647 12.0727 10.9647 12.9067V12.9747C10.9647 13.8497 11.5937 14.3147 12.7287 14.3147ZM31.5687 17.3637L26.3317 13.2207V11.0877L31.5687 6.9317C31.6507 6.8637 31.7327 6.8087 31.8147 6.8087C31.9377 6.8087 32.0197 6.8907 32.0197 7.0407V17.2677C32.0197 17.4047 31.9377 17.4997 31.8147 17.4997C31.7327 17.4997 31.6507 17.4317 31.5687 17.3637ZM12.7287 18.4297C13.7677 18.4297 14.5467 17.8277 14.5467 16.8297C14.5467 15.8727 13.7677 15.2437 12.7287 15.2437C11.6897 15.2437 10.9097 15.8597 10.9097 16.8297C10.9097 17.8147 11.6897 18.4297 12.7287 18.4297Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5234375 22.298828125"
          className={className}
        >
          <path
            d="              M5.0449 22.2983H19.6879C22.8729 22.2983 24.7329 20.4943 24.7329 17.3083V14.9293L30.1599 19.4273C30.6799 19.8513 31.2269 20.1383 31.7739 20.1383C32.8259 20.1383 33.5239 19.3733 33.5239 18.2113V4.1013C33.5239 2.9393 32.8259 2.1733 31.7739 2.1733C31.2269 2.1733 30.6799 2.4613 30.1599 2.8843L24.7329 7.3823V5.0043C24.7329 1.8183 22.8729 0.0003 19.6879 0.0003H5.0449C1.9549 0.0003 -0.0001 1.8183 -0.0001 5.0043V17.3083C-0.0001 20.4943 1.8599 22.2983 5.0449 22.2983ZM5.3459 20.7133C2.9809 20.7133 1.6949 19.4963 1.6949 17.0353V5.2773C1.6949 2.8023 2.9809 1.5863 5.3459 1.5863H19.3869C21.7519 1.5863 23.0369 2.8023 23.0369 5.2773V17.0353C23.0369 19.4963 21.7519 20.7133 19.3869 20.7133ZM30.9939 18.0193L24.7329 12.9333V9.3793L30.9939 4.2933C31.1989 4.1293 31.3499 4.0193 31.5269 4.0193C31.7599 4.0193 31.8969 4.1973 31.8969 4.5113V17.7873C31.8969 18.1013 31.7599 18.2793 31.5269 18.2793C31.3499 18.2793 31.1989 18.1703 30.9939 18.0193ZM12.0589 13.7133C12.5369 13.7133 12.8239 13.4123 12.8239 13.0153V12.7563C12.8239 12.0173 13.2069 11.5803 14.1229 10.9643C15.3669 10.1313 16.0779 9.4063 16.0779 8.0523C16.0779 6.1933 14.4239 5.0863 12.3869 5.0863C10.3359 5.0863 9.0239 6.1383 8.7359 7.3413C8.6819 7.5193 8.6539 7.7113 8.6539 7.9023C8.6539 8.3393 8.9959 8.5723 9.3239 8.5723C9.8709 8.5723 9.9809 8.2853 10.2539 7.9023C10.5549 7.0273 11.2659 6.4123 12.3319 6.4123C13.6039 6.4123 14.4239 7.1093 14.4239 8.1343C14.4239 8.9683 13.9449 9.4473 12.8109 10.2403C11.8669 10.8963 11.2929 11.5393 11.2929 12.6733V12.9473C11.2929 13.4533 11.5669 13.7133 12.0589 13.7133ZM12.0309 17.2543C12.6469 17.2543 13.1799 16.7483 13.1799 16.1323C13.1799 15.5173 12.6599 15.0113 12.0309 15.0113C11.4019 15.0113 10.8829 15.5173 10.8829 16.1323C10.8829 16.7343 11.4159 17.2543 12.0309 17.2543Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.248046875 22.83203125"
          className={className}
        >
          <path
            d="              M5.5232 22.8321H19.7562C23.2422 22.8321 25.2792 20.8491 25.2792 17.4041V15.7501L30.2152 19.9331C30.8442 20.4671 31.5142 20.8221 32.1562 20.8221C33.4002 20.8221 34.2482 19.9201 34.2482 18.5801V4.3071C34.2482 2.9671 33.4002 2.0641 32.1562 2.0641C31.5142 2.0641 30.8442 2.4201 30.2152 2.9531L25.2792 7.1371V5.4141C25.2792 1.9821 23.2422 0.0001 19.7562 0.0001H5.5232C2.1602 0.0001 0.0002 1.9821 0.0002 5.4281V17.5001C0.0002 20.9181 2.0372 22.8321 5.5232 22.8321ZM5.9742 20.3981C3.8282 20.3981 2.6112 19.2641 2.6112 17.0211V5.8101C2.6112 3.5411 3.8282 2.4201 5.9742 2.4201H19.3052C21.4512 2.4201 22.6682 3.5681 22.6682 5.8101V17.0211C22.6682 19.2641 21.4372 20.3981 19.3052 20.3981ZM31.2402 17.7191L25.2792 12.8381V10.0491L31.2402 5.1681C31.3632 5.0721 31.4452 5.0171 31.5552 5.0171C31.7052 5.0171 31.7872 5.1411 31.7872 5.3181V17.5681C31.7872 17.7601 31.7052 17.8691 31.5552 17.8691C31.4452 17.8691 31.3632 17.8011 31.2402 17.7191ZM12.2642 13.9731C12.9472 13.9731 13.3572 13.5761 13.3982 13.0701C13.4122 13.0291 13.4122 12.9611 13.4122 12.9201C13.4392 12.2771 13.8772 11.8531 14.6972 11.3201C15.9142 10.5271 16.7072 9.8161 16.7072 8.3671C16.7072 6.3031 14.8482 5.1271 12.6462 5.1271C10.5142 5.1271 9.1052 6.0981 8.6952 7.2461C8.6132 7.4651 8.5722 7.6831 8.5722 7.9161C8.5722 8.5041 9.0512 8.8731 9.5982 8.8731C10.3222 8.8731 10.5002 8.4901 10.8832 8.0661C11.2792 7.4511 11.8122 7.0821 12.5372 7.0821C13.5352 7.0821 14.1782 7.6421 14.1782 8.4901C14.1782 9.2561 13.6582 9.6661 12.6192 10.3911C11.7442 11.0191 11.0882 11.6481 11.0882 12.7691V12.9061C11.0882 13.6171 11.4982 13.9731 12.2642 13.9731ZM12.2362 17.7601C13.0292 17.7601 13.6852 17.1991 13.6852 16.4061C13.6852 15.6411 13.0292 15.0531 12.2362 15.0531C11.4302 15.0531 10.7872 15.6271 10.7872 16.4061C10.7872 17.1851 11.4432 17.7601 12.2362 17.7601Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.82421875 22.4765625"
          className={className}
        >
          <path
            d="              M5.3324 22.4764H19.6194C22.9554 22.4764 24.9514 20.5354 24.9514 17.1994V15.3264L30.1194 19.7014C30.6664 20.1524 31.2674 20.4664 31.8284 20.4664C33.0314 20.4664 33.8244 19.5784 33.8244 18.3064V4.1704C33.8244 2.8984 33.0314 2.0094 31.8284 2.0094C31.2674 2.0094 30.6664 2.3244 30.1194 2.7754L24.9514 7.1504V5.2634C24.9514 1.9414 22.9554 0.0004 19.6194 0.0004H5.3324C2.1464 0.0004 0.0004 1.9414 0.0004 5.2634V17.1994C0.0004 20.5354 1.9964 22.4764 5.3324 22.4764ZM5.7144 20.4124C3.4724 20.4124 2.2014 19.2504 2.2014 16.8844V5.5914C2.2014 3.2134 3.4724 2.0504 5.7144 2.0504H19.2364C21.4644 2.0504 22.7504 3.2134 22.7504 5.5914V16.8844C22.7504 19.2504 21.4644 20.4124 19.2364 20.4124ZM31.1444 17.8414L24.9514 12.7284V9.7484L31.1444 4.6344C31.2674 4.5394 31.3494 4.4704 31.4724 4.4704C31.6364 4.4704 31.7054 4.6074 31.7054 4.7984V17.6774C31.7054 17.8694 31.6364 17.9924 31.4724 17.9924C31.3494 17.9924 31.2674 17.9234 31.1444 17.8414ZM12.1134 13.8774C12.7284 13.8774 13.1114 13.4944 13.1114 12.9884V12.8384C13.1114 12.1404 13.5074 11.7164 14.3824 11.1424C15.5864 10.3494 16.4334 9.6254 16.4334 8.1344C16.4334 6.0704 14.6014 4.9764 12.4824 4.9764C10.3494 4.9764 8.9824 5.9744 8.6134 7.1094C8.5454 7.3144 8.5174 7.5194 8.5174 7.7384C8.5174 8.2854 8.9554 8.5864 9.3654 8.5864C10.0624 8.5864 10.1854 8.2034 10.5824 7.7384C10.9924 7.0684 11.5934 6.6584 12.4144 6.6584C13.5484 6.6584 14.2734 7.2874 14.2734 8.2304C14.2734 9.0784 13.7534 9.4884 12.6734 10.2404C11.7854 10.8694 11.1154 11.5254 11.1154 12.7284V12.8924C11.1154 13.5484 11.4704 13.8774 12.1134 13.8774ZM12.0724 17.5684C12.7834 17.5684 13.4124 17.0074 13.4124 16.2834C13.4124 15.5724 12.7964 14.9984 12.0724 14.9984C11.3474 14.9984 10.7464 15.5724 10.7464 16.2834C10.7464 16.9944 11.3614 17.5684 12.0724 17.5684Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.5625 23.119140625"
          className={className}
        >
          <path
            d="              M5.6742 23.1195H19.8512C23.4612 23.1195 25.5122 21.0955 25.5122 17.5825V16.0915L30.2832 20.1385C30.9802 20.7265 31.6782 21.1235 32.3882 21.1235C33.6742 21.1235 34.5622 20.2075 34.5622 18.8125V4.4295C34.5622 3.0355 33.6742 2.1195 32.3882 2.1195C31.6782 2.1195 30.9802 2.5155 30.2832 3.1035L25.5122 7.1505V5.5505C25.5122 2.0375 23.4612 -0.0005 19.8512 -0.0005H5.6742C2.1602 -0.0005 0.0002 2.0375 0.0002 5.5505V17.7325C0.0002 21.2325 2.0512 23.1195 5.6742 23.1195ZM6.1662 20.3985C4.0882 20.3985 2.9122 19.2775 2.9122 17.1445V5.9885C2.9122 3.8005 4.0882 2.7205 6.1662 2.7205H19.3462C21.4242 2.7205 22.5992 3.8555 22.5992 5.9885V17.1445C22.5992 19.2775 21.3962 20.3985 19.3462 20.3985ZM12.3592 14.0685C13.0842 14.0685 13.5352 13.6585 13.6172 13.1385C13.6172 13.0975 13.6312 13.0295 13.6312 12.9885C13.6852 12.3865 14.1502 11.9765 14.9162 11.4845C16.1742 10.6775 16.8982 9.9665 16.8982 8.5585C16.8982 6.4945 15.0252 5.2635 12.7562 5.2635C10.6232 5.2635 9.1872 6.2075 8.7362 7.3695C8.6542 7.6015 8.6132 7.8205 8.6132 8.0665C8.6132 8.6815 9.1052 9.1055 9.7752 9.1055C10.5132 9.1055 10.7192 8.7365 11.0882 8.3265C11.4842 7.7655 11.9632 7.4375 12.6192 7.4375C13.5212 7.4375 14.0962 7.9435 14.0962 8.6955C14.0962 9.4065 13.5762 9.8165 12.5512 10.5275C11.6892 11.1425 11.0472 11.7575 11.0472 12.8105V12.9335C11.0472 13.6715 11.5122 14.0685 12.3592 14.0685ZM31.3082 17.6505L25.5122 12.9335V10.3085L31.3082 5.5915C31.4182 5.5095 31.5002 5.4555 31.6092 5.4555C31.7602 5.4555 31.8282 5.5645 31.8282 5.7285V17.5135C31.8282 17.6775 31.7602 17.7875 31.6092 17.7875C31.5002 17.7875 31.4182 17.7185 31.3082 17.6505ZM12.3462 17.9235C13.1932 17.9235 13.8772 17.3495 13.8772 16.5155C13.8772 15.6955 13.1932 15.1075 12.3462 15.1075C11.4842 15.1075 10.8012 15.6955 10.8012 16.5155C10.8012 17.3355 11.4982 17.9235 12.3462 17.9235Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.140625 22.06640625"
          className={className}
        >
          <path
            d="              M4.6483 22.0663H19.7833C22.7773 22.0663 24.4313 20.4123 24.4313 17.4453V14.3833L30.2013 19.0453C30.7073 19.4413 31.1723 19.7013 31.6913 19.7013C32.5523 19.7013 33.1403 19.0863 33.1403 18.0603V4.0063C33.1403 2.9803 32.5523 2.3653 31.6913 2.3653C31.1723 2.3653 30.7073 2.6253 30.2013 3.0213L24.4313 7.6833V4.6213C24.4313 1.6543 22.7773 0.0003 19.7833 0.0003H4.6483C1.6953 0.0003 0.0003 1.6543 0.0003 4.6213V17.4453C0.0003 20.4123 1.6683 22.0663 4.6483 22.0663ZM4.8673 21.1093C2.3103 21.1093 1.0253 19.8103 1.0253 17.2263V4.8263C1.0253 2.2563 2.3103 0.9573 4.8673 0.9573H19.5643C22.1343 0.9573 23.4203 2.2563 23.4203 4.8263V17.2263C23.4203 19.8103 22.1343 21.1093 19.5643 21.1093ZM30.7753 18.2383L24.4313 13.1933V8.8593L30.7753 3.8283C31.0903 3.5823 31.3493 3.4043 31.5953 3.4043C31.9373 3.4043 32.1423 3.6503 32.1423 4.1423V17.9243C32.1423 18.4023 31.9373 18.6483 31.5953 18.6483C31.3493 18.6483 31.0903 18.4703 30.7753 18.2383ZM11.9903 13.4943C12.2633 13.4943 12.4553 13.3023 12.4553 13.0293V12.6193C12.4553 11.8403 12.7973 11.3753 13.7813 10.7053C15.0663 9.8303 15.5993 9.1053 15.5993 7.9163C15.5993 6.3303 14.1913 5.2223 12.2503 5.2223C10.3223 5.2223 9.0913 6.3433 8.8863 7.6293C8.8593 7.7793 8.8453 7.9293 8.8453 8.1073C8.8453 8.3813 9.0643 8.5453 9.2833 8.5453C9.5973 8.5453 9.7203 8.3673 9.8163 8.1073C9.9803 6.9723 10.8413 6.0703 12.2093 6.0703C13.6853 6.0703 14.6153 6.8633 14.6153 7.9703C14.6153 8.8323 14.1913 9.3653 12.9883 10.1993C11.9493 10.9103 11.5253 11.5523 11.5253 12.5783V13.0023C11.5253 13.3023 11.7033 13.4943 11.9903 13.4943ZM11.9763 16.8163C12.4683 16.8163 12.8793 16.3923 12.8793 15.9143C12.8793 15.4353 12.4683 15.0253 11.9763 15.0253C11.4573 15.0253 11.0603 15.4353 11.0603 15.9143C11.0603 16.3923 11.4703 16.8163 11.9763 16.8163Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.935546875 21.943359375"
          className={className}
        >
          <path
            d="              M4.4571 21.9436H19.8241C22.7231 21.9436 24.2811 20.3846 24.2811 17.5136V14.1096L30.2281 18.8536C30.7211 19.2366 31.1311 19.4826 31.6501 19.4826C32.4161 19.4826 32.9351 18.9496 32.9351 17.9926V3.9646C32.9351 3.0076 32.4161 2.4746 31.6501 2.4746C31.1311 2.4746 30.7211 2.7206 30.2281 3.1036L24.2811 7.8336V4.4436C24.2811 1.5726 22.7231 -0.0004 19.8241 -0.0004H4.4571C1.5591 -0.0004 0.0001 1.5726 0.0001 4.4436V17.5136C0.0001 20.3846 1.5591 21.9436 4.4571 21.9436ZM4.6211 21.3146C1.9551 21.3146 0.6701 19.9886 0.6701 17.3356V4.6076C0.6701 1.9686 1.9551 0.6426 4.6211 0.6426H19.6601C22.3121 0.6426 23.6111 1.9686 23.6111 4.6076V17.3356C23.6111 19.9886 22.3121 21.3146 19.6601 21.3146ZM30.6661 18.3616L24.2811 13.3436V8.6136L30.6661 3.5956C31.0351 3.3226 31.3361 3.1036 31.6231 3.1036C32.0061 3.1036 32.2661 3.3906 32.2661 3.9516V18.0056C32.2661 18.5666 32.0061 18.8536 31.6231 18.8536C31.3361 18.8536 31.0351 18.6346 30.6661 18.3616ZM11.9491 13.3846C12.1271 13.3846 12.2641 13.2476 12.2641 13.0426V12.5646C12.2641 11.7576 12.5921 11.2926 13.6031 10.5816C14.9161 9.6796 15.3531 8.9686 15.3531 7.8476C15.3531 6.4116 14.0551 5.3046 12.1821 5.3046C10.2951 5.3046 9.1191 6.4536 8.9691 7.7796C8.9411 7.9156 8.9281 8.0526 8.9281 8.2166C8.9281 8.4216 9.0781 8.5316 9.2561 8.5316C9.4471 8.5316 9.5701 8.4216 9.5841 8.2166C9.6801 6.9456 10.6091 5.9066 12.1411 5.9066C13.7271 5.9066 14.7111 6.7536 14.7111 7.9026C14.7111 8.7636 14.3011 9.3376 13.0701 10.1996C12.0041 10.9236 11.6351 11.5526 11.6351 12.5366V13.0426C11.6351 13.2476 11.7711 13.3846 11.9491 13.3846ZM11.9351 16.5976C12.3731 16.5976 12.7151 16.2146 12.7151 15.8046C12.7151 15.3946 12.3731 15.0256 11.9351 15.0256C11.4841 15.0256 11.1431 15.3946 11.1431 15.8046C11.1431 16.2146 11.4841 16.5976 11.9351 16.5976Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
