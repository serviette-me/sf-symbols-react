import { IconProps } from "../../types"

export default function MoonStarsIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.240234375 33.619140625"
          className={className}
        >
          <path
            d="              M18.8806 7.0135C19.1406 7.0135 19.3186 6.8355 19.3596 6.5765C19.6736 4.3755 19.6736 4.3755 21.9436 3.9785C22.2446 3.9235 22.4086 3.7595 22.4086 3.5005C22.4086 3.2535 22.2446 3.0765 21.9846 3.0355C19.6466 2.5565 19.6326 2.5705 19.3596 0.4515C19.3186 0.1775 19.1406 0.0005 18.8806 0.0005C18.6206 0.0005 18.4436 0.1775 18.4026 0.4375C18.1016 2.6795 18.1016 2.7075 15.7906 3.0355C15.5446 3.0625 15.3536 3.2535 15.3536 3.5005C15.3536 3.7595 15.5316 3.9235 15.7776 3.9785C18.1016 4.4575 18.0746 4.4435 18.4026 6.5895C18.4436 6.8355 18.6206 7.0135 18.8806 7.0135ZM14.4106 33.6195C20.1526 33.6195 25.2656 30.2555 27.6036 25.0335C28.2326 23.6385 28.0406 22.5585 27.3846 21.9575C26.7426 21.3695 25.6626 21.2465 24.5546 21.7795C23.5426 22.2575 22.1896 22.5175 20.8496 22.5175C14.9566 22.5175 11.2386 19.0035 11.2386 13.2615C11.2386 11.7035 11.6076 10.1445 12.0996 8.9685C12.6466 7.6835 12.5646 6.7675 11.9766 6.1115C11.3336 5.4005 10.2406 5.3325 8.9826 5.8245C3.5406 7.9985 -0.0004 13.3435 -0.0004 19.2225C-0.0004 27.5075 6.0836 33.6195 14.4106 33.6195ZM25.5666 17.2265C25.9766 17.2265 26.2776 16.9395 26.3316 16.5155C26.7556 13.0155 26.8516 12.8655 30.4886 12.3455C30.9666 12.2775 31.2406 11.9905 31.2406 11.5805C31.2406 11.1835 30.9666 10.8965 30.5706 10.8145C26.8376 10.0215 26.7556 10.1175 26.3316 6.6445C26.2776 6.2205 25.9766 5.9335 25.5666 5.9335C25.1566 5.9335 24.8556 6.2205 24.8006 6.6305C24.3496 10.2405 24.2676 10.3225 20.5766 10.8145C20.1936 10.8695 19.9066 11.1835 19.9066 11.5805C19.9066 11.9765 20.1796 12.2635 20.5626 12.3455C24.3086 13.1385 24.3496 13.0565 24.8006 16.5425C24.8556 16.9395 25.1836 17.2265 25.5666 17.2265ZM14.4106 28.7795C8.9006 28.7795 4.8266 24.7055 4.8266 19.2085C4.8266 17.0355 5.5646 14.6565 6.9866 12.9475C6.9456 13.3435 6.9176 13.7535 6.9176 14.1645C6.9176 21.8475 11.9086 26.7695 19.7966 26.7695C19.9606 26.7695 20.1526 26.7695 20.2616 26.7555C18.6896 28.0955 16.5296 28.7795 14.4106 28.7795Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.298828125 31.0078125"
          className={className}
        >
          <path
            d="              M17.2126 6.8362C17.4316 6.8362 17.5686 6.6852 17.5956 6.4802C17.9646 4.2522 17.9646 4.2242 20.2756 3.8012C20.5076 3.7602 20.6446 3.6232 20.6446 3.4182C20.6446 3.1992 20.5076 3.0762 20.3026 3.0352C17.9516 2.5562 17.9786 2.5432 17.5956 0.3552C17.5686 0.1372 17.4316 0.0002 17.2126 0.0002C17.0076 0.0002 16.8706 0.1372 16.8436 0.3422C16.4476 2.5972 16.4886 2.6252 14.1506 3.0352C13.9456 3.0622 13.7946 3.1992 13.7946 3.4182C13.7946 3.6232 13.9316 3.7602 14.1366 3.8012C16.4886 4.2652 16.4606 4.2792 16.8436 6.4942C16.8706 6.6852 17.0076 6.8362 17.2126 6.8362ZM13.1796 31.0082C18.5526 31.0082 23.1326 28.0682 25.2246 23.3102C25.6616 22.3262 25.5256 21.5602 25.0746 21.1232C24.6226 20.6992 23.8846 20.6172 23.0776 20.9862C22.0526 21.4242 20.7536 21.6702 19.3046 21.6702C13.3026 21.6702 9.4746 18.0062 9.4746 12.1402C9.4746 10.5272 9.8166 8.9282 10.2816 7.9162C10.6776 7.0002 10.6226 6.3032 10.2126 5.8382C9.7616 5.3322 8.9826 5.2502 8.0386 5.6192C3.2126 7.5602 -0.0004 12.4282 -0.0004 17.9102C-0.0004 25.3882 5.4956 31.0082 13.1796 31.0082ZM23.8296 16.5562C24.1586 16.5562 24.4046 16.3242 24.4456 15.9822C24.8826 12.4002 25.0196 12.2912 28.6836 11.7302C29.0796 11.6622 29.2986 11.4572 29.2986 11.1152C29.2986 10.7872 29.0796 10.5682 28.7656 10.5002C25.0336 9.7482 24.8826 9.8032 24.4456 6.2342C24.4046 5.8922 24.1586 5.6602 23.8296 5.6602C23.5016 5.6602 23.2556 5.8922 23.2146 6.2202C22.7636 9.8852 22.6546 9.9942 18.9086 10.5002C18.5936 10.5412 18.3616 10.7872 18.3616 11.1152C18.3616 11.4292 18.5936 11.6622 18.9086 11.7302C22.6676 12.4822 22.7496 12.4412 23.2146 16.0102C23.2556 16.3242 23.5156 16.5562 23.8296 16.5562ZM13.1936 27.5492C7.5196 27.5492 3.4586 23.3792 3.4586 17.8282C3.4586 15.0252 4.6206 12.3182 6.6036 10.4862C6.4256 11.1292 6.3166 12.0172 6.3166 12.8792C6.3166 20.0972 11.1286 24.8142 18.5116 24.8142C19.2086 24.8142 19.8656 24.7192 20.2206 24.6232C18.5666 26.4692 15.9686 27.5492 13.1936 27.5492Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.32421875 32.40234375"
          className={className}
        >
          <path
            d="              M18.1016 6.9455C18.3336 6.9455 18.4976 6.7675 18.5256 6.5485C18.8676 4.3205 18.8676 4.3065 21.1506 3.8965C21.4236 3.8555 21.5746 3.7055 21.5746 3.4725C21.5746 3.2405 21.4236 3.0895 21.1916 3.0355C18.8536 2.5705 18.8536 2.5705 18.5256 0.4105C18.4976 0.1645 18.3336 -0.0005 18.1016 -0.0005C17.8696 -0.0005 17.7046 0.1645 17.6636 0.3965C17.3226 2.6525 17.3356 2.6795 15.0116 3.0355C14.7926 3.0765 14.6156 3.2405 14.6156 3.4725C14.6156 3.7055 14.7796 3.8555 15.0116 3.8965C17.3356 4.3745 17.3226 4.3745 17.6636 6.5485C17.7046 6.7675 17.8696 6.9455 18.1016 6.9455ZM13.8226 32.4025C19.4006 32.4025 24.2536 29.2305 26.4826 24.2405C27.0296 23.0235 26.8516 22.0935 26.2906 21.5745C25.7446 21.0685 24.8286 20.9585 23.8576 21.4105C22.8456 21.8745 21.5056 22.1215 20.1246 22.1215C14.1776 22.1215 10.4176 18.5395 10.4176 12.7425C10.4176 11.1565 10.7596 9.5835 11.2386 8.4765C11.7166 7.3695 11.6486 6.5625 11.1426 5.9885C10.5956 5.3735 9.6386 5.2905 8.5316 5.7425C3.3906 7.7925 -0.0004 12.9195 -0.0004 18.6075C-0.0004 26.5235 5.8106 32.4025 13.8226 32.4025ZM24.7456 16.9255C25.1286 16.9255 25.4026 16.6655 25.4436 16.2695C25.8676 12.7285 25.9906 12.6055 29.6406 12.0585C30.0786 12.0035 30.3246 11.7445 30.3246 11.3615C30.3246 11.0055 30.0786 10.7465 29.7226 10.6775C25.9906 9.8985 25.8676 9.9805 25.4436 6.4665C25.4026 6.0705 25.1286 5.8105 24.7456 5.8105C24.3766 5.8105 24.1036 6.0705 24.0626 6.4395C23.5976 10.0895 23.5156 10.1715 19.7966 10.6775C19.4416 10.7185 19.1816 11.0055 19.1816 11.3615C19.1816 11.7305 19.4276 11.9905 19.7836 12.0585C23.5296 12.8375 23.5976 12.7835 24.0626 16.3105C24.1036 16.6655 24.3906 16.9255 24.7456 16.9255ZM13.8356 28.2055C8.2446 28.2055 4.1836 24.0895 4.1836 18.5665C4.1836 16.0915 5.1266 13.5625 6.8086 11.7985C6.6996 12.3045 6.6306 12.9475 6.6306 13.5625C6.6306 21.0275 11.5386 25.8535 19.1956 25.8535C19.6196 25.8535 20.0156 25.8125 20.2476 25.7575C18.6346 27.3435 16.2696 28.2055 13.8356 28.2055Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.755859375 27.794921875"
          className={className}
        >
          <path
            d="              M15.1757 6.535C15.2987 6.535 15.3677 6.467 15.3947 6.344C15.7777 4.033 15.8047 3.937 18.2247 3.5C18.3617 3.473 18.4437 3.404 18.4437 3.268C18.4437 3.131 18.3617 3.062 18.2247 3.035C15.8187 2.557 15.9137 2.461 15.3947 0.205C15.3677 0.068 15.2987 0 15.1757 0C15.0527 0 14.9847 0.068 14.9567 0.205C14.4377 2.461 14.5607 2.557 12.1267 3.035C11.9907 3.062 11.9087 3.131 11.9087 3.268C11.9087 3.404 11.9907 3.473 12.1267 3.5C14.5607 3.992 14.5467 4.033 14.9567 6.344C14.9847 6.467 15.0527 6.535 15.1757 6.535ZM11.6207 27.795C16.5707 27.795 20.5487 25.389 22.3807 21.26C22.5857 20.781 22.5317 20.385 22.3127 20.152C22.1077 19.934 21.7517 19.893 21.3277 20.057C20.2617 20.467 19.0177 20.713 17.4047 20.713C11.1837 20.713 7.2187 16.885 7.2187 10.664C7.2187 9.105 7.5057 7.52 7.9977 6.494C8.2307 6.029 8.2027 5.633 7.9847 5.387C7.7517 5.127 7.3417 5.059 6.7817 5.305C2.7757 7.096 -0.0003 11.266 -0.0003 16.242C-0.0003 22.75 4.6487 27.795 11.6207 27.795ZM21.7107 15.49C21.9027 15.49 22.0527 15.354 22.0797 15.148C22.5727 11.484 22.6817 11.471 26.4007 10.814C26.6187 10.773 26.7557 10.664 26.7557 10.445C26.7557 10.254 26.6187 10.117 26.4277 10.09C22.7087 9.365 22.5727 9.434 22.0797 5.756C22.0527 5.551 21.9027 5.414 21.7107 5.414C21.5197 5.414 21.3687 5.551 21.3417 5.756C20.8227 9.447 20.7817 9.488 16.9937 10.09C16.8027 10.117 16.6657 10.254 16.6657 10.445C16.6657 10.65 16.8027 10.773 16.9937 10.814C20.7817 11.553 20.8227 11.512 21.3417 15.162C21.3687 15.354 21.5197 15.49 21.7107 15.49ZM11.6347 26.195C5.6187 26.195 1.5997 21.793 1.5997 16.133C1.5997 12.414 3.5277 9.187 6.3027 7.219C5.9067 8.162 5.6737 9.625 5.6737 11.061C5.6737 17.883 10.1997 22.271 17.0627 22.271C18.4157 22.271 19.6597 22.053 20.3847 21.807C18.6757 24.514 15.3947 26.195 11.6347 26.195Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.068359375 29.33984375"
          className={className}
        >
          <path
            d="              M16.1603 6.7268C16.3383 6.7268 16.4473 6.6038 16.4743 6.4398C16.8713 4.1698 16.8573 4.1288 19.2223 3.6778C19.4003 3.6508 19.5093 3.5408 19.5093 3.3628C19.5093 3.1858 19.4003 3.0758 19.2223 3.0488C16.8573 2.5698 16.9123 2.5288 16.4743 0.3008C16.4473 0.1228 16.3383 -0.0002 16.1603 -0.0002C15.9823 -0.0002 15.8733 0.1228 15.8453 0.2868C15.3943 2.5428 15.4633 2.5978 13.0843 3.0488C12.9203 3.0758 12.7973 3.1858 12.7973 3.3628C12.7973 3.5408 12.9063 3.6508 13.0843 3.6778C15.4633 4.1558 15.4223 4.1838 15.8453 6.4398C15.8733 6.6038 15.9823 6.7268 16.1603 6.7268ZM12.4003 29.3398C17.5413 29.3398 21.7793 26.6738 23.7073 22.2168C24.0213 21.4918 23.9253 20.9178 23.5843 20.5898C23.2833 20.2888 22.7363 20.2348 22.1483 20.4808C21.1093 20.9038 19.8513 21.1368 18.3203 21.1368C12.2363 21.1368 8.3403 17.3768 8.3403 11.4298C8.3403 9.7888 8.6683 8.1618 9.1053 7.2328C9.4203 6.5628 9.3923 6.0158 9.0913 5.6598C8.7633 5.2908 8.1893 5.1948 7.4373 5.4958C3.0073 7.2868 0.0003 11.8538 0.0003 17.0898C0.0003 24.0348 5.1273 29.3398 12.4003 29.3398ZM22.7223 16.1468C23.0093 16.1468 23.2013 15.9418 23.2423 15.6538C23.6793 12.0178 23.8433 11.9218 27.5353 11.3338C27.8633 11.2928 28.0683 11.1148 28.0683 10.8148C28.0683 10.5408 27.8633 10.3498 27.6033 10.3088C23.8713 9.5838 23.6793 9.6118 23.2423 5.9878C23.2013 5.6878 23.0093 5.4958 22.7223 5.4958C22.4493 5.4958 22.2443 5.6878 22.2033 5.9748C21.7383 9.6658 21.6153 9.7758 17.8553 10.3088C17.5823 10.3358 17.3903 10.5408 17.3903 10.8148C17.3903 11.1018 17.5823 11.2788 17.8413 11.3338C21.6293 12.0718 21.7243 12.0588 22.2033 15.6818C22.2443 15.9418 22.4493 16.1468 22.7223 16.1468ZM12.4143 26.7558C6.6443 26.7558 2.5843 22.5448 2.5843 16.9528C2.5843 13.7398 4.0333 10.8148 6.3713 8.9278C6.0843 9.7208 5.9203 10.9098 5.9203 12.0718C5.9203 18.9768 10.6363 23.5568 17.7053 23.5568C18.7303 23.5568 19.6873 23.4198 20.1933 23.2698C18.4983 25.4438 15.6133 26.7558 12.4143 26.7558Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.357421875 28.396484375"
          className={className}
        >
          <path
            d="              M15.5587 6.6449C15.7227 6.6449 15.8047 6.5489 15.8317 6.3989C16.2557 4.1149 16.2427 4.0609 18.6207 3.6089C18.7717 3.5819 18.8807 3.4859 18.8807 3.3219C18.8807 3.1579 18.7717 3.0629 18.6207 3.0349C16.2427 2.5569 16.3247 2.5019 15.8317 0.2459C15.8047 0.0959 15.7227 -0.0001 15.5587 -0.0001C15.3947 -0.0001 15.2987 0.0959 15.2717 0.2459C14.7927 2.5019 14.8747 2.5569 12.4957 3.0349C12.3317 3.0629 12.2367 3.1579 12.2367 3.3219C12.2367 3.4859 12.3317 3.5819 12.4957 3.6089C14.8747 4.0879 14.8477 4.1149 15.2717 6.3989C15.2987 6.5489 15.3947 6.6449 15.5587 6.6449ZM11.9497 28.3969C16.9527 28.3969 21.0137 25.8809 22.8457 21.5879C23.0917 21.0139 23.0097 20.5489 22.7497 20.2889C22.5177 20.0429 22.0937 20.0019 21.6157 20.1799C20.5767 20.5899 19.3317 20.8359 17.7597 20.8359C11.6347 20.8359 7.7107 17.0079 7.7107 11.0199C7.7107 9.3649 8.0257 7.7109 8.4497 6.8499C8.7087 6.3159 8.6957 5.8379 8.4497 5.5649C8.1897 5.2639 7.7247 5.1679 7.0957 5.4139C2.8987 7.1229 -0.0003 11.5119 -0.0003 16.6109C-0.0003 23.2699 4.9087 28.3969 11.9497 28.3969ZM22.0937 15.8999C22.3537 15.8999 22.5317 15.7229 22.5587 15.4489C23.0097 11.7989 23.1877 11.7029 26.8927 11.1019C27.1797 11.0609 27.3577 10.9099 27.3577 10.6499C27.3577 10.3909 27.1797 10.2269 26.9477 10.1859C23.2147 9.4749 23.0097 9.4879 22.5587 5.8379C22.5317 5.5649 22.3537 5.3869 22.0937 5.3869C21.8477 5.3869 21.6697 5.5649 21.6287 5.8239C21.1637 9.5289 21.0277 9.6519 17.2407 10.1859C17.0077 10.2129 16.8297 10.3909 16.8297 10.6499C16.8297 10.8969 17.0077 11.0609 17.2407 11.1019C21.0277 11.8259 21.1507 11.8259 21.6287 15.4769C21.6697 15.7229 21.8477 15.8999 22.0937 15.8999ZM11.9767 26.3049C6.1527 26.3049 2.0917 22.0529 2.0917 16.4469C2.0917 13.0159 3.6917 9.9669 6.2347 8.0249C5.8927 8.9279 5.7017 10.2809 5.7017 11.5939C5.7017 18.3339 10.3497 22.8459 17.2407 22.8459C18.4567 22.8459 19.5777 22.6819 20.1657 22.4899C18.4567 24.8559 15.4087 26.3049 11.9767 26.3049Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.587890625 30.05078125"
          className={className}
        >
          <path
            d="              M16.611 6.7673C16.803 6.7673 16.926 6.6313 16.953 6.4533C17.336 4.1973 17.336 4.1563 19.674 3.7323C19.879 3.6913 20.002 3.5683 20.002 3.3773C20.002 3.1853 19.879 3.0763 19.688 3.0353C17.322 2.5563 17.377 2.5293 16.953 0.3143C16.926 0.1233 16.803 0.0003 16.611 0.0003C16.42 0.0003 16.297 0.1233 16.27 0.3143C15.846 2.5563 15.9 2.5973 13.535 3.0353C13.357 3.0623 13.221 3.1853 13.221 3.3773C13.221 3.5683 13.344 3.6913 13.535 3.7323C15.9 4.1973 15.873 4.2243 16.27 6.4533C16.297 6.6313 16.42 6.7673 16.611 6.7673ZM12.729 30.0503C17.965 30.0503 22.354 27.2753 24.363 22.6953C24.732 21.8473 24.609 21.1913 24.227 20.8223C23.857 20.4663 23.229 20.3983 22.545 20.6853C21.52 21.1233 20.234 21.3693 18.744 21.3693C12.688 21.3693 8.832 17.6503 8.832 11.7303C8.832 10.1033 9.16 8.4903 9.611 7.5193C9.967 6.7543 9.926 6.1383 9.57 5.7423C9.188 5.3043 8.518 5.2093 7.684 5.5503C3.104 7.3963 0 12.0993 0 17.4453C0 24.6233 5.277 30.0503 12.729 30.0503ZM23.201 16.3243C23.502 16.3243 23.721 16.1053 23.762 15.7913C24.199 12.1813 24.35 12.0723 28.027 11.4983C28.383 11.4433 28.588 11.2523 28.588 10.9373C28.588 10.6363 28.383 10.4453 28.096 10.3773C24.363 9.6523 24.199 9.6933 23.762 6.0973C23.721 5.7693 23.502 5.5643 23.201 5.5643C22.9 5.5643 22.682 5.7693 22.641 6.0703C22.176 9.7613 22.066 9.8713 18.307 10.3773C18.02 10.4183 17.801 10.6363 17.801 10.9373C17.801 11.2383 18.02 11.4433 18.293 11.4983C22.066 12.2503 22.162 12.2223 22.641 15.8183C22.682 16.1053 22.9 16.3243 23.201 16.3243ZM12.742 27.0973C7.014 27.0973 2.953 22.9003 2.953 17.3223C2.953 14.2873 4.279 11.4573 6.467 9.5973C6.234 10.3363 6.084 11.3883 6.084 12.4143C6.084 19.4553 10.842 24.0903 18.047 24.0903C18.936 24.0903 19.756 23.9803 20.193 23.8433C18.525 25.8813 15.764 27.0973 12.742 27.0973Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.962890625 27.001953125"
          className={className}
        >
          <path
            d="              M14.6697 6.3843C14.7517 6.3843 14.7927 6.3573 14.8207 6.2753C15.1487 3.9103 15.2307 3.7733 17.7187 3.3493C17.8147 3.3363 17.8687 3.2813 17.8687 3.1993C17.8687 3.1033 17.8147 3.0623 17.7187 3.0353C15.2437 2.5433 15.3677 2.3923 14.8207 0.1233C14.7927 0.0413 14.7517 0.0003 14.6697 0.0003C14.6017 0.0003 14.5467 0.0413 14.5337 0.1233C13.9727 2.3923 14.1367 2.5433 11.6347 3.0353C11.5257 3.0623 11.4847 3.1033 11.4847 3.1993C11.4847 3.2813 11.5257 3.3363 11.6347 3.3493C14.1367 3.8553 14.1637 3.9103 14.5337 6.2753C14.5467 6.3573 14.6017 6.3843 14.6697 6.3843ZM11.1837 27.0023C16.0367 27.0023 19.9477 24.7463 21.7657 20.8223C21.9157 20.4663 21.9027 20.1523 21.7387 19.9743C21.5747 19.7973 21.3007 19.7423 20.9317 19.8793C19.8377 20.2893 18.6077 20.5623 16.9397 20.5623C10.5817 20.5623 6.5897 16.7203 6.5897 10.1853C6.5897 8.7773 6.8227 7.2593 7.4097 6.0293C7.5877 5.6603 7.5467 5.3453 7.3687 5.1403C7.1777 4.9493 6.8227 4.9083 6.3577 5.1403C2.6247 7.0413 -0.0003 10.9373 -0.0003 15.7633C-0.0003 22.0523 4.3207 27.0023 11.1837 27.0023ZM21.2047 14.9573C21.3277 14.9573 21.4097 14.8753 21.4377 14.7383C22.0117 11.0603 22.0117 11.1423 25.7437 10.4313C25.8677 10.4043 25.9627 10.3363 25.9627 10.1993C25.9627 10.0623 25.8677 9.9803 25.7437 9.9533C22.0257 9.2153 22.0117 9.3513 21.4377 5.6603C21.4097 5.5093 21.3277 5.4413 21.2047 5.4413C21.0817 5.4413 20.9867 5.5093 20.9727 5.6463C20.3847 9.3243 20.4397 9.2563 16.6527 9.9533C16.5297 9.9803 16.4477 10.0623 16.4477 10.1993C16.4477 10.3363 16.5297 10.4043 16.6527 10.4313C20.4397 11.1703 20.3847 11.0743 20.9727 14.7383C20.9867 14.8753 21.0817 14.9573 21.2047 14.9573ZM11.1977 26.0453C4.9087 26.0453 0.9707 21.4513 0.9707 15.7223C0.9707 11.6213 3.2947 8.1343 6.4117 6.1523C5.9337 7.1643 5.6467 8.7503 5.6467 10.3363C5.6467 17.2673 10.0077 21.5193 16.8297 21.5193C18.3617 21.5193 19.7697 21.2323 20.6857 20.8903C18.9767 24.0623 15.3807 26.0453 11.1977 26.0453Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.552734375 26.591796875"
          className={className}
        >
          <path
            d="              M14.4097 6.3025C14.4647 6.3025 14.4927 6.2895 14.5197 6.2205C14.8337 3.8415 14.9297 3.6645 17.4457 3.2675C17.5407 3.2535 17.5687 3.2125 17.5687 3.1445C17.5687 3.0895 17.5407 3.0485 17.4457 3.0355C14.9567 2.5295 15.0937 2.3515 14.5197 0.0825C14.4927 0.0135 14.4647 0.0005 14.4097 0.0005C14.3687 0.0005 14.3277 0.0135 14.3147 0.0825C13.7407 2.3515 13.9317 2.5295 11.3747 3.0355C11.2927 3.0485 11.2657 3.0895 11.2657 3.1445C11.2657 3.2125 11.2927 3.2535 11.3747 3.2675C13.9317 3.7735 13.9587 3.8415 14.3147 6.2205C14.3277 6.2895 14.3687 6.3025 14.4097 6.3025ZM10.9647 26.5915C15.7777 26.5915 19.6467 24.4045 21.4377 20.5895C21.5747 20.2895 21.5877 20.0155 21.4377 19.8655C21.3007 19.7145 21.0687 19.6605 20.7407 19.7835C19.6187 20.1935 18.4027 20.4805 16.7067 20.4805C10.2817 20.4805 6.2617 16.6255 6.2617 9.9395C6.2617 8.5995 6.4667 7.1235 7.0957 5.7835C7.2597 5.4555 7.2187 5.1815 7.0407 5.0175C6.8767 4.8395 6.5627 4.8265 6.1527 5.0445C2.5427 7.0135 -0.0003 10.7735 -0.0003 15.5035C-0.0003 21.6975 4.1427 26.5915 10.9647 26.5915ZM20.9457 14.6695C21.0277 14.6695 21.0957 14.6155 21.1097 14.5195C21.7247 10.8285 21.6697 10.9785 25.4027 10.2265C25.4847 10.2125 25.5527 10.1585 25.5527 10.0485C25.5527 9.9535 25.4847 9.8985 25.4027 9.8845C21.6837 9.1325 21.7247 9.2965 21.1097 5.5915C21.0957 5.4965 21.0277 5.4415 20.9457 5.4415C20.8637 5.4415 20.7947 5.4965 20.7677 5.5915C20.1527 9.2555 20.2617 9.1325 16.4747 9.8845C16.3927 9.8985 16.3247 9.9535 16.3247 10.0485C16.3247 10.1585 16.3927 10.2125 16.4747 10.2265C20.2617 10.9785 20.1527 10.8555 20.7677 14.5195C20.7947 14.6155 20.8637 14.6695 20.9457 14.6695ZM10.9647 25.9495C4.5527 25.9495 0.6427 21.2735 0.6427 15.5035C0.6427 11.1975 3.1857 7.6015 6.4667 5.5915C5.9337 6.6305 5.6187 8.2985 5.6187 9.9665C5.6187 16.9535 9.9117 21.1095 16.7067 21.1095C18.3207 21.1095 19.8377 20.7945 20.8357 20.4125C19.1267 23.8165 15.3807 25.9495 10.9647 25.9495Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}