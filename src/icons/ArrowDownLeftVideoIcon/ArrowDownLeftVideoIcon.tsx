import { IconProps } from "../../types"

export default function ArrowDownLeftVideoIconIcon({
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
            d="              M6.4125 24.5001H20.3435C24.5415 24.5001 26.7555 22.2851 26.7555 18.3751V17.7191L30.6385 21.0411C31.6775 21.9301 32.5805 22.5171 33.5915 22.5171C35.0685 22.5171 36.1625 21.5191 36.1625 19.8651V4.9901C36.1625 3.3221 35.0685 2.3241 33.5915 2.3241C32.5665 2.3241 31.6775 2.9121 30.6385 3.8011L26.7555 7.1231V6.1111C26.7555 2.2151 24.5415 0.0001 20.3435 0.0001H6.4125C2.2145 0.0001 0.0005 2.2151 0.0005 6.1391V18.8401C0.0005 22.7231 2.2015 24.5001 6.4125 24.5001ZM7.1505 20.3571C5.4145 20.3571 4.4295 19.3051 4.4295 17.6911V6.8081C4.4295 5.0311 5.4145 4.1291 7.1505 4.1291H19.6055C21.3285 4.1291 22.3125 5.1821 22.3125 6.8081V17.6911C22.3125 19.3051 21.2595 20.3571 19.5645 20.3571ZM17.5545 6.4391C17.1035 6.4391 16.6935 6.6171 16.3375 6.9451L11.5115 11.4021L10.5955 12.4691L10.8145 10.8961V8.9691C10.8145 8.0941 10.1035 7.4101 9.1325 7.4101C8.1895 7.4101 7.4645 8.0531 7.4645 8.9551V15.5171C7.4645 17.0211 8.3125 17.8831 9.8165 17.8831H16.6665C17.5545 17.8831 18.2385 17.1311 18.2385 16.2011C18.2385 15.2441 17.5415 14.5331 16.6385 14.5331H14.4645L12.8105 14.7381L13.9185 13.8501L18.7575 9.3511C19.1405 9.0101 19.2915 8.5581 19.2915 8.0391C19.2915 7.1091 18.5805 6.4391 17.5545 6.4391ZM31.6775 17.2131L26.7555 13.3571V11.4981L31.6775 7.6291C31.7595 7.5601 31.8285 7.5191 31.9235 7.5191C32.0195 7.5191 32.1015 7.5881 32.1015 7.7251V17.1311C32.1015 17.2541 32.0195 17.3361 31.9235 17.3361C31.8285 17.3361 31.7595 17.2811 31.6775 17.2131Z"
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
            d="              M5.8649 23.4882H19.9749C23.7479 23.4882 25.8539 21.4102 25.8539 17.7872V16.5152L30.3789 20.3712C31.1719 21.0412 31.9239 21.4922 32.7169 21.4922C34.0429 21.4922 34.9999 20.5492 34.9999 19.0862V4.5802C34.9999 3.1032 34.0429 2.1742 32.7169 2.1742C31.9099 2.1742 31.1719 2.6252 30.3789 3.2952L25.8539 7.1362V5.6872C25.8539 2.0782 23.7479 0.0002 19.9749 0.0002H5.8649C2.1879 0.0002 -0.0001 2.0782 -0.0001 5.7012V18.0192C-0.0001 21.6292 2.0919 23.4882 5.8649 23.4882ZM6.4259 20.3852C4.4429 20.3852 3.3219 19.2772 3.3219 17.2812V6.1932C3.3219 4.1292 4.4429 3.0902 6.4259 3.0902H19.4139C21.3969 3.0902 22.5309 4.1972 22.5309 6.1932V17.2812C22.5309 19.2772 21.3689 20.3852 19.3999 20.3852ZM31.4179 17.5272L25.8539 13.0432V10.6092L31.4179 6.1382C31.5139 6.0562 31.5959 6.0022 31.6909 6.0022C31.8279 6.0022 31.9099 6.0972 31.9099 6.2612V17.4042C31.9099 17.5682 31.8279 17.6642 31.6909 17.6642C31.5959 17.6642 31.5139 17.5952 31.4179 17.5272ZM17.2949 6.0842C16.9259 6.0842 16.6109 6.2202 16.3239 6.4802L11.1149 11.5252L9.5979 13.1932L9.8299 10.4592V8.5722C9.8299 7.8612 9.2829 7.3012 8.5309 7.3012C7.7789 7.3012 7.1909 7.8342 7.1909 8.5722V15.6542C7.1909 16.7612 7.7789 17.3772 8.8999 17.3772H16.1329C16.8569 17.3772 17.4039 16.7752 17.4039 16.0232C17.4039 15.2712 16.8439 14.7242 16.1189 14.7242H14.0959L11.3069 14.9432L13.0159 13.4392L18.2379 8.3942C18.5389 8.1072 18.6759 7.7652 18.6759 7.3552C18.6759 6.6172 18.0879 6.0842 17.2949 6.0842Z"
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
            d="              M6.1657 24.0217H20.1797C24.1717 24.0217 26.3317 21.8747 26.3317 18.1017V17.1587L30.5297 20.7267C31.4457 21.5197 32.2797 22.0387 33.1817 22.0387C34.5897 22.0387 35.6157 21.0687 35.6157 19.4957V4.7987C35.6157 3.2267 34.5897 2.2557 33.1817 2.2557C32.2657 2.2557 31.4457 2.7887 30.5297 3.5687L26.3317 7.1367V5.9197C26.3317 2.1597 24.1717 -0.0003 20.1797 -0.0003H6.1657C2.2147 -0.0003 -0.0003 2.1597 -0.0003 5.9337V18.4567C-0.0003 22.2167 2.1597 24.0217 6.1657 24.0217ZM6.8227 20.3847C4.9627 20.3847 3.9097 19.3047 3.9097 17.4997V6.5217C3.9097 4.6077 4.9627 3.6507 6.8227 3.6507H19.5237C21.3687 3.6507 22.4217 4.7307 22.4217 6.5217V17.4997C22.4217 19.3047 21.3147 20.3847 19.4957 20.3847ZM17.4457 6.2757C17.0217 6.2757 16.6657 6.4397 16.3377 6.7267L11.3337 11.4707L10.1307 12.8107L10.3497 10.7047V8.7907C10.3497 7.9847 9.7207 7.3687 8.8597 7.3687C7.9977 7.3687 7.3417 7.9567 7.3417 8.7777V15.5857C7.3417 16.8987 8.0797 17.6507 9.3927 17.6507H16.4197C17.2407 17.6507 17.8557 16.9667 17.8557 16.1187C17.8557 15.2577 17.2127 14.6287 16.3927 14.6287H14.3007L12.1137 14.8477L13.4937 13.6587L18.5257 8.9007C18.8667 8.5857 19.0037 8.1897 19.0037 7.7247C19.0037 6.8907 18.3617 6.2757 17.4457 6.2757ZM31.5687 17.3637L26.3317 13.2207V11.0877L31.5687 6.9317C31.6507 6.8637 31.7327 6.8087 31.8147 6.8087C31.9377 6.8087 32.0197 6.8907 32.0197 7.0407V17.2677C32.0197 17.4047 31.9377 17.4997 31.8147 17.4997C31.7327 17.4997 31.6507 17.4317 31.5687 17.3637Z"
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
            d="              M5.0449 22.2983H19.6879C22.8729 22.2983 24.7329 20.4943 24.7329 17.3083V14.9293L30.1599 19.4273C30.6799 19.8513 31.2269 20.1383 31.7739 20.1383C32.8259 20.1383 33.5239 19.3733 33.5239 18.2113V4.1013C33.5239 2.9393 32.8259 2.1733 31.7739 2.1733C31.2269 2.1733 30.6799 2.4613 30.1599 2.8843L24.7329 7.3823V5.0043C24.7329 1.8183 22.8729 0.0003 19.6879 0.0003H5.0449C1.9549 0.0003 -0.0001 1.8183 -0.0001 5.0043V17.3083C-0.0001 20.4943 1.8599 22.2983 5.0449 22.2983ZM5.3459 20.7133C2.9809 20.7133 1.6949 19.4963 1.6949 17.0353V5.2773C1.6949 2.8023 2.9809 1.5863 5.3459 1.5863H19.3869C21.7519 1.5863 23.0369 2.8023 23.0369 5.2773V17.0353C23.0369 19.4963 21.7519 20.7133 19.3869 20.7133ZM30.9939 18.0193L24.7329 12.9333V9.3793L30.9939 4.2933C31.1989 4.1293 31.3499 4.0193 31.5269 4.0193C31.7599 4.0193 31.8969 4.1973 31.8969 4.5113V17.7873C31.8969 18.1013 31.7599 18.2793 31.5269 18.2793C31.3499 18.2793 31.1989 18.1703 30.9939 18.0193ZM17.0349 5.8383C16.7889 5.8383 16.6249 5.9203 16.4749 6.0703L10.3769 12.1953L8.2309 14.4643L8.4219 10.6093V8.0663C8.4219 7.6563 8.1209 7.3143 7.6969 7.3143C7.2459 7.3143 6.9179 7.6423 6.9179 8.0663V15.9143C6.9179 16.4613 7.1779 16.7343 7.7519 16.7343H15.6409C16.0779 16.7343 16.4059 16.3793 16.4059 15.9553C16.4059 15.5173 16.0649 15.2163 15.6409 15.2163H13.0289L9.1739 15.4223L11.4709 13.2753L17.5549 7.1643C17.7329 6.9863 17.8279 6.8083 17.8279 6.5763C17.8279 6.1523 17.4859 5.8383 17.0349 5.8383Z"
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
            d="              M5.5232 22.8321H19.7562C23.2422 22.8321 25.2792 20.8491 25.2792 17.4041V15.7501L30.2152 19.9331C30.8442 20.4671 31.5142 20.8221 32.1562 20.8221C33.4002 20.8221 34.2482 19.9201 34.2482 18.5801V4.3071C34.2482 2.9671 33.4002 2.0641 32.1562 2.0641C31.5142 2.0641 30.8442 2.4201 30.2152 2.9531L25.2792 7.1371V5.4141C25.2792 1.9821 23.2422 0.0001 19.7562 0.0001H5.5232C2.1602 0.0001 0.0002 1.9821 0.0002 5.4281V17.5001C0.0002 20.9181 2.0372 22.8321 5.5232 22.8321ZM5.9742 20.3981C3.8282 20.3981 2.6112 19.2641 2.6112 17.0211V5.8101C2.6112 3.5411 3.8282 2.4201 5.9742 2.4201H19.3052C21.4512 2.4201 22.6682 3.5681 22.6682 5.8101V17.0211C22.6682 19.2641 21.4372 20.3981 19.3052 20.3981ZM31.2402 17.7191L25.2792 12.8381V10.0491L31.2402 5.1681C31.3632 5.0721 31.4452 5.0171 31.5552 5.0171C31.7052 5.0171 31.7872 5.1411 31.7872 5.3181V17.5681C31.7872 17.7601 31.7052 17.8691 31.5552 17.8691C31.4452 17.8691 31.3632 17.8011 31.2402 17.7191ZM17.1312 5.8511C16.8162 5.8511 16.5562 5.9611 16.3242 6.1801L10.8692 11.5941L8.9692 13.6581L9.2152 10.1721V8.3121C9.2152 7.7241 8.7502 7.2321 8.1482 7.2321C7.5192 7.2321 7.0142 7.6971 7.0142 8.3121V15.7231C7.0142 16.5841 7.4512 17.0351 8.3122 17.0351H15.8052C16.4202 17.0351 16.8852 16.5291 16.8852 15.9001C16.8852 15.2851 16.3922 14.8481 15.7912 14.8481H13.8632L10.3492 15.0801L12.4552 13.1801L17.9102 7.7661C18.1702 7.5191 18.2792 7.2461 18.2792 6.9181C18.2792 6.3031 17.7872 5.8511 17.1312 5.8511Z"
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
            d="              M5.3324 22.4764H19.6194C22.9554 22.4764 24.9514 20.5354 24.9514 17.1994V15.3264L30.1194 19.7014C30.6664 20.1524 31.2674 20.4664 31.8284 20.4664C33.0314 20.4664 33.8244 19.5784 33.8244 18.3064V4.1704C33.8244 2.8984 33.0314 2.0094 31.8284 2.0094C31.2674 2.0094 30.6664 2.3244 30.1194 2.7754L24.9514 7.1504V5.2634C24.9514 1.9414 22.9554 0.0004 19.6194 0.0004H5.3324C2.1464 0.0004 0.0004 1.9414 0.0004 5.2634V17.1994C0.0004 20.5354 1.9964 22.4764 5.3324 22.4764ZM5.7144 20.4124C3.4724 20.4124 2.2014 19.2504 2.2014 16.8844V5.5914C2.2014 3.2134 3.4724 2.0504 5.7144 2.0504H19.2364C21.4644 2.0504 22.7504 3.2134 22.7504 5.5914V16.8844C22.7504 19.2504 21.4644 20.4124 19.2364 20.4124ZM31.1444 17.8414L24.9514 12.7284V9.7484L31.1444 4.6344C31.2674 4.5394 31.3494 4.4704 31.4724 4.4704C31.6364 4.4704 31.7054 4.6074 31.7054 4.7984V17.6774C31.7054 17.8694 31.6364 17.9924 31.4724 17.9924C31.3494 17.9924 31.2674 17.9234 31.1444 17.8414ZM17.0354 5.7284C16.7484 5.7284 16.5294 5.8244 16.3244 6.0294L10.7184 11.6344L8.6134 13.9314L8.8454 10.0214V8.1754C8.8454 7.6424 8.4494 7.2054 7.9164 7.2054C7.3554 7.2054 6.9044 7.6154 6.9044 8.1754V15.7774C6.9044 16.5024 7.2464 16.8574 7.9844 16.8574H15.5994C16.1604 16.8574 16.5844 16.4064 16.5844 15.8454C16.5844 15.2984 16.1324 14.9164 15.5994 14.9164H13.7264L9.8164 15.1484L12.1274 13.0434L17.7184 7.4234C17.9514 7.2054 18.0464 6.9724 18.0464 6.6714C18.0464 6.1384 17.6094 5.7284 17.0354 5.7284Z"
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
            d="              M5.6742 23.1195H19.8512C23.4612 23.1195 25.5122 21.0955 25.5122 17.5825V16.0915L30.2832 20.1385C30.9802 20.7265 31.6782 21.1235 32.3882 21.1235C33.6742 21.1235 34.5622 20.2075 34.5622 18.8125V4.4295C34.5622 3.0355 33.6742 2.1195 32.3882 2.1195C31.6782 2.1195 30.9802 2.5155 30.2832 3.1035L25.5122 7.1505V5.5505C25.5122 2.0375 23.4612 -0.0005 19.8512 -0.0005H5.6742C2.1602 -0.0005 0.0002 2.0375 0.0002 5.5505V17.7325C0.0002 21.2325 2.0512 23.1195 5.6742 23.1195ZM6.1662 20.3985C4.0882 20.3985 2.9122 19.2775 2.9122 17.1445V5.9885C2.9122 3.8005 4.0882 2.7205 6.1662 2.7205H19.3462C21.4242 2.7205 22.5992 3.8555 22.5992 5.9885V17.1445C22.5992 19.2775 21.3962 20.3985 19.3462 20.3985ZM31.3082 17.6505L25.5122 12.9335V10.3085L31.3082 5.5915C31.4182 5.5095 31.5002 5.4555 31.6092 5.4555C31.7602 5.4555 31.8282 5.5645 31.8282 5.7285V17.5135C31.8282 17.6775 31.7602 17.7875 31.6092 17.7875C31.5002 17.7875 31.4182 17.7185 31.3082 17.6505ZM17.1992 5.9605C16.8572 5.9605 16.5702 6.0835 16.3242 6.3165L10.9652 11.5665L9.2422 13.4665L9.4742 10.3085V8.4355C9.4742 7.7925 8.9692 7.2735 8.2992 7.2735C7.6152 7.2735 7.0822 7.7655 7.0822 8.4355V15.7085C7.0822 16.6665 7.5882 17.1995 8.5582 17.1995H15.9412C16.5972 17.1995 17.1032 16.6385 17.1032 15.9685C17.1032 15.2855 16.5842 14.8065 15.9282 14.8065H13.9592L10.7602 15.0255L12.6872 13.3025L18.0472 8.0395C18.3202 7.7795 18.4432 7.4785 18.4432 7.1095C18.4432 6.4535 17.9102 5.9605 17.1992 5.9605Z"
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
            d="              M4.6483 22.0663H19.7833C22.7773 22.0663 24.4313 20.4123 24.4313 17.4453V14.3833L30.2013 19.0453C30.7073 19.4413 31.1723 19.7013 31.6913 19.7013C32.5523 19.7013 33.1403 19.0863 33.1403 18.0603V4.0063C33.1403 2.9803 32.5523 2.3653 31.6913 2.3653C31.1723 2.3653 30.7073 2.6253 30.2013 3.0213L24.4313 7.6833V4.6213C24.4313 1.6543 22.7773 0.0003 19.7833 0.0003H4.6483C1.6953 0.0003 0.0003 1.6543 0.0003 4.6213V17.4453C0.0003 20.4123 1.6683 22.0663 4.6483 22.0663ZM4.8673 21.1093C2.3103 21.1093 1.0253 19.8103 1.0253 17.2263V4.8263C1.0253 2.2563 2.3103 0.9573 4.8673 0.9573H19.5643C22.1343 0.9573 23.4203 2.2563 23.4203 4.8263V17.2263C23.4203 19.8103 22.1343 21.1093 19.5643 21.1093ZM30.7753 18.2383L24.4313 13.1933V8.8593L30.7753 3.8283C31.0903 3.5823 31.3493 3.4043 31.5953 3.4043C31.9373 3.4043 32.1423 3.6503 32.1423 4.1423V17.9243C32.1423 18.4023 31.9373 18.6483 31.5953 18.6483C31.3493 18.6483 31.0903 18.4703 30.7753 18.2383ZM17.0353 5.9743C16.8573 5.9743 16.7483 6.0433 16.6663 6.1253L9.8983 12.9203L7.7243 15.1623L7.8473 11.3753V7.9023C7.8473 7.6563 7.6703 7.4513 7.3963 7.4513C7.0953 7.4513 6.9183 7.6563 6.9183 7.9023V16.0783C6.9183 16.4063 7.0683 16.5703 7.4373 16.5703H15.6953C15.9553 16.5703 16.1743 16.3513 16.1743 16.0783C16.1743 15.8043 15.9683 15.6133 15.6953 15.6133H12.0993L8.3123 15.7633L10.5823 13.5903L17.3363 6.8083C17.4593 6.6993 17.5133 6.5763 17.5133 6.4393C17.5133 6.1523 17.3083 5.9743 17.0353 5.9743Z"
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
            d="              M4.4571 21.9436H19.8241C22.7231 21.9436 24.2811 20.3846 24.2811 17.5136V14.1096L30.2281 18.8536C30.7211 19.2366 31.1311 19.4826 31.6501 19.4826C32.4161 19.4826 32.9351 18.9496 32.9351 17.9926V3.9646C32.9351 3.0076 32.4161 2.4746 31.6501 2.4746C31.1311 2.4746 30.7211 2.7206 30.2281 3.1036L24.2811 7.8336V4.4436C24.2811 1.5726 22.7231 -0.0004 19.8241 -0.0004H4.4571C1.5591 -0.0004 0.0001 1.5726 0.0001 4.4436V17.5136C0.0001 20.3846 1.5591 21.9436 4.4571 21.9436ZM4.6211 21.3146C1.9551 21.3146 0.6701 19.9886 0.6701 17.3356V4.6076C0.6701 1.9686 1.9551 0.6426 4.6211 0.6426H19.6601C22.3121 0.6426 23.6111 1.9686 23.6111 4.6076V17.3356C23.6111 19.9886 22.3121 21.3146 19.6601 21.3146ZM30.6661 18.3616L24.2811 13.3436V8.6136L30.6661 3.5956C31.0351 3.3226 31.3361 3.1036 31.6231 3.1036C32.0061 3.1036 32.2661 3.3906 32.2661 3.9516V18.0056C32.2661 18.5666 32.0061 18.8536 31.6231 18.8536C31.3361 18.8536 31.0351 18.6346 30.6661 18.3616ZM17.0351 6.0426C16.8851 6.0426 16.8161 6.1116 16.7621 6.1656L9.6521 13.3026L7.4511 15.5316L7.5601 11.7856V7.8336C7.5601 7.6696 7.4371 7.5336 7.2321 7.5336C7.0141 7.5336 6.9181 7.6696 6.9181 7.8336V16.1736C6.9181 16.3926 7.0141 16.4886 7.2731 16.4886H15.7091C15.9001 16.4886 16.0511 16.3376 16.0511 16.1466C16.0511 15.9546 15.9141 15.8186 15.7091 15.8186H11.6211L7.8751 15.9546L10.1311 13.7536L17.2131 6.6446C17.3091 6.5486 17.3501 6.4666 17.3501 6.3706C17.3501 6.1656 17.2271 6.0426 17.0351 6.0426Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}