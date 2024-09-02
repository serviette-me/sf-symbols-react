import { IconProps } from "../../types"

export default function CloudSunIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.162109375 30.939453125"
          className={className}
        >
          <path
            d="              M28.2052 5.7016C29.1352 5.7016 29.8872 4.9086 29.8872 3.9786V1.7086C29.8872 0.7656 29.1352 -0.0004 28.2052 -0.0004C27.2752 -0.0004 26.5232 0.7656 26.5232 1.7086V3.9786C26.5232 4.9086 27.2752 5.7016 28.2052 5.7016ZM19.2502 8.3806C19.9202 9.0506 21.0002 9.0646 21.6422 8.4086C22.2992 7.7516 22.2712 6.6996 21.6152 6.0156L20.0292 4.3746C19.4002 3.7186 18.2652 3.7326 17.6232 4.3746C16.9672 5.0316 16.9942 6.1116 17.6502 6.7676ZM34.7812 8.4216C35.4242 9.0786 36.5172 9.0506 37.1742 8.3946L38.7872 6.7946C39.4572 6.1386 39.4572 5.0446 38.8012 4.4026C38.1582 3.7456 37.0782 3.7596 36.4082 4.4296L34.7952 6.0156C34.1252 6.6586 34.1252 7.7796 34.7812 8.4216ZM6.9312 30.9396H22.0662C26.5642 30.9396 30.0782 27.4806 30.0782 23.0376C30.0782 22.6266 30.0512 22.2306 29.9962 21.8336C33.1132 21.0956 35.3962 18.3746 35.3962 14.9846C35.3962 10.9786 32.2112 7.8066 28.2462 7.8066C24.7602 7.8066 21.9162 10.1856 21.2052 13.4126C19.4692 11.3616 16.9532 10.2946 13.8772 10.2946C9.0102 10.2946 5.0172 13.6856 4.1562 18.5116C1.6132 19.3316 0.0002 21.5876 0.0002 24.3636C0.0002 28.1776 2.9392 30.9396 6.9312 30.9396ZM28.2322 11.3746C30.1872 11.3746 31.7732 12.9606 31.7732 14.9156C31.7732 16.7346 30.4202 18.2246 28.6832 18.4296C27.7402 17.0486 26.3592 16.0096 24.7192 15.4626C24.6912 15.2716 24.6782 15.0796 24.6782 14.9156C24.6782 12.9606 26.2632 11.3746 28.2322 11.3746ZM39.1702 16.6246H41.4532C42.3962 16.6246 43.1622 15.8866 43.1622 14.9706C43.1622 14.0406 42.3962 13.2756 41.4532 13.2756H39.1702C38.2402 13.2756 37.4612 14.0406 37.4612 14.9706C37.4612 15.8866 38.2402 16.6246 39.1702 16.6246ZM7.0682 26.8786C5.0722 26.8786 4.0742 25.8676 4.0742 24.4046C4.0742 23.0916 4.9352 22.1346 6.7812 21.6566C7.5882 21.4516 7.7932 21.0816 7.9292 20.2756C8.5722 16.2836 10.8962 14.3286 13.8772 14.3286C16.1052 14.3286 18.0062 15.6406 19.3182 18.0606C19.6872 18.7166 20.0562 18.9626 20.8902 18.9626C24.4592 18.9626 26.0172 20.7676 26.0172 23.0916C26.0172 25.2516 24.4312 26.8786 21.9162 26.8786ZM36.3942 25.5256C37.0512 26.1816 38.1312 26.2086 38.7872 25.5526C39.4432 24.8966 39.4022 23.8296 38.7602 23.1606L37.1742 21.5196C36.5312 20.8636 35.4102 20.8766 34.7542 21.5196C34.1112 22.1756 34.1382 23.2556 34.7952 23.9126Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.453125 29.271484375"
          className={className}
        >
          <path
            d="              M26.8922 5.4546C27.6722 5.4546 28.3012 4.7986 28.3012 4.0336V1.4216C28.3012 0.6426 27.6722 -0.0004 26.8922 -0.0004C26.1132 -0.0004 25.4842 0.6426 25.4842 1.4216V4.0336C25.4842 4.7986 26.1132 5.4546 26.8922 5.4546ZM18.4432 8.1206C19.0042 8.6676 19.9202 8.6676 20.4532 8.1346C20.9862 7.5876 20.9862 6.6996 20.4392 6.1386L18.5942 4.2656C18.0602 3.7186 17.1312 3.7186 16.5972 4.2656C16.0512 4.8126 16.0642 5.7146 16.6112 6.2616ZM33.3322 8.1346C33.8792 8.6816 34.7952 8.6676 35.3422 8.1206L37.1872 6.2756C37.7482 5.7286 37.7482 4.8266 37.2012 4.2796C36.6542 3.7326 35.7652 3.7326 35.2052 4.2926L33.3462 6.1386C32.7992 6.6856 32.7992 7.5876 33.3322 8.1346ZM6.3572 29.2716H21.3282C25.5532 29.2716 28.8472 26.0586 28.8472 21.9026C28.8472 21.6836 28.8342 21.4516 28.8202 21.2326C31.7462 20.4256 33.8652 17.7736 33.8652 14.5746C33.8652 10.6916 30.7752 7.6016 26.9202 7.6016C23.6522 7.6016 20.9452 9.7756 20.1662 12.7696C18.4572 10.8146 16.0642 9.7346 13.2342 9.7346C8.5312 9.7346 4.6352 13.1796 3.9922 17.8286C1.5722 18.6076 0.0002 20.7126 0.0002 23.3516C0.0002 26.7966 2.6252 29.2716 6.3572 29.2716ZM26.9062 10.3906C29.2172 10.3906 31.0622 12.2226 31.0622 14.5466C31.0622 16.4476 29.7912 18.0606 28.0552 18.5386C27.0292 16.5426 25.1152 15.1076 22.7502 14.6696C22.7502 14.6286 22.7502 14.5876 22.7502 14.5466C22.7502 12.2226 24.5822 10.3906 26.9062 10.3906ZM6.4122 26.1546C4.2382 26.1546 3.1312 24.9786 3.1312 23.3926C3.1312 22.0116 3.9782 20.8906 5.9062 20.3846C6.6442 20.1936 6.8632 19.8656 6.9592 19.1136C7.4512 15.2036 10.0352 12.8516 13.2342 12.8516C15.6682 12.8516 17.6502 14.2326 18.9492 16.7206C19.2772 17.3356 19.6332 17.5686 20.3852 17.5686C23.9392 17.5686 25.7172 19.5236 25.7172 21.9706C25.7172 24.3226 23.8852 26.1546 21.2732 26.1546ZM37.4062 15.9686H40.0312C40.8102 15.9686 41.4532 15.3396 41.4532 14.5746C41.4532 13.7946 40.8102 13.1526 40.0312 13.1526H37.4062C36.6402 13.1526 35.9842 13.7946 35.9842 14.5746C35.9842 15.3396 36.6402 15.9686 37.4062 15.9686ZM35.2052 24.8556C35.7522 25.4156 36.6542 25.4156 37.1872 24.8696C37.7342 24.3226 37.7212 23.4336 37.1742 22.8726L35.3282 21.0136C34.7952 20.4666 33.8792 20.4666 33.3322 21.0136C32.7852 21.5606 32.7992 22.4626 33.3462 23.0096Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.341796875 30.16015625"
          className={className}
        >
          <path
            d="              M27.5759 5.5784C28.4379 5.5784 29.1349 4.8534 29.1349 4.0054V1.5724C29.1349 0.7104 28.4379 0.0004 27.5759 0.0004C26.7149 0.0004 26.0179 0.7104 26.0179 1.5724V4.0054C26.0179 4.8534 26.7149 5.5784 27.5759 5.5784ZM18.8669 8.2574C19.4829 8.8734 20.4809 8.8864 21.0819 8.2854C21.6699 7.6834 21.6559 6.6994 21.0549 6.0704L19.3459 4.3344C18.7579 3.7184 17.7329 3.7324 17.1309 4.3344C16.5289 4.9354 16.5429 5.9334 17.1449 6.5354ZM34.0839 8.2984C34.6859 8.9004 35.6969 8.8734 36.2989 8.2714L38.0219 6.5484C38.6369 5.9474 38.6369 4.9494 38.0349 4.3474C37.4339 3.7464 36.4489 3.7594 35.8339 4.3614L34.0979 6.0704C33.4829 6.6714 33.4959 7.6974 34.0839 8.2984ZM6.6579 30.1604H21.7109C26.0859 30.1604 29.4899 26.8104 29.4899 22.5034C29.4899 22.1754 29.4629 21.8614 29.4359 21.5464C32.4569 20.7674 34.6719 18.0874 34.6719 14.7934C34.6719 10.8554 31.5269 7.7104 27.6169 7.7104C24.2269 7.7104 21.4509 9.9944 20.6989 13.1114C18.9769 11.1154 16.5289 10.0354 13.5629 10.0354C8.7769 10.0354 4.8259 13.4534 4.0739 18.1974C1.5859 18.9904 -0.0001 21.1774 -0.0001 23.8844C-0.0001 27.5214 2.7889 30.1604 6.6579 30.1604ZM27.6039 10.9104C29.7229 10.9104 31.4319 12.6194 31.4319 14.7384C31.4319 16.5974 30.1189 18.1424 28.3969 18.4844C27.3849 16.8164 25.7579 15.5854 23.7759 15.0804C23.7619 14.9574 23.7619 14.8474 23.7619 14.7384C23.7619 12.6194 25.4569 10.9104 27.6039 10.9104ZM38.3359 16.3244H40.7699C41.6449 16.3244 42.3419 15.6404 42.3419 14.7794C42.3419 13.9314 41.6449 13.2204 40.7699 13.2204H38.3359C37.4749 13.2204 36.7499 13.9314 36.7499 14.7794C36.7499 15.6404 37.4749 16.3244 38.3359 16.3244ZM6.7539 26.5374C4.6619 26.5374 3.6229 25.4574 3.6229 23.9254C3.6229 22.5854 4.4709 21.5464 6.3579 21.0684C7.1369 20.8634 7.3419 20.5214 7.4649 19.7284C8.0389 15.7774 10.4729 13.6304 13.5629 13.6304C15.8869 13.6304 17.8279 14.9704 19.1409 17.4314C19.4829 18.0744 19.8379 18.3064 20.6449 18.3064C24.2129 18.3064 25.8669 20.1794 25.8669 22.5584C25.8669 24.8144 24.1719 26.5374 21.6149 26.5374ZM35.8199 25.2104C36.4359 25.8264 37.4199 25.8394 38.0219 25.2384C38.6229 24.6364 38.6099 23.6524 38.0079 23.0234L36.2989 21.2874C35.7109 20.6714 34.6719 20.6854 34.0699 21.2874C33.4829 21.8884 33.4959 22.8864 34.0979 23.4884Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.40234375 27.37109375"
          className={className}
        >
          <path
            d="              M25.4295 5.0452C25.9085 5.0452 26.2915 4.6352 26.2915 4.1832V0.8612C26.2915 0.3832 25.9085 0.0002 25.4295 0.0002C24.9645 0.0002 24.5685 0.3832 24.5685 0.8612V4.1832C24.5685 4.6352 24.9645 5.0452 25.4295 5.0452ZM17.8965 7.6702C18.2385 8.0122 18.7985 7.9982 19.1135 7.6702C19.4275 7.3422 19.4415 6.7952 19.1135 6.4672L16.7485 4.1012C16.4065 3.7732 15.8735 3.7732 15.5445 4.1012C15.2165 4.4292 15.2035 4.9762 15.5445 5.3182ZM31.7465 7.6702C32.0745 7.9982 32.6345 8.0122 32.9625 7.6702L35.3145 5.3182C35.6565 4.9762 35.6425 4.4292 35.3145 4.1012C34.9865 3.7732 34.4535 3.7732 34.1115 4.1012L31.7465 6.4672C31.4185 6.7952 31.4315 7.3422 31.7465 7.6702ZM5.5785 27.3712H20.4665C24.3225 27.3712 27.3165 24.4592 27.3165 20.7402C27.3165 20.6442 27.3165 20.5492 27.3165 20.4532C30.0785 19.5512 32.0465 16.9802 32.0465 13.9862C32.0465 10.3082 29.1075 7.3552 25.4165 7.3552C22.3125 7.3552 19.7425 9.4472 19.0035 12.3182C17.3905 10.4042 15.1345 9.2562 12.4555 9.2562C8.0115 9.2562 4.3345 12.7562 3.8965 17.2402C1.6265 17.8962 0.0005 19.7972 0.0005 22.2852C0.0005 25.1832 2.1875 27.3712 5.5785 27.3712ZM25.4165 8.9002C28.2595 8.9002 30.4885 11.1422 30.4885 13.9862C30.4885 16.2012 29.0805 18.1422 27.0565 18.9082C26.2505 16.1742 23.6385 14.2602 20.3575 14.1782C20.3575 14.1232 20.3575 14.0542 20.3575 13.9862C20.3575 11.1422 22.5855 8.9002 25.4165 8.9002ZM5.5505 25.7032C3.0355 25.7032 1.6545 24.2132 1.6545 22.3262C1.6545 20.6722 2.7075 19.3182 4.7575 18.7442C5.3185 18.5942 5.5095 18.3472 5.5505 17.8012C5.8515 13.8902 8.8865 10.9242 12.4555 10.9242C15.3805 10.9242 17.5415 12.5922 18.8265 15.1482C19.0725 15.6542 19.3595 15.8182 19.9335 15.8182C23.4335 15.8182 25.6485 18.0472 25.6485 20.7812C25.6485 23.5022 23.4065 25.7032 20.4945 25.7032ZM35.2185 14.8472H38.5545C39.0195 14.8472 39.4025 14.4652 39.4025 13.9862C39.4025 13.5212 39.0195 13.1382 38.5545 13.1382H35.2185C34.7535 13.1382 34.3575 13.5212 34.3575 13.9862C34.3575 14.4652 34.7535 14.8472 35.2185 14.8472ZM34.1115 23.8982C34.4535 24.2262 34.9865 24.2132 35.3145 23.8852C35.6425 23.5562 35.6565 23.0102 35.3145 22.6812L32.9495 20.3302C32.6215 20.0022 32.0745 20.0022 31.7465 20.3302C31.4185 20.6582 31.4185 21.2052 31.7465 21.5332Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.345703125 28.21875"
          className={className}
        >
          <path
            d="              M26.0588 5.305C26.7288 5.305 27.2888 4.73 27.2888 4.06V1.23C27.2888 0.547 26.7288 0 26.0588 0C25.3748 0 24.8148 0.547 24.8148 1.23V4.06C24.8148 4.73 25.3748 5.305 26.0588 5.305ZM17.9378 7.943C18.4298 8.435 19.2228 8.422 19.6878 7.957C20.1528 7.478 20.1658 6.699 19.6878 6.221L17.6778 4.197C17.1988 3.719 16.4058 3.719 15.9418 4.197C15.4628 4.662 15.4628 5.455 15.9418 5.934ZM32.4158 7.957C32.8808 8.435 33.6878 8.435 34.1658 7.943L36.1758 5.947C36.6538 5.469 36.6538 4.676 36.1758 4.197C35.6968 3.719 34.9178 3.719 34.4398 4.197L32.4158 6.221C31.9378 6.699 31.9508 7.478 32.4158 7.957ZM6.0018 28.219H20.8498C24.9098 28.219 28.0548 25.143 28.0548 21.178C28.0548 21.068 28.0548 20.973 28.0408 20.863C30.8578 20.002 32.8948 17.404 32.8948 14.314C32.8948 10.514 29.8598 7.465 26.0588 7.465C22.9278 7.465 20.3298 9.516 19.4958 12.359C17.8278 10.459 15.5038 9.365 12.8108 9.365C8.2168 9.365 4.4028 12.852 3.8828 17.404C1.5588 18.129 -0.0002 20.152 -0.0002 22.695C-0.0002 25.908 2.4338 28.219 6.0018 28.219ZM26.0588 9.748C28.6018 9.748 30.5978 11.744 30.5978 14.301C30.5978 16.297 29.3398 17.992 27.5758 18.621C26.6328 16.228 24.3628 14.533 21.5198 14.232C21.5198 11.744 23.5158 9.748 26.0588 9.748ZM5.9748 25.689C3.7188 25.689 2.5288 24.404 2.5288 22.75C2.5288 21.328 3.3768 20.098 5.3598 19.578C6.0428 19.4 6.2758 19.086 6.3438 18.375C6.7268 14.506 9.4748 11.894 12.8108 11.894C15.3948 11.894 17.4178 13.33 18.7028 15.859C19.0038 16.461 19.3598 16.666 20.0698 16.666C23.6108 16.666 25.5258 18.73 25.5258 21.246C25.5258 23.721 23.5428 25.689 20.8628 25.689ZM36.2848 15.545H39.1148C39.7988 15.545 40.3458 14.998 40.3458 14.314C40.3458 13.631 39.7988 13.07 39.1148 13.07H36.2848C35.6148 13.07 35.0408 13.631 35.0408 14.314C35.0408 14.998 35.6148 15.545 36.2848 15.545ZM34.4398 24.432C34.9178 24.924 35.6968 24.91 36.1758 24.432C36.6408 23.953 36.6408 23.174 36.1618 22.695L34.1528 20.685C33.6738 20.221 32.8948 20.207 32.4158 20.685C31.9378 21.164 31.9378 21.957 32.4158 22.435Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.73046875 27.630859375"
          className={className}
        >
          <path
            d="              M25.5802 5.2363C26.2092 5.2363 26.7152 4.7033 26.7152 4.1013V1.1343C26.7152 0.5193 26.2092 0.0003 25.5802 0.0003C24.9512 0.0003 24.4452 0.5193 24.4452 1.1343V4.1013C24.4452 4.7033 24.9512 5.2363 25.5802 5.2363ZM17.6502 7.8613C18.1012 8.3123 18.8402 8.2993 19.2642 7.8613C19.6872 7.4243 19.7012 6.7133 19.2642 6.2753L17.1582 4.1703C16.7212 3.7323 16.0102 3.7323 15.5722 4.1703C15.1352 4.6073 15.1212 5.3323 15.5722 5.7693ZM31.8962 7.8613C32.3202 8.2993 33.0582 8.3123 33.5102 7.8613L35.6012 5.7693C36.0392 5.3323 36.0392 4.6073 35.6012 4.1703C35.1642 3.7323 34.4532 3.7323 34.0152 4.1703L31.8962 6.2753C31.4592 6.7133 31.4722 7.4243 31.8962 7.8613ZM5.7972 27.6313H20.5902C24.5412 27.6313 27.6172 24.6363 27.6172 20.7813C27.6172 20.7543 27.6172 20.7263 27.6172 20.6853C30.3652 19.7973 32.3342 17.2133 32.3342 14.1773C32.3342 10.4183 29.3402 7.3963 25.5802 7.3963C22.5312 7.3963 19.9742 9.3923 19.1272 12.1543C17.4722 10.2813 15.1892 9.1873 12.5782 9.1873C8.0532 9.1873 4.2652 12.6743 3.8142 17.1723C1.5452 17.8833 0.0002 19.8513 0.0002 22.3403C0.0002 25.4163 2.3242 27.6313 5.7972 27.6313ZM25.5802 9.4063C28.2462 9.4063 30.3382 11.4983 30.3382 14.1773C30.3382 16.2283 29.0942 17.9783 27.2752 18.6893C26.4142 16.0643 23.9392 14.2183 20.8222 14.0273C20.9042 11.4163 22.9552 9.4063 25.5802 9.4063ZM5.7422 25.4433C3.4182 25.4433 2.1872 24.1033 2.1872 22.3943C2.1872 20.9453 3.0352 19.6743 5.0452 19.1273C5.7012 18.9633 5.9472 18.6623 6.0022 17.9653C6.3162 14.1363 9.1602 11.3753 12.5782 11.3753C15.2302 11.3753 17.2952 12.8383 18.5662 15.3813C18.8672 15.9683 19.1952 16.1743 19.8922 16.1743C23.4332 16.1743 25.4162 18.3063 25.4162 20.8493C25.4162 23.3923 23.3382 25.4433 20.6312 25.4433ZM35.6422 15.3123H38.6092C39.2242 15.3123 39.7302 14.8063 39.7302 14.1773C39.7302 13.5623 39.2242 13.0433 38.6092 13.0433H35.6422C35.0412 13.0433 34.5082 13.5623 34.5082 14.1773C34.5082 14.8063 35.0412 15.3123 35.6422 15.3123ZM34.0152 24.2133C34.4532 24.6503 35.1642 24.6363 35.6012 24.1993C36.0392 23.7613 36.0392 23.0373 35.6012 22.6133L33.4822 20.5213C33.0452 20.0973 32.3342 20.0843 31.8962 20.5213C31.4592 20.9593 31.4592 21.6833 31.8962 22.1213Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.82421875 28.68359375"
          className={className}
        >
          <path
            d="              M26.4145 5.3731C27.1385 5.3731 27.7265 4.7581 27.7265 4.0601V1.3121C27.7265 0.5881 27.1385 0.0001 26.4145 0.0001C25.6895 0.0001 25.1015 0.5881 25.1015 1.3121V4.0601C25.1015 4.7581 25.6895 5.3731 26.4145 5.3731ZM18.1565 8.0251C18.6755 8.5451 19.5235 8.5311 20.0295 8.0391C20.5215 7.5331 20.5215 6.6991 20.0155 6.1931L18.0745 4.2241C17.5685 3.7191 16.7205 3.7191 16.2145 4.2241C15.7085 4.7301 15.7225 5.5781 16.2285 6.0841ZM32.8125 8.0391C33.3045 8.5451 34.1665 8.5451 34.6855 8.0251L36.6135 6.0841C37.1195 5.5781 37.1195 4.7441 36.6135 4.2381C36.1075 3.7321 35.2875 3.7321 34.7675 4.2521L32.8265 6.1931C32.3065 6.6991 32.3205 7.5331 32.8125 8.0391ZM6.1525 28.6831H21.0545C25.1835 28.6831 28.3965 25.5391 28.3965 21.4921C28.3965 21.3421 28.3965 21.1781 28.3825 21.0271C31.2405 20.1801 33.3185 17.5681 33.3185 14.4371C33.3185 10.5961 30.2555 7.5191 26.4275 7.5191C23.2425 7.5191 20.5895 9.6391 19.7835 12.5371C18.1015 10.6231 15.7495 9.5291 12.9885 9.5291C8.3535 9.5291 4.5115 12.9881 3.9235 17.5961C1.5585 18.3341 -0.0005 20.3981 -0.0005 22.9821C-0.0005 26.2911 2.5155 28.6831 6.1525 28.6831ZM26.4275 10.0211C28.8615 10.0211 30.7895 11.9631 30.7895 14.4101C30.7895 16.3651 29.5445 18.0191 27.7945 18.5801C26.7965 16.3651 24.6775 14.7931 22.0525 14.4241V14.4101C22.0525 11.9631 23.9805 10.0211 26.4275 10.0211ZM6.1665 25.8941C3.9375 25.8941 2.7895 24.6641 2.7895 23.0231C2.7895 21.6291 3.6365 20.4531 5.5915 19.9331C6.3025 19.7421 6.5355 19.4281 6.6175 18.7031C7.0415 14.8061 9.7205 12.3051 12.9885 12.3051C15.5175 12.3051 17.5135 13.7261 18.8125 16.2281C19.1265 16.8441 19.4685 17.0621 20.2075 17.0621C23.7615 17.0621 25.6075 19.0861 25.6075 21.5601C25.6075 23.9801 23.6935 25.8941 21.0415 25.8941ZM36.7635 15.7231H39.5115C40.2365 15.7231 40.8245 15.1481 40.8245 14.4241C40.8245 13.6991 40.2365 13.1111 39.5115 13.1111H36.7635C36.0525 13.1111 35.4515 13.6991 35.4515 14.4241C35.4515 15.1481 36.0525 15.7231 36.7635 15.7231ZM34.7675 24.6231C35.2875 25.1421 36.1075 25.1291 36.6135 24.6231C37.1195 24.1171 37.1055 23.2831 36.5995 22.7771L34.6585 20.8361C34.1665 20.3301 33.3185 20.3301 32.8125 20.8361C32.3065 21.3421 32.3205 22.1761 32.8265 22.6811Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.978515625 27.04296875"
          className={className}
        >
          <path
            d="              M25.2384 4.7991C25.4984 4.7991 25.7304 4.5661 25.7304 4.3071V0.4921C25.7304 0.2191 25.4984 0.0001 25.2384 0.0001C24.9644 0.0001 24.7324 0.2191 24.7324 0.4921V4.3071C24.7324 4.5661 24.9644 4.7991 25.2384 4.7991ZM18.2244 7.4371C18.4164 7.6291 18.7304 7.6151 18.9214 7.4371C19.0994 7.2461 19.0994 6.9321 18.9214 6.7401L16.2144 4.0331C16.0094 3.8281 15.7094 3.8421 15.5174 4.0331C15.3264 4.2241 15.3124 4.5251 15.5174 4.7301ZM31.5544 7.4371C31.7324 7.6151 32.0604 7.6291 32.2524 7.4371L34.9454 4.7301C35.1504 4.5251 35.1364 4.2241 34.9454 4.0331C34.7534 3.8421 34.4534 3.8281 34.2484 4.0331L31.5544 6.7401C31.3634 6.9321 31.3634 7.2461 31.5544 7.4371ZM5.3044 27.0431H20.3024C24.0214 27.0431 26.9334 24.2261 26.9334 20.6721C26.9334 20.4941 26.9204 20.3161 26.9064 20.1391C29.6954 19.2501 31.6644 16.6801 31.6644 13.7541C31.6644 10.1581 28.7934 7.2871 25.2244 7.2871C22.0394 7.2871 19.4144 9.5701 18.8804 12.6051C17.2954 10.6091 15.0804 9.3791 12.2914 9.3791C7.9704 9.3791 4.4024 12.8791 4.0054 17.3361C1.7504 17.9371 0.0004 19.7281 0.0004 22.2301C0.0004 24.8961 2.0094 27.0431 5.3044 27.0431ZM25.2244 8.2581C28.2874 8.2581 30.6934 10.6781 30.6934 13.7541C30.6934 16.1871 29.0804 18.3751 26.7554 19.1951C26.0454 16.3921 23.3924 14.4241 20.0434 14.3961C19.9474 14.2191 19.8514 14.0411 19.7424 13.8771C19.7424 13.8361 19.7424 13.7951 19.7424 13.7541C19.7424 10.6781 22.1484 8.2581 25.2244 8.2581ZM5.2914 26.0581C2.5154 26.0581 0.9704 24.3491 0.9704 22.2441C0.9704 20.3161 2.2694 18.8531 4.3884 18.2381C4.8124 18.1151 4.9354 17.9511 4.9624 17.5961C5.2364 13.5761 8.5314 10.3491 12.2914 10.3491C15.5724 10.3491 17.8824 12.2911 19.1684 14.8611C19.3594 15.2301 19.5644 15.3531 20.0024 15.3531C23.4614 15.3531 25.9624 17.7321 25.9624 20.7131C25.9624 23.6661 23.4744 26.0581 20.3024 26.0581ZM34.6444 14.2321H38.4724C38.7594 14.2321 38.9784 14.0141 38.9784 13.7541C38.9784 13.4801 38.7594 13.2621 38.4724 13.2621H34.6444C34.3714 13.2621 34.1524 13.4801 34.1524 13.7541C34.1524 14.0141 34.3714 14.2321 34.6444 14.2321ZM34.2484 23.4741C34.4534 23.6801 34.7534 23.6661 34.9454 23.4741C35.1364 23.2831 35.1504 22.9821 34.9454 22.7771L32.2384 20.0841C32.0604 19.8921 31.7464 19.8921 31.5544 20.0841C31.3634 20.2751 31.3634 20.5901 31.5544 20.7811Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.759765625 26.865234375"
          className={className}
        >
          <path
            d="              M25.1427 4.6618C25.3067 4.6618 25.4567 4.5117 25.4567 4.3747V0.3008C25.4567 0.1367 25.3067 -0.0003 25.1427 -0.0003C24.9787 -0.0003 24.8277 0.1367 24.8277 0.3008V4.3747C24.8277 4.5117 24.9787 4.6618 25.1427 4.6618ZM18.3887 7.3008C18.5117 7.4237 18.7027 7.4237 18.8257 7.3008C18.9357 7.1917 18.9357 6.9868 18.8257 6.8768L15.9547 3.9918C15.8187 3.8558 15.6267 3.8828 15.5177 3.9918C15.3947 4.1148 15.3807 4.2928 15.5177 4.4297ZM31.4587 7.3008C31.5817 7.4237 31.7737 7.4237 31.8967 7.3008L34.7677 4.4297C34.9047 4.2928 34.8767 4.1148 34.7677 3.9918C34.6447 3.8828 34.4667 3.8558 34.3297 3.9918L31.4587 6.8768C31.3357 6.9868 31.3357 7.1917 31.4587 7.3008ZM5.1677 26.8648H20.2207C23.8847 26.8648 26.7417 24.1038 26.7417 20.6448C26.7417 20.4258 26.7287 20.2068 26.7007 19.9888C29.5037 19.0858 31.4727 16.5158 31.4727 13.6168C31.4727 10.0758 28.6427 7.2598 25.1287 7.2598C21.8887 7.2598 19.2497 9.6388 18.8397 12.7558C17.2677 10.7188 15.0667 9.4338 12.2087 9.4338C7.9567 9.4338 4.4567 12.9338 4.0737 17.3908C1.8187 17.9648 -0.0003 19.6878 -0.0003 22.1898C-0.0003 24.7328 1.9277 26.8648 5.1677 26.8648ZM25.1287 7.9157C28.3147 7.9157 30.8167 10.4317 30.8167 13.6168C30.8167 16.1737 29.0937 18.4978 26.5917 19.3318C25.9627 16.5158 23.3107 14.5328 19.9477 14.5058C19.7827 14.2048 19.6187 13.9048 19.4417 13.6308V13.6168C19.4417 10.4317 21.9437 7.9157 25.1287 7.9157ZM5.1817 26.2498C2.2697 26.2498 0.6157 24.4178 0.6157 22.1898C0.6157 20.1248 2.0647 18.6208 4.2107 17.9787C4.5527 17.8688 4.6617 17.7458 4.6757 17.4727C4.9357 13.4118 8.3537 10.0488 12.2087 10.0488C15.6817 10.0488 18.0607 12.1408 19.3597 14.6978C19.5097 15.0118 19.6737 15.1078 20.0427 15.1078C23.4747 15.1078 26.1267 17.5547 26.1267 20.6718C26.1267 23.7347 23.5297 26.2498 20.2207 26.2498ZM34.3577 13.9178H38.4457C38.6227 13.9178 38.7597 13.7808 38.7597 13.6168C38.7597 13.4528 38.6227 13.3168 38.4457 13.3168H34.3577C34.1937 13.3168 34.0567 13.4528 34.0567 13.6168C34.0567 13.7808 34.1937 13.9178 34.3577 13.9178ZM34.3297 23.2697C34.4667 23.3928 34.6447 23.3788 34.7677 23.2697C34.8767 23.1468 34.9047 22.9688 34.7677 22.8318L31.8967 19.9608C31.7737 19.8378 31.5817 19.8378 31.4587 19.9608C31.3357 20.0708 31.3357 20.2758 31.4587 20.3848Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
