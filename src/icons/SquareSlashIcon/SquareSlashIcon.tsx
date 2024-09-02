import { IconProps } from "../../types"

export default function SquareSlashIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.136493183341738 29.105730941486666"
          className={className}
        >
          <path
            d="              M27.0188 28.7414C27.4978 29.2204 28.3038 29.2344 28.7828 28.7414C29.2478 28.2634 29.2608 27.4704 28.7828 26.9914L2.1358 0.3584C1.6438 -0.1196 0.8508 -0.1196 0.3588 0.3584C-0.1192 0.8374 -0.1192 1.6574 0.3588 2.1224ZM22.7668 1.0154H6.3878C6.1698 1.0154 5.9368 1.0284 5.7458 1.0424L10.5578 5.8684H22.0288C22.8628 5.8684 23.2728 6.2104 23.2728 7.1124V18.5564L28.0988 23.3824C28.1128 23.1914 28.1268 22.9724 28.1268 22.7674V6.3744C28.1268 2.9834 26.1578 1.0154 22.7668 1.0154ZM6.3878 28.1264H22.7668C22.9998 28.1264 23.2318 28.0994 23.4508 28.0854L18.6108 23.2734H7.1268C6.2788 23.2734 5.8688 22.9174 5.8688 22.0154V10.5584L1.0558 5.7324C1.0428 5.9504 1.0148 6.1554 1.0148 6.3744V22.7674C1.0148 26.1444 2.9978 28.1264 6.3878 28.1264Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.432392763592485 28.420449589684974"
          className={className}
        >
          <path
            d="              M26.4719 28.0873C26.9229 28.5243 27.6619 28.5383 28.0989 28.0873C28.5369 27.6363 28.5499 26.9113 28.0989 26.4603L1.9589 0.3333C1.5209 -0.1047 0.7829 -0.1177 0.3179 0.3333C-0.1061 0.7703 -0.1061 1.5363 0.3179 1.9603ZM22.4659 1.1533H5.9779C5.7729 1.1533 5.5819 1.1673 5.4039 1.1943L8.9039 4.6943C8.9859 4.6813 9.0679 4.6813 9.1499 4.6813H22.0699C23.1639 4.6813 23.7649 5.2273 23.7649 6.3903V19.2823C23.7649 19.3513 23.7519 19.4463 23.7519 19.5283L27.2519 23.0153C27.2789 22.8643 27.2929 22.6863 27.2929 22.4953V5.9523C27.2929 2.8493 25.5839 1.1533 22.4659 1.1533ZM5.9779 27.2943H22.4659C22.6719 27.2943 22.8769 27.2803 23.0679 27.2673L19.5539 23.7673C19.4859 23.7673 19.3899 23.7673 19.3079 23.7673H6.3609C5.2539 23.7673 4.6789 23.2333 4.6789 22.0713V9.1513C4.6789 9.0693 4.6789 8.9873 4.6789 8.9053L1.1789 5.4053C1.1659 5.5833 1.1519 5.7613 1.1519 5.9523V22.4953C1.1519 25.5993 2.8609 27.2943 5.9779 27.2943Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.804950768916832 28.784442402091738"
          className={className}
        >
          <path
            d="              M26.7663 28.4307C27.2313 28.8957 28.0103 28.9087 28.4613 28.4307C28.9123 27.9657 28.9263 27.2137 28.4613 26.7357L2.0613 0.3487C1.5823 -0.1163 0.8173 -0.1163 0.3383 0.3487C-0.1127 0.7997 -0.1127 1.5927 0.3383 2.0437ZM22.6233 1.0727H6.1903C5.9853 1.0727 5.7793 1.1007 5.5883 1.1147L9.7853 5.3117C9.8543 5.3117 9.9223 5.3117 9.9903 5.3117H22.0493C23.0063 5.3117 23.5123 5.7487 23.5123 6.7747V18.8057C23.5123 18.8737 23.5123 18.9557 23.4983 19.0107L27.7093 23.2077C27.7233 23.0307 27.7363 22.8387 27.7363 22.6337V6.1727C27.7363 2.9187 25.8913 1.0727 22.6233 1.0727ZM6.1903 27.7337H22.6233C22.8423 27.7337 23.0613 27.7197 23.2663 27.7057L19.0553 23.4947C19.0003 23.5087 18.9183 23.5087 18.8503 23.5087H6.7643C5.8073 23.5087 5.3153 23.0717 5.3153 22.0457V9.9877C5.3153 9.9187 5.3153 9.8367 5.3153 9.7817L1.1173 5.5847C1.1043 5.7767 1.0763 5.9677 1.0763 6.1727V22.6337C1.0763 25.8877 2.9363 27.7337 6.1903 27.7337Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.03271484375 27.027615155482692"
          className={className}
        >
          <path
            d="              M25.6382 26.7918C25.9522 27.1058 26.4862 27.1058 26.7862 26.7918C27.1152 26.4638 27.1152 25.9578 26.7862 25.6298L1.3982 0.2408C1.0832 -0.0732 0.5642 -0.0872 0.2362 0.2408C-0.0788 0.5418 -0.0788 1.0888 0.2362 1.3898ZM21.8512 1.1438H5.1582C4.8702 1.1438 4.6242 1.1708 4.3782 1.2388L6.0192 2.8798C6.1692 2.8528 6.3332 2.8388 6.4972 2.8388H21.8242C23.3272 2.8388 24.2022 3.6588 24.2022 5.2308V20.5298C24.2022 20.6938 24.1892 20.8578 24.1612 21.0218L25.8022 22.6488C25.8572 22.4308 25.8842 22.1848 25.8842 21.9108V5.1488C25.8842 2.5108 24.5312 1.1438 21.8512 1.1438ZM5.1582 25.9028H21.8512C22.1522 25.9028 22.4252 25.8758 22.6712 25.8208L21.0312 24.1808C20.8802 24.2078 20.7162 24.2078 20.5522 24.2078H5.1992C3.6542 24.2078 2.8202 23.4008 2.8202 21.8148V6.5028C2.8202 6.3388 2.8332 6.1608 2.8612 6.0108L1.2202 4.3838C1.1652 4.6028 1.1382 4.8488 1.1382 5.1488V21.9108C1.1382 24.5498 2.5052 25.9028 5.1582 25.9028Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.98291015625 27.9794921875"
          className={className}
        >
          <path
            d="              M26.1333 27.6618C26.5573 28.0858 27.2553 28.0858 27.6653 27.6618C28.0893 27.2238 28.0893 26.5408 27.6653 26.1168L1.8663 0.3178C1.4423 -0.1062 0.7453 -0.1062 0.3073 0.3178C-0.1027 0.7278 -0.1027 1.4528 0.3073 1.8628ZM22.2643 1.2478H5.7213C5.5303 1.2478 5.3663 1.2608 5.2023 1.2888L7.8543 3.9408C7.9363 3.9268 8.0463 3.9268 8.1413 3.9268H22.1143C23.3723 3.9268 24.0693 4.5838 24.0693 5.9098V19.8408C24.0693 19.9368 24.0693 20.0468 24.0693 20.1288L26.7213 22.7808C26.7353 22.6438 26.7493 22.4938 26.7493 22.3298V5.6908C26.7493 2.7648 25.2313 1.2478 22.2643 1.2478ZM5.7213 26.7728H22.2643C22.4693 26.7728 22.6473 26.7588 22.8253 26.7318L20.1733 24.0798C20.0773 24.0928 19.9813 24.0928 19.8853 24.0928H5.8723C4.6143 24.0928 3.9173 23.4228 3.9173 22.0968V8.1518C3.9173 8.0558 3.9173 7.9468 3.9303 7.8508L1.2783 5.1988C1.2513 5.3628 1.2373 5.5128 1.2373 5.6908V22.3298C1.2373 25.2558 2.7683 26.7728 5.7213 26.7728Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.72998046875 27.718038587405374"
          className={className}
        >
          <path
            d="              M25.9317 27.4107C26.3427 27.8207 27.0257 27.8207 27.4227 27.4107C27.8327 27.0007 27.8327 26.3307 27.4227 25.9207L1.8017 0.3127C1.3907 -0.0973 0.7207 -0.1113 0.2977 0.3127C-0.0993 0.7097 -0.0993 1.3927 0.2977 1.8027ZM22.1587 1.2967H5.5747C5.3967 1.2967 5.2327 1.3107 5.0827 1.3377L7.2567 3.5117C7.3517 3.4987 7.4617 3.4987 7.5707 3.4987H22.1317C23.4707 3.4987 24.2507 4.2227 24.2507 5.6447V20.1647C24.2507 20.2597 24.2507 20.3827 24.2367 20.4787L26.4107 22.6527C26.4377 22.5157 26.4517 22.3787 26.4517 22.2287V5.5357C26.4517 2.7187 25.0297 1.2967 22.1587 1.2967ZM5.5747 26.4667H22.1587C22.3497 26.4667 22.5137 26.4537 22.6917 26.4257L20.5177 24.2527C20.4227 24.2657 20.2997 24.2657 20.2037 24.2657H5.6017C4.2347 24.2657 3.4827 23.5417 3.4827 22.1197V7.5727C3.4827 7.4627 3.4827 7.3537 3.4967 7.2577L1.3227 5.0847C1.2957 5.2207 1.2817 5.3577 1.2817 5.5357V22.2287C1.2817 25.0587 2.7177 26.4667 5.5747 26.4667Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.18115234375 28.1640625"
          className={className}
        >
          <path
            d="              M26.2805 27.8361C26.7185 28.2731 27.4425 28.2731 27.8525 27.8361C28.2905 27.3981 28.2905 26.7011 27.8525 26.2641L1.9175 0.3281C1.4795 -0.1099 0.7695 -0.1099 0.3175 0.3281C-0.1055 0.7521 -0.1055 1.4761 0.3175 1.9001ZM22.3565 1.2031H5.8275C5.6495 1.2031 5.4725 1.2171 5.2945 1.2441L8.3155 4.2651C8.3975 4.2521 8.4935 4.2521 8.5895 4.2521H22.0975C23.2865 4.2521 23.9425 4.8531 23.9425 6.1111V19.5921C23.9425 19.6871 23.9425 19.7831 23.9295 19.8651L26.9505 22.8871C26.9775 22.7361 26.9915 22.5721 26.9915 22.4081V5.7971C26.9915 2.8031 25.3925 1.2031 22.3565 1.2031ZM5.8275 26.9881H22.3565C22.5615 26.9881 22.7535 26.9741 22.9315 26.9611L19.9095 23.9391C19.8275 23.9531 19.7315 23.9531 19.6365 23.9531H6.0875C4.8975 23.9531 4.2415 23.3381 4.2415 22.0801V8.5721C4.2415 8.4901 4.2555 8.3941 4.2555 8.2991L1.2335 5.2911C1.2205 5.4551 1.2065 5.6191 1.2065 5.7971V22.4081C1.2065 25.4021 2.8195 26.9881 5.8275 26.9881Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.110033801799503 26.120287708049506"
          className={className}
        >
          <path
            d="              M25.2452 25.967C25.4362 26.172 25.7642 26.172 25.9562 25.967C26.1752 25.761 26.1472 25.447 25.9562 25.256L0.8542 0.154C0.6772 -0.037 0.3762 -0.065 0.1432 0.154C-0.0478 0.345 -0.0478 0.674 0.1432 0.865ZM21.4582 0.961H4.6282C4.1902 0.961 3.8072 1.002 3.4522 1.111L4.3822 2.041C4.5872 1.986 4.8192 1.972 5.0792 1.972H21.4172C23.1392 1.972 24.1242 2.902 24.1242 4.693V21.017C24.1242 21.277 24.1102 21.509 24.0692 21.742L24.9992 22.644C25.0812 22.302 25.1492 21.92 25.1492 21.496V4.638C25.1492 2.259 23.8782 0.961 21.4582 0.961ZM4.6282 25.16H21.4582C21.8952 25.16 22.2922 25.105 22.6612 25.023L21.7312 24.093C21.4992 24.134 21.2662 24.148 21.0202 24.148H4.6692C2.8912 24.148 1.9622 23.218 1.9622 21.441V5.103C1.9622 4.843 1.9752 4.597 2.0162 4.365L1.1002 3.449C1.0052 3.804 0.9362 4.187 0.9362 4.638V21.496C0.9362 23.902 2.2082 25.16 4.6282 25.16Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.645251620428922 25.648692580124948"
          className={className}
        >
          <path
            d="              M25.0405 25.5464C25.1765 25.6824 25.3955 25.6824 25.5325 25.5464C25.6965 25.3954 25.6685 25.1904 25.5325 25.0544L0.5815 0.1024C0.4715 -0.0206 0.2665 -0.0476 0.1025 0.1024C-0.0345 0.2394 -0.0345 0.4584 0.1025 0.5814ZM21.2525 0.8684H4.3545C3.8485 0.8684 3.3835 0.9234 2.9735 1.0464L3.5475 1.6064C3.7935 1.5524 4.0535 1.5384 4.3545 1.5384H21.2255C23.0435 1.5384 24.0965 2.5094 24.0965 4.4094V21.2804C24.0965 21.5814 24.0835 21.8414 24.0285 22.1004L24.5885 22.6474C24.6985 22.2374 24.7665 21.7864 24.7665 21.2664V4.3824C24.7665 2.1124 23.5495 0.8684 21.2525 0.8684ZM4.3545 24.7804H21.2525C21.7725 24.7804 22.2235 24.7124 22.6475 24.6024L22.0865 24.0424C21.8135 24.0974 21.5535 24.1104 21.2525 24.1104H4.3955C2.4955 24.1104 1.5105 23.1264 1.5105 21.2394V4.3684C1.5105 4.0674 1.5385 3.7944 1.5795 3.5204L1.0455 2.9734C0.9095 3.3844 0.8405 3.8484 0.8405 4.3824V21.2664C0.8405 23.5634 2.0575 24.7804 4.3545 24.7804Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}